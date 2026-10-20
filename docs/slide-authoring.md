# Slide authoring

This guide explains how to write and check SYPPRE presentations. [DESIGN.md](../DESIGN.md) defines their appearance; [AGENTS.md](../AGENTS.md#episode-workflow) defines the educational workflow. Agents use the project [syppre-slides skill](../.agents/skills/syppre-slides/SKILL.md) to load relevant parts of this guide.

- [Approved outlines](#approved-outlines)
- [Markdown and metadata](#markdown-and-metadata)
- [Slide types and columns](#slide-types-and-columns)
- [Images and galleries](#images-and-galleries)
- [Click stages](#click-stages)
- [Renderer setup](#renderer-setup)
- [Preview and builds](#preview-and-builds)
- [Verification](#verification)

The plain Markdown renderer described here is implemented in [Prologue/Introduction](../Prologue/Introduction/). Other existing decks are not migrated automatically. Check a deck's local layouts and README before applying renderer-specific features.

## Approved outlines

Generate presentations from the approved `teacher-notes.md` and its mandatory slide outline in the sibling teacher repository. Existing PDFs and legacy presentations may inform episode development, but their content and proposed structure must first be incorporated into the notes and approved.

The outline normally starts at an H2 such as `Slide outline`, `Slide Notes`, or `Presentation`. Each H3 underneath defines one slide, normally beginning with `Slide`. The outline ends at the next H2 or higher-level heading, or the end of the file. An H2 does not itself request a slide. If the section, boundaries, student-facing content, or required details are unclear, ask before generating rather than inferring missing information.

Create one slide per outline H3 in the prescribed order, preserving its title, type, key content, required visuals, and demonstrations. Every deck begins with a **Title** slide explicitly included in the approved outline and its slide count. Its displayed information follows [Opening title slide](../DESIGN.md#opening-title-slide).

Preserve the approved educational content and structure during visual or technical fixes. Changes to learning objectives, substantial content, or the number, sequence, titles, or types of slides follow the [review and refinement workflow](../AGENTS.md#episode-workflow): obtain approval, update the teacher notes first, then update the materials. Keep teacher-only guidance out of student slides and their source, including presenter-note comments.

## Markdown and metadata

Use Slidev with `slides.md` in the corresponding Episode or Prologue directory. Write headings, paragraphs, lists, nested lists, and images in Markdown. The renderer supplies layout containers and styling; authors do not need HTML wrappers, CSS classes, manual `<br>` tags, or Vue component tags for ordinary content.

Each slide has an optional YAML metadata block, called frontmatter. The first block is also the deck's headmatter and can configure the whole presentation. A later slide with metadata starts like this:

```md
---
slideType: General content
---

# Testing

- Test strategies
- Test plans
- Test protocols
```

Prefer metadata immediately after the opening `---`. Standard Slidev treats a blank line there as the start of ordinary content, potentially creating an extra slide and ignoring settings such as `clicks`. The Prologue's [preparser](../Prologue/Introduction/setup/preparser.ts) also accepts formatter-added blank lines before `slideType`; it normalizes them in memory before splitting slides. Leave a blank line after the closing `---` before the content.

The Prologue source remains excluded in [.prettierignore](../.prettierignore), but its parsing no longer depends on an editor honoring that exclusion. Prefer a [Slidev-aware formatter](https://sli.dev/features/prettier-plugin). The whitespace tolerance applies to the Prologue, not automatically to other decks.

| Key | Purpose |
| --- | --- |
| `slideType` | Course-specific visual type, using a name from [DESIGN.md](../DESIGN.md#slide-types). |
| `layout` | Slidev layout component. The Prologue uses `course`, inherited through deck `defaults`. |
| `clicks` | Declared final click index; with the normal zero start, the number of advances before leaving the slide. See [Click stages](#click-stages). |
| `defaults` | Headmatter values inherited by later slides unless overridden. The Prologue defaults to `layout: course` and `clicks: 0`. |

Use `slideType` directly; there is no separate `kind` field. Standard Slidev options are documented in the installed [frontmatter reference](../.agents/skills/slidev/references/core-frontmatter.md) and the [upstream syntax guide](https://sli.dev/guide/syntax).

## Slide types and columns

The Prologue renderer supports `Title`, `Section`, `General content`, and `General content two column`. DESIGN.md also defines other visual types; do not assume this renderer implements them merely because their names appear there.

`General content` renders one content column. `General content two column` renders two equal columns with one heading spanning both. Typography, widths, gaps, and alignment are specified in [General content layout](../DESIGN.md#general-content-layout).

### Automatic distribution

Without an explicit break, the renderer balances actual rendered height, including wrapped lines and spacing. It preserves reading order: down the left column, then down the right column. Each parent bullet stays with its nested content, and other logical blocks remain whole. Five bullets of comparable height normally give three on the left and two on the right.

```md
---
slideType: General content two column
---

# What Are Projects?

- Collaborative enterprise
- Carefully planned
- Temporary rather than permanent
- Accomplish particular tasks
- Time constraints
```

### Explicit column break

To choose the break yourself, put one `::columnBreak::` marker on its own line, with blank lines around it. Content before it stays left; content after it stays right. The heading spans both columns, and the marker is not displayed. This marker requires `General content two column`.

```md
---
slideType: General content two column
---

# What Are Projects?

- Collaborative enterprise
- Carefully planned
- Temporary rather than permanent

::columnBreak::

- Accomplish particular tasks
- Time constraints
```

Both modes use the same renderer and styling. The marker uses Slidev's named-slot syntax; it does not require a different column component or HTML wrapper.

An explicit break may continue a nested list in the other column. Keep the original indentation on those bullets: their list level, font size, indentation, and spacing remain the same across the break. A subsequent unindented bullet starts a first-level item as usual. Automatic balancing continues to keep nested groups together.

### Paragraphs and nested bullets

Use nested bullets to express hierarchy. Ordinary paragraphs take part in normal column flow; there is no special full-width introduction or `lead` concept.

```md
- Learn basic project-management skills:
  - Documents beyond source code
  - Tools
  - Planning and monitoring
```

The renderer may use the permitted body-size fallback in DESIGN.md when content does not fit. It reports overflow if content still does not fit at the minimum size. It does not reorder content, add columns, create slides, or shrink text below the design minimum to solve overflow. Nested groups remain whole unless the author places an explicit column break inside one. Resolve content or structural changes through the approved outline workflow.

## Images and galleries

Use relative image paths and meaningful alt text. Prefer suitable project assets and replace template placeholders with visuals appropriate for student publication. Keep source artwork and any explicitly approved resolution exceptions intact. Otherwise, raster images must support twice their displayed dimensions; full-bleed images must be at least 3840 px wide.

On a Title slide, a Markdown image supplies the subject visual, and an ordinary paragraph supplies the subtitle or presenter line. In the Prologue, image paths include `?inline` so the standalone build embeds the files.

For the Prologue gallery, write a sequence of Markdown image paragraphs. Each image's alt text becomes its caption; a following ordinary paragraph supplies the source credit. The renderer displays all panels in two rows and uses the slide's click state to select the active panel and caption.

The current cartoon has 18 images and captions, so it declares `clicks: 17`. Keep that setting aligned with the image count when editing the gallery; it is not currently inferred automatically.

Keep text and diagrams editable where practical. A custom Vue component, CSS, or editable diagram can implement richer behavior inside the renderer; do not turn complete slides into screenshots or raster images.

## Click stages

`clicks` is a standard Slidev frontmatter option, not a course-specific slide type. With the normal starting index of zero, it declares how many click advances belong to the current slide before the next advance leaves it:

| Frontmatter | Click indices | Presentation stages |
| --- | --- | --- |
| `clicks: 0` | 0 | 1: the initial state |
| `clicks: 11` | 0–11 | 12: the initial state plus 11 advances |
| `clicks: 17` | 0–17 | 18: the initial state plus 17 advances |

The key reserves stages; it does not itself reveal content or change captions. A component or Slidev click directive determines what each state displays. The Prologue gallery reads the current click index to choose its caption and active image. In its deck defaults, `clicks: 0` makes ordinary slides advance immediately unless they declare a different value.

Declare the final click index explicitly for every slide with builds so the total stage count is correct from the first load, including direct navigation and backward steps. These examples use the normal zero start; other click settings are documented in the [Slidev frontmatter reference](../.agents/skills/slidev/references/core-frontmatter.md).

The [course stage counter](../DESIGN.md#slide-numbering) counts each initial state and successive click state. The Prologue therefore has 21 authored slides and 38 presentation stages: its 18-stage cartoon contributes 17 additional states. Continuous animation frames do not count as separate stages, and stage numbers do not change the approved outline's slide count.

## Renderer setup

Use this opening configuration, adding `fonts.sans` with the `typography.body.fontFamily` value from [DESIGN.md](../DESIGN.md):

```yaml
---
aspectRatio: 16/9
canvasWidth: 1920
fonts:
  provider: none
---
```

Retain the deck's existing theme, layout, and other necessary headmatter. The course-specific Markdown features above depend on the Prologue's local layout and components; a `slideType` value alone does not install a renderer in another deck.

Implement stage numbering in the shared layout using the slide-local page and click state. Its display and counting rules are in [DESIGN.md](../DESIGN.md#slide-numbering).

For diagrams, define object bounds and connector anchors once. Derive base connections, transfers, reversed paths, and arrowheads from the same geometry rather than copying independent endpoint coordinates. Apply DESIGN.md's connector and motion rules.

Use local dependencies and assets for offline presentation. Check any remaining remote dependencies before presenting offline.

## Preview and builds

Run commands from `class-materials`. For the Prologue development server:

```sh
npm run slidev -- Prologue/Introduction/slides.md --port 3030 --open
```

Open `http://localhost:3030`. Saving Markdown, components, or styles updates the running preview. Keep the command running while editing; stop it with Ctrl+C. Substitute another deck's `slides.md` path to preview that deck.

After adding or changing `setup/preparser.ts`, stop and start Slidev again so its parser setup is reloaded.

The development server does not rebuild the portable HTML file. The Prologue's [README](../Prologue/Introduction/README.md) documents its standalone builder. General installation, static build, and export commands are in [Slide tooling](../scripts/README.md).

## Verification

Use the installed [Slidev skill](../.agents/skills/slidev/SKILL.md) and relevant references for presentation work. Use the [Impeccable skill](../.agents/skills/impeccable/SKILL.md) and applicable references for design work. DESIGN.md remains the visual source; when it changes, refresh [.impeccable/design.json](../.impeccable/design.json) as derived metadata rather than a separate specification.

For a generated or changed deck:

1. Compare it with the approved outline: count, order, titles, types, educational content, required visuals, and demonstrations. Exclude teacher-only information. Resolve missing details or proposed educational changes through the approved workflow.
2. Open it in a browser at its configured canvas size. For every slide and click stage, measure computed font sizes and the bounding boxes of titles, text including bullet markers, and images against DESIGN.md and its exemptions. Check asset loading, overflow, and overlaps with content or logos.
3. For diagrams, inspect actual paths and arrowheads against object outlines and label bounds; a whole-diagram bounding box cannot establish clearance. Compare geometry in a common coordinate system.
4. Step through builds forward and backward and navigate directly to an intermediate stage. Check object contents, transfer direction, arrowheads, captions, and stage numbering during transitions and in settled states.
5. Fix failures and repeat the affected checks. A successful build alone does not establish visual correctness.

The Prologue also has parser and column-balancing regression checks:

```sh
node --test Prologue/Introduction/tests/*.test.mjs
```

These catch metadata becoming extra slides, a gallery click count that differs from its caption count, and column-balancing regressions. They supplement the rendered checks.
