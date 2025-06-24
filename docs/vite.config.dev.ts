import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import mdPlugin, { Mode } from "vite-plugin-markdown";

import markdownIt from "markdown-it";

import markdownItAnchor from "markdown-it-anchor";

export default defineConfig(async () => ({
	plugins: [
		react(),
		(mdPlugin as any).default({
			mode: [Mode.REACT],
			markdownIt: markdownIt({ html: true }).use(markdownItAnchor, {
				tabIndex: false,
			}),
		}),
	],
	resolve: {
		alias: [
			{ find: "@", replacement: resolve(__dirname, "src") },
			{ find: "@leux/ui", replacement: resolve(__dirname, "../src") },
		],
	},
	server: {
		port: 5000,
		fs: {
			allow: [".."],
		},
	},
	assetsInclude: ["**/*.svg"],
}));
