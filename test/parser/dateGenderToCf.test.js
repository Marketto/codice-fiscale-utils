import { expect } from '../utils';
import Parser from '../../src/parser';

describe('dateGenderToCf', () => {
    it('Should return CF date part from year, month, day and gender', () => {
        Parser.dateGenderToCf([2016, 3, 23], 'M').should.be.equal('16D23');
        Parser.dateGenderToCf([1988, 7, 3], 'F').should.be.equal('88M43');
    });
    it('Should return CF date part from year, month and gender', () => {
        Parser.dateGenderToCf([1950, 3], 'M').should.be.equal('50D01');
    });
    it('Should return CF date part from year and gender', () => {
        Parser.dateGenderToCf([1950], 'F').should.be.equal('50A41');
    });
    it('Should return CF date part from iso8601 date string and gender', () => {
        Parser.dateGenderToCf('1987-09-22', 'F').should.be.equal('87P62');
    });
    it('Should return CF date part from a Date and gender', () => {
        Parser.dateGenderToCf(new Date(2016, 2, 23, 12), 'M').should.be.equal('16C23');
        Parser.dateGenderToCf(new Date(1988, 7, 3, 12), 'F').should.be.equal('88M43');
    });
    it('Should return null for wrong dates and/or gender', () => {
        expect(Parser.dateGenderToCf('', 'M')).to.be.null;
        expect(Parser.dateGenderToCf(0, 'F')).to.be.null;
        expect(Parser.dateGenderToCf([1990, 21, 12], 'F')).to.be.null;
        expect(Parser.dateGenderToCf([1996, 11, 33], 'M')).to.be.null;
        expect(Parser.dateGenderToCf([2016, 3, 23], 'X')).to.be.null;
    });
});