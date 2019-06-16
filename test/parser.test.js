const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Parser', () => {
    const CodiceFiscaleUtilsParser = require('../lib/parser');
    describe('methods', () => {
        describe('parseGender', () => {
            it('Should return M', () => {
                CodiceFiscaleUtilsParser.parseGender('XXXXXX90B20').should.be.equal('M');
            });
            it('Should return F', () => {
                CodiceFiscaleUtilsParser.parseGender('XXXXXX90B63').should.be.equal('F');
            });
            it('Should return null', () => {
                expect(CodiceFiscaleUtilsParser.parseGender('XXXXXX90')).to.be.null;
                expect(CodiceFiscaleUtilsParser.parseGender()).to.be.null;
            });
        });
    });
});