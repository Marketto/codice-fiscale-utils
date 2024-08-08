import {
	BelfiorePlace,
	IBelfioreConnector,
} from "@marketto/belfiore-connector";
export { BelfiorePlace } from "@marketto/belfiore-connector";
import { Moment } from "moment";

type DateDay =
	| 1
	| 2
	| 3
	| 4
	| 5
	| 6
	| 7
	| 8
	| 9
	| 10
	| 11
	| 12
	| 13
	| 14
	| 15
	| 16
	| 17
	| 18
	| 19
	| 20
	| 21
	| 22
	| 23
	| 24
	| 25
	| 26
	| 27
	| 28
	| 29
	| 30
	| 31;

declare const YEAR: string;
declare const MONTH: string;
declare const DAY: string;
declare const LEAP_MONTH: string;
declare const DAYS_30_MONTHS: string;
declare const DAYS_31_MONTHS: string;
declare const MONTH_DAY: string;
declare const HOURS: string;
declare const MINUTES: string;
declare const SECONDS: string;
declare const MILLISECONDS: string;
declare const TIMEZONE: string;
declare const TIME: string;
declare const ISO8601_SHORT_DATE: string;
declare const ISO8601_DATE_TIME: string;

declare const dateMatcher_const_DAY: typeof DAY;
declare const dateMatcher_const_DAYS_30_MONTHS: typeof DAYS_30_MONTHS;
declare const dateMatcher_const_DAYS_31_MONTHS: typeof DAYS_31_MONTHS;
declare const dateMatcher_const_HOURS: typeof HOURS;
declare const dateMatcher_const_ISO8601_DATE_TIME: typeof ISO8601_DATE_TIME;
declare const dateMatcher_const_ISO8601_SHORT_DATE: typeof ISO8601_SHORT_DATE;
declare const dateMatcher_const_LEAP_MONTH: typeof LEAP_MONTH;
declare const dateMatcher_const_MILLISECONDS: typeof MILLISECONDS;
declare const dateMatcher_const_MINUTES: typeof MINUTES;
declare const dateMatcher_const_MONTH: typeof MONTH;
declare const dateMatcher_const_MONTH_DAY: typeof MONTH_DAY;
declare const dateMatcher_const_SECONDS: typeof SECONDS;
declare const dateMatcher_const_TIME: typeof TIME;
declare const dateMatcher_const_TIMEZONE: typeof TIMEZONE;
declare const dateMatcher_const_YEAR: typeof YEAR;
declare namespace dateMatcher_const {
	export {
		dateMatcher_const_DAY as DAY,
		dateMatcher_const_DAYS_30_MONTHS as DAYS_30_MONTHS,
		dateMatcher_const_DAYS_31_MONTHS as DAYS_31_MONTHS,
		dateMatcher_const_HOURS as HOURS,
		dateMatcher_const_ISO8601_DATE_TIME as ISO8601_DATE_TIME,
		dateMatcher_const_ISO8601_SHORT_DATE as ISO8601_SHORT_DATE,
		dateMatcher_const_LEAP_MONTH as LEAP_MONTH,
		dateMatcher_const_MILLISECONDS as MILLISECONDS,
		dateMatcher_const_MINUTES as MINUTES,
		dateMatcher_const_MONTH as MONTH,
		dateMatcher_const_MONTH_DAY as MONTH_DAY,
		dateMatcher_const_SECONDS as SECONDS,
		dateMatcher_const_TIME as TIME,
		dateMatcher_const_TIMEZONE as TIMEZONE,
		dateMatcher_const_YEAR as YEAR,
	};
}

type DateMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

type MultiFormatDate = string | Date | Moment | number[];

declare class DateUtils {
	/**
	 * Parse a Dated and Gender information to create Date/Gender CF part
	 * @param date Date or Moment instance, ISO8601 date string or array of numbers [year, month, day]
	 * @returns Parsed Date or null if not valid
	 */
	static parseDate(date?: MultiFormatDate | null): Date | null;
	static ymdToDate(
		year?: number | null,
		month?: DateMonth | null,
		day?: DateDay | null
	): Date | null;
}

