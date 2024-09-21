/**
 * @marketto/codice-fiscale-utils 3.1.0
 * Copyright (c) 2019-2024, Marco Ricupero <marco.ricupero@gmail.com>
 * License: MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');
var DiacriticRemover = require('@marketto/diacritic-remover');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const LASTNAME_OFFSET = 0;
const LASTNAME_SIZE = 3;
const FIRSTNAME_OFFSET = 3;
const FIRSTNAME_SIZE = 3;
const YEAR_OFFSET = 6;
const YEAR_SIZE = 2;
const MONTH_OFFSET = 8;
const MONTH_SIZE = 1;
const DAY_OFFSET = 9;
const DAY_SIZE = 2;
const DATE_OFFSET = YEAR_OFFSET;
const DATE_SIZE = YEAR_SIZE + MONTH_SIZE + DAY_SIZE;
const GENDER_OFFSET = DAY_OFFSET;
const GENDER_SIZE = 1;
const PLACE_OFFSET = 11;
const PLACE_SIZE = 4;
const CRC_OFFSET = 15;
const CRC_SIZE = 1;

const YEAR = "[12][0-9]{3}";
const MONTH = "0[1-9]|1[0-2]";
const DAY = "0[1-9]|[12][0-9]|3[01]";
const LEAP_MONTH = "02";
const DAYS_30_MONTHS = "0[469]|11";
const DAYS_31_MONTHS = "0[13578]|1[02]";
const MONTH_DAY = `(?:${MONTH})-(?:0[1-9]|[12]\\d)|(?:${DAYS_30_MONTHS})-30|(?:${DAYS_31_MONTHS})-3[01]`;
const HOURS = "[01]\\d|2[0-3]";
const MINUTES = "[0-5]\\d";
const SECONDS = MINUTES;
const MILLISECONDS = "\\d{3}";
const TIMEZONE = `Z|[-+](?:${HOURS})(?::?${MINUTES})?`;
const TIME = `(?:${HOURS})(?::${MINUTES}(?::${SECONDS}(\\.${MILLISECONDS})?)?(?:${TIMEZONE})?)?`;
const ISO8601_SHORT_DATE = `${YEAR}-(?:${MONTH_DAY})(?:T${TIME})?`;
const ISO8601_DATE_TIME = `${YEAR}(?:-(?:(?:${MONTH})|(?:${MONTH_DAY})(?:T${TIME})?))?`;

var dateMatcher_const = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DAY: DAY,
    DAYS_30_MONTHS: DAYS_30_MONTHS,
    DAYS_31_MONTHS: DAYS_31_MONTHS,
    HOURS: HOURS,
    ISO8601_DATE_TIME: ISO8601_DATE_TIME,
    ISO8601_SHORT_DATE: ISO8601_SHORT_DATE,
    LEAP_MONTH: LEAP_MONTH,
    MILLISECONDS: MILLISECONDS,
    MINUTES: MINUTES,
    MONTH: MONTH,
    MONTH_DAY: MONTH_DAY,
    SECONDS: SECONDS,
    TIME: TIME,
    TIMEZONE: TIMEZONE,
    YEAR: YEAR
});

class DateUtils {
    /**
     * Parse a Dated and Gender information to create Date/Gender CF part
     * @param date Date instance, ISO8601 date string or array of numbers [year, month, day]
     * @returns Parsed Date or null if not valid
     */
    static parseDate(date) {
        if (!(date instanceof Date ||
            (typeof date === "string" &&
                new RegExp(`^(?:${ISO8601_DATE_TIME})$`).test(date)) ||
            (Array.isArray(date) &&
                date.length &&
                !date.some((value) => typeof value !== "number" || isNaN(value))))) {
            return null;
        }
        try {
            let parsedDate;
            if (Array.isArray(date)) {
                const [year, month = 0, day = 1] = date;
                if (month >= 0 && month <= 11 && day > 0 && day <= 31) {
                    parsedDate = dayjs(Date.UTC(year, month || 0, day || 1));
                }
                else {
                    return null;
                }
            }
            else {
                parsedDate = dayjs(date);
            }
            return parsedDate.isValid() ? parsedDate.toDate() : null;
        }
        catch (err) {
            return null;
        }
    }
    static ymdToDate(year, month, day) {
        return this.parseDate([year, month, day]);
    }
}

const CONSONANT_LIST = "B-DF-HJ-NP-TV-Z";
const VOWEL_LIST = "AEIOU";
const OMOCODE_NUMBER_LIST = "\\dLMNP-V";
const OMOCODE_NON_ZERO_NUMBER_LIST = "1-9MNP-V";
const OMOCODE_ZERO_LIST = "0L";
const MONTH_LIST = "A-EHLMPR-T";
const MONTH_30DAYS_LIST = "DHPS";
const MONTH_31DAYS_LIST = "ACELMRT";
const CITY_CODE_LIST = "A-M";
const COUNTRY_CODE_LIST = "Z";
const CF_NAME_MATCHER = `[A-Z][${VOWEL_LIST}][${VOWEL_LIST}X]|[${VOWEL_LIST}]X{2}|[${CONSONANT_LIST}]{2}[A-Z]`;
const CF_SURNAME_MATCHER = CF_NAME_MATCHER;
const CF_FULL_NAME_MATCHER = `(?:${CF_NAME_MATCHER}){2}`;
const YEAR_MATCHER = `[${OMOCODE_NUMBER_LIST}]{2}`;
const LEAP_YEAR_MATCHER = "[02468LNQSU][048LQU]|[13579MPRTV][26NS]";
const MONTH_MATCHER = `[${MONTH_LIST}]`;
const DAY_2X_MATCHER = "[26NS]";
const DAY_3X_MATCHER = "[37PT]";
const DAY_29_MATCHER = `[${OMOCODE_ZERO_LIST}4Q][${OMOCODE_NON_ZERO_NUMBER_LIST}]|[1256MNRS][${OMOCODE_NUMBER_LIST}]`;
const DAY_30_MATCHER = `[${DAY_3X_MATCHER}][${OMOCODE_ZERO_LIST}]`;
const DAY_31_MATCHER = `[${DAY_3X_MATCHER}][${OMOCODE_ZERO_LIST}1M]`;
const DAY_MATCHER = `(?:${DAY_29_MATCHER}|${DAY_3X_MATCHER}[${OMOCODE_ZERO_LIST}1M])`;
const MALE_DAY_MATCHER = `(?:[${OMOCODE_ZERO_LIST}][${OMOCODE_NON_ZERO_NUMBER_LIST}]|[12MN][${OMOCODE_NUMBER_LIST}]|[3P][${OMOCODE_ZERO_LIST}1M])`;
const FEMALE_DAY_MATCHER = `(?:[4Q][${OMOCODE_NON_ZERO_NUMBER_LIST}]|[56RS][${OMOCODE_NUMBER_LIST}]|[7T][${OMOCODE_ZERO_LIST}1M])`;
const MONTH_DAY_MATCHER = `${MONTH_MATCHER}(?:${DAY_29_MATCHER})|[${MONTH_30DAYS_LIST}]${DAY_30_MATCHER}|[${MONTH_31DAYS_LIST}]${DAY_31_MATCHER}`;
const FULL_DATE_MATCHER = `${YEAR_MATCHER}(?:${MONTH_MATCHER}(?:[${OMOCODE_ZERO_LIST}4Q][${OMOCODE_NON_ZERO_NUMBER_LIST}]|[15MR][${OMOCODE_NUMBER_LIST}]|${DAY_2X_MATCHER}[0-8LMNP-U])|[${MONTH_30DAYS_LIST}]${DAY_3X_MATCHER}[${OMOCODE_ZERO_LIST}]|[${MONTH_31DAYS_LIST}]${DAY_3X_MATCHER}[${OMOCODE_ZERO_LIST}1M]|[${MONTH_30DAYS_LIST}${MONTH_31DAYS_LIST}]${DAY_2X_MATCHER}[9V])|(?:${LEAP_YEAR_MATCHER})B${DAY_2X_MATCHER}[9V]`;
const MALE_FULL_DATE_MATCHER = `${YEAR_MATCHER}(?:${MONTH_MATCHER}(?:[${OMOCODE_ZERO_LIST}][${OMOCODE_NON_ZERO_NUMBER_LIST}]|[1M][${OMOCODE_NUMBER_LIST}]|[2N][0-8LMNP-U])|[${MONTH_30DAYS_LIST}][3P][${OMOCODE_ZERO_LIST}]|[${MONTH_31DAYS_LIST}][3P][${OMOCODE_ZERO_LIST}1M]|[${MONTH_30DAYS_LIST}${MONTH_31DAYS_LIST}][2N][9V])|(?:${LEAP_YEAR_MATCHER})B[2N][9V]`;
const FEMALE_FULL_DATE_MATCHER = `${YEAR_MATCHER}(?:${MONTH_MATCHER}(?:[4Q][${OMOCODE_NON_ZERO_NUMBER_LIST}]|[5R][${OMOCODE_NUMBER_LIST}]|[6S][0-8LMNP-U])|[${MONTH_30DAYS_LIST}][7T][${OMOCODE_ZERO_LIST}]|[${MONTH_31DAYS_LIST}][7T][${OMOCODE_ZERO_LIST}1M]|[${MONTH_30DAYS_LIST}${MONTH_31DAYS_LIST}][6S][9V])|(?:${LEAP_YEAR_MATCHER})B[6S][9V]`;
const CITY_CODE_MATCHER = `[${CITY_CODE_LIST}](?:[${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]{2}|[${OMOCODE_ZERO_LIST}](?:[${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]|[${OMOCODE_ZERO_LIST}][${OMOCODE_NON_ZERO_NUMBER_LIST}]))`;
const COUNTRY_CODE_MATCHER = `${COUNTRY_CODE_LIST}[${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]{2}`;
const BELFIORE_CODE_MATCHER = `(?:[${CITY_CODE_LIST}${COUNTRY_CODE_LIST}][${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]{2})|(?:[${CITY_CODE_LIST}][${OMOCODE_ZERO_LIST}](?:[${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]|[${OMOCODE_ZERO_LIST}][${OMOCODE_NON_ZERO_NUMBER_LIST}]))`;
const CHECK_DIGIT = "[A-Z]";
const CODICE_FISCALE = `${CF_FULL_NAME_MATCHER}(?:${FULL_DATE_MATCHER})(?:${BELFIORE_CODE_MATCHER})${CHECK_DIGIT}`;
const PARTIAL_CF_NAME_MATCHER = `[A-Z][${VOWEL_LIST}]?|[${CONSONANT_LIST}]{1,2}`;
const PARTIAL_CF_FULL_NAME = `(?:${PARTIAL_CF_NAME_MATCHER})|(?:(?:${CF_NAME_MATCHER})(?:${PARTIAL_CF_NAME_MATCHER})?)`;
const PARTIAL_YEAR = `[${OMOCODE_NUMBER_LIST}]`;
const PARTIAL_MONTH_DAY = `${MONTH_MATCHER}[${OMOCODE_ZERO_LIST}12456MNQRS]?|[${MONTH_30DAYS_LIST}${MONTH_31DAYS_LIST}]${DAY_3X_MATCHER}`;
const PARTIAL_FULL_DATE = `${PARTIAL_YEAR}|(?:${YEAR_MATCHER}(?:${PARTIAL_MONTH_DAY})?)`;
const PARTIAL_BELFIORE_CODE_MATCHER = `[${CITY_CODE_LIST}${COUNTRY_CODE_LIST}](?:[${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]?)?|[${COUNTRY_CODE_LIST}](?:[${OMOCODE_ZERO_LIST}][${OMOCODE_NUMBER_LIST}]?)?`;
const PARTIAL_CF = `${PARTIAL_CF_FULL_NAME}|(?:${CF_FULL_NAME_MATCHER}(?:(?:${PARTIAL_FULL_DATE})|(?:${FULL_DATE_MATCHER})(?:(?:${PARTIAL_BELFIORE_CODE_MATCHER})|(?:${BELFIORE_CODE_MATCHER})${CHECK_DIGIT}?)?)?)?`;

