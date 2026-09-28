# Homework Submission — Design

Date: 2026-09-28 · Status: approved in chat, pending spec review

## Goal

Students do their homework inside the app on a tablet: the topic's worksheet PDF (Google Drive)
on one side, the existing working-out notepad on the other, then **Submit**. The teacher gets a
push notification, opens the note snapshots, and marks the homework checked. Firestore traffic and
storage must stay minimal (project is on the Spark plan).

## What already exists (reused, not rebuilt)

- `sessions/{sessionId}` — one doc per lesson. `learnedTopics: [{id, label, …}]` is filled in by the
  teacher after class (Schedule.jsx), `homework` text mirrors it, and
  `isHomeworkCompleted` / `homeworkCompletedAt` are toggled from StudentDetail.jsx's **Homework** tab.
- `Dashboard.jsx` already keeps a live `onSnapshot` subscription on the student's `sessions`
  → the student-side homework list costs zero extra reads. **Consequence: images must never be
  written into a session doc**, or every update re-downloads them to every open dashboard.
- `WorkingOutCanvas.jsx` — multi-page ink notepad with `exportPageImages()`, already used by
  Daily Challenge and Exam Prep.
- `src/utils/imageResize.js` — 960px / JPEG 0.72 resize used for existing grading-queue images.
- `src/utils/cheatSheetUtils.js` — Google Drive link parsing (file id extraction).
- `/api/send-notif` — push + email to a user; `api/cron-unified.js` — hourly cron (external pinger).

## Decisions

