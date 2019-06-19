const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Validator', () => {
    const CodiceFiscaleUtilsValidator = require('../lib/validator');
    describe('methods', () => {
        describe('cfSurname', () => {
            describe('Generic Validator', () => {
                it ('Should validate KST', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('KST').should.be.ok;
                });
                it ('Should validate KSE', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('KSE').should.be.ok;
                });
                it ('Should validate KAO', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('KAO').should.be.ok;
                });
                it ('Should validate NIX', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('NIX').should.be.ok;
                });
                it ('Should validate NIK', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('NIK').should.not.be.ok;
                });
                it ('Should validate UAO', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('UAO').should.be.ok;
                });
                it ('Should validate UIX', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('UIX').should.be.ok;
                });
                it ('Should validate UXX', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('UXX').should.be.ok;
                });
                it ('Should validate UIK', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('UIK').should.not.be.ok;
                });
                it ('Should validate ASQ', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('ASQ').should.not.be.ok;
                });
                it ('Should validate ASX', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('ASX').should.not.be.ok;
                });
                it ('Should validate UXI', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('UXI').should.not.be.ok;
                });
                it ('Should validate UXK', () => {
                    CodiceFiscaleUtilsValidator.cfSurname().test('UXK').should.not.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate MRC for Marco', () => {
                    CodiceFiscaleUtilsValidator.cfSurname('Marco').test('MRC').should.be.ok;
                });
                it ('Should validate LXA for Alex', () => {
                    CodiceFiscaleUtilsValidator.cfSurname('Alex').test('LXA').should.be.ok;
                });
                it ('Should validate AIE for Aieie', () => {
                    CodiceFiscaleUtilsValidator.cfSurname('Aieie').test('AIE').should.be.ok;
                });
                it ('Should validate AIX for Ai', () => {
                    CodiceFiscaleUtilsValidator.cfSurname('Ai').test('AIX').should.be.ok;
                });
                it ('Should validate UXX for U', () => {
                    CodiceFiscaleUtilsValidator.cfSurname('U').test('UXX').should.be.ok;
                });
            });
        });

    });
});