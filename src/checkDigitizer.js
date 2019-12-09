import VALIDATOR from './validator.const';

const CONTROL_CODE_IN = {
    'A': 1,
    'B': 0,
    'C': 5,
    'D': 7,
    'E': 9,
    'F': 13,
    'G': 15,
    'H': 17,
    'I': 19,
    'J': 21,
    'K': 2,
    'L': 4,
    'M': 18,
    'N': 20,
    'O': 11,
    'P': 3,
    'Q': 6,
    'R': 8,
    'S': 12,
    'T': 14,
    'U': 16,
    'V': 10,
    'W': 22,
    'X': 25,
    'Y': 24,
    'Z': 23
};


/**
 * CodiceFiscal 16th char check digit calculator
 * @class
 * @public
 *//**
 *
 * @namespace CheckDigitizer
 */
class CheckDigitizer {

    /**
     * Partial FiscalCode Evaluator
     * @param {string} [partialCF=''] Partial Fiscal Code to evaluate
     * @generator
     * @yields {number} character value odd/even
     * @returns {number} 0
     * @public
     */
    static* evaluateChar(partialCF = '') {
        for(let index in partialCF.split('')){
            const char = partialCF[index].toUpperCase();
            const isNumber = (/^\d/u).test(char);
            //Odd/Even are shifted/swapped (array starts from 0, 'Agenzia delle Entrate' documentation counts the string from 1)
            if (index%2) {
                //Odd positions
                yield char.charCodeAt(0) - (isNumber ? 48 : 65);
            } else {
                //Even positions
                yield CONTROL_CODE_IN[isNumber ? String.fromCharCode(parseInt(char) + 65) : char];
            }
        }
        return 0;
    }

    /**
     * Evaluate given partial CF to produce last check digit character
     * @param {string} codiceFiscale Partial or complete Fiscal Code to evaluate to produce last character
     * @returns {char|null} 16th CF char
     * @public
     */
    static checkDigit(codiceFiscale) {
        if (typeof codiceFiscale === 'string' && new RegExp(VALIDATOR.PARTIAL_CF).test(codiceFiscale)) {
            const partialCF = codiceFiscale.substr(0, 15);
            let partialCfValue = 0;
            for (let charValue of this.evaluateChar(partialCF)) partialCfValue += charValue;
            return String.fromCharCode(partialCfValue%26 + 65);
        }
        return null;
    }
}

export default CheckDigitizer;