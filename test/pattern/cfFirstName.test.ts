import { Pattern } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfFirstName", () => {
        describe("Generic Pattern", () => {
            const cfFirstNamePattern = Pattern.cfFirstName();
            it ("Should validate cf name KST", () => {
                cfFirstNamePattern.test("KST").should.be.ok;
            });
            it ("Should validate cf name KSE", () => {
                cfFirstNamePattern.test("KSE").should.be.ok;
            });
            it ("Should validate cf name KAO", () => {
                cfFirstNamePattern.test("KAO").should.be.ok;
            });
            it ("Should validate cf name NIX", () => {
                cfFirstNamePattern.test("NIX").should.be.ok;
            });
            it ("Should validate cf name NIK", () => {
                cfFirstNamePattern.test("NIK").should.not.be.ok;
            });
            it ("Should validate cf name UAO", () => {
                cfFirstNamePattern.test("UAO").should.be.ok;
            });
            it ("Should validate cf name UIX", () => {
                cfFirstNamePattern.test("UIX").should.be.ok;
            });
            it ("Should validate cf name UXX", () => {
                cfFirstNamePattern.test("UXX").should.not.be.ok;
            });
            it ("Should validate cf name UIK", () => {
                cfFirstNamePattern.test("UIK").should.not.be.ok;
            });
            it ("Should validate cf name ASQ", () => {
                cfFirstNamePattern.test("ASQ").should.not.be.ok;
            });
            it ("Should validate cf name ASX", () => {
                cfFirstNamePattern.test("ASX").should.not.be.ok;
            });
            it ("Should validate cf name UXI", () => {
                cfFirstNamePattern.test("UXI").should.not.be.ok;
            });
            it ("Should validate cf name UXK", () => {
                cfFirstNamePattern.test("UXK").should.not.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate cf name DNQ for Dominique", () => {
                Pattern.cfFirstName("Dominique").test("DNQ").should.be.ok;
            });
            it ("Should validate cf name GNN for Giovanni", () => {
                Pattern.cfFirstName("Giovanni").test("GNN").should.be.ok;
            });
            it ("Should validate cf name GNN for Gianni", () => {
                Pattern.cfFirstName("Gianni").test("GNN").should.be.ok;
            });
            it ("Should validate cf name GPL for Gian Paolo", () => {
                Pattern.cfFirstName("Gian Paolo").test("GPL").should.be.ok;
            });
            it ("Should not validate cf name GNP for Gian Paolo", () => {
                Pattern.cfFirstName("Gian Paolo").test("GNP").should.be.false;
            });
            it ("Should validate cf name MRK for Mark", () => {
                Pattern.cfFirstName("Mark").test("MRK").should.be.ok;
            });
            it ("Should validate cf name LXA for Alex", () => {
                Pattern.cfFirstName("Alex").test("LXA").should.be.ok;
            });
            it ("Should validate cf name AIE for Aieie", () => {
                Pattern.cfFirstName("Aieie").test("AIE").should.be.ok;
            });
            it ("Should validate cf name AIX for Ai", () => {
                Pattern.cfFirstName("Ai").test("AIX").should.be.ok;
            });
            it ("Should validate cf name UXX for U", () => {
                Pattern.cfFirstName("U").test("UXX").should.not.be.ok;
            });
            it ("Should throw error for cd lastName with special chars", () => {
                expect(() => Pattern.cfFirstName("@ieie")).to.throw("Provided name is not valid, only letters, diacritics and apostrophe allowed");
            });
        });
    });
};
