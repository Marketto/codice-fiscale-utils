import { CheckDigitizer } from "../src/";
import "./utils";

describe("CodiceFiscaleUtils:CheckDigitizer", () => {
    describe("ControlCode", () => {
        describe("CheckDigitizer.checkDigit", () => {
            it("Should return DMBNDR05P21F839 for L", () => {
                CheckDigitizer.checkDigit("DMBNDR05P21F839").should.be.equal("L");
            });
            it("Should return VRNGNY07D68C351 for V", () => {
                CheckDigitizer.checkDigit("VRNGNY07D68C351").should.be.equal("V");
            });

            it("Should return dmbndr05p21f839 for L", () => {
                CheckDigitizer.checkDigit("dmbndr05p21f839").should.be.equal("L");
            });
            it("Should return vrngny07d68c351 for V", () => {
                CheckDigitizer.checkDigit("vrngny07d68c351").should.be.equal("V");
            });
        });
    });
});
