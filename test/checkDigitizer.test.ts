import { CheckDigitizer, CRC } from "../src/";
import "./utils";
import { expect } from "./utils";

describe("CodiceFiscaleUtils:CheckDigitizer", () => {
    it("Should return proper CRC Enum values", () => {
        expect(CRC.B).to.be.equal(0);
        expect(CRC.A).to.be.equal(1);
        expect(CRC.K).to.be.equal(2);
        expect(CRC.P).to.be.equal(3);
        expect(CRC.L).to.be.equal(4);
        expect(CRC.C).to.be.equal(5);
        expect(CRC.Q).to.be.equal(6);
        expect(CRC.D).to.be.equal(7);
        expect(CRC.R).to.be.equal(8);
        expect(CRC.E).to.be.equal(9);
        expect(CRC.V).to.be.equal(10);
        expect(CRC.O).to.be.equal(11);
        expect(CRC.S).to.be.equal(12);
        expect(CRC.F).to.be.equal(13);
        expect(CRC.T).to.be.equal(14);
        expect(CRC.G).to.be.equal(15);
        expect(CRC.U).to.be.equal(16);
        expect(CRC.H).to.be.equal(17);
        expect(CRC.M).to.be.equal(18);
        expect(CRC.I).to.be.equal(19);
        expect(CRC.N).to.be.equal(20);
        expect(CRC.J).to.be.equal(21);
        expect(CRC.W).to.be.equal(22);
        expect(CRC.Z).to.be.equal(23);
        expect(CRC.Y).to.be.equal(24);
        expect(CRC.X).to.be.equal(25);
    });
    describe("ControlCode", () => {
        describe("CheckDigitizer.evaluateChar", () => {
            it("Should return 1 for A", () => {
                const charIterator = CheckDigitizer.evaluateChar("A");
                expect(charIterator.next().value).to.be.equal(1);
            });
            it("Should return 0,1 for BB", () => {
                const charIterator = CheckDigitizer.evaluateChar("BB");
                expect(charIterator.next().value).to.be.equal(0);
                expect(charIterator.next().value).to.be.equal(1);
            });
        });
        describe("CheckDigitizer.checkDigit", () => {
            it("Should return L for DMBNDR05P21F839", () => {
                expect(CheckDigitizer.checkDigit("DMBNDR05P21F839")).to.be.equal("L");
            });
            it("Should return V for VRNGNY07D68C351", () => {
                expect(CheckDigitizer.checkDigit("VRNGNY07D68C351")).to.be.equal("V");
            });

            it("Should return L for dmbndr05p21f839", () => {
                expect(CheckDigitizer.checkDigit("dmbndr05p21f839")).to.be.equal("L");
            });
            it("Should return V for vrngny07d68c351", () => {
                expect(CheckDigitizer.checkDigit("vrngny07d68c351")).to.be.equal("V");
            });
        });
    });
});
