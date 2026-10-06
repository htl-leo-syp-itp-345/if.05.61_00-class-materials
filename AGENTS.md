# AGENTS.md

## Purpose

This repository contains the **student-facing course material** for SYPPRE.

Everything in this repository must be suitable for publication to students.

The corresponding teacher material is maintained in the sibling repository:

`../teacher-materials`

Both repositories are usually opened together in a VS Code multi-root workspace.

## Structure

Course material is organized into units below:

`Units/`

A unit in this repository corresponds to the directory with the same name in:

`../teacher-materials/Units/`

Example:

`Units/VersionControl1/`

corresponds to:

`../teacher-materials/Units/VersionControl1/`

The unit directory structure should remain aligned between both repositories.

## Content

This repository may contain student-facing material such as:

- unit maps
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

## Formatting of Slides

Slides should follow the 16:9 layout and visual system shown in `Assets/SlideLayoutTemplate.pdf` (also available as `Assets/SlideLayoutTemplate.key`). The template demonstrates these slide types:

- **Title slide:** prominent subject image across the upper portion, with a centered title and optional subtitle below it.
- **Image slide:** a single large image fills the slide; use when the image itself is the focus.
- **Section slide:** a short section heading centered on the slide.
- **Bullet slide:** a large heading above concise bullet points; a two-column arrangement is available for denser content.
- **Quote slide:** a short quotation centered on the slide, with attribution beneath it.
- **Image-and-bullets slide:** heading at the top, a small number of concise bullets on the left, and a supporting image on the right.
- **General content slide:** a heading across the upper area with content arranged freely below it.

Use the template's pale, subtly textured background, thin gray sans-serif typography, and restrained color. Headings are large, lightweight, gray, and generally uppercase; body text is smaller and gray. Keep content concise, preserve generous whitespace, and avoid crowding the title and footer areas.

Place the HTL Leonding logo in the upper-right corner and the department identifier(s) in the lower-left footer, matching the template's scale and alignment. Available assets are:

- `Assets/HTLLogo_ab2022_farbig.png`
- `Assets/Abteilungslogos.png`

The template's example imagery and placeholder text illustrate layout only; replace them with material relevant to the unit while preserving the layout conventions.

## Working Across Repositories

When a task involves both student and teacher material, inspect the corresponding unit in `../teacher-materials` when useful.

Do not modify the teacher repository unless the task explicitly requires changes to teacher material.
