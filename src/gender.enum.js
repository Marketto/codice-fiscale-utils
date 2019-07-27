const GENDERS = {
    M: 0,
    F: 40
};

/**
 * @enum Gender
 * @memberof CodiceFiscaleUtils
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
     * @memberof CodiceFiscaleUtils.Gender
     */
    toArray(){
        return Object.keys(this);
    }
}));