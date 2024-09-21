import {
	IBelfioreConnector,
	BelfiorePlace,
} from "@marketto/belfiore-connector";
import { DateUtils, MultiFormatDate } from "../date-utils/";
import type Genders from "../types/genders.type";
import CFMismatchValidator from "./cf-mismatch-validator.class";
import Parser from "./parser.class";
import Pattern from "./pattern.class";
import { CF_INTRODUCTION_DATE } from "../const/logic.const";
import dayjs from "dayjs";

export default class Validator {
	private parser: Parser;
	private pattern: Pattern;

	constructor(private readonly belfioreConnector: IBelfioreConnector) {
		this.parser = new Parser(belfioreConnector);
		this.pattern = new Pattern(belfioreConnector);
	}

	public codiceFiscale(codiceFiscale: string): CFMismatchValidator {
		return new CFMismatchValidator(this.belfioreConnector, codiceFiscale);
	}

	public isLastNameValid(lastName: string): boolean {
		return this.pattern.lastName().test(lastName);
	}
	public isLastNameInvalid(lastName: string): boolean {
		return !!lastName && !this.isLastNameValid(lastName);
	}

	public isFirstNameValid(firstName: string): boolean {
		return this.pattern.firstName().test(firstName);
	}
	public isFirstNameInvalid(firstName: string): boolean {
		return !!firstName && !this.isFirstNameValid(firstName);
	}

	public isBirthDateValid(birthDate: MultiFormatDate): boolean {
		return !!DateUtils.parseDate(birthDate);
	}
	public isBirthDateInvalid(birthDate: MultiFormatDate): boolean {
		return !!birthDate && !this.isBirthDateValid(birthDate);
	}

	public isGenderValid(gender: Genders | string): boolean {
		return this.pattern.gender().test(gender);
	}
	public isGenderInvalid(gender: Genders | string): boolean {
		return !!gender && !this.isGenderValid(gender);
	}

	public async isBirthPlaceValid(
		birthPlace: BelfiorePlace | string
	): Promise<boolean> {
		const parsedBirthPlace = await this.parser.parsePlace(birthPlace);
		return (
			!!parsedBirthPlace &&
			!!(await this.belfioreConnector.findByCode(parsedBirthPlace.belfioreCode))
		);
	}
	public async isBirthPlaceInvalid(
		birthPlace: BelfiorePlace | string
	): Promise<boolean> {
		return !!birthPlace && !(await this.isBirthPlaceValid(birthPlace));
	}

	public async birthDatePlaceMatch(
		birthDate: MultiFormatDate,
		birthPlace: BelfiorePlace | string
	): Promise<boolean> {
		const parsedPlace = await this.parser.parsePlace(birthPlace);
		return (
			this.isBirthDateValid(birthDate) &&
			!!parsedPlace &&
			(!!(await this.belfioreConnector
				.from(birthDate)
				.findByCode(parsedPlace.belfioreCode)) ||
				// Ignoring control for people born before CF introduction
				!dayjs(DateUtils.parseDate(birthDate)).isAfter(
					CF_INTRODUCTION_DATE,
					"day"
				))
		);
	}
	public async birthDatePlaceMismatch(
		birthDate: MultiFormatDate,
		birthPlace: BelfiorePlace | string
	): Promise<boolean> {
		const parsedPlace = await this.parser.parsePlace(birthPlace);
		return (
			this.isBirthDateValid(birthDate) &&
			!!parsedPlace &&
			!(await this.birthDatePlaceMatch(birthDate, birthPlace))
		);
	}

	public async birthPlaceDateMatch(
		birthPlace: BelfiorePlace | string,
		birthDate: MultiFormatDate
	): Promise<boolean> {
		return await this.birthDatePlaceMatch(birthDate, birthPlace);
	}

	public async birthPlaceDateMismatch(
		birthPlace: BelfiorePlace | string,
		birthDate: MultiFormatDate
	): Promise<boolean> {
		return await this.birthDatePlaceMismatch(birthDate, birthPlace);
	}
}
