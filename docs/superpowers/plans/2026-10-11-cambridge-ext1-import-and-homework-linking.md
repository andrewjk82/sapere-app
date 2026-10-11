# Cambridge Extension 1 Import and Homework Linking Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Import a verified first Cambridge Extension 1 chapter batch and let a marked-wrong homework problem open its matching Sapere question when one has been imported.

**Architecture:** Canonical content metadata stores a structured Cambridge source reference. The static content publisher emits a compact source-reference index, and the client resolves a homework `(topicId, section, label)` tuple against it. `HomeworkRedo` offers internal practice only for a unique match and otherwise preserves its worksheet-PDF flow.

**Tech Stack:** React, Vite, Node.js ESM scripts, canonical JSON content files, Zod, Node `assert` tests, PDF text extraction.

**Spec:** `docs/superpowers/specs/2026-10-11-cambridge-ext1-import-and-homework-linking-design.md`

## Global Constraints

- Edit canonical `content/chapters/*.json`; never write question content to Firestore or retired seed files.
- Preserve all existing homework marks, answer-key images, and local redo notes.
- A missing or ambiguous link must use the existing worksheet fallback; never guess a question match.
- Every imported question must have an English hint, verified answer, source-specific solution, and non-nested LaTeX delimiters.
- Run `npm run content:validate`, `npm run test:homework`, and the focused publisher/link tests before commit.

---

### Task 1: Source-reference matching utility

**Files:**
- Create: `src/utils/homeworkQuestionLink.js`
- Create: `scripts/testHomeworkQuestionLink.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces `normaliseHomeworkReference({ topicId, section, label })` and `resolveHomeworkQuestion(reference, index)`.
- `resolveHomeworkQuestion` returns `{ status: 'matched', questionId, topicId }`, `{ status: 'missing' }`, or `{ status: 'ambiguous' }`.

- [ ] Write failing tests for case-insensitive section/label normalisation, one matching entry, no entry, and duplicate entries.
- [ ] Run `node scripts/testHomeworkQuestionLink.mjs` and verify it fails because the utility is absent.
- [ ] Implement pure normalisation and resolution with no React or Firebase dependency.
- [ ] Run the focused test and add it to `npm run test:homework`.
- [ ] Commit the utility and tests.

### Task 2: Static source-reference index

**Files:**
- Modify: `tools/content/publish.mjs`
- Modify: `src/services/contentLoader.js`
- Create: `tools/content/tests/sourceReferenceIndex.mjs`

**Interfaces:**
- Publisher emits `source-refs.<hash>.json` and stores its filename as `manifest.sourceRefs`.
- `getHomeworkQuestionIndex()` loads and caches that index, returning `{}` when unavailable.

- [ ] Write a failing publisher test with active questions carrying `meta.source` and assert it produces a key for the expected topic/exercise/question tuple.
- [ ] Run the test and verify it fails because `manifest.sourceRefs` is absent.
- [ ] Extend publishing to recursively index active top-level and multipart questions with a complete Cambridge source reference; retain all IDs for duplicate detection.
- [ ] Add a cached loader function that safely returns an empty index if the sidecar is absent or cannot load.
- [ ] Run the focused publisher test and `npm run test:content`.
- [ ] Commit the publisher and loader changes.

### Task 3: Homework redo internal-practice action

**Files:**
- Modify: `src/components/homework/HomeworkRedo.jsx`
- Modify: `src/utils/homeworkRedo.js`
- Modify: `scripts/testHomeworkRedo.mjs`

**Interfaces:**
- `homeworkReferenceFor(question)` creates `{ topicId, section, label }` from a redo entry.
- `HomeworkRedo` resolves the active reference using `getHomeworkQuestionIndex()` and renders `Practise in Sapere` only for a unique match.

- [ ] Write failing helper tests for converting a redo entry into a source reference and for missing/ambiguous fallback states.
- [ ] Run `node scripts/testHomeworkRedo.mjs` and verify the new assertions fail.
- [ ] Add the async index load and match state to `HomeworkRedo`; retain the worksheet pane and the answer-key overlay unchanged.
- [ ] Add an internal-practice panel that renders the matched canonical question in the existing student question component, with a close/back control returning to redo notes.
- [ ] Run `npm run test:homework` and `npm run build:app`.
- [ ] Commit the redo UI changes.

### Task 4: Chapter 1 import profile and initial verified batch

**Files:**
- Create: `.agents/skills/sapere-math-question/profiles/Y11E1_Cambridge_Ch1_Profile.md`
- Create: `content/chapters/y11e1-cambridge-1.json`
- Modify: `tools/content/validate.mjs`
- Create: `tools/content/tests/sourceReferenceValidation.mjs`

**Interfaces:**
- Every imported question uses `meta.source = { bookId, chapter, exercise, question, page }`.
- Validator rejects a new duplicate complete source tuple among active canonical questions.

- [ ] Extract and inspect the first exercise pages and answer pages of the supplied PDF; identify a small, self-contained first batch and its exact answer key.
- [ ] Write the missing Chapter 1 pedagogy profile from the supplied textbook content.
- [ ] Create a failing validation fixture containing duplicate source references.
- [ ] Add source-reference format and duplicate checks to the validator.
- [ ] Add the initial Chapter 1 questions, each with complete provenance, correct answer, English hint, detailed steps, and misconception-based options.
- [ ] Run `npm run content:validate`, the source-reference validation test, `npm run test:homework`, and visually inspect any diagrams.
- [ ] Commit only the profile, canonical content, and validation work.

### Task 5: End-to-end verification and handoff

**Files:**
- Modify: `docs/superpowers/plans/2026-10-11-cambridge-ext1-import-and-homework-linking.md`

- [ ] Publish local content and verify the generated manifest exposes `sourceRefs`.
- [ ] Confirm a known imported Chapter 1 reference resolves to its question ID and an unknown reference resolves to worksheet fallback.
- [ ] Run `git diff --check`, `npm run test:homework`, `npm run content:validate`, and `npm run build:app`.
- [ ] Record verification commands and results in this plan, then commit the final implementation.
