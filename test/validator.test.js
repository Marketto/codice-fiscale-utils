const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Validator', () => {
    const Validator = require('../src/validator');
    describe('codiceFiscale', () => {
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
                it ('Should validate cf surname UXX for U', () => {
                    Validator.cfSurname('U').test('UXX').should.not.be.ok;
                });
            });
        });

        describe('cfName', () => {
            describe('Generic Validator', () => {
                const cfNameValidator = Validator.cfName();
                it ('Should validate cf name KST', () => {
                    cfNameValidator.test('KST').should.be.ok;
                });
                it ('Should validate cf name KSE', () => {
                    cfNameValidator.test('KSE').should.be.ok;
                });
                it ('Should validate cf name KAO', () => {
                    cfNameValidator.test('KAO').should.be.ok;
                });
                it ('Should validate cf name NIX', () => {
                    cfNameValidator.test('NIX').should.be.ok;
                });
                it ('Should validate cf name NIK', () => {
                    cfNameValidator.test('NIK').should.not.be.ok;
                });
                it ('Should validate cf name UAO', () => {
                    cfNameValidator.test('UAO').should.be.ok;
                });
                it ('Should validate cf name UIX', () => {
                    cfNameValidator.test('UIX').should.be.ok;
                });
                it ('Should validate cf name UXX', () => {
                    cfNameValidator.test('UXX').should.not.be.ok;
                });
                it ('Should validate cf name UIK', () => {
                    cfNameValidator.test('UIK').should.not.be.ok;
                });
                it ('Should validate cf name ASQ', () => {
                    cfNameValidator.test('ASQ').should.not.be.ok;
                });
                it ('Should validate cf name ASX', () => {
                    cfNameValidator.test('ASX').should.not.be.ok;
                });
                it ('Should validate cf name UXI', () => {
                    cfNameValidator.test('UXI').should.not.be.ok;
                });
                it ('Should validate cf name UXK', () => {
                    cfNameValidator.test('UXK').should.not.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate cf name DNQ for Dominique', () => {
                    Validator.cfName('Dominique').test('DNQ').should.be.ok;
                });
                it ('Should validate cf name GNN for Giovanni', () => {
                    Validator.cfName('Giovanni').test('GNN').should.be.ok;
                });
                it ('Should validate cf name GNN for Gianni', () => {
                    Validator.cfName('Gianni').test('GNN').should.be.ok;
                });
                it ('Should validate cf name GPL for Gian Paolo', () => {
                    Validator.cfName('Gian Paolo').test('GPL').should.be.ok;
                });
                it ('Should not validate cf name GNP for Gian Paolo', () => {
                    Validator.cfName('Gian Paolo').test('GNP').should.be.false;
                });
                it ('Should validate cf name MRK for Mark', () => {
                    Validator.cfName('Mark').test('MRK').should.be.ok;
                });
                it ('Should validate cf name LXA for Alex', () => {
                    Validator.cfName('Alex').test('LXA').should.be.ok;
                });
                it ('Should validate cf name AIE for Aieie', () => {
                    Validator.cfName('Aieie').test('AIE').should.be.ok;
                });
                it ('Should validate cf name AIX for Ai', () => {
                    Validator.cfName('Ai').test('AIX').should.be.ok;
                });
                it ('Should validate cf name UXX for U', () => {
                    Validator.cfName('U').test('UXX').should.not.be.ok;
                });
            });
        });

        describe('cfYear', () => {
            describe('Generic Validator', () => {
                const cfYearValidator = Validator.cfYear();
                it ('Should validate cf year 07', () => {
                    cfYearValidator.test('07').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate cf year 86 for 1986', () => {
                    Validator.cfYear(1986).test('86').should.be.ok;
                });
                it ('Should validate cf year 8S for 1986', () => {
                    Validator.cfYear(1986).test('8S').should.be.ok;
                });
                it ('Should validate cf year U6 for 1986', () => {
                    Validator.cfYear(1986).test('U6').should.be.ok;
                });
                it ('Should validate cf year US for 1986', () => {
                    Validator.cfYear(1986).test('US').should.be.ok;
                });
                it ('Should not validate cf year 87 for 1986', () => {
                    Validator.cfYear(1986).test('87').should.not.be.ok;
                });
                it ('Should not validate cf year UT for 1986', () => {
                    Validator.cfYear(1986).test('UT').should.not.be.ok;
                });
                it ('Should validate cf year 07 for 1907', () => {
                    Validator.cfYear(1907).test('07').should.be.ok;
                });
                it ('Should validate cf year 07 for 2007', () => {
                    Validator.cfYear(2007).test('07').should.be.ok;
                });
            });
        });

        describe('cfMonth', () => {
            describe('Generic Validator', () => {
                const cfMonthValidator = Validator.cfMonth();
                it ('Should validate cf month C', () => {
                    cfMonthValidator.test('C').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate cf month A for 0', () => {
                    Validator.cfMonth(0).test('A').should.be.ok;
                });
                it ('Should validate cf month B for 1', () => {
                    Validator.cfMonth(1).test('B').should.be.ok;
                });
                it ('Should validate cf month C for 2', () => {
                    Validator.cfMonth(2).test('C').should.be.ok;
                });
                it ('Should validate cf month D for 3', () => {
                    Validator.cfMonth(3).test('D').should.be.ok;
                });
                it ('Should validate cf month E for 4', () => {
                    Validator.cfMonth(4).test('E').should.be.ok;
                });
                it ('Should validate cf month H for 5', () => {
                    Validator.cfMonth(5).test('H').should.be.ok;
                });
                it ('Should validate cf month L for 6', () => {
                    Validator.cfMonth(6).test('L').should.be.ok;
                });
                it ('Should validate cf month M for 7', () => {
                    Validator.cfMonth(7).test('M').should.be.ok;
                });
                it ('Should validate cf month P for 8', () => {
                    Validator.cfMonth(8).test('P').should.be.ok;
                });
                it ('Should validate cf month R for 9', () => {
                    Validator.cfMonth(9).test('R').should.be.ok;
                });
                it ('Should validate cf month S for 10', () => {
                    Validator.cfMonth(10).test('S').should.be.ok;
                });
                it ('Should validate cf month T for 11', () => {
                    Validator.cfMonth(11).test('T').should.be.ok;
                });

                it ('Should not validate cf month B for 9', () => {
                    Validator.cfMonth(9).test('B').should.not.be.ok;
                });
                it ('Should not validate cf month R for 10', () => {
                    Validator.cfMonth(10).test('R').should.not.be.ok;
                });
                it ('Should not validate cf month A for 11', () => {
                    Validator.cfMonth(11).test('A').should.not.be.ok;
                });
            });
        });

        describe('cfDay', () => {
            describe('Generic Validator', () => {
                const cfDayValidator = Validator.cfDay();
                it ('Should validate cf day 0M', () => {
                    cfDayValidator.test('0M').should.be.ok;
                });
                it ('Should validate cf day MN for 12', () => {
                    Validator.cfDay(12).test('MN').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate cf day 01 for 1', () => {
                    Validator.cfDay(1).test('01').should.be.ok;
                });
                it ('Should not validate cf day LM for 9', () => {
                    Validator.cfDay(9).test('LM').should.not.be.ok;
                });

                it ('Should validate cf day 41 for 1', () => {
                    Validator.cfDay(1).test('41').should.be.ok;
                });

                it ('Should not validate cf day QM for 9', () => {
                    Validator.cfDay(9).test('QM').should.not.be.ok;
                });
            });
        });

        describe('cfDayGender', () => {
            describe('Generic Validator', () => {
                const cfDayValidator = Validator.cfDayGender();
                it ('Should validate cf day/gender 0M', () => {
                    cfDayValidator.test('0M').should.be.ok;
                });
                it ('Should validate cf day/gender MN for 12', () => {
                    cfDayValidator.test('MN').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate cf day/gender 01 for 1 Male', () => {
                    Validator.cfDayGender(1, 'M').test('01').should.be.ok;
                });
                it ('Should not validate cf day/gender RM for 9 Female', () => {
                    Validator.cfDayGender(9, 'F').test('RM').should.not.be.ok;
                });

                it ('Should not validate cf day/gender 41 for 1 Male', () => {
                    Validator.cfDayGender(1, 'M').test('41').should.be.not.ok;
                });

                it ('Should not validate cf day/gender QM for 9 Female', () => {
                    Validator.cfDayGender(9, 'F').test('QM').should.not.be.ok;
                });
            });
        });

        describe('cfDateGender', () => {
            describe('Generic Validator', () => {
                const cfDateValidator = Validator.cfDateGender();
                it ('Should validate 83D22', () => {
                    cfDateValidator.test('83D22').should.be.ok;
                });
                it ('Should validate U3D2N', () => {
                    cfDateValidator.test('U3D2N').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate U3D2N for 1983-04-22 Male', () => {
                    Validator.cfDateGender([1983, 3, 22], 'M').test('U3D2N').should.be.ok;
                });
                it ('Should validate 83D22 for 1983-04-22 Male', () => {
                    Validator.cfDateGender([1983, 3, 22], 'M').test('83D22').should.be.ok;
                });
                it ('Should not validate U3D2N for 1983-04-22 Male', () => {
                    Validator.cfDateGender([1983, 3, 22], 'M').test('U3DSN').should.not.be.ok;
                });
                it ('Should not validate 83D62 for 1983-04-22 Male', () => {
                    Validator.cfDateGender([1983, 3, 22], 'M').test('83D62').should.not.be.ok;
                });
                it ('Should not validate V5EQ1 for 1995-04-22 Female', () => {
                    Validator.cfDateGender([1995, 4, 1], 'F').test('V5EQ1').should.be.ok;
                });
                it ('Should not validate 95EQM for 1995-04-22 Female', () => {
                    Validator.cfDateGender([1995, 4, 1], 'F').test('95EQM').should.be.ok;
                });
                it ('Should validate V5ELM for 1995-04-22 Female', () => {
                    Validator.cfDateGender([1995, 4, 1], 'F').test('V5ELM').should.not.be.ok;
                });
                it ('Should validate 95EL1 for 1995-04-22 Female', () => {
                    Validator.cfDateGender([1995, 4, 1], 'F').test('95EL1').should.not.be.ok;
                });
            });
        });

        describe('cfPlace', () => {
            describe('Generic Validator', () => {
                const cfDateValidator = Validator.cfPlace();
                it ('Should validate A662', () => {
                    cfDateValidator.test('A662').should.be.ok;
                });
                it ('Should validate H501', () => {
                    cfDateValidator.test('H501').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate A662 for Bari', () => {
                    Validator.cfPlace('Bari').test('A662').should.be.ok;
                });
                it ('Should validate H501 for Roma', () => {
                    Validator.cfPlace('Roma').test('H501').should.be.ok;
                });
                it ('Should validate D620 for Fiume in 1933', () => {
                    Validator.cfPlace([1933], 'Fiume').test('D620').should.be.ok;
                });
                it ('Should not validate H501 for Bari', () => {
                    Validator.cfPlace('Bari').test('H501').should.be.false;
                });
                it ('Should not validate A662 for Roma', () => {
                    Validator.cfPlace('Roma').test('A662').should.be.false;
                });
                it ('Should not validate D620 for Fiume in 2000', () => {
                    Validator.cfPlace([2000], 'Fiume').test('D620').should.be.false;
                });
            });
        });

        describe('codiceFiscale', () => {
            describe('Generic Validator', () => {
                const cfDateValidator = Validator.codiceFiscale();
                it ('Should validate VRNGNY07D68C351V', () => {
                    cfDateValidator.test('VRNGNY07D68C351V').should.be.ok;
                });
                it ('Should validate MRNMIA02E45L219X', () => {
                    cfDateValidator.test('MRNMIA02E45L219X').should.be.ok;
                });
            });

            describe('Partial validator', () => {
                it('Should match VRNGNY97A65C351V', () => {
                    Validator.codiceFiscale({
                        surname: 'Veronesi',
                        name: 'Genny',
                        gender: 'F',
                        place: 'Catania'
                    }).test('VRNGNY97A65C351V').should.be.true;
                });
                it('Should not match VRNGNY97A35C351V', () => {
                    Validator.codiceFiscale({
                        surname: 'Veronesi',
                        name: 'Genny',
                        gender: 'F',
                        place: 'Catania'
                    }).test('VRNGNY97A35C351V').should.be.false;
                });
                it('Should match KRNZEA02E45L219X', () => {
                    Validator.codiceFiscale({
                        year: 1902,
                        month: 4,
                        day: 5,
                        gender: 'F',
                        place: 'Torino'
                    }).test('KRNZEA02E45L219X').should.be.true;
                });
                it('Should not match MRNMIA03E45L219X', () => {
                    Validator.codiceFiscale({ year: 1902, month: 4, day: 5, gender: 'F', place: 'Torino' })
                        .test('MRNMIA03E45L219X').should.be.false;
                });
            });

            describe('Specific validator', () => {
                it('Should match VRNGNY07D68C351V', () => {
                    Validator.codiceFiscale({
                        surname: 'Veronesi',
                        name: 'Genny',
                        year: 1907,
                        month: 3,
                        day: 28,
                        gender: 'F',
                        place: 'Catania'
                    }).test('VRNGNY07D68C351V').should.be.true;
                });
                it('Should match MRNMIA02E45L219X', () => {
                    Validator.codiceFiscale({
                        surname: 'Marin',
                        name: 'Mia',
                        year: 1902,
                        month: 4,
                        day: 5,
                        gender: 'F',
                        place: 'Torino'
                    }).test('MRNMIA02E45L219X').should.be.true;
                });
            });
        });
    });
    describe('personal infos', () => {
        describe('surname', () => {
            describe('Generic Validator', () => {
                const surnameValidator = Validator.surname();
                it ('Should validate surname Kristersen', () => {
                    surnameValidator.test('Kristersen').should.be.ok;
                });
                it ('Should validate surname Rossi', () => {
                    surnameValidator.test('Rossi').should.be.ok;
                });
                it ('Should validate surname Ao', () => {
                    surnameValidator.test('Ao').should.be.ok;
                });
                it ('Should validate surname Tést', () => {
                    surnameValidator.test('Tést').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate surname Marco for MRC', () => {
                    Validator.surname('MRC').test('Marco').should.be.ok;
                });
                it ('Should validate surname Alex for LXA', () => {
                    Validator.surname('LXA').test('Alex').should.be.ok;
                });
                it ('Should validate surname Aieie for AIE', () => {
                    Validator.surname('AIE').test('Aieie').should.be.ok;
                });
                it ('Should validate surname Ai for AIX', () => {
                    Validator.surname('AIX').test('Ai').should.be.ok;
                });
                it ('Should validate surname U for UXX', () => {
                    Validator.surname('UXX').test('U').should.be.ok;
                });
                it ('Should validate surname Vàlidàtòr for VLD', () => {
                    Validator.surname('VLD').test('Vàlidàtòr').should.be.ok;
                });
                it ('Should not validate surname Air for AIX', () => {
                    Validator.surname('AIX').test('Air').should.be.false;
                });
            });
        });
        describe('name', () => {
            describe('Generic Validator', () => {
                const nameValidator = Validator.name();
                it ('Should validate name Kristersen', () => {
                    nameValidator.test('Kristersen').should.be.ok;
                });
                it ('Should validate name Rossi', () => {
                    nameValidator.test('Rossi').should.be.ok;
                });
                it ('Should validate name Ao', () => {
                    nameValidator.test('Ao').should.be.ok;
                });
                it ('Should validate name Tést', () => {
                    nameValidator.test('Tést').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate name Marco for XYZMRC', () => {
                    Validator.name('XYZMRC').test('Marco').should.be.ok;
                });
                it ('Should validate name Alex for XYZLXA', () => {
                    Validator.name('XYZLXA').test('Alex').should.be.ok;
                });
                it ('Should validate name Aieie for XYZAIE', () => {
                    Validator.name('XYZAIE').test('Aieie').should.be.ok;
                });
                it ('Should validate name Ai for XYZAIX', () => {
                    Validator.name('XYZAIX').test('Ai').should.be.ok;
                });
                it ('Should validate name U for XYZUXX', () => {
                    Validator.name('XYZUXX').test('U').should.be.ok;
                });
                it ('Should validate name Vàlidàtòr for XYZVLD', () => {
                    Validator.name('XYZVDT').test('Vàlidàtòr').should.be.ok;
                });
                it ('Should not validate name Air for XYZAIX', () => {
                    Validator.name('XYZAIX').test('Air').should.be.false;
                });
            });
        });
    });
});