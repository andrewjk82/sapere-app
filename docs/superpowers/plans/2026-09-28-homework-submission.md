# Homework Submission Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Students open a lesson's homework on a tablet (topic PDF from Google Drive beside the existing ink notepad), submit page snapshots, and the teacher gets notified, views them, and marks the homework checked.

**Architecture:** Homework items are derived from the `sessions` docs the student dashboard already subscribes to (`learnedTopics`). Submissions live in a new `homework_submissions/{sessionId}` doc (metadata + permanent thumbnails) with full-size pages in a `pages` subcollection, written in one `writeBatch`. Drafts and a full-size copy stay on the student's device in IndexedDB. A daily step in the existing cron deletes originals 30 days after the teacher checks.

**Tech Stack:** React 19 + Vite, Firebase JS SDK (Firestore), Firebase Admin (Vercel functions in `api/`), plain Node test scripts with `node:assert` (the repo has no Jest/Vitest).

**Spec:** `docs/superpowers/specs/2026-09-28-homework-submission-design.md` (see "Deviations from the spec" at the end of this plan).

## Global Constraints

- Firestore is on the **Spark** plan: never scan a collection; every query is filtered. No Firebase Storage.
- **Never write images (or anything large) into a `sessions` doc** — `Dashboard.jsx` holds a live `onSnapshot` on the student's sessions.
- All student-facing strings are **English**.
- Firestore rejects `undefined` field values (`ignoreUndefinedProperties` is not enabled) — omit keys instead.
- Max **10 pages** per submission; each stored page ≤ **900KB**; a whole batch ≤ **8MB**.
- Originals are deleted **30 days** after the teacher checks; thumbnails and metadata are permanent.
- Deploys happen by `git push` to `main` (Vercel). **Never run `firebase deploy` for hosting.** Ask the user before pushing and before publishing `firestore.rules`.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## File Structure

| File | Responsibility |
|---|---|
| `src/utils/homework.js` (new) | Pure logic, no Firebase: Drive URL parsing, session → homework items, curriculum doc ids, topic → PDF map, byte math, purge date. Node-testable. |
| `scripts/testHomework.mjs` (new) | Unit tests for `homework.js`. |
| `src/utils/homeworkLocalStore.js` (new) | IndexedDB wrapper: per-session draft ink + submitted page images on the device. |
| `src/services/homeworkService.js` (new) | All Firestore reads/writes for homework + teacher notification. |
| `src/components/homework/HomeworkWorkspace.jsx` (new) | Student full-screen split view: PDF pane + notepad + Submit. |
| `src/components/homework/HomeworkCard.jsx` (new) | Student dashboard card: active list + history. |
| `src/components/homework/HomeworkSubmissionViewer.jsx` (new) | Page viewer (teacher: originals + "Mark as checked"; student: device copy or thumbnails). |
| `src/components/homework/HomeworkInbox.jsx` (new) | Admin dashboard list of submissions awaiting a check. |
| `api/_lib/homeworkRetention.js` (new) | Deletes originals whose `purgeAfter` date has passed. |
| `scripts/testHomeworkRetention.mjs` (new) | Unit test for the retention step with a fake Firestore. |
| `src/components/WorkingOutCanvas.jsx` (modify) | Add `getPagesData()`, `loadPagesData()`, `onInkChange` prop. |
| `src/components/Curriculum.jsx` (modify) | "Homework PDF" field on the subtopic form. |
| `src/components/Dashboard.jsx` (modify) | Render `HomeworkCard` for students. |
| `src/components/AdminDashboard.jsx` (modify) | Render `HomeworkInbox`. |
| `src/components/StudentDetail.jsx` (modify) | Homework tab: "View submission" + route the check through the service. |
| `firestore.rules` (modify) | Rules for `homework_submissions`, its `pages`, and a narrow student update on `sessions`. |
| `api/cron-unified.js` (modify) | Call the retention step once per night. |
| `package.json` (modify) | `test:homework` script. |

---

### Task 1: Pure homework helpers

**Files:**
- Create: `src/utils/homework.js`
- Create: `scripts/testHomework.mjs`
- Modify: `package.json` (scripts)

**Interfaces:**
- Produces (all named exports of `src/utils/homework.js`):
  - `MAX_HOMEWORK_PAGES: 10`, `HOMEWORK_RETENTION_DAYS: 30`, `HOMEWORK_ACTIVE_WINDOW_DAYS: 14`
  - `extractDriveFileId(url: string): string | null`
  - `toDrivePreviewUrl(url: string): string` — Drive → `https://drive.google.com/file/d/{id}/preview`, other URLs trimmed as-is, empty → `''`
  - `toDriveOpenUrl(url: string): string` — Drive → `.../file/d/{id}/view`
  - `getHomeworkStatus(session): 'todo' | 'submitted' | 'checked'`
  - `getHomeworkItems(sessions, { today?: Date }): Array<{ sessionId, date, topics: [{id,label}], status }>` — date-desc; `todo` items older than 14 days are dropped
  - `curriculumDocIdsForProfile(profile): string[]` — e.g. `['Year_10']`, `['Year_11_Advanced']`
  - `buildTopicPdfMap(curriculumDocs: Array<{chapters}>): Record<topicId, url>`
  - `dataUrlBytes(dataUrl: string): number`
  - `purgeAfterDate(from: Date, days?: number): 'YYYY-MM-DD'`

- [ ] **Step 1: Write the failing test**

Create `scripts/testHomework.mjs`:

```js
/**
 * Homework helpers — pure logic only (no Firebase).
 * Usage: npm run test:homework
 */
import assert from 'node:assert';
import {
  MAX_HOMEWORK_PAGES,
  extractDriveFileId,
  toDrivePreviewUrl,
  toDriveOpenUrl,
  getHomeworkStatus,
  getHomeworkItems,
  curriculumDocIdsForProfile,
  buildTopicPdfMap,
  dataUrlBytes,
  purgeAfterDate,
} from '../src/utils/homework.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

console.log('homework helpers');

test('extractDriveFileId handles share, open?id= and uc?id= links', () => {
  assert.equal(extractDriveFileId('https://drive.google.com/file/d/ABC_123-x/view?usp=sharing'), 'ABC_123-x');
  assert.equal(extractDriveFileId('https://drive.google.com/open?id=XYZ789'), 'XYZ789');
  assert.equal(extractDriveFileId('https://drive.google.com/uc?export=download&id=Q1'), 'Q1');
  assert.equal(extractDriveFileId('https://example.com/file/d/NOPE/view'), null);
  assert.equal(extractDriveFileId(''), null);
  assert.equal(extractDriveFileId(undefined), null);
});

test('toDrivePreviewUrl normalises Drive links and passes others through', () => {
  assert.equal(
    toDrivePreviewUrl(' https://drive.google.com/file/d/ABC/view?usp=sharing '),
    'https://drive.google.com/file/d/ABC/preview',
  );
  assert.equal(toDrivePreviewUrl('https://drive.google.com/file/d/ABC/preview'), 'https://drive.google.com/file/d/ABC/preview');
  assert.equal(toDrivePreviewUrl('https://example.com/sheet.pdf'), 'https://example.com/sheet.pdf');
  assert.equal(toDrivePreviewUrl(''), '');
  assert.equal(toDrivePreviewUrl(null), '');
});

test('toDriveOpenUrl points Drive links at the viewer page', () => {
  assert.equal(toDriveOpenUrl('https://drive.google.com/file/d/ABC/preview'), 'https://drive.google.com/file/d/ABC/view');
  assert.equal(toDriveOpenUrl('https://example.com/a.pdf'), 'https://example.com/a.pdf');
});

test('getHomeworkStatus', () => {
  assert.equal(getHomeworkStatus({}), 'todo');
  assert.equal(getHomeworkStatus({ homeworkStatus: 'submitted' }), 'submitted');
  assert.equal(getHomeworkStatus({ homeworkStatus: 'checked' }), 'checked');
  assert.equal(getHomeworkStatus({ homeworkStatus: 'submitted', isHomeworkCompleted: true }), 'checked');
  assert.equal(getHomeworkStatus({ isHomeworkCompleted: true }), 'checked');
});

test('getHomeworkItems keeps sessions with learnedTopics, newest first, drops stale todos', () => {
  const today = new Date('2026-09-28T12:00:00');
  const sessions = [
    { id: 's1', date: '2026-09-20', learnedTopics: [{ id: 'y10-2a', label: '2A · Surds' }] },
    { id: 's2', date: '2026-09-27', learnedTopics: [{ id: 'y10-2b', title: 'Adding surds' }], homeworkStatus: 'submitted' },
    { id: 's3', date: '2026-09-25', learnedTopics: [] },
    { id: 's4', date: '2026-08-01', learnedTopics: [{ id: 'y10-1a', label: '1A' }] },
    { id: 's5', date: '2026-08-02', learnedTopics: [{ id: 'y10-1b', label: '1B' }], isHomeworkCompleted: true },
    { date: '2026-09-27', learnedTopics: [{ id: 'x' }] },
  ];
  const items = getHomeworkItems(sessions, { today });
  assert.deepEqual(items.map((i) => i.sessionId), ['s2', 's1', 's5']);
  assert.deepEqual(items[0].topics, [{ id: 'y10-2b', label: 'Adding surds' }]);
  assert.equal(items[0].status, 'submitted');
  assert.equal(items[1].status, 'todo');
  assert.equal(items[2].status, 'checked');
});

test('getHomeworkItems tolerates junk input', () => {
  assert.deepEqual(getHomeworkItems(null), []);
  assert.deepEqual(getHomeworkItems([null, {}]), []);
});

test('curriculumDocIdsForProfile mirrors LearningPath doc ids', () => {
  assert.deepEqual(curriculumDocIdsForProfile({ assignedYear: ['9', 'Year 10'] }), ['Year_9', 'Year_10']);
  assert.deepEqual(curriculumDocIdsForProfile({ assignedYear: 'Year 7' }), ['Year_7']);
  assert.deepEqual(
    curriculumDocIdsForProfile({ assignedYear: ['Year 12'], assignedCourse: ['Advanced', 'Extension 1'] }),
    ['Year_12_Advanced', 'Year_12_Extension 1'],
  );
  assert.deepEqual(curriculumDocIdsForProfile({ assignedYear: ['Year 11'] }), ['Year_11_Advanced']);
  assert.deepEqual(curriculumDocIdsForProfile({}), []);
});

test('buildTopicPdfMap collects homeworkPdfUrl from every chapter topic', () => {
  const map = buildTopicPdfMap([
    { chapters: [{ id: 'y10-2', topics: [{ id: 'y10-2a', homeworkPdfUrl: 'P1' }, { id: 'y10-2b' }] }] },
    { chapters: [{ id: 'y9-1', topics: [{ id: 'y9-1a', homeworkPdfUrl: 'P2' }] }, { id: 'no-topics' }] },
    null,
  ]);
  assert.deepEqual(map, { 'y10-2a': 'P1', 'y9-1a': 'P2' });
});

test('dataUrlBytes estimates decoded size', () => {
  const b64 = Buffer.from('x'.repeat(3000)).toString('base64');
  assert.equal(dataUrlBytes(`data:image/jpeg;base64,${b64}`), 3000);
  assert.equal(dataUrlBytes(''), 0);
});

test('purgeAfterDate adds the retention window', () => {
  assert.equal(purgeAfterDate(new Date('2026-09-28T00:00:00Z')), '2026-10-28');
  assert.equal(purgeAfterDate(new Date('2026-09-28T00:00:00Z'), 1), '2026-09-29');
});

test('page limit constant', () => {
  assert.equal(MAX_HOMEWORK_PAGES, 10);
});

console.log(`\n${passed} passed`);
```

