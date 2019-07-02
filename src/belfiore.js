const CITIES_COUNTRIES = require('./asset/cities-countries.json');
const moment = require('moment');

class BelfioreGenericList {
    /**
     * @constructor
     * @param {Array<Object>} placeList 
     * @memberof BelfioreEnum
     */
    constructor(data){
        Object.defineProperties(this, {
            _data: {
                value: data,
                enumerable: false,
                configurable: false,
                writable: false
            }
        });

        this._data.forEach((place, index) => {
            this[index] = place;
            this[place.belfioreCode] = place;
        });
    }

    /**
     * List of places as Array instance
     * @method
     * @returns {Array<Object>} List of places
     */
    toArray() {
        return this._data;
    }

    /**
     * Filter Places by ones active in the given date
     * @param {string|Date|moment|Array<numbers>} [date=moment()] ISO9601 String date, Date Object or moment instance or Array of numbers [YYYY, MM, DD]
     * @return {BelfioreGenericList|null}
     */
    active(date = moment()) {
        const dateArray = ![].concat(date).some(param => typeof param !== 'number') && [].concat(date) ;
        if (!(typeof date === 'string' || dateArray || date instanceof Date || date instanceof moment || !date)) {
            return null;
        }
        const targetDate = date ? moment(dateArray || date) : moment();
        if (!targetDate.isValid()) {
            return null;
        }
        const filteredData = this._data
            .filter(({
                creationDate = moment('1861-01-01'), 
                expirationDate = moment('9999-12-31')
            }) => targetDate.isBetween(creationDate, expirationDate));
        return new this.constructor(filteredData);
    }

    /**
     * Search places matching given name
     * @param {string} place Place name
     * @return {BelfioreGenericList|null}
     */
    searchByName(place) {
        if (!place || typeof place !== 'string') {
            return this;
        }
        return new this.constructor(this._data.filter(({name}) => (new RegExp(place, 'i')).test(name)));
    }

    /**
     * Find place matching given name, retuns place object if provided name match only 1 result
     * @param {string} name Place name
     * @return {Object|null}
     */
    findByName(place) {
        let results = this.searchByName(place).toArray();
        if (results.length === 1) {
            return results[0];
        }
        results = results.filter(({name}) => (new RegExp(`^${place}$`, 'i')).test(name));
        if (results.length === 1) {
            return results[0];
        }
        return null;
    }
}

class BelfioreList extends BelfioreGenericList {
    /**
     * @constructor
     * @param {Array<Object>} data Place List
     * @param {*} licenses Licenses
     * @param {*} sources Sources Uris
     * @memberof BelfioreEnum
     */
    constructor(data, licenses, sources){
        super(data);

        this.cities = new BelfioreCities(this._data.filter(({belfioreCode}) => !(/^Z/).test(belfioreCode)));

        this.countries = new BelfioreGenericList(this._data.filter(({belfioreCode}) => (/^Z/).test(belfioreCode)));

        Object.assign(this, {
            licenses,
            sources
        });
    }
}

class BelfioreCities extends BelfioreGenericList {
    /**
     * @constructor
     * @param {Array<Object>} placeList 
     * @memberof BelfioreEnum
     */
    constructor(data){
        super(data);
    }

    /**
     * List all cities or ones by the given province code
     * @param {string} [provinceCode] 2 char province code
     * @returns {BelfioreGenericList|null} List of cities filtered by given province
     */
    byProvince(provinceCode) {
        return (typeof provinceCode === 'string' && provinceCode.trim().length === 2) ?
            new BelfioreGenericList(this._data.filter(({province}) => province === provinceCode.trim().toUpperCase())) :
            this;
    }
}

/**
 * @name Belfiore
 * @constant {Object} Belfiore
 * @memberof CodiceFiscaleUtils
 */
module.exports = new BelfioreList(
    CITIES_COUNTRIES.data.map(entry => Object.freeze(entry)),
    Object.freeze(CITIES_COUNTRIES.licenses),
    Object.freeze(CITIES_COUNTRIES.sources)
);