import { expect } from '../utils';
import Parser from '../../src/parser';

export default async () => {
    describe('monthToCf', () => {
        it('Should return month code for the given month number', () => {
            Parser.monthToCf(0).should.be.equal('A');
            Parser.monthToCf(1).should.be.equal('B');
            Parser.monthToCf(2).should.be.equal('C');
            Parser.monthToCf(3).should.be.equal('D');
            Parser.monthToCf(4).should.be.equal('E');
            Parser.monthToCf(5).should.be.equal('H');
            Parser.monthToCf(6).should.be.equal('L');
            Parser.monthToCf(7).should.be.equal('M');
            Parser.monthToCf(8).should.be.equal('P');
            Parser.monthToCf(9).should.be.equal('R');
            Parser.monthToCf(10).should.be.equal('S');
            Parser.monthToCf(11).should.be.equal('T');
        });
        it('Should return null', () => {
            expect(Parser.monthToCf(12)).to.be.null;
            expect(Parser.monthToCf('3')).to.be.null;
            expect(Parser.monthToCf('$')).to.be.null;
        });
    });
};