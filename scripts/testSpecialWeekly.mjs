/** Weekly OC / Selective / Scholarship summary: collection, week boundaries, one-write upload patch. Run via npm run test:homework. */
import assert from 'node:assert';
import {
  parseTestKey, collectAttempts, buildWeeks, pendingWeeks, buildUploadPatch, mergeWeek, weeksForTeacher, weekKey, weekIdFromKey, deviceKey, MAX_WRONG_IDS, KEEP_WEEKS,
} from '../src/utils/specialWeekly.js';

let passed = 0;
const test = (name, fn) => { fn(); passed += 1; console.log(`  ✓ ${name}`); };
const at = (iso) => Date.parse(iso);
const fakeStorage = (entries) => { const keys = Object.keys(entries); return { length: keys.length, key: (i) => keys[i], getItem: (k) => entries[k] }; };
const att = (iso, marks, total, extra = {}) => ({ id: iso, submittedAt: at(iso), marks, total, durationSec: 600, ...extra });

test('storage keys: topic tests, mocks and daily sets of this student only', () => {
  assert.deepEqual(parseTestKey('u1', 'sapere:schtest:u1:sch-oc:sch-oc-maths'), { kind: 'topic', examId: 'sch-oc', topicId: 'sch-oc-maths' });
  assert.deepEqual(parseTestKey('u1', 'sapere:schtest:u1:mock:sch-selective:sch-selective-maths'), { kind: 'mock', examId: 'sch-selective', topicId: 'sch-selective-maths' });
  assert.deepEqual(parseTestKey('u1', 'sapere:schtest:u1:daily:sch-acer:set'), { kind: 'daily', examId: 'sch-acer', topicId: 'set' });
  assert.equal(parseTestKey('u1', 'sapere:schtest:u2:sch-oc:x'), null);
  assert.equal(parseTestKey('u1', 'sapere:other:u1:sch-oc:x'), null);
  assert.equal(parseTestKey('u1', 'sapere:schtest:u1:y9-1:topic'), null);
});

test('collects only submitted attempts, skips unreadable entries', () => {
  const store = fakeStorage({
    'sapere:schtest:u1:sch-oc:sch-oc-maths': JSON.stringify({ attempts: [att('2026-10-28T10:00:00+11:00', 5, 10), { id: 'x', marks: 1, total: 2 }] }),
    'sapere:schtest:u1:daily:sch-oc:set': '{not json',
    'sapere:schtest:u2:sch-oc:sch-oc-maths': JSON.stringify({ attempts: [att('2026-10-28T10:00:00+11:00', 9, 10)] }),
  });
  const got = collectAttempts('u1', store);
  assert.equal(got.length, 1);
  assert.equal(got[0].examId, 'sch-oc');
});

test('a week is Monday to Sunday in Sydney: Sunday night and Monday morning land in different weeks', () => {
  const w = buildWeeks([
    { kind: 'topic', examId: 'sch-oc', attempt: att('2026-10-26T00:30:00+11:00', 4, 10) },      // Monday 26 Oct
    { kind: 'topic', examId: 'sch-oc', attempt: att('2026-11-01T23:30:00+11:00', 6, 10) },      // Sunday 1 Nov
    { kind: 'topic', examId: 'sch-oc', attempt: att('2026-11-02T00:10:00+11:00', 8, 10) },      // Monday 2 Nov
  ]);
  assert.deepEqual(Object.keys(w).sort(), ['2026-10-26', '2026-11-02']);
  assert.equal(w['2026-10-26'].tests, 2);
  assert.equal(w['2026-11-02'].marks, 8);
});

test('a week adds up tests, questions, accuracy inputs, kinds, question types and missed questions', () => {
  const w = buildWeeks([
    { kind: 'topic', examId: 'sch-oc', attempt: att('2026-10-27T10:00:00+11:00', 6, 10, { types: { codes: [1, 3], analogies: [2, 2] }, wrong: ['q1', 'q2'] }) },
    { kind: 'mock', examId: 'sch-oc', attempt: att('2026-10-28T10:00:00+11:00', 20, 35, { kind: 'mock', types: { codes: [2, 4] }, wrong: ['q2', 'q9'] }) },
    { kind: 'daily', examId: 'sch-selective', attempt: att('2026-10-29T10:00:00+11:00', 7, 10, { kind: 'daily' }) },
  ])['2026-10-26'];
  assert.equal(w.tests, 3); assert.equal(w.marks, 33); assert.equal(w.total, 55); assert.equal(w.secs, 1800);
  assert.deepEqual(w.exams['sch-oc'].kinds, { topic: 1, mock: 1, daily: 0 });
  assert.deepEqual(w.exams['sch-oc'].types.codes, [3, 7]);
  assert.deepEqual(w.exams['sch-oc'].wrong, ['q1', 'q2', 'q9']);                 // q2 once
  assert.equal(w.exams['sch-selective'].kinds.daily, 1);
});

