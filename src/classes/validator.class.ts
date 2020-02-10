import {
    Belfiore,
    BelfioreConnector,
    BelfiorePlace,
} from "../belfiore-connector";
import { DateUtils, MultiFormatDate } from "../date-utils/";
import Genders from "../types/genders.type";
import CFMismatchValidator from "./cf-mismatch-validator.class";
import Parser from "./parser.class";
import Pattern from "./pattern.class";

export default class Validator {
    public static codiceFiscale(codiceFiscale: string): CFMismatchValidator {
        return new CFMismatchValidator(codiceFiscale);
    }

    public static isLastNameValid(lastName: string): boolean {
        return Pattern.lastName().test(lastName);
    }
    public static isLastNameInvalid(lastName: string): boolean {
        return !!lastName && !this.isLastNameValid(lastName);
    }

    public static isFirstNameValid(firstName: string): boolean {
        return Pattern.firstName().test(firstName);
    }
    public static isFirstNameInvalid(firstName: string): boolean {
        return !!firstName && !this.isFirstNameValid(firstName);
    }

    public static isBirthDateValid(birthDate: MultiFormatDate): boolean {
        return !!DateUtils.parseDate(birthDate);
    }
    public static isBirthDateInvalid(birthDate: MultiFormatDate): boolean {
        return !!birthDate && !this.isBirthDateValid(birthDate);
    }

    public static isGenderValid(gender: Genders | string): boolean {
        return Pattern.gender().test(gender);
    }
    public static isGenderInvalid(gender: Genders | string): boolean {
        return !!gender && !this.isGenderValid(gender);
    }

    public static isBirthPlaceValid(
        birthPlace: BelfiorePlace | string,
        scopedBelfioreConnector: BelfioreConnector = Belfiore,
    ): boolean {
        const parsedBirthPlace = Parser.parsePlace(birthPlace);
        return !!parsedBirthPlace && !!scopedBelfioreConnector[parsedBirthPlace.belfioreCode];
    }
    public static isBirthPlaceInvalid(
        birthPlace: BelfiorePlace | string,
        scopedBelfioreConnector: BelfioreConnector = Belfiore,
    ): boolean {
        return !!birthPlace && !this.isBirthPlaceValid(birthPlace, scopedBelfioreConnector);
    }

    public static birthDatePlaceMatch(birthDate: MultiFormatDate, birthPlace: BelfiorePlace | string): boolean {
        const parsedPlace = Parser.parsePlace(birthPlace);
        return this.isBirthDateValid(birthDate) && !!parsedPlace &&
            !!Belfiore.active(birthDate)[parsedPlace.belfioreCode];
    }
    public static birthDatePlaceMismatch(birthDate: MultiFormatDate, birthPlace: BelfiorePlace | string): boolean {
        const parsedPlace = Parser.parsePlace(birthPlace);
        return this.isBirthDateValid(birthDate) && !!parsedPlace &&
            !this.birthDatePlaceMatch(birthDate, birthPlace);
    }
    public static birthPlaceDateMatch(birthPlace: BelfiorePlace | string, birthDate: MultiFormatDate): boolean {
        return this.birthDatePlaceMatch(birthDate, birthPlace);
    }
    public static birthPlaceDateMismatch(birthPlace: BelfiorePlace | string, birthDate: MultiFormatDate): boolean {
        return this.birthDatePlaceMismatch(birthDate, birthPlace);
    }
}
