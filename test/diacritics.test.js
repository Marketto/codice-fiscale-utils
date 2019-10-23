import chai from 'chai';
import chaiThings from 'chai-things';
chai.use(chaiThings);
chai.should();
import Diacritics from '../src/diacritics';

describe('CodiceFiscaleUtils:Diacritics', () => {
    describe('Converter', () => {
        it('Proxy should return valid object', () => {
            Diacritics.should.be.ok;
        });
        it('Should convert diacritics', () => {
            Diacritics['à'].should.be.equal('a');
            Diacritics['è'].should.be.equal('e');
            Diacritics['ç'].should.be.equal('c');
            Diacritics['ù'].should.be.equal('u');
        });
        it('Should return normal letters', () => {
            Diacritics['a'].should.be.equal('a');
            Diacritics['e'].should.be.equal('e');
            Diacritics['z'].should.be.equal('z');
            Diacritics['l'].should.be.equal('l');
        });
    });
    describe('Validator', () => {
        it('Proxy should map native properties and methods', () => {
            Diacritics.validator.hasOwnProperty.should.be.a('function');
        });
        it('Should validate sensitive diacritics', () => {
            Diacritics.validator['a'].test('à').should.be.ok;
            Diacritics.validator['e'].test('è').should.be.ok;
            Diacritics.validator['e'].test('é').should.be.ok;
            Diacritics.validator['i'].test('ì').should.be.ok;
            Diacritics.validator['o'].test('ò').should.be.ok;
            Diacritics.validator['u'].test('ù').should.be.ok;
        });
        it('Should not validate insensitive diacritics', () => {
            Diacritics.validator['A'].test('à').should.be.false;
            Diacritics.validator['E'].test('è').should.be.false;
            Diacritics.validator['E'].test('é').should.be.false;
            Diacritics.validator['I'].test('ì').should.be.false;
            Diacritics.validator['O'].test('ò').should.be.false;
            Diacritics.validator['U'].test('ù').should.be.false;
        });
    });

    describe('InsensitiveValidator', () => {
        it('Proxy should map native properties and methods', () => {
            Diacritics.insensitiveValidator.hasOwnProperty.should.be.a('function');
        });
        it('Should validate insensitive diacritics', () => {
            Diacritics.insensitiveValidator['a'].test('à').should.be.ok;
            Diacritics.insensitiveValidator['E'].test('è').should.be.ok;
            Diacritics.insensitiveValidator['e'].test('é').should.be.ok;
            Diacritics.insensitiveValidator['I'].test('ì').should.be.ok;
            Diacritics.insensitiveValidator['o'].test('ò').should.be.ok;
            Diacritics.insensitiveValidator['U'].test('ù').should.be.ok;
        });
    });
});