/**
 * Convert Year 11 Advanced Chapter 5E (Absolute Value) non-sketch questions
 * to 4-option multiple_choice with \(...\) LaTeX, shuffled answer indices,
 * and full solutionSteps. graph_sketch → teacher_review with LaTeX fix.
 *
 * Usage:
 *   node tools/scripts/convertY11A5EToMCQ.js --dry-run   # write seed only
 *   node tools/scripts/convertY11A5EToMCQ.js --seed-only
 *   node tools/scripts/convertY11A5EToMCQ.js --firestore # seed + Firestore upsert
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '../..');
const SEED_PATH = resolve(ROOT, 'src/constants/seedYear11Ch5Questions.js');

const args = new Set(process.argv.slice(2));
const DO_FIRESTORE = args.has('--firestore');
const SEED_ONLY = args.has('--seed-only') || args.has('--dry-run') || !DO_FIRESTORE;

// ── helpers ──────────────────────────────────────────────────────────────────

function step(explanation, workingOut, graphData = null) {
  return { explanation, workingOut, graphData };
}

/** Place correct answer at index aIdx among [correct, ...distractors] (len 3). */
function placeAnswer(correct, distractors, aIdx) {
  if (distractors.length !== 3) throw new Error('need exactly 3 distractors');
  const opts = [...distractors];
  opts.splice(aIdx, 0, correct);
  if (opts.length !== 4) throw new Error('opts must be 4');
  if (opts[aIdx] !== correct) throw new Error('aIdx mismatch');
  if (new Set(opts).size !== 4) throw new Error(`duplicate opts: ${JSON.stringify(opts)}`);
  return opts;
}

function latexDollarToParen(s) {
  if (typeof s !== 'string') return s;
  // Convert $...$ (non-greedy, no nested $) to \(...\)
  return s
    .replace(/\$\$([\s\S]*?)\$\$/g, '\\[$1\\]')
    .replace(/\$([^$]+)\$/g, '\\($1\\)');
}

