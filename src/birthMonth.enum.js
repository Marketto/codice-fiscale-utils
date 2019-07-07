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
module.exports = Object.freeze(new Proxy(new Set(MONTHS), {
    get(receiver, name) {
        const index = typeof name === 'string' ? parseInt(name) : name;
        const values = this.toArray.apply(receiver);
        if (typeof index === 'number' && (index >= 0 && index <= 11)) {
            return values[index];
        } else if(values.includes(name)) {
            return values.indexOf(name);
        }
        if (typeof this[name] === 'function') {
            return (...args) => this[name].apply(receiver, args);
        }
        return this[name] || receiver[name];
    },
    /**
     * @method toArray
     * @returns {Array<string>} List of month codes
     */
    toArray(){
        const a = [];
        this.forEach(v => a.push(v));
        return a;
    }
}));