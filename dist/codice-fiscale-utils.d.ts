import { Moment } from "moment";
declare namespace DATE_VALIDATOR {
    DAY
    DAYS_30_MONTHS
    DAYS_31_MONTHS
    HOURS
    ISO8601_DATE_TIME
    ISO8601_SHORT_DATE
    LEAP_MONTH
    MILLISECONDS
    MINUTES
    MONTH
    MONTH_DAY
    SECONDS
    TIME
    TIMEZONE
    YEAR
}
declare namespace DateMatcher {
    DAY
    DAYS_30_MONTHS
    DAYS_31_MONTHS
    HOURS
    ISO8601_DATE_TIME
    ISO8601_SHORT_DATE
    LEAP_MONTH
    MILLISECONDS
    MINUTES
    MONTH
    MONTH_DAY
    SECONDS
    TIME
    TIMEZONE
    YEAR
}
declare namespace VALIDATOR {
    CONSONANT_LIST
    VOWEL_LIST
    OMOCODE_NUMBER_LIST
    OMOCODE_NON_ZERO_NUMBER_LIST
    OMOCODE_ZERO_LIST
    MONTH_LIST
    MONTH_30DAYS_LIST
    MONTH_31DAYS_LIST
    CITY_CODE_LIST
    COUNTRY_CODE_LIST
    CF_NAME_MATCHER
    CF_SURNAME_MATCHER
    CF_FULL_NAME_MATCHER
    YEAR_MATCHER
    LEAP_YEAR_MATCHER
    MONTH_MATCHER
    DAY_2X_MATCHER
    DAY_3X_MATCHER
    DAY_29_MATCHER
    DAY_30_MATCHER
    DAY_31_MATCHER
    DAY_MATCHER
    MALE_DAY_MATCHER
    FEMALE_DAY_MATCHER
    MONTH_DAY_MATCHER
    FULL_DATE_MATCHER
    MALE_FULL_DATE_MATCHER
    FEMALE_FULL_DATE_MATCHER
    CITY_CODE_MATCHER
    COUNTRY_CODE_MATCHER
    BELFIORE_CODE_MATCHER
    CHECK_DIGIT
    CODICE_FISCALE
    PARTIAL_CF_NAME_MATCHER
    PARTIAL_CF_FULL_NAME
    PARTIAL_YEAR
    PARTIAL_MONTH_DAY
    PARTIAL_FULL_DATE
    PARTIAL_BELFIORE_CODE_MATCHER
    PARTIAL_CF
}
declare namespace Matcher {
    CONSONANT_LIST
    VOWEL_LIST
    OMOCODE_NUMBER_LIST
    OMOCODE_NON_ZERO_NUMBER_LIST
    OMOCODE_ZERO_LIST
    MONTH_LIST
    MONTH_30DAYS_LIST
    MONTH_31DAYS_LIST
    CITY_CODE_LIST
    COUNTRY_CODE_LIST
    CF_NAME_MATCHER
    CF_SURNAME_MATCHER
    CF_FULL_NAME_MATCHER
    YEAR_MATCHER
    LEAP_YEAR_MATCHER
    MONTH_MATCHER
    DAY_2X_MATCHER
    DAY_3X_MATCHER
    DAY_29_MATCHER
    DAY_30_MATCHER
    DAY_31_MATCHER
    DAY_MATCHER
    MALE_DAY_MATCHER
    FEMALE_DAY_MATCHER
    MONTH_DAY_MATCHER
    FULL_DATE_MATCHER
    MALE_FULL_DATE_MATCHER
    FEMALE_FULL_DATE_MATCHER
    CITY_CODE_MATCHER
    COUNTRY_CODE_MATCHER
    BELFIORE_CODE_MATCHER
    CHECK_DIGIT
    CODICE_FISCALE
    PARTIAL_CF_NAME_MATCHER
    PARTIAL_CF_FULL_NAME
    PARTIAL_YEAR
    PARTIAL_MONTH_DAY
    PARTIAL_FULL_DATE
    PARTIAL_BELFIORE_CODE_MATCHER
    PARTIAL_CF
}
interface IBelfioreCommonPlace {
    belfioreCode: string;
    creationDate: Date;
    dataSource: any;
    expirationDate: Date;
    name: string;
}
interface IBelfioreCity extends IBelfioreCommonPlace {
    iso3166?: undefined;
    province: string;
}
interface IBelfioreCountry extends IBelfioreCommonPlace {
    iso3166: string;
    province?: undefined;
}
interface IBelfioreDbData {
    belfioreCode: string;
    name: string;
    creationDate?: string;
    expirationDate?: string;
    provinceOrCountry: string;
    dataSource: string;
}
interface IBelfioreDbLicense {
    name: string;
    url: string;
    license: string;
    licenseUrl: string;
    termsAndConditions: string;
    authors?: string;
}
interface IBelfioreDb {
    data: IBelfioreDbData[];
    licenses: IBelfioreDbLicense[];
    sources: string[];
}
interface IBelfioreConnectorCommonConfig extends IBelfioreDb {
    activeDate?: Moment;
}
interface IBelfioreConnectorBaseConfig extends IBelfioreConnectorCommonConfig {
    province?: undefined;
    codeMatcher?: undefined;
}
interface IBelfioreConnectorMatcherConfig extends IBelfioreConnectorCommonConfig {
    codeMatcher: RegExp;
    province?: undefined;
}
interface IBelfioreConnectorProvinceConfig extends IBelfioreConnectorCommonConfig {
    codeMatcher?: undefined;
    province: string;
}
declare type BelfioreConnectorConfig = IBelfioreConnectorBaseConfig | IBelfioreConnectorProvinceConfig | IBelfioreConnectorMatcherConfig;
interface IBelfiorePlace extends IBelfioreCommonPlace {
    iso3166?: undefined;
    province?: undefined;
}
declare type BelfiorePlace = IBelfiorePlace | IBelfioreCity | IBelfioreCountry;
declare type MultiFormatDate = string | Date | Moment | number[];
/**
 * Handler for cities and countries Dataset
 */
