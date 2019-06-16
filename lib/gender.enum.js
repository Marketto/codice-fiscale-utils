const GENDERS = ['M', 'F'];

module.exports = Object.freeze(new Proxy(new Set(GENDERS), {
    get: function (receiver, name) {
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
    toArray: function(){
        const a = [];
        this.forEach(v => a.push(v));
        return a;
    }
}));