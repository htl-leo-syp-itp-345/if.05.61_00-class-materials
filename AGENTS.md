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

Every Episode directory uses `E<two-digit global number>_<topic>`, for example `Episodes/E01_VersionControl1/` and `Episodes/E11_ProjectProposal/`. Use exactly the same directory names in both repositories. Number Episodes globally without restarting at Season boundaries, and keep numbers consistent in the course overview, headings, presentations, teacher notes, and links. The student-facing `README.md` is the authoritative course order.

Use `teacher-notes.md` in each teacher-facing Episode directory as the single source of truth for educational content and presentation structure. Do not create episode maps. Existing technical names such as `UnitTesting`, unit tests, and measurement units retain their technical meaning and must not be renamed.

Unnumbered supplemental Web Components examples are stored in `Resources/WebComponents/` in both repositories, outside the Episode sequence.

## Content

This repository may contain student-facing material such as:

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

## Episode workflow

Teacher notes in `../teacher-materials/Episodes/<episode>/teacher-notes.md` are the single source of truth for each episode's educational content and presentation structure. Apply the same workflow to the Prologue's corresponding teacher notes.

1. **Develop the episode:** collaboratively create and refine teacher notes covering learning objectives, starting point and motivation, educational content, teaching approach, practical activities, expected outcomes, and a mandatory slide outline. The outline specifies slide count, sequence, titles, types, key content, and required diagrams, images, and demonstrations. Obtain the user's approval of the notes and outline before generating materials.
2. **Generate teaching materials:** produce Slidev presentations, exercises, examples, and supporting resources here in the corresponding episode directory, following the approved notes and the rules below.
3. **Review and refine:** validate materials against the notes. Propose educational or structural changes to the user; after approval, update `teacher-notes.md` first, then affected slides and other materials. Never introduce new learning objectives, substantial educational content, or slide-structure changes directly in generated materials. Pure visual or technical fixes must preserve approved content and structure.

Episode maps are redundant. Before removing any remaining map, integrate missing educational content, relevant slide structure, and resource references into the corresponding teacher notes, then remove the map and update links to it. Do not recreate maps or treat migration drafts as approved teaching plans.

## Generating Slides

### General Rules

Generate slides only from the approved teacher notes and mandatory slide outline. Preserve the specified slide count, sequence, titles, types, and content. Do not independently restructure or condense the presentation, or add, remove, merge, or split slides without user approval and an update to the teacher notes first. If any source detail, instruction, or approval is unclear, ask the user; do not assume.

Use Slidev, with `slides.md` in the corresponding Episode or Prologue directory. Before authoring or changing a deck, read `.agents/skills/slidev/SKILL.md` and relevant references. Local commands, setup, and installation history are documented in [Slide tooling](scripts/README.md).

Keep content editable: use Markdown for headings, paragraphs, and lists; Vue, HTML, CSS, and editable diagrams for richer layouts. Rebuild source text as text and diagrams as editable elements where practical. Never use screenshots or rasterized images of complete slides as slides.

Use relevant image assets with relative paths and meaningful alternative text. Prefer suitable project assets; replace template placeholders with content appropriate for student publication. Raster images must support 2× their displayed size (full-bleed images at least 3840 px wide). Use local dependencies and assets for offline presentation; check any remaining remote dependencies before presenting offline.

Use design judgment to choose images and diagram treatments that express the approved lesson. Changes to learning objectives, substantial educational content, or slide structure follow Phase 3. Keep teacher-only information out of the deck and its source, including presenter-note comments.

#### Technical setup

Use this opening frontmatter, setting `fonts.sans` to the `typography.body.fontFamily` value in [DESIGN.md](DESIGN.md):

```yaml
---
aspectRatio: 16/9
canvasWidth: 1920
fonts:
  provider: none
---
```

DESIGN.md is the single visual specification for typography, colors, spacing, coverage, slide layouts, logos, and motion. Read it before authoring or refining slides.

Existing PDF presentations and other legacy materials may inform Phase 1, but their content and proposed slide structure must be incorporated into the teacher notes and approved before generation.

#### Design support and verification

Use the installed Slidev and Impeccable skills. Read `.agents/skills/impeccable/SKILL.md` and relevant command references before design work. Apply DESIGN.md and verify the rendered result. When DESIGN.md changes, refresh `.impeccable/design.json` from it; this derived metadata is not an independent specification.

Open the deck in a browser at the configured canvas size. For every slide, measure computed font sizes and the bounding boxes of titles, text (including bullet markers), and images against DESIGN.md, including its layout exemptions. Check for overflow and overlaps between text, images, and logos, and confirm assets load. Verify content and structure against the approved teacher notes as described below. Fix failures and repeat the affected checks.

### Rules for Generating From teacher-notes

Read the corresponding `teacher-notes.md` in `../teacher-materials`. The mandatory slide outline normally starts at an H2 (`##`) such as `Slide outline`, `Slide Notes`, or `Presentation`. Each H3 (`###`) underneath defines one slide and normally starts with `Slide`. The section ends at the next H2 or higher-level heading, or the end of the file. If the intended section, boundaries, or any required slide details are unclear or incomplete, ask the user before generating; do not infer missing information.

Every deck must begin with a slide of type **Title**, explicitly included in the teacher-note outline and its slide count. The displayed information follows [DESIGN.md — Opening title slide](DESIGN.md#opening-title-slide).

Create one slide for each outline H3, in its prescribed order, with its explicit title, type, key content, and required diagrams, images, and demonstrations. An H2 does not itself request a slide. Do not turn other teaching sections into additional slides. If student-facing content cannot be distinguished from teacher-only guidance, ask before including it.

Compare the rendered deck against the approved outline: verify slide count, sequence, titles, types, content, required visuals, and demonstrations, with teacher-only material excluded. Resolve missing details, overflow, or proposed educational and structural improvements through Phase 3: user approval, teacher-note update, then material updates.

## Working Across Repositories

When a task involves both student and teacher material, inspect the corresponding episode in `../teacher-materials` when useful.

Do not modify the teacher repository unless the task explicitly requires changes to teacher material.
