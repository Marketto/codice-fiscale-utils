import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfDecode", () => {
        describe("Lowercase", () => {
            it("Should return matching infos from VRNGNY07D68C351V", () => {
                const decoded = Parser.cfDecode("VRNGNY07D68C351V");
                expect(decoded).to.be.a("object");
                expect(decoded.lastName).to.be.equal("V*R*N*");
                expect(decoded.firstName).to.be.equal("G*N*Y*");
                expect(decoded.year).to.be.equal(2007);
                expect(decoded.month).to.be.equal(3);
                expect(decoded.day).to.be.equal(28);
                expect(decoded.gender).to.be.equal("F");
                expect(decoded.place).to.be.equalIgnoreCase("CATANIA");
            });
            it("Should return matching infos from MRNMIA02E45L219X", () => {
                const decoded = Parser.cfDecode("MRNMIA02E45L219X");
                expect(decoded).to.be.a("object");
                expect(decoded.lastName).to.be.equal("M*R*N*");
                expect(decoded.firstName).to.be.equal("MIA*");
                expect(decoded.year).to.be.equal(2002);
                expect(decoded.month).to.be.equal(4);
                expect(decoded.day).to.be.equal(5);
                expect(decoded.gender).to.be.equal("F");
                expect(decoded.place).to.be.equalIgnoreCase("TORINO");
            });
        });
        describe("Lowercase", () => {
            it("Should return matching infos from vrngny07d68c351v", () => {
                const decoded = Parser.cfDecode("vrngny07d68c351v");
                expect(decoded).to.be.a("object");
                expect(decoded.lastName).to.be.equal("v*r*n*");
                expect(decoded.firstName).to.be.equal("g*n*y*");
                expect(decoded.year).to.be.equal(2007);
                expect(decoded.month).to.be.equal(3);
                expect(decoded.day).to.be.equal(28);
                expect(decoded.gender).to.be.equal("F");
                expect(decoded.place).to.be.equalIgnoreCase("CATANIA");
            });
            it("Should return matching infos from mrnmia02e45l219x", () => {
                const decoded = Parser.cfDecode("mrnmia02e45l219x");
                expect(decoded).to.be.a("object");
                expect(decoded.lastName).to.be.equal("m*r*n*");
                expect(decoded.firstName).to.be.equal("mia*");
                expect(decoded.year).to.be.equal(2002);
                expect(decoded.month).to.be.equal(4);
                expect(decoded.day).to.be.equal(5);
                expect(decoded.gender).to.be.equal("F");
                expect(decoded.place).to.be.equalIgnoreCase("TORINO");
            });
        });
    });
};
