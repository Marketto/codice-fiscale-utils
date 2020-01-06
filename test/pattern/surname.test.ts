import { Pattern } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("surname", () => {
        describe("Generic Pattern", () => {
            const surnamePattern = Pattern.surname();
            it ("Should validate surname Kristersen", () => {
                surnamePattern.test("Kristersen").should.be.ok;
            });
            it ("Should validate surname De Rossi", () => {
                surnamePattern.test("De Rossi").should.be.ok;
            });
            it ("Should validate surname Rossi", () => {
                surnamePattern.test("Rossi").should.be.ok;
            });
            it ("Should validate surname D'Ao", () => {
                surnamePattern.test("D'Ao").should.be.ok;
            });
            it ("Should validate surname Ao", () => {
                surnamePattern.test("Ao").should.be.ok;
            });
            it ("Should validate surname Tést", () => {
                surnamePattern.test("Tést").should.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate surname Marco for MRC", () => {
                Pattern.surname("MRC").test("Marco").should.be.ok;
            });
            it ("Should validate surname Alex for LXA", () => {
                Pattern.surname("LXA").test("Alex").should.be.ok;
            });
            it ("Should validate surname Alex for LEA", () => {
                Pattern.surname("LEA").test("Lea").should.be.ok;
            });
            it ("Should validate surname Aieie for AIE", () => {
                Pattern.surname("AIE").test("Aieie").should.be.ok;
            });
            it ("Should validate surname Ai for AIX", () => {
                Pattern.surname("AIX").test("Ai").should.be.ok;
            });
            it ("Should validate surname U for UXX", () => {
                Pattern.surname("UXX").test("U").should.be.ok;
            });
            it ("Should validate surname Vàlidàtòr for VLD", () => {
                Pattern.surname("VLD").test("Vàlidàtòr").should.be.ok;
            });
            it ("Should validate surname De Rossi for DRS", () => {
                Pattern.surname("DRS").test("De Rossi").should.be.ok;
            });
            it ("Should validate surname D'Areo for DRA", () => {
                Pattern.surname("DRA").test("D'Areo").should.be.ok;
            });
            it ("Should validate surname D'Ao for DAO", () => {
                Pattern.surname("DAO").test("D'Ao").should.be.ok;
            });
            it ("Should validate surname O'Iu for OIU", () => {
                Pattern.surname("OIU").test("O'Iu").should.be.ok;
            });
            it ("Should not validate surname Air for AIX", () => {
                Pattern.surname("AIX").test("Air").should.be.false;
            });
        });
    });
};
