---
theme: default
favicon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTggOHYxNm0wLThoMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY1NjU2NSIgc3Ryb2tlLXdpZHRoPSIzIi8+PGcgZmlsbD0iIzY1NjU2NSI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiLz48Y2lyY2xlIGN4PSI4IiBjeT0iMjQiIHI9IjQiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjE2IiByPSI0Ii8+PC9nPjwvc3ZnPg=='
title: Version Control - The Basic Commands
titleTemplate: '%s · Season 1 · Episode 1'
info: false
aspectRatio: 16/9
canvasWidth: 1920
colorSchema: light
routerMode: hash
browserExporter: false
fonts:
  provider: none
  sans: 'Gill Sans, Gill Sans MT, Calibri, sans-serif'
  mono: 'Gill Sans, Gill Sans MT, Calibri, sans-serif'
transition: fade
drawings:
  enabled: false
record: false
selectable: true
presenter: false
download: false
defaults:
  layout: course
layout: course
kind: title
---

# Version Control<br>The Basic Commands

<OpeningGraph />

<p class="course-subtitle">Season 1 · Episode 1</p>

---
kind: content
---

# Motivation 1 —<br>Reproduce Working States

<div class="course-scene"><WebsitePreview /><p class="scene-caption">A working website. Images, navigation, and a usable menu.</p></div>

---
kind: content
---

# Feature Request

<div class="course-scene feature-scene">
  <div class="feature-copy">
    <p class="large-body">Add online reservations.</p>
    <p>Add a Reservations link<br>to the main navigation.</p>
  </div>
  <div class="feature-navigation" role="img" aria-label="A new Reservations link is added to the website navigation">
    <p>Menu</p><p>Visit</p><p class="new-link">Reservations</p>
    <svg viewBox="0 0 600 90" aria-hidden="true"><path d="M50 45H540m-30-23 30 23-30 23" /></svg>
  </div>
  <blockquote class="feature-prompt">“Add a Reservations page and link it from the navigation.<br>Keep the existing menu and layout.”</blockquote>
</div>

---
kind: content
---

# Distorted Website

<div class="course-scene"><WebsitePreview state="broken" /><p class="scene-caption">The new link is there. The fonts and layout are broken.</p></div>

---
kind: content
---

# Bug Report

<div class="course-scene report-scene">
  <blockquote>“The menu no longer works.<br>Can you fix the version<br>we used yesterday?”</blockquote>
  <p class="report-panic">Panic!</p>
  <p class="scene-caption">The source has changed. Where is the version we need?</p>
</div>

---
kind: content
clicks: 8
---

# Solution 1

<RecoveryScene />

---
kind: content
clicks: 5
---

# Motivation 2 — Team Work

<RepoNetwork mode="problem" />

---
kind: content
clicks: 6
---

# Solution 2

<RepoNetwork mode="solution" />

---
kind: content
clicks: 8
---

# Team Work Details

<RepoNetwork mode="workflow" />

---
kind: section
---

# Public Coding
