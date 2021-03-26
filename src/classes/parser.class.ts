import DiacriticRemover from "@marketto/diacritic-remover";
import moment from "moment";
import { Belfiore, BelfiorePlace } from "../belfiore-connector";
import BelfioreConnector from "../belfiore-connector/classes/belfiore-connector.class";
import {
    CRC_OFFSET,
    CRC_SIZE,
    DAY_OFFSET,
    DAY_SIZE,
    FIRSTNAME_OFFSET,
    FIRSTNAME_SIZE,
    GENDER_OFFSET,
    GENDER_SIZE,
    LASTNAME_OFFSET,
    LASTNAME_SIZE,
    MONTH_OFFSET,
    MONTH_SIZE,
    PLACE_OFFSET,
    PLACE_SIZE,
    YEAR_OFFSET,
    YEAR_SIZE,
} from "../const/cf-offsets.const";
import { CF_FULL_NAME_MATCHER, CF_SURNAME_MATCHER } from "../const/matcher.const";
import { CONSONANT_LIST, VOWEL_LIST } from "../const/matcher.const";
import { DateDay, DateMonth, DateUtils, MultiFormatDate } from "../date-utils";
import BirthMonth from "../enums/birth-month.enum";
import GenderWeight from "../enums/gender-weight.enum";
import Omocodes from "../enums/omocodes.enum";
import IPersonalInfo from "../interfaces/personal-info.interface";
import Genders from "../types/genders.type";
import CheckDigitizer from "./check-digitizer.class";
import Gender from "./gender.class";

const diacriticRemover = new DiacriticRemover();

export default class Parser {
    /**
     * Default omocode bitmap
     */
    public static OMOCODE_BITMAP: number = 0b0111011011000000;

    /**
     * Convert omocode CF into plain one
     * @param codiceFiscale Partial or complete Omocode/Regular CF to parse, starting from LastName
     * @returns Regular CF w/o omocodes chars
     */
    public static cfDeomocode(codiceFiscale: string): string {
        if (codiceFiscale && codiceFiscale.length <= YEAR_OFFSET) {
            return codiceFiscale;
        }
        const deomocodedCf = this.partialCfDeomocode(codiceFiscale);
        if (deomocodedCf.length < CRC_OFFSET) {
            return deomocodedCf;
        }
        const partialDeomocodedCf = deomocodedCf.substr(LASTNAME_OFFSET, CRC_OFFSET);
        return partialDeomocodedCf + this.appyCaseToChar(
            CheckDigitizer.checkDigit(deomocodedCf) || "",
            deomocodedCf.substr(CRC_OFFSET, CRC_SIZE),
        );
    }

    public static cfOmocode(codiceFiscale: string, omocodeId: number): string {
        if (!omocodeId) {
            return this.cfDeomocode(codiceFiscale);
        }
        const omocodedCf = codiceFiscale.split("");
        // tslint:disable-next-line: prefer-for-of
        for (let i = codiceFiscale.length - 1, o = 0; i >= 0; i--) {
            // tslint:disable-next-line: no-bitwise
            if (2 ** i & this.OMOCODE_BITMAP) {
                // tslint:disable-next-line: no-bitwise
                const charToEncode: boolean = !!(omocodeId & 2 ** o);
                const isOmocode: boolean = isNaN(parseInt(omocodedCf[i], 10));
                if (charToEncode !== isOmocode) {
                    const char: any = omocodedCf[i].toUpperCase();
                    omocodedCf[i] = Omocodes[char];
                }
                o++;
            }
        }
        const crc = omocodedCf[CRC_OFFSET];
        if (crc) {
            const partialCf = omocodedCf.slice(LASTNAME_OFFSET, CRC_OFFSET).join("");
            omocodedCf[CRC_OFFSET] = this.appyCaseToChar(
                CheckDigitizer.checkDigit(partialCf) || "",
                crc,
            );
        }
        return omocodedCf.join("");
    }

