// Tolerate formatter-added whitespace in course frontmatter before Slidev splits slides.
export function normalizeSlideMetadata(lines) {
  let fence
  let inComment = false
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index]
    if (inComment) {
      if (line.includes('-->')) inComment = false
      continue
    }
    if (fence) {
      const closing = line.match(/^ {0,3}(`{3,}|~{3,})\s*$/)
      if (closing && closing[1][0] === fence[0] && closing[1].length >= fence.length) fence = undefined
      continue
    }
    if (line.includes('<!--')) {
      inComment = !line.slice(line.indexOf('<!--') + 4).includes('-->')
      continue
    }
    const opening = line.match(/^ {0,3}(`{3,}|~{3,})/)
    if (opening) { fence = opening[1]; continue }
    if (!/^---\s*$/.test(line) || lines[index + 1]?.trim()) continue

    let next = index + 1
    while (next < lines.length && !lines[next].trim()) next++
    if (!/^slideType:\s*\S/.test(lines[next] || '')) continue
    const end = lines.findIndex((candidate, position) => position > next && /^---\s*$/.test(candidate))
    if (end === -1) continue

    // Move the first field up without changing line counts or slide boundaries.
    // YAML permits the resulting blank line between fields.
    lines[index + 1] = lines[next]
    lines[next] = ''
  }
}
