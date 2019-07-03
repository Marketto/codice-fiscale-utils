const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:CheckDigitizer', () => {
    const CheckDigitizer = require('../src/checkDigitizer');
    describe('ControlCode', () => {
        describe('CheckDigitizer.checkDigit', () => {
            it('Should return DMBNDR05P21F839 for L', () => {
                CheckDigitizer.checkDigit('DMBNDR05P21F839').should.be.equal('L');
            });
        });
    });
});