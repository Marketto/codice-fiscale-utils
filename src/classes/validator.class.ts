import CheckDigitizer from "./check-digitizer.class";
import Parser from "./parser.class";
import Pattern from "./pattern.class";

export default class Validator {
    public static cfLastName(codiceFiscale: string, lastName: string): boolean {
        return false;
    }

    /**
     * Check the given cf validity by form, birth date/place and digit code
     * @param codiceFiscale Complete CF to parse
     * @return Generic or specific regular expression
     */
    public static isValid(codiceFiscale: string): boolean {
        const matcher = Pattern.codiceFiscale();
        if (
            // Checking form validity
            !matcher.test(codiceFiscale) ||
            // Checking 16th char check digit validity
            codiceFiscale.substr(15, 1).toUpperCase() !== CheckDigitizer.checkDigit(codiceFiscale) ||
            // Checking Birth date/place validity
            !Parser.cfToBirthPlace(codiceFiscale)
        ) {
            return false;
        }
        return true;
    }
}
