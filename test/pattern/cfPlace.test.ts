import { Pattern } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("cfPlace", () => {
        describe("Generic Pattern", () => {
            const cfDatePattern = Pattern.cfPlace();
            it ("Should validate A662", () => {
                cfDatePattern.test("A662").should.be.ok;
            });
            it ("Should validate H501", () => {
                cfDatePattern.test("H501").should.be.ok;
            });
            it ("Should validate any providing date", () => {
                Pattern.cfPlace("1941-01-16").test("H501").should.be.ok;
            });
        });
        describe("Specific validator", () => {
            it ("Should validate A662 for Bari", () => {
                Pattern.cfPlace("Bari").test("A662").should.be.ok;
            });
            it ("Should validate H501 for Roma", () => {
                Pattern.cfPlace("Roma").test("H501").should.be.ok;
            });
            it ("Should validate D620 for Fiume in 1933", () => {
                Pattern.cfPlace([1933], "Fiume").test("D620").should.be.ok;
            });
            it ("Should not validate H501 for Bari", () => {
                Pattern.cfPlace("Bari").test("H501").should.be.false;
            });
            it ("Should not validate A662 for Roma", () => {
                Pattern.cfPlace("Roma").test("A662").should.be.false;
            });
            it ("Should not validate D620 for Fiume in 2000", () => {
                Pattern.cfPlace([2000], "Fiume").test("D620").should.be.false;
            });
        });
    });
};
