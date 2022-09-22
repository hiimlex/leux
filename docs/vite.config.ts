import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
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
		alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
	},
	server: {
		port: 3000,
		fs: {
			allow: [".."],
		},
	},
	base: "/leux/",
}));
