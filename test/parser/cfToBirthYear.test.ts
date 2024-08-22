import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("cfToBirthYear", () => {
		it("Simple", () => {
			expect(codiceFiscaleUtils.parser.cfToBirthYear("XXXYYY92")).to.be.equal(
				1992
			);
			expect(codiceFiscaleUtils.parser.cfToBirthYear("xxxyyyVn")).to.be.equal(
				1992
			);
		});
		it("20XX up to current year", () => {
			const currentYear = new Date().getFullYear();
			expect(
				codiceFiscaleUtils.parser.cfToBirthYear(
					`XXXYYY${currentYear.toString().substr(-2)}`
				)
			).to.be.equal(currentYear);
		});
		it("19XX from next year", () => {
			const ninetynineYearsAgo = new Date().getFullYear() - 99;
			expect(
				codiceFiscaleUtils.parser.cfToBirthYear(
					`xxxyyy${ninetynineYearsAgo.toString().substr(-2)}`
				)
			).to.be.equal(ninetynineYearsAgo);
		});
		it("Invalid", () => {
			expect(codiceFiscaleUtils.parser.cfToBirthDate("XXXYYY")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToBirthDate("")).to.be.null;
		});
	});
};
