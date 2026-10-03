# Daily Challenge — Five Sprints Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the Daily Challenge tab into a hub of five weekly speed sprints (Addition, Subtraction, Times Table, Division, Algebra), each with its own leaderboard and payout, and change weekly sprint XP to 10 / 5 / 2 / 1.

**Architecture:** A sprint's leaderboard is identified by a *board id* — the bare week id for Times Table (unchanged), `${type}:${weekId}` for the others — stored in the existing `timestable_sprint_*` collections, so no rules, indexes or migrations change. Question generation, sprint metadata and XP tiers live in dependency-free modules shared by the browser and the Vercel cron settlement. The existing start → quiz → result flow is reused per sprint behind a new hub screen.

**Tech Stack:** React 19 + Vite, Firebase JS SDK (Firestore), Firebase Admin in `api/` (Vercel), plain Node test scripts with `node:assert`.

**Spec:** `docs/superpowers/specs/2026-10-03-daily-challenge-sprints-design.md`

## Global Constraints

- No Firestore rule, index or data-migration changes. Times Table keeps its bare week id (`2026-09-28`) as board id; others are `add:` / `sub:` / `div:` / `alg:` + week id.
- XP tiers: 1st **10**, 2nd **5**, 3rd **2**, every other participant **1** — one definition in `src/constants/sprintXp.js`, used by client and settlement.
- Every sprint: 20 questions, no duplicates, 3 s wrong-answer penalty, answers are integers 1–999 (digit keypad unchanged, max 3 digits).
- Year bands: Years 1–3 vs Year 4+ (Algebra: Years 1–6 one-step vs Year 7+ two-step). Unknown year → upper band.
- The hub and the dashboard card do **zero** Firestore reads (device cache only); a leaderboard listener attaches only inside an opened sprint.
- `src/utils/sprintTypes.js`, `src/utils/sprintQuestions.js`, `src/constants/sprintXp.js`, `src/utils/sprintWeek.js` must stay dependency-free plain ESM (imported by `api/_lib`).
- All student-facing strings are English.
- Lint gate per modified file: no new ESLint problems vs HEAD (`git show HEAD:<file> | npx eslint --stdin --stdin-filename <file>`). Do not use `git stash`.
- Commit messages end with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`. Do not push without the user's go-ahead.

## File Structure

| File | Responsibility |
|---|---|
| `src/utils/sprintTypes.js` (new) | The five sprint types + `sprintBoardId`. |
| `src/constants/sprintXp.js` (new) | XP tiers + `xpForRank`. |
| `src/utils/sprintQuestions.js` (new) | Per-type question generators, `describeSprint`, factor range. |
| `scripts/testSprintQuestions.mjs` (new) | Unit tests for the three modules above. |
| `api/_lib/timesTableSprintSettlement.js` (modify) | Settle one board; settle all five boards per week. |
| `scripts/testSprintSettlement.mjs` (new) | Settlement tests against a fake Firestore. |
| `src/services/timesTableSprintService.js` (modify) | Board-id parameter, `sprintType` on writes, multi-board payout check. |
| `src/components/sprint/SprintRunner.jsx` (new) | The start → quiz → result flow for one sprint (moved out of TimesTableSprint.jsx). |
| `src/components/sprint/SprintHub.jsx` (new) | Five square cards. |
| `src/components/TimesTableSprint.jsx` (modify) | Hub host: shows the hub or a runner. |
| `src/components/sprint/SprintStartView.jsx`, `SprintQuizView.jsx`, `SprintLeaderboard.jsx` (modify) | Per-type title/coach copy, generic prompt, shared XP constants. |
| `src/components/sprint/SprintDashboardCard.jsx` (modify) | "Daily Challenge" card: five bests from cache, no listener. |
| `src/components/SprintPayoutModal.jsx`, `src/App.jsx`, `src/components/Settings.jsx` (modify) | Combined multi-sprint payout notice + preview. |
| `src/components/sprint/sprint.css` (modify) | Hub grid + square card styles. |
| `package.json` (modify) | `test:sprint` script. |

---

### Task 1: Shared sprint modules (types, XP, questions)

**Files:**
- Create: `src/utils/sprintTypes.js`, `src/constants/sprintXp.js`, `src/utils/sprintQuestions.js`
- Create: `scripts/testSprintQuestions.mjs`
- Modify: `package.json` (scripts)

**Interfaces:**
- Produces:
  - `SPRINT_TYPES: Array<{ id: 'add'|'sub'|'times'|'div'|'alg', name, glyph, accent }>` (in that display order), `getSprintType(id)`, `sprintBoardId(typeId, weekId): string`
  - `SPRINT_XP_TIERS = [10, 5, 2]`, `SPRINT_XP_PARTICIPATION = 1`, `xpForRank(rank): number`
  - `SPRINT_QUESTION_COUNT = 20`, `getFactorRangeForYear(year): {min, max}`, `describeSprint(typeId, year): string`, `generateSprintQuestions(typeId, year, { count?, rng? }): Array<{ key, prompt, answer, subPrompt? }>`

- [ ] **Step 1: Write the failing test**

Create `scripts/testSprintQuestions.mjs`:

```js
/**
 * Sprint question generators, board ids and XP tiers — pure modules.
 * Usage: npm run test:sprint
 */
import assert from 'node:assert';
import { SPRINT_TYPES, getSprintType, sprintBoardId } from '../src/utils/sprintTypes.js';
import { SPRINT_XP_TIERS, SPRINT_XP_PARTICIPATION, xpForRank } from '../src/constants/sprintXp.js';
import {
  SPRINT_QUESTION_COUNT, getFactorRangeForYear, describeSprint, generateSprintQuestions,
} from '../src/utils/sprintQuestions.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

// Deterministic PRNG so failures are reproducible.
const seeded = (seed) => () => {
  seed = (seed * 1664525 + 1013904223) % 4294967296;
  return seed / 4294967296;
};

// Independent checker: what the prompt says must equal the stored answer.
const MINUS = '−';
const solve = (typeId, q) => {
  const p = q.prompt.replaceAll(MINUS, '-');
  if (typeId === 'alg') {
    let m = p.match(/^x \+ (\d+) = (\d+)$/); if (m) return Number(m[2]) - Number(m[1]);
    m = p.match(/^x - (\d+) = (\d+)$/); if (m) return Number(m[2]) + Number(m[1]);
    m = p.match(/^(\d+)x = (\d+)$/); if (m) return Number(m[2]) / Number(m[1]);
    m = p.match(/^(\d+)x \+ (\d+) = (\d+)$/); if (m) return (Number(m[3]) - Number(m[2])) / Number(m[1]);
    m = p.match(/^(\d+)x - (\d+) = (\d+)$/); if (m) return (Number(m[3]) + Number(m[2])) / Number(m[1]);
    throw new Error(`unparseable algebra prompt: ${q.prompt}`);
  }
  const m = p.match(/^(\d+) ([+\-×÷]) (\d+)$/);
  if (!m) throw new Error(`unparseable prompt: ${q.prompt}`);
  const [a, op, b] = [Number(m[1]), m[2], Number(m[3])];
  return { '+': a + b, '-': a - b, '×': a * b, '÷': a / b }[op];
};

console.log('sprint modules');

test('five sprint types in display order', () => {
  assert.deepEqual(SPRINT_TYPES.map((t) => t.id), ['add', 'sub', 'times', 'div', 'alg']);
  assert.equal(getSprintType('div').name, 'Division');
  assert.equal(getSprintType('nope'), null);
});

