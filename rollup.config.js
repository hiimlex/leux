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

import peerDepsExternal from "rollup-plugin-peer-deps-external";
import eslint from "@rollup/plugin-eslint";
import eslintConfig from "./.eslintrc.json";

import packageJson from "./package.json";

// eslint-disable-next-line node/no-extraneous-require
const glob = require("glob");
const path = require("path");

const FileReader = require("fs");

const injectCss = () => {
	const css = [];
	const files = glob.sync(path.resolve(__dirname, "**/*.css"));
	files.forEach((file) => {
		const filename = file.substr(file.lastIndexOf("/") + 1, file.length).toLowerCase();

		const fr = new FileReader();

		fr.onload = function () {
			css.push(fr.result);
		};

		fr.readAsText(filename);
	});

	return css.join(" ");
};

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
				inject: injectCss(),
				modules: true,
				minimize: true,
				plugins: [cssimport(), simplevars(), cssnested()],
				use: {
					sass: true,
				},
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
