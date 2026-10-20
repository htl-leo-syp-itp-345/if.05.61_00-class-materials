import test from 'node:test'
import assert from 'node:assert/strict'
import MarkdownExit from 'markdown-exit'
import { restoreListLevels } from '../utils/column-list-levels.mjs'

function renderItems(source) {
  const md = new MarkdownExit()
  const tokens = md.parse(source)
  restoreListLevels(tokens, md.parse(source.replace(/^::columnBreak::$/m, '')))
  const items = []
  for (const [index, token] of tokens.entries()) {
    if (token.type === 'list_item_open') items.push({ token, text: tokens[index + 2].content })
  }
  return items
}

test('a manual break preserves the level of continued nested bullets', () => {
  const items = renderItems('- Parent\n  - Necessity\n  - Feasibility\n\n::columnBreak::\n\n  - Affordability\n  - Market effect\n')
  for (const text of ['Affordability', 'Market effect']) {
    const { token } = items.find(item => item.text === text)
    assert.equal(token.attrGet('data-list-level'), '2')
    assert.equal(token.attrGet('aria-level'), '2')
    assert.match(token.attrGet('style'), /--course-list-offset:1$/)
  }
  assert.equal(items.find(item => item.text === 'Parent').token.attrGet('data-list-level'), null)
})

test('a following first-level bullet keeps its own level', () => {
  const items = renderItems('- Parent\n  - Before\n\n::columnBreak::\n\n  - Continued\n- New topic\n')
  assert.equal(items.find(item => item.text === 'Continued').token.attrGet('data-list-level'), '2')
  assert.equal(items.find(item => item.text === 'New topic').token.attrGet('data-list-level'), null)
})

test('children of a continued bullet do not receive its indentation twice', () => {
  const items = renderItems('- Parent\n  - Before\n\n::columnBreak::\n\n  - Continued\n    - Child\n')
  const { token } = items.find(item => item.text === 'Child')
  assert.equal(token.attrGet('data-list-level'), '3')
  assert.match(token.attrGet('style'), /--course-list-offset:0$/)
})

test('a break between first-level bullets preserves the normal styling', () => {
  const items = renderItems('- One\n- Two\n\n::columnBreak::\n\n- Three\n- Four\n')
  assert.ok(items.every(item => item.token.attrGet('data-list-level') === null))
})
