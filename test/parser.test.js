const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Parser', () => {
    const CodiceFiscaleUtilsParser = require('../src/parser');

    describe('constants', () => {
        describe('OMOCODE_BITMAP', () => {
            const omocodeBitmap = CodiceFiscaleUtilsParser.OMOCODE_BITMAP;
            it('Should be off for Surname part', () => {
                //Surname
                expect(omocodeBitmap & 1).not.to.be.ok;
                expect(omocodeBitmap & 2).not.to.be.ok;
                expect(omocodeBitmap & 4).not.to.be.ok;
            });
            it('Should be off for Name part', () => {
                //Name
                expect(omocodeBitmap & 8).not.to.be.ok;
                expect(omocodeBitmap & 16).not.to.be.ok;
                expect(omocodeBitmap & 32).not.to.be.ok;
            });
            it('Should be on for Birth Year part', () => {
                //Birth year
                expect(omocodeBitmap & 64).to.be.ok;
                expect(omocodeBitmap & 128).to.be.ok;
            });
            it('Should be off for Birth Month part', () => {
                //Birth month
                expect(omocodeBitmap & 256).not.to.be.ok;
            });
            it('Should be on for Birth Day part', () => {
                //Birth day
                expect(omocodeBitmap & 512).to.be.ok;
                expect(omocodeBitmap & 1024).to.be.ok;
            });
            it('Should be off for first char and on for the rest 3 char codes of the Birth place part', () => {
                //Birth place code
                expect(omocodeBitmap & 2048).not.to.be.ok;
                expect(omocodeBitmap & 4096).to.be.ok;
                expect(omocodeBitmap & 8192).to.be.ok;
                expect(omocodeBitmap & 16384).to.be.ok;
            });
            it('Should be off for Check Char part', () => {
                //CRC
                expect(omocodeBitmap & 32768).not.to.be.ok;
            });
        });
    });

    describe('methods', () => {
        describe('cfDeomocode', () => {
            it('Should decode KKALMNVMAPLB331Z to KKALMN91A30B331Z', () => {
                CodiceFiscaleUtilsParser.cfDeomocode('KKALMNVMAPLB331Z').should.be.equal('KKALMN91A30B331Z');
            });
        });

        describe('cfToSurname', () => {
            it ('Should return W*Y*Z*', () => {
                CodiceFiscaleUtilsParser.cfToSurname('WYZ').should.be.equal('W*Y*Z*');
            });
            it ('Should return WA*Y*', () => {
                CodiceFiscaleUtilsParser.cfToSurname('WYA').should.be.equal('WA*Y*');
            });
            it ('Should return WAE*', () => {
                CodiceFiscaleUtilsParser.cfToSurname('WAE').should.be.equal('WAE*');
            });
            it ('Should return AEI*', () => {
                CodiceFiscaleUtilsParser.cfToSurname('AEI').should.be.equal('AEI*');
            });
            it ('Should return AE', () => {
                CodiceFiscaleUtilsParser.cfToSurname('AEX').should.be.equal('AE');
            });
            it('Should return null', () => {
                expect(CodiceFiscaleUtilsParser.cfToSurname('KAZ')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToSurname('KA')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToSurname()).to.be.null;
            });
        });

        describe('cfToName', () => {
            it ('Should return W*Y*Z*', () => {
                CodiceFiscaleUtilsParser.cfToName('ZZZWYZ').should.be.equal('W*Y*Z*');
            });
            it ('Should return WA*Y*', () => {
                CodiceFiscaleUtilsParser.cfToName('ZZZWYA').should.be.equal('WA*Y*');
            });
            it ('Should return WAE*', () => {
                CodiceFiscaleUtilsParser.cfToName('ZZZWAE').should.be.equal('WAE*');
            });
            it ('Should return AEI*', () => {
                CodiceFiscaleUtilsParser.cfToName('ZZZAEI').should.be.equal('AEI*');
            });
            it ('Should return AE', () => {
                CodiceFiscaleUtilsParser.cfToName('ZZZAEX').should.be.equal('AE');
            });
            it('Should return null', () => {
                expect(CodiceFiscaleUtilsParser.cfToName('ZZZKAZ')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToName('ZZZKA')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToName('ZZZ')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToName()).to.be.null;
            });
        });

        describe('cfToGender', () => {
            it('Should return M', () => {
                CodiceFiscaleUtilsParser.cfToGender('XXXYYY90B20').should.be.equal('M');
            });
            it('Should return F', () => {
                CodiceFiscaleUtilsParser.cfToGender('XXXYYY90B63').should.be.equal('F');
            });
            it('Should return null', () => {
                expect(CodiceFiscaleUtilsParser.cfToGender('XXXYYY90')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToGender()).to.be.null;
            });
        });

        describe('cfToBirthDay', () => {
            it('Should return 12 (M)', () => {
                CodiceFiscaleUtilsParser.cfToBirthDay('XXXYYY90B12').should.be.equal(12);
            });
            it('Should return 31 (F)', () => {
                CodiceFiscaleUtilsParser.cfToBirthDay('XXXYYY90B71').should.be.equal(31);
            });
            it('Should return null', () => {
                expect(CodiceFiscaleUtilsParser.cfToBirthDay('XXXYYY90B00')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToBirthDay('XXXYYY90B35')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToBirthDay('XXXYYY90B74')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToBirthDay('XXXYYY90')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToBirthDay()).to.be.null;
            });
        });

        describe('cfToBirthMonth', () => {
            it('Should return the month', () => {
                CodiceFiscaleUtilsParser.cfToBirthMonth('XXXYYY92C').should.be.equal(2);
            });
            it('Should return null', () => {
                expect(CodiceFiscaleUtilsParser.cfToBirthDate('XXXYYY90J')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToBirthDate('XXXYYY90')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToBirthDate()).to.be.null;
            });
        });

        describe('cfToBirthYear', () => {
            it('Should return the year', () => {
                CodiceFiscaleUtilsParser.cfToBirthYear('XXXYYY92').should.be.equal(1992);
            });
            it('Should return 20XX up to current year', () => {
                const currentYear = (new Date()).getFullYear();
                CodiceFiscaleUtilsParser.cfToBirthYear(`XXXYYY${currentYear.toString().substr(-2)}`).should.be.equal(currentYear);
            });
            it('Should return 19XX from next year', () => {
                const ninetynineYearsAgo = (new Date()).getFullYear() -99;
                CodiceFiscaleUtilsParser.cfToBirthYear(`XXXYYY${ninetynineYearsAgo.toString().substr(-2)}`).should.be.equal(ninetynineYearsAgo);
            });
            it('Should return null', () => {
                expect(CodiceFiscaleUtilsParser.cfToBirthDate('XXXYYY')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToBirthDate()).to.be.null;
            });
        });

        describe('cfToBirthDate', () => {
            it('Should return a Date (Male)', () => {
                const bdt = CodiceFiscaleUtilsParser.cfToBirthDate('XXXYYY92B20');
                bdt.toJSON().should.be.equal('1992-02-20');
                bdt.getDate().should.be.equal(20);
                bdt.getMonth().should.be.equal(1);
            });
            it('Should return a Date (Female)', () => {
                const bdt = CodiceFiscaleUtilsParser.cfToBirthDate('XXXYYY81A63');
                bdt.toISOString().should.be.equal('1981-01-23');
                bdt.getDate().should.be.equal(23);
                bdt.getMonth().should.be.equal(0);
            });
            it('Should return null', () => {
                expect(CodiceFiscaleUtilsParser.cfToBirthDate('XXXYYY90')).to.be.null;
                expect(CodiceFiscaleUtilsParser.cfToBirthDate()).to.be.null;
            });
        });
    });
});