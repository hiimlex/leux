import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import mdPlugin, { Mode } from "vite-plugin-markdown";

export default defineConfig(async () => {
	return {
		plugins: [react(), (mdPlugin as any).default({ mode: [Mode.REACT] })],
		resolve: {
			alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
		},
	};
});
