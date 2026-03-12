import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      lolicon: fileURLToPath(new URL('../src/index.ts', import.meta.url)),
      '~': fileURLToPath(new URL('./app', import.meta.url)),
      'styled-system': fileURLToPath(new URL('./styled-system', import.meta.url)),
    },
  },
  css: {
    postcss: './postcss.config.cjs',
  },
  server: {
    fs: {
      allow: ['..'],
    },
  },
})
