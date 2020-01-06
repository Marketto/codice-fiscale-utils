import { AbstractControl, ValidatorFn } from '@angular/forms';
import ValidationError from './validation-error.type';
import { Validator } from '@marketto/codice-fiscale-utils';

export const format = (control: AbstractControl): ValidationError => {
  if (control.value) {
    if (!Validator.surname().test(control.value)) {
      return {
        invalidFormat: {
          value: control.value
        }
      };
    }
  }
  return null;
};
