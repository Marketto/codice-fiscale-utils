import { expect } from '../utils';
import Parser from '../../src/parser';

export default async () => {
    describe('cfToBirthDate', () => {
        describe('Uppercase', () => {
            it('Should return a Date (Male)', () => {
                const bdt = Parser.cfToBirthDate('XXXYYY92B20');
                bdt.toJSON().substr(0,10).should.be.equal('1992-02-20');
                bdt.getDate().should.be.equal(20);
                bdt.getMonth().should.be.equal(1);
            });
            it('Should return a Date (Female)', () => {
                const bdt = Parser.cfToBirthDate('XXXYYY81A63');
                bdt.toISOString().substr(0,10).should.be.equal('1981-01-23');
                bdt.getDate().should.be.equal(23);
                bdt.getMonth().should.be.equal(0);
            });
        });
        describe('Lowercase', () => {
            it('Should return a Date (Male)', () => {
                const bdt = Parser.cfToBirthDate('xxxyyy92b20');
                bdt.toJSON().substr(0,10).should.be.equal('1992-02-20');
                bdt.getDate().should.be.equal(20);
                bdt.getMonth().should.be.equal(1);
            });
            it('Should return a Date (Female)', () => {
                const bdt = Parser.cfToBirthDate('xxxyyy81a63');
                bdt.toISOString().substr(0,10).should.be.equal('1981-01-23');
                bdt.getDate().should.be.equal(23);
                bdt.getMonth().should.be.equal(0);
            });
        });
        describe('Invalid', () => {
            it('Should return null', () => {
                expect(Parser.cfToBirthDate('XXXYYY90')).to.be.null;
                expect(Parser.cfToBirthDate()).to.be.null;
            });
        });
    });
};