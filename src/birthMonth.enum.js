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
 * @name BirthMonth
 * @constant {Object} BirthMonth
 * @memberof CodiceFiscaleUtils
 */
module.exports = Object.freeze(new Proxy(MONTHS, {
    get(receiver, name) {
        if (typeof name  === 'string' && receiver.includes(name)) {
            return receiver.indexOf(name);
        }
        return this[name] || receiver[name];
    }
}));