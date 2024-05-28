import _ from "lodash";
import moment from "moment";
import { Transform, TransformCallback } from "stream";
import {
	belfioreToInt,
	cleanObject,
	DEFAULT_CREATION_DATE,
	toUtf8,
} from "../utils";
import { IMappedLocationType } from "../models/mapped-location-type.interface";

const MERGE_MAP: {
	[key: string]: (valS: string | null, valD: string | null) => string | null;
} = {
	active: (valS: string | null, valD: string | null): string | null =>
		valS || valD,
	creationDate: (valS: string | null, valD: string | null): string | null =>
		valS && valD ? moment.min(moment(valD), moment(valS)).toISOString() : null,
	expirationDate: (valS: string | null, valD: string | null): string | null =>
		valD && valS ? moment.max(moment(valD), moment(valS)).toISOString() : null,
};

export const merge = <T extends { [key: string]: any }>(...entries: T[]) => {
	if (entries.length < 2) {
		return entries[0];
	}
	const sortedEntries = entries.sort((a, b) =>
		moment(b.creationDate || DEFAULT_CREATION_DATE).diff(
			moment(a.creationDate || DEFAULT_CREATION_DATE),
			"day"
		)
	);

	const merged = sortedEntries.reduce((aggr, entry) =>
		_.mergeWith(
			aggr,
			entry,
			(valD: string | null, valS: string | null, key: string) => {
				const customizer = MERGE_MAP[key];
				if (customizer) {
					return customizer(valS, valD);
				}
				return valD;
			}
		)
	);

	return cleanObject(merged);
};

export const deDupeList = (dataList: IMappedLocationType[]) =>
	Object.entries(_.groupBy(dataList, "belfioreCode"))
		.map(([belfioreCode, entries]) => ({ ...merge(...entries), belfioreCode }))
		.sort(
			(a, b) => belfioreToInt(a.belfioreCode) - belfioreToInt(b.belfioreCode)
		);

export class PlaceListDeDupe extends Transform {
	protected storage: any[] = [];
	public _transform(chunk: any, encoding: string, callback: TransformCallback) {
		let element;
		if (this.readableObjectMode) {
			element = chunk;
		} else {
			try {
				element = JSON.parse(chunk);
			} catch (err) {
				return callback(err as Error);
			}
		}
		if (element?.belfioreCode) {
			this.storage.push(element);
		}
		callback();
	}

	public _flush(callback: TransformCallback) {
		let ddl;
		try {
			ddl = deDupeList(this.storage);
		} catch (err) {
			this.storage.length = 0;
			return callback(err as Error);
		}
		this.push(ddl);
		this.storage.length = 0;
		callback();
	}
}
