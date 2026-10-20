# Prologue: Project Development (SYP)

Open the [standalone presentation](dist/prologue.html) in a browser. It works offline and includes its images, styles, and presentation code.

The deck contains 21 authored slides and 38 presentation stages. On the project-cartoon slide, all 18 panels remain in two rows of nine while the caption and active panel advance in reading order. Right Arrow or Space advances; Left Arrow goes back.

The editable source is [slides.md](slides.md), using the shared [course renderer](../../slidev/course/). Its accepted visual layout is preserved; renderer fixes belong in the shared addon. To rebuild the standalone presentation, run this command from `class-materials`:

```sh
node Prologue/Introduction/scripts/build-preview.mjs
```

Generated files in `dist/` are ignored by Git.

For live editing at `http://localhost:3030`, follow [Preview and builds](../../docs/slide-authoring.md#preview-and-builds). The shared [slide-authoring guide](../../docs/slide-authoring.md) explains metadata, slide types, automatic columns, explicit column breaks, images, and click stages. Run checks using its [Verification](../../docs/slide-authoring.md#verification) section.

[DESIGN.md](../../DESIGN.md) specifies the visual layout and typography.
