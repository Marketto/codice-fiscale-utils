const YEAR: string = "[12][0-9]{3}";
const MONTH: string = "0[1-9]|1[0-2]";
const DAY: string = "0[1-9]|[12][0-9]|3[01]";
const LEAP_MONTH: string = "02";
const DAYS_30_MONTHS: string = "0[469]|11";
const DAYS_31_MONTHS: string = "0[13578]|1[02]";
const MONTH_DAY: string = `(?:${MONTH})-(?:0[1-9]|[12]\\d)|(?:${DAYS_30_MONTHS})-30|(?:${DAYS_31_MONTHS})-3[01]`;
const HOURS: string = "[01]\\d|2[0-3]";
const MINUTES: string = "[0-5]\\d";
const SECONDS: string = MINUTES;
const MILLISECONDS: string = "\\d{3}";
const TIMEZONE: string = `Z|[-+](?:${HOURS})(?::?${MINUTES})?`;
const TIME: string = `(?:${HOURS})(?::${MINUTES}(?::${SECONDS}(\\.${MILLISECONDS})?)?(?:${TIMEZONE})?)?`;
const ISO8601_SHORT_DATE: string = `${YEAR}-(?:${MONTH_DAY})(?:T${TIME})?`;
const ISO8601_DATE_TIME: string = `${YEAR}(?:-(?:(?:${MONTH})|(?:${MONTH_DAY})(?:T${TIME})?))?`;

/**
 * Date Matcher consts
 * @property {Object} DATE_VALIDATOR
 * @property {string} DATE_VALIDATOR.YEAR Matcher for ISO8601 4 digits year (limited to 1000-2999)
 * @property {string} DATE_VALIDATOR.MONTH Matcher for ISO8601 2 digits month (01-12)
 * @property {string} DATE_VALIDATOR.DAY Matcher for ISO8601 2 digits day (01-31)
 * @property {string} DATE_VALIDATOR.LEAP_MONTH Matcher for ISO8601 2 digits leap month
 * @property {string} DATE_VALIDATOR.DAYS_30_MONTHS Matcher for ISO8601 2 digits 30 days month
 * @property {string} DATE_VALIDATOR.DAYS_31_MONTHS Matcher for ISO8601 2 digits 31 days month
 * @property {string} DATE_VALIDATOR.MONTH_DAY Matcher for ISO8601 2 + 2 digits (28~31)month + day
 * @property {string} DATE_VALIDATOR.ISO8601_SHORT_DATE Matcher for ISO8601 date: 4+2+2 digits year + (28~31)month + day
 * @property {string} DATE_VALIDATOR.HOURS Matcher for ISO8601 2 digits hours (00-23)
 * @property {string} DATE_VALIDATOR.MINUTES Matcher for ISO8601 2 digits minutes (00-59)
 * @property {string} DATE_VALIDATOR.SECONDS Matcher for ISO8601 2 digits seconds (00-59)
 * @property {string} DATE_VALIDATOR.MILLISECONDS Matcher for ISO8601 3 digits milliseconds (000-999)
 * @property {string} DATE_VALIDATOR.TIMEZONE Matcher for ISO8601 timezone (Z or ±## or ±##:## or ±####)
 * @property {string} DATE_VALIDATOR.TIME Matcher for ISO8601 for time (T## , T##:## , T##:##:## , T##:##:##.###)
 * @property {string} DATE_VALIDATOR.ISO8601_DATE_TIME Matcher for ISO8601 date/time format
 */
export {
    DAY,
    DAYS_30_MONTHS,
    DAYS_31_MONTHS,
    HOURS,
    ISO8601_DATE_TIME,
    ISO8601_SHORT_DATE,
    LEAP_MONTH,
    MILLISECONDS,
    MINUTES,
    MONTH,
    MONTH_DAY,
    SECONDS,
    TIME,
    TIMEZONE,
    YEAR,
};
