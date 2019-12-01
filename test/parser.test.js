describe('CodiceFiscaleUtils:Parser', () => {
    describe('constants', () => {
        require('./parser/omocode-bitmap.test');
    });

    describe('methods from CF', () => {
        require('./parser/cfDeomocode.test');
        require('./parser/cfToSurname.test');
        require('./parser/cfToName.test');
        require('./parser/cfToGender.test');
        require('./parser/cfToBirthDate.test');
        require('./parser/cfDecode.test');        
    });

    describe('methods to CF', () => {
        require('./parser/surnameToCf.test');
        require('./parser/nameToCf.test');
        require('./parser/yearToCf.test');
        require('./parser/monthToCf.test');
        require('./parser/dayGenderToCf.test');
        require('./parser/dateGenderToCf.test');
        require('./parser/placeToCf.test');
        require('./parser/encodeCf.test');
    });
});