import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/cursor-ai-tutorial/' : '/',
  server: {
    port: 3000,
    open: true
  },
  assetsInclude: ['**/*.md'],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})
