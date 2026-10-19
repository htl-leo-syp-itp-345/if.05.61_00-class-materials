import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const episodeRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const repositoryRoot = resolve(episodeRoot, '../..')
const outputRoot = join(episodeRoot, 'dist/site')
const cli = join(repositoryRoot, 'node_modules/@slidev/cli/bin/slidev.mjs')
execFileSync(process.execPath, [cli, 'build', join(episodeRoot, 'slides.md'), '--out', outputRoot, '--base', './'], { stdio: 'inherit' })
let html = readFileSync(join(outputRoot, 'index.html'), 'utf8')
html = html.replace(/<script\b[^>]*\bsrc="([^"]+)"[^>]*><\/script>/g, (_, source) => {
  const js = readFileSync(join(outputRoot, source), 'utf8').replace(/<\/script/gi, '<\\/script')
  return `<script type="module">${js}</script>`
})
html = html.replace(/<link\b[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g, (_, source) => `<style>${readFileSync(join(outputRoot, source), 'utf8')}</style>`)
html = html.replace(/<link\b[^>]*rel="modulepreload"[^>]*>/g, '')
html = html.replace(/<link\b[^>]*rel="icon"[^>]*href="([^"]+)"[^>]*>/g, (_, source) => {
  if (source.startsWith('data:')) return _
  const data = readFileSync(join(outputRoot, source)).toString('base64')
  return `<link rel="icon" href="data:image/png;base64,${data}">`
})
const output = join(episodeRoot, 'dist/episode-1.html')
writeFileSync(output, html)
console.log(`\nSelf-contained presentation: ${output}`)
