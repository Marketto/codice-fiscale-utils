import { AbstractControl, ValidatorFn } from '@angular/forms';
import ValidationError from './validation-error.type';
import { Validator } from '@marketto/codice-fiscale-utils';

export const format = (control: AbstractControl): ValidationError => {
  if (control.value) {
    if (!Validator.gender().test(control.value)) {
      return {
        invalidFormat: {
          value: control.value
        }
      };
    }
  }
  return null;
};

export const codiceFiscaleMismatch = (codiceFiscaleGetter: () => string): ValidatorFn => (control: AbstractControl): ValidationError => {
  if (control.value) {
    const codiceFiscale = codiceFiscaleGetter();
    if (
      codiceFiscale &&
      Validator.gender().test(control.value) &&
      !Validator.gender(codiceFiscale).test(control.value)
    ) {
      return {
        codiceFiscaleMismatch: {
          reference: codiceFiscale,
          value: control.value
        }
      };
    }
  }
  return null;
};
