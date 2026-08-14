# Markdown – Documenting Like a Pro

## Introduction

The traditional text editors like MS Word, OpenDocs, etc. are difficult to use for software developers. Most important reason: they are stored in proprietary and binary format and ,therefore, hard to put under version control. As an alternative text based format should be used. Among others, possible alternatives are

- LaTeX
- Typst
- **Markdown (md)**
- AsciiDoc

Since md is also used heavily for prompting generative AI tools and it can also be translated easily to print-ready typesetting tools like LaTeX we will use md as our only documentation tool for this course.

## Jot Down Your Project Idea

Every project idea needs to be judged and argued carefully before we can start working on it. Besides the [Project Proposal](ProjextProposal.md) which we will discuss at a later stage a so-called pitch (normally presented orally) is a very prominent form. We will use the basic format of a pitch but use it as a first exercise for training to argue the usefulness of a project idea.

The format of a pitch is rather open but we will keep the following structure:

1. **Initial Situation – Let Me Feel the Pain:** Describes the situation where we start from. Important questions could be
   1. How is the problem handled currently?
   2. What tools are already in place?
   3. What are their shortcomings?
   4. What are surrounding systems we have to interface with?
2. **System Concept - Show Me That You Can Solve It:** Describes your proposal the solution to the problem described above. Important questions you should answer:
   1. How does your solution look like? In detail that the reader can get a very good impression how your proposed system will look like and how one can work with it
   2. Which technologies (tool chain) do you use for implementation?
   3. Are you and your team in a good command of the tool chain?
3. **Constraints – Tell Me Your Limitations:** Describes your organizational and technical constraints, e.g.,
   1. Are there technical limitations with the tool chain proposed
   2. Is there a know-how gap to be bridged?
   3. Are there legal constraints to be considered?
   4. Are there other regulations to be considered?

## Most Important Markdown Commands

### Enumerations

It is possible to enumerate some lines. Numbering is done within markdown automatically, therefore, it is sufficient to prefix each numbering line with some number:

```md
1. First item
1. Griasdi
1. Pfiati
```

Result:

1. First item
1. Griasdi
1. Pfiati

Furthermore one could define the start number via the number given for the first enumeration line. Further numbers are again generated automatically no matter which number given in markdown:

```md
2. First item
1. Griasdi
1. Pfiati
```

Result:

1. First item
1. Griasdi
1. Pfiati

### Tables

```md
| A   | B   | C             | D   |
| --- | --- | ------------- | --- |
| A1  | A2  | A3            | A4  |
| B1  | B2  | Ein langes B3 |     |
|     |     |               |     |
|     |     |               |     |
|     |     |               |     |
|     |     |               |     |
```

Result

| A   | B   | C             | D   |
| --- | --- | ------------- | --- |
| A1  | A2  | A3            | A4  |
| B1  | B2  | Ein langes B3 |     |
|     |     |               |     |
|     |     |               |     |
|     |     |               |     |
|     |     |               |     |

Since typing a table by hand is really tedious it is recommended to use a markdown table generator, e.g., <https://www.tablesgenerator.com/markdown_tables>.

### Code

#### Inline Code Segments

It is possible to write code segments inline by starting with one backtick (\`). Example

```md
The statement `Console.WriteLine("Some Text")` writes "Some Text" into the console.
```

Result: The statement `Console.WriteLine("Some Text")` writes "Some Text" into the console.

#### Code Blocks

Code blocks show code with some extra white space above and below. Furthermore it is possible to state the programming language to which the code to be shown belongs to. This does then a proper syntax highlighting:

````md
```javascript
Console.WriteLine("Pfui");
```
````

Result:

```javascript
Console.WriteLine("Pfui");
```

### Links

Details about this code can be found on the [following website](https://www.google.at). But it is also possible to [link to an internal page](docs/details.md).

## Exercise

1. Team up in four.
2. Use the [Creativity Techniques] to generate four different product ideas, one for each team member.
3. Split up again and solve the next tasks individually.
4. Create a git repository with the name of your product idea.
5. Jot down a pitch for the project
6. Commit and push
7. Team up again and review one of your team mates pitch