- [ ] **Step 2: Add the npm script and run the test to verify it fails**

In `package.json` `"scripts"`, add after `"test:secret-note"`:

```json
    "test:homework": "node scripts/testHomework.mjs && node scripts/testHomeworkRetention.mjs",
```

(`testHomeworkRetention.mjs` is created in Task 10; until then run the first script directly.)

Run: `node scripts/testHomework.mjs`
Expected: FAIL — `Cannot find module '.../src/utils/homework.js'`

- [ ] **Step 3: Write the implementation**

Create `src/utils/homework.js`:

```js
// Pure homework helpers — no Firebase imports, so scripts/testHomework.mjs can run them in Node.

export const MAX_HOMEWORK_PAGES = 10;
export const HOMEWORK_RETENTION_DAYS = 30;
// Lessons older than this with homework never started don't clutter the student's list.
export const HOMEWORK_ACTIVE_WINDOW_DAYS = 14;

const DAY_MS = 24 * 60 * 60 * 1000;

export const extractDriveFileId = (url) => {
  if (!url || typeof url !== 'string' || !url.includes('drive.google.com')) return null;
  const match = url.match(/\/file\/d\/([^/?#]+)/) || url.match(/[?&]id=([^&#]+)/);
  return match ? match[1] : null;
};

export const toDrivePreviewUrl = (url) => {
  const trimmed = String(url || '').trim();
  if (!trimmed) return '';
  const id = extractDriveFileId(trimmed);
  return id ? `https://drive.google.com/file/d/${id}/preview` : trimmed;
};

export const toDriveOpenUrl = (url) => {
  const trimmed = String(url || '').trim();
  const id = extractDriveFileId(trimmed);
  return id ? `https://drive.google.com/file/d/${id}/view` : trimmed;
};

export const getHomeworkStatus = (session) => {
  if (session?.isHomeworkCompleted === true || session?.homeworkStatus === 'checked') return 'checked';
  if (session?.homeworkStatus === 'submitted') return 'submitted';
  return 'todo';
};

const toLocalDateStr = (date) => date.toLocaleDateString('en-CA'); // YYYY-MM-DD, local time

export const getHomeworkItems = (sessions, { today = new Date() } = {}) => {
  const cutoff = toLocalDateStr(new Date(today.getTime() - HOMEWORK_ACTIVE_WINDOW_DAYS * DAY_MS));
  return (Array.isArray(sessions) ? sessions : [])
    .filter((s) => s?.id && Array.isArray(s.learnedTopics) && s.learnedTopics.length > 0)
    .map((s) => ({
      sessionId: s.id,
      date: s.date || '',
      topics: s.learnedTopics
        .map((t) => ({ id: t?.id || '', label: t?.label || t?.title || t?.id || '' }))
        .filter((t) => t.id),
      status: getHomeworkStatus(s),
    }))
    .filter((item) => item.status !== 'todo' || item.date >= cutoff)
    .sort((a, b) => b.date.localeCompare(a.date));
};

export const curriculumDocIdsForProfile = (profile = {}) => {
  const rawYears = Array.isArray(profile?.assignedYear) ? profile.assignedYear : [profile?.assignedYear];
  const rawCourses = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse : [profile?.assignedCourse];
  const courses = rawCourses.filter(Boolean);
  if (courses.length === 0) courses.push('Advanced');
  const ids = [];
  rawYears.forEach((y) => {
    const n = parseInt(String(y || '').replace(/\D/g, ''), 10);
    if (!Number.isFinite(n) || n <= 0) return;
    const candidates = n >= 11 ? courses.map((c) => `Year_${n}_${c}`) : [`Year_${n}`];
    candidates.forEach((id) => { if (!ids.includes(id)) ids.push(id); });
  });
  return ids;
};

export const buildTopicPdfMap = (curriculumDocs) => {
  const map = {};
  (Array.isArray(curriculumDocs) ? curriculumDocs : []).forEach((d) => {
    (d?.chapters || []).forEach((chapter) => {
      (chapter?.topics || []).forEach((topic) => {
        if (topic?.id && topic.homeworkPdfUrl) map[topic.id] = topic.homeworkPdfUrl;
      });
    });
  });
  return map;
};

export const dataUrlBytes = (dataUrl) => {
  if (!dataUrl || typeof dataUrl !== 'string') return 0;
  const comma = dataUrl.indexOf(',');
  const b64 = comma >= 0 ? dataUrl.slice(comma + 1) : dataUrl;
  const padding = b64.endsWith('==') ? 2 : b64.endsWith('=') ? 1 : 0;
  return Math.floor((b64.length * 3) / 4) - padding;
};

export const purgeAfterDate = (from = new Date(), days = HOMEWORK_RETENTION_DAYS) =>
  new Date(from.getTime() + days * DAY_MS).toISOString().slice(0, 10);
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `node scripts/testHomework.mjs`
Expected: `11 passed`

- [ ] **Step 5: Lint and commit**

Run: `npx eslint src/utils/homework.js scripts/testHomework.mjs` — Expected: no output.

