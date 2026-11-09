# Exercise — Jot Down Your Website Idea

In Episode 2, you chose your individual content-website topic and created its repository with a short README. Develop that repository into the project's overview and documentation for Season 1. Write a pitch explaining why your website is useful, what it will offer, and what limits you need to consider.

## 1. Project overview

Use the website repository from Episode 2. Its top-level `README.md` contains an H1 with the project name, a two-line overview of the project, and an unordered list linking to its available documentation. For example:

    # Local Walking Routes

    A content website helping new residents find short walks nearby.
    It brings together route descriptions, starting points, and seasonal advice.

    - [Written pitch deck](pitch-deck/pitch-deck.md)
    - [Git commands cheat sheet](misc-docs/git-cheat-sheet.md)

Write the name and overview for your own project. Keep this README as the project's entry point throughout Season 1. Extend the unordered list as further artifacts become available. Store cheat sheets in `misc-docs/` and link to their actual filenames.

## 2. Written pitch directory

Create `pitch-deck/pitch-deck.md` as the entry point for the written pitch. It contains only its main heading and a numbered table of contents with three relative links:

    # Written Pitch Deck

    1. [Initial Situation](initial-situation.md)
    2. [System Concept](system-concept.md)
    3. [Constraints](constraints.md)

The links are relative to `pitch-deck.md`, so they refer directly to the other files in the same directory. Keep the link labels, filenames, and order as shown. Create the three content files alongside that index:

| File | Main heading | What you write |
| --- | --- | --- |
| `pitch-deck/initial-situation.md` | `Initial Situation — Let Me Feel the Pain` | Explain who your website is for and what this audience needs. Research at least **three different websites or apps** addressing the same topic or need.<br><br>Compare them in a Markdown table with one row per offer: its name as an external link, audience or need, useful features, and relevant limitations.<br><br>Below the table, use an unordered list to identify missing features or information. Explain why each gap matters and which researched offers show it. |
| `pitch-deck/system-concept.md` | `System Concept — Show Me That You Can Solve It` | Explain how your website addresses the needs and gaps identified in Initial Situation.<br><br>Sketch at least **two different planned pages**; aim for two or three. Legible pen-and-paper sketches are sufficient. Scan or photograph them, save the images in `pitch-deck/img/`, and embed each in this document using `./img/...` and meaningful alternative text.<br><br>Give each page a descriptive subsection heading and explain its purpose, content, and navigation to another planned page. Use a numbered list to describe a visitor's steps through those pages to achieve a useful result.<br><br>Briefly describe the expected tools or technologies and what you still need to learn or decide. |
| `pitch-deck/constraints.md` | `Constraints — Tell Me Your Limitations` | Research organisational constraints, including copyright, content permissions, and legal regulations relevant to your topic and country or region. Link to your sources, preferably the responsible authority or rights holder. State each constraint, its evidence, and its consequence for your website; identify unresolved questions.<br><br>Describe your available time, known deadlines, and limits involving knowledge, technology, or access to content. Present the constraints as an unordered list, with nested items where useful.<br><br>Use two clearly labelled lists, **First-version essentials** and **Deferred features**, to define a useful first version and what you leave for later. Explain how the documented constraints informed these choices. |

Start each file with the H1 shown in the table. Use descriptive subsection headings to organise your research and explanations, and emphasis to highlight an important need, decision, or constraint.

Store your page-sketch images in `pitch-deck/img/`. Embed them in `pitch-deck/system-concept.md` using paths beginning with `./img/`, for example: `![Sketch of the route overview page](./img/overview-page.jpg)`.

## 3. Git commands cheat sheet and repository structure

Take your Git command notes from the repository you created in Episode 1. Transfer their content into `misc-docs/git-cheat-sheet.md` in your website repository from Episode 2, and format it as Markdown. Use headings to organise the notes, inline code for command names, and fenced `bash` blocks for command examples.

The completed website repository contains at least:

```text
README.md
pitch-deck/
├── pitch-deck.md
├── initial-situation.md
├── system-concept.md
├── constraints.md
└── img/
    ├── overview-page.jpg
    └── detail-page.jpg
misc-docs/
└── git-cheat-sheet.md
```

The image filenames above are examples. Choose names describing your own page sketches and include at least two sketches of different planned pages.

## 4. Prepare your work for assessment