var matcher_const = /*#__PURE__*/Object.freeze({
    __proto__: null,
    BELFIORE_CODE_MATCHER: BELFIORE_CODE_MATCHER,
    CF_FULL_NAME_MATCHER: CF_FULL_NAME_MATCHER,
    CF_NAME_MATCHER: CF_NAME_MATCHER,
    CF_SURNAME_MATCHER: CF_SURNAME_MATCHER,
    CHECK_DIGIT: CHECK_DIGIT,
    CITY_CODE_LIST: CITY_CODE_LIST,
    CITY_CODE_MATCHER: CITY_CODE_MATCHER,
    CODICE_FISCALE: CODICE_FISCALE,
    CONSONANT_LIST: CONSONANT_LIST,
    COUNTRY_CODE_LIST: COUNTRY_CODE_LIST,
    COUNTRY_CODE_MATCHER: COUNTRY_CODE_MATCHER,
    DAY_29_MATCHER: DAY_29_MATCHER,
    DAY_2X_MATCHER: DAY_2X_MATCHER,
    DAY_30_MATCHER: DAY_30_MATCHER,
    DAY_31_MATCHER: DAY_31_MATCHER,
    DAY_3X_MATCHER: DAY_3X_MATCHER,
    DAY_MATCHER: DAY_MATCHER,
    FEMALE_DAY_MATCHER: FEMALE_DAY_MATCHER,
    FEMALE_FULL_DATE_MATCHER: FEMALE_FULL_DATE_MATCHER,
    FULL_DATE_MATCHER: FULL_DATE_MATCHER,
    LEAP_YEAR_MATCHER: LEAP_YEAR_MATCHER,
    MALE_DAY_MATCHER: MALE_DAY_MATCHER,
    MALE_FULL_DATE_MATCHER: MALE_FULL_DATE_MATCHER,
    MONTH_30DAYS_LIST: MONTH_30DAYS_LIST,
    MONTH_31DAYS_LIST: MONTH_31DAYS_LIST,
    MONTH_DAY_MATCHER: MONTH_DAY_MATCHER,
    MONTH_LIST: MONTH_LIST,
    MONTH_MATCHER: MONTH_MATCHER,
    OMOCODE_NON_ZERO_NUMBER_LIST: OMOCODE_NON_ZERO_NUMBER_LIST,
    OMOCODE_NUMBER_LIST: OMOCODE_NUMBER_LIST,
    OMOCODE_ZERO_LIST: OMOCODE_ZERO_LIST,
    PARTIAL_BELFIORE_CODE_MATCHER: PARTIAL_BELFIORE_CODE_MATCHER,
    PARTIAL_CF: PARTIAL_CF,
    PARTIAL_CF_FULL_NAME: PARTIAL_CF_FULL_NAME,
    PARTIAL_CF_NAME_MATCHER: PARTIAL_CF_NAME_MATCHER,
    PARTIAL_FULL_DATE: PARTIAL_FULL_DATE,
    PARTIAL_MONTH_DAY: PARTIAL_MONTH_DAY,
    PARTIAL_YEAR: PARTIAL_YEAR,
    VOWEL_LIST: VOWEL_LIST,
    YEAR_MATCHER: YEAR_MATCHER
});

var CRC;
(function (CRC) {
    CRC[CRC["B"] = 0] = "B";
    CRC[CRC["A"] = 1] = "A";
    CRC[CRC["K"] = 2] = "K";
    CRC[CRC["P"] = 3] = "P";
    CRC[CRC["L"] = 4] = "L";
    CRC[CRC["C"] = 5] = "C";
    CRC[CRC["Q"] = 6] = "Q";
    CRC[CRC["D"] = 7] = "D";
    CRC[CRC["R"] = 8] = "R";
    CRC[CRC["E"] = 9] = "E";
    CRC[CRC["V"] = 10] = "V";
    CRC[CRC["O"] = 11] = "O";
    CRC[CRC["S"] = 12] = "S";
    CRC[CRC["F"] = 13] = "F";
    CRC[CRC["T"] = 14] = "T";
    CRC[CRC["G"] = 15] = "G";
    CRC[CRC["U"] = 16] = "U";
    CRC[CRC["H"] = 17] = "H";
    CRC[CRC["M"] = 18] = "M";
    CRC[CRC["I"] = 19] = "I";
    CRC[CRC["N"] = 20] = "N";
    CRC[CRC["J"] = 21] = "J";
    CRC[CRC["W"] = 22] = "W";
    CRC[CRC["Z"] = 23] = "Z";
    CRC[CRC["Y"] = 24] = "Y";
    CRC[CRC["X"] = 25] = "X";
})(CRC || (CRC = {}));
var CRC$1 = CRC;

