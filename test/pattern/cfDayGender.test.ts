import { codiceFiscaleUtils } from "../utils";

export default () => {
	describe("cfDayGender", () => {
		const cfDayPattern = codiceFiscaleUtils.pattern.cfDayGender();
		it("Generic Pattern", () => {
			cfDayPattern.test("0M").should.be.ok;
			cfDayPattern.test("MN").should.be.ok;
			cfDayPattern.test("0m").should.be.ok;
		});

		describe("Specific Gender validator", () => {
			it("Male", () => {
				codiceFiscaleUtils.pattern.cfDayGender(undefined, "M").test("41").should
					.be.false;
				codiceFiscaleUtils.pattern.cfDayGender(undefined, "M").test("MR").should
					.true;
			});

			it("Female", () => {
				codiceFiscaleUtils.pattern.cfDayGender(undefined, "F").test("MR").should
					.be.false;
				codiceFiscaleUtils.pattern.cfDayGender(undefined, "F").test("QM").should
					.true;
			});
		});

		describe("Specific Date/Gender validator", () => {
			it("Male", () => {
				codiceFiscaleUtils.pattern.cfDayGender(1, "M").test("01").should.be.ok;
				codiceFiscaleUtils.pattern.cfDayGender(1, "M").test("41").should.be.not
					.ok;
			});
			it("Female", () => {
				codiceFiscaleUtils.pattern.cfDayGender(9, "F").test("QM").should.not.be
					.ok;
				codiceFiscaleUtils.pattern.cfDayGender(9, "F").test("RM").should.not.be
					.ok;
			});
		});
	});
};
