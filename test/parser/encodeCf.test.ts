import { Parser } from "../../src/";
import { expect } from "../utils";

export default async () => {
    describe("encodeCf", () => {
        it("Should return VRNGNY07D68C351V", () => {
            expect(Parser.encodeCf({
                day: 28,
                gender: "F",
                month: 3,
                name: "Genny",
                place: "Catania",
                surname: "Veronesi",
                year: 1907,
            })).to.be.equal("VRNGNY07D68C351V");
        });
        it("Should return MRNMIA02E45L219X", () => {
            expect(Parser.encodeCf({
                day: 5,
                gender: "F",
                month: 4,
                name: "Mia",
                place: "Torino",
                surname: "Marin",
                year: 1902,
            })).to.be.equal("MRNMIA02E45L219X");
        });
    });
};
