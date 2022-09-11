import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

import { terser } from "rollup-plugin-terser";

import postcss from "rollup-plugin-postcss";
import simplevars from "postcss-simple-vars";
import cssnested from "postcss-nested";
import cssimport from "postcss-import";

import peerDepsExternal from "rollup-plugin-peer-deps-external";

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
			peerDepsExternal(),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.json",
				include: ["src/**/*"],
				exclude: ["docs", "dist", "node_modules", ".vscode", ".storybook"],
			}),
			postcss({
				extract: "leux.min.css",
				minimize: true,
				plugins: [cssimport(), simplevars(), cssnested()],
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
