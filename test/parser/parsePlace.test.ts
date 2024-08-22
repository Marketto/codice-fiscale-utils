import { BelfiorePlace } from "../../src/";
import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("parsePlace", () => {
		it("By name", async () => {
			expect(await codiceFiscaleUtils.parser.parsePlace("Palermo"))
				.to.be.an("object")
				.and.to.have.property("belfioreCode", "G273");
		});
		it("By belfioreCode", async () => {
			expect(await codiceFiscaleUtils.parser.parsePlace("C352"))
				.to.be.an("object")
				.and.to.have.property("name", "Catanzaro");
		});
		it("By BelfiorePlace", async () => {
			expect(
				await codiceFiscaleUtils.parser.parsePlace(
					(await codiceFiscaleUtils.belfioreConnector.findByCode(
						"A669"
					)) as BelfiorePlace
				)
			)
				.to.be.an("object")
				.and.to.have.property("name", "Barletta");
		});
		it("Invalid", async () => {
			expect(await codiceFiscaleUtils.parser.parsePlace("")).to.be.null;
			expect(await codiceFiscaleUtils.parser.parsePlace("@!")).to.be.null;
			expect(await codiceFiscaleUtils.parser.parsePlace({} as BelfiorePlace)).to
				.be.null;
		});
	});
};
