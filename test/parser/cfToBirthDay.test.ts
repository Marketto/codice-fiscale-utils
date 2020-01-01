import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToBirthDay", () => {
        describe("Uppercase", () => {
            it("Should return 12 (M)", () => {
                expect(Parser.cfToBirthDay("XXXYYY90B12")).to.be.equal(12);
            });
            it("Should return 31 (F)", () => {
                expect(Parser.cfToBirthDay("XXXYYY90B71")).to.be.equal(31);
            });
        });
        describe("Lowercase", () => {
            it("Should return 12 (M)", () => {
                expect(Parser.cfToBirthDay("XXXYYY90B12")).to.be.equal(12);
            });
            it("Should return 31 (F)", () => {
                expect(Parser.cfToBirthDay("XXXYYY90B71")).to.be.equal(31);
            });
        });
        describe("Invalid", () => {
            it("Should return null", () => {
                expect(Parser.cfToBirthDay("XXXYYY90B00")).to.be.null;
                expect(Parser.cfToBirthDay("XXXYYY90B35")).to.be.null;
                expect(Parser.cfToBirthDay("XXXYYY90B74")).to.be.null;
                expect(Parser.cfToBirthDay("XXXYYY90")).to.be.null;
                expect(Parser.cfToBirthDay("")).to.be.null;
            });
        });
    });
};
