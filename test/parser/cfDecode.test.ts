import { Parser } from "../../src/";
import { expect } from "../utils";

export default () => {
	describe("cfDecode", () => {
		it("Uppercase VRNGNY07D68C351V", () => {
			const decoded = Parser.cfDecode("VRNGNY07D68C351V");
			expect(decoded).to.be.a("object");
			expect(decoded.lastName).to.be.equal("V*R*N*");
			expect(decoded.firstName).to.be.equal("G*N*Y*");
			expect(decoded.year).to.be.equal(2007);
			expect(decoded.month).to.be.equal(3);
			expect(decoded.day).to.be.equal(28);
			expect(decoded.gender).to.be.equal("F");
			expect(decoded.place).to.be.equalIgnoreCase("CATANIA");
			expect(decoded.omocodeId).to.be.equal(0);
		});
		it("Parse January as 0", () => {
			const decoded = Parser.cfDecode("CSZVPM74A59L857A");
			expect(decoded).to.be.a("object");
			expect(decoded.month).to.be.equal(0);
		});
		it("Lowercase mrnmia02e45l219x", () => {
			const decoded = Parser.cfDecode("mrnmia02e45l219x");
			expect(decoded).to.be.a("object");
			expect(decoded.lastName).to.be.equal("m*r*n*");
			expect(decoded.firstName).to.be.equal("mia*");
			expect(decoded.year).to.be.equal(2002);
			expect(decoded.month).to.be.equal(4);
			expect(decoded.day).to.be.equal(5);
			expect(decoded.gender).to.be.equal("F");
			expect(decoded.place).to.be.equalIgnoreCase("TORINO");
			expect(decoded.omocodeId).to.be.equal(0);
		});
		it("Id VRNGNYLtdsucprmt", () => {
			const decoded = Parser.cfDecode("VRNGNYLtdsucprmt");
			expect(decoded).to.be.a("object");
			expect(decoded.lastName).to.be.equal("V*R*N*");
			expect(decoded.firstName).to.be.equal("G*N*Y*");
			expect(decoded.year).to.be.equal(2007);
			expect(decoded.month).to.be.equal(3);
			expect(decoded.day).to.be.equal(28);
			expect(decoded.gender).to.be.equal("F");
			expect(decoded.place).to.be.equalIgnoreCase("CATANIA");
			expect(decoded.omocodeId).to.be.equal(127);
		});
		it("Partial", () => {
			const decoded = Parser.cfDecode("VRNGNY@@@@@cprm");
			expect(decoded).to.be.a("object");
			expect(decoded.lastName).to.be.equal("V*R*N*");
			expect(decoded.firstName).to.be.equal("G*N*Y*");
			expect(decoded.year).to.be.undefined;
			expect(decoded.month).to.be.undefined;
			expect(decoded.day).to.be.undefined;
			expect(decoded.gender).to.be.undefined;
			expect(decoded.place).to.be.equalIgnoreCase("CATANIA");
			expect(decoded.omocodeId).to.be.equal(7);
		});
	});
};
