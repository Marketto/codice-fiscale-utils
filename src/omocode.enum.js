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
 * @namespace Omocode
 * @returns {Proxy}
 * @property {number} L
 * @property {number} M
 * @property {number} N
 * @property {number} P
 * @property {number} Q
 * @property {number} R
 * @property {number} S
 * @property {number} T
 * @property {number} U
 * @property {number} V
 */
export default Object.freeze(new Proxy({ OMOCODE }, {
    get(receiver, name) {
        if(typeof name  === 'string' && receiver.OMOCODE.includes(name)) {
            return receiver.OMOCODE.indexOf(name);
        }
        return this[name] || receiver.OMOCODE[name] || receiver[name];
    }
}));