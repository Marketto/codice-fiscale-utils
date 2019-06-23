const GENDERS = ['M', 'F'];

/**
 * @enum Gender
 * @memberof CodiceFiscaleUtils
 */
module.exports = Object.freeze(new Proxy(new Set(GENDERS), {
    get(receiver, name) {
        const index = parseInt(name);
        const values = this.toArray.apply(receiver);
        if ((index >= 0 && index <= 31) || (index >= 40 && index <= 71)) {
            return values[Math.floor(index/40)];
        } else if(values.includes(name)) {
            return name;
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