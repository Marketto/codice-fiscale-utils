
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
        return new RegExp(`^${Parser.surnameToCf(surname) || VALIDATOR.NAME_MATCHER}$`, 'i');
    }

    /**
     * Validation regexp for the given name or generic
     * @param {string} name Optional name to generate validation regexp
     * @returns {RegExp} CF name matcher
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfName(name) {
        return new RegExp(`^${Parser.nameToCf(name) || VALIDATOR.NAME_MATCHER}$`, 'i');
    }

    /**
     * Validation regexp for the given year or generic
     * @param {number} year Optional year to generate validation regexp
     * @returns {RegExp} CF year matcher
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfYear(year) {
        const parsedYear = Parser.yearToCf(year);
        let matcher = VALIDATOR.YEAR_MATCHER;
        if (parsedYear) {
            matcher = parsedYear.replace(/\d/g, n => `[${n}${Omocode[n]}]`);
        }
        return new RegExp(`^${matcher}$`, 'i');
    }

    /**
     * Validation regexp for the given month or generic
     * @param {number} month Optional month to generate validation regexp
     * @returns {RegExp} CF month matcher
     * @memberof CodiceFiscaleUtils.Validator
     */
    static cfMonth(month) {
        return new RegExp(`^${Parser.monthToCf(month) || VALIDATOR.MONTH_MATCHER}$`, 'i');
    }
}

module.exports = Validator;