import _ from "lodash";
import moment from "moment";
import { Transform, TransformCallback, TransformOptions } from "stream";
import {
	belfioreToInt,
	DEFAULT_CREATION_DATE,
	ICompressedDataset,
	IPartialCompressedDataset,
} from "../utils";
import { DataSourceCodeEnum } from "../models/data-source-code.enum";
import type { IMappedLocationType } from "../models/mapped-location-type.interface";

export const compressBelfioreCode = (belfioreCode: string): string =>
	belfioreToInt(belfioreCode).toString(32).padStart(3, "0");

export const compressDataSource = (
	dataSource: keyof typeof DataSourceCodeEnum
): number => {
	if (!(dataSource in DataSourceCodeEnum)) {
		console.warn(`Missing Data Source: ${dataSource}`);
	}
	return DataSourceCodeEnum[dataSource];
};

export const compressDate = (date?: string): string => {
	if (
		!date ||
		moment(date).isAfter() ||
		moment(date).isBefore(DEFAULT_CREATION_DATE)
	) {
		return "";
	}
	return moment(date)
		.diff(DEFAULT_CREATION_DATE, "days")
		.toString(32)
		.padStart(4, "0");
};

export const compressDataMapper = (
	entry: IMappedLocationType
): IPartialCompressedDataset => ({
	belfioreCode: compressBelfioreCode(entry.belfioreCode),
	creationDate: compressDate(entry.creationDate),
	dataSource: compressDataSource(entry.dataSource),
	expirationDate: compressDate(entry.expirationDate),
	name: entry.name as string,
	provinceOrCountry: (entry.provinceCode || entry.iso3166alpha2) as string,
});

export const dataCompressor = (
	entries: IMappedLocationType[]
): ICompressedDataset[] => {
	const COMPRESSED_DATASET_MODEL = {
		belfioreCode: "",
		creationDate: "",
		dataSource: 0,
		expirationDate: "",
		name: "",
		provinceOrCountry: "",
	};
	const creationExpirationDateMap = { ...COMPRESSED_DATASET_MODEL };
	const creationDateMap = { ...COMPRESSED_DATASET_MODEL };
	const expirationDateMap = { ...COMPRESSED_DATASET_MODEL };
	const noDateMap = { ...COMPRESSED_DATASET_MODEL };

	for (const entry of entries) {
		const compressedEntry = compressDataMapper(entry);
		const { creationDate, expirationDate } = compressedEntry;
		let targetDataset;
		if (creationDate && expirationDate) {
			targetDataset = creationExpirationDateMap;
		} else if (creationDate) {
			targetDataset = creationDateMap;
		} else if (expirationDate) {
			targetDataset = expirationDateMap;
		} else {
			targetDataset = noDateMap;
		}

		targetDataset.belfioreCode += compressedEntry.belfioreCode;
		targetDataset.creationDate += compressedEntry.creationDate;
		targetDataset.expirationDate += compressedEntry.expirationDate;
		targetDataset.name += "|" + compressedEntry.name;
		targetDataset.provinceOrCountry +=
			compressedEntry.provinceOrCountry?.length === 2
				? compressedEntry.provinceOrCountry
				: "  ";
		// tslint:disable-next-line: no-bitwise
		targetDataset.dataSource =
			(targetDataset.dataSource << 2) + compressedEntry.dataSource;
	}

	return [
		creationExpirationDateMap,
		creationDateMap,
		expirationDateMap,
		noDateMap,
	]
		.filter((subset) => !!subset.belfioreCode)
		.sort((a, b) => a.belfioreCode.length - b.belfioreCode.length)
		.map((compressedEntry) => ({
			...compressedEntry,
			creationDate: compressedEntry.creationDate || undefined,
			dataSource: compressedEntry.dataSource.toString(32),
			expirationDate: compressedEntry.expirationDate || undefined,
			name: compressedEntry.name.substring(1),
		}));
};

export class PlaceListCompressor extends Transform {
	constructor(ops?: TransformOptions) {
		super({
			...(ops || {}),
			objectMode: true,
		});
	}
	public _transform(
		entryList: IMappedLocationType[],
		encoding: string,
		callback: TransformCallback
	) {
		if (entryList && Array.isArray(entryList)) {
			return callback(null, dataCompressor(entryList));
		}
		callback();
	}
}
