const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'codice-fiscale-utils.js',
        library: 'codiceFiscaleUtils',
        libraryTarget: 'umd'
    },
    externals: {
        moment: {
            commonjs: 'moment',
            commonjs2: 'moment',
            amd: 'moment',
            var: 'moment'
        }
    }
};