function generatorWrapper(generator) {
    generator[Symbol.iterator] = () => generator;
    return generator;
}

class CheckDigitizer {
    /**
     * Evaluate given partial CF to produce last check digit character
     * @param codiceFiscale Partial or complete Fiscal Code to evaluate to produce last character
     * @returns 16th CF char
     */
    static checkDigit(codiceFiscale) {
        if (typeof codiceFiscale === "string" &&
            new RegExp(PARTIAL_CF).test(codiceFiscale)) {
            const partialCF = codiceFiscale.substr(LASTNAME_OFFSET, CRC_OFFSET);
            let partialCfValue = 0;
            for (const charValue of this.evaluateChar(partialCF)) {
                partialCfValue += charValue;
            }
            return String.fromCharCode((partialCfValue % this.CRC_MOD) + this.CHAR_OFFSET);
        }
        return null;
    }
    static evaluateChar(partialCF = "") {
        return generatorWrapper(this.evaluateCharGenerator(partialCF));
    }
    /**
     * Partial FiscalCode Evaluator
     * @param Partial Fiscal Code to evaluate
     * @yields character value odd/even
     */
    static *evaluateCharGenerator(partialCF = "") {
        if (typeof partialCF === "string" && partialCF.length) {
            for (let index = 0; index < partialCF.length; index++) {
                let char = partialCF[index].toUpperCase();
                const isNumber = /^\d$/u.test(char);
                if (isNumber) {
                    // Numbers have always (odd/even) the same values of corresponding letters (0-9 => A-J)
                    char = String.fromCharCode(parseInt(char, 10) + this.CHAR_OFFSET);
                }
                // Odd/Even are shifted/swapped
                // array starts from 0, "Agenzia delle Entrate" documentation counts the string from 1
                const isOdd = !(index % 2); // Odd according to documentation
                if (isOdd) {
                    // Odd positions
                    yield parseInt(CRC$1[char], 10);
                }
                else {
                    // Even positions
                    yield char.charCodeAt(0) - this.CHAR_OFFSET;
                }
            }
        }
        return 0;
    }
}
CheckDigitizer.CHAR_OFFSET = 65;
CheckDigitizer.CRC_MOD = 26;

var BirthMonth;
(function (BirthMonth) {
    BirthMonth[BirthMonth["A"] = 0] = "A";
    BirthMonth[BirthMonth["B"] = 1] = "B";
    BirthMonth[BirthMonth["C"] = 2] = "C";
    BirthMonth[BirthMonth["D"] = 3] = "D";
    BirthMonth[BirthMonth["E"] = 4] = "E";
    BirthMonth[BirthMonth["H"] = 5] = "H";
    BirthMonth[BirthMonth["L"] = 6] = "L";
    BirthMonth[BirthMonth["M"] = 7] = "M";
    BirthMonth[BirthMonth["P"] = 8] = "P";
    BirthMonth[BirthMonth["R"] = 9] = "R";
    BirthMonth[BirthMonth["S"] = 10] = "S";
    BirthMonth[BirthMonth["T"] = 11] = "T";
})(BirthMonth || (BirthMonth = {}));
var BirthMonth$1 = BirthMonth;

var GenderWeight;
(function (GenderWeight) {
    GenderWeight[GenderWeight["M"] = 0] = "M";
    GenderWeight[GenderWeight["F"] = 40] = "F";
})(GenderWeight || (GenderWeight = {}));
var GenderWeight$1 = GenderWeight;

var Omocodes;
(function (Omocodes) {
    Omocodes[Omocodes["L"] = 0] = "L";
    Omocodes[Omocodes["M"] = 1] = "M";
    Omocodes[Omocodes["N"] = 2] = "N";
    Omocodes[Omocodes["P"] = 3] = "P";
    Omocodes[Omocodes["Q"] = 4] = "Q";
    Omocodes[Omocodes["R"] = 5] = "R";
    Omocodes[Omocodes["S"] = 6] = "S";
    Omocodes[Omocodes["T"] = 7] = "T";
    Omocodes[Omocodes["U"] = 8] = "U";
    Omocodes[Omocodes["V"] = 9] = "V";
})(Omocodes || (Omocodes = {}));
var Omocodes$1 = Omocodes;

class Gender {
    static getDay(genderDay) {
        const plainDay = genderDay % GenderWeight$1.F;
        return plainDay > 0 && plainDay <= this.MAX_MONTH_DAY
            ? plainDay
            : null;
    }
    static getGender(genderDay) {
        return (this.toArray().find((gender) => genderDay >= GenderWeight$1[gender] &&
            genderDay <= GenderWeight$1[gender] + this.MAX_MONTH_DAY) || null);
    }
    static genderizeDay(day, gender) {
        return day + GenderWeight$1[gender];
    }
    static toArray() {
        return ["M", "F"];
    }
}
Gender.MAX_MONTH_DAY = 31;

const CF_INTRODUCTION_DATE = new Date("1973-09-29");

