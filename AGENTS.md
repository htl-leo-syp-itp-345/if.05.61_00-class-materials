# AGENTS.md

## Purpose

This repository contains the **student-facing course material** for SYPPRE.

Everything in this repository must be suitable for publication to students.

The corresponding teacher material is maintained in the sibling repository:

`../teacher-materials`

Both repositories are usually opened together in a VS Code multi-root workspace.

## Structure

Course material is organized into episodes below:

`Episodes/`

An episode in this repository corresponds to the directory with the same name in:

`../teacher-materials/Episodes/`

Example:

`Episodes/E01_VersionControl1/`

corresponds to:

`../teacher-materials/Episodes/E01_VersionControl1/`

The episode directory structure should remain aligned between both repositories.

Seasons are logical groupings of Episodes and do not have their own directory level. Preserve these Season titles and global Episode ranges:

- Season 1: From Idea to Production — Episodes 1–10
- Season 2: From Idea to Project — Episodes 11–16
- Season 3: From Requirements to Development — Episodes 17–25
- Season 4: From Development to Releasing — Episodes 26–28

The Prologue is unnumbered, remains outside the Seasons, and is stored in `Prologue/Introduction/` in both repositories.

Every Episode directory uses `E<two-digit global number>_<topic>`, for example `Episodes/E01_VersionControl1/` and `Episodes/E11_ProjectProposal/`. Use exactly the same directory names in both repositories. Number Episodes globally without restarting at Season boundaries, and keep numbers consistent in the course overview, headings, presentations, episode maps, teacher notes, and links. The student-facing `README.md` is the authoritative course order.

Use `episode-map.md` for Episode maps. Existing technical names such as `UnitTesting`, unit tests, and measurement units retain their technical meaning and must not be renamed.

Unnumbered supplemental Web Components examples are stored in `Resources/WebComponents/` in both repositories, outside the Episode sequence.

## Content

This repository may contain student-facing material such as:

- episode maps
- exercises
- examples
- resources
- presentation material intended for students

Do not place teacher-only information in this repository.

In particular, do not add:

- teacher notes
- solutions
- assessment information not intended for students
- internal planning notes

## Generating Slides

Create slide presentations with Slidev. Keep the editable entry source in the corresponding Episode or Prologue directory as `slides.md`. Read `.agents/skills/slidev/SKILL.md` and the references relevant to the requested work before authoring or changing a deck. Use the local CLI and configuration described below.

Keep slide content editable. Do not use screenshots or rasterized images of complete source slides as the presentation slides. Rebuild text as text and recreate diagrams with editable elements where practical; use images as individual visual assets within the slide layout.

Use Slidev Markdown for slide headings, paragraphs, and lists wherever practical, with `---` separators between slides and frontmatter for slide configuration. Use Vue components, HTML, and CSS when a slide needs a specific layout, image placement, or other formatting that Markdown alone cannot express. Keep the source easy to update and make each slide's structure clear.

Preserve the source material's meaning, important details, and slide order when converting an existing presentation. Do not silently omit or change content. Reorganize or condense only when requested or when necessary to fit the slide format, without losing essential information.

Use specific, relevant image files rather than template placeholders. Keep image paths relative to the presentation file, provide meaningful alternative text, and do not use an image of a complete slide in place of editable content. Prefer suitable project assets; when new assets are needed, ensure they are appropriate for student-facing publication.

Use local dependencies and assets for reliable presentation without an internet connection. Remote images, fonts, embeds, or other services require a connection unless bundled locally; check these dependencies before presenting offline.

Slides should follow the 16:9 layout and visual system shown in `Assets/SlideLayoutTemplate.pdf` (also available as `Assets/SlideLayoutTemplate.key`). The template demonstrates these slide types:

- **Title slide:** prominent subject image across the upper portion, with a centered title and optional subtitle below it.
- **Image slide:** a single large image fills the slide; use when the image itself is the focus.
- **Section slide:** a short section heading centered on the slide.
- **Bullet slide:** a large heading above concise bullet points; a two-column arrangement is available for denser content.
- **Quote slide:** a short quotation centered on the slide, with attribution beneath it.
- **Image-and-bullets slide:** heading at the top, a small number of concise bullets on the left, and a supporting image on the right.
- **General content slide:** a heading across the upper area with content arranged freely below it.

### Slide layout rules

The values below were measured from `Assets/SlideLayoutTemplate.pdf`, which is 1920 × 1080 px. Set Slidev's opening frontmatter to `canvasWidth: 1920` and `aspectRatio: 16/9` so that the values apply 1:1. Override default theme padding and sizing to use the full canvas with the measured positions below. Text in the template is large and fills the slide; do not shrink it to fit more content.

