# Episode 1: Version Control — The Basic Commands

The presentation contains ten authored slides, with click-driven demonstrations of recovery and teamwork. The lower-right counter numbers all 38 presentation stages, counting the initial state and each build separately.

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

The editable source is [slides.md](slides.md). It uses the same shared [course renderer](../../slidev/course/) as the Prologue: `slideType`, Markdown content, measured layout, and stage counting. Local components and [styles.css](styles.css) provide the episode’s animated diagrams. The two Campus Café slides use the shared `Image-and-bullets` type with generated [working](assets/campus-cafe-working.png) and [broken](assets/campus-cafe-broken.png) website screenshots. The Feature Request slide uses a [generic AI-chat window](assets/ai-chat-placeholder.png) with placeholder messages. Bug Report uses a [generic issue page](assets/github-issue-placeholder.png) and reveals a red “Panic!!!” speech bubble on its first click. This adds one build to the original 37-stage presentation, preserving the ten-slide sequence. [Asset provenance](assets/README.md) records the generation prompts.

The [authoring guide](../../docs/slide-authoring.md) documents shared syntax and setup. Generated files in `dist/` are ignored by Git.
