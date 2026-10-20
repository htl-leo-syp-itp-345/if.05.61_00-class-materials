import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { preserveColumnListLevels } from './utils/column-list-levels.mjs'

export default defineConfig({
  slidev: {
    markdown: {
      markdownSetup(md) { md.use(preserveColumnListLevels) },
    },
  },
  resolve: {
    alias: [{
      find: /^@shikijs\/vitepress-twoslash\/client$/,
      replacement: fileURLToPath(new URL('./setup/floating-vue.ts', import.meta.url)),
    }],
  },
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 10_000_000,
  },
  plugins: [{
    name: 'prologue-portable-build',
    configResolved(config) {
      if (config.command !== 'build') return
      for (const options of [config.build.rolldownOptions, config.build.rollupOptions]) {
        const outputs = Array.isArray(options.output) ? options.output : [options.output || (options.output = {})]
        for (const output of outputs) {
          delete output.manualChunks
          output.codeSplitting = false
        }
      }
    },
  }],
})
