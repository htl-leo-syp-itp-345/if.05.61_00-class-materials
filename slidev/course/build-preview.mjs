import { execFileSync } from 'node:child_process'
import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

export function buildPreview(presentationUrl, outputName) {
const presentationRoot = fileURLToPath(presentationUrl)
  const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../..')
  const outputRoot = join(presentationRoot, 'dist/site')
  const cli = join(repositoryRoot, 'node_modules/@slidev/cli/bin/slidev.mjs')
  execFileSync(process.execPath, [cli, 'build', join(presentationRoot, 'slides.md'), '--out', outputRoot, '--base', './'], { stdio: 'inherit' })
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
  const output = join(presentationRoot, 'dist', outputName)
  writeFileSync(output, html)
  console.log(`\nSelf-contained presentation: ${output}`)
}