test('board ids: times keeps the bare week id, others are prefixed', () => {
  assert.equal(sprintBoardId('times', '2026-09-28'), '2026-09-28');
  assert.equal(sprintBoardId('add', '2026-09-28'), 'add:2026-09-28');
  assert.equal(sprintBoardId('alg', '2026-09-28'), 'alg:2026-09-28');
});

test('XP tiers 10 / 5 / 2 / 1', () => {
  assert.deepEqual(SPRINT_XP_TIERS, [10, 5, 2]);
  assert.equal(SPRINT_XP_PARTICIPATION, 1);
  assert.deepEqual([1, 2, 3, 4, 17].map(xpForRank), [10, 5, 2, 1, 1]);
});

test('factor range by year (unknown year → upper band)', () => {
  assert.deepEqual(getFactorRangeForYear('Year 2'), { min: 2, max: 9 });
  assert.deepEqual(getFactorRangeForYear('Year 8'), { min: 2, max: 12 });
  assert.deepEqual(getFactorRangeForYear(''), { min: 2, max: 12 });
});

const YEARS = ['Year 1', 'Year 3', 'Year 4', 'Year 6', 'Year 7', 'Year 12', ''];
for (const { id } of SPRINT_TYPES) {
  test(`${id}: 20 unique, correct, in-range questions for every year band`, () => {
    for (const year of YEARS) {
      for (let seed = 1; seed <= 25; seed++) {
        const qs = generateSprintQuestions(id, year, { rng: seeded(seed) });
        assert.equal(qs.length, SPRINT_QUESTION_COUNT, `${id} ${year} seed ${seed}: count`);
        assert.equal(new Set(qs.map((q) => q.key)).size, qs.length, `${id} ${year}: duplicate keys`);
        assert.equal(new Set(qs.map((q) => q.prompt)).size, qs.length, `${id} ${year}: duplicate prompts`);
        for (const q of qs) {
          assert.ok(Number.isInteger(q.answer) && q.answer >= 1 && q.answer <= 999, `${q.prompt} answer ${q.answer}`);
          assert.equal(solve(id, q), q.answer, `${q.prompt} should equal ${q.answer}`);
        }
      }
    }
  });
}

test('year bands drive difficulty', () => {
  const rng = seeded(7);
  const lowAdd = generateSprintQuestions('add', 'Year 2', { rng });
  assert.ok(lowAdd.every((q) => q.answer <= 40));
  const highAdd = generateSprintQuestions('add', 'Year 5', { rng });
  assert.ok(highAdd.every((q) => q.answer >= 20));
  const lowDiv = generateSprintQuestions('div', 'Year 3', { rng });
  assert.ok(lowDiv.every((q) => q.answer >= 2 && q.answer <= 9));
  const oneStep = generateSprintQuestions('alg', 'Year 5', { rng });
  assert.ok(oneStep.every((q) => /^(x [+−] \d+|\d+x) = \d+$/.test(q.prompt)), oneStep.map((q) => q.prompt).join(' | '));
  const twoStep = generateSprintQuestions('alg', 'Year 9', { rng });
  assert.ok(twoStep.every((q) => /^\d+x [+−] \d+ = \d+$/.test(q.prompt)), twoStep.map((q) => q.prompt).join(' | '));
  assert.ok(twoStep.every((q) => q.answer <= 12 && q.subPrompt === 'x = ?'));
});

test('describeSprint gives a phrase for every type', () => {
  for (const { id } of SPRINT_TYPES) {
    assert.ok(describeSprint(id, 'Year 2').length > 5);
    assert.ok(describeSprint(id, 'Year 9').length > 5);
  }
  assert.equal(describeSprint('times', 'Year 2'), '2× to 9× tables');
});

test('unknown type throws', () => {
  assert.throws(() => generateSprintQuestions('nope', 'Year 5'));
});

console.log(`\n${passed} passed`);
```

In `package.json` scripts, add after `"test:homework"`:

```json
    "test:sprint": "node scripts/testSprintQuestions.mjs && node scripts/testSprintSettlement.mjs",
```

- [ ] **Step 2: Run to verify it fails**

Run: `node scripts/testSprintQuestions.mjs`
Expected: FAIL — `Cannot find module '.../src/utils/sprintTypes.js'`

- [ ] **Step 3: Implement the three modules**

`src/utils/sprintTypes.js`:

```js
// Dependency-free: imported by api/_lib (Node, settlement) as well as the client.
// Order is the hub's display order.
export const SPRINT_TYPES = [
  { id: 'add', name: 'Addition', glyph: '+', accent: '#10b981' },
  { id: 'sub', name: 'Subtraction', glyph: '−', accent: '#0ea5e9' },
  { id: 'times', name: 'Times Table', glyph: '×', accent: '#8b5cf6' },
  { id: 'div', name: 'Division', glyph: '÷', accent: '#f59e0b' },
  { id: 'alg', name: 'Algebra', glyph: 'x', accent: '#ec4899' },
];

export const getSprintType = (id) => SPRINT_TYPES.find((t) => t.id === id) || null;

// A leaderboard = one sprint type in one week. Times Table keeps the bare week
// id so its existing results/meta/settlement docs and caches stay valid; the
// others live in the same collections under a prefixed id (no new rules or
// indexes — the (weekId, bestTimeMs) index already covers them).
export const sprintBoardId = (typeId, weekId) => (typeId === 'times' ? weekId : `${typeId}:${weekId}`);
```

`src/constants/sprintXp.js`:

```js
// Weekly sprint payout, per leaderboard: 1st / 2nd / 3rd, then every other
// participant. Used by the settlement job (api/_lib) and the leaderboard UI.
export const SPRINT_XP_TIERS = [10, 5, 2];
export const SPRINT_XP_PARTICIPATION = 1;

export const xpForRank = (rank) => SPRINT_XP_TIERS[rank - 1] ?? SPRINT_XP_PARTICIPATION;
```

`src/utils/sprintQuestions.js`:

```js
// Sprint question generators — pure (no Firebase), shared shape:
// { key, prompt, answer, subPrompt? }. `key` is the uniqueness key within a run.
// Answers are always integers 1–999 so the digit-only keypad works for every sprint.

export const SPRINT_QUESTION_COUNT = 20;
const MINUS = '−';

const yearNumber = (year) => {
  const n = Number(String(year ?? '').replace(/[^0-9]/g, ''));
  return Number.isFinite(n) && n >= 1 ? n : null;
};
// Unknown year → upper band (same as the original Times Table rule).
const isLowerPrimary = (year) => { const n = yearNumber(year); return n !== null && n <= 3; };
const isPrimary = (year) => { const n = yearNumber(year); return n !== null && n <= 6; };

const randInt = (min, max, rng) => min + Math.floor(rng() * (max - min + 1));

const shuffle = (arr, rng) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

// Rejection sampling with a hard attempt cap — every pool below has far more
// than `count` distinct keys, and the cap means a narrow range can never hang
// the tab (see the 2026-07 questionGenerator infinite-loop incident).
const pickUnique = (count, make, rng, maxAttempts = 5000) => {
  const out = [];
  const seen = new Set();
  for (let i = 0; i < maxAttempts && out.length < count; i++) {
    const q = make(rng);
    if (!seen.has(q.key)) { seen.add(q.key); out.push(q); }
  }
  return out;
};

export const getFactorRangeForYear = (year) => (isLowerPrimary(year) ? { min: 2, max: 9 } : { min: 2, max: 12 });
const addRange = (year) => (isLowerPrimary(year) ? { min: 1, max: 20 } : { min: 10, max: 99 });

