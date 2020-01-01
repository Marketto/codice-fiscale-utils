import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("dateGenderToCf", () => {
        it("Should return CF date part from year, month, day and gender", () => {
            expect(Parser.dateGenderToCf([2016, 3, 23], "M"))
                .to.be.equal("16D23");
            expect(Parser.dateGenderToCf([1988, 7, 3], "F"))
                .to.be.equal("88M43");
        });
        it("Should return CF date part from year, month and gender", () => {
            expect(Parser.dateGenderToCf([1950, 3], "M"))
                .to.be.equal("50D01");
        });
        it("Should return CF date part from year and gender", () => {
            expect(Parser.dateGenderToCf([1950], "F"))
                .to.be.equal("50A41");
        });
        it("Should return CF date part from iso8601 date string and gender", () => {
            expect(Parser.dateGenderToCf("1987-09-22", "F"))
                .to.be.equal("87P62");
        });
        it("Should return CF date part from a Date and gender", () => {
            expect(Parser.dateGenderToCf(new Date(2016, 2, 23, 12), "M"))
                .to.be.equal("16C23");
            expect(Parser.dateGenderToCf(new Date(1988, 7, 3, 12), "F"))
                .to.be.equal("88M43");
        });
        it("Should return null for wrong dates and/or gender", () => {
            expect(Parser.dateGenderToCf("", "M")).to.be.null;
            // expect(Parser.dateGenderToCf(0, "F")).to.be.null;
            expect(Parser.dateGenderToCf([1990, 21, 12], "F")).to.be.null;
            expect(Parser.dateGenderToCf([1996, 11, 33], "M")).to.be.null;
            // expect(Parser.dateGenderToCf([2016, 3, 23], "X")).to.be.null;
        });
    });
};
