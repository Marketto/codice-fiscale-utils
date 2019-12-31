import Parser from '../../src/parser';

export default async () => {
    describe('cfDecode', () => {
        describe('Lowercase', () => {
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
        describe('Lowercase', () => {
            it('Should return matching infos from vrngny07d68c351v', () => {
                const decoded = Parser.cfDecode('vrngny07d68c351v');
                decoded.should.be.a('object');
                decoded.surname.should.be.equal('v*r*n*');
                decoded.name.should.be.equal('g*n*y*');
                decoded.year.should.be.equal(2007);
                decoded.month.should.be.equal(3);
                decoded.day.should.be.equal(28);
                decoded.gender.should.be.equal('F');
                decoded.place.should.be.equal('CATANIA');
            });
            it('Should return matching infos from mrnmia02e45l219x', () => {
                const decoded = Parser.cfDecode('mrnmia02e45l219x');
                decoded.should.be.a('object');
                decoded.surname.should.be.equal('m*r*n*');
                decoded.name.should.be.equal('mia*');
                decoded.year.should.be.equal(2002);
                decoded.month.should.be.equal(4);
                decoded.day.should.be.equal(5);
                decoded.gender.should.be.equal('F');
                decoded.place.should.be.equal('TORINO');
            });
        });
    });
};