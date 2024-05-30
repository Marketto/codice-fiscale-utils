import {
	Belfiore,
	BelfioreConnector,
	type BelfiorePlace,
} from "./belfiore-connector";
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

export type { BelfiorePlace, DateDay, DateMonth, Genders, MultiFormatDate };

export {
	Belfiore,
	BelfioreConnector,
	BirthMonth,
	CFMismatchValidator,
	CheckDigitizer,
	CRC,
	DATE_MATCHER,
	DateUtils,
	Gender,
	Omocodes,
	Parser,
	VALIDATOR,
	Matcher,
	Pattern,
	Validator,
};

export default {
	Belfiore,
	BelfioreConnector,
	BirthMonth,
	CFMismatchValidator,
	CheckDigitizer,
	CRC,
	DATE_MATCHER,
	DateUtils,
	Gender,
	Omocodes,
	Parser,
	VALIDATOR,
	Matcher,
	Pattern,
	Validator,
};