type Genders = "M" | "F";

interface IPersonalInfo {
	firstName?: string;
	lastName?: string;
	date?: Date;
	day?: DateDay;
	month?: DateMonth;
	year?: number;
	gender?: Genders;
	place?: BelfiorePlace;
	omocodeId?: number;
}

interface IMismatchVerboseErrors {
	firstName?: string;
	lastName?: string;
	date?: string;
	gender?: string;
	place?: string;
	crc?: string;
}

declare class CFMismatchValidator {
	private readonly codiceFiscale;
	private pattern;
	private parser;
	constructor(belfioreConnector: IBelfioreConnector, codiceFiscale: string);
	private get hasLastName();
	private get hasFirstName();
	private get hasBirthYear();
	private get hasBirthDate();
	private get hasGender();
	private get hasBirthPlace();
	private get hasCRC();
	matchPersonalInfo(
		personalInfo: Omit<IPersonalInfo, "place"> & {
			place?: string | BelfiorePlace;
		}
	): Promise<boolean>;
	mismatchPersonalInfo(
		personalInfo: Omit<IPersonalInfo, "place"> & {
			place?: string | BelfiorePlace;
		}
	): Promise<boolean>;
	matchLastName(lastName?: string): boolean;
	mismatchLastName(lastName?: string): boolean;
	matchFirstName(firstName: string): boolean;
	mismatchFirstName(firstName: string): boolean;
	matchBirthDate(birthDate: MultiFormatDate): boolean;
	mismatchBirthDate(birthDate: MultiFormatDate): boolean;
	matchGender(gender: Genders | string): boolean;
	mismatchGender(gender: Genders | string): boolean;
	/**
	 * @param birthPlace BirthPlace, place name or BelfioreCode
	 */
	matchBirthPlace(birthPlace: BelfiorePlace | string): Promise<boolean>;
	/**
	 * @param birthPlace BirthPlace, place name or BelfioreCode
	 */
	mismatchBirthPlace(birthPlace: BelfiorePlace | string): Promise<boolean>;
	/**
	 * Check the given cf validity by form, birth date/place and digit code
	 * @param codiceFiscale Complete CF to parse
	 * @return Verbose errors
	 */
	get errors(): Promise<IMismatchVerboseErrors | null>;
	/**
	 * Check the given cf validity by form, birth date/place and digit code
	 * @return Generic or specific regular expression
	 */
	get valid(): Promise<boolean>;
	get invalid(): Promise<boolean>;
}

interface IGeneratorWrapper<T = unknown, TReturn = any, TNext = unknown>
	extends Generator {
	[Symbol.iterator]: () => Generator;
}

type CodiceFiscaleCRC =
	| "A"
	| "B"
	| "C"
	| "D"
	| "E"
	| "F"
	| "G"
	| "H"
	| "I"
	| "J"
	| "K"
	| "L"
	| "M"
	| "N"
	| "O"
	| "P"
	| "Q"
	| "R"
	| "S"
	| "T"
	| "U"
	| "V"
	| "W"
	| "X"
	| "Y"
	| "Z";

declare class CheckDigitizer {
	/**
	 * Evaluate given partial CF to produce last check digit character
	 * @param codiceFiscale Partial or complete Fiscal Code to evaluate to produce last character
	 * @returns 16th CF char
	 */
	static checkDigit(codiceFiscale: string): CodiceFiscaleCRC | null;
	static evaluateChar(partialCF?: string): IGeneratorWrapper<number, 0, void>;
	private static CHAR_OFFSET;
	private static CRC_MOD;
	/**
	 * Partial FiscalCode Evaluator
	 * @param Partial Fiscal Code to evaluate
	 * @yields character value odd/even
	 */
	private static evaluateCharGenerator;
}