const GENERATORS = {
  add: (year, count, rng) => {
    const { min, max } = addRange(year);
    return pickUnique(count, (r) => {
      const a = randInt(min, max, r);
      const b = randInt(min, max, r);
      return { key: `${Math.min(a, b)}+${Math.max(a, b)}`, prompt: `${a} + ${b}`, answer: a + b };
    }, rng);
  },
  sub: (year, count, rng) => {
    const { min, max } = addRange(year);
    return pickUnique(count, (r) => {
      const b = randInt(min, max, r);
      const c = randInt(min, max, r);
      return { key: `${b + c}-${b}`, prompt: `${b + c} ${MINUS} ${b}`, answer: c };
    }, rng);
  },
  // a×b and b×a are the same fact: unordered pool, each pair drawn at most once.
  times: (year, count, rng) => {
    const { min, max } = getFactorRangeForYear(year);
    const pool = [];
    for (let a = min; a <= max; a++) for (let b = a; b <= max; b++) pool.push([a, b]);
    return shuffle(pool, rng).slice(0, count).map(([a, b]) => {
      const flip = rng() < 0.5;
      return { key: `${a}x${b}`, prompt: `${flip ? b : a} × ${flip ? a : b}`, answer: a * b };
    });
  },
  div: (year, count, rng) => {
    const { min, max } = getFactorRangeForYear(year);
    return pickUnique(count, (r) => {
      const a = randInt(min, max, r);
      const b = randInt(min, max, r);
      return { key: `${a * b}/${a}`, prompt: `${a * b} ÷ ${a}`, answer: b };
    }, rng);
  },
  alg: (year, count, rng) => pickUnique(count, (r) => {
    const x = randInt(1, 12, r);
    let prompt;
    if (isPrimary(year)) {
      const kind = randInt(0, 2, r);
      if (kind === 0 || (kind === 1 && x < 2)) {
        const a = randInt(1, 20, r);
        prompt = `x + ${a} = ${x + a}`;
      } else if (kind === 1) {
        const a = randInt(1, x - 1, r);
        prompt = `x ${MINUS} ${a} = ${x - a}`;
      } else {
        const a = randInt(2, 12, r);
        prompt = `${a}x = ${a * x}`;
      }
    } else {
      const a = randInt(2, 9, r);
      const b = randInt(1, 20, r);
      prompt = r() < 0.5 || a * x - b <= 0
        ? `${a}x + ${b} = ${a * x + b}`
        : `${a}x ${MINUS} ${b} = ${a * x - b}`;
    }
    return { key: prompt, prompt, answer: x, subPrompt: 'x = ?' };
  }, rng),
};

export const generateSprintQuestions = (typeId, year, { count = SPRINT_QUESTION_COUNT, rng = Math.random } = {}) => {
  const gen = GENERATORS[typeId];
  if (!gen) throw new Error(`Unknown sprint type: ${typeId}`);
  return gen(year, count, rng);
};

// Phrase for the start screen's "Here's the deal — 20 questions, <phrase>."
export const describeSprint = (typeId, year) => {
  const { min, max } = getFactorRangeForYear(year);
  switch (typeId) {
    case 'add': return isLowerPrimary(year) ? 'adding numbers up to 20' : 'adding two-digit numbers';
    case 'sub': return isLowerPrimary(year) ? 'subtracting within 40' : 'two-digit subtraction';
    case 'times': return `${min}× to ${max}× tables`;
    case 'div': return `dividing by ${min} to ${max}`;
    case 'alg': return isPrimary(year) ? 'one-step equations — find x' : 'two-step equations — find x';
    default: return '';
  }
};
```

- [ ] **Step 4: Run to verify it passes**

Run: `node scripts/testSprintQuestions.mjs`
Expected: `12 passed`

- [ ] **Step 5: Lint and commit**

Run: `npx eslint src/utils/sprintTypes.js src/constants/sprintXp.js src/utils/sprintQuestions.js scripts/testSprintQuestions.mjs` — no output.

```bash
git add src/utils/sprintTypes.js src/constants/sprintXp.js src/utils/sprintQuestions.js scripts/testSprintQuestions.mjs package.json
git commit -m "Sprint types, XP tiers (10/5/2/1) and question generators for five sprints

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 2: Settlement — one board, all five boards per week

**Files:**
- Modify: `api/_lib/timesTableSprintSettlement.js`
- Create: `scripts/testSprintSettlement.mjs`

**Interfaces:**
- Consumes: `SPRINT_TYPES`, `sprintBoardId` (Task 1), `xpForRank` (Task 1), `getPreviousSprintWeekId` (existing).
- Produces: `settleSprintBoard(db, admin, boardId): Promise<{ boardId, awarded, skipped, participants, logs }>`; `settleSprintWeek(db, admin, { now? }): Promise<{ weekId, awarded, logs }>` (same call signature `api/cron-unified.js:597` already uses — no cron change).

- [ ] **Step 1: Write the failing test**

Create `scripts/testSprintSettlement.mjs`:

