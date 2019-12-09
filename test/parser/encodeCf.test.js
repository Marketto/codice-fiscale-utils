import Parser from '../../src/parser';

export default async () => {
    describe('encodeCf', () => {
        it('Should return VRNGNY07D68C351V', () => {
            Parser.encodeCf({
                surname: 'Veronesi',
                name: 'Genny',
                year: 1907,
                month: 3,
                day: 28,
                gender: 'F',
                place: 'Catania'
            }).should.be.equal('VRNGNY07D68C351V');
        });
        it('Should return MRNMIA02E45L219X', () => {
            Parser.encodeCf({
                surname: 'Marin',
                name: 'Mia',
                year: 1902,
                month: 4,
                day: 5,
                gender: 'F',
                place: 'Torino'
            }).should.be.equal('MRNMIA02E45L219X');
        });
    });
};