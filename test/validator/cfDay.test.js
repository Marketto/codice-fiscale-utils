import Validator from '../../src/validator';

export default async () => {
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
            describe('Days', () => {
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
    });
};