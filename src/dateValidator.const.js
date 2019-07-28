const YEAR = '[12][0-9]{3}';
const MONTH = '0[1-9]|1[0-2]';
const DAY = '0[1-9]|[12][0-9]|3[01]';
const LEAP_MONTH = '02';
const DAYS_30_MONTHS = '0[469]|11';
const DAYS_31_MONTHS = '0[13578]|1[02]';
const MONTH_DAY = `(?:${MONTH})-(?:0[1-9]|[12]\\d)|(?:${DAYS_30_MONTHS})-30|(?:${DAYS_31_MONTHS})-3[01]`;
const HOURS = '[01]\\d|2[0-3]';
const MINUTES = '[0-5]\\d';
const SECONDS = MINUTES;
const MILLISECONDS = '\\d{3}';
const TIMEZONE = `Z|[-+](?:${HOURS})(?::?${MINUTES})?`;
const TIME = `(?:${HOURS})(?::${MINUTES}(?::${SECONDS}(\\.${MILLISECONDS})?)?(?:${TIMEZONE})?)?`;
const ISO8601_SHORT_DATE = `${YEAR}-(?:${MONTH_DAY})(?:T${TIME})?`;
const ISO8601_DATE_TIME = `${YEAR}(?:-(?:(?:${MONTH})|(?:${MONTH_DAY})(?:T${TIME})?))?`;

/**
 * Date Validator constants
 * @readonly
 * @constant {Object} DATE_VALIDATOR
 * @constant {string} DATE_VALIDATOR.YEAR String matcher for ISO8601 4 digits year (limited to 1000-2999)
 * @constant {string} DATE_VALIDATOR.MONTH String matcher for ISO8601 2 digits month (01-12)
 * @constant {string} DATE_VALIDATOR.DAY String matcher for ISO8601 2 digits day (01-31)
 * @constant {string} DATE_VALIDATOR.LEAP_MONTH String matcher for ISO8601 2 digits leap month
 * @constant {string} DATE_VALIDATOR.DAYS_30_MONTHS String matcher for ISO8601 2 digits 30 days month
 * @constant {string} DATE_VALIDATOR.DAYS_31_MONTHS String matcher for ISO8601 2 digits 31 days month
 * @constant {string} DATE_VALIDATOR.MONTH_DAY String matcher for ISO8601 2 digits month + 2 digit day tailored for 28/29, 30 and 31 days months (##-##)
 * @constant {string} DATE_VALIDATOR.ISO8601_SHORT_DATE String matcher for ISO8601 date: 4 digits year, 2 digits month and 2 digit day tailored for 28/29, 30 and 31 days months (####-##-##)
 * @constant {string} DATE_VALIDATOR.HOURS String matcher for ISO8601 2 digits hours (00-23)
 * @constant {string} DATE_VALIDATOR.MINUTES String matcher for ISO8601 2 digits minutes (00-59)
 * @constant {string} DATE_VALIDATOR.SECONDS String matcher for ISO8601 2 digits seconds (00-59)
 * @constant {string} DATE_VALIDATOR.MILLISECONDS String matcher for ISO8601 3 digits milliseconds (000-999)
 * @constant {string} DATE_VALIDATOR.TIMEZONE String matcher for ISO8601 timezone (Z or ±## or ±##:## or ±####)
 * @constant {string} DATE_VALIDATOR.TIME String matcher for ISO8601 for time (T## , T##:## , T##:##:## , T##:##:##.###)
 * @constant {string} DATE_VALIDATOR.ISO8601_DATE_TIME String matcher for ISO8601 date/time format
 * @memberof DATE_VALIDATOR
*/
module.exports = Object.freeze({
    YEAR,
    MONTH,
    DAY,
    LEAP_MONTH,
    DAYS_30_MONTHS,
    DAYS_31_MONTHS,
    MONTH_DAY,
    ISO8601_SHORT_DATE,
    HOURS,
    MINUTES,
    SECONDS,
    MILLISECONDS,
    TIMEZONE,
    TIME,
    ISO8601_DATE_TIME
});