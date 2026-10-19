# Episode 1: Version Control — The Basic Commands

The presentation contains ten authored slides, with click-driven demonstrations of recovery and teamwork. The lower-right counter numbers all 37 presentation stages, counting the initial state and each build separately.

Open the [standalone presentation](dist/episode-1.html) in a browser. Use the Right Arrow or Space to advance a step; use the Left Arrow to go back. All presentation assets are included in the HTML file, so it works offline.

To rebuild it, run this command from `class-materials`:

```sh
node Episodes/E01_VersionControl1/scripts/build-preview.mjs
```

For live editing:

```sh
npm run slidev -- Episodes/E01_VersionControl1/slides.md
```

The editable source is [slides.md](slides.md), with local Vue components and styles. Generated files in `dist/` are ignored by Git.
