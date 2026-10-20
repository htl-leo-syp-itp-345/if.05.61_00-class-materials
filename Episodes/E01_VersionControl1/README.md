# Episode 1: Version Control — The Basic Commands

The presentation contains ten authored slides, with click-driven demonstrations of recovery and teamwork. The lower-right counter numbers all 37 presentation stages, counting the initial state and each build separately.

Open the [standalone presentation](dist/episode-1.html) in a browser. Use the Right Arrow or Space to advance a step; use the Left Arrow to go back. All presentation assets are included in the HTML file, so it works offline.

To rebuild it, run this command from `class-materials`:

```sh
node Episodes/E01_VersionControl1/scripts/build-preview.mjs
```

For live editing:

```sh
npm run slidev -- Episodes/E01_VersionControl1/slides.md --port 3031 --open
```

Open `http://localhost:3031`; the Prologue can run separately on port 3030.

The editable source is [slides.md](slides.md). It uses the same shared [course renderer](../../slidev/course/) as the Prologue: `slideType`, Markdown content, measured layout, and stage counting. Local components and [styles.css](styles.css) provide only the episode’s website and animated diagrams. The ten-slide sequence and all 37 presentation stages are retained for the first migration pass.

The [authoring guide](../../docs/slide-authoring.md) documents shared syntax and setup. Generated files in `dist/` are ignored by Git.
