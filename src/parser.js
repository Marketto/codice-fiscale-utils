/**
 * @class Parser
 * @memberof CodiceFiscaleUtils
 */
class Parser {

    /**
     * Default omocode bitmap
     * @static
     * @readonly
     * @returns {number}
     * @memberof CodiceFiscaleUtils.Parser
     */
    static get OMOCODE_BITMAP(){
        return 0b0111011011000000;
    }

    /**
     * Parse surname information
     * @param {string} codiceFiscale Partial or complete Omocode/Regular CF to parse
     * @returns {string|null} Regular CF w/o omocodes chars
     * @memberof CodiceFiscaleUtils.Parser
     */
    static cfDeomocode(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 7) {
            return codiceFiscale;
        }

        const Omocode = require('./omocode.enum');

        return codiceFiscale.replace(/[\dA-Z]/gi, (match, offset) => ((/^[A-Z]$/ig).test(match) && (2**offset & this.OMOCODE_BITMAP)) ? Omocode[match] : match);
    }

    /**
     * Parse surname information
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {string|null} Partial/possible surname
     * @memberof CodiceFiscaleUtils.Parser
     */
    static cfToSurname(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 3 || !(/^[A-Z]{3}/i).test(codiceFiscale)) {
            return null;
        }

        const surnameCf = codiceFiscale.substr(0,3);

        const VALIDATOR = require('./validator.const');
        const [cons = ''] = surnameCf.match(new RegExp(`^[${VALIDATOR.CONSONANT_LIST}]{1,3}`, 'ig')) || [];
        const [vow = ''] = surnameCf.match(new RegExp(`[${VALIDATOR.VOWEL_LIST}]{1,3}`, 'ig')) || [];

        const matchingLength = cons.length + vow.length;

        if (matchingLength < 2 || (matchingLength < 3 && surnameCf[2].toUpperCase() !== 'X')) {
            return null;
        }

        switch(cons.length) {
        case 3:
            return (cons + vow).split('').join('*') + '*';
        case 2:
            return `${cons[0]}${vow[0]}*${cons[1]}*`;
        case 1:
            return `${cons[0]}${vow}*`;
        default:
            return `${vow}${vow.length === 3 ? '*': ''}`;
        }
    }

    /**
     * Parse name information
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {string|null} Partial/possible name
     * @memberof CodiceFiscaleUtils.Parser
     */
    static cfToName(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 3 || !(/^[A-Z]{6}/i).test(codiceFiscale)) {
            return null;
        }
        return this.cfToSurname(codiceFiscale.substr(3, 3));
    }

    /**
     * Parse gender information
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {'M'|'F'|null} Male or female
     * @memberof CodiceFiscaleUtils.Parser
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
     * @returns {number|null} Birth Year (4 digits)
     * @memberof CodiceFiscaleUtils.Parser
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
     * @returns {number|null} Birth Month (0...11 - Date notation)
     * @memberof CodiceFiscaleUtils.Parser
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
     * Parse birth day information
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {number|null} Birth day (1..31)
     * @memberof CodiceFiscaleUtils.Parser
     */
    static cfToBirthDay(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 11) {
            return null;
        }
        let birthDay = parseInt(codiceFiscale.substr(9,2));

        if (isNaN(birthDay)) {
            return null;
        }

        birthDay -= birthDay >= 40 ? 40 : 0;

        if (birthDay < 1 || birthDay > 31) {
            return null;
        }
        return birthDay;
    }

    /**
     * Parse birth date information
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {Date|null} Birth Date
     * @memberof CodiceFiscaleUtils.Parser
     */
    static cfToBirthDate(codiceFiscale) {
        const birthDay = this.cfToBirthDay(codiceFiscale);
        if (!birthDay) {
            return null;
        }

        const birthMonth = this.cfToBirthMonth(codiceFiscale);
        if (!birthMonth && birthMonth !== 0) {
            return null;
        }

        const birthYear = this.cfToBirthYear(codiceFiscale);
        if (!birthYear) {
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

    /**
     * Normalize diacritics
     * @param {string} text Input text to normalize
     * @returns {string|null} Output text w/o diacritics
     */
    static removeDiacritics(text) {
        if (!text || typeof text !== 'string') {
            return null;
        }
        const DIACRITICS = require('./diacritics.const');
        return text.replace(/./g, c => DIACRITICS[c]);
    }

    /**
     * Parse surname to cf part
     * @param {string} surname Partial or complete CF to parse
     * @returns {string|null} partial cf
     * @memberof CodiceFiscaleUtils.Parser
     */
    static surnameToCf(surname) {
        if ((surname || '').trim().length < 2) {
            return null;
        }
        const VALIDATOR = require('./validator.const');
        
        const surnameNoSpaces = this.removeDiacritics(surname.replace(/\s*/ig, '')).toUpperCase();
        const consonants = (surnameNoSpaces.match(new RegExp(`[${VALIDATOR.CONSONANT_LIST}]+`, 'ig')) || []).join('');
        const vowels = (surnameNoSpaces.match(new RegExp(`[${VALIDATOR.VOWEL_LIST}]+`, 'ig')) || []).join('');

        const partialCf = (consonants + vowels + 'X').substr(0, 3);

        if (partialCf.length < 3) {
            return null;
        }
        return partialCf;
    }

    /**
     * Parse name to cf part
     * @param {string} name Partial or complete CF to parse
     * @returns {string|null} partial cf
     * @memberof CodiceFiscaleUtils.Parser
     */
    static nameToCf(name) {
        if ((name || '').trim().length < 2) {
            return null;
        }
        const VALIDATOR = require('./validator.const');
        
        const nameNoSpaces = this.removeDiacritics(name.replace(/\s*/ig, '')).toUpperCase();
        const consonants = (nameNoSpaces.match(new RegExp(`[${VALIDATOR.CONSONANT_LIST}]+`, 'ig')) || []).join('');
        const vowels = (nameNoSpaces.match(new RegExp(`[${VALIDATOR.VOWEL_LIST}]+`, 'ig')) || []).join('');

        const partialCf = ((consonants.substr(0,2) + (consonants.substr(3,1) || consonants.substr(2,1))) + vowels + 'X').substr(0, 3);

        if (partialCf.length < 3) {
            return null;
        }
        return partialCf;
    }

    /**
     * Parse year to cf part
     * @param {string|number} year Birth year 2 or 4 digit string, number above 19XX or below 100
     * @returns {string|null} partial cf
     * @memberof CodiceFiscaleUtils.Parser
     */
    static yearToCf(year) {
        if (typeof year === 'string' && (/^\s*\d{2}(?:\d{2})?\s*$/).test(year)) {
            year = parseInt(year);
        }
        if (!(typeof year === 'number' && !isNaN(year) &&(year >= 1900 || year < 100))) {
            return null;
        }
        return ((/\d{2}$/).exec(`000${year}`) || [])[0];
    }

    /**
     * Parse month information
     * @param {number} month Month number 0..11
     * @returns {string|null} Birth Month CF code
     * @memberof CodiceFiscaleUtils.Parser
     */
    static monthToCf(month) {
        if (!(typeof month === 'number' && !isNaN(month))) {
            return null;
        }
        const BirthMonth = require('./birthMonth.enum');

        return BirthMonth[month] || null;
    }
}

module.exports = Parser;