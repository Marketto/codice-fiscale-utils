import dayjs, { Dayjs } from "dayjs";
import type DateDay from "./date-day.type";
import { ISO8601_DATE_TIME } from "./date-matcher.const";
import type DateMonth from "./date-month.type";
import type MultiFormatDate from "./multi-format-date.type";
export default class DateUtils {
	/**
	 * Parse a Dated and Gender information to create Date/Gender CF part
	 * @param date Date instance, ISO8601 date string or array of numbers [year, month, day]
	 * @returns Parsed Date or null if not valid
	 */
	public static parseDate(date?: MultiFormatDate | null): Date | null {
		if (
			!(
				date instanceof Date ||
				(typeof date === "string" &&
					new RegExp(`^(?:${ISO8601_DATE_TIME})$`).test(date)) ||
				(Array.isArray(date) &&
					date.length &&
					!date.some((value) => typeof value !== "number" || isNaN(value)))
			)
		) {
			return null;
		}
		try {
			let parsedDate: Dayjs;
			if (Array.isArray(date)) {
				const [year, month = 0, day = 1] = date;
				if (month >= 0 && month <= 11 && day > 0 && day <= 31) {
					parsedDate = dayjs(Date.UTC(year, month || 0, day || 1));
				} else {
					return null;
				}
			} else {
				parsedDate = dayjs(date);
			}
			return parsedDate.isValid() ? parsedDate.toDate() : null;
		} catch (err) {
			return null;
		}
	}

	public static ymdToDate(
		year?: number | null,
		month?: DateMonth | null,
		day?: DateDay | null
	): Date | null {
		return this.parseDate([year, month, day] as number[]);
	}
}
