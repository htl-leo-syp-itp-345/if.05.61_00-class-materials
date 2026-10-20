# Prologue: Project Development (SYP)

Open the [standalone presentation](dist/prologue.html) in a browser. It works offline and includes its images, styles, and presentation code.

The deck contains 21 authored slides and 38 presentation stages. On the project-cartoon slide, all 18 panels remain in two rows of nine while the caption and active panel advance in reading order. Right Arrow or Space advances; Left Arrow goes back.

The editable source is [slides.md](slides.md), with local Vue components and [styles.css](styles.css). To rebuild the standalone presentation, run this command from `class-materials`:

```sh
node Prologue/Introduction/scripts/build-preview.mjs
```

For live editing:

```sh
npm run slidev -- Prologue/Introduction/slides.md --port 3030 --open
```

The development presentation updates at `http://localhost:3030` when you save. Slide metadata must start immediately after `---`, without an intervening blank line. Generic Markdown formatting can insert that blank line and turn metadata into extra slides, so this deck is excluded in the repository's `.prettierignore`. Use a Slidev-aware formatter if you enable formatting for it.

Generated files in `dist/` are ignored by Git.

## Editing slide content

Write ordinary Markdown. `slideType: General content` uses one column; `slideType: General content two column` automatically balances complete paragraphs and bullet groups across two equal columns. Long lines wrap within their column. Nested bullets stay with their parent.

To choose the break yourself, put `::columnBreak::` on its own line, with blank lines around it. Everything before it remains on the left; everything after it remains on the right. The heading spans both columns. You do not need HTML wrappers, CSS classes, `<br>` tags, or Vue component tags.

The Title image and cartoon panels use standard Markdown image syntax. The cartoon captions come from image alt text, and the source credit remains a normal paragraph.

The renderer measures actual content height after fonts load. It uses the design's 64 px body text, with 52 px nested bullets, and falls back to 52 px body text if needed. Overflow at that size is reported for review; it does not create extra slides or smaller text.

Run the column-balancing and slide-metadata checks from `class-materials`:

```sh
node --test Prologue/Introduction/tests/*.test.mjs
```

The authoring and visual rules are documented in [DESIGN.md](../../DESIGN.md#markdown-authoring-and-rendering).
