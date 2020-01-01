import { Validator } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("name", () => {
        describe("Generic Validator", () => {
            const nameValidator = Validator.firstname();
            it ("Should validate name Kristersen", () => {
                nameValidator.test("Kristersen").should.be.ok;
            });
            it ("Should validate name Rossi", () => {
                nameValidator.test("Rossi").should.be.ok;
            });
            it ("Should validate name Ao", () => {
                nameValidator.test("Ao").should.be.ok;
            });
            it ("Should validate name Tést", () => {
                nameValidator.test("Tést").should.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate name Marco for XYZMRC", () => {
                Validator.firstname("XYZMRC").test("Marco").should.be.ok;
            });
            it ("Should validate name Alex for XYZLXA", () => {
                Validator.firstname("XYZLXA").test("Alex").should.be.ok;
            });
            it ("Should validate name Aieie for XYZAIE", () => {
                Validator.firstname("XYZAIE").test("Aieie").should.be.ok;
            });
            it ("Should validate name Ai for XYZAIX", () => {
                Validator.firstname("XYZAIX").test("Ai").should.be.ok;
            });
            it ("Should validate name U for XYZUXX", () => {
                Validator.firstname("XYZUXX").test("U").should.be.ok;
            });
            it ("Should validate name Vàlidàtòr for XYZVLD", () => {
                Validator.firstname("XYZVDT").test("Vàlidàtòr").should.be.ok;
            });
            it ("Should not validate name Air for XYZAIX", () => {
                Validator.firstname("XYZAIX").test("Air").should.be.false;
            });
        });
    });
};
