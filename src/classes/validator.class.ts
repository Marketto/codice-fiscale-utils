import DiacriticRemover from "@marketto/diacritic-remover";
import moment, { Moment } from "moment";
import MultiFormatDate from "../belfiore-connector/types/multi-format-date.type";
import {
    ISO8601_DATE_TIME,
    TIME,
    TIMEZONE,
} from "../const/date-matcher.const";
import {
    INVALID_DATE,
    INVALID_DAY,
    INVALID_DAY_OR_GENDER,
    INVALID_GENDER,
    INVALID_NAME,
    INVALID_PLACE_NAME,
    INVALID_SURNAME,
    INVALID_YEAR,
} from "../const/error-messages.const";
import {
    BELFIORE_CODE_MATCHER,
    CF_NAME_MATCHER,
    CF_SURNAME_MATCHER,
    CHECK_DIGIT,
    CODICE_FISCALE,
    CONSONANT_LIST,
    DAY_MATCHER,
    FEMALE_DAY_MATCHER,
    FEMALE_FULL_DATE_MATCHER,
    FULL_DATE_MATCHER,
    MALE_DAY_MATCHER,
    MALE_FULL_DATE_MATCHER,
    MONTH_MATCHER,
    VOWEL_LIST,
    YEAR_MATCHER,
} from "../const/matcher.const";
import Omocodes from "../enums/omocodes.enum";
import IPersonalInfo from "../interfaces/personal-info.interface";
import DateDay from "../types/date-day.type";
import DateMonth from "../types/date-month.type";
import Genders from "../types/genders.type";
import CfuError from "./cfu-error.class";
import CheckDigitizer from "./check-digitizer.class";
import Gender from "./gender.class";
import Parser from "./parser.class";

const diacriticRemover = new DiacriticRemover();

export default class Validator {

