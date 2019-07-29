const GENDERS = {
    M: 0,
    F: 40
};

/**
 * @namespace Gender
 * @property {number} M 0
 * @property {number} F 40
 * @property {function({number})} parseNumberToGender
 */
module.exports = Object.freeze(new Proxy(GENDERS, {
    get(receiver, name) {
        if (typeof name  === 'string') {
            const index = parseInt(name);
            const values = this.toArray.apply(receiver);
            if (!isNaN(index) && (index >= 0 && index <= 31 || index >= 40 && index <= 71)) {
                return values[Math.floor(index/40)];
            }
            if (typeof this[name] === 'function') {
                return (...args) => this[name].apply(receiver, args);
            }
        }
        return this[name] || receiver[name];
    },

    /**
     * Return an array of Gender constants
     *
     * @returns {Array<string>} List of Gender keys
     * @memberof Gender
     */
    toArray(){
        return Object.keys(this);
    }
}));