declare class Gender {
	static getDay(genderDay: number): DateDay | null;
	static getGender(genderDay: number): Genders | null;
	static genderizeDay(day: number, gender: Genders): number;
	static toArray(): Genders[];
	private static MAX_MONTH_DAY;
}

declare class Parser {
	private readonly belfioreConnector;
	constructor(belfioreConnector: IBelfioreConnector);
	/**
	 * Default omocode bitmap
	 */
	OMOCODE_BITMAP: number;
	/**
	 * Convert omocode CF into plain one
	 * @param codiceFiscale Partial or complete Omocode/Regular CF to parse, starting from LastName
	 * @returns Regular CF w/o omocodes chars
	 */
	cfDeomocode(codiceFiscale: string): string;
	cfOmocode(codiceFiscale: string, omocodeId: number): string;
	cfOmocodeId(codiceFiscale: string): number;
	/**
	 * Parse lastName information
	 * @param codiceFiscale Partial or complete CF to parse
	 * @returns Partial/possible lastName
	 */
	cfToLastName(codiceFiscale: string): string | null;
	/**
	 * Parse firstName information
	 * @param codiceFiscale Partial or complete CF to parse
	 * @returns Partial/possible firstName
	 */
	cfToFirstName(codiceFiscale: string): string | null;
	/**
	 * Parse gender information
	 * @param codiceFiscale Partial or complete CF to parse
	 * @returns Male or female
	 */
	cfToGender(codiceFiscale: string): Genders | null;
	/**
	 * Parse birth year information
	 * @param codiceFiscale Partial or complete CF to parse
	 * @returns Birth Year (4 digits)
	 */
	cfToBirthYear(codiceFiscale: string): number | null;
	/**
	 * Parse birth month information
	 * @param codiceFiscale Partial or complete CF to parse
	 * @returns Birth Month (0...11 - Date notation)
	 */
	cfToBirthMonth(codiceFiscale: string): DateMonth | null;
	/**
	 * Parse birth day information
	 * @param codiceFiscale Partial or complete CF to parse
	 * @returns Birth day (1..31)
	 */
	cfToBirthDay(codiceFiscale: string): DateDay | null;
	/**
	 * Parse birth date information
	 * @param codiceFiscale Partial or complete CF to parse
	 * @returns Birth Date
	 */
	cfToBirthDate(codiceFiscale: string): Date | null;
	/**
	 * Parse birth place information
	 * @param codiceFiscale Partial or complete CF to parse
	 * @param checkBirthDateConsistency Ensure birthday is between creation and expiran date of the cf city or country, default value: true
	 * @returns Birth place
	 */
	cfToBirthPlace(
		codiceFiscale: string,
		checkBirthDateConsistency?: boolean
	): Promise<BelfiorePlace | null>;
	/**
	 * @param fiscalCode 16 character Codice Fiscale to decode
	 * @returns Decoded CF Info
	 */
	cfDecode(fiscalCode: string): Promise<IPersonalInfo>;
	/**
	 * Parse lastName to cf part
	 * @param lastName Partial or complete CF to parse
	 * @returns partial cf
	 */
	lastNameToCf(lastName?: string | null): string | null;
	/**
	 * Parse firstName to cf part
	 * @param firstName Partial or complete CF to parse
	 * @returns partial cf
	 */
	firstNameToCf(firstName?: string | null): string | null;
	/**
	 * Parse year to cf part
	 * @param year Birth year 2 or 4 digit string, number above 19XX or below 100
	 * @returns partial cf
	 */
	yearToCf(year: string | number): string | null;
	/**
	 * Parse month information
	 * @param month Month number 0..11
	 * @returns Birth Month CF code
	 */
	monthToCf(month: DateMonth | number): string | null;
	/**
	 * Parse day information
	 * @param day Day number 1..31
	 * @param gender Gender enum value
	 * @returns Birth Day CF code
	 */
	dayGenderToCf(day: DateDay | number, gender: Genders): string | null;
	/**
	 * Parse Year, Month, Day to Dated
	 * @param year 4 digits Year
	 * @param month 1 or 2 digits Month 0..11
	 * @param day 1,2 digits Day 1..31
	 * @returns Date or null if provided year/month/day are not valid
	 */
	yearMonthDayToDate(
		year: number | null | undefined,
		month?: DateMonth | null | undefined,
		day?: DateDay | null | undefined
	): Date | null;
	/**
	 * Parse Place information to return city or country details
	 * @param place Belfiore place instance, belfiore code or city/country name
	 * @returns BelfiorePlace instance with the target city or country details
	 */
	parsePlace(place: BelfiorePlace | string): Promise<BelfiorePlace | null>;
	/**
	 * Parse Date and Gender information to create Date/Gender CF part
	 * @param date Date or Moment instance, ISO8601 date string or array of numbers [year, month, day]
	 * @param gender Gender enum value
	 * @returns Birth date and Gender CF code
	 */
	dateGenderToCf(date: MultiFormatDate, gender: Genders): string | null;
	/**
	 * Parse place name and province to Belfiore code
	 * @param cityOrCountryName City or Country name
	 * @param provinceId Province code for cities
	 * @returns Matching place belfiore code, if only once is matching criteria
	 */
	/**
	 * Parse a Date and Gender information to create Date/Gender CF part
	 * @param birthDate Date or Moment instance, ISO8601 date string or array of numbers [year, month, day]
	 * @param cityOrCountryName City or Country name
	 * @param provinceId Province code for cities
	 * @returns Matching place belfiore code, if only once is matching criteria
	 */
	placeToCf(
		cityOrCountryName: string,
		provinceId?: string
	): Promise<string | null>;
	placeToCf(
		birthDate: MultiFormatDate,
		cityOrCountryName: string,
		provinceId?: string
	): Promise<string | null>;
	/**
	 * Generates full CF
	 * @returns Complete CF
	 */
	encodeCf({
		lastName,
		firstName,
		year,
		month,
		day,
		date,
		gender,
		place,
		omocodeId,
	}: Omit<IPersonalInfo, "place"> & {
		place?: BelfiorePlace | string | undefined;
	}): Promise<string | null>;
	private JOLLY_CHAR;
	private checkBitmap;
	private charOmocode;
	private charExtractor;
	/**
	 * Convert omocode full or chunk CF into plain one
	 * @param partialCodiceFiscale Partial or complete Omocode/Regular CF to parse
	 * @param offset starting point of the given chunk in the 16 char CF
	 * @returns Regular version w/o omocodes chars of the given chunk
	 */
	private partialCfDeomocode;
	private appyCaseToChar;
}

