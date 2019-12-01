import { expect } from '../utils';
import Parser from '../../src/parser';

describe('cfToGender', () => {
    describe('Uppercase', () => {
        it('Should return M (Uppercase)', () => {
            Parser.cfToGender('XXXYYY90B20').should.be.equal('M');
        });
        it('Should return F (Uppercase)', () => {
            Parser.cfToGender('XXXYYY90B63').should.be.equal('F');
        });
    });
    describe('Lowercase', () => {
        it('Should return M (Lowercase)', () => {
            Parser.cfToGender('xxxyyy90b20').should.be.equal('M');
        });
        it('Should return F (Lowercase)', () => {
            Parser.cfToGender('xxxyyy90b63').should.be.equal('F');
        });
    });
    describe('Invalid', () => {
        it('Should return null', () => {
            expect(Parser.cfToGender('XXXYYY90')).to.be.null;
            expect(Parser.cfToGender()).to.be.null;
        });
    });
});