const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Parser', () => {
    const CodiceFiscaleUtilsParser = require('../lib/parser');
    describe('methods', () => {
        describe('cfToGender', () => {
            it('Should return M', () => {
                CodiceFiscaleUtilsParser.cfToGender('XXXXXX90B20').should.be.equal('M');
            });
            it('Should return F', () => {
                CodiceFiscaleUtilsParser.cfToGender('XXXXXX90B63').should.be.equal('F');
            });
            it('Should return null', () => {
                expect(CodiceFiscaleUtilsParser.cfToGender('XXXXXX90')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToGender()).to.be.null;
            });
        });

        describe('cfToBirthDate', () => {
            it('Should return a Date (Male)', () => {
                const bdt = CodiceFiscaleUtilsParser.cfToBirthDate('XXXYYY92B20');
                bdt.toJSON().should.be.equal('1992-02-20');
                bdt.getDate().should.be.equal(20);
                bdt.getMonth().should.be.equal(1);
            });
            it('Should return a Date (Female)', () => {
                const bdt = CodiceFiscaleUtilsParser.cfToBirthDate('XXXYYY81A63');
                bdt.toISOString().should.be.equal('1981-01-23');
                bdt.getDate().should.be.equal(23);
                bdt.getMonth().should.be.equal(0);
            });
            it('Should return null', () => {
                expect(CodiceFiscaleUtilsParser.cfToBirthDate('XXXXXX90')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToBirthDate()).to.be.null;
            });
        });

        describe('cfToBirthYear', () => {
            it('Should return the year', () => {
                CodiceFiscaleUtilsParser.cfToBirthYear('XXXYYY92').should.be.equal(1992);
            });
            it('Should return 20XX up to current year', () => {
                const currentYear = (new Date()).getFullYear();
                CodiceFiscaleUtilsParser.cfToBirthYear(`XXXYYY${currentYear.toString().substr(-2)}`).should.be.equal(currentYear);
            });
            it('Should return 19XX from next year', () => {
                const ninetynineYearsAgo = (new Date()).getFullYear() -99;
                CodiceFiscaleUtilsParser.cfToBirthYear(`XXXYYY${ninetynineYearsAgo.toString().substr(-2)}`).should.be.equal(ninetynineYearsAgo);
            });
        });
    });
});