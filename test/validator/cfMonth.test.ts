import { Validator } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfMonth", () => {
        describe("Generic Validator", () => {
            const cfMonthValidator = Validator.cfMonth();
            it ("Should validate cf month C", () => {
                cfMonthValidator.test("C").should.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate cf month A for 0", () => {
                Validator.cfMonth(0).test("A").should.be.ok;
            });
            it ("Should validate cf month B for 1", () => {
                Validator.cfMonth(1).test("B").should.be.ok;
            });
            it ("Should validate cf month C for 2", () => {
                Validator.cfMonth(2).test("C").should.be.ok;
            });
            it ("Should validate cf month D for 3", () => {
                Validator.cfMonth(3).test("D").should.be.ok;
            });
            it ("Should validate cf month E for 4", () => {
                Validator.cfMonth(4).test("E").should.be.ok;
            });
            it ("Should validate cf month H for 5", () => {
                Validator.cfMonth(5).test("H").should.be.ok;
            });
            it ("Should validate cf month L for 6", () => {
                Validator.cfMonth(6).test("L").should.be.ok;
            });
            it ("Should validate cf month M for 7", () => {
                Validator.cfMonth(7).test("M").should.be.ok;
            });
            it ("Should validate cf month P for 8", () => {
                Validator.cfMonth(8).test("P").should.be.ok;
            });
            it ("Should validate cf month R for 9", () => {
                Validator.cfMonth(9).test("R").should.be.ok;
            });
            it ("Should validate cf month S for 10", () => {
                Validator.cfMonth(10).test("S").should.be.ok;
            });
            it ("Should validate cf month T for 11", () => {
                Validator.cfMonth(11).test("T").should.be.ok;
            });

            it ("Should not validate cf month B for 9", () => {
                Validator.cfMonth(9).test("B").should.not.be.ok;
            });
            it ("Should not validate cf month R for 10", () => {
                Validator.cfMonth(10).test("R").should.not.be.ok;
            });
            it ("Should not validate cf month A for 11", () => {
                Validator.cfMonth(11).test("A").should.not.be.ok;
            });
        });
    });
};
