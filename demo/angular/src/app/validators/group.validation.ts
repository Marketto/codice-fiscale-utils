import { AbstractControl, ValidatorFn } from '@angular/forms';
import ValidationError from './validation-error.type';
import { Parser, Validator, BelfiorePlace } from '@marketto/codice-fiscale-utils';

type MismatchValidationFn = (codiceFiscaleFormControlValue: string, secondFieldControlValue: unknown) => ValidationError;

function mismatchValidatorGenerator(mismatchValidator: MismatchValidationFn) {
  return (
    codiceFiscaleFormControlName: string,
    secondFieldControlName: string
  ): ValidatorFn => {
    return (formGroupControl: AbstractControl): ValidationError => {
      const codiceFiscaleControl: AbstractControl = formGroupControl.get(codiceFiscaleFormControlName);
      const secondFieldControl: AbstractControl = formGroupControl.get(secondFieldControlName);
      const fieldsValid = ![codiceFiscaleControl, secondFieldControl]
        .some(fieldControl => !fieldControl.value || fieldControl.invalid);
      if (fieldsValid) {
        return mismatchValidator(codiceFiscaleControl.value, secondFieldControl.value);
      }
      return null;
    };
  };
}

export const cfLastNameMismatch = mismatchValidatorGenerator((
  codiceFiscaleFormControlValue: string,
  lastNameFormControlValue: string
): ValidationError => {
  if (!Validator.surname(codiceFiscaleFormControlValue).test(lastNameFormControlValue)) {
    return {
      cfLastNameMismatch: {
        lastName: lastNameFormControlValue,
        codiceFiscale: codiceFiscaleFormControlValue
      }
    };
  }
  return null;
});

export const cfFirstNameMismatch = mismatchValidatorGenerator((
  codiceFiscaleFormControlValue: string,
  firstNameFormControlValue: string
): ValidationError => {
  if (!Validator.firstname(codiceFiscaleFormControlValue).test(firstNameFormControlValue)) {
    return {
      cfFirstNameMismatch: {
        firstName: firstNameFormControlValue,
        codiceFiscale: codiceFiscaleFormControlValue
      }
    };
  }
  return null;
});

export const cfGenderMismatch = mismatchValidatorGenerator((
  codiceFiscaleFormControlValue: string,
  genderFormControlValue: string
): ValidationError => {
  if (!Validator.gender(codiceFiscaleFormControlValue).test(genderFormControlValue)) {
    return {
      cfGenderMismatch: {
        gender: genderFormControlValue,
        codiceFiscale: codiceFiscaleFormControlValue
      }
    };
  }
  return null;
});

export const cfBirthDateMismatch = mismatchValidatorGenerator((
  codiceFiscaleFormControlValue: string,
  birthDateFormControlValue: Date
): ValidationError => {
  if (!Validator.date(codiceFiscaleFormControlValue).test(birthDateFormControlValue.toJSON())) {
    return {
      cfBirthDateMismatch: {
        birthDate: birthDateFormControlValue,
        codiceFiscale: codiceFiscaleFormControlValue
      }
    };
  }
  return null;
});

export const cfBirthPlaceMismatch = mismatchValidatorGenerator((
  codiceFiscaleFormControlValue: string,
  birthPlaceFormControlValue: BelfiorePlace
): ValidationError => {
  if (!Validator.place(codiceFiscaleFormControlValue).test(birthPlaceFormControlValue.belfioreCode)) {
    return {
      cfBirthPlaceMismatch: {
        birthPlace: birthPlaceFormControlValue,
        codiceFiscale: codiceFiscaleFormControlValue
      }
    };
  }
  return null;
});
