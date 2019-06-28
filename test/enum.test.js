const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Enums', () => {
    describe('Gender', () => {
        const Gender = require('../src/gender.enum');
        describe('gender.toArray()', () => {
            it('Should return ["M", "F"]', () => {
                Gender.toArray().should.be.an('array');
                Gender.toArray().should.include('M');
                Gender.toArray().should.include('F');
            });
        });
        it('Should return 0', () => {
            Gender.M.should.be.equal(0);
        });
        it('Should return M', () => {
            for (let i = 0; i<32; i++){
                Gender[i].should.be.equal('M');
            }
        });
        it('Should return 40', () => {
            Gender.F.should.be.equal(40);
        });
        it('Should return F', () => {
            for (let i = 40; i<72; i++){
                Gender[i].should.be.equal('F');
            }
        });
        it('Should return undefined', () => {
            expect(Gender.X).to.be.undefined;
            for (let i = -7; i<0; i++){
                expect(Gender[i]).to.be.undefined;
            }
            for (let i = 32; i<40; i++){
                expect(Gender[i]).to.be.undefined;
            }
            for (let i = 72; i<90; i++){
                expect(Gender[i]).to.be.undefined;
            }
        });
    });

    describe('BirthMonth', () => {
        const BirthMonth = require('../src/birthMonth.enum');
        describe('birthMonth.toArray()', () => {
            it('Should return all month codes', () => {
                BirthMonth.toArray().should.be.an('array');
                BirthMonth.toArray().length.should.be.equal(12);
            });
        });
        it('Should return month numbers for proper codes', () => {
            BirthMonth.A.should.be.equal(0);
            BirthMonth.B.should.be.equal(1);
            BirthMonth.C.should.be.equal(2);
            BirthMonth.D.should.be.equal(3);
            BirthMonth.E.should.be.equal(4);
            BirthMonth.H.should.be.equal(5);
            BirthMonth.L.should.be.equal(6);
            BirthMonth.M.should.be.equal(7);
            BirthMonth.P.should.be.equal(8);
            BirthMonth.R.should.be.equal(9);
            BirthMonth.S.should.be.equal(10);
            BirthMonth.T.should.be.equal(11);
        });
        it('Should return month code for the given month number', () => {
            BirthMonth[0].should.be.equal('A');
            BirthMonth[1].should.be.equal('B');
            BirthMonth[2].should.be.equal('C');
            BirthMonth[3].should.be.equal('D');
            BirthMonth[4].should.be.equal('E');
            BirthMonth[5].should.be.equal('H');
            BirthMonth[6].should.be.equal('L');
            BirthMonth[7].should.be.equal('M');
            BirthMonth[8].should.be.equal('P');
            BirthMonth[9].should.be.equal('R');
            BirthMonth[10].should.be.equal('S');
            BirthMonth[11].should.be.equal('T');
        });
        it('Should return undefined', () => {
            expect(BirthMonth[12]).to.be.undefined;
            expect(BirthMonth.F).to.be.undefined;
            expect(BirthMonth.G).to.be.undefined;
            expect(BirthMonth.I).to.be.undefined;
            expect(BirthMonth.J).to.be.undefined;
            expect(BirthMonth.K).to.be.undefined;
            expect(BirthMonth.Z).to.be.undefined;
        });
    });

    describe('Omocode', () => {
        const Omocode = require('../src/omocode.enum');
        describe('omocode.toArray()', () => {
            it('Should return all literal omocodes', () => {
                Omocode.toArray().should.be.an('array');
                Omocode.toArray().length.should.be.equal(10);
            });
        });
        it('Should return numeric representation for proper code', () => {
            Omocode.L.should.be.equal(0);
            Omocode.M.should.be.equal(1);
            Omocode.N.should.be.equal(2);
            Omocode.P.should.be.equal(3);
            Omocode.Q.should.be.equal(4);
            Omocode.R.should.be.equal(5);
            Omocode.S.should.be.equal(6);
            Omocode.T.should.be.equal(7);
            Omocode.U.should.be.equal(8);
            Omocode.V.should.be.equal(9);
        });
        it('Should return letter representation for the given number', () => {
            Omocode[0].should.be.equal('L');
            Omocode[1].should.be.equal('M');
            Omocode[2].should.be.equal('N');
            Omocode[3].should.be.equal('P');
            Omocode[4].should.be.equal('Q');
            Omocode[5].should.be.equal('R');
            Omocode[6].should.be.equal('S');
            Omocode[7].should.be.equal('T');
            Omocode[8].should.be.equal('U');
            Omocode[9].should.be.equal('V');
        });
        it('Should return undefined', () => {
            expect(Omocode[10]).to.be.undefined;
            expect(Omocode.B).to.be.undefined;
            expect(Omocode.Z).to.be.undefined;
            expect(Omocode.D).to.be.undefined;
            expect(Omocode.K).to.be.undefined;
            expect(Omocode.G).to.be.undefined;
            expect(Omocode.F).to.be.undefined;
        });
    });

    describe('Belfiore', () => {
        const Belfiore = require('../src/belfiore.enum');
        describe('Belfiore[belfioreCode]', () => {
            it('Should return Rome for H501', () => {
                Belfiore.H501.name.should.be.equal('ROMA');
            });
        });
        describe('Belfiore.cities', () => {
            it('Should return cities by RM province', () => {
                const rmCities = Belfiore.cities('RM');
                rmCities.length.should.be.ok;
                rmCities.some(({province}) => province !== 'RM').should.be.false;
            });
        });
    });
});