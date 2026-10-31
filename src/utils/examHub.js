/**
 * OC / Selective / Scholarship(ACER) pages: mock-exam formats and the weak-spot summary.
 *
 * A mock is a ScholarshipTest run with the real exam's length and time limit, kept in its own history
 * (`mock:<examId>` in the test storage key) so it never mixes with the 10-question topic tests. The weak-spot
 * summary reads BOTH histories: every answer the student has given in these exams counts.
 */
import { CURRICULUM_DATA } from '../constants/curriculumData.js';
import { enabledScholarshipExams } from './scholarshipExams.js';
import { loadTestState, gradeQuestionMarks } from './scholarshipTest.js';

export const OC_EXAM_ID = 'sch-oc';
export const SELECTIVE_EXAM_ID = 'sch-selective';
export const ACER_EXAM_ID = 'sch-acer';
export const HUB_EXAM_IDS = [OC_EXAM_ID, SELECTIVE_EXAM_ID, ACER_EXAM_ID];

/**
 * One sidebar page per exam: its tab key (App routes on it), the name students see, and a line under the title.
 * The Scholarship page is the ACER exam (the only exam in the Scholarship list besides OC and Selective).
 */
export const HUB_PAGES = {
  [OC_EXAM_ID]: { tab: 'OcPrep', label: 'OC', blurb: 'Opportunity Class placement test practice.' },
  [SELECTIVE_EXAM_ID]: { tab: 'SelectivePrep', label: 'Selective', blurb: 'Selective High School placement test practice.' },
  [ACER_EXAM_ID]: { tab: 'Scholarship', label: 'Scholarship', blurb: 'ACER scholarship test practice.' },
};
export const examIdForTab = (tab) => HUB_EXAM_IDS.find((id) => HUB_PAGES[id].tab === tab) || null;

/**
 * Real test formats: marks (one per question, one per part of a passage) and minutes. Writing is not
 * auto-gradable and has no questions in the bank, so it is not offered as a mock. ACER has no entry on purpose:
 * its sections have no verified format yet, so its page offers topic practice only, not a made-up mock.
 * Check against the current NSW Department of Education test information before changing a student-facing number.
 */
export const MOCK_FORMATS = {
  'sch-oc-english': { marks: 50, minutes: 30, name: 'Reading' },
  'sch-oc-maths': { marks: 35, minutes: 40, name: 'Mathematical Reasoning' },
  'sch-oc-thinking': { marks: 30, minutes: 30, name: 'Thinking Skills' },
  'sch-selective-reading': { marks: 30, minutes: 25, name: 'Reading' },
  'sch-selective-maths': { marks: 35, minutes: 40, name: 'Mathematical Reasoning' },
  'sch-selective-thinking': { marks: 40, minutes: 40, name: 'Thinking Skills' },
};

/** Weak-spot rules: a group needs this many marks answered before it is judged, and is "weak" below WEAK_BELOW. */
export const MIN_MARKS_TO_JUDGE = 6;
export const WEAK_BELOW = 0.6;
/** Only each topic's most recent attempts count, so a weak spot that has been fixed stops showing. */
export const RECENT_ATTEMPTS = 8;

export const mockStorageId = (examId) => `mock:${examId}`;

/** The exams with their own page that this student has switched on (Scholarship on + the exam ticked). */
export const hubExamsFor = (profile) => {
  if (profile?.scholarshipEnabled !== true) return [];
  const all = (CURRICULUM_DATA.Scholarship || []).map((e) => e.id);
  const chosen = enabledScholarshipExams(all, profile);
  return HUB_EXAM_IDS.filter((id) => all.includes(id) && chosen.includes(id));
};


/** How many questions make a mock: the section's average marks per question decides, so passages do not inflate it. */
export const mockSizeFor = (questions, targetMarks) => {
  const units = questions.length;
  if (!units) return 0;
  const marks = questions.reduce((n, q) => n + (q.subQuestions?.length || 1), 0);
  return Math.max(1, Math.min(units, Math.round((targetMarks * units) / Math.max(1, marks))));
};

const bump = (map, key, marks, total) => {
  const e = map[key] || (map[key] = { marks: 0, total: 0 });
  e.marks += marks;
  e.total += total;
};

/**
 * Marks per group over the most recent attempts of a topic's histories.
 * `histories`: array of loadTestState results; `byId`: Map(questionId → question).
 * → { byCategory, byDifficulty, marks, total }; groups are only those the questions actually carry.
 */
