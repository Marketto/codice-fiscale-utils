import { Parser } from "../../src/";

export default () => {
    describe("cfDeomocode", () => {
        it("Uppercase KKALMNVMAPLB331Z to KKALMN91A30B331P", () => {
            Parser.cfDeomocode("KKALMNVMAPLB331Z").should.be.equal("KKALMN91A30B331P");
        });
        it("Lowercase kkalmnvmaplb331z to kkalmn91a30b331p", () => {
            Parser.cfDeomocode("kkalmnvmaplb331z").should.be.equal("kkalmn91a30b331p");
        });
        it("Unchanged", () => {
            Parser.cfDeomocode("kkalmn").should.be.equal("kkalmn");
        });
        it("Partial", () => {
            Parser.cfDeomocode("KKALMNVMAPL").should.be.equal("KKALMN91A30");
        });
    });
};
