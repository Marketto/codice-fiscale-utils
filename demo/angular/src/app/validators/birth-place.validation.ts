import { AbstractControl, ValidatorFn } from '@angular/forms';
import ValidationError from './validation-error.type';
import { COUNTRIES } from './codice-fiscale.const';
import {
  Validator,
  BelfiorePlace,
  Belfiore,
  BelfioreConnector,
  MultiFormatDate
} from '@marketto/codice-fiscale-utils';

export const exists = (getArea?: () => string | symbol) => (control: AbstractControl): ValidationError => {
  if (control.value) {
    if (getArea) {
      const area = getArea();
      let scopedBelfiore: BelfioreConnector = Belfiore;
      let errorId = 'scopeNonexistent';

      if (area === COUNTRIES) {
        scopedBelfiore = Belfiore.countries;
      } else if (typeof area === 'string') {
        const provinceId = area.trim().toUpperCase();
        if (Belfiore.provinces.includes(provinceId)) {
          scopedBelfiore = Belfiore.byProvince(area);
        }
      } else {
        errorId = 'nonexistent';
      }

      return Validator.isBirthPlaceInvalid(control.value, scopedBelfiore) ? {
        [errorId]: {
          value: control.value,
          area
        }
      } : null;
    }
  }
  return null;
};
