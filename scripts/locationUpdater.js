const request = require('request-promise-native');
const JSZip = require('jszip');
const csvtojson = require('csvtojson');
const fs = require('fs');
const path = require('path');

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


const downloadCsv = (uri) => request({
    method: 'GET',
    uri,
    resolveWithFullResponse: true
})
    .then(({body}) => body);

const parseCsv = delimiter => file => csvtojson({
    trim: true,
    delimiter
}).fromString(file);

const sourceDataApplier = (name, source) => data => ({data, source, name});

const downloadResource = (uri, delimiter) => ((/\.(?:zip|gz)$/i).test(uri) ? downloadUnzip(uri) : downloadCsv(uri))
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
        if (cleanValue !== undefined) {
            out[key] = cleanValue;
        }
    });
    return out;
};

const dataMapper = data => data
    .map(obj => cleanObject({
        belfioreCode: obj['Codice AT'] || obj['CODCATASTALE'],
        name: obj['Denominazione IT'] || obj['Denominazione (b)'] || obj['DENOMINAZIONE_IT'],
        newIstatCode: obj['Codice Stato/Territorio_Figlio'],
        iso3166alpha2: obj['Codice ISO 3166 alpha2'],
        iso3166alpha3: obj['Codice ISO 3166 alpha3'],
        expirationDate: obj['Anno evento'] || obj['DATACESSAZIONE'],
        creationDate: obj['DATAISTITUZIONE'],
        province: obj['SIGLAPROVINCIA'],
        region: obj['IDREGIONE'],
        istatCode: parseInt(obj['CODISTAT'] || obj['Codice ISTAT'])
    }))
    .filter(record => Object.keys(record).length);

locationResources.forEach(async ({uri, source, delimiter, name}) => {
    await Promise.all(([].concat(uri))
        .filter(uri => !!uri)
        .map(singleUri => downloadResource(singleUri, delimiter)
            .then(dataMapper)
        )
    )
        .then((data) => [[], []].concat(data).reduce((a, b) => [].concat(a).concat(b)))
        .then(sourceDataApplier(name, Object.assign({uri}, source)))
        .then(data => new Promise((resolve, reject) => fs.writeFile(path.join(detinationPath, `${name}.json`), JSON.stringify(data, ' ', 4), (err) => (err ? reject(err) : resolve()))));
});