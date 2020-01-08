import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToGender", () => {
        it("Male", () => {
            expect(Parser.cfToGender("xxxyyy90b20")).to.be.equal("M");
            expect(Parser.cfToGender("VRNGNYLTDMU")).to.be.equal("M");
            expect(Parser.cfToGender("vrngnyltdmu")).to.be.equal("M");
        });
        it("Female", () => {
            expect(Parser.cfToGender("XXXYYY90B63")).to.be.equal("F");
            expect(Parser.cfToGender("VRNGNYLTDSU")).to.be.equal("F");
            expect(Parser.cfToGender("vrngnyltdsu")).to.be.equal("F");
        });
        it("Invalid", () => {
            expect(Parser.cfToGender("XXXYYY90")).to.be.null;
            expect(Parser.cfToGender("")).to.be.null;
        });
    });
};
