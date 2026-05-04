import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages: served from /em-critical-dx/. For Firebase Hosting: served from /.
// Toggle via DEPLOY_TARGET=firebase npm run build
const isFirebase = process.env.DEPLOY_TARGET === "firebase";

export default defineConfig({
  base: isFirebase ? "/" : "/em-critical-dx/",
  plugins: [react()],
});
