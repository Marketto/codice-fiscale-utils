import { Parser } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("placeToCf", () => {
        it("Currently active", () => {
            expect(Parser.placeToCf("Bologna")).to.be.equal("A944");
            expect(Parser.placeToCf("Polonia")).to.be.equal("Z127");
        });
        it("Active in 2000", () => {
            expect(Parser.placeToCf([2000], "Bologna")).to.be.equal("A944");
        });
        it("Unione Sovietica [Z135] in 1947 but not in 1998", () => {
            expect(Parser.placeToCf([1947], "Unione Sovietica")).to.be.equal("Z135");
            expect(Parser.placeToCf([1998], "Unione Sovietica")).to.be.not.ok;
        });
    });
};
