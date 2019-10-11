const chai = require('chai');
chai.use(require('chai-things'));
chai.should();

const belfioreCodes = require('../src/belfiore').toArray().map(({belfioreCode}) => belfioreCode);
const VALIDATOR = require('../src/validator.const');
const belfioreCodeMatcher = new RegExp(`^(?:${VALIDATOR.BELFIORE_CODE_MATCHER})$`, 'giu');

describe('CodiceFiscaleUtils:VALIDATOR', () => {
    describe('Belfiore Codes', () => {
        it ('Should validate all codes', () => {
            belfioreCodes.every(belfioreCode => (belfioreCode.match(belfioreCodeMatcher) || [])[0] === belfioreCode).should.be.true;
        });
    });
});