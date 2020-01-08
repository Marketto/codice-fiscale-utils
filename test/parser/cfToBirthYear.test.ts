import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToBirthYear", () => {
        it("Simple", () => {
            expect(Parser.cfToBirthYear("XXXYYY92"))
                .to.be.equal(1992);
            expect(Parser.cfToBirthYear("xxxyyyVn"))
                .to.be.equal(1992);
        });
        it("20XX up to current year", () => {
            const currentYear = new Date().getFullYear();
            expect(Parser.cfToBirthYear(`XXXYYY${currentYear.toString().substr(-2)}`))
                .to.be.equal(currentYear);
        });
        it("19XX from next year", () => {
            const ninetynineYearsAgo = new Date().getFullYear() - 99;
            expect(Parser.cfToBirthYear(`xxxyyy${ninetynineYearsAgo.toString().substr(-2)}`))
                .to.be.equal(ninetynineYearsAgo);
        });
        it("Invalid", () => {
            expect(Parser.cfToBirthDate("XXXYYY")).to.be.null;
            expect(Parser.cfToBirthDate("")).to.be.null;
        });
    });
};
