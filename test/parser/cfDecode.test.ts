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
            expect(decoded.omocode).to.be.equal(0);
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
            expect(decoded.omocode).to.be.equal(0);
        });
        it("Omocode VRNGNYLtdsucprmt", () => {
            const decoded = Parser.cfDecode("VRNGNYLtdsucprmt");
            expect(decoded).to.be.a("object");
            expect(decoded.lastName).to.be.equal("V*R*N*");
            expect(decoded.firstName).to.be.equal("G*N*Y*");
            expect(decoded.year).to.be.equal(2007);
            expect(decoded.month).to.be.equal(3);
            expect(decoded.day).to.be.equal(28);
            expect(decoded.gender).to.be.equal("F");
            expect(decoded.place).to.be.equalIgnoreCase("CATANIA");
            expect(decoded.omocode).to.be.equal(127);
        });
    });
};
