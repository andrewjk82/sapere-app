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
import { answersMatch } from '../src/utils/answerMatching.js';

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

// ── duplicate / equivalent options: never punish the student for our typo ──
check('duplicate option texts: BOTH copies grade correct', () => {
  // Real data: seedYear10Ch1AHighQuestions y10-1a-high-q6 lists 255.00 twice.
  const q = { type: 'multiple_choice', answer: '255.00', options: ['240.00', '234.60', '255.00', '255.00'] };
  const display = prepareShuffledMcOptions(q, { order: [3, 2, 1, 0] });
  const copies = display.map((o, i) => (o === '255.00' ? i : -1)).filter((i) => i >= 0);
  assert.equal(copies.length, 2);
  for (const i of copies) {
    assert.equal(isDisplayedOptionCorrect(q, display, i), true, `copy ${i} not green`);
    assert.equal(gradeMcSelection(q, '255.00', i, display), true, `copy ${i} graded wrong`);
  }
  // …but the unrelated options stay wrong.
  const wrongIdx = display.indexOf('240.00');
  assert.equal(isDisplayedOptionCorrect(q, display, wrongIdx), false);
  assert.equal(gradeMcSelection(q, '240.00', wrongIdx, display), false);
});

check('equivalent forms ("0.5" vs "1/2"): both grade correct, others do not', () => {
  const q = { type: 'multiple_choice', answer: '1/2', options: ['0.5', '1/2', '2', '3'] };
  const display = prepareShuffledMcOptions(q, { order: [3, 2, 1, 0] });
  for (const text of ['0.5', '1/2']) {
    const i = display.indexOf(text);
    assert.equal(isDisplayedOptionCorrect(q, display, i), true, `${text} not green`);
    assert.equal(gradeMcSelection(q, text, i, display), true, `${text} graded wrong`);
  }
  const i3 = display.indexOf('3');
  assert.equal(isDisplayedOptionCorrect(q, display, i3), false);
});

// ── stale index applied to a list it wasn't computed for (restored draft) ──
check('shuffled index is ignored when displayed list is not the shuffled one', () => {
  const options = ['a', 'b', 'c', 'd'];
  const q = { type: 'multiple_choice', answer: '0', options };
  prepareShuffledMcOptions(q, { order: [3, 2, 1, 0] }); // correct 'a' → index 3
  // Fallback path renders the UNSHUFFLED list; index 3 ('d') is now meaningless.
  assert.equal(countMarkedCorrect(q, options), 1);
  assert.equal(isDisplayedOptionCorrect(q, options, 0), true); // 'a', by text
  assert.equal(isDisplayedOptionCorrect(q, options, 3), false);
  assert.equal(gradeMcSelection(q, 'd', 3, options), false);
  assert.equal(gradeMcSelection(q, 'a', 0, options), true);
});

// ── unanswerable data: show nothing green rather than guessing ──
check('answer absent from options marks nothing (no false green)', () => {
  for (const answer of ['z', '-1']) {
    const q = { type: 'multiple_choice', answer, options: ['a', 'b', 'c', 'd'] };
    const display = prepareShuffledMcOptions(q, { order: [3, 2, 1, 0] });
    assert.equal(countMarkedCorrect(q, display), 0, `answer=${answer}`);
  }
});

// ── core invariant: what is graded correct is exactly what lights up green ──
check('fuzz: grading always agrees with the green highlight', () => {
  const shapes = [
    { answer: '0', options: ['a', 'b', 'c', 'd'] },
    { answer: '2', options: ['a', 'b', 'c', 'd'], isManual: true },
    { answer: '1/2', options: ['0.5', '1/2', '2', '3'] },
    { answer: '3', options: ['1', '2', '3', '4'] },
    { answer: '4', options: ['4', '4', '5', '6'] },
    { answer: 'x=3', options: ['\\(x=2\\)', '\\(x=3\\)'] },
    { answer: '1', options: [{ text: '10' }, { text: '20' }, { text: '30' }] },
    { answer: 'z', options: ['a', 'b', 'c', 'd'] }, // unanswerable
  ];
  for (let seed = 0; seed < 200; seed++) {
    let s = seed + 1;
    const rng = () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 0x100000000; };
    for (const shape of shapes) {
      const q = { type: 'multiple_choice', ...shape, options: [...shape.options] };
      const display = prepareShuffledMcOptions(q, { rng });
      for (let i = 0; i < display.length; i++) {
        const opt = display[i];
        const text = typeof opt === 'string' ? opt : opt.text;
        const green = isDisplayedOptionCorrect(q, display, i);
        // The real anti-regression rule: an option may only be green when it
        // IS the answer. A stale index greening an unrelated option is the bug.
        if (green) {
          assert.ok(
            answersMatch(text, q._shuffledAnswer),
            `seed=${seed} i=${i} unrelated option green (${JSON.stringify(text)} vs ${JSON.stringify(q._shuffledAnswer)}): ${JSON.stringify(shape)}`,
          );
        }
        assert.equal(
          gradeMcSelection(q, text, i, display),
          green,
          `seed=${seed} i=${i} grade/highlight disagree: ${JSON.stringify(shape)}`,
        );
      }
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
