import rollupPluginTs from "@wessberg/rollup-plugin-ts";
import pkg from "./package.json";
import tsconfig from "./tsconfig.json";
import { terser } from "rollup-plugin-terser";
import builtins from "rollup-plugin-node-builtins";
import jsonPlugin from "@rollup/plugin-json";
import license from "rollup-plugin-license";
import path from "path";

const baseConf = {
    external: [
        ...Object.keys(pkg.dependencies || {}),
    ],
    input: "src/index.ts",
    output: {
        exports: "named",
        globals: {
            "@marketto/diacritic-remover": "DiacriticRemover",
            "moment": "moment",
        },
        name: "CodiceFiscaleUtils",
        sourceMap: true,
    },
    plugins: [
        license({
            banner: {
                content: {
                    file: path.join(".", "src/banner"),
                },
            },
            cwd: __dirname,
            sourcemap: true,
        }),
    ],
};

const rollupCjsConf = rollupPluginTs({
    tsconfig: {
        ...tsconfig.compilerOptions,
        declaration: false,
    },
});
const rollupModuleConf = rollupPluginTs({
    tsconfig: {
        ...tsconfig.compilerOptions,
        declaration: true,
        module: "ESNext",
        target: "ESNext",
    },
});
const rollupBrowserConf = rollupPluginTs({
    tsconfig: {
        ...tsconfig.compilerOptions,
        declaration: false,
        module: "iife",
        namedExports: {},
        target: "ES2015",
    },
});

export default [
    {
        ...baseConf,
        output: {
            ...baseConf.output,
            file: pkg.main,
            format: "cjs",
        },
        plugins: [
            builtins(),
            rollupCjsConf,
            jsonPlugin({
                namedExports: false,
                preferConst: true,
            }),
            ...baseConf.plugins,
        ],
    },
    {
        ...baseConf,
        output: {
            ...baseConf.output,
            file: pkg.module,
            format: "esm",
        },
        plugins: [
            builtins(),
            rollupModuleConf,
            jsonPlugin({
                namedExports: false,
                preferConst: true,
            }),
            ...baseConf.plugins,
        ],
    },
    {
        ...baseConf,
        output: {
            ...baseConf.output,
            file: "dist/codice-fiscale-utils.bundle.js",
            format: "iife",
        },
        plugins: [
            builtins(),
            rollupBrowserConf,
            jsonPlugin({
                namedExports: false,
                preferConst: true,
            }),
            ...baseConf.plugins,
        ],
    },
    {
        ...baseConf,
        output: {
            ...baseConf.output,
            file: "dist/codice-fiscale-utils.bundle.min.js",
            format: "iife",
        },
        plugins: [
            builtins(),
            rollupBrowserConf,
            jsonPlugin({
                namedExports: false,
                preferConst: true,
            }),
            terser(),
            ...baseConf.plugins,
        ],
    },
];
