import { Pattern } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("lastName", () => {
        describe("Generic Pattern", () => {
            const lastNamePattern = Pattern.lastName();
            it ("Should validate lastName Kristersen", () => {
                lastNamePattern.test("Kristersen").should.be.ok;
            });
            it ("Should validate lastName De Rossi", () => {
                lastNamePattern.test("De Rossi").should.be.ok;
            });
            it ("Should validate lastName Rossi", () => {
                lastNamePattern.test("Rossi").should.be.ok;
            });
            it ("Should validate lastName D'Ao", () => {
                lastNamePattern.test("D'Ao").should.be.ok;
            });
            it ("Should validate lastName Ao", () => {
                lastNamePattern.test("Ao").should.be.ok;
            });
            it ("Should validate lastName Tést", () => {
                lastNamePattern.test("Tést").should.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate lastName Marco for MRC", () => {
                Pattern.lastName("MRC").test("Marco").should.be.ok;
            });
            it ("Should validate lastName Alex for LXA", () => {
                Pattern.lastName("LXA").test("Alex").should.be.ok;
            });
            it ("Should validate lastName Alex for LEA", () => {
                Pattern.lastName("LEA").test("Lea").should.be.ok;
            });
            it ("Should validate lastName Aieie for AIE", () => {
                Pattern.lastName("AIE").test("Aieie").should.be.ok;
            });
            it ("Should validate lastName Ai for AIX", () => {
                Pattern.lastName("AIX").test("Ai").should.be.ok;
            });
            it ("Should validate lastName U for UXX", () => {
                Pattern.lastName("UXX").test("U").should.be.ok;
            });
            it ("Should validate lastName Vàlidàtòr for VLD", () => {
                Pattern.lastName("VLD").test("Vàlidàtòr").should.be.ok;
            });
            it ("Should validate lastName De Rossi for DRS", () => {
                Pattern.lastName("DRS").test("De Rossi").should.be.ok;
            });
            it ("Should validate lastName D'Areo for DRA", () => {
                Pattern.lastName("DRA").test("D'Areo").should.be.ok;
            });
            it ("Should validate lastName D'Ao for DAO", () => {
                Pattern.lastName("DAO").test("D'Ao").should.be.ok;
            });
            it ("Should validate lastName O'Iu for OIU", () => {
                Pattern.lastName("OIU").test("O'Iu").should.be.ok;
            });
            it ("Should not validate lastName Air for AIX", () => {
                Pattern.lastName("AIX").test("Air").should.be.false;
            });
        });
    });
};
