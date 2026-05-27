import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// dev: base = "/" (no prefix needed)
// build for GitHub Pages: base = "/pocket-resus/"
// build for Firebase: base = "/"
const isFirebase = process.env.DEPLOY_TARGET === "firebase";
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProd && !isFirebase ? "/pocket-resus/" : "/",
  plugins: [react()],
});
