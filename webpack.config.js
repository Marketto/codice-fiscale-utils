const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'codice-fiscale-utils.js',
        library: 'codiceFiscaleUtils',
        libraryTarget: 'umd'
    }
};