import { expect } from '../utils';
import Parser from '../../src/parser';

export default async () => {
    describe('surnameToCf', () => {
        it('Should return CF surname part', () => {
            Parser.surnameToCf('Rossi').should.be.equal('RSS');
            Parser.surnameToCf('Reno').should.be.equal('RNE');
            Parser.surnameToCf('Di Reno').should.be.equal('DRN');
            Parser.surnameToCf('Goia').should.be.equal('GOI');
            Parser.surnameToCf('D\'Aieie').should.be.equal('DAI');
            Parser.surnameToCf('Aieie').should.be.equal('AIE');
            Parser.surnameToCf('No').should.be.equal('NOX');
            Parser.surnameToCf('Ai').should.be.equal('AIX');
        });
        it('Should work with diacritics', () => {
            Parser.surnameToCf('Olè').should.be.equal('LOE');
            Parser.surnameToCf('Içi').should.be.equal('CII');
        });
        
        describe('Invalid surnames', () => {
            it('Should return null for empty string', () => {
                expect(Parser.surnameToCf('')).to.be.null;
            });
            it('Should return null for K', () => {
                expect(Parser.surnameToCf('K')).to.be.null;
            });
            it('Should return null for @à', () => {
                expect(Parser.surnameToCf('@à')).to.be.null;
            });
        });
    });
};