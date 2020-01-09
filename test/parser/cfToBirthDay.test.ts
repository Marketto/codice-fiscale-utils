import { Parser } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("cfToBirthDay", () => {
        it("Male", () => {
            expect(Parser.cfToBirthDay("XXXYYY90B12")).to.be.equal(12);
            expect(Parser.cfToBirthDay("xxxyyy90b12")).to.be.equal(12);
        });
        it("Female", () => {
            expect(Parser.cfToBirthDay("XXXYYY90B71")).to.be.equal(31);
            expect(Parser.cfToBirthDay("xxxyyy90b71")).to.be.equal(31);
        });
        it("Omocode", () => {
            expect(Parser.cfToBirthDay("VRngNYLtDSucPr")).to.be.equal(28);
        });
        it("Invalid", () => {
            expect(Parser.cfToBirthDay("XXXYYY90B00")).to.be.null;
            expect(Parser.cfToBirthDay("xxxyyy90b35")).to.be.null;
            expect(Parser.cfToBirthDay("XXXYYY90B74")).to.be.null;
            expect(Parser.cfToBirthDay("xxxyyy90")).to.be.null;
            expect(Parser.cfToBirthDay("")).to.be.null;
        });
    });
};
