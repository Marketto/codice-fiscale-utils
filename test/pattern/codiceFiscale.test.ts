import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("codiceFiscale", () => {
		describe("Generic Pattern", () => {
			const cfPattern = codiceFiscaleUtils.pattern.codiceFiscale();
			it("Should validate VRNGNY07D68C351V", async () => {
				(await cfPattern).test("VRNGNY07D68C351V").should.be.ok;
			});
			it("Should validate MRNMIA02E45L219X", async () => {
				(await cfPattern).test("MRNMIA02E45L219X").should.be.ok;
			});
		});

		describe("Partial validator", () => {
			it("Should match VRNGNY97A65C351V providing name", async () => {
				(
					await codiceFiscaleUtils.pattern.codiceFiscale({
						firstName: "Genny",
					})
				).test("VRNGNY97A65C351V").should.be.true;
			});
			it("Should match VRNGNY97A65C351V providing lastName, name, gender and place", async () => {
				(
					await codiceFiscaleUtils.pattern.codiceFiscale({
						gender: "F",
						firstName: "Genny",
						place: "Catania",
						lastName: "Veronesi",
					})
				).test("VRNGNY97A65C351V").should.be.true;
			});
			it("Should not match VRNGNY97A35C351V", async () => {
				(
					await codiceFiscaleUtils.pattern.codiceFiscale({
						gender: "F",
						firstName: "Genny",
						place: "Catania",
						lastName: "Veronesi",
					})
				).test("VRNGNY97A35C351V").should.be.false;
			});
			it("Should match KRNZEA02E45L219X", async () => {
				(
					await codiceFiscaleUtils.pattern.codiceFiscale({
						day: 5,
						gender: "F",
						month: 4,
						place: "Torino",
						year: 1902,
					})
				).test("KRNZEA02E45L219X").should.be.true;
			});
			it("Should not match MRNMIA03E45L219X", async () => {
				(
					await codiceFiscaleUtils.pattern.codiceFiscale({
						year: 1902,
						month: 4,
						day: 5,
						gender: "F",
						place: "Torino",
					})
				).test("MRNMIA03E45L219X").should.be.false;
			});
			it("Should match VRNGNY97A65C351V providing partial lastName", async () => {
				(
					await codiceFiscaleUtils.pattern.codiceFiscale({ lastName: "V" })
				).test("VRNGNY97A65C351V").should.be.true;
			});
			it("Should match VRNGNY97A65C351V providing invalid lastName", async () => {
				try {
					const cf = await codiceFiscaleUtils.pattern.codiceFiscale({
						lastName: "V@3",
					});
					throw cf;
				} catch (err: any) {
					expect(err.message).to.equalIgnoreCase(
						"Provided lastName is not valid, only letters, diacritics and apostrophe allowed"
					);
				}
			});
		});

		describe("Specific validator", () => {
			it("Should match VRNGNY07D68C351V", async () => {
				(
					await codiceFiscaleUtils.pattern.codiceFiscale({
						day: 28,
						gender: "F",
						month: 3,
						firstName: "Genny",
						place: "Catania",
						lastName: "Veronesi",
						year: 1907,
					})
				).test("VRNGNY07D68C351V").should.be.true;
			});
			it("Should match MRNMIA02E45L219X", async () => {
				(
					await codiceFiscaleUtils.pattern.codiceFiscale({
						day: 5,
						gender: "F",
						month: 4,
						firstName: "Mia",
						place: "Torino",
						lastName: "Marin",
						year: 1902,
					})
				).test("MRNMIA02E45L219X").should.be.true;
			});
		});
	});
};
