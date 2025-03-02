import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // Ensure latest JS features
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext", // Fix top-level await issue
    },
  },
});
