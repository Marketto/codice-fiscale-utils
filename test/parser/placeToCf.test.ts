import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("placeToCf", () => {
		it("Currently active", async () => {
			expect(await codiceFiscaleUtils.parser.placeToCf("Bologna")).to.be.equal(
				"A944"
			);
			expect(await codiceFiscaleUtils.parser.placeToCf("Polonia")).to.be.equal(
				"Z127"
			);
		});
		it("Active in 2000", async () => {
			expect(
				await codiceFiscaleUtils.parser.placeToCf([2000], "Bologna")
			).to.be.equal("A944");
		});
		it("Unione Sovietica [Z135] in 1947 but not in 1998", async () => {
			expect(
				await codiceFiscaleUtils.parser.placeToCf([1947], "Unione Sovietica")
			).to.be.equal("Z135");
			expect(
				await codiceFiscaleUtils.parser.placeToCf([1998], "Unione Sovietica")
			).to.be.not.ok;
		});
	});
};
