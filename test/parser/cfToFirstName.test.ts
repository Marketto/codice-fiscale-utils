import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("cfToFirstName", () => {
		it("3 consonants", () => {
			expect(codiceFiscaleUtils.parser.cfToFirstName("ZZZWYZ")).to.be.equal(
				"W*Y*Z*"
			);
			expect(codiceFiscaleUtils.parser.cfToFirstName("qqqknt")).to.be.equal(
				"k*n*t*"
			);
		});
		it("2 consonants + 1 vowel", () => {
			expect(codiceFiscaleUtils.parser.cfToFirstName("ZZZWYA")).to.be.equal(
				"WA*Y*"
			);
			expect(codiceFiscaleUtils.parser.cfToFirstName("qqqkto")).to.be.equal(
				"ko*t*"
			);
		});
		it("1 consonants + 2 vowels", () => {
			expect(codiceFiscaleUtils.parser.cfToFirstName("ZZZWAE")).to.be.equal(
				"WAE*"
			);
			expect(codiceFiscaleUtils.parser.cfToFirstName("qqqrio")).to.be.equal(
				"rio*"
			);
		});
		it("3 vowels", () => {
			expect(codiceFiscaleUtils.parser.cfToFirstName("ZZZAEI")).to.be.equal(
				"AEI*"
			);
			expect(codiceFiscaleUtils.parser.cfToFirstName("qqquau")).to.be.equal(
				"uau*"
			);
		});
		it("2 vowels + X", () => {
			expect(codiceFiscaleUtils.parser.cfToFirstName("ZZZAEX")).to.be.equal(
				"AE"
			);
			expect(codiceFiscaleUtils.parser.cfToFirstName("qqqoox")).to.be.equal(
				"oo"
			);
		});
		it("Invalid", () => {
			expect(codiceFiscaleUtils.parser.cfToFirstName("zzzkaz")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToFirstName("ZZZKA")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToFirstName("zzz")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToFirstName("")).to.be.null;
		});
	});
};
