import { expect } from '../utils';
import Validator from '../../src/validator';

describe('cfPlace', () => {
    describe('Generic Validator', () => {
        const cfDateValidator = Validator.cfPlace();
        it ('Should validate A662', () => {
            cfDateValidator.test('A662').should.be.ok;
        });
        it ('Should validate H501', () => {
            cfDateValidator.test('H501').should.be.ok;
        });
        it ('Should validate any providing date', () => {
            Validator.cfPlace('1941-01-16').test('H501').should.be.ok;
        });
    });
    describe('Specific validator', () => {
        it ('Should validate A662 for Bari', () => {
            Validator.cfPlace('Bari').test('A662').should.be.ok;
        });
        it ('Should validate H501 for Roma', () => {
            Validator.cfPlace('Roma').test('H501').should.be.ok;
        });
        it ('Should validate D620 for Fiume in 1933', () => {
            Validator.cfPlace([1933], 'Fiume').test('D620').should.be.ok;
        });
        it ('Should not validate H501 for Bari', () => {
            Validator.cfPlace('Bari').test('H501').should.be.false;
        });
        it ('Should not validate A662 for Roma', () => {
            Validator.cfPlace('Roma').test('A662').should.be.false;
        });
        it ('Should not validate D620 for Fiume in 2000', () => {
            Validator.cfPlace([2000], 'Fiume').test('D620').should.be.false;
        });
    });
});