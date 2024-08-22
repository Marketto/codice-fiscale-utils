import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("lastNameToCf", () => {
		it("Regular", () => {
			expect(codiceFiscaleUtils.parser.lastNameToCf("Rossi")).to.be.equal(
				"RSS"
			);
			expect(codiceFiscaleUtils.parser.lastNameToCf("Reno")).to.be.equal("RNE");
			expect(codiceFiscaleUtils.parser.lastNameToCf("Di Reno")).to.be.equal(
				"DRN"
			);
			expect(codiceFiscaleUtils.parser.lastNameToCf("Goia")).to.be.equal("GOI");
			expect(codiceFiscaleUtils.parser.lastNameToCf("Aieie")).to.be.equal(
				"AIE"
			);
			expect(codiceFiscaleUtils.parser.lastNameToCf("No")).to.be.equal("NOX");
			expect(codiceFiscaleUtils.parser.lastNameToCf("Ai")).to.be.equal("AIX");
		});
		it("Diacritics & apostrophe & space", () => {
			expect(codiceFiscaleUtils.parser.lastNameToCf("D'Aieie")).to.be.equal(
				"DAI"
			);
			expect(codiceFiscaleUtils.parser.lastNameToCf("Olè")).to.be.equal("LOE");
			expect(codiceFiscaleUtils.parser.lastNameToCf("Içi")).to.be.equal("CII");
		});

		describe("Invalid", () => {
			expect(codiceFiscaleUtils.parser.lastNameToCf("")).to.be.null;
			expect(codiceFiscaleUtils.parser.lastNameToCf("K")).to.be.null;
			expect(codiceFiscaleUtils.parser.lastNameToCf("@à")).to.be.null;
		});
	});
};
