const DATE_VALIDATOR = require('./dateValidator.const');
const Diacritics = require('./diacritics');
const Gender = require('./gender.enum');
const moment = require('moment');
const Omocode = require('./omocode.enum');
const Parser = require('./parser');
const VALIDATOR = require('./validator.const');

/**
 * @class Validator
 * @memberof CodiceFiscaleUtils
 */
class Validator {

    /**
     * Validation regexp for the given surname or generic
     * @param {string} surname Optional surname to generate validation regexp
     * @returns {RegExp} CF Surname matcher
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfSurname(surname) {
        let matcher = VALIDATOR.NAME_MATCHER;
        if (surname) {
            matcher = Parser.surnameToCf(surname) || matcher;
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Validation regexp for the given name or generic
     * @param {string} name Optional name to generate validation regexp
     * @returns {RegExp} CF name matcher
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfName(name) {
        let matcher = VALIDATOR.NAME_MATCHER;
        if (name) {
            matcher = Parser.nameToCf(name) || matcher;
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Validation regexp for the given year or generic
     * @param {number} year Optional year to generate validation regexp
     * @returns {RegExp} CF year matcher
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfYear(year) {
        let matcher = VALIDATOR.YEAR_MATCHER;
        if (year) {
            const parsedYear = Parser.yearToCf(year);
            if (parsedYear) {
                matcher = parsedYear.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Validation regexp for the given month or generic
     * @param {number} month Optional month to generate validation regexp
     * @returns {RegExp} CF month matcher
     * @memberof CodiceFiscaleUtils.Validator
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
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfDay(day) {
        let matcher = VALIDATOR.DAY_MATCHER;
        if (day) {
            const parsedDayM = Parser.dayGenderToCf(day, 'M');
            if (parsedDayM) {
                const matcherM = parsedDayM.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
                const matcherF = Parser.dayGenderToCf(day, 'F').replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
                matcher = `(?:${matcherM})|(?:${matcherF})`;
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Validation regexp for the given year or generic
     * @param {number} day Optional day to generate validation regexp
     * @param {'M'|'F'} [gender] Gender @see Gender
     * @returns {RegExp} CF day and gender matcher
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfDayGender(day, gender) {
        if (!gender) {
            return this.cfDay(day);
        }
        let matcher;
        if (day) {
            const parsedDayGender = Parser.dayGenderToCf(day, gender);
            if (parsedDayGender) {
                matcher = parsedDayGender.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
            } else {
                throw new Error('[Validator.cfDayGender] Provided day is not valid');
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
                throw new Error('[Validator.cfDayGender] Provided gender is not valid');
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * Validation regexp for the given year or generic
     * @param {Date|Moment|Array<number>} date Optional date to generate validation regexp
     * @param {'M'|'F'} [gender] @see Gender
     * @returns {RegExp} CF date and gender matcher
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfDateGender(date, gender) {
        let matcher = VALIDATOR.FULL_DATE_MATCHER;
        if (date && gender) {
            const parsedDateGender = Parser.dateGenderToCf(date, gender);
            if (parsedDateGender) {
                matcher = parsedDateGender.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
            } else {
                throw new Error('[Validator.cfDateGender] Provided date is not valid');
            }
        } else if (gender) {
            switch (gender) {
            case 'M':
                matcher = VALIDATOR.MALE_FULL_DATE_MATCHER;
                break;
            case 'F':
                matcher = VALIDATOR.FEMALE_FULL_DATE_MATCHER;
                break;
            default:
                throw new Error('[Validator.cfDateGender] Provided gender is not valid');
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }

    /**
     * @param {string} placeName Optional place name to generate validation regexp
     * @returns {RegExp} CF place matcher
     * @memberof CodiceFiscaleUtils.Validator
     *//**
     * @param {Date|Moment|Array<number>} [date] Optional date to generate validation regexp
     * @param {string} placeName Optional place name to generate validation regexp
     * @returns {RegExp} CF place matcher
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfPlace(...args) {
        let matcher = VALIDATOR.BELFIORE_CODE_MATCHER;
        if (args.length) {
            const parsedPlace = Parser.placeToCf(...args);
            if (parsedPlace) {
                matcher = parsedPlace.replace(/\d/gu, n => `[${n}${Omocode[n]}]`);
            }else {
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
                        if (!cfPartValidator) {
                            return null;
                        }
                        const cfValue = (cfPartValidator.toString().match(/\^(.+)\$/) || [])[1];
                        if (!cfValue) {
                            return null;
                        }
                        matcher += `(?:${cfValue})`;
                    }
                    // Final addition of CheckDigit
                    matcher += VALIDATOR.CHECK_DIGIT;
                }
            }
        }
        return new RegExp(`^${matcher}$`, 'iu');
    }


    static surname(codiceFiscale) {
        const ANY_LETTER = `[${Diacritics.matcherBy(/^[A-Z]$/ui)}]`;
        let matcher = `${ANY_LETTER}+`;
        if (typeof codiceFiscale === 'string' && (/^[A-Z]{1,3}/iu).test(codiceFiscale)) {
            const surnameCf = codiceFiscale.substr(0,3);
            
            const diacriticizer = matchingChars => (matchingChars || '').split('').map(char => `[${Diacritics.insensitiveMatcher[char]}]`);

            const matchFromCf = (cf, charMatcher) => diacriticizer((cf.match(new RegExp(charMatcher, 'ig')) || [])[0]);

            const cons = matchFromCf(surnameCf, `^[${VALIDATOR.CONSONANT_LIST}]{1,3}`);
            const vow = matchFromCf(surnameCf, `[${VALIDATOR.VOWEL_LIST}]{1,3}`);
            
            const diacriticsVowelList = Diacritics.matcherBy(new RegExp(`^[${VALIDATOR.VOWEL_LIST}]$`, 'ui'));

            switch(cons.length) {
            case 3:
                matcher = cons.join(`[${diacriticsVowelList}]*`) + `${ANY_LETTER}*`;
                break;
            case 2: {
                const possibilities = [
                    `${vow[0]}${cons[0]}[${diacriticsVowelList}]*${cons[1]}`,
                    `${cons[0]}${vow.join('')}[${diacriticsVowelList}]*${cons[1]}`,
                    `${cons.join('')}${vow[0]}`
                ];
                matcher = `(?:${possibilities.join('|')})[${diacriticsVowelList}]*`;
                break;
            }
            case 1: {
                const possibilities = [
                    `${vow.slice(0,2).join('')}[${diacriticsVowelList}]*${cons}`,
                    `${vow[0]}${cons}${vow[1]}`,
                    `${cons[0]+vow.slice(0,2).join('')}`
                ];
                matcher = `(?:${possibilities.join('|')})[${diacriticsVowelList}]*`;
                break;
            }
            default:
                matcher = `${vow.join('')}[${diacriticsVowelList}]*`;
            }
        }

        return new RegExp(`^${matcher}$`, 'iu');
    }

    static name(codiceFiscale) {
        if (typeof codiceFiscale === 'string' && (new RegExp(`^[A-Z]{3}[${VALIDATOR.CONSONANT_LIST}]{3}`, 'iu')).test(codiceFiscale)) {
            const ANY_LETTER = `[${Diacritics.matcherBy(/^[A-Z]$/ui)}]`;

            const nameCf = codiceFiscale.substr(3,3);

            const cons = ((nameCf.match(new RegExp(`^[${VALIDATOR.CONSONANT_LIST}]{1,3}`, 'ig')) || [])[0] || '')
                .split('').map(char => `[${Diacritics.insensitiveMatcher[char]}]`);

            const diacriticsVowelList = Diacritics.matcherBy(new RegExp(`^[${VALIDATOR.VOWEL_LIST}]$`, 'ui'));
            const diacriticsConsonantList = Diacritics.matcherBy(new RegExp(`^[${VALIDATOR.CONSONANT_LIST}]$`, 'ui'));

            const matcher = `[${diacriticsVowelList}]*${cons[0]}[${diacriticsVowelList}]*(?:[${diacriticsConsonantList}][${diacriticsVowelList}]*)?`
                + cons.slice(1,3).join(`[${diacriticsVowelList}]*`) + `${ANY_LETTER}*`;
            
            return new RegExp(`^${matcher}$`, 'iu');
        }
        return this.surname((codiceFiscale || '').substr(3,3));
    }

    static date(codiceFiscale){
        let matcher = DATE_VALIDATOR.ISO8601_FULL_DATE;
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
     * @memberof CodiceFiscaleUtils.Validator
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
     * @memberof CodiceFiscaleUtils.Validator
     */
    static place(codiceFiscale) {
        let matcher = '.+';
        const parsedPlace = Parser.cfToBirthPlace(codiceFiscale);

        if (parsedPlace) {
            const nameMatcher = parsedPlace.name.replace(/./gu, c => (Diacritics[c]===c ? c : `[${c}${Diacritics[c]}]`));
            matcher = `(?:${nameMatcher}|${parsedPlace.belfioreCode})`;
        }

        return new RegExp(`^${matcher}$`, 'ui');
    }
}

module.exports = Validator;