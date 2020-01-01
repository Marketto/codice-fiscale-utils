import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("yearToCf", () => {
        it("Should return CF year part from 4 digit string", () => {
            expect(Parser.yearToCf("1990")).to.be.equal("90");
            expect(Parser.yearToCf("2001")).to.be.equal("01");
            expect(Parser.yearToCf("1900")).to.be.equal("00");
            expect(Parser.yearToCf("2000")).to.be.equal("00");
        });
        it("Should return CF year part from 4 digit number", () => {
            expect(Parser.yearToCf(1992)).to.be.equal("92");
            expect(Parser.yearToCf(2010)).to.be.equal("10");
        });
        it("Should work with 2 digit string", () => {
            expect(Parser.yearToCf("13")).to.be.equal("13");
            expect(Parser.yearToCf("02")).to.be.equal("02");
        });
        it("Should work with numbers below 100", () => {
            expect(Parser.yearToCf(7)).to.be.equal("07");
            expect(Parser.yearToCf(83)).to.be.equal("83");
        });
        it("Should return null for anything different from 1,2 or 4 digits", () => {
            expect(Parser.yearToCf("")).to.be.null;
            expect(Parser.yearToCf("105")).to.be.null;
            expect(Parser.yearToCf("@à")).to.be.null;
        });
    });
};
