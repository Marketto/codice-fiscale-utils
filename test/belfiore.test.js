const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Belfiore', () => {
    const Belfiore = require('../src/belfiore');
    describe('Belfiore.constructor', () => {
        describe('Belfiore.constructor.binaryfindIndex', () => {
            it('Should return proper index', () => {
                Belfiore.constructor.binaryfindIndex('00100200300400500600700800900a00b00c00d00e00f00g00h00i','00e').should.be.equal(13);
            });
        });
    });

    describe('Belfiore', () => {
        describe('Belfiore[belfioreCode]', () => {
            it('Should return Rome for H501', () => {
                Belfiore.H501.name.should.be.equal('ROMA');
            });
        });
        describe('Belfiore place', () => {
            it('Should return code H501 for H501', () => {
                Belfiore.H501.belfioreCode.should.be.equal('H501');
                Belfiore.H501.creationDate.getFullYear().should.be.equal(1884);
                Belfiore.H501.expirationDate.getFullYear().should.be.equal(9999);
                Belfiore.H501.province.should.be.equal('RM');
                Belfiore.H501.dataSource.should.be.an('object');
            });
        });
        describe('Belfiore.toArray()', () => {
            const belfioreList = Belfiore.toArray();
            it('Should return an Array of places', () => {
                belfioreList.should.be.a('array');
            });
            it('Should have different elements', () => {
                belfioreList[10].belfioreCode.should.be.not.equal(belfioreList[11].belfioreCode);
                belfioreList[10].name.should.be.not.equal(belfioreList[11].name);
                belfioreList[32].belfioreCode.should.be.not.equal(belfioreList[632].belfioreCode);
                belfioreList[32].name.should.be.not.equal(belfioreList[632].name);
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

    describe('Belfiore.active', () => {
        describe('Belfiore.active()[belfioreCode]', () => {
            it('Should return Bologna for A944', () => {
                Belfiore.active().A944.name.should.be.equal('BOLOGNA');
            });
            it('Should return null for D620 today', () => {
                expect(Belfiore.active().D620).to.be.not.ok;
            });
            it('Should return FIUME for D620 in 1933', () => {
                Belfiore.active([1933]).D620.name.should.be.equal('FIUME');
            });
        });
        describe('Belfiore.cities.active()', () => {
            it('Should not contains D620 (Fiume)', () => {
                const activeCities = Belfiore.cities.active();
                expect(activeCities.D620).to.be.not.ok;
            });
            it('Should contains D620 (Fiume) passing 1933 as active date', () => {
                const activeCities = Belfiore.cities.active([1933]);
                activeCities.D620.name.should.be.equal('FIUME');
            });
        });
    });
});