# AGENTS.md

## Purpose and boundaries

This repository contains the **published student-facing course material** for SYPPRE. Everything here must be suitable for students. The sibling [teacher-materials repository](../teacher-materials/AGENTS.md) holds authoring originals; both are normally opened in one workspace.

Keep student entry-point READMEs, finished presentations, and explicitly published exercises, examples, and resources here. The [course catalogue](README.md) owns course order, Season titles and ranges, Episode numbers, and topic directory names, and links to each concrete Episode or Prologue `README.md`.

Editable presentation sources, drafts, shared layouts, assets, build tools, design context, and preparation guides belong in `../teacher-materials`. Keep teacher notes, solutions, private teaching preparation, and unpublished assessment information there. Student-safe technical documentation is permitted here when it is part of the intended student publication.

Published standalone HTML in episode `dist/` directories is deliberately versioned here. Intermediate build output stays in the teacher repository and remains ignored there.

## Shared policy

Read and follow the canonical [episode workflow](../teacher-materials/docs/episode-workflow.md) for course structure, teacher-note authority, drafts, approval, generation, review, publication, and legacy-map migration. Maintain those shared rules there; keep course order in this repository's catalogue.

Develop and review materials in the teacher repository. On a publication request, use the [publish skill](../teacher-materials/.agents/skills/publish/SKILL.md) and the [release workflow](../teacher-materials/docs/episode-workflow.md#episode-release-workflow) to copy selected student files here. Committing, pushing, and changing GitHub settings require separate requests. Report local publication separately from verified live availability.

## Generating Slides

Create and edit presentations in `../teacher-materials`, using its [syppre-slides skill](../teacher-materials/.agents/skills/syppre-slides/SKILL.md), [slide-authoring guide](../teacher-materials/docs/slide-authoring.md), and [DESIGN.md](../teacher-materials/DESIGN.md).

## Working Across Repositories

Keep Episode directory names aligned with the catalogue. Inspect corresponding teacher sources when reviewing publications, modify authoring originals there, and republish selected student files when authorized. Keep unrelated episodes unchanged.
