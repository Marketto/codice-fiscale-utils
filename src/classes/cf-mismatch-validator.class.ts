import moment from "moment";
import { BelfiorePlace } from "../belfiore-connector";
import {
	CRC_OFFSET,
	CRC_SIZE,
	DATE_OFFSET,
	DATE_SIZE,
	FIRSTNAME_OFFSET,
	FIRSTNAME_SIZE,
	GENDER_OFFSET,
	GENDER_SIZE,
	LASTNAME_OFFSET,
	LASTNAME_SIZE,
	PLACE_OFFSET,
	PLACE_SIZE,
	YEAR_OFFSET,
	YEAR_SIZE,
} from "../const/cf-offsets.const";
import { DateUtils, MultiFormatDate } from "../date-utils/";
import type IPersonalInfo from "../interfaces/personal-info.interface";
import type Genders from "../types/genders.type";
import CheckDigitizer from "./check-digitizer.class";
import Parser from "./parser.class";
import Pattern from "./pattern.class";
import type IMismatchVerboseErrors from "../interfaces/mismatch-verbose-errors.interface";

export default class CFMismatchValidator {
	constructor(private codiceFiscale: string) {}

	private get hasLastName() {
		return this.codiceFiscale.length >= LASTNAME_OFFSET + LASTNAME_SIZE;
	}

	private get hasFirstName() {
		return this.codiceFiscale.length >= FIRSTNAME_OFFSET + FIRSTNAME_SIZE;
	}
	private get hasBirthYear() {
		return this.codiceFiscale.length >= YEAR_OFFSET + YEAR_SIZE;
	}
	private get hasBirthDate() {
		return this.codiceFiscale.length >= DATE_OFFSET + DATE_SIZE;
	}
	private get hasGender() {
		return this.codiceFiscale.length >= GENDER_OFFSET + GENDER_SIZE;
	}
	private get hasBirthPlace() {
		return this.codiceFiscale.length >= PLACE_OFFSET + PLACE_SIZE;
	}

	private get hasCRC() {
		return this.codiceFiscale.length >= CRC_OFFSET + CRC_SIZE;
	}

	public matchPersonalInfo(personalInfo: IPersonalInfo): boolean {
		return Pattern.codiceFiscale(personalInfo).test(this.codiceFiscale);
	}
	public mismatchPersonalInfo(personalInfo: IPersonalInfo): boolean {
		return !!(
			this.codiceFiscale &&
			personalInfo &&
			personalInfo.lastName &&
			personalInfo.firstName &&
			(personalInfo.date ||
				(personalInfo.day && personalInfo.month && personalInfo.year)) &&
			personalInfo.gender &&
			personalInfo.place &&
			!this.matchPersonalInfo(personalInfo)
		);
	}

	public matchLastName(lastName?: string): boolean {
		return (
			this.hasLastName &&
			Pattern.lastName(this.codiceFiscale).test(lastName || "")
		);
	}
	public mismatchLastName(lastName?: string): boolean {
		return this.hasLastName && !!lastName && !this.matchLastName(lastName);
	}

	public matchFirstName(firstName: string): boolean {
		return (
			this.hasFirstName &&
			Pattern.firstName(this.codiceFiscale).test(firstName || "")
		);
	}
	public mismatchFirstName(firstName: string): boolean {
		return this.hasFirstName && !!firstName && !this.matchFirstName(firstName);
	}

	public matchBirthDate(birthDate: MultiFormatDate): boolean {
		if (this.hasBirthDate) {
			const parsedCfDate = Parser.cfToBirthDate(this.codiceFiscale);
			const parsedDate = DateUtils.parseDate(birthDate);
			if (parsedCfDate && parsedDate) {
				return moment(parsedCfDate).isSame(parsedDate, "d");
			}
		}
		return false;
	}
	public mismatchBirthDate(birthDate: MultiFormatDate): boolean {
		return (
			this.hasBirthYear &&
			!!DateUtils.parseDate(birthDate) &&
			!this.matchBirthDate(birthDate)
		);
	}

	public matchGender(gender: Genders | string): boolean {
		return (
			this.hasGender && Pattern.gender(this.codiceFiscale).test(gender || "")
		);
	}

