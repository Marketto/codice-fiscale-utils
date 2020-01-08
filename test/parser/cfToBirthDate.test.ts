import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("cfToBirthDate", () => {
        it("Uppercase Male", () => {
            const bdt = Parser.cfToBirthDate("XXXYYY92B20");
            expect(bdt).to.be.a("Date");
            if (bdt) {
                expect(bdt.toJSON().substr(0, 10)).to.be.equal("1992-02-20");
                expect(bdt.getMonth()).to.be.equal(1);
                expect(bdt.getDate()).to.be.equal(20);
            }
        });

        it("Lowercase Female", () => {
            const bdt = Parser.cfToBirthDate("xxxyyy81a63");
            expect(bdt).to.be.a("Date");
            if (bdt) {
                expect(bdt.toISOString().substr(0, 10)).to.be.equal("1981-01-23");
                expect(bdt.getMonth()).to.be.equal(0);
                expect(bdt.getDate()).to.be.equal(23);
            }
        });

        it("Omocode Female", () => {
            const bdt = Parser.cfToBirthDate("VRNGNYLtDsu");
            expect(bdt).to.be.a("Date");
            if (bdt) {
                expect(bdt.toISOString().substr(0, 10)).to.be.equal("2007-04-28");
                expect(bdt.getMonth()).to.be.equal(3);
                expect(bdt.getDate()).to.be.equal(28);
            }
        });

        it("Invalid", () => {
            expect(Parser.cfToBirthDate("XXXYyy90")).to.be.null;
            expect(Parser.cfToBirthDate("")).to.be.null;
        });
    });
};
