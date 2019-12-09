import { expect } from '../utils';
import Parser from '../../src/parser';

export default async () => {
    describe('cfToName', () => {
        describe('Uppercase', () => {
            it ('Should return W*Y*Z*', () => {
                Parser.cfToName('ZZZWYZ').should.be.equal('W*Y*Z*');
            });
            it ('Should return WA*Y*', () => {
                Parser.cfToName('ZZZWYA').should.be.equal('WA*Y*');
            });
            it ('Should return WAE*', () => {
                Parser.cfToName('ZZZWAE').should.be.equal('WAE*');
            });
            it ('Should return AEI*', () => {
                Parser.cfToName('ZZZAEI').should.be.equal('AEI*');
            });
            it ('Should return AE', () => {
                Parser.cfToName('ZZZAEX').should.be.equal('AE');
            });
        });
        describe('Lowercase', () => {
            it ('Should return K*N*T*', () => {
                Parser.cfToName('qqqknt').should.be.equal('k*n*t*');
            });
            it ('Should return KO*T*', () => {
                Parser.cfToName('qqqkto').should.be.equal('ko*t*');
            });
            it ('Should return RIO*', () => {
                Parser.cfToName('qqqrio').should.be.equal('rio*');
            });
            it ('Should return UAU*', () => {
                Parser.cfToName('qqquau').should.be.equal('uau*');
            });
            it ('Should return OO', () => {
                Parser.cfToName('qqqoox').should.be.equal('oo');
            });
        });
        describe('Invalid', () => {
            it('Should return null for irregular cf', () => {
                expect(Parser.cfToName('ZZZKAZ')).to.be.null;
                expect(Parser.cfToName('ZZZKA')).to.be.null;
                expect(Parser.cfToName('ZZZ')).to.be.null;
                expect(Parser.cfToName()).to.be.null;
            });
        });
    });
};