    public static cfOmocodeId(codiceFiscale: string): number {
        const cfOmocodeBitmap = codiceFiscale.split("")
            // tslint:disable-next-line: no-bitwise
            .filter((char, index) => 2 ** index & this.OMOCODE_BITMAP)
            .map((char) => (/^[a-z]$/i).test(diacriticRemover[char]) ? 1 : 0)
            .join("");
        return parseInt(cfOmocodeBitmap , 2);
    }

    /**
     * Parse lastName information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Partial/possible lastName
     */
    public static cfToLastName(codiceFiscale: string): string | null {
        if (
            typeof codiceFiscale !== "string"
            || codiceFiscale.length < (LASTNAME_OFFSET + LASTNAME_SIZE)
            || !(new RegExp(`^(?:${CF_SURNAME_MATCHER})`, "iu")).test(codiceFiscale)
        ) {
            return null;
        }

        const lastNameCf = codiceFiscale.substr(LASTNAME_OFFSET, LASTNAME_SIZE);

        const [cons = ""] = lastNameCf.match(new RegExp(`^[${CONSONANT_LIST}]{1,3}`, "ig")) || [];
        const [vow = ""] = lastNameCf.match(new RegExp(`[${VOWEL_LIST}]{1,3}`, "ig")) || [];

        const matchingLength = cons.length + vow.length;

        if (matchingLength < 2 || matchingLength < 3 && lastNameCf[2].toUpperCase() !== "X") {
            return null;
        }

        switch (cons.length) {
        case 3:
            return (cons + vow).split("").join(this.JOLLY_CHAR) + this.JOLLY_CHAR;
        case 2:
            return `${cons[0]}${vow[0]}*${cons[1]}${this.JOLLY_CHAR}`;
        case 1:
            return `${cons[0]}${vow}${this.JOLLY_CHAR}`;
        default:
            return `${vow}${vow.length === 3 ? this.JOLLY_CHAR : ""}`;
        }
    }

    /**
     * Parse firstName information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Partial/possible firstName
     */
    public static cfToFirstName(codiceFiscale: string): string | null {
        if (
            typeof codiceFiscale !== "string"
            || codiceFiscale.length < (FIRSTNAME_OFFSET + FIRSTNAME_SIZE)
            || !(new RegExp(`^(${CF_FULL_NAME_MATCHER})`, "iu")).test(codiceFiscale)
        ) {
            return null;
        }
        return this.cfToLastName(codiceFiscale.substr(FIRSTNAME_OFFSET, FIRSTNAME_SIZE));
    }

    /**
     * Parse gender information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Male or female
     */
    public static cfToGender(codiceFiscale: string): Genders | null {
        if (typeof codiceFiscale !== "string" || codiceFiscale.length < (GENDER_OFFSET + GENDER_SIZE)) {
            return null;
        }
        const cfGenderPart = codiceFiscale.substr(GENDER_OFFSET, GENDER_SIZE);
        const genderInt = parseInt(this.partialCfDeomocode(cfGenderPart, GENDER_OFFSET), 10) * 10;
        return Gender.getGender(genderInt);
    }

    /**
     * Parse birth year information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth Year (4 digits)
     */
    public static cfToBirthYear(codiceFiscale: string): number | null {
        if (typeof codiceFiscale !== "string" || codiceFiscale.length < (YEAR_OFFSET + YEAR_SIZE)) {
            return null;
        }
        const cfBirthYearPart = codiceFiscale.substr(YEAR_OFFSET, YEAR_SIZE);
        const birthYear: number = parseInt(this.partialCfDeomocode(cfBirthYearPart, YEAR_OFFSET), 10);

        if (isNaN(birthYear)) {
            return null;
        }

        const current2DigitsYear: number = parseInt(moment().format("YY"), 10);

        const century: number = (birthYear > current2DigitsYear ? 1 : 0) * 100;
        return moment().subtract(current2DigitsYear - birthYear + century, "years").year();
    }

    /**
     * Parse birth month information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth Month (0...11 - Date notation)
     */
    public static cfToBirthMonth(codiceFiscale: string): DateMonth | null {
        if (typeof codiceFiscale !== "string" || codiceFiscale.length < (MONTH_OFFSET + MONTH_SIZE)) {
            return null;
        }

        const cfBirthMonthPart: any = codiceFiscale.substr(MONTH_OFFSET, MONTH_SIZE).toUpperCase();
        const birthMonth = BirthMonth[cfBirthMonthPart];
        if (typeof birthMonth !== "number" || birthMonth < 0 || birthMonth > 11) {
            return null;
        }
        return birthMonth as DateMonth;
    }

