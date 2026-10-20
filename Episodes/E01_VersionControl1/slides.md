---
theme: default
addons:
  - "@/../../slidev/course"
favicon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZD0iTTggOHYxNm0wLThoMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY1NjU2NSIgc3Ryb2tlLXdpZHRoPSIzIi8+PGcgZmlsbD0iIzY1NjU2NSI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjQiLz48Y2lyY2xlIGN4PSI4IiBjeT0iMjQiIHI9IjQiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjE2IiByPSI0Ii8+PC9nPjwvc3ZnPg=="
title: Version Control - The Basic Commands
titleTemplate: "%s · Season 1 · Episode 1"
info: false
aspectRatio: 16/9
canvasWidth: 1920
colorSchema: light
routerMode: hash
browserExporter: false
fonts:
  provider: none
  sans: "Gill Sans, Gill Sans MT, Calibri, sans-serif"
  mono: "Gill Sans, Gill Sans MT, Calibri, sans-serif"
transition: fade
drawings:
  enabled: false
record: false
selectable: true
presenter: false
download: false
defaults:
  layout: course
  clicks: 0
layout: course
slideType: Title
---

# Version Control — The Basic Commands

<OpeningGraph />

Season 1 · Episode 1

---

slideType: Image-and-bullets
---

# Motivation 1 — Reproduce Working States

- A working website
- Images, navigation, and a usable menu

![Campus Café website with aligned navigation, coffee photography, and menu content](./assets/campus-cafe-working.png?inline)

---

slideType: General content
---

# Feature Request

Add online reservations.

Add a Reservations link to the navigation:

<ReservationNavigation />

> “Add a Reservations page and link it from the navigation. Keep the existing menu and layout.”

---

slideType: Image-and-bullets
---

# Distorted Website

- The new navigation point is there
- But the rest is totally broken

![The same Campus Café website with a new Reservations link, overlapping text, and broken image alignment](./assets/campus-cafe-broken.png?inline)

---

slideType: General content
---

# Bug Report

> “The menu no longer works. Can you fix the version we used yesterday?”

Panic!

The source has changed. Where is the version we need?

---

slideType: General content
clicks: 8
---

# Solution 1

<RecoveryScene />

---

slideType: General content
clicks: 5
---

# Motivation 2 — Team Work

<RepoNetwork mode="problem" />

---

slideType: General content
clicks: 6
---

# Solution 2

<RepoNetwork mode="solution" />

---

slideType: General content
clicks: 8
---

# Team Work Details

<RepoNetwork mode="workflow" />

---

slideType: Section
---

# Public Coding
