---
name: syppre-slides
description: Create, edit, or review SYPPRE course presentations using the project's Markdown authoring rules and approved teacher outlines.
---

# SYPPRE Slides

Work in the student repository, `class-materials`. Resolve the links below from this skill's actual directory, following any workspace symlink.

The [authoring guide](../../../docs/slide-authoring.md) is the maintained reference for authors and agents. Load only the sections needed for the request:

| Task | Read |
| --- | --- |
| Generate a deck or change its educational structure | [Approved outlines](../../../docs/slide-authoring.md#approved-outlines) |
| Edit Markdown, metadata, types, or column breaks | [Markdown and metadata](../../../docs/slide-authoring.md#markdown-and-metadata), [Slide types and columns](../../../docs/slide-authoring.md#slide-types-and-columns) |
| Change images, captions, or click stages | [Images and galleries](../../../docs/slide-authoring.md#images-and-galleries), [Click stages](../../../docs/slide-authoring.md#click-stages) |
| Configure a renderer, diagram, or local preview | [Renderer setup](../../../docs/slide-authoring.md#renderer-setup), [Preview and builds](../../../docs/slide-authoring.md#preview-and-builds) |
| Validate a changed deck | [Verification](../../../docs/slide-authoring.md#verification) |

Follow the repository's [educational workflow](../../../AGENTS.md#episode-workflow); the corresponding teacher notes own content and slide structure. Keep teacher-only material out of student sources. Do not migrate another deck or alter the renderer merely because an authoring rule exists.

Read [DESIGN.md](../../../DESIGN.md) when authoring or reviewing slides, or changing their appearance. It owns visual specifications; keep authoring syntax and examples in the guide. Refresh `.impeccable/design.json` when DESIGN.md changes.

For deck authoring and rendering, use the installed [Slidev skill](../slidev/SKILL.md) and only its relevant references for upstream behavior. Use the [Impeccable skill](../impeccable/SKILL.md) for design work. This project skill supplies the course conventions without duplicating those skills' manuals.

Verify deck changes using the guide's checks. For changes to this skill or its guide, check links and examples; do not regenerate presentations as a side effect.