declare class Pattern {
	private readonly belfioreConnector;
	private parser;
	constructor(belfioreConnector: IBelfioreConnector);
	/**
	 * Validation regexp for the given lastName or generic
	 * @param lastName Optional lastName to generate validation regexp
	 * @return CF Surname matcher
	 * @throw INVALID_SURNAME
	 */
	cfLastName(lastName?: string): RegExp;
	/**
	 * Validation regexp for the given name or generic
	 * @param name Optional name to generate validation regexp
	 * @return CF name matcher
	 * @throw INVALID_NAME
	 */
	cfFirstName(name?: string): RegExp;
	/**
	 * Validation regexp for the given year or generic
	 * @param year Optional year to generate validation regexp
	 * @return CF year matcher
	 */
	cfYear(year?: number): RegExp;
	/**
	 * Validation regexp for the given month or generic
	 * @param month Optional month to generate validation regexp
	 * @return CF month matcher
	 */
	cfMonth(month?: DateMonth): RegExp;
	/**
	 * Validation regexp for the given day or generic
	 * @param day Optional day to generate validation regexp
	 * @return CF day matcher
	 */
	cfDay(day?: DateDay): RegExp;
	/**
	 * Validation regexp for the given year or generic
	 * @param day Optional day to generate validation regexp
	 * @param gender Gender @see Genders
	 * @return CF day and gender matcher
	 */
	cfDayGender(day?: DateDay, gender?: Genders): RegExp;
	/**
	 * Validation regexp for the given year or generic
	 * @param date Optional date to generate validation regexp
	 * @param gender @see Genders
	 * @return CF date and gender matcher
	 */
	cfDateGender(date?: MultiFormatDate | null, gender?: Genders | null): RegExp;
	/**
	 * @param placeName Optional place name to generate validation regexp
	 * @return CF place matcher
	 */
	/**
	 * @param date Optional date to generate validation regexp
	 * @param placeName Optional place name to generate validation regexp
	 * @return CF place matcher
	 */
	cfPlace(placeName?: string | null): Promise<RegExp>;
	cfPlace(
		birthDate?: MultiFormatDate | null,
		placeName?: string | null
	): Promise<RegExp>;
	/**
	 * Generates full CF validator based on given optional input or generic
	 * @param personalInfo Input Object
	 * @return CodiceFiscale matcher
	 */
	codiceFiscale(
		personalInfo?: Omit<IPersonalInfo, "place"> & {
			place?: BelfiorePlace | string | undefined;
		}
	): Promise<RegExp>;
	private LETTER_SET;
	private SEPARATOR_SET;
	/**
	 * Returns lastName validator based on given cf or generic
	 * @param codiceFiscale Partial or complete CF to parse
	 * @return Generic or specific regular expression
	 */
	lastName(codiceFiscale?: string): RegExp;
	/**
	 * Returns name validator based on given cf or generic
	 * @param codiceFiscale Partial or complete CF to parse
	 * @return Generic or specific regular expression
	 */
	firstName(codiceFiscale?: string): RegExp;
	/**
	 * Returns iso8601 date validator based on given cf or generic
	 * @param codiceFiscale Partial or complete CF to parse
	 * @return Generic or specific regular expression
	 */
	date(codiceFiscale?: string): RegExp;
	/**
	 * Returns gender validator based on given cf or generic
	 * @param codiceFiscale Partial or complete CF to parse
	 * @return Generic or specific regular expression
	 */
	gender(codiceFiscale?: string): RegExp;
	/**
	 * Returns place validator based on given cf or generic
	 * @param codiceFiscale Partial or complete CF to parse
	 * @return Generic or specific regular expression
	 */
	place(codiceFiscale?: string): Promise<RegExp>;
	deomocode(omocode: string): string;
	private isolatedInsensitiveTailor;
}

