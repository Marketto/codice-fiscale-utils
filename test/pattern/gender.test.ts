import { Pattern } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("gender", () => {
        describe("Generic Pattern", () => {
            const genderPattern = Pattern.gender();
            it("Should validate M", () => {
                genderPattern.test("M").should.be.ok;
            });
            it("Should validate F", () => {
                genderPattern.test("F").should.be.ok;
            });

            it("Should not validate X", () => {
                genderPattern.test("X").should.be.false;
            });
            it("Should not validate empty string", () => {
                genderPattern.test("").should.be.false;
            });
        });
        describe("Specific validator", () => {
            it("Should validate M for XYZXYZ92C16", () => {
                Pattern.gender("XYZXYZ92C16").test("M").should.be.ok;
            });
            it("Should validate F for XYZXYZ88H61", () => {
                Pattern.gender("XYZXYZ88H61").test("F").should.be.ok;
            });

            it("Should not validate F for XYZXYZ12S30", () => {
                Pattern.gender("XYZXYZ12S30").test("F").should.be.false;
            });
            it("Should not validate M for XYZXYZ12S70", () => {
                Pattern.gender("XYZXYZ12S70").test("M").should.be.false;
            });
            it("Should not validate X for XYZXYZ88H61", () => {
                Pattern.gender("XYZXYZ88H61").test("X").should.be.false;
            });
        });
    });
};
