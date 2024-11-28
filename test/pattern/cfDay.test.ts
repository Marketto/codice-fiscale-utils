import { codiceFiscaleUtils } from "../utils";

export default () => {
	describe("cfDay", () => {
		const cfDayPattern = codiceFiscaleUtils.pattern.cfDay();
		it("Generic", () => {
			cfDayPattern.test("0M").should.be.ok;
			cfDayPattern.test("0m").should.be.ok;
		});
		it("Specific", () => {
			codiceFiscaleUtils.pattern.cfDay(1).test("01").should.be.ok;
			codiceFiscaleUtils.pattern.cfDay(1).test("0M").should.be.ok;
			codiceFiscaleUtils.pattern.cfDay(1).test("q1").should.be.ok;
			codiceFiscaleUtils.pattern.cfDay(1).test("41").should.be.ok;
			codiceFiscaleUtils.pattern.cfDay(9).test("Lm").should.not.be.ok;
			codiceFiscaleUtils.pattern.cfDay(9).test("qM").should.not.be.ok;
		});
	});
};
