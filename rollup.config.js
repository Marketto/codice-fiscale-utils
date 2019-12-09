import pkg from './package.json';
// import commonJs from 'rollup-plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';
import pluginJson from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import license from 'rollup-plugin-license';
import path from 'path';


const baseConf = {
    input: 'src/',
    external: [
        ...Object.keys(pkg.dependencies || {})
    ],
    output: {
        name: 'CodiceFiscaleUtils',
        sourcemap: true,
        globals: {
            moment: 'moment',
            '@marketto/diacritic-remover': 'DiacriticRemover'
        }
    },
    plugins: [
        nodeResolve(),
        //commonJs(),
        pluginJson(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        //terser(),
        license({
            cwd: __dirname,
            banner: {        
                content: {
                    file: path.join('.', 'src/banner'),
                },
            },        
        }),
    ]
};

export default [
    {
        ...baseConf,
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                ...baseConf.output
            },
            {
                file: 'dist/codice-fiscale-utils.bundle.min.js',
                format: 'iife',
                ...baseConf.output
            }
        ],
        plugins: [
            ...baseConf.plugins
        ]
    }
];