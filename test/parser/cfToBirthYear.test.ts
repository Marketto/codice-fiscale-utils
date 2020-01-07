import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToBirthYear", () => {
        describe("Uppercase", () => {
            it("Should return the year", () => {
                expect(Parser.cfToBirthYear("XXXYYY92"))
                    .to.be.equal(1992);
            });
            it("Should return 20XX up to current year", () => {
                const currentYear = new Date().getFullYear();
                expect(Parser.cfToBirthYear(`XXXYYY${currentYear.toString().substr(-2)}`))
                    .to.be.equal(currentYear);
            });
            it("Should return 19XX from next year", () => {
                const ninetynineYearsAgo = new Date().getFullYear() - 99;
                expect(Parser.cfToBirthYear(`XXXYYY${ninetynineYearsAgo.toString().substr(-2)}`))
                    .to.be.equal(ninetynineYearsAgo);
            });
        });
        describe("Lowercase", () => {
            it("Should return the year", () => {
                expect(Parser.cfToBirthYear("xxxyyy92"))
                    .to.be.equal(1992);
            });
            it("Should return 20XX up to current year", () => {
                const currentYear = new Date().getFullYear();
                expect(Parser.cfToBirthYear(`xxxyyy${currentYear.toString().substr(-2)}`))
                    .to.be.equal(currentYear);
            });
            it("Should return 19XX from next year", () => {
                const ninetynineYearsAgo = new Date().getFullYear() - 99;
                expect(Parser.cfToBirthYear(`xxxyyy${ninetynineYearsAgo.toString().substr(-2)}`))
                    .to.be.equal(ninetynineYearsAgo);
            });
        });
        describe("Invalid", () => {
            it("Should return null", () => {
                expect(Parser.cfToBirthDate("XXXYYY")).to.be.null;
                expect(Parser.cfToBirthDate("")).to.be.null;
            });
        });
    });
};
