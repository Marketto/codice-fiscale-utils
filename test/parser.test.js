const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Parser', () => {
    const Parser = require('../src/parser');

    describe('constants', () => {
        describe('OMOCODE_BITMAP', () => {
            const omocodeBitmap = Parser.OMOCODE_BITMAP;
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

    describe('methods from CF', () => {
        describe('cfDeomocode', () => {
            it('Should decode KKALMNVMAPLB331Z to KKALMN91A30B331Z', () => {
                Parser.cfDeomocode('KKALMNVMAPLB331Z').should.be.equal('KKALMN91A30B331Z');
            });
        });

        describe('cfToSurname', () => {
            it ('Should return W*Y*Z*', () => {
                Parser.cfToSurname('WYZ').should.be.equal('W*Y*Z*');
            });
            it ('Should return WA*Y*', () => {
                Parser.cfToSurname('WYA').should.be.equal('WA*Y*');
            });
            it ('Should return WAE*', () => {
                Parser.cfToSurname('WAE').should.be.equal('WAE*');
            });
            it ('Should return AEI*', () => {
                Parser.cfToSurname('AEI').should.be.equal('AEI*');
            });
            it ('Should return AE', () => {
                Parser.cfToSurname('AEX').should.be.equal('AE');
            });
            it('Should return null', () => {
                expect(Parser.cfToSurname('KAZ')).to.be.null;
                expect(Parser.cfToSurname('KA')).to.be.null;
                expect(Parser.cfToSurname()).to.be.null;
            });
        });

        describe('cfToName', () => {
            it ('Should return W*Y*Z*', () => {
                Parser.cfToName('ZZZWYZ').should.be.equal('W*Y*Z*');
            });
            it ('Should return WA*Y*', () => {
                Parser.cfToName('ZZZWYA').should.be.equal('WA*Y*');
            });
            it ('Should return WAE*', () => {
                Parser.cfToName('ZZZWAE').should.be.equal('WAE*');
            });
            it ('Should return AEI*', () => {
                Parser.cfToName('ZZZAEI').should.be.equal('AEI*');
            });
            it ('Should return AE', () => {
                Parser.cfToName('ZZZAEX').should.be.equal('AE');
            });
            it('Should return null', () => {
                expect(Parser.cfToName('ZZZKAZ')).to.be.null;
                expect(Parser.cfToName('ZZZKA')).to.be.null;
                expect(Parser.cfToName('ZZZ')).to.be.null;
                expect(Parser.cfToName()).to.be.null;
            });
        });

        describe('cfToGender', () => {
            it('Should return M', () => {
                Parser.cfToGender('XXXYYY90B20').should.be.equal('M');
            });
            it('Should return F', () => {
                Parser.cfToGender('XXXYYY90B63').should.be.equal('F');
            });
            it('Should return null', () => {
                expect(Parser.cfToGender('XXXYYY90')).to.be.null;
                expect(Parser.cfToGender()).to.be.null;
            });
        });

        describe('cfToBirthDay', () => {
            it('Should return 12 (M)', () => {
                Parser.cfToBirthDay('XXXYYY90B12').should.be.equal(12);
            });
            it('Should return 31 (F)', () => {
                Parser.cfToBirthDay('XXXYYY90B71').should.be.equal(31);
            });
            it('Should return null', () => {
                expect(Parser.cfToBirthDay('XXXYYY90B00')).to.be.null;
                expect(Parser.cfToBirthDay('XXXYYY90B35')).to.be.null;
                expect(Parser.cfToBirthDay('XXXYYY90B74')).to.be.null;
                expect(Parser.cfToBirthDay('XXXYYY90')).to.be.null;
                expect(Parser.cfToBirthDay()).to.be.null;
            });
        });

        describe('cfToBirthMonth', () => {
            it('Should return the month', () => {
                Parser.cfToBirthMonth('XXXYYY92C').should.be.equal(2);
            });
            it('Should return null', () => {
                expect(Parser.cfToBirthDate('XXXYYY90J')).to.be.null;
                expect(Parser.cfToBirthDate('XXXYYY90')).to.be.null;
                expect(Parser.cfToBirthDate()).to.be.null;
            });
        });

        describe('cfToBirthYear', () => {
            it('Should return the year', () => {
                Parser.cfToBirthYear('XXXYYY92').should.be.equal(1992);
            });
            it('Should return 20XX up to current year', () => {
                const currentYear = (new Date()).getFullYear();
                Parser.cfToBirthYear(`XXXYYY${currentYear.toString().substr(-2)}`).should.be.equal(currentYear);
            });
            it('Should return 19XX from next year', () => {
                const ninetynineYearsAgo = (new Date()).getFullYear() -99;
                Parser.cfToBirthYear(`XXXYYY${ninetynineYearsAgo.toString().substr(-2)}`).should.be.equal(ninetynineYearsAgo);
            });
            it('Should return null', () => {
                expect(Parser.cfToBirthDate('XXXYYY')).to.be.null;
                expect(Parser.cfToBirthDate()).to.be.null;
            });
        });

        describe('cfToBirthDate', () => {
            it('Should return a Date (Male)', () => {
                const bdt = Parser.cfToBirthDate('XXXYYY92B20');
                bdt.toJSON().should.be.equal('1992-02-20');
                bdt.getDate().should.be.equal(20);
                bdt.getMonth().should.be.equal(1);
            });
            it('Should return a Date (Female)', () => {
                const bdt = Parser.cfToBirthDate('XXXYYY81A63');
                bdt.toISOString().should.be.equal('1981-01-23');
                bdt.getDate().should.be.equal(23);
                bdt.getMonth().should.be.equal(0);
            });
            it('Should return null', () => {
                expect(Parser.cfToBirthDate('XXXYYY90')).to.be.null;
                expect(Parser.cfToBirthDate()).to.be.null;
            });
        });
    });

    describe('methods to CF', () => {
        describe('surnameToCf', () => {
            it('Should return CF surname part', () => {
                Parser.surnameToCf('Rossi').should.be.equal('RSS');
                Parser.surnameToCf('Reno').should.be.equal('RNE');
                Parser.surnameToCf('Goia').should.be.equal('GOI');
                Parser.surnameToCf('Aieie').should.be.equal('AIE');
                Parser.surnameToCf('No').should.be.equal('NOX');
                Parser.surnameToCf('Ai').should.be.equal('AIX');
            });
            it('Should work with diacritics', () => {
                Parser.surnameToCf('Olè').should.be.equal('LOE');
                Parser.surnameToCf('Içi').should.be.equal('CII');
            });
            it('Should return null', () => {
                expect(Parser.surnameToCf('')).to.be.null;
                expect(Parser.surnameToCf('K')).to.be.null;
                expect(Parser.surnameToCf('@à')).to.be.null;
            });
        });

        describe('nameToCf', () => {
            it('Should return CF name part', () => {
                Parser.nameToCf('Dominique').should.be.equal('DMQ');
                Parser.nameToCf('Alexander').should.be.equal('LXD');
                Parser.nameToCf('Mark').should.be.equal('MRK');
                Parser.nameToCf('Tom').should.be.equal('TMO');
                Parser.nameToCf('Ania').should.be.equal('NAI');
                Parser.nameToCf('No').should.be.equal('NOX');
                Parser.nameToCf('Ai').should.be.equal('AIX');
            });
            it('Should work with diacritics', () => {
                Parser.nameToCf('Olè').should.be.equal('LOE');
                Parser.nameToCf('Içi').should.be.equal('CII');
            });
            it('Should return null', () => {
                expect(Parser.nameToCf('')).to.be.null;
                expect(Parser.nameToCf('K')).to.be.null;
                expect(Parser.nameToCf('@à')).to.be.null;
            });
        });

        describe('yearToCf', () => {
            it('Should return CF year part from 4 digit string', () => {
                Parser.yearToCf('1990').should.be.equal('90');
                Parser.yearToCf('2001').should.be.equal('01');
                Parser.yearToCf('1900').should.be.equal('00');
                Parser.yearToCf('2000').should.be.equal('00');
            });
            it('Should return CF year part from 4 digit number', () => {
                Parser.yearToCf(1992).should.be.equal('92');
                Parser.yearToCf(2010).should.be.equal('10');
            });
            it('Should work with 2 digit string', () => {
                Parser.yearToCf('13').should.be.equal('13');
                Parser.yearToCf('02').should.be.equal('02');
            });
            it('Should work with numbers below 100', () => {
                Parser.yearToCf(7).should.be.equal('07');
                Parser.yearToCf(83).should.be.equal('83');
            });
            it('Should return null for anything different from 1,2 or 4 digits', () => {
                expect(Parser.yearToCf('')).to.be.null;
                expect(Parser.yearToCf('105')).to.be.null;
                expect(Parser.yearToCf('@à')).to.be.null;
            });
        });
    });
});