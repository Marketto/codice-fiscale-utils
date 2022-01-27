import { Belfiore, Validator } from "../../src";

export default () => {
    describe("codiceFiscale", () => {
        it("valid", () => {
            Validator.codiceFiscale("VRNGNY07D68C351V").valid.should.be.true;
            Validator.codiceFiscale("MRNMIA02E45L219X").valid.should.be.true;
            Validator.codiceFiscale("GSTPPP31C06D620Z").valid.should.be.true;
            Validator.codiceFiscale("VRNGNY07D68C351K").valid.should.be.false;
            Validator.codiceFiscale("GSTPPP99C06D620V").valid.should.be.false;
            Validator.codiceFiscale("").valid.should.be.false;
        });
        it("invalid", () => {
            Validator.codiceFiscale("VRNGNY07D68C351V").invalid.should.be.false;
            Validator.codiceFiscale("MRNMIA02E45L219X").invalid.should.be.false;
            Validator.codiceFiscale("GSTPPP31C06D620Z").invalid.should.be.false;
            Validator.codiceFiscale("VRNGNY07D68C351K").invalid.should.be.true;
            Validator.codiceFiscale("GSTPPP99C06D620V").invalid.should.be.true;
            Validator.codiceFiscale("").invalid.should.be.false;
        });
    });
    describe("Personal info", () => {

        describe("lastName", () => {
            it("valid", () => {
                Validator.isLastNameValid("Test").should.be.true;
                Validator.isLastNameValid("Tést N'àme").should.be.true;
                Validator.isLastNameValid("").should.be.false;
                Validator.isLastNameValid("@!#").should.be.false;
            });
            it("invalid", () => {
                Validator.isLastNameInvalid("Test").should.be.false;
                Validator.isLastNameInvalid("Tést N'àme").should.be.false;
                Validator.isLastNameInvalid("").should.be.false;
                Validator.isLastNameInvalid("@!#").should.be.true;
            });
        });

        describe("firstName", () => {
            it("valid", () => {
                Validator.isFirstNameValid("Test").should.be.true;
                Validator.isFirstNameValid("Tést N'àme").should.be.true;
                Validator.isFirstNameValid("").should.be.false;
                Validator.isFirstNameValid("@!#").should.be.false;
            });
            it("invalid", () => {
                Validator.isFirstNameInvalid("Test").should.be.false;
                Validator.isFirstNameInvalid("Tést N'àme").should.be.false;
                Validator.isFirstNameInvalid("").should.be.false;
                Validator.isFirstNameInvalid("@!#").should.be.true;
            });
        });

        describe("birthDate", () => {
            it("valid", () => {
                Validator.isBirthDateValid("1999-01-01").should.be.true;
                Validator.isBirthDateValid([1999, 0, 1]).should.be.true;
                Validator.isBirthDateValid("").should.be.false;
                Validator.isBirthDateValid("2000-02-30").should.be.false;
                Validator.isBirthDateValid("No date").should.be.false;
                Validator.isBirthDateValid("@!#").should.be.false;
            });
            it("invalid", () => {
                Validator.isBirthDateInvalid("1999-01-01").should.be.false;
                Validator.isBirthDateInvalid([1999, 0, 1]).should.be.false;
                Validator.isBirthDateInvalid("").should.be.false;
                Validator.isBirthDateInvalid("2000-02-30").should.be.true;
                Validator.isBirthDateInvalid("No date").should.be.true;
                Validator.isBirthDateInvalid("@!#").should.be.true;
            });
        });

        describe("gender", () => {
            it("valid", () => {
                Validator.isGenderValid("M").should.be.true;
                Validator.isGenderValid("F").should.be.true;
                Validator.isGenderValid("m").should.be.true;
                Validator.isGenderValid("f").should.be.true;
                Validator.isGenderValid("").should.be.false;
                Validator.isGenderValid("X").should.be.false;
                Validator.isGenderValid("Male").should.be.false;
            });
            it("invalid", () => {
                Validator.isGenderInvalid("M").should.be.false;
                Validator.isGenderInvalid("F").should.be.false;
                Validator.isGenderInvalid("m").should.be.false;
                Validator.isGenderInvalid("f").should.be.false;
                Validator.isGenderInvalid("").should.be.false;
                Validator.isGenderInvalid("X").should.be.true;
                Validator.isGenderInvalid("Male").should.be.true;
            });
        });

        describe("birthPlace", () => {
            it("valid", () => {
                Validator.isBirthPlaceValid("Roma").should.be.true;
                Validator.isBirthPlaceValid("H501").should.be.true;
                Validator.isBirthPlaceValid("").should.be.false;
                Validator.isBirthPlaceValid("Moon").should.be.false;
            });
            it("invalid", () => {
                Validator.isBirthPlaceInvalid("Roma").should.be.false;
                Validator.isBirthPlaceInvalid("H501").should.be.false;
                Validator.isBirthPlaceInvalid("").should.be.false;
                Validator.isBirthPlaceInvalid("Moon").should.be.true;
            });
            describe("scoped date", () => {
                const scopedBC = Belfiore.active([1980]);
                const scopedNowBC = Belfiore.active();
                it("valid", () => {
                    Validator.isBirthPlaceValid("Unione sovietica", scopedNowBC).should.be.false;
                    Validator.isBirthPlaceValid("Unione sovietica", scopedBC).should.be.true;
                    Validator.isBirthPlaceValid("A662", scopedBC).should.be.true;
                    Validator.isBirthPlaceValid("", scopedBC).should.be.false;
                    Validator.isBirthPlaceValid("Moon", scopedBC).should.be.false;
                });
                it("invalid", () => {
                    Validator.isBirthPlaceInvalid("Unione sovietica", scopedNowBC).should.be.true;
                    Validator.isBirthPlaceInvalid("Unione sovietica", scopedBC).should.be.false;
                    Validator.isBirthPlaceInvalid("A662", scopedBC).should.be.false;
                    Validator.isBirthPlaceInvalid("", scopedBC).should.be.false;
                    Validator.isBirthPlaceInvalid("Moon", scopedBC).should.be.true;
                });
            });

            describe("scoped cities", () => {
                const scopedBC = Belfiore.cities;
                it("valid", () => {
                    Validator.isBirthPlaceValid("Francia").should.be.true;
                    Validator.isBirthPlaceValid("Francia", scopedBC).should.be.false;
                    Validator.isBirthPlaceValid("A662", scopedBC).should.be.true;
                    Validator.isBirthPlaceValid("", scopedBC).should.be.false;
                    Validator.isBirthPlaceValid("Moon", scopedBC).should.be.false;
                });
                it("invalid", () => {
                    Validator.isBirthPlaceInvalid("Francia").should.be.false;
                    Validator.isBirthPlaceInvalid("Francia", scopedBC).should.be.true;
                    Validator.isBirthPlaceInvalid("A662", scopedBC).should.be.false;
                    Validator.isBirthPlaceInvalid("", scopedBC).should.be.false;
                    Validator.isBirthPlaceInvalid("Moon", scopedBC).should.be.true;
                });
            });

            describe("scoped countries", () => {
                const scopedBC = Belfiore.countries;
                it("valid", () => {
                    Validator.isBirthPlaceValid("Belgio", scopedBC).should.be.true;
                    Validator.isBirthPlaceValid("H501", scopedBC).should.be.false;
                    Validator.isBirthPlaceValid("", scopedBC).should.be.false;
                    Validator.isBirthPlaceValid("Moon", scopedBC).should.be.false;
                });
                it("invalid", () => {
                    Validator.isBirthPlaceInvalid("Belgio", scopedBC).should.be.false;
                    Validator.isBirthPlaceInvalid("H501", scopedBC).should.be.true;
                    Validator.isBirthPlaceInvalid("", scopedBC).should.be.false;
                    Validator.isBirthPlaceInvalid("Moon", scopedBC).should.be.true;
                });
            });

            describe("scoped province", () => {
                const scopedBC = Belfiore.byProvince("VV");
                it("valid", () => {
                    Validator.isBirthPlaceValid("Vibo Valentia", scopedBC).should.be.true;
                    Validator.isBirthPlaceValid("H501", scopedBC).should.be.false;
                    Validator.isBirthPlaceValid("", scopedBC).should.be.false;
                    Validator.isBirthPlaceValid("Moon", scopedBC).should.be.false;
                });
                it("invalid", () => {
                    Validator.isBirthPlaceInvalid("Vibo Valentia", scopedBC).should.be.false;
                    Validator.isBirthPlaceInvalid("H501", scopedBC).should.be.true;
                    Validator.isBirthPlaceInvalid("", scopedBC).should.be.false;
                    Validator.isBirthPlaceInvalid("Moon", scopedBC).should.be.true;
                });
            });
        });

        describe("birth place & date match/mismatch", () => {
            const yugoslavia = "Repubblica Socialista Federale di Jugoslavia";
            it("match", () => {
                Validator.birthDatePlaceMatch("1990-05-21", yugoslavia).should.be.true;
                Validator.birthDatePlaceMatch(new Date(), yugoslavia).should.be.false;
                Validator.birthDatePlaceMatch("1988-03-11", "Roma").should.be.true;
                Validator.birthDatePlaceMatch(new Date(), "Roma").should.be.true;
                Validator.birthDatePlaceMatch(new Date(), "").should.be.false;
                Validator.birthDatePlaceMatch("", "Palermo").should.be.false;
                Validator.birthDatePlaceMatch("", "").should.be.false;
            });
            it("mismatch", () => {
                Validator.birthDatePlaceMismatch("1990-05-21", yugoslavia).should.be.false;
                Validator.birthDatePlaceMismatch(new Date(), yugoslavia).should.be.true;
                Validator.birthDatePlaceMismatch("1988-03-11", "Roma").should.be.false;
                Validator.birthDatePlaceMismatch(new Date(), "Roma").should.be.false;
                Validator.birthDatePlaceMismatch(new Date(), "").should.be.false;
                Validator.birthDatePlaceMismatch("", "Palermo").should.be.false;
                Validator.birthDatePlaceMismatch("", "").should.be.false;
            });
        });
    });
};
