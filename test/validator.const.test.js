import chai from 'chai';
import chaiThings from 'chai-things';
chai.use(chaiThings);
chai.should();
import Belfiore from '../src/belfiore';
import VALIDATOR from '../src/validator.const';
const belfioreCodes = Belfiore.toArray().map(({belfioreCode}) => belfioreCode);
const belfioreCodeMatcher = new RegExp(`^(?:${VALIDATOR.BELFIORE_CODE_MATCHER})$`, 'giu');

describe('CodiceFiscaleUtils:VALIDATOR', () => {
    describe('Belfiore Codes', () => {
        it ('Should validate all codes', () => {
            belfioreCodes.every(belfioreCode => (belfioreCode.match(belfioreCodeMatcher) || [])[0] === belfioreCode).should.be.true;
        });
    });
});