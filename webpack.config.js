const path = require('path');

module.exports = [
    {
        libraryTarget: 'commonjs'
    },
    {
        filenamePrefix: 'amd',
        libraryTarget: 'amd',
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules|docs|test|scripts|dist/,
                use: ['babel-loader']
            }
        ]
    }
].map(({filenamePrefix, libraryTarget, rules}) => ({
    entry: './src/index.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `codice-fiscale-utils${filenamePrefix ? ('.' + filenamePrefix) : ''}.min.js`,
        libraryTarget
    },
    module: {
        rules
    },
    externals: {
        moment: {
            commonjs: 'moment',
            commonjs2: 'moment',
            amd: 'moment',
            var: 'moment'
        }
    },
    devtool: 'source-map'
}));