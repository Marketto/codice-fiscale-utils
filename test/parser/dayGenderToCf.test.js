import { expect } from '../utils';
import Parser from '../../src/parser';

export default async () => {
    describe('dayGenderToCf', () => {
        it('Should return CF year part from 1 or 2 digit number and Male const', () => {
            Parser.dayGenderToCf(3, 'M').should.be.equal('03');
            Parser.dayGenderToCf(25, 'M').should.be.equal('25');
        });
        it('Should return CF year part from 1 or 2 digit number and Female const', () => {
            Parser.dayGenderToCf(7, 'F').should.be.equal('47');
            Parser.dayGenderToCf(31, 'F').should.be.equal('71');
        });
        it('Should return null for anything different from 1,2 or 4 digits', () => {
            expect(Parser.dayGenderToCf('', 'M')).to.be.null;
            expect(Parser.dayGenderToCf(0, 'F')).to.be.null;
            expect(Parser.dayGenderToCf(50, 'M')).to.be.null;
            expect(Parser.dayGenderToCf('@à', 'F')).to.be.null;
            expect(Parser.dayGenderToCf(5, 'X')).to.be.null;
        });
    });
};