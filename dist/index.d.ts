import { Moment } from 'moment';

type DateDay = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31;

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

declare const DATE_MATCHER_DAY: typeof DAY;
declare const DATE_MATCHER_DAYS_30_MONTHS: typeof DAYS_30_MONTHS;
declare const DATE_MATCHER_DAYS_31_MONTHS: typeof DAYS_31_MONTHS;
declare const DATE_MATCHER_HOURS: typeof HOURS;
declare const DATE_MATCHER_ISO8601_DATE_TIME: typeof ISO8601_DATE_TIME;
declare const DATE_MATCHER_ISO8601_SHORT_DATE: typeof ISO8601_SHORT_DATE;
declare const DATE_MATCHER_LEAP_MONTH: typeof LEAP_MONTH;
declare const DATE_MATCHER_MILLISECONDS: typeof MILLISECONDS;
declare const DATE_MATCHER_MINUTES: typeof MINUTES;
declare const DATE_MATCHER_MONTH: typeof MONTH;
declare const DATE_MATCHER_MONTH_DAY: typeof MONTH_DAY;
declare const DATE_MATCHER_SECONDS: typeof SECONDS;
declare const DATE_MATCHER_TIME: typeof TIME;
declare const DATE_MATCHER_TIMEZONE: typeof TIMEZONE;
declare const DATE_MATCHER_YEAR: typeof YEAR;
declare namespace DATE_MATCHER {
  export { DATE_MATCHER_DAY as DAY, DATE_MATCHER_DAYS_30_MONTHS as DAYS_30_MONTHS, DATE_MATCHER_DAYS_31_MONTHS as DAYS_31_MONTHS, DATE_MATCHER_HOURS as HOURS, DATE_MATCHER_ISO8601_DATE_TIME as ISO8601_DATE_TIME, DATE_MATCHER_ISO8601_SHORT_DATE as ISO8601_SHORT_DATE, DATE_MATCHER_LEAP_MONTH as LEAP_MONTH, DATE_MATCHER_MILLISECONDS as MILLISECONDS, DATE_MATCHER_MINUTES as MINUTES, DATE_MATCHER_MONTH as MONTH, DATE_MATCHER_MONTH_DAY as MONTH_DAY, DATE_MATCHER_SECONDS as SECONDS, DATE_MATCHER_TIME as TIME, DATE_MATCHER_TIMEZONE as TIMEZONE, DATE_MATCHER_YEAR as YEAR };
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
    static ymdToDate(year?: number | null, month?: DateMonth | null, day?: DateDay | null): Date | null;
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
    fromDate: Moment;
    toDate?: Moment;
}

interface IBelfioreConnectorBaseConfig extends IBelfioreConnectorCommonConfig {
    province: undefined;
    codeMatcher: undefined;
}

interface IBelfioreConnectorMatcherConfig extends IBelfioreConnectorCommonConfig {
    codeMatcher: RegExp;
    province: undefined;
}

interface IBelfioreConnectorProvinceConfig extends IBelfioreConnectorCommonConfig {
    codeMatcher: undefined;
    province: string;
}

type BelfioreConnectorConfig = (IBelfioreConnectorBaseConfig | IBelfioreConnectorProvinceConfig | IBelfioreConnectorMatcherConfig) & ({} | {
    fromDate: never;
    toDate: never;
});

interface IBelfioreCommonPlace {
    belfioreCode: string;
    creationDate: Date;
    dataSource: any;
    expirationDate: Date;
    name: string;
}

interface IBelfioreCity extends IBelfioreCommonPlace {
    iso3166: undefined;
    province: string;
}

interface IBelfioreCountry extends IBelfioreCommonPlace {
    iso3166: string;
    province: undefined;
}

interface IBelfiorePlace extends IBelfioreCommonPlace {
    iso3166: undefined;
    province: undefined;
}

