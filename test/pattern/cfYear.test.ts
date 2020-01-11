import { Pattern } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("cfYear", () => {
        describe("Generic Pattern", () => {
            const cfYearPattern = Pattern.cfYear();
            it ("Should validate cf year 07", () => {
                cfYearPattern.test("07").should.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate cf year 86 for 1986", () => {
                Pattern.cfYear(1986).test("86").should.be.ok;
            });
            it ("Should validate cf year 8S for 1986", () => {
                Pattern.cfYear(1986).test("8S").should.be.ok;
            });
            it ("Should validate cf year U6 for 1986", () => {
                Pattern.cfYear(1986).test("U6").should.be.ok;
            });
            it ("Should validate cf year US for 1986", () => {
                Pattern.cfYear(1986).test("US").should.be.ok;
            });
            it ("Should not validate cf year 87 for 1986", () => {
                Pattern.cfYear(1986).test("87").should.not.be.ok;
            });
            it ("Should not validate cf year UT for 1986", () => {
                Pattern.cfYear(1986).test("UT").should.not.be.ok;
            });
            it ("Should validate cf year 07 for 1907", () => {
                Pattern.cfYear(1907).test("07").should.be.ok;
            });
            it ("Should validate cf year 07 for 2007", () => {
                Pattern.cfYear(2007).test("07").should.be.ok;
            });
        });
    });
};
