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
				// minify css
				minimize: true,
				// get all scss files
				include: ["**/*.scss"],
				// inject css in html head
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
				include: ["src/**/*.{js,ts,jsx,tsx}"],
				exclude: ["src/**/*.scss"],
			}),
			typescript({
				tsconfig: "./tsconfig.json",
				include: ["src/**/*", "*.scss"],
				exclude: ["docs", "dist", "node_modules", ".vscode", ".storybook"],
			}),
			resolve({ extensions: [".ts", ".tsx"] }),
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
