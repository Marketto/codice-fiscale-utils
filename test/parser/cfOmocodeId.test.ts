import { codiceFiscaleUtils } from "../utils";

export default () => {
	describe("cfOmocodeId", () => {
		it("VRNGNYLtdsucprmt", () => {
			codiceFiscaleUtils.parser
				.cfOmocodeId("VRNGNYLtdsucprmt")
				.should.be.equal(127);
		});
		it("kkalmn91as0b331z", () => {
			codiceFiscaleUtils.parser
				.cfOmocodeId("kkalmn91as0b331z")
				.should.be.equal(16);
		});
		it("kkalmn91a30b331z", () => {
			codiceFiscaleUtils.parser
				.cfOmocodeId("kkalmn91a30b331z")
				.should.be.equal(0);
		});
	});
};
