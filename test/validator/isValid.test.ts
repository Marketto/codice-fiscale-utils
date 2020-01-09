import { Validator } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("isValid", () => {
        it("Should validate VRNGNY07D68C351V", () => {
            Validator.codiceFiscale("VRNGNY07D68C351V").valid.should.be.ok;
        });
        it("Should validate MRNMIA02E45L219X", () => {
            Validator.codiceFiscale("MRNMIA02E45L219X").valid.should.be.ok;
        });
        it("Should validate GSTPPP31C06D620Z", () => {
            Validator.codiceFiscale("GSTPPP31C06D620Z").valid.should.be.ok;
        });

        it("Should not validate VRNGNY07D68C351K", () => {
            Validator.codiceFiscale("VRNGNY07D68C351K").valid.should.be.false;
        });
        it("Should not validate GSTPPP99C06D620V", () => {
            Validator.codiceFiscale("GSTPPP99C06D620V").valid.should.be.false;
        });
    });
};
