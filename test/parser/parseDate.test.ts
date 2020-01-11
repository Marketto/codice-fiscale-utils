import moment, { Moment } from "moment";
import { Parser } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("parseDate", () => {
        it("ISO8601", () => {
            expect(Parser.parseDate("1977-07-19T12:33:11")).to.be.instanceOf(Date);
            expect(Parser.parseDate("1977-07-19T12:33")).to.be.instanceOf(Date);
            expect(Parser.parseDate("1977-07-19T12")).to.be.instanceOf(Date);
            expect(Parser.parseDate("1977-07-19")).to.be.instanceOf(Date);
            expect(Parser.parseDate("1977-07")).to.be.instanceOf(Date);
            expect(Parser.parseDate("1977")).to.be.instanceOf(Date);
        });
        it("Date", () => {
            expect(Parser.parseDate(new Date())).to.be.instanceOf(Date);
        });
        it("Moment", () => {
            expect(Parser.parseDate(moment())).to.be.instanceOf(Date);
        });
        it("Array of int", () => {
            expect(Parser.parseDate([2011, 9, 22])).to.be.instanceOf(Date);
            expect(Parser.parseDate([2011, 9])).to.be.instanceOf(Date);
            expect(Parser.parseDate([2011])).to.be.instanceOf(Date);
        });
        it("Invalid", () => {
            expect(Parser.parseDate("@åaf")).to.be.null;
            expect(Parser.parseDate("123")).to.be.null;
            expect(Parser.parseDate({} as Date)).to.be.null;
            expect(Parser.parseDate({} as Moment)).to.be.null;
            expect(Parser.parseDate(null)).to.be.null;
            expect(Parser.parseDate([NaN, NaN, NaN])).to.be.null;
            expect(Parser.parseDate([])).to.be.null;
        });
    });
};
