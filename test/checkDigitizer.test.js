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
            it('Should return VRNGNY07D68C351 for V', () => {
                CheckDigitizer.checkDigit('VRNGNY07D68C351').should.be.equal('V');
            });
        });
    });
});