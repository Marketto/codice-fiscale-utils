import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToGender", () => {
        describe("Uppercase", () => {
            it("Should return M (Uppercase)", () => {
                expect(Parser.cfToGender("XXXYYY90B20")).to.be.equal("M");
            });
            it("Should return F (Uppercase)", () => {
                expect(Parser.cfToGender("XXXYYY90B63")).to.be.equal("F");
            });
        });
        describe("Lowercase", () => {
            it("Should return M (Lowercase)", () => {
                expect(Parser.cfToGender("xxxyyy90b20")).to.be.equal("M");
            });
            it("Should return F (Lowercase)", () => {
                expect(Parser.cfToGender("xxxyyy90b63")).to.be.equal("F");
            });
        });
        describe("Invalid", () => {
            it("Should return null", () => {
                expect(Parser.cfToGender("XXXYYY90")).to.be.null;
                expect(Parser.cfToGender("")).to.be.null;
            });
        });
    });
};
