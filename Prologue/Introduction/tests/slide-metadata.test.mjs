import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { parse } from '@slidev/parser'
import { normalizeSlideMetadata } from '../utils/slide-metadata.mjs'

const source = readFileSync(new URL('../slides.md', import.meta.url), 'utf8')
const extensions = [{ transformRawLines: normalizeSlideMetadata }]
const { slides } = await parse(source, undefined, extensions)

test('each authored heading is one slide with parsed slideType metadata', () => {
  const headings = source.match(/^# .+$/gm)
  assert.equal(slides.length, headings.length)
  for (const [index, slide] of slides.entries()) {
    assert.equal(slide.content.match(/^# .+$/m)?.[0], headings[index])
    assert.equal(typeof slide.frontmatter.slideType, 'string')
    assert.doesNotMatch(slide.content, /^slideType:|^clicks:/m)
  }
})

test('the cartoon reserves one click stage per image caption', () => {
  const cartoon = slides.find(slide => slide.content.startsWith('# Software Project Implementation'))
  const imageCount = cartoon.content.match(/^!\[/gm).length
  assert.equal(cartoon.frontmatter.clicks, imageCount - 1)
})

test('formatter-added blank lines preserve slides, click stages, and source boundaries', async () => {
  const fixture = '---\nslideType: Title\n---\n\n# Title\n\n---\nslideType: General content\nclicks: 2\n---\n\n# Captions\n'
  const formatted = fixture.replace('\n---\nslideType: General content', '\n---\n\n  \nslideType: General content')
  const { slides: parsed } = await parse(formatted, undefined, extensions)
  assert.equal(parsed.length, 2)
  assert.equal(parsed[1].frontmatter.slideType, 'General content')
  assert.equal(parsed[1].frontmatter.clicks, 2)
  assert.equal(parsed[1].content, '# Captions')
  const lines = formatted.split('\n')
  assert.equal(parsed[1].start, lines.indexOf('---', 3))
  assert.equal(parsed[1].contentStart, lines.indexOf('# Captions') - 1)
  assert.equal(parsed[1].end, lines.length)
})

test('code examples, comments, and slides without metadata remain untouched', () => {
  const fixture = '# Text\n\n---\n\n# Next slide\n\n```md\n---\n\nslideType: Example\n---\n```\n\n<!--\n---\n\nslideType: Comment\n---\n-->\n'
  const lines = fixture.split('\n')
  normalizeSlideMetadata(lines)
  assert.equal(lines.join('\n'), fixture)
})
