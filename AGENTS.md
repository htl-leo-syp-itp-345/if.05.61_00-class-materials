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

### General Rules

These rules apply to both workflows below. If the intended source or workflow is unclear, ask the user before generating slides; do not assume.

Use Slidev, with `slides.md` in the corresponding Episode or Prologue directory. Before authoring or changing a deck, read `.agents/skills/slidev/SKILL.md` and relevant references. Local commands, setup, and installation history are documented in [Slide tooling](scripts/README.md).

Keep content editable: use Markdown for headings, paragraphs, and lists; Vue, HTML, CSS, and editable diagrams for richer layouts. Rebuild source text as text and diagrams as editable elements where practical. Never use screenshots or rasterized images of complete slides as slides.

Use relevant image assets with relative paths and meaningful alternative text. Prefer suitable project assets; replace template placeholders with content appropriate for student publication. Raster images must support 2× their displayed size (full-bleed images at least 3840 px wide). Use local dependencies and assets for offline presentation; check any remaining remote dependencies before presenting offline.

Preserve the source's meaning and important details, following the source-specific rules for structure and wording. Keep teacher-only information out of the deck and its source, including presenter-note comments.

#### Configuration and design

Use this opening frontmatter:

```yaml
---
aspectRatio: 16/9
canvasWidth: 1920
fonts:
  provider: none
  sans: "Gill Sans, Gill Sans MT, Calibri, sans-serif"
---
```

Follow `Assets/SlideLayoutTemplate.pdf` (also available as `.key`) as the shared design reference, distinct from a PDF supplying presentation content. All measurements below use design-canvas pixels; Slidev scales the canvas uniformly to the display. Override theme typography, padding, spacing, colors, and layouts to match these rules. Do not use `zoom` or element transforms to shrink text below the required sizes.

**Typography and color**

- Use the configured font stack with Gill Sans Light, weight 300. Do not mix typefaces or use bold for emphasis.
- All text is neutral gray `#656565`; no accent colors on text or graphics.
- Use the pale cool gray background `#eceff2` with a soft gradient; `Assets/template-paper.jpg` contains the template background.
- No decorative divider rules, borders, cards, boxes, or underlines. Create hierarchy with size and position.

| Element | Font size | Treatment |
| --- | --- | --- |
| Slide title | 94–100 px | Uppercase; placement per slide type below |
| Bullets and body text | 52–64 px | Never below 52 px |
| Subtitle, quotation | About 52 px | Centered |
| Attribution, secondary line | About 38 px | Smallest text allowed, apart from credits |

**Spacing and coverage**

- Side margins are about 57 px (3 %). Text blocks span nearly the full width; bullets start at x ≈ 57. A second column starts at x ≈ 1000–1060.
- Titles are centered horizontally; bullets are left-aligned within their columns. Quotations and section headings are centered horizontally and vertically.
- Bullet line spacing is 1.1–1.3 × the font size; leave about one empty line between bullets, giving a pitch of about 2 × the font size (112 px for 52 px text).
- On content slides (bullet, image-and-bullets, general content), the combined bounding box of title, text, and images must cover at least 40 % of the slide area, span at least 85 % of its width, and reach y ≈ 800. With an image on one side, coverage must be at least 60 %. Title, section, quotation, and image slides are exempt from these coverage limits.
- Center content or spread it across columns; do not leave it hugging one corner. For sparse content, enlarge text up to 72 px, increase spacing, or add a relevant image.
- For overflow (roughly more than 6 bullets per column or bullets longer than 10 words at the minimum body size), follow the source-specific rules; do not shrink text.

**Slide types**

Positions are approximate; title y values describe the top of the text unless identified as centers.

