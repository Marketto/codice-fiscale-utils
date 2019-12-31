import cfSurname from './validator/cfSurname.test';
import cfName from './validator/cfName.test';
import cfYear from './validator/cfYear.test';
import cfMonth from './validator/cfMonth.test';
import cfDay from './validator/cfDay.test';
import cfDayGender from './validator/cfDayGender.test';
import cfDateGender from './validator/cfDateGender.test';
import cfPlace from './validator/cfPlace.test';
import codiceFiscale from './validator/codiceFiscale.test';

import surname from './validator/surname.test';
import name from './validator/name.test';
import date from './validator/date.test';
import gender from './validator/gender.test';
import place from './validator/place.test';
import isValid from './validator/isValid.test';

describe('CodiceFiscaleUtils:Validator', () => {
    describe('codiceFiscale', () => Promise.all([
        cfSurname(),
        cfName(),
        cfYear(),
        cfMonth(),
        cfDay(),
        cfDayGender(),
        cfDateGender(),
        cfPlace(),
        codiceFiscale(),
    ]));
    describe('personal infos', () => Promise.all([
        surname(),
        name(),
        date(),
        gender(),
        place(),
        isValid(),
    ]));
});