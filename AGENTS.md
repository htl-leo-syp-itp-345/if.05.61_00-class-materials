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

## Generating Slides

Create slide presentations as Reveal.js HTML documents. Include the Reveal.js stylesheet, a theme, and script; put each slide in a `<section>` inside `.reveal > .slides`, then call `Reveal.initialize()`.

Keep slide content editable. Do not use screenshots or rasterized images of complete source slides as the presentation slides. Rebuild text as text and recreate diagrams with editable elements where practical; use images as individual visual assets within the slide layout.

Use Markdown for slide headings, paragraphs, and lists wherever practical, such as with the Reveal.js Markdown plugin. Use HTML and CSS when a slide needs a specific layout, image placement, or other formatting that Markdown alone cannot express. Keep the source easy to update and make each slide's structure clear.

Preserve the source material's meaning, important details, and slide order when converting an existing presentation. Do not silently omit or change content. Reorganize or condense only when requested or when necessary to fit the slide format, without losing essential information.

Use specific, relevant image files rather than template placeholders. Keep image paths relative to the presentation file, provide meaningful alternative text, and do not use an image of a complete slide in place of editable content. Prefer suitable project assets; when new assets are needed, ensure they are appropriate for student-facing publication.

When using the CDN-hosted Reveal.js files, an internet connection is required to present the deck.

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

Before finishing a presentation, open it in a browser and check the rendered slides at presentation size. Confirm that text is readable, content does not overflow or overlap, images and other local assets load, and the slide order and content match the source.

## Working Across Repositories

When a task involves both student and teacher material, inspect the corresponding unit in `../teacher-materials` when useful.

Do not modify the teacher repository unless the task explicitly requires changes to teacher material.
