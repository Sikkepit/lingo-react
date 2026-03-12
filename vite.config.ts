import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				// 1. static asset files (images, fonts, etc.)
				assetFileNames: "assets/[name].[ext]", // no hash
				// 2. JS entry / chunks
				entryFileNames: "assets/[name].js", // no hash
				chunkFileNames: "assets/[name].js", // no hash
			},
		},
	},
});
