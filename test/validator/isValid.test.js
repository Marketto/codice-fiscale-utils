import Validator from '../../src/validator';

export default async () => {
    describe('isValid', () => {
        it('Should validate VRNGNY07D68C351V', () => {
            Validator.isValid('VRNGNY07D68C351V').should.be.ok;
        });
        it('Should validate MRNMIA02E45L219X', () => {
            Validator.isValid('MRNMIA02E45L219X').should.be.ok;
        });
        it('Should validate GSTPPP31C06D620Z', () => {
            Validator.isValid('GSTPPP31C06D620Z').should.be.ok;
        });

        it('Should not validate VRNGNY07D68C351K', () => {
            Validator.isValid('VRNGNY07D68C351K').should.be.false;
        });
        it('Should not validate GSTPPP99C06D620V', () => {
            Validator.isValid('GSTPPP99C06D620V').should.be.false;
        });
    });
};