| # | Decision |
|---|---|
| 1 | Homework = the topics in a session's `learnedTopics`. No separate assignment UI. |
| 2 | Unit = **one homework per session** (all of that lesson's topics, one notebook, one Submit, one teacher check). |
| 3 | PDF link is stored **once per topic** on the curriculum doc and reused for every student. |
| 4 | Snapshots viewed **in-app** (not email). Storage = Firestore only; Firebase Storage needs Blaze → excluded. |
| 5 | Retention: submission metadata + small thumbnails kept **forever**; full-size originals deleted from Firestore **30 days after the teacher checks**; the student's device keeps its own full-size copy in IndexedDB. |
| 6 | Resubmission allowed until the teacher checks; latest submission overwrites. |
| 7 | Out of scope: teacher comments/annotation, due dates, scores. |

## Student UI

**Entry** — a **Homework** card on the student dashboard, derived from the already-subscribed
`studentSessions`: sessions with non-empty `learnedTopics`. Each row shows lesson date, topics,
and a status badge `To do` / `Submitted` / `Checked ✓`. Checked items collapse into **History**;
their thumbnails load only when expanded.

**Homework screen** (full screen):
- Width ≥ 900px (landscape tablet / desktop): PDF left, notepad right, draggable divider.
- Narrower (portrait tablet / phone): `PDF | Notes` toggle tabs at the top.
- PDF pane: one tab per topic when a session has several. Google Drive `/preview` in an `<iframe>`
  (Drive serves it — zero app traffic). A topic without a PDF shows "No worksheet for this topic".
  An **Open in Google Drive** link is always shown under the frame, since an iframe can't report
  a failed load (e.g. file not shared publicly).
- Notepad: `WorkingOutCanvas` unchanged. Ink is autosaved to IndexedDB per session, so closing and
  reopening the app resumes the draft. No Firestore writes while drafting.

**Submit**: confirm → export pages → upload → "Submitted! Your teacher has been notified."
After the teacher checks, the homework is read-only and viewable from the device copy (or the
thumbnails, on another device). All student-facing strings are English.

## Teacher UI

1. **Topic PDF link** — `Curriculum.jsx` topic editor gets a "Homework PDF" field (same pattern as
   chapter cheat sheets). A pasted Drive share link is normalised to
   `https://drive.google.com/file/d/{id}/preview`. Helper text: file must be shared as
   "Anyone with the link". Stored as `homeworkPdfUrl` on the topic object inside the existing
   `curriculum/{docId}.chapters[].topics[]`, so it rides along with the curriculum the student app
   already loads and caches — no extra reads.
2. **Notification** — on submit, one push to the admin: "Thiery submitted homework — 2A, 2B
   (3 pages)". Tapping it opens that submission.
3. **Homework to check** — a small list on the admin dashboard: `homework_submissions` where
   `status == 'submitted'`, thumbnails only. Reads = number of submissions awaiting a check.
4. **Submission viewer** — opened from that list or from StudentDetail's Homework tab. Full-size
   pages load only here (page navigation, pinch zoom). **Mark as checked** sets the session's
   `isHomeworkCompleted: true` (same as the existing checkbox) and the submission's
   `status: 'checked'`, `checkedAt`. The existing Homework-tab checkbox stays for paper homework.

## Data model

```
sessions/{sessionId}                         existing doc — two small fields added
  homeworkStatus: 'submitted' | 'checked'
  homeworkSubmittedAt: timestamp
  isHomeworkCompleted, homeworkCompletedAt   (existing)

homework_submissions/{sessionId}             new, 1:1 with the session
  studentId, studentName, sessionDate
  topics: [{ id, label }]
  status: 'submitted' | 'checked'
  submittedAt, checkedAt, pageCount
  thumbnails: [dataUrl]                      ~240px JPEG, ~12KB/page — kept forever
  originalsDeletedAt: timestamp | null

homework_submissions/{sessionId}/pages/{i}   one doc per page (stays under the 1MB doc limit)
  image: dataUrl                             960px JPEG ~100–150KB — deleted 30d after check
  index
```

- Max **10 pages** per submission; Submit explains the limit if exceeded.
- A page that still exceeds ~900KB after export is re-compressed at lower quality.
- Resubmitting with fewer pages deletes the now-unused `pages/{i}` docs.

**Student device (IndexedDB, db `sapere-homework`)**, keyed by sessionId: `{ draftStrokes, submittedImages }`.
Caveat: Safari evicts site storage after 7 days without a visit **unless the app is installed to the
home screen** — thumbnails in Firestore are the cross-device / post-eviction fallback.

**firestore.rules** (required — without a matching rule the write fails silently):
- `homework_submissions/{sessionId}` and its `pages/{i}`: student may read/create/update only where
  `studentId == request.auth.uid`, and may not update once `status == 'checked'`; admin full access.
- `sessions/{sessionId}`: student may update only `homeworkStatus` / `homeworkSubmittedAt` on their
  own session (check the existing sessions rule and extend it narrowly).

**Retention job** — one daily step in `api/cron-unified.js`: query `homework_submissions` where
`status == 'checked'` and `checkedAt < now − 30d` and `originalsDeletedAt == null` (bounded,
filtered query — needs a composite index), delete its `pages` docs, set `originalsDeletedAt`.

## Write order and failure handling

- Submit writes in one `writeBatch`: all `pages/{i}` + the submission doc (`status: 'submitted'`)
  + the session's `homeworkStatus`. The teacher list only ever sees complete submissions.
  (Batch limit is 500 ops / 10MB — 10 pages is well under.)
- Upload failure: the draft is already on the device → "Submission failed — your work is saved on
  this device. Try again." with a retry button. One automatic retry after a short delay for
  `resource-exhausted` (Spark burst limit).
- Notification failure never fails the submission (console warning only; the teacher list still
  shows it).
- Resubmit after check is blocked in the UI and by the rules.

## Traffic

| Action | Reads | Writes | Payload |
|---|---|---|---|
| Student homework list | 0 (existing subscription) | 0 | — |
| View PDF | 0 (Drive) | 0 | — |
| Draft autosave | 0 | 0 (IndexedDB) | — |
| Submit (3 pages) | 1 | ~5 (one batch) | ~400KB up |
| Teacher "to check" list | 1 per pending item | 0 | thumbnails |
| Open a submission | ~4 | 0 | ~400KB |
| Mark checked | 0 | 2 | — |

At ~60 submissions/week this is well under 0.1% of the Spark daily quotas. Storage: originals
peak around ~100MB (30-day window); thumbnails grow ~3–4MB/month.

## Testing

- Unit: Drive link → `/preview` normalisation (share, `open?id=`, `uc?id=`, already-preview,
  non-Drive), page-count / size checks, session → homework item mapping (sessions without
  `learnedTopics` excluded, status derivation).
- Rules: another student can't read/write a submission; a checked submission can't be updated.
- Browser (local dev): landscape and portrait layouts; draw → reload → draft restored;
  submit → appears in teacher list → check → student sees `Checked ✓`.
- Real device (teacher): iPad Safari home-screen install — pen input and split view.

## Files expected to change

New: `src/components/homework/HomeworkCard.jsx`, `HomeworkWorkspace.jsx`,
`HomeworkSubmissionViewer.jsx`, `HomeworkInbox.jsx`, `src/services/homeworkService.js`,
`src/utils/homeworkLocalStore.js` (IndexedDB), `src/utils/drivePdf.js`.
Modified: `Dashboard.jsx` (card), `Curriculum.jsx` (topic PDF field), `StudentDetail.jsx`
(Homework tab → open viewer), admin dashboard (inbox), `firestore.rules`, `firestore.indexes.json`,
`api/cron-unified.js` (retention step).
