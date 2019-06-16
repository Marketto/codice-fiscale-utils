class CodiceFiscaleUtilsParser {
    /**
     * Parse gender information
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {'M'|'F'|null} Male or female
     */
    static cfToGender(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 11) {
            return null;
        }
        const birthDay = parseInt(codiceFiscale.substr(9,2));
        if (birthDay === 0 || birthDay === 40) {
            return null;
        }
        const Gender = require('./gender.enum');
        return Gender[birthDay];
    }

    /**
     * Parse birth year information
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {number} Birth Year (4 digits)
     */
    static cfToBirthYear(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 8) {
            return null;
        }
        const birthYear = parseInt(codiceFiscale.substr(6,2));

        if (isNaN(birthYear)) {
            return null;
        }

        const current2DigitsYear = parseInt((new Date()).getFullYear().toString().substr(-2));

        const century = birthYear <= current2DigitsYear;

        return birthYear + 1900 + (century * 100);
    }

    /**
     * Parse birth month information
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {number} Birth Month (0...11 - Date notation)
     */
    static cfToBirthMonth(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 9) {
            return null;
        }
        const BirthMonth = require('./birthMonth.enum');

        const birthMonth = BirthMonth[codiceFiscale.substr(8,1)];
        if (!birthMonth && birthMonth !== 0) {
            return null;
        }
        return birthMonth;
    }

    /**
     * Parse birth date information
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {Date} Birth Date
     */
    static cfToBirthDate(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 11) {
            return null;
        }
        const birthYear = this.cfToBirthYear(codiceFiscale);
        if (!birthYear) {
            return null;
        }

        const birthMonth = this.cfToBirthMonth(codiceFiscale);
        if (!birthMonth && birthMonth !== 0) {
            return null;
        }

        let birthDay = parseInt(codiceFiscale.substr(9,2));

        if (isNaN(birthDay)) {
            return null;
        }

        birthDay = birthDay >= 40 ? birthDay - 40 : birthDay;

        if (birthDay < 1 || birthDay > 31) {
            return null;
        }
        const dt = new Date(birthYear, birthMonth, birthDay, 0, 0, 0);
        dt.setUTCDate(birthDay);
        return new Proxy(dt, {
            get(receiver, name) {
                if (['toJSON', 'toISOString'].includes(name)){
                    return (...args) => receiver[name](...args).substr(0, 10);
                }
                if (name === 'getDate') {
                    return (...args) => receiver.getUTCDate(...args);
                }
                if (typeof receiver[name] === 'function') {
                    return (...args) => receiver[name](...args);
                }
                return receiver[name];
            }
        });
    }
}

module.exports = CodiceFiscaleUtilsParser;