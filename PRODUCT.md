# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Students learning System Planning and Project Development (SYPPRE) are programming beginners with some knowledge of web technologies. They receive programming instruction in a parallel course. Assume no prior Git knowledge.

The teacher develops and presents the course materials using the agreed episode workflow.

## Product Purpose

Provide student-facing presentations, exercises, examples, and supporting resources that explain software project work and support practical learning. Success means understandable, usable materials that faithfully implement the approved educational content and slide outline.

## Operating Context

The course spans project methods and software development practices, from creativity and requirements through implementation, testing, and releasing. [README.md](README.md) defines course order. Corresponding Episode directories and the unnumbered Prologue are aligned with the sibling [teacher-materials repository](../teacher-materials/AGENTS.md).

Teacher notes in that repository are the single source of truth for educational content and presentation structure. The three-phase workflow in [AGENTS.md](AGENTS.md#episode-workflow) governs collaborative development, generation after user approval, and review with approved changes made in teacher notes first. The separate [episode release workflow](AGENTS.md#episode-release-workflow) governs draft student entry points in preview files and their promotion to `README.md` on the user's release request.

## Capabilities and Constraints

Materials include editable Slidev presentations, exercises, examples, and supporting resources. [AGENTS.md](AGENTS.md) defines their generation workflow, technical requirements, publication boundaries, and verification procedure. Local commands are documented in [Slide tooling](scripts/README.md).

## Brand Commitments

The established course identity, slide template, and agreed zen-like appearance are specified in [DESIGN.md](DESIGN.md).

## Evidence on Hand

- [Course overview](README.md) and existing episode materials in `Episodes/`.
- Corresponding `teacher-notes.md` files in `../teacher-materials/Episodes/` and `../teacher-materials/Prologue/`.
- [Slide template](Assets/SlideLayoutTemplate/SlideLayoutTemplate.pdf), its [Keynote source](Assets/SlideLayoutTemplate/SlideLayoutTemplate.key), and the supplied background and logo assets in `Assets/`.
- Installed Slidev and Impeccable skills under `.agents/skills/`.

## Product Principles

1. Build educational content and slide outlines collaboratively before generation.
2. Let approved teacher notes govern generated teaching materials.
3. Favor clear explanations and practical learning with editable sources.
4. Maintain consistent course identity and a clear student/teacher separation.
