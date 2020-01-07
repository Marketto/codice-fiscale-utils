import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("encodeCf", () => {
        it("Should return VRNGNY07D68C351V", () => {
            expect(Parser.encodeCf({
                day: 28,
                firstName: "Genny",
                gender: "F",
                lastName: "Veronesi",
                month: 3,
                place: "Catania",
                year: 1907,
            })).to.be.equal("VRNGNY07D68C351V");
        });
        it("Should return MRNMIA02E45L219X", () => {
            expect(Parser.encodeCf({
                day: 5,
                firstName: "Mia",
                gender: "F",
                lastName: "Marin",
                month: 4,
                place: "Torino",
                year: 1902,
            })).to.be.equal("MRNMIA02E45L219X");
        });
    });
};
