import {
	BelfiorePlace,
	IBelfioreConnector,
} from "@marketto/belfiore-connector";
import DiacriticRemover from "@marketto/diacritic-remover";
import {
	INVALID_DATE,
	INVALID_DAY,
	INVALID_DAY_OR_GENDER,
	INVALID_GENDER,
	INVALID_NAME,
	INVALID_SURNAME,
	INVALID_YEAR,
} from "../const/error-messages.const";
import {
	BELFIORE_CODE_MATCHER,
	CF_NAME_MATCHER,
	CF_SURNAME_MATCHER,
	CHECK_DIGIT,
	CODICE_FISCALE,
	CONSONANT_LIST,
	DAY_MATCHER,
	FEMALE_DAY_MATCHER,
	FEMALE_FULL_DATE_MATCHER,
	FULL_DATE_MATCHER,
	MALE_DAY_MATCHER,
	MALE_FULL_DATE_MATCHER,
	MONTH_MATCHER,
	VOWEL_LIST,
	YEAR_MATCHER,
} from "../const/matcher.const";
import {
	DATE_MATCHER,
	DateDay,
	DateMonth,
	DateUtils,
	MultiFormatDate,
} from "../date-utils/";
import Omocodes from "../enums/omocodes.enum";
import type IPersonalInfo from "../interfaces/personal-info.interface";
import type Genders from "../types/genders.type";
import CfuError from "./cfu-error.class";
import Gender from "./gender.class";
import Parser from "./parser.class";
import dayjs from "dayjs";

const diacriticRemover = new DiacriticRemover();

export default class Pattern {
	private parser: Parser;

	constructor(private readonly belfioreConnector: IBelfioreConnector) {
		this.parser = new Parser(belfioreConnector);
	}

	/**
	 * Validation regexp for the given lastName or generic
	 * @param lastName Optional lastName to generate validation regexp
	 * @return CF Surname matcher
	 * @throw INVALID_SURNAME
	 */
	public cfLastName(lastName?: string): RegExp {
		let matcher: string = CF_SURNAME_MATCHER;
		if (lastName) {
			if (!this.lastName().test(lastName)) {
				throw new CfuError(INVALID_SURNAME);
			}
			matcher = this.parser.lastNameToCf(lastName) || matcher;
		}
		return this.isolatedInsensitiveTailor(matcher);
	}

	/**
	 * Validation regexp for the given name or generic
	 * @param name Optional name to generate validation regexp
	 * @return CF name matcher
	 * @throw INVALID_NAME
	 */
	public cfFirstName(name?: string): RegExp {
		let matcher: string = CF_NAME_MATCHER;
		if (name) {
			if (!this.lastName().test(name)) {
				throw new CfuError(INVALID_NAME);
			}
			matcher = this.parser.firstNameToCf(name) || matcher;
		}
		return this.isolatedInsensitiveTailor(matcher);
	}

	/**
	 * Validation regexp for the given year or generic
	 * @param year Optional year to generate validation regexp
	 * @return CF year matcher
	 */
	public cfYear(year?: number): RegExp {
		let matcher: string = YEAR_MATCHER;
		if (year) {
			const parsedYear = this.parser.yearToCf(year);
			if (parsedYear) {
				matcher = this.deomocode(parsedYear);
			} else {
				throw new CfuError(INVALID_YEAR);
			}
		}
		return this.isolatedInsensitiveTailor(matcher);
	}

	/**
	 * Validation regexp for the given month or generic
	 * @param month Optional month to generate validation regexp
	 * @return CF month matcher
	 */
	public cfMonth(month?: DateMonth) {
		let matcher: string = MONTH_MATCHER;
		if (month) {
			matcher = this.parser.monthToCf(month) || matcher;
		}
		return this.isolatedInsensitiveTailor(matcher);
	}

	/**
	 * Validation regexp for the given day or generic
	 * @param day Optional day to generate validation regexp
	 * @return CF day matcher
	 */
	public cfDay(day?: DateDay): RegExp {
		let matcher = DAY_MATCHER;
		if (day) {
			const parsedDayM = this.parser.dayGenderToCf(day, "M");
			const parsedDayF = this.parser.dayGenderToCf(day, "F");
			if (parsedDayM && parsedDayF) {
				const matcherM: string = this.deomocode(parsedDayM);
				const matcherF: string = this.deomocode(parsedDayF);
				matcher = `(?:${matcherM})|(?:${matcherF})`;
			} else {
				throw new CfuError(INVALID_DAY);
			}
		}
		return this.isolatedInsensitiveTailor(matcher);
	}

