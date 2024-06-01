import _ from "lodash";
import moment from "moment";
import { Transform, TransformCallback, TransformOptions } from "stream";
import { cleanObject, toUtf8 } from "../utils";
import type { IAssetGeneratorConfigResource } from "../models/asset-generator-config-resource.interface";

export const clearValue = (value?: string) => {
	if (!!value && typeof value !== "string") {
		return value;
	}
	if (!value || /^\s*(?:n\.?\s*d\.?|-)\s*$/i.test(value)) {
		return undefined;
	}
	return value.trim();
};

const toFirstLetterUpperCase = (str: string) => {
	if (typeof str !== "string" || !str) {
		return undefined;
	}
	return (
		str
			.toLowerCase()
			.replace(/(?:^|(?<=\s))[a-z]/gi, (c) => c?.toUpperCase()) || undefined
	);
};

const TYPE_STRATEGY_MAP = {
	text: (value: any) => toUtf8(value),
	name: (value: any) =>
		toUtf8(
			[value.toUpperCase(), value.toLowerCase()].includes(value)
				? toFirstLetterUpperCase(value)
				: value
		),
	number: (value: any) => {
		const parsedValue =
			typeof value === "number" ? value : parseFloat(`${value}`);

		return isNaN(parsedValue) ? undefined : parsedValue;
	},
	date_start: (value: any) =>
		value && moment(value, "YYYY-MM-DD").startOf("day").toDate(),
	date_end: (value: any) =>
		value && moment(value, "YYYY-MM-DD").endOf("day").toDate(),
	year_start: (value: any) =>
		value && moment(value, "YYYY").startOf("year").toDate(),
	year_end: (value: any) =>
		value && moment(value, "YYYY").endOf("year").toDate(),
	bool: (value: any) =>
		value === 1 || /^(?:1|y(?:es)?|s[iì]?)$/i.test(value) || undefined,
	license: (value: any) => value,
};

export interface IPlaceDataNormalizerOptions extends TransformOptions {
	config: Pick<IAssetGeneratorConfigResource, "defaultSourceCode" | "columns">;
}

export class DataNormalizer extends Transform {
	protected config?: IPlaceDataNormalizerOptions["config"];
	constructor(opts?: IPlaceDataNormalizerOptions) {
		super(opts);
		this.config = opts?.config;
	}

	public _transform(chunk: any, encoding: string, callback: TransformCallback) {
		let element: { [key: string]: unknown };
		if (this.readableObjectMode) {
			element = JSON.parse(toUtf8(Buffer.from(JSON.stringify(chunk))));
		} else {
			try {
				element = JSON.parse(toUtf8(chunk));
			} catch (err) {
				return callback(err as Error);
			}
		}

		if (!element) {
			return callback();
		}

		const mappedEntry = cleanObject(
			Object.entries(this.config?.columns || {}).reduce(
				(aggr, [colName, { field, type }]) => ({
					...aggr,
					[field]:
						aggr[field] ||
						(TYPE_STRATEGY_MAP[type] || TYPE_STRATEGY_MAP.text)(
							clearValue(_.get(element, colName) as string)
						),
				}),
				{} as { [key: string]: unknown }
			)
		);

		if (!mappedEntry) {
			return callback();
		}

		const normalizedChunk = {
			...mappedEntry,
			dataSource: mappedEntry?.dataSource || this.config?.defaultSourceCode,
		};

		callback(null, normalizedChunk);
	}
}