type BelfiorePlace = IBelfiorePlace | IBelfioreCity | IBelfioreCountry;

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
    private static CITY_CODE_MATCHER;
    private static COUNTRY_CODE_MATCHER;
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
    private toDate;
    private fromDate;
    private codeMatcher;
    private province;
    constructor({ fromDate, toDate, codeMatcher, data, licenses, province, sources, }: BelfioreConnectorConfig);
    /**
     * Return belfiore places list
     */
    toArray(): BelfiorePlace[];
    get provinces(): string[];
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
     * Returns a Proxied version of Belfiore which filters results by given date ahead
     * @param date Target date to filter places active only for the given date
     * @returns Belfiore instance filtered by active date
     * @public
     */
    from(date?: MultiFormatDate): BelfioreConnector;
    /**
     * Returns a Belfiore instance filtered by the given province
     * @param code Province Code (2 A-Z char)
     * @returns Belfiore instance filtered by province code
     * @public
     */
    byProvince(code: string): BelfioreConnector | undefined;
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
    private scanDataGenerator;
    /**
     * Retrieve location for the given index in the given subset
     * @param resourceData concatenation of names
     * @param index target name index
     * @returns location
     */
    private locationByIndex;
    private parseProvinces;
}

declare const Belfiore: BelfioreConnector;

type Genders = "M" | "F";

interface IPersonalInfo {
    firstName?: string;
    lastName?: string;
    date?: Date;
    day?: DateDay;
    month?: DateMonth;
    year?: number;
    gender?: Genders;
    place?: string;
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
    private codiceFiscale;
    constructor(codiceFiscale: string);
    private get hasLastName();
    private get hasFirstName();
    private get hasBirthYear();
    private get hasBirthDate();
    private get hasGender();
    private get hasBirthPlace();
    private get hasCRC();
    matchPersonalInfo(personalInfo: IPersonalInfo): boolean;
    mismatchPersonalInfo(personalInfo: IPersonalInfo): boolean;
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
    matchBirthPlace(birthPlace: BelfiorePlace | string): boolean;
    /**
     * @param birthPlace BirthPlace, place name or BelfioreCode
     */
    mismatchBirthPlace(birthPlace: BelfiorePlace | string): boolean;
    /**
     * Check the given cf validity by form, birth date/place and digit code
     * @param codiceFiscale Complete CF to parse
     * @return Verbose errors
     */
    get errors(): IMismatchVerboseErrors;
    /**
     * Check the given cf validity by form, birth date/place and digit code
     * @param codiceFiscale Complete CF to parse
     * @return Generic or specific regular expression
     */
    get valid(): boolean;
    get invalid(): boolean;
}

interface IGeneratorWrapper<T = unknown, TReturn = any, TNext = unknown> extends Generator {
    [Symbol.iterator]: () => Generator;
}

type CodiceFiscaleCRC = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z";

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
    /**
     * Default omocode bitmap
     */
    static OMOCODE_BITMAP: number;
    /**
     * Convert omocode CF into plain one
     * @param codiceFiscale Partial or complete Omocode/Regular CF to parse, starting from LastName
     * @returns Regular CF w/o omocodes chars
     */
    static cfDeomocode(codiceFiscale: string): string;
    static cfOmocode(codiceFiscale: string, omocodeId: number): string;
    static cfOmocodeId(codiceFiscale: string): number;
    /**
     * Parse lastName information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Partial/possible lastName
     */
    static cfToLastName(codiceFiscale: string): string | null;
    /**
     * Parse firstName information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Partial/possible firstName
     */
    static cfToFirstName(codiceFiscale: string): string | null;
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
     * @param checkBirthDateConsistency Ensure birthday is between creation and expiran date of the cf city or country, default value: true
     * @returns Birth place
     */
    static cfToBirthPlace(codiceFiscale: string, checkBirthDateConsistency?: boolean): BelfiorePlace | null;
    /**
     * @param fiscalCode 16 character Codice Fiscale to decode
     * @returns Decoded CF Info
     */
    static cfDecode(fiscalCode: string): IPersonalInfo;
    /**
     * Parse lastName to cf part
     * @param lastName Partial or complete CF to parse
     * @returns partial cf
     */
    static lastNameToCf(lastName?: string | null): string | null;
    /**
     * Parse firstName to cf part
     * @param firstName Partial or complete CF to parse
     * @returns partial cf
     */
    static firstNameToCf(firstName?: string | null): string | null;
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
     * Parse Place information to return city or country details
     * @param place Belfiore place instance, belfiore code or city/country name
     * @param scopedBelfioreConnector BelfioreConnector
     * @returns BelfiorePlace instance with the target city or country details
     */
    static parsePlace(place: BelfiorePlace | string, scopedBelfioreConnector?: BelfioreConnector): BelfiorePlace | null;
    /**
     * Parse Date and Gender information to create Date/Gender CF part
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
    static encodeCf({ lastName, firstName, year, month, day, date, gender, place, omocodeId, }: IPersonalInfo): string | null;
    private static JOLLY_CHAR;
    private static checkBitmap;
    private static charOmocode;
    private static charExtractor;
    /**
     * Convert omocode full or chunk CF into plain one
     * @param partialCodiceFiscale Partial or complete Omocode/Regular CF to parse
     * @param offset starting point of the given chunk in the 16 char CF
     * @returns Regular version w/o omocodes chars of the given chunk
     */
    private static partialCfDeomocode;
    private static appyCaseToChar;
}

