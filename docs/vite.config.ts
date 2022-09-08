import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import md, {Mode} from "vite-plugin-markdown";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), (md as any).default({ mode: [Mode.REACT] })],
	resolve: {
		alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
	},
});
