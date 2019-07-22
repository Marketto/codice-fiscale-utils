const OMOCODE = [
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V'
];

/**
 * @enum Omocode
 * @memberof CodiceFiscaleUtils
 */
module.exports = Object.freeze(new Proxy(OMOCODE, {
    get(receiver, name) {
        if(receiver.includes(name)) {
            return receiver.indexOf(name);
        }
        return this[name] || receiver[name];
    }
}));