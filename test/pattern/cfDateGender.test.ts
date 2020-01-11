import { Pattern } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("cfDateGender", () => {
        describe("Generic Pattern", () => {
            const cfDatePattern = Pattern.cfDateGender();
            it ("Should validate 83D22", () => {
                cfDatePattern.test("83D22").should.be.ok;
            });
            it ("Should validate u3d2n", () => {
                cfDatePattern.test("u3d2n").should.be.ok;
            });
        });

        describe("Gender validator", () => {
            it ("Omocode uppercase", () => {
                Pattern.cfDateGender(null, "M").test("U3D41").should.be.false;
                Pattern.cfDateGender(null, "F").test("83dmr").should.be.false;
            });

            it ("Omocode lowercase", () => {
                Pattern.cfDateGender(null, "M").test("83DMR").should.true;
                Pattern.cfDateGender(null, "F").test("v5eqm").should.true;
            });
        });

        it("Date validator", () => {
            const testDate = "1988-04-22";
            Pattern.cfDateGender(testDate).test("U8D22").should.be.true;
            Pattern.cfDateGender(testDate).test("U8D62").should.be.true;
            Pattern.cfDateGender(testDate).test("U9D62").should.be.false;
        });

        describe("Specific validator", () => {
            it ("Male", () => {
                const testArrayDate = [1983, 3, 22];
                Pattern.cfDateGender(testArrayDate, "M").test("U3D2n").should.be.ok;
                Pattern.cfDateGender(testArrayDate, "M").test("83d22").should.be.ok;
                Pattern.cfDateGender(testArrayDate, "M").test("83D62").should.not.be.ok;
                Pattern.cfDateGender(testArrayDate, "M").test("u3dSN").should.not.be.ok;
            });

            it ("Female", () => {
                const testArrayDate = [1995, 4, 1];
                Pattern.cfDateGender(testArrayDate, "F").test("v5EQ1").should.be.ok;
                Pattern.cfDateGender(testArrayDate, "F").test("95eqm").should.be.ok;
                Pattern.cfDateGender(testArrayDate, "F").test("V5eLM").should.not.be.ok;
                Pattern.cfDateGender(testArrayDate, "F").test("95El1").should.not.be.ok;
            });

            it ("Should throw an error providing invalid date", () => {
                expect(() => Pattern.cfDateGender("-3")).to.throw("Provided date is not valid");
            });
        });
    });
};
