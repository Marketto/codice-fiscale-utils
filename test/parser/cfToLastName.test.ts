import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("cfToLastName", () => {
		it("3 consonants", () => {
			expect(codiceFiscaleUtils.parser.cfToLastName("WYZ")).to.be.equal(
				"W*Y*Z*"
			);
			expect(codiceFiscaleUtils.parser.cfToLastName("knt")).to.be.equal(
				"k*n*t*"
			);
		});
		it("2 consonants + 1 vowel", () => {
			expect(codiceFiscaleUtils.parser.cfToLastName("WYA")).to.be.equal(
				"WA*Y*"
			);
			expect(codiceFiscaleUtils.parser.cfToLastName("kto")).to.be.equal(
				"ko*t*"
			);
		});
		it("1 consonants + 2 vowels", () => {
			expect(codiceFiscaleUtils.parser.cfToLastName("WAE")).to.be.equal("WAE*");
			expect(codiceFiscaleUtils.parser.cfToLastName("rio")).to.be.equal("rio*");
		});
		it("3 vowels", () => {
			expect(codiceFiscaleUtils.parser.cfToLastName("AEI")).to.be.equal("AEI*");
			expect(codiceFiscaleUtils.parser.cfToLastName("uau")).to.be.equal("uau*");
		});
		it("2 vowels + X", () => {
			expect(codiceFiscaleUtils.parser.cfToLastName("AEX")).to.be.equal("AE");
			expect(codiceFiscaleUtils.parser.cfToLastName("oox")).to.be.equal("oo");
		});
		it("Invalid", () => {
			expect(codiceFiscaleUtils.parser.cfToLastName("KAZ")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToLastName("ka")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToLastName("")).to.be.null;
		});
	});
};
