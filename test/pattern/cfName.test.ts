import { Pattern } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfName", () => {
        describe("Generic Pattern", () => {
            const cfNamePattern = Pattern.cfName();
            it ("Should validate cf name KST", () => {
                cfNamePattern.test("KST").should.be.ok;
            });
            it ("Should validate cf name KSE", () => {
                cfNamePattern.test("KSE").should.be.ok;
            });
            it ("Should validate cf name KAO", () => {
                cfNamePattern.test("KAO").should.be.ok;
            });
            it ("Should validate cf name NIX", () => {
                cfNamePattern.test("NIX").should.be.ok;
            });
            it ("Should validate cf name NIK", () => {
                cfNamePattern.test("NIK").should.not.be.ok;
            });
            it ("Should validate cf name UAO", () => {
                cfNamePattern.test("UAO").should.be.ok;
            });
            it ("Should validate cf name UIX", () => {
                cfNamePattern.test("UIX").should.be.ok;
            });
            it ("Should validate cf name UXX", () => {
                cfNamePattern.test("UXX").should.not.be.ok;
            });
            it ("Should validate cf name UIK", () => {
                cfNamePattern.test("UIK").should.not.be.ok;
            });
            it ("Should validate cf name ASQ", () => {
                cfNamePattern.test("ASQ").should.not.be.ok;
            });
            it ("Should validate cf name ASX", () => {
                cfNamePattern.test("ASX").should.not.be.ok;
            });
            it ("Should validate cf name UXI", () => {
                cfNamePattern.test("UXI").should.not.be.ok;
            });
            it ("Should validate cf name UXK", () => {
                cfNamePattern.test("UXK").should.not.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate cf name DNQ for Dominique", () => {
                Pattern.cfName("Dominique").test("DNQ").should.be.ok;
            });
            it ("Should validate cf name GNN for Giovanni", () => {
                Pattern.cfName("Giovanni").test("GNN").should.be.ok;
            });
            it ("Should validate cf name GNN for Gianni", () => {
                Pattern.cfName("Gianni").test("GNN").should.be.ok;
            });
            it ("Should validate cf name GPL for Gian Paolo", () => {
                Pattern.cfName("Gian Paolo").test("GPL").should.be.ok;
            });
            it ("Should not validate cf name GNP for Gian Paolo", () => {
                Pattern.cfName("Gian Paolo").test("GNP").should.be.false;
            });
            it ("Should validate cf name MRK for Mark", () => {
                Pattern.cfName("Mark").test("MRK").should.be.ok;
            });
            it ("Should validate cf name LXA for Alex", () => {
                Pattern.cfName("Alex").test("LXA").should.be.ok;
            });
            it ("Should validate cf name AIE for Aieie", () => {
                Pattern.cfName("Aieie").test("AIE").should.be.ok;
            });
            it ("Should validate cf name AIX for Ai", () => {
                Pattern.cfName("Ai").test("AIX").should.be.ok;
            });
            it ("Should validate cf name UXX for U", () => {
                Pattern.cfName("U").test("UXX").should.not.be.ok;
            });
            it ("Should throw error for cd surname with special chars", () => {
                expect(() => Pattern.cfName("@ieie")).to.throw("Provided name is not valid, only letters, diacritics and apostrophe allowed");
            });
        });
    });
};
