const CONSONANT_LIST = 'B-DF-HJ-NP-TV-Z';
const VOWEL_LIST = 'AEIOU';
const OMOCODE_NUMBER_LIST = '\\dLMNP-V';
const OMOCODE_NON_ZERO_NUMBER_LIST = '1-9MNP-V';
const OMOCODE_ZERO_LIST = '0L';
const MONTH_LIST = 'A-EHLMPR-T';
const MONTH_30DAYS_LIST = 'DHPS';
const MONTH_31DAYS_LIST = 'ACELMRT';
const CITY_CODE_LIST = 'A-M';
const COUNTRY_CODE_LIST = 'Z';

const NAME_MATCHER = `[A-Z][${VOWEL_LIST}][${VOWEL_LIST}X]|[${CONSONANT_LIST}]{2}[A-Z]`;
const SURNAME_MATCHER = NAME_MATCHER;
const FULL_NAME_MATCHER = `(?:${NAME_MATCHER}){2}`;

const YEAR_MATCHER = `[${OMOCODE_NUMBER_LIST}]{2}`;
const LEAP_YEAR_MATCHER = '[02468LNQSU][048LQU]|[13579MPRTV][26NS]';
const MONTH_MATCHER = `[${MONTH_LIST}]`;
const DAY_2X_MATCHER = '[26NS]';
const DAY_3X_MATCHER = '[37PT]';
const DAY_29_MATCHER = `[${OMOCODE_ZERO_LIST}4Q][${OMOCODE_NON_ZERO_NUMBER_LIST}]|[1256LMRS][${OMOCODE_NUMBER_LIST}]`;
const DAY_30_MATCHER = `[${DAY_3X_MATCHER}][${OMOCODE_ZERO_LIST}]`;
const DAY_31_MATCHER = `[${DAY_3X_MATCHER}][${OMOCODE_ZERO_LIST}1M]`;

const DAY_MATCHER = `(?:${DAY_29_MATCHER}|${DAY_3X_MATCHER}[${OMOCODE_ZERO_LIST}1M])`;
const MONTH_DAY_MATCHER = `${MONTH_MATCHER}(?:${DAY_29_MATCHER})|[${MONTH_30DAYS_LIST}]${DAY_30_MATCHER}|[${MONTH_31DAYS_LIST}]${DAY_31_MATCHER}`;
const FULL_DATE_MATCHER = `${YEAR_MATCHER}(?:${MONTH_MATCHER}(?:[${OMOCODE_ZERO_LIST}4Q][${OMOCODE_NON_ZERO_NUMBER_LIST}]|[15MR][${OMOCODE_NUMBER_LIST}]|${DAY_2X_MATCHER}[0-8LMNP-U])|[${MONTH_30DAYS_LIST}]${DAY_3X_MATCHER}[${OMOCODE_ZERO_LIST}]|[${MONTH_31DAYS_LIST}]${DAY_3X_MATCHER}[${OMOCODE_ZERO_LIST}1M]|[${MONTH_30DAYS_LIST}${MONTH_31DAYS_LIST}]${DAY_2X_MATCHER}[9V])|(?:${LEAP_YEAR_MATCHER})B${DAY_2X_MATCHER}[9V]`;

const CITY_CODE_MATCHER = `[${CITY_CODE_LIST}](?:[${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]{2}|[${OMOCODE_ZERO_LIST}](?:[${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]|[${OMOCODE_ZERO_LIST}][${OMOCODE_NON_ZERO_NUMBER_LIST}]))`;
const COUNTRY_CODE_MATCHER = `${COUNTRY_CODE_LIST}[${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]{2}`;
const PLACE_CODE_MATCHER = `[${CITY_CODE_LIST}${COUNTRY_CODE_LIST}][${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]{2}|[${COUNTRY_CODE_LIST}][${OMOCODE_ZERO_LIST}](?:[${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]|[${OMOCODE_ZERO_LIST}][${OMOCODE_NON_ZERO_NUMBER_LIST}])`;

const CODICE_FISCALE = `${FULL_NAME_MATCHER}(?:${FULL_DATE_MATCHER})(?:${PLACE_CODE_MATCHER})[A-Z]`;


const PARTIAL_NAME_MATCHER = `[A-Z][${VOWEL_LIST}]?|[${CONSONANT_LIST}]{1,2}`;
const PARTIAL_FULL_NAME = `(?:${PARTIAL_NAME_MATCHER})|(?:(?:${NAME_MATCHER})(?:${PARTIAL_NAME_MATCHER})?)`;
const PARTIAL_YEAR = `[${OMOCODE_NUMBER_LIST}]`;
const PARTIAL_MONTH_DAY = `${MONTH_MATCHER}[${OMOCODE_ZERO_LIST}12456MNQRS]?|[${MONTH_30DAYS_LIST}${MONTH_31DAYS_LIST}]${DAY_3X_MATCHER}`;
const PARTIAL_FULL_DATE =`${PARTIAL_YEAR}|(?:${YEAR_MATCHER}(?:${PARTIAL_MONTH_DAY})?)`;
const PARTIAL_PLACE_CODE_MATCHER = `[${CITY_CODE_LIST}${COUNTRY_CODE_LIST}](?:[${OMOCODE_NON_ZERO_NUMBER_LIST}][${OMOCODE_NUMBER_LIST}]?)?|[${COUNTRY_CODE_LIST}](?:[${OMOCODE_ZERO_LIST}][${OMOCODE_NUMBER_LIST}]?)?`;

