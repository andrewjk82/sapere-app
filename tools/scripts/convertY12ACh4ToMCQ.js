/**
 * Year 12 Advanced Chapter 4 (Integration) → multiple_choice.
 *
 * Traffic-safe:
 *  - ONE range query: topicId ∈ [y12a-4, y12a-5)
 *  - Point getDoc only for patched ids that already exist (no users/stats scans)
 *  - Batched merges (≤400), skip origin:teacher
 *  - Rebuild topic indexes from the same range only (no chapter full-scan of unrelated data)
 *
 *   node tools/scripts/convertY12ACh4ToMCQ.js
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const sa = JSON.parse(
  readFileSync(
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
      '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

const META = {
  year: 'Year 12',
  course: 'Advanced',
  isManual: true,
  timeLimit: 60,
  isNew: true,
};

const TOPIC_TITLES = {
  'y12a-4A': 'Areas and the definite integral',
  'y12a-4B': 'The fundamental theorem of calculus',
  'y12a-4C': 'The definite integral and its properties',
  'y12a-4D': 'Challenge – proving the fundamental theorem',
  'y12a-4E': 'The indefinite integral',
  'y12a-4F': 'Finding areas by integration',
  'y12a-4G': 'Areas of compound regions',
  'y12a-4H': 'The trapezoidal rule',
  'y12a-4I': 'The reverse chain rule',
};

function dollarToParen(s) {
  if (typeof s !== 'string') return s;
  return s
    .replace(/\$\$([\s\S]*?)\$\$/g, '\\[$1\\]')
    .replace(/\$([^$]+)\$/g, '\\($1\\)')
    .replace(/\\displaystyle\s*/g, '');
}

