/** Choose an ordered break between whole content units, using measured heights. */
export function chooseColumnBreak(heights, gap, availableHeight) {
  if (!heights.length) return { index: 0, leftHeight: 0, rightHeight: 0, fits: true }
  const heightOf = (start, end) => heights.slice(start, end).reduce((sum, height) => sum + height, 0) + Math.max(0, end - start - 1) * gap
  if (heights.length === 1) {
    const leftHeight = heights[0]
    return { index: 1, leftHeight, rightHeight: 0, fits: leftHeight <= availableHeight }
  }
  let best
  for (let index = 1; index < heights.length; index++) {
    const leftHeight = heightOf(0, index)
    const rightHeight = heightOf(index, heights.length)
    const difference = Math.abs(leftHeight - rightHeight)
    if (!best || difference <= best.difference + 0.01) best = { index, leftHeight, rightHeight, difference }
  }
  return { index: best.index, leftHeight: best.leftHeight, rightHeight: best.rightHeight, fits: Math.max(best.leftHeight, best.rightHeight) <= availableHeight }
}
