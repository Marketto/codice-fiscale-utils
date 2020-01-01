import { Parser } from "../../src";
import { expect } from "../utils";

export default async () => {
    describe("cfToSurname", () => {
        describe("Uppercase", () => {
            it ("Should return W*Y*Z*", () => {
                expect(Parser.cfToSurname("WYZ")).to.be.equal("W*Y*Z*");
            });
            it ("Should return WA*Y*", () => {
                expect(Parser.cfToSurname("WYA")).to.be.equal("WA*Y*");
            });
            it ("Should return WAE*", () => {
                expect(Parser.cfToSurname("WAE")).to.be.equal("WAE*");
            });
            it ("Should return AEI*", () => {
                expect(Parser.cfToSurname("AEI")).to.be.equal("AEI*");
            });
            it ("Should return AE", () => {
                expect(Parser.cfToSurname("AEX")).to.be.equal("AE");
            });
        });
        describe("Lowercase", () => {
            it ("Should return K*N*T*", () => {
                expect(Parser.cfToSurname("knt")).to.be.equal("k*n*t*");
            });
            it ("Should return KO*T*", () => {
                expect(Parser.cfToSurname("kto")).to.be.equal("ko*t*");
            });
            it ("Should return RIO*", () => {
                expect(Parser.cfToSurname("rio")).to.be.equal("rio*");
            });
            it ("Should return UAU*", () => {
                expect(Parser.cfToSurname("uau")).to.be.equal("uau*");
            });
            it ("Should return OO", () => {
                expect(Parser.cfToSurname("oox")).to.be.equal("oo");
            });
        });
        describe("Invalid", () => {
            // Invalid
            it("Should return null for cfToSurname strings different from 3 chars, vowel between consonants or undefined", () => {
                expect(Parser.cfToSurname("KAZ")).to.be.null;
                expect(Parser.cfToSurname("KA")).to.be.null;
                expect(Parser.cfToSurname("")).to.be.null;
            });
        });
    });
};
