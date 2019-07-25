const request = require('request-promise-native');
const JSZip = require('jszip');
const csvtojson = require('csvtojson');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const _ = require('lodash');

const locationResources = require('./location-resources.json');

const LICENSE_KEYS = Object.keys(locationResources.licenses);

const detinationPath = path.join(__dirname, '../src/asset');
const DEFAULT_CREATION_DATE = '1861-01-01';

const downloadUnzip = (uri) => request({
    method: 'GET',
    uri,
    resolveWithFullResponse: true,
    encoding: null
})
    .then(({body}) => body)
    .then(JSZip.loadAsync)
    .then(zip => zip.file(/\.csv$/i)[0].async('binarystring'));


const downloadText = (uri) => request({
    method: 'GET',
    uri,
    resolveWithFullResponse: true
})
    .then(({body}) => body);

const parseCsv = delimiter => file => csvtojson({
    trim: true,
    delimiter
}).fromString(file);

const sourceDataApplier = cfg => data => ({data, ...cfg});

const downloadResource = (uri, delimiter) => ((/\.(?:zip|gz)$/i).test(uri) ? downloadUnzip(uri) : downloadText(uri))
    .then(parseCsv(delimiter));

const cleanField = (value) => {
    if (typeof value === 'number' && isNaN(value)) {
        return;
    }
    if (typeof value !== 'string') {
        return value;
    }
    const trimmed = (value || '').trim();
    if ((/^(?:n\.?\s*d\.?|-)$/i).test(value)) {
        return;
    }
    return trimmed || undefined;
};

const cleanObject = (obj) => {
    const out = {};
    Object.entries(obj).forEach(([key, value]) => {
        const cleanValue = cleanField(value);
        if (cleanValue !== undefined && cleanValue !== null) {
            out[key] = cleanValue;
        }
    });
    return out;
};

const belfioreToInt = code => (code.charCodeAt()-65)*10**3 + parseInt(code.substr(1));
const dataMapper1 = defaultSourceCode => data => data
    .map(obj => cleanObject({
        belfioreCode: obj['Codice AT'] || obj['CODCATASTALE'],
        name: obj['Denominazione IT'] || obj['Denominazione (b)'] || obj['DENOMINAZIONE_IT'],
        // newIstatCode: obj['Codice Stato/Territorio_Figlio'],
        iso3166alpha2: obj['Codice ISO 3166 alpha2'],
        // iso3166alpha3: obj['Codice ISO 3166 alpha3'],
        creationDate: obj['DATAISTITUZIONE'] && moment(obj['DATAISTITUZIONE'], 'YYYY-MM-DD').startOf('day').toISOString(),
        expirationDate: obj['STATO'] === 'C' && obj['DATACESSAZIONE'] && moment(obj['DATACESSAZIONE'], 'YYYY-MM-DD').endOf('day').toISOString() ||
            obj['Anno evento'] && moment(obj['Anno evento'], 'YYYY').endOf('year').toISOString(),
        province: obj['SIGLAPROVINCIA'],
        // region: parseInt(obj['IDREGIONE']),
        // istatCode: parseInt(obj['CODISTAT'] || obj['Codice ISTAT']),
        dataSource: obj['FONTE'] || defaultSourceCode
    }))
    .filter(({belfioreCode}) => belfioreCode).sort((a, b) => belfioreToInt(a.belfioreCode)-belfioreToInt(b.belfioreCode));

const compressDataMapper = data => data.map(({
    belfioreCode,
    name,
    creationDate,
    expirationDate,
    iso3166alpha2,
    province,
    dataSource
}) => ({
    belfioreCode: belfioreToInt(belfioreCode).toString(32).padStart(3, '0'),
    name,
    creationDate: creationDate ? moment(creationDate).diff(DEFAULT_CREATION_DATE, 'days').toString(32) : undefined,
    expirationDate: expirationDate ? moment(expirationDate).diff(DEFAULT_CREATION_DATE, 'days').toString(32) : undefined,
    provinceOrCountry: province || iso3166alpha2,
    dataSource: { MI: 0, I: 1, AE: 2 }[dataSource]
}));

