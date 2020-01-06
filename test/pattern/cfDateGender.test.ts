import { Pattern } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfDateGender", () => {
        describe("Generic Pattern", () => {
            const cfDatePattern = Pattern.cfDateGender();
            it ("Should validate 83D22", () => {
                cfDatePattern.test("83D22").should.be.ok;
            });
            it ("Should validate U3D2N", () => {
                cfDatePattern.test("U3D2N").should.be.ok;
            });
        });

        describe("Gender validator", () => {
            it ("Should validate cf gender U3D41 for M", () => {
                Pattern.cfDateGender(null, "M").test("U3D41").should.be.false;
            });

            it ("Should validate cf gender 83DMR for F", () => {
                Pattern.cfDateGender(null, "F").test("83DMR").should.be.false;
            });
            it ("Should not validate cf gender V5EQM for F", () => {
                Pattern.cfDateGender(null, "F").test("V5EQM").should.true;
            });

            it ("Should not validate cf gender 83DMR for M", () => {
                Pattern.cfDateGender(null, "M").test("83DMR").should.true;
            });
            /*
            it ("Should throw an error for K as gender", () => {
                expect(() => Pattern.cfDateGender(null, "K")).to.throw();
            });
            */
        });

        describe("Specific validator", () => {
            it ("Should validate U3D2N for 1983-04-22 Male", () => {
                Pattern.cfDateGender([1983, 3, 22], "M").test("U3D2N").should.be.ok;
            });
            it ("Should validate 83D22 for 1983-04-22 Male", () => {
                Pattern.cfDateGender([1983, 3, 22], "M").test("83D22").should.be.ok;
            });
            it ("Should not validate U3D2N for 1983-04-22 Male", () => {
                Pattern.cfDateGender([1983, 3, 22], "M").test("U3DSN").should.not.be.ok;
            });
            it ("Should not validate 83D62 for 1983-04-22 Male", () => {
                Pattern.cfDateGender([1983, 3, 22], "M").test("83D62").should.not.be.ok;
            });
            it ("Should not validate V5EQ1 for 1995-04-22 Female", () => {
                Pattern.cfDateGender([1995, 4, 1], "F").test("V5EQ1").should.be.ok;
            });
            it ("Should not validate 95EQM for 1995-04-22 Female", () => {
                Pattern.cfDateGender([1995, 4, 1], "F").test("95EQM").should.be.ok;
            });
            it ("Should validate V5ELM for 1995-04-22 Female", () => {
                Pattern.cfDateGender([1995, 4, 1], "F").test("V5ELM").should.not.be.ok;
            });
            it ("Should validate 95EL1 for 1995-04-22 Female", () => {
                Pattern.cfDateGender([1995, 4, 1], "F").test("95EL1").should.not.be.ok;
            });

            it ("Should throw an error providing invalid date", () => {
                expect(() => Pattern.cfDateGender("-3")).to.throw("Provided date is not valid");
            });
        });
    });
};
