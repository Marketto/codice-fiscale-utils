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

function parsePlace(
  control: AbstractControl,
  scopedBelfiore: BelfioreConnector = Belfiore
): BelfiorePlace | null {
  const placeNameOrPlaceOrBelfioreCode: BelfiorePlace | string | null = control.value;
  if (typeof placeNameOrPlaceOrBelfioreCode === 'string') {
    const parsedPlace = scopedBelfiore[placeNameOrPlaceOrBelfioreCode]
      || scopedBelfiore.findByName(placeNameOrPlaceOrBelfioreCode);
    if (parsedPlace) {
      control.setValue(parsedPlace);
    }
    return parsedPlace;
  }
  if (typeof placeNameOrPlaceOrBelfioreCode === 'object') {
    return scopedBelfiore[placeNameOrPlaceOrBelfioreCode.belfioreCode];
  }
  return null;
}

export const exists = (getArea?: () => string | symbol) => (control: AbstractControl): ValidationError => {
  if (control.value) {
    if (getArea) {
      const area = getArea();
      let scopedBelfiore: BelfioreConnector = Belfiore;

      if (area === COUNTRIES) {
        scopedBelfiore = Belfiore.countries;
      } else if (typeof area === 'string') {
        const provinceId = area.trim().toUpperCase();
        if (Belfiore.provinces.includes(provinceId)) {
          scopedBelfiore = Belfiore.byProvince(area);
        }
      }
      const parsedPlace = parsePlace(control, scopedBelfiore);
      if (!parsedPlace) {
        const nonexistent = {
          value: control.value,
          area
        };
        if (scopedBelfiore === Belfiore) {
          return {
            nonexistent
          };
        }
        return {
          scopeNonexistent: nonexistent
        };
      }
    }
  }
  return null;
};

export const dateMismatch = (birthDateGetter: () => MultiFormatDate): ValidatorFn => (control: AbstractControl): ValidationError => {
  if (control.value) {
    const belfiorePlace = parsePlace(control);
    if (belfiorePlace) {
      const birthDate = birthDateGetter();
      if (birthDate && !Belfiore.active(birthDate)[belfiorePlace.belfioreCode]) {
        return {
          dateMismatch: {
            reference: belfiorePlace,
            value: control.value
          }
        };
      }
    }
  }
  return null;
};

export const codiceFiscaleMismatch = (codiceFiscaleGetter: () => string): ValidatorFn => (control: AbstractControl): ValidationError => {
  if (control.value) {
    const codiceFiscale = codiceFiscaleGetter();
    if (
      codiceFiscale &&
      Validator.cfPlace().test(control.value) &&
      !Validator.cfPlace(codiceFiscale).test(control.value)
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
