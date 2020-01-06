import { AbstractControl } from '@angular/forms';
import ValidationError from './validation-error.type';
import { Belfiore } from '@marketto/codice-fiscale-utils';
import { COUNTRIES } from './codice-fiscale.const';
export const format = (control: AbstractControl): ValidationError => {
  if (control.value) {
    if (
      control.value !== COUNTRIES && !(
        typeof control.value === 'string' &&
        Belfiore.provinces.includes(control.value.trim().toUpperCase())
      )
    ) {
      return {
        invalidArea: {
          value: control.value
        }
      };
    }
  }
  return null;
};
