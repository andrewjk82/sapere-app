#!/usr/bin/env node
/**
 * Fix "generic-template filler" broken distractors (2026-08-15 corpus
 * audit, Pattern B) across 70 multiple_choice questions in 18 seed files.
 *
 * Same bug family already fixed once by hand in
 * tools/scripts/fixDropBearBrokenOptions.js: options like
 * "The opposite of this statement is true.", "This is true only when the
 * function is linear.", "This only holds for positive values of x." are
 * leftover generic-template garbage that carries no question-specific
 * content. Every one below is replaced with a real distractor grounded in
 * that question's own numbers/content (a plausible arithmetic slip, sign
 * error, swapped formula, or conceptual misconception) -- never a lazy
 * negative or an unrelated filler sentence.
 *
 * Every marked-correct answer was independently re-derived by hand before
 * this script was written. Two genuine wrong-answer-keys were found and
 * are corrected here (not just the distractors):
 *   - car2020s-q33 (sin(pi*x) = 1-|x| solution count): numerically
 *     re-solving the equation over its full real domain gives 4 sign
 *     changes (x=-1, x~0.264, x=1, x~1.736), not 3. Corrected to
 *     "4 solutions" and the old (wrong) "3 solutions" is recycled as a
 *     genuine near-miss distractor.
 *   - y12a-8c-q8b (monthly-compounding finance comparison): recomputing
 *     30000*(1+0.0515/12)^12 = 31581.9952... gives a margin of $7.00 over
 *     Liam's $31575, not $6.85 as previously stated (the old figure looks
 *     like a hand-calculation slip). Corrected to "Sophia, by 7.00"; the
 *     old $6.85 figure is recycled as a distractor (a real slip a student
 *     could make the same way).
 *
 * Usage:
 *   node tools/scripts/fixGenericFillerDistractors.js          # dry run
 *   node tools/scripts/fixGenericFillerDistractors.js --write  # write seed files
 *   node tools/scripts/fixGenericFillerDistractors.js --sync   # also push to Firestore
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const WRITE = process.argv.includes('--write');
const SYNC = process.argv.includes('--sync');
const C = (name) => join(__dirname, `../../src/constants/${name}`);

const FILES = {
  car: C('seedCaringbah2020Questions.js'),
  cars: C('seedCaringbah2020SimilarQuestions.js'),
  dane: C('seedDanebank2020Questions.js'),
  danes: C('seedDanebank2020SimilarQuestions.js'),
  fortst: C('seedFortSt2020Questions.js'),
  fortsts: C('seedFortSt2020SimilarQuestions.js'),
  cra: C('seedCranbrook2023Questions.js'),
  cras: C('seedCranbrook2023SimilarQuestions.js'),
  bbhs: C('seedBlacktownBoys2020Questions.js'),
  bbhss: C('seedBlacktownBoys2020SimilarQuestions.js'),
  y11g: C('seedYear11Ch6GQuestions.js'),
  y11e: C('seedYear11Ch6EQuestions.js'),
  y11c: C('seedYear11Ch6CQuestions.js'),
  y11d: C('seedYear11Ch6DQuestions.js'),
  y12a8c: C('seedYear12aCh8CQuestions.js'),
  baulko: C('seedBaulkham2020Questions.js'),
  bar: C('seedBarker2020Questions.js'),
};

const OLD = {
  opp: 'The opposite of this statement is true.',
  lin: 'This is true only when the function is linear.',
  pos: 'This only holds for positive values of x.',
};

// Each fix: { id, file, expectAnswer, replacements: { oldValue: newValue } }
// Also optionally: { correctTextFix: { old, new } } for the two wrong-answer-key
// repairs, applied to the option text (not the garbage ones) plus solution fields.
const FIXES = [
  // ---------------- Danebank ----------------
  { id: 'dane2020-q12a', file: FILES.dane, expectAnswer: '0', replacements: {
    [OLD.opp]: 'He multiplied equation \\((1)\\) by equation \\((2)\\).',
    [OLD.lin]: 'He divided equation \\((2)\\) by equation \\((1)\\).',
    [OLD.pos]: 'He subtracted equation \\((2)\\) from equation \\((1)\\).',
  }},
  { id: 'dane2020s-q12a', file: FILES.danes, expectAnswer: '0', replacements: {
    [OLD.opp]: 'She multiplied equation \\((1)\\) by equation \\((2)\\).',
    [OLD.lin]: 'She divided equation \\((2)\\) by equation \\((1)\\).',
    [OLD.pos]: 'She subtracted equation \\((2)\\) from equation \\((1)\\).',
  }},
  { id: 'dane2020-q22a', file: FILES.dane, expectAnswer: '0', replacements: {
    [OLD.opp]: 'a + b = 0.7\\) and \\(3a + 4b = 0.8',
    [OLD.lin]: 'a + b = 0.25\\) and \\(3a + 4b = 2',
    [OLD.pos]: '3a + 4b = 0.25\\) and \\(a + b = 0.8',
  }},
  { id: 'dane2020s-q22a', file: FILES.danes, expectAnswer: '0', replacements: {
    [OLD.opp]: 'a + b = 0.65\\) and \\(3a + 4b = 1.15',
    [OLD.lin]: 'a + b = 0.35\\) and \\(3a + 4b = 2.2',
    [OLD.pos]: '3a + 4b = 0.35\\) and \\(a + b = 1.15',
  }},
  { id: 'dane2020-q22b', file: FILES.dane, expectAnswer: '0', replacements: {
    [OLD.opp]: 'a = 0.05\\) and \\(b = 0.2',
    [OLD.lin]: 'a = 0.15\\) and \\(b = 0.10',
    [OLD.pos]: 'a = 0.3\\) and \\(b = -0.05',
  }},
  { id: 'dane2020s-q22b', file: FILES.danes, expectAnswer: '0', replacements: {
    [OLD.opp]: 'a = 0.10\\) and \\(b = 0.25',
    [OLD.lin]: 'a = 0.20\\) and \\(b = 0.15',
    [OLD.pos]: 'a = 0.45\\) and \\(b = -0.10',
  }},
  { id: 'dane2020s-q25a', file: FILES.danes, expectAnswer: '0', replacements: {
    [OLD.opp]: 'A weak positive correlation.',
    [OLD.lin]: 'A strong negative correlation.',
    [OLD.pos]: 'No correlation (independent variables).',
  }},
  { id: 'dane2020-q33b', file: FILES.dane, expectAnswer: '3', replacements: {
    [OLD.opp]: 'x = 4\\) only',
    [OLD.pos]: 'x = 0\\) and \\(x = 8',
  }},
  { id: 'dane2020s-q33b', file: FILES.danes, expectAnswer: '3', replacements: {
    [OLD.opp]: 'x = 3\\) only',
    [OLD.pos]: 'x = 0\\) and \\(x = 8',
  }},
  { id: 'dane2020-q35', file: FILES.dane, expectAnswer: '0', replacements: {
    [OLD.opp]: 'a = 8\\) and \\(b = 6',
    [OLD.lin]: 'a = 2\\) and \\(b = 8',
    [OLD.pos]: 'a = 6\\) and \\(b = 2',
  }},
  { id: 'dane2020s-q35', file: FILES.danes, expectAnswer: '0', replacements: {
    [OLD.opp]: 'a = 8\\) and \\(b = 3',
    [OLD.lin]: 'a = 6\\) and \\(b = 8',
    [OLD.pos]: 'a = 3\\) and \\(b = 4',
  }},
  { id: 'dane2020-q38a', file: FILES.dane, expectAnswer: '3', replacements: {
    [OLD.opp]: 'v = 3t^2 + 12t\\) and \\(x = t^3 + 6t^2',
    [OLD.lin]: 'v = 6t - 12\\) and \\(x = 3t^2 - 12t',
    [OLD.pos]: 'v = 3t^2 - 12t\\) and \\(x = t^3 - 12t^2',
  }},
  { id: 'dane2020s-q38a', file: FILES.danes, expectAnswer: '3', replacements: {
    [OLD.opp]: 'v = 3t^2 + 18t\\) and \\(x = t^3 + 9t^2',
    [OLD.lin]: 'v = 6t - 18\\) and \\(x = 3t^2 - 18t',
    [OLD.pos]: 'v = 3t^2 - 18t\\) and \\(x = t^3 - 18t^2',
  }},
  { id: 'dane2020-q38b', file: FILES.dane, expectAnswer: '0', replacements: {
    [OLD.opp]: 'At \\(t = 2\\) s, at \\(x = -16\\) m (16 m to the left of \\(O\\))',
    [OLD.lin]: 'At \\(t = 4\\) s, at \\(x = 32\\) m (32 m to the right of \\(O\\))',
    [OLD.pos]: 'At \\(t = 4\\) s, at \\(x = -8\\) m (8 m to the left of \\(O\\))',
  }},
  { id: 'dane2020s-q38b', file: FILES.danes, expectAnswer: '0', replacements: {
    [OLD.opp]: 'At \\(t = 3\\) s, at \\(x = -27\\) m (27 m to the left of \\(O\\))',
    [OLD.lin]: 'At \\(t = 6\\) s, at \\(x = 108\\) m (108 m to the right of \\(O\\))',
    [OLD.pos]: 'At \\(t = 6\\) s, at \\(x = -18\\) m (18 m to the left of \\(O\\))',
  }},

  // ---------------- Caringbah ----------------
  { id: 'car2020-q33', file: FILES.car, expectAnswer: '0', replacements: {
    [OLD.opp]: '(a) See sketches.\n\n(b) \\(4\\) solutions',
    [OLD.lin]: '(a) See sketches.\n\n(b) \\(6\\) solutions',
    [OLD.pos]: '(a) See sketches.\n\n(b) \\(3\\) solutions',
  }},
  { id: 'car2020s-q33', file: FILES.cars, expectAnswer: '0', replacements: {
    [OLD.lin]: '(a) See sketches.\n\n(b) \\(5\\) solutions',
    [OLD.pos]: '(a) See sketches.\n\n(b) \\(2\\) solutions',
  }, correctTextFix: {
    // Applied as a GLOBAL replace across the whole question block (the
    // wrong figure "3 solutions" repeats in opts[0], solution, and
    // solutionSteps) -- every real occurrence must be corrected, not just
    // the first.
    globalPairs: [
      ['(a) See sketches.\n\n(b) \\(3\\) solutions', '(a) See sketches.\n\n(b) \\(4\\) solutions'],
    ],
    // recycle the old (wrong) figure as the "opp" distractor slot
    extraReplacement: { key: OLD.opp, value: '(a) See sketches.\n\n(b) \\(3\\) solutions' },
  }},

  // ---------------- FortSt ----------------
  { id: 'fortst2020-q10a', file: FILES.fortst, expectAnswer: '3', replacements: {
    [OLD.opp]: '\\(x\\)-intercepts \\((-2, 0)\\) and \\((2, 0)\\); \\(y\\)-intercept \\((0, 16)\\)',
    [OLD.lin]: '\\(x\\)-intercepts \\((-2, 0)\\) and \\((2, 0)\\); \\(y\\)-intercept \\((0, -8)\\)',
    [OLD.pos]: '\\(x\\)-intercept \\((2, 0)\\) only; \\(y\\)-intercept \\((0, -16)\\)',
  }},
  { id: 'fortst2020s-q10a', file: FILES.fortsts, expectAnswer: '3', replacements: {
    [OLD.opp]: '\\(x\\)-intercepts \\((-3, 0)\\) and \\((1, 0)\\); \\(y\\)-intercept \\((0, 3)\\)',
    [OLD.lin]: '\\(x\\)-intercepts \\((-3, 0)\\) and \\((1, 0)\\); \\(y\\)-intercept \\((0, -1)\\)',
    [OLD.pos]: '\\(x\\)-intercept \\((1, 0)\\) only; \\(y\\)-intercept \\((0, -3)\\)',
  }},
  { id: 'fortst2020-q10b', file: FILES.fortst, expectAnswer: '0', replacements: {
    [OLD.opp]: 'f\'(x) = 4(x-2)^2(x-1)\\) and \\(f\'\'(x) = 12x(x-2)',
    [OLD.lin]: 'f\'(x) = 4(x-2)^2(x+1)\\) and \\(f\'\'(x) = 12x(x+2)',
    [OLD.pos]: 'f\'(x) = (x-2)^2(x+1)\\) and \\(f\'\'(x) = 12x(x-2)',
  }},
  { id: 'fortst2020s-q10b', file: FILES.fortsts, expectAnswer: '0', replacements: {
    [OLD.opp]: 'f\'(x) = 4(x-1)^2(x-2)\\) and \\(f\'\'(x) = 12(x-1)(x+1)',
    [OLD.lin]: 'f\'(x) = 4(x-1)^2(x+2)\\) and \\(f\'\'(x) = 12(x-1)(x-1)',
    [OLD.pos]: 'f\'(x) = (x-1)^2(x+2)\\) and \\(f\'\'(x) = 12(x-1)(x+1)',
  }},
  { id: 'fortst2020-q11b', file: FILES.fortst, expectAnswer: '0', replacements: {
    [OLD.opp]: 'The limiting growth is \\(450\\) cm, so the maximum height is \\(80 + 450 = 530\\) cm \\(< 600\\) cm.',
    [OLD.lin]: 'The limiting growth is \\(500\\) cm, so the maximum height is \\(580\\) cm, which does exceed \\(600\\) cm.',
    [OLD.pos]: 'Since the ratio \\(0.9 < 1\\), the growth is unbounded and the tree will eventually exceed \\(6\\) metres.',
  }},
  { id: 'fortst2020s-q11b', file: FILES.fortsts, expectAnswer: '0', replacements: {
    [OLD.opp]: 'The limiting growth is \\(160\\) cm, so the maximum height is \\(60 + 160 = 220\\) cm \\(< 300\\) cm.',
    [OLD.lin]: 'The limiting growth is \\(200\\) cm, so the maximum height is \\(260\\) cm, which does exceed \\(300\\) cm.',
    [OLD.pos]: 'Since the ratio \\(0.8 < 1\\) is close to \\(1\\), the growth will eventually exceed \\(3\\) metres.',
  }},
  { id: 'fortst2020-q15a', file: FILES.fortst, expectAnswer: '0', replacements: {
    [OLD.opp]: 't = 0\\) and \\(t = 8',
    [OLD.lin]: 't = 3\\) only',
    [OLD.pos]: 't = 5\\) only',
  }},
  { id: 'fortst2020s-q15a', file: FILES.fortsts, expectAnswer: '0', replacements: {
    [OLD.opp]: 't = 0\\) and \\(t = 8',
    [OLD.lin]: 't = 2\\) only',
    [OLD.pos]: 't = 4\\) only',
  }},
  { id: 'fortst2020-q17d', file: FILES.fortst, expectAnswer: '0', replacements: {
    [OLD.opp]: 'At \\(t = 30\\) (rate \\(60\\) L/min)',
    [OLD.lin]: 'At \\(t = 60\\) (rate \\(0\\) L/min)',
    [OLD.pos]: 'At \\(t = 0\\) (rate \\(3600\\) L/min)',
  }},
  { id: 'fortst2020s-q17d', file: FILES.fortsts, expectAnswer: '0', replacements: {
    [OLD.opp]: 'At \\(t = 35\\) (rate \\(70\\) L/min)',
    [OLD.lin]: 'At \\(t = 70\\) (rate \\(0\\) L/min)',
    [OLD.pos]: 'At \\(t = 0\\) (rate \\(4900\\) L/min)',
  }},
  { id: 'fortst2020-q18a', file: FILES.fortst, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Maximum \\(13°\\), minimum \\(7°\\)',
    [OLD.lin]: 'Maximum \\(20°\\), minimum \\(13°\\)',
    [OLD.pos]: 'Maximum \\(7°\\), minimum \\(-7°\\)',
  }},
  { id: 'fortst2020s-q18a', file: FILES.fortsts, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Maximum \\(15°\\), minimum \\(8°\\)',
    [OLD.lin]: 'Maximum \\(23°\\), minimum \\(15°\\)',
    [OLD.pos]: 'Maximum \\(8°\\), minimum \\(-8°\\)',
  }},
  { id: 'fortst2020-q18c', file: FILES.fortst, expectAnswer: '0', replacements: {
    [OLD.opp]: 'December (month \\(12\\))',
    [OLD.lin]: 'July (month \\(7\\))',
    [OLD.pos]: 'January (month \\(1\\))',
  }},
  { id: 'fortst2020s-q18c', file: FILES.fortsts, expectAnswer: '0', replacements: {
    [OLD.opp]: 'January (month \\(1\\))',
    [OLD.lin]: 'December (month \\(12\\))',
    [OLD.pos]: 'June (month \\(6\\))',
  }},
  { id: 'fortst2020s-q9', file: FILES.fortsts, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Centre \\((3, 4)\\), radius \\(4\\)',
    [OLD.lin]: 'Centre \\((3, -4)\\), radius \\(16\\)',
    [OLD.pos]: 'Centre \\((-3, 4)\\), radius \\(4\\)',
  }},

  // ---------------- Cranbrook ----------------
  { id: 'cra2023-q21', file: FILES.cra, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Income \\(= 10n + 230\\); Expenses \\(= 20n + 180\\)',
    [OLD.lin]: 'Income \\(= 60n + 80\\); Expenses \\(= 20n + 200\\)',
    [OLD.pos]: 'Income \\(= 60n + 20\\); Expenses \\(= 20n + 180\\)',
  }},
  { id: 'cra2023s-q21', file: FILES.cras, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Income \\(= 8n + 276\\); Expenses \\(= 30n + 220\\)',
    [OLD.lin]: 'Income \\(= 80n + 60\\); Expenses \\(= 30n + 250\\)',
    [OLD.pos]: 'Income \\(= 80n + 240\\); Expenses \\(= 30n + 220\\)',
  }},
  { id: 'cra2023-q22b', file: FILES.cra, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Because the curve is concave up, each trapezium lies below the curve, so the rule underestimates the true volume. An underestimate could delay the safety valve until after the balloon bursts.',
    [OLD.lin]: 'Because the curve is concave down, each trapezium lies above the curve, overestimating the volume, so the valve is triggered early.',
    [OLD.pos]: 'The Trapezoidal rule is not valid here because the function is exponential, not polynomial.',
  }},
  { id: 'cra2023s-q22b', file: FILES.cras, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Because the curve is concave up, each trapezium lies below the curve, so the rule underestimates the true volume. An underestimate could delay the safety valve until after the balloon bursts.',
    [OLD.lin]: 'Because the curve is concave down, each trapezium lies above the curve, overestimating the volume, so the valve is triggered early.',
    [OLD.pos]: 'The Trapezoidal rule is not valid here because the function is exponential, not polynomial.',
  }},

  // ---------------- Blacktown Boys ----------------
  { id: 'bbhs2020-18b', file: FILES.bbhs, expectAnswer: '3', replacements: {
    [OLD.opp]: 'y = x + 1\\), or equivalently \\(x - y + 1 = 0',
    [OLD.lin]: 'y = 2x - 1\\), or equivalently \\(2x - y - 1 = 0',
    [OLD.pos]: 'y = 2x + 2\\), or equivalently \\(2x - y + 2 = 0',
  }},
  { id: 'bbhs2020s-18b', file: FILES.bbhss, expectAnswer: '3', replacements: {
    [OLD.opp]: 'y = 3x\\), or equivalently \\(3x - y = 0',
    [OLD.lin]: 'y = x + 1\\), or equivalently \\(x - y + 1 = 0',
    [OLD.pos]: 'y = -x\\), or equivalently \\(x + y = 0',
  }},
  { id: 'bbhs2020-25a', file: FILES.bbhs, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Weak, positive, linear association.',
    [OLD.lin]: 'Strong, negative, linear association.',
    [OLD.pos]: 'Strong, positive, non-linear association.',
  }},
  { id: 'bbhs2020s-25a', file: FILES.bbhss, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Weak, positive, linear association.',
    [OLD.lin]: 'Strong, negative, linear association.',
    [OLD.pos]: 'Strong, positive, non-linear association.',
  }},
  { id: 'bbhs2020-25d', file: FILES.bbhs, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Extrapolation is always valid as long as \\(R^2\\) is high, since a strong correlation guarantees the trend continues indefinitely.',
    [OLD.lin]: 'The regression line cannot be extended because \\(R^2\\) only applies within the range \\(0\\) to \\(1\\).',
    [OLD.pos]: 'Because the association is linear, the same rate of increase must continue for any amount of fertiliser used.',
  }},
  { id: 'bbhs2020s-25d', file: FILES.bbhss, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Extrapolation is always valid as long as \\(R^2\\) is high, since a strong correlation guarantees the trend continues indefinitely.',
    [OLD.lin]: 'The regression line cannot be extended because \\(R^2\\) only applies within the range \\(0\\) to \\(1\\).',
    [OLD.pos]: 'Because the association is linear, the exam score must keep increasing at the same rate no matter how many hours are studied.',
  }},
  { id: 'bbhs2020-30b', file: FILES.bbhs, expectAnswer: '0', replacements: {
    [OLD.opp]: 'The 26th row.',
    [OLD.lin]: 'The 25th row.',
    [OLD.pos]: 'The 28th row.',
  }},
  { id: 'bbhs2020s-30b', file: FILES.bbhss, expectAnswer: '0', replacements: {
    [OLD.opp]: 'The 35th row.',
    [OLD.lin]: 'The 34th row.',
    [OLD.pos]: 'The 37th row.',
  }},

  // ---------------- Year 11 Ch6G ----------------
  { id: 'y11a-6g-q4e', file: FILES.y11g, expectAnswer: '0', replacements: {
    [OLD.opp]: '\\(\\alpha = 60°\\) and \\(\\alpha = 300°\\)',
    [OLD.lin]: '\\(\\alpha = 180°\\)',
    [OLD.pos]: 'Infinitely many solutions',
  }},

  // ---------------- Year 11 Ch6E (reciprocal trig ratios) ----------------
  // NOTE: this file wraps every option in the file-wide quad-backslash
  // convention (\\\\( ... \\\\)) -- matched below via literal source text.
  { id: 'y11a-6e-q4aii', file: FILES.y11e, expectAnswer: '0', rawReplacements: {
    '\\\\\\\\(The opposite of this statement is true.\\\\\\\\)': '\\\\\\\\(2/\\\\\\\\sqrt{5} \\\\\\\\text{ or } -2/\\\\\\\\sqrt{5}\\\\\\\\)',
    '\\\\\\\\(This is true only when the function is linear.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{5}/3 \\\\\\\\text{ or } -\\\\\\\\sqrt{5}/3\\\\\\\\)',
    '\\\\\\\\(This only holds for positive values of x.\\\\\\\\)': '\\\\\\\\(2/3 \\\\\\\\text{ or } -2/3\\\\\\\\)',
  }},
  { id: 'y11a-6e-q4bi', file: FILES.y11e, expectAnswer: '0', rawReplacements: {
    '\\\\\\\\(The opposite of this statement is true.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{1/3} \\\\\\\\text{ or } -\\\\\\\\sqrt{1/3}\\\\\\\\)',
    '\\\\\\\\(This is true only when the function is linear.\\\\\\\\)': '\\\\\\\\(8/3 \\\\\\\\text{ or } -8/3\\\\\\\\)',
    '\\\\\\\\(This only holds for positive values of x.\\\\\\\\)': '\\\\\\\\(1/3 \\\\\\\\text{ or } -1/3\\\\\\\\)',
  }},
  { id: 'y11a-6e-q4bii', file: FILES.y11e, expectAnswer: '0', rawReplacements: {
    '\\\\\\\\(The opposite of this statement is true.\\\\\\\\)': '\\\\\\\\(1/\\\\\\\\sqrt{8} \\\\\\\\text{ or } -1/\\\\\\\\sqrt{8}\\\\\\\\)',
    '\\\\\\\\(This is true only when the function is linear.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{8}/3 \\\\\\\\text{ or } -\\\\\\\\sqrt{8}/3\\\\\\\\)',
    '\\\\\\\\(This only holds for positive values of x.\\\\\\\\)': '\\\\\\\\(3/\\\\\\\\sqrt{8} \\\\\\\\text{ or } -3/\\\\\\\\sqrt{8}\\\\\\\\)',
  }},
  { id: 'y11a-6e-q6d', file: FILES.y11e, expectAnswer: '0', rawReplacements: {
    '\\\\\\\\(The opposite of this statement is true.\\\\\\\\)': '\\\\\\\\(3/\\\\\\\\sqrt{7} \\\\\\\\text{ or } -3/\\\\\\\\sqrt{7}\\\\\\\\)',
    '\\\\\\\\(This is true only when the function is linear.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{7}/4 \\\\\\\\text{ or } -\\\\\\\\sqrt{7}/4\\\\\\\\)',
    '\\\\\\\\(This only holds for positive values of x.\\\\\\\\)': '\\\\\\\\(4/\\\\\\\\sqrt{7} \\\\\\\\text{ or } -4/\\\\\\\\sqrt{7}\\\\\\\\)',
  }},
  { id: 'y11a-6e-q6f', file: FILES.y11e, expectAnswer: '0', rawReplacements: {
    '\\\\\\\\(The opposite of this statement is true.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{11}/\\\\\\\\sqrt{2} \\\\\\\\text{ or } -\\\\\\\\sqrt{11}/\\\\\\\\sqrt{2}\\\\\\\\)',
    '\\\\\\\\(This is true only when the function is linear.\\\\\\\\)': '\\\\\\\\(3/\\\\\\\\sqrt{2} \\\\\\\\text{ or } -3/\\\\\\\\sqrt{2}\\\\\\\\)',
    '\\\\\\\\(This only holds for positive values of x.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{2}/3 \\\\\\\\text{ or } -\\\\\\\\sqrt{2}/3\\\\\\\\)',
  }},
  { id: 'y11a-6e-q8a', file: FILES.y11e, expectAnswer: '0', rawReplacements: {
    '\\\\\\\\(The opposite of this statement is true.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{2}/\\\\\\\\sqrt{3} \\\\\\\\text{ or } -\\\\\\\\sqrt{2}/\\\\\\\\sqrt{3}\\\\\\\\)',
    '\\\\\\\\(This is true only when the function is linear.\\\\\\\\)': '\\\\\\\\(1/\\\\\\\\sqrt{3} \\\\\\\\text{ or } -1/\\\\\\\\sqrt{3}\\\\\\\\)',
    '\\\\\\\\(This only holds for positive values of x.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{3} \\\\\\\\text{ or } -\\\\\\\\sqrt{3}\\\\\\\\)',
  }},
  { id: 'y11a-6e-q8c', file: FILES.y11e, expectAnswer: '0', rawReplacements: {
    '\\\\\\\\(The opposite of this statement is true.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{3}/\\\\\\\\sqrt{2} \\\\\\\\text{ or } -\\\\\\\\sqrt{3}/\\\\\\\\sqrt{2}\\\\\\\\)',
    '\\\\\\\\(This is true only when the function is linear.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{2}/\\\\\\\\sqrt{5} \\\\\\\\text{ or } -\\\\\\\\sqrt{2}/\\\\\\\\sqrt{5}\\\\\\\\)',
    '\\\\\\\\(This only holds for positive values of x.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{5}/\\\\\\\\sqrt{3} \\\\\\\\text{ or } -\\\\\\\\sqrt{5}/\\\\\\\\sqrt{3}\\\\\\\\)',
  }},
  { id: 'y11a-6e-q12-sin', file: FILES.y11e, expectAnswer: '0', rawReplacements: {
    '\\\\\\\\(The opposite of this statement is true.\\\\\\\\)': '\\\\\\\\(1/\\\\\\\\sqrt{1+m^2} \\\\\\\\text{ or } -1/\\\\\\\\sqrt{1+m^2}\\\\\\\\)',
    '\\\\\\\\(This is true only when the function is linear.\\\\\\\\)': '\\\\\\\\(m/(1+m^2) \\\\\\\\text{ or } -m/(1+m^2)\\\\\\\\)',
    '\\\\\\\\(This only holds for positive values of x.\\\\\\\\)': '\\\\\\\\(\\\\\\\\sqrt{1+m^2}/m \\\\\\\\text{ or } -\\\\\\\\sqrt{1+m^2}/m\\\\\\\\)',
  }},
  { id: 'y11a-6e-q12-sec', file: FILES.y11e, expectAnswer: '0', rawReplacements: {
    '\\\\\\\\(The opposite of this statement is true.\\\\\\\\)': '\\\\\\\\(1/\\\\\\\\sqrt{1+m^2} \\\\\\\\text{ or } -1/\\\\\\\\sqrt{1+m^2}\\\\\\\\)',
    '\\\\\\\\(This is true only when the function is linear.\\\\\\\\)': '\\\\\\\\(m + 1 \\\\\\\\text{ or } -(m+1)\\\\\\\\)',
    '\\\\\\\\(This only holds for positive values of x.\\\\\\\\)': '\\\\\\\\((1+m^2) \\\\\\\\text{ or } -(1+m^2)\\\\\\\\)',
  }},

  // ---------------- Year 11 Ch6C (domain/range) ----------------
  { id: 'y11a-6c-q8a', file: FILES.y11c, expectAnswer: '0', replacements: {
    [OLD.opp]: '\\(-1 \\le x \\le 1\\)',
    [OLD.lin]: '\\(0° \\le x \\le 360°\\)',
    [OLD.pos]: '\\(x \\neq 90°, 270°\\)',
  }},
  { id: 'y11a-6c-q9a', file: FILES.y11c, expectAnswer: '0', replacements: {
    [OLD.opp]: '\\(-1 \\le x \\le 1\\)',
    [OLD.lin]: '\\(0° \\le x \\le 360°\\)',
    [OLD.pos]: '\\(x \\neq 90°, 270°\\)',
  }},
  { id: 'y11a-6c-q10b', file: FILES.y11c, expectAnswer: '0', replacements: {
    [OLD.opp]: '\\(-1 \\le y \\le 1\\)',
    [OLD.lin]: '\\(y \\neq 0\\)',
    [OLD.pos]: '\\(y > 0\\)',
  }},
  { id: 'y11a-6c-q15b', file: FILES.y11c, expectAnswer: '0', replacements: {
    [OLD.opp]: '\\(-1 \\le y \\le 1\\)',
    [OLD.lin]: '\\(y \\neq 0\\)',
    [OLD.pos]: '\\(y > 0\\)',
  }},

  // ---------------- Year 11 Ch6D (acute-angle ratio) ----------------
  { id: 'y11a-6d-q3b', file: FILES.y11d, expectAnswer: '0', replacements: {
    [OLD.opp]: '-cos 40°',
    [OLD.lin]: 'cos 50°',
    [OLD.pos]: '-sin 40°',
  }},
  { id: 'y11a-6d-q3d', file: FILES.y11d, expectAnswer: '0', replacements: {
    [OLD.opp]: '-tan 75°',
    [OLD.lin]: 'tan 15°',
    [OLD.pos]: '-tan 15°',
  }},
  { id: 'y11a-6d-q3h', file: FILES.y11d, expectAnswer: '0', replacements: {
    [OLD.opp]: '-sin 65°',
    [OLD.lin]: 'sin 25°',
    [OLD.pos]: 'cos 65°',
  }},
  { id: 'y11a-6d-q3j', file: FILES.y11d, expectAnswer: '0', replacements: {
    [OLD.opp]: 'sin 15°',
    [OLD.lin]: '-sin 75°',
    [OLD.pos]: 'cos 15°',
  }},
  { id: 'y11a-6d-q3l', file: FILES.y11d, expectAnswer: '0', replacements: {
    [OLD.opp]: '-tan 35°',
    [OLD.lin]: 'tan 55°',
    [OLD.pos]: '-tan 55°',
  }},

  // ---------------- Year 12a Ch8C (finance) ----------------
  { id: 'y12a-8c-q8a', file: FILES.y12a8c, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Sophia (Liam: \\)31,575, Sophia: \\(31,545)',
    [OLD.lin]: 'Liam (Liam: \\)31,545, Sophia: \\(31,575)',
    [OLD.pos]: 'Liam (Liam: \\)31,575, Sophia: \\(30,515)',
  }},
  { id: 'y12a-8c-q8b', file: FILES.y12a8c, expectAnswer: '0', replacements: {
    [OLD.lin]: 'Liam, by 7.00',
    [OLD.pos]: 'Sophia, by 581.99',
  }, correctTextFix: {
    // "6.85" was a hand-calculation slip (see script header); the real
    // margin is 30000*(1+0.0515/12)^12 - 31575 = 31581.9952... - 31575
    // = 6.9952... ~ $7.00. Corrected everywhere it repeats in this block:
    // the question's format example, opts[0], solution, and solutionSteps.
    globalPairs: [
      // this substring covers the question's format example, opts[0],
      // the "solution" field, and the solutionSteps explanation/workingOut
      // that restate the final answer -- all corrected in one pass.
      ['Sophia, by 6.85', 'Sophia, by 7.00'],
      ['A_S = 30000 \\times (1 + \\frac{0.0515}{12})^{12} \\approx 31581.85', 'A_S = 30000 \\times (1 + \\frac{0.0515}{12})^{12} \\approx 31582.00'],
      ['31581.85 > 31575 \\implies \\text{Sophia is better}', '31582.00 > 31575 \\implies \\text{Sophia is better}'],
      ['31581.85 - 31575 = 6.85', '31582.00 - 31575 = 7.00'],
    ],
    extraReplacement: { key: OLD.opp, value: 'Sophia, by 6.85' },
  }},
  { id: 'y12a-8c-q18a2', file: FILES.y12a8c, expectAnswer: '0', replacements: {
    [OLD.opp]: 'log(1.015)/log(2) months, \\(\\approx\\) 0.02 months',
    [OLD.lin]: 'log(2)/1.015 months, \\(\\approx\\) 0.30 months',
    [OLD.pos]: '2\\(\\times\\)log(1.015) months, \\(\\approx\\) 0.01 months',
  }},
  { id: 'y12a-8c-q18b2', file: FILES.y12a8c, expectAnswer: '0', replacements: {
    [OLD.opp]: 'k/ln(2) months, \\(\\approx\\) 0.02 months',
    [OLD.lin]: 'ln(2)/1.015 months, \\(\\approx\\) 0.68 months',
    [OLD.pos]: '2k months, \\(\\approx\\) 0.03 months',
  }},

  // ---------------- Baulkham Hills ----------------
  { id: 'baulko2020-q15aii', file: FILES.baulko, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Yes, at \\(t = 0\\) the particle is momentarily at rest.',
    [OLD.lin]: 'Yes, as \\(t \\to \\infty\\), \\(v \\to 0\\), so the particle eventually stops.',
    [OLD.pos]: 'No, because \\(v = 5(1+e^{-t})\\) is always negative.',
  }},

  // ---------------- Barker ----------------
  { id: 'bar2020-q13aiv', file: FILES.bar, expectAnswer: '0', replacements: {
    [OLD.opp]: 'Weak positive correlation',
    [OLD.lin]: 'Strong negative correlation',
    [OLD.pos]: 'Moderate positive correlation',
  }},
  { id: 'bar2020-q18biiiiv', file: FILES.bar, expectAnswer: '0', replacements: {
    [OLD.opp]: 'f(g(x)) = x + 2\\); domain: \\(x > -2\\); range: \\(y > 0',
    [OLD.lin]: 'f(g(x)) = \\ln(x) + 2\\); domain: \\(x > 0\\); range: \\(y \\in \\mathbb{R}',
    [OLD.pos]: 'f(g(x)) = x + 2\\); domain: \\(x \\in \\mathbb{R}\\); range: \\(y > 2',
  }},
];

function toRawSource(str) {
  // Convert a "decoded value" string (single backslash for LaTeX escapes,
  // real newline characters) into the form it takes literally on disk
  // inside a JS string literal (double backslash, literal \n escape).
  return str.replace(/\\/g, '\\\\').replace(/\n/g, '\\n');
}

function fixSeedFile(filePath, fixesForFile) {
  let content = readFileSync(filePath, 'utf8');
  for (const fix of fixesForFile) {
    const idMarker = `"id": "${fix.id}"`;
    const idIdx = content.indexOf(idMarker);
    if (idIdx === -1) {
      console.warn(`SKIP ${fix.id} (seed) — id not found in ${filePath}`);
      continue;
    }
    const nextIdx = content.indexOf('"id":', idIdx + idMarker.length);
    const blockEnd = nextIdx === -1 ? content.length : nextIdx;
    let block = content.slice(idIdx, blockEnd);
    let changed = 0;
    let expected = 0;

    // Correct-answer text repair (car2020s-q33, y12a-8c-q8b), applied first.
    // Uses a GLOBAL replace per pair since the wrong value legitimately
    // repeats several times in one block (opts[0], solution, solutionSteps,
    // sometimes the question stem's format example) and every real
    // occurrence needs correcting, not just the first.
    if (fix.correctTextFix) {
      for (const [oldVal, newVal] of fix.correctTextFix.globalPairs) {
        const oldRaw = toRawSource(oldVal);
        const newRaw = toRawSource(newVal);
        if (block.includes(oldRaw)) {
          block = block.split(oldRaw).join(newRaw);
          changed++;
        }
        expected++;
      }
      const extra = fix.correctTextFix.extraReplacement;
      const exOld = toRawSource(extra.key);
      const exNew = toRawSource(extra.value);
      if (block.includes(exOld)) {
        block = block.replace(exOld, exNew);
        changed++;
      }
      expected++;
    }

    const repl = fix.rawReplacements
      ? Object.entries(fix.rawReplacements)
      : Object.entries(fix.replacements || {}).map(([k, v]) => [toRawSource(k), toRawSource(v)]);
    for (const [oldStr, newStr] of repl) {
      if (block.includes(oldStr)) {
        block = block.replace(oldStr, newStr);
        changed++;
      }
      expected++;
    }

    if (changed !== expected) {
      console.warn(`SKIP ${fix.id} (seed) — expected ${expected} replacement(s), matched ${changed}. Not touching.`);
      continue;
    }
    content = content.slice(0, idIdx) + block + content.slice(blockEnd);
    console.log(`✓ ${fix.id} (seed) — ${changed} replacement(s) applied`);
  }
  return content;
}

async function main() {
  const byFile = new Map();
  for (const fix of FIXES) {
    if (!byFile.has(fix.file)) byFile.set(fix.file, []);
    byFile.get(fix.file).push(fix);
  }

  for (const [filePath, fixesForFile] of byFile) {
    const newContent = fixSeedFile(filePath, fixesForFile);
    if (WRITE) {
      writeFileSync(filePath, newContent, 'utf8');
      console.log(`Wrote ${filePath}`);
    }
  }

  if (!SYNC) {
    console.log('\n(dry run / seed-only — pass --sync to also push to Firestore)');
    return;
  }

  const { initializeApp, cert } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  const { touchChapterIndex } = await import('./_lib/touchChapterIndex.js');

  const POSSIBLE_KEY_PATHS = [
    join(__dirname, '../../serviceAccountKey.json'),
    join(__dirname, '../../firebase-service-account.json'),
    process.env.GOOGLE_APPLICATION_CREDENTIALS,
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
  ].filter(Boolean);

  let app;
  for (const keyPath of POSSIBLE_KEY_PATHS) {
    try {
      if (!existsSync(keyPath)) continue;
      const serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));
      app = initializeApp({ credential: cert(serviceAccount) });
      console.log(`Using service account: ${keyPath}`);
      break;
    } catch { /* try next */ }
  }
  if (!app) {
    console.error('ERROR: No Firebase service account key found.');
    process.exit(1);
  }
  const db = getFirestore(app);

  const touchedChapters = new Set();
  for (const fix of FIXES) {
    const ref = db.collection('questions').doc(fix.id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${fix.id} (firestore) — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${fix.id} (firestore) — origin:'teacher'.`); continue; }
    if (data.answer !== fix.expectAnswer) {
      console.warn(`SKIP ${fix.id} (firestore) — answer is '${data.answer}', expected '${fix.expectAnswer}'. Not touching.`);
      continue;
    }

    // Value-form (decoded) replacement map, merging plain + raw (raw ones
    // are used verbatim for the y11e file since they were already source-form;
    // for value-form matching against Firestore's decoded text we need to
    // decode raw ones back by removing one layer of backslash-doubling).
    const valueReplacements = {};
    if (fix.replacements) Object.assign(valueReplacements, fix.replacements);
    if (fix.rawReplacements) {
      for (const [k, v] of Object.entries(fix.rawReplacements)) {
        valueReplacements[k.replace(/\\\\/g, '\\')] = v.replace(/\\\\/g, '\\');
      }
    }
    if (fix.correctTextFix) {
      valueReplacements[fix.correctTextFix.extraReplacement.key] = fix.correctTextFix.extraReplacement.value;
    }

    let changed = 0;
    const expected = Object.keys(valueReplacements).length;
    const newOptions = (data.options || []).map((o) => {
      if (valueReplacements[o.text] !== undefined) {
        changed += 1;
        return { text: valueReplacements[o.text], imageUrl: o.imageUrl || '' };
      }
      return o;
    });
    if (changed !== expected) {
      console.warn(`SKIP ${fix.id} (firestore) — expected to replace ${expected} option(s), matched ${changed}. Content may already differ — not touching.`);
      continue;
    }

    // Wrong-answer-key global text corrections (car2020s-q33, y12a-8c-q8b):
    // apply every old->new pair to every field it appears in (opts, solution,
    // solutionSteps). Best-effort by design (a given pair may legitimately
    // hit zero, one, or several fields) but at least one hit total is
    // required, else something has already changed underneath us.
    let correctionHits = 0;
    if (fix.correctTextFix) {
      const applyGlobalPairs = (text) => {
        if (typeof text !== 'string') return { out: text, hit: false };
        let out = text;
        let hit = false;
        for (const [oldVal, newVal] of fix.correctTextFix.globalPairs) {
          if (out.includes(oldVal)) { out = out.split(oldVal).join(newVal); hit = true; }
        }
        return { out, hit };
      };
      for (let i = 0; i < newOptions.length; i++) {
        const r = applyGlobalPairs(newOptions[i].text);
        if (r.hit) { newOptions[i] = { text: r.out, imageUrl: newOptions[i].imageUrl || '' }; correctionHits++; }
      }
      const rSol = applyGlobalPairs(data.solution);
      if (rSol.hit) { data.solution = rSol.out; correctionHits++; }
      if (Array.isArray(data.solutionSteps)) {
        data.solutionSteps = data.solutionSteps.map((step) => {
          const rExp = applyGlobalPairs(step.explanation);
          const rWork = applyGlobalPairs(step.workingOut);
          if (rExp.hit || rWork.hit) correctionHits++;
          return {
            ...step,
            explanation: rExp.hit ? rExp.out : step.explanation,
            workingOut: rWork.hit ? rWork.out : step.workingOut,
          };
        });
      }
      if (correctionHits === 0) {
        console.warn(`SKIP ${fix.id} (firestore) — correctTextFix matched 0 fields. Content may already differ — not touching.`);
        continue;
      }
    }

    const updateData = { options: newOptions };
    if (fix.correctTextFix) {
      updateData.solution = data.solution;
      updateData.solutionSteps = data.solutionSteps;
    }
    await ref.set(updateData, { merge: true });
    console.log(`✓ ${fix.id} (firestore) — ${changed} option(s) replaced${fix.correctTextFix ? ` + ${correctionHits} field(s) answer-corrected` : ''}`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
