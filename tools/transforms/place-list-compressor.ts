import _ from "lodash";
import moment from "moment";
import { Transform, TransformCallback, TransformOptions } from "stream";
import {
    belfioreToInt,
    DataSourceCodeEnum,
    DEFAULT_CREATION_DATE,
    ICompressedDataset,
    IMappedLocationType,
    IMappedLocationTypeCity,
    IMappedLocationTypeCountry,
    IPartialCompressedDataset,
    SourceDataCode,
} from "../utils";

export const compressBelfioreCode =
    (belfioreCode: string): string => belfioreToInt(belfioreCode).toString(32).padStart(3, "0");

export const nameNormalizer = (name: string): string => name === name.toUpperCase()
    ? _.startCase(_.lowerCase(name)) : name;

export const compressDataSource = (dataSource: string): number => DataSourceCodeEnum[dataSource as SourceDataCode];

export const provinceOrCountryMapper = (entry: IMappedLocationType): string =>
    (entry as IMappedLocationTypeCity).province
    || (entry as IMappedLocationTypeCountry).iso3166alpha2;

export const compressDate = (date?: string): string => {
    if (!date) {
        return "";
    }
    return moment(date).diff(DEFAULT_CREATION_DATE, "days").toString(32).padStart(4, "0");
};

export const compressDataMapper = (entry: IMappedLocationType): IPartialCompressedDataset => ({
        belfioreCode: compressBelfioreCode(entry.belfioreCode),
        creationDate: compressDate(entry.creationDate),
        dataSource: compressDataSource(entry.dataSource),
        expirationDate: compressDate(entry.expirationDate),
        name: nameNormalizer(entry.name),
        provinceOrCountry: provinceOrCountryMapper(entry),
    });

export const dataCompressor = (entries: IMappedLocationType[]): ICompressedDataset[] => {
    const COMPRESSED_DATASET_MODEL = {
        belfioreCode: "",
        creationDate: "",
        dataSource: 0,
        expirationDate: "",
        name: "",
        provinceOrCountry: "",
    };
    const ced = { ...COMPRESSED_DATASET_MODEL };
    const cd = { ...COMPRESSED_DATASET_MODEL };
    const ed = { ...COMPRESSED_DATASET_MODEL };
    const nod = { ...COMPRESSED_DATASET_MODEL };

    for (const entry of entries) {
        const compressedEntry = compressDataMapper(entry);
        const {creationDate, expirationDate} = compressedEntry;
        let targetDataset;
        if (creationDate && expirationDate) {
            targetDataset = ced;
        } else if (creationDate) {
            targetDataset = cd;
        } else if (expirationDate) {
            targetDataset = ed;
        } else {
            targetDataset = nod;
        }

        targetDataset.belfioreCode += compressedEntry.belfioreCode;
        targetDataset.creationDate += compressedEntry.creationDate;
        targetDataset.expirationDate += compressedEntry.expirationDate;
        targetDataset.name += "|" + compressedEntry.name;
        targetDataset.provinceOrCountry += compressedEntry.provinceOrCountry?.length === 2 ?
            compressedEntry.provinceOrCountry : "  ";
        // tslint:disable-next-line: no-bitwise
        targetDataset.dataSource = (targetDataset.dataSource << 2) + compressedEntry.dataSource;
    }

    return [ced, cd, ed, nod]
        .filter((subset) => !!subset.belfioreCode)
        .sort((a, b) => a.belfioreCode.length - b.belfioreCode.length)
        .map((compressedEntry) => ({
            ...compressedEntry,
            creationDate: compressedEntry.creationDate || undefined,
            dataSource: compressedEntry.dataSource.toString(32),
            expirationDate: compressedEntry.expirationDate || undefined,
            name: compressedEntry.name.substr(1),
        }));
};

export class PlaceListCompressor extends Transform {
    constructor(ops?: TransformOptions) {
        super({
            ...(ops || {}),
            objectMode: true,
        });
    }
    public _transform(entryList: IMappedLocationType[], encoding: string, callback: TransformCallback) {
        if (entryList && Array.isArray(entryList)) {
            return callback(null, dataCompressor(entryList));
        }
        callback();
    }
}