declare class Validator {
	private readonly belfioreConnector;
	private parser;
	private pattern;
	constructor(belfioreConnector: IBelfioreConnector);
	codiceFiscale(codiceFiscale: string): CFMismatchValidator;
	isLastNameValid(lastName: string): boolean;
	isLastNameInvalid(lastName: string): boolean;
	isFirstNameValid(firstName: string): boolean;
	isFirstNameInvalid(firstName: string): boolean;
	isBirthDateValid(birthDate: MultiFormatDate): boolean;
	isBirthDateInvalid(birthDate: MultiFormatDate): boolean;
	isGenderValid(gender: Genders | string): boolean;
	isGenderInvalid(gender: Genders | string): boolean;
	isBirthPlaceValid(birthPlace: BelfiorePlace | string): Promise<boolean>;
	isBirthPlaceInvalid(birthPlace: BelfiorePlace | string): Promise<boolean>;
	birthDatePlaceMatch(
		birthDate: MultiFormatDate,
		birthPlace: BelfiorePlace | string
	): Promise<boolean>;
	birthDatePlaceMismatch(
		birthDate: MultiFormatDate,
		birthPlace: BelfiorePlace | string
	): Promise<boolean>;
	birthPlaceDateMatch(
		birthPlace: BelfiorePlace | string,
		birthDate: MultiFormatDate
	): Promise<boolean>;
	birthPlaceDateMismatch(
		birthPlace: BelfiorePlace | string,
		birthDate: MultiFormatDate
	): Promise<boolean>;
}

