import bitmap from './parser/omocode-bitmap.test';

import cfDeomocode from './parser/cfDeomocode.test';
import cfToSurname from './parser/cfToSurname.test';
import cfToName from './parser/cfToName.test';
import cfToGender from './parser/cfToGender.test';
import cfToBirthDate from './parser/cfToBirthDate.test';
import tes from './parser/cfDecode.test';       
 
import surnameToCf from './parser/surnameToCf.test';
import nameToCf from './parser/nameToCf.test';
import yearToCf from './parser/yearToCf.test';
import monthToCf from './parser/monthToCf.test';
import dayGenderToCf from './parser/dayGenderToCf.test';
import dateGenderToCf from './parser/dateGenderToCf.test';
import placeToCf from './parser/placeToCf.test';
import encodeCf from './parser/encodeCf.test';

describe('CodiceFiscaleUtils:Parser', () => {
    describe('constants', () => bitmap());

    describe('methods from CF', () => Promise.all([
        cfDeomocode(),
        cfToSurname(),
        cfToName(),
        cfToGender(),
        cfToBirthDate(),
        tes(),
    ]));

    describe('methods to CF', () => Promise.all([
        surnameToCf(),
        nameToCf(),
        yearToCf(),
        monthToCf(),
        dayGenderToCf(),
        dateGenderToCf(),
        placeToCf(),
        encodeCf(),
    ]));
});