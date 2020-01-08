import { Pattern } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfDay", () => {
        const cfDayPattern = Pattern.cfDay();
        it ("Generic", () => {
            cfDayPattern.test("0M").should.be.ok;
            cfDayPattern.test("0m").should.be.ok;
        });
        it ("Specific", () => {
            Pattern.cfDay(1).test("01").should.be.ok;
            Pattern.cfDay(1).test("0M").should.be.ok;
            Pattern.cfDay(1).test("q1").should.be.ok;
            Pattern.cfDay(1).test("41").should.be.ok;
            Pattern.cfDay(9).test("Lm").should.not.be.ok;
            Pattern.cfDay(9).test("qM").should.not.be.ok;
        });
    });
};
