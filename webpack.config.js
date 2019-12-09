const path = require('path');
const { BannerPlugin } = require('webpack');
const pkg = require('./package.json');

const licenseBanner = `
${pkg.name} ${pkg.version}
Copyright (c) 2019, ${pkg.author}
License: ${pkg.license}
============================================================
CITIES_COUNTRIES uses material from the following authors:
- Agenzia delle Entrate             -   License: CC-BY 4.0
- Istituto nazionale di Statistica  -   License: CC-BY 3.0
- Ministero dell'Interno            -   License: CC-BY 4.0
`;

module.exports = [
    {
        filenamePrefix: 'cjs',
        libraryTarget: 'commonjs'
    },
    {
        filenamePrefix: 'system',
        libraryTarget: 'system',
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
        filename: `codice-fiscale-utils${filenamePrefix ? `.${filenamePrefix}` : ''}.min.js`,
        libraryTarget
    },
    module: {
        rules
    },
    externals: {
        moment: 'moment',
        '@marketto/diacritic-remover': 'DiacriticRemover'
    },
    plugins: [
        new BannerPlugin({
            banner: licenseBanner
        })
    ],
    devtool: 'source-map'
}));