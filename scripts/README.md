# Slide tooling

Slidev provides presentation authoring, preview, builds, and export. Impeccable supports design review and refinement. Presentation requirements and source-specific workflows are defined in [AGENTS.md](../AGENTS.md#generating-slides).

## Setup

Use Node.js 22.12.0 or newer. The repository's `package.json` declares local Slidev, its default theme, Vue, Impeccable, and the skills installer. From the repository root, run:

```sh
npm run setup:slides
```

The [setup script](setup-slide-tools.sh) installs npm packages into `node_modules/` and copies the official `impeccable` and `slidev` skills into `.agents/skills/` for project-scoped Codex use. It checks both skill files and both CLI versions before reporting success. Installed skills should be available on the next turn; reload Codex if they do not appear. Setup does not enable automatic design hooks or change user-wide npm settings.

Keep `package-lock.json`, `skills-lock.json`, and the installed `.agents/skills/` files under version control so dependencies and skills are reviewable. For subsequent npm-only reinstalls, use `npm ci`. Do not commit `node_modules/` or generated slide builds.

## Local commands

Run from the repository root, substituting the actual Episode or Prologue source path:

```sh
npm run slidev -- Episodes/E01_VersionControl1/slides.md
npm run slides:build -- Episodes/E01_VersionControl1/slides.md --out dist/E01_VersionControl1
npm run slides:export -- Episodes/E01_VersionControl1/slides.md
npm run impeccable -- --help
```

Preview, build, and export require an existing Slidev source file. Do not create a deck merely to verify installation; use the version commands instead:

```sh
npm run slidev -- --version
npm run impeccable -- --version
```

PDF/image export may additionally require Slidev's Playwright/Chromium dependency. Consult the installed Slidev skill's export reference when setting it up.

## Installation history

On 2026-10-19, both skills were confirmed under `.agents/skills/`, dependency and skill lockfiles were present, and the local CLIs reported Slidev `52.20.1` and Impeccable `4.6.0`. Use the installed tools; rerun setup when installation or an update is needed.

Tool setup and documentation changes do not convert existing presentations.

## References

- [Impeccable documentation index](https://impeccable.style/llms.txt) and [installation and Codex project paths](https://impeccable.style/faq/)
- [Slidev documentation index](https://sli.dev/llms.txt), [setup](https://sli.dev/guide/), [official agent skill](https://sli.dev/guide/work-with-ai), and [canvas size](https://sli.dev/features/canvas-size)
