import { expect } from './utils';
import Validator from '../src/validator';

describe('CodiceFiscaleUtils:Validator', () => {
    describe('codiceFiscale', () => {
        require('./validator/cfSurname.test');
        require('./validator/cfName.test');
        require('./validator/cfYear.test');
        require('./validator/cfMonth.test');
        require('./validator/cfDay.test');
        require('./validator/cfDayGender.test');
        require('./validator/cfDateGender.test');
        require('./validator/cfPlace.test');
        require('./validator/codiceFiscale.test');
    });
    describe('personal infos', () => {
        require('./validator/surname.test');
        require('./validator/name.test');
        require('./validator/date.test');
        require('./validator/gender.test');
        require('./validator/place.test');
        require('./validator/isValid.test');
    });
});