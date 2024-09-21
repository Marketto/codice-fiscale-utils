import dayjs from "dayjs";
import { DateUtils } from "../../src/";
import { expect } from "../utils";

export default () => {
	describe("parseDate", () => {
		it("ISO8601", () => {
			expect(DateUtils.parseDate("1977-07-19T12:33:11")).to.be.instanceOf(Date);
			expect(DateUtils.parseDate("1977-07-19T12:33")).to.be.instanceOf(Date);
			expect(DateUtils.parseDate("1977-07-19T12")).to.be.instanceOf(Date);
			expect(DateUtils.parseDate("1977-07-19")).to.be.instanceOf(Date);
			expect(DateUtils.parseDate("1977-07")).to.be.instanceOf(Date);
			expect(DateUtils.parseDate("1977")).to.be.instanceOf(Date);
		});
		it("Date", () => {
			expect(DateUtils.parseDate(new Date())).to.be.instanceOf(Date);
		});
		it("Array of int", () => {
			expect(DateUtils.parseDate([2011, 9, 22])).to.be.instanceOf(Date);
			expect(DateUtils.parseDate([2011, 9])).to.be.instanceOf(Date);
			expect(DateUtils.parseDate([2011])).to.be.instanceOf(Date);
		});
		it("Invalid", () => {
			expect(DateUtils.parseDate("@åaf")).to.be.null;
			expect(DateUtils.parseDate("123")).to.be.null;
			expect(DateUtils.parseDate({} as Date)).to.be.null;
			expect(DateUtils.parseDate(null)).to.be.null;
			expect(DateUtils.parseDate([NaN, NaN, NaN])).to.be.null;
			expect(DateUtils.parseDate([])).to.be.null;
		});
	});
};
