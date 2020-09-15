import _ from "lodash";

export const DEFAULT_CREATION_DATE = "1861-01-01";

export type SourceDataCode = "AE" | "I" | "MI";

export interface IRawLocationData {
    belfioreCode: string;
    name: string;
    dataSource?: string;
    creationDate?: string;
    expirationDate?: string;
    province?: string;
    iso3166alpha2?: string;
}

export interface IMappedLocationTypeCity extends IRawLocationData{
    dataSource: SourceDataCode;
    province: string;
    iso3166alpha2?: undefined;
}

export interface IMappedLocationTypeCountry extends IRawLocationData{
    dataSource: SourceDataCode;
    province?: undefined;
    iso3166alpha2: string;
}

export type IMappedLocationType = IMappedLocationTypeCity | IMappedLocationTypeCountry;


export interface IPartialCompressedDataset {
    belfioreCode: string;
    name: string;
    dataSource: number;
    creationDate: string;
    expirationDate: string;
    provinceOrCountry: string;
}

export interface ICompressedDataset {
    belfioreCode: string;
    name: string;
    dataSource: string;
    creationDate?: string | undefined;
    expirationDate?: string | undefined;
    provinceOrCountry: string;
}

export const cleanField = (value: any) => {
    if (typeof value === "number" && isNaN(value)) {
        return;
    }
    if (typeof value !== "string") {
        return value;
    }
    const trimmed = (value || "").trim();
    if ((/^(?:n\.?\s*d\.?|-)$/i).test(value)) {
        return;
    }
    return trimmed || undefined;
};

export function cleanObject<T>(obj: T): T {
    const out: any = {};
    Object.entries(obj).forEach(([key, value]) => {
        const cleanValue = cleanField(value);
        if (cleanValue !== undefined && cleanValue !== null) {
            out[key] = cleanValue;
        }
    });
    return out;
};

export const belfioreToInt =
    (code: string): number => (code.charCodeAt(0) - 65) * 10 ** 3 + parseInt(code.substr(1), 10);

export const errorHandler = (err: NodeJS.ErrnoException | null): void => {
    if (err) {
        // tslint:disable-next-line: no-console
        console.error(err);
    }
};

export type CsvDataDelimiter = "," | ";";
export type LicenseId = "cc-by-3.0" | "cc-by-4.0";

export interface IAssetGeneratorConfigResource {
    name?: string;
    uri: string | string[];
    defaultSourceCode: SourceDataCode;
    delimiter: CsvDataDelimiter;
}

export interface IAssetGeneratorConfigLicense {
    name: string;
    url: string;
    license: LicenseId;
    licenseUrl: string;
    termsAndConditions: string;
    authors?: string;
}

export interface IAssetGeneratorConfig {
    resources: IAssetGeneratorConfigResource[];
    licenses: {
        [id in SourceDataCode]: IAssetGeneratorConfigLicense;
    };
    licenseFiles: {
        [id in LicenseId]: string;
    };
}

export enum DataSourceCodeEnum {
    MI = 0,
    I = 1,
    AE = 2,
}
