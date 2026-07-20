/**
 * Fix:
 *   - asc2020-q30a  → multiple_choice (drop-bear closed form) + real steps
 *   - y12a-8a-q1    → deactivate empty subquestions parent (children already MC)
 *   - y12a-8a-q10   → deactivate parent; rewrite all children as MC + real steps
 *
 *   node tools/scripts/fixY12A8A_q1_q10_asc30a.cjs
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
  isManual: true,
};

function S(explanation, workingOut, graphData = null) {
  return { explanation, workingOut, graphData };
}

function checkLatex(id, text) {
  if (text == null) return;
  const s = String(text);
  if (s.includes('\x0c')) throw new Error(`${id}: form-feed`);
  if (/\\\\\\[a-zA-Z]/.test(s)) throw new Error(`${id}: triple backslash`);
  const open = (s.match(/\\\(/g) || []).length;
  const close = (s.match(/\\\)/g) || []).length;
  if (open !== close) {
    throw new Error(`${id}: unbalanced \\( ${open} vs \\) ${close}: ${s.slice(0, 100)}`);
  }
}

function mc(id, question, opts, a, steps, extra = {}) {
  if (!Array.isArray(opts) || opts.length !== 4) throw new Error(`${id}: need 4 opts`);
  if (!(Number.isInteger(a) && a >= 0 && a <= 3)) throw new Error(`${id}: bad a`);
  if (new Set(opts).size !== 4) throw new Error(`${id}: duplicate opts`);
  checkLatex(id, question);
  opts.forEach((o, i) => checkLatex(`${id}.o${i}`, o));
  steps.forEach((st, i) => {
    checkLatex(`${id}.e${i}`, st.explanation);
    checkLatex(`${id}.w${i}`, st.workingOut);
  });
  if (steps.length < 3) throw new Error(`${id}: need >=3 steps`);
  const correct = opts[a];
  return {
    id,
    ...META,
    type: 'multiple_choice',
    difficulty: extra.difficulty || 'medium',
    timeLimit: extra.timeLimit || 120,
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
    ...(extra.chapterId ? { chapterId: extra.chapterId } : {}),
    ...(extra.examPaper ? { examPaper: extra.examPaper } : {}),
    ...(extra.topicId ? { topicId: extra.topicId } : {}),
    ...(extra.c ? { c: extra.c } : {}),
    ...(extra.t ? { t: extra.t } : {}),
  };
}

const STEM10 =
  'Oliver and Sophia start their first jobs. Oliver starts at \\(\\$55\\,000\\) per annum, with annual increases of \\(\\$6\\,000\\). Sophia starts at \\(\\$45\\,000\\) per annum, with annual increases of \\(12\\%\\).';

const Q = [];

// ═══════════════════════════════════════════════════════════════════════════
// asc2020-q30a — drop-bear population (closed form)
// ═══════════════════════════════════════════════════════════════════════════

Q.push(
  mc(
    'asc2020-q30a',
    'The drop-bear population is endangered. On 1 January 2003 there were 1000 drop-bears. Each year the population increases by \\(5\\%\\), but 100 drop-bears are poached. Let \\(T_n\\) be the population remaining after \\(n\\) years. Find a simplified expression for \\(T_n\\).',
    [
      '\\(T_n = 2000 + 1000(1.05)^n\\)',
      '\\(T_n = 2000 - 1000(1.05)^n\\)',
      '\\(T_n = 1000(1.05)^n - 100n\\)',
      '\\(T_n = 1000 - 100(1.05)^n\\)',
    ],
    1,
    [
      S(
        'Given: initial population 1000 on 1 January 2003; each year the population is multiplied by 1.05 (a 5% increase) and then 100 are removed by poaching. Why a recurrence first? The yearly rule is sequential, so we model \\(T_{n} = 1.05\\,T_{n-1} - 100\\) with a clear initial value. Strategy: write the first few terms, recognise a geometric pattern in the poaching contributions, then sum that geometric series to get a closed form. A common slip is applying the 5% growth after poaching in the wrong order, or treating poaching as a fixed percentage.',
        '\\(T_n = 1.05\\,T_{n-1} - 100,\\quad T_0 = 1000\\)'
      ),
      S(
        'What we expand: after one year, \\(T_1 = 1000\\times 1.05 - 100\\). After two years,\\[T_2 = 1.05(1000\\times 1.05 - 100) - 100 = 1000(1.05)^2 - 100(1.05) - 100.\\]After \\(n\\) years the pattern is\\[T_n = 1000(1.05)^n - 100\\bigl(1.05^{n-1} + 1.05^{n-2} + \\cdots + 1.05 + 1\\bigr).\\]Why this form? Each poached group of 100 has then grown for a different number of subsequent years. This geometric sum is the next object to evaluate.',
        '\\(T_n = 1000(1.05)^n - 100\\sum_{k=0}^{n-1}(1.05)^k\\)'
      ),
      S(
        'Sum the geometric series: \\(\\sum_{k=0}^{n-1}(1.05)^k = \\dfrac{(1.05)^n - 1}{1.05 - 1} = \\dfrac{(1.05)^n - 1}{0.05}\\). Substitute:\\[T_n = 1000(1.05)^n - 100\\cdot\\dfrac{(1.05)^n - 1}{0.05} = 1000(1.05)^n - 2000\\bigl((1.05)^n - 1\\bigr).\\]A common slip is using ratio 1.05 in the denominator of the geometric sum formula incorrectly (forgetting \\(r-1 = 0.05\\)).',
        '\\(T_n = 1000(1.05)^n - 2000\\bigl((1.05)^n - 1\\bigr)\\)'
      ),
      S(
        'Expand and collect like terms:\\[T_n = 1000(1.05)^n - 2000(1.05)^n + 2000 = 2000 - 1000(1.05)^n.\\]Check at \\(n = 0\\): \\(T_0 = 2000 - 1000 = 1000\\), which matches the initial population. Final answer: \\(T_n = 2000 - 1000(1.05)^n\\). Context: the population falls toward 0 as \\(n\\) grows, and extinction occurs when this expression first becomes non-positive.',
        '\\(T_n = 2000 - 1000(1.05)^n\\)'
      ),
    ],
    {
      difficulty: 'hard',
      timeLimit: 180,
      hint: 'Write \\(T_n = 1.05 T_{n-1} - 100\\), expand, and sum the geometric series of poaching terms.',
      chapterId: 'exam:ascham2020',
      examPaper: 'Ascham 2020',
      c: 'EXAM',
      t: 'Ascham 2020 Trial Exam',
    }
  )
);

// ═══════════════════════════════════════════════════════════════════════════
// y12a-8a-q10 children
// ═══════════════════════════════════════════════════════════════════════════

Q.push(
  mc(
    'y12a-8a-q10a1',
    STEM10 + '\nFind Oliver\'s wages in Year 1.',
    ['\\(\\$49\\,000\\)', '\\(\\$52\\,000\\)', '\\(\\$55\\,000\\)', '\\(\\$61\\,000\\)'],
    2,
    [
      S(
        'Given: Oliver starts at \\(\\$55\\,000\\) per annum with fixed annual increases of \\(\\$6\\,000\\). Why identify Year 1 carefully? In an arithmetic model of salary, Year 1 is the first term \\(a\\) of the AP, before any increase has been applied. Strategy: read the starting salary as \\(T_1\\). A common slip is adding one increment already in Year 1 (that would be Year 2).',
        '\\(T_1^{\\text{O}} = a = 55\\,000\\)'
      ),
      S(
        'What the statement gives: the opening annual wage is 55 000 dollars. No growth has occurred yet at the start of Year 1. So Oliver\'s Year 1 wages are \\(\\$55\\,000\\). This value is used as \\(a\\) for later Oliver calculations.',
        '\\(T_1^{\\text{O}} = 55\\,000\\)'
      ),
      S(
        'Final answer: \\(\\$55\\,000\\). Context: this is the first term of Oliver\'s arithmetic wage sequence.',
        '\\(\\$55\\,000\\)'
      ),
    ],
    { difficulty: 'easy', timeLimit: 60, hint: 'Year 1 is the stated starting salary.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q10a2',
    STEM10 + '\nFind Oliver\'s wages in Year 2.',
    ['\\(\\$55\\,000\\)', '\\(\\$58\\,000\\)', '\\(\\$61\\,000\\)', '\\(\\$67\\,000\\)'],
    2,
    [
      S(
        'Given: Oliver\'s wages form an AP with \\(a = 55\\,000\\) and common difference \\(d = 6\\,000\\). Why Year 2 is one step of the AP: after one full year he receives exactly one increment. Strategy: use \\(T_2 = a + d\\), or simply add 6000 to Year 1. A common slip is multiplying by 1.06 (confusing with Sophia\'s percentage growth).',
        '\\(T_2^{\\text{O}} = a + d\\)'
      ),
      S(
        'Compute \\(T_2 = 55\\,000 + 6\\,000 = 61\\,000\\). Equivalently \\(T_n = 55\\,000 + 6\\,000(n-1)\\) at \\(n = 2\\) gives the same result.',
        '\\(T_2^{\\text{O}} = 55\\,000 + 6\\,000 = 61\\,000\\)'
      ),
      S(
        'Final answer: \\(\\$61\\,000\\). This sits between Year 1 (55 000) and Year 3 (67 000), which is a useful sanity check.',
        '\\(\\$61\\,000\\)'
      ),
    ],
    { difficulty: 'easy', timeLimit: 60, hint: 'Add one annual increment of \\(\\$6000\\) to Year 1.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q10a3',
    STEM10 + '\nFind Oliver\'s wages in Year 3.',
    ['\\(\\$61\\,000\\)', '\\(\\$64\\,000\\)', '\\(\\$67\\,000\\)', '\\(\\$73\\,000\\)'],
    2,
    [
      S(
        'Given: Oliver AP with \\(a = 55\\,000\\), \\(d = 6\\,000\\). Why the general term? Year 3 is two increments after Year 1, so \\(T_3 = a + 2d\\). Strategy: substitute into \\(T_n = a + (n-1)d\\) with \\(n = 3\\). A common slip is using \\(n\\) increments instead of \\((n-1)\\).',
        '\\(T_3^{\\text{O}} = 55\\,000 + (3-1)\\times 6\\,000\\)'
      ),
      S(
        'Evaluate: \\(55\\,000 + 2\\times 6\\,000 = 55\\,000 + 12\\,000 = 67\\,000\\). Chain check: Year 2 was 61 000, plus another 6000 gives 67 000.',
        '\\(T_3^{\\text{O}} = 67\\,000\\)'
      ),
      S(
        'Final answer: \\(\\$67\\,000\\). Context: Oliver\'s third-year annual wage under constant dollar increments.',
        '\\(\\$67\\,000\\)'
      ),
    ],
    { difficulty: 'easy', timeLimit: 60, hint: 'Use \\(T_n=a+(n-1)d\\) with \\(n=3\\).' }
  )
);

Q.push(
  mc(
    'y12a-8a-q10a4',
    STEM10 + '\nWhy do Oliver\'s wages form an arithmetic sequence?',
    [
      'Each year the wage is multiplied by a constant factor 1.06',
      'Each year the wage increases by a constant amount of \\(\\$6\\,000\\)',
      'The wage doubles every year',
      'The wage decreases by 6% each year',
    ],
    1,
    [
      S(
        'Given: Oliver starts at 55 000 and receives annual increases of 6 000 dollars. Why classify the sequence type? AP versus GP is decided by whether successive terms differ by a constant or by a constant ratio. Strategy: look at the yearly change, not the starting amount. A common slip is calling any increasing salary a GP because "it grows every year".',
        '\\(T_{n+1}^{\\text{O}} - T_n^{\\text{O}} = ?\\)'
      ),
      S(
        'What the problem states: each year Oliver receives a fixed dollar increase of 6000. So\\[T_{n+1}^{\\text{O}} - T_n^{\\text{O}} = 6\\,000\\]is constant for every \\(n\\). By definition, a sequence with constant successive difference is an arithmetic sequence (AP).',
        '\\(T_{n+1}^{\\text{O}} - T_n^{\\text{O}} = 6\\,000\\ \\text{(constant)}\\)'
      ),
      S(
        'Final answer: each year the wage increases by a constant amount of \\(\\$6\\,000\\). That constant difference is the common difference \\(d\\) of the AP. (Sophia\'s 12% growth is the GP case, handled separately.)',
        '\\text{constant difference } d=6000\\ \\Rightarrow\\ \\text{AP}'
      ),
    ],
    {
      difficulty: 'easy',
      timeLimit: 90,
      hint: 'Arithmetic means a constant difference between consecutive terms.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q10b1',
    STEM10 + '\nFind Sophia\'s wages in Year 1.',
    ['\\(\\$40\\,000\\)', '\\(\\$45\\,000\\)', '\\(\\$50\\,400\\)', '\\(\\$55\\,000\\)'],
    1,
    [
      S(
        'Given: Sophia starts at \\(\\$45\\,000\\) with 12% annual increases. Why Year 1 equals the stated start? Percentage growth is applied after each completed year, so Year 1 is still the opening salary. Strategy: read the first term of the GP as \\(a = 45\\,000\\). A common slip is already applying one 12% increase for Year 1.',
        '\\(T_1^{\\text{S}} = 45\\,000\\)'
      ),
      S(
        'Sophia\'s Year 1 wages are therefore \\(\\$45\\,000\\). This is the first term used in \\(T_n = ar^{n-1}\\) with \\(r = 1.12\\).',
        '\\(T_1^{\\text{S}} = 45\\,000\\)'
      ),
      S(
        'Final answer: \\(\\$45\\,000\\).',
        '\\(\\$45\\,000\\)'
      ),
    ],
    { difficulty: 'easy', timeLimit: 60, hint: 'Year 1 is Sophia\'s stated starting salary.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q10b2',
    STEM10 + '\nFind Sophia\'s wages in Year 2.',
    ['\\(\\$45\\,000\\)', '\\(\\$50\\,400\\)', '\\(\\$54\\,000\\)', '\\(\\$56\\,448\\)'],
    1,
    [
      S(
        'Given: Sophia GP with \\(a = 45\\,000\\) and 12% growth, so common ratio \\(r = 1 + 0.12 = 1.12\\). Why multiply? A percentage increase multiplies the previous year\'s wage by 1.12. Strategy: \\(T_2 = a r\\). A common slip is adding 12% of 45 000 incorrectly as 5400 but then forgetting to add to the base, or using 0.12 alone.',
        '\\(T_2^{\\text{S}} = 45\\,000\\times 1.12\\)'
      ),
      S(
        'Compute \\(45\\,000\\times 1.12 = 50\\,400\\). So Year 2 wages are \\(\\$50\\,400\\).',
        '\\(T_2^{\\text{S}} = 50\\,400\\)'
      ),
      S(
        'Final answer: \\(\\$50\\,400\\). Check: 12% of 45 000 is 5400, and \\(45\\,000 + 5\\,400 = 50\\,400\\).',
        '\\(\\$50\\,400\\)'
      ),
    ],
    { difficulty: 'easy', timeLimit: 90, hint: 'Multiply Year 1 by 1.12.' }
  )
);

Q.push(
  mc(
    'y12a-8a-q10b3',
    STEM10 + '\nFind Sophia\'s wages in Year 3, correct to the nearest dollar.',
    ['\\(\\$50\\,400\\)', '\\(\\$55\\,000\\)', '\\(\\$56\\,448\\)', '\\(\\$60\\,480\\)'],
    2,
    [
      S(
        'Given: Sophia GP with \\(a = 45\\,000\\), \\(r = 1.12\\). Why two multiplications for Year 3? From Year 1 to Year 3 there are two growth steps, so \\(T_3 = ar^{2}\\). Strategy: either multiply Year 2 by 1.12 again, or use the general term. A common slip is using exponent 3 instead of 2.',
        '\\(T_3^{\\text{S}} = 45\\,000\\times (1.12)^{2}\\)'
      ),
      S(
        'From Year 2: \\(T_3 = 50\\,400\\times 1.12\\). Compute \\(50\\,400\\times 1.12 = 50\\,400\\times 1 + 50\\,400\\times 0.12 = 50\\,400 + 6\\,048 = 56\\,448\\). This is already a whole number of dollars, so no further rounding is needed.',
        '\\(T_3^{\\text{S}} = 56\\,448\\)'
      ),
      S(
        'Final answer: \\(\\$56\\,448\\). Context: Sophia\'s third-year wage after two successive 12% increases.',
        '\\(\\$56\\,448\\)'
      ),
    ],
    {
      difficulty: 'easy',
      timeLimit: 100,
      hint: 'Use \\(T_3=ar^{2}\\) or multiply Year 2 by 1.12.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q10b4',
    STEM10 + '\nWhy do Sophia\'s wages form a geometric sequence?',
    [
      'Each year the wage increases by a constant amount of \\(\\$6\\,000\\)',
      'Each year the wage is multiplied by the constant factor 1.12',
      'The wage increases by \\(\\$5\\,400\\) every year',
      'The wage is halved every year',
    ],
    1,
    [
      S(
        'Given: Sophia receives a 12% increase each year. Why GP rather than AP? Geometric sequences multiply by a constant ratio; arithmetic sequences add a constant difference. Strategy: express the yearly change as a multiplicative factor. A common slip is saying the increase is "\\$5400 each year" — that is only true for the first increase; later 12% increases grow with the salary.',
        '\\(\\dfrac{T_{n+1}^{\\text{S}}}{T_n^{\\text{S}}} = ?\\)'
      ),
      S(
        'A 12% increase means the new wage is 112% of the old wage, so\\[\\dfrac{T_{n+1}^{\\text{S}}}{T_n^{\\text{S}}} = 1.12\\]for every year. A constant successive ratio is the definition of a geometric sequence with common ratio \\(r = 1.12\\).',
        '\\(r = 1.12\\ \\text{(constant)}\\ \\Rightarrow\\ \\text{GP}\\)'
      ),
      S(
        'Final answer: each year the wage is multiplied by the constant factor 1.12. That is why Sophia\'s wages form a GP (while Oliver\'s form an AP).',
        '\\text{constant ratio } r=1.12\\ \\Rightarrow\\ \\text{GP}'
      ),
    ],
    {
      difficulty: 'easy',
      timeLimit: 90,
      hint: 'Geometric means a constant ratio between consecutive terms.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q10c',
    STEM10 +
      '\nFind the first year in which Sophia\'s annual wage is greater than Oliver\'s. State the year number as an integer.',
    ['\\(6\\)', '\\(7\\)', '\\(8\\)', '\\(9\\)'],
    2,
    [
      S(
        'Given: Oliver \\(T_n^{\\text{O}} = 55\\,000 + 6\\,000(n-1)\\) (AP) and Sophia \\(T_n^{\\text{S}} = 45\\,000\\times(1.12)^{n-1}\\) (GP). Why compare year by year? The GP grows multiplicatively and will eventually overtake the linear AP; we need the smallest integer \\(n\\) with \\(T_n^{\\text{S}} > T_n^{\\text{O}}\\). Strategy: evaluate both at nearby years until the inequality flips. A common slip is solving continuous inequalities without checking the integer boundary carefully.',
        '\\(T_n^{\\text{O}} = 55\\,000 + 6\\,000(n-1),\\quad T_n^{\\text{S}} = 45\\,000(1.12)^{n-1}\\)'
      ),
      S(
        'Try \\(n = 7\\):\\[T_7^{\\text{O}} = 55\\,000 + 6\\,000\\times 6 = 91\\,000,\\]\\[T_7^{\\text{S}} = 45\\,000\\times(1.12)^{6} \\approx 45\\,000\\times 1.9738 \\approx 88\\,822.\\]Still \\(T_7^{\\text{S}} < T_7^{\\text{O}}\\), so Year 7 is not yet the crossover.',
        '\\(T_7^{\\text{S}} \\approx 88\\,822 < 91\\,000 = T_7^{\\text{O}}\\)'
      ),
      S(
        'Try \\(n = 8\\):\\[T_8^{\\text{O}} = 55\\,000 + 6\\,000\\times 7 = 97\\,000,\\]\\[T_8^{\\text{S}} = 45\\,000\\times(1.12)^{7} \\approx 45\\,000\\times 2.2107 \\approx 99\\,481.\\]Now \\(T_8^{\\text{S}} > T_8^{\\text{O}}\\). Since Year 7 failed and Year 8 succeeds, Year 8 is the first such year.',
        '\\(T_8^{\\text{S}} \\approx 99\\,481 > 97\\,000 = T_8^{\\text{O}}\\)'
      ),
      S(
        'Final answer: Year 8. Context: Sophia first earns more annually than Oliver in their eighth year of work.',
        '\\(8\\)'
      ),
    ],
    {
      difficulty: 'hard',
      timeLimit: 180,
      hint: 'Compare \\(55000+6000(n-1)\\) with \\(45000\\times 1.12^{n-1}\\) at n=7 and n=8.',
    }
  )
);

Q.push(
  mc(
    'y12a-8a-q10d',
    STEM10 +
      '\nIn the first year that Sophia earns more than Oliver (Year 8), find the difference in their wages, correct to the nearest dollar.',
    ['\\(\\$1\\,481\\)', '\\(\\$2\\,480\\)', '\\(\\$2\\,481\\)', '\\(\\$2\\,981\\)'],
    2,
    [
      S(
        'Given: from the previous part, the first crossover year is Year 8. Why compute both wages again? The difference needs accurate Year-8 figures, then absolute difference rounded to the nearest dollar. Strategy: evaluate Oliver exactly and Sophia with the GP formula, subtract, then round. A common slip is rounding intermediate powers too early, which can shift the final dollar.',
        '\\(\\text{Diff} = \\bigl|T_8^{\\text{S}} - T_8^{\\text{O}}\\bigr|\\)'
      ),
      S(
        'Oliver Year 8: \\(T_8^{\\text{O}} = 55\\,000 + 6\\,000\\times 7 = 97\\,000\\) exactly. Sophia Year 8: \\(T_8^{\\text{S}} = 45\\,000\\times(1.12)^{7}\\). Using \\((1.12)^{7} \\approx 2.210681407\\),\\[T_8^{\\text{S}} \\approx 45\\,000\\times 2.210681407 = 99\\,480.663.\\]',
        '\\(T_8^{\\text{O}} = 97\\,000,\\quad T_8^{\\text{S}} \\approx 99\\,480.66\\)'
      ),
      S(
        'Difference: \\(99\\,480.66 - 97\\,000 = 2\\,480.66\\). Rounding to the nearest dollar: 2 480.66 rounds to 2 481 because the decimal part 0.66 is at least 0.5.',
        '\\(2\\,480.66 \\rightarrow 2\\,481\\)'
      ),
      S(
        'Final answer: \\(\\$2\\,481\\). Context: in Year 8 Sophia earns about two and a half thousand dollars more than Oliver that year.',
        '\\(\\$2\\,481\\)'
      ),
    ],
    {
      difficulty: 'medium',
      timeLimit: 150,
      hint: 'Compute both Year-8 wages, subtract, and round to the nearest dollar.',
    }
  )
);

// ── Load / save seed helpers ─────────────────────────────────────────────

function loadSeedArray() {
  const src = readFileSync(SEED_PATH, 'utf8');
  const tmp = path.join('/tmp', 'y12ch8_seed_tmp2.cjs');
  writeFileSync(tmp, src.replace(/^export const Y12_CH8_QUESTIONS\s*=\s*/, 'module.exports = '));
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

