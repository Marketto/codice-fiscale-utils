import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';
import pluginJson from 'rollup-plugin-json';
//import builtins from 'rollup-plugin-node-builtins';
import babel from 'rollup-plugin-babel'
import license from 'rollup-plugin-license';
import path from 'path';


const baseConf = {
    input: pkg.module,
    external: [
        ...Object.keys(pkg.dependencies || {})
    ],
    output: {
        globals: {
            moment: 'moment',
            '@marketto/diacritic-remover': 'DiacriticRemover'
        }
    },
    plugins: [
        pluginJson(),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        terser(),
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
                sourcemap: true,
                ...baseConf.output
            },
            {
                file: pkg.browser,
                format: 'amd',
                name: 'CodiceFiscaleUtils',
                sourcemap: true,
                ...baseConf.output
            }
        ],
        plugins: [
            ...baseConf.plugins
        ]
    }
];