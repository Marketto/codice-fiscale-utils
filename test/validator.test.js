const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Validator', () => {
    const Validator = require('../src/validator');
    describe('methods', () => {
        describe('cfSurname', () => {
            describe('Generic Validator', () => {
                const cfSurnameValidator = Validator.cfSurname();
                it ('Should validate KST', () => {
                    cfSurnameValidator.test('KST').should.be.ok;
                });
                it ('Should validate KSE', () => {
                    cfSurnameValidator.test('KSE').should.be.ok;
                });
                it ('Should validate KAO', () => {
                    cfSurnameValidator.test('KAO').should.be.ok;
                });
                it ('Should validate NIX', () => {
                    cfSurnameValidator.test('NIX').should.be.ok;
                });
                it ('Should validate NIK', () => {
                    cfSurnameValidator.test('NIK').should.not.be.ok;
                });
                it ('Should validate UAO', () => {
                    cfSurnameValidator.test('UAO').should.be.ok;
                });
                it ('Should validate UIX', () => {
                    cfSurnameValidator.test('UIX').should.be.ok;
                });
                it ('Should validate UXX', () => {
                    cfSurnameValidator.test('UXX').should.not.be.ok;
                });
                it ('Should validate UIK', () => {
                    cfSurnameValidator.test('UIK').should.not.be.ok;
                });
                it ('Should validate ASQ', () => {
                    cfSurnameValidator.test('ASQ').should.not.be.ok;
                });
                it ('Should validate ASX', () => {
                    cfSurnameValidator.test('ASX').should.not.be.ok;
                });
                it ('Should validate UXI', () => {
                    cfSurnameValidator.test('UXI').should.not.be.ok;
                });
                it ('Should validate UXK', () => {
                    cfSurnameValidator.test('UXK').should.not.be.ok;
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

        describe('cfName', () => {
            describe('Generic Validator', () => {
                const cfNameValidator = Validator.cfName();
                it ('Should validate KST', () => {
                    cfNameValidator.test('KST').should.be.ok;
                });
                it ('Should validate KSE', () => {
                    cfNameValidator.test('KSE').should.be.ok;
                });
                it ('Should validate KAO', () => {
                    cfNameValidator.test('KAO').should.be.ok;
                });
                it ('Should validate NIX', () => {
                    cfNameValidator.test('NIX').should.be.ok;
                });
                it ('Should validate NIK', () => {
                    cfNameValidator.test('NIK').should.not.be.ok;
                });
                it ('Should validate UAO', () => {
                    cfNameValidator.test('UAO').should.be.ok;
                });
                it ('Should validate UIX', () => {
                    cfNameValidator.test('UIX').should.be.ok;
                });
                it ('Should validate UXX', () => {
                    cfNameValidator.test('UXX').should.not.be.ok;
                });
                it ('Should validate UIK', () => {
                    cfNameValidator.test('UIK').should.not.be.ok;
                });
                it ('Should validate ASQ', () => {
                    cfNameValidator.test('ASQ').should.not.be.ok;
                });
                it ('Should validate ASX', () => {
                    cfNameValidator.test('ASX').should.not.be.ok;
                });
                it ('Should validate UXI', () => {
                    cfNameValidator.test('UXI').should.not.be.ok;
                });
                it ('Should validate UXK', () => {
                    cfNameValidator.test('UXK').should.not.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate DNC for Domenico', () => {
                    Validator.cfName('Domenico').test('DNC').should.be.ok;
                });
                it ('Should validate GNN for Giovanni', () => {
                    Validator.cfName('Giovanni').test('GNN').should.be.ok;
                });
                it ('Should validate MRK for Mark', () => {
                    Validator.cfName('Mark').test('MRK').should.be.ok;
                });
                it ('Should validate LXA for Alex', () => {
                    Validator.cfName('Alex').test('LXA').should.be.ok;
                });
                it ('Should validate AIE for Aieie', () => {
                    Validator.cfName('Aieie').test('AIE').should.be.ok;
                });
                it ('Should validate AIX for Ai', () => {
                    Validator.cfName('Ai').test('AIX').should.be.ok;
                });
                it ('Should validate UXX for U', () => {
                    Validator.cfName('U').test('UXX').should.not.be.ok;
                });
            });
        });

        describe('cfYear', () => {
            describe('Generic Validator', () => {
                const cfYearValidator = Validator.cfYear();
                it ('Should validate 07', () => {
                    cfYearValidator.test('07').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate 86 for 1986', () => {
                    Validator.cfYear(1986).test('86').should.be.ok;
                });
                it ('Should validate 8S for 1986', () => {
                    Validator.cfYear(1986).test('8S').should.be.ok;
                });
                it ('Should validate U6 for 1986', () => {
                    Validator.cfYear(1986).test('U6').should.be.ok;
                });
                it ('Should validate US for 1986', () => {
                    Validator.cfYear(1986).test('US').should.be.ok;
                });
                it ('Should not validate 87 for 1986', () => {
                    Validator.cfYear(1986).test('87').should.not.be.ok;
                });
                it ('Should not validate UT for 1986', () => {
                    Validator.cfYear(1986).test('UT').should.not.be.ok;
                });
                it ('Should validate 07 for 1907', () => {
                    Validator.cfYear(1907).test('07').should.be.ok;
                });
                it ('Should validate 07 for 2007', () => {
                    Validator.cfYear(2007).test('07').should.be.ok;
                });
            });
        });

        describe('cfMonth', () => {
            describe('Generic Validator', () => {
                const cfMonthValidator = Validator.cfMonth();
                it ('Should validate C', () => {
                    cfMonthValidator.test('C').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate A for 0', () => {
                    Validator.cfMonth(0).test('A').should.be.ok;
                });
                it ('Should validate B for 1', () => {
                    Validator.cfMonth(1).test('B').should.be.ok;
                });
                it ('Should validate C for 2', () => {
                    Validator.cfMonth(2).test('C').should.be.ok;
                });
                it ('Should validate D for 3', () => {
                    Validator.cfMonth(3).test('D').should.be.ok;
                });
                it ('Should validate E for 4', () => {
                    Validator.cfMonth(4).test('E').should.be.ok;
                });
                it ('Should validate H for 5', () => {
                    Validator.cfMonth(5).test('H').should.be.ok;
                });
                it ('Should validate L for 6', () => {
                    Validator.cfMonth(6).test('L').should.be.ok;
                });
                it ('Should validate M for 7', () => {
                    Validator.cfMonth(7).test('M').should.be.ok;
                });
                it ('Should validate P for 8', () => {
                    Validator.cfMonth(8).test('P').should.be.ok;
                });
                it ('Should validate R for 9', () => {
                    Validator.cfMonth(9).test('R').should.be.ok;
                });
                it ('Should validate S for 10', () => {
                    Validator.cfMonth(10).test('S').should.be.ok;
                });
                it ('Should validate T for 11', () => {
                    Validator.cfMonth(11).test('T').should.be.ok;
                });

                it ('Should not validate B for 9', () => {
                    Validator.cfMonth(9).test('B').should.not.be.ok;
                });
                it ('Should not validate R for 10', () => {
                    Validator.cfMonth(10).test('R').should.not.be.ok;
                });
                it ('Should not validate A for 11', () => {
                    Validator.cfMonth(11).test('A').should.not.be.ok;
                });
            });
        });

        describe('cfDay', () => {
            describe('Generic Validator', () => {
                const cfDayValidator = Validator.cfDay();
                it ('Should validate 0M', () => {
                    cfDayValidator.test('0M').should.be.ok;
                });
                it ('Should validate MN for 12', () => {
                    Validator.cfDay(12).test('MN').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate 01 for 1', () => {
                    Validator.cfDay(1).test('01').should.be.ok;
                });
                it ('Should not validate LM for 9', () => {
                    Validator.cfDay(9).test('LM').should.not.be.ok;
                });

                it ('Should validate 41 for 1', () => {
                    Validator.cfDay(1).test('41').should.be.ok;
                });

                it ('Should not validate QM for 9', () => {
                    Validator.cfDay(9).test('QM').should.not.be.ok;
                });
            });
        });

        describe('cfDayGender', () => {
            describe('Generic Validator', () => {
                const cfDayValidator = Validator.cfDayGender();
                it ('Should validate 0M', () => {
                    cfDayValidator.test('0M').should.be.ok;
                });
                it ('Should validate MN for 12', () => {
                    cfDayValidator.test('MN').should.be.ok;
                });
            });
            describe('Specific validator', () => {
                it ('Should validate 01 for 1 Male', () => {
                    Validator.cfDayGender(1, 'M').test('01').should.be.ok;
                });
                it ('Should not validate RM for 9 Female', () => {
                    Validator.cfDayGender(9, 'F').test('RM').should.not.be.ok;
                });

                it ('Should not validate 41 for 1 Male', () => {
                    Validator.cfDayGender(1, 'M').test('41').should.be.not.ok;
                });

                it ('Should not validate QM for 9 Female', () => {
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
});