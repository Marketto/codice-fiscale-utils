class CodiceFiscaleUtilsValidator {

    /**
     * Validation regexp for the given surname or generic
     * @param {string} surname Optional surname to generate validation regexp
     * @returns {RegExp} CF Surname matcher
     */
    static cfSurname(surname) {
        const VALIDATOR = require('./validator.const');
        if ((surname || '').length > 1) {
            const cons = surname.match(new RegExp(`[${VALIDATOR.CONSONANT_MATCHER}]`, 'ig')) || [];
            const vow = surname.match(new RegExp(`[${VALIDATOR.VOWEL_MATCHER}]`, 'ig')) || [];
            const cfMatcher = cons.concat(vow).join('').toUpperCase().padEnd(3, 'X').substr(0, 3);
            return new RegExp(`^${cfMatcher}$`, 'i');
        }
        return new RegExp(`^(?:(?:[${VALIDATOR.CONSONANT_MATCHER}]|[${VALIDATOR.VOWEL_MATCHER}])[${VALIDATOR.VOWEL_MATCHER}][${VALIDATOR.VOWEL_MATCHER}X]|[${VALIDATOR.CONSONANT_MATCHER}]{2}[A-Z])$`, 'i');
    }
}

module.exports = CodiceFiscaleUtilsValidator;