declare const CONSONANT_LIST: string;
declare const VOWEL_LIST: string;
declare const OMOCODE_NUMBER_LIST: string;
declare const OMOCODE_NON_ZERO_NUMBER_LIST: string;
declare const OMOCODE_ZERO_LIST: string;
declare const MONTH_LIST: string;
declare const MONTH_30DAYS_LIST: string;
declare const MONTH_31DAYS_LIST: string;
declare const CITY_CODE_LIST: string;
declare const COUNTRY_CODE_LIST: string;
declare const CF_NAME_MATCHER: string;
declare const CF_SURNAME_MATCHER: string;
declare const CF_FULL_NAME_MATCHER: string;
declare const YEAR_MATCHER: string;
declare const LEAP_YEAR_MATCHER: string;
declare const MONTH_MATCHER: string;
declare const DAY_2X_MATCHER: string;
declare const DAY_3X_MATCHER: string;
declare const DAY_29_MATCHER: string;
declare const DAY_30_MATCHER: string;
declare const DAY_31_MATCHER: string;
declare const DAY_MATCHER: string;
declare const MALE_DAY_MATCHER: string;
declare const FEMALE_DAY_MATCHER: string;
declare const MONTH_DAY_MATCHER: string;
declare const FULL_DATE_MATCHER: string;
declare const MALE_FULL_DATE_MATCHER: string;
declare const FEMALE_FULL_DATE_MATCHER: string;
declare const CITY_CODE_MATCHER: string;
declare const COUNTRY_CODE_MATCHER: string;
declare const BELFIORE_CODE_MATCHER: string;
declare const CHECK_DIGIT: string;
declare const CODICE_FISCALE: string;
declare const PARTIAL_CF_NAME_MATCHER: string;
declare const PARTIAL_CF_FULL_NAME: string;
declare const PARTIAL_YEAR: string;
declare const PARTIAL_MONTH_DAY: string;
declare const PARTIAL_FULL_DATE: string;
declare const PARTIAL_BELFIORE_CODE_MATCHER: string;
declare const PARTIAL_CF: string;

