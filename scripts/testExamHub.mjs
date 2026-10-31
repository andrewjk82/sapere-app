/** OC & Selective hub: who sees it, how long a mock is, how weak spots are judged. Run via npm run test:homework. */
import assert from 'node:assert';
import {
  hubExamsFor, hasOcSelective, mockSizeFor, summariseAttempts, rankGroups,
  MIN_MARKS_TO_JUDGE, RECENT_ATTEMPTS, MOCK_FORMATS,
} from '../src/utils/examHub.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };

test('only students with Scholarship on and OC or Selective ticked get the page', () => {
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: false, scholarshipExams: ['sch-oc'] }), []);
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: true, scholarshipExams: ['sch-acer'] }), []);
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: true, scholarshipExams: ['sch-oc'] }), ['sch-oc']);
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: true, scholarshipExams: ['sch-selective', 'sch-acer'] }), ['sch-selective']);
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: true, scholarshipExams: ['sch-oc', 'sch-selective'] }), ['sch-oc', 'sch-selective']);
  // no list = every exam, which is how older switch-ons behave
  assert.deepEqual(hubExamsFor({ scholarshipEnabled: true }), ['sch-oc', 'sch-selective']);
  assert.equal(hasOcSelective(null), false);
  assert.equal(hasOcSelective({ scholarshipEnabled: true, scholarshipExams: ['sch-oc'] }), true);
});

test('a mock is sized by marks, so passages with many parts do not inflate it', () => {
  const single = Array.from({ length: 100 }, (_, i) => ({ id: `s${i}`, options: ['a', 'b'] }));
  assert.equal(mockSizeFor(single, 35), 35);
  const passages = Array.from({ length: 20 }, (_, i) => ({ id: `p${i}`, subQuestions: [{}, {}, {}, {}, {}] }));
  assert.equal(mockSizeFor(passages, 50), 10);                 // 5 marks each → 10 passages = 50 marks
  assert.equal(mockSizeFor(single.slice(0, 12), 35), 12);      // never more than the bank has
  assert.equal(mockSizeFor([], 35), 0);
});

test('every section with a real format has marks and minutes', () => {
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

console.log(`\nexam hub: ${passed} passed`);
