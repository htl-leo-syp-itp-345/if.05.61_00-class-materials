# Exercise – My First Git Repository

In this exercise, you will create a small personal website and use Git to track its development.

## 1. Create the Repository

On GitHub, create a new repository named

```text
<your-name>-personal-info
```

For example:

```text
max-mustermann-personal-info
```

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

## Expected Result

At the end, your local repository and your GitHub repository must contain at least:

```text
<your-name>-personal-info/
├── README.md
├── index.html
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
