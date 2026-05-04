import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// dev: base = "/" (no prefix needed)
// build for GitHub Pages: base = "/em-critical-dx/"
// build for Firebase: base = "/"
const isFirebase = process.env.DEPLOY_TARGET === "firebase";
const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  base: isProd && !isFirebase ? "/em-critical-dx/" : "/",
  plugins: [react()],
});
