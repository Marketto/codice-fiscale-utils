import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("monthToCf", () => {
        it("All Months", () => {
            expect(Parser.monthToCf(0)).to.be.equal("A");
            expect(Parser.monthToCf(1)).to.be.equal("B");
            expect(Parser.monthToCf(2)).to.be.equal("C");
            expect(Parser.monthToCf(3)).to.be.equal("D");
            expect(Parser.monthToCf(4)).to.be.equal("E");
            expect(Parser.monthToCf(5)).to.be.equal("H");
            expect(Parser.monthToCf(6)).to.be.equal("L");
            expect(Parser.monthToCf(7)).to.be.equal("M");
            expect(Parser.monthToCf(8)).to.be.equal("P");
            expect(Parser.monthToCf(9)).to.be.equal("R");
            expect(Parser.monthToCf(10)).to.be.equal("S");
            expect(Parser.monthToCf(11)).to.be.equal("T");
        });
        it("Invalid", () => {
            expect(Parser.monthToCf(12)).to.be.null;
            // expect(Parser.monthToCf("3")).to.be.null;
            // expect(Parser.monthToCf("$")).to.be.null;
        });
    });
};
