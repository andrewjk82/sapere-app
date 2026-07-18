/**
 * chapterSeeder sub-question isManual regression.
 *
 * chapterSeeder.js must stamp `isManual: true` on every mapped MC
 * sub-question — without it, mcOptionShuffle's isOptionIndexAnswer() refuses
 * to trust a digit-shaped index answer whenever ANY option's own text also
 * reads as that digit, and the sub becomes silently ungradeable. Found via
 * audit:sub-mc-ambiguity: 33/332 real MC sub-questions across 22 parent docs
 * hit this (e.g. y12a-5c-q14d: correct option "(-1,-e^{-2})" at index 0,
 * while ANOTHER option in the same list literally reads "(0,0)" — colliding
 * with the digit "0").
 *
 * This script imports chapterSeeder's mapping indirectly is not possible
 * (it pulls in firebase/firestore), so it re-derives the exact sub-question
 * shape chapterSeeder produces from a raw seed-like input and checks the
 * shared resolver end-to-end — the same pattern testTeacherReviewSubQuestions.mjs
 * and testAnswerDisplays.mjs already use for chapterSeeder-adjacent logic.
 *
 * Usage: npm run test:chapter-seeder-sub-ismanual
 */
import assert from 'node:assert';
import { resolveCorrectOptionIndex, gradeMcSelection } from '../src/utils/mcOptionShuffle.js';

// Mirrors chapterSeeder.js's mappedSubQuestions mapping exactly (options +
// 0-based index answer + isManual: true).
const mapSubQuestionLikeSeeder = (sq) => {
  if (sq.type !== 'multiple_choice') {
    return { id: sq.id, type: sq.type, answer: sq.a ?? sq.answer, options: [], isManual: true };
  }
  const options = (sq.opts || []).map((o) => (typeof o === 'object' ? o : { text: String(o), imageUrl: '' }));
  return { id: sq.id, type: sq.type, options, answer: String(sq.a), isManual: true };
};

let passed = 0;
const check = (name, fn) => {
  try { fn(); console.log(`  ok ${name}`); passed += 1; }
  catch (e) { console.error(`  ✗ ${name}\n    ${e.message}`); process.exitCode = 1; }
};

console.log('\nchapterSeeder sub-question isManual regression\n');

check('the real y12a-5c-q14d collision (option text "(0,0)" vs digit "0") resolves correctly with isManual', () => {
  const raw = {
    id: 'y12a-5c-q14d',
    type: 'multiple_choice',
    a: 0,
    opts: ['\\((-1,-e^{-2})\\)', '\\((-\\dfrac{1}{2},-\\dfrac{1}{2e})\\)', '\\((0,0)\\)', '\\((1,e^{2})\\)'],
  };
  const sq = mapSubQuestionLikeSeeder(raw);
  assert.equal(sq.isManual, true);
  assert.equal(resolveCorrectOptionIndex(sq, sq.options), 0);
  assert.equal(gradeMcSelection(sq, sq.options[0].text, null, sq.options), true, 'correct pick must grade correct');
  assert.equal(gradeMcSelection(sq, sq.options[2].text, null, sq.options), false, '"(0,0)" itself must still grade wrong — collision must not make everything correct');
});

check('without isManual, the same collision silently fails (proves the flag is load-bearing, not incidental)', () => {
  const options = ['\\((-1,-e^{-2})\\)', '\\((-\\dfrac{1}{2},-\\dfrac{1}{2e})\\)', '\\((0,0)\\)', '\\((1,e^{2})\\)']
    .map((text) => ({ text, imageUrl: '' }));
  const sqNoFlag = { type: 'multiple_choice', answer: '0', options }; // isManual omitted
  assert.notEqual(resolveCorrectOptionIndex(sqNoFlag, options), 0, 'without isManual this must NOT resolve to the intended index');
});

check('a non-colliding MC sub still grades correctly with isManual (no regression on the common case)', () => {
  const raw = { id: 's1', type: 'multiple_choice', a: 1, opts: ['4', '3', '-2', '0'] };
  const sq = mapSubQuestionLikeSeeder(raw);
  assert.equal(resolveCorrectOptionIndex(sq, sq.options), 1);
  assert.equal(gradeMcSelection(sq, '3', null, sq.options), true);
  assert.equal(gradeMcSelection(sq, '4', null, sq.options), false);
});

check('a non-MC sub gets isManual too but is unaffected by index resolution (no options to resolve)', () => {
  const sq = mapSubQuestionLikeSeeder({ id: 's2', type: 'short_answer', a: '42' });
  assert.equal(sq.isManual, true);
  assert.equal(sq.options.length, 0);
});

console.log(`\n${passed} checks passed.\n`);
