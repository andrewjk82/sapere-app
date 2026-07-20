/**
 * Y12A Ch8 8A Applications of APs and GPs — Batch 1 (q1–q4)
 *
 * - Numeric / state-a-d-r items → multiple_choice with real AP/GP solutionSteps
 * - Show / explain items stay teacher_review with real model answers
 * - Clean stems (keep sequence context, drop useless parent preambles)
 * - Clean fraction opts (no float dumps like 0.333333...)
 * - isNew: true on written docs; merge upsert; rebuild indexes
 *
 *   node tools/scripts/convertY12ACh8A_batch1.cjs
 */
'use strict';

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

const SEED_PATH = path.join(
  __dirname,
  '../../src/constants/seedYear12Ch8Questions.js'
);

const META = {
  topicId: 'y12a-8A',
  chapterId: 'y12a-8',
  c: '8A',
  t: 'Applications of APs and GPs',
  year: 'Year 12',
  origin: 'seed',
  isNew: true,
  isActive: true,
  graphData: null,
  subQuestions: [],
  blanks: [],
  questionImage: '',
  examPaper: '',
};

function S(explanation, workingOut, graphData = null) {
  return { explanation, workingOut, graphData };
}

function assertOpts(id, opts, a) {
  if (!Array.isArray(opts) || opts.length !== 4) {
    throw new Error(`${id}: need 4 opts`);
  }
  if (!(Number.isInteger(a) && a >= 0 && a <= 3)) {
    throw new Error(`${id}: a must be 0–3, got ${a}`);
  }
  const uniq = new Set(opts);
  if (uniq.size !== 4) throw new Error(`${id}: duplicate opts ${JSON.stringify(opts)}`);
  // LaTeX paren balance on opts + question later
  return opts[a];
}

function checkLatex(id, text) {
  if (text == null) return;
  const s = String(text);
  if (s.includes('\x0c')) throw new Error(`${id}: form-feed`);
  // triple-backslash latex command starts
  if (/\\\\\\[a-zA-Z]/.test(s)) throw new Error(`${id}: triple backslash LaTeX`);
  const open = (s.match(/\\\(/g) || []).length;
  const close = (s.match(/\\\)/g) || []).length;
  if (open !== close) {
    throw new Error(`${id}: unbalanced \\( ${open} vs \\) ${close} in: ${s.slice(0, 80)}`);
  }
}

function mc(id, question, opts, a, steps, extra = {}) {
  const correct = assertOpts(id, opts, a);
  checkLatex(id, question);
  opts.forEach((o, i) => checkLatex(`${id}.opts[${i}]`, o));
  steps.forEach((st, i) => {
    checkLatex(`${id}.step${i}.e`, st.explanation);
    checkLatex(`${id}.step${i}.w`, st.workingOut);
  });
  if (steps.length < 3) throw new Error(`${id}: need >=3 steps`);
  return {
    id,
    ...META,
    type: 'multiple_choice',
    difficulty: extra.difficulty || 'easy',
    timeLimit: extra.timeLimit || 90,
    title: question.replace(/\\\(|\\\)/g, '').replace(/\s+/g, ' ').slice(0, 72),
    question,
    opts,
    options: opts.map((text) => ({ text, imageUrl: null })),
    a,
    answer: String(a),
    hint: extra.hint || '',
    solution: `The correct answer is ${correct}.`,
    solutionSteps: steps,
    requiresManualGrading: false,
    isManual: true,
  };
}

function tr(id, question, answer, steps, extra = {}) {
  checkLatex(id, question);
  checkLatex(id, answer);
  steps.forEach((st, i) => {
    checkLatex(`${id}.step${i}.e`, st.explanation);
    checkLatex(`${id}.step${i}.w`, st.workingOut);
  });
  if (steps.length < 3) throw new Error(`${id}: need >=3 steps`);
  return {
    id,
    ...META,
    type: 'teacher_review',
    difficulty: extra.difficulty || 'easy',
    timeLimit: extra.timeLimit || 120,
    title: question.replace(/\\\(|\\\)/g, '').replace(/\s+/g, ' ').slice(0, 72),
    question,
    answer,
    opts: null,
    options: null,
    a: null,
    hint: extra.hint || 'Write a full structured solution for the teacher to mark.',
    solution: answer,
    solutionSteps: steps,
    requiresManualGrading: true,
    isManual: true,
  };
}

// ── Build batch ──────────────────────────────────────────────────────────

const Q = [];

// ═══════════════ Q1: AP 7, 13, 19, 25, … ═══════════════

Q.push(
  tr(
    'y12a-8a-q1a',
    'Show that the sequence \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\) is an arithmetic sequence.',
    'An arithmetic sequence has a constant difference between consecutive terms.\nCompute successive differences:\n\\(13 - 7 = 6\\)\n\\(19 - 13 = 6\\)\n\\(25 - 19 = 6\\)\nSince each difference equals the same constant \\(d = 6\\), the sequence is arithmetic.',
    [
      S(
        'Given: the sequence \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\). Why check differences? By definition an arithmetic sequence (AP) has a constant common difference \\(d\\) between successive terms. Strategy: subtract each term from the next and verify the results are identical. A common slip is comparing non-consecutive terms or mixing ratios (which test for a GP) with differences.',
        '\\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\)'
      ),
      S(
        'What we compute: first-order differences. \\(13 - 7 = 6\\), \\(19 - 13 = 6\\), \\(25 - 19 = 6\\). Why three pairs? You need enough consecutive pairs to see the pattern is constant, not a one-off coincidence. These equal differences will be used as the common difference \\(d\\) in later parts.',
        '\\(13-7=6,\\quad 19-13=6,\\quad 25-19=6\\)'
      ),
      S(
        'Conclusion: every computed difference is \\(6\\), so the common difference is constant. Therefore the sequence is an arithmetic progression with \\(d = 6\\). The first term is \\(a = 7\\), which later parts use with the AP formulas for \\(T_n\\) and \\(S_n\\).',
        '\\(d = 6\\ \\text{(constant)}\\ \\Rightarrow\\ \\text{AP}\\)'
      ),
      S(
        'Final model answer: the successive differences are all \\(6\\), so the sequence is arithmetic with common difference \\(d = 6\\). This is the required "show that" verification for an AP.',
        '\\text{AP with } d=6'
      ),
    ],
    { difficulty: 'easy', timeLimit: 90 }
  )
);

