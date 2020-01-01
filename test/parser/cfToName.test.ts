import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToName", () => {
        describe("Uppercase", () => {
            it ("Should return W*Y*Z*", () => {
                expect(Parser.cfToName("ZZZWYZ")).to.be.equal("W*Y*Z*");
            });
            it ("Should return WA*Y*", () => {
                expect(Parser.cfToName("ZZZWYA")).to.be.equal("WA*Y*");
            });
            it ("Should return WAE*", () => {
                expect(Parser.cfToName("ZZZWAE")).to.be.equal("WAE*");
            });
            it ("Should return AEI*", () => {
                expect(Parser.cfToName("ZZZAEI")).to.be.equal("AEI*");
            });
            it ("Should return AE", () => {
                expect(Parser.cfToName("ZZZAEX")).to.be.equal("AE");
            });
        });
        describe("Lowercase", () => {
            it ("Should return K*N*T*", () => {
                expect(Parser.cfToName("qqqknt")).to.be.equal("k*n*t*");
            });
            it ("Should return KO*T*", () => {
                expect(Parser.cfToName("qqqkto")).to.be.equal("ko*t*");
            });
            it ("Should return RIO*", () => {
                expect(Parser.cfToName("qqqrio")).to.be.equal("rio*");
            });
            it ("Should return UAU*", () => {
                expect(Parser.cfToName("qqquau")).to.be.equal("uau*");
            });
            it ("Should return OO", () => {
                expect(Parser.cfToName("qqqoox")).to.be.equal("oo");
            });
        });
        describe("Invalid", () => {
            it("Should return null for irregular cf", () => {
                expect(Parser.cfToName("ZZZKAZ")).to.be.null;
                expect(Parser.cfToName("ZZZKA")).to.be.null;
                expect(Parser.cfToName("ZZZ")).to.be.null;
                expect(Parser.cfToName("")).to.be.null;
            });
        });
    });
};
