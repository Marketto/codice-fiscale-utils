import { codiceFiscaleUtils } from "../utils";

export default () => {
	describe("gender", () => {
		describe("Generic Pattern", () => {
			const genderPattern = codiceFiscaleUtils.pattern.gender();
			it("Should validate M", () => {
				genderPattern.test("M").should.be.ok;
			});
			it("Should validate F", () => {
				genderPattern.test("F").should.be.ok;
			});

			it("Should not validate X", () => {
				genderPattern.test("X").should.be.false;
			});
			it("Should not validate empty string", () => {
				genderPattern.test("").should.be.false;
			});
		});
		describe("Specific validator", () => {
			it("Should validate M for XYZXYZ92C16", () => {
				codiceFiscaleUtils.pattern.gender("XYZXYZ92C16").test("M").should.be.ok;
			});
			it("Should validate F for XYZXYZ88H61", () => {
				codiceFiscaleUtils.pattern.gender("XYZXYZ88H61").test("F").should.be.ok;
			});

			it("Should not validate F for XYZXYZ12S30", () => {
				codiceFiscaleUtils.pattern.gender("XYZXYZ12S30").test("F").should.be
					.false;
			});
			it("Should not validate M for XYZXYZ12S70", () => {
				codiceFiscaleUtils.pattern.gender("XYZXYZ12S70").test("M").should.be
					.false;
			});
			it("Should not validate X for XYZXYZ88H61", () => {
				codiceFiscaleUtils.pattern.gender("XYZXYZ88H61").test("X").should.be
					.false;
			});
		});
	});
};
