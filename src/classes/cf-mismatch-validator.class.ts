import dayjs from "dayjs";
import {
	IBelfioreConnector,
	BelfiorePlace,
} from "@marketto/belfiore-connector";
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
	private pattern: Pattern;
	private parser: Parser;
	constructor(
		belfioreConnector: IBelfioreConnector,
		private readonly codiceFiscale: string
	) {
		this.pattern = new Pattern(belfioreConnector);
		this.parser = new Parser(belfioreConnector);
	}

	private get hasLastName() {
		return this.codiceFiscale?.length >= LASTNAME_OFFSET + LASTNAME_SIZE;
	}

	private get hasFirstName() {
		return this.codiceFiscale?.length >= FIRSTNAME_OFFSET + FIRSTNAME_SIZE;
	}
	private get hasBirthYear() {
		return this.codiceFiscale?.length >= YEAR_OFFSET + YEAR_SIZE;
	}
	private get hasBirthDate() {
		return this.codiceFiscale?.length >= DATE_OFFSET + DATE_SIZE;
	}
	private get hasGender() {
		return this.codiceFiscale?.length >= GENDER_OFFSET + GENDER_SIZE;
	}
	private get hasBirthPlace() {
		return this.codiceFiscale?.length >= PLACE_OFFSET + PLACE_SIZE;
	}

	private get hasCRC() {
		return this.codiceFiscale?.length >= CRC_OFFSET + CRC_SIZE;
	}

	public async matchPersonalInfo(
		personalInfo: Omit<IPersonalInfo, "place"> & {
			place?: string | BelfiorePlace;
		}
	): Promise<boolean> {
		return (await this.pattern.codiceFiscale(personalInfo)).test(
			this.codiceFiscale
		);
	}
	public async mismatchPersonalInfo(
		personalInfo: Omit<IPersonalInfo, "place"> & {
			place?: string | BelfiorePlace;
		}
	): Promise<boolean> {
		return !!(
			this.codiceFiscale &&
			personalInfo &&
			personalInfo.lastName &&
			personalInfo.firstName &&
			(personalInfo.date ||
				(personalInfo.day && personalInfo.month && personalInfo.year)) &&
			personalInfo.gender &&
			personalInfo.place &&
			!(await this.matchPersonalInfo(personalInfo))
		);
	}

	public matchLastName(lastName?: string): boolean {
		return (
			this.hasLastName &&
			this.pattern.lastName(this.codiceFiscale).test(lastName || "")
		);
	}
	public mismatchLastName(lastName?: string): boolean {
		return this.hasLastName && !!lastName && !this.matchLastName(lastName);
	}

	public matchFirstName(firstName: string): boolean {
		return (
			this.hasFirstName &&
			this.pattern.firstName(this.codiceFiscale).test(firstName || "")
		);
	}
	public mismatchFirstName(firstName: string): boolean {
		return this.hasFirstName && !!firstName && !this.matchFirstName(firstName);
	}

	public matchBirthDate(birthDate: MultiFormatDate): boolean {
		if (this.hasBirthDate) {
			const parsedCfDate = this.parser.cfToBirthDate(this.codiceFiscale);
			const parsedDate = DateUtils.parseDate(birthDate);
			if (parsedCfDate && parsedDate) {
				return dayjs(parsedCfDate).isSame(parsedDate, "d");
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
			this.hasGender &&
			this.pattern.gender(this.codiceFiscale).test(gender || "")
		);
	}

	public mismatchGender(gender: Genders | string): boolean {
		return this.hasGender && !!gender && !this.matchGender(gender);
	}

	/**
	 * @param birthPlace BirthPlace, place name or BelfioreCode
	 */
	public async matchBirthPlace(
		birthPlace: BelfiorePlace | string
	): Promise<boolean> {
		if (this.hasBirthPlace && birthPlace) {
			const matcher = await this.pattern.place(this.codiceFiscale);
			const parsedBirthPlace = await this.parser.parsePlace(birthPlace);

			return !!parsedBirthPlace && matcher.test(parsedBirthPlace?.belfioreCode);
		}
		return false;
	}

	/**
	 * @param birthPlace BirthPlace, place name or BelfioreCode
	 */
	public async mismatchBirthPlace(
		birthPlace: BelfiorePlace | string
	): Promise<boolean> {
		return (
			this.hasBirthPlace &&
			!!birthPlace &&
			!(await this.matchBirthPlace(birthPlace))
		);
	}

	/**
	 * Check the given cf validity by form, birth date/place and digit code
	 * @param codiceFiscale Complete CF to parse
	 * @return Verbose errors
	 */
	public get errors(): Promise<IMismatchVerboseErrors | null> {
		return Promise.all([
			this.parser.cfToBirthPlace(this.codiceFiscale, false),
			this.parser.cfToBirthPlace(this.codiceFiscale, true),
		])
			.then(([placeCheck, placeCreationExpirationCheck]) => ({
				// Checking lastName validity
				...(this.parser.cfToLastName(this.codiceFiscale)
					? {}
					: { lastName: "MISSING_OR_INVALID_LAST_NAME" }),
				// Checking firstName validity
				...(this.parser.cfToFirstName(this.codiceFiscale)
					? {}
					: { firstName: "MISSING_OR_INVALID_FIRST_NAME" }),
				// Checking Date validity
				...(this.parser.cfToBirthDate(this.codiceFiscale)
					? {}
					: { date: "MISSING_OR_INVALID_DATE" }),
				// Checking Day validity
				...(this.parser.cfToBirthDay(this.codiceFiscale)
					? {}
					: { date: "MISSING_OR_INVALID_DAY" }),
				// Checking Month validity
				...(this.parser.cfToBirthMonth(this.codiceFiscale)
					? {}
					: { date: "MISSING_OR_INVALID_MONTH" }),
				// Checking Year validity
				...(this.parser.cfToBirthYear(this.codiceFiscale)
					? {}
					: { date: "MISSING_OR_INVALID_YEAR" }),
				// Checking Gender validity
				...(this.parser.cfToGender(this.codiceFiscale)
					? {}
					: { gender: "MISSING_DAY" }),
				// Checking Place validity
				...(placeCheck ? {} : { place: "MISSING_OR_INVALID_PLACE" }),
				// Checking Place Creation/Expiration vs Birthdate validity
				...(placeCreationExpirationCheck
					? {}
					: {
							place: "PLACE_EXPIRED_OR_NOT_YET_CREATED_ON_BIRTDATE",
							date: "BIRTHDATE_OUT_OF_BIRTH_PLACE_LIFE_RANGE",
					  }),
				// Checking 16th char check digit validity
				...(this.codiceFiscale
					?.substring(CRC_OFFSET, CRC_OFFSET + CRC_SIZE)
					?.toUpperCase() === CheckDigitizer.checkDigit(this.codiceFiscale)
					? {}
					: { crc: "INVALID_CRC_CODE" }),

				// Checking length
				...(this.hasCRC ? {} : { crc: "MISSING_CRC_CODE" }),
			}))
			.then((errors) => (Object.keys(errors).length ? errors : null));
	}

	/**
	 * Check the given cf validity by form, birth date/place and digit code
	 * @return Generic or specific regular expression
	 */
	public get valid(): Promise<boolean> {
		return Promise.all([
			this.pattern.codiceFiscale(),
			this.parser.cfToBirthPlace(this.codiceFiscale),
		]).then(
			([cfPattern, cfToBirthPlace]) =>
				!(
					// Checking length
					(
						!this.hasCRC ||
						// Checking form validity
						!cfPattern.test(this.codiceFiscale) ||
						// Checking 16th char check digit validity
						this.codiceFiscale
							?.substring(CRC_OFFSET, CRC_OFFSET + CRC_SIZE)
							?.toUpperCase() !==
							CheckDigitizer.checkDigit(this.codiceFiscale) ||
						// Checking Birth date/place validity
						!cfToBirthPlace
					)
				)
		);
	}
	public get invalid(): Promise<boolean> {
		return this.valid.then((isValid) => !!this.codiceFiscale && !isValid);
	}
}
