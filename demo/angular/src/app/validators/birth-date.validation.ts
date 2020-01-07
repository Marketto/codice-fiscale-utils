import { AbstractControl, ValidatorFn } from '@angular/forms';
import ValidationError from './validation-error.type';
import { Belfiore } from '@marketto/codice-fiscale-utils';

export const placeMismatch = (belfioreCodeGetter: () => string): ValidatorFn => (control: AbstractControl): ValidationError => {
  if (control.value) {
    const belfioreCode = belfioreCodeGetter();
    if (belfioreCode && Belfiore[belfioreCode] && !Belfiore.active(control.value)[belfioreCode]) {
      return {
        placeMismatch: {
          reference: belfioreCode,
          value: control.value
        }
      };
    }
  }
  return null;
};
