import { Parser } from "../../src/";

export default () => {
	describe("cfToBirthPlace", () => {
		it("check birth date consistency", () => {
			Parser.cfToBirthPlace("XXXYYY63C16I560")?.should.have.property(
				"belfioreCode",
				"I560"
			);
			//Parser.cfToBirthPlace("XXXYYY80C16Z154")?.should.be.null;
		});
		it("no birth date consistency", () => {
			Parser.cfToBirthPlace("XXXYYY63C16I560", false)?.should.have.property(
				"belfioreCode",
				"I560"
			);
			Parser.cfToBirthPlace("XXXYYY63C56Z154", false)?.should.have.property(
				"belfioreCode",
				"Z154"
			);
		});
	});
};
