import { CheckDigitizer } from "../src/";
import "./utils";
import { expect } from "./utils";

describe("CodiceFiscaleUtils:CheckDigitizer", () => {
    describe("ControlCode", () => {
        describe("CheckDigitizer.checkDigit", () => {
            it("Should return DMBNDR05P21F839 for L", () => {
                expect(CheckDigitizer.checkDigit("DMBNDR05P21F839")).to.be.equal("L");
            });
            it("Should return VRNGNY07D68C351 for V", () => {
                expect(CheckDigitizer.checkDigit("VRNGNY07D68C351")).to.be.equal("V");
            });

            it("Should return dmbndr05p21f839 for L", () => {
                expect(CheckDigitizer.checkDigit("dmbndr05p21f839")).to.be.equal("L");
            });
            it("Should return vrngny07d68c351 for V", () => {
                expect(CheckDigitizer.checkDigit("vrngny07d68c351")).to.be.equal("V");
            });
        });
    });
});
