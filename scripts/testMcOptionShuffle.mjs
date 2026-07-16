/**
 * Regression tests: MC shuffle must never mark two different options correct.
 *
 *   node scripts/testMcOptionShuffle.mjs
 */
import assert from 'node:assert/strict';
import {
  prepareShuffledMcOptions,
  isDisplayedOptionCorrect,
  gradeMcSelection,
  countMarkedCorrect,
  resolveCorrectOptionText,
  isOptionIndexAnswer,
  permutation,
} from '../src/utils/mcOptionShuffle.js';

let passed = 0;
function check(name, fn) {
  try {
    fn();
    passed += 1;
    console.log('  ok', name);
  } catch (e) {
    console.error('  FAIL', name);
    console.error('   ', e.message);
    process.exitCode = 1;
  }
}

console.log('mcOptionShuffle regressions\n');

// ── index answer + reverse shuffle (the Wonmin / dual-green bug) ──
check('index answer "0" + reverse: exactly one correct highlight', () => {
  const q = {
    type: 'multiple_choice',
    answer: '0',
    options: [
      '\\(10^{12}\\text{ L}\\)',
      '\\(10^{11}\\text{ L}\\)',
      '\\(10^{13}\\text{ L}\\)',
      '\\(10^{10}\\text{ L}\\)',
    ],
  };
  const order = [3, 2, 1, 0]; // reverse
  const display = prepareShuffledMcOptions(q, { order });
  assert.equal(q._shuffledAnswerIndex, 3);
  assert.equal(countMarkedCorrect(q, display), 1);
  assert.equal(isDisplayedOptionCorrect(q, display, 3), true);
  assert.equal(isDisplayedOptionCorrect(q, display, 0), false);
  // Old bug: rawIdx 0 would mark display[0] green too
  assert.ok(!isDisplayedOptionCorrect(q, display, 0));
});

check('index answer "1" + reverse: highlight follows the option text', () => {
  const q = {
    type: 'multiple_choice',
    isManual: true,
    answer: '1',
    options: ['a', 'b', 'c', 'd'],
  };
  const display = prepareShuffledMcOptions(q, { order: [3, 2, 1, 0] });
  // original index 1 ("b") → after reverse is at index 2
  assert.equal(q._shuffledAnswerIndex, 2);
  assert.equal(countMarkedCorrect(q, display), 1);
  assert.equal(isDisplayedOptionCorrect(q, display, 2), true);
  assert.ok(gradeMcSelection(q, 'b', 2, display));
  assert.ok(!gradeMcSelection(q, 'a', 0, display));
  // Stale pre-shuffle index must NOT grade as correct
  assert.ok(!gradeMcSelection(q, 'a', 1, display));
});

check('calc answer "1" as real value is not treated as index', () => {
  const opts = ['0', '1', '2', '3'];
  assert.equal(isOptionIndexAnswer('1', opts), false);
  const q = { type: 'multiple_choice', answer: '1', options: opts };
  const display = prepareShuffledMcOptions(q, { order: [0, 1, 2, 3] });
  assert.equal(resolveCorrectOptionText(q, opts), '1');
  assert.equal(countMarkedCorrect(q, display), 1);
  assert.equal(isDisplayedOptionCorrect(q, display, 1), true);
});

check('text answer survives shuffle', () => {
  const q = {
    type: 'multiple_choice',
    answer: '\\(y\\)',
    options: ['\\(15y\\)', '\\(y\\)', '\\(-y\\)', '\\(225y\\)'],
  };
  // custom order: put correct first
  const display = prepareShuffledMcOptions(q, { order: [1, 0, 2, 3] });
  assert.equal(q._shuffledAnswerIndex, 0);
  assert.equal(countMarkedCorrect(q, display), 1);
  assert.ok(gradeMcSelection(q, '\\(y\\)', 0, display));
});

check('many random shuffles: never more than one mark when options unique', () => {
  const baseOpts = ['A-only', 'B-only', 'C-only', 'D-only'];
  for (let seed = 0; seed < 40; seed++) {
    let s = seed + 1;
    const rng = () => {
      // simple LCG
      s = (s * 1664525 + 1013904223) >>> 0;
      return s / 0x100000000;
    };
    for (const ans of ['0', '1', '2', '3']) {
      const q = { type: 'multiple_choice', answer: ans, options: [...baseOpts] };
      const display = prepareShuffledMcOptions(q, { rng });
      const n = countMarkedCorrect(q, display);
      assert.equal(
        n,
        1,
        `seed=${seed} ans=${ans} marked ${n}; order display=${JSON.stringify(display)} idx=${q._shuffledAnswerIndex}`,
      );
    }
  }
});

check('permutation length and uniqueness', () => {
  const p = permutation(5, () => 0.5);
  assert.equal(p.length, 5);
  assert.equal(new Set(p).size, 5);
});

if (process.exitCode) {
  console.error('\nSome tests failed.');
} else {
  console.log(`\nAll ${passed} checks passed.`);
}
