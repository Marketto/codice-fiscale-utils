import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToBirthDate", () => {
        describe("Uppercase", () => {
            it("Should return a Date (Male)", () => {
                const bdt = Parser.cfToBirthDate("XXXYYY92B20") || new Date();
                expect(bdt.toJSON().substr(0, 10)).to.be.equal("1992-02-20");
                expect(bdt.getDate()).to.be.equal(20);
                expect(bdt.getMonth()).to.be.equal(1);
            });
            it("Should return a Date (Female)", () => {
                const bdt = Parser.cfToBirthDate("XXXYYY81A63") || new Date();
                expect(bdt).to.be.a("Date");
                expect(bdt.toISOString().substr(0, 10)).to.be.equal("1981-01-23");
                expect(bdt.getDate()).to.be.equal(23);
                expect(bdt.getMonth()).to.be.equal(0);
            });
        });
        describe("Lowercase", () => {
            it("Should return a Date (Male)", () => {
                const bdt = Parser.cfToBirthDate("xxxyyy92b20") || new Date();
                expect(bdt).to.be.a("Date");
                expect(bdt.toJSON().substr(0, 10)).to.be.equal("1992-02-20");
                expect(bdt.getDate()).to.be.equal(20);
                expect(bdt.getMonth()).to.be.equal(1);
            });
            it("Should return a Date (Female)", () => {
                const bdt = Parser.cfToBirthDate("xxxyyy81a63") || new Date();
                expect(bdt).to.be.a("Date");
                expect(bdt.toISOString().substr(0, 10)).to.be.equal("1981-01-23");
                expect(bdt.getDate()).to.be.equal(23);
                expect(bdt.getMonth()).to.be.equal(0);
            });
        });
        describe("Invalid", () => {
            it("Should return null", () => {
                expect(Parser.cfToBirthDate("XXXYYY90")).to.be.null;
                expect(Parser.cfToBirthDate("")).to.be.null;
            });
        });
    });
};
