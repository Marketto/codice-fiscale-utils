import { codiceFiscaleUtils } from "../utils";

export default () => {
	describe("lastName", () => {
		describe("Generic Pattern", () => {
			const lastNamePattern = codiceFiscaleUtils.pattern.lastName();
			it("Should validate lastName Kristersen", () => {
				lastNamePattern.test("Kristersen").should.be.ok;
			});
			it("Should validate lastName De Rossi", () => {
				lastNamePattern.test("De Rossi").should.be.ok;
			});
			it("Should validate lastName Rossi", () => {
				lastNamePattern.test("Rossi").should.be.ok;
			});
			it("Should validate lastName D'Ao", () => {
				lastNamePattern.test("D'Ao").should.be.ok;
			});
			it("Should validate lastName Ao", () => {
				lastNamePattern.test("Ao").should.be.ok;
			});
			it("Should validate lastName Tést", () => {
				lastNamePattern.test("Tést").should.be.ok;
			});
		});
		describe("Specific validator", () => {
			it("Should validate lastName Marco for MRC", () => {
				codiceFiscaleUtils.pattern.lastName("MRC").test("Marco").should.be.ok;
			});
			it("Should validate lastName Alex for LXA", () => {
				codiceFiscaleUtils.pattern.lastName("LXA").test("Alex").should.be.ok;
			});
			it("Should validate lastName Alex for LEA", () => {
				codiceFiscaleUtils.pattern.lastName("LEA").test("Lea").should.be.ok;
			});
			it("Should validate lastName Aieie for AIE", () => {
				codiceFiscaleUtils.pattern.lastName("AIE").test("Aieie").should.be.ok;
			});
			it("Should validate lastName Ai for AIX", () => {
				codiceFiscaleUtils.pattern.lastName("AIX").test("Ai").should.be.ok;
			});
			it("Should validate lastName U for UXX", () => {
				codiceFiscaleUtils.pattern.lastName("UXX").test("U").should.be.ok;
			});
			it("Should validate lastName Vàlidàtòr for VLD", () => {
				codiceFiscaleUtils.pattern.lastName("VLD").test("Vàlidàtòr").should.be
					.ok;
			});
			it("Should validate lastName De Rossi for DRS", () => {
				codiceFiscaleUtils.pattern.lastName("DRS").test("De Rossi").should.be
					.ok;
			});
			it("Should validate lastName D'Areo for DRA", () => {
				codiceFiscaleUtils.pattern.lastName("DRA").test("D'Areo").should.be.ok;
			});
			it("Should validate lastName D'Ao for DAO", () => {
				codiceFiscaleUtils.pattern.lastName("DAO").test("D'Ao").should.be.ok;
			});
			it("Should validate lastName O'Iu for OIU", () => {
				codiceFiscaleUtils.pattern.lastName("OIU").test("O'Iu").should.be.ok;
			});
			it("Should not validate lastName Air for AIX", () => {
				codiceFiscaleUtils.pattern.lastName("AIX").test("Air").should.be.false;
			});
		});
	});
};