export const summariseAttempts = (histories, byId) => {
  const byCategory = {};
  const byDifficulty = {};
  let marks = 0; let total = 0;
  histories.forEach((st) => {
    (st?.attempts || []).slice(-RECENT_ATTEMPTS).forEach((a) => {
      (a.questionIds || []).forEach((id) => {
        const q = byId.get(String(id));
        if (!q) return;
        const r = gradeQuestionMarks(q, a.answers?.[String(id)]);
        marks += r.marks; total += r.total;
        if (q.category) bump(byCategory, String(q.category), r.marks, r.total);
        if (q.difficulty) bump(byDifficulty, String(q.difficulty), r.marks, r.total);
      });
    });
  });
  return { byCategory, byDifficulty, marks, total };
};

/** Groups sorted weakest first, each flagged `weak` / `judged` by the rules above. */
export const rankGroups = (groups) => Object.entries(groups)
  .map(([name, g]) => ({
    name,
    marks: g.marks,
    total: g.total,
    pct: g.total ? g.marks / g.total : 0,
    judged: g.total >= MIN_MARKS_TO_JUDGE,
    weak: g.total >= MIN_MARKS_TO_JUDGE && g.marks / g.total < WEAK_BELOW,
  }))
  .sort((a, b) => (Number(b.judged) - Number(a.judged)) || (a.pct - b.pct));

/** Mock results for one section (newest last): { count, best, last } as fractions. */
export const mockSummary = (uid, examId, topicId) => {
  const attempts = (loadTestState(uid, mockStorageId(examId), topicId).attempts || []).filter((a) => a.total > 0);
  if (!attempts.length) return { count: 0, best: null, last: null, inProgress: !!loadTestState(uid, mockStorageId(examId), topicId).current };
  const pcts = attempts.map((a) => a.marks / a.total);
  return {
    count: attempts.length,
    best: Math.max(...pcts),
    last: pcts[pcts.length - 1],
    inProgress: !!loadTestState(uid, mockStorageId(examId), topicId).current,
  };
};

/**
 * The one thing to do next, shown at the top of the page.
 * `sections`: [{ id, name, mockable, empty, mockCount }] in page order; `weak`: rankGroups rows with a `section` id,
 * weakest first (already filtered to judged ones). Order of preference: a first mock in any section that has
 * one → the weakest judged question type → another mock → plain practice.
 */
export const pickNextStep = (sections, weak = []) => {
  const open = sections.filter((s) => !s.empty);
  if (!open.length) return null;
  const firstMock = open.find((s) => s.mockable && s.mockCount === 0);
  if (firstMock) return { kind: 'mock', sectionId: firstMock.id, text: `Take your first ${firstMock.name} mock exam` };
  const w = weak.find((g) => g.weak && open.some((s) => s.id === g.section));
  if (w) return { kind: 'practise', sectionId: w.section, text: `Practise ${w.name} — you scored ${Math.round(w.pct * 100)}%` };
  const again = open.filter((s) => s.mockable).sort((a, b) => a.mockCount - b.mockCount)[0];
  if (again) return { kind: 'mock', sectionId: again.id, text: `Try another ${again.name} mock exam` };
  return { kind: 'practise', sectionId: open[0].id, text: `Practise ${open[0].name}` };
};

// ── Mock papers that look like the real paper ─────────────────────────────────────────────────────────────────
//
// A mock used to be "N random unseen questions". The real papers are not random: the question types come in fixed
// proportions, difficulty rises through the paper, and the Thinking Skills paper spreads its marks over many
// different kinds of question. So a mock is now built like this:
//   1. Split the section's questions into strata (their question type, or the quarter of the paper they sit in).
//   2. Give each stratum its share of the marks, taken from how the real papers in the bank are made up.
//   3. Fill each stratum with questions the student has not done (reusing done ones only when it must).
//   4. Put the questions in paper order (the position they have in their own paper), so it ramps up like the real one.

/** How each section's mock is built. `weight`: 'marks' = share of the bank's marks · 'paper' = average per real paper · 'equal'. */
export const MOCK_BLUEPRINT = {
  // Comprehension passages carry 5 marks each, so by marks they make up over half of the Reading paper.
  'sch-oc-english': { by: 'category', weight: 'marks', order: 'position' },
  'sch-oc-maths': { by: 'category', weight: 'marks', order: 'position' },
  // The official practice papers use 15–21 different question types out of 30 and never more than 6 of one.
  'sch-oc-thinking': { by: 'category', weight: 'paper', cap: 6, order: 'position' },
  // Selective Maths papers get harder with the question number: equal marks from each quarter of the paper.
  'sch-selective-maths': { by: 'band', bands: 4, weight: 'equal', order: 'position' },
  'sch-selective-reading': { by: 'category', weight: 'marks', order: 'position' },
  'sch-selective-thinking': { by: 'category', weight: 'paper', cap: 6, order: 'position' },
};

const marksOf = (q) => (q?.subQuestions?.length || 1);
const numbersOf = (n) => String(n ?? '').match(/\d+/g)?.map(Number) || [];
const paperKey = (q) => `${q.source || ''}|${q.test || ''}`;

