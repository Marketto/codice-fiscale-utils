import {
	BelfiorePlace,
	IBelfioreConnector,
} from "@marketto/belfiore-connector";
import CFMismatchValidator from "./classes/cf-mismatch-validator.class";
import CheckDigitizer from "./classes/check-digitizer.class";
import Gender from "./classes/gender.class";
import Parser from "./classes/parser.class";
import Pattern from "./classes/pattern.class";
import Validator from "./classes/validator.class";
import * as VALIDATOR from "./const/matcher.const";
import * as Matcher from "./const/matcher.const";
import {
	DATE_MATCHER,
	type DateDay,
	type DateMonth,
	DateUtils,
	type MultiFormatDate,
} from "./date-utils/";
import BirthMonth from "./enums/birth-month.enum";
import CRC from "./enums/crc.enum";
import Omocodes from "./enums/omocodes.enum";
import type Genders from "./types/genders.type";
import IMismatchVerboseErrors from "./interfaces/mismatch-verbose-errors.interface";

export type {
	BelfiorePlace,
	DateDay,
	DateMonth,
	Genders,
	MultiFormatDate,
	IMismatchVerboseErrors,
};

export default class CodiceFiscaleUtils {
	public readonly validator: Validator;
	public readonly parser: Parser;
	public readonly pattern: Pattern;

	constructor(public readonly belfioreConnector: IBelfioreConnector) {
		this.validator = new Validator(belfioreConnector);
		this.parser = new Parser(belfioreConnector);
		this.pattern = new Pattern(belfioreConnector);
	}
}

export {
	BirthMonth,
	CheckDigitizer,
	CRC,
	DATE_MATCHER,
	DateUtils,
	Gender,
	Omocodes,
	VALIDATOR,
	Matcher,
	CFMismatchValidator,
	Parser,
	Pattern,
	Validator,
	CodiceFiscaleUtils,
};