function wrapBareWorking(s) {
  if (typeof s !== 'string' || s === '') return '\\(\\text{(see answer)}\\)';
  let t = latexDollarToParen(s.trim());
  // already has delimiters
  if (/\\\(|\\\[/.test(t)) {
    // balance check — if broken, wrap whole as text-safe math of raw
    const o = (t.match(/\\\(/g) || []).length;
    const c = (t.match(/\\\)/g) || []).length;
    if (o === c) return t;
    // strip all \( \) and re-wrap once
    t = t.replace(/\\\(|\\\)/g, '');
  }
  // escape stray braces only if needed — wrap entire expression once
  return `\\(${t}\\)`;
}

function latexParityOk(str) {
  if (typeof str !== 'string') return true;
  const o = (str.match(/\\\(/g) || []).length;
  const c = (str.match(/\\\)/g) || []).length;
  return o === c;
}

// Balanced a indices for 35 questions (counts ~9/9/9/8)
const A_SEQ = [
  2, 0, 3, 1, 1, 3, 0, 2, 3, 1,
  2, 0, 1, 2, 0, 3, 2, 1, 0, 3,
  1, 0, 2, 3, 0, 2, 1, 3, 1, 0,
  2, 3, 1, 2, 0,
];

// ── Converted MCQ payloads (35) ──────────────────────────────────────────────
// Each entry: { id, difficulty, t, q, correct, distractors, solutionSteps }
// a is applied from A_SEQ after placement.

const MCQ_SPECS = [
  // ── y11a-5-1a ── Evaluate |-6|
  {
    id: 'y11a-5-1a',
    difficulty: 'easy',
    t: 'Absolute Value',
    q: 'Evaluate: \\(|-6|\\)',
    correct: '\\(6\\)',
    distractors: ['\\(-6\\)', '\\(0\\)', '\\(1\\)'],
    solutionSteps: [
      step(
        'We are given a single absolute-value expression and asked to evaluate it to a number. Absolute value measures distance from zero on the number line, so the result is never negative. The strategy is to recognise that the input is already a negative constant and apply the definition of absolute value directly.',
        '\\(\\text{Given: } |-6|\\)'
      ),
      step(
        'By definition, for any real number a, |a| equals a when a is non-negative and equals -a when a is negative. Here a = -6 is negative, so we take the opposite of -6. A common mistake is to leave the answer as -6, forgetting that distance cannot be negative.',
        '\\(|-6| = -(-6) = 6\\)'
      ),
      step(
        'The value 6 is the distance from -6 to 0, which matches the definition. Checking: 6 is positive and |6| = 6, so the answer is consistent. Therefore the evaluation of the given expression is 6.',
        '\\(\\text{Final answer: } 6\\)'
      ),
    ],
  },
  // ── y11a-5-1b ── |4-11|
  {
    id: 'y11a-5-1b',
    difficulty: 'easy',
    t: 'Absolute Value',
    q: 'Evaluate: \\(|4 - 11|\\)',
    correct: '\\(7\\)',
    distractors: ['\\(-7\\)', '\\(15\\)', '\\(-15\\)'],
    solutionSteps: [
      step(
        'We must evaluate an absolute value of a difference. Order of operations requires simplifying inside the bars first, then applying absolute value. The plan is to compute 4 - 11, then take the non-negative magnitude of that result.',
        '\\(\\text{Given: } |4 - 11|\\)'
      ),
      step(
        'Subtract inside the absolute value: 4 - 11 = -7. Students often reverse the order and compute 11 - 4 = 7 too early; that happens to give the same magnitude here, but you must still show the intermediate negative value so the absolute-value step is clear.',
        '\\(4 - 11 = -7 \\;\\Rightarrow\\; |-7|\\)'
      ),
      step(
        'Apply the definition: |-7| = 7. The final result is positive 7, the distance between 4 and 11 on the number line. This confirms that absolute value of a difference equals the positive distance between the two numbers.',
        '\\(|-7| = 7\\)'
      ),
    ],
  },
  // ── y11a-5-1c ── |-3-(-8)|
  {
    id: 'y11a-5-1c',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Evaluate: \\(|-3 - (-8)|\\)',
    correct: '\\(5\\)',
    distractors: ['\\(-5\\)', '\\(11\\)', '\\(-11\\)'],
    solutionSteps: [
      step(
        'The expression nests a double negative inside absolute value. We first simplify the arithmetic inside the bars using the rule that subtracting a negative is addition, then take absolute value. Strategy: rewrite -3 - (-8), evaluate, then apply |·|.',
        '\\(\\text{Given: } |-3 - (-8)|\\)'
      ),
      step(
        'Subtracting a negative flips the sign: -3 - (-8) = -3 + 8 = 5. A frequent error is treating - (-8) as still negative, which yields -11 instead of 5. Double-check the double-negative before continuing.',
        '\\(-3 - (-8) = -3 + 8 = 5\\)'
      ),
      step(
        'Now |5| = 5 since 5 is already non-negative. The absolute value does not change a positive result. Final answer is 5, which is the distance from -3 to -8.',
        '\\(|5| = 5\\)'
      ),
    ],
  },
  // ── y11a-5-1d ── |-5|-|-7|
  {
    id: 'y11a-5-1d',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Evaluate: \\(|-5| - |-7|\\)',
    correct: '\\(-2\\)',
    distractors: ['\\(2\\)', '\\(12\\)', '\\(-12\\)'],
    solutionSteps: [
      step(
        'This is a difference of two absolute values, not the absolute value of a difference. Evaluate each absolute value separately first, then subtract. Strategy: compute |-5| and |-7|, then perform the outer subtraction.',
        '\\(\\text{Given: } |-5| - |-7|\\)'
      ),
      step(
        'Absolute value of each term: |-5| = 5 and |-7| = 7. A common mistake is to write | -5 - 7 | or |-5 - (-7)|, which are different expressions. Keep the two absolute values separate.',
        '\\(|-5| = 5,\\quad |-7| = 7\\)'
      ),
      step(
        'Subtract the results: 5 - 7 = -2. Note that the overall answer may be negative because subtraction is outside the absolute value bars. Check: 5 - 7 is indeed -2, so the final answer is -2.',
        '\\(5 - 7 = -2\\)'
      ),
    ],
  },
  // ── y11a-5-2a ── |4x|=24
  {
    id: 'y11a-5-2a',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|4x| = 24\\)',
    correct: '\\(x = 6\\) or \\(x = -6\\)',
    distractors: ['\\(x = 6\\) only', '\\(x = -6\\) only', 'No solution'],
    solutionSteps: [
      step(
        'We solve an absolute-value equation of the form |A| = k with k > 0. By definition this splits into two linear cases A = k or A = -k. Here A = 4x and k = 24, so both cases must be solved.',
        '\\(\\text{Given: } |4x| = 24,\\; 24 > 0\\)'
      ),
      step(
        'Write the two equations: 4x = 24 or 4x = -24. Students sometimes forget the negative case and report only x = 6. Both branches are required whenever the right-hand side is positive.',
        '\\(4x = 24 \\quad \\text{or} \\quad 4x = -24\\)'
      ),
      step(
        'Divide each equation by 4: x = 6 or x = -6. These are the only candidates so far; next we confirm both satisfy the original equation.',
        '\\(x = 6 \\quad \\text{or} \\quad x = -6\\)'
      ),
      step(
        'Check: |4(6)| = |24| = 24 and |4(-6)| = |-24| = 24. Both work, so the complete solution set is x = 6 or x = -6. Neither root is extraneous.',
        '\\(\\text{Solution: } x = 6 \\text{ or } x = -6\\)'
      ),
    ],
  },
  // ── y11a-5-2b ── |x-3|=7
  {
    id: 'y11a-5-2b',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|x - 3| = 7\\)',
    correct: '\\(x = 10\\) or \\(x = -4\\)',
    distractors: ['\\(x = 10\\) or \\(x = 4\\)', '\\(x = 4\\) or \\(x = -4\\)', 'No solution'],
    solutionSteps: [
      step(
        'The equation |x - 3| = 7 means the distance from x to 3 is 7. Algebraically we split into x - 3 = 7 or x - 3 = -7. Plan: solve both linear equations and verify.',
        '\\(\\text{Given: } |x - 3| = 7\\)'
      ),
      step(
        'Case 1: x - 3 = 7 gives x = 10. Case 2: x - 3 = -7 gives x = -4. A common sign error is writing x - 3 = -7 as x = 3 - 7 incorrectly as x = 4.',
        '\\(x - 3 = 7 \\;\\Rightarrow\\; x = 10\\)\\\\\n\\(x - 3 = -7 \\;\\Rightarrow\\; x = -4\\)'
      ),
      step(
        'Verify: |10 - 3| = 7 and |-4 - 3| = |-7| = 7. Both solutions are valid. The solution set is x = 10 or x = -4, which are the two points 7 units from 3 on the number line.',
        '\\(\\text{Solution: } x = 10 \\text{ or } x = -4\\)'
      ),
    ],
  },
  // ── y11a-5-2c ── |3x-2|=10
  {
    id: 'y11a-5-2c',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|3x - 2| = 10\\)',
    correct: '\\(x = 4\\) or \\(x = -\\frac{8}{3}\\)',
    distractors: [
      '\\(x = 4\\) or \\(x = \\frac{8}{3}\\)',
      '\\(x = -4\\) or \\(x = \\frac{8}{3}\\)',
      'No solution',
    ],
    solutionSteps: [
      step(
        'Solve |3x - 2| = 10 by splitting into two linear equations because the right-hand side is positive. Strategy: set 3x - 2 equal to 10 and to -10, then solve carefully for fractions.',
        '\\(\\text{Given: } |3x - 2| = 10\\)'
      ),
      step(
        'Positive case: 3x - 2 = 10, so 3x = 12 and x = 4. Keep arithmetic exact; do not skip the +2 step.',
        '\\(3x - 2 = 10 \\;\\Rightarrow\\; 3x = 12 \\;\\Rightarrow\\; x = 4\\)'
      ),
      step(
        'Negative case: 3x - 2 = -10, so 3x = -8 and x = -8/3. A frequent error is flipping only the 10 and forgetting to keep the -2, or writing x = 8/3 with the wrong sign.',
        '\\(3x - 2 = -10 \\;\\Rightarrow\\; 3x = -8 \\;\\Rightarrow\\; x = -\\frac{8}{3}\\)'
      ),
      step(
        'Check both: |3(4) - 2| = |10| = 10 and |3(-8/3) - 2| = |-8 - 2| = 10. Both satisfy the original equation. Final answer: x = 4 or x = -8/3.',
        '\\(\\text{Solution: } x = 4 \\text{ or } x = -\\frac{8}{3}\\)'
      ),
    ],
  },
  // ── y11a-5-2d ── |2x-5|=9
  {
    id: 'y11a-5-2d',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|2x - 5| = 9\\)',
    correct: '\\(x = 7\\) or \\(x = -2\\)',
    distractors: ['\\(x = 7\\) or \\(x = 2\\)', '\\(x = 2\\) or \\(x = -7\\)', 'No solution'],
    solutionSteps: [
      step(
        'Again we have |linear| = positive constant. Split into 2x - 5 = 9 and 2x - 5 = -9, solve each, and verify both roots.',
        '\\(\\text{Given: } |2x - 5| = 9\\)'
      ),
      step(
        'First case: 2x - 5 = 9 gives 2x = 14, so x = 7. Second case: 2x - 5 = -9 gives 2x = -4, so x = -2. Watch the sign when adding 5 to both sides of the second equation.',
        '\\(2x - 5 = 9 \\;\\Rightarrow\\; x = 7\\)\\\\\n\\(2x - 5 = -9 \\;\\Rightarrow\\; x = -2\\)'
      ),
      step(
        'Verification: |2(7) - 5| = |9| = 9 and |2(-2) - 5| = |-4 - 5| = 9. Both roots work. Solution: x = 7 or x = -2.',
        '\\(\\text{Solution: } x = 7 \\text{ or } x = -2\\)'
      ),
    ],
  },
  // ── y11a-5-10a ── |5x|=35
  {
    id: 'y11a-5-10a',
    difficulty: 'medium',
    t: 'Absolute Value Equations',
    q: 'Solve for \\(x\\): \\(|5x| = 35\\)',
    correct: '\\(x = 7\\) or \\(x = -7\\)',
    distractors: ['\\(x = 7\\) only', '\\(x = -7\\) only', 'No solution'],
    solutionSteps: [
      step(
        'Equation |5x| = 35 has a positive right-hand side, so two real solutions exist. Strategy: 5x = 35 or 5x = -35, then divide by 5.',
        '\\(\\text{Given: } |5x| = 35\\)'
      ),
      step(
        'Solve both branches: x = 7 and x = -7. Omitting the negative branch is a common incomplete-solution error on absolute-value equations.',
        '\\(5x = 35 \\;\\Rightarrow\\; x = 7\\)\\\\\n\\(5x = -35 \\;\\Rightarrow\\; x = -7\\)'
      ),
      step(
        'Check: |5(7)| = 35 and |5(-7)| = 35. Both valid. Complete solution: x = 7 or x = -7.',
        '\\(\\text{Solution: } x = 7 \\text{ or } x = -7\\)'
      ),
    ],
  },
  // ── y11a-5-10b ── |x+8|=-2  NO SOLUTION
  {
    id: 'y11a-5-10b',
    difficulty: 'medium',
    t: 'Absolute Value Equations',
    q: 'Solve for \\(x\\): \\(|x + 8| = -2\\)',
    correct: 'No solution',
    distractors: [
      '\\(x = -10\\) or \\(x = -6\\)',
      '\\(x = 10\\) or \\(x = 6\\)',
      '\\(x = -2\\) or \\(x = 2\\)',
    ],
    solutionSteps: [
      step(
        'Before splitting cases, check whether the right-hand side can equal an absolute value. Absolute value is always greater than or equal to zero for every real input. Here the right-hand side is -2, which is negative.',
        '\\(\\text{Given: } |x + 8| = -2\\)'
      ),
      step(
        'By definition |anything| ≥ 0, so |x + 8| ≥ 0 for all real x. It is impossible for a non-negative quantity to equal -2. A common mistake is still writing x + 8 = ±(-2) and producing fake solutions.',
        '\\(|x + 8| \\ge 0 \\quad \\text{for all real } x\\)'
      ),
      step(
        'Because the equation asks a non-negative expression to equal a negative number, there is no real x that works. The solution set is empty: no solution.',
        '\\(\\text{No real solution}\\)'
      ),
    ],
  },
  // ── y11a-5-10c ── |3x+4|=13
  {
    id: 'y11a-5-10c',
    difficulty: 'medium',
    t: 'Absolute Value Equations',
    q: 'Solve for \\(x\\): \\(|3x + 4| = 13\\)',
    correct: '\\(x = 3\\) or \\(x = -\\frac{17}{3}\\)',
    distractors: [
      '\\(x = 3\\) or \\(x = \\frac{17}{3}\\)',
      '\\(x = -3\\) or \\(x = \\frac{17}{3}\\)',
      'No solution',
    ],
    solutionSteps: [
      step(
        'Positive right-hand side: split into 3x + 4 = 13 and 3x + 4 = -13. Solve each linear equation carefully, especially the negative branch which yields a fraction.',
        '\\(\\text{Given: } |3x + 4| = 13\\)'
      ),
      step(
        'Positive case: 3x + 4 = 13 → 3x = 9 → x = 3.',
        '\\(3x + 4 = 13 \\;\\Rightarrow\\; 3x = 9 \\;\\Rightarrow\\; x = 3\\)'
      ),
      step(
        'Negative case: 3x + 4 = -13 → 3x = -17 → x = -17/3. Watch the sign of -17 when dividing by 3.',
        '\\(3x + 4 = -13 \\;\\Rightarrow\\; 3x = -17 \\;\\Rightarrow\\; x = -\\frac{17}{3}\\)'
      ),
      step(
        'Verify: |3(3)+4| = 13 and |3(-17/3)+4| = |-17+4| = 13. Both valid. Solution: x = 3 or x = -17/3.',
        '\\(\\text{Solution: } x = 3 \\text{ or } x = -\\frac{17}{3}\\)'
      ),
    ],
  },
  // ── y11a-5-10d ── |6x+3|=0
  {
    id: 'y11a-5-10d',
    difficulty: 'medium',
    t: 'Absolute Value Equations',
    q: 'Solve for \\(x\\): \\(|6x + 3| = 0\\)',
    correct: '\\(x = -\\frac{1}{2}\\)',
    distractors: ['\\(x = \\frac{1}{2}\\)', '\\(x = 0\\)', 'No solution'],
    solutionSteps: [
      step(
        'When |A| = 0, the only possibility is A = 0 (there is no separate ±0). Strategy: set the inside equal to zero and solve the resulting linear equation.',
        '\\(\\text{Given: } |6x + 3| = 0\\)'
      ),
      step(
        'Set 6x + 3 = 0. A common mistake is still writing two cases ±0 as if they were different, or concluding no solution because absolute value is usually positive.',
        '\\(6x + 3 = 0\\)'
      ),
      step(
        'Solve: 6x = -3 so x = -1/2. Check: |6(-1/2)+3| = |-3+3| = 0. Exactly one solution: x = -1/2.',
        '\\(6x = -3 \\;\\Rightarrow\\; x = -\\frac{1}{2}\\)'
      ),
    ],
  },
  // ── y11a-5E-new-1a ── |5|
  {
    id: 'y11a-5E-new-1a',
    difficulty: 'easy',
    t: 'Absolute Value',
    q: 'Evaluate \\(|5|\\)',
    correct: '\\(5\\)',
    distractors: ['\\(-5\\)', '\\(0\\)', '\\(\\frac{1}{5}\\)'],
    solutionSteps: [
      step(
        'Evaluate the absolute value of a positive constant. Absolute value returns distance from zero, which equals the number itself when the number is already non-negative.',
        '\\(\\text{Given: } |5|\\)'
      ),
      step(
        'Since 5 ≥ 0, |5| = 5 by definition. Do not change the sign of a positive input. The result is already the final answer.',
        '\\(|5| = 5\\)'
      ),
      step(
        'Interpretation: 5 is 5 units from 0 on the number line. Final answer is 5.',
        '\\(\\text{Final answer: } 5\\)'
      ),
    ],
  },
  // ── y11a-5E-new-1b ── |-6|
  {
    id: 'y11a-5E-new-1b',
    difficulty: 'easy',
    t: 'Absolute Value',
    q: 'Evaluate \\(|-6|\\)',
    correct: '\\(6\\)',
    distractors: ['\\(-6\\)', '\\(0\\)', '\\(\\frac{1}{6}\\)'],
    solutionSteps: [
      step(
        'Evaluate absolute value of a negative constant. Use the definition: if a < 0 then |a| = -a.',
        '\\(\\text{Given: } |-6|\\)'
      ),
      step(
        'Because -6 is negative, |-6| = -(-6) = 6. Leaving the answer as -6 is the classic mistake of confusing absolute value with the number itself.',
        '\\(|-6| = 6\\)'
      ),
      step(
        'The distance from -6 to 0 is 6 units. Final answer is 6.',
        '\\(\\text{Final answer: } 6\\)'
      ),
    ],
  },
  // ── y11a-5E-new-1c ── |3-8|
  {
    id: 'y11a-5E-new-1c',
    difficulty: 'easy',
    t: 'Absolute Value',
    q: 'Evaluate \\(|3 - 8|\\)',
    correct: '\\(5\\)',
    distractors: ['\\(-5\\)', '\\(11\\)', '\\(-11\\)'],
    solutionSteps: [
      step(
        'Simplify inside the bars first, then apply absolute value. Plan: compute 3 - 8, then take |·|.',
        '\\(\\text{Given: } |3 - 8|\\)'
      ),
      step(
        '3 - 8 = -5, so we need |-5|. Do not stop at -5; the absolute value still remains to be applied.',
        '\\(3 - 8 = -5\\)'
      ),
      step(
        '|-5| = 5. Final answer is 5, the distance between 3 and 8.',
        '\\(|-5| = 5\\)'
      ),
    ],
  },
  // ── y11a-5E-new-1d ── |8-3|
  {
    id: 'y11a-5E-new-1d',
    difficulty: 'easy',
    t: 'Absolute Value',
    q: 'Evaluate \\(|8 - 3|\\)',
    correct: '\\(5\\)',
    distractors: ['\\(-5\\)', '\\(11\\)', '\\(-11\\)'],
    solutionSteps: [
      step(
        'Evaluate |8 - 3| by simplifying inside first. This contrasts with |3 - 8| and shows absolute value of a difference is order-independent in magnitude.',
        '\\(\\text{Given: } |8 - 3|\\)'
      ),
      step(
        '8 - 3 = 5, which is already positive.',
        '\\(8 - 3 = 5\\)'
      ),
      step(
        '|5| = 5. Same magnitude as |3 - 8|, as expected for distance. Final answer is 5.',
        '\\(|5| = 5\\)'
      ),
    ],
  },
  // ── y11a-5E-new-1e ── |15-7-14|
  {
    id: 'y11a-5E-new-1e',
    difficulty: 'easy',
    t: 'Absolute Value',
    q: 'Evaluate \\(|15 - 7 - 14|\\)',
    correct: '\\(6\\)',
    distractors: ['\\(-6\\)', '\\(22\\)', '\\(-22\\)'],
    solutionSteps: [
      step(
        'Simplify the multi-term expression inside the absolute value left to right, then apply |·|. Strategy: 15 - 7 first, then subtract 14.',
        '\\(\\text{Given: } |15 - 7 - 14|\\)'
      ),
      step(
        '15 - 7 = 8, then 8 - 14 = -6. A common error is 15 - 7 - 14 = 15 - (7 - 14) = 22 by wrongly grouping.',
        '\\(15 - 7 - 14 = 8 - 14 = -6\\)'
      ),
      step(
        '|-6| = 6. Final answer is 6.',
        '\\(|-6| = 6\\)'
      ),
    ],
  },
  // ── y11a-5E-new-1f ── |-9+5|
  {
    id: 'y11a-5E-new-1f',
    difficulty: 'easy',
    t: 'Absolute Value',
    q: 'Evaluate \\(|-9 + 5|\\)',
    correct: '\\(4\\)',
    distractors: ['\\(-4\\)', '\\(14\\)', '\\(-14\\)'],
    solutionSteps: [
      step(
        'Add inside the absolute value first: -9 + 5, then take absolute value of the sum.',
        '\\(\\text{Given: } |-9 + 5|\\)'
      ),
      step(
        '-9 + 5 = -4. Avoid computing | -9 | + |5| = 14, which is a different expression.',
        '\\(-9 + 5 = -4\\)'
      ),
      step(
        '|-4| = 4. Final answer is 4.',
        '\\(|-4| = 4\\)'
      ),
    ],
  },
  // ── y11a-5E-new-1g ── |4^2 - 6^2|
  {
    id: 'y11a-5E-new-1g',
    difficulty: 'easy',
    t: 'Absolute Value',
    q: 'Evaluate \\(|4^2 - 6^2|\\)',
    correct: '\\(20\\)',
    distractors: ['\\(-20\\)', '\\(52\\)', '\\(4\\)'],
    solutionSteps: [
      step(
        'Powers come before subtraction. Evaluate 4² and 6² first, subtract, then apply absolute value. Strategy follows standard order of operations.',
        '\\(\\text{Given: } |4^2 - 6^2|\\)'
      ),
      step(
        '4² = 16 and 6² = 36, so 16 - 36 = -20. A common error is writing (4-6)² = 4 or |4|² - |6|² incorrectly.',
        '\\(4^2 = 16,\\; 6^2 = 36 \\;\\Rightarrow\\; 16 - 36 = -20\\)'
      ),
      step(
        '|-20| = 20. Note this also equals |4² - 6²| = |-(6² - 4²)| = 6² - 4² by difference of squares magnitude. Final answer is 20.',
        '\\(|-20| = 20\\)'
      ),
    ],
  },
  // ── y11a-5E-new-1h ── |14-18|-7
  {
    id: 'y11a-5E-new-1h',
    difficulty: 'easy',
    t: 'Absolute Value',
    q: 'Evaluate \\(|14 - 18| - 7\\)',
    correct: '\\(-3\\)',
    distractors: ['\\(3\\)', '\\(11\\)', '\\(-11\\)'],
    solutionSteps: [
      step(
        'Absolute value is applied only to 14 - 18; the -7 is outside the bars. Evaluate |14 - 18| first, then subtract 7.',
        '\\(\\text{Given: } |14 - 18| - 7\\)'
      ),
      step(
        '14 - 18 = -4, so |-4| = 4. Do not write |14 - 18 - 7|, which would be a different problem.',
        '\\(|14 - 18| = |-4| = 4\\)'
      ),
      step(
        'Now 4 - 7 = -3. The overall result can be negative because subtraction is outside absolute value. Final answer is -3.',
        '\\(4 - 7 = -3\\)'
      ),
    ],
  },
  // ── y11a-5E-new-8a ── |5x|=30
  {
    id: 'y11a-5E-new-8a',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|5x| = 30\\)',
    correct: '\\(x = 6\\) or \\(x = -6\\)',
    distractors: ['\\(x = 6\\) only', '\\(x = -6\\) only', 'No solution'],
    solutionSteps: [
      step(
        'Solve |5x| = 30 by writing 5x = 30 or 5x = -30. Both cases apply because 30 > 0.',
        '\\(\\text{Given: } |5x| = 30\\)'
      ),
      step(
        'x = 6 from the positive case and x = -6 from the negative case. Include both.',
        '\\(5x = \\pm 30 \\;\\Rightarrow\\; x = \\pm 6\\)'
      ),
      step(
        'Check: |5(6)| = 30 and |5(-6)| = 30. Solution: x = 6 or x = -6.',
        '\\(\\text{Solution: } x = 6 \\text{ or } x = -6\\)'
      ),
    ],
  },
  // ── y11a-5E-new-8b ── |3x+1|=7
  {
    id: 'y11a-5E-new-8b',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|3x + 1| = 7\\)',
    correct: '\\(x = 2\\) or \\(x = -\\frac{8}{3}\\)',
    distractors: [
      '\\(x = 2\\) or \\(x = -2\\)',
      '\\(x = \\frac{8}{3}\\) or \\(x = -2\\)',
      'No solution',
    ],
    solutionSteps: [
      step(
        'Split |3x + 1| = 7 into 3x + 1 = 7 and 3x + 1 = -7. Solve each linear equation exactly.',
        '\\(\\text{Given: } |3x + 1| = 7\\)'
      ),
      step(
        'Positive case: 3x + 1 = 7 → 3x = 6 → x = 2.',
        '\\(3x + 1 = 7 \\;\\Rightarrow\\; x = 2\\)'
      ),
      step(
        'Negative case: 3x + 1 = -7 → 3x = -8 → x = -8/3. Avoid writing -8/3 as -2 by incorrectly dividing only part of the expression.',
        '\\(3x + 1 = -7 \\;\\Rightarrow\\; x = -\\frac{8}{3}\\)'
      ),
      step(
        'Check: |3(2)+1| = 7 and |3(-8/3)+1| = |-8+1| = 7. Solution: x = 2 or x = -8/3.',
        '\\(\\text{Solution: } x = 2 \\text{ or } x = -\\frac{8}{3}\\)'
      ),
    ],
  },
  // ── y11a-5E-new-8c ── |2x-3|=11
  {
    id: 'y11a-5E-new-8c',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|2x - 3| = 11\\)',
    correct: '\\(x = 7\\) or \\(x = -4\\)',
    distractors: ['\\(x = -7\\) or \\(x = 4\\)', '\\(x = 7\\) only', 'No solution'],
    solutionSteps: [
      step(
        'Split into 2x - 3 = 11 and 2x - 3 = -11. Solve both and verify.',
        '\\(\\text{Given: } |2x - 3| = 11\\)'
      ),
      step(
        '2x - 3 = 11 → 2x = 14 → x = 7. 2x - 3 = -11 → 2x = -8 → x = -4.',
        '\\(x = 7 \\quad \\text{or} \\quad x = -4\\)'
      ),
      step(
        'Check: |2(7)-3| = 11 and |2(-4)-3| = |-8-3| = 11. Solution: x = 7 or x = -4.',
        '\\(\\text{Solution: } x = 7 \\text{ or } x = -4\\)'
      ),
    ],
  },
  // ── y11a-5E-new-8d ── |7x-3|=-11 NO SOLUTION
  {
    id: 'y11a-5E-new-8d',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|7x - 3| = -11\\)',
    correct: 'No solution',
    distractors: [
      '\\(x = -\\frac{8}{7}\\) or \\(x = 2\\)',
      '\\(x = \\frac{8}{7}\\) or \\(x = -2\\)',
      '\\(x = 0\\)',
    ],
    solutionSteps: [
      step(
        'Inspect the right-hand side before solving. Absolute value is never negative, so if the constant on the right is negative the equation has no real solution.',
        '\\(\\text{Given: } |7x - 3| = -11\\)'
      ),
      step(
        'For every real x, |7x - 3| ≥ 0. It cannot equal -11. Generating solutions from 7x - 3 = ±(-11) is invalid because the original equation is already impossible.',
        '\\(|7x - 3| \\ge 0 \\neq -11\\)'
      ),
      step(
        'Conclusion: empty solution set. Final answer: no solution.',
        '\\(\\text{No real solution}\\)'
      ),
    ],
  },
  // ── y11a-5E-new-8e ── |3x+2|=-8 NO SOLUTION
  {
    id: 'y11a-5E-new-8e',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|3x + 2| = -8\\)',
    correct: 'No solution',
    distractors: [
      '\\(x = 2\\) or \\(x = -\\frac{10}{3}\\)',
      '\\(x = -2\\) or \\(x = \\frac{10}{3}\\)',
      '\\(x = 0\\)',
    ],
    solutionSteps: [
      step(
        'Again the right-hand side is negative. Absolute value cannot equal a negative number, so stop before inventing spurious roots.',
        '\\(\\text{Given: } |3x + 2| = -8\\)'
      ),
      step(
        '|3x + 2| ≥ 0 for all real x, so it is never equal to -8. Solving 3x + 2 = ±8 would answer a different (possible) equation.',
        '\\(|3x + 2| \\ge 0 \\neq -8\\)'
      ),
      step(
        'No real x satisfies the equation. Final answer: no solution.',
        '\\(\\text{No real solution}\\)'
      ),
    ],
  },
  // ── y11a-5E-new-8f ── |5x+2|=0
  {
    id: 'y11a-5E-new-8f',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|5x + 2| = 0\\)',
    correct: '\\(x = -\\frac{2}{5}\\)',
    distractors: ['\\(x = \\frac{2}{5}\\)', '\\(x = 0\\)', 'No solution'],
    solutionSteps: [
      step(
        'Absolute value equals zero only when the inside is zero. Set 5x + 2 = 0 and solve once.',
        '\\(\\text{Given: } |5x + 2| = 0\\)'
      ),
      step(
        '5x + 2 = 0 → 5x = -2 → x = -2/5. Sign error often produces +2/5.',
        '\\(5x + 2 = 0 \\;\\Rightarrow\\; x = -\\frac{2}{5}\\)'
      ),
      step(
        'Check: |5(-2/5)+2| = |-2+2| = 0. Unique solution x = -2/5.',
        '\\(\\text{Solution: } x = -\\frac{2}{5}\\)'
      ),
    ],
  },
  // ── y11a-5E-new-8g ── |3x-5|=0
  {
    id: 'y11a-5E-new-8g',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|3x - 5| = 0\\)',
    correct: '\\(x = \\frac{5}{3}\\)',
    distractors: ['\\(x = -\\frac{5}{3}\\)', '\\(x = 0\\)', 'No solution'],
    solutionSteps: [
      step(
        'Set the inside equal to zero: 3x - 5 = 0. Only one case because ±0 is the same number.',
        '\\(\\text{Given: } |3x - 5| = 0\\)'
      ),
      step(
        '3x = 5 → x = 5/3. Avoid the sign flip that yields -5/3.',
        '\\(3x - 5 = 0 \\;\\Rightarrow\\; x = \\frac{5}{3}\\)'
      ),
      step(
        'Check: |3(5/3)-5| = |5-5| = 0. Solution: x = 5/3.',
        '\\(\\text{Solution: } x = \\frac{5}{3}\\)'
      ),
    ],
  },
  // ── y11a-5E-new-8h ── |6x-7|=5
  {
    id: 'y11a-5E-new-8h',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|6x - 7| = 5\\)',
    correct: '\\(x = 2\\) or \\(x = \\frac{1}{3}\\)',
    distractors: [
      '\\(x = 2\\) or \\(x = -\\frac{1}{3}\\)',
      '\\(x = -2\\) or \\(x = \\frac{1}{3}\\)',
      'No solution',
    ],
    solutionSteps: [
      step(
        'Split |6x - 7| = 5 into 6x - 7 = 5 and 6x - 7 = -5. Both sides of the split are valid linear equations.',
        '\\(\\text{Given: } |6x - 7| = 5\\)'
      ),
      step(
        'Positive case: 6x - 7 = 5 → 6x = 12 → x = 2.',
        '\\(6x - 7 = 5 \\;\\Rightarrow\\; x = 2\\)'
      ),
      step(
        'Negative case: 6x - 7 = -5 → 6x = 2 → x = 1/3. A sign error on the right often produces x = -1/3.',
        '\\(6x - 7 = -5 \\;\\Rightarrow\\; x = \\frac{1}{3}\\)'
      ),
      step(
        'Check: |6(2)-7| = 5 and |6(1/3)-7| = |2-7| = 5. Solution: x = 2 or x = 1/3.',
        '\\(\\text{Solution: } x = 2 \\text{ or } x = \\frac{1}{3}\\)'
      ),
    ],
  },
  // ── y11a-5E-new-8i ── |5x+4|=6
  {
    id: 'y11a-5E-new-8i',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve for \\(x\\): \\(|5x + 4| = 6\\)',
    correct: '\\(x = \\frac{2}{5}\\) or \\(x = -2\\)',
    distractors: [
      '\\(x = -\\frac{2}{5}\\) or \\(x = 2\\)',
      '\\(x = 2\\) or \\(x = -2\\)',
      'No solution',
    ],
    solutionSteps: [
      step(
        'Split into 5x + 4 = 6 and 5x + 4 = -6. Solve each carefully.',
        '\\(\\text{Given: } |5x + 4| = 6\\)'
      ),
      step(
        '5x + 4 = 6 → 5x = 2 → x = 2/5.',
        '\\(5x + 4 = 6 \\;\\Rightarrow\\; x = \\frac{2}{5}\\)'
      ),
      step(
        '5x + 4 = -6 → 5x = -10 → x = -2. Swapping signs of both solutions is a common distractor pattern.',
        '\\(5x + 4 = -6 \\;\\Rightarrow\\; x = -2\\)'
      ),
      step(
        'Check: |5(2/5)+4| = |2+4| = 6 and |5(-2)+4| = |-10+4| = 6. Solution: x = 2/5 or x = -2.',
        '\\(\\text{Solution: } x = \\frac{2}{5} \\text{ or } x = -2\\)'
      ),
    ],
  },
  // ── y11a-5E-new-9a-i ── conceptual |2-3x|=|3x-2|
  {
    id: 'y11a-5E-new-9a-i',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Why does the equation \\(|2 - 3x| = 5\\) have the same solutions as \\(|3x - 2| = 5\\)?',
    correct: 'Because \\(|a| = |-a|\\) for all real \\(a\\).',
    distractors: [
      'Because 5 is a positive number.',
      'Because absolute value makes every expression positive for all x.',
      'Because \\(2 - 3x = 3x - 2\\) for all x.',
    ],
    solutionSteps: [
      step(
        'We compare two absolute-value equations that look different inside the bars. The key property is |a| = |-a| for every real a. Strategy: rewrite 2 - 3x as the opposite of 3x - 2.',
        '\\(\\text{Compare } |2 - 3x| = 5 \\text{ and } |3x - 2| = 5\\)'
      ),
      step(
        'Note that 2 - 3x = -(3x - 2). Taking absolute values: |2 - 3x| = |-(3x - 2)| = |3x - 2| by the property | -a | = |a|. A common misconception is that 2 - 3x always equals 3x - 2 (false unless x = 2/3).',
        '\\(|2 - 3x| = |-(3x - 2)| = |3x - 2|\\)'
      ),
      step(
        'Therefore the left-hand sides are identical for every x, so the two equations have exactly the same solution sets. The correct reason is the property |a| = |-a|.',
        '\\(\\text{Same equation for all } x\\)'
      ),
    ],
  },
  // ── y11a-5E-new-9a-ii ── solve |2-3x|=5
  {
    id: 'y11a-5E-new-9a-ii',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve the equation \\(|2 - 3x| = 5\\).',
    correct: '\\(x = -1\\) or \\(x = \\frac{7}{3}\\)',
    distractors: [
      '\\(x = 1\\) or \\(x = -\\frac{7}{3}\\)',
      '\\(x = -1\\) or \\(x = \\frac{3}{7}\\)',
      'No solution',
    ],
    solutionSteps: [
      step(
        'Using |2 - 3x| = |3x - 2|, solve |3x - 2| = 5 by splitting into two linear cases. This often makes the algebra cleaner than working with 2 - 3x directly.',
        '\\(\\text{Given: } |2 - 3x| = 5 \\equiv |3x - 2| = 5\\)'
      ),
      step(
        'Case 1: 3x - 2 = 5 → 3x = 7 → x = 7/3.',
        '\\(3x - 2 = 5 \\;\\Rightarrow\\; x = \\frac{7}{3}\\)'
      ),
      step(
        'Case 2: 3x - 2 = -5 → 3x = -3 → x = -1.',
        '\\(3x - 2 = -5 \\;\\Rightarrow\\; x = -1\\)'
      ),
      step(
        'Check in the original: |2 - 3(7/3)| = |2 - 7| = 5 and |2 - 3(-1)| = |2 + 3| = 5. Solution: x = -1 or x = 7/3.',
        '\\(\\text{Solution: } x = -1 \\text{ or } x = \\frac{7}{3}\\)'
      ),
    ],
  },
  // ── y11a-5E-new-9b-i ── |4-5x|=6
  {
    id: 'y11a-5E-new-9b-i',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve the equation \\(|4 - 5x| = 6\\).',
    correct: '\\(x = -\\frac{2}{5}\\) or \\(x = 2\\)',
    distractors: [
      '\\(x = \\frac{2}{5}\\) or \\(x = -2\\)',
      '\\(x = 2\\) or \\(x = -2\\)',
      'No solution',
    ],
    solutionSteps: [
      step(
        'Equivalently solve |5x - 4| = 6. Split into 5x - 4 = 6 and 5x - 4 = -6.',
        '\\(\\text{Given: } |4 - 5x| = 6 \\equiv |5x - 4| = 6\\)'
      ),
      step(
        '5x - 4 = 6 → 5x = 10 → x = 2.',
        '\\(5x - 4 = 6 \\;\\Rightarrow\\; x = 2\\)'
      ),
      step(
        '5x - 4 = -6 → 5x = -2 → x = -2/5.',
        '\\(5x - 4 = -6 \\;\\Rightarrow\\; x = -\\frac{2}{5}\\)'
      ),
      step(
        'Check: |4 - 5(2)| = |4 - 10| = 6 and |4 - 5(-2/5)| = |4 + 2| = 6. Solution: x = -2/5 or x = 2.',
        '\\(\\text{Solution: } x = -\\frac{2}{5} \\text{ or } x = 2\\)'
      ),
    ],
  },
  // ── y11a-5E-new-9b-ii ── |2-7x|=5
  {
    id: 'y11a-5E-new-9b-ii',
    difficulty: 'medium',
    t: 'Absolute Value',
    q: 'Solve the equation \\(|2 - 7x| = 5\\).',
    correct: '\\(x = -\\frac{3}{7}\\) or \\(x = 1\\)',
    distractors: [
      '\\(x = \\frac{3}{7}\\) or \\(x = -1\\)',
      '\\(x = 1\\) or \\(x = -1\\)',
      'No solution',
    ],
    solutionSteps: [
      step(
        'Use |2 - 7x| = |7x - 2| = 5. Split into 7x - 2 = 5 and 7x - 2 = -5.',
        '\\(\\text{Given: } |2 - 7x| = 5\\)'
      ),
      step(
        '7x - 2 = 5 → 7x = 7 → x = 1.',
        '\\(7x - 2 = 5 \\;\\Rightarrow\\; x = 1\\)'
      ),
      step(
        '7x - 2 = -5 → 7x = -3 → x = -3/7.',
        '\\(7x - 2 = -5 \\;\\Rightarrow\\; x = -\\frac{3}{7}\\)'
      ),
      step(
        'Check: |2 - 7(1)| = 5 and |2 - 7(-3/7)| = |2 + 3| = 5. Solution: x = -3/7 or x = 1.',
        '\\(\\text{Solution: } x = -\\frac{3}{7} \\text{ or } x = 1\\)'
      ),
    ],
  },
  // ── y11a-5E-new-17a ── undefined of |x|/x
  {
    id: 'y11a-5E-new-17a',
    difficulty: 'hard',
    t: 'Absolute Value',
    q: 'For what values of \\(x\\) is \\(y = \\frac{|x|}{x}\\) undefined?',
    correct: '\\(x = 0\\)',
    distractors: [
      '\\(x < 0\\)',
      '\\(x > 0\\)',
      'It is defined for all real \\(x\\).',
    ],
    solutionSteps: [
      step(
        'A rational expression is undefined when its denominator is zero (and the numerator is defined). Here the denominator is simply x, while |x| is defined for all real x.',
        '\\(\\text{Given: } y = \\frac{|x|}{x}\\)'
      ),
      step(
        'Set the denominator equal to zero: x = 0. At x = 0 the fraction has the form |0|/0 = 0/0, which is undefined. For x ≠ 0 the expression is defined.',
        '\\(x = 0 \\;\\Rightarrow\\; \\text{denominator is zero}\\)'
      ),
      step(
        'Therefore y is undefined only at x = 0. It is defined for all other real x (and equals 1 for x > 0, -1 for x < 0). Final answer: x = 0.',
        '\\(\\text{Undefined at } x = 0\\)'
      ),
    ],
  },
  // ── y11a-5E-new-17c ── two branches of |x|/x
  {
    id: 'y11a-5E-new-17c',
    difficulty: 'hard',
    t: 'Absolute Value',
    q: 'Hence, write down the equations of the two branches of \\(y = \\frac{|x|}{x}\\).',
    correct: '\\(y = 1\\) for \\(x > 0\\), and \\(y = -1\\) for \\(x < 0\\).',
    distractors: [
      '\\(y = x\\) for \\(x > 0\\), and \\(y = -x\\) for \\(x < 0\\).',
      '\\(y = 1\\) for all \\(x\\).',
      '\\(y = -1\\) for all \\(x\\).',
    ],
    solutionSteps: [
      step(
        'Piecewise-define |x|: |x| = x when x > 0 and |x| = -x when x < 0. Divide by x on each piece (x ≠ 0 from the previous question).',
        '\\(\\text{Given: } y = \\frac{|x|}{x},\\; x \\neq 0\\)'
      ),
      step(
        'For x > 0: |x| = x, so y = x/x = 1. Do not confuse this with y = x.',
        '\\(x > 0 \\;\\Rightarrow\\; y = \\frac{x}{x} = 1\\)'
      ),
      step(
        'For x < 0: |x| = -x, so y = (-x)/x = -1. A common error is writing y = -x for x < 0 without dividing by x.',
        '\\(x < 0 \\;\\Rightarrow\\; y = \\frac{-x}{x} = -1\\)'
      ),
      step(
        'The graph is the horizontal half-line y = 1 for positive x and y = -1 for negative x, with a hole at x = 0. Final answer: y = 1 for x > 0, and y = -1 for x < 0.',
        '\\(y = 1\\ (x>0),\\quad y = -1\\ (x<0)\\)'
      ),
    ],
  },
];