    /**
     * Parse birth day information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth day (1..31)
     */
    public static cfToBirthDay(codiceFiscale: string): DateDay | null {
        if (typeof codiceFiscale !== "string" || codiceFiscale.length < (DAY_OFFSET + DAY_SIZE)) {
            return null;
        }

        const cfBirthDayPart = codiceFiscale.substr(DAY_OFFSET, DAY_SIZE);
        const birthDay: number = parseInt(this.partialCfDeomocode(cfBirthDayPart, DAY_OFFSET), 10);

        if (isNaN(birthDay)) {
            return null;
        }
        return Gender.getDay(birthDay);
    }

    /**
     * Parse birth date information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth Date
     */
    public static cfToBirthDate(codiceFiscale: string): Date | null {
        const birthDay = this.cfToBirthDay(codiceFiscale);
        if (!birthDay) {
            return null;
        }

        const birthMonth = this.cfToBirthMonth(codiceFiscale);
        if (typeof birthMonth !== "number") {
            return null;
        }

        const birthYear = this.cfToBirthYear(codiceFiscale);

        return DateUtils.ymdToDate(birthYear, birthMonth, birthDay);
    }

    /**
     * Parse birth place information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth place
     */
    public static cfToBirthPlace(codiceFiscale: string): BelfiorePlace | null {
        if (typeof codiceFiscale !== "string" || codiceFiscale.length < (PLACE_OFFSET + PLACE_SIZE)) {
            return null;
        }

        const cfBirthPlacePart = codiceFiscale.substr(PLACE_OFFSET, PLACE_SIZE);
        const belfioreCode: string = this.partialCfDeomocode(cfBirthPlacePart, PLACE_OFFSET);

        const birthPlace: BelfiorePlace | undefined = Belfiore[belfioreCode];
        if (!birthPlace) {
            return null;
        }

        const { creationDate, expirationDate } = birthPlace;
        if (creationDate || expirationDate) {
            const birthDate = this.cfToBirthDate(codiceFiscale);
            if (birthDate) {
                let validityCheck = true;
                if (creationDate) {
                    validityCheck = moment(birthDate).isSameOrAfter(moment(creationDate));
                }
                if (validityCheck && expirationDate) {
                    validityCheck = moment(birthDate).isSameOrBefore(moment(expirationDate));
                }
                if (!validityCheck) {
                    return null;
                }
            }
        }
        return birthPlace;
    }

    /**
     * @param fiscalCode 16 character Codice Fiscale to decode
     * @returns Decoded CF Info
     */
    public static cfDecode(fiscalCode: string): IPersonalInfo {
        const year = this.cfToBirthYear(fiscalCode) || undefined;
        const month = this.cfToBirthMonth(fiscalCode) || undefined;
        const day = this.cfToBirthDay(fiscalCode) || undefined;
        const date = DateUtils.ymdToDate(year, month, day) || undefined;
        const place = this.cfToBirthPlace(fiscalCode);
        const personalInfo: IPersonalInfo = {
            firstName: this.cfToFirstName(fiscalCode) || undefined,
            lastName: this.cfToLastName(fiscalCode) || undefined,

            day,
            month,
            year,

            date,

            gender: this.cfToGender(fiscalCode) || undefined,
            place: place ? place.name : undefined,

            omocodeId: this.cfOmocodeId(fiscalCode),
        };

        if (year && month && day) {
            personalInfo.date = new Date(Date.UTC(year, month, day));
        }

        return personalInfo;
    }

