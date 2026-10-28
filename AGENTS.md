# AGENTS.md

## Purpose

This repository contains the **published student-facing course material** for SYPPRE.

Everything in this repository must be suitable for publication to students.

The corresponding teacher material is maintained in the sibling repository:

`../teacher-materials`

Both repositories are usually opened together in a VS Code multi-root workspace.

## Structure

Course material is organized in `Episodes/<episode>/`. Keep episode directory names aligned with `../teacher-materials/Episodes/`. For example, `Episodes/E01_VersionControl1/` corresponds to `../teacher-materials/Episodes/E01_VersionControl1/`.

Seasons are logical groupings of Episodes and do not have their own directory level. Preserve these Season titles and global Episode ranges:

- Season 1: From Idea to Production — Episodes 1–10
- Season 2: From Idea to Project — Episodes 11–16
- Season 3: From Requirements to Development — Episodes 17–25
- Season 4: From Development to Releasing — Episodes 26–28

The Prologue is unnumbered, remains outside the Seasons, and is stored in `Prologue/` in both repositories.

Every Episode directory uses `E<two-digit global number>_<topic>`, for example `Episodes/E01_VersionControl1/` and `Episodes/E11_ProjectProposal/`. Use exactly the same directory names in both repositories. Number Episodes globally without restarting at Season boundaries, and keep numbers consistent in the course overview, headings, presentations, teacher notes, and links. The student-facing `README.md` is the authoritative course order.

Existing technical names such as `UnitTesting`, unit tests, and measurement units retain their technical meaning and must not be renamed.

Unnumbered supplemental Web Components authoring examples live in `../teacher-materials/Resources/WebComponents/`, outside the Episode sequence. Publish selected student resources here when needed.

## Content

Keep student entry-point READMEs, finished presentations, and explicitly published exercises, examples, and resources here. The course overview always links to the concrete Episode or Prologue `README.md`.

A published episode README contains a clear headline, a two-line summary, a presentation link, and links to relevant student exercises or resources. Unpublished episodes keep their headline and coming-soon message.

Editable presentation sources, draft exercises, shared layouts, assets, build tools, design context, and preparation guides belong in `../teacher-materials`. Keep teacher notes, solutions, private teaching preparation, and unpublished assessment information there. Student-safe technical documentation remains permitted here when it is part of the intended student publication.

## Episode workflow

Develop educational content, slides, exercises, and README previews in the teacher repository. Its `teacher-notes.md` files govern educational content and presentation structure. Follow the [teacher episode workflow](../teacher-materials/AGENTS.md#episode-workflow).

## Episode release workflow

Use the [publish skill](../teacher-materials/.agents/skills/publish/SKILL.md) when the user requests publication of an episode or the Prologue. It builds only that presentation locally and copies the intended student files and README here. Teacher originals and README previews are retained for future revisions.

Published standalone HTML in episode `dist/` directories is deliberately versioned in this publication repository. Intermediate build output stays in the teacher repository and remains ignored there. Check that published files are eligible for Git and all student links resolve.

Publication changes local files. Committing, pushing, and changing GitHub settings require separate requests. After pushing, the existing GitHub Pages deployment serves the committed files; report local publication separately from verified live availability. No custom publication Action or development branch is required.

## Generating Slides

Create and edit presentations in `../teacher-materials`, using its [syppre-slides skill](../teacher-materials/.agents/skills/syppre-slides/SKILL.md), [slide-authoring guide](../teacher-materials/docs/slide-authoring.md), and [DESIGN.md](../teacher-materials/DESIGN.md).

## Working Across Repositories

Inspect corresponding teacher sources when reviewing student publications. Modify authoring originals there and republish the selected student files when authorized. Keep unrelated episodes unchanged.
