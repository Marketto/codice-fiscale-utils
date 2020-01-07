import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("placeToCf", () => {
        it("Should return A944 for Bologna", () => {
            expect(Parser.placeToCf("Bologna")).to.be.equal("A944");
        });
        it("Should return Z127 for Polonia", () => {
            expect(Parser.placeToCf("Polonia")).to.be.equal("Z127");
        });
        it("Should return A944 for Bologna in 2000", () => {
            expect(Parser.placeToCf([2000], "Bologna")).to.be.equal("A944");
        });
        it("Should return Z135 for Unione Sovietica in 1947", () => {
            expect(Parser.placeToCf([1947], "Unione Sovietica")).to.be.equal("Z135");
        });
        it("Should not return code for Unione Sovietica in 1998", () => {
            expect(Parser.placeToCf([1998], "Unione Sovietica")).to.be.not.ok;
        });
    });
};
