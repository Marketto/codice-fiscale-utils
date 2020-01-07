import { AbstractControl } from '@angular/forms';
import ValidationError from './validation-error.type';
import { Validator } from '@marketto/codice-fiscale-utils';
export const format = (control: AbstractControl): ValidationError => {
  return Validator.isFirstNameInvalid(control.value) ?
    {
      invalidFormat: {
        value: control.value
      }
    } : null;
};
