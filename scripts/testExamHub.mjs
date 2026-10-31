/** OC & Selective hub: who sees it, how long a mock is, how weak spots are judged. Run via npm run test:homework. */
import assert from 'node:assert';
import { readFileSync } from 'node:fs';
import { toLegacy } from '../content/legacy.js';
import { toReviewItems, questionOutcomes, isPickCorrect, correctIndexOf, subKey } from '../src/utils/scholarshipTest.js';
import { resolveCorrectOptionText } from '../src/utils/mcOptionShuffle.js';
import {
  hubExamsFor, examIdForTab, HUB_PAGES, mockSizeFor, summariseAttempts, rankGroups,
  MIN_MARKS_TO_JUDGE, RECENT_ATTEMPTS, MOCK_FORMATS, MOCK_BLUEPRINT, pickNextStep, pickMockPaper, DAILY_SETS, dailySetShares, pickDailySet, DAILY_SET_MARKS,
} from '../src/utils/examHub.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('a student gets one page per ticked exam, and none when Scholarship is off', () => {
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: false, scholarshipExams: ['sch-oc'] }), []);
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: true, scholarshipExams: ['sch-acer'] }), ['sch-acer']);
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: true, scholarshipExams: ['sch-oc'] }), ['sch-oc']);
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: true, scholarshipExams: ['sch-selective', 'sch-acer'] }), ['sch-selective', 'sch-acer']);
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: true, scholarshipExams: ['sch-oc', 'sch-selective'] }), ['sch-oc', 'sch-selective']);
  // no list = every exam, which is how older switch-ons behave
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: true }), ['sch-oc', 'sch-selective', 'sch-acer']);
  assert.deepEqual(hubExamsFor(null), []);
});

test('OC, Selective and Scholarship(ACER) are separate pages, each reachable by its own tab key', () => {
  assert.equal(HUB_PAGES['sch-acer'].label, 'Scholarship');
  assert.equal(examIdForTab('Scholarship'), 'sch-acer');
  assert.equal(new Set(Object.values(HUB_PAGES).map((p) => p.tab)).size, 3);
  assert.equal(HUB_PAGES['sch-oc'].label, 'OC');
  assert.equal(HUB_PAGES['sch-selective'].label, 'Selective');
  assert.notEqual(HUB_PAGES['sch-oc'].tab, HUB_PAGES['sch-selective'].tab);
  assert.equal(examIdForTab('OcPrep'), 'sch-oc');
  assert.equal(examIdForTab('SelectivePrep'), 'sch-selective');
  assert.equal(examIdForTab('Dashboard'), null);
});

test('a mock is sized by marks, so passages with many parts do not inflate it', () => {
  const single = Array.from({ length: 100 }, (_, i) => ({ id: `s${i}`, options: ['a', 'b'] }));
  assert.equal(mockSizeFor(single, 35), 35);
  const passages = Array.from({ length: 20 }, (_, i) => ({ id: `p${i}`, subQuestions: [{}, {}, {}, {}, {}] }));
  assert.equal(mockSizeFor(passages, 50), 10);                 // 5 marks each → 10 passages = 50 marks
  assert.equal(mockSizeFor(single.slice(0, 12), 35), 12);      // never more than the bank has
  assert.equal(mockSizeFor([], 35), 0);
});

test('ACER has no invented mock format; every format that exists has marks and minutes', () => {
  assert.ok(!Object.keys(MOCK_FORMATS).some((id) => id.startsWith('sch-acer')));
  Object.values(MOCK_FORMATS).forEach((f) => { assert.ok(f.marks > 0 && f.minutes > 0 && f.name); });
});

const mc = (id, answer, extra = {}) => ({ id, options: ['A', 'B', 'C', 'D'], answer: String(answer), ...extra });

test('weak spots are judged per category from graded answers', () => {
  const byId = new Map([
    mc('q1', 0, { category: 'codes' }), mc('q2', 0, { category: 'codes' }), mc('q3', 0, { category: 'analogies' }),
  ].map((q) => [q.id, q]));
  const hist = [{ attempts: [{ questionIds: ['q1', 'q2', 'q3'], answers: { q1: 0, q2: 1, q3: 0 } }] }];
  const s = summariseAttempts(hist, byId);
  assert.deepEqual(s.byCategory.codes, { marks: 1, total: 2 });
  assert.deepEqual(s.byCategory.analogies, { marks: 1, total: 1 });
  assert.equal(s.marks, 2); assert.equal(s.total, 3);
});

