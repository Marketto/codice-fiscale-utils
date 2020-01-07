import { Pattern } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfMonth", () => {
        describe("Generic Pattern", () => {
            const cfMonthPattern = Pattern.cfMonth();
            it ("Should validate cf month C", () => {
                cfMonthPattern.test("C").should.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate cf month A for 0", () => {
                Pattern.cfMonth(0).test("A").should.be.ok;
            });
            it ("Should validate cf month B for 1", () => {
                Pattern.cfMonth(1).test("B").should.be.ok;
            });
            it ("Should validate cf month C for 2", () => {
                Pattern.cfMonth(2).test("C").should.be.ok;
            });
            it ("Should validate cf month D for 3", () => {
                Pattern.cfMonth(3).test("D").should.be.ok;
            });
            it ("Should validate cf month E for 4", () => {
                Pattern.cfMonth(4).test("E").should.be.ok;
            });
            it ("Should validate cf month H for 5", () => {
                Pattern.cfMonth(5).test("H").should.be.ok;
            });
            it ("Should validate cf month L for 6", () => {
                Pattern.cfMonth(6).test("L").should.be.ok;
            });
            it ("Should validate cf month M for 7", () => {
                Pattern.cfMonth(7).test("M").should.be.ok;
            });
            it ("Should validate cf month P for 8", () => {
                Pattern.cfMonth(8).test("P").should.be.ok;
            });
            it ("Should validate cf month R for 9", () => {
                Pattern.cfMonth(9).test("R").should.be.ok;
            });
            it ("Should validate cf month S for 10", () => {
                Pattern.cfMonth(10).test("S").should.be.ok;
            });
            it ("Should validate cf month T for 11", () => {
                Pattern.cfMonth(11).test("T").should.be.ok;
            });

            it ("Should not validate cf month B for 9", () => {
                Pattern.cfMonth(9).test("B").should.not.be.ok;
            });
            it ("Should not validate cf month R for 10", () => {
                Pattern.cfMonth(10).test("R").should.not.be.ok;
            });
            it ("Should not validate cf month A for 11", () => {
                Pattern.cfMonth(11).test("A").should.not.be.ok;
            });
        });
    });
};
