---
version: 1
slug: "episode-01-slides"
primary_target: "Episodes/E01_VersionControl1/slides.md"
related_targets: ["slidev/course/layouts/course.vue","slidev/course/components/SlideContent.vue","slidev/course/styles.css","Episodes/E01_VersionControl1/styles.css","Episodes/E01_VersionControl1/components/RepoNetwork.vue"]
---

# Episode 01 renderer migration

Mode: Read. Preserve the approved ten-slide overview and its 37 presentation stages from the corresponding teacher notes. The user requested a first adaptation to the shared course renderer, followed by a detailed collaborative slide review. Inherit the accepted Prologue visual system and DESIGN.md; preserve the Prologue’s appearance.

## Implementation

The local Slidev addon in `slidev/course/` owns the common slide shell, typography, Markdown rendering and balancing, gallery, parsers, stage counter, and portable export. Both Episode 01 and the Prologue enable the same addon. The episode’s former shell and duplicate Vite configuration are removed.

The episode source uses `slideType` and Markdown paragraphs and quotations, with no `kind`, HTML layout wrappers, authored classes, or manual heading line breaks. Subject-specific diagrams remain editable Vue components: opening history, website, navigation change, recovery, and repository workflows. Their styles define only the demonstration visuals. They fit within the shared measured content region; repository computers and their connection anchors move together, with command labels clear of the connectors. Animation content, commands, caption sequence, and click counts are retained.

## Verification

- Thirteen shared regression tests pass, including Episode 01’s outline and 37 stages with normal and formatter-added metadata whitespace.
- Chrome and Safari each check all 37 Episode 01 stages with zero failures for font size, asset loading, text bounds, text overlap, image/text overlap, and layout readiness/overflow.
- Visual review covers the ten slides and their build states; final captures check settled recovery content and the corrected rejection, pull/adapt, clone, change, and pull label positions. Early contact sheets precede the final command-label correction; `e01-final-diagrams.png` supersedes those positions.
- Direct entry at slide 8/click 5 shows stage 26/37; backward and forward keyboard navigation show the rejection and reconciliation captions with counters 25/37 and 26/37.
- All 38 Prologue stages have identical before/after Chrome measurements and zero Chrome/Safari layout failures.
- Both standalone exports build. Documentation links and `git diff --check` pass.

Evidence: `.impeccable/review/shared-renderer/`. The first migration pass is ready for the user’s detailed slide review; no educational outline or teacher-note changes were made.