```js
/**
 * Sprint settlement: each of the five boards settles independently with
 * 10/5/2/1 XP, re-runs never double-pay, ties go to whoever got there first,
 * and one board failing doesn't stop the others. Fake Firestore — no network.
 * Usage: node scripts/testSprintSettlement.mjs
 */
import assert from 'node:assert';
import { settleSprintWeek } from '../api/_lib/timesTableSprintSettlement.js';

const NOW = new Date('2026-10-05T03:00:00Z'); // Monday 2026-10-05 Sydney → previous week 2026-09-28
const WEEK = '2026-09-28';
const ADMIN_UID = 'MeohP8s0LkPWSTWgEbzc7uaWVEG2';

const makeDb = ({ failBoard } = {}) => {
  const data = { timestable_sprint_results: {}, timestable_sprint_settlement: {}, users: {}, leaderboard: {} };
  const ref = (col, id) => ({
    col, id,
    get: async () => ({ exists: id in data[col], data: () => data[col][id] }),
    set: async (v, opts) => { data[col][id] = opts?.merge ? { ...(data[col][id] || {}), ...v } : v; },
  });
  const db = {
    data,
    collection: (col) => ({
      doc: (id) => ref(col, id),
      where: (field, op, value) => ({
        orderBy: () => ({
          get: async () => {
            if (value === failBoard) throw new Error('boom');
            const docs = Object.entries(data[col])
              .filter(([, v]) => v[field] === value)
              .sort(([, a], [, b]) => a.bestTimeMs - b.bestTimeMs)
              .map(([id, v]) => ({ id, data: () => v }));
            return { docs };
          },
        }),
      }),
    }),
    runTransaction: async (fn) => fn({
      get: async (r) => r.get(),
      update: (r, v) => { data[r.col][r.id] = { ...data[r.col][r.id], ...v }; },
      set: (r, v, opts) => { data[r.col][r.id] = opts?.merge ? { ...(data[r.col][r.id] || {}), ...v } : v; },
    }),
  };
  return db;
};
const admin = { firestore: { FieldValue: { serverTimestamp: () => 'TS' } } };

const addResult = (db, boardId, userId, bestTimeMs, bestAchievedAt = '2026-09-30T00:00:00Z') => {
  db.data.timestable_sprint_results[`${boardId}_${userId}`] = { userId, weekId: boardId, bestTimeMs, bestAchievedAt, name: userId };
  db.data.users[userId] = db.data.users[userId] || { totalXP: 100 };
};

let passed = 0;
const test = async (name, fn) => { await fn(); passed += 1; console.log(`  ✓ ${name}`); };

console.log('sprint settlement');

await test('pays 10/5/2/1 per board and settles each board separately', async () => {
  const db = makeDb();
  ['a', 'b', 'c', 'd', 'e'].forEach((u, i) => addResult(db, `add:${WEEK}`, u, 20000 + i * 1000));
  addResult(db, WEEK, 'a', 30000); // times table: a alone → 1st
  addResult(db, `alg:${WEEK}`, 'b', 15000);
  addResult(db, `alg:${WEEK}`, ADMIN_UID, 1000); // teacher never ranks
  const r = await settleSprintWeek(db, admin, { now: NOW });
  assert.equal(r.weekId, WEEK);
  const xp = Object.fromEntries(Object.entries(db.data.users).map(([u, v]) => [u, v.totalXP - 100]));
  assert.deepEqual(xp, { a: 10 + 10, b: 5 + 10, c: 2, d: 1, e: 1, [ADMIN_UID]: 0 });
  assert.equal(db.data.timestable_sprint_results[`add:${WEEK}_c`].settledXp, 2);
  assert.equal(db.data.timestable_sprint_results[`add:${WEEK}_c`].settledRank, 3);
  for (const board of [WEEK, `add:${WEEK}`, `sub:${WEEK}`, `div:${WEEK}`, `alg:${WEEK}`]) {
    assert.equal(db.data.timestable_sprint_settlement[board].status, 'complete', board);
  }
});

await test('re-running never pays twice', async () => {
  const db = makeDb();
  addResult(db, `div:${WEEK}`, 'a', 9000);
  await settleSprintWeek(db, admin, { now: NOW });
  await settleSprintWeek(db, admin, { now: NOW });
  assert.equal(db.data.users.a.totalXP, 110);
});

await test('tie goes to whoever reached the time first', async () => {
  const db = makeDb();
  addResult(db, `sub:${WEEK}`, 'late', 12000, '2026-10-01T00:00:00Z');
  addResult(db, `sub:${WEEK}`, 'early', 12000, '2026-09-29T00:00:00Z');
  await settleSprintWeek(db, admin, { now: NOW });
  assert.equal(db.data.users.early.totalXP, 110);
  assert.equal(db.data.users.late.totalXP, 105);
});

await test('one board failing does not block the others', async () => {
  const db = makeDb({ failBoard: `add:${WEEK}` });
  addResult(db, `add:${WEEK}`, 'a', 9000);
  addResult(db, WEEK, 'b', 9000);
  const r = await settleSprintWeek(db, admin, { now: NOW });
  assert.equal(db.data.users.b.totalXP, 110);
  assert.equal(db.data.users.a.totalXP, 100);
  assert.ok(r.logs.some((l) => l.includes('Addition') && l.includes('boom')), r.logs.join('\n'));
});

console.log(`\n${passed} passed`);
```

- [ ] **Step 2: Run to verify it fails**

Run: `node scripts/testSprintSettlement.mjs`
Expected: FAIL — first test's XP assertion (current code settles only the bare-week board with 100/50/20/5).

- [ ] **Step 3: Rewrite the settlement module**

Replace the whole of `api/_lib/timesTableSprintSettlement.js` with:

```js
/* ==========================================================================
   Weekly sprint settlement (all Daily Challenge sprints)
   --------------------------------------------------------------------------
   Runs server-side (admin SDK) from api/cron-unified.js once a week has
   finished. The client never grants sprint XP: it only records times, so a
   tampered client can at most publish a fake time, never mint XP.

   Each sprint type has its own leaderboard ("board"): Times Table uses the
   bare week id, the others `${type}:${weekId}` (src/utils/sprintTypes.js).
   Every board is settled independently with the same XP tiers
   (src/constants/sprintXp.js); a failure in one board is logged and the
   others still pay.

   Idempotency is load-bearing — the cron is pinged hourly and the settlement
   window spans several hours, so the same board WILL be processed more than
   once. `awardedUids` on timestable_sprint_settlement/{boardId} is the
   processed set; a uid already in it is skipped, so no student is ever paid
   twice.

   Week ids come from src/utils/sprintWeek.js so the browser and this job can
   never disagree about which week a run belonged to.
   ========================================================================== */

import { getPreviousSprintWeekId } from '../../src/utils/sprintWeek.js';
import { SPRINT_TYPES, sprintBoardId } from '../../src/utils/sprintTypes.js';
import { xpForRank } from '../../src/constants/sprintXp.js';

export const RESULTS_COLLECTION = 'timestable_sprint_results';
export const SETTLEMENT_COLLECTION = 'timestable_sprint_settlement';

const ADMIN_UID = 'MeohP8s0LkPWSTWgEbzc7uaWVEG2';

/**
 * Rank a board's participants: fastest first, and where two students share
 * a time the one who reached it first is placed higher.
 */
const rankParticipants = (docs) => docs
  .map((d) => ({ id: d.id, ...d.data() }))
  .filter((r) => r.userId && r.userId !== ADMIN_UID && Number.isFinite(Number(r.bestTimeMs)))
  .sort((a, b) => (
    Number(a.bestTimeMs) - Number(b.bestTimeMs)
    || String(a.bestAchievedAt || '').localeCompare(String(b.bestAchievedAt || ''))
  ));

/** Settle one leaderboard (one sprint type, one week). */
export async function settleSprintBoard(db, admin, boardId) {
  const logs = [];
  const settlementRef = db.collection(SETTLEMENT_COLLECTION).doc(boardId);
  const settlementSnap = await settlementRef.get();
  const settlement = settlementSnap.exists ? settlementSnap.data() : {};

  if (settlement.status === 'complete') {
    logs.push(`[Sprint] ${boardId} already settled.`);
    return { boardId, awarded: 0, skipped: 0, participants: 0, logs };
  }

  const resultsSnap = await db.collection(RESULTS_COLLECTION)
    .where('weekId', '==', boardId)
    .orderBy('bestTimeMs', 'asc')
    .get();

  const ranked = rankParticipants(resultsSnap.docs);
  if (ranked.length === 0) {
    await settlementRef.set({
      weekId: boardId,
      status: 'complete',
      participantCount: 0,
      awardedUids: [],
      lastRunAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
    logs.push(`[Sprint] ${boardId}: nobody played.`);
    return { boardId, awarded: 0, skipped: 0, participants: 0, logs };
  }

  const alreadyAwarded = new Set(settlement.awardedUids || []);
  const podium = [];
  let awarded = 0;
  let skipped = 0;

  for (let i = 0; i < ranked.length; i++) {
    const entry = ranked[i];
    const rank = i + 1;
    const xp = xpForRank(rank);

    if (rank <= 3) {
      podium.push({ rank, userId: entry.userId, name: entry.name || 'Student', bestTimeMs: Number(entry.bestTimeMs), xp });
    }

    if (alreadyAwarded.has(entry.userId)) { skipped++; continue; }

    try {
      const userRef = db.collection('users').doc(entry.userId);
      const leaderboardRef = db.collection('leaderboard').doc(entry.userId);

      await db.runTransaction(async (tx) => {
        const userSnap = await tx.get(userRef);
        if (!userSnap.exists) throw new Error('user doc missing');
        const data = userSnap.data();
        const newXP = (Number(data.totalXP) || 0) + xp;

        tx.update(userRef, { totalXP: newXP, updatedAt: new Date().toISOString() });
        // Mirror doc the app's global leaderboard reads from.
        tx.set(leaderboardRef, {
          totalXP: newXP,
          lastUpdated: admin.firestore.FieldValue.serverTimestamp(),
        }, { merge: true });
      });

      // Stamp the result doc so the payout is auditable from the record itself.
      await db.collection(RESULTS_COLLECTION).doc(entry.id).set({
        settledRank: rank,
        settledXp: xp,
        settledAt: admin.firestore.FieldValue.serverTimestamp(),
      }, { merge: true });

      alreadyAwarded.add(entry.userId);
      awarded++;
    } catch (e) {
      logs.push(`[Sprint] ${boardId} ${entry.userId} award failed: ${e.message}`);
    }

    // Record progress as we go: a timeout mid-loop must not replay payouts.
    await settlementRef.set({
      weekId: boardId,
      status: 'partial',
      awardedUids: [...alreadyAwarded],
      participantCount: ranked.length,
      lastRunAt: admin.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
  }

  const complete = ranked.every((r) => alreadyAwarded.has(r.userId));
  await settlementRef.set({
    weekId: boardId,
    status: complete ? 'complete' : 'partial',
    awardedUids: [...alreadyAwarded],
    participantCount: ranked.length,
    podium,
    lastRunAt: admin.firestore.FieldValue.serverTimestamp(),
  }, { merge: true });

  logs.push(
    `[Sprint] ${boardId}: ${ranked.length} participant(s), ${awarded} awarded, ${skipped} already paid.`
    + (podium[0] ? ` Winner: ${podium[0].name} (${podium[0].bestTimeMs}ms).` : ''),
  );

  return { boardId, awarded, skipped, participants: ranked.length, logs };
}

/** Settle every sprint's board for the week that just ended. */
export async function settleSprintWeek(db, admin, { now = new Date() } = {}) {
  const weekId = getPreviousSprintWeekId(now);
  const logs = [];
  let awarded = 0;
  for (const type of SPRINT_TYPES) {
    const boardId = sprintBoardId(type.id, weekId);
    try {
      const r = await settleSprintBoard(db, admin, boardId);
      logs.push(...r.logs);
      awarded += r.awarded;
    } catch (e) {
      logs.push(`[Sprint] ${type.name} (${boardId}) settlement error: ${e.message}`);
    }
  }
  return { weekId, awarded, logs };
}
```

