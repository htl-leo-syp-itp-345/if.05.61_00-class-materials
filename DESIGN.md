---
name: SYPPRE Course Presentations
description: Calm, elegant, minimalistic teaching slides grounded in the course template.
colors:
  text: "#656565"
  background: "#eceff2"
typography:
  title:
    fontFamily: "Gill Sans, Gill Sans MT, Calibri, sans-serif"
    fontSize: "100px"
    fontWeight: 300
  body:
    fontFamily: "Gill Sans, Gill Sans MT, Calibri, sans-serif"
    fontSize: "52px"
    fontWeight: 300
  secondary:
    fontFamily: "Gill Sans, Gill Sans MT, Calibri, sans-serif"
    fontSize: "38px"
    fontWeight: 300
---

# Design System: SYPPRE Course Presentations

## Overview

**Creative North Star: "Zen-like teaching slides"**

The agreed direction is calm, elegant, and minimalistic. Clear hierarchy, precise alignment, consistent spacing, and purposeful visuals support understanding. The existing template defines the visual identity; this document is the visual specification for Slidev and Impeccable.

**Key Characteristics:**

- Calm hierarchy and readable typography.
- Balanced composition with purposeful whitespace.
- Restrained visuals and explanatory animation.
- Consistent template identity across episodes.

[PRODUCT.md](PRODUCT.md) records the audience and purpose. [AGENTS.md](AGENTS.md#generating-slides) points to the presentation workflow. The [slide-authoring guide](docs/slide-authoring.md) documents syntax, renderer setup, and verification. Visual rules are maintained here.

## Colors

Use the neutral gray text and pale cool gray background tokens above. Apply the supplied soft-gradient background from `Assets/SlideLayoutTemplate/template-paper.jpg`. No accent colors on authored text or graphics; retain the supplied logo artwork. Choose relevant imagery to support the explanation.

## Typography

Use Gill Sans Light with the configured fallback stack. Keep one typeface and light weight throughout, without bold emphasis. Create hierarchy through size and position.

The frontmatter tokens are reference sizes for common roles. Apply the variants and permitted ranges below, using larger text where appropriate. Never shrink content below its required size to make it fit.

| Element | Font size | Treatment |
| --- | --- | --- |
| Slide title | 94–100 px | Uppercase; placement per slide type below |
| Bullets and body text | 52–64 px | Never below 52 px |
| Subtitle, quotation | About 52 px | Centered |
| Attribution, secondary line | About 38 px | Smallest text allowed, apart from credits |

## Layout

Follow `Assets/SlideLayoutTemplate/SlideLayoutTemplate.pdf` (also available as `Assets/SlideLayoutTemplate/SlideLayoutTemplate.key`) as the design reference. Individual layouts are also available as numbered PNGs in [SlideLayoutTemplate](Assets/SlideLayoutTemplate/). All measurements use design-canvas pixels; Slidev scales the configured canvas uniformly to the display. Override theme typography, padding, spacing, colors, and layouts to match this specification. Do not use `zoom` or element transforms to shrink text below the required sizes.

- Side margins are about 57 px (3 %). Text blocks span nearly the full width; bullets start at x ≈ 57. A second column starts at x ≈ 1000–1060.
- Titles are centered horizontally; bullets are left-aligned within their columns. Quotations and section headings are centered horizontally and vertically.
- Bullet line spacing is 1.1–1.3 × the font size; leave about one empty line between bullets, giving a pitch of about 2 × the font size (112 px for 52 px text).
- On content slides, reserve a content region covering at least 40 % of the slide area, spanning at least 85 % of its width, and extending to y ≈ 800 or below. These measurements describe the available layout region, not the bounding box of visible letters. Short content may leave purposeful whitespace. Do not stretch bullet spacing or push text toward the outer edges to satisfy a visible-ink target. Image-and-bullets compositions reserve at least 60 %; Title, Section, Quotation, and Image slides are exempt.
- Center content or spread it across columns; do not leave it hugging one corner. For sparse content, enlarge text up to 72 px, increase spacing, or add a relevant image.
- If content overflows (roughly more than 6 bullets per column or bullets longer than 10 words at the minimum body size), retain the required font sizes and follow the generation workflow in AGENTS.md.

Purposeful whitespace supports balance and readability within these rules. Minimalism does not justify small text stranded in a corner.

## Elevation & Depth

Keep the composition visually quiet. The template's soft background provides atmosphere; avoid added decorative shadows, raised panels, or depth effects.

## Shapes

Use simple, editable diagrams where appropriate. Shapes and connectors must explain the subject. Do not add decorative divider rules, borders, cards, boxes, or underlines.

### Diagram connectors

- Stop connector strokes and arrowheads just short of object outlines, leaving a small, visible gap at both ends. Keep their entire paths clear of objects and labels.
- An arrow intended as an arch uses one smooth curve, without an appended straight segment or kink. Intentional elbow connectors remain appropriate where the diagram calls for them.
- Align arrowheads with the path's endpoint direction. Keep anchors and clearances consistent when a connection reverses direction or changes state.

## Components

### Opening title slide

The opening Title slide displays the full episode title, season number, and episode number. Use the Title layout below, with the episode title as the main heading and the season and episode identifiers in the subtitle. For the unnumbered Prologue, show its title without inventing season or episode numbers. A wrapping Title heading grows upward from its usual lower edge, keeping the subtitle clear and retaining the 100 px type size.

### Slide types

Positions are approximate; title y values describe the top of the text unless identified as centers.

| Type | Content and measurements |
| --- | --- |
| Title | Prominent subject image, centered at about 60 % of slide width, y ≈ 50–690; centered 100 px title at y ≈ 780; optional 52 px subtitle at y ≈ 895. |
| Image | One full-bleed image as the focus. |
| Section | One short 100 px heading centered horizontally and vertically, center y ≈ 540. |
| Bullet | Centered 100 px title at y ≈ 190 (y ≈ 140 for two lines); 64 px bullets in one or two columns spanning the width. Columns may be staggered vertically. |
| Image-and-bullets | Centered 100 px title at y ≈ 190 (y ≈ 140 for two lines); concise 52 px bullets from x ≈ 57, y ≈ 455; supporting image about 650 × 630 px at x ≈ 1060–1710, y ≈ 300–930. |
| Quotation | Short 52 px quotation with 38 px attribution beneath, both centered around y ≈ 470–680. |
| General content | Centered 94 px title at y ≈ 140; one content column below. Paragraphs and nested lists provide the content hierarchy. |
| General content two column | General content title treatment; two equal 853 px columns separated by 100 px, with natural line wrapping and left-aligned content. |

### General content layout

The title spans the content width. The available content region begins at y ≈ 355, or below a wrapping title with a 48 px gap, and has a lower boundary at y = 950. Vertically center the complete content group within this region. For two columns, the tallest column controls the group's height, and both columns share the same top edge; keep text left-aligned within their fixed widths.

Top-level body text starts at 64 px; nested bullets use 52 px. If the measured composition does not fit, use the permitted 52 px body size across the content region and measure again. Never shrink below 52 px to fit content.

Use a consistent 32 px gap between top-level content units and 20 px within nested groups. Move short groups intact to balance the available space above and below them; do not vertically stretch bullet spacing or center the two columns independently. Dense groups naturally approach the region's upper boundary. Paragraphs take part in normal flow, and parent bullets remain visually grouped with their nested bullets.

Image galleries arrange panels in two rows, with a readable caption and source credit beneath. The Prologue's gallery uses two rows of nine.

### Logos

On every slide except the full-bleed image slide, place:

- `Assets/HTLLogo_ab2022_farbig.png` upper-right, about 430 px wide, x ≈ 1450–1885, y ≈ 30–130.
- `Assets/Abteilungslogos.png` lower-left, about 270 px wide, x ≈ 55–325, bottom edge y ≈ 1060.

### Motion

Use animation to explain processes or reveal steps. Motion should be restrained and purposeful. Choose durations and easing to suit the explanation; no fixed global timings are prescribed.

Each build stage must show a coherent state of the explanation. When an object appears, include the contents it already has at that point; show an empty object only when the approved process requires it, such as a computer before cloning. Reveal subsequent changes at their intended steps, preserving existing contents until the process changes them.

### Slide numbering

Show a plain `n/m` counter in the lower-right corner on every slide, including Title and Section slides. Count the initial state and each successive click/build stage as one numbered slide; `m` is the total of these states across the deck. Advance or reverse `n` with navigation, keeping `m` fixed. Continuous animation frames do not count separately. These display numbers do not change the authored slide count or outline in the teacher notes.

Use the secondary typography role (38 px, light, neutral gray), right edge x ≈ 1863 and bottom edge y ≈ 1060. Keep the counter clear of teaching content and logos, without a surrounding box or decoration.
