import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import type DateDay from "./date-day.type";
import { ISO8601_DATE_TIME } from "./date-matcher.const";
import type DateMonth from "./date-month.type";
import type MultiFormatDate from "./multi-format-date.type";

dayjs.extend(utc);

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
					date.length > 0 &&
					date.length <= 3 &&
					!date.some((value) => typeof value !== "number" || isNaN(value)))
			)
		) {
			return null;
		}
		try {
			let parsedDate: Dayjs;
			if (Array.isArray(date)) {
				const [year, month = 0, day = 1] = date;
				if (this.isValidDateParts(year, month, day)) {
					parsedDate = dayjs.utc(this.dateFromParts(year, month, day));
				} else {
					return null;
				}
			} else {
				if (typeof date === "string" && !this.hasValidCalendarDate(date)) {
					return null;
				}
				parsedDate = dayjs.utc(date);
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

	private static hasValidCalendarDate(date: string): boolean {
		const [year, month = 1, day = 1] = date
			.substring(0, 10)
			.split("-")
			.map((value) => Number(value));
		return this.isValidDateParts(year, month - 1, day);
	}

	private static isValidDateParts(
		year: number,
		month: number,
		day: number
	): boolean {
		if (
			![year, month, day].every(Number.isInteger) ||
			month < 0 ||
			month > 11 ||
			day < 1 ||
			day > 31
		) {
			return false;
		}

		const parsedDate = this.dateFromParts(year, month, day);
		return (
			parsedDate.getUTCFullYear() === year &&
			parsedDate.getUTCMonth() === month &&
			parsedDate.getUTCDate() === day
		);
	}

	private static dateFromParts(year: number, month: number, day: number): Date {
		const parsedDate = new Date(0);
		parsedDate.setUTCHours(0, 0, 0, 0);
		parsedDate.setUTCFullYear(year, month, day);
		return parsedDate;
	}
}
