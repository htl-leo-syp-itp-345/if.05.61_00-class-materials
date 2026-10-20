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
    assert.deepEqual(slides.map(s => s.frontmatter.clicks ?? 0), [0, 0, 0, 0, 1, 8, 5, 6, 8, 0])
    assert.equal(slides.reduce((sum, s) => sum + (s.frontmatter.clicks ?? 0) + 1, 0), 38)
    assert.deepEqual(slides.map(s => s.frontmatter.slideType), ['Title', ...Array(4).fill('Image-and-bullets'), ...Array(4).fill('General content'), 'Section'])
    assert.deepEqual(slides.map(s => s.content.match(/^# (.+)$/m)?.[1]), [
      'Version Control — The Basic Commands', 'Motivation 1 — Reproduce Working States',
      'Feature Request', 'Distorted Website', 'Bug Report', 'Solution 1',
      'Motivation 2 — Team Work', 'Solution 2', 'Team Work Details', 'Public Coding',
    ])
    for (const slide of slides) assert.doesNotMatch(slide.content, /^slideType:|^clicks:/m)
    assert.doesNotMatch(text, /\bkind:|<div\b|<p\b|<br\b|class=/)
  })
}


test('the image-and-bullets slides use the approved bullets and distinct images', async () => {
  const { slides } = await parse(source, undefined, extensions)
  const expected = [
    { index: 1, bullets: ['A working website', 'Images, navigation, and a usable menu'], image: 'campus-cafe-working.png' },
    { index: 2, bullets: ['Add online reservations.', 'Add a Reservations link to the navigation', 'Add a Reservations page and link it from the navigation. Keep the existing menu and layout.'], image: 'ai-chat-placeholder.png' },
    { index: 3, bullets: ['The new navigation point is there', 'But the rest is totally broken'], image: 'campus-cafe-broken.png' },
    { index: 4, bullets: ['“The menu no longer works. Can you fix the version we used yesterday?”', 'The source has changed. Where is the version we need?'], image: 'github-issue-placeholder.png' },
  ]
  for (const { index, bullets, image } of expected) {
    const slide = slides[index]
    assert.deepEqual([...slide.content.matchAll(/^- (.+)$/gm)].map(match => match[1]), bullets)
    assert.equal((slide.content.match(/^!\[/gm) || []).length, 1)
    assert.ok(slide.content.includes(image + '?inline'))
    assert.doesNotMatch(slide.content, /<WebsitePreview/)
  }
})

test('Bug Report keeps presentation config separate from native click-revealed callout text', async () => {
  const { slides } = await parse(source, undefined, extensions)
  assert.deepEqual(slides[4].frontmatter.callout, { shape: 'speechBubble', color: 'red' })
  assert.match(slides[4].content, /::callout::\s+<v-click>\s+Panic!!!\s+<\/v-click>/)
})
