import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("monthToCf", () => {
		it("All Months", () => {
			expect(codiceFiscaleUtils.parser.monthToCf(0)).to.be.equal("A");
			expect(codiceFiscaleUtils.parser.monthToCf(1)).to.be.equal("B");
			expect(codiceFiscaleUtils.parser.monthToCf(2)).to.be.equal("C");
			expect(codiceFiscaleUtils.parser.monthToCf(3)).to.be.equal("D");
			expect(codiceFiscaleUtils.parser.monthToCf(4)).to.be.equal("E");
			expect(codiceFiscaleUtils.parser.monthToCf(5)).to.be.equal("H");
			expect(codiceFiscaleUtils.parser.monthToCf(6)).to.be.equal("L");
			expect(codiceFiscaleUtils.parser.monthToCf(7)).to.be.equal("M");
			expect(codiceFiscaleUtils.parser.monthToCf(8)).to.be.equal("P");
			expect(codiceFiscaleUtils.parser.monthToCf(9)).to.be.equal("R");
			expect(codiceFiscaleUtils.parser.monthToCf(10)).to.be.equal("S");
			expect(codiceFiscaleUtils.parser.monthToCf(11)).to.be.equal("T");
		});
		it("Invalid", () => {
			expect(codiceFiscaleUtils.parser.monthToCf(12)).to.be.null;
			// expect(codiceFiscaleUtils.parser.monthToCf("3")).to.be.null;
			// expect(codiceFiscaleUtils.parser.monthToCf("$")).to.be.null;
		});
	});
};
