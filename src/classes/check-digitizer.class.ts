import { PARTIAL_CF } from "../const/matcher.const";
import CRC from "../enums/crc.enum";
import CodiceFiscaleCRC from "../types/codice-fiscale-crc.type";

class CheckDigitizer {
    /**
     * Partial FiscalCode Evaluator
     * @param Partial Fiscal Code to evaluate
     * @yields character value odd/even
     */
    public static* evaluateChar(partialCF: string = ""): Generator<number> {
        if (typeof partialCF === "string" && partialCF.length) {
            for (let index = 0; index < partialCF.length; index++) {
                let char: string = partialCF[index].toUpperCase();
                const isNumber: boolean = (/^\d$/u).test(char);
                if (isNumber) {
                    // Numbers have always (odd/even) the same values of corresponding letters (0-9 => A-J)
                    char = String.fromCharCode(parseInt(char, 10) + this.CHAR_OFFSET);
                }
                // Odd/Even are shifted/swapped
                // array starts from 0, "Agenzia delle Entrate" documentation counts the string from 1
                const isOdd: boolean = !(index % 2); // Odd according to documentation
                if (isOdd) {
                    // Odd positions
                    yield parseInt(CRC[char as any], 10);
                } else {
                    // Even positions
                    yield char.charCodeAt(0) - this.CHAR_OFFSET;
                }
            }
        }
        return 0;
    }

    /**
     * Evaluate given partial CF to produce last check digit character
     * @param codiceFiscale Partial or complete Fiscal Code to evaluate to produce last character
     * @returns 16th CF char
     */
    public static checkDigit(codiceFiscale: string): CodiceFiscaleCRC | null {
        if (typeof codiceFiscale === "string" && new RegExp(PARTIAL_CF).test(codiceFiscale)) {
            const partialCF = codiceFiscale.substr(0, 15);
            let partialCfValue = 0;
            for (const charValue of this.evaluateChar(partialCF)) { partialCfValue += charValue; }
            return String.fromCharCode(partialCfValue % 26 + 65) as CodiceFiscaleCRC;
        }
        return null;
    }

    private static CHAR_OFFSET: number = 65;
}

export default CheckDigitizer;