declare const matcher_const_BELFIORE_CODE_MATCHER: typeof BELFIORE_CODE_MATCHER;
declare const matcher_const_CF_FULL_NAME_MATCHER: typeof CF_FULL_NAME_MATCHER;
declare const matcher_const_CF_NAME_MATCHER: typeof CF_NAME_MATCHER;
declare const matcher_const_CF_SURNAME_MATCHER: typeof CF_SURNAME_MATCHER;
declare const matcher_const_CHECK_DIGIT: typeof CHECK_DIGIT;
declare const matcher_const_CITY_CODE_LIST: typeof CITY_CODE_LIST;
declare const matcher_const_CITY_CODE_MATCHER: typeof CITY_CODE_MATCHER;
declare const matcher_const_CODICE_FISCALE: typeof CODICE_FISCALE;
declare const matcher_const_CONSONANT_LIST: typeof CONSONANT_LIST;
declare const matcher_const_COUNTRY_CODE_LIST: typeof COUNTRY_CODE_LIST;
declare const matcher_const_COUNTRY_CODE_MATCHER: typeof COUNTRY_CODE_MATCHER;
declare const matcher_const_DAY_29_MATCHER: typeof DAY_29_MATCHER;
declare const matcher_const_DAY_2X_MATCHER: typeof DAY_2X_MATCHER;
declare const matcher_const_DAY_30_MATCHER: typeof DAY_30_MATCHER;
declare const matcher_const_DAY_31_MATCHER: typeof DAY_31_MATCHER;
declare const matcher_const_DAY_3X_MATCHER: typeof DAY_3X_MATCHER;
declare const matcher_const_DAY_MATCHER: typeof DAY_MATCHER;
declare const matcher_const_FEMALE_DAY_MATCHER: typeof FEMALE_DAY_MATCHER;
declare const matcher_const_FEMALE_FULL_DATE_MATCHER: typeof FEMALE_FULL_DATE_MATCHER;
declare const matcher_const_FULL_DATE_MATCHER: typeof FULL_DATE_MATCHER;
declare const matcher_const_LEAP_YEAR_MATCHER: typeof LEAP_YEAR_MATCHER;
declare const matcher_const_MALE_DAY_MATCHER: typeof MALE_DAY_MATCHER;
declare const matcher_const_MALE_FULL_DATE_MATCHER: typeof MALE_FULL_DATE_MATCHER;
declare const matcher_const_MONTH_30DAYS_LIST: typeof MONTH_30DAYS_LIST;
declare const matcher_const_MONTH_31DAYS_LIST: typeof MONTH_31DAYS_LIST;
declare const matcher_const_MONTH_DAY_MATCHER: typeof MONTH_DAY_MATCHER;
declare const matcher_const_MONTH_LIST: typeof MONTH_LIST;
declare const matcher_const_MONTH_MATCHER: typeof MONTH_MATCHER;
declare const matcher_const_OMOCODE_NON_ZERO_NUMBER_LIST: typeof OMOCODE_NON_ZERO_NUMBER_LIST;
declare const matcher_const_OMOCODE_NUMBER_LIST: typeof OMOCODE_NUMBER_LIST;
declare const matcher_const_OMOCODE_ZERO_LIST: typeof OMOCODE_ZERO_LIST;
declare const matcher_const_PARTIAL_BELFIORE_CODE_MATCHER: typeof PARTIAL_BELFIORE_CODE_MATCHER;
declare const matcher_const_PARTIAL_CF: typeof PARTIAL_CF;
declare const matcher_const_PARTIAL_CF_FULL_NAME: typeof PARTIAL_CF_FULL_NAME;
declare const matcher_const_PARTIAL_CF_NAME_MATCHER: typeof PARTIAL_CF_NAME_MATCHER;
declare const matcher_const_PARTIAL_FULL_DATE: typeof PARTIAL_FULL_DATE;
declare const matcher_const_PARTIAL_MONTH_DAY: typeof PARTIAL_MONTH_DAY;
declare const matcher_const_PARTIAL_YEAR: typeof PARTIAL_YEAR;
declare const matcher_const_VOWEL_LIST: typeof VOWEL_LIST;
declare const matcher_const_YEAR_MATCHER: typeof YEAR_MATCHER;
declare namespace matcher_const {
	export {
		matcher_const_BELFIORE_CODE_MATCHER as BELFIORE_CODE_MATCHER,
		matcher_const_CF_FULL_NAME_MATCHER as CF_FULL_NAME_MATCHER,
		matcher_const_CF_NAME_MATCHER as CF_NAME_MATCHER,
		matcher_const_CF_SURNAME_MATCHER as CF_SURNAME_MATCHER,
		matcher_const_CHECK_DIGIT as CHECK_DIGIT,
		matcher_const_CITY_CODE_LIST as CITY_CODE_LIST,
		matcher_const_CITY_CODE_MATCHER as CITY_CODE_MATCHER,
		matcher_const_CODICE_FISCALE as CODICE_FISCALE,
		matcher_const_CONSONANT_LIST as CONSONANT_LIST,
		matcher_const_COUNTRY_CODE_LIST as COUNTRY_CODE_LIST,
		matcher_const_COUNTRY_CODE_MATCHER as COUNTRY_CODE_MATCHER,
		matcher_const_DAY_29_MATCHER as DAY_29_MATCHER,
		matcher_const_DAY_2X_MATCHER as DAY_2X_MATCHER,
		matcher_const_DAY_30_MATCHER as DAY_30_MATCHER,
		matcher_const_DAY_31_MATCHER as DAY_31_MATCHER,
		matcher_const_DAY_3X_MATCHER as DAY_3X_MATCHER,
		matcher_const_DAY_MATCHER as DAY_MATCHER,
		matcher_const_FEMALE_DAY_MATCHER as FEMALE_DAY_MATCHER,
		matcher_const_FEMALE_FULL_DATE_MATCHER as FEMALE_FULL_DATE_MATCHER,
		matcher_const_FULL_DATE_MATCHER as FULL_DATE_MATCHER,
		matcher_const_LEAP_YEAR_MATCHER as LEAP_YEAR_MATCHER,
		matcher_const_MALE_DAY_MATCHER as MALE_DAY_MATCHER,
		matcher_const_MALE_FULL_DATE_MATCHER as MALE_FULL_DATE_MATCHER,
		matcher_const_MONTH_30DAYS_LIST as MONTH_30DAYS_LIST,
		matcher_const_MONTH_31DAYS_LIST as MONTH_31DAYS_LIST,
		matcher_const_MONTH_DAY_MATCHER as MONTH_DAY_MATCHER,
		matcher_const_MONTH_LIST as MONTH_LIST,
		matcher_const_MONTH_MATCHER as MONTH_MATCHER,
		matcher_const_OMOCODE_NON_ZERO_NUMBER_LIST as OMOCODE_NON_ZERO_NUMBER_LIST,
		matcher_const_OMOCODE_NUMBER_LIST as OMOCODE_NUMBER_LIST,
		matcher_const_OMOCODE_ZERO_LIST as OMOCODE_ZERO_LIST,
		matcher_const_PARTIAL_BELFIORE_CODE_MATCHER as PARTIAL_BELFIORE_CODE_MATCHER,
		matcher_const_PARTIAL_CF as PARTIAL_CF,
		matcher_const_PARTIAL_CF_FULL_NAME as PARTIAL_CF_FULL_NAME,
		matcher_const_PARTIAL_CF_NAME_MATCHER as PARTIAL_CF_NAME_MATCHER,
		matcher_const_PARTIAL_FULL_DATE as PARTIAL_FULL_DATE,
		matcher_const_PARTIAL_MONTH_DAY as PARTIAL_MONTH_DAY,
		matcher_const_PARTIAL_YEAR as PARTIAL_YEAR,
		matcher_const_VOWEL_LIST as VOWEL_LIST,
		matcher_const_YEAR_MATCHER as YEAR_MATCHER,
	};
}

