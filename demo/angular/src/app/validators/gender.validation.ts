import { AbstractControl, ValidatorFn } from '@angular/forms';
import ValidationError from './validation-error.type';
import { Validator } from '@marketto/codice-fiscale-utils';

export const format = (control: AbstractControl): ValidationError => Validator
  .isGenderInvalid(control.value) ? {
    invalidFormat: {
      value: control.value
    }
  } : null;