	/**
	 * Validation regexp for the given year or generic
	 * @param day Optional day to generate validation regexp
	 * @param gender Gender @see Genders
	 * @return CF day and gender matcher
	 */
	public cfDayGender(day?: DateDay, gender?: Genders): RegExp {
		if (!gender) {
			return this.cfDay(day);
		}
		let matcher;
		if (day) {
			const parsedDayGender = this.parser.dayGenderToCf(day, gender);
			if (parsedDayGender) {
				matcher = this.deomocode(parsedDayGender);
			} else {
				throw new CfuError(INVALID_DAY_OR_GENDER);
			}
		} else {
			switch (gender) {
				case "M":
					matcher = MALE_DAY_MATCHER;
					break;
				case "F":
					matcher = FEMALE_DAY_MATCHER;
					break;
				default:
					throw new CfuError(INVALID_GENDER);
			}
		}
		return this.isolatedInsensitiveTailor(matcher);
	}

	/**
	 * Validation regexp for the given year or generic
	 * @param date Optional date to generate validation regexp
	 * @param gender @see Genders
	 * @return CF date and gender matcher
	 */
	public cfDateGender(
		date?: MultiFormatDate | null,
		gender?: Genders | null
	): RegExp {
		if (date && !DateUtils.parseDate(date)) {
			throw new CfuError(INVALID_DATE);
		}
		if (gender && !Gender.toArray().includes(gender)) {
			throw new CfuError(INVALID_GENDER);
		}
		let matcher = FULL_DATE_MATCHER;
		if (date) {
			const parsedDateGender =
				gender && this.parser.dateGenderToCf(date, gender);
			if (parsedDateGender) {
				matcher = this.deomocode(parsedDateGender);
			} else {
				const parseDeomocode = (g: Genders): string => {
					const parsedGender = this.parser.dateGenderToCf(date, g);
					if (!parsedGender) {
						throw new CfuError(INVALID_DATE);
					}
					return parsedGender && this.deomocode(parsedGender);
				};
				matcher = `(?:${Gender.toArray().map(parseDeomocode).join("|")})`;
			}
		} else if (gender === "M") {
			matcher = MALE_FULL_DATE_MATCHER;
		} else if (gender === "F") {
			matcher = FEMALE_FULL_DATE_MATCHER;
		}
		return this.isolatedInsensitiveTailor(matcher);
	}

	/**
	 * @param placeName Optional place name to generate validation regexp
	 * @return CF place matcher
	 */
	/**
	 * @param date Optional date to generate validation regexp
	 * @param placeName Optional place name to generate validation regexp
	 * @return CF place matcher
	 */
	public async cfPlace(placeName?: string | null): Promise<RegExp>;
	public async cfPlace(
		birthDate?: MultiFormatDate | null,
		placeName?: string | null
	): Promise<RegExp>;
	public async cfPlace(
		birthDateOrName?: MultiFormatDate | null,
		placeName?: string | null
	): Promise<RegExp> {
		let matcher = BELFIORE_CODE_MATCHER;
		if (birthDateOrName) {
			const birthDate: Date | null = DateUtils.parseDate(birthDateOrName);

			if (birthDate && placeName) {
				const place: string = placeName;
				const parsedPlace = await this.parser.placeToCf(birthDate, place);
				matcher = this.deomocode(parsedPlace || "");
			} else if (!birthDate && typeof birthDateOrName === "string") {
				const place: string = birthDateOrName;
				const parsedPlace = await this.parser.placeToCf(place);
				matcher = this.deomocode(parsedPlace || "");
			}
		}
		return this.isolatedInsensitiveTailor(matcher);
	}

	/**
	 * Generates full CF validator based on given optional input or generic
	 * @param personalInfo Input Object
	 * @return CodiceFiscale matcher
	 */
	public async codiceFiscale(
		personalInfo?: Omit<IPersonalInfo, "place"> & {
			place?: BelfiorePlace | string | undefined;
		}
	): Promise<RegExp> {
		let matcher = CODICE_FISCALE;
		if (personalInfo) {
			const parsedCf = await this.parser.encodeCf(personalInfo);

			if (parsedCf) {
				matcher = this.deomocode(parsedCf);
			} else {
				const { lastName, firstName, year, month, day, date, gender, place } =
					personalInfo;
				if (
					lastName ||
					firstName ||
					year ||
					month ||
					day ||
					date ||
					gender ||
					place
				) {
					let dtParams: Date | null = null;
					if (date) {
						dtParams = DateUtils.parseDate(date);
					} else if (year) {
						dtParams = this.parser.yearMonthDayToDate(year, month, day);
					}
					const generator: (() => Promise<RegExp>)[] = [
						async () => this.cfLastName(lastName),
						async () => this.cfFirstName(firstName),
						async () => this.cfDateGender(dtParams, gender),
						async () =>
							await this.cfPlace(
								dtParams,
								(place as BelfiorePlace)?.belfioreCode || (place as string)
							),
					];

					matcher = "";
					for (const validator of generator) {
						const cfMatcher = (await validator()).toString();
						const match = cfMatcher.match(/\^(.{1,256})\$/);
						const cfValue: string | null | undefined = match && match[1];

						if (!cfValue) {
							throw new Error(`Unable to handle [${cfMatcher}]`);
						}
						matcher += `(?:${cfValue})`;
					}
					// Final addition of CheckDigit
					matcher += CHECK_DIGIT;
				}
			}
		}
		return this.isolatedInsensitiveTailor(matcher);
	}

