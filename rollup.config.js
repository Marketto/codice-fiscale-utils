import rollupPluginTs from "@wessberg/rollup-plugin-ts";
import pkg from "./package.json";
import tsconfig from "./tsconfig.json";
import { terser } from "rollup-plugin-terser";
import builtins from "rollup-plugin-node-builtins";
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
        sourcemap: true,
    },
    plugins: [
        license({
            banner: {
                content: {
                    file: path.join(".", "src/banner"),
                },
            },
            cwd: __dirname,
        }),
    ],
};

const rollupCjsConf = rollupPluginTs({
    tsconfig: {
        ...tsconfig.compilerOptions,
    },
});
const rollupModuleConf = rollupPluginTs({
    tsconfig: {
        ...tsconfig.compilerOptions,
        module: "ESNext",
        target: "ESNext",
    },
});
const rollupBrowserConf = rollupPluginTs({
    tsconfig: {
        ...tsconfig.compilerOptions,
        module: "es2015",
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
            sourcemap: false,
        },
        plugins: [
            builtins(),
            rollupCjsConf,
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
            builtins({
                sourcemap: true
            }),
            rollupModuleConf,
            terser({
                sourcemap: true
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
            builtins({
                sourcemap: true
            }),
            rollupBrowserConf,
            terser({
                sourcemap: true
            }),
            ...baseConf.plugins,
        ],
    },
];
