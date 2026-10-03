# Daily Challenge — five sprints — Design

Date: 2026-10-03 · Status: approved in chat, pending spec review

## Goal

The student "Daily Challenge" tab (formerly "Times Table") becomes a hub of five weekly speed
sprints — **Addition, Subtraction, Times Table, Division, Algebra** — each with its own weekly
leaderboard and payout. Weekly sprint XP changes from 100/50/20/5 to **10 / 5 / 2 / 1** (1st / 2nd /
3rd / every other participant), applied to every sprint.

## What exists today (reused)

- `src/services/timesTableSprintService.js` — question generator, results/meta/attempts writes,
  rank count, cached top-5 meta with one `onSnapshot`, payout check (`checkPendingSprintPayout`).
- `api/_lib/timesTableSprintSettlement.js` — Monday cron settlement (idempotent via
  `awardedUids` on `timestable_sprint_settlement/{weekId}`), called from `api/cron-unified.js`.
- `src/components/TimesTableSprint.jsx` — start → quiz → result step machine;
  `sprint/SprintStartView`, `SprintQuizView` (digit-only keypad, ≤3 digits), `SprintResultView`,
  `SprintLeaderboard`, `SprintDashboardCard`, `SprintPayoutModal`.
- Collections `timestable_sprint_results` (doc `{weekId}_{uid}`), `_meta/{weekId}`,
  `_attempts`, `_settlement/{weekId}`. Rules don't constrain the `weekId` value; the one composite
  index is `(weekId ASC, bestTimeMs ASC)` on results.

## Decisions

| # | Decision |
|---|---|
| 1 | Each sprint has its **own** weekly leaderboard and payout (max 5 × 10 = 50 XP/week). |
| 2 | Storage: reuse the existing collections; a **board id** = sprint prefix + week id. Times Table keeps the bare week id (`2026-W40`); others use `add:`, `sub:`, `div:`, `alg:` (e.g. `add:2026-W40`). No rule, index or migration changes. |
| 3 | Algebra = solve for x, x always 1–12. |
| 4 | New XP tiers `[10, 5, 2]`, participation `1`, defined once and used by client display + server settlement. Applies from the next Monday settlement, including the current week's Times Table results. |
| 5 | Two year bands as today: Years 1–3 and Year 4+ (Algebra: Years 1–6 one-step, Year 7+ two-step). Unknown year → upper band. |

## Hub (new)

Daily Challenge tab opens a hub: title "Daily Challenge", weekly reset countdown, five **square**
cards in order Addition (+), Subtraction (−), Times Table (×), Division (÷), Algebra (x) — five
across on wide screens, wrapping to 2–3 per row on tablet/phone. Each card: large operator glyph,
name, "Your best this week" from the device cache (or "Not played yet"), its own accent colour.
**The hub does zero Firestore reads**; a sprint's leaderboard listener attaches only after its card
is opened. Tapping a card runs today's start → quiz → result flow for that sprint; Back returns to
the hub. Start screen title/watermark use the sprint's name. Quiz shows the expression (`47 + 38`,
`56 ÷ 7`) or, for Algebra, the equation with "x = ?" beneath. Teacher runs stay practice-only.

## Question rules

All sprints: 20 questions, no duplicates, 3 s penalty per wrong answer, answers are integers 1–999
(digit keypad unchanged).

| Sprint | Years 1–3 | Year 4+ |
|---|---|---|
| Addition | a, b ∈ 1–20 | a, b ∈ 10–99 |
| Subtraction | (b + c) − b = c, b, c ∈ 1–20 | b, c ∈ 10–99 |
| Times Table | unchanged (factors 2–9) | unchanged (2–12) |
| Division | (a × b) ÷ a = b, a, b ∈ 2–9 | a, b ∈ 2–12 |
| Algebra | Years 1–6: `x + a = c`, `x − a = c`, `a·x = c` (a ∈ 2–12 for ×, 1–20 for ±) | Year 7+: `a·x + b = c`, `a·x − b = c` (a ∈ 2–9, b ∈ 1–20, c > 0) |

