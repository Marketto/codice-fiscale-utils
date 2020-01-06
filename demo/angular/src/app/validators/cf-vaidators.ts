import * as codiceFiscale from './codice-fiscale.validation';
import * as lastName from './last-name.validation';
import * as firstName from './last-name.validation';
import * as birthDate from './birth-date.validation';
import * as gender from './gender.validation';
import * as birthArea from './birth-area.validator';
import * as birthPlace from './birth-place.validation';
import * as group from './group.validation';
import ValidationError from './validation-error.type';
import * as constant from './codice-fiscale.const';

export {
  ValidationError,
  group,
  constant,
  codiceFiscale,
  lastName,
  firstName,
  birthDate,
  birthArea,
  birthPlace,
  gender,
};
export default {
  group,
  constant,
  codiceFiscale,
  lastName,
  firstName,
  birthDate,
  birthArea,
  birthPlace,
  gender,
};