```bash
git add src/utils/homework.js scripts/testHomework.mjs package.json
git commit -m "Add pure homework helpers with tests

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2: WorkingOutCanvas draft save/restore hooks

**Files:**
- Modify: `src/components/WorkingOutCanvas.jsx` (component signature line 227; after `strokesRef.current = strokes;` line 277; `useImperativeHandle` return object ~line 1114)

**Interfaces:**
- Produces on the canvas ref (in addition to the existing `exportPageImages`, `hasContent`, …):
  - `getPagesData(): { pages: Stroke[][], pageTypes: boolean[], currentPage: number }`
  - `loadPagesData(data: { pages, pageTypes?, currentPage? }): void` — no-op for empty/invalid data
- Produces prop: `onInkChange?: () => void` — called after any change to strokes or pages (also once on mount)

No automated test exists for this component (canvas + pointer events); it is verified in the browser in Task 7.

- [ ] **Step 1: Add the prop**

Change line 227 from:

```jsx
const WorkingOutCanvas = React.memo(forwardRef(({ questionType, isSubmitted, isGraph: isGraphProp, onPageChange }, ref) => {
```

to:

```jsx
const WorkingOutCanvas = React.memo(forwardRef(({ questionType, isSubmitted, isGraph: isGraphProp, onPageChange, onInkChange }, ref) => {
```

- [ ] **Step 2: Fire `onInkChange` on ink changes**

Directly after the line `strokesRef.current = strokes;` (line 277) add:

```jsx
  // Lets a host (homework drafts) autosave without polling. Ref'd so a new
  // callback identity each parent render doesn't re-fire the effect.
  const onInkChangeRef = useRef(onInkChange);
  onInkChangeRef.current = onInkChange;
  useEffect(() => { onInkChangeRef.current?.(); }, [strokes, pages]);
```

- [ ] **Step 3: Expose `getPagesData` / `loadPagesData`**

In the object returned by `useImperativeHandle` (the one containing `exportPageImages`), add after `exportPageImages`:

```jsx
      getPagesData: () => {
        const all = [...pages];
        all[currentPage] = getCurrentPageStrokes();
        return { pages: all, pageTypes: [...pageTypes], currentPage };
      },
      loadPagesData: (data) => {
        if (!Array.isArray(data?.pages) || data.pages.length === 0) return;
        const nextPages = data.pages.map((p) => (Array.isArray(p) ? p : []));
        const idx = Math.min(Math.max(0, Number(data.currentPage) || 0), nextPages.length - 1);
        setPages(nextPages);
        setPageTypes(
          Array.isArray(data.pageTypes) && data.pageTypes.length === nextPages.length
            ? data.pageTypes
            : nextPages.map(() => false),
        );
        setCurrentPage(idx);
        setStrokes(nextPages[idx]);
        setUndoStack([]);
      },
```

(The existing `useImperativeHandle` dependency array `[pages, currentPage, isGraph, pageTypes, initialIsGraph]` already covers these.)

- [ ] **Step 4: Lint and build**

Run: `npx eslint src/components/WorkingOutCanvas.jsx` — Expected: no new errors versus `git show HEAD:src/components/WorkingOutCanvas.jsx` (compare error counts: `npx eslint src/components/WorkingOutCanvas.jsx | tail -1`). Do not use `git stash` for the baseline.
Run: `npx vite build` — Expected: `✓ built`. Then `rm -rf dist`.

- [ ] **Step 5: Commit**

```bash
git add src/components/WorkingOutCanvas.jsx
git commit -m "WorkingOutCanvas: expose page data for drafts and an onInkChange hook

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Device storage (IndexedDB)

**Files:**
- Create: `src/utils/homeworkLocalStore.js`

**Interfaces:**
- Produces:
  - `loadHomeworkLocal(uid: string, sessionId: string): Promise<{ draft?, submittedImages?, updatedAt? } | null>` — never throws
  - `saveHomeworkLocal(uid, sessionId, patch: object): Promise<boolean>` — shallow-merges into the stored record; never throws
  - `requestPersistentStorage(): Promise<void>` — best-effort `navigator.storage.persist()`

Node has no `indexedDB`; this module is verified in the browser (Task 7, draft restore).

- [ ] **Step 1: Write the module**

```js
// Per-device homework storage: the in-progress ink draft and the full-size
// pages the student submitted. Firestore keeps only thumbnails long-term, so
// this is the student's full-quality copy. Every call swallows errors — a
// private window or blocked storage must never break the homework screen.

const DB_NAME = 'sapere-homework';
const STORE = 'items';
let dbPromise = null;

const openDb = () => {
  if (dbPromise) return dbPromise;
  dbPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('indexedDB unavailable'));
      return;
    }
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  }).catch((err) => {
    dbPromise = null;
    throw err;
  });
  return dbPromise;
};

const keyOf = (uid, sessionId) => `${uid}:${sessionId}`;

const run = async (mode, operate) => {
  const db = await openDb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const req = operate(tx.objectStore(STORE));
    tx.oncomplete = () => resolve(req?.result);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
};

export const loadHomeworkLocal = async (uid, sessionId) => {
  if (!uid || !sessionId) return null;
  try {
    return (await run('readonly', (store) => store.get(keyOf(uid, sessionId)))) || null;
  } catch {
    return null;
  }
};

export const saveHomeworkLocal = async (uid, sessionId, patch) => {
  if (!uid || !sessionId) return false;
  try {
    const prev = await loadHomeworkLocal(uid, sessionId);
    await run('readwrite', (store) => store.put({ ...(prev || {}), ...patch, updatedAt: Date.now() }, keyOf(uid, sessionId)));
    return true;
  } catch {
    return false;
  }
};

// Safari evicts script-written storage after 7 days without a visit unless the
// site is persisted (installed to the home screen, or persist() granted).
export const requestPersistentStorage = async () => {
  try {
    if (navigator?.storage?.persist && !(await navigator.storage.persisted?.())) {
      await navigator.storage.persist();
    }
  } catch { /* best effort */ }
};
```

- [ ] **Step 2: Lint and commit**

Run: `npx eslint src/utils/homeworkLocalStore.js` — Expected: no output.

```bash
git add src/utils/homeworkLocalStore.js
git commit -m "Add IndexedDB store for homework drafts and submitted pages

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4: Homework Firestore service + notification

**Files:**
- Create: `src/services/homeworkService.js`

**Interfaces:**
- Consumes: `MAX_HOMEWORK_PAGES`, `dataUrlBytes`, `purgeAfterDate`, `curriculumDocIdsForProfile`, `buildTopicPdfMap` (Task 1); `resizeDataUrlImage` from `src/utils/imageResize.js`; `db`, `ADMIN_UID`, `ADMIN_EMAIL` from `src/firebase/config.js`.
- Produces:
  - `submitHomework({ uid, studentName, session, pageImages }): Promise<{ originals: string[], thumbnails: string[] }>` — throws `Error` with message `'empty' | 'too-many-pages' | 'page-too-large' | 'too-large' | 'already-checked'` or a Firestore error
  - `fetchSubmission(sessionId): Promise<object | null>` (includes `id`)
  - `fetchSubmissionPages(sessionId): Promise<string[]>` — admin only (rules)
  - `fetchPendingSubmissions(): Promise<object[]>` — admin only, oldest first
  - `markHomeworkChecked(sessionId): Promise<void>` — admin only
  - `loadTopicPdfMap(profile): Promise<Record<topicId, url>>`
  - `studentDisplayName(profile, user): string`

Firestore calls are verified end-to-end in the browser (Task 11); the pure parts they rely on are covered by Task 1.

- [ ] **Step 1: Write the service**

```js
import {
  collection, doc, getDoc, getDocs, query, where, writeBatch, serverTimestamp,
} from 'firebase/firestore';
import { db, ADMIN_UID, ADMIN_EMAIL } from '../firebase/config';
import { resizeDataUrlImage } from '../utils/imageResize';
import {
  MAX_HOMEWORK_PAGES, dataUrlBytes, purgeAfterDate, curriculumDocIdsForProfile, buildTopicPdfMap,
} from '../utils/homework';

const SUBMISSIONS = 'homework_submissions';
const MAX_PAGE_BYTES = 900 * 1024;
const MAX_BATCH_BYTES = 8 * 1024 * 1024; // Firestore commit limit is 10MiB

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const toOriginal = async (dataUrl) => {
  let out = await resizeDataUrlImage(dataUrl, { maxWidth: 960, maxHeight: 1400, quality: 0.72 });
  if (dataUrlBytes(out) > MAX_PAGE_BYTES) {
    out = await resizeDataUrlImage(dataUrl, { maxWidth: 800, maxHeight: 1200, quality: 0.5 });
  }
  if (dataUrlBytes(out) > MAX_PAGE_BYTES) throw new Error('page-too-large');
  return out;
};

const toThumbnail = (dataUrl) => resizeDataUrlImage(dataUrl, { maxWidth: 240, maxHeight: 340, quality: 0.6 });

export const studentDisplayName = (profile, user) => {
  const full = [profile?.firstName, profile?.lastName].filter(Boolean).join(' ').trim();
  return full || profile?.displayName || user?.displayName || user?.email || 'A student';
};

const notifyTeacherHomeworkSubmitted = async ({ uid, studentName, topics, pageCount }) => {
  if (!ADMIN_UID || uid === ADMIN_UID) return;
  const pages = `${pageCount} page${pageCount === 1 ? '' : 's'}`;
  const topicLine = topics.map((t) => t.label).join(', ');
  const response = await fetch('/api/send-notif', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      studentId: ADMIN_UID,
      email: ADMIN_EMAIL,
      subject: `Homework: ${studentName} submitted`,
      text: `${studentName} submitted homework (${pages}).\n${topicLine}`,
      metadata: { type: 'homework_submitted', studentId: uid, studentName, pageCount },
    }),
  });
  if (!response.ok) console.warn('[homework] send-notif returned', response.status);
};

export async function submitHomework({ uid, studentName, session, pageImages }) {
  const images = (pageImages || []).filter(Boolean);
  if (images.length === 0) throw new Error('empty');
  if (images.length > MAX_HOMEWORK_PAGES) throw new Error('too-many-pages');

  const originals = [];
  for (const image of images) originals.push(await toOriginal(image));
  if (originals.reduce((sum, img) => sum + dataUrlBytes(img), 0) > MAX_BATCH_BYTES) throw new Error('too-large');
  const thumbnails = await Promise.all(images.map(toThumbnail));

  const subRef = doc(db, SUBMISSIONS, session.id);
  const prevSnap = await getDoc(subRef);
  if (prevSnap.exists() && prevSnap.data().status === 'checked') throw new Error('already-checked');
  const prevCount = prevSnap.exists() ? Number(prevSnap.data().pageCount) || 0 : 0;

  const topics = (session.learnedTopics || [])
    .map((t) => ({ id: t?.id || '', label: t?.label || t?.title || t?.id || '' }))
    .filter((t) => t.id);

  // Pages first, submission doc + session flag in the same batch: the teacher's
  // list only ever sees complete submissions.
  const commit = async () => {
    const batch = writeBatch(db);
    originals.forEach((image, index) => {
      batch.set(doc(db, SUBMISSIONS, session.id, 'pages', String(index)), { image, index, studentId: uid });
    });
    for (let i = originals.length; i < prevCount; i += 1) {
      batch.delete(doc(db, SUBMISSIONS, session.id, 'pages', String(i)));
    }
    batch.set(subRef, {
      studentId: uid,
      studentName,
      sessionId: session.id,
      sessionDate: session.date || '',
      topics,
      status: 'submitted',
      submittedAt: serverTimestamp(),
      checkedAt: null,
      pageCount: originals.length,
      thumbnails,
      originalsDeletedAt: null,
    });
    batch.update(doc(db, 'sessions', session.id), {
      homeworkStatus: 'submitted',
      homeworkSubmittedAt: serverTimestamp(),
    });
    await batch.commit();
  };

  try {
    await commit();
  } catch (err) {
    if (err?.code !== 'resource-exhausted') throw err;
    await sleep(1500);
    await commit();
  }

  notifyTeacherHomeworkSubmitted({ uid, studentName, topics, pageCount: originals.length })
    .catch((err) => console.warn('[homework] notify failed (non-fatal):', err?.message || err));

  return { originals, thumbnails };
}

export async function fetchSubmission(sessionId) {
  const snap = await getDoc(doc(db, SUBMISSIONS, sessionId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
}

export async function fetchSubmissionPages(sessionId) {
  const snap = await getDocs(collection(db, SUBMISSIONS, sessionId, 'pages'));
  return snap.docs
    .map((d) => d.data())
    .sort((a, b) => (a.index ?? 0) - (b.index ?? 0))
    .map((p) => p.image)
    .filter(Boolean);
}

export async function fetchPendingSubmissions() {
  const snap = await getDocs(query(collection(db, SUBMISSIONS), where('status', '==', 'submitted')));
  return snap.docs
    .map((d) => ({ id: d.id, ...d.data() }))
    .sort((a, b) => (a.submittedAt?.toMillis?.() || 0) - (b.submittedAt?.toMillis?.() || 0));
}

export async function markHomeworkChecked(sessionId) {
  const batch = writeBatch(db);
  batch.update(doc(db, SUBMISSIONS, sessionId), {
    status: 'checked',
    checkedAt: serverTimestamp(),
    purgeAfter: purgeAfterDate(new Date()),
  });
  batch.update(doc(db, 'sessions', sessionId), {
    isHomeworkCompleted: true,
    homeworkCompletedAt: new Date().toISOString(),
    homeworkStatus: 'checked',
  });
  await batch.commit();
}

// 1–2 reads per homework open. Fetched fresh (not from LearningPath's cache)
// so a PDF the teacher just added shows up immediately.
export async function loadTopicPdfMap(profile) {
  const ids = curriculumDocIdsForProfile(profile);
  const snaps = await Promise.all(ids.map((id) => getDoc(doc(db, 'curriculum', id)).catch(() => null)));
  return buildTopicPdfMap(snaps.filter((s) => s?.exists()).map((s) => s.data()));
}
```

- [ ] **Step 2: Lint, build, commit**

Run: `npx eslint src/services/homeworkService.js` — Expected: no output.
Run: `npx vite build && rm -rf dist` — Expected: `✓ built`.

```bash
git add src/services/homeworkService.js
git commit -m "Add homework Firestore service and teacher notification

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Firestore rules

**Files:**
- Modify: `firestore.rules` (sessions block lines 34-41; add a new block after `grading_queue`, line 76)

**Interfaces:**
- Consumes: document shapes written in Task 4.

- [ ] **Step 1: Narrow student update on sessions**

Replace line 40:

```
      allow update, delete: if isAdmin() || (isSignedIn() && resource.data.tutorId == request.auth.uid);
```

with:

```
      allow update: if isAdmin()
        || (isSignedIn() && resource.data.tutorId == request.auth.uid)
        // Student marks their own homework submitted — only these two fields,
        // and never after the teacher has checked it.
        || (isSignedIn()
            && resource.data.studentId == request.auth.uid
            && resource.data.get('homeworkStatus', '') != 'checked'
            && resource.data.get('isHomeworkCompleted', false) != true
            && request.resource.data.diff(resource.data).affectedKeys().hasOnly(['homeworkStatus', 'homeworkSubmittedAt'])
            && request.resource.data.homeworkStatus == 'submitted');
      allow delete: if isAdmin() || (isSignedIn() && resource.data.tutorId == request.auth.uid);
```

- [ ] **Step 2: Add homework_submissions rules**

After the closing `}` of `match /grading_queue/{queueId}` add:

```
    // Homework submissions — one per session; full-size pages in pages/{i}.
    match /homework_submissions/{sessionId} {
      // resource == null: the student's own pre-submit existence check.
      allow read: if isAdmin()
        || (isSignedIn() && (resource == null || resource.data.studentId == request.auth.uid));
      allow create: if isSignedIn()
        && request.resource.data.studentId == request.auth.uid
        && request.resource.data.status == 'submitted';
      allow update: if isAdmin()
        || (isSignedIn()
            && resource.data.studentId == request.auth.uid
            && resource.data.status != 'checked'
            && request.resource.data.studentId == request.auth.uid
            && request.resource.data.status == 'submitted');
      allow delete: if isAdmin();

      match /pages/{pageId} {
        allow read: if isAdmin() || (isSignedIn() && resource.data.studentId == request.auth.uid);
        allow create, update: if isAdmin()
          || (isSignedIn()
              && request.resource.data.studentId == request.auth.uid
              && (!exists(/databases/$(database)/documents/homework_submissions/$(sessionId))
                  || (get(/databases/$(database)/documents/homework_submissions/$(sessionId)).data.studentId == request.auth.uid
                      && get(/databases/$(database)/documents/homework_submissions/$(sessionId)).data.status != 'checked')));
        allow delete: if isAdmin()
          || (isSignedIn()
              && resource.data.studentId == request.auth.uid
              && get(/databases/$(database)/documents/homework_submissions/$(sessionId)).data.status != 'checked');
      }
    }
```

- [ ] **Step 3: Commit (publishing happens in Task 11)**

```bash
git add firestore.rules
git commit -m "Rules for homework submissions and student homework status on sessions

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Topic PDF field in the curriculum editor

**Files:**
- Modify: `src/components/Curriculum.jsx` (line 184 state; `handleAddOrUpdateSubtopic` ~383-391; `handleEditSubtopicClick` ~409-417; the save handler's auto-append ~499-506; the 5 form resets; form JSX ~3985-4010)

**Interfaces:**
- Consumes: `toDrivePreviewUrl` (Task 1).
- Produces: topic objects in `curriculum/{docId}.chapters[].topics[]` may carry `homeworkPdfUrl: string` (Drive `/preview` form). Absent when empty.

- [ ] **Step 1: Import the helper**

Add near the other `../utils/` imports at the top of `Curriculum.jsx`:

```jsx
import { toDrivePreviewUrl } from '../utils/homework';
```

- [ ] **Step 2: Carry the field through form state**

1. Line 184: `useState({ code: '', title: '', page: '' })` → `useState({ code: '', title: '', page: '', homeworkPdfUrl: '' })`.
2. Replace every `setSubtopicForm({ code: '', title: '', page: '' })` (5 occurrences — use a replace-all) with `setSubtopicForm({ code: '', title: '', page: '', homeworkPdfUrl: '' })`.
3. In `handleEditSubtopicClick`, add `homeworkPdfUrl: subtopic.homeworkPdfUrl || ''` to the object passed to `setSubtopicForm`.

- [ ] **Step 3: Save it on the topic (both places a subtopic object is built)**

In `handleAddOrUpdateSubtopic` and in the save handler's "forgot to click [+]" block, change each

```jsx
      page: subtopicForm.page ? parseInt(subtopicForm.page) : ''
    };
```

to

```jsx
      page: subtopicForm.page ? parseInt(subtopicForm.page) : '',
      ...(toDrivePreviewUrl(subtopicForm.homeworkPdfUrl)
        ? { homeworkPdfUrl: toDrivePreviewUrl(subtopicForm.homeworkPdfUrl) }
        : {}),
    };
```

(Spread instead of `homeworkPdfUrl: undefined` — Firestore rejects `undefined`.)

- [ ] **Step 4: Add the input**

In the subtopic form JSX, directly after the closing `</div>` of the row that holds the Code / Title / Page inputs and the +/Save buttons, add:

```jsx
                    <input
                      placeholder="Homework PDF — Google Drive link (optional)"
                      value={subtopicForm.homeworkPdfUrl || ''}
                      onChange={e => setSubtopicForm({ ...subtopicForm, homeworkPdfUrl: e.target.value })}
                      style={{ width: '100%', padding: '8px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '0.8rem', color: '#334155' }}
                    />
                    <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '-2px' }}>
                      Share the file as “Anyone with the link” so students can see it.
                    </div>
```

In the list of existing subtopics rendered above the form, next to each topic's title add a marker when a PDF is set:

```jsx
{topic.homeworkPdfUrl && <span style={{ marginLeft: 6, fontSize: '0.65rem', fontWeight: 800, color: '#7c3aed' }}>PDF</span>}
```

(Find the map over `editingChapter.chapter.topics` that renders each subtopic row; the loop variable may be named `subtopic` — use that name.)

- [ ] **Step 5: Verify in the browser**

Open the local dev server as the admin (dev server is usually already running on `http://localhost:5173`; navigate the preview there). Curriculum → Year 10 → edit a chapter → click a subtopic's edit → paste `https://drive.google.com/file/d/TEST123/view?usp=sharing` → Save → save the chapter. Reopen: the field shows `https://drive.google.com/file/d/TEST123/preview` and the row shows `PDF`. Clear the field and save again: the badge disappears. No console errors (`read_console_messages` with `onlyErrors`).

- [ ] **Step 6: Lint and commit**

Run: `npx eslint src/components/Curriculum.jsx | tail -1` and compare with `git show HEAD:src/components/Curriculum.jsx > /tmp/cur.jsx` baseline count — no new errors.

```bash
git add src/components/Curriculum.jsx
git commit -m "Curriculum editor: optional homework PDF link per topic

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 7: Student homework workspace (split view + submit)

**Files:**
- Create: `src/components/homework/HomeworkWorkspace.jsx`

**Interfaces:**
- Consumes: `WorkingOutCanvas` ref API incl. `getPagesData`, `loadPagesData`, `exportPageImages`, prop `onInkChange` (Task 2); `loadHomeworkLocal`, `saveHomeworkLocal`, `requestPersistentStorage` (Task 3); `submitHomework`, `loadTopicPdfMap`, `studentDisplayName` (Task 4); `toDrivePreviewUrl`, `toDriveOpenUrl`, `MAX_HOMEWORK_PAGES` (Task 1).
- Produces: `<HomeworkWorkspace session profile user status onClose onSubmitted />`
  - `session`: the raw session doc (`id`, `date`, `learnedTopics`)
  - `status`: `'todo' | 'submitted'`
  - `onSubmitted()`: called after a successful submit

- [ ] **Step 1: Write the component**

```jsx
import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ExternalLink, Send, FileText, PenLine, Loader2 } from 'lucide-react';
import WorkingOutCanvas from '../WorkingOutCanvas';
import { loadHomeworkLocal, saveHomeworkLocal, requestPersistentStorage } from '../../utils/homeworkLocalStore';
import { submitHomework, loadTopicPdfMap, studentDisplayName } from '../../services/homeworkService';
import { toDrivePreviewUrl, toDriveOpenUrl, MAX_HOMEWORK_PAGES } from '../../utils/homework';

const WIDE_MIN = 900;
const SUBMIT_ERRORS = {
  empty: 'Write your working on the notepad before submitting.',
  'too-many-pages': `Homework can have at most ${MAX_HOMEWORK_PAGES} pages.`,
  'page-too-large': 'One page is too detailed to upload. Try splitting it across two pages.',
  'too-large': 'This homework is too large to upload. Try using fewer pages.',
  'already-checked': 'Your teacher has already checked this homework.',
};

const HomeworkWorkspace = ({ session, profile, user, status, onClose, onSubmitted }) => {
  const canvasRef = useRef(null);
  const draftLoadedRef = useRef(false);
  const saveTimerRef = useRef(0);
  const topics = (session?.learnedTopics || []).filter((t) => t?.id);

  const [pdfMap, setPdfMap] = useState({});
  const [topicIdx, setTopicIdx] = useState(0);
  const [isWide, setIsWide] = useState(() => window.innerWidth >= WIDE_MIN);
  const [pane, setPane] = useState('pdf');
  const [split, setSplit] = useState(0.5);
  const [dragging, setDragging] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const onResize = () => setIsWide(window.innerWidth >= WIDE_MIN);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    let cancelled = false;
    loadTopicPdfMap(profile).then((map) => { if (!cancelled) setPdfMap(map); }).catch(() => {});
    return () => { cancelled = true; };
  }, [profile]);

  useEffect(() => {
    let cancelled = false;
    requestPersistentStorage();
    loadHomeworkLocal(user?.uid, session?.id).then((record) => {
      if (cancelled) return;
      if (record?.draft) canvasRef.current?.loadPagesData(record.draft);
      draftLoadedRef.current = true;
    });
    return () => { cancelled = true; window.clearTimeout(saveTimerRef.current); };
  }, [user?.uid, session?.id]);

  const handleInkChange = useCallback(() => {
    if (!draftLoadedRef.current) return; // don't overwrite a draft before it's restored
    window.clearTimeout(saveTimerRef.current);
    saveTimerRef.current = window.setTimeout(() => {
      const draft = canvasRef.current?.getPagesData();
      if (draft) saveHomeworkLocal(user?.uid, session?.id, { draft });
    }, 1200);
  }, [user?.uid, session?.id]);

  const handleSubmit = async () => {
    setConfirming(false);
    setError('');
    setSubmitting(true);
    try {
      const draft = canvasRef.current?.getPagesData();
      if (draft) await saveHomeworkLocal(user?.uid, session?.id, { draft });
      const pageImages = (await canvasRef.current?.exportPageImages()) || [];
      const { originals } = await submitHomework({
        uid: user.uid,
        studentName: studentDisplayName(profile, user),
        session,
        pageImages,
      });
      await saveHomeworkLocal(user.uid, session.id, { submittedImages: originals });
      onSubmitted?.();
    } catch (err) {
      setError(SUBMIT_ERRORS[err?.message] || 'Submission failed — your work is saved on this device. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const onDividerDown = (e) => {
    e.preventDefault();
    setDragging(true);
    const move = (ev) => setSplit(Math.min(0.75, Math.max(0.25, ev.clientX / window.innerWidth)));
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  const activeTopic = topics[topicIdx];
  const rawPdf = activeTopic ? pdfMap[activeTopic.id] : '';
  const embedUrl = toDrivePreviewUrl(rawPdf);

  const pdfPane = (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      {topics.length > 1 && (
        <div style={{ display: 'flex', gap: 6, padding: '8px 10px', overflowX: 'auto', borderBottom: '1px solid #e2e8f0', background: '#fff' }}>
          {topics.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTopicIdx(i)}
              style={{
                whiteSpace: 'nowrap', padding: '6px 12px', borderRadius: 999, border: '1px solid',
                borderColor: i === topicIdx ? '#7c3aed' : '#e2e8f0',
                background: i === topicIdx ? '#f5f3ff' : '#fff',
                color: i === topicIdx ? '#6d28d9' : '#475569', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer',
              }}
            >
              {t.label || t.title || t.id}
            </button>
          ))}
        </div>
      )}
      <div style={{ flex: 1, minHeight: 0, position: 'relative', background: '#f1f5f9' }}>
        {embedUrl ? (
          <iframe
            key={embedUrl}
            title="Homework worksheet"
            src={embedUrl}
            allow="autoplay"
            style={{ width: '100%', height: '100%', border: 0, pointerEvents: dragging ? 'none' : 'auto' }}
          />
        ) : (
          <div style={{ height: '100%', display: 'grid', placeItems: 'center', color: '#94a3b8', fontWeight: 600, padding: 24, textAlign: 'center' }}>
            No worksheet for this topic.
          </div>
        )}
      </div>
      {embedUrl && (
        <a
          href={toDriveOpenUrl(rawPdf)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'center', padding: '8px', fontSize: '0.78rem', fontWeight: 700, color: '#6d28d9', background: '#fff', borderTop: '1px solid #e2e8f0' }}
        >
          <ExternalLink size={14} /> Open in Google Drive
        </a>
      )}
    </div>
  );

  const notesPane = (
    <div style={{ height: '100%', minHeight: 0, padding: 8, display: 'flex' }}>
      <WorkingOutCanvas ref={canvasRef} isSubmitted={false} onInkChange={handleInkChange} />
    </div>
  );

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
        <button type="button" onClick={onClose} aria-label="Back" style={{ border: 0, background: 'transparent', cursor: 'pointer', display: 'flex', padding: 6 }}>
          <ArrowLeft size={20} />
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800, color: '#1e1b4b' }}>Homework</div>
          <div style={{ fontSize: '0.75rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {session?.date} · {topics.map((t) => t.label || t.title || t.id).join(', ')}
          </div>
        </div>
        <button
          type="button"
          disabled={submitting}
          onClick={() => setConfirming(true)}
          style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 12, border: 0, background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', fontWeight: 800, cursor: submitting ? 'wait' : 'pointer' }}
        >
          {submitting ? <Loader2 size={16} className="spin" /> : <Send size={16} />}
          {status === 'submitted' ? 'Resubmit' : 'Submit'}
        </button>
      </div>

      {status === 'submitted' && (
        <div style={{ padding: '8px 14px', background: '#f5f3ff', color: '#6d28d9', fontSize: '0.8rem', fontWeight: 700 }}>
          Submitted — you can keep editing and resubmit until your teacher checks it.
        </div>
      )}
      {error && (
        <div role="alert" style={{ padding: '8px 14px', background: '#fef2f2', color: '#b91c1c', fontSize: '0.82rem', fontWeight: 700 }}>
          {error}
        </div>
      )}

      {!isWide && (
        <div style={{ display: 'flex', gap: 6, padding: 8, background: '#fff', borderBottom: '1px solid #e2e8f0' }}>
          {[['pdf', 'Worksheet', FileText], ['notes', 'Notes', PenLine]].map(([key, label, Icon]) => (
            <button
              key={key}
              type="button"
              onClick={() => setPane(key)}
              style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '8px', borderRadius: 10, border: 0, background: pane === key ? '#ede9fe' : '#f8fafc', color: pane === key ? '#6d28d9' : '#64748b', fontWeight: 800 }}
            >
              <Icon size={16} /> {label}
            </button>
          ))}
        </div>
      )}

      <div style={{ flex: 1, minHeight: 0, display: 'flex' }}>
        {isWide ? (
          <>
            <div style={{ width: `${split * 100}%`, minWidth: 0 }}>{pdfPane}</div>
            <div
              onPointerDown={onDividerDown}
              style={{ width: 10, cursor: 'col-resize', background: dragging ? '#c4b5fd' : '#e2e8f0', touchAction: 'none' }}
            />
            <div style={{ flex: 1, minWidth: 0 }}>{notesPane}</div>
          </>
        ) : (
          // Keep the canvas mounted while the worksheet tab is showing so ink isn't lost.
          <>
            <div style={{ flex: 1, minWidth: 0, display: pane === 'pdf' ? 'block' : 'none' }}>{pdfPane}</div>
            <div style={{ flex: 1, minWidth: 0, display: pane === 'notes' ? 'block' : 'none' }}>{notesPane}</div>
          </>
        )}
      </div>

      {confirming && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(15,23,42,0.45)', display: 'grid', placeItems: 'center', zIndex: 1001 }}>
          <div style={{ background: '#fff', borderRadius: 20, padding: 24, maxWidth: 360, width: 'calc(100% - 32px)' }}>
            <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#1e1b4b' }}>Submit your homework?</div>
            <p style={{ color: '#64748b', fontSize: '0.88rem' }}>Your teacher will be notified and can see every page you wrote.</p>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <button type="button" onClick={() => setConfirming(false)} style={{ padding: '8px 14px', borderRadius: 10, border: '1px solid #e2e8f0', background: '#fff', fontWeight: 700 }}>Cancel</button>
              <button type="button" onClick={handleSubmit} style={{ padding: '8px 14px', borderRadius: 10, border: 0, background: '#7c3aed', color: '#fff', fontWeight: 800 }}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeworkWorkspace;
```

Note: in the narrow layout the canvas is hidden with `display:none` while the worksheet shows; `WorkingOutCanvas` resizes its canvases on layout changes (see its resize handling around line 390), so switching back to Notes redraws correctly — confirm this in Step 3.

- [ ] **Step 2: Lint and build**

Run: `npx eslint src/components/homework/HomeworkWorkspace.jsx` — Expected: no output.
Run: `npx vite build && rm -rf dist` — Expected: `✓ built`.

- [ ] **Step 3: Commit (browser verification happens once it's reachable, in Task 8)**

```bash
git add src/components/homework/HomeworkWorkspace.jsx
git commit -m "Add student homework workspace (worksheet + notepad split view)

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 8: Student dashboard card + submission viewer

**Files:**
- Create: `src/components/homework/HomeworkSubmissionViewer.jsx`
- Create: `src/components/homework/HomeworkCard.jsx`
- Modify: `src/components/Dashboard.jsx` (student branch, after the `student-hero-container` grid closes)

**Interfaces:**
- Consumes: `getHomeworkItems` (Task 1); `loadHomeworkLocal` (Task 3); `fetchSubmission`, `fetchSubmissionPages`, `markHomeworkChecked` (Task 4); `HomeworkWorkspace` (Task 7).
- Produces:
  - `<HomeworkSubmissionViewer sessionId mode uid onClose onChecked />` — `mode: 'teacher' | 'student'`; `onChecked(sessionId)` after "Mark as checked"
  - `<HomeworkCard sessions profile user />` — `sessions`: the dashboard's `studentSessions` array

- [ ] **Step 1: Write the viewer**

```jsx
import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, CheckCircle2, ZoomIn, ZoomOut, Loader2 } from 'lucide-react';
import { fetchSubmission, fetchSubmissionPages, markHomeworkChecked } from '../../services/homeworkService';
import { loadHomeworkLocal } from '../../utils/homeworkLocalStore';

const HomeworkSubmissionViewer = ({ sessionId, mode, uid, onClose, onChecked }) => {
  const [submission, setSubmission] = useState(null);
  const [pages, setPages] = useState([]);
  const [isThumbnailOnly, setIsThumbnailOnly] = useState(false);
  const [page, setPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const sub = await fetchSubmission(sessionId);
        if (cancelled) return;
        setSubmission(sub);
        let images = [];
        if (mode === 'student') {
          const local = await loadHomeworkLocal(uid, sessionId);
          images = local?.submittedImages || [];
        } else if (sub && !sub.originalsDeletedAt) {
          images = await fetchSubmissionPages(sessionId);
        }
        if (cancelled) return;
        if (images.length === 0 && sub?.thumbnails?.length) {
          images = sub.thumbnails;
          setIsThumbnailOnly(true);
        }
        setPages(images);
      } catch {
        if (!cancelled) setError('Could not load this homework.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [sessionId, mode, uid]);

  const handleCheck = async () => {
    setChecking(true);
    try {
      await markHomeworkChecked(sessionId);
      setSubmission((s) => ({ ...s, status: 'checked' }));
      onChecked?.(sessionId);
    } catch {
      setError('Could not mark as checked. Try again.');
    } finally {
      setChecking(false);
    }
  };

  const topics = (submission?.topics || []).map((t) => t.label).join(', ');

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(15,23,42,0.85)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', color: '#fff' }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontWeight: 800 }}>{mode === 'teacher' ? submission?.studentName : 'Your homework'}</div>
          <div style={{ fontSize: '0.75rem', opacity: 0.75, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {submission?.sessionDate} · {topics}
          </div>
        </div>
        <button type="button" aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(1, z - 0.5))} style={{ border: 0, background: 'transparent', color: '#fff', padding: 6 }}><ZoomOut size={20} /></button>
        <button type="button" aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(3, z + 0.5))} style={{ border: 0, background: 'transparent', color: '#fff', padding: 6 }}><ZoomIn size={20} /></button>
        {mode === 'teacher' && submission?.status === 'submitted' && (
          <button type="button" disabled={checking} onClick={handleCheck} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 12, border: 0, background: '#10b981', color: '#fff', fontWeight: 800 }}>
            {checking ? <Loader2 size={16} /> : <CheckCircle2 size={16} />} Mark as checked
          </button>
        )}
        {submission?.status === 'checked' && (
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6ee7b7', fontWeight: 800 }}><CheckCircle2 size={16} /> Checked</span>
        )}
        <button type="button" aria-label="Close" onClick={onClose} style={{ border: 0, background: 'transparent', color: '#fff', padding: 6 }}><X size={22} /></button>
      </div>

      {isThumbnailOnly && (
        <div style={{ textAlign: 'center', color: '#fde68a', fontSize: '0.78rem', fontWeight: 700, paddingBottom: 6 }}>
          Showing a small preview — the full-size copy is no longer stored.
        </div>
      )}
      {error && <div role="alert" style={{ textAlign: 'center', color: '#fecaca', fontWeight: 700 }}>{error}</div>}

      <div style={{ flex: 1, minHeight: 0, overflow: 'auto', display: 'flex', justifyContent: 'center', alignItems: zoom === 1 ? 'center' : 'flex-start', padding: 12, touchAction: 'pan-x pan-y pinch-zoom' }}>
        {loading ? (
          <Loader2 size={28} color="#fff" />
        ) : pages.length === 0 ? (
          <div style={{ color: '#cbd5e1', fontWeight: 700 }}>No pages to show.</div>
        ) : (
          <img
            src={pages[page]}
            alt={`Page ${page + 1}`}
            style={{ background: '#fff', borderRadius: 12, width: `${zoom * 100}%`, maxWidth: zoom === 1 ? 900 : 'none', height: 'auto' }}
          />
        )}
      </div>

      {pages.length > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, padding: 12, color: '#fff' }}>
          <button type="button" aria-label="Previous page" disabled={page === 0} onClick={() => { setPage((p) => p - 1); setZoom(1); }} style={{ border: 0, background: 'transparent', color: '#fff', opacity: page === 0 ? 0.3 : 1 }}><ChevronLeft size={24} /></button>
          <span style={{ fontWeight: 700 }}>{page + 1} / {pages.length}</span>
          <button type="button" aria-label="Next page" disabled={page === pages.length - 1} onClick={() => { setPage((p) => p + 1); setZoom(1); }} style={{ border: 0, background: 'transparent', color: '#fff', opacity: page === pages.length - 1 ? 0.3 : 1 }}><ChevronRight size={24} /></button>
        </div>
      )}
    </div>
  );
};

export default HomeworkSubmissionViewer;
```

- [ ] **Step 2: Write the card**

```jsx
import { useMemo, useState } from 'react';
import { BookOpenCheck, ChevronDown, ChevronUp, CheckCircle2, Clock, PenLine } from 'lucide-react';
import { getHomeworkItems } from '../../utils/homework';
import HomeworkWorkspace from './HomeworkWorkspace';
import HomeworkSubmissionViewer from './HomeworkSubmissionViewer';

const BADGE = {
  todo: { label: 'To do', color: '#7c3aed', bg: '#f5f3ff', Icon: PenLine },
  submitted: { label: 'Submitted', color: '#b45309', bg: '#fffbeb', Icon: Clock },
  checked: { label: 'Checked', color: '#15803d', bg: '#f0fdf4', Icon: CheckCircle2 },
};

const Row = ({ item, onOpen }) => {
  const b = BADGE[item.status];
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      style={{ width: '100%', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 14, border: '1px solid #eef2f7', background: '#fff', cursor: 'pointer' }}
    >
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8' }}>{item.date}</div>
        <div style={{ fontWeight: 700, color: '#1e1b4b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {item.topics.map((t) => t.label).join(', ')}
        </div>
      </div>
      <span style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '4px 10px', borderRadius: 999, background: b.bg, color: b.color, fontSize: '0.72rem', fontWeight: 800, whiteSpace: 'nowrap' }}>
        <b.Icon size={12} /> {b.label}
      </span>
    </button>
  );
};

const HomeworkCard = ({ sessions, profile, user }) => {
  const items = useMemo(() => getHomeworkItems(sessions), [sessions]);
  const active = items.filter((i) => i.status !== 'checked');
  const history = items.filter((i) => i.status === 'checked');
  const [showHistory, setShowHistory] = useState(false);
  const [openItem, setOpenItem] = useState(null);

  if (items.length === 0) return null;

  const openSession = openItem ? (sessions || []).find((s) => s.id === openItem.sessionId) : null;

  return (
    <div className="app-panel" style={{ padding: 20, borderRadius: 24, marginBottom: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <BookOpenCheck size={18} color="#7c3aed" />
        <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#1e1b4b' }}>Homework</h3>
        {active.length > 0 && (
          <span style={{ marginLeft: 'auto', fontSize: '0.75rem', fontWeight: 800, color: '#7c3aed' }}>{active.length} open</span>
        )}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {active.length === 0 ? (
          <div style={{ color: '#94a3b8', fontWeight: 600, fontSize: '0.88rem' }}>All caught up.</div>
        ) : (
          active.map((item) => <Row key={item.sessionId} item={item} onOpen={setOpenItem} />)
        )}
      </div>

      {history.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setShowHistory((v) => !v)}
            style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 4, border: 0, background: 'transparent', color: '#64748b', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}
          >
            {showHistory ? <ChevronUp size={14} /> : <ChevronDown size={14} />} History ({history.length})
          </button>
          {showHistory && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {history.map((item) => <Row key={item.sessionId} item={item} onOpen={setOpenItem} />)}
            </div>
          )}
        </>
      )}

      {openItem && openSession && openItem.status !== 'checked' && (
        <HomeworkWorkspace
          session={openSession}
          profile={profile}
          user={user}
          status={openItem.status}
          onClose={() => setOpenItem(null)}
          onSubmitted={() => setOpenItem(null)}
        />
      )}
      {openItem && openItem.status === 'checked' && (
        <HomeworkSubmissionViewer sessionId={openItem.sessionId} mode="student" uid={user?.uid} onClose={() => setOpenItem(null)} />
      )}
    </div>
  );
};

export default HomeworkCard;
```

A checked session with no submission doc (paper homework the teacher ticked) opens the viewer, which shows "No pages to show." — acceptable.

- [ ] **Step 3: Mount the card on the student dashboard**

In `src/components/Dashboard.jsx`:
1. Add the import next to the other component imports: `import HomeworkCard from './homework/HomeworkCard';`
2. Find the student branch's `<div className="student-hero-container" …>`; directly after its matching closing `</div>`, add:

```jsx
          <HomeworkCard sessions={studentSessions} profile={profile} user={user} />
```

(`studentSessions`, `profile`, and `user` are already in scope in `Dashboard.jsx` — confirm the profile variable name with `grep -n "profile" src/components/Dashboard.jsx | head` and use whatever the student hero uses, e.g. `profile?.dreamImageUrl`.)

- [ ] **Step 4: Verify in the browser as a student**

Prerequisite: the Task 5 rules must be live for writes to succeed. Until the user publishes them (Task 11), verify only the read-side UI:
1. Log in to the local dev server with a student test account that has a recent session with `learnedTopics` (or, as admin, add a topic to a recent session of a test student via Schedule).
2. The Homework card lists that session as `To do`.
3. Open it: landscape width (≥900px) shows worksheet left / notes right; drag the divider. `resize_window` preset `tablet` (768px) shows the `Worksheet | Notes` toggle.
4. Draw on Notes, wait 2s, reload the page, reopen: the ink is restored (IndexedDB draft).
5. A topic with no PDF shows "No worksheet for this topic."; one with a PDF (set in Task 6) shows the Drive preview and "Open in Google Drive".
6. No console errors.

- [ ] **Step 5: Lint, build, commit**

Run: `npx eslint src/components/homework/` — Expected: no output. `npx vite build && rm -rf dist`.

```bash
git add src/components/homework/HomeworkCard.jsx src/components/homework/HomeworkSubmissionViewer.jsx src/components/Dashboard.jsx
git commit -m "Student dashboard homework card and submission viewer

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 9: Teacher inbox + StudentDetail integration

**Files:**
- Create: `src/components/homework/HomeworkInbox.jsx`
- Modify: `src/components/AdminDashboard.jsx` (after the `ad__head` header div, ~line 370)
- Modify: `src/components/StudentDetail.jsx` (`toggleHomeworkComplete` ~1051-1067; homework tab session card ~2241-2260)

**Interfaces:**
- Consumes: `fetchPendingSubmissions`, `markHomeworkChecked` (Task 4); `HomeworkSubmissionViewer` (Task 8).
- Produces: `<HomeworkInbox />` (self-contained, no props).

- [ ] **Step 1: Write the inbox**

```jsx
import { useEffect, useState } from 'react';
import { BookOpenCheck } from 'lucide-react';
import { fetchPendingSubmissions } from '../../services/homeworkService';
import HomeworkSubmissionViewer from './HomeworkSubmissionViewer';

const HomeworkInbox = () => {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchPendingSubmissions()
      .then((list) => { if (!cancelled) setItems(list); })
      .catch((err) => console.warn('[homework] inbox load failed:', err?.message || err))
      .finally(() => { if (!cancelled) setLoaded(true); });
    return () => { cancelled = true; };
  }, []);

  if (!loaded || items.length === 0) return null;

  return (
    <div style={{ background: '#fff', border: '1px solid #eef2f7', borderRadius: 20, padding: 16, marginBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
        <BookOpenCheck size={18} color="#7c3aed" />
        <strong style={{ color: '#1e1b4b' }}>Homework to check</strong>
        <span style={{ marginLeft: 'auto', fontWeight: 800, color: '#7c3aed' }}>{items.length}</span>
      </div>
      <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 4 }}>
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setOpenId(item.id)}
            style={{ flex: '0 0 160px', textAlign: 'left', border: '1px solid #e2e8f0', borderRadius: 14, background: '#f8fafc', padding: 8, cursor: 'pointer' }}
          >
            {item.thumbnails?.[0] && (
              <img src={item.thumbnails[0]} alt="" style={{ width: '100%', height: 90, objectFit: 'cover', objectPosition: 'top', borderRadius: 8, background: '#fff' }} />
            )}
            <div style={{ fontWeight: 800, fontSize: '0.82rem', color: '#1e1b4b', marginTop: 6 }}>{item.studentName}</div>
            <div style={{ fontSize: '0.7rem', color: '#64748b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {item.sessionDate} · {(item.topics || []).map((t) => t.label).join(', ')}
            </div>
          </button>
        ))}
      </div>
      {openId && (
        <HomeworkSubmissionViewer
          sessionId={openId}
          mode="teacher"
          onClose={() => setOpenId(null)}
          onChecked={(id) => setItems((prev) => prev.filter((i) => i.id !== id))}
        />
      )}
    </div>
  );
};

