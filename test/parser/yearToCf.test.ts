import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("yearToCf", () => {
		it("4 digit string", () => {
			expect(codiceFiscaleUtils.parser.yearToCf("1990")).to.be.equal("90");
			expect(codiceFiscaleUtils.parser.yearToCf("2001")).to.be.equal("01");
			expect(codiceFiscaleUtils.parser.yearToCf("1900")).to.be.equal("00");
			expect(codiceFiscaleUtils.parser.yearToCf("2000")).to.be.equal("00");
		});
		it("4 digit number", () => {
			expect(codiceFiscaleUtils.parser.yearToCf(1992)).to.be.equal("92");
			expect(codiceFiscaleUtils.parser.yearToCf(2010)).to.be.equal("10");
		});
		it("2 digit string", () => {
			expect(codiceFiscaleUtils.parser.yearToCf("13")).to.be.equal("13");
			expect(codiceFiscaleUtils.parser.yearToCf("02")).to.be.equal("02");
		});
		it("Numbers below 100", () => {
			expect(codiceFiscaleUtils.parser.yearToCf(7)).to.be.equal("07");
			expect(codiceFiscaleUtils.parser.yearToCf(83)).to.be.equal("83");
		});
		it("Invalid", () => {
			expect(codiceFiscaleUtils.parser.yearToCf("")).to.be.null;
			expect(codiceFiscaleUtils.parser.yearToCf("105")).to.be.null;
			expect(codiceFiscaleUtils.parser.yearToCf("@à")).to.be.null;
		});
	});
};
