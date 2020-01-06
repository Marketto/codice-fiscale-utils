import { Validator } from '@marketto/codice-fiscale-utils';
import { AbstractControl } from '@angular/forms';
import ValidationError from './validation-error.type';

export const format = (control: AbstractControl): ValidationError => {
  if (control.value) {
    if (!Validator.isValid(control.value)) {
      return {
        invalidFormat: { value: control.value }
      };
    }
  }
  return null;
};
