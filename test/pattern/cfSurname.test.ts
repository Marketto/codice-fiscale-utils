import { Pattern } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfSurname", () => {
        describe("Generic Pattern", () => {
            const cfSurnamePattern = Pattern.cfSurname();
            it ("Should validate cf lastName KST", () => {
                cfSurnamePattern.test("KST").should.be.ok;
            });
            it ("Should validate cf lastName KSE", () => {
                cfSurnamePattern.test("KSE").should.be.ok;
            });
            it ("Should validate cf lastName KAO", () => {
                cfSurnamePattern.test("KAO").should.be.ok;
            });
            it ("Should validate cf lastName NIX", () => {
                cfSurnamePattern.test("NIX").should.be.ok;
            });
            it ("Should validate cf lastName NIK", () => {
                cfSurnamePattern.test("NIK").should.not.be.ok;
            });
            it ("Should validate cf lastName UAO", () => {
                cfSurnamePattern.test("UAO").should.be.ok;
            });
            it ("Should validate cf lastName UIX", () => {
                cfSurnamePattern.test("UIX").should.be.ok;
            });
            it ("Should validate cf lastName UXX", () => {
                cfSurnamePattern.test("UXX").should.not.be.ok;
            });
            it ("Should validate cf lastName UIK", () => {
                cfSurnamePattern.test("UIK").should.not.be.ok;
            });
            it ("Should validate cf lastName ASQ", () => {
                cfSurnamePattern.test("ASQ").should.not.be.ok;
            });
            it ("Should validate cf lastName ASX", () => {
                cfSurnamePattern.test("ASX").should.not.be.ok;
            });
            it ("Should validate cf lastName UXI", () => {
                cfSurnamePattern.test("UXI").should.not.be.ok;
            });
            it ("Should validate cf lastName UXK", () => {
                cfSurnamePattern.test("UXK").should.not.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate cf lastName MRC for Marco", () => {
                Pattern.cfSurname("Marco").test("MRC").should.be.ok;
            });
            it ("Should validate cf lastName LXA for Alex", () => {
                Pattern.cfSurname("Alex").test("LXA").should.be.ok;
            });
            it ("Should validate cf lastName DLS for D'Annunzio", () => {
                Pattern.cfSurname("D'Annunzio").test("DNN").should.be.ok;
            });
            it ("Should validate cf lastName DVN for Da Vinci", () => {
                Pattern.cfSurname("Da Vinci").test("DVN").should.be.ok;
            });
            it ("Should validate cf lastName AIE for Aieie", () => {
                Pattern.cfSurname("Aieie").test("AIE").should.be.ok;
            });
            it ("Should validate cf lastName AIX for Ai", () => {
                Pattern.cfSurname("Ai").test("AIX").should.be.ok;
            });
            it ("Should validate LUX for cf partial lastName", () => {
                Pattern.cfSurname("U").test("LUX").should.be.ok;
            });
            it ("Should throw error for cf lastName with special chars", () => {
                expect(() => Pattern.cfSurname("@ieie")).to.throw("Provided lastName is not valid, only letters, diacritics and apostrophe allowed");
            });
            it ("Should throw error for cf lastName with double apostrophe", () => {
                expect(() => Pattern.cfSurname("D''Aje")).to.throw("Provided lastName is not valid, only letters, diacritics and apostrophe allowed");
            });
        });
    });
};
