# P1 — canonical content built (2026-09-14)

`npm run content:normalize` → `content/chapters/` (228 files, 44MB) + `content/figures/` (996 SVG, 4.2MB, 365 duplicates removed)

| | |
|---|---|
| questions (top-level) | 25,310 = Firestore 24,296 ∪ seed-only 1,014 |
| incl. multipart parts | 27,602 |
| chapter membership vs `question_index` | **0 mismatches** |
| `ext` passthrough keys (unclassified) | 3 (`partLabel` 18, `gridConfig` 27, `ans` 1) |

## Recovered from seeds (Firestore was damaged)
| field | count |
|---|---|
| empty `question` | 1,263 |
| generic-template `solutionSteps` → real steps | 8,809 |
| empty `solution` / `hint` | 765 / 1,148 |
| missing `graphData` | 258 |
| MC with no `options` | 594 |

## Review queue (`review-queue.json`, 1,399)
| reason | count | action |
|---|---|---|
| mc-answer-differs / revision (option sets differ = rewritten) | 1,254 | live (Firestore) version kept; spot-check only |
| mc-answer-differs / **KEY-CONFLICT** (same options, different key) | **97** | human must pick — real wrong-answer risk |
| mc-answer-unresolvable / BROKEN | 31 | answer=null, fix |
| empty-stem / BROKEN | 9 | marked inactive; fix or delete |
| mc-no-options / BROKEN | 8 | marked inactive; fix or delete |

## Validator baseline (`content/known-defects.json`, 1,094 keys)
| kind | count | note |
|---|---|---|
| KaTeX parse errors (renderer preprocessing applied) | 1,118 spans | live defects today; `\(\(` nesting 445, `\left…\right` mismatch 411 |
| duplicate part id inside one multipart | 17 | |
| warning: option count ≠ 4 | 320 | |
| warning: duplicate option text | 130 | |
| warning: part id also a standalone doc | 662 (+110 reverse) | legacy "split sub-parts into docs"; reconcile in P5 |

Gate proven: passes on baseline; an injected `\frac{1}` fails with exit 1.

---
# P2 — publisher (2026-09-14)
`tools/content/publish.mjs` → `public/content/` (734 (chapter,topic) files, 34.7MB raw / ~3KB gz median, manifest 123KB / 23KB gz). Deterministic (byte-identical re-run). Wired into `npm run build`; full build 43s. Cache headers in vercel.json.

Acceptance vs today's Firestore indexes (from raw-meta snapshot):
- chapter membership: 263/328 identical; the 65 others fully explained — 17 empty index docs, 22 inactive (filtered today too), 98 orphan ids (no doc). **0 unexplained.**
- topic membership: published sets ⊇ `question_topic_index` (311 identical, 217 larger). The Firestore topic index only ever held the seeder's own ids, so teacher/script-added questions (2,801) never reached topic practice — the published files correct that. Exam-paper questions tagged with curriculum topicIds also appear under that topic; P3 loader must exclude `exam:*` chapters from topic practice by default to keep today's behaviour.
- `figure.html` carrying inline SVG (raw Firestore used the html key): preserved as-is, not de-duplicated — P5 cleanup.

---
# P3 — loader switch (2026-09-14)

`src/services/contentLoader.js` serves questions from `/content/` in the **legacy Firestore document
shape** (`toLegacy`), so no component changed. It is wired into the two chokepoints every student
path already goes through:

| chokepoint | consumers | change |
|---|---|---|
| `questionIndexService.readChapterIndex(chapterId)` | dailyAssignment, practicePool, examPrep, chapterQuestionsCache | CDN ids when `useCdn(chapterId)` |
| `fetchQuestionsByIds(ids)` (×3: chapterQuestionsCache, dailyAssignmentService, examPrepService) | Daily Challenge, Topic Practice, Exam Prep | CDN docs for ids in CDN chapters; `remaining` still from Firestore |
| `chapterQuestionsCache.getChapter/TopicQuestions` | Topic Practice | direct CDN (no localStorage cache) |

Switch: `VITE_CONTENT_SOURCE` = `firestore` (default, **code path unchanged**) | `cdn` | `y7-7,exam:` (chapter ids/prefixes).
Per-browser override: `localStorage.setItem('sapere:contentSource','cdn')` — lets the admin test the CDN
path on production without affecting any student or redeploying. Kill-switch: manifest fetch failure ⇒
Firestore paths, automatically.

## Acceptance — `npm run test:content-parity` (24,274 active Firestore docs vs CDN legacy output)
Every remaining difference is intentional or explained; **0 unexplained**:
| kind | count | meaning |
|---|---|---|
| recovered (question / hint / solution / steps / options / graphData) | 12,815 | Firestore was empty or generic-template; seed content restored |
| mc-answer(adjudicated) | 18 | the 18 key fixes — matches exactly |
| mc-answer(fs unresolvable today) | 19 | Firestore answer matches no option (ungradeable today); CDN resolves via LaTeX-normalised match |
| difficulty | 544 | `Medium` → `medium` |
| graphData | 193 | `diagramSvg` key → `svg` (MathView reads both) |
| chapterId | 43 | docs whose own `chapterId` is an HSC type slug; home = index chapter (what the app uses) |
| type | 31 | test artifact — MC parents with sub-parts, both sides `multiple_choice` |
| answer / solution / options | 4 / 2 / 1 | stray `a:0` on review parents; my 2 solution-text fixes; q2b typo option |
| MISSING-from-cdn | 9 | BROKEN (empty stem / no options) → published as inactive |

