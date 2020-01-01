import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("surnameToCf", () => {
        it("Should return CF surname part", () => {
            expect(Parser.surnameToCf("Rossi")).to.be.equal("RSS");
            expect(Parser.surnameToCf("Reno")).to.be.equal("RNE");
            expect(Parser.surnameToCf("Di Reno")).to.be.equal("DRN");
            expect(Parser.surnameToCf("Goia")).to.be.equal("GOI");
            expect(Parser.surnameToCf("D\'Aieie")).to.be.equal("DAI");
            expect(Parser.surnameToCf("Aieie")).to.be.equal("AIE");
            expect(Parser.surnameToCf("No")).to.be.equal("NOX");
            expect(Parser.surnameToCf("Ai")).to.be.equal("AIX");
        });
        it("Should work with diacritics", () => {
            expect(Parser.surnameToCf("Olè")).to.be.equal("LOE");
            expect(Parser.surnameToCf("Içi")).to.be.equal("CII");
        });

        describe("Invalid surnames", () => {
            it("Should return null for empty string", () => {
                expect(Parser.surnameToCf("")).to.be.null;
            });
            it("Should return null for K", () => {
                expect(Parser.surnameToCf("K")).to.be.null;
            });
            it("Should return null for @à", () => {
                expect(Parser.surnameToCf("@à")).to.be.null;
            });
        });
    });
};
