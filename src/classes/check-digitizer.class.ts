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
            for (const idx in partialCF.split("")) {
                if (idx) {
                    const index: number = parseInt(idx, 10);
                    if (!isNaN(index) && index) {
                        const char: string = partialCF[index].toUpperCase();
                        const isNumber: boolean = (/^\d$/u).test(char);
                        const isOdd: boolean = !(index % 2);
// Odd/Even are shifted/swapped (array starts from 0, "Agenzia delle Entrate" documentation counts the string from 1)
                        if (index % 2) {
                            const charCodeOffset = isNumber ? 48 : 65;
                            // Odd positions
                            yield char.charCodeAt(0) - charCodeOffset;
                        } else {
                            const enumValue: any = isNumber ?
                                String.fromCharCode(parseInt(char, 10) + 65) : char;
                            yield parseInt(CRC[enumValue], 10);
                        }
                    }
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
}

export default CheckDigitizer;
