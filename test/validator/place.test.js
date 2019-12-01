import { expect } from '../utils';
import Validator from '../../src/validator';

describe('place', () => {
    describe('Generic Validator', () => {
        const placeValidator = Validator.place();
        it('Should validate Roma', () => {
            placeValidator.test('Roma').should.be.ok;
        });
        it('Should validate Francia', () => {
            placeValidator.test('Francia').should.be.ok;
        });
    });
    describe('Specific validator', () => {
        it('Should validate Bari for XYZXYZ92C16A662', () => {
            Validator.place('XYZXYZ92C16A662').test('Bari').should.be.ok;
        });
        it('Should validate Roma for XYZXYZ88H61H501', () => {
            Validator.place('XYZXYZ88H61H501').test('Roma').should.be.ok;
        });
        it('Should validate ROMA for XYZXYZ88H61H501', () => {
            Validator.place('XYZXYZ88H61H501').test('ROMA').should.be.ok;
        });

        it('Should not validate Bologna for XYZXYZ12S30A662', () => {
            Validator.place('XYZXYZ12S30A662').test('Bologna').should.be.false;
        });
    });
});