- [ ] **Step 4: Run tests**

Run: `npm run test:sprint`
Expected: `12 passed` then `4 passed`.
Run: `node --check api/cron-unified.js` — passes (no call-site change: `settleSprintWeek(db, admin, { now: nowUTC })` and `sprint.logs`).

- [ ] **Step 5: Lint and commit**

```bash
npx eslint api/_lib/timesTableSprintSettlement.js scripts/testSprintSettlement.mjs
git add api/_lib/timesTableSprintSettlement.js scripts/testSprintSettlement.mjs
git commit -m "Sprint settlement: settle each of the five boards, XP 10/5/2/1

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 3: Service — board ids, sprintType, multi-board payout check

**Files:**
- Modify: `src/services/timesTableSprintService.js`

**Interfaces:**
- Consumes: Task 1 modules.
- Produces (changes to existing exports):
  - Remove `SPRINT_QUESTION_COUNT`, `SPRINT_XP_TIERS`, `SPRINT_XP_PARTICIPATION`, `getFactorRangeForYear`, `generateSprintQuestions` from this file (they live in Task 1 modules now).
  - `readCachedMyBest(boardId, userId)`, `readCachedSprintMeta(boardId)`, `subscribeSprintMeta(boardId, onChange)`, `fetchSprintRank(boardId, bestTimeMs)`, `fetchMySprintResult(boardId, userId)` — unchanged bodies; the parameter is a board id.
  - `submitSprintRun({ userId, profile, timeMs, wrongCount, boardId, sprintType = 'times', currentMeta })` — writes `sprintType` on the result and the attempt; `weekId` field = `boardId`.
  - `checkPendingSprintPayouts(userId): Promise<null | { weekId, xp, items: Array<{ typeId, name, boardId, rank, xp, bestTimeMs }> }>`
  - `markSprintPayoutSeen(userId, weekId, boardIds: string[])`
  - `checkPendingSprintPayout` (singular) is removed.

- [ ] **Step 1: Edit imports and constants**

Replace the import block and constants section (lines 22–42) with:

```js
import {
  collection, doc, getDoc, getDocs, onSnapshot, query, where, orderBy, limit,
  runTransaction, serverTimestamp, getCountFromServer, addDoc, updateDoc,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { localCache } from './localCacheService';
import { trackRead, trackWrite } from './trafficTrackerService';
import { buildAvatarUrl, buildDisplayName } from '../utils/avatarUtils';
import { getPreviousSprintWeekId } from '../utils/sprintWeek';
import { SPRINT_TYPES, sprintBoardId } from '../utils/sprintTypes';

export const RESULTS_COLLECTION = 'timestable_sprint_results';
export const META_COLLECTION = 'timestable_sprint_meta';
export const ATTEMPTS_COLLECTION = 'timestable_sprint_attempts';

export const WRONG_ANSWER_PENALTY_MS = 3000;
export const TOP_N = 5;
```

Delete the whole `// ── Questions ──` section (`getFactorRangeForYear` and `generateSprintQuestions`).

In the file header comment, change "Weekly Times Table Sprint: 20 unique multiplication facts" to "Weekly Daily Challenge sprints (one leaderboard per sprint type per week — see src/utils/sprintTypes.js): 20 questions". Rename the `weekId` parameter to `boardId` in `readCachedMyBest`, `writeCachedMyBest`, `readCachedSprintMeta`, `writeCachedSprintMeta`, `subscribeSprintMeta`, `refreshTop5`, `fetchSprintRank`, `fetchMySprintResult` (bodies keep using it the same way; the stored `weekId` field holds the board id).

- [ ] **Step 2: submitSprintRun gets boardId + sprintType**

Change its signature and the two writes:

```js
export const submitSprintRun = async ({
  userId, profile, timeMs, wrongCount = 0, boardId, sprintType = 'times', currentMeta = null,
}) => {
  if (!userId) throw new Error('submitSprintRun requires a userId');
  if (!boardId) throw new Error('submitSprintRun requires a boardId');

  const resultRef = doc(db, RESULTS_COLLECTION, `${boardId}_${userId}`);
```

Inside the transaction's `tx.set(resultRef, { ... })` replace `weekId,` with `weekId: boardId,` and add `sprintType,` next to it. The attempt log becomes:

```js
  addDoc(collection(db, ATTEMPTS_COLLECTION), {
    userId, weekId: boardId, sprintType, timeMs, wrongCount, createdAt: serverTimestamp(),
  }).then(() => trackWrite(1, 'ttsprint_attempt')).catch(() => {});
```

`writeCachedMyBest(boardId, ...)` and `refreshTop5(boardId)` use `boardId`. Remove the `getSprintWeekId` default (callers always pass `boardId`).

- [ ] **Step 3: Multi-board payout check**

Replace `checkPendingSprintPayout` and `markSprintPayoutSeen` with:

```js
/**
 * After a weekly settlement: point-read last week's result doc on each of the
 * five boards (5 reads, once — skipped entirely once this week is marked seen
 * on this device) and return the settled, not-yet-acknowledged payouts.
 */
export const checkPendingSprintPayouts = async (userId) => {
  if (!userId) return null;
  const weekId = getPreviousSprintWeekId();
  if (localCache.get(payoutSeenKeyFor(userId)) === weekId) return null;

  const results = await Promise.all(SPRINT_TYPES.map(async (type) => {
    const boardId = sprintBoardId(type.id, weekId);
    return { type, boardId, result: await fetchMySprintResult(boardId, userId) };
  }));

  const settled = results.filter(({ result }) => result && Number.isFinite(Number(result.settledXp)));
  const items = settled
    .filter(({ result }) => !result.payoutSeen)
    .map(({ type, boardId, result }) => ({
      typeId: type.id,
      name: type.name,
      boardId,
      rank: Number.isFinite(Number(result.settledRank)) ? Number(result.settledRank) : null,
      xp: Number(result.settledXp),
      bestTimeMs: Number(result.bestTimeMs) || null,
    }));

  if (items.length === 0) {
    // Everything settled was already acknowledged (maybe on another device):
    // sync the local fast path so this device stops re-reading.
    if (settled.length > 0) localCache.set(payoutSeenKeyFor(userId), weekId);
    return null;
  }
  return { weekId, xp: items.reduce((sum, i) => sum + i.xp, 0), items };
};

export const markSprintPayoutSeen = (userId, weekId, boardIds = []) => {
  if (!userId || !weekId) return;
  localCache.set(payoutSeenKeyFor(userId), weekId);
  // Best-effort — the server-side flag is what makes this stick across
  // devices/storage resets. Rules allow a student to update their own row.
  boardIds.forEach((boardId) => {
    updateDoc(doc(db, RESULTS_COLLECTION, `${boardId}_${userId}`), { payoutSeen: true }).catch((err) => {
      console.warn('[ttsprint] payoutSeen sync failed:', err?.code || err);
    });
  });
};
```

Update the comment block above it ("Weekly payout celebration") to say "per board" where it says the result doc.

- [ ] **Step 4: Lint (callers break until Tasks 4–5; that's expected)**

Run: `npx eslint src/services/timesTableSprintService.js` — no output. (Do not build yet; `TimesTableSprint.jsx`, `SprintStartView.jsx`, `SprintLeaderboard.jsx`, `App.jsx` still import removed names — Tasks 4 and 5 fix them, and the build is checked at the end of Task 5.)

- [ ] **Step 5: Commit**

```bash
git add src/services/timesTableSprintService.js
git commit -m "Sprint service: board ids, sprintType on writes, five-board payout check

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 4: Hub, runner, and per-sprint screens

**Files:**
- Create: `src/components/sprint/SprintRunner.jsx`, `src/components/sprint/SprintHub.jsx`
- Modify: `src/components/TimesTableSprint.jsx` (full rewrite), `src/components/sprint/SprintStartView.jsx`, `SprintQuizView.jsx`, `SprintLeaderboard.jsx`, `src/components/sprint/sprint.css`

**Interfaces:**
- Consumes: Tasks 1 and 3.
- Produces: `<SprintHub uid onPick(typeId) onBack />`, `<SprintRunner typeId onBack setIsLocked onQuizActiveChange />`; `TimesTableSprint` keeps its props (`onBack, setIsLocked, onQuizActiveChange`), so `App.jsx`'s `case 'TimesTableSprint'` needs no change.

- [ ] **Step 1: SprintRunner — move the existing flow**

Create `src/components/sprint/SprintRunner.jsx` by copying the current body of `src/components/TimesTableSprint.jsx` (the whole component) and applying exactly these changes:

1. Component name/props: `const SprintRunner = ({ typeId, onBack, setIsLocked, onQuizActiveChange }) => {` and `export default SprintRunner;`.
2. Imports become:
   ```js
   import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
   import { motion, AnimatePresence } from 'framer-motion';
   import { ArrowLeft } from 'lucide-react';
   import { useAuth } from '../../context/AuthContext';
   import { useProfile } from '../../context/ProfileContext';
   import SprintStartView from './SprintStartView';
   import SprintQuizView from './SprintQuizView';
   import SprintResultView from './SprintResultView';
   import {
     subscribeSprintMeta, readCachedSprintMeta, fetchMySprintResult, fetchSprintRank, submitSprintRun,
   } from '../../services/timesTableSprintService';
   import { generateSprintQuestions } from '../../utils/sprintQuestions';
   import { sprintBoardId } from '../../utils/sprintTypes';
   import { getSprintWeekId, getMsUntilWeeklyReset } from '../../utils/sprintWeek';
   import './sprint.css';
   ```
3. Replace `const weekId = useMemo(() => getSprintWeekId(), []);` with
   `const boardId = useMemo(() => sprintBoardId(typeId, getSprintWeekId()), [typeId]);`
   and replace every remaining `weekId` identifier in the component with `boardId`.
4. Delete the `markSprintIntroSeen` effect (the hub host does it).
5. `handleStart`: `setQuestions(generateSprintQuestions(typeId, profile?.year));` and add `typeId` to its dependency array.
6. `submitSprintRun({ ..., boardId, sprintType: typeId, currentMeta: metaRef.current })` (replacing `weekId,`).
7. Pass `typeId={typeId}` to `<SprintStartView ... />`.
8. Update the doc comment to "One Daily Challenge sprint (typeId). Step machine: start → quiz → result. The tab is locked during a run…".

- [ ] **Step 2: SprintHub**

Create `src/components/sprint/SprintHub.jsx`:

```jsx
import React, { useEffect, useMemo, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { SPRINT_TYPES, sprintBoardId } from '../../utils/sprintTypes';
import { readCachedMyBest } from '../../services/timesTableSprintService';
import { formatSprintTime, formatResetCountdown, getSprintWeekId, getMsUntilWeeklyReset } from '../../utils/sprintWeek';
import './sprint.css';

/**
 * Daily Challenge hub: one square card per sprint. Zero Firestore reads —
 * personal bests come from the device mirror written after each run; a
 * sprint's leaderboard listener only attaches once its card is opened.
 */
const SprintHub = ({ uid, onPick, onBack }) => {
  const weekId = useMemo(() => getSprintWeekId(), []);
  const [msLeft, setMsLeft] = useState(() => getMsUntilWeeklyReset());

  useEffect(() => {
    const id = setInterval(() => setMsLeft(getMsUntilWeeklyReset()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="tts-hub">
      <button type="button" className="tts-hub__back" onClick={onBack}>
        <ArrowLeft size={18} /> Back
      </button>
      <div className="tts-hub__head">
        <h2>Daily Challenge</h2>
        <p>Five weekly sprints · resets in {formatResetCountdown(msLeft)}</p>
      </div>
      <div className="tts-hub__grid">
        {SPRINT_TYPES.map((type) => {
          const best = readCachedMyBest(sprintBoardId(type.id, weekId), uid);
          return (
            <button
              key={type.id}
              type="button"
              className="tts-hub-card"
              style={{ '--hub-accent': type.accent }}
              onClick={() => onPick(type.id)}
            >
              <span className="tts-hub-card__glyph" aria-hidden="true">{type.glyph}</span>
              <span className="tts-hub-card__name">{type.name}</span>
              <span className="tts-hub-card__best">
                {best ? formatSprintTime(Number(best.bestTimeMs)) : 'Not played yet'}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SprintHub;
```

Append to `src/components/sprint/sprint.css`:

```css
/* ── Daily Challenge hub ─────────────────────────────────────────────── */
.tts-hub { max-width: 980px; margin: 0 auto; width: 100%; }
.tts-hub__back {
  display: flex; align-items: center; gap: 6px; background: none; border: none;
  color: #64748b; font-weight: 700; cursor: pointer; padding: 0 0 14px; font-family: inherit;
}
.tts-hub__head h2 { margin: 0; font-size: 1.9rem; font-weight: 900; color: #1e1b4b; }
.tts-hub__head p { margin: 4px 0 18px; color: #6d6a85; font-weight: 600; }
.tts-hub__grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 14px; }
@media (max-width: 900px) { .tts-hub__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 560px) { .tts-hub__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
.tts-hub-card {
  aspect-ratio: 1 / 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 6px; padding: 12px; border-radius: 24px; border: 2px solid color-mix(in srgb, var(--hub-accent) 25%, #fff);
  background: linear-gradient(160deg, #fff, color-mix(in srgb, var(--hub-accent) 10%, #fff));
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.06); cursor: pointer; font-family: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.tts-hub-card:hover { transform: translateY(-3px); box-shadow: 0 16px 34px rgba(15, 23, 42, 0.1); }
.tts-hub-card__glyph { font-size: 2.6rem; font-weight: 900; line-height: 1; color: var(--hub-accent); }
.tts-hub-card__name { font-weight: 900; color: #1e1b4b; font-size: 1rem; text-align: center; }
.tts-hub-card__best { font-family: var(--spr-mono); font-size: 0.78rem; font-weight: 700; color: #64748b; }
```

- [ ] **Step 3: TimesTableSprint becomes the hub host**

Replace the entire contents of `src/components/TimesTableSprint.jsx` with:

```jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import SprintHub from './sprint/SprintHub';
import SprintRunner from './sprint/SprintRunner';
import { markSprintIntroSeen } from '../services/timesTableSprintService';
import './sprint/sprint.css';

/**
 * Daily Challenge tab: the five-sprint hub, or one sprint's run once a card
 * is picked. `key={typeId}` gives every sprint a fresh runner (its own board,
 * listener and state).
 */
const TimesTableSprint = ({ onBack, setIsLocked, onQuizActiveChange }) => {
  const { user, isAdmin } = useAuth();
  const [typeId, setTypeId] = useState(null);

  // Clears the dashboard card's "New" badge the first time the tab opens.
  useEffect(() => { if (!isAdmin) markSprintIntroSeen(user?.uid); }, [user?.uid, isAdmin]);

  if (!typeId) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="app-page">
        <SprintHub uid={user?.uid} onPick={setTypeId} onBack={onBack} />
      </motion.div>
    );
  }
  return (
    <SprintRunner
      key={typeId}
      typeId={typeId}
      onBack={() => setTypeId(null)}
      setIsLocked={setIsLocked}
      onQuizActiveChange={onQuizActiveChange}
    />
  );
};

export default TimesTableSprint;
```

- [ ] **Step 4: Start, quiz and leaderboard views**

`SprintStartView.jsx`:
- Imports: replace the `timesTableSprintService` import with
  ```js
  import { WRONG_ANSWER_PENALTY_MS } from '../../services/timesTableSprintService';
  import { SPRINT_QUESTION_COUNT, describeSprint } from '../../utils/sprintQuestions';
  import { SPRINT_XP_TIERS, SPRINT_XP_PARTICIPATION } from '../../constants/sprintXp';
  import { getSprintType } from '../../utils/sprintTypes';
  ```
- Props: add `typeId` first: `const SprintStartView = ({ typeId, year, myBestTimeMs, ... }) => {`
- Replace `const { min, max } = getFactorRangeForYear(year);` with `const type = getSprintType(typeId);`
- Title: `<h3 className="tts-hero-title">{type?.name} Sprint</h3>`
- Coach copy becomes:
  ```jsx
          Here's the deal — {SPRINT_QUESTION_COUNT} questions, {describeSprint(typeId, year)}.
          Get one wrong and it just adds {WRONG_ANSWER_PENALTY_MS / 1000} seconds and moves on, no big drama.
          Run it as many times as you like — only your fastest time counts.
          When the week resets, the top three pocket {SPRINT_XP_TIERS.join(' / ')} XP, and everyone who had a go still gets {SPRINT_XP_PARTICIPATION}.
  ```

`SprintQuizView.jsx` — replace

```jsx
        <p className="tts-question__text">
          {question.left} × {question.right}
        </p>
```

with

```jsx
        <p className="tts-question__text">{question.prompt}</p>
        {question.subPrompt && (
          <p style={{ margin: '-6px 0 8px', fontWeight: 800, color: '#64748b', fontSize: '1rem' }}>{question.subPrompt}</p>
        )}
```

and change the comment on the 3-digit cap to `// every sprint's answers are 1–999`.

`SprintLeaderboard.jsx` — change the import to
`import { SPRINT_XP_TIERS, SPRINT_XP_PARTICIPATION } from '../../constants/sprintXp';`

- [ ] **Step 5: Lint and commit (build verified in Task 5)**

Run: `npx eslint src/components/sprint/SprintRunner.jsx src/components/sprint/SprintHub.jsx src/components/TimesTableSprint.jsx src/components/sprint/SprintStartView.jsx src/components/sprint/SprintQuizView.jsx src/components/sprint/SprintLeaderboard.jsx` — no new problems vs HEAD.

```bash
git add src/components/sprint/SprintRunner.jsx src/components/sprint/SprintHub.jsx src/components/TimesTableSprint.jsx src/components/sprint/SprintStartView.jsx src/components/sprint/SprintQuizView.jsx src/components/sprint/SprintLeaderboard.jsx src/components/sprint/sprint.css
git commit -m "Daily Challenge hub with five sprints; runner per sprint

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 5: Dashboard card and combined payout notice

**Files:**
- Modify: `src/components/sprint/SprintDashboardCard.jsx`, `src/components/SprintPayoutModal.jsx`, `src/App.jsx` (lines ~132, ~409–433), `src/components/Settings.jsx` (~741–760)

**Interfaces:**
- Consumes: `checkPendingSprintPayouts`, `markSprintPayoutSeen(userId, weekId, boardIds)`, `readCachedMyBest` (Task 3); `SPRINT_TYPES`, `sprintBoardId` (Task 1).
- Produces: `SprintPayoutModal` payload `{ weekId, xp, items: [{ typeId, name, boardId, rank, xp, bestTimeMs }] }`.

- [ ] **Step 1: Dashboard card — five bests, no listener**

Replace the body of `SprintDashboardCard` (keep `liftHover`, the outer wrapper, NEW badge, instrument styling and height) so it no longer subscribes:

```jsx
import React, { useEffect, useState } from 'react';
import { formatSprintTime, formatResetCountdown, getSprintWeekId, getMsUntilWeeklyReset } from '../../utils/sprintWeek';
import { readCachedMyBest, hasSeenSprintIntro } from '../../services/timesTableSprintService';
import { SPRINT_TYPES, sprintBoardId } from '../../utils/sprintTypes';
import './sprint.css';
```

Component body:

```jsx
/**
 * Dashboard entry point for the Daily Challenge sprints: this week's personal
 * best on each of the five, and the time left in the week. Zero Firestore
 * reads — bests come from the device mirror written after each run, the
 * countdown is local arithmetic (the old live top-5 listener is gone).
 */
const SprintDashboardCard = ({ uid, onClick }) => {
  const weekId = getSprintWeekId();
  const [msLeft, setMsLeft] = useState(() => getMsUntilWeeklyReset());
  const [bests] = useState(() => SPRINT_TYPES.map((t) => ({ type: t, best: readCachedMyBest(sprintBoardId(t.id, weekId), uid) })));
  const [showNewBadge] = useState(() => !hasSeenSprintIntro(uid));
  const played = bests.filter((b) => b.best).length;

  useEffect(() => {
    const id = setInterval(() => setMsLeft(getMsUntilWeeklyReset()), 1000);
    return () => clearInterval(id);
  }, []);
```

Inside the instrument panel, replace the eyebrow label text with `Daily Challenge`, replace the Crown/leader row with:

```jsx
        <div style={{ position: 'relative', display: 'flex', gap: '6px', marginTop: '4px' }}>
          {bests.map(({ type, best }) => (
            <div key={type.id} title={type.name} style={{ flex: 1, minWidth: 0, textAlign: 'center', borderRadius: '10px', padding: '4px 2px', background: 'rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 900, fontSize: '1rem', color: type.accent, lineHeight: 1.1 }}>{type.glyph}</div>
              <div className="tts-led" style={{ fontSize: '0.62rem', color: best ? '#f5f3ff' : 'rgba(245,243,255,0.4)' }}>
                {best ? formatSprintTime(Number(best.bestTimeMs)) : '—'}
              </div>
            </div>
          ))}
        </div>
```

and the footer row with:

```jsx
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '8px', fontSize: '0.78rem', fontWeight: 700, color: 'rgba(245,243,255,0.8)', flexWrap: 'wrap' }}>
          <span>{played}/5 played this week</span>
          <span>Resets in {formatResetCountdown(msLeft)}</span>
        </div>
```

Remove the now-unused `Crown` import and the `subscribeSprintMeta`/`readCachedSprintMeta` imports.

- [ ] **Step 2: Payout modal — one card for all sprints**

In `src/components/SprintPayoutModal.jsx`:
- Update the header comment: "Congrats card for the weekly Daily Challenge sprint payout (one card for every sprint that paid)."
- Replace the three payload reads and `copy` with:
  ```js
  const xp = Number(payload?.xp) || 0;
  const items = Array.isArray(payload?.items) ? payload.items : [];
  ```
  and `const copy = useMemo(() => buildCopy(items, firstName, xp), [items, firstName, xp]);`
- Replace the `snc-modal__sub` paragraph content with `{copy.sub}`.
- Replace `buildCopy` with:
  ```js
  const ordinal = (n) => (n === 1 ? '1st' : n === 2 ? '2nd' : n === 3 ? '3rd' : `${n}th`);

  function buildCopy(items, firstName, xp) {
    const n = (firstName || '').trim();
    const hey = n ? `Hey ${n}` : 'Hey';
    if (items.length === 1) {
      const [it] = items;
      const emoji = it.rank === 1 ? '🥇' : it.rank === 2 ? '🥈' : it.rank === 3 ? '🥉' : '⚡️';
      const place = it.rank && it.rank <= 3 ? `finished ${ordinal(it.rank)} in` : 'took part in';
      return {
        emoji,
        msg: `${hey}! You ${place} last week's ${it.name} Sprint!`,
        sub: it.bestTimeMs ? `Your best time: ${formatSprintTime(it.bestTimeMs)}` : `+${xp} XP`,
      };
    }
    const best = Math.min(...items.map((it) => it.rank || 99));
    return {
      emoji: best === 1 ? '🥇' : best <= 3 ? '🏅' : '⚡️',
      msg: `${hey}! You earned XP in ${items.length} sprints last week!`,
      sub: items.map((it) => `${it.name} ${it.rank ? ordinal(it.rank) : ''} +${it.xp}`.replace('  ', ' ')).join(' · '),
    };
  }
  ```

- [ ] **Step 3: App wiring**

In `src/App.jsx`:
- Import: `import { checkPendingSprintPayouts, markSprintPayoutSeen, SPRINT_PAYOUT_PREVIEW_EVENT } from './services/timesTableSprintService';`
- The payout effect calls `checkPendingSprintPayouts(user.uid)`.
- The preview fallback payload becomes:
  ```js
  { weekId: 'preview', xp: 12, items: [
    { typeId: 'add', name: 'Addition', boardId: 'preview', rank: 1, xp: 10, bestTimeMs: 20499 },
    { typeId: 'times', name: 'Times Table', boardId: 'preview', rank: 3, xp: 2, bestTimeMs: 24310 },
  ] }
  ```
  and the preview guard checks `Array.isArray(e?.detail?.items)` instead of `Number(e.detail.xp) > 0`.
- `dismissSprintPayout` calls `markSprintPayoutSeen(user.uid, sprintPayout.weekId, (sprintPayout.items || []).map((i) => i.boardId))`.
- Update the "Times Table Sprint weekly payout" comments to "Daily Challenge sprint weekly payout".

In `src/components/Settings.jsx`: the preview button dispatches the same two-item payload as above (replace the `{ weekId: 'preview', xp: 100, rank: 1, bestTimeMs: 20499 }` detail) and its label becomes "Preview Daily Challenge payout modal".

- [ ] **Step 4: Build and full test run**

Run: `grep -rn "checkPendingSprintPayout\b\|generateSprintQuestions\|getFactorRangeForYear\|SPRINT_XP_TIERS\|SPRINT_QUESTION_COUNT" src | grep -v "src/utils/sprintQuestions.js\|src/constants/sprintXp.js"` — every hit imports from the new modules (none from `timesTableSprintService`).
Run: `npm run test:sprint && npm run test:homework` — all pass.
Run: `npx vite build --outDir /tmp/vb-sprint --emptyOutDir && rm -rf /tmp/vb-sprint` — `✓ built`.
Lint each modified file against HEAD — no new problems.

- [ ] **Step 5: Commit**

```bash
git add src/components/sprint/SprintDashboardCard.jsx src/components/SprintPayoutModal.jsx src/App.jsx src/components/Settings.jsx
git commit -m "Daily Challenge dashboard card (five bests, no listener) and combined payout notice

Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
```

---

### Task 6: Browser verification and release

- [ ] **Step 1: Hub and runs (local dev server, teacher account if available, else student)**

1. Daily Challenge tab → hub shows five square cards (Addition, Subtraction, Times Table, Division, Algebra), five across at ≥900px, three at tablet width (`resize_window` preset tablet), two at phone width.
2. `read_network_requests` filtered to `firestore` while on the hub: no new Firestore requests attributable to the hub.
3. Open each card: title "<Name> Sprint", coach text matches the sprint, Start → 20 questions render (Algebra shows `x = ?`), keypad answers accepted, result screen, Back → hub.
4. Dashboard card shows "Daily Challenge", five glyphs with bests/—, "N/5 played", reset countdown; no meta listener in the network log.
5. Settings → "Preview Daily Challenge payout modal" (teacher) shows the two-sprint card with +12 XP.
6. No console errors.

- [ ] **Step 2: Ask the user before pushing; then push**

`git fetch origin main && git log HEAD..origin/main --oneline` (merge if needed), `git push origin main`. No rules or index deploy needed.

---

## Self-review notes

- Spec coverage: hub (Task 4), question rules (Task 1), board ids/storage (Tasks 1, 3), settlement + XP (Tasks 1, 2), payout notice (Tasks 3, 5), dashboard card (Task 5), failure isolation (Task 2), tests (Tasks 1, 2, 6), deployment (Task 6).
- `submitSprintRun` now requires `boardId`; the only caller is `SprintRunner` (Task 4).
- Existing Times Table caches/results stay valid because `sprintBoardId('times', w) === w`.
