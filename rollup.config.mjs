import { readFileSync } from "node:fs";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

const pkg = JSON.parse(readFileSync(new URL("./package.json", import.meta.url)));
const tsconfig = JSON.parse(
    readFileSync(new URL("./tsconfig.json", import.meta.url))
);
const banner = readFileSync(new URL("./src/banner", import.meta.url), "utf8")
    .replace(/<%= pkg\.name %>/g, pkg.name)
    .replace(/<%= pkg\.version %>/g, pkg.version)
    .replace(/<%= pkg\.author %>/g, pkg.author)
    .replace(/<%= pkg\.license %>/g, pkg.license);
const externalDependencies = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
];
const isExternal = id => externalDependencies.some(
    dependency => id === dependency || id.startsWith(`${dependency}/`)
);
const normalizeLineEndings = {
    name: "normalize-line-endings",
    generateBundle: (_options, bundle) => {
        Object.values(bundle).forEach(output => {
            if (output.type === "chunk") {
                output.code = output.code.replace(/\r\n/g, "\n");
            }
        });
    },
};

const baseConf = {
    external: isExternal,
    input: "src/index.ts",
    output: {
        exports: "named",
        globals: {
            "@marketto/diacritic-remover": "DiacriticRemover",
            "dayjs": "dayjs",
            "dayjs/plugin/utc.js": "dayjs_plugin_utc",
        },
        name: pkg.config.name,
        sourcemap: true,
        banner,
    },
};

const rollupCjsConf = typescript({
    tsconfig: "./tsconfig.json",
    include: ["src/**/*.ts"],
    compilerOptions: {
        ...tsconfig.compilerOptions,
        module: "ESNext",
        declaration: false,
        inlineSourceMap: false,
        sourceMap: false,
    },
});
const rollupModuleConf = typescript({
    tsconfig: "./tsconfig.json",
    include: ["src/**/*.ts"],
    compilerOptions: {
        ...tsconfig.compilerOptions,
        module: "ESNext",
        target: "ESNext",
        declaration: false,
        inlineSourceMap: false,
        sourceMap: true,
    },
});
const rollupBrowserConf = typescript({
    tsconfig: "./tsconfig.json",
    include: ["src/**/*.ts"],
    compilerOptions: {
        ...tsconfig.compilerOptions,
        module: "ESNext",
        target: "ES2015",
        declaration: false,
        inlineSourceMap: false,
        sourceMap: false,
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
            rollupCjsConf,
            normalizeLineEndings,
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
            rollupModuleConf,
            terser({
                sourceMap: true
            }),
        ],
    },
    // JS minified IIFE
    {
        ...baseConf,
        output: {
            ...baseConf.output,
            file: `dist/${pkg.config.iifeFileName}.bundle.min.js`,
            format: "iife",
            sourcemap: false,
        },
        plugins: [
            rollupBrowserConf,
            terser({
                sourceMap: true
            }),
        ],
    },
    // typings.d.ts
    {
        external: isExternal,
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
