const chai = require('chai');
chai.use(require('chai-things'));
chai.should();
const { Belfiore, VALIDATOR } = require('../dist/codice-fiscale-utils.min');
const belfioreCodes = Belfiore.toArray().map(({belfioreCode}) => belfioreCode);
const belfioreCodeMatcher = new RegExp(`^(?:${VALIDATOR.BELFIORE_CODE_MATCHER})$`, 'giu');

describe('CodiceFiscaleUtils:VALIDATOR', () => {
    describe('Belfiore Codes', () => {
        it ('Should validate all codes', () => {
            belfioreCodes.every(belfioreCode => (belfioreCode.match(belfioreCodeMatcher) || [])[0] === belfioreCode).should.be.true;
        });
    });
});