export default HomeworkInbox;
```

- [ ] **Step 2: Mount it on the admin dashboard**

In `src/components/AdminDashboard.jsx` add `import HomeworkInbox from './homework/HomeworkInbox';` and directly after the header block

```jsx
      <div className="ad__head">
        <h2>Good morning, {userName}</h2>
        <span className="ad__date">{formatDate()}</span>
      </div>
```

add:

```jsx
      <HomeworkInbox />
```

- [ ] **Step 3: StudentDetail — view button and checked routing**

In `src/components/StudentDetail.jsx`:
1. Imports: `import HomeworkSubmissionViewer from './homework/HomeworkSubmissionViewer';` and `import { markHomeworkChecked } from '../services/homeworkService';`
2. State near `homeworkSessions` (line ~173): `const [viewHomeworkId, setViewHomeworkId] = useState(null);`
3. In `toggleHomeworkComplete`, replace the `try { await updateDoc(...) ... }` body's write with a branch so a submitted homework is checked through the service (which also closes the submission and starts the 30-day timer):

```jsx
    try {
      if (next && session.homeworkStatus === 'submitted') {
        await markHomeworkChecked(session.id);
        setHomeworkSessions((prev) => prev.map((s) => s.id === session.id ? { ...s, homeworkStatus: 'checked' } : s));
      } else {
        await updateDoc(doc(db, 'sessions', session.id), {
          isHomeworkCompleted: next,
          homeworkCompletedAt: next ? new Date().toISOString() : null,
        });
      }
      showToast(next ? 'Homework marked as completed.' : 'Homework set back to pending.', 'success');
    } catch (err) {
```

(keep the existing `catch` body unchanged).
4. In the homework tab session card, before the `{/* Complete toggle … */}` block, add:

```jsx
                    {(session.homeworkStatus === 'submitted' || session.homeworkStatus === 'checked') && (
                      <div style={{ marginTop: '12px' }}>
                        <button
                          type="button"
                          onClick={() => setViewHomeworkId(session.id)}
                          style={{ padding: '8px 14px', borderRadius: '12px', border: '1.5px solid #ddd6fe', background: '#f5f3ff', color: '#6d28d9', fontWeight: 800, fontSize: '0.82rem', cursor: 'pointer' }}
                        >
                          View submission{session.homeworkStatus === 'submitted' ? ' · new' : ''}
                        </button>
                      </div>
                    )}
```

5. At the end of the `case "homework":` render (just inside its outermost wrapper), add:

```jsx
            {viewHomeworkId && (
              <HomeworkSubmissionViewer
                sessionId={viewHomeworkId}
                mode="teacher"
                onClose={() => setViewHomeworkId(null)}
                onChecked={(id) => setHomeworkSessions((prev) => prev.map((s) => s.id === id ? { ...s, homeworkStatus: 'checked', isHomeworkCompleted: true } : s))}
              />
            )}
```

- [ ] **Step 4: Lint, build, commit**

Run: `npx eslint src/components/homework/HomeworkInbox.jsx` — no output. For `AdminDashboard.jsx` and `StudentDetail.jsx`, compare `npx eslint <file> | tail -1` against the HEAD baseline (`git show HEAD:<file> > /tmp/x.jsx`) — no new errors. `npx vite build && rm -rf dist`.

```bash
git add src/components/homework/HomeworkInbox.jsx src/components/AdminDashboard.jsx src/components/StudentDetail.jsx
git commit -m "Teacher homework inbox and submission view in StudentDetail

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 10: 30-day retention in the cron

**Files:**
- Create: `api/_lib/homeworkRetention.js`
- Create: `scripts/testHomeworkRetention.mjs`
- Modify: `api/cron-unified.js` (import at top; new step after the D+1 cleanup block, before "PART 6")

**Interfaces:**
- Consumes: `purgeAfter: 'YYYY-MM-DD'` written by `markHomeworkChecked` (Task 4).
- Produces: `purgeCheckedHomeworkOriginals(db, FieldValue, { todayStr: string, limit?: number }): Promise<{ purged: number, pagesDeleted: number }>`

- [ ] **Step 1: Write the failing test**

```js
/**
 * Homework retention: originals are deleted once purgeAfter <= today, the
 * submission keeps its thumbnails, and purgeAfter is removed so the doc is
 * never matched again. Fake Firestore — no network.
 * Usage: node scripts/testHomeworkRetention.mjs
 */
import assert from 'node:assert';
import { purgeCheckedHomeworkOriginals } from '../api/_lib/homeworkRetention.js';

const DELETE = Symbol('delete');
const TS = Symbol('ts');
const FieldValue = { delete: () => DELETE, serverTimestamp: () => TS };

const store = {
  homework_submissions: {
    old: { purgeAfter: '2026-09-01', thumbnails: ['t'], pages: { 0: {}, 1: {} } },
    today: { purgeAfter: '2026-09-28', thumbnails: ['t'], pages: { 0: {} } },
    future: { purgeAfter: '2026-10-30', thumbnails: ['t'], pages: { 0: {} } },
    pending: { thumbnails: ['t'], pages: { 0: {} } },
  },
};
const queries = [];

const pageRef = (subId, pageId) => ({ kind: 'page', subId, pageId });
const subRef = (subId) => ({
  kind: 'sub',
  subId,
  collection: (name) => {
    assert.equal(name, 'pages');
    return {
      get: async () => {
        const pages = store.homework_submissions[subId].pages;
        const docs = Object.keys(pages).map((pageId) => ({ ref: pageRef(subId, pageId) }));
        return { docs, size: docs.length };
      },
    };
  },
});

const db = {
  collection: (name) => {
    assert.equal(name, 'homework_submissions');
    return {
      where: (field, op, value) => {
        queries.push([field, op, value]);
        return {
          limit: (n) => ({
            get: async () => {
              const docs = Object.entries(store.homework_submissions)
                .filter(([, d]) => d.purgeAfter && d.purgeAfter <= value)
                .slice(0, n)
                .map(([id]) => ({ id, ref: subRef(id) }));
              return { docs, size: docs.length };
            },
          }),
        };
      },
    };
  },
  batch: () => {
    const ops = [];
    return {
      delete: (ref) => ops.push(['delete', ref]),
      update: (ref, data) => ops.push(['update', ref, data]),
      commit: async () => {
        ops.forEach(([op, ref, data]) => {
          const sub = store.homework_submissions[ref.subId];
          if (op === 'delete' && ref.kind === 'page') delete sub.pages[ref.pageId];
          if (op === 'update') {
            Object.entries(data).forEach(([k, v]) => {
              if (v === DELETE) delete sub[k];
              else sub[k] = v;
            });
          }
        });
      },
    };
  },
};

const result = await purgeCheckedHomeworkOriginals(db, FieldValue, { todayStr: '2026-09-28' });

assert.deepEqual(queries, [['purgeAfter', '<=', '2026-09-28']]);
assert.deepEqual(result, { purged: 2, pagesDeleted: 3 });
const s = store.homework_submissions;
assert.deepEqual(s.old.pages, {});
assert.deepEqual(s.today.pages, {});
assert.equal(s.old.purgeAfter, undefined);
assert.equal(s.old.originalsDeletedAt, TS);
assert.deepEqual(s.old.thumbnails, ['t']);
assert.equal(Object.keys(s.future.pages).length, 1);
assert.equal(s.future.purgeAfter, '2026-10-30');
assert.equal(Object.keys(s.pending.pages).length, 1);

const again = await purgeCheckedHomeworkOriginals(db, FieldValue, { todayStr: '2026-09-28' });
assert.deepEqual(again, { purged: 0, pagesDeleted: 0 });

console.log('homework retention: 11 assertions passed');
```

- [ ] **Step 2: Run it to verify it fails**

Run: `node scripts/testHomeworkRetention.mjs`
Expected: FAIL — `Cannot find module '.../api/_lib/homeworkRetention.js'`

- [ ] **Step 3: Write the implementation**

```js
// Deletes full-size homework pages whose purgeAfter date has passed.
// purgeAfter is set when the teacher checks a submission and removed here, so
// each submission is matched exactly once. Single-field range query → uses the
// automatic index; no composite index needed.
export async function purgeCheckedHomeworkOriginals(db, FieldValue, { todayStr, limit = 50 }) {
  const snap = await db.collection('homework_submissions')
    .where('purgeAfter', '<=', todayStr)
    .limit(limit)
    .get();

  let purged = 0;
  let pagesDeleted = 0;
  for (const subDoc of snap.docs) {
    const pagesSnap = await subDoc.ref.collection('pages').get();
    const batch = db.batch();
    pagesSnap.docs.forEach((p) => batch.delete(p.ref));
    batch.update(subDoc.ref, {
      originalsDeletedAt: FieldValue.serverTimestamp(),
      purgeAfter: FieldValue.delete(),
    });
    await batch.commit();
    purged += 1;
    pagesDeleted += pagesSnap.size;
  }
  return { purged, pagesDeleted };
}
```

- [ ] **Step 4: Run the tests**

Run: `npm run test:homework`
Expected: `11 passed` then `homework retention: 11 assertions passed`

- [ ] **Step 5: Wire into the cron**

In `api/cron-unified.js`:
1. Add after the other `./_lib/` imports: `import { purgeCheckedHomeworkOriginals } from './_lib/homeworkRetention.js';`
2. Directly before the `// PART 6: Weekly Times Table Sprint settlement` comment block, add:

```js
    // ══════════════════════════════════════════════════════════════════════
    // PART 5.5: Homework originals retention
    // Same 1–5 AM Sydney window as the D+1 cleanup. purgeAfter is removed once
    // a submission is purged, so later runs in the window re-query 0 docs.
    // ══════════════════════════════════════════════════════════════════════
    if (sydTotalMin >= 60 && sydTotalMin < 300) {
      try {
        const hw = await purgeCheckedHomeworkOriginals(db, admin.firestore.FieldValue, { todayStr });
        if (hw.purged > 0) logs.push(`[Homework] Purged originals for ${hw.purged} submission(s), ${hw.pagesDeleted} page(s).`);
      } catch (e) {
        logs.push(`[Homework] Retention error: ${e.message}`);
      }
    }
```

(`db`, `admin`, `todayStr`, `sydTotalMin`, `logs` are all already defined in the handler — confirm with `grep -n "const todayStr\|sydTotalMin =" api/cron-unified.js`.)

- [ ] **Step 6: Lint and commit**

Run: `npx eslint api/_lib/homeworkRetention.js scripts/testHomeworkRetention.mjs api/cron-unified.js | tail -3` — no new errors versus HEAD for `cron-unified.js`.

```bash
git add api/_lib/homeworkRetention.js scripts/testHomeworkRetention.mjs api/cron-unified.js
git commit -m "Cron: delete homework originals 30 days after the teacher checks

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 11: Publish rules, end-to-end check, deploy

**Files:** none (verification + release)

- [ ] **Step 1: Ask the user to publish `firestore.rules`**

Show the user the diff (`git diff HEAD~10 -- firestore.rules` or the Task 5 commit) and ask how they publish rules (Firebase console paste, or `firebase deploy --only firestore:rules`). Do not run it yourself without an explicit yes. Hosting deploys stay on Vercel.

- [ ] **Step 2: End-to-end on the local dev server (after rules are live)**

As a student test account:
1. Open a `To do` homework, write on 2 pages, Submit → "Submit your homework?" → Submit. The workspace closes; the card shows `Submitted`.
2. Reopen: banner "Submitted — you can keep editing…"; button reads `Resubmit`.
3. `read_network_requests` / Firestore console: `homework_submissions/{sessionId}` has `status: 'submitted'`, `pageCount: 2`, 2 thumbnails; `pages/0`, `pages/1` exist; the session doc has only `homeworkStatus`/`homeworkSubmittedAt` added (no image fields).
4. Resubmit with 1 page → `pages/1` is gone, `pageCount: 1`.

As the admin:
5. Admin dashboard shows "Homework to check (1)" with a thumbnail; the admin received a push/email "Homework: <name> submitted".
6. Open it → full-size page, zoom works → Mark as checked → it leaves the inbox; the submission has `status: 'checked'`, `purgeAfter` = today + 30; the session has `isHomeworkCompleted: true`.
7. StudentDetail → Homework tab shows "View submission" and Completed.

As the student again:
8. The card moves the item to History as `Checked`; opening it shows the device copy. Trying to write to that submission (e.g. resubmitting from an old open tab) fails with "Your teacher has already checked this homework."

- [ ] **Step 3: Run all related tests**

Run: `npm run test:homework && npm run test:mc`
Expected: all pass.

- [ ] **Step 4: Ask before pushing, then push**

Ask the user to confirm, then `git fetch origin main && git log HEAD..origin/main --oneline` (merge if needed) and `git push origin main`.

- [ ] **Step 5: Hand off real-device checks to the user**

iPad Safari (home-screen install): Apple Pencil ink in the Notes pane, split view in landscape, the Drive worksheet scrolls inside the left pane, draft survives closing the app.

---

## Deviations from the spec (update the spec in the same commit as this plan)

1. **Retention query uses a `purgeAfter` date field instead of `checkedAt < now−30d` + `originalsDeletedAt == null`.** That pair needs a composite index; a single-field range on `purgeAfter` uses the automatic index and is removed after purging, so each doc matches once. No `firestore.indexes.json` change.
2. **Push tap opens the app root, not the specific submission.** `api/send-notif.js` hard-codes `fcmOptions.link` to the app URL for every push; the admin lands on the dashboard where "Homework to check" is at the top.
3. **Rules are verified manually (Task 11), not with an emulator test.** The repo has no Firebase emulator / rules-unit-testing setup; adding one is out of scope.
4. **Page docs carry `studentId`** so page read/delete rules don't need a parent `get()` on every read.
5. **Opening a homework reads the curriculum doc(s) fresh (1–2 reads)** instead of relying on LearningPath's cache, so a PDF added moments ago appears immediately.
6. **`todo` homework older than 14 days is hidden** from the student's list (otherwise every past lesson with topics would appear as unfinished on launch).
