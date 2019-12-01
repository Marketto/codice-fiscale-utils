import { expect } from '../utils';
import Validator from '../../src/validator';

describe('name', () => {
    describe('Generic Validator', () => {
        const nameValidator = Validator.name();
        it ('Should validate name Kristersen', () => {
            nameValidator.test('Kristersen').should.be.ok;
        });
        it ('Should validate name Rossi', () => {
            nameValidator.test('Rossi').should.be.ok;
        });
        it ('Should validate name Ao', () => {
            nameValidator.test('Ao').should.be.ok;
        });
        it ('Should validate name Tést', () => {
            nameValidator.test('Tést').should.be.ok;
        });
    });
    describe('Specific validator', () => {
        it ('Should validate name Marco for XYZMRC', () => {
            Validator.name('XYZMRC').test('Marco').should.be.ok;
        });
        it ('Should validate name Alex for XYZLXA', () => {
            Validator.name('XYZLXA').test('Alex').should.be.ok;
        });
        it ('Should validate name Aieie for XYZAIE', () => {
            Validator.name('XYZAIE').test('Aieie').should.be.ok;
        });
        it ('Should validate name Ai for XYZAIX', () => {
            Validator.name('XYZAIX').test('Ai').should.be.ok;
        });
        it ('Should validate name U for XYZUXX', () => {
            Validator.name('XYZUXX').test('U').should.be.ok;
        });
        it ('Should validate name Vàlidàtòr for XYZVLD', () => {
            Validator.name('XYZVDT').test('Vàlidàtòr').should.be.ok;
        });
        it ('Should not validate name Air for XYZAIX', () => {
            Validator.name('XYZAIX').test('Air').should.be.false;
        });
    });
});