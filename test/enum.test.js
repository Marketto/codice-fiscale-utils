const chai = require('chai');
chai.use(require('chai-things'));
const expect = chai.expect;
chai.should();

describe('CodiceFiscaleUtils:Enums', () => {
    describe('gender', () => {
        const Gender = require('../lib/gender.enum');
        describe('gender.toArray()', () => {
            it('Should return ["M", "F"]', () => {
                Gender.toArray().should.be.an('array');
                Gender.toArray().should.include('M');
                Gender.toArray().should.include('F');
            });
        });
        it('Should return M', () => {
            Gender.M.should.be.equal('M');
            for (let i = 0; i<32; i++){
                Gender[i].should.be.equal('M');
            }
        });
        it('Should return F', () => {
            Gender.F.should.be.equal('F');
            for (let i = 40; i<72; i++){
                Gender[i].should.be.equal('F');
            }
        });
        it('Should return undefined', () => {
            expect(Gender.X).to.be.undefined;
            for (let i = -7; i<0; i++){
                expect(Gender[i]).to.be.undefined;
            }
            for (let i = 32; i<40; i++){
                expect(Gender[i]).to.be.undefined;
            }
            for (let i = 72; i<90; i++){
                expect(Gender[i]).to.be.undefined;
            }
        });
    });
});