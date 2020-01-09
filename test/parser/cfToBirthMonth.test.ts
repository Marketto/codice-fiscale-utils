import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToBirthMonth", () => {
        it("Uppercase", () => {
            expect(Parser.cfToBirthMonth("XXXYYY92C")).should.be.equal(2);
        });
        it("Lowercase", () => {
            expect(Parser.cfToBirthMonth("xxxyyy92c")).should.be.equal(2);
        });
        it("Invalid", () => {
            expect(Parser.cfToBirthDate("XXXYYY90J")).to.be.null;
            expect(Parser.cfToBirthDate("xxxyyy90")).to.be.null;
            expect(Parser.cfToBirthDate("")).to.be.null;
        });
    });
};
