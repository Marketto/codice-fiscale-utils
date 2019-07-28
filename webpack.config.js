const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'codice-fiscale-utils.min.js',
        library: 'codiceFiscaleUtils',
        libraryTarget: 'umd',
        globalObject: 'typeof self !== \'undefined\' ? self : this'
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