	private LETTER_SET: string = `[A-Z${diacriticRemover.matcherBy(
		/^[A-Z]$/iu
	)}]`;
	private SEPARATOR_SET: string = "(?:'?\\s{0,4})";

	/**
	 * Returns lastName validator based on given cf or generic
	 * @param codiceFiscale Partial or complete CF to parse
	 * @return Generic or specific regular expression
	 */
	public lastName(codiceFiscale?: string): RegExp {
		let matcher: string = `${this.LETTER_SET}{1,24}`;
		if (codiceFiscale && /^[A-Z]{1,3}/iu.test(codiceFiscale)) {
			const lastNameCf: string = codiceFiscale.substr(0, 3);
			const diacriticizer = (matchingChars: string) =>
				matchingChars
					.split("")
					.map((char) => `[${diacriticRemover.insensitiveMatcher[char]}]`);

			const [cons, vow] = [
				`^[${CONSONANT_LIST}]{1,3}`,
				`[${VOWEL_LIST}]{1,3}`,
			].map((charMatcher) =>
				diacriticizer(
					(lastNameCf.match(new RegExp(charMatcher, "ig")) || [])[0] || ""
				)
			);

			const diacriticsVowelList: string =
				VOWEL_LIST +
				diacriticRemover.matcherBy(new RegExp(`^[${VOWEL_LIST}]$`, "ui"));
			const diacriticsVowelMatcher: string = `[${diacriticsVowelList}]`;
			const midDiacriticVowelMatcher: string = `(?:${diacriticsVowelMatcher}${this.SEPARATOR_SET}){0,24}`;
			const endingDiacritcVowelMatcher: string = `(?:${this.SEPARATOR_SET}${midDiacriticVowelMatcher}${diacriticsVowelMatcher})?`;
			switch (cons.length) {
				case 3: {
					const divider = midDiacriticVowelMatcher;
					matcher =
						divider +
						cons.join(`${this.SEPARATOR_SET}${divider}`) +
						`(?:${this.SEPARATOR_SET}${this.LETTER_SET}{0,24}${this.LETTER_SET})?`;
					break;
				}
				case 2: {
					const possibilities = [
						`${vow[0]}${midDiacriticVowelMatcher}${this.SEPARATOR_SET}${cons[0]}${midDiacriticVowelMatcher}${cons[1]}`,
						`${cons[0]}${this.SEPARATOR_SET}` +
							vow.join(`${this.SEPARATOR_SET}`) +
							`${this.SEPARATOR_SET}${midDiacriticVowelMatcher}${cons[1]}`,
						cons.join(`${this.SEPARATOR_SET}`) +
							`${this.SEPARATOR_SET}${vow[0]}`,
					];
					matcher = `(?:${possibilities.join(
						"|"
					)})${endingDiacritcVowelMatcher}`;
					break;
				}
				case 1: {
					const possibilities = [
						vow.slice(0, 2).join(`${this.SEPARATOR_SET}`) +
							midDiacriticVowelMatcher +
							cons.join(`${this.SEPARATOR_SET}`),
						`${vow[0]}${this.SEPARATOR_SET}` +
							cons.join(`${this.SEPARATOR_SET}`) +
							vow[1],
						[cons[0], ...vow.slice(0, 2)].join(`${this.SEPARATOR_SET}`),
					];
					matcher = `(?:${possibilities.join(
						"|"
					)})${endingDiacritcVowelMatcher}`;
					break;
				}
				default:
					matcher = `${vow.join(
						`${this.SEPARATOR_SET}`
					)}${endingDiacritcVowelMatcher}`;
			}

			if (vow?.length + cons?.length < 3) {
				return this.isolatedInsensitiveTailor(`\\s{0,4}(${matcher})\\s{0,4}`);
			}
		}

		return this.isolatedInsensitiveTailor(
			`\\s{0,4}((?:${matcher})(?:${this.SEPARATOR_SET}${this.LETTER_SET}{1,24}){0,24})\\s{0,4}`
		);
	}

