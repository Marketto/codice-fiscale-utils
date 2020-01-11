import { Belfiore, BelfiorePlace, Parser } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("parsePlace", () => {
        it("By name", () => {
            expect(Parser.parsePlace("Palermo")).to.be.an("object")
                .and.to.have.property("belfioreCode", "G273");
        });
        it("By belfioreCode", () => {
            expect(Parser.parsePlace("C352")).to.be.an("object")
                .and.to.have.property("name", "Catanzaro");
        });
        it("By BelfiorePlace", () => {
            expect(Parser.parsePlace(Belfiore["A669" as any])).to.be.an("object")
                .and.to.have.property("name", "Barletta");
        });
        it("Invalid", () => {
            expect(Parser.parsePlace("")).to.be.null;
            expect(Parser.parsePlace("@!")).to.be.null;
            expect(Parser.parsePlace({} as BelfiorePlace)).to.be.null;
        });
    });
};
