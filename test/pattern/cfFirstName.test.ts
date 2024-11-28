import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("cfFirstName", () => {
		it("Generic Pattern", () => {
			const cfFirstNamePattern = codiceFiscaleUtils.pattern.cfFirstName();
			cfFirstNamePattern.test("UIK").should.not.be.ok;
			cfFirstNamePattern.test("UXX").should.be.ok;
			cfFirstNamePattern.test("XXX").should.be.ok;
			cfFirstNamePattern.test("UIX").should.be.ok;
			cfFirstNamePattern.test("ASQ").should.not.be.ok;
			cfFirstNamePattern.test("UAO").should.be.ok;
			cfFirstNamePattern.test("NIK").should.not.be.ok;
			cfFirstNamePattern.test("ASX").should.not.be.ok;
			cfFirstNamePattern.test("NIX").should.be.ok;
			cfFirstNamePattern.test("KAO").should.be.ok;
			cfFirstNamePattern.test("UXI").should.not.be.ok;
			cfFirstNamePattern.test("KSE").should.be.ok;
			cfFirstNamePattern.test("KST").should.be.ok;
			cfFirstNamePattern.test("UXK").should.not.be.ok;
		});
		describe("Specific validator", () => {
			it("Should validate cf name DNQ for Dominique", () => {
				codiceFiscaleUtils.pattern.cfFirstName("Dominique").test("DNQ").should
					.be.ok;
			});
			it("Should validate cf name GNN for Giovanni", () => {
				codiceFiscaleUtils.pattern.cfFirstName("Giovanni").test("GNN").should.be
					.ok;
			});
			it("Should validate cf name GNN for Gianni", () => {
				codiceFiscaleUtils.pattern.cfFirstName("Gianni").test("GNN").should.be
					.ok;
			});
			it("Should validate cf name GPL for Gian Paolo", () => {
				codiceFiscaleUtils.pattern.cfFirstName("Gian Paolo").test("GPL").should
					.be.ok;
			});
			it("Should not validate cf name GNP for Gian Paolo", () => {
				codiceFiscaleUtils.pattern.cfFirstName("Gian Paolo").test("GNP").should
					.be.false;
			});
			it("Should validate cf name MRK for Mark", () => {
				codiceFiscaleUtils.pattern.cfFirstName("Mark").test("MRK").should.be.ok;
			});
			it("Should validate cf name LXA for Alex", () => {
				codiceFiscaleUtils.pattern.cfFirstName("Alex").test("LXA").should.be.ok;
			});
			it("Should validate cf name AIE for Aieie", () => {
				codiceFiscaleUtils.pattern.cfFirstName("Aieie").test("AIE").should.be
					.ok;
			});
			it("Should validate cf name AIX for Ai", () => {
				codiceFiscaleUtils.pattern.cfFirstName("Ai").test("AIX").should.be.ok;
			});
			it("Should validate cf name UXX for U", () => {
				codiceFiscaleUtils.pattern.cfFirstName("U").test("UXX").should.be.ok;
			});
			it("Should throw error for cd lastName with special chars", () => {
				expect(() => codiceFiscaleUtils.pattern.cfFirstName("@ieie")).to.throw(
					"Provided name is not valid, only letters, diacritics and apostrophe allowed"
				);
			});
		});
	});
};
