# Topic-Specific Homework Notes Implementation Plan

> **For agentic workers:** Implement inline in this session. Use checkbox steps as checkpoints.

**Goal:** Give each homework topic its own student notebook and keep topic-specific submitted pages synchronized with teacher answer keys.

**Architecture:** Keep one stable `WorkingOutCanvas` and swap its serialized page data when the active notebook changes. Persist topic drafts and legacy combined work in the existing IndexedDB record. Submit ordered page records with topic metadata, then let the viewer filter records by the selected topic while controlling the marking panel's topic selection.

**Tech Stack:** React, IndexedDB, Firebase Firestore, existing `WorkingOutCanvas` ref API.

**Spec:** `docs/superpowers/specs/2026-10-04-topic-specific-homework-notes-design.md`

## Global Constraints

- Keep the global homework limit at 10 non-empty pages.
- Preserve legacy local drafts and submitted pages under “Earlier combined notes”.
- Do not infer a topic for pages without topic metadata.
- Keep checked-work protection, thumbnail fallback, and narrow-screen tabs.
- Avoid changes to generic canvas behavior unless its current ref API is insufficient.
- Do not add or run tests unless the user requests testing; inspect the resulting changes statically.

---

## Files and Responsibilities

- `src/components/homework/HomeworkWorkspace.jsx`: own selected notebook, topic draft map, legacy notebook selection, per-topic snapshots, and combined submission records.
- `src/utils/homeworkLocalStore.js`: keep the existing record key and add safe normalization/migration of the old `draft` field.
- `src/services/homeworkService.js`: accept page records, persist per-page topic metadata, and return normalized records from Firestore.
- `src/components/homework/HomeworkSubmissionViewer.jsx`: normalize local/remote pages, provide one selected topic across the viewer and marking panel, and scope page navigation.
- `src/components/homework/HomeworkMarkingPanel.jsx`: support a controlled topic index while keeping marks/comment state mounted across topic changes.
- `src/components/WorkingOutCanvas.jsx`: unchanged; use `getPagesData`, `loadPagesData`, and `exportPageImages`.

## Implementation Steps

### 1. Local notebook persistence and legacy draft normalization

- [x] Add an exported normalizer in `homeworkLocalStore.js` that returns `topicDrafts`, `earlierCombinedDraft`, and normalized `submittedPages`.
- [x] Preserve old `draft` as `earlierCombinedDraft` without deleting the source `draft` field during the first transition write.
- [x] Convert old `submittedImages` to records with null topic metadata at read time; keep stored values intact.
- [x] Keep `saveHomeworkLocal` transaction merge behavior so draft saves and submission saves do not overwrite each other.

### 2. Topic-owned workspace notebooks and submission assembly

- [x] Track selected notebook by topic ID, plus a reserved legacy key for earlier combined work.
- [x] On topic change, snapshot the current canvas synchronously, clear its pending debounce, persist the snapshot under its notebook key, and load the selected notebook or a blank first page.
- [x] Bind autosave callbacks to the topic key that generated them; never read a newly selected canvas for an old topic's delayed callback.
- [x] Expose notebook selector chips above the canvas, including “Earlier notes” only when migrated legacy work exists; selecting worksheet topic tabs selects that topic's notebook too.
- [x] On submit, export each topic notebook in session order and attach `topicId`/`topicLabel`; append legacy pages with null metadata. Enforce the existing total page limit before upload.
- [x] Save returned full-quality pages locally as `submittedPages`, while retaining `submittedImages` as a backwards-compatible image-only copy.
- [x] Flush active draft data on close, submit, and topic switch.

### 3. Topic metadata in Firestore submission records

- [x] Update `submitHomework` to accept `pageRecords: [{ image, topicId, topicLabel }]`; retain a compatibility fallback from `pageImages` as null-topic records.
- [x] Resize each record's image exactly as before and write topic metadata into each indexed page document.
- [x] Store aligned `pageTopics` metadata beside thumbnails so purged-original thumbnail previews keep their topic grouping.
- [x] Keep existing submission/session status updates, batch retry, stale-index deletion, and checked guard.
- [x] Make `fetchSubmissionPages` return sorted records with `image`, `index`, `topicId`, and `topicLabel`; missing legacy fields normalize to null.

### 4. Synchronized viewer selection and topic-scoped pages

- [x] Load local `submittedPages` first for student mode, then legacy `submittedImages`, and preserve the existing remote-thumbnail fallback.
- [x] Normalize Firestore page docs and thumbnail fallback entries into page records.
- [x] Build viewer groups from homework topics plus one “Earlier combined notes” group when any record has no topic ID.
- [x] Keep an active group ID and reset page/zoom when it changes; filter page navigation and counts to the selected group only.
- [x] Show an explicit empty state when the selected topic has no submitted work.
- [x] Keep answer/marking tabs available on narrow screens and make the topic selector remain visible across those tabs.

### 5. Controlled teacher marking topic

- [x] Add optional controlled `activeTopicIndex` and `onTopicChange` props to `HomeworkMarkingPanel`; keep local selection fallback only if another caller requires it.
- [x] Let `HomeworkSubmissionViewer` own the selected topic and pass the matching topic index into the marking panel.
- [x] Hide topic-specific answer and marking content for “Earlier combined notes” while retaining overall score/comment/check controls.
- [x] Keep marks keyed by topic and preserve panel mount during switches.
- [x] Show a concise static inspection summary of changed files and confirm no test suite was run.

## Static Review Checklist

- [x] Search every `fetchSubmissionPages` call site and update consumers for record return values.
- [x] Trace switch 1A → 1B → 1A; ensure the outgoing snapshot is captured before selected ID changes and the incoming draft is loaded after.
- [x] Trace debounced autosave firing after a topic switch; ensure the callback cannot write cross-topic ink.
- [x] Trace empty topics, legacy local `draft`, legacy local `submittedImages`, old Firestore page docs, and thumbnail-only submissions.
- [x] Confirm page cap is applied after combining all topic pages and earlier notes.
- [x] Confirm checked-work guard and narrow work/answers/marking tabs are unchanged.