if (MCQ_SPECS.length !== 35) {
  throw new Error(`Expected 35 MCQ specs, got ${MCQ_SPECS.length}`);
}
if (A_SEQ.length !== 35) {
  throw new Error(`Expected 35 A_SEQ, got ${A_SEQ.length}`);
}

function buildMcqQuestions() {
  const aCounts = { 0: 0, 1: 0, 2: 0, 3: 0 };
  const questions = MCQ_SPECS.map((spec, i) => {
    const a = A_SEQ[i];
    const opts = placeAnswer(spec.correct, spec.distractors, a);
    aCounts[a] += 1;
    // Validate latex parity in all strings
    const fields = [spec.q, ...opts, ...spec.solutionSteps.flatMap((s) => [s.explanation, s.workingOut])];
    for (const f of fields) {
      const open = (String(f).match(/\\\(/g) || []).length;
      const close = (String(f).match(/\\\)/g) || []).length;
      if (open !== close) {
        throw new Error(`LaTeX parity fail on ${spec.id}: open=${open} close=${close}\n${f}`);
      }
    }
    if (opts[a] !== spec.correct) {
      throw new Error(`a mismatch for ${spec.id}`);
    }
    return {
      id: spec.id,
      c: '5E',
      t: spec.t,
      type: 'multiple_choice',
      difficulty: spec.difficulty,
      q: spec.q,
      a: String(a),
      opts,
      h: '',
      s: '',
      solutionSteps: spec.solutionSteps,
      isNew: true,
    };
  });
  console.log('Answer index distribution:', aCounts);
  return questions;
}

