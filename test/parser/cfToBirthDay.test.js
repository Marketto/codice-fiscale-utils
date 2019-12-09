import { expect } from '../utils';
import Parser from '../../src/parser';

export default async () => {
    describe('cfToBirthDay', () => {
        describe('Uppercase', () => {
            it('Should return 12 (M)', () => {
                Parser.cfToBirthDay('XXXYYY90B12').should.be.equal(12);
            });
            it('Should return 31 (F)', () => {
                Parser.cfToBirthDay('XXXYYY90B71').should.be.equal(31);
            });
        });
        describe('Lowercase', () => {
            it('Should return 12 (M)', () => {
                Parser.cfToBirthDay('XXXYYY90B12').should.be.equal(12);
            });
            it('Should return 31 (F)', () => {
                Parser.cfToBirthDay('XXXYYY90B71').should.be.equal(31);
            });
        });
        describe('Invalid', () => {
            it('Should return null', () => {
                expect(Parser.cfToBirthDay('XXXYYY90B00')).to.be.null;
                expect(Parser.cfToBirthDay('XXXYYY90B35')).to.be.null;
                expect(Parser.cfToBirthDay('XXXYYY90B74')).to.be.null;
                expect(Parser.cfToBirthDay('XXXYYY90')).to.be.null;
                expect(Parser.cfToBirthDay()).to.be.null;
            });
        });
    });
};