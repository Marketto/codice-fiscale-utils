import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToBirthMonth", () => {
        describe("Uppercase", () => {
            it("Should return the month", () => {
                expect(Parser.cfToBirthMonth("XXXYYY92C")).should.be.equal(2);
            });
        });
        describe("Lowercase", () => {
            it("Should return the month", () => {
                expect(Parser.cfToBirthMonth("xxxyyy92c")).should.be.equal(2);
            });
        });
        describe("Invalid", () => {
            it("Should return null", () => {
                expect(Parser.cfToBirthDate("XXXYYY90J")).to.be.null;
                expect(Parser.cfToBirthDate("XXXYYY90")).to.be.null;
                expect(Parser.cfToBirthDate("")).to.be.null;
            });
        });
    });
};
