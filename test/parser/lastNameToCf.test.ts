import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("lastNameToCf", () => {
        it("Should return CF lastName part", () => {
            expect(Parser.lastNameToCf("Rossi")).to.be.equal("RSS");
            expect(Parser.lastNameToCf("Reno")).to.be.equal("RNE");
            expect(Parser.lastNameToCf("Di Reno")).to.be.equal("DRN");
            expect(Parser.lastNameToCf("Goia")).to.be.equal("GOI");
            expect(Parser.lastNameToCf("D\'Aieie")).to.be.equal("DAI");
            expect(Parser.lastNameToCf("Aieie")).to.be.equal("AIE");
            expect(Parser.lastNameToCf("No")).to.be.equal("NOX");
            expect(Parser.lastNameToCf("Ai")).to.be.equal("AIX");
        });
        it("Should work with diacritics", () => {
            expect(Parser.lastNameToCf("Olè")).to.be.equal("LOE");
            expect(Parser.lastNameToCf("Içi")).to.be.equal("CII");
        });

        describe("Invalid lastNames", () => {
            it("Should return null for empty string", () => {
                expect(Parser.lastNameToCf("")).to.be.null;
            });
            it("Should return null for K", () => {
                expect(Parser.lastNameToCf("K")).to.be.null;
            });
            it("Should return null for @à", () => {
                expect(Parser.lastNameToCf("@à")).to.be.null;
            });
        });
    });
};
