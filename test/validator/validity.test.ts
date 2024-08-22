import { codiceFiscaleUtils, expect } from "../utils";

export default () => {
	describe("codiceFiscale", () => {
		it("valid", async () => {
			(
				await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
					.valid
			).should.be.true;
			(
				await codiceFiscaleUtils.validator.codiceFiscale("MRNMIA02E45L219X")
					.valid
			).should.be.true;
			(
				await codiceFiscaleUtils.validator.codiceFiscale("GSTPPP31C06D620Z")
					.valid
			).should.be.true;
			(
				await codiceFiscaleUtils.validator.codiceFiscale("RVNGNY63D27I560P")
					.valid
			).should.be.true;
			// Unexisting country but Birthdate before CF introduction
			(
				await codiceFiscaleUtils.validator.codiceFiscale("RVNGNY77B08Z138H")
					.valid
			).should.be.true;
			(
				await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351K")
					.valid
			).should.be.false;
			(
				await codiceFiscaleUtils.validator.codiceFiscale("GSTPPP99C06D620V")
					.valid
			).should.be.false;
			(await codiceFiscaleUtils.validator.codiceFiscale("").valid).should.be
				.false;
		});
		it("invalid", async () => {
			(
				await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351V")
					.invalid
			).should.be.false;
			(
				await codiceFiscaleUtils.validator.codiceFiscale("MRNMIA02E45L219X")
					.invalid
			).should.be.false;
			(
				await codiceFiscaleUtils.validator.codiceFiscale("GSTPPP31C06D620Z")
					.invalid
			).should.be.false;
			(
				await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351K")
					.invalid
			).should.be.true;
			(
				await codiceFiscaleUtils.validator.codiceFiscale("GSTPPP99C06D620V")
					.invalid
			).should.be.true;
			(await codiceFiscaleUtils.validator.codiceFiscale("").invalid).should.be
				.false;
		});
		describe("errors", () => {
			it("No errors", async () => {
				const errors = await codiceFiscaleUtils.validator.codiceFiscale(
					"VRNGNY07D68C351V"
				).errors;
				expect(errors).to.be.null;
			});
			it("Last Name", async () => {
				const errors = await codiceFiscaleUtils.validator.codiceFiscale(
					"ARNGNY07D68C351V"
				).errors;
				errors?.should.contains({
					lastName: "MISSING_OR_INVALID_LAST_NAME",
				});
				errors?.should.not.have.property("firstName");
			});
			it("CRC", async () => {
				(
					await codiceFiscaleUtils.validator.codiceFiscale("VRNGNY07D68C351K")
						.errors
				)?.should.have.property("crc", "INVALID_CRC_CODE");
			});
			it("Expired Place", async () => {
				(
					await codiceFiscaleUtils.validator.codiceFiscale("GSTPPP99C06D620V")
						.errors
				)?.should.contains({
					place: "PLACE_EXPIRED_OR_NOT_YET_CREATED_ON_BIRTDATE",
					date: "BIRTHDATE_OUT_OF_BIRTH_PLACE_LIFE_RANGE",
				});
			});
		});
	});
	describe("Personal info", () => {
		describe("lastName", () => {
			it("valid", () => {
				codiceFiscaleUtils.validator.isLastNameValid("Test").should.be.true;
				codiceFiscaleUtils.validator.isLastNameValid("Tést N'àme").should.be
					.true;
				codiceFiscaleUtils.validator.isLastNameValid("").should.be.false;
				codiceFiscaleUtils.validator.isLastNameValid("@!#").should.be.false;
			});
			it("invalid", () => {
				codiceFiscaleUtils.validator.isLastNameInvalid("Test").should.be.false;
				codiceFiscaleUtils.validator.isLastNameInvalid("Tést N'àme").should.be
					.false;
				codiceFiscaleUtils.validator.isLastNameInvalid("").should.be.false;
				codiceFiscaleUtils.validator.isLastNameInvalid("@!#").should.be.true;
			});
		});

		describe("firstName", () => {
			it("valid", () => {
				codiceFiscaleUtils.validator.isFirstNameValid("Test").should.be.true;
				codiceFiscaleUtils.validator.isFirstNameValid("Tést N'àme").should.be
					.true;
				codiceFiscaleUtils.validator.isFirstNameValid("").should.be.false;
				codiceFiscaleUtils.validator.isFirstNameValid("@!#").should.be.false;
			});
			it("invalid", () => {
				codiceFiscaleUtils.validator.isFirstNameInvalid("Test").should.be.false;
				codiceFiscaleUtils.validator.isFirstNameInvalid("Tést N'àme").should.be
					.false;
				codiceFiscaleUtils.validator.isFirstNameInvalid("").should.be.false;
				codiceFiscaleUtils.validator.isFirstNameInvalid("@!#").should.be.true;
			});
		});

		describe("birthDate", () => {
			it("valid", () => {
				codiceFiscaleUtils.validator.isBirthDateValid("1999-01-01").should.be
					.true;
				codiceFiscaleUtils.validator.isBirthDateValid([1999, 0, 1]).should.be
					.true;
				codiceFiscaleUtils.validator.isBirthDateValid("").should.be.false;
				codiceFiscaleUtils.validator.isBirthDateValid("2000-02-30").should.be
					.false;
				codiceFiscaleUtils.validator.isBirthDateValid("No date").should.be
					.false;
				codiceFiscaleUtils.validator.isBirthDateValid("@!#").should.be.false;
			});
			it("invalid", () => {
				codiceFiscaleUtils.validator.isBirthDateInvalid("1999-01-01").should.be
					.false;
				codiceFiscaleUtils.validator.isBirthDateInvalid([1999, 0, 1]).should.be
					.false;
				codiceFiscaleUtils.validator.isBirthDateInvalid("").should.be.false;
				codiceFiscaleUtils.validator.isBirthDateInvalid("2000-02-30").should.be
					.true;
				codiceFiscaleUtils.validator.isBirthDateInvalid("No date").should.be
					.true;
				codiceFiscaleUtils.validator.isBirthDateInvalid("@!#").should.be.true;
			});
		});

		describe("gender", () => {
			it("valid", () => {
				codiceFiscaleUtils.validator.isGenderValid("M").should.be.true;
				codiceFiscaleUtils.validator.isGenderValid("F").should.be.true;
				codiceFiscaleUtils.validator.isGenderValid("m").should.be.true;
				codiceFiscaleUtils.validator.isGenderValid("f").should.be.true;
				codiceFiscaleUtils.validator.isGenderValid("").should.be.false;
				codiceFiscaleUtils.validator.isGenderValid("X").should.be.false;
				codiceFiscaleUtils.validator.isGenderValid("Male").should.be.false;
			});
			it("invalid", () => {
				codiceFiscaleUtils.validator.isGenderInvalid("M").should.be.false;
				codiceFiscaleUtils.validator.isGenderInvalid("F").should.be.false;
				codiceFiscaleUtils.validator.isGenderInvalid("m").should.be.false;
				codiceFiscaleUtils.validator.isGenderInvalid("f").should.be.false;
				codiceFiscaleUtils.validator.isGenderInvalid("").should.be.false;
				codiceFiscaleUtils.validator.isGenderInvalid("X").should.be.true;
				codiceFiscaleUtils.validator.isGenderInvalid("Male").should.be.true;
			});
		});

		describe("birthPlace", () => {
			it("valid", async () => {
				(await codiceFiscaleUtils.validator.isBirthPlaceValid("Roma")).should.be
					.true;
				(await codiceFiscaleUtils.validator.isBirthPlaceValid("H501")).should.be
					.true;
				(await codiceFiscaleUtils.validator.isBirthPlaceValid("")).should.be
					.false;
				(await codiceFiscaleUtils.validator.isBirthPlaceValid("Moon")).should.be
					.false;
			});
			it("invalid", async () => {
				(await codiceFiscaleUtils.validator.isBirthPlaceInvalid("Roma")).should
					.be.false;
				(await codiceFiscaleUtils.validator.isBirthPlaceInvalid("H501")).should
					.be.false;
				(await codiceFiscaleUtils.validator.isBirthPlaceInvalid("")).should.be
					.false;
				(await codiceFiscaleUtils.validator.isBirthPlaceInvalid("Moon")).should
					.be.true;
			});
		});

		describe("birth place & date match/mismatch", () => {
			const yugoslavia = "Repubblica Socialista Federale di Jugoslavia";
			it("match", async () => {
				(
					await codiceFiscaleUtils.validator.birthDatePlaceMatch(
						"1990-05-21",
						yugoslavia
					)
				).should.be.true;
				(
					await codiceFiscaleUtils.validator.birthDatePlaceMatch(
						new Date(),
						yugoslavia
					)
				).should.be.false;
				(
					await codiceFiscaleUtils.validator.birthDatePlaceMatch(
						"1988-03-11",
						"Roma"
					)
				).should.be.true;
				(
					await codiceFiscaleUtils.validator.birthDatePlaceMatch(
						new Date(),
						"Roma"
					)
				).should.be.true;
				(await codiceFiscaleUtils.validator.birthDatePlaceMatch(new Date(), ""))
					.should.be.false;
				(await codiceFiscaleUtils.validator.birthDatePlaceMatch("", "Palermo"))
					.should.be.false;
				(await codiceFiscaleUtils.validator.birthDatePlaceMatch("", "")).should
					.be.false;
			});
			it("mismatch", async () => {
				(
					await codiceFiscaleUtils.validator.birthDatePlaceMismatch(
						"1990-05-21",
						yugoslavia
					)
				).should.be.false;
				(
					await codiceFiscaleUtils.validator.birthDatePlaceMismatch(
						new Date(),
						yugoslavia
					)
				).should.be.true;
				(
					await codiceFiscaleUtils.validator.birthDatePlaceMismatch(
						"1988-03-11",
						"Roma"
					)
				).should.be.false;
				(
					await codiceFiscaleUtils.validator.birthDatePlaceMismatch(
						new Date(),
						"Roma"
					)
				).should.be.false;
				(
					await codiceFiscaleUtils.validator.birthDatePlaceMismatch(
						new Date(),
						""
					)
				).should.be.false;
				(
					await codiceFiscaleUtils.validator.birthDatePlaceMismatch(
						"",
						"Palermo"
					)
				).should.be.false;
				(await codiceFiscaleUtils.validator.birthDatePlaceMismatch("", ""))
					.should.be.false;
			});
		});
	});
};
