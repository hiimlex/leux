import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import { terser } from "rollup-plugin-terser";

import styles from "rollup-plugin-styles";

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
			styles({
				minimize: true,
				include: ["**/*.scss", "**/*.css"],
				mode: [
					"inject",
					{ container: "head", singleTag: true, prepend: true, attributes: { id: "leuxCSS" } },
				],
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
