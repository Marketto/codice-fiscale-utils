import { Parser } from "../../src/";

export default async () => {
    describe("cfDeomocode", () => {
        it("Uppercase KKALMNVMAPLB331Z to KKALMN91A30B331Z", () => {
            Parser.cfDeomocode("KKALMNVMAPLB331Z").should.be.equal("KKALMN91A30B331Z");
        });
        it("Lowercase kkalmnvmaplb331z to kkalmn91a30b331z", () => {
            Parser.cfDeomocode("kkalmnvmaplb331z").should.be.equal("kkalmn91a30b331z");
        });
    });
};
