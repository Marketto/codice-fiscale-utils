const CITIES_COUNTRIES = require('./asset/cities-countries.json');

/**
 * @name Belfiore
 * @constant {Object} Belfiore
 * @memberof CodiceFiscaleUtils
 */
module.exports = Object.freeze(new Proxy(CITIES_COUNTRIES.data, {
    get(receiver, name) {
        if (typeof name === 'string' && (/^[A-Z]\d{3}$/).test(name)) {
            return receiver.find(({belfioreCode}) => belfioreCode === name);
        }
        if (name === 'licenses' || name === 'sources') {
            return CITIES_COUNTRIES[name];
        }
        return this[name] || receiver[name];
    },
    cities(filterByProvince) {
        return this.filter(({belfioreCode, province}) => (/^[A-Y]/).test(belfioreCode) && (!province || province === filterByProvince));
    },
    countries() {
        return this.filter(({belfioreCode}) => (/^Z/).test(belfioreCode));
    }
}));