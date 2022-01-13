import { Validator } from "../../src/";
import { expect } from "../utils";

export default () => {
    describe("LastName", () => {
        it("match", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchLastName("Vareni")).to.be.true;
            expect(Validator.codiceFiscale("VRN").matchLastName("Vareni")).to.be.true;
            expect(Validator.codiceFiscale("UXX").matchLastName("U")).to.be.true;
            expect(Validator.codiceFiscale("XEX").matchLastName("XE")).to.be.true;
            expect(Validator.codiceFiscale("").matchLastName("Vareni")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchLastName("John")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchLastName("V")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchLastName("")).to.be.false;
        });
        it("mismatch", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchLastName("Vareni")).to.be.false;
            expect(Validator.codiceFiscale("VRN").mismatchLastName("Vareni")).to.be.false;
            expect(Validator.codiceFiscale("UXX").mismatchLastName("U")).to.be.false;
            expect(Validator.codiceFiscale("").mismatchLastName("Vareni")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchLastName("John")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchLastName("V")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchLastName("")).to.be.false;
        });
    });

    describe("FirstName", () => {
        it("match", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchFirstName("Genny")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY").matchFirstName("Genny")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY").matchFirstName("Gen Nyow")).to.be.true;
            expect(Validator.codiceFiscale("VRNAXX").matchFirstName("A")).to.be.true;
            expect(Validator.codiceFiscale("").matchFirstName("Genny")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchFirstName("John")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchFirstName("G")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchFirstName("")).to.be.false;
        });
        it("mismatch", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchFirstName("Genny")).to.be.false;
            expect(Validator.codiceFiscale("VRN").mismatchFirstName("Genny")).to.be.false;
            expect(Validator.codiceFiscale("VRNAXX").mismatchFirstName("AX")).to.be.true;
            expect(Validator.codiceFiscale("").mismatchFirstName("Genny")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchFirstName("John")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchFirstName("G")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchFirstName("")).to.be.false;
        });
    });

    describe("birthDate", () => {
        it("match", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthDate("2007-04-28")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D68").matchBirthDate("2007-04-28")).to.be.true;
            expect(Validator.codiceFiscale("").matchBirthDate("2007-04-28")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthDate("2008-02-16")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthDate("")).to.be.false;
        });
        it("mismatch", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthDate("2007-04-28")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68").mismatchBirthDate("2007-04-28")).to.be.false;
            expect(Validator.codiceFiscale("").mismatchBirthDate("2007-04-28")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthDate("2008-02-16")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthDate("")).to.be.false;
        });
    });

    describe("gender", () => {
        it("match", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchGender("F")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D68").matchGender("F")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D6").matchGender("F")).to.be.true;
            expect(Validator.codiceFiscale("").matchGender("F")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchGender("M")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchGender("")).to.be.false;
        });
        it("mismatch", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchGender("F")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68").mismatchGender("F")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D6").mismatchGender("F")).to.be.false;
            expect(Validator.codiceFiscale("").mismatchGender("F")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchGender("M")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchGender("")).to.be.false;
        });
    });

    describe("place", () => {
        it("match", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthPlace("CATANIA")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D68C351").matchBirthPlace("CATANIA")).to.be.true;
            expect(Validator.codiceFiscale("").matchBirthPlace("CATANIA")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthPlace("ROMA")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").matchBirthPlace("")).to.be.false;
        });
        it("mismatch", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthPlace("CATANIA")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351").mismatchBirthPlace("CATANIA")).to.be.false;
            expect(Validator.codiceFiscale("").mismatchBirthPlace("CATANIA")).to.be.false;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthPlace("ROMA")).to.be.true;
            expect(Validator.codiceFiscale("VRNGNY07D68C351V").mismatchBirthPlace("")).to.be.false;
        });
    });

    describe("personalInfo", () => {
        it("match", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V")
                .matchPersonalInfo({
                    day: 28,
                    firstName: "Génny",
                    gender: "F",
                    lastName: "Verònesi",
                    month: 3,
                    place: "Catania",
                    year: 1907,
                })).to.be.true;

            expect(Validator.codiceFiscale("VRNGNY07D68C351V")
                .matchPersonalInfo({
                    day: 28,
                    firstName: "Génny",
                    gender: "F",
                    lastName: "Verònesi",
                    month: 3,
                    place: "Firenze",
                    year: 1907,
                })).to.be.false;
        });
        it("mismatch", () => {
            expect(Validator.codiceFiscale("VRNGNY07D68C351V")
                .mismatchPersonalInfo({
                    day: 28,
                    firstName: "Génny",
                    gender: "F",
                    lastName: "Verònesi",
                    month: 3,
                    place: "Catania",
                    year: 1907,
                })).to.be.false;

            expect(Validator.codiceFiscale("VRNGNY07D68C351V")
                .mismatchPersonalInfo({
                    day: 28,
                    firstName: "Génny",
                })).to.be.false;
        });
    });
};
