import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("cfLastName", () => {
		describe("Generic Pattern", () => {
			const cfLastNamePattern = codiceFiscaleUtils.pattern.cfLastName();
			it("Should validate cf lastName KST", () => {
				cfLastNamePattern.test("KST").should.be.ok;
			});
			it("Should validate cf lastName KSE", () => {
				cfLastNamePattern.test("KSE").should.be.ok;
			});
			it("Should validate cf lastName KAO", () => {
				cfLastNamePattern.test("KAO").should.be.ok;
			});
			it("Should validate cf lastName NIX", () => {
				cfLastNamePattern.test("NIX").should.be.ok;
			});
			it("Should validate cf lastName NIK", () => {
				cfLastNamePattern.test("NIK").should.not.be.ok;
			});
			it("Should validate cf lastName UAO", () => {
				cfLastNamePattern.test("UAO").should.be.ok;
			});
			it("Should validate cf lastName UIX", () => {
				cfLastNamePattern.test("UIX").should.be.ok;
			});
			it("Should validate cf lastName UXX", () => {
				cfLastNamePattern.test("UXX").should.be.ok;
			});
			it("Should validate cf lastName UIK", () => {
				cfLastNamePattern.test("UIK").should.not.be.ok;
			});
			it("Should validate cf lastName ASQ", () => {
				cfLastNamePattern.test("ASQ").should.not.be.ok;
			});
			it("Should validate cf lastName ASX", () => {
				cfLastNamePattern.test("ASX").should.not.be.ok;
			});
			it("Should validate cf lastName UXI", () => {
				cfLastNamePattern.test("UXI").should.not.be.ok;
			});
			it("Should validate cf lastName UXK", () => {
				cfLastNamePattern.test("UXK").should.not.be.ok;
			});
		});
		describe("Specific validator", () => {
			it("Should validate cf lastName MRC for Marco", () => {
				codiceFiscaleUtils.pattern.cfLastName("Marco").test("MRC").should.be.ok;
			});
			it("Should validate cf lastName LXA for Alex", () => {
				codiceFiscaleUtils.pattern.cfLastName("Alex").test("LXA").should.be.ok;
			});
			it("Should validate cf lastName DLS for D'Annunzio", () => {
				codiceFiscaleUtils.pattern.cfLastName("D'Annunzio").test("DNN").should
					.be.ok;
			});
			it("Should validate cf lastName DVN for Da Vinci", () => {
				codiceFiscaleUtils.pattern.cfLastName("Da Vinci").test("DVN").should.be
					.ok;
			});
			it("Should validate cf lastName AIE for Aieie", () => {
				codiceFiscaleUtils.pattern.cfLastName("Aieie").test("AIE").should.be.ok;
			});
			it("Should validate cf lastName AIX for Ai", () => {
				codiceFiscaleUtils.pattern.cfLastName("Ai").test("AIX").should.be.ok;
			});
			it("Should validate LUX for cf partial lastName", () => {
				codiceFiscaleUtils.pattern.cfLastName("U").test("LUX").should.be.ok;
			});
			it("Should throw error for cf lastName with special chars", () => {
				expect(() => codiceFiscaleUtils.pattern.cfLastName("@ieie")).to.throw(
					"Provided lastName is not valid, only letters, diacritics and apostrophe allowed"
				);
			});
			it("Should throw error for cf lastName with double apostrophe", () => {
				expect(() => codiceFiscaleUtils.pattern.cfLastName("D''Aje")).to.throw(
					"Provided lastName is not valid, only letters, diacritics and apostrophe allowed"
				);
			});
		});
	});
};