declare class Pattern {
    /**
     * Validation regexp for the given lastName or generic
     * @param lastName Optional lastName to generate validation regexp
     * @return CF Surname matcher
     * @throw INVALID_SURNAME
     */
    static cfLastName(lastName?: string): RegExp;
    /**
     * Validation regexp for the given name or generic
     * @param name Optional name to generate validation regexp
     * @return CF name matcher
     * @throw INVALID_NAME
     */
    static cfFirstName(name?: string): RegExp;
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
    private static LETTER_SET;
    private static SEPARATOR_SET;
    /**
     * Returns lastName validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    static lastName(codiceFiscale?: string): RegExp;
    /**
     * Returns name validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    static firstName(codiceFiscale?: string): RegExp;
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
    static deomocode(omocode: string): string;
    private static isolatedInsensitiveTailor;
}

declare class Validator {
    static codiceFiscale(codiceFiscale: string): CFMismatchValidator;
    static isLastNameValid(lastName: string): boolean;
    static isLastNameInvalid(lastName: string): boolean;
    static isFirstNameValid(firstName: string): boolean;
    static isFirstNameInvalid(firstName: string): boolean;
    static isBirthDateValid(birthDate: MultiFormatDate): boolean;
    static isBirthDateInvalid(birthDate: MultiFormatDate): boolean;
    static isGenderValid(gender: Genders | string): boolean;
    static isGenderInvalid(gender: Genders | string): boolean;
    static isBirthPlaceValid(birthPlace: BelfiorePlace | string, scopedBelfioreConnector?: BelfioreConnector): boolean;
    static isBirthPlaceInvalid(birthPlace: BelfiorePlace | string, scopedBelfioreConnector?: BelfioreConnector): boolean;
    static birthDatePlaceMatch(birthDate: MultiFormatDate, birthPlace: BelfiorePlace | string): boolean;
    static birthDatePlaceMismatch(birthDate: MultiFormatDate, birthPlace: BelfiorePlace | string): boolean;
    static birthPlaceDateMatch(birthPlace: BelfiorePlace | string, birthDate: MultiFormatDate): boolean;
    static birthPlaceDateMismatch(birthPlace: BelfiorePlace | string, birthDate: MultiFormatDate): boolean;
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

declare const VALIDATOR_BELFIORE_CODE_MATCHER: typeof BELFIORE_CODE_MATCHER;
declare const VALIDATOR_CF_FULL_NAME_MATCHER: typeof CF_FULL_NAME_MATCHER;
declare const VALIDATOR_CF_NAME_MATCHER: typeof CF_NAME_MATCHER;
declare const VALIDATOR_CF_SURNAME_MATCHER: typeof CF_SURNAME_MATCHER;
declare const VALIDATOR_CHECK_DIGIT: typeof CHECK_DIGIT;
declare const VALIDATOR_CITY_CODE_LIST: typeof CITY_CODE_LIST;
declare const VALIDATOR_CITY_CODE_MATCHER: typeof CITY_CODE_MATCHER;
declare const VALIDATOR_CODICE_FISCALE: typeof CODICE_FISCALE;
declare const VALIDATOR_CONSONANT_LIST: typeof CONSONANT_LIST;
declare const VALIDATOR_COUNTRY_CODE_LIST: typeof COUNTRY_CODE_LIST;
declare const VALIDATOR_COUNTRY_CODE_MATCHER: typeof COUNTRY_CODE_MATCHER;
declare const VALIDATOR_DAY_29_MATCHER: typeof DAY_29_MATCHER;
declare const VALIDATOR_DAY_2X_MATCHER: typeof DAY_2X_MATCHER;
declare const VALIDATOR_DAY_30_MATCHER: typeof DAY_30_MATCHER;
declare const VALIDATOR_DAY_31_MATCHER: typeof DAY_31_MATCHER;
declare const VALIDATOR_DAY_3X_MATCHER: typeof DAY_3X_MATCHER;
declare const VALIDATOR_DAY_MATCHER: typeof DAY_MATCHER;
declare const VALIDATOR_FEMALE_DAY_MATCHER: typeof FEMALE_DAY_MATCHER;
declare const VALIDATOR_FEMALE_FULL_DATE_MATCHER: typeof FEMALE_FULL_DATE_MATCHER;
declare const VALIDATOR_FULL_DATE_MATCHER: typeof FULL_DATE_MATCHER;
declare const VALIDATOR_LEAP_YEAR_MATCHER: typeof LEAP_YEAR_MATCHER;
declare const VALIDATOR_MALE_DAY_MATCHER: typeof MALE_DAY_MATCHER;
declare const VALIDATOR_MALE_FULL_DATE_MATCHER: typeof MALE_FULL_DATE_MATCHER;
declare const VALIDATOR_MONTH_30DAYS_LIST: typeof MONTH_30DAYS_LIST;
declare const VALIDATOR_MONTH_31DAYS_LIST: typeof MONTH_31DAYS_LIST;
declare const VALIDATOR_MONTH_DAY_MATCHER: typeof MONTH_DAY_MATCHER;
declare const VALIDATOR_MONTH_LIST: typeof MONTH_LIST;
declare const VALIDATOR_MONTH_MATCHER: typeof MONTH_MATCHER;
declare const VALIDATOR_OMOCODE_NON_ZERO_NUMBER_LIST: typeof OMOCODE_NON_ZERO_NUMBER_LIST;
declare const VALIDATOR_OMOCODE_NUMBER_LIST: typeof OMOCODE_NUMBER_LIST;
declare const VALIDATOR_OMOCODE_ZERO_LIST: typeof OMOCODE_ZERO_LIST;
declare const VALIDATOR_PARTIAL_BELFIORE_CODE_MATCHER: typeof PARTIAL_BELFIORE_CODE_MATCHER;
declare const VALIDATOR_PARTIAL_CF: typeof PARTIAL_CF;
declare const VALIDATOR_PARTIAL_CF_FULL_NAME: typeof PARTIAL_CF_FULL_NAME;
declare const VALIDATOR_PARTIAL_CF_NAME_MATCHER: typeof PARTIAL_CF_NAME_MATCHER;
declare const VALIDATOR_PARTIAL_FULL_DATE: typeof PARTIAL_FULL_DATE;
declare const VALIDATOR_PARTIAL_MONTH_DAY: typeof PARTIAL_MONTH_DAY;
declare const VALIDATOR_PARTIAL_YEAR: typeof PARTIAL_YEAR;
declare const VALIDATOR_VOWEL_LIST: typeof VOWEL_LIST;
declare const VALIDATOR_YEAR_MATCHER: typeof YEAR_MATCHER;
declare namespace VALIDATOR {
  export { VALIDATOR_BELFIORE_CODE_MATCHER as BELFIORE_CODE_MATCHER, VALIDATOR_CF_FULL_NAME_MATCHER as CF_FULL_NAME_MATCHER, VALIDATOR_CF_NAME_MATCHER as CF_NAME_MATCHER, VALIDATOR_CF_SURNAME_MATCHER as CF_SURNAME_MATCHER, VALIDATOR_CHECK_DIGIT as CHECK_DIGIT, VALIDATOR_CITY_CODE_LIST as CITY_CODE_LIST, VALIDATOR_CITY_CODE_MATCHER as CITY_CODE_MATCHER, VALIDATOR_CODICE_FISCALE as CODICE_FISCALE, VALIDATOR_CONSONANT_LIST as CONSONANT_LIST, VALIDATOR_COUNTRY_CODE_LIST as COUNTRY_CODE_LIST, VALIDATOR_COUNTRY_CODE_MATCHER as COUNTRY_CODE_MATCHER, VALIDATOR_DAY_29_MATCHER as DAY_29_MATCHER, VALIDATOR_DAY_2X_MATCHER as DAY_2X_MATCHER, VALIDATOR_DAY_30_MATCHER as DAY_30_MATCHER, VALIDATOR_DAY_31_MATCHER as DAY_31_MATCHER, VALIDATOR_DAY_3X_MATCHER as DAY_3X_MATCHER, VALIDATOR_DAY_MATCHER as DAY_MATCHER, VALIDATOR_FEMALE_DAY_MATCHER as FEMALE_DAY_MATCHER, VALIDATOR_FEMALE_FULL_DATE_MATCHER as FEMALE_FULL_DATE_MATCHER, VALIDATOR_FULL_DATE_MATCHER as FULL_DATE_MATCHER, VALIDATOR_LEAP_YEAR_MATCHER as LEAP_YEAR_MATCHER, VALIDATOR_MALE_DAY_MATCHER as MALE_DAY_MATCHER, VALIDATOR_MALE_FULL_DATE_MATCHER as MALE_FULL_DATE_MATCHER, VALIDATOR_MONTH_30DAYS_LIST as MONTH_30DAYS_LIST, VALIDATOR_MONTH_31DAYS_LIST as MONTH_31DAYS_LIST, VALIDATOR_MONTH_DAY_MATCHER as MONTH_DAY_MATCHER, VALIDATOR_MONTH_LIST as MONTH_LIST, VALIDATOR_MONTH_MATCHER as MONTH_MATCHER, VALIDATOR_OMOCODE_NON_ZERO_NUMBER_LIST as OMOCODE_NON_ZERO_NUMBER_LIST, VALIDATOR_OMOCODE_NUMBER_LIST as OMOCODE_NUMBER_LIST, VALIDATOR_OMOCODE_ZERO_LIST as OMOCODE_ZERO_LIST, VALIDATOR_PARTIAL_BELFIORE_CODE_MATCHER as PARTIAL_BELFIORE_CODE_MATCHER, VALIDATOR_PARTIAL_CF as PARTIAL_CF, VALIDATOR_PARTIAL_CF_FULL_NAME as PARTIAL_CF_FULL_NAME, VALIDATOR_PARTIAL_CF_NAME_MATCHER as PARTIAL_CF_NAME_MATCHER, VALIDATOR_PARTIAL_FULL_DATE as PARTIAL_FULL_DATE, VALIDATOR_PARTIAL_MONTH_DAY as PARTIAL_MONTH_DAY, VALIDATOR_PARTIAL_YEAR as PARTIAL_YEAR, VALIDATOR_VOWEL_LIST as VOWEL_LIST, VALIDATOR_YEAR_MATCHER as YEAR_MATCHER };
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
    "T" = 11
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
    "X" = 25
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

declare const _default: {
    Belfiore: BelfioreConnector;
    BelfioreConnector: typeof BelfioreConnector;
    BirthMonth: typeof BirthMonth;
    CFMismatchValidator: typeof CFMismatchValidator;
    CheckDigitizer: typeof CheckDigitizer;
    CRC: typeof CRC;
    DATE_MATCHER: typeof DATE_MATCHER;
    DateUtils: typeof DateUtils;
    Gender: typeof Gender;
    Omocodes: typeof Omocodes;
    Parser: typeof Parser;
    VALIDATOR: typeof VALIDATOR;
    Matcher: typeof VALIDATOR;
    Pattern: typeof Pattern;
    Validator: typeof Validator;
};

export { Belfiore, BelfioreConnector, type BelfiorePlace, BirthMonth, CFMismatchValidator, CRC, CheckDigitizer, DATE_MATCHER, type DateDay, type DateMonth, DateUtils, Gender, type Genders, VALIDATOR as Matcher, type MultiFormatDate, Omocodes, Parser, Pattern, VALIDATOR, Validator, _default as default };