const dataSquasher = data => {
    const creationDates = data.filter(e => e.creationDate).map(e => e.creationDate.padStart(4, '0'));
    const expirationDates = data.filter(e => e.expirationDate).map(e => e.expirationDate.padStart(4, '0'));
    return data.length ? {
        belfioreCode: data.map(e => e.belfioreCode).join(''),
        name: data.map(e => e.name).join('|'),
        creationDate: creationDates.length ? creationDates.join('') : undefined,
        expirationDate: expirationDates.length ? expirationDates.join('') : undefined,
        provinceOrCountry: data.map(e => e.provinceOrCountry || '  ').join(''),
        dataSource: (data.length > 1 ? data.map(e => e.dataSource).reduce((a, b) => (a << 2) + b) : data[0].dataSource).toString(32)
    } : undefined;
};

const dataGrouping = data => [
    data.filter(({ creationDate, expirationDate }) => creationDate && expirationDate),
    data.filter(({ creationDate, expirationDate }) => !creationDate && expirationDate),
    data.filter(({ creationDate, expirationDate }) => creationDate && !expirationDate),
    data.filter(({ creationDate, expirationDate }) => !creationDate && !expirationDate)
].sort((a,b) => a.length - b.length);


const isEqual = (a, b, ...args) => b ? _.isEqual(a,b) && (!args.length || isEqual(a, ...args)) : !!a;

const merge = (...entries) => {
    const sortedEntries = _.cloneDeep(entries).sort((a,b) => moment(b.creationDate || DEFAULT_CREATION_DATE).diff(moment(a.creationDate || DEFAULT_CREATION_DATE),'day'));
    return cleanObject(_.mergeWith(...sortedEntries, (valD, valS, key) => {
        switch (key) {
        case 'creationDate':
            return valS && valD ? moment.min(moment(valD), moment(valS)).toISOString() : null;
        case 'expirationDate':
            return valD && valS ? moment.max(moment(valD), moment(valS)).toISOString() : null;
        case 'active':
            return valS || valD;
        default:
            return valD;
        }
    }));
};

const deDupes = data => Object.values(_.groupBy(data, 'belfioreCode')).map(entry => isEqual(...entry) ? entry[0] : merge(...entry));

const mergeLists = data => [[], []].concat(data).reduce((a, b) => [].concat(a).concat(b));
Promise.all(locationResources.resources.map(async ({uri, delimiter, defaultSourceCode}) => Promise
    .all([].concat(uri)
        .filter(uri => !!uri)
        .map(singleUri => downloadResource(singleUri, delimiter)
            .then(dataMapper1(defaultSourceCode))
            .then(deDupes)
            .then(compressDataMapper)
        )
    )
    .then(mergeLists)
))
    .then(mergeLists)
    .then(dataGrouping)
    .then(data => data.map(dataSquasher))
    .then(sourceDataApplier({
        licenses: LICENSE_KEYS.map(k => locationResources.licenses[k]),
        sources: [].concat(locationResources.resources.map(({uri}) => uri)).reduce((a, b) => a.concat(b)).filter(uri => !!uri)
    }))
    .then(data => new Promise((resolve, reject) => fs.writeFile(path.join(detinationPath, 'cities-countries.json'), JSON.stringify(data), (err) => err ? reject(err) : resolve())));

Promise.all(Object.entries(locationResources.licenseFiles).map(([licenseId, uri]) => downloadText(uri).then(data => ({ [licenseId]: data }))))
    .then(licenses => Object.assign({}, ...licenses))
    .then((licenses) => Promise.all(Object.values(locationResources.licenses)
        .map(({license, name}) => new Promise((resolve, reject) => fs.writeFile(path.join(detinationPath, `${name.toUpperCase().replace(/[^A-Z\d]/g, '_')}.LICENSE`), licenses[license], (err) => err ? reject(err) : resolve())))
    ));