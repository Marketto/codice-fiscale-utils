import { expect } from '../utils';
import Parser from '../../src/parser';

export default async () => {
    describe('nameToCf', () => {
        it('Should return CF name part', () => {
            Parser.nameToCf('Dominique').should.be.equal('DNQ');
            Parser.nameToCf('Alexander').should.be.equal('LND');
            Parser.nameToCf('Pier Ale').should.be.equal('PRL');
            Parser.nameToCf('Mark').should.be.equal('MRK');
            Parser.nameToCf('Tom').should.be.equal('TMO');
            Parser.nameToCf('Ania').should.be.equal('NAI');
            Parser.nameToCf('No').should.be.equal('NOX');
            Parser.nameToCf('Ai').should.be.equal('AIX');
        });
        it('Should work with diacritics', () => {
            Parser.nameToCf('Olè').should.be.equal('LOE');
            Parser.nameToCf('Içi').should.be.equal('CII');
        });
        it('Should return null', () => {
            expect(Parser.nameToCf('')).to.be.null;
            expect(Parser.nameToCf('K')).to.be.null;
            expect(Parser.nameToCf('@à')).to.be.null;
        });
    });
};