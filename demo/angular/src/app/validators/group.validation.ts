import { AbstractControl, ValidatorFn } from '@angular/forms';
import ValidationError from './validation-error.type';
import { Validator, BelfiorePlace, CFMismatchValidator } from '@marketto/codice-fiscale-utils';
import MismatchValidationFn from './mismatch-validation-fn.type';

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
        return mismatchValidator(
          Validator.codiceFiscale(codiceFiscaleControl.value),
          codiceFiscaleControl.value,
          secondFieldControl.value
        );
      }
      return null;
    };
  };
}

export const cfLastNameMismatch = mismatchValidatorGenerator((
  cfValidator: CFMismatchValidator,
  codiceFiscaleFormControlValue: string,
  lastNameFormControlValue: string
): ValidationError => {
  return cfValidator.mismatchLastName(lastNameFormControlValue) ?
    {
      cfLastNameMismatch: {
        lastName: lastNameFormControlValue,
        codiceFiscale: codiceFiscaleFormControlValue
      }
    } : null;
});

export const cfFirstNameMismatch = mismatchValidatorGenerator((
  cfValidator: CFMismatchValidator,
  codiceFiscaleFormControlValue: string,
  firstNameFormControlValue: string
): ValidationError => {
  return cfValidator.mismatchFirstName(firstNameFormControlValue) ?
    {
      cfFirstNameMismatch: {
        firstName: firstNameFormControlValue,
        codiceFiscale: codiceFiscaleFormControlValue
      }
    } : null;
});

export const cfGenderMismatch = mismatchValidatorGenerator((
  cfValidator: CFMismatchValidator,
  codiceFiscaleFormControlValue: string,
  genderFormControlValue: string
): ValidationError => {
  return cfValidator.mismatchGender(genderFormControlValue) ?
    {
      cfGenderMismatch: {
        gender: genderFormControlValue,
        codiceFiscale: codiceFiscaleFormControlValue
      }
    } : null;
});

export const cfBirthDateMismatch = mismatchValidatorGenerator((
  cfValidator: CFMismatchValidator,
  codiceFiscaleFormControlValue: string,
  birthDateFormControlValue: Date
): ValidationError => {
  return cfValidator.mismatchBirthDate(birthDateFormControlValue) ?
    {
      cfBirthDateMismatch: {
        birthDate: birthDateFormControlValue,
        codiceFiscale: codiceFiscaleFormControlValue
      }
    } : null;
});

export const cfBirthPlaceMismatch = mismatchValidatorGenerator((
  cfValidator: CFMismatchValidator,
  codiceFiscaleFormControlValue: string,
  birthPlaceFormControlValue: BelfiorePlace
): ValidationError => {
  return cfValidator.mismatchBirthPlace(birthPlaceFormControlValue) ?
    {
      cfBirthPlaceMismatch: {
        birthPlace: birthPlaceFormControlValue,
        codiceFiscale: codiceFiscaleFormControlValue
      }
    } : null;
});

export const birthDatePlaceMismatch = (
  birthDateControlName: string,
  birthPlaceFormControlName: string,
): ValidatorFn => (formGroupControl: AbstractControl): ValidationError => {
  const birthDateControl: AbstractControl = formGroupControl.get(birthDateControlName);
  const birthPlaceFormControl: AbstractControl = formGroupControl.get(birthPlaceFormControlName);
  const fieldsValid = ![birthDateControl, birthPlaceFormControl]
    .some(fieldControl => !fieldControl.value || fieldControl.invalid);

  return (fieldsValid && Validator.birthDatePlaceMismatch(
    birthDateControl.value,
    birthPlaceFormControl.value
  )) ? {
    birthDatePlaceMismatch: {
      birthDate: birthDateControl.value,
      birthPlace: birthPlaceFormControl.value
    }
  } : null;
};
