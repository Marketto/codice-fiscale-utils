import { expect } from '../utils';
import Validator from '../../src/validator';

describe('cfName', () => {
    describe('Generic Validator', () => {
        const cfNameValidator = Validator.cfName();
        it ('Should validate cf name KST', () => {
            cfNameValidator.test('KST').should.be.ok;
        });
        it ('Should validate cf name KSE', () => {
            cfNameValidator.test('KSE').should.be.ok;
        });
        it ('Should validate cf name KAO', () => {
            cfNameValidator.test('KAO').should.be.ok;
        });
        it ('Should validate cf name NIX', () => {
            cfNameValidator.test('NIX').should.be.ok;
        });
        it ('Should validate cf name NIK', () => {
            cfNameValidator.test('NIK').should.not.be.ok;
        });
        it ('Should validate cf name UAO', () => {
            cfNameValidator.test('UAO').should.be.ok;
        });
        it ('Should validate cf name UIX', () => {
            cfNameValidator.test('UIX').should.be.ok;
        });
        it ('Should validate cf name UXX', () => {
            cfNameValidator.test('UXX').should.not.be.ok;
        });
        it ('Should validate cf name UIK', () => {
            cfNameValidator.test('UIK').should.not.be.ok;
        });
        it ('Should validate cf name ASQ', () => {
            cfNameValidator.test('ASQ').should.not.be.ok;
        });
        it ('Should validate cf name ASX', () => {
            cfNameValidator.test('ASX').should.not.be.ok;
        });
        it ('Should validate cf name UXI', () => {
            cfNameValidator.test('UXI').should.not.be.ok;
        });
        it ('Should validate cf name UXK', () => {
            cfNameValidator.test('UXK').should.not.be.ok;
        });
    });
    describe('Specific validator', () => {
        it ('Should validate cf name DNQ for Dominique', () => {
            Validator.cfName('Dominique').test('DNQ').should.be.ok;
        });
        it ('Should validate cf name GNN for Giovanni', () => {
            Validator.cfName('Giovanni').test('GNN').should.be.ok;
        });
        it ('Should validate cf name GNN for Gianni', () => {
            Validator.cfName('Gianni').test('GNN').should.be.ok;
        });
        it ('Should validate cf name GPL for Gian Paolo', () => {
            Validator.cfName('Gian Paolo').test('GPL').should.be.ok;
        });
        it ('Should not validate cf name GNP for Gian Paolo', () => {
            Validator.cfName('Gian Paolo').test('GNP').should.be.false;
        });
        it ('Should validate cf name MRK for Mark', () => {
            Validator.cfName('Mark').test('MRK').should.be.ok;
        });
        it ('Should validate cf name LXA for Alex', () => {
            Validator.cfName('Alex').test('LXA').should.be.ok;
        });
        it ('Should validate cf name AIE for Aieie', () => {
            Validator.cfName('Aieie').test('AIE').should.be.ok;
        });
        it ('Should validate cf name AIX for Ai', () => {
            Validator.cfName('Ai').test('AIX').should.be.ok;
        });
        it ('Should validate cf name UXX for U', () => {
            Validator.cfName('U').test('UXX').should.not.be.ok;
        });
        it ('Should throw error for cd surname with special chars', () => {
            expect(() => Validator.cfName('@ieie')).to.throw('[Validator.cfName] Provided name is not valid, only letters, diacritics and apostrophe allowed');
        });
    });
});