    /**
     * Validation regexp for the given surname or generic
     * @param surname Optional surname to generate validation regexp
     * @return CF Surname matcher
     * @throw INVALID_SURNAME
     */
    public static cfSurname(surname?: string): RegExp {
        let matcher: string = CF_SURNAME_MATCHER;
        if (surname) {
            if (!this.surname().test(surname)) {
                throw new CfuError(INVALID_SURNAME);
            }
            matcher = Parser.surnameToCf(surname) || matcher;
        }
        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * Validation regexp for the given name or generic
     * @param name Optional name to generate validation regexp
     * @return CF name matcher
     * @throw INVALID_NAME
     */
    public static cfName(name?: string): RegExp {
        let matcher: string = CF_NAME_MATCHER;
        if (name) {
            if (!this.surname().test(name)) {
                throw new CfuError(INVALID_NAME);
            }
            matcher = Parser.nameToCf(name) || matcher;
        }
        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * Validation regexp for the given year or generic
     * @param year Optional year to generate validation regexp
     * @return CF year matcher
     */
    public static cfYear(year?: number): RegExp {
        let matcher: string = YEAR_MATCHER;
        if (year) {
            const parsedYear = Parser.yearToCf(year);
            if (parsedYear) {
                matcher = this.deomocode(parsedYear);
            } else {
                throw new CfuError(INVALID_YEAR);
            }
        }
        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * Validation regexp for the given month or generic
     * @param month Optional month to generate validation regexp
     * @return CF month matcher
     */
    public static cfMonth(month?: DateMonth) {
        let matcher: string = MONTH_MATCHER;
        if (month) {
            matcher = Parser.monthToCf(month) || matcher;
        }
        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * Validation regexp for the given day or generic
     * @param day Optional day to generate validation regexp
     * @return CF day matcher
     */
    public static cfDay(day?: DateDay): RegExp {
        let matcher = DAY_MATCHER;
        if (day) {
            const parsedDayM = Parser.dayGenderToCf(day, "M");
            const parsedDayF = Parser.dayGenderToCf(day, "F");
            if (parsedDayM && parsedDayF) {
                const matcherM: string = this.deomocode(parsedDayM);
                const matcherF: string = this.deomocode(parsedDayF);
                matcher = `(?:${matcherM})|(?:${matcherF})`;
            } else {
                throw new CfuError(INVALID_DAY);
            }
        }
        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * Validation regexp for the given year or generic
     * @param day Optional day to generate validation regexp
     * @param gender Gender @see Genders
     * @return CF day and gender matcher
     */
    public static cfDayGender(day?: DateDay, gender?: Genders): RegExp {
        if (!gender) {
            return this.cfDay(day);
        }
        let matcher;
        if (day) {
            const parsedDayGender = Parser.dayGenderToCf(day, gender);
            if (parsedDayGender) {
                matcher = this.deomocode(parsedDayGender);
            } else {
                throw new CfuError(INVALID_DAY_OR_GENDER);
            }
        } else {
            switch (gender) {
            case "M":
                matcher = MALE_DAY_MATCHER;
                break;
            case "F":
                matcher = FEMALE_DAY_MATCHER;
                break;
            default:
                throw new CfuError(INVALID_GENDER);
            }
        }
        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * Validation regexp for the given year or generic
     * @param date Optional date to generate validation regexp
     * @param gender @see Genders
     * @return CF date and gender matcher
     */
    public static cfDateGender(date?: MultiFormatDate | null, gender?: Genders | null): RegExp {
        if (date && !Parser.parseDate(date)) {
            throw new CfuError(INVALID_DATE);
        }
        if (gender && !Gender.toArray().includes(gender)) {
            throw new CfuError(INVALID_GENDER);
        }
        let matcher = FULL_DATE_MATCHER;
        if (date) {
            const parsedDateGender = gender && Parser.dateGenderToCf(date, gender);
            if (parsedDateGender) {
                matcher = this.deomocode(parsedDateGender);
            } else {
                const parseDeomocode = (g: Genders): string => {
                    const parsedGender = Parser.dateGenderToCf(date, g);
                    if (!parsedGender) {
                        throw new CfuError(INVALID_DATE);
                    }
                    return parsedGender && this.deomocode(parsedGender);
                };
                matcher = `(?:${Gender.toArray().map(parseDeomocode).join("|")})`;
            }
        } else if (gender === "M") {
            matcher = MALE_FULL_DATE_MATCHER;
        } else if (gender === "F") {
            matcher = FEMALE_FULL_DATE_MATCHER;
        }
        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * @param placeName Optional place name to generate validation regexp
     * @return CF place matcher
     */
    /**
     * @param date Optional date to generate validation regexp
     * @param placeName Optional place name to generate validation regexp
     * @return CF place matcher
     */
    public static cfPlace(placeName?: string | null): RegExp;
    public static cfPlace(birthDate?: MultiFormatDate | null, placeName?: string | null): RegExp;
    public static cfPlace(birthDateOrName?: MultiFormatDate | null, placeName?: string | null): RegExp {
        let matcher = BELFIORE_CODE_MATCHER;
        if (birthDateOrName) {
            const birthDate: Moment = moment(birthDateOrName);
            const validBD: boolean = birthDate.isValid();
            if (validBD && placeName) {
                const place: string = placeName;
                const parsedPlace = Parser.placeToCf(birthDate, place);
                matcher = this.deomocode(parsedPlace || "");
            } else if (!validBD && typeof birthDateOrName === "string") {
                const place: string = birthDateOrName;
                const parsedPlace = Parser.placeToCf(place);
                matcher = this.deomocode(parsedPlace || "");
            }
        }
        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * Generates full CF validator based on given optional input or generic
     * @param personalInfo Input Object
     * @return CodiceFiscale matcher
     */
    public static codiceFiscale(personalInfo?: IPersonalInfo): RegExp {
        let matcher = CODICE_FISCALE;
        if (personalInfo) {
            const parsedCf = Parser.encodeCf(personalInfo);

            if (parsedCf) {
                matcher = this.deomocode(parsedCf);
            } else {
                const { surname, name, year, month, day, date, gender, place } = personalInfo;
                if (surname || name || year || month || day || date || gender || place) {
                    let dtParams: Date | null = null;
                    if (date) {
                        dtParams = Parser.parseDate(date);
                    } else if (year) {
                        dtParams = Parser.yearMonthDayToDate(year, month, day);
                    }
                    const generator: Array<() => RegExp> = [
                        () => this.cfSurname(surname),
                        () => this.cfName(name),
                        () => this.cfDateGender(dtParams, gender),
                        () => this.cfPlace(dtParams, place),
                    ];

                    matcher = "";
                    for (const validator of generator) {
                        const cfMatcher = validator().toString();
                        const [, cfValue] = cfMatcher.match(/\^(.+)\$/) || [];
                        if (!cfValue) {
                            throw new Error(`Unable to handle [${cfMatcher}]`);
                        }
                        matcher += `(?:${cfValue})`;
                    }
                    // Final addition of CheckDigit
                    matcher += CHECK_DIGIT;
                }
            }
        }
        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * Returns surname validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    public static surname(codiceFiscale?: string): RegExp {
        const LETTER_SET: string = `[A-Z${diacriticRemover.matcherBy(/^[A-Z]$/ui)}]`;
        const SEPARATOR_SET: string = "[' ]";
        const ANY_LETTER: string = `(?:${LETTER_SET}+${SEPARATOR_SET}?)`;
        let matcher: string = `${ANY_LETTER}+`;
        if (codiceFiscale && (/^[A-Z]{1,3}/iu).test(codiceFiscale)) {
            const surnameCf: string = codiceFiscale.substr(0, 3);
            const diacriticizer = (matchingChars: string) => matchingChars.split("")
                .map((char) => `[${diacriticRemover.insensitiveMatcher[char]}]`);

            const [cons, vow] = [
                `^[${CONSONANT_LIST}]{1,3}`,
                `[${VOWEL_LIST}]{1,3}`,
            ].map((charMatcher) => diacriticizer((surnameCf.match(new RegExp(charMatcher, "ig")) || [])[0] || ""));

            const diacriticsVowelList: string = VOWEL_LIST + diacriticRemover.matcherBy(new RegExp(`^[${VOWEL_LIST}]$`, "ui"));
            const diacriticsVowelMatcher: string = `[${diacriticsVowelList}]`;
            const midDiacriticVowelMatcher: string = `(?:${diacriticsVowelMatcher}${SEPARATOR_SET}?)*`;
            const endingDiacritcVowelMatcher: string = `(?:${SEPARATOR_SET}?${midDiacriticVowelMatcher}${diacriticsVowelMatcher})?`;
            switch (cons.length) {
            case 3: {
                const divider = midDiacriticVowelMatcher;
                matcher = divider + cons.join(`${SEPARATOR_SET}?${divider}`) + `(?:${SEPARATOR_SET}?${LETTER_SET}*${LETTER_SET})?`;
                break;
            }
            case 2: {
                const possibilities = [
                    `${vow[0]}${SEPARATOR_SET}?${cons[0]}${midDiacriticVowelMatcher}${cons[1]}`,
                    `${cons[0]}${SEPARATOR_SET}?` + vow.join(`${SEPARATOR_SET}?`) + `${SEPARATOR_SET}?${midDiacriticVowelMatcher}${cons[1]}`,
                    cons.join(`${SEPARATOR_SET}?`) + `${SEPARATOR_SET}?${vow[0]}`,
                ];
                matcher = `(?:${possibilities.join("|")})${endingDiacritcVowelMatcher}`;
                break;
            }
            case 1: {
                const possibilities = [
                    vow.slice(0, 2).join(`${SEPARATOR_SET}?`) +
                        midDiacriticVowelMatcher + cons.join(`${SEPARATOR_SET}?`),
                    `${vow[0]}${SEPARATOR_SET}?` + cons.join(`${SEPARATOR_SET}?`) + vow[1],
                    [cons[0], ...vow.slice(0, 2)].join(`${SEPARATOR_SET}?`),
                ];
                matcher = `(?:${possibilities.join("|")})${endingDiacritcVowelMatcher}`;
                break;
            }
            default:
                matcher = `${vow.join(`${SEPARATOR_SET}?`)}${endingDiacritcVowelMatcher}`;
            }
        }

        return this.isolatedInsensitiveTailor(` *(${matcher}) *`);
    }

    /**
     * Returns name validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    public static firstname(codiceFiscale?: string): RegExp {
        if (codiceFiscale && new RegExp(`^[A-Z]{3}[${CONSONANT_LIST}]{3}`, "iu").test(codiceFiscale)) {
            const ANY_LETTER: string = `[A-Z${diacriticRemover.matcherBy(/^[A-Z]$/ui)}]`;

            const nameCf: string = codiceFiscale.substr(3, 3);

            const cons: string[] = ((nameCf.match(new RegExp(`^[${CONSONANT_LIST}]{1,3}`, "ig")) || [])[0] || "")
                .split("").map((char) => `[${diacriticRemover.insensitiveMatcher[char]}]`);

            const [diacriticsVowelList, diacriticsConsonantList]: string[] = [VOWEL_LIST, CONSONANT_LIST]
                .map((chars) => chars + diacriticRemover.matcherBy(new RegExp(`^[${chars}]$`, "ui")));

            const matcher: string = `[${diacriticsVowelList}]*${cons[0]}[${diacriticsVowelList}]*(?:[${diacriticsConsonantList}][${diacriticsVowelList}]*)?`
                + cons.slice(1, 3).join(`[${diacriticsVowelList}]*`) + `${ANY_LETTER}*`;

            return this.isolatedInsensitiveTailor(matcher);
        }
        return this.surname((codiceFiscale || "").substr(3, 3));
    }

    /**
     * Returns iso8601 date validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    public static date(codiceFiscale?: string): RegExp {
        let matcher: string = ISO8601_DATE_TIME;
        if (codiceFiscale) {
            const parsedDate = Parser.cfToBirthDate(codiceFiscale);
            if (parsedDate) {
                const dateIso8601: string = parsedDate.toJSON();
                if (moment().diff(moment(parsedDate), "y") < 50) {
                    const century: number = parseInt(dateIso8601.substr(0, 2), 10);
                    const centuries: string[] = [
                        century - 1,
                        century,
                    ].map((year) => year.toString().padStart(2, "0"));
                    matcher = `(?:${centuries.join("|")})` + dateIso8601.substr(2, 8);
                } else {
                    matcher = dateIso8601.substr(0, 10);
                }
            }
        }
        return this.isolatedInsensitiveTailor(`${matcher}(?:T${TIME}(?:${TIMEZONE})?)?`);
    }

    /**
     * Returns gender validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    public static gender(codiceFiscale?: string): RegExp {
        const parsedGender = codiceFiscale && Parser.cfToGender(codiceFiscale);
        const matcher: string = parsedGender || `[${Gender.toArray().join("")}]`;
        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * Returns place validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    public static place(codiceFiscale?: string): RegExp {
        let matcher: string = ".+";
        const parsedPlace = codiceFiscale && Parser.cfToBirthPlace(codiceFiscale);

        if (parsedPlace) {
            const nameMatcher: string = parsedPlace.name.replace(/./gu, (c) => diacriticRemover[c] === c ? c : `[${c}${diacriticRemover[c]}]`);
            matcher = `(?:(?:${nameMatcher})|${parsedPlace.belfioreCode})`;
        }

        return this.isolatedInsensitiveTailor(matcher);
    }

    /**
     * Check the given cf validity by form, birth date/place and digit code
     * @param codiceFiscale Complete CF to parse
     * @return Generic or specific regular expression
     */
    public static isValid(codiceFiscale: string): boolean {
        const matcher = this.isolatedInsensitiveTailor(CODICE_FISCALE);
        if (
            // Checking form validity
            !matcher.test(codiceFiscale) ||
            // Checking 16th char check digit validity
            codiceFiscale.substr(15, 1).toUpperCase() !== CheckDigitizer.checkDigit(codiceFiscale) ||
            // Checking Birth date/place validity
            !Parser.cfToBirthPlace(codiceFiscale)
        ) {
            return false;
        }
        return true;
    }

    public static deomocode(omocode: string): string {
        return omocode.replace(/\d/gu, (n: any) => `[${n}${Omocodes[n]}]`);
    }

    private static isolatedInsensitiveTailor(matcher: string): RegExp {
        return new RegExp(`^(?:${matcher})$`, "iu");
    }
}
