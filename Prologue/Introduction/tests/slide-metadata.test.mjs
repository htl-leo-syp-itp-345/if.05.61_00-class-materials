import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { parseSync } from '@slidev/parser'

const source = readFileSync(new URL('../slides.md', import.meta.url), 'utf8')
const { slides } = parseSync(source)

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
