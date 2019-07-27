const Belfiore = require('./belfiore');
const BirthMonth = require('./birthMonth.enum');
const CheckDigitizer = require('./checkDigitizer');
const DATE_VALIDATOR = require('./dateValidator.const');
const Diacritics = require('./diacritics');
const Gender = require('./gender.enum');
const moment = require('moment');
const Omocode = require('./omocode.enum');
const VALIDATOR = require('./validator.const');

/**
 * @class Parser
 * @memberof CodiceFiscaleUtils
 */
class Parser {

    /**
     * Default omocode bitmap
     * @readonly
     * @returns {number} Omocode bitmap number
     * @memberof Parser
     */
    static get OMOCODE_BITMAP(){
        return 0b0111011011000000;
    }

    /**
     * Parse surname information
     * 
     * @param {string} codiceFiscale Partial or complete Omocode/Regular CF to parse
     * @returns {string|null} Regular CF w/o omocodes chars
     * @memberof Parser
     */
    static cfDeomocode(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 7) {
            return codiceFiscale;
        }

        const checkBitmap = offset => !!(2**offset & this.OMOCODE_BITMAP);

        return codiceFiscale.replace(/[\dA-Z]/giu, (match, offset) => (/^[A-Z]$/giu).test(match) && checkBitmap(offset) ? Omocode[match] : match);
    }

    /**
     * Parse surname information
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {string|null} Partial/possible surname
     * @memberof Parser
     */
    static cfToSurname(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 3 || !(/^[A-Z]{3}/iu).test(codiceFiscale)) {
            return null;
        }

        const surnameCf = codiceFiscale.substr(0,3);

        const [cons = ''] = surnameCf.match(new RegExp(`^[${VALIDATOR.CONSONANT_LIST}]{1,3}`, 'ig')) || [];
        const [vow = ''] = surnameCf.match(new RegExp(`[${VALIDATOR.VOWEL_LIST}]{1,3}`, 'ig')) || [];

        const matchingLength = cons.length + vow.length;

        if (matchingLength < 2 || matchingLength < 3 && surnameCf[2].toUpperCase() !== 'X') {
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
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {string|null} Partial/possible name
     * @memberof Parser
     */
    static cfToName(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 3 || !(/^[A-Z]{6}/iu).test(codiceFiscale)) {
            return null;
        }
        return this.cfToSurname(codiceFiscale.substr(3, 3));
    }

    /**
     * Parse gender information
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {'M'|'F'|null} Male or female
     * @memberof Parser
     */
    static cfToGender(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 11) {
            return null;
        }
        const birthDay = parseInt(codiceFiscale.substr(9,2));
        if (birthDay === 0 || birthDay === 40) {
            return null;
        }
        return Gender[birthDay];
    }

    /**
     * Parse birth year information
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {number|null} Birth Year (4 digits)
     * @memberof Parser
     */
    static cfToBirthYear(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 8) {
            return null;
        }
        const birthYear = parseInt(codiceFiscale.substr(6,2));

        if (isNaN(birthYear)) {
            return null;
        }

        const current2DigitsYear = parseInt(moment().format('YY'));

        const century = (birthYear > current2DigitsYear) * 100;
        return moment().subtract(current2DigitsYear - birthYear + century, 'years').year();
    }

    /**
     * Parse birth month information
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {number|null} Birth Month (0...11 - Date notation)
     * @memberof Parser
     */
    static cfToBirthMonth(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 9) {
            return null;
        }

        const birthMonth = BirthMonth[codiceFiscale.substr(8,1)];
        if (!birthMonth && birthMonth !== 0) {
            return null;
        }
        return birthMonth;
    }

    /**
     * Parse birth day information
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {number|null} Birth day (1..31)
     * @memberof Parser
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
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {Date|null} Birth Date
     * @memberof Parser
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

        const dt = moment([birthYear, birthMonth, birthDay, 12]);
        if (!dt.isValid()) {
            return null;
        }
        return dt.toDate();
    }

    /**
     * Parse birth place information
     * 
     * @param {string} codiceFiscale Partial or complete CF to parse
     * @returns {Object} {name, belfioreCode} Birth place
     * @memberof Parser
     */
    static cfToBirthPlace(codiceFiscale) {
        if (typeof codiceFiscale !== 'string' || codiceFiscale.length < 15) {
            return null;
        }


        const birthPlace = Belfiore[codiceFiscale.substr(11,4).toUpperCase()];
        if (!birthPlace) {
            return null;
        }

        const {creationDate, expirationDate, active} = birthPlace;
        if (creationDate || expirationDate) {
            const birthDate = this.cfToBirthDate(codiceFiscale);
            if (!birthDate) {
                return null;
            }
            let validityCheck = active;
            if (creationDate) {
                validityCheck = moment(birthDate).isSameOrAfter(moment(creationDate));
            }
            if(expirationDate) {
                validityCheck = moment(birthDate).isSameOrBefore(moment(expirationDate));
            }
            if (!validityCheck) {
                return null;
            }
        }
        return birthPlace;
    }

    /**
     * @param {string} fiscalCode 16 character Codice Fiscale to decode
     * @returns {Object} {surname, name, year, month, day, gender, place} Decoded CF Info
     */
    static cfDecode(fiscalCode) {
        return {
            surname: this.cfToSurname(fiscalCode),
            name: this.cfToName(fiscalCode),

            year: this.cfToBirthYear(fiscalCode),
            month: this.cfToBirthMonth(fiscalCode),
            day: this.cfToBirthDay(fiscalCode),

            gender: this.cfToGender(fiscalCode),
            place: (this.cfToBirthPlace(fiscalCode) || {}).name
        };
    }

    /**
     * Normalize diacritics
     * 
     * @param {string} text Input text to normalize
     * @returns {string|null} Output text w/o diacritics
     */
    static removeDiacritics(text) {
        if (!text || typeof text !== 'string') {
            return null;
        }
        return text.replace(/./gu, c => Diacritics[c]);
    }

    /**
     * Parse surname to cf part
     * 
     * @param {string} surname Partial or complete CF to parse
     * @returns {string|null} partial cf
     * @memberof Parser
     */
    static surnameToCf(surname) {
        if ((surname || '').trim().length < 2) {
            return null;
        }
        
        const noDiacriticsSurname = this.removeDiacritics(surname);
        const consonants = (noDiacriticsSurname.match(new RegExp(`[${VALIDATOR.CONSONANT_LIST}]+`, 'ig')) || []).join('');
        const vowels = (noDiacriticsSurname.match(new RegExp(`[${VALIDATOR.VOWEL_LIST}]+`, 'ig')) || []).join('');

        const partialCf = (consonants + vowels + 'X').substr(0, 3);

        if (partialCf.length < 3) {
            return null;
        }
        return partialCf.toUpperCase();
    }

    /**
     * Parse name to cf part
     * 
     * @param {string} name Partial or complete CF to parse
     * @returns {string|null} partial cf
     * @memberof Parser
     */
    static nameToCf(name) {
        if ((name || '').trim().length < 2) {
            return null;
        }
        
        const noDiacriticsName = this.removeDiacritics(name);
        const consonants = (noDiacriticsName.match(new RegExp(`[${VALIDATOR.CONSONANT_LIST}]+`, 'ig')) || []).join('');

        if (consonants.length >= 4) {
            return (consonants[0] + consonants.substr(2, 2)).toUpperCase();
        }
        return this.surnameToCf(name);
    }

    /**
     * Parse year to cf part
     * 
     * @param {string|number} year Birth year 2 or 4 digit string, number above 19XX or below 100
     * @returns {string|null} partial cf
     * @memberof Parser
     */
    static yearToCf(year) {
        let parsedYear = year;
        if (typeof year === 'string') {
            parsedYear = parseInt(year);
        }
        if (!(typeof parsedYear === 'number' && !isNaN(parsedYear) &&(parsedYear >= 1900 || parsedYear < 100))) {
            return null;
        }
        return `0${parsedYear}`.substr(-2);
    }

    /**
     * Parse month information
     * 
     * @param {number} month Month number 0..11
     * @returns {string|null} Birth Month CF code
     * @memberof Parser
     */
    static monthToCf(month) {
        if (!(typeof month === 'number' && !isNaN(month))) {
            return null;
        }

        return BirthMonth[month] || null;
    }

    /**
     * Parse day information
     * 
     * @param {number} day Day number 1..31
     * @param {Gender|string} gender Gender enum value
     * @returns {string|null} Birth Day CF code
     * @memberof Parser
     */
    static dayGenderToCf(day, gender) {
        if (!(typeof day === 'number' && !isNaN(day) && (day > 0 && day < 32))) {
            return null;
        }
        const genderValue = Gender[gender];
        if (typeof genderValue !== 'number') {
            return null;
        }
        return `0${day + genderValue}`.substr(-2);
    }

    /**
     * Parse Year, Month, Day to Dated
     * 
     * @param {number} year 4 digits Year
     * @param {number} [month = 0] 1 or 2 digits Month 0..11
     * @param {number} [day = 1] 1,2 digits Day 1..31
     * @returns {Date|null} Date or null if provided year/month/day are not valid
     */
    static yearMonthDayToDate(year, month = 0, day = 1) {
        if ([year, month, day].some(param => typeof param !== 'number') || year < 1861) {
            return null;
        }
        const date = moment([year, month, day, 12]);
        if (!date.isValid() || date.year() !== year || date.month() !== month || date.date() !== day) {
            return null;
        }
        return date.toDate();
    }

    /**
     * Parse a Dated and Gender information to create Date/Gender CF part
     * 
     * @param {Date|Moment|string|Array<number>} date Date or Moment instance, ISO8601 date string or array of numbers [year, month, day]
     * @returns {Date|null} Parsed Date or null if not valid
     * @memberof Parser
     */
    static parseDate(date) {
        if (!(
            date instanceof Date ||
            date instanceof moment ||
            typeof date === 'string' && (new RegExp(DATE_VALIDATOR.ISO8601_SHORT_DATE)).test(date) ||
            Array.isArray(date) && !date.some(value => typeof value !== 'number')
        )) {
            return null;
        }

        const parsedDate = moment(date);
        if (!parsedDate.isValid()){
            return null;
        }
        return parsedDate.toDate();
    }

    /**
     * Parse a Dated and Gender information to create Date/Gender CF part
     * 
     * @param {Date|Moment|string|Array<number>} date Date or Moment instance, ISO8601 date string or array of numbers [year, month, day]
     * @param {Gender|string} gender Gender enum value
     * @returns {string|null} Birth date and Gender CF code
     * @memberof Parser
     */
    static dateGenderToCf(date, gender) {
        if (!Gender.hasOwnProperty(gender)) {
            return null;
        }
        const parsedDate = this.parseDate(date);
        if (!parsedDate) {
            return null;
        }
        
        const cfYear = this.yearToCf(parsedDate.getFullYear());
        const cfMonth = this.monthToCf(parsedDate.getMonth());
        const cfDayGender = this.dayGenderToCf(parsedDate.getDate(), gender);

        return `${cfYear}${cfMonth}${cfDayGender}`;
    }

    /**
     * Parse a Dated and Gender information to create Date/Gender CF part
     * 
     * @param {Date|Moment|string|Array<number>} date Date or Moment instance, ISO8601 date string or array of numbers [year, month, day]
     * @param {string} name City or Country name
     * @param {string} [province] Province code for cities
     * @returns {string|null} Matching place belfiore code, if only once is matching criteria
     * @memberof Parser
     *//**
     * Parse place name and province to Belfiore code
     * @param {string} name City or Country name
     * @param {string} [province] Province code for cities
     * @returns {string|null} Matching place belfiore code, if only once is matching criteria
     * @memberof Parser
     */
    static placeToCf(...args) {
        let targetDate = this.parseDate(args[0]);

        let [name, province] = args.filter(input => typeof input === 'string');
        if (!province) {
            return (Belfiore.active(targetDate).findByName(name) || {}).belfioreCode;
        }
        const results = Belfiore.searchByName(name).toArray().filter(place => province.trim().toUpperCase() === place.province);
        if (results.length === 1) {
            return results[0].belfioreCode;
        }
        return null;
    }

    /**
     * Generates full CF
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
     * @returns {string|null} Complete CF
     */
    static encodeCf({
        surname,
        name,

        year,
        month,
        day,
        date,

        gender,
        place
    }) {
        const dtParams = this.parseDate(date) || this.yearMonthDayToDate(year, month, day);
        const generator = [
            () => this.surnameToCf(surname),
            () => this.nameToCf(name),
            () => this.dateGenderToCf(dtParams, gender),
            () => this.placeToCf(dtParams, place),
            () => CheckDigitizer.checkDigit(cf)
        ];
        let cf = '';
        for (let i=0; i<generator.length; i++) {
            const cfValue = generator[i]();
            if (!cfValue) {
                return null;
            }
            cf += cfValue;
        }

        return cf;
    }
}

module.exports = Parser;