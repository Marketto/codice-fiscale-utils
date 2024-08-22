import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("dayGenderToCf", () => {
		it("Should return CF year part from 1 or 2 digit number and Male const", () => {
			expect(codiceFiscaleUtils.parser.dayGenderToCf(3, "M")).to.be.equal("03");
			expect(codiceFiscaleUtils.parser.dayGenderToCf(25, "M")).to.be.equal(
				"25"
			);
		});
		it("Should return CF year part from 1 or 2 digit number and Female const", () => {
			expect(codiceFiscaleUtils.parser.dayGenderToCf(7, "F")).to.be.equal("47");
			expect(codiceFiscaleUtils.parser.dayGenderToCf(31, "F")).to.be.equal(
				"71"
			);
		});
		it("Should return null for anything different from 1,2 or 4 digits", () => {
			// expect(codiceFiscaleUtils.parser.dayGenderToCf("", "M")).to.be.null;
			expect(codiceFiscaleUtils.parser.dayGenderToCf(0, "F")).to.be.null;
			expect(codiceFiscaleUtils.parser.dayGenderToCf(50, "M")).to.be.null;
			// expect(codiceFiscaleUtils.parser.dayGenderToCf("@à", "F")).to.be.null;
			// expect(codiceFiscaleUtils.parser.dayGenderToCf(5, "X")).to.be.null;
		});
	});
};
