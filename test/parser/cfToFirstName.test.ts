import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToFirstName", () => {
        describe("Uppercase", () => {
            it ("Should return W*Y*Z*", () => {
                expect(Parser.cfToFirstName("ZZZWYZ")).to.be.equal("W*Y*Z*");
            });
            it ("Should return WA*Y*", () => {
                expect(Parser.cfToFirstName("ZZZWYA")).to.be.equal("WA*Y*");
            });
            it ("Should return WAE*", () => {
                expect(Parser.cfToFirstName("ZZZWAE")).to.be.equal("WAE*");
            });
            it ("Should return AEI*", () => {
                expect(Parser.cfToFirstName("ZZZAEI")).to.be.equal("AEI*");
            });
            it ("Should return AE", () => {
                expect(Parser.cfToFirstName("ZZZAEX")).to.be.equal("AE");
            });
        });
        describe("Lowercase", () => {
            it ("Should return K*N*T*", () => {
                expect(Parser.cfToFirstName("qqqknt")).to.be.equal("k*n*t*");
            });
            it ("Should return KO*T*", () => {
                expect(Parser.cfToFirstName("qqqkto")).to.be.equal("ko*t*");
            });
            it ("Should return RIO*", () => {
                expect(Parser.cfToFirstName("qqqrio")).to.be.equal("rio*");
            });
            it ("Should return UAU*", () => {
                expect(Parser.cfToFirstName("qqquau")).to.be.equal("uau*");
            });
            it ("Should return OO", () => {
                expect(Parser.cfToFirstName("qqqoox")).to.be.equal("oo");
            });
        });
        describe("Invalid", () => {
            it("Should return null for irregular cf", () => {
                expect(Parser.cfToFirstName("ZZZKAZ")).to.be.null;
                expect(Parser.cfToFirstName("ZZZKA")).to.be.null;
                expect(Parser.cfToFirstName("ZZZ")).to.be.null;
                expect(Parser.cfToFirstName("")).to.be.null;
            });
        });
    });
};
