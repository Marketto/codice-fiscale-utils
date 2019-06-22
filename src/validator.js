class CodiceFiscaleUtilsValidator {

    /**
     * Validation regexp for the given surname or generic
     * @param {string} surname Optional surname to generate validation regexp
     * @returns {RegExp} CF Surname matcher
     */
    static cfSurname(surname) {
        const VALIDATOR = require('./validator.const');
        if ((surname || '').length > 1) {
            const cons = surname.match(new RegExp(`[${VALIDATOR.CONSONANT_LIST}]`, 'ig')) || [];
            const vow = surname.match(new RegExp(`[${VALIDATOR.VOWEL_LIST}]`, 'ig')) || [];
            const cfMatcher = cons.concat(vow).join('').toUpperCase().padEnd(3, 'X').substr(0, 3);
            return new RegExp(`^${cfMatcher}$`, 'i');
        }
        return new RegExp(`^${VALIDATOR.NAME_MATCHER}$`, 'i');
    }
}

module.exports = CodiceFiscaleUtilsValidator;