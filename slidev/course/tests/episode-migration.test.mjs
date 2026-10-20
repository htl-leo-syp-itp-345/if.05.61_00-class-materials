import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { parse } from '@slidev/parser'
import { normalizeSlideMetadata } from '../utils/slide-metadata.mjs'

const source = readFileSync(new URL('../../../Episodes/E01_VersionControl1/slides.md', import.meta.url), 'utf8')
const extensions = [{ transformRawLines: normalizeSlideMetadata }]

for (const [name, text] of [
  ['authored', source],
  ['formatted', source.replace(/\n---\nslideType:/g, '\n---\n\nslideType:')],
]) {
  test(`Episode 01 ${name} Markdown preserves its outline and all animation stages`, async () => {
    const { slides } = await parse(text, undefined, extensions)
    assert.equal(slides.length, 10)
    assert.deepEqual(slides.map(s => s.frontmatter.clicks ?? 0), [0, 0, 0, 0, 0, 8, 5, 6, 8, 0])
    assert.equal(slides.reduce((sum, s) => sum + (s.frontmatter.clicks ?? 0) + 1, 0), 37)
    assert.deepEqual(slides.map(s => s.frontmatter.slideType), ['Title', ...Array(8).fill('General content'), 'Section'])
    assert.deepEqual(slides.map(s => s.content.match(/^# (.+)$/m)?.[1]), [
      'Version Control — The Basic Commands', 'Motivation 1 — Reproduce Working States',
      'Feature Request', 'Distorted Website', 'Bug Report', 'Solution 1',
      'Motivation 2 — Team Work', 'Solution 2', 'Team Work Details', 'Public Coding',
    ])
    for (const slide of slides) assert.doesNotMatch(slide.content, /^slideType:|^clicks:/m)
    assert.doesNotMatch(text, /\bkind:|<div\b|<p\b|<br\b|class=/)
  })
}
