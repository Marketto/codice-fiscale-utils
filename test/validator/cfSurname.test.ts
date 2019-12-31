import { expect } from '../utils';
import Validator from '../../src/validator';

export default async () => {
    describe('cfSurname', () => {
        describe('Generic Validator', () => {
            const cfSurnameValidator = Validator.cfSurname();
            it ('Should validate cf surname KST', () => {
                cfSurnameValidator.test('KST').should.be.ok;
            });
            it ('Should validate cf surname KSE', () => {
                cfSurnameValidator.test('KSE').should.be.ok;
            });
            it ('Should validate cf surname KAO', () => {
                cfSurnameValidator.test('KAO').should.be.ok;
            });
            it ('Should validate cf surname NIX', () => {
                cfSurnameValidator.test('NIX').should.be.ok;
            });
            it ('Should validate cf surname NIK', () => {
                cfSurnameValidator.test('NIK').should.not.be.ok;
            });
            it ('Should validate cf surname UAO', () => {
                cfSurnameValidator.test('UAO').should.be.ok;
            });
            it ('Should validate cf surname UIX', () => {
                cfSurnameValidator.test('UIX').should.be.ok;
            });
            it ('Should validate cf surname UXX', () => {
                cfSurnameValidator.test('UXX').should.not.be.ok;
            });
            it ('Should validate cf surname UIK', () => {
                cfSurnameValidator.test('UIK').should.not.be.ok;
            });
            it ('Should validate cf surname ASQ', () => {
                cfSurnameValidator.test('ASQ').should.not.be.ok;
            });
            it ('Should validate cf surname ASX', () => {
                cfSurnameValidator.test('ASX').should.not.be.ok;
            });
            it ('Should validate cf surname UXI', () => {
                cfSurnameValidator.test('UXI').should.not.be.ok;
            });
            it ('Should validate cf surname UXK', () => {
                cfSurnameValidator.test('UXK').should.not.be.ok;
            });
        });
        describe('Specific validator', () => {
            it ('Should validate cf surname MRC for Marco', () => {
                Validator.cfSurname('Marco').test('MRC').should.be.ok;
            });
            it ('Should validate cf surname LXA for Alex', () => {
                Validator.cfSurname('Alex').test('LXA').should.be.ok;
            });
            it ('Should validate cf surname DLS for D\'Annunzio', () => {
                Validator.cfSurname('D\'Annunzio').test('DNN').should.be.ok;
            });
            it ('Should validate cf surname DVN for Da Vinci', () => {
                Validator.cfSurname('Da Vinci').test('DVN').should.be.ok;
            });
            it ('Should validate cf surname AIE for Aieie', () => {
                Validator.cfSurname('Aieie').test('AIE').should.be.ok;
            });
            it ('Should validate cf surname AIX for Ai', () => {
                Validator.cfSurname('Ai').test('AIX').should.be.ok;
            });
            it ('Should validate LUX for cf partial surname', () => {
                Validator.cfSurname('U').test('LUX').should.be.ok;
            });
            it ('Should throw error for cf surname with special chars', () => {
                expect(() => Validator.cfSurname('@ieie')).to.throw('[Validator.cfSurname] Provided surname is not valid, only letters, diacritics and apostrophe allowed');
            });
            it ('Should throw error for cf surname with double apostrophe', () => {
                expect(() => Validator.cfSurname('D\'\'Aje')).to.throw('[Validator.cfSurname] Provided surname is not valid, only letters, diacritics and apostrophe allowed');
            });
        });
    });
};