const shuffled = (arr, rng) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i -= 1) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
};

/** Where a question sits in its own paper, 0 (first) … 1 (last). Unknown → 0.5. */
const positionsOf = (questions) => {
  const last = new Map();
  questions.forEach((q) => {
    const ns = numbersOf(q.number);
    if (ns.length) last.set(paperKey(q), Math.max(last.get(paperKey(q)) || 0, ...ns));
  });
  return new Map(questions.map((q) => {
    const ns = numbersOf(q.number);
    const max = last.get(paperKey(q));
    return [String(q.id), ns.length && max > 1 ? (ns[0] - 1) / (max - 1) : 0.5];
  }));
};

/** Split `n` marks over strata in proportion to `weights`, whole numbers; leftovers go to strata at random by their fraction. */
const apportion = (n, keys, weights, rng) => {
  const total = keys.reduce((s, k) => s + weights[k], 0);
  const out = {}; const rest = [];
  keys.forEach((k) => {
    const raw = total > 0 ? (n * weights[k]) / total : 0;
    out[k] = Math.floor(raw); rest.push([k, raw - out[k]]);
  });
  let left = n - keys.reduce((s, k) => s + out[k], 0);
  while (left > 0 && rest.length) {
    const pool = rest.reduce((s, e) => s + e[1], 0);
    let idx = 0;
    if (pool > 1e-9) { let r = rng() * pool; idx = rest.findIndex((e) => (r -= e[1]) < 0); if (idx < 0) idx = rest.length - 1; }
    out[rest[idx][0]] += 1; rest.splice(idx, 1); left -= 1;
  }
  return out;
};

/**
 * Build one mock paper.
 * `questions`: the whole section (legacy shape: category, number, test, source, difficulty, subQuestions).
 * `done`: ids already used in earlier mocks. `targetMarks`: marks the real paper has.
 * → { questionIds (paper order), marks, reused (any done question had to come back), strata: { name: marks } }
 */
export const pickMockPaper = ({ questions, done = [], targetMarks, blueprint = {}, rng = Math.random }) => {
  const by = blueprint.by || 'category';
  const doneSet = new Set(done.map(String));
  const pos = positionsOf(questions);

  const bands = blueprint.bands || 4;
  const stratumOf = (q) => (by === 'band'
    ? `band${Math.min(bands - 1, Math.floor((pos.get(String(q.id)) ?? 0.5) * bands))}`
    : String(q.category || 'general'));
  const groups = new Map();
  questions.forEach((q) => { const k = stratumOf(q); (groups.get(k) || groups.set(k, []).get(k)).push(q); });
  const keys = [...groups.keys()];
  const capacity = Object.fromEntries(keys.map((k) => [k, groups.get(k).reduce((s, q) => s + marksOf(q), 0)]));

  // Weights per stratum.
  let weights;
  if (blueprint.weight === 'equal') weights = Object.fromEntries(keys.map((k) => [k, 1]));
  else if (blueprint.weight === 'paper') {
    // Average marks per stratum over the bank's FULL papers (those that are at least 80% of a real paper).
    const papers = new Map();
    questions.forEach((q) => { const p = papers.get(paperKey(q)) || papers.set(paperKey(q), { total: 0, by: {} }).get(paperKey(q)); p.total += marksOf(q); p.by[stratumOf(q)] = (p.by[stratumOf(q)] || 0) + marksOf(q); });
    const full = [...papers.values()].filter((p) => p.total >= targetMarks * 0.8);
    weights = full.length
      ? Object.fromEntries(keys.map((k) => [k, full.reduce((s, p) => s + (p.by[k] || 0), 0) / full.length]))
      : Object.fromEntries(keys.map((k) => [k, capacity[k]]));
    keys.forEach((k) => { if (!(weights[k] > 0)) weights[k] = 0; });
  } else weights = Object.fromEntries(keys.map((k) => [k, capacity[k]]));
  // A stray type that is under 3% of the section (one 'codes' question among Maths) is not part of the real paper's mix.
  const wTotal = keys.reduce((n, k) => n + weights[k], 0);
  if (by === 'category' && blueprint.weight !== 'paper') keys.forEach((k) => { if (weights[k] < wTotal * 0.03) weights[k] = 0; });

  // Marks per stratum; a stratum cannot take more than its cap or than the bank holds — the excess goes to the others.
  const cap = blueprint.cap || Infinity;
  let quota = apportion(targetMarks, keys.filter((k) => weights[k] > 0), weights, rng);
  for (let round = 0; round < 6; round += 1) {
    let excess = 0;
    keys.forEach((k) => {
      const room = Math.min(cap, capacity[k]);
      if ((quota[k] || 0) > room) { excess += quota[k] - room; quota[k] = room; }
    });
    if (!excess) break;
    const open = keys.filter((k) => (quota[k] || 0) < Math.min(cap, capacity[k]) && weights[k] > 0);
    const extra = apportion(excess, open, Object.fromEntries(open.map((k) => [k, weights[k]])), rng);
    open.forEach((k) => { quota[k] = (quota[k] || 0) + extra[k]; });
    if (!open.length) break;
  }

  const chosen = []; let reused = false; const strata = {};
  keys.forEach((k) => {
    const want = quota[k] || 0;
    if (!want) return;
    const pool = [...shuffled(groups.get(k).filter((q) => !doneSet.has(String(q.id))), rng), ...shuffled(groups.get(k).filter((q) => doneSet.has(String(q.id))), rng)];
    let acc = 0;
    for (const q of pool) {
      const m = marksOf(q);
      if (acc + m / 2 > want) continue;
      chosen.push(q); acc += m; strata[k] = acc;
      if (doneSet.has(String(q.id))) reused = true;
      if (acc >= want) break;
    }
  });

  if (blueprint.order === 'position') {
    const jitter = new Map(chosen.map((q) => [String(q.id), rng()]));
    chosen.sort((a, b) => (pos.get(String(a.id)) - pos.get(String(b.id))) || (jitter.get(String(a.id)) - jitter.get(String(b.id))));
  }
  return { questionIds: chosen.map((q) => String(q.id)), marks: chosen.reduce((s, q) => s + marksOf(q), 0), reused, strata };
};

