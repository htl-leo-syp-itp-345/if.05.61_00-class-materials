import test from 'node:test'
import assert from 'node:assert/strict'
import { chooseColumnBreak } from '../utils/column-balance.mjs'

test('five comparable bullets put the extra bullet in the left column', () => {
  assert.equal(chooseColumnBreak([80, 80, 80, 80, 80], 32, 600).index, 3)
})
test('wrapped content changes the break rather than balancing by bullet count', () => {
  const result = chooseColumnBreak([80, 240, 160, 80, 80], 32, 600)
  assert.equal(result.index, 2)
  assert.equal(result.leftHeight, 352)
  assert.equal(result.rightHeight, 384)
  assert.equal(result.fits, true)
})
test('a nested group remains a whole measured unit and overflow is reported', () => {
  const result = chooseColumnBreak([80, 650, 80], 32, 600)
  assert.equal(result.fits, false)
  assert.ok(result.leftHeight >= 650 || result.rightHeight >= 650)
})
