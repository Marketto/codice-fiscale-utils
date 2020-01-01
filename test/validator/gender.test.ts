import { Validator } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("gender", () => {
        describe("Generic Validator", () => {
            const genderValidator = Validator.gender();
            it("Should validate M", () => {
                genderValidator.test("M").should.be.ok;
            });
            it("Should validate F", () => {
                genderValidator.test("F").should.be.ok;
            });

            it("Should not validate X", () => {
                genderValidator.test("X").should.be.false;
            });
            it("Should not validate empty string", () => {
                genderValidator.test("").should.be.false;
            });
        });
        describe("Specific validator", () => {
            it("Should validate M for XYZXYZ92C16", () => {
                Validator.gender("XYZXYZ92C16").test("M").should.be.ok;
            });
            it("Should validate F for XYZXYZ88H61", () => {
                Validator.gender("XYZXYZ88H61").test("F").should.be.ok;
            });

            it("Should not validate F for XYZXYZ12S30", () => {
                Validator.gender("XYZXYZ12S30").test("F").should.be.false;
            });
            it("Should not validate M for XYZXYZ12S70", () => {
                Validator.gender("XYZXYZ12S70").test("M").should.be.false;
            });
            it("Should not validate X for XYZXYZ88H61", () => {
                Validator.gender("XYZXYZ88H61").test("X").should.be.false;
            });
        });
    });
};
