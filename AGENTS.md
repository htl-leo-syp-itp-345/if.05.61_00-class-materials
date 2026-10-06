# AGENTS.md

## Purpose

This repository contains the **student-facing course material** for SYPPRE.

Everything in this repository must be suitable for publication to students.

The corresponding teacher material is maintained in the sibling repository:

`../teacher-materials`

Both repositories are usually opened together in a VS Code multi-root workspace.

## Structure

Course material is organized into units below:

`Units/`

A unit in this repository corresponds to the directory with the same name in:

`../teacher-materials/Units/`

Example:

`Units/VersionControl1/`

corresponds to:

`../teacher-materials/Units/VersionControl1/`

The unit directory structure should remain aligned between both repositories.

## Content

This repository may contain student-facing material such as:

- unit maps
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

Create slide presentations as Reveal.js HTML documents. Include the Reveal.js stylesheet, a theme, and script; put each slide in a `<section>` inside `.reveal > .slides`, then call `Reveal.initialize()`.

Keep slide content editable. Do not use screenshots or rasterized images of complete source slides as the presentation slides. Rebuild text as text and recreate diagrams with editable elements where practical; use images as individual visual assets within the slide layout.

Use Markdown for slide headings, paragraphs, and lists wherever practical, such as with the Reveal.js Markdown plugin. Use HTML and CSS when a slide needs a specific layout, image placement, or other formatting that Markdown alone cannot express. Keep the source easy to update and make each slide's structure clear.

Preserve the source material's meaning, important details, and slide order when converting an existing presentation. Do not silently omit or change content. Reorganize or condense only when requested or when necessary to fit the slide format, without losing essential information.

Use specific, relevant image files rather than template placeholders. Keep image paths relative to the presentation file, provide meaningful alternative text, and do not use an image of a complete slide in place of editable content. Prefer suitable project assets; when new assets are needed, ensure they are appropriate for student-facing publication.

When using the CDN-hosted Reveal.js files, an internet connection is required to present the deck.

Slides should follow the 16:9 layout and visual system shown in `Assets/SlideLayoutTemplate.pdf` (also available as `Assets/SlideLayoutTemplate.key`). The template demonstrates these slide types:

- **Title slide:** prominent subject image across the upper portion, with a centered title and optional subtitle below it.
- **Image slide:** a single large image fills the slide; use when the image itself is the focus.
- **Section slide:** a short section heading centered on the slide.
- **Bullet slide:** a large heading above concise bullet points; a two-column arrangement is available for denser content.
- **Quote slide:** a short quotation centered on the slide, with attribution beneath it.
- **Image-and-bullets slide:** heading at the top, a small number of concise bullets on the left, and a supporting image on the right.
- **General content slide:** a heading across the upper area with content arranged freely below it.

### Slide layout rules

The values below were measured from `Assets/SlideLayoutTemplate.pdf`, which is 1920 × 1080 px. Initialize Reveal.js with `width: 1920`, `height: 1080`, `margin: 0` so that the values apply 1:1. Text in the template is large and fills the slide; do not shrink it to fit more content.

The px values are units of this 1920 × 1080 design canvas, not physical screen pixels. Reveal.js scales the whole canvas uniformly to the display, so the proportions hold on any screen: 52 px is always 4.8 % of the slide height, whether the slide is shown on a laptop or a 90" display. Set `maxScale` high enough (for example `4`) that the canvas still fills very large or high-resolution screens; the Reveal.js default of `2` stops scaling above 3840 × 2160. Raster images must be sharp when enlarged: use at least the displayed size at 2× (a full-bleed image at least 3840 px wide).

**Typography and color**

- Use one typeface, Gill Sans Light (weight 300), with the stack `"Gill Sans", "Gill Sans MT", Calibri, sans-serif`. Do not mix typefaces and do not use bold for emphasis.
- All text is neutral gray `#656565`. Do not use accent colors on text or graphics.
- Use the template background (pale cool gray, `#eceff2`, with a soft gradient; `Units/Introduction/Introduction-assets/template-paper.jpg` is an extract of it).
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

The template's example imagery and placeholder text illustrate layout only; replace them with material relevant to the unit while preserving the layout conventions.

### Checking slides

Before finishing a presentation, open it in a browser at 1920 × 1080 and check the rendered slides. Confirm that content does not overflow or overlap, images and other local assets load, and the slide order and content match the source.

Measure the layout instead of judging it by eye. For every slide, read the computed font sizes and the bounding box of the title, text (including bullet markers), and images, and check that no text overlaps other text, an image, or the logos. A slide fails if its title is below 94 px, if any body text is below 52 px, if the content covers less than 40 % of the slide area, or if it does not span the width and height required above. Fix the slide and measure again.

## Working Across Repositories

When a task involves both student and teacher material, inspect the corresponding unit in `../teacher-materials` when useful.

Do not modify the teacher repository unless the task explicitly requires changes to teacher material.
