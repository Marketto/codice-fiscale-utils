import { codiceFiscaleUtils } from "../utils";

export default () => {
	describe("cfPlace", () => {
		describe("Generic Pattern", () => {
			const cfDatePattern = codiceFiscaleUtils.pattern.cfPlace();
			it("Should validate A662", async () => {
				(await cfDatePattern).test("A662").should.be.ok;
			});
			it("Should validate H501", async () => {
				(await cfDatePattern).test("H501").should.be.ok;
			});
			it("Should validate any providing date", async () => {
				(await codiceFiscaleUtils.pattern.cfPlace("1941-01-16")).test("H501")
					.should.be.ok;
			});
		});
		describe("Specific validator", () => {
			it("Should validate A662 for Bari", async () => {
				(await codiceFiscaleUtils.pattern.cfPlace("Bari")).test("A662").should
					.be.ok;
			});
			it("Should validate H501 for Roma", async () => {
				(await codiceFiscaleUtils.pattern.cfPlace("Roma")).test("H501").should
					.be.ok;
			});
			it("Should validate D620 for Fiume in 1933", async () => {
				(await codiceFiscaleUtils.pattern.cfPlace([1933], "Fiume")).test("D620")
					.should.be.ok;
			});
			it("Should not validate H501 for Bari", async () => {
				(await codiceFiscaleUtils.pattern.cfPlace("Bari")).test("H501").should
					.be.false;
			});
			it("Should not validate A662 for Roma", async () => {
				(await codiceFiscaleUtils.pattern.cfPlace("Roma")).test("A662").should
					.be.false;
			});
			it("Should not validate D620 for Fiume in 2000", async () => {
				(await codiceFiscaleUtils.pattern.cfPlace([2000], "Fiume")).test("D620")
					.should.be.false;
			});
		});
	});
};