const diacriticRemover$1 = new DiacriticRemover();
class Parser {
    constructor(belfioreConnector) {
        this.belfioreConnector = belfioreConnector;
        /**
         * Default omocode bitmap
         */
        this.OMOCODE_BITMAP = 0b0111011011000000;
        this.JOLLY_CHAR = "*";
    }
    /**
     * Convert omocode CF into plain one
     * @param codiceFiscale Partial or complete Omocode/Regular CF to parse, starting from LastName
     * @returns Regular CF w/o omocodes chars
     */
    cfDeomocode(codiceFiscale) {
        if (codiceFiscale && codiceFiscale.length <= YEAR_OFFSET) {
            return codiceFiscale;
        }
        const deomocodedCf = this.partialCfDeomocode(codiceFiscale);
        if (deomocodedCf.length < CRC_OFFSET) {
            return deomocodedCf;
        }
        const partialDeomocodedCf = deomocodedCf.substring(LASTNAME_OFFSET, CRC_OFFSET);
        return (partialDeomocodedCf +
            this.appyCaseToChar(CheckDigitizer.checkDigit(deomocodedCf) || "", deomocodedCf.substring(CRC_OFFSET, CRC_OFFSET + CRC_SIZE)));
    }
    cfOmocode(codiceFiscale, omocodeId) {
        if (!omocodeId) {
            return this.cfDeomocode(codiceFiscale);
        }
        const omocodedCf = codiceFiscale.split("");
        // tslint:disable-next-line: prefer-for-of
        for (let i = codiceFiscale.length - 1, o = 0; i >= 0; i--) {
            // tslint:disable-next-line: no-bitwise
            if ((Math.pow(2, i)) & this.OMOCODE_BITMAP) {
                // tslint:disable-next-line: no-bitwise
                const charToEncode = !!(omocodeId & (Math.pow(2, o)));
                const isOmocode = isNaN(parseInt(omocodedCf[i], 10));
                if (charToEncode !== isOmocode) {
                    const char = omocodedCf[i].toUpperCase();
                    omocodedCf[i] = Omocodes$1[char];
                }
                o++;
            }
        }
        const crc = omocodedCf[CRC_OFFSET];
        if (crc) {
            const partialCf = omocodedCf.slice(LASTNAME_OFFSET, CRC_OFFSET).join("");
            omocodedCf[CRC_OFFSET] = this.appyCaseToChar(CheckDigitizer.checkDigit(partialCf) || "", crc);
        }
        return omocodedCf.join("");
    }
    cfOmocodeId(codiceFiscale) {
        const cfOmocodeBitmap = codiceFiscale
            .split("")
            // tslint:disable-next-line: no-bitwise
            .filter((char, index) => (Math.pow(2, index)) & this.OMOCODE_BITMAP)
            .map((char) => (/^[a-z]$/i.test(diacriticRemover$1[char]) ? 1 : 0))
            .join("");
        return parseInt(cfOmocodeBitmap, 2);
    }
    /**
     * Parse lastName information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Partial/possible lastName
     */
    cfToLastName(codiceFiscale) {
        const cfLastNamePart = codiceFiscale === null || codiceFiscale === void 0 ? void 0 : codiceFiscale.substring(LASTNAME_OFFSET, LASTNAME_OFFSET + LASTNAME_SIZE);
        if (typeof codiceFiscale !== "string" ||
            cfLastNamePart.length !== LASTNAME_SIZE ||
            !new RegExp(`^(?:${CF_SURNAME_MATCHER})`, "iu").test(cfLastNamePart)) {
            return null;
        }
        const lastNameCf = codiceFiscale.substring(LASTNAME_OFFSET, LASTNAME_OFFSET + LASTNAME_SIZE);
        const [cons = ""] = lastNameCf.match(new RegExp(`^[${CONSONANT_LIST}]{1,3}`, "ig")) || [];
        const [vow = ""] = lastNameCf.match(new RegExp(`[${VOWEL_LIST}]{1,3}`, "ig")) || [];
        const matchingLength = cons.length + vow.length;
        if (matchingLength < 2 ||
            (matchingLength < 3 && lastNameCf[2].toUpperCase() !== "X")) {
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
    cfToFirstName(codiceFiscale) {
        const cfFirstNamePart = codiceFiscale === null || codiceFiscale === void 0 ? void 0 : codiceFiscale.substring(FIRSTNAME_OFFSET, FIRSTNAME_OFFSET + FIRSTNAME_SIZE);
        if (typeof codiceFiscale !== "string" ||
            (cfFirstNamePart === null || cfFirstNamePart === void 0 ? void 0 : cfFirstNamePart.length) !== FIRSTNAME_SIZE ||
            !new RegExp(`^(${CF_NAME_MATCHER})$`, "iu").test(cfFirstNamePart)) {
            return null;
        }
        return this.cfToLastName(cfFirstNamePart);
    }
    /**
     * Parse gender information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Male or female
     */
    cfToGender(codiceFiscale) {
        if (typeof codiceFiscale !== "string" ||
            codiceFiscale.length < GENDER_OFFSET + GENDER_SIZE) {
            return null;
        }
        const cfGenderPart = codiceFiscale.substring(GENDER_OFFSET, GENDER_OFFSET + GENDER_SIZE);
        const genderInt = parseInt(this.partialCfDeomocode(cfGenderPart, GENDER_OFFSET), 10) * 10;
        return Gender.getGender(genderInt);
    }
    /**
     * Parse birth year information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth Year (4 digits)
     */
    cfToBirthYear(codiceFiscale) {
        if (typeof codiceFiscale !== "string" ||
            codiceFiscale.length < YEAR_OFFSET + YEAR_SIZE) {
            return null;
        }
        const cfBirthYearPart = codiceFiscale.substring(YEAR_OFFSET, YEAR_OFFSET + YEAR_SIZE);
        const birthYear = parseInt(this.partialCfDeomocode(cfBirthYearPart, YEAR_OFFSET), 10);
        if (isNaN(birthYear)) {
            return null;
        }
        const current2DigitsYear = parseInt(dayjs().format("YY"), 10);
        const century = (birthYear > current2DigitsYear ? 1 : 0) * 100;
        return dayjs()
            .subtract(current2DigitsYear - birthYear + century, "years")
            .year();
    }
    /**
     * Parse birth month information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth Month (0...11 - Date notation)
     */
    cfToBirthMonth(codiceFiscale) {
        if (typeof codiceFiscale !== "string" ||
            codiceFiscale.length < MONTH_OFFSET + MONTH_SIZE) {
            return null;
        }
        const cfBirthMonthPart = codiceFiscale
            .substring(MONTH_OFFSET, MONTH_OFFSET + MONTH_SIZE)
            .toUpperCase();
        const birthMonth = BirthMonth$1[cfBirthMonthPart];
        if (typeof birthMonth !== "number" || birthMonth < 0 || birthMonth > 11) {
            return null;
        }
        return birthMonth;
    }
    /**
     * Parse birth day information
     * @param codiceFiscale Partial or complete CF to parse
     * @returns Birth day (1..31)
     */
    cfToBirthDay(codiceFiscale) {
        if (typeof codiceFiscale !== "string" ||
            codiceFiscale.length < DAY_OFFSET + DAY_SIZE) {
            return null;
        }
        const cfBirthDayPart = codiceFiscale.substring(DAY_OFFSET, DAY_OFFSET + DAY_SIZE);
        const birthDay = parseInt(this.partialCfDeomocode(cfBirthDayPart, DAY_OFFSET), 10);
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
    cfToBirthDate(codiceFiscale) {
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
     * @param checkBirthDateConsistency Ensure birthday is between creation and expiran date of the cf city or country, default value: true
     * @returns Birth place
     */
    cfToBirthPlace(codiceFiscale_1) {
        return __awaiter(this, arguments, void 0, function* (codiceFiscale, checkBirthDateConsistency = true) {
            if (typeof codiceFiscale !== "string" ||
                codiceFiscale.length < PLACE_OFFSET + PLACE_SIZE) {
                return null;
            }
            const cfBirthPlacePart = codiceFiscale.substring(PLACE_OFFSET, PLACE_OFFSET + PLACE_SIZE);
            const belfioreCode = this.partialCfDeomocode(cfBirthPlacePart, PLACE_OFFSET);
            const birthPlace = yield this.belfioreConnector.findByCode(belfioreCode);
            if (!birthPlace) {
                return null;
            }
            const { creationDate, expirationDate } = birthPlace;
            if ((creationDate || expirationDate) && checkBirthDateConsistency) {
                const birthDate = this.cfToBirthDate(codiceFiscale);
                const isBirthDateAfterCfIntroduction = dayjs(CF_INTRODUCTION_DATE)
                    // Adding some tolerance
                    .add(5, "years")
                    .isBefore(birthDate, "day");
                // Skipping birthDate vs Creation/Expiration check for people born up to 5y after cf introduction
                if (birthDate && isBirthDateAfterCfIntroduction) {
                    const datePlaceConsistency = 
                    // BirthDay is before expiration date
                    (!expirationDate ||
                        dayjs(birthDate).isBefore(expirationDate, "day")) &&
                        // BirthDay is after creation date
                        (!creationDate || dayjs(birthDate).isAfter(creationDate, "day"));
                    if (!datePlaceConsistency) {
                        return null;
                    }
                }
            }
            return birthPlace;
        });
    }
    /**
     * @param fiscalCode 16 character Codice Fiscale to decode
     * @returns Decoded CF Info
     */
    cfDecode(fiscalCode) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const year = this.cfToBirthYear(fiscalCode) || undefined;
            // 0 is a month
            const month = (_a = this.cfToBirthMonth(fiscalCode)) !== null && _a !== void 0 ? _a : undefined;
            const day = this.cfToBirthDay(fiscalCode) || undefined;
            const date = DateUtils.ymdToDate(year, month, day) || undefined;
            const place = yield this.cfToBirthPlace(fiscalCode);
            const personalInfo = {
                firstName: this.cfToFirstName(fiscalCode) || undefined,
                lastName: this.cfToLastName(fiscalCode) || undefined,
                day,
                month,
                year,
                date,
                gender: this.cfToGender(fiscalCode) || undefined,
                place: place || undefined,
                omocodeId: this.cfOmocodeId(fiscalCode),
            };
            if (year && month && day) {
                personalInfo.date = new Date(Date.UTC(year, month, day));
            }
            return personalInfo;
        });
    }
    /**
     * Parse lastName to cf part
     * @param lastName Partial or complete CF to parse
     * @returns partial cf
     */
    lastNameToCf(lastName) {
        if (!lastName || (lastName || "").trim().length < 2) {
            return null;
        }
        if (!/^[A-Z ']{1,32}$/iu.test(diacriticRemover$1.replace(lastName))) {
            return null;
        }
        const consonants = this.charExtractor(lastName, CONSONANT_LIST);
        const vowels = this.charExtractor(lastName, VOWEL_LIST);
        const partialCf = (consonants + vowels).padEnd(3, "X").substring(0, 3);
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
    firstNameToCf(firstName) {
        if (!firstName || (firstName || "").trim().length < 2) {
            return null;
        }
        const consonants = this.charExtractor(firstName, CONSONANT_LIST);
        if (consonants.length >= 4) {
            return (consonants[0] + consonants.substring(2, 4)).toUpperCase();
        }
        return this.lastNameToCf(firstName);
    }
    /**
     * Parse year to cf part
     * @param year Birth year 2 or 4 digit string, number above 19XX or below 100
     * @returns partial cf
     */
    yearToCf(year) {
        let parsedYear;
        if (typeof year === "string") {
            parsedYear = parseInt(year, 10);
        }
        else {
            parsedYear = year;
        }
        if (!(typeof parsedYear === "number" &&
            !isNaN(parsedYear) &&
            (parsedYear >= 1900 || parsedYear < 100))) {
            return null;
        }
        return `0${parsedYear}`.substr(-2);
    }
    /**
     * Parse month information
     * @param month Month number 0..11
     * @returns Birth Month CF code
     */
    monthToCf(month) {
        if (month < 0 || month > 11) {
            return null;
        }
        return BirthMonth$1[month] || null;
    }
    /**
     * Parse day information
     * @param day Day number 1..31
     * @param gender Gender enum value
     * @returns Birth Day CF code
     */
    dayGenderToCf(day, gender) {
        if (day < 1 || day > 31) {
            return null;
        }
        const genderValue = GenderWeight$1[gender];
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
    yearMonthDayToDate(year, month = 0, day = 1) {
        if (!year ||
            year < 1861 ||
            [month, day].some((param) => typeof param !== "number")) {
            return null;
        }
        const date = dayjs(Date.UTC(year, month || 0, day || 1));
        if (!date.isValid() ||
            date.year() !== year ||
            date.month() !== month ||
            date.date() !== day) {
            return null;
        }
        return date.toDate();
    }
    /**
     * Parse Place information to return city or country details
     * @param place Belfiore place instance, belfiore code or city/country name
     * @returns BelfiorePlace instance with the target city or country details
     */
    parsePlace(place) {
        return __awaiter(this, void 0, void 0, function* () {
            let verifiedBirthPlace;
            if (!place) {
                return null;
            }
            else if (typeof place === "object" && place.belfioreCode) {
                verifiedBirthPlace = yield this.belfioreConnector.findByCode(place.belfioreCode);
            }
            else if (typeof place === "string") {
                verifiedBirthPlace =
                    (yield this.belfioreConnector.findByCode(place)) ||
                        (yield this.belfioreConnector.findByName(place));
            }
            return verifiedBirthPlace || null;
        });
    }
    /**
     * Parse Date and Gender information to create Date/Gender CF part
     * @param date Date instance, ISO8601 date string or array of numbers [year, month, day]
     * @param gender Gender enum value
     * @returns Birth date and Gender CF code
     */
    dateGenderToCf(date, gender) {
        const parsedDate = DateUtils.parseDate(date);
        if (!parsedDate) {
            return null;
        }
        const cfYear = this.yearToCf(parsedDate.getFullYear());
        const cfMonth = this.monthToCf(parsedDate.getMonth());
        const cfDayGender = this.dayGenderToCf(parsedDate.getDate(), gender);
        return `${cfYear}${cfMonth}${cfDayGender}`;
    }
    placeToCf(dateOrName, nameOrProvince, provinceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const birthDate = DateUtils.parseDate(dateOrName);
            let name;
            let province;
            if (!birthDate && typeof dateOrName === "string") {
                name = dateOrName;
                province = nameOrProvince;
            }
            else if (nameOrProvince) {
                name = nameOrProvince;
                province = provinceId;
            }
            else {
                return null;
            }
            let placeFinder = this.belfioreConnector;
            if (province) {
                placeFinder = placeFinder.byProvince(province);
            }
            if (birthDate && placeFinder) {
                placeFinder = placeFinder.from(birthDate);
            }
            if (placeFinder) {
                const foundPlace = yield new Parser(placeFinder).parsePlace(name);
                if (foundPlace) {
                    return foundPlace.belfioreCode;
                }
            }
            return null;
        });
    }
    /**
     * Generates full CF
     * @returns Complete CF
     */
    encodeCf(_a) {
        return __awaiter(this, arguments, void 0, function* ({ lastName, firstName, year, month, day, date, gender, place, omocodeId = 0, }) {
            const dtParams = DateUtils.parseDate(date) || this.yearMonthDayToDate(year, month, day);
            if (!(dtParams && lastName && firstName && gender && place)) {
                return null;
            }
            const generator = [
                () => __awaiter(this, void 0, void 0, function* () { return this.lastNameToCf(lastName); }),
                () => __awaiter(this, void 0, void 0, function* () { return this.firstNameToCf(firstName); }),
                () => __awaiter(this, void 0, void 0, function* () { return this.dateGenderToCf(dtParams, gender); }),
                () => __awaiter(this, void 0, void 0, function* () {
                    return yield this.placeToCf(dtParams, (place === null || place === void 0 ? void 0 : place.belfioreCode) || place);
                }),
            ];
            let cf = "";
            for (const cfPartGenerator of generator) {
                const cfValue = yield cfPartGenerator();
                if (!cfValue) {
                    return null;
                }
                cf += cfValue;
            }
            return this.cfOmocode(cf, omocodeId);
        });
    }
    checkBitmap(offset) {
        // tslint:disable-next-line: no-bitwise
        return !!((Math.pow(2, offset)) & this.OMOCODE_BITMAP);
    }
    charOmocode(char, offset) {
        if (/^[A-Z]$/giu.test(char) && this.checkBitmap(offset)) {
            return Omocodes$1[char.toUpperCase()];
        }
        return char;
    }
    charExtractor(text, CHAR_LIST) {
        const charMatcher = new RegExp(`[${CHAR_LIST}]{1,24}`, "ig");
        const diacriticFreeText = diacriticRemover$1.replace(text).trim();
        const matchingChars = diacriticFreeText.match(charMatcher);
        return (matchingChars || []).join("");
    }
    /**
     * Convert omocode full or chunk CF into plain one
     * @param partialCodiceFiscale Partial or complete Omocode/Regular CF to parse
     * @param offset starting point of the given chunk in the 16 char CF
     * @returns Regular version w/o omocodes chars of the given chunk
     */
    partialCfDeomocode(partialCodiceFiscale, offset = 0) {
        const charReplacer = (char, position) => this.charOmocode(char, position + offset);
        return partialCodiceFiscale.replace(/[\dA-Z]/giu, charReplacer);
    }
    appyCaseToChar(targetChar, counterCaseChar) {
        if (targetChar && counterCaseChar) {
            const isUpperCase = counterCaseChar[0] === counterCaseChar[0].toUpperCase();
            const isLowerCase = counterCaseChar[0] === counterCaseChar[0].toLowerCase();
            if (isUpperCase && !isLowerCase) {
                return targetChar[0].toUpperCase();
            }
            else if (!isUpperCase && isLowerCase) {
                return targetChar[0].toLowerCase();
            }
        }
        return targetChar[0];
    }
}

const INVALID_SURNAME = "Provided lastName is not valid, only letters, diacritics and apostrophe allowed";
const INVALID_NAME = "Provided name is not valid, only letters, diacritics and apostrophe allowed";
const INVALID_DAY = "Provided day is not valid";
const INVALID_GENDER = "Provided gender is not valid";
const INVALID_DAY_OR_GENDER = "Provided day and/or gender are not valid";
const INVALID_YEAR = "Provided year is not valid, only 2 or 4 digit numbers are allowed";
const INVALID_DATE = "Provided date is not valid";
const INVALID_PLACE_NAME = "Proviced City/Country name is not valid";

var ErrorMessages = /*#__PURE__*/Object.freeze({
    __proto__: null,
    INVALID_DATE: INVALID_DATE,
    INVALID_DAY: INVALID_DAY,
    INVALID_DAY_OR_GENDER: INVALID_DAY_OR_GENDER,
    INVALID_GENDER: INVALID_GENDER,
    INVALID_NAME: INVALID_NAME,
    INVALID_PLACE_NAME: INVALID_PLACE_NAME,
    INVALID_SURNAME: INVALID_SURNAME,
    INVALID_YEAR: INVALID_YEAR
});

class CfuError extends Error {
    constructor(errorCode) {
        super((Object.entries(ErrorMessages).find(([errId]) => errId === errorCode) || [])[1] || errorCode);
    }
}

const diacriticRemover = new DiacriticRemover();
class Pattern {
    constructor(belfioreConnector) {
        this.belfioreConnector = belfioreConnector;
        this.LETTER_SET = `[A-Z${diacriticRemover.matcherBy(/^[A-Z]$/iu)}]`;
        this.SEPARATOR_SET = "(?:'?\\s{0,4})";
        this.parser = new Parser(belfioreConnector);
    }
    /**
     * Validation regexp for the given lastName or generic
     * @param lastName Optional lastName to generate validation regexp
     * @return CF Surname matcher
     * @throw INVALID_SURNAME
     */
    cfLastName(lastName) {
        let matcher = CF_SURNAME_MATCHER;
        if (lastName) {
            if (!this.lastName().test(lastName)) {
                throw new CfuError(INVALID_SURNAME);
            }
            matcher = this.parser.lastNameToCf(lastName) || matcher;
        }
        return this.isolatedInsensitiveTailor(matcher);
    }
    /**
     * Validation regexp for the given name or generic
     * @param name Optional name to generate validation regexp
     * @return CF name matcher
     * @throw INVALID_NAME
     */
    cfFirstName(name) {
        let matcher = CF_NAME_MATCHER;
        if (name) {
            if (!this.lastName().test(name)) {
                throw new CfuError(INVALID_NAME);
            }
            matcher = this.parser.firstNameToCf(name) || matcher;
        }
        return this.isolatedInsensitiveTailor(matcher);
    }
    /**
     * Validation regexp for the given year or generic
     * @param year Optional year to generate validation regexp
     * @return CF year matcher
     */
    cfYear(year) {
        let matcher = YEAR_MATCHER;
        if (year) {
            const parsedYear = this.parser.yearToCf(year);
            if (parsedYear) {
                matcher = this.deomocode(parsedYear);
            }
            else {
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
    cfMonth(month) {
        let matcher = MONTH_MATCHER;
        if (month) {
            matcher = this.parser.monthToCf(month) || matcher;
        }
        return this.isolatedInsensitiveTailor(matcher);
    }
    /**
     * Validation regexp for the given day or generic
     * @param day Optional day to generate validation regexp
     * @return CF day matcher
     */
    cfDay(day) {
        let matcher = DAY_MATCHER;
        if (day) {
            const parsedDayM = this.parser.dayGenderToCf(day, "M");
            const parsedDayF = this.parser.dayGenderToCf(day, "F");
            if (parsedDayM && parsedDayF) {
                const matcherM = this.deomocode(parsedDayM);
                const matcherF = this.deomocode(parsedDayF);
                matcher = `(?:${matcherM})|(?:${matcherF})`;
            }
            else {
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
    cfDayGender(day, gender) {
        if (!gender) {
            return this.cfDay(day);
        }
        let matcher;
        if (day) {
            const parsedDayGender = this.parser.dayGenderToCf(day, gender);
            if (parsedDayGender) {
                matcher = this.deomocode(parsedDayGender);
            }
            else {
                throw new CfuError(INVALID_DAY_OR_GENDER);
            }
        }
        else {
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
    cfDateGender(date, gender) {
        if (date && !DateUtils.parseDate(date)) {
            throw new CfuError(INVALID_DATE);
        }
        if (gender && !Gender.toArray().includes(gender)) {
            throw new CfuError(INVALID_GENDER);
        }
        let matcher = FULL_DATE_MATCHER;
        if (date) {
            const parsedDateGender = gender && this.parser.dateGenderToCf(date, gender);
            if (parsedDateGender) {
                matcher = this.deomocode(parsedDateGender);
            }
            else {
                const parseDeomocode = (g) => {
                    const parsedGender = this.parser.dateGenderToCf(date, g);
                    if (!parsedGender) {
                        throw new CfuError(INVALID_DATE);
                    }
                    return parsedGender && this.deomocode(parsedGender);
                };
                matcher = `(?:${Gender.toArray().map(parseDeomocode).join("|")})`;
            }
        }
        else if (gender === "M") {
            matcher = MALE_FULL_DATE_MATCHER;
        }
        else if (gender === "F") {
            matcher = FEMALE_FULL_DATE_MATCHER;
        }
        return this.isolatedInsensitiveTailor(matcher);
    }
    cfPlace(birthDateOrName, placeName) {
        return __awaiter(this, void 0, void 0, function* () {
            let matcher = BELFIORE_CODE_MATCHER;
            if (birthDateOrName) {
                const birthDate = DateUtils.parseDate(birthDateOrName);
                if (birthDate && placeName) {
                    const place = placeName;
                    const parsedPlace = yield this.parser.placeToCf(birthDate, place);
                    matcher = this.deomocode(parsedPlace || "");
                }
                else if (!birthDate && typeof birthDateOrName === "string") {
                    const place = birthDateOrName;
                    const parsedPlace = yield this.parser.placeToCf(place);
                    matcher = this.deomocode(parsedPlace || "");
                }
            }
            return this.isolatedInsensitiveTailor(matcher);
        });
    }
    /**
     * Generates full CF validator based on given optional input or generic
     * @param personalInfo Input Object
     * @return CodiceFiscale matcher
     */
    codiceFiscale(personalInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let matcher = CODICE_FISCALE;
            if (personalInfo) {
                const parsedCf = yield this.parser.encodeCf(personalInfo);
                if (parsedCf) {
                    matcher = this.deomocode(parsedCf);
                }
                else {
                    const { lastName, firstName, year, month, day, date, gender, place } = personalInfo;
                    if (lastName ||
                        firstName ||
                        year ||
                        month ||
                        day ||
                        date ||
                        gender ||
                        place) {
                        let dtParams = null;
                        if (date) {
                            dtParams = DateUtils.parseDate(date);
                        }
                        else if (year) {
                            dtParams = this.parser.yearMonthDayToDate(year, month, day);
                        }
                        const generator = [
                            () => __awaiter(this, void 0, void 0, function* () { return this.cfLastName(lastName); }),
                            () => __awaiter(this, void 0, void 0, function* () { return this.cfFirstName(firstName); }),
                            () => __awaiter(this, void 0, void 0, function* () { return this.cfDateGender(dtParams, gender); }),
                            () => __awaiter(this, void 0, void 0, function* () {
                                return yield this.cfPlace(dtParams, (place === null || place === void 0 ? void 0 : place.belfioreCode) || place);
                            }),
                        ];
                        matcher = "";
                        for (const validator of generator) {
                            const cfMatcher = (yield validator()).toString();
                            const match = cfMatcher.match(/\^(.{1,256})\$/);
                            const cfValue = match && match[1];
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
        });
    }
    /**
     * Returns lastName validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    lastName(codiceFiscale) {
        let matcher = `${this.LETTER_SET}{1,24}`;
        if (codiceFiscale && /^[A-Z]{1,3}/iu.test(codiceFiscale)) {
            const lastNameCf = codiceFiscale.substr(0, 3);
            const diacriticizer = (matchingChars) => matchingChars
                .split("")
                .map((char) => `[${diacriticRemover.insensitiveMatcher[char]}]`);
            const [cons, vow] = [
                `^[${CONSONANT_LIST}]{1,3}`,
                `[${VOWEL_LIST}]{1,3}`,
            ].map((charMatcher) => diacriticizer((lastNameCf.match(new RegExp(charMatcher, "ig")) || [])[0] || ""));
            const diacriticsVowelList = VOWEL_LIST +
                diacriticRemover.matcherBy(new RegExp(`^[${VOWEL_LIST}]$`, "ui"));
            const diacriticsVowelMatcher = `[${diacriticsVowelList}]`;
            const midDiacriticVowelMatcher = `(?:${diacriticsVowelMatcher}${this.SEPARATOR_SET}){0,24}`;
            const endingDiacritcVowelMatcher = `(?:${this.SEPARATOR_SET}${midDiacriticVowelMatcher}${diacriticsVowelMatcher})?`;
            switch (cons.length) {
                case 3: {
                    const divider = midDiacriticVowelMatcher;
                    matcher =
                        divider +
                            cons.join(`${this.SEPARATOR_SET}${divider}`) +
                            `(?:${this.SEPARATOR_SET}${this.LETTER_SET}{0,24}${this.LETTER_SET})?`;
                    break;
                }
                case 2: {
                    const possibilities = [
                        `${vow[0]}${midDiacriticVowelMatcher}${this.SEPARATOR_SET}${cons[0]}${midDiacriticVowelMatcher}${cons[1]}`,
                        `${cons[0]}${this.SEPARATOR_SET}` +
                            vow.join(`${this.SEPARATOR_SET}`) +
                            `${this.SEPARATOR_SET}${midDiacriticVowelMatcher}${cons[1]}`,
                        cons.join(`${this.SEPARATOR_SET}`) +
                            `${this.SEPARATOR_SET}${vow[0]}`,
                    ];
                    matcher = `(?:${possibilities.join("|")})${endingDiacritcVowelMatcher}`;
                    break;
                }
                case 1: {
                    const possibilities = [
                        vow.slice(0, 2).join(`${this.SEPARATOR_SET}`) +
                            midDiacriticVowelMatcher +
                            cons.join(`${this.SEPARATOR_SET}`),
                        `${vow[0]}${this.SEPARATOR_SET}` +
                            cons.join(`${this.SEPARATOR_SET}`) +
                            vow[1],
                        [cons[0], ...vow.slice(0, 2)].join(`${this.SEPARATOR_SET}`),
                    ];
                    matcher = `(?:${possibilities.join("|")})${endingDiacritcVowelMatcher}`;
                    break;
                }
                default:
                    matcher = `${vow.join(`${this.SEPARATOR_SET}`)}${endingDiacritcVowelMatcher}`;
            }
            if ((vow === null || vow === void 0 ? void 0 : vow.length) + (cons === null || cons === void 0 ? void 0 : cons.length) < 3) {
                return this.isolatedInsensitiveTailor(`\\s{0,4}(${matcher})\\s{0,4}`);
            }
        }
        return this.isolatedInsensitiveTailor(`\\s{0,4}((?:${matcher})(?:${this.SEPARATOR_SET}${this.LETTER_SET}{1,24}){0,24})\\s{0,4}`);
    }
    /**
     * Returns name validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    firstName(codiceFiscale) {
        if (codiceFiscale &&
            new RegExp(`^[A-Z]{3}[${CONSONANT_LIST}]{3}`, "iu").test(codiceFiscale)) {
            const nameCf = codiceFiscale.substr(3, 3);
            const cons = ((nameCf.match(new RegExp(`^[${CONSONANT_LIST}]{1,3}`, "ig")) ||
                [])[0] || "")
                .split("")
                .map((char) => `[${diacriticRemover.insensitiveMatcher[char]}]`);
            const [diacriticsVowelList, diacriticsConsonantList] = [
                VOWEL_LIST,
                CONSONANT_LIST,
            ].map((chars) => chars + diacriticRemover.matcherBy(new RegExp(`^[${chars}]$`, "ui")));
            const matcher = `(?:[${diacriticsVowelList}]{1,24}${this.SEPARATOR_SET}){0,24}${cons[0]}${this.SEPARATOR_SET}(?:[${diacriticsVowelList}]{1,24}${this.SEPARATOR_SET}){0,24}(?:[${diacriticsConsonantList}]${this.SEPARATOR_SET}(?:[${diacriticsVowelList}]{1,24}${this.SEPARATOR_SET}){0,24})?` +
                cons
                    .slice(1, 3)
                    .join(`(?:[${diacriticsVowelList}]{1,24}${this.SEPARATOR_SET}){0,24}`) +
                `(?:${this.SEPARATOR_SET}${this.LETTER_SET}{1,24}){0,24}`;
            return this.isolatedInsensitiveTailor(matcher);
        }
        return this.lastName((codiceFiscale || "").substr(3, 3));
    }
    /**
     * Returns iso8601 date validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    date(codiceFiscale) {
        let matcher = ISO8601_DATE_TIME;
        if (codiceFiscale) {
            const parsedDate = this.parser.cfToBirthDate(codiceFiscale);
            if (parsedDate) {
                const dateIso8601 = parsedDate.toJSON();
                if (dayjs().diff(dayjs(parsedDate), "y") < 50) {
                    const century = parseInt(dateIso8601.substr(0, 2), 10);
                    const centuries = [century - 1, century].map((year) => year.toString().padStart(2, "0"));
                    matcher = `(?:${centuries.join("|")})` + dateIso8601.substr(2, 8);
                }
                else {
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
    gender(codiceFiscale) {
        const parsedGender = codiceFiscale && this.parser.cfToGender(codiceFiscale);
        const matcher = parsedGender || `[${Gender.toArray().join("")}]`;
        return this.isolatedInsensitiveTailor(matcher);
    }
    /**
     * Returns place validator based on given cf or generic
     * @param codiceFiscale Partial or complete CF to parse
     * @return Generic or specific regular expression
     */
    place(codiceFiscale) {
        return __awaiter(this, void 0, void 0, function* () {
            let matcher = ".{1,32}";
            const parsedPlace = codiceFiscale && (yield this.parser.cfToBirthPlace(codiceFiscale));
            if (parsedPlace) {
                const nameMatcher = parsedPlace.name.replace(/./gu, (c) => diacriticRemover[c] === c ? c : `[${c}${diacriticRemover[c]}]`);
                matcher = `(?:(?:${nameMatcher})|${parsedPlace.belfioreCode})`;
            }
            return this.isolatedInsensitiveTailor(matcher);
        });
    }
    deomocode(omocode) {
        return omocode.replace(/\d/gu, (n) => `[${n}${Omocodes$1[n]}]`);
    }
    isolatedInsensitiveTailor(matcher) {
        return new RegExp(`^(?:${matcher})$`, "iu");
    }
}

class CFMismatchValidator {
    constructor(belfioreConnector, codiceFiscale) {
        this.codiceFiscale = codiceFiscale;
        this.pattern = new Pattern(belfioreConnector);
        this.parser = new Parser(belfioreConnector);
    }
    get hasLastName() {
        var _a;
        return ((_a = this.codiceFiscale) === null || _a === void 0 ? void 0 : _a.length) >= LASTNAME_OFFSET + LASTNAME_SIZE;
    }
    get hasFirstName() {
        var _a;
        return ((_a = this.codiceFiscale) === null || _a === void 0 ? void 0 : _a.length) >= FIRSTNAME_OFFSET + FIRSTNAME_SIZE;
    }
    get hasBirthYear() {
        var _a;
        return ((_a = this.codiceFiscale) === null || _a === void 0 ? void 0 : _a.length) >= YEAR_OFFSET + YEAR_SIZE;
    }
    get hasBirthDate() {
        var _a;
        return ((_a = this.codiceFiscale) === null || _a === void 0 ? void 0 : _a.length) >= DATE_OFFSET + DATE_SIZE;
    }
    get hasGender() {
        var _a;
        return ((_a = this.codiceFiscale) === null || _a === void 0 ? void 0 : _a.length) >= GENDER_OFFSET + GENDER_SIZE;
    }
    get hasBirthPlace() {
        var _a;
        return ((_a = this.codiceFiscale) === null || _a === void 0 ? void 0 : _a.length) >= PLACE_OFFSET + PLACE_SIZE;
    }
    get hasCRC() {
        var _a;
        return ((_a = this.codiceFiscale) === null || _a === void 0 ? void 0 : _a.length) >= CRC_OFFSET + CRC_SIZE;
    }
    matchPersonalInfo(personalInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield this.pattern.codiceFiscale(personalInfo)).test(this.codiceFiscale);
        });
    }
    mismatchPersonalInfo(personalInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            return !!(this.codiceFiscale &&
                personalInfo &&
                personalInfo.lastName &&
                personalInfo.firstName &&
                (personalInfo.date ||
                    (personalInfo.day && personalInfo.month && personalInfo.year)) &&
                personalInfo.gender &&
                personalInfo.place &&
                !(yield this.matchPersonalInfo(personalInfo)));
        });
    }
    matchLastName(lastName) {
        return (this.hasLastName &&
            this.pattern.lastName(this.codiceFiscale).test(lastName || ""));
    }
    mismatchLastName(lastName) {
        return this.hasLastName && !!lastName && !this.matchLastName(lastName);
    }
    matchFirstName(firstName) {
        return (this.hasFirstName &&
            this.pattern.firstName(this.codiceFiscale).test(firstName || ""));
    }
    mismatchFirstName(firstName) {
        return this.hasFirstName && !!firstName && !this.matchFirstName(firstName);
    }
    matchBirthDate(birthDate) {
        if (this.hasBirthDate) {
            const parsedCfDate = this.parser.cfToBirthDate(this.codiceFiscale);
            const parsedDate = DateUtils.parseDate(birthDate);
            if (parsedCfDate && parsedDate) {
                return dayjs(parsedCfDate).isSame(parsedDate, "d");
            }
        }
        return false;
    }
    mismatchBirthDate(birthDate) {
        return (this.hasBirthYear &&
            !!DateUtils.parseDate(birthDate) &&
            !this.matchBirthDate(birthDate));
    }
    matchGender(gender) {
        return (this.hasGender &&
            this.pattern.gender(this.codiceFiscale).test(gender || ""));
    }
    mismatchGender(gender) {
        return this.hasGender && !!gender && !this.matchGender(gender);
    }
    /**
     * @param birthPlace BirthPlace, place name or BelfioreCode
     */
    matchBirthPlace(birthPlace) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.hasBirthPlace && birthPlace) {
                const matcher = yield this.pattern.place(this.codiceFiscale);
                const parsedBirthPlace = yield this.parser.parsePlace(birthPlace);
                return !!parsedBirthPlace && matcher.test(parsedBirthPlace === null || parsedBirthPlace === void 0 ? void 0 : parsedBirthPlace.belfioreCode);
            }
            return false;
        });
    }
    /**
     * @param birthPlace BirthPlace, place name or BelfioreCode
     */
    mismatchBirthPlace(birthPlace) {
        return __awaiter(this, void 0, void 0, function* () {
            return (this.hasBirthPlace &&
                !!birthPlace &&
                !(yield this.matchBirthPlace(birthPlace)));
        });
    }
    /**
     * Check the given cf validity by form, birth date/place and digit code
     * @param codiceFiscale Complete CF to parse
     * @return Verbose errors
     */
    get errors() {
        return Promise.all([
            this.parser.cfToBirthPlace(this.codiceFiscale, false),
            this.parser.cfToBirthPlace(this.codiceFiscale, true),
        ])
            .then(([placeCheck, placeCreationExpirationCheck]) => {
            var _a, _b;
            return (Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, (this.parser.cfToLastName(this.codiceFiscale)
                ? {}
                : { lastName: "MISSING_OR_INVALID_LAST_NAME" })), (this.parser.cfToFirstName(this.codiceFiscale)
                ? {}
                : { firstName: "MISSING_OR_INVALID_FIRST_NAME" })), (this.parser.cfToBirthDate(this.codiceFiscale)
                ? {}
                : { date: "MISSING_OR_INVALID_DATE" })), (this.parser.cfToBirthDay(this.codiceFiscale)
                ? {}
                : { date: "MISSING_OR_INVALID_DAY" })), (this.parser.cfToBirthMonth(this.codiceFiscale)
                ? {}
                : { date: "MISSING_OR_INVALID_MONTH" })), (this.parser.cfToBirthYear(this.codiceFiscale)
                ? {}
                : { date: "MISSING_OR_INVALID_YEAR" })), (this.parser.cfToGender(this.codiceFiscale)
                ? {}
                : { gender: "MISSING_DAY" })), (placeCheck ? {} : { place: "MISSING_OR_INVALID_PLACE" })), (placeCreationExpirationCheck
                ? {}
                : {
                    place: "PLACE_EXPIRED_OR_NOT_YET_CREATED_ON_BIRTDATE",
                    date: "BIRTHDATE_OUT_OF_BIRTH_PLACE_LIFE_RANGE",
                })), (((_b = (_a = this.codiceFiscale) === null || _a === void 0 ? void 0 : _a.substring(CRC_OFFSET, CRC_OFFSET + CRC_SIZE)) === null || _b === void 0 ? void 0 : _b.toUpperCase()) === CheckDigitizer.checkDigit(this.codiceFiscale)
                ? {}
                : { crc: "INVALID_CRC_CODE" })), (this.hasCRC ? {} : { crc: "MISSING_CRC_CODE" })));
        })
            .then((errors) => (Object.keys(errors).length ? errors : null));
    }
    /**
     * Check the given cf validity by form, birth date/place and digit code
     * @return Generic or specific regular expression
     */
    get valid() {
        return Promise.all([
            this.pattern.codiceFiscale(),
            this.parser.cfToBirthPlace(this.codiceFiscale),
        ]).then(([cfPattern, cfToBirthPlace]) => {
            var _a, _b;
            return !(
            // Checking length
            (!this.hasCRC ||
                // Checking form validity
                !cfPattern.test(this.codiceFiscale) ||
                // Checking 16th char check digit validity
                ((_b = (_a = this.codiceFiscale) === null || _a === void 0 ? void 0 : _a.substring(CRC_OFFSET, CRC_OFFSET + CRC_SIZE)) === null || _b === void 0 ? void 0 : _b.toUpperCase()) !==
                    CheckDigitizer.checkDigit(this.codiceFiscale) ||
                // Checking Birth date/place validity
                !cfToBirthPlace));
        });
    }
    get invalid() {
        return this.valid.then((isValid) => !!this.codiceFiscale && !isValid);
    }
}

