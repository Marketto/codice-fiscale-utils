import { Pattern } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("place", () => {
        describe("Generic Pattern", () => {
            const placePattern = Pattern.place();
            it("Should validate Roma", () => {
                placePattern.test("Roma").should.be.ok;
            });
            it("Should validate Francia", () => {
                placePattern.test("Francia").should.be.ok;
            });
        });
        describe("Specific validator", () => {
            it("Should validate Bari for XYZXYZ92C16A662", () => {
                Pattern.place("XYZXYZ92C16A662").test("Bari").should.be.ok;
            });
            it("Should validate Roma for XYZXYZ88H61H501", () => {
                Pattern.place("XYZXYZ88H61H501").test("Roma").should.be.ok;
            });
            it("Should validate ROMA for XYZXYZ88H61H501", () => {
                Pattern.place("XYZXYZ88H61H501").test("ROMA").should.be.ok;
            });

            it("Should validate Bari for omocode mixed-case XYZXYZ12S30aS6n", () => {
                Pattern.place("XYZXYZ12S30aS6n").test("Bari").should.be.ok;
            });

            it("Should not validate Bologna for XYZXYZ12S30A662", () => {
                Pattern.place("XYZXYZ12S30A662").test("Bologna").should.be.false;
            });
        });
    });
};
