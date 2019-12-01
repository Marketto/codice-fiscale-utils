import { expect } from '../utils';
import Parser from '../../src/parser';

describe('cfToBirthMonth', () => {
    describe('Uppercase', () => {
        it('Should return the month', () => {
            Parser.cfToBirthMonth('XXXYYY92C').should.be.equal(2);
        });
    });
    describe('Lowercase', () => {
        it('Should return the month', () => {
            Parser.cfToBirthMonth('xxxyyy92c').should.be.equal(2);
        });
    });
    describe('Invalid', () => {
        it('Should return null', () => {
            expect(Parser.cfToBirthDate('XXXYYY90J')).to.be.null;
            expect(Parser.cfToBirthDate('XXXYYY90')).to.be.null;
            expect(Parser.cfToBirthDate()).to.be.null;
        });
    });
});