	/**
	 * Returns name validator based on given cf or generic
	 * @param codiceFiscale Partial or complete CF to parse
	 * @return Generic or specific regular expression
	 */
	public firstName(codiceFiscale?: string): RegExp {
		if (
			codiceFiscale &&
			new RegExp(`^[A-Z]{3}[${CONSONANT_LIST}]{3}`, "iu").test(codiceFiscale)
		) {
			const nameCf: string = codiceFiscale.substr(3, 3);

			const cons: string[] = (
				(nameCf.match(new RegExp(`^[${CONSONANT_LIST}]{1,3}`, "ig")) ||
					[])[0] || ""
			)
				.split("")
				.map((char) => `[${diacriticRemover.insensitiveMatcher[char]}]`);

			const [diacriticsVowelList, diacriticsConsonantList]: string[] = [
				VOWEL_LIST,
				CONSONANT_LIST,
			].map(
				(chars) =>
					chars + diacriticRemover.matcherBy(new RegExp(`^[${chars}]$`, "ui"))
			);

			const matcher: string =
				`(?:[${diacriticsVowelList}]{1,24}${this.SEPARATOR_SET}){0,24}${cons[0]}${this.SEPARATOR_SET}(?:[${diacriticsVowelList}]{1,24}${this.SEPARATOR_SET}){0,24}(?:[${diacriticsConsonantList}]${this.SEPARATOR_SET}(?:[${diacriticsVowelList}]{1,24}${this.SEPARATOR_SET}){0,24})?` +
				cons
					.slice(1, 3)
					.join(
						`(?:[${diacriticsVowelList}]{1,24}${this.SEPARATOR_SET}){0,24}`
					) +
				`(?:${this.SEPARATOR_SET}${this.LETTER_SET}{1,24}){0,24}`;

			return this.isolatedInsensitiveTailor(matcher);
		}
		return this.lastName((codiceFiscale || "").substr(3, 3));
	}

	/**
	 * Returns iso8601 date validator based on given cf or generic
	 * @param codiceFiscale Partial or complete CF to parse
	 * @return Generic or specific regular expression
	 */
	public date(codiceFiscale?: string): RegExp {
		let matcher: string = DATE_MATCHER.ISO8601_DATE_TIME;
		if (codiceFiscale) {
			const parsedDate = this.parser.cfToBirthDate(codiceFiscale);
			if (parsedDate) {
				const dateIso8601: string = parsedDate.toJSON();
				if (dayjs().diff(dayjs(parsedDate), "y") < 50) {
					const century: number = parseInt(dateIso8601.substr(0, 2), 10);
					const centuries: string[] = [century - 1, century].map((year) =>
						year.toString().padStart(2, "0")
					);
					matcher = `(?:${centuries.join("|")})` + dateIso8601.substr(2, 8);
				} else {
					matcher = dateIso8601.substr(0, 10);
				}
			}
		}
		return this.isolatedInsensitiveTailor(
			`${matcher}(?:T${DATE_MATCHER.TIME}(?:${DATE_MATCHER.TIMEZONE})?)?`
		);
	}

	/**
	 * Returns gender validator based on given cf or generic
	 * @param codiceFiscale Partial or complete CF to parse
	 * @return Generic or specific regular expression
	 */
	public gender(codiceFiscale?: string): RegExp {
		const parsedGender = codiceFiscale && this.parser.cfToGender(codiceFiscale);
		const matcher: string = parsedGender || `[${Gender.toArray().join("")}]`;
		return this.isolatedInsensitiveTailor(matcher);
	}

	/**
	 * Returns place validator based on given cf or generic
	 * @param codiceFiscale Partial or complete CF to parse
	 * @return Generic or specific regular expression
	 */
	public async place(codiceFiscale?: string): Promise<RegExp> {
		let matcher: string = ".{1,32}";
		const parsedPlace =
			codiceFiscale && (await this.parser.cfToBirthPlace(codiceFiscale));

		if (parsedPlace) {
			const nameMatcher: string = parsedPlace.name.replace(/./gu, (c) =>
				diacriticRemover[c] === c ? c : `[${c}${diacriticRemover[c]}]`
			);
			matcher = `(?:(?:${nameMatcher})|${parsedPlace.belfioreCode})`;
		}

		return this.isolatedInsensitiveTailor(matcher);
	}

	public deomocode(omocode: string): string {
		return omocode.replace(/\d/gu, (n: any) => `[${n}${Omocodes[n]}]`);
	}

	private isolatedInsensitiveTailor(matcher: string): RegExp {
		return new RegExp(`^(?:${matcher})$`, "iu");
	}
}
