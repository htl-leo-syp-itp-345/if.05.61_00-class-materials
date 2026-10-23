# AGENTS.md

## Purpose

This repository contains the **student-facing course material** for SYPPRE.

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

Unnumbered supplemental Web Components examples are stored in `Resources/WebComponents/` in both repositories, outside the Episode sequence.

## Content

### Permitted material

This repository may contain student-facing material such as:

- exercises
- examples
- resources
- presentation material intended for students
- student-safe tooling, design, layout, and verification documentation

This permission explicitly includes `.impeccable/` surface briefs and design metadata.

### Teacher-only material

Keep the following in `../teacher-materials`:

- teacher notes
- solutions
- unpublished or otherwise teacher-only assessment information
- private teaching preparation and planning notes

### Surface briefs and approval records

Keep surface briefs focused on current technical constraints and layout directives, and remove unnecessary conversation history. Store educational approval records with the corresponding `teacher-notes.md` in `../teacher-materials`.

## Episode workflow

Teacher notes in `../teacher-materials/Episodes/<episode>/teacher-notes.md` are the single source of truth for each episode's educational content and presentation structure. Apply the same workflow to the Prologue's corresponding notes at `../teacher-materials/Prologue/teacher-notes.md`.

1. **Develop the episode:** collaboratively create and refine teacher notes covering learning objectives, starting point and motivation, educational content, teaching approach, practical activities, expected outcomes, and a mandatory slide outline. The outline specifies slide count, sequence, titles, types, key content, and required diagrams, images, and demonstrations. Obtain the user's approval of the notes and outline before generating materials.
2. **Generate teaching materials:** produce Slidev presentations, exercises, examples, and supporting resources here in the corresponding episode directory, following the approved notes and the rules below.
3. **Review and refine:** validate materials against the notes. Propose educational or structural changes to the user; after approval, update `teacher-notes.md` first, then affected slides and other materials. Never introduce new learning objectives, substantial educational content, or slide-structure changes directly in generated materials. Pure visual or technical fixes must preserve approved content and structure.

Episode maps are redundant. Before removing any remaining map, integrate missing educational content, relevant slide structure, and resource references into the corresponding teacher notes, then remove the map and update links to it. Do not recreate maps or treat migration drafts as approved teaching plans.

## Episode release workflow

This workflow applies to every Episode and the unnumbered Prologue. Preparing and reviewing materials are separate from releasing the student entry point.

### Student entry points

- The course overview at the repository root always links explicitly to each Episode's or Prologue's `README.md`.
- A released `README.md` contains a clear headline, a two-line summary of what students can expect, and a link to the presentation. Keep build commands, live-editing instructions, and renderer details in the corresponding teacher-repository `README.md`, indexed by `../teacher-materials/README.md`.
- An unpublished Episode's `README.md` contains its headline and a short message that content will be available soon. Existing source material does not itself make an Episode released.

### Preview and release

1. **Prepare a preview:** write the proposed student README in `<topic>.preview.md` in the same directory, for example `Episodes/E01_VersionControl1/VersionControl1.preview.md` or `Prologue/Prologue.preview.md`. Use this for both new Episodes and changes to released Episodes. Keep the current `README.md` in place during preparation and review.
2. **Preserve existing content:** when introducing this workflow to an unreleased Episode with an existing episode-level README, rename that README to the preview filename before creating the coming-soon README. Preserve its contents and relative links; do not overwrite an existing preview. Supporting READMEs inside asset or example directories keep their purpose and location.
3. **Release on request:** when the user says "Release the episode" or explicitly requests release of the Prologue, check the preview against the approved teacher notes and verify its presentation link and other relative links. Promote the preview by moving it to `README.md`, replacing the placeholder or previous release. The preview file is consumed by this move; the course overview continues to link to `README.md`. Preparation or approval of teaching content alone does not authorize this promotion.

## Generating Slides

Use the project [syppre-slides skill](.agents/skills/syppre-slides/SKILL.md) when creating, editing, or reviewing course presentations. It loads relevant sections of the [slide-authoring guide](docs/slide-authoring.md), including syntax, renderer setup, and verification. Follow the educational workflow above.

[DESIGN.md](DESIGN.md) is the visual specification. Local installation and commands are documented in [Slide tooling](scripts/README.md).

## Working Across Repositories

When a task involves both student and teacher material, inspect the corresponding episode in `../teacher-materials` when useful.

Do not modify the teacher repository unless the task explicitly requires changes to teacher material.
