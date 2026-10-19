import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    cssCodeSplit: false,
    assetsInlineLimit: 10_000_000,
  },
  plugins: [{
    name: 'episode-portable-build',
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
