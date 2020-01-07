import moment from "moment";
import { BelfiorePlace } from "../belfiore-connector/belfiore";
import IPersonalInfo from "../interfaces/personal-info.interface";
import Genders from "../types/genders.type";
import MultiFormatDate from "../types/multi-format-date.type";
import CheckDigitizer from "./check-digitizer.class";
import Parser from "./parser.class";
import Pattern from "./pattern.class";

export default class CFMismatchValidator {
    constructor(private codiceFiscale: string) {}

    public matchPersonalInfo(personalInfo: IPersonalInfo): boolean {
        return Pattern.codiceFiscale(personalInfo).test(this.codiceFiscale);
    }
    public mismatchPersonalInfo(personalInfo: IPersonalInfo): boolean {
        return !!(
            this.codiceFiscale &&
            personalInfo &&
            personalInfo.lastName &&
            personalInfo.firstName &&
            (personalInfo.date || (personalInfo.day && personalInfo.month && personalInfo.year)) &&
            personalInfo.gender &&
            personalInfo.place &&
            !this.matchPersonalInfo(personalInfo)
        );
    }

    public matchLastName(lastName?: string): boolean {
        return Pattern.lastName(this.codiceFiscale).test(lastName || "");
    }
    public mismatchLastName(lastName?: string): boolean {
        return !!(this.codiceFiscale && lastName && !this.matchLastName(lastName));
    }

    public matchFirstName(firstName: string): boolean {
        return Pattern.firstName(this.codiceFiscale).test(firstName || "");
    }
    public mismatchFirstName(firstName: string): boolean {
        return !!(this.codiceFiscale && firstName && !this.matchFirstName(firstName));
    }

    public matchBirthDate(birthDate: MultiFormatDate): boolean {
        const parsedCfDate = Parser.cfToBirthDate(this.codiceFiscale);
        const parsedDate = Parser.parseDate(birthDate);
        if (parsedCfDate && parsedDate) {
            return moment(parsedCfDate).isSame(parsedDate, "d");
        }
        return false;
    }
    public mismatchBirthDate(birthDate: MultiFormatDate): boolean {
        return !!(this.codiceFiscale && Parser.parseDate(birthDate) && !this.matchBirthDate(birthDate));
    }

    public matchGender(gender: Genders | string): boolean {
        return Pattern.gender(this.codiceFiscale).test(gender || "");
    }

    public mismatchGender(gender: Genders | string): boolean {
        return !!(this.codiceFiscale && gender && !this.matchGender(gender));
    }

    /**
     * @param birthPlace BirthPlace, place name or BelfioreCode
     */
    public matchBirthPlace(birthPlace: BelfiorePlace | string): boolean {
        const matcher = Pattern.place(this.codiceFiscale);
        const parsedBirthPlace = Parser.parsePlace(birthPlace);

        return !!(parsedBirthPlace && matcher.test(parsedBirthPlace.belfioreCode));
    }
    /**
     * @param birthPlace BirthPlace, place name or BelfioreCode
     */
    public mismatchBirthPlace(birthPlace: BelfiorePlace | string): boolean {
        return !!(this.codiceFiscale && birthPlace && !this.matchBirthPlace(birthPlace));
    }

    /**
     * Check the given cf validity by form, birth date/place and digit code
     * @param codiceFiscale Complete CF to parse
     * @return Generic or specific regular expression
     */
    public get valid(): boolean {
        const matcher = Pattern.codiceFiscale();
        if (
            // Checking form validity
            !matcher.test(this.codiceFiscale) ||
            // Checking 16th char check digit validity
            this.codiceFiscale.substr(15, 1).toUpperCase() !== CheckDigitizer.checkDigit(this.codiceFiscale) ||
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