function convertSketch(raw) {
  // graph_sketch → teacher_review, fix LaTeX, ensure ≥3 solution steps
  const q = latexDollarToParen(raw.q || '');
  const answer = latexDollarToParen(raw.a || raw.answer || '');
  const h = latexDollarToParen(raw.h || '');
  const s = latexDollarToParen(raw.s || '');

  const rawSteps = Array.isArray(raw.solutionSteps) ? raw.solutionSteps : [];
  const midSteps = rawSteps.map((st) =>
    step(
      latexDollarToParen(st.explanation || 'Apply the transformation and mark key features.'),
      wrapBareWorking(st.workingOut || answer || 'See graph features')
    )
  );

  const steps = [
    step(
      'Read the given absolute-value equation and identify the base graph y = |x| together with any horizontal or vertical translations, reflections, or stretches. The plan is to find the vertex first, then sketch the V-shaped graph with correct orientation for teacher review.',
      '\\(\\text{Strategy: find vertex, then sketch V-graph}\\)'
    ),
    step(
      'Locate the vertex from the form y = a|x - h| + k. The vertex is at (h, k). Horizontal shifts reverse the sign of h inside the bars; vertical shifts match the sign of k. A common error is swapping horizontal and vertical directions.',
      wrapBareWorking(answer || 'Vertex at (h, k)')
    ),
    ...midSteps,
    step(
      'Sketch both rays through the vertex, mark intercepts if the question asks for them, and label the vertex clearly. Confirm the graph opens upward when a > 0 and downward when a < 0. The expected features for marking are summarised in the model answer.',
      wrapBareWorking(answer || 'Labelled sketch with vertex')
    ),
  ].map((st) => ({
    explanation: st.explanation,
    workingOut: latexParityOk(st.workingOut) ? st.workingOut : wrapBareWorking(st.workingOut),
    graphData: null,
  }));

  const fixField = (val, fallback) => {
    const v = latexDollarToParen(val || '');
    if (latexParityOk(v) && v) return v;
    const stripped = String(val || fallback || '')
      .replace(/\$/g, '')
      .replace(/\\\(/g, '')
      .replace(/\\\)/g, '');
    return stripped ? `\\(${stripped}\\)` : fallback || '';
  };

  return {
    id: raw.id,
    c: '5E',
    t: raw.t || 'Absolute Value Graphs',
    type: 'teacher_review',
    difficulty: raw.difficulty || 'medium',
    q: fixField(raw.q, 'Sketch the absolute value graph.'),
    a: fixField(raw.a || raw.answer, 'See marked sketch features.'),
    opts: [],
    h: latexParityOk(h) ? h : '',
    s: latexParityOk(s) ? s : fixField(raw.s, ''),
    solutionSteps: steps,
    isNew: true,
  };
}

