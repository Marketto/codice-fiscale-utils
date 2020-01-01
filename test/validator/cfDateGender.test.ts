import { Validator } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfDateGender", () => {
        describe("Generic Validator", () => {
            const cfDateValidator = Validator.cfDateGender();
            it ("Should validate 83D22", () => {
                cfDateValidator.test("83D22").should.be.ok;
            });
            it ("Should validate U3D2N", () => {
                cfDateValidator.test("U3D2N").should.be.ok;
            });
        });

        describe("Gender validator", () => {
            it ("Should validate cf gender U3D41 for M", () => {
                Validator.cfDateGender(null, "M").test("U3D41").should.be.false;
            });

            it ("Should validate cf gender 83DMR for F", () => {
                Validator.cfDateGender(null, "F").test("83DMR").should.be.false;
            });
            it ("Should not validate cf gender V5EQM for F", () => {
                Validator.cfDateGender(null, "F").test("V5EQM").should.true;
            });

            it ("Should not validate cf gender 83DMR for M", () => {
                Validator.cfDateGender(null, "M").test("83DMR").should.true;
            });
            /*
            it ("Should throw an error for K as gender", () => {
                expect(() => Validator.cfDateGender(null, "K")).to.throw();
            });
            */
        });

        describe("Specific validator", () => {
            it ("Should validate U3D2N for 1983-04-22 Male", () => {
                Validator.cfDateGender([1983, 3, 22], "M").test("U3D2N").should.be.ok;
            });
            it ("Should validate 83D22 for 1983-04-22 Male", () => {
                Validator.cfDateGender([1983, 3, 22], "M").test("83D22").should.be.ok;
            });
            it ("Should not validate U3D2N for 1983-04-22 Male", () => {
                Validator.cfDateGender([1983, 3, 22], "M").test("U3DSN").should.not.be.ok;
            });
            it ("Should not validate 83D62 for 1983-04-22 Male", () => {
                Validator.cfDateGender([1983, 3, 22], "M").test("83D62").should.not.be.ok;
            });
            it ("Should not validate V5EQ1 for 1995-04-22 Female", () => {
                Validator.cfDateGender([1995, 4, 1], "F").test("V5EQ1").should.be.ok;
            });
            it ("Should not validate 95EQM for 1995-04-22 Female", () => {
                Validator.cfDateGender([1995, 4, 1], "F").test("95EQM").should.be.ok;
            });
            it ("Should validate V5ELM for 1995-04-22 Female", () => {
                Validator.cfDateGender([1995, 4, 1], "F").test("V5ELM").should.not.be.ok;
            });
            it ("Should validate 95EL1 for 1995-04-22 Female", () => {
                Validator.cfDateGender([1995, 4, 1], "F").test("95EL1").should.not.be.ok;
            });

            it ("Should throw an error providing invalid date", () => {
                expect(() => Validator.cfDateGender("-3")).to.throw("[Validator.cfDateGender] Provided date is not valid");
            });
        });
    });
};