Uniqueness key per sprint: Addition unordered pair; Subtraction ordered (b, c); Division ordered
(a, b); Algebra the rendered equation. Generators are pure functions (no Firebase) in
`src/utils/sprintQuestions.js`, each question `{ key, prompt, answer }` (Algebra adds
`subPrompt: 'x = ?'`). Times Table keeps its existing behaviour, re-expressed in this shape.

## Data and settlement

- `src/utils/sprintTypes.js`: the five types `{ id, prefix, name, glyph, accent }`, and
  `sprintBoardId(type, weekId)` → `weekId` for times, `${prefix}:${weekId}` otherwise.
- Service functions take a `boardId` where they took `weekId` (results doc `${boardId}_${uid}`,
  meta doc `boardId`, localStorage keys by `boardId`); results also store `sprintType`; attempts
  add `sprintType`. The `weekId` field on results holds the board id (the indexed field the
  leaderboard and settlement query on).
- Settlement: `settleSprintWeek` runs once per type for the previous week's board id; each board
  keeps its own `awardedUids`/`status`, and a failure in one board is logged and does not stop the
  others. `SPRINT_XP_TIERS = [10, 5, 2]`, `SPRINT_XP_PARTICIPATION = 1` in one shared module
  imported by `api/_lib/timesTableSprintSettlement.js` and the client (`SprintLeaderboard`).
- Payout notice: `checkPendingSprintPayouts(uid)` point-reads the five previous-week result docs
  once after settlement (skipped when the local "seen" flag matches the week) and returns the
  settled ones; one `SprintPayoutModal` lists each sprint's rank and XP plus the total. Marking seen
  sets `payoutSeen` on each shown result doc, as today.

## Dashboard card

`SprintDashboardCard` is renamed "Daily Challenge" and shows the five personal bests from the
device cache, "N/5 played this week", and the reset countdown; tapping opens the hub. Its live
Times Table meta listener is removed — the dashboard's sprint Firestore reads drop to zero.

## Failure handling

Unchanged from today: a failed save still shows the run's time with the rank marked unavailable;
the tab locks during a run. Settlement isolates boards (see above) and the hourly cron retries.

## Testing

- Unit (`scripts/testSprintQuestions.mjs`): every type × band — 20 unique questions, answers
  integers in 1–999, prompt evaluates to the answer, Algebra x ∈ 1–12, band selection by year.
- Unit: `sprintBoardId` (times = bare week id; others prefixed).
- Unit (`scripts/testSprintSettlement.mjs`, fake Firestore): 10/5/2/1 by rank, five boards settled
  independently, no double pay on re-run, tie broken by `bestAchievedAt`, one board failing does
  not block the others.
- Browser (local): hub shows five cards with no Firestore reads; each sprint runs end to end in
  teacher practice mode; Back returns to the hub; dashboard card shows the five bests.

## Deployment

No Firestore rule or index changes — code push only. New XP tiers take effect at the next Monday
settlement.

## Files expected to change

New: `src/utils/sprintTypes.js`, `src/utils/sprintQuestions.js`, `src/constants/sprintXp.js`,
`src/components/sprint/SprintHub.jsx`, `scripts/testSprintQuestions.mjs`,
`scripts/testSprintSettlement.mjs`.
Modified: `src/services/timesTableSprintService.js`, `src/components/TimesTableSprint.jsx`,
`src/components/sprint/SprintStartView.jsx`, `SprintQuizView.jsx`, `SprintLeaderboard.jsx`,
`SprintDashboardCard.jsx`, `src/components/SprintPayoutModal.jsx`, `src/App.jsx` (payout check),
`api/_lib/timesTableSprintSettlement.js`, `api/cron-unified.js` (if the call signature changes),
`package.json` (test script).