function loadSeedArray() {
  const src = readFileSync(SEED_PATH, 'utf8');
  const start = src.indexOf('export const CH5_QUESTIONS_Y11A = ');
  const end = src.indexOf('export const Y11_CH5_QUESTIONS');
  if (start < 0 || end < 0) throw new Error('Could not locate CH5_QUESTIONS_Y11A in seed file');
  const chunk = src
    .slice(start, end)
    .replace('export const CH5_QUESTIONS_Y11A = ', 'const CH5_QUESTIONS_Y11A = ')
    .replace(/;\s*$/, '');
  const arr = new Function(`${chunk}; return CH5_QUESTIONS_Y11A;`)();
  const rest = src.slice(end);
  return { arr, rest, src };
}

function writeSeed(arr, rest) {
  const body = `export const CH5_QUESTIONS_Y11A = ${JSON.stringify(arr, null, 2)};\n\n`;
  writeFileSync(SEED_PATH, body + rest, 'utf8');
  console.log(`Wrote seed: ${SEED_PATH} (${arr.length} questions)`);
}

function validateLatexParity(q) {
  const texts = [
    q.q,
    q.a,
    q.h,
    q.s,
    ...(q.opts || []),
    ...(q.solutionSteps || []).flatMap((s) => [s.explanation, s.workingOut]),
  ];
  for (const t of texts) {
    if (typeof t !== 'string') continue;
    const o = (t.match(/\\\(/g) || []).length;
    const c = (t.match(/\\\)/g) || []).length;
    if (o !== c) return `parity open=${o} close=${c} in: ${t.slice(0, 80)}`;
  }
  return null;
}

