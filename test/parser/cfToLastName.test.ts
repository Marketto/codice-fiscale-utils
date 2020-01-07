import { Parser } from "../../src";
import { expect } from "../utils";

export default async () => {
    describe("cfToLastName", () => {
        describe("Uppercase", () => {
            it ("Should return W*Y*Z*", () => {
                expect(Parser.cfToLastName("WYZ")).to.be.equal("W*Y*Z*");
            });
            it ("Should return WA*Y*", () => {
                expect(Parser.cfToLastName("WYA")).to.be.equal("WA*Y*");
            });
            it ("Should return WAE*", () => {
                expect(Parser.cfToLastName("WAE")).to.be.equal("WAE*");
            });
            it ("Should return AEI*", () => {
                expect(Parser.cfToLastName("AEI")).to.be.equal("AEI*");
            });
            it ("Should return AE", () => {
                expect(Parser.cfToLastName("AEX")).to.be.equal("AE");
            });
        });
        describe("Lowercase", () => {
            it ("Should return K*N*T*", () => {
                expect(Parser.cfToLastName("knt")).to.be.equal("k*n*t*");
            });
            it ("Should return KO*T*", () => {
                expect(Parser.cfToLastName("kto")).to.be.equal("ko*t*");
            });
            it ("Should return RIO*", () => {
                expect(Parser.cfToLastName("rio")).to.be.equal("rio*");
            });
            it ("Should return UAU*", () => {
                expect(Parser.cfToLastName("uau")).to.be.equal("uau*");
            });
            it ("Should return OO", () => {
                expect(Parser.cfToLastName("oox")).to.be.equal("oo");
            });
        });
        describe("Invalid", () => {
            // Invalid
            it("Should return null for cfToLastName strings different from 3 chars, vowel between consonants or undefined", () => {
                expect(Parser.cfToLastName("KAZ")).to.be.null;
                expect(Parser.cfToLastName("KA")).to.be.null;
                expect(Parser.cfToLastName("")).to.be.null;
            });
        });
    });
};