Q.push(
  mc(
    'y12a-8a-q1bi',
    'The sequence \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\) is an arithmetic sequence. State the first term \\(a\\).',
    ['\\(5\\)', '\\(6\\)', '\\(7\\)', '\\(8\\)'],
    2,
    [
      S(
        'Given: the arithmetic sequence starts \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\). Why identify \\(a\\) first? Every AP formula (\\(T_n\\), \\(S_n\\)) needs the first term as a parameter. What is the first term? By definition, \\(a\\) is the term in position \\(n = 1\\), which is the leftmost listed value. A common slip is taking the common difference as \\(a\\), or taking the second term.',
        '\\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\)'
      ),
      S(
        'Read the first entry of the sequence: it is \\(7\\). That is \\(T_1\\), so \\(a = 7\\). This value will be substituted into \\(T_n = a + (n-1)d\\) and into sum formulas in later questions on the same sequence.',
        '\\(a = T_1 = 7\\)'
      ),
      S(
        'Final answer: \\(a = 7\\). Check against the list: the sequence really begins at 7, not at 13 or at the difference 6.',
        '\\(7\\)'
      ),
    ],
    { difficulty: 'easy', hint: 'The first term is the first number listed in the sequence.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q1bii',
    'The sequence \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\) is an arithmetic sequence. State the common difference \\(d\\).',
    ['\\(4\\)', '\\(5\\)', '\\(6\\)', '\\(7\\)'],
    2,
    [
      S(
        'Given: AP \\(7,\\ 13,\\ 19,\\ 25,\\ \\dots\\). Why find \\(d\\)? The common difference is the constant added to get from one term to the next, and it appears in every AP formula. What: compute any successive difference, e.g. second minus first. A common slip is dividing terms (GP ratio) or using \\(T_3 - T_1\\) without dividing by 2.',
        '\\(d = T_2 - T_1\\)'
      ),
      S(
        'Calculate: \\(13 - 7 = 6\\). Verify with the next pair: \\(19 - 13 = 6\\). The match confirms constancy. We now have \\(a = 7\\) and \\(d = 6\\) ready for term and sum calculations.',
        '\\(d = 13 - 7 = 6\\)'
      ),
      S(
        'Final answer: \\(d = 6\\). Sign check: terms are increasing, so \\(d\\) is positive (not \\(-6\\)).',
        '\\(6\\)'
      ),
    ],
    { difficulty: 'easy', hint: 'Subtract consecutive terms: second minus first.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q1c',
    'The arithmetic sequence has first term \\(a = 7\\) and common difference \\(d = 6\\). Use \\(T_n = a + (n-1)d\\) to find the 41st term \\(T_{41}\\).',
    ['\\(241\\)', '\\(246\\)', '\\(247\\)', '\\(253\\)'],
    2,
    [
      S(
        'Given: \\(a = 7\\), \\(d = 6\\), find \\(T_{41}\\). Why the general term formula? An AP is linear in the index \\(n\\), so \\(T_n = a + (n-1)d\\) jumps from the first term by \\((n-1)\\) steps of size \\(d\\). Strategy: substitute \\(n = 41\\) carefully — note the factor is \\((n-1)\\), not \\(n\\). A common slip is using \\(a + nd\\) (off-by-one).',
        '\\(T_n = a + (n-1)d\\)'
      ),
      S(
        'What we substitute: \\(n = 41\\), so there are \\(40\\) steps of size \\(6\\) after the first term.\\[T_{41} = 7 + (41-1)\\times 6 = 7 + 40\\times 6.\\]This intermediate product is the total increase from term 1 to term 41.',
        '\\(T_{41} = 7 + 40\\times 6\\)'
      ),
      S(
        'Evaluate: \\(40\\times 6 = 240\\), then \\(7 + 240 = 247\\). Why add, not multiply, the first term? Because \\(a\\) is a starting value and the rest is pure accumulation of differences.',
        '\\(T_{41} = 7 + 240 = 247\\)'
      ),
      S(
        'Final answer: \\(T_{41} = 247\\). Quick check: \\(T_2 = 7+6 = 13\\) matches the known second term, so the formula was applied correctly.',
        '\\(247\\)'
      ),
    ],
    {
      difficulty: 'easy',
      timeLimit: 100,
      hint: 'Use \\(T_n = a+(n-1)d\\) with \\(n=41\\). Watch the off-by-one: factor is \\((n-1)\\).',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q1d',
    'The arithmetic sequence has first term \\(a = 7\\) and common difference \\(d = 6\\). Use \\(S_n = \\dfrac{1}{2}n\\bigl(2a+(n-1)d\\bigr)\\) to find the sum \\(S_{30}\\) of the first 30 terms.',
    ['\\(2730\\)', '\\(2820\\)', '\\(2910\\)', '\\(3000\\)'],
    1,
    [
      S(
        'Given: \\(a = 7\\), \\(d = 6\\), \\(n = 30\\). Why a sum formula? Adding thirty terms by hand is inefficient; the AP sum formula collapses the arithmetic series into one evaluation. Strategy: use \\(S_n = \\dfrac{1}{2}n\\bigl(2a+(n-1)d\\bigr)\\). A common slip is forgetting the outer factor \\(\\dfrac{1}{2}n\\) or using \\(n-1\\) incorrectly.',
        '\\(S_n = \\dfrac{1}{2}n\\bigl(2a+(n-1)d\\bigr)\\)'
      ),
      S(
        'Substitute the known values:\\[S_{30} = \\dfrac{1}{2}\\times 30\\bigl(2\\times 7 + (30-1)\\times 6\\bigr) = 15\\bigl(14 + 29\\times 6\\bigr).\\]Simplifying the bracket first keeps arithmetic clean for the next step.',
        '\\(S_{30} = 15\\bigl(14 + 29\\times 6\\bigr)\\)'
      ),
      S(
        'Inside: \\(29\\times 6 = 174\\), so \\(14 + 174 = 188\\). Then \\(S_{30} = 15\\times 188\\). Why 15? Because \\(\\dfrac{1}{2}\\times 30 = 15\\). A common slip multiplies by 30 instead of 15.',
        '\\(S_{30} = 15\\times 188\\)'
      ),
      S(
        'Compute \\(15\\times 188 = 15\\times 200 - 15\\times 12 = 3000 - 180 = 2820\\). Final answer: \\(S_{30} = 2820\\). Context: this is the total of the first thirty terms of the AP starting at 7 with difference 6.',
        '\\(2820\\)'
      ),
    ],
    {
      difficulty: 'medium',
      timeLimit: 120,
      hint: 'Substitute into \\(S_n=\\frac12 n(2a+(n-1)d)\\) with \\(n=30\\).',
    }
  )
);

// ═══════════════ Q2: first 400 even numbers ═══════════════

Q.push(
  tr(
    'y12a-8a-q2ai',
    'Consider the sum of the first 400 even numbers: \\(2 + 4 + 6 + \\dots + 800\\).\nShow that the terms form an arithmetic progression.',
    'The terms are \\(2,\\ 4,\\ 6,\\ \\dots,\\ 800\\).\nDifferences of consecutive terms:\n\\(4 - 2 = 2\\)\n\\(6 - 4 = 2\\)\nThe difference is constant, so the series is an arithmetic progression with first term \\(a = 2\\) and common difference \\(d = 2\\).',
    [
      S(
        'Given: the series \\(2 + 4 + 6 + \\dots + 800\\). Why prove it is an AP before summing? Sum formulas for arithmetic progressions only apply when consecutive differences are constant. Strategy: inspect successive differences of the listed terms. A common slip is assuming "even numbers" means a GP, or forgetting to check more than one pair.',
        '\\(2,\\ 4,\\ 6,\\ \\dots,\\ 800\\)'
      ),
      S(
        'What we compute: \\(4 - 2 = 2\\) and \\(6 - 4 = 2\\). The same difference appears, and even numbers increase by 2 by definition, so the pattern continues all the way to 800. These facts identify \\(a\\) and \\(d\\) for the next parts.',
        '\\(4-2=2,\\quad 6-4=2\\)'
      ),
      S(
        'Conclusion: constant difference \\(d = 2\\) with first term \\(a = 2\\) means the terms form an AP. Later we use this to find \\(n\\) and \\(S_n\\).',
        '\\text{AP with } a=2,\\ d=2'
      ),
      S(
        'Final model answer: successive differences equal 2 throughout, so the series is arithmetic with \\(a = 2\\) and \\(d = 2\\).',
        '\\text{AP: } a=2,\\ d=2'
      ),
    ],
    { difficulty: 'easy' }
  )
);

Q.push(
  mc(
    'y12a-8a-q2aii',
    'Consider the sum of the first 400 even numbers: \\(2 + 4 + 6 + \\dots + 800\\).\nState the first term \\(a\\) of this arithmetic progression.',
    ['\\(0\\)', '\\(1\\)', '\\(2\\)', '\\(4\\)'],
    2,
    [
      S(
        'Given: the AP of even numbers begins at 2 and ends at 800. Why state \\(a\\)? It is required for both the general-term and sum formulas. What: the first term is the first number written in the series. A common slip is taking \\(a = 0\\) (thinking of "even numbers from zero") or \\(a = 4\\) (second term).',
        '\\(2 + 4 + 6 + \\dots + 800\\)'
      ),
      S(
        'The leftmost term is 2, so \\(a = 2\\). This matches the definition of the first positive even number in the sum described.',
        '\\(a = 2\\)'
      ),
      S(
        'Final answer: \\(a = 2\\). Keep this value for finding \\(n\\) and \\(S_n\\) next.',
        '\\(2\\)'
      ),
    ],
    { difficulty: 'easy', hint: 'Read the first number in the series.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q2aiii',
    'Consider the sum of the first 400 even numbers: \\(2 + 4 + 6 + \\dots + 800\\).\nState the common difference \\(d\\) of this arithmetic progression.',
    ['\\(1\\)', '\\(2\\)', '\\(4\\)', '\\(8\\)'],
    1,
    [
      S(
        'Given: consecutive even numbers in an AP. Why find \\(d\\)? The spacing between successive terms is the common difference used in \\(T_n\\) and \\(S_n\\). What: subtract the first term from the second. A common slip is using 4 (skipping one even number) or 1 (odd-number spacing).',
        '\\(d = T_2 - T_1\\)'
      ),
      S(
        'Compute \\(4 - 2 = 2\\). Consecutive even integers always differ by 2, which confirms the calculation. So \\(d = 2\\).',
        '\\(d = 4 - 2 = 2\\)'
      ),
      S(
        'Final answer: \\(d = 2\\). Positive sign is correct because the terms increase.',
        '\\(2\\)'
      ),
    ],
    { difficulty: 'easy', hint: 'Consecutive even integers differ by 2.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q2aiv',
    'Consider the arithmetic progression \\(2,\\ 4,\\ 6,\\ \\dots,\\ 800\\) with \\(a = 2\\) and \\(d = 2\\). Find the number of terms \\(n\\).',
    ['\\(200\\)', '\\(399\\)', '\\(400\\)', '\\(401\\)'],
    2,
    [
      S(
        'Given: last term \\(l = 800\\), \\(a = 2\\), \\(d = 2\\). Why solve for \\(n\\)? The sum formula needs the count of terms. What formula: set \\(T_n = a + (n-1)d\\) equal to the last term. A common slip is solving \\(2n = 800\\) without the \\((n-1)\\) structure carefully, or counting 0 as a term.',
        '\\(T_n = a + (n-1)d = 800\\)'
      ),
      S(
        'Substitute: \\(2 + (n-1)\\times 2 = 800\\). Why expand carefully? The factor 2 multiplies only \\((n-1)\\). Rearrange to isolate \\(n\\).',
        '\\(2 + 2(n-1) = 800\\)'
      ),
      S(
        'Divide the second term structure: \\(2(n-1) = 798\\) so \\(n-1 = 399\\), hence \\(n = 400\\). Alternatively, the first 400 positive even numbers end at \\(2\\times 400 = 800\\), which matches.',
        '\\(n-1 = 399\\;\\Rightarrow\\; n = 400\\)'
      ),
      S(
        'Final answer: \\(n = 400\\). Context: there are exactly 400 terms in the sum of the first 400 even numbers.',
        '\\(400\\)'
      ),
    ],
    {
      difficulty: 'easy',
      timeLimit: 100,
      hint: 'Solve \\(a+(n-1)d = 800\\) for \\(n\\).',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q2b',
    'For the arithmetic series \\(2 + 4 + 6 + \\dots + 800\\) with \\(a = 2\\), last term \\(l = 800\\) and \\(n = 400\\), use \\(S_n = \\dfrac{1}{2}n(a+l)\\) to find the sum.',
    ['\\(80000\\)', '\\(160000\\)', '\\(160400\\)', '\\(160800\\)'],
    2,
    [
      S(
        'Given: \\(a = 2\\), \\(l = 800\\), \\(n = 400\\). Why this form of the sum? When both ends of an AP are known, \\(S_n = \\dfrac{1}{2}n(a+l)\\) is the quickest formula (average of first and last, times the number of terms). Strategy: substitute directly. A common slip is using only one of \\(a\\) or \\(l\\), or forgetting the factor \\(\\dfrac{1}{2}\\).',
        '\\(S_n = \\dfrac{1}{2}n(a+l)\\)'
      ),
      S(
        'Substitute: \\(S_{400} = \\dfrac{1}{2}\\times 400\\times(2+800) = 200\\times 802\\). Why 200? Half of 400. The sum of first and last is 802.',
        '\\(S_{400} = 200\\times 802\\)'
      ),
      S(
        'Compute \\(200\\times 802 = 200\\times 800 + 200\\times 2 = 160000 + 400 = 160400\\).',
        '\\(S_{400} = 160400\\)'
      ),
      S(
        'Final answer: \\(160400\\). Context: this is the sum of the first 400 positive even numbers. Equivalent check: sum of first 400 positives is \\(\\dfrac{400\\times 401}{2} = 80200\\), times 2 for even numbers gives 160400.',
        '\\(160400\\)'
      ),
    ],
    {
      difficulty: 'medium',
      timeLimit: 120,
      hint: 'Use \\(S_n=\\frac12 n(a+l)\\) with the known ends and \\(n=400\\).',
    }
  )
);

// ═══════════════ Q3: GP 4, 12, 36, 108, … ═══════════════

Q.push(
  tr(
    'y12a-8a-q3a',
    'Show that \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\) is a geometric sequence.',
    'A geometric sequence has a constant ratio between consecutive terms.\nCompute successive ratios:\n\\(\\dfrac{12}{4} = 3\\)\n\\(\\dfrac{36}{12} = 3\\)\n\\(\\dfrac{108}{36} = 3\\)\nSince each ratio equals the same constant \\(r = 3\\), the sequence is geometric.',
    [
      S(
        'Given: the sequence \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\). Why ratios, not differences? A geometric sequence (GP) multiplies by a constant common ratio \\(r\\) each step. Strategy: divide each term by the previous term and check constancy. A common slip is subtracting (AP test) instead of dividing.',
        '\\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\)'
      ),
      S(
        'What we compute: \\(\\dfrac{12}{4} = 3\\), \\(\\dfrac{36}{12} = 3\\), \\(\\dfrac{108}{36} = 3\\). Three equal ratios are strong evidence of a constant \\(r\\). These establish \\(r = 3\\) for later term and sum work.',
        '\\(\\dfrac{12}{4}=\\dfrac{36}{12}=\\dfrac{108}{36}=3\\)'
      ),
      S(
        'Conclusion: the common ratio is constant at \\(r = 3\\), so the sequence is geometric with first term \\(a = 4\\).',
        '\\(r = 3\\ \\text{(constant)}\\ \\Rightarrow\\ \\text{GP}\\)'
      ),
      S(
        'Final model answer: successive ratios equal 3, hence the sequence is a GP with \\(r = 3\\).',
        '\\text{GP with } r=3'
      ),
    ],
    { difficulty: 'easy' }
  )
);

Q.push(
  mc(
    'y12a-8a-q3bi',
    'The sequence \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\) is a geometric sequence. State the first term \\(a\\).',
    ['\\(2\\)', '\\(3\\)', '\\(4\\)', '\\(12\\)'],
    2,
    [
      S(
        'Given: GP starting \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\). Why identify \\(a\\)? Geometric formulas \\(T_n = ar^{n-1}\\) and \\(S_n\\) both need the first term. What: read the first listed term. A common slip is taking the common ratio 3 as \\(a\\), or the second term 12.',
        '\\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\)'
      ),
      S(
        'The first term is 4, so \\(a = 4\\). This pairs with \\(r = 3\\) found from the ratios.',
        '\\(a = 4\\)'
      ),
      S(
        'Final answer: \\(a = 4\\).',
        '\\(4\\)'
      ),
    ],
    { difficulty: 'easy', hint: 'The first term is the first number in the list.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q3bii',
    'The sequence \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\) is a geometric sequence. State the common ratio \\(r\\).',
    ['\\(2\\)', '\\(3\\)', '\\(4\\)', '\\(12\\)'],
    1,
    [
      S(
        'Given: GP \\(4,\\ 12,\\ 36,\\ 108,\\ \\dots\\). Why find \\(r\\)? Each term is the previous term times \\(r\\), so \\(r\\) drives growth in \\(T_n\\) and \\(S_n\\). What: divide the second term by the first. A common slip is subtracting (getting 8) or dividing the wrong way around (\\(4/12\\)).',
        '\\(r = \\dfrac{T_2}{T_1}\\)'
      ),
      S(
        'Calculate \\(\\dfrac{12}{4} = 3\\). Check: \\(\\dfrac{36}{12} = 3\\). So the common ratio is \\(r = 3\\).',
        '\\(r = 3\\)'
      ),
      S(
        'Final answer: \\(r = 3\\). Positive and greater than 1 matches the rapidly increasing sequence.',
        '\\(3\\)'
      ),
    ],
    { difficulty: 'easy', hint: 'Divide the second term by the first term.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q3c',
    'A geometric sequence has first term \\(a = 4\\) and common ratio \\(r = 3\\). Use \\(T_n = ar^{n-1}\\) to find the sixth term \\(T_6\\).',
    ['\\(324\\)', '\\(972\\)', '\\(2916\\)', '\\(8748\\)'],
    1,
    [
      S(
        'Given: \\(a = 4\\), \\(r = 3\\), find \\(T_6\\). Why \\(T_n = ar^{n-1}\\)? In a GP you multiply by \\(r\\) once for each step after the first term, so there are \\((n-1)\\) factors of \\(r\\). Strategy: substitute \\(n = 6\\). A common slip is using \\(ar^n\\) (one power too many) or \\(a + (n-1)r\\) (AP formula).',
        '\\(T_n = ar^{n-1}\\)'
      ),
      S(
        'Substitute: \\(T_6 = 4\\times 3^{5}\\). Why exponent 5? Because \\(n-1 = 5\\). Compute the power before multiplying by 4.',
        '\\(T_6 = 4\\times 3^{5}\\)'
      ),
      S(
        'Powers of 3: \\(3^{2} = 9\\), \\(3^{3} = 27\\), \\(3^{4} = 81\\), \\(3^{5} = 243\\). Then \\(4\\times 243 = 972\\).',
        '\\(T_6 = 4\\times 243 = 972\\)'
      ),
      S(
        'Final answer: \\(T_6 = 972\\). Spot-check: \\(T_1=4\\), \\(T_2=12\\), \\(T_3=36\\), \\(T_4=108\\), \\(T_5=324\\), \\(T_6=972\\).',
        '\\(972\\)'
      ),
    ],
    {
      difficulty: 'medium',
      timeLimit: 120,
      hint: 'Use \\(T_n=ar^{n-1}\\) with \\(n=6\\). Exponent is \\(n-1=5\\).',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q3d',
    'A geometric sequence has first term \\(a = 4\\) and common ratio \\(r = 3\\). Use \\(S_n = \\dfrac{a(r^n-1)}{r-1}\\) to find the sum \\(S_6\\) of the first six terms.',
    ['\\(728\\)', '\\(1456\\)', '\\(2184\\)', '\\(2916\\)'],
    1,
    [
      S(
        'Given: \\(a = 4\\), \\(r = 3\\), \\(n = 6\\). Why this sum formula? For a finite GP with \\(r \\ne 1\\), the closed form \\(S_n = \\dfrac{a(r^n-1)}{r-1}\\) avoids adding six growing terms by hand. Strategy: evaluate \\(r^n\\) first. A common slip is using the infinite-sum formula or the version for \\(|r|<1\\) with \\(1-r^n\\) without adjusting the denominator.',
        '\\(S_n = \\dfrac{a(r^n-1)}{r-1}\\)'
      ),
      S(
        'Substitute: \\(S_6 = \\dfrac{4(3^{6}-1)}{3-1}\\). Compute \\(3^{6} = 729\\) (since \\(3^{5}=243\\) and \\(3^{6}=729\\)).',
        '\\(S_6 = \\dfrac{4(729-1)}{2}\\)'
      ),
      S(
        'Simplify: \\(729-1 = 728\\), so \\(\\dfrac{4\\times 728}{2} = 2\\times 728 = 1456\\). Why divide by 2? Because \\(r-1 = 2\\).',
        '\\(S_6 = 1456\\)'
      ),
      S(
        'Final answer: \\(S_6 = 1456\\). Check: sum \\(4+12+36+108+324+972 = 1456\\).',
        '\\(1456\\)'
      ),
    ],
    {
      difficulty: 'medium',
      timeLimit: 120,
      hint: 'Use \\(S_n=\\frac{a(r^n-1)}{r-1}\\) with \\(n=6\\).',
    }
  )
);

// ═══════════════ Q4: decaying GP 162, 54, 18, … ═══════════════

Q.push(
  tr(
    'y12a-8a-q4a',
    'Show that the sequence \\(162,\\ 54,\\ 18,\\ \\dots\\) is a geometric progression.',
    'Compute successive ratios:\n\\(\\dfrac{54}{162} = \\dfrac{1}{3}\\)\n\\(\\dfrac{18}{54} = \\dfrac{1}{3}\\)\nThe ratio is constant, so the sequence is a GP with first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\).',
    [
      S(
        'Given: \\(162,\\ 54,\\ 18,\\ \\dots\\). Why ratios? A GP is defined by a constant multiplicative ratio. Strategy: divide consecutive terms. A common slip is subtracting and concluding it is an AP (the differences \\(-108\\), \\(-36\\) are not constant).',
        '\\(162,\\ 54,\\ 18,\\ \\dots\\)'
      ),
      S(
        'What we compute: \\(\\dfrac{54}{162} = \\dfrac{1}{3}\\) and \\(\\dfrac{18}{54} = \\dfrac{1}{3}\\). Equal ratios confirm a GP with \\(r = \\dfrac{1}{3}\\). Because \\(|r|<1\\), this series will later have a finite limiting sum.',
        '\\(\\dfrac{54}{162}=\\dfrac{18}{54}=\\dfrac{1}{3}\\)'
      ),
      S(
        'Conclusion: constant ratio \\(r = \\dfrac{1}{3}\\) means the sequence is geometric with \\(a = 162\\).',
        '\\text{GP with } a=162,\\ r=\\dfrac{1}{3}'
      ),
      S(
        'Final model answer: successive ratios equal \\(\\dfrac{1}{3}\\), so the sequence is a GP.',
        '\\text{GP: } r=\\dfrac{1}{3}'
      ),
    ],
    { difficulty: 'easy' }
  )
);

Q.push(
  mc(
    'y12a-8a-q4bi',
    'The sequence \\(162,\\ 54,\\ 18,\\ \\dots\\) is a geometric progression. Write down the first term \\(a\\).',
    ['\\(18\\)', '\\(54\\)', '\\(162\\)', '\\(486\\)'],
    2,
    [
      S(
        'Given: GP \\(162,\\ 54,\\ 18,\\ \\dots\\). Why state \\(a\\)? All GP formulas start from the first term. What: the first listed value. A common slip is reading the second term 54, or computing a product.',
        '\\(162,\\ 54,\\ 18,\\ \\dots\\)'
      ),
      S(
        'The first term is 162, so \\(a = 162\\).',
        '\\(a = 162\\)'
      ),
      S(
        'Final answer: \\(a = 162\\).',
        '\\(162\\)'
      ),
    ],
    { difficulty: 'easy', hint: 'Read the first number in the sequence.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q4bii',
    'The sequence \\(162,\\ 54,\\ 18,\\ \\dots\\) is a geometric progression. Write down the common ratio \\(r\\).',
    ['\\(\\dfrac{1}{9}\\)', '\\(\\dfrac{1}{3}\\)', '\\(\\dfrac{1}{2}\\)', '\\(3\\)'],
    1,
    [
      S(
        'Given: GP \\(162,\\ 54,\\ 18,\\ \\dots\\). Why find \\(r\\) as a fraction? Exact form avoids decimal rounding and is required for clean powers later. What: divide second by first and simplify. A common slip is writing \\(3\\) (the reciprocal) because the sequence is decreasing — decreasing means \\(0 < r < 1\\), not \\(r > 1\\).',
        '\\(r = \\dfrac{T_2}{T_1}\\)'
      ),
      S(
        'Compute \\(\\dfrac{54}{162} = \\dfrac{54\\div 54}{162\\div 54} = \\dfrac{1}{3}\\). Check: \\(\\dfrac{18}{54} = \\dfrac{1}{3}\\).',
        '\\(r = \\dfrac{1}{3}\\)'
      ),
      S(
        'Final answer: \\(r = \\dfrac{1}{3}\\). Because \\(|r| < 1\\), a limiting sum will exist for this series.',
        '\\(\\dfrac{1}{3}\\)'
      ),
    ],
    {
      difficulty: 'easy',
      hint: 'Divide the second term by the first and simplify the fraction.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q4c',
    'A geometric progression has first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\). Use \\(T_n = ar^{n-1}\\) to find the sixth term \\(T_6\\).',
    ['\\(\\dfrac{2}{9}\\)', '\\(\\dfrac{2}{3}\\)', '\\(2\\)', '\\(6\\)'],
    1,
    [
      S(
        'Given: \\(a = 162\\), \\(r = \\dfrac{1}{3}\\), find \\(T_6\\). Why powers of the ratio? Each step multiplies by \\(\\dfrac{1}{3}\\), so after five steps the first term is scaled by \\(\\left(\\dfrac{1}{3}\\right)^{5}\\). Strategy: write \\(T_6 = 162\\times\\left(\\dfrac{1}{3}\\right)^{5}\\) and simplify. A common slip is exponent 6 instead of 5, or multiplying by 3 repeatedly.',
        '\\(T_6 = 162\\left(\\dfrac{1}{3}\\right)^{5}\\)'
      ),
      S(
        'What we evaluate: \\(\\left(\\dfrac{1}{3}\\right)^{5} = \\dfrac{1}{243}\\), so \\(T_6 = \\dfrac{162}{243}\\). Simplify by dividing numerator and denominator by 81: \\(162\\div 81 = 2\\) and \\(243\\div 81 = 3\\).',
        '\\(T_6 = \\dfrac{162}{243} = \\dfrac{2}{3}\\)'
      ),
      S(
        'Final answer: \\(T_6 = \\dfrac{2}{3}\\). Spot-check the chain: \\(162,\\ 54,\\ 18,\\ 6,\\ 2,\\ \\dfrac{2}{3}\\).',
        '\\(\\dfrac{2}{3}\\)'
      ),
    ],
    {
      difficulty: 'medium',
      timeLimit: 120,
      hint: 'Compute \\(162\\times(1/3)^{5}\\) and simplify the fraction.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q4d',
    'A geometric progression has first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\). Use \\(S_n = \\dfrac{a(1-r^n)}{1-r}\\) to find the sum \\(S_6\\) of the first six terms.',
    ['\\(\\dfrac{242}{3}\\)', '\\(\\dfrac{728}{3}\\)', '\\(243\\)', '\\(728\\)'],
    1,
    [
      S(
        'Given: \\(a = 162\\), \\(r = \\dfrac{1}{3}\\), \\(n = 6\\). Why the form with \\(1-r^n\\)? When \\(0 < r < 1\\) the standard finite-sum formula is often written \\(S_n = \\dfrac{a(1-r^n)}{1-r}\\) (equivalent to \\(\\dfrac{a(r^n-1)}{r-1}\\)). Strategy: compute \\(r^6\\) first. A common slip is using the infinite sum too early or forgetting to raise \\(r\\) to the power \\(n\\).',
        '\\(S_6 = \\dfrac{162\\bigl(1-(\\frac{1}{3})^{6}\\bigr)}{1-\\frac{1}{3}}\\)'
      ),
      S(
        'First, \\(\\left(\\dfrac{1}{3}\\right)^{6} = \\dfrac{1}{729}\\) and \\(1-\\dfrac{1}{3} = \\dfrac{2}{3}\\). So\\[S_6 = \\dfrac{162\\left(1-\\dfrac{1}{729}\\right)}{\\dfrac{2}{3}} = 162\\times\\dfrac{728}{729}\\times\\dfrac{3}{2}.\\]',
        '\\(S_6 = 162\\times\\dfrac{728}{729}\\times\\dfrac{3}{2}\\)'
      ),
      S(
        'Simplify: \\(162\\times\\dfrac{3}{2} = 243\\), so \\(S_6 = 243\\times\\dfrac{728}{729}\\). Since \\(243 = \\dfrac{729}{3}\\), we get \\(S_6 = \\dfrac{728}{3}\\).',
        '\\(S_6 = \\dfrac{728}{3}\\)'
      ),
      S(
        'Final answer: \\(S_6 = \\dfrac{728}{3}\\). Note this is less than the limiting sum 243, as expected for a partial sum of a convergent series.',
        '\\(\\dfrac{728}{3}\\)'
      ),
    ],
    {
      difficulty: 'hard',
      timeLimit: 150,
      hint: 'Use \\(S_n=\\frac{a(1-r^n)}{1-r}\\) with \\(r=\\frac13\\) and \\(n=6\\).',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q4ei',
    'The geometric series has first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\). Why does this series have a limiting sum?',
    [
      'Because \\(|r| > 1\\)',
      'Because \\(r = 1\\)',
      'Because \\(|r| < 1\\)',
      'Because the first term is positive',
    ],
    2,
    [
      S(
        'Given: a geometric series with \\(r = \\dfrac{1}{3}\\). Why ask about a limiting sum? Infinite GPs only converge under a strict condition on \\(r\\). What is the theorem? The infinite geometric series \\(\\sum ar^{k}\\) converges if and only if \\(|r| < 1\\). A common slip is thinking any decreasing sequence of positive terms automatically converges (counterexamples exist when \\(r\\) is not constant or when \\(|r|\\ge 1\\)).',
        '\\text{Need } |r| < 1'
      ),
      S(
        'Check the condition: \\(|r| = \\left|\\dfrac{1}{3}\\right| = \\dfrac{1}{3} < 1\\). Therefore a finite limiting sum \\(S_{\\infty}\\) exists. The positivity of \\(a\\) affects the sign of the sum, not existence.',
        '\\(\\left|\\dfrac{1}{3}\\right| = \\dfrac{1}{3} < 1\\)'
      ),
      S(
        'Final answer: because \\(|r| < 1\\). This justifies using \\(S_{\\infty} = \\dfrac{a}{1-r}\\) in the next part.',
        '\\(|r| < 1\\)'
      ),
    ],
    {
      difficulty: 'easy',
      hint: 'An infinite GP converges precisely when the absolute value of the common ratio is less than 1.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q4eii',
    'A geometric series has first term \\(a = 162\\) and common ratio \\(r = \\dfrac{1}{3}\\). Use \\(S_{\\infty} = \\dfrac{a}{1-r}\\) to find the limiting sum.',
    ['\\(81\\)', '\\(162\\)', '\\(243\\)', '\\(324\\)'],
    2,
    [
      S(
        'Given: \\(a = 162\\), \\(r = \\dfrac{1}{3}\\), and we already know \\(|r| < 1\\). Why the infinite-sum formula? As \\(n\\to\\infty\\), the finite sum approaches \\(\\dfrac{a}{1-r}\\) when the series converges. Strategy: substitute carefully into the denominator. A common slip is writing \\(1+r\\) or using \\(a(1-r)\\) in the numerator only.',
        '\\(S_{\\infty} = \\dfrac{a}{1-r}\\)'
      ),
      S(
        'Denominator: \\(1 - \\dfrac{1}{3} = \\dfrac{2}{3}\\). So \\(S_{\\infty} = \\dfrac{162}{\\dfrac{2}{3}} = 162\\times\\dfrac{3}{2}\\).',
        '\\(S_{\\infty} = 162\\times\\dfrac{3}{2}\\)'
      ),
      S(
        'Compute \\(162\\times\\dfrac{3}{2} = 81\\times 3 = 243\\). Final answer: \\(S_{\\infty} = 243\\). Context: every partial sum is less than 243 and approaches 243 from below.',
        '\\(243\\)'
      ),
    ],
    {
      difficulty: 'medium',
      timeLimit: 100,
      hint: 'Substitute into \\(S_\\infty=\\frac{a}{1-r}\\).',
    }
  )
);

// ── Sanity: every a matches opts[a] ─────────────────────────────────────
for (const q of Q) {
  if (q.type === 'multiple_choice') {
    if (q.opts[q.a] == null) throw new Error(`${q.id}: opts[a] missing`);
  }
}

console.log(`Built ${Q.length} items:`);
Q.forEach((q) => {
  const tag =
    q.type === 'multiple_choice'
      ? `MC a=${q.a} → ${q.opts[q.a]}`
      : 'TR';
  console.log(`  ${q.id}  ${tag}`);
});

async function updateSeedFile() {
  const src = readFileSync(SEED_PATH, 'utf8');
  // The seed is `export const Y12_CH8_QUESTIONS = [ ... ];`
  // Parse via node require after a temp transform is heavy; instead splice by id.
  let { Y12_CH8_QUESTIONS } = require(SEED_PATH);
  // require may fail on ESM export — use Function eval
  if (!Y12_CH8_QUESTIONS) {
    const body = src.replace(/^export const Y12_CH8_QUESTIONS = /, 'module.exports = ');
    // eslint-disable-next-line no-eval
    Y12_CH8_QUESTIONS = eval(body.replace(/export\s+const\s+Y12_CH8_QUESTIONS\s*=\s*/, ''));
  }
}

function loadSeedArray() {
  const src = readFileSync(SEED_PATH, 'utf8');
  const wrapped =
    src.replace(/^export const Y12_CH8_QUESTIONS\s*=\s*/, 'module.exports = ') +
    (src.trim().endsWith(';') ? '' : '');
  const tmp = path.join('/tmp', 'y12ch8_seed_tmp.cjs');
  writeFileSync(tmp, wrapped);
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

function saveSeedArray(arr) {
  const body =
    'export const Y12_CH8_QUESTIONS = ' +
    JSON.stringify(arr, null, 2) +
    ';\n';
  writeFileSync(SEED_PATH, body);
}

async function main() {
  const byId = new Map(Q.map((q) => [q.id, q]));

  // Update local seed
  const seed = loadSeedArray();
  let updated = 0;
  for (let i = 0; i < seed.length; i++) {
    const patch = byId.get(seed[i].id);
    if (!patch) continue;
    // Keep seed lean like existing file (no options/title extras required, but OK to include)
    const lean = {
      id: patch.id,
      topicId: patch.topicId,
      c: patch.c,
      t: patch.t,
      type: patch.type,
      difficulty: patch.difficulty,
      timeLimit: patch.timeLimit,
      question: patch.question,
      hint: patch.hint || '',
      solution: patch.solution,
      solutionSteps: patch.solutionSteps,
      graphData: null,
      isNew: true,
      requiresManualGrading: patch.requiresManualGrading,
    };
    if (patch.type === 'multiple_choice') {
      lean.opts = patch.opts;
      lean.a = patch.a;
      lean.answer = patch.answer;
    } else {
      lean.answer = patch.answer;
    }
    seed[i] = lean;
    updated++;
  }
  // Insert any new ids not in seed (none expected)
  for (const q of Q) {
    if (!seed.find((s) => s.id === q.id)) {
      seed.push(q);
      updated++;
    }
  }
  saveSeedArray(seed);
  console.log(`Seed updated: ${updated} items rewritten in ${SEED_PATH}`);

  // Firestore merge push
  let written = 0;
  for (const q of Q) {
    const payload = {
      ...q,
      updatedAt: FieldValue.serverTimestamp(),
    };
    // Firestore rejects undefined / null for some fields — strip nulls for opts on TR
    if (q.type === 'teacher_review') {
      delete payload.opts;
      delete payload.options;
      delete payload.a;
    }
    await db.collection('questions').doc(q.id).set(payload, { merge: true });
    written++;
    console.log(`  FS wrote ${q.id}`);
  }

  // Bump sync version
  const version = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version,
      updatedAt: FieldValue.serverTimestamp(),
      source: 'convertY12ACh8A_batch1',
    },
    { merge: true }
  );
  console.log(`sync_meta/questions version=${version}, wrote=${written}`);

  // Rebuild indexes for chapter
  console.log('Rebuilding question indexes for y12a-8 ...');
  const r = spawnSync(
    'node',
    ['tools/scripts/rebuildQuestionIndexes.js', 'y12a-8'],
    { cwd: path.join(__dirname, '../..'), encoding: 'utf8', timeout: 120000 }
  );
  console.log(r.stdout || '');
  if (r.stderr) console.error(r.stderr);
  if (r.status !== 0) {
    console.error('Index rebuild failed with status', r.status);
    process.exit(r.status || 1);
  }

  console.log('DONE batch1. IDs:', Q.map((q) => q.id).join(', '));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
