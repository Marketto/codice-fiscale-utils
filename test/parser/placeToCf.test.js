import { expect } from '../utils';
import Parser from '../../src/parser';

export default async () => {
    describe('placeToCf', () => {
        it('Should return A944 for Bologna', () => {
            Parser.placeToCf('Bologna').should.be.equal('A944');
        });
        it('Should return Z127 for Polonia', () => {
            Parser.placeToCf('Polonia').should.be.equal('Z127');
        });
        it('Should return A944 for Bologna in 2000', () => {
            Parser.placeToCf([2000], 'Bologna').should.be.equal('A944');
        });
        it('Should return Z135 for Unione Sovietica in 1947', () => {
            Parser.placeToCf([1947], 'Unione Sovietica').should.be.equal('Z135');
        });
        it('Should not return code for Unione Sovietica in 1998', () => {
            expect(Parser.placeToCf([1998], 'Unione Sovietica')).to.be.not.ok;
        });
    });
};