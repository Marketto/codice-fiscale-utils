import { expect } from '../utils';
import Parser from '../../src/parser';

export default async () => {
    describe('cfToBirthYear', () => {
        describe('Uppercase', () => {
            it('Should return the year', () => {
                Parser.cfToBirthYear('XXXYYY92').should.be.equal(1992);
            });
            it('Should return 20XX up to current year', () => {
                const currentYear = new Date().getFullYear();
                Parser.cfToBirthYear(`XXXYYY${currentYear.toString().substr(-2)}`).should.be.equal(currentYear);
            });
            it('Should return 19XX from next year', () => {
                const ninetynineYearsAgo = new Date().getFullYear() -99;
                Parser.cfToBirthYear(`XXXYYY${ninetynineYearsAgo.toString().substr(-2)}`).should.be.equal(ninetynineYearsAgo);
            });
        });
        describe('Lowercase', () => {
            it('Should return the year', () => {
                Parser.cfToBirthYear('xxxyyy92').should.be.equal(1992);
            });
            it('Should return 20XX up to current year', () => {
                const currentYear = new Date().getFullYear();
                Parser.cfToBirthYear(`xxxyyy${currentYear.toString().substr(-2)}`).should.be.equal(currentYear);
            });
            it('Should return 19XX from next year', () => {
                const ninetynineYearsAgo = new Date().getFullYear() -99;
                Parser.cfToBirthYear(`xxxyyy${ninetynineYearsAgo.toString().substr(-2)}`).should.be.equal(ninetynineYearsAgo);
            });
        });
        describe('Invalid', () => {
            it('Should return null', () => {
                expect(Parser.cfToBirthDate('XXXYYY')).to.be.null;
                expect(Parser.cfToBirthDate()).to.be.null;
            });
        });
    });
};