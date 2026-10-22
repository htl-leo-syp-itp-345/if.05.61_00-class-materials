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

The Prologue is unnumbered, remains outside the Seasons, and is stored in `Prologue/` in both repositories.

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

Teacher notes in `../teacher-materials/Episodes/<episode>/teacher-notes.md` are the single source of truth for each episode's educational content and presentation structure. Apply the same workflow to the Prologue's corresponding notes at `../teacher-materials/Prologue/teacher-notes.md`.

1. **Develop the episode:** collaboratively create and refine teacher notes covering learning objectives, starting point and motivation, educational content, teaching approach, practical activities, expected outcomes, and a mandatory slide outline. The outline specifies slide count, sequence, titles, types, key content, and required diagrams, images, and demonstrations. Obtain the user's approval of the notes and outline before generating materials.
2. **Generate teaching materials:** produce Slidev presentations, exercises, examples, and supporting resources here in the corresponding episode directory, following the approved notes and the rules below.
3. **Review and refine:** validate materials against the notes. Propose educational or structural changes to the user; after approval, update `teacher-notes.md` first, then affected slides and other materials. Never introduce new learning objectives, substantial educational content, or slide-structure changes directly in generated materials. Pure visual or technical fixes must preserve approved content and structure.

Episode maps are redundant. Before removing any remaining map, integrate missing educational content, relevant slide structure, and resource references into the corresponding teacher notes, then remove the map and update links to it. Do not recreate maps or treat migration drafts as approved teaching plans.

## Generating Slides

Use the project [syppre-slides skill](.agents/skills/syppre-slides/SKILL.md) when creating, editing, or reviewing course presentations. It loads relevant sections of the [slide-authoring guide](docs/slide-authoring.md), including syntax, renderer setup, and verification. Follow the educational workflow above.

[DESIGN.md](DESIGN.md) is the visual specification. Local installation and commands are documented in [Slide tooling](scripts/README.md).

## Working Across Repositories

When a task involves both student and teacher material, inspect the corresponding episode in `../teacher-materials` when useful.

Do not modify the teacher repository unless the task explicitly requires changes to teacher material.
