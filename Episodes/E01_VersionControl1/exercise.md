# Exercise – My First Git Repository

In this exercise, you will create a small personal website and use Git to track its development. Complete this exercise at home.

## 1. Create the Repository

On GitHub, create a new repository named

```text
<your-name>-personal-info
```

For example:

```text
max-mustermann-personal-info
```

Before creating the repository, check that its name follows the course convention: use lowercase letters, digits where useful, and hyphens between words. Avoid spaces, umlauts, and other special characters.

Initialize the repository with a `README.md` file.

Clone the repository to your computer.

## 2. Create Your Personal Page

Create a file named `index.html`.

The page must contain:

- your name as a heading,
- an image,
- a short text about yourself,
- a list containing at least three of your interests.

Don't worry about making the page beautiful. We will learn more about web development later.

## 3. Examine the First Git Status

Run:

```bash
git status
```

Copy the complete output into:

```text
status1.txt
```

Below the output, briefly explain in your own words:

> What does `git status` tell you about `index.html`?

Do **not** add or commit `index.html` yet.

## 4. Add the File

Add `index.html` to the staging area.

Run `git status` again and copy its output into:

```text
status2.txt
```

Below the output, explain:

> What has changed compared with `status1.txt`?

## 5. Commit the File

Create a commit containing `index.html`.

Use a meaningful commit message.

Run `git status` again and store its output in:

```text
status3.txt
```

Explain:

> What does Git tell you now?

## 6. Push Your Commit

Push your commit to GitHub.

Run `git status` one more time and store its output in:

```text
status4.txt
```

Explain:

> What does Git tell you about your local and remote repository?

Open the repository on GitHub and verify that `index.html` has arrived.

## 7. Commit Your Documentation

Your `status*.txt` files are currently not necessarily part of the repository yet.

Use what you have learned to add, commit and push them.

Choose a meaningful commit message yourself.

## 8. My Git Command Cheat Sheet

Create `git-cheat-sheet.md` in your repository as part of your homework. Make a concise personal reference for the commands used in the lesson and exercise: `git clone`, `git status`, `git add`, `git commit`, `git log`, `git push`, and `git pull`. Include a short explanation of each command and a concrete example of how to use it. Commit and push the finished cheat sheet.

## Expected Result

At the end, your local repository and your GitHub repository must contain at least:

```text
<your-name>-personal-info/
├── README.md
├── index.html
├── git-cheat-sheet.md
├── status1.txt
├── status2.txt
├── status3.txt
└── status4.txt
```

Your Git history must contain at least:

```text
Initial commit
      ↓
Add personal information page
      ↓
Add Git status documentation
      ↓
Add Git command cheat sheet
```

The exact commit messages may differ, but they should describe what changed.

## Check Yourself

Before you consider the exercise finished, make sure that you can answer these questions:

- What is the difference between an untracked and a staged file?
- What does `git add` do?
- What does `git commit` do?
- Why does a commit not immediately appear on GitHub?
- What does `git push` do?
- How can `git status` help you decide what to do next?
- Can I select a command from a task description and explain its effect?

## Test Preparation

> The test may describe a situation and ask you to choose the appropriate Git command or command sequence. Be prepared to explain what each command does.

### Sample Questions

1. You created a new file `README.md`. Which Git command shows whether this file is untracked?
2. Using the scenario above, which commands put `README.md` into the remote repository? Assume the remote and branch tracking are already configured.

### Expected Answers

1. `git status`.
2. Stage the file, commit it locally, then push the commit:

   ```bash
   git add README.md
   git commit -m "Add README"
   git push
   ```

   The commit message may differ, provided it meaningfully describes the change.
