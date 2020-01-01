import { Validator } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("surname", () => {
        describe("Generic Validator", () => {
            const surnameValidator = Validator.surname();
            it ("Should validate surname Kristersen", () => {
                surnameValidator.test("Kristersen").should.be.ok;
            });
            it ("Should validate surname De Rossi", () => {
                surnameValidator.test("De Rossi").should.be.ok;
            });
            it ("Should validate surname Rossi", () => {
                surnameValidator.test("Rossi").should.be.ok;
            });
            it ("Should validate surname D'Ao", () => {
                surnameValidator.test("D'Ao").should.be.ok;
            });
            it ("Should validate surname Ao", () => {
                surnameValidator.test("Ao").should.be.ok;
            });
            it ("Should validate surname Tést", () => {
                surnameValidator.test("Tést").should.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate surname Marco for MRC", () => {
                Validator.surname("MRC").test("Marco").should.be.ok;
            });
            it ("Should validate surname Alex for LXA", () => {
                Validator.surname("LXA").test("Alex").should.be.ok;
            });
            it ("Should validate surname Alex for LEA", () => {
                Validator.surname("LEA").test("Lea").should.be.ok;
            });
            it ("Should validate surname Aieie for AIE", () => {
                Validator.surname("AIE").test("Aieie").should.be.ok;
            });
            it ("Should validate surname Ai for AIX", () => {
                Validator.surname("AIX").test("Ai").should.be.ok;
            });
            it ("Should validate surname U for UXX", () => {
                Validator.surname("UXX").test("U").should.be.ok;
            });
            it ("Should validate surname Vàlidàtòr for VLD", () => {
                Validator.surname("VLD").test("Vàlidàtòr").should.be.ok;
            });
            it ("Should validate surname De Rossi for DRS", () => {
                Validator.surname("DRS").test("De Rossi").should.be.ok;
            });
            it ("Should validate surname D'Areo for DRA", () => {
                Validator.surname("DRA").test("D'Areo").should.be.ok;
            });
            it ("Should validate surname D'Ao for DAO", () => {
                Validator.surname("DAO").test("D'Ao").should.be.ok;
            });
            it ("Should validate surname O'Iu for OIU", () => {
                Validator.surname("OIU").test("O'Iu").should.be.ok;
            });
            it ("Should not validate surname Air for AIX", () => {
                Validator.surname("AIX").test("Air").should.be.false;
            });
        });
    });
};
