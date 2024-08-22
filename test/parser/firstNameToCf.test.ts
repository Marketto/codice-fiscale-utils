import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("firstNameToCf", () => {
		it("Regular", () => {
			expect(codiceFiscaleUtils.parser.firstNameToCf("Dominique")).to.be.equal(
				"DNQ"
			);
			expect(codiceFiscaleUtils.parser.firstNameToCf("Alexander")).to.be.equal(
				"LND"
			);
			expect(codiceFiscaleUtils.parser.firstNameToCf("Mark")).to.be.equal(
				"MRK"
			);
			expect(codiceFiscaleUtils.parser.firstNameToCf("Tom")).to.be.equal("TMO");
			expect(codiceFiscaleUtils.parser.firstNameToCf("Ania")).to.be.equal(
				"NAI"
			);
			expect(codiceFiscaleUtils.parser.firstNameToCf("No")).to.be.equal("NOX");
			expect(codiceFiscaleUtils.parser.firstNameToCf("Ai")).to.be.equal("AIX");
		});
		it("Diacritics & space", () => {
			expect(codiceFiscaleUtils.parser.firstNameToCf("Pier Ale")).to.be.equal(
				"PRL"
			);
			expect(codiceFiscaleUtils.parser.firstNameToCf("Olè")).to.be.equal("LOE");
			expect(codiceFiscaleUtils.parser.firstNameToCf("Içi")).to.be.equal("CII");
		});
		it("Invalid", () => {
			expect(codiceFiscaleUtils.parser.firstNameToCf("")).to.be.null;
			expect(codiceFiscaleUtils.parser.firstNameToCf("K")).to.be.null;
			expect(codiceFiscaleUtils.parser.firstNameToCf("@à")).to.be.null;
		});
	});
};
