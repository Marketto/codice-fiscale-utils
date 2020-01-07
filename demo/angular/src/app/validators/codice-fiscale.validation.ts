import { Validator } from '@marketto/codice-fiscale-utils';
import { AbstractControl } from '@angular/forms';
import ValidationError from './validation-error.type';

export const format = (control: AbstractControl): ValidationError => Validator
  .codiceFiscale(control.value).invalid ? {
    invalidFormat: { value: control.value }
  } : null;