The px values are units of this 1920 × 1080 design canvas, not physical screen pixels. Slidev scales the whole canvas uniformly to the display, so the proportions hold on any screen: 52 px is always 4.8 % of the slide height, whether the slide is shown on a laptop or a 90" display. Do not use per-slide `zoom` or element transforms to shrink text below the required sizes. Raster images must be sharp when enlarged: use at least the displayed size at 2× (a full-bleed image at least 3840 px wide).

**Typography and color**

- Use one typeface, Gill Sans Light (weight 300), with the stack `"Gill Sans", "Gill Sans MT", Calibri, sans-serif`. Do not mix typefaces and do not use bold for emphasis.
- All text is neutral gray `#656565`. Do not use accent colors on text or graphics.
- Use the template background (pale cool gray, `#eceff2`, with a soft gradient; `Assets/template-paper.jpg` is an extract of it).
- Do not add decoration: no divider rules, borders, cards, boxes, or underlines. Create hierarchy with size and position only.

| Element                     | Font size   | Notes                                                                                    |
| --------------------------- | ----------- | ---------------------------------------------------------------------------------------- |
| Slide title                 | 94–100 px   | Uppercase, centered, top of the text at about y = 190 (y = 140 if it wraps to two lines) |
| Bullets and body text       | 52–64 px    | Never below 52 px                                                                        |
| Subtitle, quotation         | about 52 px | Centered                                                                                 |
| Attribution, secondary line | about 38 px | Smallest text allowed, apart from credits                                                |

**Text must fill the slide**

- Side margins are about 57 px (3 %). Text blocks span nearly the full width; bullets start at x ≈ 57. A two-column slide puts the second column at x ≈ 1000–1060.
- Titles are centered horizontally. Bullets are left-aligned in their column. Quotations and section headings are centered horizontally and vertically.
- Inside a bullet, line spacing is about 1.1–1.3 × the font size. Between bullets leave about one empty line, so the pitch from one bullet to the next is about 2 × the font size (112 px for 52 px text).
- On a content slide (bullet, image-and-bullets, or general content slide) the bounding box of the title, text, and images must cover at least 40 % of the slide area, span at least 85 % of the slide width, and reach down to at least y ≈ 800. With an image on one side, text and image together must cover at least 60 %. Title, section, quotation, and image slides are exempt from these three limits.
- Never leave the content hugging one side or corner with the rest of the slide empty. Content is either centered or spread across the columns.
- If the content is too short to fill the slide, enlarge the text (up to 72 px), increase the spacing between items, or add a relevant image. Do not leave the area blank.
- If the content is too long to fit at 52 px (more than about 6 bullets per column, or bullets longer than about 10 words), split it into consecutive slides. Keep the original order and wording. Do not reduce the font size.

**Slide types (measured positions)**

- **Title slide:** large image in the upper part of the slide (about 60 % of the width, centered, spanning y ≈ 50–690); title at 100 px centered at y ≈ 780; subtitle at 52 px directly below it (y ≈ 895).
- **Image slide:** the image is full-bleed. No logos on this slide.
- **Section slide:** one heading at 100 px, centered horizontally and vertically (centered at y ≈ 540).
- **Bullet slide:** title at 100 px centered at y ≈ 190; bullets at 64 px in one or two columns that together span the full width. The columns may be staggered vertically.
- **Image-and-bullets slide:** title at 100 px centered; bullets at 52 px, left-aligned from x ≈ 57, starting at y ≈ 455; the image sits on the right (about 650 × 630 px, x ≈ 1060–1710, y ≈ 300–930).
- **Quotation slide:** quotation at 52 px and attribution at 38 px, both centered, around the vertical center (y ≈ 470–680).
- **General content slide:** title at 94 px, centered, starting at y ≈ 140 and wrapping to two lines if needed; content is placed freely below it, using the same size and fill rules.

**Logos**

On every slide except the full-bleed image slide, place the HTL Leonding logo in the upper-right corner (about 430 px wide, x ≈ 1450–1885, y ≈ 30–130) and the department identifiers in the lower-left corner (about 270 px wide, x ≈ 55–325, bottom edge at y ≈ 1060). Available assets are:

- `Assets/HTLLogo_ab2022_farbig.png`
- `Assets/Abteilungslogos.png`

The template's example imagery and placeholder text illustrate layout only; replace them with material relevant to the episode while preserving the layout conventions.

### Checking slides

