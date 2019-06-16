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
     * Parse birth date information
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {Date} Birth Date
     */
    static cfToBirthDate(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 11) {
            return null;
        }
        const birthYear = parseInt(codiceFiscale.substr(6,2));

        if (isNaN(birthYear)) {
            return null;
        }

        const BirthMonth = require('./birthMonth.enum');

        const birthMonth = BirthMonth[codiceFiscale.substr(8,1)];
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
                if (typeof this[name] === 'function') {
                    return (...args) => receiver[name].apply(receiver, args);
                }
                return receiver[name];
            }
        });
    }
}

module.exports = CodiceFiscaleUtilsParser;