declare class BelfioreConnector {
    [belfioreCode: string]: BelfiorePlace | any;
    /**
     * Get Proxy
     * @param resource target resource
     * @param paramName property name to proxy
     * @returns Proxied property
     */
    static get(resource: BelfioreConnector, paramName: string, receiver: any): BelfiorePlace | any;
    /**
     * Binary find Index (works ONLY in sorted arrays)
     * @param text Unique string of values of the same length (step)
     * @param value Exact text to find
     * @param start text start index for seeking the value
     * @param end text end index for seeking the value
     * @param step length of a single value to seek properly the text string
     * @returns Found value Index or -1 if not found
     * @private
     */
    static binaryfindIndex(sourceString: string, targetText: string, start?: number, end?: number): number;
    /**
     * Converts belfiore code into an int
     */
    static belfioreToInt(code: string): number;
    private static ITALY_KINGDOM_BIRTHDATE;
    private static BELFIORE_CODE_MATCHER;
    /**
     * Converts int to belfiore code
     * @param code Belfiore int code
     * @returns Standard belfiore code
     */
    private static belfioreFromInt;
    /**
     * Converst Base 32 number of days since 01/01/1861 to Moment instance
     * @param base32daysFrom1861 Base 32 number of days from 1861-01-01
     * @returns Moment instance date
     */
    private static decodeDate;
    /**
     * Retrieve string at index posizion
     * @param list concatenation of names
     * @param index target name index
     * @returns index-th string
     */
    private static nameByIndex;
    private data;
    private licenses;
    private sources;
    private activeDate;
    private codeMatcher;
    private province;
    constructor({ activeDate, codeMatcher, data, licenses, province, sources, }: BelfioreConnectorConfig);
    /**
     * Return belfiore places list
     */
    toArray(): BelfiorePlace[];
    /**
     * Search places matching given name
     */
    searchByName(name: string): BelfiorePlace[] | null;
    /**
     * Find place matching given name, retuns place object if provided name match only 1 result
     */
    findByName(name: string): BelfiorePlace | null;
    /**
     * Returns a Proxied version of Belfiore which filters results by given date
     * @param date Target date to filter places active only for the given date
     * @returns Belfiore instance filtered by active date
     * @public
     */
    active(date?: MultiFormatDate): BelfioreConnector;
    /**
     * Returns a Belfiore instance filtered by the given province
     * @param code Province Code (2 A-Z char)
     * @returns Belfiore instance filtered by province code
     * @public
     */
    byProvince(code: string): BelfioreConnector;
    /**
     * Returns a Proxied version of Belfiore which filters results by place type
     */
    get cities(): BelfioreConnector;
    /**
     * Returns a Proxied version of Belfiore which filters results by place type
     */
    get countries(): BelfioreConnector;
    private get config();
    private scanDataSourceIndex;
    private scanData;
    /**
     * Retrieve location for the given index in the given subset
     * @param resourceData concatenation of names
     * @param index target name index
     * @returns location
     */
    private locationByIndex;
}
declare const Belfiore: BelfioreConnector;
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
    "X" = 25
}
declare type CodiceFiscaleCRC = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";
declare class CheckDigitizer {
    /**
     * Partial FiscalCode Evaluator
     * @param Partial Fiscal Code to evaluate
     * @yields character value odd/even
     */
    static evaluateChar(partialCF?: string): Generator<number>;
    /**
     * Evaluate given partial CF to produce last check digit character
     * @param codiceFiscale Partial or complete Fiscal Code to evaluate to produce last character
     * @returns 16th CF char
     */
    static checkDigit(codiceFiscale: string): CodiceFiscaleCRC | null;
    private static CHAR_OFFSET;
}
declare type Genders = "M" | "F";
declare class Gender {
    static getDay(genderDay: number): number | null;
    static getGender(genderDay: number): Genders | null;
    static genderizeDay(day: number, gender: Genders): number;
    static toArray(): Genders[];
    private static MAX_MONTH_DAY;
}
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
    "T" = 11
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
    "V" = 9
}
declare type DateDay = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;
declare type DateMonth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
interface IPersonalInfo {
    name?: string;
    surname?: string;
    date?: Date;
    day?: DateDay;
    month?: DateMonth;
    year?: number;
    gender?: Genders;
    place?: string;
}
declare class Parser {
    /**
     * Default omocode bitmap
     */
    static OMOCODE_BITMAP: number;
    /**
     * Parse surname information
     * @param codiceFiscale Partial or complete Omocode/Regular CF to parse
     * @returns Regular CF w/o omocodes chars
     */
    static cfDeomocode(codiceFiscale: string): string;
    /**
     * Parse surname information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Partial/possible surname
     */
    static cfToSurname(codiceFiscale: string): string | null;
    /**
     * Parse name information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Partial/possible name
     */
    static cfToName(codiceFiscale: string): string | null;
    /**
     * Parse gender information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Male or female
     */
    static cfToGender(codiceFiscale: string): Genders | null;
    /**
     * Parse birth year information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth Year (4 digits)
     */
    static cfToBirthYear(codiceFiscale: string): number | null;
    /**
     * Parse birth month information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth Month (0...11 - Date notation)
     */
    static cfToBirthMonth(codiceFiscale: string): DateMonth | null;
    /**
     * Parse birth day information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth day (1..31)
     */
    static cfToBirthDay(codiceFiscale: string): DateDay | null;
    /**
     * Parse birth date information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth Date
     */
    static cfToBirthDate(codiceFiscale: string): Date | null;
    /**
     * Parse birth place information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth place
     */
    static cfToBirthPlace(codiceFiscale: string): BelfiorePlace | null;
    /**
     * @param fiscalCode 16 character Codice Fiscale to decode
     * @returns Decoded CF Info
     */
    static cfDecode(fiscalCode: string): IPersonalInfo;
    /**
     * Parse surname to cf part
     * @param surname Partial or complete CF to parse
     * @returns partial cf
     */
    static surnameToCf(surname?: string | null): string | null;
    /**
     * Parse name to cf part
     * @param name Partial or complete CF to parse
     * @returns partial cf
     */
    static nameToCf(name?: string | null): string | null;
    /**
     * Parse year to cf part
     * @param year Birth year 2 or 4 digit string, number above 19XX or below 100
     * @returns partial cf
     */
    static yearToCf(year: string | number): string | null;
    /**
     * Parse month information
     * @param month Month number 0..11
     * @returns Birth Month CF code
     */
    static monthToCf(month: DateMonth | number): string | null;
    /**
     * Parse day information
     * @param day Day number 1..31
     * @param gender Gender enum value
     * @returns Birth Day CF code
     */
    static dayGenderToCf(day: DateDay | number, gender: Genders): string | null;
    /**
     * Parse Year, Month, Day to Dated
     * @param year 4 digits Year
     * @param month 1 or 2 digits Month 0..11
     * @param day 1,2 digits Day 1..31
     * @returns Date or null if provided year/month/day are not valid
     */
    static yearMonthDayToDate(year: number | null | undefined, month?: DateMonth | null | undefined, day?: DateDay | null | undefined): Date | null;
    /**
     * Parse a Dated and Gender information to create Date/Gender CF part
     * @param date Date or Moment instance, ISO8601 date string or array of numbers [year, month, day]
     * @returns Parsed Date or null if not valid
     */
    static parseDate(date?: MultiFormatDate | null): Date | null;
    /**
     * Parse a Dated and Gender information to create Date/Gender CF part
     * @param date Date or Moment instance, ISO8601 date string or array of numbers [year, month, day]
     * @param gender Gender enum value
     * @returns Birth date and Gender CF code
     */
    static dateGenderToCf(date: MultiFormatDate, gender: Genders): string | null;
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
    static placeToCf(cityOrCountryName: string, provinceId?: string): string | null;
    static placeToCf(birthDate: MultiFormatDate, cityOrCountryName: string, provinceId?: string): string | null;
    /**
     * Generates full CF
     * @returns Complete CF
     */
    static encodeCf({ surname, name, year, month, day, date, gender, place, }: IPersonalInfo): string | null;
    private static JOLLY_CHAR;
    private static checkBitmap;
    private static charOmocode;
    private static charExtractor;
}
declare class Validator {
    /**
     * Validation regexp for the given surname or generic
     * @param surname Optional surname to generate validation regexp
     * @return CF Surname matcher
     * @throw INVALID_SURNAME
     */
    static cfSurname(surname?: string): RegExp;
    /**
     * Validation regexp for the given name or generic
     * @param name Optional name to generate validation regexp
     * @return CF name matcher
     * @throw INVALID_NAME
     */
    static cfName(name?: string): RegExp;
    /**
     * Validation regexp for the given year or generic
     * @param year Optional year to generate validation regexp
     * @return CF year matcher
     */
    static cfYear(year?: number): RegExp;
    /**
     * Validation regexp for the given month or generic
     * @param month Optional month to generate validation regexp
     * @return CF month matcher
     */
    static cfMonth(month?: DateMonth): RegExp;
    /**
     * Validation regexp for the given day or generic
     * @param day Optional day to generate validation regexp
     * @return CF day matcher
     */
    static cfDay(day?: DateDay): RegExp;
    /**
     * Validation regexp for the given year or generic
     * @param day Optional day to generate validation regexp
     * @param gender Gender @see Genders
     * @return CF day and gender matcher
     */
    static cfDayGender(day?: DateDay, gender?: Genders): RegExp;
    /**
     * Validation regexp for the given year or generic
     * @param date Optional date to generate validation regexp
     * @param gender @see Genders
     * @return CF date and gender matcher
     */
    static cfDateGender(date?: MultiFormatDate | null, gender?: Genders | null): RegExp;
    /**
     * @param placeName Optional place name to generate validation regexp
     * @return CF place matcher
     */
    /**
     * @param date Optional date to generate validation regexp
     * @param placeName Optional place name to generate validation regexp
     * @return CF place matcher
     */
    static cfPlace(placeName?: string | null): RegExp;
    static cfPlace(birthDate?: MultiFormatDate | null, placeName?: string | null): RegExp;
    /**
     * Generates full CF validator based on given optional input or generic
     * @param personalInfo Input Object
     * @return CodiceFiscale matcher
     */
    static codiceFiscale(personalInfo?: IPersonalInfo): RegExp;
    /**
     * Returns surname validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    static surname(codiceFiscale?: string): RegExp;
    /**
     * Returns name validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    static firstname(codiceFiscale?: string): RegExp;
    /**
     * Returns iso8601 date validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    static date(codiceFiscale?: string): RegExp;
    /**
     * Returns gender validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    static gender(codiceFiscale?: string): RegExp;
    /**
     * Returns place validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    static place(codiceFiscale?: string): RegExp;
    /**
     * Check the given cf validity by form, birth date/place and digit code
     * @param codiceFiscale Complete CF to parse
     * @return Generic or specific regular expression
     */
    static isValid(codiceFiscale: string): boolean;
    static deomocode(omocode: string): string;
    private static isolatedInsensitiveTailor;
}
export { Belfiore, BelfioreConnector_$0 as BelfioreConnector, BirthMonth, CheckDigitizer, CRC, DATE_VALIDATOR, DateMatcher, Gender, Genders, Omocodes, Parser, VALIDATOR, Matcher, Validator };
