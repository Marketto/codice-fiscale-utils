import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("cfToBirthDay", () => {
		it("Male", () => {
			expect(codiceFiscaleUtils.parser.cfToBirthDay("XXXYYY90B12")).to.be.equal(
				12
			);
			expect(codiceFiscaleUtils.parser.cfToBirthDay("xxxyyy90b12")).to.be.equal(
				12
			);
		});
		it("Female", () => {
			expect(codiceFiscaleUtils.parser.cfToBirthDay("XXXYYY90B71")).to.be.equal(
				31
			);
			expect(codiceFiscaleUtils.parser.cfToBirthDay("xxxyyy90b71")).to.be.equal(
				31
			);
		});
		it("Omocode", () => {
			expect(
				codiceFiscaleUtils.parser.cfToBirthDay("VRngNYLtDSucPr")
			).to.be.equal(28);
		});
		it("Invalid", () => {
			expect(codiceFiscaleUtils.parser.cfToBirthDay("XXXYYY90B00")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToBirthDay("xxxyyy90b35")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToBirthDay("XXXYYY90B74")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToBirthDay("xxxyyy90")).to.be.null;
			expect(codiceFiscaleUtils.parser.cfToBirthDay("")).to.be.null;
		});
	});
};
