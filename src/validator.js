
const VALIDATOR = require('./validator.const');
const Parser = require('./parser');
const Omocode = require('./omocode.enum');

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
     * @param {'M'|'F'} [gender] 
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
     * @param {'M'|'F'} [gender] 
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
}

module.exports = Validator;