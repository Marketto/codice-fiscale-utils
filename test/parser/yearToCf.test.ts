import { expect } from '../utils';
import Parser from '../../src/parser';

export default async () => {
    describe('yearToCf', () => {
        it('Should return CF year part from 4 digit string', () => {
            Parser.yearToCf('1990').should.be.equal('90');
            Parser.yearToCf('2001').should.be.equal('01');
            Parser.yearToCf('1900').should.be.equal('00');
            Parser.yearToCf('2000').should.be.equal('00');
        });
        it('Should return CF year part from 4 digit number', () => {
            Parser.yearToCf(1992).should.be.equal('92');
            Parser.yearToCf(2010).should.be.equal('10');
        });
        it('Should work with 2 digit string', () => {
            Parser.yearToCf('13').should.be.equal('13');
            Parser.yearToCf('02').should.be.equal('02');
        });
        it('Should work with numbers below 100', () => {
            Parser.yearToCf(7).should.be.equal('07');
            Parser.yearToCf(83).should.be.equal('83');
        });
        it('Should return null for anything different from 1,2 or 4 digits', () => {
            expect(Parser.yearToCf('')).to.be.null;
            expect(Parser.yearToCf('105')).to.be.null;
            expect(Parser.yearToCf('@à')).to.be.null;
        });
    });
};