const PARTIAL_CF = `${PARTIAL_FULL_NAME}|(?:${FULL_NAME_MATCHER}(?:(?:${PARTIAL_FULL_DATE})|(?:${FULL_DATE_MATCHER})(?:(?:${PARTIAL_PLACE_CODE_MATCHER})|(?:${PLACE_CODE_MATCHER})[A-Z]?)?)?)?`;

/**
 * Validator constants
 * @readonly
 * @constant {Object} VALIDATOR
 * 
 * @constant {string} VALIDATOR.CONSONANT_LIST List of consonant to be used in a RegExp
 * @constant {string} VALIDATOR.VOWEL_LIST List of vowels to be used in a RegExp
 * @constant {string} VALIDATOR.OMOCODE_NUMBER_LIST List of numbers and their omocode counterparts to be used in a RegExp
 * @constant {string} VALIDATOR.OMOCODE_NON_ZERO_NUMBER_LIST List of numbers but 0 and their omocode counterparts to be used in a RegExp
 * @constant {string} VALIDATOR.OMOCODE_ZERO_LIST List of 0 and its omocode counterpart to be used in a RegExp
 * @constant {string} VALIDATOR.MONTH_LIST
 * @constant {string} VALIDATOR.MONTH_30DAYS_LIST
 * @constant {string} VALIDATOR.MONTH_31DAYS_LIST
 * @constant {string} VALIDATOR.CITY_CODE_LIST
 * @constant {string} VALIDATOR.COUNTRY_CODE_LIST
 * @constant {string} VALIDATOR.NAME_MATCHER
 * @constant {string} VALIDATOR.SURNAME_MATCHER
 * @constant {string} VALIDATOR.FULL_NAME_MATCHER
 * @constant {string} VALIDATOR.YEAR_MATCHER
 * @constant {string} VALIDATOR.LEAP_YEAR_MATCHER
 * @constant {string} VALIDATOR.MONTH_MATCHER
 * @constant {string} VALIDATOR.DAY_29_MATCHER
 * @constant {string} VALIDATOR.DAY_30_MATCHER
 * @constant {string} VALIDATOR.DAY_31_MATCHER
 * @constant {string} VALIDATOR.DAY_MATCHER
 * @constant {string} VALIDATOR.MONTH_DAY_MATCHER
 * @constant {string} VALIDATOR.FULL_DATE_MATCHER
 * @constant {string} VALIDATOR.CITY_CODE_MATCHER
 * @constant {string} VALIDATOR.COUNTRY_CODE_MATCHER
 * @constant {string} VALIDATOR.PLACE_CODE_MATCHER
 * @constant {string} VALIDATOR.CODICE_FISCALE
 * @constant {string} VALIDATOR.PARTIAL_NAME_MATCHER
 * @constant {string} VALIDATOR.PARTIAL_FULL_NAME
 * @constant {string} VALIDATOR.PARTIAL_YEAR
 * @constant {string} VALIDATOR.PARTIAL_MONTH_DAY
 * @constant {string} VALIDATOR.PARTIAL_FULL_DATE
 * @constant {string} VALIDATOR.PARTIAL_PLACE_CODE_MATCHER
 * @constant {string} VALIDATOR.PARTIAL_CF
 * 
 * @memberof CodiceFiscaleUtils
 */
module.exports = Object.freeze({
    CONSONANT_LIST,
    VOWEL_LIST,
    OMOCODE_NUMBER_LIST,
    OMOCODE_NON_ZERO_NUMBER_LIST,
    OMOCODE_ZERO_LIST,
    MONTH_LIST,
    MONTH_30DAYS_LIST,
    MONTH_31DAYS_LIST,
    CITY_CODE_LIST,
    COUNTRY_CODE_LIST,
    NAME_MATCHER,
    SURNAME_MATCHER,
    FULL_NAME_MATCHER,
    YEAR_MATCHER,
    LEAP_YEAR_MATCHER,
    MONTH_MATCHER,
    DAY_29_MATCHER,
    DAY_30_MATCHER,
    DAY_31_MATCHER,
    DAY_MATCHER,
    MONTH_DAY_MATCHER,
    FULL_DATE_MATCHER,
    CITY_CODE_MATCHER,
    COUNTRY_CODE_MATCHER,
    PLACE_CODE_MATCHER,
    CODICE_FISCALE,
    PARTIAL_NAME_MATCHER,
    PARTIAL_FULL_NAME,
    PARTIAL_YEAR,
    PARTIAL_MONTH_DAY,
    PARTIAL_FULL_DATE,
    PARTIAL_PLACE_CODE_MATCHER,
    PARTIAL_CF
});