function saveSeedArray(arr) {
  writeFileSync(
    SEED_PATH,
    'export const Y12_CH8_QUESTIONS = ' + JSON.stringify(arr, null, 2) + ';\n'
  );
}

function leanFrom(patch) {
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
    lean.options = patch.options;
    lean.a = patch.a;
    lean.answer = patch.answer;
  } else {
    lean.answer = patch.answer;
  }
  return lean;
}

async function main() {
  // Validate
  for (const q of Q) {
    if (q.type === 'multiple_choice' && q.opts[q.a] == null) {
      throw new Error(`bad a for ${q.id}`);
    }
  }
  console.log(`Built ${Q.length} MC items`);

  // Seed: update q10* children; do not put asc2020 into ch8 seed (exam id)
  const seed = loadSeedArray();
  const byId = new Map(Q.filter((q) => q.id.startsWith('y12a-8a-')).map((q) => [q.id, q]));
  let seedUpdated = 0;
  for (let i = 0; i < seed.length; i++) {
    const patch = byId.get(seed[i].id);
    if (!patch) continue;
    seed[i] = leanFrom(patch);
    seedUpdated++;
  }
  for (const q of byId.values()) {
    if (!seed.find((s) => s.id === q.id)) {
      seed.push(leanFrom(q));
      seedUpdated++;
    }
  }
  saveSeedArray(seed);
  console.log(`Seed updated ${seedUpdated} y12a-8a-q10* items`);

  // Firestore writes
  const PARENTS = ['y12a-8a-q1', 'y12a-8a-q10'];
  for (const id of PARENTS) {
    await db.collection('questions').doc(id).set(
      {
        isActive: false,
        type: 'subquestions',
        subQuestions: [],
        question: '',
        solutionSteps: [],
        isNew: true,
        requiresManualGrading: false,
        origin: 'seed',
        topicId: 'y12a-8A',
        chapterId: 'y12a-8',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log('deactivated parent', id);
  }

  for (const q of Q) {
    const payload = { ...q, updatedAt: FieldValue.serverTimestamp() };
    await db.collection('questions').doc(q.id).set(payload, { merge: true });
    console.log('wrote', q.id, q.type, 'a=' + q.a, '→', q.opts[q.a]);
  }

  const version = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version,
      updatedAt: FieldValue.serverTimestamp(),
      source: 'fixY12A8A_q1_q10_asc30a',
    },
    { merge: true }
  );
  console.log('sync version', version);

  console.log('Rebuilding indexes y12a-8 ...');
  const r = spawnSync(
    'node',
    ['tools/scripts/rebuildQuestionIndexes.js', 'y12a-8'],
    { cwd: path.join(__dirname, '../..'), encoding: 'utf8', timeout: 120000 }
  );
  console.log(r.stdout || '');
  if (r.stderr) console.error(r.stderr);
  if (r.status !== 0) {
    console.error('index rebuild failed', r.status);
    process.exit(r.status || 1);
  }
  console.log('DONE');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
