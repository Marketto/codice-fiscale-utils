import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("cfToBirthMonth", () => {
		it("Uppercase", () => {
			expect(
				codiceFiscaleUtils.parser.cfToBirthMonth("XXXYYY92C")
			).should.be.equal(2);
		});
		it("Lowercase", () => {
			expect(
				codiceFiscaleUtils.parser.cfToBirthMonth("xxxyyy92c")
			).should.be.equal(2);
		});
		it("Invalid", () => {
			expect(codiceFiscaleUtils.parser.cfToBirthDate("XXXYYY90J")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToBirthDate("xxxyyy90")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToBirthDate("")).to.be.null;
		});
	});
};
