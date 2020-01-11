import { Parser } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("firstNameToCf", () => {
        it("Regular", () => {
            expect(Parser.firstNameToCf("Dominique")).to.be.equal("DNQ");
            expect(Parser.firstNameToCf("Alexander")).to.be.equal("LND");
            expect(Parser.firstNameToCf("Mark")).to.be.equal("MRK");
            expect(Parser.firstNameToCf("Tom")).to.be.equal("TMO");
            expect(Parser.firstNameToCf("Ania")).to.be.equal("NAI");
            expect(Parser.firstNameToCf("No")).to.be.equal("NOX");
            expect(Parser.firstNameToCf("Ai")).to.be.equal("AIX");
        });
        it("Diacritics & space", () => {
            expect(Parser.firstNameToCf("Pier Ale")).to.be.equal("PRL");
            expect(Parser.firstNameToCf("Olè")).to.be.equal("LOE");
            expect(Parser.firstNameToCf("Içi")).to.be.equal("CII");
        });
        it("Invalid", () => {
            expect(Parser.firstNameToCf("")).to.be.null;
            expect(Parser.firstNameToCf("K")).to.be.null;
            expect(Parser.firstNameToCf("@à")).to.be.null;
        });
    });
};
