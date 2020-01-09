import { Parser } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("cfToFirstName", () => {
        it ("3 consonants", () => {
            expect(Parser.cfToFirstName("ZZZWYZ")).to.be.equal("W*Y*Z*");
            expect(Parser.cfToFirstName("qqqknt")).to.be.equal("k*n*t*");
        });
        it ("2 consonants + 1 vowel", () => {
            expect(Parser.cfToFirstName("ZZZWYA")).to.be.equal("WA*Y*");
            expect(Parser.cfToFirstName("qqqkto")).to.be.equal("ko*t*");
        });
        it ("1 consonants + 2 vowels", () => {
            expect(Parser.cfToFirstName("ZZZWAE")).to.be.equal("WAE*");
            expect(Parser.cfToFirstName("qqqrio")).to.be.equal("rio*");
        });
        it ("3 vowels", () => {
            expect(Parser.cfToFirstName("ZZZAEI")).to.be.equal("AEI*");
            expect(Parser.cfToFirstName("qqquau")).to.be.equal("uau*");
        });
        it ("2 vowels + X", () => {
            expect(Parser.cfToFirstName("ZZZAEX")).to.be.equal("AE");
            expect(Parser.cfToFirstName("qqqoox")).to.be.equal("oo");
        });
        it("Invalid", () => {
            expect(Parser.cfToFirstName("zzzkaz")).to.be.null;
            expect(Parser.cfToFirstName("ZZZKA")).to.be.null;
            expect(Parser.cfToFirstName("zzz")).to.be.null;
            expect(Parser.cfToFirstName("")).to.be.null;
        });
    });
};
