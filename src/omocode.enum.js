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
module.exports = Object.freeze(new Proxy(new Set(OMOCODE), {
    get(receiver, name) {
        const index = typeof name === 'string' ? parseInt(name) : name;
        const values = this.toArray.apply(receiver);
        if (typeof index === 'number' && (index >= 0 && index <= 9)) {
            return values[index];
        } else if(values.includes(name)) {
            return values.indexOf(name);
        }
        if (typeof this[name] === 'function') {
            return (...args) => this[name].apply(receiver, args);
        }
        return this[name] || receiver[name];
    },
    toArray(){
        const a = [];
        this.forEach(v => a.push(v));
        return a;
    }
}));