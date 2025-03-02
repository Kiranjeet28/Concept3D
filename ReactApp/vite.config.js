import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Allow modern JS features like top-level await
    rollupOptions: {
      external: ['@tabler/icons-react'], // Exclude the package from bundling
    },
  },
  esbuild: {
    target: 'esnext', // Ensure esbuild uses modern syntax
  },
  optimizeDeps: {
    include: ['@tabler/icons-react'], // Ensure it's pre-bundled
  },
})
