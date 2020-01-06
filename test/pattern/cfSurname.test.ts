import { Pattern } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfSurname", () => {
        describe("Generic Pattern", () => {
            const cfSurnamePattern = Pattern.cfSurname();
            it ("Should validate cf surname KST", () => {
                cfSurnamePattern.test("KST").should.be.ok;
            });
            it ("Should validate cf surname KSE", () => {
                cfSurnamePattern.test("KSE").should.be.ok;
            });
            it ("Should validate cf surname KAO", () => {
                cfSurnamePattern.test("KAO").should.be.ok;
            });
            it ("Should validate cf surname NIX", () => {
                cfSurnamePattern.test("NIX").should.be.ok;
            });
            it ("Should validate cf surname NIK", () => {
                cfSurnamePattern.test("NIK").should.not.be.ok;
            });
            it ("Should validate cf surname UAO", () => {
                cfSurnamePattern.test("UAO").should.be.ok;
            });
            it ("Should validate cf surname UIX", () => {
                cfSurnamePattern.test("UIX").should.be.ok;
            });
            it ("Should validate cf surname UXX", () => {
                cfSurnamePattern.test("UXX").should.not.be.ok;
            });
            it ("Should validate cf surname UIK", () => {
                cfSurnamePattern.test("UIK").should.not.be.ok;
            });
            it ("Should validate cf surname ASQ", () => {
                cfSurnamePattern.test("ASQ").should.not.be.ok;
            });
            it ("Should validate cf surname ASX", () => {
                cfSurnamePattern.test("ASX").should.not.be.ok;
            });
            it ("Should validate cf surname UXI", () => {
                cfSurnamePattern.test("UXI").should.not.be.ok;
            });
            it ("Should validate cf surname UXK", () => {
                cfSurnamePattern.test("UXK").should.not.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate cf surname MRC for Marco", () => {
                Pattern.cfSurname("Marco").test("MRC").should.be.ok;
            });
            it ("Should validate cf surname LXA for Alex", () => {
                Pattern.cfSurname("Alex").test("LXA").should.be.ok;
            });
            it ("Should validate cf surname DLS for D'Annunzio", () => {
                Pattern.cfSurname("D'Annunzio").test("DNN").should.be.ok;
            });
            it ("Should validate cf surname DVN for Da Vinci", () => {
                Pattern.cfSurname("Da Vinci").test("DVN").should.be.ok;
            });
            it ("Should validate cf surname AIE for Aieie", () => {
                Pattern.cfSurname("Aieie").test("AIE").should.be.ok;
            });
            it ("Should validate cf surname AIX for Ai", () => {
                Pattern.cfSurname("Ai").test("AIX").should.be.ok;
            });
            it ("Should validate LUX for cf partial surname", () => {
                Pattern.cfSurname("U").test("LUX").should.be.ok;
            });
            it ("Should throw error for cf surname with special chars", () => {
                expect(() => Pattern.cfSurname("@ieie")).to.throw("Provided surname is not valid, only letters, diacritics and apostrophe allowed");
            });
            it ("Should throw error for cf surname with double apostrophe", () => {
                expect(() => Pattern.cfSurname("D''Aje")).to.throw("Provided surname is not valid, only letters, diacritics and apostrophe allowed");
            });
        });
    });
};
