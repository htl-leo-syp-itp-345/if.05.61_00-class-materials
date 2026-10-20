# Prologue: Project Development (SYP)

Open the [standalone presentation](dist/prologue.html) in a browser. It works offline and includes its images, styles, and presentation code.

The deck contains 21 authored slides and 38 presentation stages. On the project-cartoon slide, all 18 panels remain in two rows of nine while the caption and active panel advance in reading order. Right Arrow or Space advances; Left Arrow goes back.

The editable source is [slides.md](slides.md), with local Vue components and [styles.css](styles.css). To rebuild the standalone presentation, run this command from `class-materials`:

```sh
node Prologue/Introduction/scripts/build-preview.mjs
```

For live editing:

```sh
npm run slidev -- Prologue/Introduction/slides.md
```

Generated files in `dist/` are ignored by Git.