async function upsertFirestore(convertedById) {
  const saPath =
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
  const serviceAccount = JSON.parse(readFileSync(saPath, 'utf8'));
  if (getApps().length === 0) {
    initializeApp({ credential: cert(serviceAccount) });
  }
  const db = getFirestore();

  // Count existing 5E questions without full collection scan of unrelated data:
  // query by chapterId + topicCode when possible; fall back to chapterId.
  const chapterId = 'y11a-5';
  const snap = await db.collection('questions').where('chapterId', '==', chapterId).get();
  const existing5E = snap.docs.filter((d) => {
    const data = d.data();
    return data.topicCode === '5E' || data.c === '5E' || (data.topicId || '').endsWith('5E') ||
      (data.id || d.id).includes('5E') || (data.id || d.id).match(/^y11a-5-/);
  });
  // More precise: match our converted IDs + any with topic 5E
  const convertedIds = new Set(Object.keys(convertedById));
  const firestore5E = snap.docs.filter((d) => {
    const data = d.data();
    const id = data.id || d.id;
    if (convertedIds.has(id)) return true;
    if (data.topicCode === '5E' || data.c === '5E') return true;
    if ((data.topicTitle || data.t || '').toLowerCase().includes('absolute value')) return true;
    return false;
  });

  console.log(`Firestore chapter y11a-5 total docs: ${snap.size}`);
  console.log(`Firestore 5E-ish docs: ${firestore5E.length}`);
  console.log(`Converted batch size: ${convertedIds.size}`);

  if (convertedIds.size < firestore5E.length) {
    console.error(
      `ABORT: converted (${convertedIds.size}) < existing 5E (${firestore5E.length}). Refusing to reduce count.`
    );
    process.exit(1);
  }

  // Upsert only converted IDs (merge). Match live schema:
  // options: [{text, imageUrl}], answer: string index for MCQ, question field.
  // Never touch origin:'teacher' docs (none expected for these seed IDs).
  const ids = [...convertedIds];
  let written = 0;
  let skippedTeacher = 0;
  const BATCH = 400;
  for (let i = 0; i < ids.length; i += BATCH) {
    const slice = ids.slice(i, i + BATCH);
    // Point-read only the batch docs we will write (no full scan)
    const existingSnaps = await Promise.all(
      slice.map((id) => db.collection('questions').doc(id).get())
    );
    const batch = db.batch();
    for (let j = 0; j < slice.length; j++) {
      const id = slice[j];
      const existing = existingSnaps[j];
      if (existing.exists && existing.data().origin === 'teacher') {
        skippedTeacher += 1;
        console.warn(`SKIP teacher origin: ${id}`);
        continue;
      }
      const q = convertedById[id];
      const isMC = q.type === 'multiple_choice';
      const options = isMC
        ? q.opts.map((text) => ({ text: String(text), imageUrl: '' }))
        : [];
      const answer = isMC ? String(parseInt(q.a, 10)) : String(q.a ?? '');
      const doc = {
        id: q.id,
        chapterId: 'y11a-5',
        chapterTitle: 'Chapter 5: Further graphing and equations',
        year: 'Year 11',
        course: 'Advanced',
        isManual: true,
        topicId: 'y11a-5E',
        topicCode: '5E',
        topicTitle: q.t,
        difficulty: q.difficulty,
        type: q.type,
        question: q.q,
        title: q.q,
        options,
        answer,
        solutionSteps: q.solutionSteps,
        hint: q.h || '',
        solution: q.s || '',
        isNew: true,
        updatedAt: FieldValue.serverTimestamp(),
      };
      if (!isMC) {
        doc.requiresManualGrading = true;
      }
      const ref = db.collection('questions').doc(id);
      batch.set(ref, doc, { merge: true });
      written += 1;
    }
    await batch.commit();
    console.log(`Committed batch ${i / BATCH + 1}, written so far ${written}`);
  }
  console.log(`Firestore upsert complete: written=${written}, skippedTeacher=${skippedTeacher}, isNew:true`);
  return written;
}

