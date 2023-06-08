import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import { terser } from "rollup-plugin-terser";

import postcss from "rollup-plugin-postcss";
// eslint-disable-next-line node/no-missing-import
import simplevars from "postcss-simple-vars";
// eslint-disable-next-line node/no-missing-import
import cssnested from "postcss-nested";
// eslint-disable-next-line node/no-missing-import
import cssimport from "postcss-import";

import cssmerge from "rollup-plugin-merge-and-inject-css";

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import eslint from "@rollup/plugin-eslint";
import eslintConfig from "./.eslintrc.json";

import packageJson from "./package.json";

export default [
	{
		input: "src/index.ts",
		output: [
			{
				file: packageJson.main,
				format: "cjs",
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			postcss({
				inject: true,
				minimize: true,
				plugins: [cssimport(), simplevars(), cssnested()],
				include: ["src/**/*.scss"],
			}),
			cssmerge({
				id: "leux.min.css",
			}),
			peerDepsExternal(),
			commonjs(),
			eslint({
				throwOnError: true,
				baseConfig: eslintConfig,
			}),
			typescript({
				tsconfig: "./tsconfig.json",
				include: ["src/**/*"],
				exclude: ["docs", "dist", "node_modules", ".vscode", ".storybook"],
			}),
			resolve(),
			terser(),
		],
	},
	{
		input: "dist/esm/index.d.ts",
		output: [{ file: "dist/index.d.ts", format: "esm" }],
		plugins: [dts()],
		external: [/\.scss$/],
	},
];
