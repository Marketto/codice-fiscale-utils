import { expect } from '../utils';
import Parser from '../../src/parser';

describe('cfToSurname', () => {
    describe('Uppercase', () => {
        it ('Should return W*Y*Z*', () => {
            Parser.cfToSurname('WYZ').should.be.equal('W*Y*Z*');
        });
        it ('Should return WA*Y*', () => {
            Parser.cfToSurname('WYA').should.be.equal('WA*Y*');
        });
        it ('Should return WAE*', () => {
            Parser.cfToSurname('WAE').should.be.equal('WAE*');
        });
        it ('Should return AEI*', () => {
            Parser.cfToSurname('AEI').should.be.equal('AEI*');
        });
        it ('Should return AE', () => {
            Parser.cfToSurname('AEX').should.be.equal('AE');
        });
    });
    describe('Lowercase', () => {
        it ('Should return K*N*T*', () => {
            Parser.cfToSurname('knt').should.be.equal('k*n*t*');
        });
        it ('Should return KO*T*', () => {
            Parser.cfToSurname('kto').should.be.equal('ko*t*');
        });
        it ('Should return RIO*', () => {
            Parser.cfToSurname('rio').should.be.equal('rio*');
        });
        it ('Should return UAU*', () => {
            Parser.cfToSurname('uau').should.be.equal('uau*');
        });
        it ('Should return OO', () => {
            Parser.cfToSurname('oox').should.be.equal('oo');
        });
    });
    describe('Invalid', () => {
        //Invalid
        it('Should return null for cfToSurname strings different from 3 chars, vowel between consonants or undefined', () => {
            expect(Parser.cfToSurname('KAZ')).to.be.null;
            expect(Parser.cfToSurname('KA')).to.be.null;
            expect(Parser.cfToSurname()).to.be.null;
        });
    });
});