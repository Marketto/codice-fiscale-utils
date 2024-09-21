import path from "path";
import pkg from "./package.json" with { type: "json" };;
import tsconfig from "./tsconfig.json" with { type: "json" };
import rollupPluginTs from "rollup-plugin-ts";
import terser from "@rollup/plugin-terser";
import builtins from "rollup-plugin-node-builtins";
import license from "rollup-plugin-license";
import dts from 'rollup-plugin-dts'

const baseConf = {
    external: [
        ...Object.keys(pkg.dependencies || {}),
    ],
    input: "src/index.ts",
    output: {
        exports: "named",
        globals: {
            "@marketto/diacritic-remover": "DiacriticRemover",
            "dayjs": "dayjs",
        },
        name: pkg.config.name,
        sourcemap: true,
    },
    plugins: [
        license({
            banner: {
                content: {
                    file: path.join(".", "src/banner"),
                },
            },
            //cwd: __dirname,
        }),
    ],
};

const rollupCjsConf = rollupPluginTs({
    tsconfig: {
        ...tsconfig.compilerOptions,
    },
    hook: {
        declarationStats: declarationStats => console.log(declarationStats)
    }
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
    // JS
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
    // MJS
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
                sourceMap: true
            }),
            ...baseConf.plugins,
        ],
    },
    // JS minified IIFE
    {
        ...baseConf,
        output: {
            ...baseConf.output,
            file: `dist/${pkg.config.iifeFileName}.bundle.min.js`,
            format: "iife",
        },
        plugins: [
            builtins({
                sourcemap: true
            }),
            rollupBrowserConf,
            terser({
                sourceMap: true
            }),
            ...baseConf.plugins,
        ],
    },
    // typings.d.ts
    {
        external: [
            ...Object.keys(pkg.dependencies || {}),
        ],
        input: "src/index.ts",
        output: [{
            file: pkg.typings,
            format: 'es',
            globals: baseConf.output.globals,
        }],
        plugins: [
            dts(),
        ],
    }
];