Before finishing a presentation, open it in a browser at 1920 × 1080 and check the rendered slides. Confirm that content does not overflow or overlap, images and other local assets load, and the slide order and content match the source.

Measure the layout instead of judging it by eye. For every slide, read the computed font sizes and the bounding box of the title, text (including bullet markers), and images, and check that no text overlaps other text, an image, or the logos. A slide fails if its title is below 94 px, if any body text is below 52 px, if the content covers less than 40 % of the slide area, or if it does not span the width and height required above. Fix the slide and measure again.

### Slidev and Impeccable workflow

Slidev is the default presentation renderer. Use Impeccable to support layout and design work within the **Generating Slides**, layout, logo, content-preservation, and browser-verification instructions above. Convert an existing presentation only when the task requests it; changing this guidance does not itself convert any decks.

**Installation and scope**

The repository's `package.json` declares local Slidev, its default theme, Vue, Impeccable, and the skills installer. Use Node.js 22.12.0 or newer. From this repository, run:

```sh
npm run setup:slides
```

The setup script installs the npm packages into `node_modules/` and copies the official `impeccable` and `slidev` skills into `.agents/skills/`, using the project-scoped Codex installation. It verifies both skill files and both CLI versions before reporting success. Installed skills should become available on the next turn; reload Codex if they do not appear. This setup installs the skills and CLI tools; it does not enable automatic design hooks.

Keep `package-lock.json`, `skills-lock.json`, and the installed `.agents/skills/` files under version control after successful setup so the selected dependencies and skills are reviewable. Subsequent npm-only reinstalls can use `npm ci` once the lockfile exists. Do not commit `node_modules/` or generated slide builds.

**Installation status as of 2026-10-19:** both skills are installed under `.agents/skills/`, and the local CLIs report Slidev `52.20.1` and Impeccable `4.6.0`. Dependency and skill lockfiles are present. Use the installed tools; rerun setup only when installation or an update is needed. The setup does not change user-wide npm settings.

**Impeccable workflow**

Before using Impeccable, read `.agents/skills/impeccable/SKILL.md` and the command references relevant to the requested work. Use it to critique composition and hierarchy, refine layout and typography, and polish alignment and spacing. Examples in Codex:

```text
$impeccable critique the Episode 1 presentation layout
$impeccable layout the Episode 1 presentation within our existing slide rules
$impeccable polish the Episode 1 presentation
```

Use the template and the rules above as the design brief. General skill suggestions about fonts, accent colors, cards, decoration, or additional whitespace do not override Gill Sans Light, the neutral palette, minimum font sizes, required content coverage, or logo placement. Keep slide text and diagrams editable. Perform the existing browser measurements after design changes; an automated critique is additional evidence, not a replacement for those checks.

**Slidev configuration and commands**

Set each deck's opening frontmatter to:

```yaml
---
aspectRatio: 16/9
canvasWidth: 1920
fonts:
  provider: none
  sans: 'Gill Sans, Gill Sans MT, Calibri, sans-serif'
---
```

This gives a 1920 × 1080 canvas. Override the theme's typography, spacing, colors, and layouts to match all the existing visual requirements. Slidev theme defaults are not the course design system. Use editable Markdown, Vue, HTML, CSS, and diagrams; preserve Episode numbering, content, and student/teacher separation. Keep teacher-only speaker notes out of this repository, including Markdown comments that Slidev treats as presenter notes.

Run the local CLI from this repository, passing the actual Episode source path:

```sh
npm run slidev -- Episodes/E01_VersionControl1/slides.md
npm run slides:build -- Episodes/E01_VersionControl1/slides.md --out dist/E01_VersionControl1
npm run slides:export -- Episodes/E01_VersionControl1/slides.md
npm run impeccable -- --help
```

Run these commands only for a presentation task with an existing Slidev source file; do not create a deck merely to verify tool installation. PDF/image export may additionally require Slidev's Playwright/Chromium dependency. Verify actual font sizes and bounds at the full canvas size; do not use Slidev scaling or theme defaults to make undersized text appear compliant.

Official references:

- [Impeccable documentation index](https://impeccable.style/llms.txt), [installation and Codex project paths](https://impeccable.style/faq/)
- [Slidev documentation index](https://sli.dev/llms.txt), [setup](https://sli.dev/guide/), [official agent skill](https://sli.dev/guide/work-with-ai), [canvas size](https://sli.dev/features/canvas-size)

## Working Across Repositories

When a task involves both student and teacher material, inspect the corresponding episode in `../teacher-materials` when useful.

Do not modify the teacher repository unless the task explicitly requires changes to teacher material.
