import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Allow modern JS features like top-level await
  },
  esbuild: {
    target: 'esnext', // Ensure esbuild uses modern syntax
  },
})