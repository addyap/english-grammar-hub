import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
// Served at www.antonyaddy.com/grammatica: the main site forwards
// /grammatica/* to this project. The build lands in dist/grammatica so the
// files sit at the same paths as the URLs. Keep in sync with BASE_PATH in
// src/lib/seo.ts.
export default defineConfig({
  base: '/grammatica/',
  build: { outDir: 'dist/grammatica', emptyOutDir: true },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