// ── Daily Study set ───────────────────────────────────────────────────────────────────────────────────────────
//
// A student who has OC / Selective / Scholarship switched on gets one extra Daily Study card per exam: a 10-mark set,
// half from each of two sections (OC: Mathematics + Thinking Skills). A section that has no questions yet
// (Selective Thinking Skills) gives its share to the other one, so the set is always 10 marks when the bank has them.

export const DAILY_SET_MARKS = 10;
export const DAILY_SETS = {
  [OC_EXAM_ID]: { label: 'OC', sections: [{ topicId: 'sch-oc-maths', name: 'Mathematics' }, { topicId: 'sch-oc-thinking', name: 'Thinking Skills' }] },
  [SELECTIVE_EXAM_ID]: { label: 'Selective', sections: [{ topicId: 'sch-selective-maths', name: 'Mathematical Reasoning' }, { topicId: 'sch-selective-thinking', name: 'Thinking Skills' }] },
  // ACER has no Thinking Skills section: its second main section is Reading and Viewing (one 5-mark passage).
  [ACER_EXAM_ID]: { label: 'Scholarship', sections: [{ topicId: 'sch-acer-maths', name: 'Mathematics' }, { topicId: 'sch-acer-reading', name: 'Reading and Viewing' }] },
};

/** Marks per section: an even split, capped by what each section holds; what one cannot give goes to the others. */
export const dailySetShares = (available, total = DAILY_SET_MARKS) => {
  const n = available.length;
  const share = available.map((a, i) => Math.min(a, Math.floor(total / n) + (i < total % n ? 1 : 0)));
  let left = total - share.reduce((s, v) => s + v, 0);
  for (let i = 0; left > 0 && i < n * total; i += 1) {
    const k = i % n;
    if (share[k] < available[k]) { share[k] += 1; left -= 1; }
  }
  return share;
};

/** Thinking Skills in a daily set: one question of each kind, never two of a kind. */
const DAILY_BLUEPRINT_OVERRIDE = { 'sch-oc-thinking': { by: 'category', weight: 'paper', cap: 1, order: 'position' }, 'sch-selective-thinking': { by: 'category', weight: 'paper', cap: 1, order: 'position' } };

/**
 * Pick today's set. `questions`: every question of the exam's two sections, each tagged `_topicId`.
 * → { questionIds (section order), marks, reused, sections: [{ topicId, marks }] }
 */
export const pickDailySet = ({ examId, questions, done = [], rng = Math.random }) => {
  const sections = DAILY_SETS[examId]?.sections || [];
  const banks = sections.map((s) => questions.filter((q) => q._topicId === s.topicId));
  const avail = banks.map((qs) => qs.reduce((n, q) => n + marksOf(q), 0));
  const shares = dailySetShares(avail);
  let reused = false;
  const out = []; const per = [];
  sections.forEach((s, i) => {
    if (!shares[i]) { per.push({ topicId: s.topicId, marks: 0 }); return; }
    const paper = pickMockPaper({ questions: banks[i], done, targetMarks: shares[i], blueprint: DAILY_BLUEPRINT_OVERRIDE[s.topicId] || MOCK_BLUEPRINT[s.topicId] || {}, rng });
    if (paper.reused) reused = true;
    out.push(...paper.questionIds); per.push({ topicId: s.topicId, marks: paper.marks });
  });
  return { questionIds: out, marks: per.reduce((n, p) => n + p.marks, 0), reused, sections: per };
};
