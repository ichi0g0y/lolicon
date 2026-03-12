import { defineConfig } from 'tsdown'
import { readdirSync } from 'fs'

const iconEntries = readdirSync('src/icons')
  .filter((f) => f.endsWith('.tsx'))
  .map((f) => `src/icons/${f}`)

export default defineConfig({
  entry: ['src/index.ts', ...iconEntries],
  format: ['esm', 'cjs'],
  dts: false,
  external: ['react', 'react-dom'],
  outDir: 'dist',
  clean: true,
})
