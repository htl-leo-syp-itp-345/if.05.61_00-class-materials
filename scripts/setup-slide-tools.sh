#!/bin/sh
set -eu

# Install only in class-materials, regardless of the caller's current directory.
slide_tools_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$slide_tools_root"

node -e '
  const [major, minor] = process.versions.node.split(".").map(Number);
  if (major < 22 || (major === 22 && minor < 12)) {
    console.error("Slidev requires Node.js 22.12.0 or newer.");
    process.exit(1);
  }
'

# The lockfile records resolved npm versions after a successful installation.
npm install

# Both upstream projects document the skills CLI installation route.
# Copy the selected skills into this project; do not change user-wide settings.
./node_modules/.bin/skills add pbakaus/impeccable --skill impeccable --agent codex --yes --copy
./node_modules/.bin/skills add slidevjs/slidev --skill slidev --agent codex --yes --copy

test -f .agents/skills/impeccable/SKILL.md
test -f .agents/skills/slidev/SKILL.md
./node_modules/.bin/slidev --version
./node_modules/.bin/impeccable --version

printf '%s\n' 'Slidev and Impeccable are installed locally, including both Codex skills.'
printf '%s\n' 'The skills will be available on your next turn; reload Codex if they do not appear.'