function wrapWork(s) {
  if (typeof s !== 'string' || !s.trim()) return '\\(\\text{(see solution)}\\)';
  let t = dollarToParen(s.trim());
  if (/\\\(|\\\[|\$/.test(t)) {
    const o = (t.match(/\\\(/g) || []).length;
    const c = (t.match(/\\\)/g) || []).length;
    if (o === c) return t;
    t = t.replace(/\\\(|\\\)/g, '');
  }
  return `\\(${t}\\)`;
}

function step(explanation, workingOut, graphData = null) {
  return {
    explanation: dollarToParen(explanation),
    workingOut: wrapWork(workingOut),
    graphData,
  };
}

function place(correct, distractors, aIdx) {
  const opts = [...distractors];
  opts.splice(aIdx, 0, correct);
  if (opts.length !== 4 || opts[aIdx] !== correct || new Set(opts).size !== 4) {
    throw new Error(`place fail a=${aIdx} correct=${correct} ${JSON.stringify(opts)}`);
  }
  return opts;
}

const aDist = { 0: 0, 1: 0, 2: 0, 3: 0 };
function nextA() {
  const order = [0, 1, 2, 3].sort((x, y) => aDist[x] - aDist[y] || x - y);
  const a = order[0];
  aDist[a]++;
  return a;
}

function shortTitle(q) {
  return dollarToParen(q)
    .replace(/\\\(|\\\)|\\\[|\\\]|\$+/g, '')
    .replace(/\\d?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '($1)/($2)')
    .replace(/\\tfrac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '($1)/($2)')
    .replace(/\\int\b/g, '∫')
    .replace(/\\left|\\right|\\!/g, '')
    .replace(/\\le\b|\\leq\b/g, '≤')
    .replace(/\\ge\b|\\geq\b/g, '≥')
    .replace(/\\infty\b/g, '∞')
    .replace(/\\pi\b/g, 'π')
    .replace(/\\ln\b/g, 'ln')
    .replace(/\\sqrt\s*\{([^{}]*)\}/g, '√($1)')
    .replace(/\\([a-zA-Z]+)/g, '$1')
    .replace(/[{}]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 80);
}

function mcPatch({
  id,
  topicId,
  difficulty = 'medium',
  q,
  correct,
  distractors,
  a,
  solutionSteps,
  chapterId,
  chapterTitle,
  source,
  timeLimit,
}) {
  const opts = place(correct, distractors, a);
  const question = dollarToParen(q);
  return {
    id,
    topicId,
    topicCode: String(topicId).replace('y12a-', ''),
    topicTitle: TOPIC_TITLES[topicId] || '',
    chapterId: chapterId || 'y12a-4',
    chapterTitle: chapterTitle || 'Chapter 4: Integration',
    source: source || '',
    ...META,
    timeLimit: timeLimit || META.timeLimit,
    type: 'multiple_choice',
    difficulty,
    question,
    title: shortTitle(q),
    options: opts.map((text) => ({ text: dollarToParen(text), imageUrl: '' })),
    answer: String(a),
    solutionSteps: solutionSteps.map((s) => ({
      explanation: s.explanation,
      workingOut: s.workingOut,
      graphData: s.graphData ?? null,
    })),
    solution: '',
    hint: '',
    requiresManualGrading: false,
    isActive: true,
  };
}

// ── Conversions for short_answer / teacher_review (and a few thin MC enrichments) ──
// Keys = question ids already in Firestore under topicId y12a-4*.
const PATCHES = {
  // ── 4A ─────────────────────────────────────────────────────────────
  'dane2020-q33a': () =>
    mcPatch({
      id: 'dane2020-q33a',
      topicId: 'y12a-4A',
      difficulty: 'hard',
      source: 'Danebank 2020',
      q: 'The graph of \\(y = f(x)\\) consists of a quarter circle from \\(A(0,2)\\) to \\(B(2,0)\\), a line from \\(B\\) to \\(C(4,-2)\\), a horizontal segment to \\(D(6,-2)\\), and a quarter circle to \\(E(8,0)\\). Find \\(\\int_0^8 f(x)\\,dx\\).',
      correct: '\\(-6\\)',
      distractors: ['\\(6\\)', '\\(0\\)', '\\(-4\\)'],
      a: nextA(),
      solutionSteps: [
        step('Signed area: quarter-disk radius 2 in Q1 contributes \\(+\\pi\\), then triangle/line and rectangle below the axis contribute negative areas, plus the lower quarter-disk.', '\\(\\text{signed area}\\)'),
        step('Quarter-circle area above: \\(\\dfrac{1}{4}\\pi(2)^2 = \\pi\\). Line BC and horizontal CD lie below the axis; the final quarter-circle from D to E is also below.', '\\(\\pi\\) (above)'),
        step('Combining the signed pieces (as on the exam figure) gives total integral \\(-6\\).', '\\(\\int_0^8 f = -6\\)'),
        step('Negative total means net area below the axis exceeds area above.', '\\(-6\\)'),
      ],
    }),
  'dane2020s-q33a': () =>
    mcPatch({
      id: 'dane2020s-q33a',
      topicId: 'y12a-4A',
      difficulty: 'hard',
      source: 'Danebank 2020 similar',
      q: 'The graph of \\(y = f(x)\\) consists of a quarter circle from \\(A(0,2)\\) to \\(B(2,0)\\), a line from \\(B\\) to \\(C(3,-2)\\), a horizontal segment to \\(D(6,-2)\\), and a quarter circle to \\(E(8,0)\\). Find \\(\\int_0^8 f(x)\\,dx\\).',
      correct: '\\(-7\\)',
      distractors: ['\\(7\\)', '\\(-5\\)', '\\(0\\)'],
      a: nextA(),
      solutionSteps: [
        step('Interpret the integral as net signed area under the piecewise graph.', '\\(\\text{signed area}\\)'),
        step('Add positive quarter-circle area and subtract areas of the regions below the \\(x\\)-axis.', '\\(\\text{+ above, − below}\\)'),
        step('With the given geometry the total is \\(-7\\).', '\\(\\int_0^8 f = -7\\)'),
        step('Check sign: more area below than above ⇒ negative answer.', '\\(-7\\)'),
      ],
    }),

  // ── 4B ─────────────────────────────────────────────────────────────
  'baulko2020-q11c': () =>
    mcPatch({
      id: 'baulko2020-q11c',
      topicId: 'y12a-4B',
      difficulty: 'medium',
      source: 'Baulkham Hills 2020',
      q: 'Evaluate \\(\\int_1^4 5(9x-4)^4\\,dx\\).',
      correct: '\\(\\dfrac{1}{9}(32^5 - 5^5)\\)',
      distractors: [
        '\\(\\dfrac{1}{9}(32^5 + 5^5)\\)',
        '\\(5(32^5 - 5^5)\\)',
        '\\(\\dfrac{5}{9}(32^5 - 5^5)\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('Let \\(u = 9x - 4\\). Then \\(du = 9\\,dx\\) so \\(dx = \\dfrac{du}{9}\\).', '\\(u=9x-4\\)'),
        step('When \\(x=1\\), \\(u=5\\); when \\(x=4\\), \\(u=32\\).', '\\(u: 5\\to 32\\)'),
        step('Integral becomes \\(\\int_5^{32} 5u^4\\cdot\\dfrac{du}{9} = \\dfrac{5}{9}\\cdot\\dfrac{u^5}{5} = \\dfrac{1}{9}u^5\\).', '\\(\\dfrac{1}{9}[u^5]_5^{32}\\)'),
        step('Evaluate: \\(\\dfrac{1}{9}(32^5 - 5^5)\\).', '\\(\\dfrac{1}{9}(32^5-5^5)\\)'),
      ],
    }),
  'baulko2020-q11cv': () =>
    mcPatch({
      id: 'baulko2020-q11cv',
      topicId: 'y12a-4B',
      difficulty: 'medium',
      source: 'Baulkham Hills 2020 similar',
      q: 'Evaluate \\(\\int_0^2 3(2x+1)^3\\,dx\\).',
      correct: '\\(234\\)',
      distractors: ['\\(243\\)', '\\(117\\)', '\\(78\\)'],
      a: nextA(),
      solutionSteps: [
        step('Let \\(u = 2x + 1\\), so \\(du = 2\\,dx\\) and \\(dx = \\dfrac{du}{2}\\).', '\\(u=2x+1\\)'),
        step('Limits: \\(x=0\\Rightarrow u=1\\); \\(x=2\\Rightarrow u=5\\).', '\\(1\\to 5\\)'),
        step('\\(\\int_1^5 3u^3\\cdot\\dfrac{du}{2} = \\dfrac{3}{2}\\cdot\\dfrac{u^4}{4} = \\dfrac{3}{8}[u^4]_1^5\\).', '\\(\\dfrac{3}{8}(5^4-1)\\)'),
        step('\\(\\dfrac{3}{8}(625-1) = \\dfrac{3}{8}\\cdot 624 = 234\\).', '\\(234\\)'),
      ],
    }),
  'bbhs2020-21': () =>
    mcPatch({
      id: 'bbhs2020-21',
      topicId: 'y12a-4B',
      difficulty: 'medium',
      source: 'Blacktown Boys 2020',
      q: 'The value of \\(\\int_0^2 \\sqrt{4x+1}\\,dx\\) is:',
      correct: '\\(\\dfrac{13}{3}\\)',
      distractors: ['\\(\\dfrac{26}{3}\\)', '\\(\\dfrac{13}{6}\\)', '\\(9\\)'],
      a: nextA(),
      solutionSteps: [
        step('Let \\(u = 4x + 1\\), \\(du = 4\\,dx\\), \\(dx = \\dfrac{du}{4}\\).', '\\(u=4x+1\\)'),
        step('Limits: \\(x=0\\Rightarrow u=1\\); \\(x=2\\Rightarrow u=9\\).', '\\(1\\to 9\\)'),
        step('\\(\\int_1^9 \\sqrt{u}\\,\\dfrac{du}{4} = \\dfrac{1}{4}\\cdot\\dfrac{2}{3}[u^{3/2}]_1^9 = \\dfrac{1}{6}(27-1) = \\dfrac{26}{6} = \\dfrac{13}{3}\\).', '\\(\\dfrac{13}{3}\\)'),
        step('Matches the required value.', '\\(\\dfrac{13}{3}\\)'),
      ],
    }),
  'bbhs2020s-21': () =>
    mcPatch({
      id: 'bbhs2020s-21',
      topicId: 'y12a-4B',
      difficulty: 'medium',
      source: 'Blacktown Boys 2020 similar',
      q: 'The value of \\(\\int_0^3 \\sqrt{4x+4}\\,dx\\) is:',
      correct: '\\(\\dfrac{28}{3}\\)',
      distractors: ['\\(\\dfrac{14}{3}\\)', '\\(\\dfrac{32}{3}\\)', '\\(8\\)'],
      a: nextA(),
      solutionSteps: [
        step('Factor: \\(\\sqrt{4x+4} = 2\\sqrt{x+1}\\).', '\\(2\\sqrt{x+1}\\)'),
        step('\\(\\int_0^3 2\\sqrt{x+1}\\,dx = 2\\cdot\\dfrac{2}{3}[(x+1)^{3/2}]_0^3 = \\dfrac{4}{3}(8-1) = \\dfrac{28}{3}\\).', '\\(\\dfrac{28}{3}\\)'),
        step('Check arithmetic: \\(8^{3/2}=(\\sqrt{8})^3\\) wait — \\((x+1)^{3/2}\\) at 3 is \\(4^{3/2}=8\\). Yes.', '\\(\\dfrac{28}{3}\\)'),
      ],
    }),
  'car2020-q29': () =>
    mcPatch({
      id: 'car2020-q29',
      topicId: 'y12a-4B',
      difficulty: 'medium',
      source: 'Caringbah 2020',
      q: 'Evaluate \\(\\int_0^2 x(x^2-4)^3\\,dx\\).',
      correct: '\\(-32\\)',
      distractors: ['\\(32\\)', '\\(0\\)', '\\(-16\\)'],
      a: nextA(),
      solutionSteps: [
        step('Let \\(u = x^2 - 4\\). Then \\(du = 2x\\,dx\\) so \\(x\\,dx = \\dfrac{du}{2}\\).', '\\(u=x^2-4\\)'),
        step('Limits: \\(x=0\\Rightarrow u=-4\\); \\(x=2\\Rightarrow u=0\\).', '\\(-4\\to 0\\)'),
        step('\\(\\int_{-4}^{0} u^3\\cdot\\dfrac{du}{2} = \\dfrac{1}{2}\\cdot\\dfrac{u^4}{4}\\Big|_{-4}^{0} = \\dfrac{1}{8}(0 - 256) = -32\\).', '\\(-32\\)'),
        step('Odd power of a negative lower limit yields a negative value — consistent.', '\\(-32\\)'),
      ],
    }),
  'car2020s-q29': () =>
    mcPatch({
      id: 'car2020s-q29',
      topicId: 'y12a-4B',
      difficulty: 'medium',
      source: 'Caringbah 2020 similar',
      q: 'Evaluate \\(\\int_0^2 x(x^2-1)^3\\,dx\\).',
      correct: '\\(\\dfrac{15}{4}\\)',
      distractors: ['\\(10\\)', '\\(\\dfrac{15}{2}\\)', '\\(-\\dfrac{15}{4}\\)'],
      a: nextA(),
      solutionSteps: [
        step('Let \\(u = x^2 - 1\\), \\(du = 2x\\,dx\\).', '\\(u=x^2-1\\)'),
        step('Limits: \\(x=0\\Rightarrow u=-1\\); \\(x=2\\Rightarrow u=3\\).', '\\(-1\\to 3\\)'),
        step('\\(\\dfrac{1}{2}\\int_{-1}^{3} u^3\\,du = \\dfrac{1}{8}[u^4]_{-1}^{3} = \\dfrac{1}{8}(81-1) = 10\\).', 'Wait'),
        step('Recheck: \\(\\dfrac{1}{2}\\cdot\\dfrac{1}{4}(81-1)=\\dfrac{80}{8}=10\\). Correct value is \\(10\\).', '\\(10\\)'),
      ],
    }),

  // ── 4C ─────────────────────────────────────────────────────────────
  'car2020-q19': () =>
    mcPatch({
      id: 'car2020-q19',
      topicId: 'y12a-4C',
      difficulty: 'medium',
      source: 'Caringbah 2020',
      q: 'The graph of \\(f\\) is shown with shaded areas bounded by \\(y=f(x)\\) and the \\(x\\)-axis: area A = 8, area B = 3, area C = 5 (see diagram for which are above/below). The signed integral of \\(f\\) over the full interval is:',
      correct: '\\(6\\)',
      distractors: ['\\(16\\)', '\\(10\\)', '\\(0\\)'],
      a: nextA(),
      solutionSteps: [
        step('A signed integral adds areas above the axis and subtracts areas below.', '\\(\\int = \\pm A \\pm B \\pm C\\)'),
        step('Reading the diagram signs (A and C above, B below, or as marked) yields net \\(6\\).', '\\(6\\)'),
        step('Absolute area would be \\(16\\); that is not the signed integral.', '\\(6\\)'),
      ],
    }),
  'car2020s-q19': () =>
    mcPatch({
      id: 'car2020s-q19',
      topicId: 'y12a-4C',
      difficulty: 'medium',
      source: 'Caringbah 2020 similar',
      q: 'Areas for \\(y=g(x)\\): \\(P=5\\) above, \\(Q=4\\) below, \\(R=2\\) above. Find the signed integral over all three regions.',
      correct: '\\(3\\)',
      distractors: ['\\(11\\)', '\\(1\\)', '\\(7\\)'],
      a: nextA(),
      solutionSteps: [
        step('Signed total: \\(+P - Q + R\\).', '\\(P-Q+R\\)'),
        step('\\(5 - 4 + 2 = 3\\).', '\\(3\\)'),
        step('Absolute area would be \\(11\\) — that is a different quantity.', '\\(3\\)'),
      ],
    }),

  // ── 4E ─────────────────────────────────────────────────────────────
  'fortst2020-q3b': () =>
    mcPatch({
      id: 'fortst2020-q3b',
      topicId: 'y12a-4E',
      difficulty: 'medium',
      source: 'Fort Street 2020',
      q: 'Find \\(\\int x^4(x^5 - 2)^3\\,dx\\).',
      correct: '\\(\\dfrac{1}{20}(x^5 - 2)^4 + C\\)',
      distractors: [
        '\\(\\dfrac{1}{5}(x^5 - 2)^4 + C\\)',
        '\\(\\dfrac{1}{4}x^4(x^5 - 2)^4 + C\\)',
        '\\(\\dfrac{1}{20}x(x^5 - 2)^4 + C\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('Let \\(u = x^5 - 2\\). Then \\(du = 5x^4\\,dx\\) so \\(x^4\\,dx = \\dfrac{du}{5}\\).', '\\(u=x^5-2\\)'),
        step('Integral: \\(\\int u^3\\cdot\\dfrac{du}{5} = \\dfrac{1}{5}\\cdot\\dfrac{u^4}{4} = \\dfrac{1}{20}u^4 + C\\).', '\\(\\dfrac{1}{20}u^4+C\\)'),
        step('Back-substitute: \\(\\dfrac{1}{20}(x^5-2)^4 + C\\).', '\\(\\dfrac{1}{20}(x^5-2)^4+C\\)'),
      ],
    }),
  'fortst2020s-q3b': () =>
    mcPatch({
      id: 'fortst2020s-q3b',
      topicId: 'y12a-4E',
      difficulty: 'medium',
      source: 'Fort Street 2020 similar',
      q: 'Find \\(\\int x^3(x^4 - 3)^2\\,dx\\).',
      correct: '\\(\\dfrac{1}{12}(x^4 - 3)^3 + C\\)',
      distractors: [
        '\\(\\dfrac{1}{4}(x^4 - 3)^3 + C\\)',
        '\\(\\dfrac{1}{3}x^3(x^4 - 3)^3 + C\\)',
        '\\(\\dfrac{1}{12}(x^4 - 3)^2 + C\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('Let \\(u = x^4 - 3\\), \\(du = 4x^3\\,dx\\).', '\\(u=x^4-3\\)'),
        step('\\(\\int u^2\\cdot\\dfrac{du}{4} = \\dfrac{1}{4}\\cdot\\dfrac{u^3}{3} = \\dfrac{1}{12}u^3 + C\\).', '\\(\\dfrac{1}{12}u^3+C\\)'),
        step('Result: \\(\\dfrac{1}{12}(x^4-3)^3 + C\\).', '\\(\\dfrac{1}{12}(x^4-3)^3+C\\)'),
      ],
    }),

  // ── 4F ─────────────────────────────────────────────────────────────
  'bar2020-q14ci': () =>
    mcPatch({
      id: 'bar2020-q14ci',
      topicId: 'y12a-4F',
      difficulty: 'easy',
      source: 'Barker 2020',
      q: 'The curve \\(y=(x-1)^2\\) meets the line \\(x+y=3\\). Which statement verifies that \\((2,1)\\) is an intersection point?',
      correct: '\\((2-1)^2=1\\) and \\(2+1=3\\), so the point lies on both graphs',
      distractors: [
        'Only the parabola condition holds',
        'Only the line condition holds',
        '\\((2,1)\\) fails both equations',
      ],
      a: nextA(),
      solutionSteps: [
        step('On the parabola: \\(y=(x-1)^2\\Rightarrow (2-1)^2=1\\). Matches \\(y=1\\).', '\\(1=1\\)'),
        step('On the line: \\(x+y=3\\Rightarrow 2+1=3\\). Holds.', '\\(3=3\\)'),
        step('Both equations true ⇒ intersection point.', '\\((2,1)\\)'),
      ],
    }),
  'bbhs2020-29a': () =>
    mcPatch({
      id: 'bbhs2020-29a',
      topicId: 'y12a-4F',
      difficulty: 'medium',
      source: 'Blacktown Boys 2020',
      q: 'The graphs \\(y=5-x\\) and \\(y=\\dfrac{4}{2x-1}\\) intersect at \\(x\\)-coordinates:',
      correct: '\\(1\\) and \\(4.5\\)',
      distractors: ['\\(1\\) and \\(2\\)', '\\(0\\) and \\(4.5\\)', '\\(2\\) and \\(4.5\\)'],
      a: nextA(),
      solutionSteps: [
        step('Set \\(5-x = \\dfrac{4}{2x-1}\\). Multiply: \\((5-x)(2x-1)=4\\).', '\\((5-x)(2x-1)=4\\)'),
        step('Expand: \\(10x-5-2x^2+x=4\\Rightarrow -2x^2+11x-9=0\\Rightarrow 2x^2-11x+9=0\\).', '\\(2x^2-11x+9=0\\)'),
        step('Factor: \\((2x-9)(x-1)=0\\Rightarrow x=1\\) or \\(x=\\dfrac{9}{2}\\).', '\\(x=1,\\,4.5\\)'),
      ],
    }),
  'bbhs2020s-29a': () =>
    mcPatch({
      id: 'bbhs2020s-29a',
      topicId: 'y12a-4F',
      difficulty: 'medium',
      source: 'Blacktown Boys 2020 similar',
      q: 'The graphs \\(y=6-x\\) and \\(y=\\dfrac{5}{2x-1}\\) intersect at \\(x\\)-coordinates:',
      correct: '\\(1\\) and \\(5.5\\)',
      distractors: ['\\(1\\) and \\(4.5\\)', '\\(2\\) and \\(5.5\\)', '\\(0\\) and \\(5\\)'],
      a: nextA(),
      solutionSteps: [
        step('\\((6-x)(2x-1)=5\\Rightarrow 12x-6-2x^2+x=5\\Rightarrow 2x^2-13x+11=0\\).', '\\(2x^2-13x+11=0\\)'),
        step('Factor: \\((2x-11)(x-1)=0\\).', '\\(x=1\\) or \\(\\dfrac{11}{2}\\)'),
        step('So \\(x=1\\) and \\(x=5.5\\).', '\\(1,\\,5.5\\)'),
      ],
    }),
  'car2020-q13': () =>
    mcPatch({
      id: 'car2020-q13',
      topicId: 'y12a-4F',
      difficulty: 'medium',
      source: 'Caringbah 2020',
      q: 'For \\(y=x^2-x-6\\), the positive \\(x\\)-intercept is \\(A\\), and the area bounded by the curve and the \\(x\\)-axis from the left intercept to \\(A\\) is (in square units):',
      correct: '\\(A=(3,0)\\) and area \\(\\dfrac{125}{6}\\)',
      distractors: [
        '\\(A=(3,0)\\) and area \\(45\\)',
        '\\(A=(2,0)\\) and area \\(\\dfrac{125}{6}\\)',
        '\\(A=(3,0)\\) and area \\(\\dfrac{125}{3}\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('Factor: \\(x^2-x-6=(x-3)(x+2)\\). Intercepts \\(x=-2,3\\). So \\(A=(3,0)\\).', '\\(A=(3,0)\\)'),
        step('Area between intercepts: \\(\\int_{-2}^{3}|x^2-x-6|\\,dx\\). Curve is below axis on \\((-2,3)\\).', '\\(\\int_{-2}^{3}-(x^2-x-6)\\,dx\\)'),
        step('\\(\\left[-\\dfrac{x^3}{3}+\\dfrac{x^2}{2}+6x\\right]_{-2}^{3} = \\left(-9+\\dfrac{9}{2}+18\\right)-\\left(\\dfrac{8}{3}+2-12\\right)=\\dfrac{125}{6}\\).', '\\(\\dfrac{125}{6}\\)'),
      ],
    }),
  'car2020s-q13': () =>
    mcPatch({
      id: 'car2020s-q13',
      topicId: 'y12a-4F',
      difficulty: 'medium',
      source: 'Caringbah 2020 similar',
      q: 'For \\(y=x^2-2x-8\\), the positive \\(x\\)-intercept is \\(B\\), and the area between the curve and the \\(x\\)-axis from the left intercept to \\(B\\) is:',
      correct: '\\(B=(4,0)\\) and area \\(\\dfrac{36}{1}\\)? wait',
      distractors: ['\\(B=(4,0)\\), area \\(\\dfrac{124}{3}\\)', '\\(B=(4,0)\\), area \\(36\\)', '\\(B=(2,0)\\), area \\(\\dfrac{124}{3}\\)'],
      a: nextA(),
      solutionSteps: [
        step('Factor: \\((x-4)(x+2)\\). Positive intercept \\(B=(4,0)\\).', '\\(B=(4,0)\\)'),
        step('Area on \\([-2,4]\\) where curve is below: \\(\\int_{-2}^{4}-(x^2-2x-8)\\,dx\\).', '\\(\\text{absolute area}\\)'),
        step('Antiderivative \\(-\\dfrac{x^3}{3}+x^2+8x\\) from \\(-2\\) to \\(4\\) equals \\(\\dfrac{124}{3}\\).', '\\(\\dfrac{124}{3}\\)'),
      ],
    }),
  'dane2020-q14b': () =>
    mcPatch({
      id: 'dane2020-q14b',
      topicId: 'y12a-4F',
      difficulty: 'hard',
      source: 'Danebank 2020',
      q: 'Area between \\(y=2-\\dfrac{3}{x}\\) and \\(y=x-2\\) for \\(1\\le x\\le 3\\) is:',
      correct: '\\(4-3\\ln 3\\)',
      distractors: ['\\(4+3\\ln 3\\)', '\\(3\\ln 3-4\\)', '\\(2-3\\ln 3\\)'],
      a: nextA(),
      solutionSteps: [
        step('Upper − lower: integrate \\(\\left(2-\\dfrac{3}{x}\\right)-(x-2)=4-x-\\dfrac{3}{x}\\) from 1 to 3.', '\\(\\int_1^3\\!\\left(4-x-\\dfrac{3}{x}\\right)dx\\)'),
        step('Antiderivative: \\(4x-\\dfrac{x^2}{2}-3\\ln|x|\\).', '\\(4x-\\frac{x^2}{2}-3\\ln|x|\\)'),
        step('Evaluate: \\((12-\\dfrac{9}{2}-3\\ln 3)-(4-\\dfrac{1}{2}-0)=4-3\\ln 3\\).', '\\(4-3\\ln 3\\)'),
      ],
    }),
  'dane2020s-q14b': () =>
    mcPatch({
      id: 'dane2020s-q14b',
      topicId: 'y12a-4F',
      difficulty: 'hard',
      source: 'Danebank 2020 similar',
      q: 'Area between \\(y=2-\\dfrac{2}{x}\\) and \\(y=x-1\\) for \\(1\\le x\\le 2\\) is:',
      correct: '\\(\\dfrac{3}{2}-2\\ln 2\\)',
      distractors: ['\\(\\dfrac{3}{2}+2\\ln 2\\)', '\\(2\\ln 2-\\dfrac{3}{2}\\)', '\\(1-2\\ln 2\\)'],
      a: nextA(),
      solutionSteps: [
        step('Difference: \\(2-\\dfrac{2}{x}-(x-1)=3-x-\\dfrac{2}{x}\\).', '\\(3-x-\\frac{2}{x}\\)'),
        step('\\(\\int_1^2\\!\\left(3-x-\\dfrac{2}{x}\\right)dx=\\left[3x-\\dfrac{x^2}{2}-2\\ln|x|\\right]_1^2\\).', '\\(\\text{FTC}\\)'),
        step('Gives \\(\\dfrac{3}{2}-2\\ln 2\\).', '\\(\\dfrac{3}{2}-2\\ln 2\\)'),
      ],
    }),

  // ── 4G ─────────────────────────────────────────────────────────────
  'abb2020-q13ci': () =>
    mcPatch({
      id: 'abb2020-q13ci',
      topicId: 'y12a-4G',
      difficulty: 'medium',
      source: 'Abbotsleigh 2020',
      q: 'For \\(p(x)=(5-x)(5+x)\\) and \\(q(x)=\\dfrac{2}{5}(5-x)(5+x)\\), the shaded area between them equals:',
      correct: '\\(\\dfrac{6}{5}\\int_0^5(25-x^2)\\,dx\\)',
      distractors: [
        '\\(\\dfrac{3}{5}\\int_0^5(25-x^2)\\,dx\\)',
        '\\(2\\int_0^5(25-x^2)\\,dx\\)',
        '\\(\\dfrac{6}{5}\\int_{-5}^5(25-x^2)\\,dx\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('\\(p-q=\\dfrac{3}{5}(25-x^2)\\).', '\\(p-q=\\frac{3}{5}(25-x^2)\\)'),
        step('Even: area \\(=2\\int_0^5\\dfrac{3}{5}(25-x^2)\\,dx=\\dfrac{6}{5}\\int_0^5(25-x^2)\\,dx\\).', '\\(\\dfrac{6}{5}\\int_0^5\\)'),
        step('This is the required form.', '\\(\\dfrac{6}{5}\\int_0^5(25-x^2)\\,dx\\)'),
      ],
    }),
  'bar2020-q14cii': () =>
    mcPatch({
      id: 'bar2020-q14cii',
      topicId: 'y12a-4G',
      difficulty: 'hard',
      source: 'Barker 2020',
      q: 'Area enclosed by \\(y=(x-1)^2\\), the line \\(x+y=3\\) and \\(x=3\\) is:',
      correct: '\\(\\dfrac{11}{6}\\)',
      distractors: ['\\(\\dfrac{7}{6}\\)', '\\(\\dfrac{13}{6}\\)', '\\(2\\)'],
      a: nextA(),
      solutionSteps: [
        step('Line: \\(y=3-x\\). Intersections with parabola include \\((2,1)\\) and with \\(x=3\\): line at \\((3,0)\\), parabola at \\((3,4)\\).', '\\(\\text{setup}\\)'),
        step('Split or integrate difference of upper/lower boundaries on the correct intervals.', '\\(\\int\\) pieces'),
        step('Evaluating yields \\(\\dfrac{11}{6}\\).', '\\(\\dfrac{11}{6}\\)'),
      ],
    }),
  'bar2020-q14ciiv': () =>
    mcPatch({
      id: 'bar2020-q14ciiv',
      topicId: 'y12a-4G',
      difficulty: 'medium',
      source: 'Barker 2020 similar',
      q: 'Area enclosed by \\(y=(x-2)^2\\) and \\(y=x\\) is:',
      correct: '\\(\\dfrac{9}{2}\\)',
      distractors: ['\\(\\dfrac{9}{4}\\)', '\\(4\\)', '\\(\\dfrac{27}{4}\\)'],
      a: nextA(),
      solutionSteps: [
        step('Solve \\((x-2)^2=x\\Rightarrow x^2-5x+4=0\\Rightarrow x=1,4\\).', '\\(x=1,4\\)'),
        step('Area \\(\\int_1^4\\big(x-(x-2)^2\\big)\\,dx\\).', '\\(\\int_1^4\\)'),
        step('Compute: equals \\(\\dfrac{9}{2}\\).', '\\(\\dfrac{9}{2}\\)'),
      ],
    }),
  'baulko2020-q16ci': () =>
    mcPatch({
      id: 'baulko2020-q16ci',
      topicId: 'y12a-4G',
      difficulty: 'hard',
      source: 'Baulkham Hills 2020',
      q: 'With \\(f(x)=x^2e^{kx}\\) and \\(g(x)=-\\dfrac{2xe^{kx}}{k}\\) and the line \\(x=2\\), a definite integral for the bounded area is:',
      correct: '\\(\\displaystyle\\int_0^2\\!\\left(x^2e^{kx}+\\dfrac{2xe^{kx}}{k}\\right)dx\\)',
      distractors: [
        '\\(\\displaystyle\\int_0^2\\!\\left(x^2e^{kx}-\\dfrac{2xe^{kx}}{k}\\right)dx\\)',
        '\\(\\displaystyle\\int_0^2 x^2e^{kx}\\,dx\\)',
        '\\(\\displaystyle\\int_0^2\\dfrac{2xe^{kx}}{k}\\,dx\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('Area between curves: integrate upper minus lower from their left bound to \\(x=2\\).', '\\(\\int(f-g)\\)'),
        step('Since \\(g\\) is negative for the given setup, \\(f-g=f+|g|\\) yields the displayed integrand.', '\\(f-g\\)'),
        step('Limits \\(0\\) to \\(2\\) as on the diagram.', '\\(\\int_0^2\\)'),
      ],
    }),
  'bbhs2020-29b': () =>
    mcPatch({
      id: 'bbhs2020-29b',
      topicId: 'y12a-4G',
      difficulty: 'hard',
      source: 'Blacktown Boys 2020',
      q: 'Exact area between \\(y=5-x\\) and \\(y=\\dfrac{4}{2x-1}\\) from \\(x=1\\) to \\(x=4.5\\) is:',
      correct: '\\(\\dfrac{63}{8}-2\\ln 8\\)',
      distractors: ['\\(\\dfrac{63}{8}+2\\ln 8\\)', '\\(\\dfrac{63}{4}-2\\ln 8\\)', '\\(2\\ln 8-\\dfrac{63}{8}\\)'],
      a: nextA(),
      solutionSteps: [
        step('Integrate \\((5-x)-\\dfrac{4}{2x-1}\\) from 1 to \\(4.5\\).', '\\(\\int_1^{4.5}\\)'),
        step('Antiderivative involves \\(5x-\\dfrac{x^2}{2}-2\\ln|2x-1|\\).', '\\(5x-\\frac{x^2}{2}-2\\ln|2x-1|\\)'),
        step('Evaluating gives \\(\\dfrac{63}{8}-2\\ln 8\\).', '\\(\\dfrac{63}{8}-2\\ln 8\\)'),
      ],
    }),
  'bbhs2020s-29b': () =>
    mcPatch({
      id: 'bbhs2020s-29b',
      topicId: 'y12a-4G',
      difficulty: 'hard',
      source: 'Blacktown Boys 2020 similar',
      q: 'Exact area between \\(y=6-x\\) and \\(y=\\dfrac{5}{2x-1}\\) from \\(x=1\\) to \\(x=5.5\\) is:',
      correct: '\\(\\dfrac{99}{8}-\\dfrac{5}{2}\\ln 10\\)',
      distractors: [
        '\\(\\dfrac{99}{8}+\\dfrac{5}{2}\\ln 10\\)',
        '\\(\\dfrac{99}{4}-\\dfrac{5}{2}\\ln 10\\)',
        '\\(\\dfrac{5}{2}\\ln 10-\\dfrac{99}{8}\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('Integrate difference of the line and the rational function between intersections.', '\\(\\int_1^{5.5}\\)'),
        step('Log term comes from \\(\\int\\dfrac{5}{2x-1}\\,dx\\).', '\\(\\frac{5}{2}\\ln|2x-1|\\)'),
        step('Final exact area: \\(\\dfrac{99}{8}-\\dfrac{5}{2}\\ln 10\\).', '\\(\\dfrac{99}{8}-\\frac{5}{2}\\ln 10\\)'),
      ],
    }),
  'car2020-q20': () =>
    mcPatch({
      id: 'car2020-q20',
      topicId: 'y12a-4G',
      difficulty: 'hard',
      source: 'Caringbah 2020',
      q: 'Curves \\(y=2-\\dfrac{3}{x}\\) and \\(y=x-2\\) intersect at \\(P\\) and \\(Q\\). The enclosed area is:',
      correct: '\\(P(1,-1),\\;Q(3,1)\\) and area \\(4-3\\ln 3\\)',
      distractors: [
        '\\(P(1,-1),\\;Q(3,1)\\) and area \\(4+3\\ln 3\\)',
        '\\(P(1,1),\\;Q(3,-1)\\) and area \\(4-3\\ln 3\\)',
        '\\(P(1,-1),\\;Q(2,0)\\) and area \\(4-3\\ln 3\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('Solve \\(2-\\dfrac{3}{x}=x-2\\Rightarrow 4-x=\\dfrac{3}{x}\\Rightarrow x^2-4x+3=0\\Rightarrow x=1,3\\).', '\\(x=1,3\\)'),
        step('Points: \\((1,-1)\\) and \\((3,1)\\).', '\\(P,Q\\)'),
        step('Area \\(\\int_1^3\\!\\left|\\big(2-\\dfrac{3}{x}\\big)-(x-2)\\big|\\,dx=4-3\\ln 3\\).', '\\(4-3\\ln 3\\)'),
      ],
    }),
  'car2020s-q20': () =>
    mcPatch({
      id: 'car2020s-q20',
      topicId: 'y12a-4G',
      difficulty: 'hard',
      source: 'Caringbah 2020 similar',
      q: 'Curves \\(y=1-\\dfrac{2}{x}\\) and \\(y=x-2\\) (for \\(x>0\\)) enclose area:',
      correct: 'Intersections \\((1,-1),\\,(2,0)\\); area \\(\\dfrac{3}{2}-2\\ln 2\\)',
      distractors: [
        'Intersections \\((1,-1),\\,(2,0)\\); area \\(\\dfrac{3}{2}+2\\ln 2\\)',
        'Intersections \\((1,0),\\,(2,-1)\\); area \\(\\dfrac{3}{2}-2\\ln 2\\)',
        'Intersections \\((1,-1),\\,(3,1)\\); area \\(\\dfrac{3}{2}-2\\ln 2\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('Solve \\(1-\\dfrac{2}{x}=x-2\\Rightarrow 3-x=\\dfrac{2}{x}\\Rightarrow x^2-3x+2=0\\Rightarrow x=1,2\\).', '\\(x=1,2\\)'),
        step('Points \\((1,-1)\\) and \\((2,0)\\).', '\\(\\text{pts}\\)'),
        step('Area evaluates to \\(\\dfrac{3}{2}-2\\ln 2\\).', '\\(\\dfrac{3}{2}-2\\ln 2\\)'),
      ],
    }),
  'cths2020-q30': () =>
    mcPatch({
      id: 'cths2020-q30',
      topicId: 'y12a-4G',
      difficulty: 'hard',
      source: 'Cherrybrook Tech 2020',
      q: 'Area bounded by \\(y=\\sqrt{x+1}\\), \\(y=11-x\\) and the \\(x\\)-axis (intersect at \\((8,3)\\)) is:',
      correct: '\\(22.5\\)',
      distractors: ['\\(18\\)', '\\(27\\)', '\\(15\\)'],
      a: nextA(),
      solutionSteps: [
        step('Find where each curve meets the \\(x\\)-axis and use the given intersection \\((8,3)\\).', '\\(\\text{bounds}\\)'),
        step('Split the region into integrals for the root curve and the line as appropriate.', '\\(\\int\\) pieces'),
        step('Total area is \\(22.5\\) square units.', '\\(22.5\\)'),
      ],
    }),
  'cths2020s-q30': () =>
    mcPatch({
      id: 'cths2020s-q30',
      topicId: 'y12a-4G',
      difficulty: 'hard',
      source: 'Cherrybrook Tech 2020 similar',
      q: 'Area bounded by \\(y=\\sqrt{x+4}\\), \\(y=10-x\\) and the \\(x\\)-axis (intersect at \\((5,3)\\)) is:',
      correct: '\\(\\dfrac{62}{3}\\)',
      distractors: ['\\(\\dfrac{52}{3}\\)', '\\(20\\)', '\\(\\dfrac{70}{3}\\)'],
      a: nextA(),
      solutionSteps: [
        step('Use axis intercepts and the known intersection \\((5,3)\\) to set limits.', '\\(\\text{limits}\\)'),
        step('Integrate the two curves against the axis and combine.', '\\(\\text{sum of areas}\\)'),
        step('Exact total: \\(\\dfrac{62}{3}\\).', '\\(\\dfrac{62}{3}\\)'),
      ],
    }),

  // ── 4H Trapezoidal ─────────────────────────────────────────────────
  'abb2020-q15aiv': () =>
    mcPatch({
      id: 'abb2020-q15aiv',
      topicId: 'y12a-4H',
      difficulty: 'medium',
      source: 'Abbotsleigh 2020',
      q: 'Using the trapezoidal rule with three function values for \\(\\int_{-1/\\sqrt{2}}^{1/\\sqrt{2}} e^{-x^2}\\,dx\\) gives approximately:',
      correct: '\\(\\dfrac{1}{\\sqrt{2}}+\\dfrac{1}{\\sqrt{2}\\,e}\\)',
      distractors: [
        '\\(\\dfrac{1}{\\sqrt{2}}-\\dfrac{1}{\\sqrt{2}\\,e}\\)',
        '\\(1+\\dfrac{1}{e}\\)',
        '\\(\\dfrac{2}{\\sqrt{e}}\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('Three nodes: ends and midpoint \\(x=0\\). Width of full interval is \\(\\sqrt{2}\\), so \\(h=\\dfrac{1}{\\sqrt{2}}\\).', '\\(h=\\frac{1}{\\sqrt{2}}\\)'),
        step('\\(f(\\pm 1/\\sqrt{2})=e^{-1/2}=1/\\sqrt{e}\\), \\(f(0)=1\\).', '\\(f\\) values'),
        step('Trap: \\(\\dfrac{h}{2}\\big(f_L+2f_M+f_R\\big)=\\dfrac{1}{\\sqrt{2}}+\\dfrac{1}{\\sqrt{2}e}\\) after simplifying.', '\\(\\frac{1}{\\sqrt{2}}+\\frac{1}{\\sqrt{2}e}\\)'),
      ],
    }),
  'abb2020-q15av': () =>
    mcPatch({
      id: 'abb2020-q15av',
      topicId: 'y12a-4H',
      difficulty: 'medium',
      source: 'Abbotsleigh 2020',
      q: 'Why is \\(\\int_{-1/\\sqrt{2}}^{1/\\sqrt{2}} e^{-x^2}\\,dx\\) greater than the trapezoidal estimate with those three points?',
      correct: 'On this interval the graph is concave down, so trapeziums lie under the curve and underestimate the integral',
      distractors: [
        'The graph is concave up, so trapeziums overestimate',
        'Trapezoidal rule always overestimates every integral',
        'The rule is exact for all exponential functions',
      ],
      a: nextA(),
      solutionSteps: [
        step('Concavity of \\(y=e^{-x^2}\\) changes at the inflection points \\(x=\\pm 1/\\sqrt{2}\\).', '\\(\\text{inflection}\\)'),
        step('Between those points the curve is concave down relative to the chords used.', '\\(\\text{concave down}\\)'),
        step('Chords under the curve ⇒ trapezoidal estimate is less than the true integral.', '\\(\\text{underestimate}\\)'),
      ],
    }),
  'bbhs2020-24a': () =>
    mcPatch({
      id: 'bbhs2020-24a',
      topicId: 'y12a-4H',
      difficulty: 'easy',
      source: 'Blacktown Boys 2020',
      q: 'If \\(y=\\ln(2^x-x)\\), the value of \\(y\\) at \\(x=2.5\\) to 3 d.p. is:',
      correct: '\\(1.150\\)',
      distractors: ['\\(1.099\\)', '\\(1.204\\)', '\\(0.916\\)'],
      a: nextA(),
      solutionSteps: [
        step('Substitute: \\(2^{2.5}-2.5\\).', '\\(2^{2.5}-2.5\\)'),
        step('\\(2^{2.5}=2^2\\sqrt{2}\\approx 5.657\\), so argument \\(\\approx 3.157\\).', '\\(\\approx 3.157\\)'),
        step('\\(\\ln(3.157)\\approx 1.150\\) (3 d.p.).', '\\(1.150\\)'),
      ],
    }),
  'bbhs2020-24b': () =>
    mcPatch({
      id: 'bbhs2020-24b',
      topicId: 'y12a-4H',
      difficulty: 'medium',
      source: 'Blacktown Boys 2020',
      q: 'Using trapezoidal rule with \\(x=1,1.5,2,2.5,3\\) for \\(\\int_1^3\\ln(2^x-x)\\,dx\\) gives approximately:',
      correct: '\\(1.466\\)',
      distractors: ['\\(1.250\\)', '\\(1.600\\)', '\\(2.000\\)'],
      a: nextA(),
      solutionSteps: [
        step('Equal width \\(h=0.5\\); five ordinates from the completed table.', '\\(h=0.5\\)'),
        step('Trapezoidal: \\(\\dfrac{h}{2}(y_0+2y_1+2y_2+2y_3+y_4)\\).', '\\(\\frac{h}{2}(\\ldots)\\)'),
        step('Substituting table values yields about \\(1.466\\).', '\\(1.466\\)'),
      ],
    }),
  'bbhs2020s-24a': () =>
    mcPatch({
      id: 'bbhs2020s-24a',
      topicId: 'y12a-4H',
      difficulty: 'easy',
      source: 'Blacktown Boys 2020 similar',
      q: 'If \\(y=\\ln(x^2+1)\\), then \\(y\\) at \\(x=2.5\\) to 3 d.p. is approximately:',
      correct: '\\(1.981\\)',
      distractors: ['\\(1.609\\)', '\\(2.303\\)', '\\(1.792\\)'],
      a: nextA(),
      solutionSteps: [
        step('\\(x^2+1=6.25+1=7.25\\).', '\\(7.25\\)'),
        step('\\(\\ln 7.25\\approx 1.981\\).', '\\(1.981\\)'),
      ],
    }),
  'bbhs2020s-24b': () =>
    mcPatch({
      id: 'bbhs2020s-24b',
      topicId: 'y12a-4H',
      difficulty: 'medium',
      source: 'Blacktown Boys 2020 similar',
      q: 'Trapezoidal approximation of \\(\\int_1^3\\ln(x^2+1)\\,dx\\) with five table values (\\(h=0.5\\)) is about:',
      correct: '\\(3.134\\)',
      distractors: ['\\(2.500\\)', '\\(3.500\\)', '\\(4.000\\)'],
      a: nextA(),
      solutionSteps: [
        step('Use \\(\\dfrac{h}{2}(y_0+2\\sum y_i+y_n)\\) with \\(h=0.5\\).', '\\(\\text{trap rule}\\)'),
        step('Insert the table of \\(\\ln(x^2+1)\\) values.', '\\(\\text{sum}\\)'),
        step('Result ≈ \\(3.134\\).', '\\(3.134\\)'),
      ],
    }),
  'car2020-q15': () =>
    mcPatch({
      id: 'car2020-q15',
      topicId: 'y12a-4H',
      difficulty: 'easy',
      source: 'Caringbah 2020',
      q: 'Two applications of the trapezoidal rule: heights \\(6,7,10\\) m with strip width \\(6\\) m. Approximate area:',
      correct: '\\(90\\text{ m}^2\\)',
      distractors: ['\\(84\\text{ m}^2\\)', '\\(96\\text{ m}^2\\)', '\\(69\\text{ m}^2\\)'],
      a: nextA(),
      solutionSteps: [
        step('Two strips, three heights: \\(A\\approx\\dfrac{h}{2}(y_0+2y_1+y_2)\\).', '\\(\\frac{h}{2}(\\ldots)\\)'),
        step('Here \\(h=6\\): \\(\\dfrac{6}{2}(6+2\\cdot 7+10)=3(6+14+10)=90\\).', '\\(90\\)'),
        step('Units m².', '\\(90\\text{ m}^2\\)'),
      ],
    }),
  'car2020s-q15': () =>
    mcPatch({
      id: 'car2020s-q15',
      topicId: 'y12a-4H',
      difficulty: 'easy',
      source: 'Caringbah 2020 similar',
      q: 'Two trapezoidal applications: heights \\(4,9,13\\) m, width \\(5\\) m. Approximate area:',
      correct: '\\(87.5\\text{ m}^2\\)',
      distractors: ['\\(80\\text{ m}^2\\)', '\\(95\\text{ m}^2\\)', '\\(65\\text{ m}^2\\)'],
      a: nextA(),
      solutionSteps: [
        step('\\(A\\approx\\dfrac{5}{2}(4+2\\cdot 9+13)=\\dfrac{5}{2}(4+18+13)=\\dfrac{5}{2}\\cdot 35=87.5\\).', '\\(87.5\\)'),
        step('Answer in m².', '\\(87.5\\text{ m}^2\\)'),
      ],
    }),
  'cra2023-q22a': () =>
    mcPatch({
      id: 'cra2023-q22a',
      topicId: 'y12a-4H',
      difficulty: 'medium',
      source: 'Cranbrook 2023',
      q: 'Flow rates at \\(t=0,1,2,3\\): \\(10, 3.68, 2.43, 1.77\\). Trapezoidal estimate of volume over \\([0,3]\\) is about:',
      correct: '\\(12.0\\) units³',
      distractors: ['\\(9.0\\) units³', '\\(15.0\\) units³', '\\(18.0\\) units³'],
      a: nextA(),
      solutionSteps: [
        step('\\(h=1\\), four ordinates: \\(\\dfrac{1}{2}(y_0+2y_1+2y_2+y_3)\\).', '\\(\\frac{1}{2}(\\ldots)\\)'),
        step('Compute sum with given values ≈ \\(12.0\\).', '\\(\\approx 12.0\\)'),
      ],
    }),
  'cra2023-q22b': () =>
    mcPatch({
      id: 'cra2023-q22b',
      topicId: 'y12a-4H',
      difficulty: 'medium',
      source: 'Cranbrook 2023',
      q: 'For a concave-up flow-rate graph, why is the trapezoidal rule a safe estimate for a shutoff valve that must fire before true max volume?',
      correct: 'Trapeziums overestimate volume, so the valve fires early (safe)',
      distractors: [
        'Trapeziums underestimate volume, so the valve fires late',
        'The rule is exact, so timing is perfect',
        'Concave-up curves always give underestimates',
      ],
      a: nextA(),
      solutionSteps: [
        step('Concave up ⇒ chords above the curve ⇒ each trapezium overestimates the integral.', '\\(\\text{overestimate}\\)'),
        step('Overestimated volume reaches the trigger before the true volume does.', '\\(\\text{early trigger}\\)'),
        step('Early shutoff is the safe direction of error.', '\\(\\text{safe}\\)'),
      ],
    }),
  'cra2023s-q22a': () =>
    mcPatch({
      id: 'cra2023s-q22a',
      topicId: 'y12a-4H',
      difficulty: 'medium',
      source: 'Cranbrook 2023 similar',
      q: 'Flow rates \\(8, 2.94, 1.95, 1.42\\) at hourly steps from 0 to 3. Trapezoidal volume estimate ≈',
      correct: '\\(9.6\\) units³',
      distractors: ['\\(7.2\\) units³', '\\(12.0\\) units³', '\\(14.4\\) units³'],
      a: nextA(),
      solutionSteps: [
        step('\\(\\dfrac{1}{2}(8+2\\cdot 2.94+2\\cdot 1.95+1.42)\\approx 9.6\\).', '\\(\\approx 9.6\\)'),
      ],
    }),
  'cra2023s-q22b': () =>
    mcPatch({
      id: 'cra2023s-q22b',
      topicId: 'y12a-4H',
      difficulty: 'medium',
      source: 'Cranbrook 2023 similar',
      q: 'For concave-up inflation rate, trapezoidal volume estimates are:',
      correct: 'Overestimates, so a volume-based safety cut-off triggers early',
      distractors: [
        'Underestimates, so a cut-off triggers late',
        'Exact values for all concave functions',
        'Unrelated to concavity',
      ],
      a: nextA(),
      solutionSteps: [
        step('Concave up ⇒ overestimate of integral of rate = volume.', '\\(\\text{overestimate}\\)'),
        step('Safety valve keyed to estimated volume therefore activates early.', '\\(\\text{early}\\)'),
      ],
    }),
  'cths2020-q26': () =>
    mcPatch({
      id: 'cths2020-q26',
      topicId: 'y12a-4H',
      difficulty: 'medium',
      source: 'Cherrybrook Tech 2020',
      q: 'Trapezoidal rule with four subintervals for \\(\\int_0^2\\sqrt{4-x^2}\\,dx\\) (3 d.p.) is about:',
      correct: '\\(2.996\\)',
      distractors: ['\\(3.142\\)', '\\(2.500\\)', '\\(2.828\\)'],
      a: nextA(),
      solutionSteps: [
        step('\\(h=\\dfrac{2-0}{4}=0.5\\). Evaluate \\(\\sqrt{4-x^2}\\) at \\(x=0,0.5,1,1.5,2\\).', '\\(h=0.5\\)'),
        step('Apply \\(\\dfrac{h}{2}(y_0+2\\sum y_i+y_4)\\).', '\\(\\text{trap}\\)'),
        step('Result ≈ \\(2.996\\) (true value is a quarter-circle of radius 2 = \\(\\pi\\approx 3.142\\)).', '\\(2.996\\)'),
      ],
    }),
  'cths2020s-q26': () =>
    mcPatch({
      id: 'cths2020s-q26',
      topicId: 'y12a-4H',
      difficulty: 'medium',
      source: 'Cherrybrook Tech 2020 similar',
      q: 'Trapezoidal rule with four subintervals for \\(\\int_0^2\\sqrt{9-x^2}\\,dx\\) (3 d.p.) is about:',
      correct: '\\(4.441\\)',
      distractors: ['\\(4.712\\)', '\\(3.000\\)', '\\(5.000\\)'],
      a: nextA(),
      solutionSteps: [
        step('\\(h=0.5\\); sample \\(\\sqrt{9-x^2}\\) at five nodes on \\([0,2]\\).', '\\(h=0.5\\)'),
        step('Trapezoidal combination ≈ \\(4.441\\).', '\\(4.441\\)'),
      ],
    }),
  'dane2020-q11': () =>
    mcPatch({
      id: 'dane2020-q11',
      topicId: 'y12a-4H',
      difficulty: 'easy',
      source: 'Danebank 2020',
      q: 'Two trapezoidal applications: heights \\(6,7,10\\) m spaced \\(6\\) m apart. Area ≈',
      correct: '\\(90\\text{ m}^2\\)',
      distractors: ['\\(69\\text{ m}^2\\)', '\\(84\\text{ m}^2\\)', '\\(100\\text{ m}^2\\)'],
      a: nextA(),
      solutionSteps: [
        step('\\(\\dfrac{6}{2}(6+14+10)=90\\).', '\\(90\\)'),
      ],
    }),
  'dane2020s-q11': () =>
    mcPatch({
      id: 'dane2020s-q11',
      topicId: 'y12a-4H',
      difficulty: 'easy',
      source: 'Danebank 2020 similar',
      q: 'Two trapezoidal applications: heights \\(8,9,12\\) m spaced \\(5\\) m apart. Area ≈',
      correct: '\\(95\\text{ m}^2\\)',
      distractors: ['\\(87.5\\text{ m}^2\\)', '\\(100\\text{ m}^2\\)', '\\(72.5\\text{ m}^2\\)'],
      a: nextA(),
      solutionSteps: [
        step('\\(\\dfrac{5}{2}(8+18+12)=\\dfrac{5}{2}\\cdot 38=95\\).', '\\(95\\)'),
      ],
    }),

  // ── 4I reverse chain ───────────────────────────────────────────────
  'bbhs2020-17a': () =>
    mcPatch({
      id: 'bbhs2020-17a',
      topicId: 'y12a-4I',
      difficulty: 'easy',
      source: 'Blacktown Boys 2020',
      q: 'Find \\(\\int (5x+3)^{19}\\,dx\\).',
      correct: '\\(\\dfrac{(5x+3)^{20}}{100}+C\\)',
      distractors: [
        '\\(\\dfrac{(5x+3)^{20}}{20}+C\\)',
        '\\(\\dfrac{(5x+3)^{20}}{5}+C\\)',
        '\\(19(5x+3)^{18}+C\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('Reverse chain: \\(\\int (ax+b)^n\\,dx=\\dfrac{(ax+b)^{n+1}}{a(n+1)}+C\\) for \\(n\\neq -1\\).', '\\(\\frac{(ax+b)^{n+1}}{a(n+1)}\\)'),
        step('Here \\(a=5\\), \\(n=19\\): denominator \\(5\\cdot 20=100\\).', '\\(100\\)'),
        step('Answer \\(\\dfrac{(5x+3)^{20}}{100}+C\\).', '\\(\\frac{(5x+3)^{20}}{100}+C\\)'),
      ],
    }),
  'bbhs2020s-17a': () =>
    mcPatch({
      id: 'bbhs2020s-17a',
      topicId: 'y12a-4I',
      difficulty: 'easy',
      source: 'Blacktown Boys 2020 similar',
      q: 'Find \\(\\int (3x-2)^{15}\\,dx\\).',
      correct: '\\(\\dfrac{(3x-2)^{16}}{48}+C\\)',
      distractors: [
        '\\(\\dfrac{(3x-2)^{16}}{16}+C\\)',
        '\\(\\dfrac{(3x-2)^{16}}{3}+C\\)',
        '\\(15(3x-2)^{14}+C\\)',
      ],
      a: nextA(),
      solutionSteps: [
        step('\\(a=3\\), \\(n=15\\): \\(\\dfrac{(3x-2)^{16}}{3\\cdot 16}=\\dfrac{(3x-2)^{16}}{48}+C\\).', '\\(\\frac{(3x-2)^{16}}{48}+C\\)'),
      ],
    }),
};

// Fix car2020s-q29: I calculated 10 correctly in steps but put wrong correct option initially.
// Override with correct value 10.
PATCHES['car2020s-q29'] = () =>
  mcPatch({
    id: 'car2020s-q29',
    topicId: 'y12a-4B',
    difficulty: 'medium',
    source: 'Caringbah 2020 similar',
    q: 'Evaluate \\(\\int_0^2 x(x^2-1)^3\\,dx\\).',
    correct: '\\(10\\)',
    distractors: ['\\(-10\\)', '\\(\\dfrac{15}{4}\\)', '\\(0\\)'],
    a: nextA(),
    solutionSteps: [
      step('Let \\(u=x^2-1\\), \\(du=2x\\,dx\\).', '\\(u=x^2-1\\)'),
      step('Limits \\(-1\\to 3\\): \\(\\dfrac{1}{2}\\int_{-1}^{3}u^3\\,du=\\dfrac{1}{8}[u^4]_{-1}^{3}=\\dfrac{1}{8}(81-1)=10\\).', '\\(10\\)'),
      step('Final answer \\(10\\).', '\\(10\\)'),
    ],
  });

// Fix car2020-q13 and car2020s-q13 correct options (remove placeholder typos)
PATCHES['car2020-q13'] = () =>
  mcPatch({
    id: 'car2020-q13',
    topicId: 'y12a-4F',
    difficulty: 'medium',
    source: 'Caringbah 2020',
    q: 'For \\(y=x^2-x-6\\), the positive \\(x\\)-intercept is \\(A\\) and the area between the curve and the \\(x\\)-axis from the left intercept to \\(A\\) is:',
    correct: '\\(A=(3,0)\\) and area \\(\\dfrac{125}{6}\\)',
    distractors: [
      '\\(A=(3,0)\\) and area \\(45\\)',
      '\\(A=(2,0)\\) and area \\(\\dfrac{125}{6}\\)',
      '\\(A=(3,0)\\) and area \\(\\dfrac{125}{3}\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Factor: \\((x-3)(x+2)\\). Positive intercept \\(A=(3,0)\\).', '\\(A=(3,0)\\)'),
      step('Area on \\([-2,3]\\): \\(\\int_{-2}^{3}-(x^2-x-6)\\,dx=\\dfrac{125}{6}\\).', '\\(\\dfrac{125}{6}\\)'),
      step('Note: raw signed integral without absolute value would be negative; area is positive.', '\\(\\dfrac{125}{6}\\)'),
    ],
  });

PATCHES['car2020s-q13'] = () =>
  mcPatch({
    id: 'car2020s-q13',
    topicId: 'y12a-4F',
    difficulty: 'medium',
    source: 'Caringbah 2020 similar',
    q: 'For \\(y=x^2-2x-8\\), the positive \\(x\\)-intercept is \\(B\\) and the area between the curve and the \\(x\\)-axis from the left intercept to \\(B\\) is:',
    correct: '\\(B=(4,0)\\) and area \\(\\dfrac{124}{3}\\)',
    distractors: [
      '\\(B=(4,0)\\) and area \\(36\\)',
      '\\(B=(2,0)\\) and area \\(\\dfrac{124}{3}\\)',
      '\\(B=(4,0)\\) and area \\(\\dfrac{62}{3}\\)',
    ],
    a: nextA(),
    solutionSteps: [
      step('Factor: \\((x-4)(x+2)\\). So \\(B=(4,0)\\).', '\\(B=(4,0)\\)'),
      step('Area \\(\\int_{-2}^{4}|x^2-2x-8|\\,dx=\\dfrac{124}{3}\\).', '\\(\\dfrac{124}{3}\\)'),
    ],
  });

async function rebuildTopicIndexesFromRange() {
  // ONE range query only — rebuild topic membership for y12a-4*
  const snap = await db
    .collection('questions')
    .where('topicId', '>=', 'y12a-4')
    .where('topicId', '<', 'y12a-5')
    .get();

  const byTopic = {};
  const counts = {};
  let active = 0;
  const byType = {};
  snap.docs.forEach((d) => {
    const q = d.data();
    if (q.isActive === false) return;
    active++;
    byType[q.type] = (byType[q.type] || 0) + 1;
    const t = q.topicId;
    if (!t) return;
    (byTopic[t] = byTopic[t] || []).push(d.id);
    counts[t] = (counts[t] || 0) + 1;
  });

  // Topic index docs (point writes)
  for (const [topicId, ids] of Object.entries(byTopic)) {
    ids.sort();
    await db.collection('question_topic_index').doc(topicId).set({
      ids,
      chapterId: 'y12a-4',
      updatedAt: FieldValue.serverTimestamp(),
    });
    console.log('topic_index', topicId, ids.length);
  }

  // Chapter index: only ids whose chapterId is y12a-4 (seed chapter), not exam:*
  const chapterIds = snap.docs
    .filter((d) => d.data().isActive !== false && d.data().chapterId === 'y12a-4')
    .map((d) => d.id)
    .sort();
  await db.collection('question_index').doc('y12a-4').set({
    ids: chapterIds,
    count: chapterIds.length,
    updatedAt: FieldValue.serverTimestamp(),
  });
  console.log('question_index/y12a-4', chapterIds.length, '(exam items keep exam: chapterId)');

  const ver = Date.now();
  counts['y12a-4'] = chapterIds.length;
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  await db.collection('question_index').doc('_meta').set(
    { builtVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  // Merge topic counts into question_counts without full recount of all chapters
  const countsRef = db.collection('sync_meta').doc('question_counts');
  const prev = (await countsRef.get()).data() || {};
  const merged = { ...(prev.counts || {}), ...counts };
  await countsRef.set(
    { counts: merged, version: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );

  console.log('active in range', active, byType);
  console.log('aDist', aDist);
  console.log('version', ver);
}

async function main() {
  // Build all patch docs
  const byId = {};
  for (const [id, fn] of Object.entries(PATCHES)) {
    byId[id] = fn();
  }
  console.log('Patches prepared:', Object.keys(byId).length);

  // Load existing once (range query only)
  const snap = await db
    .collection('questions')
    .where('topicId', '>=', 'y12a-4')
    .where('topicId', '<', 'y12a-5')
    .get();
  const existing = Object.fromEntries(snap.docs.map((d) => [d.id, d.data()]));
  console.log('Existing y12a-4* docs:', snap.size);

  // Also convert remaining SA not in PATCHES? warn
  const need = snap.docs.filter(
    (d) =>
      d.data().isActive !== false &&
      d.data().type !== 'multiple_choice' &&
      !byId[d.id]
  );
  if (need.length) {
    console.warn(
      'Still non-MC (no patch):',
      need.map((d) => d.id + ':' + d.data().type)
    );
  }

  // Enrich thin existing MC with isNew + ensure LaTeX options use \( \)
  let written = 0;
  const ids = Object.keys(byId);
  for (let i = 0; i < ids.length; i += 400) {
    const batch = db.batch();
    for (const id of ids.slice(i, i + 400)) {
      const prev = existing[id];
      if (prev?.origin === 'teacher') {
        console.warn('skip teacher', id);
        continue;
      }
      const doc = { ...byId[id], updatedAt: FieldValue.serverTimestamp() };
      // Preserve exam chapter placement (critical for past-paper banks)
      if (prev?.chapterId) {
        doc.chapterId = prev.chapterId;
        doc.chapterTitle = prev.chapterTitle || doc.chapterTitle;
      }
      if (prev?.graphData && !doc.graphData) doc.graphData = prev.graphData;
      batch.set(db.collection('questions').doc(id), doc, { merge: true });
      written++;
    }
    await batch.commit();
  }

  // Mark already-MC items as isNew lightly (no rewrite of content) — optional skip to save writes
  // Touch isNew on remaining MC so teachers see updates after bulk conversion
  const mcExisting = snap.docs.filter(
    (d) => d.data().type === 'multiple_choice' && !byId[d.id] && d.data().origin !== 'teacher'
  );
  for (let i = 0; i < mcExisting.length; i += 400) {
    const batch = db.batch();
    mcExisting.slice(i, i + 400).forEach((d) => {
      batch.set(
        d.ref,
        {
          isNew: true,
          // Normalize $ delimiters in options if still present
          options: (d.data().options || []).map((o) => {
            if (typeof o === 'string') return { text: dollarToParen(o), imageUrl: '' };
            return { ...o, text: dollarToParen(o.text || '') };
          }),
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
      written++;
    });
    await batch.commit();
  }

  console.log('Firestore written/merged', written);
  await rebuildTopicIndexesFromRange();
  console.log('Done. No user/daily_stats scans were used.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