1. Open every Markdown document in the local preview, follow the links from the project README through the pitch index to all three pitch parts, check research links and embedded sketches, and inspect the Git cheat sheet. Correct formatting problems, broken links, and missing images.
2. Inspect `git status` and the diff. Commit and push all required Markdown files, sketch images, and other intentionally linked local assets. Repeat the navigation and rendering checks on GitHub.

**Assessment:** The teacher assesses the delivered work using the criteria and achievement levels below. The rubric shows students what is checked and how the levels differ.

**Assessment rubric**

| Criterion                                                   | Insufficient (0%–<50%)                                                                                                                                             | Satisfactory (50%–<80%)                                                                                                                                                                                                                                                              | Excellent (80%–100%)                                                                                                                                                                                                           |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Project overview and document structure                     | The project name or overview is missing or unclear; required documents are missing or placed so that the project structure is difficult to understand.             | The root README has the project name, two-line overview, and unordered artifact list. The pitch index, three pitch parts, Git cheat sheet, and sketches are organised in the specified directories.                                                                                  | The overview states the audience and value precisely. Document names, headings, and artifact labels make the complete project easy to understand and navigate as it grows.                                                     |
| Initial Situation: audience, research, and missing features | Fewer than three relevant websites or apps are researched, or the comparison and missing-feature claims lack enough evidence to understand the audience's problem. | At least three relevant offers are linked and compared in a table. The audience is identified, and an unordered list explains missing features and why they matter, referring to the researched offers.                                                                              | The comparison uses specific, comparable observations. Missing-feature claims are supported by the research and explain a clear opportunity for the proposed website and its audience.                                         |
| System Concept: proposed pages and visitor journey          | The concept is unclear, fewer than two different pages are sketched, or page explanations and visitor steps do not show how the website would help its audience.   | At least two legible sketches are embedded from `pitch-deck/img/`, with meaningful alternative text and page explanations. Numbered visitor steps connect the pages to a useful result, and the concept addresses identified gaps. Expected technologies and open learning needs are described. | The page content, navigation, and visitor steps form a coherent solution to the researched need. Sketches and explanations support each other, making the proposed experience understandable without further oral explanation. |
| Constraints: research and project consequences              | Relevant organisational constraints, source evidence, or time and knowledge limits are missing, vague, or disconnected from the planned website.                   | Relevant copyright or permission questions, applicable regulations, time, and knowledge or technical limits are investigated. External findings have linked sources; consequences for the project and unresolved questions are stated.                                               | Relevant sources and observations support a realistic assessment of the limits. The explanation distinguishes established findings from unresolved questions and shows clearly how they affect project decisions.              |
| First-version scope and deferred features                   | First-version essentials and deferred features are missing, indistinguishable, or selected without explaining their relationship to the constraints.               | Two clearly labelled lists separate first-version essentials from deferred features. The choices are explained with reference to the documented constraints and allow a useful first version.                                                                                        | The scope is focused and achievable within the stated limits. The rationale shows why the essential content supports the audience's main need and why deferring other features is reasonable.                                  |
| Markdown presentation, links, and images                    | Formatting problems obstruct understanding, or required navigation links, research links, or sketch images are missing or broken.                                  | Headings, comparison table, numbered and unordered lists, and images render correctly. Relative navigation and research links work locally and on GitHub; filenames and image paths are correct.                                                                                     | Consistent structure and formatting make the evidence easy to scan and read. Descriptive links and clear image placement help readers move between the overview, research, concept, and constraints without ambiguity.         |
| Git commands cheat sheet                                    | The transferred notes are missing, contain substantial command errors, or lack explanations and concrete usage examples.                                         | `misc-docs/git-cheat-sheet.md` contains your Episode 1 notes formatted as Markdown, with headings, command explanations, and usable examples. Command names use inline code; command examples use correctly labelled fenced `bash` blocks.                                                                                         | Explanations are concise and accurate, and examples make each command's purpose and use clear. Consistent formatting makes the sheet a practical reference for future work.                                                    |
| Version control and completeness on GitHub                  | Required documents or images are uncommitted or unpushed; the GitHub version is incomplete or does not contain the work presented for review.                      | All required files and linked assets are committed and pushed with meaningful commit messages. The reviewed content and navigation are available on GitHub.                                                                         | The history clearly explains the documentation changes. Related changes are grouped coherently, making the delivered structure and its development easy to review and continue.                                                |