test('a group is only called weak after enough marks, and weakest comes first', () => {
  const r = rankGroups({
    few: { marks: 0, total: MIN_MARKS_TO_JUDGE - 1 },
    bad: { marks: 2, total: 10 },
    ok: { marks: 9, total: 10 },
    mid: { marks: 6, total: 10 },
  });
  assert.deepEqual(r.map((x) => x.name), ['bad', 'mid', 'ok', 'few']);
  assert.equal(r.find((x) => x.name === 'few').weak, false);     // too little evidence
  assert.equal(r.find((x) => x.name === 'bad').weak, true);
  assert.equal(r.find((x) => x.name === 'mid').weak, false);     // 60% is not below the line
});

test('only the most recent attempts count, so a fixed weak spot stops showing', () => {
  const byId = new Map([mc('q1', 0, { category: 'codes' })].map((q) => [q.id, q]));
  const wrong = { questionIds: ['q1'], answers: { q1: 1 } };
  const right = { questionIds: ['q1'], answers: { q1: 0 } };
  const attempts = [...Array.from({ length: 5 }, () => wrong), ...Array.from({ length: RECENT_ATTEMPTS }, () => right)];
  const s = summariseAttempts([{ attempts }], byId);
  assert.deepEqual(s.byCategory.codes, { marks: RECENT_ATTEMPTS, total: RECENT_ATTEMPTS });
});

test('answers for questions no longer in the bank are ignored', () => {
  const s = summariseAttempts([{ attempts: [{ questionIds: ['gone'], answers: { gone: 0 } }] }], new Map());
  assert.equal(s.total, 0);
});

test('next step: first mock, then the weakest type, then another mock, then practice', () => {
  const secs = [
    { id: 'maths', name: 'Mathematical Reasoning', mockable: true, empty: false, mockCount: 0 },
    { id: 'think', name: 'Thinking Skills', mockable: true, empty: false, mockCount: 2 },
    { id: 'read', name: 'Reading', mockable: true, empty: true, mockCount: 0 },
  ];
  assert.deepEqual(pickNextStep(secs, []), { kind: 'mock', sectionId: 'maths', text: 'Take your first Mathematical Reasoning mock exam' });
  const done = secs.map((s) => ({ ...s, mockCount: s.id === 'maths' ? 1 : 2 }));
  const weak = [{ section: 'think', name: 'Analogies', pct: 0.4, weak: true }, { section: 'maths', name: 'Fractions', pct: 0.5, weak: true }];
  assert.deepEqual(pickNextStep(done, weak), { kind: 'practise', sectionId: 'think', text: 'Practise Analogies — you scored 40%' });
  assert.equal(pickNextStep(done, []).sectionId, 'maths');               // the section with the fewest mocks
  assert.equal(pickNextStep(done, []).kind, 'mock');
  const practiceOnly = [{ id: 'a', name: 'ACER Maths', mockable: false, empty: false, mockCount: 0 }];
  assert.deepEqual(pickNextStep(practiceOnly, []), { kind: 'practise', sectionId: 'a', text: 'Practise ACER Maths' });
  assert.equal(pickNextStep([{ ...secs[0], empty: true }], []), null);   // nothing in the bank yet
  // a weak spot in a section that is empty is ignored
  assert.equal(pickNextStep(done, [{ section: 'read', name: 'X', pct: 0.1, weak: true }]).kind, 'mock');
});

