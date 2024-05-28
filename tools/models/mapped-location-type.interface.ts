import { DataSourceCodeEnum } from "./data-source-code.enum";

export interface IRawLocationData {
	belfioreCode: string;
	name: string;
	dataSource?: string;
	creationDate?: string;
	expirationDate?: string;
	provinceCode?: string;
	iso3166alpha2?: string;
}

export interface IMappedLocationTypeCity extends IRawLocationData {
	dataSource: keyof typeof DataSourceCodeEnum;
	provinceCode: string;
	iso3166alpha2?: never;
}

export interface IMappedLocationTypeCountry extends IRawLocationData {
	dataSource: keyof typeof DataSourceCodeEnum;
	provinceCode?: never;
	iso3166alpha2: string;
}

export type IMappedLocationType =
	| IMappedLocationTypeCity
	| IMappedLocationTypeCountry;
