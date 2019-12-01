import CheckDigitizer from './checkDigitizer';
import DATE_VALIDATOR from './dateValidator.const';
import DiacriticRemover from '@marketto/diacritic-remover';
import Gender from './gender.enum';
import moment from 'moment';
import Omocode from './omocode.enum';
import Parser from './parser';
import VALIDATOR from './validator.const';
import Error from './error';
/**
 * @namespace Validator
 */
class Validator {

    /**
     * Validation regexp for the given surname or generic
     * @param {string} surname Optional surname to generate validation regexp
     * @returns {RegExp} CF Surname matcher
     * @public
     */
    static cfSurname(surname) {
        const error =  new Error('Validator', 'cfSurname');
        let matcher = VALIDATOR.CF_NAME_MATCHER;
        if (surname) {
            if (!this.surname().test(surname)) {
                throw error.INVALID_SURNAME;
            }
            matcher = Parser.surnameToCf(surname) || matcher;
        }
        return new RegExp(`^(?:${matcher})$`, 'iu');
    }

    /**
     * Validation regexp for the given name or generic
     * @param {string} name Optional name to generate validation regexp
     * @returns {RegExp} CF name matcher
     * @public
     */
    static cfName(name) {
        const error =  new Error('Validator', 'cfName');
        let matcher = VALIDATOR.CF_NAME_MATCHER;
        if (name) {
            if (!this.surname().test(name)) {
                throw error.INVALID_NAME;
            }
            matcher = Parser.nameToCf(name) || matcher;
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Validation regexp for the given year or generic
     * @param {number} year Optional year to generate validation regexp
     * @returns {RegExp} CF year matcher
     * @public
     */
    static cfYear(year) {
        const error =  new Error(this.constructor.name, 'cfYear');
        let matcher = VALIDATOR.YEAR_MATCHER;
        if (year) {
            const parsedYear = Parser.yearToCf(year);
            if (parsedYear) {
                matcher = parsedYear.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
            } else {
                throw error.INVALID_YEAR;
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Validation regexp for the given month or generic
     * @param {number} month Optional month to generate validation regexp
     * @returns {RegExp} CF month matcher
     * @public
     */
    static cfMonth(month) {
        let matcher = VALIDATOR.MONTH_MATCHER;
        if (month) {
            matcher = Parser.monthToCf(month) || matcher;
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Validation regexp for the given year or generic
     * @param {number} day Optional day to generate validation regexp
     * @returns {RegExp} CF day matcher
     * @public
     */
    static cfDay(day) {
        const error =  new Error('Validator', 'cfDayGender');
        let matcher = VALIDATOR.DAY_MATCHER;
        if (day) {
            const parsedDayM = Parser.dayGenderToCf(day, 'M');
            if (parsedDayM) {
                const matcherM = parsedDayM.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
                const matcherF = Parser.dayGenderToCf(day, 'F').replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
                matcher = `(?:${matcherM})|(?:${matcherF})`;
            } else {
                throw error.INVALID_DAY;
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Validation regexp for the given year or generic
     * @param {number|null} [day] Optional day to generate validation regexp
     * @param {'M'|'F'} [gender] Gender @see Gender
     * @returns {RegExp} CF day and gender matcher
     * @public
     */
    static cfDayGender(day, gender) {
        const error =  new Error('Validator', 'cfDayGender');
        if (!gender) {
            return this.cfDay(day);
        }
        let matcher;
        if (day) {
            const parsedDayGender = Parser.dayGenderToCf(day, gender);
            if (parsedDayGender) {
                matcher = parsedDayGender.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
            } else {
                throw error.INVALID_DAY_OR_GENDER;
            }
        } else {
            switch (gender) {
            case 'M':
                matcher = VALIDATOR.MALE_DAY_MATCHER;
                break;
            case 'F':
                matcher = VALIDATOR.FEMALE_DAY_MATCHER;
                break;
            default:
                throw error.INVALID_GENDER;
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Validation regexp for the given year or generic
     * @param {Date|Moment|Array<number>} date Optional date to generate validation regexp
     * @param {'M'|'F'} [gender] @see Gender
     * @returns {RegExp} CF date and gender matcher
     * @public
     */
    static cfDateGender(date, gender) {
        const error =  new Error('Validator', 'cfDateGender');
        if (date && !Parser.parseDate(date)) {
            throw error.INVALID_DATE;
        }
        if (gender && !Gender.toArray().includes(gender)) {
            throw error.INVALID_GENDER;
        }
        let matcher = VALIDATOR.FULL_DATE_MATCHER;
        if (date) {
            const omocodeReplacer = parsedDateGender => parsedDateGender.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
            matcher = gender ?
                omocodeReplacer(Parser.dateGenderToCf(date, gender)) :
                `(?:${omocodeReplacer(Parser.dateGenderToCf(date, 'M'))}|${omocodeReplacer(Parser.dateGenderToCf(date, 'm'))})`;
        } else {
            switch (gender) {
            case 'M':
                matcher = VALIDATOR.MALE_FULL_DATE_MATCHER;
                break;
            case 'F':
                matcher = VALIDATOR.FEMALE_FULL_DATE_MATCHER;
                break;
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * @param {string} placeName Optional place name to generate validation regexp
     * @returns {RegExp} CF place matcher
     * @public
     *//**
     * @param {Date|Moment|Array<number>} [date] Optional date to generate validation regexp
     * @param {string} placeName Optional place name to generate validation regexp
     * @returns {RegExp} CF place matcher
     * @public
     */
    static cfPlace(...args) {
        let matcher = VALIDATOR.BELFIORE_CODE_MATCHER;
        if (args.filter(param => !!param).length > moment(args[0]).isValid()) {
            const parsedPlace = Parser.placeToCf(...args);
            if (parsedPlace) {
                matcher = parsedPlace.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
            } else {
                matcher = '';
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Generates full CF validator based on given optional input or generic
     * 
     * @param {Object} input Input Object
     * @param {string} input.surname Surname
     * @param {string} input.name Name
     * @param {number} [input.year] Birth Year
     * @param {number} [input.month] Birth Month
     * @param {number} [input.day] Birth Day
     * @param {Date|Moment} [input.date] Birth Date
     * @param {Gender|string} input.gender Gender M|F
     * @param {string} input.place Place name
     * @returns {RegExp} CodiceFiscale matcher
     */
    static codiceFiscale(input) {
        let matcher = VALIDATOR.CODICE_FISCALE;
        if (input) {
            const parsedCf = Parser.encodeCf(input);

            if (parsedCf) {
                matcher = parsedCf.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
            } else {
                const { surname, name, year, month, day, date, gender, place } = input;
                if (surname || name || year || month || day || date || gender || place) {
                    const dtParams = Parser.parseDate(date) || Parser.yearMonthDayToDate(year, month, day);
                    const generator = [
                        () => this.cfSurname(surname),
                        () => this.cfName(name),
                        () => this.cfDateGender(dtParams, gender),
                        () => this.cfPlace(dtParams, place)
                    ];

                    matcher = '';
                    for (let i=0; i<generator.length; i++) {
                        const cfPartValidator = generator[i]();
                        const cfValue = cfPartValidator.toString().match(/\^(.+)\$/)[1];
                        matcher += `(?:${cfValue})`;
                    }
                    // Final addition of CheckDigit
                    matcher += VALIDATOR.CHECK_DIGIT;
                }
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }


    /**
     * Returns surname validator based on given cf or generic
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {RegExp} Generic or specific regular expression
     * @public
     */
    static surname(codiceFiscale) {
        const diacriticRemover = new DiacriticRemover();
        const LETTER_SET = `[A-Z${diacriticRemover.matcherBy(/^[A-Z]$/ui)}]`;
        const SEPARATOR_SET = '[\' ]';
        const ANY_LETTER = `(?:${LETTER_SET}+${SEPARATOR_SET}?)`;
        let matcher = `${ANY_LETTER}+`;
        if (typeof codiceFiscale === 'string' && (/^[A-Z]{1,3}/iu).test(codiceFiscale)) {
            const surnameCf = codiceFiscale.substr(0,3);
            
            const diacriticizer = matchingChars => (matchingChars || '').split('').map(char => `[${diacriticRemover.insensitiveMatcher[char]}]`);

            const matchFromCf = (cf, charMatcher) => diacriticizer((cf.match(new RegExp(charMatcher, 'ig')) || [])[0]);

            const cons = matchFromCf(surnameCf, `^[${VALIDATOR.CONSONANT_LIST}]{1,3}`);
            const vow = matchFromCf(surnameCf, `[${VALIDATOR.VOWEL_LIST}]{1,3}`);
            
            const diacriticsVowelList = VALIDATOR.VOWEL_LIST + diacriticRemover.matcherBy(new RegExp(`^[${VALIDATOR.VOWEL_LIST}]$`, 'ui'));
            const diacriticsVowelMatcher = `[${diacriticsVowelList}]`;
            const midDiacriticVowelMatcher = `(?:${diacriticsVowelMatcher}${SEPARATOR_SET}?)*`;
            const endingDiacritcVowelMatcher = `(?:${SEPARATOR_SET}?${midDiacriticVowelMatcher}${diacriticsVowelMatcher})?`;
            switch(cons.length) {
            case 3: {
                const divider = midDiacriticVowelMatcher;
                matcher = divider + cons.join(`${SEPARATOR_SET}?${divider}`) + `(?:${SEPARATOR_SET}?${LETTER_SET}*${LETTER_SET})?`;
                break;
            }
            case 2: {
                const possibilities = [
                    `${vow[0]}${SEPARATOR_SET}?${cons[0]}${midDiacriticVowelMatcher}${cons[1]}`,
                    `${cons[0]}${SEPARATOR_SET}?` + vow.join(`${SEPARATOR_SET}?`) + `${SEPARATOR_SET}?${midDiacriticVowelMatcher}${cons[1]}`,
                    cons.join(`${SEPARATOR_SET}?`) + `${SEPARATOR_SET}?${vow[0]}`
                ];
                matcher = `(?:${possibilities.join('|')})${endingDiacritcVowelMatcher}`;
                break;
            }
            case 1: {
                const possibilities = [
                    vow.slice(0,2).join(`${SEPARATOR_SET}?`) + midDiacriticVowelMatcher + cons.join(`${SEPARATOR_SET}?`),
                    `${vow[0]}${SEPARATOR_SET}?` + cons.join(`${SEPARATOR_SET}?`) + vow[1],
                    [cons[0], ...vow.slice(0,2)].join(`${SEPARATOR_SET}?`)
                ];
                matcher = `(?:${possibilities.join('|')})${endingDiacritcVowelMatcher}`;
                break;
            }
            default:
                matcher = `${vow.join(`${SEPARATOR_SET}?`)}${endingDiacritcVowelMatcher}`;
            }
        }

        return new RegExp(`^ *(${matcher}) *$`, 'iu');
    }

    /**
     * Returns name validator based on given cf or generic
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {RegExp} Generic or specific regular expression
     * @public
     */
    static name(codiceFiscale) {
        if (typeof codiceFiscale === 'string' && (new RegExp(`^[A-Z]{3}[${VALIDATOR.CONSONANT_LIST}]{3}`, 'iu')).test(codiceFiscale)) {
            const diacriticRemover = new DiacriticRemover();
            const ANY_LETTER = `[A-Z${diacriticRemover.matcherBy(/^[A-Z]$/ui)}]`;

            const nameCf = codiceFiscale.substr(3,3);

            const cons = ((nameCf.match(new RegExp(`^[${VALIDATOR.CONSONANT_LIST}]{1,3}`, 'ig')) || [])[0] || '')
                .split('').map(char => `[${diacriticRemover.insensitiveMatcher[char]}]`);

            const diacriticizer = chars => chars + diacriticRemover.matcherBy(new RegExp(`^[${chars}]$`, 'ui'));

            const diacriticsVowelList = diacriticizer(VALIDATOR.VOWEL_LIST);
            const diacriticsConsonantList = diacriticizer(VALIDATOR.CONSONANT_LIST);

            const matcher = `[${diacriticsVowelList}]*${cons[0]}[${diacriticsVowelList}]*(?:[${diacriticsConsonantList}][${diacriticsVowelList}]*)?`
                + cons.slice(1,3).join(`[${diacriticsVowelList}]*`) + `${ANY_LETTER}*`;
            
            return new RegExp(`^${matcher}$`, 'iu');
        }
        return this.surname((codiceFiscale || '').substr(3,3));
    }

    /**
     * Returns iso8601 date validator based on given cf or generic
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {RegExp} Generic or specific regular expression
     * @public
     */
    static date(codiceFiscale){
        let matcher = DATE_VALIDATOR.ISO8601_DATE_TIME;
        if (codiceFiscale) {
            const parsedDate = Parser.cfToBirthDate(codiceFiscale);
            if (parsedDate) {
                const dateIso8601 = parsedDate.toJSON();
                if (moment().diff(moment(parsedDate), 'y') < 50) {
                    const century = parseInt(dateIso8601.substr(0,2));
                    const centuries = [
                        century -1,
                        century
                    ].map(year => year.toString().padStart(2, 0));
                    matcher = `(?:${centuries.join('|')})` + dateIso8601.substr(2,8);
                } else {
                    matcher = dateIso8601.substr(0,10);
                }
            }
        }
        return new RegExp(`^${matcher}(?:T${DATE_VALIDATOR.TIME}(?:${DATE_VALIDATOR.TIMEZONE})?)?$`, 'iu');
    }

    /**
     * Returns gender validator based on given cf or generic
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {RegExp} Generic or specific regular expression
     * @public
     */
    static gender(codiceFiscale) {
        const parsedGender = Parser.cfToGender(codiceFiscale);
        const matcher = parsedGender || `[${Gender.toArray().join('')}]`;
        return new RegExp(`^${matcher}$`, 'u');
    }

    

    /**
     * Returns place validator based on given cf or generic
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {RegExp} Generic or specific regular expression
     * @public
     */
    static place(codiceFiscale) {
        let matcher = '.+';
        const parsedPlace = Parser.cfToBirthPlace(codiceFiscale);

        if (parsedPlace) {
            const diacriticRemover = new DiacriticRemover();
            const nameMatcher = parsedPlace.name.replace(/./gu, c => diacriticRemover[c]===c ? c : `[${c}${diacriticRemover[c]}]`);
            matcher = `(?:(?:${nameMatcher})|${parsedPlace.belfioreCode})`;
        }

        return new RegExp(`^${matcher}$`, 'ui');
    }

    /**
     * Check the given cf validity by form, birth date/place and digit code
     * 
     * @param {string} codiceFiscale Complete CF to parse
     * @returns {boolean} Generic or specific regular expression
     * @public
     */
    static isValid(codiceFiscale) {
        const matcher = new RegExp(`^(?:${VALIDATOR.CODICE_FISCALE})$`, 'ui');
        if (
            // Checking form validity
            !matcher.test(codiceFiscale) ||
            //Checking 16th char check digit validity
            codiceFiscale.substr(15, 1).toUpperCase() !== CheckDigitizer.checkDigit(codiceFiscale) ||
            //Checking Birth date/place validity
            !Parser.cfToBirthPlace(codiceFiscale)
        ) {
            return false;
        }
        return true;
    }
}

export default Validator;