class Validator {
    constructor(belfioreConnector) {
        this.belfioreConnector = belfioreConnector;
        this.parser = new Parser(belfioreConnector);
        this.pattern = new Pattern(belfioreConnector);
    }
    codiceFiscale(codiceFiscale) {
        return new CFMismatchValidator(this.belfioreConnector, codiceFiscale);
    }
    isLastNameValid(lastName) {
        return this.pattern.lastName().test(lastName);
    }
    isLastNameInvalid(lastName) {
        return !!lastName && !this.isLastNameValid(lastName);
    }
    isFirstNameValid(firstName) {
        return this.pattern.firstName().test(firstName);
    }
    isFirstNameInvalid(firstName) {
        return !!firstName && !this.isFirstNameValid(firstName);
    }
    isBirthDateValid(birthDate) {
        return !!DateUtils.parseDate(birthDate);
    }
    isBirthDateInvalid(birthDate) {
        return !!birthDate && !this.isBirthDateValid(birthDate);
    }
    isGenderValid(gender) {
        return this.pattern.gender().test(gender);
    }
    isGenderInvalid(gender) {
        return !!gender && !this.isGenderValid(gender);
    }
    isBirthPlaceValid(birthPlace) {
        return __awaiter(this, void 0, void 0, function* () {
            const parsedBirthPlace = yield this.parser.parsePlace(birthPlace);
            return (!!parsedBirthPlace &&
                !!(yield this.belfioreConnector.findByCode(parsedBirthPlace.belfioreCode)));
        });
    }
    isBirthPlaceInvalid(birthPlace) {
        return __awaiter(this, void 0, void 0, function* () {
            return !!birthPlace && !(yield this.isBirthPlaceValid(birthPlace));
        });
    }
    birthDatePlaceMatch(birthDate, birthPlace) {
        return __awaiter(this, void 0, void 0, function* () {
            const parsedPlace = yield this.parser.parsePlace(birthPlace);
            return (this.isBirthDateValid(birthDate) &&
                !!parsedPlace &&
                (!!(yield this.belfioreConnector
                    .from(birthDate)
                    .findByCode(parsedPlace.belfioreCode)) ||
                    // Ignoring control for people born before CF introduction
                    !dayjs(DateUtils.parseDate(birthDate)).isAfter(CF_INTRODUCTION_DATE, "day")));
        });
    }
    birthDatePlaceMismatch(birthDate, birthPlace) {
        return __awaiter(this, void 0, void 0, function* () {
            const parsedPlace = yield this.parser.parsePlace(birthPlace);
            return (this.isBirthDateValid(birthDate) &&
                !!parsedPlace &&
                !(yield this.birthDatePlaceMatch(birthDate, birthPlace)));
        });
    }
    birthPlaceDateMatch(birthPlace, birthDate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.birthDatePlaceMatch(birthDate, birthPlace);
        });
    }
    birthPlaceDateMismatch(birthPlace, birthDate) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.birthDatePlaceMismatch(birthDate, birthPlace);
        });
    }
}

class CodiceFiscaleUtils {
    constructor(belfioreConnector) {
        this.belfioreConnector = belfioreConnector;
        this.validator = new Validator(belfioreConnector);
        this.parser = new Parser(belfioreConnector);
        this.pattern = new Pattern(belfioreConnector);
    }
}

exports.BirthMonth = BirthMonth$1;
exports.CFMismatchValidator = CFMismatchValidator;
exports.CRC = CRC$1;
exports.CheckDigitizer = CheckDigitizer;
exports.CodiceFiscaleUtils = CodiceFiscaleUtils;
exports.DATE_MATCHER = dateMatcher_const;
exports.DateUtils = DateUtils;
exports.Gender = Gender;
exports.Matcher = matcher_const;
exports.Omocodes = Omocodes$1;
exports.Parser = Parser;
exports.Pattern = Pattern;
exports.VALIDATOR = matcher_const;
exports.Validator = Validator;
exports.default = CodiceFiscaleUtils;