| Type | Content and measurements |
| --- | --- |
| Title | Prominent subject image, centered at about 60 % of slide width, y ≈ 50–690; centered 100 px title at y ≈ 780; optional 52 px subtitle at y ≈ 895. |
| Image | One full-bleed image as the focus. |
| Section | One short 100 px heading centered horizontally and vertically, center y ≈ 540. |
| Bullet | Centered 100 px title at y ≈ 190 (y ≈ 140 for two lines); 64 px bullets in one or two columns spanning the width. Columns may be staggered vertically. |
| Image-and-bullets | Centered 100 px title at y ≈ 190 (y ≈ 140 for two lines); concise 52 px bullets from x ≈ 57, y ≈ 455; supporting image about 650 × 630 px at x ≈ 1060–1710, y ≈ 300–930. |
| Quotation | Short 52 px quotation with 38 px attribution beneath, both centered around y ≈ 470–680. |
| General content | Centered 94 px title at y ≈ 140, wrapping to two lines if needed; content arranged freely below under the spacing and coverage rules. |

**Logos**

On every slide except the full-bleed image slide, place:

- `Assets/HTLLogo_ab2022_farbig.png` upper-right, about 430 px wide, x ≈ 1450–1885, y ≈ 30–130.
- `Assets/Abteilungslogos.png` lower-left, about 270 px wide, x ≈ 55–325, bottom edge y ≈ 1060.

#### Design support and verification

Before using Impeccable, read `.agents/skills/impeccable/SKILL.md` and relevant command references. Apply it within the course design rules above, then verify the rendered result.

Open the deck in a browser at the configured canvas size. For every slide, measure computed font sizes and the bounding boxes of titles, text (including bullet markers), and images against the layout rules, including their exemptions. Check for overflow and overlaps between text, images, and logos, and confirm assets load. Verify content and structure against the source-specific rules below. Fix failures and repeat the affected checks.

### Rules for Generating From Existing Pdfs

Use the specified PDF presentation as the content source and apply the General Rules.

Preserve the source presentation's meaning, important details, and slide order. Do not silently omit or change content. Reorganize or condense only when requested or when necessary to fit the slide format, without losing essential information.

If a source slide is too dense to fit at the required font sizes, split it into consecutive slides while keeping the original order and wording. Preserve its position relative to the surrounding source slides.

Compare the rendered deck with the source PDF. Check that every source slide's content is represented, the sequence is preserved, and text, diagrams, and images have been transferred accurately. Account for any splits or requested changes when comparing slide counts.

### Rules for Generating From teacher-notes

Read `teacher-notes.md` in the corresponding Episode or Prologue directory in `../teacher-materials`. Use the presentation section specified by the user, or identify it from the structure described below. If the file, section, or intended source is unclear, ask the user before generating slides. Do not assume that notes describing an existing deck are an instruction to create a new presentation from them.

The presentation section normally begins with an H2 (`##`) heading such as `Slide Notes`, `Presentation`, or similar. Each H3 (`###`) underneath describes the content of one slide; its heading text normally starts with `Slide`. The section ends at the next H2 or higher-level heading, or the end of the file. If headings do not clearly establish this structure, or several sections could be intended, ask the user. Do not infer a different structure.

Preserve the structure given in the notes: create one slide for each H3 in the selected section, in the same order, and keep each H3's content assigned to that slide. Do not automatically add title or section slides, merge slides, split slides, or reorder them. An H2 marking the presentation section does not itself request an additional slide.

Use each H3 and its contents to determine the slide's title, text, visuals, and any requested animation. Follow explicit directions and preserve the intended meaning and important details. If the heading or notes leave the displayed title, content, or treatment unclear, ask the user; do not invent missing content or silently make assumptions.

Do not turn material outside the selected presentation section into slides unless requested. Keep teacher-only delivery cues, solutions, assessment information, and internal planning out of the student-facing deck and its source, including presenter-note comments. If it is unclear whether a passage is intended for students or only for the teacher, ask before including it.

If a prescribed slide cannot fit within the General Rules, ask the user how to resolve the conflict. Do not automatically split it, omit or condense content, or reduce the required font sizes.

Compare the rendered deck with the selected notes section. Verify one slide per H3, matching order, coverage of each slide's specified content and visuals, and exclusion of teacher-only material. If anything is uncertain, ask the user before proceeding; do not assume.

## Working Across Repositories

When a task involves both student and teacher material, inspect the corresponding episode in `../teacher-materials` when useful.

Do not modify the teacher repository unless the task explicitly requires changes to teacher material.
