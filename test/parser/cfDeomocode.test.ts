import { codiceFiscaleUtils } from "../utils";

export default () => {
	describe("cfDeomocode", () => {
		it("Uppercase KKALMNVMAPLB331Z to KKALMN91A30B331P", () => {
			codiceFiscaleUtils.parser
				.cfDeomocode("KKALMNVMAPLB331Z")
				.should.be.equal("KKALMN91A30B331P");
		});
		it("Lowercase kkalmnvmaplb331z to kkalmn91a30b331p", () => {
			codiceFiscaleUtils.parser
				.cfDeomocode("kkalmnvmaplb331z")
				.should.be.equal("kkalmn91a30b331p");
		});
		it("Unchanged", () => {
			codiceFiscaleUtils.parser.cfDeomocode("kkalmn").should.be.equal("kkalmn");
		});
		it("Partial", () => {
			codiceFiscaleUtils.parser
				.cfDeomocode("KKALMNVMAPL")
				.should.be.equal("KKALMN91A30");
		});
	});
};
