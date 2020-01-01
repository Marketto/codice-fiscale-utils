import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("nameToCf", () => {
        it("Should return CF name part", () => {
            expect(Parser.nameToCf("Dominique")).to.be.equal("DNQ");
            expect(Parser.nameToCf("Alexander")).to.be.equal("LND");
            expect(Parser.nameToCf("Pier Ale")).to.be.equal("PRL");
            expect(Parser.nameToCf("Mark")).to.be.equal("MRK");
            expect(Parser.nameToCf("Tom")).to.be.equal("TMO");
            expect(Parser.nameToCf("Ania")).to.be.equal("NAI");
            expect(Parser.nameToCf("No")).to.be.equal("NOX");
            expect(Parser.nameToCf("Ai")).to.be.equal("AIX");
        });
        it("Should work with diacritics", () => {
            expect(Parser.nameToCf("Olè")).to.be.equal("LOE");
            expect(Parser.nameToCf("Içi")).to.be.equal("CII");
        });
        it("Should return null", () => {
            expect(Parser.nameToCf("")).to.be.null;
            expect(Parser.nameToCf("K")).to.be.null;
            expect(Parser.nameToCf("@à")).to.be.null;
        });
    });
};
