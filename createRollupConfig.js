import path from "path";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import styles from "rollup-plugin-styles";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import eslint from "@rollup/plugin-eslint";
import eslintConfig from "./.eslintrc.json";

export default function createRollupConfig(pkg) {
	return [
		{
			input: "src/index.ts",
			output: [
				{
					file: pkg.main || "dist/index.js",
					format: "cjs",
					sourcemap: true,
				},
				{
					file: pkg.module || "dist/index.esm.js",
					format: "esm",
					sourcemap: true,
				},
			],
			plugins: [
				styles({
					minimize: true,
					include: ["**/*.scss"],
					mode: [
						"inject",
						{
							container: "head",
							singleTag: true,
							prepend: true,
							attributes: { id: "leuxCSS" },
						},
					],
				}),
				peerDepsExternal(),
				resolve({ extensions: [".js", ".ts", ".jsx", ".tsx"] }),
				commonjs(),
				eslint({
					throwOnError: true,
					baseConfig: eslintConfig,
					include: ["src/**/*.{js,ts,jsx,tsx}"],
					exclude: ["src/**/*.scss"],
				}),
				typescript({
					tsconfig: path.resolve(process.cwd(), "tsconfig.json"),
					include: ["src/**/*"],
					exclude: ["dist", "node_modules"],
				}),
				terser(),
			],
		},
		{
			input: "src/index.ts",
			output: [{ file: "dist/index.d.ts", format: "esm" }],
			plugins: [dts()],
			external: [/\.scss$/],
		},
	];
}
