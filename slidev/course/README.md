# Shared course renderer

This local Slidev addon supplies the SYPPRE visual system for the Prologue and Episode 01. Authoring syntax and setup live in [the course guide](../../docs/slide-authoring.md); [DESIGN.md](../../DESIGN.md) owns appearance.

Enable it in an Episode deck’s opening frontmatter (`Episodes/<episode>/slides.md`):

```yaml
addons:
  - "@/../../slidev/course"
defaults:
  layout: course
  clicks: 0
layout: course
slideType: Title
```

Here `@/` means the deck directory, and `../..` reaches the repository root from an Episode directory. The Prologue lives one level below the root at `Prologue/slides.md`, so its addon path is `@/../slidev/course`. Restart a running Slidev server after enabling the addon or changing its preparser.

- `layouts/course.vue` supplies the shared slide shell, logos, and stage counter.
- `components/` renders Markdown content, measured columns, image galleries, and the `Image-and-bullets` composition. `CourseCallout.vue` supplies template 08's editable shapes; `CalloutContent.ts` preserves the native Slidev click wrapper around the complete shape and text.
- `styles.css` supplies the accepted Prologue typography and geometry.
- `setup/preparser.ts` normalizes formatter-added metadata whitespace, including a flattened callout mapping.
- `utils/` supplies column balancing, nested-list preservation across manual breaks, and Markdown node handling.
- `vite.config.mts` enables the Markdown extension and portable build settings.
- `build-preview.mjs` builds a self-contained HTML export; deck-local scripts supply the output filename.

Episode-specific diagrams and their animation remain in that episode’s `components/` and `styles.css`. They participate in measured content flow; they do not replace the shared slide shell. Ordinary text, lists, and quotations belong in `slides.md`.

Run regression checks from `class-materials`:

```sh
node --test slidev/course/tests/*.test.mjs
```

A shared renderer change affects both decks. Check their rendered slides and click stages, and compare the Prologue with its accepted appearance before shipping.
