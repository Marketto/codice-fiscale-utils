const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Validator', () => {
    const Validator = require('../src/validator');
    describe('methods', () => {
        describe('cfSurname', () => {
            describe('Generic Validator', () => {
                it ('Should validate KST', () => {
                    Validator.cfSurname().test('KST').should.be.ok;
                });
                it ('Should validate KSE', () => {
                    Validator.cfSurname().test('KSE').should.be.ok;
                });
                it ('Should validate KAO', () => {
                    Validator.cfSurname().test('KAO').should.be.ok;
                });
                it ('Should validate NIX', () => {
                    Validator.cfSurname().test('NIX').should.be.ok;
                });
                it ('Should validate NIK', () => {
                    Validator.cfSurname().test('NIK').should.not.be.ok;
                });
                it ('Should validate UAO', () => {
                    Validator.cfSurname().test('UAO').should.be.ok;
                });
                it ('Should validate UIX', () => {
                    Validator.cfSurname().test('UIX').should.be.ok;
                });
                it ('Should validate UXX', () => {
                    Validator.cfSurname().test('UXX').should.not.be.ok;
                });
                it ('Should validate UIK', () => {
                    Validator.cfSurname().test('UIK').should.not.be.ok;
                });
                it ('Should validate ASQ', () => {
                    Validator.cfSurname().test('ASQ').should.not.be.ok;
                });
                it ('Should validate ASX', () => {
                    Validator.cfSurname().test('ASX').should.not.be.ok;
                });
                it ('Should validate UXI', () => {
                    Validator.cfSurname().test('UXI').should.not.be.ok;
                });
                it ('Should validate UXK', () => {
                    Validator.cfSurname().test('UXK').should.not.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate MRC for Marco', () => {
                    Validator.cfSurname('Marco').test('MRC').should.be.ok;
                });
                it ('Should validate LXA for Alex', () => {
                    Validator.cfSurname('Alex').test('LXA').should.be.ok;
                });
                it ('Should validate AIE for Aieie', () => {
                    Validator.cfSurname('Aieie').test('AIE').should.be.ok;
                });
                it ('Should validate AIX for Ai', () => {
                    Validator.cfSurname('Ai').test('AIX').should.be.ok;
                });
                it ('Should validate UXX for U', () => {
                    Validator.cfSurname('U').test('UXX').should.not.be.ok;
                });
            });
        });

    });
});