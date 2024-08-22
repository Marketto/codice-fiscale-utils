import { codiceFiscaleUtils } from "../utils";

export default () => {
	describe("place", () => {
		describe("Generic Pattern", () => {
			const placePattern = codiceFiscaleUtils.pattern.place();
			it("Should validate Roma", async () => {
				(await placePattern).test("Roma").should.be.ok;
			});
			it("Should validate Francia", async () => {
				(await placePattern).test("Francia").should.be.ok;
			});
		});
		describe("Specific validator", () => {
			it("Should validate Bari for XYZXYZ92C16A662", async () => {
				(await codiceFiscaleUtils.pattern.place("XYZXYZ92C16A662")).test("Bari")
					.should.be.ok;
			});
			it("Should validate Roma for XYZXYZ88H61H501", async () => {
				(await codiceFiscaleUtils.pattern.place("XYZXYZ88H61H501")).test("Roma")
					.should.be.ok;
			});
			it("Should validate ROMA for XYZXYZ88H61H501", async () => {
				(await codiceFiscaleUtils.pattern.place("XYZXYZ88H61H501")).test("ROMA")
					.should.be.ok;
			});

			it("Should validate Bari for omocode mixed-case XYZXYZ12S30aS6n", async () => {
				(await codiceFiscaleUtils.pattern.place("XYZXYZ12S30aS6n")).test("Bari")
					.should.be.ok;
			});

			it("Should not validate Bologna for XYZXYZ12S30A662", async () => {
				(await codiceFiscaleUtils.pattern.place("XYZXYZ12S30A662")).test(
					"Bologna"
				).should.be.false;
			});
		});
	});
};
