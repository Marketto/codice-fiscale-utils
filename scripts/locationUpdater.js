const request = require('request-promise-native');
const JSZip = require('jszip');
const csvtojson = require('csvtojson');
const fs = require('fs');
const path = require('path');
const moment = require('moment');
const _ = require('lodash');

const locationResources = require('./location-resources.json');

const detinationPath = path.join(__dirname, '../src/asset');

const downloadUnzip = (uri) => request({
    method: 'GET',
    uri,
    resolveWithFullResponse: true,
    encoding: null
})
    .then(({body}) => body)
    .then(JSZip.loadAsync)
    .then(zip => zip.file(/\.csv$/i)[0].async('string'));


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

const dataMapper = defaultSourceCode => data => data
    .map(obj => cleanObject({
        belfioreCode: obj['Codice AT'] || obj['CODCATASTALE'],
        name: obj['Denominazione IT'] || obj['Denominazione (b)'] || obj['DENOMINAZIONE_IT'],
        newIstatCode: obj['Codice Stato/Territorio_Figlio'],
        iso3166alpha2: obj['Codice ISO 3166 alpha2'],
        iso3166alpha3: obj['Codice ISO 3166 alpha3'],
        creationDate: obj['DATAISTITUZIONE'] && moment(obj['DATAISTITUZIONE'], 'YYYY-MM-DD').startOf('day').toJSON(),
        expirationDate: (obj['STATO'] === 'C' && obj['DATACESSAZIONE'] && moment(obj['DATACESSAZIONE'], 'YYYY-MM-DD').endOf('day').toJSON()) || (obj['Anno evento'] && moment(obj['Anno evento'], 'YYYY').endOf('year').toJSON()),
        province: obj['SIGLAPROVINCIA'],
        region: parseInt(obj['IDREGIONE']),
        istatCode: parseInt(obj['CODISTAT'] || obj['Codice ISTAT']),
        dataSource: obj['FONTE'] || defaultSourceCode,
        active: obj['STATO'] === 'A' || !(['C', 'D'].includes(obj['STATO']) || obj['Anno evento'] || obj['DATACESSAZIONE'])
    }))
    .filter(({belfioreCode}) => belfioreCode);

const isEqual = (a, b, ...args) => b ? _.isEqual(a,b) && (!args.length || isEqual(a, ...args)) : !!a;

const merge = (...entries) => {
    return cleanObject(_.mergeWith(..._.cloneDeep(entries).reverse(), (valD, valS, key) => {
        switch (key) {
        case 'creationDate':
            return valS && valD ? moment.min(moment(valD), moment(valS)).toJSON() : null;
        case 'expirationDate':
            return valD && valS ? moment.max(moment(valD), moment(valS)).toJSON() : null;
        case 'active':
            return valS || valD;
        default:
            return valD;
        }
    }));
};

const deDupes = data => Object.values(_.groupBy(data, 'belfioreCode')).map(entry => isEqual(...entry) ? entry[0] : merge(...entry));


Promise.all(locationResources.resources.map(async ({uri, delimiter, defaultSourceCode}) => Promise
    .all(([].concat(uri))
        .filter(uri => !!uri)
        .map(singleUri => downloadResource(singleUri, delimiter)
            .then(dataMapper(defaultSourceCode))
            .then(deDupes)
        )
    )
    .then((data) => [[], []].concat(data).reduce((a, b) => [].concat(a).concat(b)))
))
    .then((data) => [[], []].concat(data).reduce((a, b) => [].concat(a).concat(b)))
    .then(sourceDataApplier({
        licenses: locationResources.licenses,
        sources: [].concat(locationResources.resources.map(({uri}) => uri)).reduce((a, b) => a.concat(b)).filter(uri => !!uri)
    }))
    .then(data => new Promise((resolve, reject) => fs.writeFile(path.join(detinationPath, 'cities-countries.json'), JSON.stringify(data, ' ', 4), (err) => (err ? reject(err) : resolve()))));

Promise.all(Object.entries(locationResources.licenseFiles).map(([licenseId, uri]) => downloadText(uri).then(data => ({ [licenseId]: data }))))
    .then(licenses => Object.assign({}, ...licenses))
    .then((licenses) => Promise.all(Object.values(locationResources.licenses)
        .map(({license, name}) => new Promise((resolve, reject) => fs.writeFile(path.join(detinationPath, `${name.toUpperCase().replace(/[^A-Z\d]/g, '_')}.LICENSE`), licenses[license], (err) => (err ? reject(err) : resolve()))))
    ));