declare enum BirthMonth {
	"A" = 0,
	"B" = 1,
	"C" = 2,
	"D" = 3,
	"E" = 4,
	"H" = 5,
	"L" = 6,
	"M" = 7,
	"P" = 8,
	"R" = 9,
	"S" = 10,
	"T" = 11,
}

declare enum CRC {
	"B" = 0,
	"A" = 1,
	"K" = 2,
	"P" = 3,
	"L" = 4,
	"C" = 5,
	"Q" = 6,
	"D" = 7,
	"R" = 8,
	"E" = 9,
	"V" = 10,
	"O" = 11,
	"S" = 12,
	"F" = 13,
	"T" = 14,
	"G" = 15,
	"U" = 16,
	"H" = 17,
	"M" = 18,
	"I" = 19,
	"N" = 20,
	"J" = 21,
	"W" = 22,
	"Z" = 23,
	"Y" = 24,
	"X" = 25,
}

declare enum Omocodes {
	"L" = 0,
	"M" = 1,
	"N" = 2,
	"P" = 3,
	"Q" = 4,
	"R" = 5,
	"S" = 6,
	"T" = 7,
	"U" = 8,
	"V" = 9,
}

declare class CodiceFiscaleUtils {
	readonly belfioreConnector: IBelfioreConnector;
	readonly validator: Validator;
	readonly parser: Parser;
	readonly pattern: Pattern;
	constructor(belfioreConnector: IBelfioreConnector);
}

export {
	BirthMonth,
	CFMismatchValidator,
	CRC,
	CheckDigitizer,
	CodiceFiscaleUtils,
	dateMatcher_const as DATE_MATCHER,
	type DateDay,
	type DateMonth,
	DateUtils,
	Gender,
	type Genders,
	type IMismatchVerboseErrors,
	matcher_const as Matcher,
	type MultiFormatDate,
	Omocodes,
	Parser,
	Pattern,
	matcher_const as VALIDATOR,
	Validator,
	CodiceFiscaleUtils as default,
};