test('older attempts without type or missed-question details still count', () => {
  const w = buildWeeks([{ kind: 'topic', examId: 'sch-acer', attempt: att('2026-10-27T10:00:00+11:00', 3, 8) }])['2026-10-26'];
  assert.equal(w.exams['sch-acer'].marks, 3);
  assert.deepEqual(w.exams['sch-acer'].types, {});
  assert.deepEqual(w.exams['sch-acer'].wrong, []);
});

test('the missed-question list is capped so the profile document stays small', () => {
  const wrong = Array.from({ length: 80 }, (_, i) => `q${i}`);
  const w = buildWeeks([{ kind: 'topic', examId: 'sch-oc', attempt: att('2026-10-27T10:00:00+11:00', 0, 80, { wrong }) }])['2026-10-26'];
  assert.equal(w.exams['sch-oc'].wrong.length, MAX_WRONG_IDS);
});

test('only finished weeks that have not been sent go up — nothing while the week is still running', () => {
  const weeks = buildWeeks([
    { kind: 'topic', examId: 'sch-oc', attempt: att('2026-10-20T10:00:00+11:00', 5, 10) },
    { kind: 'topic', examId: 'sch-oc', attempt: att('2026-10-27T10:00:00+11:00', 5, 10) },
  ]);
  assert.deepEqual(pendingWeeks(weeks, {}, new Date('2026-10-28T10:00:00+11:00')), ['2026-10-19']);       // 26 Oct week is current
  assert.deepEqual(pendingWeeks(weeks, {}, new Date('2026-11-02T10:00:00+11:00')), ['2026-10-19', '2026-10-26']);
  assert.deepEqual(pendingWeeks(weeks, { '2026-10-19': 'sent' }, new Date('2026-11-02T10:00:00+11:00')), ['2026-10-26']);
  assert.deepEqual(pendingWeeks({}, {}, new Date('2026-11-02T10:00:00+11:00')), []);
});

test('the upload is one patch: this device\'s week, plus removal of weeks past the keep window', () => {
  const weeks = buildWeeks([{ kind: 'topic', examId: 'sch-oc', attempt: att('2026-10-20T10:00:00+11:00', 5, 10) }]);
  const DROP = Symbol('drop');
  const old = weekKey('2026-01-05');                    // far older than KEEP_WEEKS
  const recent = weekKey('2026-10-12');
  const patch = buildUploadPatch({ weeks, pending: ['2026-10-19'], deviceId: 'ab-cd-12-34-56-78-90', existingKeys: [old, recent], now: new Date('2026-11-02T10:00:00+11:00'), drop: DROP });
  assert.deepEqual(Object.keys(patch).sort(), [`specialWeekly.${old}`, `specialWeekly.${weekKey('2026-10-19')}.${deviceKey('ab-cd-12-34-56-78-90')}`].sort());
  assert.equal(patch[`specialWeekly.${old}`], DROP);
  assert.equal(patch[`specialWeekly.${weekKey('2026-10-19')}.dabcd12345678`].marks, 5);
  assert.ok(KEEP_WEEKS >= 8);
});

test('field names are safe for Firestore and round-trip', () => {
  assert.equal(weekKey('2026-10-26'), 'w2026_10_26');
  assert.equal(weekIdFromKey('w2026_10_26'), '2026-10-26');
  assert.match(deviceKey('3f2b-9a1c-aaaa-bbbb'), /^d[A-Za-z0-9]+$/);
  assert.equal(deviceKey(''), 'dx');
});

test('the teacher sees several devices of one week as one summed week, newest first, junk ignored', () => {
  const dev = (marks, total, wrong) => ({ tests: 1, marks, total, secs: 300, exams: { 'sch-oc': { tests: 1, marks, total, kinds: { topic: 1 }, types: { codes: [marks, total] }, wrong } } });
  const stored = {
    w2026_10_19: { dA: dev(4, 10, ['a']) },
    w2026_10_26: { dA: dev(6, 10, ['a', 'b']), dB: dev(2, 10, ['b', 'c']) },
    notAWeek: { dA: dev(1, 1, []) },
    w2026_11_02: {},
  };
  const out = weeksForTeacher(stored);
  assert.deepEqual(out.map((w) => w.weekId), ['2026-10-26', '2026-10-19']);
  assert.equal(out[0].marks, 8); assert.equal(out[0].total, 20); assert.equal(out[0].tests, 2);
  assert.deepEqual(out[0].exams['sch-oc'].types.codes, [8, 20]);
  assert.deepEqual(out[0].exams['sch-oc'].wrong, ['a', 'b', 'c']);
  assert.deepEqual(mergeWeek(null), { tests: 0, marks: 0, total: 0, secs: 0, exams: {} });
});

console.log(`\nspecial weekly: ${passed} passed`);
