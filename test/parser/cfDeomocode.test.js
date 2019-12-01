import { expect } from '../utils';
import Parser from '../../src/parser';

describe('cfDeomocode', () => {
    describe('Uppercase', () => {
        it('Should decode KKALMNVMAPLB331Z to KKALMN91A30B331Z', () => {
            Parser.cfDeomocode('KKALMNVMAPLB331Z').should.be.equal('KKALMN91A30B331Z');
        });
    });
    describe('Lowercase', () => {
        it('Should decode kkalmnvmaplb331z to kkalmn91a30b331z', () => {
            Parser.cfDeomocode('kkalmnvmaplb331z').should.be.equal('kkalmn91a30b331z');
        });
    });
});