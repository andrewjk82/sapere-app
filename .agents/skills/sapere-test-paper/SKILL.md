---
name: sapere-test-paper
description: >
  Make printable Secret Study test papers (PDF) for any year level in the standard format:
  two papers (Test A = real question-bank questions, Test B = a little harder), each with an
  answer key. Use whenever the user asks for a test / exam / 시험지 / test paper / 모의고사 for a
  year level or chapter range ("Y8 시험지 만들어줘", "Year 10 test paper", "7학년 시험지").
  Triggers on: "시험지", "test paper", "exam paper", "모의고사", "practice test".
---

# Secret Study test paper — standard format (since 2026-11-22)

The user approved this format on the Y9 comprehensive test. **Every new paper uses it unchanged** —
only the content changes. Generator: `tools/test-paper/` (example spec:
`tools/test-paper/papers/y9_comprehensive.py`).

```
cp tools/test-paper/papers/y9_comprehensive.py tools/test-paper/papers/<slug>.py   # edit YEAR, SLUG, TOPICS, papers
python3 tools/test-paper/build.py tools/test-paper/papers/<slug>.py                # → tools/test-paper/out/*.pdf
```
(`npm ci` first if `node_modules/katex` is missing. Playwright/Chromium is pre-installed.)
Send the 4 PDFs with SendUserFile. Commit the spec file (not `out/`, which is gitignored).

## Defaults (use unless the user says otherwise)
- **Two papers**: Test A = real questions from the question bank (`content/chapters/<year>-*.json`,
  prefer ones with `meta.source` = school assessments), wording tidied; Test B = same topics and
  structure, a little harder, newly authored.
- **60 minutes, 50 items**: Section I = 10 multiple choice (1 mark each); Section II = written
  questions whose sub-parts total 40. Marks per part 1–3.
- Scope = the year's chapters in the bank (ask which chapters/term if the user doesn't say; offer
  "whole year").
- Output = printable PDF only (do not add to the app) unless asked.

## Layout (built into build.py — do not change)
- Page 1 = cover only: purple Secret Study logo + "SECRET / STUDY", top-right "<Year> · Mathematics /
  Comprehensive Test", "MATHEMATICS ASSESSMENT" pill, title "<Year> **Test**" (no A/B, no subtitle,
  no background colour), Student name / Class / Teacher / Date, General Instructions box (reading 5
  min, working 60 min, total marks, 3 instructions), topics covered, section mark table. Lavender
  accents (#ede9fe / #a78bfa / #7c3aed).
- Questions start on page 2. MC: purple number badge, A–D bubbles, 56px between questions.
- Section II starts on a new page; every part has ruled working lines (1 mark → 4 lines, 2 → 6,
  3 → 9), never split across pages. Footer: SECRET STUDY · <Year> Test A/B · page n / N.
- Answer key: same header/theme, every answer with short working; Test A rows show the bank id.

## Content rules (the user's explicit complaints — never repeat them)
1. **Only what students have learned.** Stay inside the year's bank chapters (ICE-EM order). School
   past papers in the bank often include next-year content — leave it out. For Y9 that meant: no
   quadratic formula, parabola graphs/transformations, box plots/five-number summary, pyramids/
   cones/spheres, tax tables, angles in minutes, 3D Pythagoras.
2. **Natural, clear English.** Rewrite awkward bank wording ("Ten fewer pupils chose banana" →
   "...than chocolate"; "Simplifying the following…" → "Simplify"). Every comparison needs its
   reference; define every pronumeral; say what rounding/form is required.
3. **Every answer re-computed** (python) — the bank has wrong keys (e.g. `wghs-y9-2016-t3-prob-q5c`
   had 5/8 for 1/2). If you find a bank error, tell the user and fix the bank (`content/chapters`,
   then `npm run content:validate`).
4. MC: exactly 4 options with plausible distractors; complete any bank question with fewer.
5. LaTeX: `\(...\)`, `\dfrac`, `\left( \right)` around fractions (CLAUDE.md fraction rule).
6. Figures: hand-drawn SVG via `figs.py` `tri()` (auto-places side/angle/vertex labels and raises if
   a label touches a side or leaves the viewBox) or a custom SVG. "NOT TO SCALE", never show the answer.

## Before sending
- `build.py` must print `ok` for all 4 PDFs (it fails on KaTeX errors).
- Render pages with `pdftoppm -r 60` and look: cover, MC pages, a figure page, the answer key.
- Report: item/mark totals, scope exclusions, any bank errors found.
