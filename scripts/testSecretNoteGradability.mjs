/**
 * Secret Note "ungradable question admitted" regression (2026-07-18).
 *
 * Real report (Alex, y8-15i-q1b): a teacher_review question ("Find the
 * perimeter and area of the rectilinear figure...") with a required diagram
 * ended up in Secret Note rendered as multiple-choice with ZERO option
 * buttons and no submit path — the student was stuck and had to fall back to
 * "Ask the teacher". Confirmed against the live Firestore doc:
 *   { type: 'teacher_review', options: [], requiresManualGrading: false }
 *
 * Root cause: chapterSeeder writes `options: []` (not undefined) for every
 * non-MC question, and `requiresManualGrading` is only auto-set true when the
 * question text matches a keyword regex (draw/sketch/construct/prove/...) —
 * a plainly-worded teacher_review question matches neither. canGrade() then
 * accepted it via `Array.isArray(q.options)`, which is true for `[]` too.
 *
 * Fix: canGrade() excludes type 'teacher_review' outright (parallel to the
 * existing 'graph_sketch' exclusion) and requires a NON-EMPTY options array.
 * prepareQuestion()'s isMC detection got the same non-empty tightening as
 * defense-in-depth. pruneUngradable() self-heals any note saved before this
 * fix shipped, for every already-affected student, with zero server calls.
 *
 * Runs in Node with a localStorage shim (secretNote.js has no Firebase import).
 * Usage: npm run test:secret-note-gradability
 */
import assert from 'node:assert';

const store = new Map();
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
  clear: () => store.clear(),
};
globalThis.window = { localStorage: globalThis.localStorage };

const {
  canGrade,
  addMistakes,
  getNote,
  getNoteCount,
  pruneUngradable,
} = await import('../src/utils/secretNote.js');

let passed = 0;
const check = (name, fn) => {
  store.clear();
  try { fn(); console.log(`  ok ${name}`); passed += 1; }
  catch (e) { console.error(`  ✗ ${name}\n    ${e.message}`); process.exitCode = 1; }
};

const UID = 'u1';

// The exact shape of the live Firestore doc that broke, per y8-15i-q1b.
const brokenTeacherReview = {
  id: 'y8-15i-q1b',
  type: 'teacher_review',
  question: 'Find the perimeter and area of the rectilinear figure...',
  options: [],
  requiresManualGrading: false,
  answer: '### Step 1: Perimeter\n...',
  graphData: { geometry: { width: 250, points: {}, segments: [] } },
};

console.log('\nSecret Note ungradable-question admission\n');

check('canGrade rejects teacher_review even with requiresManualGrading:false + options:[]', () => {
  assert.equal(canGrade(brokenTeacherReview), false);
});

check('canGrade still rejects a plain empty-options non-MC type generally', () => {
  assert.equal(canGrade({ type: 'short_answer_but_weird', options: [] }), false);
});

check('canGrade accepts a real multiple_choice with options', () => {
  assert.equal(canGrade({ type: 'multiple_choice', options: ['1', '2', '3', '4'] }), true);
});

check('canGrade accepts a plain short_answer question (no options array at all)', () => {
  assert.equal(canGrade({ type: 'short_answer', answer: '42' }), true);
});

check('canGrade still rejects graph_sketch (unchanged prior behaviour)', () => {
  assert.equal(canGrade({ type: 'graph_sketch', options: [] }), false);
});

check('addMistakes never saves the broken teacher_review question', () => {
  const added = addMistakes('daily', UID, [brokenTeacherReview]);
  assert.equal(added, 0, 'addMistakes should have filtered it out via canGrade');
  assert.equal(getNoteCount('daily', UID), 0);
});

check('pruneUngradable self-heals a note saved before the fix (simulated pre-fix write)', () => {
  // Simulate the OLD behaviour: write directly to storage bypassing the
  // (now-fixed) canGrade gate, as if this note was saved before the deploy.
  const KEY = 'sapere_secret_note_daily_u1';
  localStorage.setItem(KEY, JSON.stringify([
    { question: brokenTeacherReview, addedAt: Date.now(), stage: 0, nextReviewAt: Date.now(), correctStreak: 0 },
    { question: { id: 'ok-1', type: 'short_answer', answer: '5' }, addedAt: Date.now(), stage: 0, nextReviewAt: Date.now(), correctStreak: 0 },
  ]));
  assert.equal(getNoteCount('daily', UID), 2, 'both notes present before prune');

  const removed = pruneUngradable(UID);
  assert.equal(removed, 1, 'exactly the broken note should be removed');
  assert.equal(getNoteCount('daily', UID), 1, 'the gradable note survives');
  assert.equal(getNote('daily', UID)[0].question.id, 'ok-1');
});

check('pruneUngradable sweeps daily, calc, and exam_prep notebooks', () => {
  for (const kind of ['daily', 'calc', 'exam_prep']) {
    localStorage.setItem(`sapere_secret_note_${kind}_${UID}`, JSON.stringify([
      { question: brokenTeacherReview, addedAt: Date.now(), stage: 0, nextReviewAt: Date.now(), correctStreak: 0 },
    ]));
  }
  const removed = pruneUngradable(UID);
  assert.equal(removed, 3);
  assert.equal(getNoteCount('daily', UID), 0);
  assert.equal(getNoteCount('calc', UID), 0);
  assert.equal(getNoteCount('exam_prep', UID), 0);
});

check('pruneUngradable is a no-op (0 removed) when nothing is broken', () => {
  addMistakes('daily', UID, [{ id: 'fine-1', type: 'short_answer', answer: '9' }]);
  assert.equal(getNoteCount('daily', UID), 1);
  assert.equal(pruneUngradable(UID), 0);
  assert.equal(getNoteCount('daily', UID), 1);
});

console.log(`\n${passed} checks passed.\n`);
