import Validator from '../../src/validator';

export default async () => {
    describe('date', () => {
        describe('Generic Validator', () => {
            const dateValidator = Validator.date();
            it('Should validate now', () => {
                dateValidator.test(new Date().toJSON()).should.be.ok;
            });
            it('Should validate 1995', () => {
                dateValidator.test('1995').should.be.ok;
            });
            it('Should validate 1985-01', () => {
                dateValidator.test('1985-01').should.be.ok;
            });
            it('Should validate 2003-03-03', () => {
                dateValidator.test('2003-03-03').should.be.ok;
            });
        });
        describe('Specific validator', () => {
            it('Should validate 1992-03-16 for XYZXYZ92C16', () => {
                Validator.date('XYZXYZ92C16').test('1992-03-16').should.be.ok;
            });
            it('Should validate 1992-03-16 for XYZXYZ88H61', () => {
                Validator.date('XYZXYZ88H61').test('1988-06-21').should.be.ok;
            });
            it('Should validate 1912-11-30 for XYZXYZ12S30', () => {
                Validator.date('XYZXYZ12S30').test('1912-11-30').should.be.ok;
            });
            it('Should validate 2012-11-30 for XYZXYZ12S30', () => {
                Validator.date('XYZXYZ12S30').test('2012-11-30').should.be.ok;
            });

            it('Should not validate 1992-03-26 for XYZXYZ92C16', () => {
                Validator.date('XYZXYZ92C16').test('1992-03-26').should.be.false;
            });
            it('Should not validate 1988-04-21 for XYZXYZ88H61', () => {
                Validator.date('XYZXYZ88H61').test('1988-04-21').should.be.false;
            });
        });
    });
};