	public mismatchGender(gender: Genders | string): boolean {
		return this.hasGender && !!gender && !this.matchGender(gender);
	}

	/**
	 * @param birthPlace BirthPlace, place name or BelfioreCode
	 */
	public matchBirthPlace(birthPlace: BelfiorePlace | string): boolean {
		if (this.hasBirthPlace && birthPlace) {
			const matcher = Pattern.place(this.codiceFiscale);
			const parsedBirthPlace = Parser.parsePlace(birthPlace);

			return !!parsedBirthPlace && matcher.test(parsedBirthPlace.belfioreCode);
		}
		return false;
	}
	/**
	 * @param birthPlace BirthPlace, place name or BelfioreCode
	 */
	public mismatchBirthPlace(birthPlace: BelfiorePlace | string): boolean {
		return (
			this.hasBirthPlace && !!birthPlace && !this.matchBirthPlace(birthPlace)
		);
	}

	/**
	 * Check the given cf validity by form, birth date/place and digit code
	 * @param codiceFiscale Complete CF to parse
	 * @return Verbose errors
	 */
	public get errors(): IMismatchVerboseErrors {
		return {
			// Checking lastName validity
			...(Parser.cfToLastName(this.codiceFiscale)
				? {}
				: { lastName: "MISSING_OR_INVALID_LAST_NAME" }),
			// Checking firstName validity
			...(Parser.cfToFirstName(this.codiceFiscale)
				? {}
				: { firstName: "MISSING_OR_INVALID_FIRST_NAME" }),
			// Checking Date validity
			...(Parser.cfToBirthDate(this.codiceFiscale)
				? {}
				: { date: "MISSING_OR_INVALID_DATE" }),
			// Checking Day validity
			...(Parser.cfToBirthDay(this.codiceFiscale)
				? {}
				: { date: "MISSING_OR_INVALID_DAY" }),
			// Checking Month validity
			...(Parser.cfToBirthMonth(this.codiceFiscale)
				? {}
				: { date: "MISSING_OR_INVALID_MONTH" }),
			// Checking Year validity
			...(Parser.cfToBirthYear(this.codiceFiscale)
				? {}
				: { date: "MISSING_OR_INVALID_YEAR" }),
			// Checking Gender validity
			...(Parser.cfToGender(this.codiceFiscale)
				? {}
				: { gender: "MISSING_DAY" }),
			// Checking Place validity
			...(Parser.cfToBirthPlace(this.codiceFiscale, false)
				? {}
				: { place: "MISSING_OR_INVALID_PLACE" }),
			// Checking Place Creation/Expiration vs Birthdate validity
			...(Parser.cfToBirthPlace(this.codiceFiscale, true)
				? {}
				: {
						place: "PLACE_EXPIRED_ON_NOT_YET_CREATED_ON_BIRTDATE",
						date: "BIRTHDATE_OUT_OF_BIRTH_PLACE_LIFE_RANGE",
				  }),
			// Checking 16th char check digit validity
			...(this.codiceFiscale
				.substring(CRC_OFFSET, CRC_OFFSET + CRC_SIZE)
				.toUpperCase() === CheckDigitizer.checkDigit(this.codiceFiscale)
				? {}
				: { crc: "INVALID_CRC_CODE" }),

			// Checking length
			...(this.hasCRC ? {} : { crc: "MISSING_CRC_CODE" }),
		};
	}

	/**
	 * Check the given cf validity by form, birth date/place and digit code
	 * @param codiceFiscale Complete CF to parse
	 * @return Generic or specific regular expression
	 */
	public get valid(): boolean {
		if (
			// Checking length
			!this.hasCRC ||
			// Checking form validity
			!Pattern.codiceFiscale().test(this.codiceFiscale) ||
			// Checking 16th char check digit validity
			this.codiceFiscale
				.substring(CRC_OFFSET, CRC_OFFSET + CRC_SIZE)
				.toUpperCase() !== CheckDigitizer.checkDigit(this.codiceFiscale) ||
			// Checking Birth date/place validity
			!Parser.cfToBirthPlace(this.codiceFiscale)
		) {
			return false;
		}
		return true;
	}
	public get invalid(): boolean {
		return !!this.codiceFiscale && !this.valid;
	}
}
