import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/index.js',
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['@tabler/icons-react'],
    },
  },
  optimizeDeps: {
    include: ['@tabler/icons-react'],
  },
})


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     target: "esnext", // Ensure latest JS features
//   },
//   optimizeDeps: {
//     esbuildOptions: {
//       target: "esnext", // Fix top-level await issue
//     },
//   },
// });
