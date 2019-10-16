import chai from 'chai';
import chaiThings from 'chai-things';
chai.use(chaiThings);
const expect = chai.expect;
chai.should();
import Parser from '../src/parser';

describe('CodiceFiscaleUtils:Parser', () => {
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
            it('Should return null for strings different from 3 chars, vowel between consonants or undefined', () => {
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
                //bdt.toJSON().should.be.equal('1992-02-20');
                bdt.getDate().should.be.equal(20);
                bdt.getMonth().should.be.equal(1);
            });
            it('Should return a Date (Female)', () => {
                const bdt = Parser.cfToBirthDate('XXXYYY81A63');
                //bdt.toISOString().should.be.equal('1981-01-23');
                bdt.getDate().should.be.equal(23);
                bdt.getMonth().should.be.equal(0);
            });
            it('Should return null', () => {
                expect(Parser.cfToBirthDate('XXXYYY90')).to.be.null;
                expect(Parser.cfToBirthDate()).to.be.null;
            });
        });

        describe('cfToBirthPlace', () => {
            it('Should return Rome for H501', () => {
                const parsedBirthPlace = Parser.cfToBirthPlace('XXXYYY92B20H501');
                parsedBirthPlace.should.be.an('object');
                parsedBirthPlace.belfioreCode.should.be.equal('H501');
                parsedBirthPlace.name.should.be.equal('ROMA');
            });
            it('Should check expiration', () => {
                expect(Parser.cfToBirthPlace('XXXYYY91B22Z111')).to.be.null;
                const parsedBirthPlace = Parser.cfToBirthPlace('XXXYYY81A43Z111');
                parsedBirthPlace.should.be.an('object');
                parsedBirthPlace.belfioreCode.should.be.equal('Z111');
                parsedBirthPlace.name.should.be.equal('Repubblica Democratica Tedesca');
            });
            it('Should return null', () => {
                expect(Parser.cfToBirthPlace('XXXYYY90')).to.be.null;
                expect(Parser.cfToBirthPlace()).to.be.null;
            });
        });

        describe('cfDecode', () => {
            it('Should return matching infos from VRNGNY07D68C351V', () => {
                const decoded = Parser.cfDecode('VRNGNY07D68C351V');
                decoded.should.be.a('object');
                decoded.surname.should.be.equal('V*R*N*');
                decoded.name.should.be.equal('G*N*Y*');
                decoded.year.should.be.equal(2007);
                decoded.month.should.be.equal(3);
                decoded.day.should.be.equal(28);
                decoded.gender.should.be.equal('F');
                decoded.place.should.be.equal('CATANIA');
            });
            it('Should return matching infos from MRNMIA02E45L219X', () => {
                const decoded = Parser.cfDecode('MRNMIA02E45L219X');
                decoded.should.be.a('object');
                decoded.surname.should.be.equal('M*R*N*');
                decoded.name.should.be.equal('MIA*');
                decoded.year.should.be.equal(2002);
                decoded.month.should.be.equal(4);
                decoded.day.should.be.equal(5);
                decoded.gender.should.be.equal('F');
                decoded.place.should.be.equal('TORINO');
            });
        });
    });

    describe('methods to CF', () => {
        describe('surnameToCf', () => {
            it('Should return CF surname part', () => {
                Parser.surnameToCf('Rossi').should.be.equal('RSS');
                Parser.surnameToCf('Reno').should.be.equal('RNE');
                Parser.surnameToCf('Di Reno').should.be.equal('DRN');
                Parser.surnameToCf('Goia').should.be.equal('GOI');
                Parser.surnameToCf('D\'Aieie').should.be.equal('DAI');
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
                Parser.nameToCf('Dominique').should.be.equal('DNQ');
                Parser.nameToCf('Alexander').should.be.equal('LND');
                Parser.nameToCf('Pier Ale').should.be.equal('PRL');
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

        describe('monthToCf', () => {
            it('Should return month code for the given month number', () => {
                Parser.monthToCf(0).should.be.equal('A');
                Parser.monthToCf(1).should.be.equal('B');
                Parser.monthToCf(2).should.be.equal('C');
                Parser.monthToCf(3).should.be.equal('D');
                Parser.monthToCf(4).should.be.equal('E');
                Parser.monthToCf(5).should.be.equal('H');
                Parser.monthToCf(6).should.be.equal('L');
                Parser.monthToCf(7).should.be.equal('M');
                Parser.monthToCf(8).should.be.equal('P');
                Parser.monthToCf(9).should.be.equal('R');
                Parser.monthToCf(10).should.be.equal('S');
                Parser.monthToCf(11).should.be.equal('T');
            });
            it('Should return null', () => {
                expect(Parser.monthToCf(12)).to.be.null;
                expect(Parser.monthToCf('3')).to.be.null;
                expect(Parser.monthToCf('$')).to.be.null;
            });
        });

        describe('dayGenderToCf', () => {
            it('Should return CF year part from 1 or 2 digit number and Male const', () => {
                Parser.dayGenderToCf(3, 'M').should.be.equal('03');
                Parser.dayGenderToCf(25, 'M').should.be.equal('25');
            });
            it('Should return CF year part from 1 or 2 digit number and Female const', () => {
                Parser.dayGenderToCf(7, 'F').should.be.equal('47');
                Parser.dayGenderToCf(31, 'F').should.be.equal('71');
            });
            it('Should return null for anything different from 1,2 or 4 digits', () => {
                expect(Parser.dayGenderToCf('', 'M')).to.be.null;
                expect(Parser.dayGenderToCf(0, 'F')).to.be.null;
                expect(Parser.dayGenderToCf(50, 'M')).to.be.null;
                expect(Parser.dayGenderToCf('@à', 'F')).to.be.null;
                expect(Parser.dayGenderToCf(5, 'X')).to.be.null;
            });
        });

        describe('dateGenderToCf', () => {
            it('Should return CF date part from year, month, day and gender', () => {
                Parser.dateGenderToCf([2016, 3, 23], 'M').should.be.equal('16D23');
                Parser.dateGenderToCf([1988, 7, 3], 'F').should.be.equal('88M43');
            });
            it('Should return CF date part from year, month and gender', () => {
                Parser.dateGenderToCf([1950, 3], 'M').should.be.equal('50D01');
            });
            it('Should return CF date part from year and gender', () => {
                Parser.dateGenderToCf([1950], 'F').should.be.equal('50A41');
            });
            it('Should return CF date part from iso8601 date string and gender', () => {
                Parser.dateGenderToCf('1987-09-22', 'F').should.be.equal('87P62');
            });
            it('Should return CF date part from a Date and gender', () => {
                Parser.dateGenderToCf(new Date(2016, 2, 23, 12), 'M').should.be.equal('16C23');
                Parser.dateGenderToCf(new Date(1988, 7, 3, 12), 'F').should.be.equal('88M43');
            });
            it('Should return null for wrong dates and/or gender', () => {
                expect(Parser.dateGenderToCf('', 'M')).to.be.null;
                expect(Parser.dateGenderToCf(0, 'F')).to.be.null;
                expect(Parser.dateGenderToCf([1990, 21, 12], 'F')).to.be.null;
                expect(Parser.dateGenderToCf([1996, 11, 33], 'M')).to.be.null;
                expect(Parser.dateGenderToCf([2016, 3, 23], 'X')).to.be.null;
            });
        });

        describe('placeToCf', () => {
            it('Should return A944 for Bologna', () => {
                Parser.placeToCf('Bologna').should.be.equal('A944');
            });
            it('Should return Z127 for Polonia', () => {
                Parser.placeToCf('Polonia').should.be.equal('Z127');
            });
            it('Should return A944 for Bologna in 2000', () => {
                Parser.placeToCf([2000], 'Bologna').should.be.equal('A944');
            });
            it('Should return Z135 for Unione Sovietica in 1947', () => {
                Parser.placeToCf([1947], 'Unione Sovietica').should.be.equal('Z135');
            });
            it('Should not return code for Unione Sovietica in 1998', () => {
                expect(Parser.placeToCf([1998], 'Unione Sovietica')).to.be.not.ok;
            });
        });

        describe('encodeCf', () => {
            it('Should return VRNGNY07D68C351V', () => {
                Parser.encodeCf({
                    surname: 'Veronesi',
                    name: 'Genny',
                    year: 1907,
                    month: 3,
                    day: 28,
                    gender: 'F',
                    place: 'Catania'
                }).should.be.equal('VRNGNY07D68C351V');
            });
            it('Should return MRNMIA02E45L219X', () => {
                Parser.encodeCf({
                    surname: 'Marin',
                    name: 'Mia',
                    year: 1902,
                    month: 4,
                    day: 5,
                    gender: 'F',
                    place: 'Torino'
                }).should.be.equal('MRNMIA02E45L219X');
            });
        });
    });
});