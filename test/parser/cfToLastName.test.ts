import { Parser } from "../../src";
import { expect } from "../utils";

export default async () => {
    describe("cfToLastName", () => {
        it ("3 consonants", () => {
            expect(Parser.cfToLastName("WYZ")).to.be.equal("W*Y*Z*");
            expect(Parser.cfToLastName("knt")).to.be.equal("k*n*t*");
        });
        it ("2 consonants + 1 vowel", () => {
            expect(Parser.cfToLastName("WYA")).to.be.equal("WA*Y*");
            expect(Parser.cfToLastName("kto")).to.be.equal("ko*t*");
        });
        it ("1 consonants + 2 vowels", () => {
            expect(Parser.cfToLastName("WAE")).to.be.equal("WAE*");
            expect(Parser.cfToLastName("rio")).to.be.equal("rio*");
        });
        it ("3 vowels", () => {
            expect(Parser.cfToLastName("AEI")).to.be.equal("AEI*");
            expect(Parser.cfToLastName("uau")).to.be.equal("uau*");
        });
        it ("2 vowels + X", () => {
            expect(Parser.cfToLastName("AEX")).to.be.equal("AE");
            expect(Parser.cfToLastName("oox")).to.be.equal("oo");
        });
        it("Invalid", () => {
            expect(Parser.cfToLastName("KAZ")).to.be.null;
            expect(Parser.cfToLastName("ka")).to.be.null;
            expect(Parser.cfToLastName("")).to.be.null;
        });
    });
};
