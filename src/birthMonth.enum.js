const MONTHS = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'H',
    'L',
    'M',
    'P',
    'R',
    'S',
    'T'
];
/**
 * @namespace BirthMonth
 * @property {number} A 0
 * @property {number} B 1
 * @property {number} C 2
 * @property {number} D 3
 * @property {number} E 4
 * @property {number} H 5
 * @property {number} L 6
 * @property {number} M 7
 * @property {number} P 8
 * @property {number} R 9
 * @property {number} S 10
 * @property {number} T 11
 */
export default Object.freeze(new Proxy({ MONTHS }, {
    get(receiver, name) {
        if (typeof name  === 'string' && receiver.MONTHS.includes(name)) {
            return receiver.MONTHS.indexOf(name);
        }
        return this[name] || receiver.MONTHS[name] || receiver[name];
    }
}));