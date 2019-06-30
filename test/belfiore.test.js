const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Belfiore', () => {
    const Belfiore = require('../src/belfiore');
    describe('Belfiore', () => {
        describe('Belfiore[belfioreCode]', () => {
            it('Should return Rome for H501', () => {
                Belfiore.H501.name.should.be.equal('ROMA');
            });
        });
        describe('Belfiore.toArray()', () => {
            it('Should return an Array of places', () => {
                Belfiore.toArray().should.be.a('array');
            });
        });
        describe('Belfiore.findByName()', () => {
            it('Should return Rome', () => {
                Belfiore.findByName('Roma').name.should.be.equal('ROMA');
            });
        });
    });

    describe('Belfiore.cities', () => {
        describe('Belfiore[belfioreCode]', () => {
            it('Should return Bari for A662', () => {
                Belfiore.cities.A662.name.should.be.equal('BARI');
            });
        });
        describe('Belfiore.cities', () => {
            it('Should return cities by RM province', () => {
                const rmCities = Belfiore.cities.byProvince('RM');
                rmCities.toArray().some(({province}) => province !== 'RM').should.be.false;
            });
        });
    });
});