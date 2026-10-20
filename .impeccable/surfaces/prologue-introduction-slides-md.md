---
version: 1
slug: "prologue-introduction-slides-md"
primary_target: "Prologue/Introduction/slides.md"
related_targets: ["Prologue/Introduction/styles.css","Prologue/Introduction/layouts/course.vue","Prologue/Introduction/components/SlideContent.vue","Prologue/Introduction/components/ImageGallery.vue","Prologue/Introduction/components/MarkdownNodes.ts","Prologue/Introduction/utils/markdown-nodes.ts","Prologue/Introduction/utils/column-balance.mjs"]
---

# Prologue presentation

Mode: Read. Students meet the course through the approved 21-slide teacher-note outline. The existing SYPPRE slide template and DESIGN.md define the visual system. The user's request to generate approves the current outline. The user explicitly answered “Preserve the originals” to the source-resolution question. Keep the 1024 × 768 photo and 250 × 414 cartoon panels; their native resolution is an approved exception to the general 2× raster rule.

## Direction contract

THESIS: Introduce the course through the exact approved sequence, from project misunderstandings to course expectations and the development lifecycle.

OWN-WORLD: Inherit the pale template background, neutral gray Gill Sans Light, large editable headings, two course logos, and stage counter. No new visual identity.

STORY: Students see the project cartoon, understand course topics and practical expectations, then preview specification, implementation, testing, and deployment. Left/right keyboard navigation preserves reading order.

FIRST VIEWPORT: A source photograph of collaborative note taking above the centered course title; Peter Bauer beneath. The Prologue remains unnumbered by season or episode.

FORM: Precisely specified extension of the existing course presentation, code-led; seed: not applicable (user-pinned template and approved slide sequence). The cartoon retains two rows of nine panels; sequential editable captions can make each caption legible without changing the slide count.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Current refinement

The user rejected the sparse zigzag layout and the author-facing HTML/CSS class combinations. The completed refinement makes slides.md pure Markdown, uses slideType directly, and implements shared single-column and two-column rendering with automatic balancing by measured rendered height and an optional ::columnBreak::. Nested bullet groups stay together; there is no lead or special introduction concept. The source artwork, 21-slide educational sequence, and 38-stage counting stay intact. DESIGN.md measures the reserved content region rather than forcing visible ink toward the edges.

## Completion evidence

- Independent finish review disposition: **ship**. All 38 captured stages preserve the approved content and artwork; no material fixes remain.
- `.impeccable/review/prologue-markdown/stage-01.png` through `stage-38.png` and `measurements.json` cover all stages. The measurements record zero failures, ready layouts, loaded assets, and the expected `1/38` through `38/38` counters.
- `.impeccable/review/prologue/explicit-break-measurements.json` records zero failures for the manual-break check. Slide 5 honors the requested two-left/three-right split; the normal automatic rendering uses three-left/two-right for its five comparable bullets.
- All 37 backward navigation steps were counterchecked. Direct entry at `#/2?clicks=8` displays caption `9 / 18` and counter `10/38`; backward and forward navigation from that state pass. The direct-entry capture is `.impeccable/review/prologue-markdown/direct-stage-10.png`.
- All three column-balancing unit tests pass, covering the extra item on the left, balancing by wrapped rendered height, and indivisible nested groups with overflow reporting.
- `Prologue/Introduction/dist/prologue.html` is the built standalone presentation. The editable source contains 21 headings and 19 Markdown images (the title photo and 18 cartoon panels), with no authored HTML, class declarations, or `kind` metadata.
- DESIGN.md and `.impeccable/design.json` match the implemented palette, typography, shared column geometry, measured balancing, nested-list semantics, whitespace rule, gallery, and stage counter. The 94 px heading and 24 px source-credit detector advisories are permitted by DESIGN.md. Original photo and cartoon resolutions retain the user's explicit exception above; no new system requirements or exceptions were introduced.

## Vertical balance refinement

The user requested more balanced text placement, citing stage 35/38, System Specification. The shared content grid now vertically centers its complete row inside the existing title-safe region. Both columns retain one shared top edge based on the tallest column. Natural bullet gaps, nested levels, automatic and explicit column breaks, typography, content, and slide count remain intact. Title, Section, and gallery layouts use their existing placement.

System Specification's three-bullet group now spans approximately y = 505–800, with 150 px of space above and below within its content region. Dense slides receive smaller offsets; individual bullets and columns are not spread independently. DESIGN.md and its sidecar record this visual rule; authoring syntax remains in the shared guide.

Verification: all 38 stages pass font, asset, overflow, overlap, numbering, and layout-readiness checks in Chrome and Safari. All 16 content groups have balanced space above and below and shared column tops. Eleven regression tests pass. An independent visual assessment passed all 16 affected content captures, including sparse, dense, wrapping-title, nested-list, and manual-break cases; the layout detector has no findings before or after the change. Evidence is under `.impeccable/review/vertical-balance/`, including the System Specification before/after pair, all affected content captures, and both browser measurement reports. The standalone export is rebuilt.
