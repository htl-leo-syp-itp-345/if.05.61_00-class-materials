---
version: 1
slug: "episode-01-slides"
primary_target: "Episodes/E01_VersionControl1/slides.md"
related_targets: ["slidev/course/layouts/course.vue","slidev/course/components/SlideContent.vue","slidev/course/styles.css","Episodes/E01_VersionControl1/styles.css","Episodes/E01_VersionControl1/components/RepoNetwork.vue","slidev/course/components/ImageAndBullets.vue","Episodes/E01_VersionControl1/assets/campus-cafe-working.png","Episodes/E01_VersionControl1/assets/campus-cafe-broken.png"]
---

# Episode 01 renderer migration

Mode: Read. Preserve the approved ten-slide overview from the corresponding teacher notes. The current deck has 38 presentation stages, including the user-approved Bug Report reveal. The user requested a first adaptation to the shared course renderer, followed by a detailed collaborative slide review. Inherit the accepted Prologue visual system and DESIGN.md; preserve the Prologue’s appearance.

## Implementation

The local Slidev addon in `slidev/course/` owns the common slide shell, typography, Markdown rendering and balancing, gallery, parsers, stage counter, and portable export. Both Episode 01 and the Prologue enable the same addon. The episode’s former shell and duplicate Vite configuration are removed.

The episode source uses `slideType` and Markdown paragraphs and quotations, with no `kind`, HTML layout wrappers, authored classes, or manual heading line breaks. Subject-specific diagrams remain editable Vue components: opening history, recovery, and repository workflows. Their styles define only the demonstration visuals. They fit within the shared measured content region; repository computers and their connection anchors move together, with command labels clear of the connectors. Animation content, commands, caption sequence, and click counts are retained.

## Verification

- Seventeen shared regression tests pass, including Episode 01’s outline and 37 stages with normal and formatter-added metadata whitespace.
- Chrome and Safari each check all 37 Episode 01 stages with zero failures for font size, asset loading, text bounds, text overlap, image/text overlap, and layout readiness/overflow.
- Visual review covers the ten slides and their build states; final captures check settled recovery content and the corrected rejection, pull/adapt, clone, change, and pull label positions. Early contact sheets precede the final command-label correction; `e01-final-diagrams.png` supersedes those positions.
- Direct entry at slide 8/click 5 shows stage 26/37; backward and forward keyboard navigation show the rejection and reconciliation captions with counters 25/37 and 26/37.
- All 38 Prologue stages have identical before/after Chrome measurements and zero Chrome/Safari layout failures.
- Both standalone exports build. Documentation links and `git diff --check` pass.

Evidence: `.impeccable/review/shared-renderer/`. The first migration pass is ready for the user’s detailed slide review; no educational outline or teacher-note changes were made.


## Campus Café image-and-bullets refinement

The user requested two realistic website images with two editable explanatory bullets on the left, and approved the corresponding teacher-note changes. Both slides now use the shared `Image-and-bullets` type. The teacher outline records the precise bullet wording and working/broken visual descriptions; the deck still contains ten slides and 37 stages.

The built-in image-generation tool created the working homepage and edited it into the broken version, preserving the café identity and photographic content while adding a clear Reservations link and visibly damaging fonts and layout. The original generated 1254 × 1254 PNGs and full prompts are stored in the episode’s assets directory. The old source drawing remains preserved. The former placeholder website component and its CSS are removed.

The new shared layout accepts a heading, list, and separate Markdown image. It provides 100 px headings, 52 px bullets, a left text column and right image area, natural list spacing, clearance below wrapping headings, complete-image fitting, and at least 2× source density. Invalid composition and overflow are reported. DESIGN.md and the authoring guide document its visual and authoring contracts.

Verification: all 37 Episode 01 stages pass Chrome and Safari checks; the new slides have loaded images, 52 px bullets, at least 48 px heading clearance, and no text/image overflow or overlap. The working and broken compositions are visually reviewed. All 38 Prologue stages retain identical measured text positions, fonts, image bounds, column breaks, and counters. Seventeen regression tests and documentation-link checks pass; both standalone exports are rebuilt. Evidence: `.impeccable/review/campus-cafe/`.


## Feature Request prompt illustration

The user replaced the Feature Request text with three prompt bullets and removed the navigation component from the source. Preserve those bullets verbatim. The unused ReservationNavigation component and its CSS are now deleted, and slide 3 uses `Image-and-bullets` with a generated AI-chat window on the right. The image contains abstract placeholder strokes and no readable conversation content. Its original 1254 × 1254 PNG and complete generation prompt are recorded in the episode assets. The teacher outline now records the same bullets, type, and visual purpose.

The shared renderer is unchanged. The prompt fits at 52 px beside the image, with clear heading separation and at least 2× raster density. The ten-slide sequence and all 37 stages remain intact. Seventeen regression tests pass; the episode export is rebuilt. Browser evidence is under `.impeccable/review/feature-request/`.

## Bug Report callout

The user supplied template 08 and approved an Image-and-bullets Bug Report with a generic GitHub-style issue page and a red speech bubble revealed on the first click. Preserve the user's two bullets and “Panic!!!” verbatim. The teacher outline now records the same type, visual, and build. The new image is preserved at its original 1254 × 1254 resolution, with its complete built-in generation prompt in the episode asset README.

The shared renderer separates `callout.shape`/`callout.color` metadata from content in the native `::callout::` slot. Template-derived SVG/CSS shapes retain editable 52 px text. The renderer keeps the native `<v-click>` around the complete shape and text, preserving its options. It reserves space beneath the bullets before the reveal, avoiding movement between stages. Shape/color validation reports invalid configuration, and metadata normalization repairs the known formatter-flattened mapping without changing source boundaries. DESIGN.md and the authoring guide document appearance and interface separately.

Verification: 23 regression tests pass, including native wrapper/prop preservation and formatter repair. All 38 Episode 01 stages and all 38 Prologue stages pass Chrome and Safari bounds, typography, asset, and overlap checks. The Prologue's complete Chrome measurements equal the accepted baseline exactly. The Bug Report callout is hidden initially, visible at 52 px on the first click, and hides on backward navigation; bullets and image retain identical bounds. Safari direct entry into its revealed state works. Both portable exports are rebuilt. Evidence: `.impeccable/review/callouts/`.
