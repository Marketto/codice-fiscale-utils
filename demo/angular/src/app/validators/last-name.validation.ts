import { AbstractControl } from '@angular/forms';
import ValidationError from './validation-error.type';
import { Validator } from '@marketto/codice-fiscale-utils';

export const format = (control: AbstractControl): ValidationError => Validator
  .isLastNameInvalid(control.value) ? {
    invalidFormat: {
      value: control.value
    }
  } : null;