async function main() {
  console.log('Building MCQ conversions...');
  const mcqs = buildMcqQuestions();
  const mcqById = Object.fromEntries(mcqs.map((q) => [q.id, q]));

  const { arr, rest } = loadSeedArray();
  const e5Before = arr.filter((q) => q.c === '5E').length;
  console.log(`Seed total ${arr.length}, 5E before ${e5Before}`);

  let mcUpdated = 0;
  let sketchUpdated = 0;
  const convertedById = {};

  const newArr = arr.map((q) => {
    if (q.c !== '5E') return q;
    if (mcqById[q.id]) {
      mcUpdated += 1;
      convertedById[q.id] = mcqById[q.id];
      return mcqById[q.id];
    }
    if (q.type === 'graph_sketch' || q.type === 'teacher_review') {
      const conv = convertSketch(q);
      sketchUpdated += 1;
      convertedById[q.id] = conv;
      return conv;
    }
    // short_answer that somehow wasn't in MCQ_SPECS
    if (q.type === 'short_answer') {
      console.warn('Unconverted short_answer left:', q.id);
    }
    return q;
  });

  // Validate all converted
  for (const [id, q] of Object.entries(convertedById)) {
    const err = validateLatexParity(q);
    if (err) throw new Error(`${id}: ${err}`);
    if (q.type === 'multiple_choice') {
      if (!Array.isArray(q.opts) || q.opts.length !== 4) throw new Error(`${id}: opts not 4`);
      const ai = parseInt(q.a, 10);
      if (ai < 0 || ai > 3 || q.opts[ai] === undefined) throw new Error(`${id}: bad a`);
      if ((q.solutionSteps || []).length < 3) throw new Error(`${id}: need ≥3 steps`);
    }
  }

  const e5After = newArr.filter((q) => q.c === '5E').length;
  console.log(`MCQ updated: ${mcUpdated}, sketches→teacher_review: ${sketchUpdated}`);
  console.log(`5E after: ${e5After} (before ${e5Before})`);
  if (e5After < e5Before) {
    throw new Error('Refusing to write seed with fewer 5E questions');
  }

  writeSeed(newArr, rest);

  // Write a summary JSON for inspection
  const summaryPath = resolve(ROOT, 'tools/scripts/_y11a5e_convert_summary.json');
  writeFileSync(
    summaryPath,
    JSON.stringify(
      {
        mcUpdated,
        sketchUpdated,
        aDistribution: mcqs.reduce((acc, q) => {
          acc[q.a] = (acc[q.a] || 0) + 1;
          return acc;
        }, {}),
        mcqIds: mcqs.map((q) => ({ id: q.id, a: q.a, correct: q.opts[parseInt(q.a, 10)] })),
      },
      null,
      2
    )
  );
  console.log('Summary:', summaryPath);

  if (DO_FIRESTORE) {
    console.log('Upserting to Firestore...');
    await upsertFirestore(convertedById);
    console.log(
      '\nNEXT: run index rebuild:\n  node tools/scripts/rebuildQuestionIndexes.js y11a-5\n'
    );
  } else {
    console.log('Seed updated only. Re-run with --firestore to upsert.');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