MC correctness is by construction: the normaliser and the parity test both call the app's own
`resolveCorrectOptionIndex` (src/utils/mcOptionShuffle.js), so the published index is exactly
what students are graded against today.

Fidelity decisions made here: `options[].isCorrect` ignored (app never reads it); bare top-level jsxgraph
configs kept under `figure.raw` (MathView only renders `.jsxGraph`, so they do not draw today either);
synthetic topics (Firestore `topicId:''`) come back as `''`; `examPaper` only when the doc had one.

Browser smoke (vite preview of a `VITE_CONTENT_SOURCE=cdn` build): app boots, 0 console errors,
manifest 200 / 228 chapters, topic file resolves with SVG inlined. Logged-in flows need a real
account — verify via the localStorage override on production.

---
# Placement pass (2026-09-15) — zero Firestore reads
`tools/content/fixes/2026-09-15-place-unassigned.mjs`, `2026-09-15-misplaced.mjs`
- `unassigned` (547 seed-only questions with no chapter/topic): 351 placed via the seed registry / id prefix / surds `c` code into 11 chapters; **267 dropped as exact-stem duplicates** of questions already in the target chapter (182 → y11a-1, plus the whole legacy `y11-1` file = 71 duplicates of y11a-1). Log: `unassigned-duplicates.json`.
- Mis-derived chapter files removed: `y10-18b-` → y10-18/y10-18b-icem; `y12a-`, `y12a-exam` → their exam papers.
- `y11a-1C` topic renamed `y11a-1c` (71 q) — the app matches topicId exactly against the curriculum, so these never appeared in topic practice.
- `y8-19a-q9b` (Year 8 stem-and-leaf, was in y9-16) → y8-19/y8-19a; `y10-7h-q7b` (Y10 quadratic, was in y11a-1 untopiced) → y10-7/y10-7h.
- Validator baseline key is now file-independent (`id` only) so moves don't register as new defects; baseline shrank 1,094 → 822 (defects that lived in the dropped duplicates).
- Non-curriculum topics re-filed (`2026-09-15-reclassify-noncurriculum-topics.mjs`, 120 q, each read by hand):
  Y7 term-3 2018 exam items under `y7-11e..h/12f/12i/5i/6f` → y7-12a/c/e, y7-5d/e, y7-8f/h, y7-7g, y7-10f;
  `y11a-2F` → 2D, `y11a-2G` → 2C/2D; `y12a-6F` (chapter review) → 6B/6C/6D/6E by section;
  `y10-12c-app` → 12a (right-angled) / 12i (non-right); untopiced `y11a-5*-new-*` → 5D/5E from the id.
  Kept as-is by decision: ICEM `y10-18a..h-icem` (153 q, separate programme).

---
# P4 — teacher edits → git (2026-09-16)
- `content/legacy.js`: `toLegacy` / `fromLegacy` shared by browser and API. **Round-trip lossless on all 25,043 questions.**
- `api/content.js`: POST `{op:'upsert'|'patch'}` → verify admin ID token → read chapter file from GitHub → merge (form fields over the canonical doc, nothing dropped) → zod schema + KaTeX (renderer preprocessing; only NEW math errors rejected) → inline SVG externalised to `content/figures/` → commit (sha lock, 1 retry). New questions land `inactive` + `reviewStatus:pending`. `applyEdit()` core is adapter-injected; `npm run test:content-api` runs 21 scenarios over in-memory content (edit/add/approve/timeLimit/delete/move/bad LaTeX/bad MC answer/SVG/unknown id).
- Publisher now also emits `admin.<hash>.json` (inactive/pending docs), `all-ids.<hash>.json` (id-prefix search), and `hsc-types` with `byDna` (replaces the last student-side Firestore query in HscTypePracticeSession).
- `contentLoader`: admin reads (`adminChapterQuestions`, `adminPendingQuestions`, `searchIds`, `adminGetQuestion`, `getQuestionsByHscType`, `getContentCounts`) and a per-browser **edit overlay** (localStorage, keyed by manifest `contentHash`) so the editor sees a save immediately while Vercel rebuilds.
- Surfaces switched (CDN branch ahead of the untouched Firestore code): QuestionBankPage (load/search/delete/timeLimit; Sync-All hidden; isNew no-op), QuestionBankModal (list/save/delete; no index/membershipVersion/count writes), PendingReviewPanel (list/approve/reject), ReportsAdmin (question reads/delete), HscTypePracticeSession (type/dna reads), Curriculum counts (manifest).
- Needs on Vercel: `GITHUB_TOKEN` (fine-grained PAT, repo `sapere-app`, Contents: read/write). Until set, saves fail with a visible error — nothing is silently lost.