// ── mock papers, checked against the real question banks ──────────────────────────────────────────────────────────
const seeded = (seed) => () => { seed = (seed + 0x6D2B79F5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const bank = (file, title) => JSON.parse(readFileSync(new URL(`../content/chapters/${file}.json`, import.meta.url), 'utf8'))
  .topics.find((t) => t.title === title).questions.map((q) => toLegacy(q, { topicId: 't' }));
const SECTIONS = {
  english: ['sch-oc', 'English', 'sch-oc-english'],
  maths: ['sch-oc', 'Mathematics', 'sch-oc-maths'],
  thinking: ['sch-oc', 'Thinking Skills', 'sch-oc-thinking'],
  selective: ['sch-selective', 'Mathematical Reasoning', 'sch-selective-maths'],
};
const paper = (key, seed, done = []) => {
  const [file, title, id] = SECTIONS[key];
  const questions = bank(file, title);
  const by = new Map(questions.map((q) => [String(q.id), q]));
  const r = pickMockPaper({ questions, done, targetMarks: MOCK_FORMATS[id].marks, blueprint: MOCK_BLUEPRINT[id], rng: seeded(seed) });
  return { ...r, questions, by, target: MOCK_FORMATS[id].marks, items: r.questionIds.map((i) => by.get(i)) };
};
const catMarks = (items) => items.reduce((m, q) => { m[q.category] = (m[q.category] || 0) + (q.subQuestions?.length || 1); return m; }, {});

test('Thinking Skills mock has the official papers\' variety: 30 marks, many question types, never more than 6 of one', () => {
  for (let seed = 1; seed <= 25; seed += 1) {
    const p = paper('thinking', seed);
    assert.equal(p.marks, 30, `seed ${seed}`);
    const c = catMarks(p.items);
    assert.ok(Object.keys(c).length >= 12, `seed ${seed}: only ${Object.keys(c).length} types`);
    assert.ok(Math.max(...Object.values(c)) <= 6, `seed ${seed}: ${JSON.stringify(c)}`);
  }
});

test('Thinking Skills mock leans on the types the real papers lean on', () => {
  let strengthen = 0; let mistake = 0; let tail = 0;
  for (let seed = 1; seed <= 25; seed += 1) {
    const c = catMarks(paper('thinking', seed).items);
    strengthen += c['strengthen an argument'] || 0; mistake += c['identify the mistake'] || 0;
    tail += Object.entries(c).filter(([k]) => !['strengthen an argument', 'identify the mistake', 'whose reasoning is correct', 'ordering and position', 'spatial reasoning', 'logic puzzle', 'reading tables'].includes(k)).reduce((n, [, v]) => n + v, 0);
  }
  assert.ok(strengthen / 25 >= 3 && strengthen / 25 <= 5, `strengthen ${strengthen / 25}`);   // real papers: 4, 4, 4
  assert.ok(mistake / 25 >= 3.5 && mistake / 25 <= 5.5, `mistake ${mistake / 25}`);           // real papers: 3, 4, 6
  assert.ok(tail / 25 >= 6, `rare types ${tail / 25}`);                                         // the long tail is in every paper
});

test('Selective Maths mock takes equal marks from each quarter of the paper, in paper order', () => {
  for (let seed = 1; seed <= 15; seed += 1) {
    const p = paper('selective', seed);
    assert.ok(Math.abs(p.marks - p.target) <= 2, `seed ${seed}: ${p.marks}`);
    const bands = Object.values(p.strata);
    assert.equal(bands.length, 4);
    // a two-part question can put a quarter one mark over, so allow a spread of 2
    assert.ok(Math.max(...bands) - Math.min(...bands) <= 2, JSON.stringify(p.strata));
  }
  const p = paper('selective', 3);
  const rank = { easy: 0, medium: 1, hard: 2 };
  const first = p.items.slice(0, 9).map((q) => rank[q.difficulty]).filter((x) => x !== undefined);
  const last = p.items.slice(-9).map((q) => rank[q.difficulty]).filter((x) => x !== undefined);
  assert.ok(first.reduce((a, b) => a + b, 0) / first.length < last.reduce((a, b) => a + b, 0) / last.length, 'harder at the end');
});

test('OC Mathematics mock covers every real question type in even shares and drops the stray one', () => {
  for (let seed = 1; seed <= 15; seed += 1) {
    const p = paper('maths', seed);
    const c = catMarks(p.items);
    assert.ok(Math.abs(p.marks - p.target) <= 2, `seed ${seed}: ${p.marks}`);
    assert.equal(c.codes, undefined);
    ['arithmetic', 'number series', 'measurement', 'figure sequences', 'calculation problems', 'graph interpretation'].forEach((k) => {
      assert.ok(c[k] >= 4 && c[k] <= 8, `seed ${seed}: ${k} = ${c[k]}`);
    });
  }
});

test('OC Reading mock is mostly comprehension, like the bank, with every word-skill type present', () => {
  for (let seed = 1; seed <= 15; seed += 1) {
    const p = paper('english', seed);
    const c = catMarks(p.items);
    assert.ok(Math.abs(p.marks - p.target) <= 4, `seed ${seed}: ${p.marks}`);
    assert.ok(c.comprehension / p.marks >= 0.4 && c.comprehension / p.marks <= 0.7, `seed ${seed}: ${JSON.stringify(c)}`);
    ['codes', 'word order', 'analogies', 'word knowledge'].forEach((k) => assert.ok(c[k] >= 3, `seed ${seed}: ${k}`));
  }
});

test('a mock takes questions the student has not done, and says when it had to bring some back', () => {
  const all = bank('sch-selective', 'Mathematical Reasoning').map((q) => String(q.id));
  const fresh = paper('selective', 5, all.slice(0, 700));            // 56 unseen are left, 35 are needed
  assert.equal(fresh.reused, false);
  assert.ok(fresh.questionIds.every((id) => all.indexOf(id) >= 700));
  const stale = paper('selective', 5, all);                          // everything has been done
  assert.equal(stale.reused, true);
  assert.ok(stale.marks >= 33);
});

test('the same seed builds the same paper', () => {
  assert.deepEqual(paper('thinking', 9).questionIds, paper('thinking', 9).questionIds);
  assert.notDeepEqual(paper('thinking', 9).questionIds, paper('thinking', 10).questionIds);
});

// ── the result screen and the challenge-style review ──────────────────────────────────────────────────────────────
test('the review screen agrees with the test grader on every OC / Selective question, right and wrong picks alike', () => {
  const optText = (o) => (typeof o === 'string' ? o : (o?.text ?? ''));
  const disagreements = [];
  let checked = 0;
  Object.values(SECTIONS).forEach(([file, title]) => {
    const qs = bank(file, title).filter((q) => (q.subQuestions?.length ? q.subQuestions.every((sq) => (sq.options || []).length > 1) : (q.options || []).length > 1));
    [0, 1, 2].forEach((variant) => {
      // variant 0: every pick right, 1: every pick wrong (next option), 2: a mix; some questions skipped in every variant
      const answers = {};
      qs.forEach((q, qi) => {
        if (qi % 7 === 3) return;
        const pickFor = (x) => { const ci = correctIndexOf(x); const n = x.options.length; return variant === 0 ? ci : variant === 1 ? (ci + 1) % n : ((qi % 2) ? ci : (ci + 1) % n); };
        answers[String(q.id)] = q.subQuestions?.length ? Object.fromEntries(q.subQuestions.map((sq, i) => [subKey(sq, i), pickFor(sq)])) : pickFor(q);
      });
      const items = toReviewItems(qs, answers);
      qs.forEach((q, i) => {
        checked += 1;
        const a = answers[String(q.id)];
        const res = items.answerResults[i];
        if (q.subQuestions?.length) {
          q.subQuestions.forEach((sq, j) => { if (res.partCorrect[j] !== isPickCorrect(sq, a?.[subKey(sq, j)])) disagreements.push(`${q.id}.${j}`); });
          // what the review shows as "Your answer" for a part is the option the student picked
          q.subQuestions.forEach((sq, j) => { const k = subKey(sq, j); const picked = a?.[k]; if (picked !== undefined && items.userAnswers[i][k] !== optText(sq.options[picked])) disagreements.push(`${q.id}.${j}:shown`); });
        } else {
          if (res.correct !== isPickCorrect(q, a)) disagreements.push(String(q.id));
          const ci = correctIndexOf(q);
          if (resolveCorrectOptionText(items.questions[i]) !== optText(q.options[ci])) disagreements.push(`${q.id}:right-text`);
          if (a !== undefined && items.userAnswers[i] !== optText(q.options[a])) disagreements.push(`${q.id}:shown`);
        }
        assert.equal(res.correct, questionOutcomes([q], answers)[0] === 'right', String(q.id));
      });
    });
  });
  assert.ok(checked > 700, `only ${checked} checked`);
  assert.deepEqual(disagreements, [], `${disagreements.length} disagree: ${disagreements.slice(0, 8).join(', ')}`);
});

test('question map: right, partly right, wrong and unanswered are told apart', () => {
  const single = { id: 's', options: ['a', 'b'], answer: '0' };
  const passage = { id: 'p', subQuestions: [{ id: 'p1', options: ['a', 'b'], answer: '0' }, { id: 'p2', options: ['a', 'b'], answer: '1' }] };
  const answers = { s: 1, p: { p1: 0, p2: 0 } };
  assert.deepEqual(questionOutcomes([single, passage], answers), ['wrong', 'partial']);
  assert.deepEqual(questionOutcomes([single, passage], { s: 0, p: { p1: 0, p2: 1 } }), ['right', 'right']);
  assert.deepEqual(questionOutcomes([single, passage], {}), ['blank', 'blank']);
});

// ── Daily Study set ───────────────────────────────────────────────────────────────────────────────────────────────
const dailyBank = (examId) => DAILY_SETS[examId].sections.flatMap((sec) => {
  const file = examId === 'sch-acer' ? 'sch-acer' : examId;
  const j = JSON.parse(readFileSync(new URL(`../content/chapters/${file}.json`, import.meta.url), 'utf8'));
  const t = j.topics.find((x) => x.topicId === sec.topicId);
  return (t?.questions || []).map((q) => ({ ...toLegacy(q, { topicId: sec.topicId }), _topicId: sec.topicId }));
});
const marksIn = (qs) => qs.reduce((n, q) => n + (q.subQuestions?.length || 1), 0);

test('daily set shares: an even split, and an empty section hands its share to the other', () => {
  assert.deepEqual(dailySetShares([700, 90]), [5, 5]);
  assert.deepEqual(dailySetShares([775, 0]), [10, 0]);
  assert.deepEqual(dailySetShares([0, 90]), [0, 10]);
  assert.deepEqual(dailySetShares([3, 40]), [3, 7]);
  assert.deepEqual(dailySetShares([3, 2]), [3, 2]);
  assert.deepEqual(dailySetShares([0, 0]), [0, 0]);
});

test('OC daily set: 5 marks of Mathematics and 5 of Thinking Skills, no two Thinking questions of one kind', () => {
  const qs = dailyBank('sch-oc');
  for (let seed = 1; seed <= 25; seed += 1) {
    const r = pickDailySet({ examId: 'sch-oc', questions: qs, rng: seeded(seed) });
    const by = new Map(qs.map((q) => [String(q.id), q]));
    const items = r.questionIds.map((id) => by.get(id));
    const maths = items.filter((q) => q._topicId === 'sch-oc-maths');
    const think = items.filter((q) => q._topicId === 'sch-oc-thinking');
    assert.ok(Math.abs(marksIn(maths) - 5) <= 1, `seed ${seed}: maths ${marksIn(maths)}`);
    assert.equal(marksIn(think), 5, `seed ${seed}`);
    assert.equal(new Set(think.map((q) => q.category)).size, 5, `seed ${seed}: ${think.map((q) => q.category)}`);
    assert.ok(Math.abs(r.marks - DAILY_SET_MARKS) <= 1, `seed ${seed}: ${r.marks}`);
    assert.deepEqual(items.map((q) => q._topicId), [...items.map((q) => q._topicId)].sort((a, b) => (a === 'sch-oc-maths' ? -1 : 1) - (b === 'sch-oc-maths' ? -1 : 1)));   // Mathematics first
  }
});

test('Selective daily set is all Mathematical Reasoning while its Thinking Skills bank is empty', () => {
  const qs = dailyBank('sch-selective');
  assert.ok(qs.every((q) => q._topicId === 'sch-selective-maths'));
  const r = pickDailySet({ examId: 'sch-selective', questions: qs, rng: seeded(4) });
  assert.ok(Math.abs(r.marks - 10) <= 1, String(r.marks));
  assert.equal(r.sections[1].marks, 0);
});

test('Scholarship (ACER) daily set is about 5 marks of Mathematics and about 5 of Reading (one or two passages)', () => {
  const qs = dailyBank('sch-acer');
  for (let seed = 1; seed <= 10; seed += 1) {
    const r = pickDailySet({ examId: 'sch-acer', questions: qs, rng: seeded(seed) });
    const passages = r.questionIds.filter((id) => qs.find((q) => String(q.id) === id)?._topicId === 'sch-acer-reading');
    // passages carry 2–7 marks each, so 5 marks is one passage or two short ones
    assert.ok(passages.length >= 1 && passages.length <= 2, `seed ${seed}`);
    assert.ok(r.sections[1].marks >= 4 && r.sections[1].marks <= 8, `seed ${seed}: ${r.sections[1].marks}`);
    assert.ok(Math.abs(r.sections[0].marks - 5) <= 2, `seed ${seed}: ${r.sections[0].marks}`);
  }
});

test('daily set avoids done questions, and says when it had to repeat', () => {
  const qs = dailyBank('sch-oc');
  const ids = qs.map((q) => String(q.id));
  const first = pickDailySet({ examId: 'sch-oc', questions: qs, rng: seeded(2) });
  const next = pickDailySet({ examId: 'sch-oc', questions: qs, done: first.questionIds, rng: seeded(2) });
  assert.equal(next.reused, false);
  assert.ok(next.questionIds.every((id) => !first.questionIds.includes(id)));
  assert.equal(pickDailySet({ examId: 'sch-oc', questions: qs, done: ids, rng: seeded(2) }).reused, true);
});

console.log(`\nexam hub: ${passed} passed`);