    /**
     * Parse lastName to cf part
     * @param lastName Partial or complete CF to parse
     * @returns partial cf
     */
    public static lastNameToCf(lastName?: string | null): string | null {
        if (!lastName || (lastName || "").trim().length < 2) {
            return null;
        }

        if (!(/^[A-Z ']+$/iu).test(diacriticRemover.replace(lastName))) {
            return null;
        }

        const consonants = this.charExtractor(lastName, CONSONANT_LIST);
        const vowels = this.charExtractor(lastName, VOWEL_LIST);

        const partialCf = (consonants + vowels)
            .padEnd(3, "X").substr(0, 3);

        if (partialCf.length < 3) {
            return null;
        }
        return partialCf.toUpperCase();
    }

    /**
     * Parse firstName to cf part
     * @param firstName Partial or complete CF to parse
     * @returns partial cf
     */
    public static firstNameToCf(firstName?: string | null): string | null {
        if (!firstName || (firstName || "").trim().length < 2) {
            return null;
        }
        const consonants = this.charExtractor(firstName, CONSONANT_LIST);
        if (consonants.length >= 4) {
            return (consonants[0] + consonants.substr(2, 2)).toUpperCase();
        }
        return this.lastNameToCf(firstName);
    }

    /**
     * Parse year to cf part
     * @param year Birth year 2 or 4 digit string, number above 19XX or below 100
     * @returns partial cf
     */
    public static yearToCf(year: string | number): string | null {
        let parsedYear: number;
        if (typeof year === "string") {
            parsedYear = parseInt(year, 10);
        } else {
            parsedYear = year;
        }

        if (!(typeof parsedYear === "number" && !isNaN(parsedYear) && (parsedYear >= 1900 || parsedYear < 100))) {
            return null;
        }
        return `0${parsedYear}`.substr(-2);
    }

    /**
     * Parse month information
     * @param month Month number 0..11
     * @returns Birth Month CF code
     */
    public static monthToCf(month: DateMonth | number): string | null {
        if (month < 0 || month > 11) {
            return null;
        }

        return BirthMonth[month] || null;
    }

    /**
     * Parse day information
     * @param day Day number 1..31
     * @param gender Gender enum value
     * @returns Birth Day CF code
     */
    public static dayGenderToCf(day: DateDay | number, gender: Genders): string | null {
        if (day < 1 || day > 31) {
            return null;
        }

        const genderValue = GenderWeight[gender as any];
        if (typeof genderValue !== "number") {
            return null;
        }
        return `0${day + genderValue}`.substr(-2);
    }

    /**
     * Parse Year, Month, Day to Dated
     * @param year 4 digits Year
     * @param month 1 or 2 digits Month 0..11
     * @param day 1,2 digits Day 1..31
     * @returns Date or null if provided year/month/day are not valid
     */
    public static yearMonthDayToDate(
        year: number | null | undefined,
        month: DateMonth | null | undefined = 0,
        day: DateDay | null | undefined = 1,
    ): Date | null {
        if (!year || year < 1861 || [month, day].some((param) => typeof param !== "number") ) {
            return null;
        }
        const date = moment(Date.UTC(year, month || 0, day || 1));
        if (!date.isValid() || date.year() !== year || date.month() !== month || date.date() !== day) {
            return null;
        }
        return date.toDate();
    }

    public static parsePlace(
        place: BelfiorePlace | string,
        scopedBelfioreConnector: BelfioreConnector = Belfiore,
    ): BelfiorePlace | null {
        let verifiedBirthPlace: BelfiorePlace | null | undefined;
        if (!place) {
            return null;
        } else if (typeof place === "object" && place.belfioreCode) {
            verifiedBirthPlace = scopedBelfioreConnector[place.belfioreCode];
        } else if (typeof place === "string") {
            verifiedBirthPlace = scopedBelfioreConnector[place] || scopedBelfioreConnector.findByName(place);
        }
        return verifiedBirthPlace || null;
    }

    /**
     * Parse a Dated and Gender information to create Date/Gender CF part
     * @param date Date or Moment instance, ISO8601 date string or array of numbers [year, month, day]
     * @param gender Gender enum value
     * @returns Birth date and Gender CF code
     */
    public static dateGenderToCf(date: MultiFormatDate, gender: Genders): string | null {
        const parsedDate = DateUtils.parseDate(date);
        if (!parsedDate) {
            return null;
        }

        const cfYear = this.yearToCf(parsedDate.getFullYear());
        const cfMonth = this.monthToCf(parsedDate.getMonth());
        const cfDayGender = this.dayGenderToCf(parsedDate.getDate(), gender);

        return `${cfYear}${cfMonth}${cfDayGender}`;
    }

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
    public static placeToCf(cityOrCountryName: string, provinceId?: string): string | null;
    public static placeToCf(birthDate: MultiFormatDate, cityOrCountryName: string, provinceId?: string): string | null;
    public static placeToCf(dateOrName: MultiFormatDate, nameOrProvince?: string, provinceId?: string): string | null {
        const birthDate: Date | null = DateUtils.parseDate(dateOrName);
        let name: string;
        let province: string | undefined;
        if (!birthDate && typeof dateOrName === "string") {
            name = dateOrName;
            province = nameOrProvince;
        } else if (nameOrProvince) {
            name = nameOrProvince;
            province = provinceId;
        } else {
            return null;
        }

        let placeFinder: BelfioreConnector | undefined = Belfiore;
        if (province) {
            placeFinder = placeFinder.byProvince(province);
        }
        if (birthDate && placeFinder) {
            placeFinder = placeFinder.active(birthDate);
        }
        if (placeFinder) {
            const foundPlace: BelfiorePlace | null = this.parsePlace(name, placeFinder);
            if (foundPlace) {
                return foundPlace.belfioreCode;
            }
        }
        return null;
    }

    /**
     * Generates full CF
     * @returns Complete CF
     */
    public static encodeCf({
        lastName,
        firstName,

        year,
        month,
        day,
        date,

        gender,
        place,

        omocodeId = 0,
    }: IPersonalInfo): string | null {
        const dtParams = DateUtils.parseDate(date) || this.yearMonthDayToDate(year, month, day);
        if (!(dtParams && lastName && firstName && gender && place)) {
            return null;
        }
        const generator = [
            () => this.lastNameToCf(lastName),
            () => this.firstNameToCf(firstName),
            () => this.dateGenderToCf(dtParams, gender),
            () => this.placeToCf(dtParams, place),
        ];
        let cf = "";
        for (const cfPartGenerator of generator) {
            const cfValue = cfPartGenerator();
            if (!cfValue) {
                return null;
            }
            cf += cfValue;
        }

        return this.cfOmocode(cf, omocodeId);
    }

    private static JOLLY_CHAR: string = "*";

    private static checkBitmap(offset: number): boolean {
        // tslint:disable-next-line: no-bitwise
        return !!( 2 ** offset & this.OMOCODE_BITMAP);
    }

    private static charOmocode(char: string, offset: number): string {
        if ((/^[A-Z]$/giu).test(char) && this.checkBitmap(offset)) {
            return Omocodes[char.toUpperCase() as any];
        }

        return char;
    }

    private static charExtractor(text: string, CHAR_LIST: string): string {
        const charMatcher = new RegExp(`[${CHAR_LIST}]+`, "ig");
        const diacriticFreeText = diacriticRemover.replace(text).trim();
        const matchingChars = diacriticFreeText.match(charMatcher);
        return (matchingChars || []).join("");
    }

    /**
     * Convert omocode full or chunk CF into plain one
     * @param partialCodiceFiscale Partial or complete Omocode/Regular CF to parse
     * @param offset starting point of the given chunk in the 16 char CF
     * @returns Regular version w/o omocodes chars of the given chunk
     */
    private static partialCfDeomocode(partialCodiceFiscale: string, offset: number = 0): string {
        const charReplacer = (char: string, position: number) => this.charOmocode(char, position + offset);
        return partialCodiceFiscale.replace(/[\dA-Z]/giu, charReplacer);
    }

    private static appyCaseToChar(targetChar: string, counterCaseChar: string): string {
        if (targetChar && counterCaseChar) {
            const isUpperCase = counterCaseChar[0] === counterCaseChar[0].toUpperCase();
            const isLowerCase = counterCaseChar[0] === counterCaseChar[0].toLowerCase();

            if (isUpperCase && !isLowerCase) {
                return targetChar[0].toUpperCase();
            } else if (!isUpperCase && isLowerCase) {
                return targetChar[0].toLowerCase();
            }
        }
        return targetChar[0];
    }
}
