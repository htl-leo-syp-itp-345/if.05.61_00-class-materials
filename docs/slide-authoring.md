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

The plain Markdown renderer lives in the shared [course addon](../slidev/course/). The Prologue and Episode 01 both use it. Other existing material is not migrated automatically; new Slidev decks should enable the addon using [Renderer setup](#renderer-setup).

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

Prefer metadata immediately after the opening `---`. Standard Slidev treats a blank line there as the start of ordinary content, potentially creating an extra slide and ignoring settings such as `clicks`. The shared [preparser](../slidev/course/setup/preparser.ts) also accepts formatter-added blank lines before `slideType`; it normalizes them in memory before splitting slides. Leave a blank line after the closing `---` before the content.

The Prologue source remains excluded in [.prettierignore](../.prettierignore), but course parsing no longer depends on an editor honoring that exclusion. Prefer a [Slidev-aware formatter](https://sli.dev/features/prettier-plugin). The whitespace tolerance applies to every deck using the course addon.

| Key | Purpose |
| --- | --- |
| `slideType` | Course-specific visual type, using a name from [DESIGN.md](../DESIGN.md#slide-types). |
| `layout` | Slidev layout component. Course decks use `course`, inherited through deck `defaults`. |
| `clicks` | Declared final click index; with the normal zero start, the number of advances before leaving the slide. See [Click stages](#click-stages). |
| `defaults` | Headmatter values inherited by later slides unless overridden. Course decks default to `layout: course` and `clicks: 0`. |

Use `slideType` directly; there is no separate `kind` field. Standard Slidev options are documented in the installed [frontmatter reference](../.agents/skills/slidev/references/core-frontmatter.md) and the [upstream syntax guide](https://sli.dev/guide/syntax).

## Slide types and columns

The shared course renderer supports `Title`, `Section`, `General content`, `General content two column`, and `Image-and-bullets`. DESIGN.md also defines other visual types; do not assume this renderer implements them merely because their names appear there.

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

### Image-and-bullets

Use `slideType: Image-and-bullets` for a concise list on the left and one supporting image on the right. Write a heading, a Markdown list (nested bullets are supported), and one separate Markdown image paragraph. The image is assigned to the right automatically, regardless of whether it comes before or after the list in the source. No HTML, CSS classes, component tag, or `::columnBreak::` is needed.

```md
---
slideType: Image-and-bullets
---

# A Working Website

- A working website
- Images, navigation, and a usable menu

![Campus Café homepage with photographs and navigation](./assets/campus-cafe-working.png?inline)
```

The heading spans both sides. The renderer keeps the complete image visible without cropping, preserves its aspect ratio, and fits it into the right-hand image area. It leaves clearance below a wrapping heading, reducing the available image height when necessary. The bullet group is vertically centered beside the image and uses the specified 52 px type. Visual dimensions and alignment are in [Image-and-bullets layout](../DESIGN.md#image-and-bullets-layout).

Use meaningful alt text and local image paths; `?inline` embeds the image in portable exports. Raster artwork is never enlarged beyond one canvas pixel per two source pixels. Provide sufficiently detailed source artwork: the nominal 650 × 630 px image area needs at least 1300 × 1260 source pixels to fill it at 2×, or the renderer displays a smaller image. Text inside a website screenshot is part of the depicted interface; the explanatory slide bullets remain editable and meet the course typography requirements.

Exactly one image paragraph and a list are required. Extra prose, multiple images, a missing image, or a column-break marker are authoring errors; the renderer reports them through its layout error status and browser console. It reports overflowing text at 52 px instead of shrinking the bullets. Keep additional explanation in the approved teacher notes or use another slide type.

## Images and galleries

Use relative image paths and meaningful alt text. Prefer suitable project assets and replace template placeholders with visuals appropriate for student publication. Keep source artwork and any explicitly approved resolution exceptions intact. Otherwise, raster images must support twice their displayed dimensions; full-bleed images must be at least 3840 px wide.

On a Title slide, a Markdown image supplies the subject visual, and an ordinary paragraph supplies the subtitle or presenter line. Use `?inline` on Markdown image paths so standalone builds embed the files. A deck-local Vue component may supply a subject diagram on a Title slide.

For an image gallery, write a sequence of Markdown image paragraphs. Each image's alt text becomes its caption; a following ordinary paragraph supplies the source credit. The renderer displays all panels in two rows and uses the slide's click state to select the active panel and caption.

The current cartoon has 18 images and captions, so it declares `clicks: 17`. Keep that setting aligned with the image count when editing the gallery; it is not currently inferred automatically.

Keep text and diagrams editable where practical, and ordinary content in Markdown. Use deck-local Vue components for subject-specific visuals and click-driven demonstrations, such as Episode 01’s recovery and repository diagrams. Website screenshots with explanatory bullets use `Image-and-bullets`. These components render as normal content blocks inside the shared layout; they should provide their own intrinsic height and keep their text within DESIGN.md’s permitted sizes. A component must not recreate the slide heading, logos, counter, or page layout. Do not turn complete slides into screenshots or raster images.

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

Enable the local course addon in every new deck. This example assumes the standard two-level Episode or Prologue directory; `@/` resolves from the deck directory. Add `fonts.sans` with the `typography.body.fontFamily` value from [DESIGN.md](../DESIGN.md):

```yaml
---
theme: default
addons:
  - "@/../../slidev/course"
aspectRatio: 16/9
canvasWidth: 1920
fonts:
  provider: none
defaults:
  layout: course
  clicks: 0
layout: course
slideType: Title
---
```

Retain other necessary headmatter. The addon supplies the `course` layout, typography and styling, content measurement and balancing, gallery, stage counter, metadata preparser, nested-list handling, and portable build settings. Do not copy those files into individual decks. Deck-local components and CSS should contain subject-specific visuals only. A `slideType` value alone does not enable the addon.

The shared implementation is documented in [slidev/course/README.md](../slidev/course/README.md). Fix shared behavior there so all enabled decks receive the same correction. When changing the renderer, verify both the Prologue and Episode 01; preserve the Prologue’s accepted appearance.

The addon implements stage numbering in its shared layout using the slide-local page and click state. Its display and counting rules are in [DESIGN.md](../DESIGN.md#slide-numbering).

For diagrams, define object bounds and connector anchors once. Derive base connections, transfers, reversed paths, and arrowheads from the same geometry rather than copying independent endpoint coordinates. Apply DESIGN.md's connector and motion rules.

Use local dependencies and assets for offline presentation. Check any remaining remote dependencies before presenting offline.

## Preview and builds

Run commands from `class-materials`. For the Prologue development server:

```sh
npm run slidev -- Prologue/Introduction/slides.md --port 3030 --open
```

Open `http://localhost:3030`. Saving Markdown, components, or styles updates the running preview. Keep the command running while editing; stop it with Ctrl+C. Substitute another deck's `slides.md` path to preview that deck.

After adding an addon or changing its `setup/preparser.ts`, stop and start Slidev again so its parser setup is reloaded.

The development server does not rebuild the portable HTML file. The Prologue's [README](../Prologue/Introduction/README.md) documents its standalone builder. General installation, static build, and export commands are in [Slide tooling](../scripts/README.md).

## Verification

Use the installed [Slidev skill](../.agents/skills/slidev/SKILL.md) and relevant references for presentation work. Use the [Impeccable skill](../.agents/skills/impeccable/SKILL.md) and applicable references for design work. DESIGN.md remains the visual source; when it changes, refresh [.impeccable/design.json](../.impeccable/design.json) as derived metadata rather than a separate specification.

For a generated or changed deck:

1. Compare it with the approved outline: count, order, titles, types, educational content, required visuals, and demonstrations. Exclude teacher-only information. Resolve missing details or proposed educational changes through the approved workflow.
2. Open it in a browser at its configured canvas size. For every slide and click stage, measure computed font sizes and the bounding boxes of titles, text including bullet markers, and images against DESIGN.md and its exemptions. Check asset loading, overflow, and overlaps with content or logos.
3. For diagrams, inspect actual paths and arrowheads against object outlines and label bounds; a whole-diagram bounding box cannot establish clearance. Compare geometry in a common coordinate system.
4. Step through builds forward and backward and navigate directly to an intermediate stage. Check object contents, transfer direction, arrowheads, captions, and stage numbering during transitions and in settled states.
5. Fix failures and repeat the affected checks. A successful build alone does not establish visual correctness.

The shared renderer has parser and column-balancing regression checks for both migrated decks:

```sh
node --test slidev/course/tests/*.test.mjs
```

These catch metadata becoming extra slides, a gallery click count that differs from its caption count, and column-balancing regressions. They supplement the rendered checks.
