import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("cfToGender", () => {
		it("Male", () => {
			expect(codiceFiscaleUtils.parser.cfToGender("xxxyyy90b20")).to.be.equal(
				"M"
			);
			expect(codiceFiscaleUtils.parser.cfToGender("VRNGNYLTDMU")).to.be.equal(
				"M"
			);
			expect(codiceFiscaleUtils.parser.cfToGender("vrngnyltdmu")).to.be.equal(
				"M"
			);
		});
		it("Female", () => {
			expect(codiceFiscaleUtils.parser.cfToGender("XXXYYY90B63")).to.be.equal(
				"F"
			);
			expect(codiceFiscaleUtils.parser.cfToGender("VRNGNYLTDSU")).to.be.equal(
				"F"
			);
			expect(codiceFiscaleUtils.parser.cfToGender("vrngnyltdsu")).to.be.equal(
				"F"
			);
		});
		it("Invalid", () => {
			expect(codiceFiscaleUtils.parser.cfToGender("XXXYYY90")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToGender("")).to.be.null;
		});
	});
};
