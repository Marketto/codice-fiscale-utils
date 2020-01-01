import { Validator } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfDayGender", () => {
        describe("Generic Validator", () => {
            const cfDayValidator = Validator.cfDayGender();
            it ("Should validate cf day/gender 0M", () => {
                cfDayValidator.test("0M").should.be.ok;
            });
            it ("Should validate cf day/gender MN for 12", () => {
                cfDayValidator.test("MN").should.be.ok;
            });
        });

        describe("Gender validator", () => {
            it ("Should validate cf gender 41 for M", () => {
                Validator.cfDayGender(undefined, "M").test("41").should.be.false;
            });

            it ("Should validate cf gender MR for F", () => {
                Validator.cfDayGender(undefined, "F").test("MR").should.be.false;
            });
            it ("Should not validate cf gender QM for F", () => {
                Validator.cfDayGender(undefined, "F").test("QM").should.true;
            });

            it ("Should not validate cf gender MR for M", () => {
                Validator.cfDayGender(undefined, "M").test("MR").should.true;
            });
            /*
            it ("Should throw an error for K as gender", () => {
                expect(() => Validator.cfDayGender(undefined, "K")).to.throw();
            });
            */
        });

        describe("Specific validator", () => {
            it ("Should validate cf day/gender 01 for 1 Male", () => {
                Validator.cfDayGender(1, "M").test("01").should.be.ok;
            });
            it ("Should not validate cf day/gender RM for 9 Female", () => {
                Validator.cfDayGender(9, "F").test("RM").should.not.be.ok;
            });

            it ("Should not validate cf day/gender 41 for 1 Male", () => {
                Validator.cfDayGender(1, "M").test("41").should.be.not.ok;
            });

            it ("Should not validate cf day/gender QM for 9 Female", () => {
                Validator.cfDayGender(9, "F").test("QM").should.not.be.ok;
            });
            /*
            it ("Should throw an error providing invalid day", () => {
                expect(() => Validator.cfDayGender(-3)).to.throw("Provided day is not valid");
            });
            */
        });
    });
};
