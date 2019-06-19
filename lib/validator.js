class CodiceFiscaleUtilsValidator {

    /**
     * Consonant letters matcher string
     * @static
     * @readonly
     * @returns {string}
     */
    static get CONSONANT_MATCHER() {
        return 'B-DF-HJ-NP-TV-Z';
    }

    /**
     * Vowel letters matcher string
     * @static
     * @readonly
     * @returns {string}
     */
    static get VOWEL_MATCHER() {
        return 'AEIOU';
    }

    /**
     * Validation regexp for the given surname or generic
     * @param {string} surname Optional surname to generate validation regexp
     * @returns {RegExp} CF Surname matcher
     */
    static cfSurname(surname) {
        if (surname) {
            const cons = surname.match(new RegExp(`[${this.CONSONANT_MATCHER}]`, 'ig')) || [];
            const vow = surname.match(new RegExp(`[${this.VOWEL_MATCHER}]`, 'ig')) || [];
            const cfMatcher = cons.concat(vow).join('').toUpperCase().padEnd(3, 'X').substr(0, 3);
            return new RegExp(`^${cfMatcher}$`, 'i');
        }
        return new RegExp(`^(?:(?:[${this.CONSONANT_MATCHER}]|[${this.VOWEL_MATCHER}])[${this.VOWEL_MATCHER}][${this.VOWEL_MATCHER}X]|[${this.CONSONANT_MATCHER}]{2}[A-Z])$`, 'i');
    }
}

module.exports = CodiceFiscaleUtilsValidator;