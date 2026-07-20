/**
 * Convert y12a-6b-q14 multiparts to MC with detailed steps.
 * Parent multi_part stem-only; flat children isActive:false.
 *
 *   node tools/scripts/convertY12A6Bq14ToMCQ.cjs
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

const TOPIC = {
  topicId: 'y12a-6B',
  chapterId: 'y12a-6',
  c: '6B',
  t: 'Differentiating the trigonometric functions',
  origin: 'seed',
  isNew: true,
  requiresManualGrading: false,
};

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

function mc(id, { question, opts, a = 0, difficulty = 'medium', timeLimit = 120, hint, solutionSteps }) {
  return {
    id,
    type: 'multiple_choice',
    difficulty,
    timeLimit,
    question,
    opts,
    options: opts.map((text) => ({ text, imageUrl: null })),
    a,
    answer: String(a),
    hint:
      hint ||
      'Use successive differentiation of sine and cosine, and compare each derivative with the original function.',
    solution: 'The correct answer is ' + opts[a] + '.',
    solutionSteps,
    graphData: null,
    requiresManualGrading: false,
  };
}

const sub14a = mc('y12a-6b-q14a', {
  question:
    'Which statement correctly describes the graph of \\(y = \\cos x\\) on the interval \\([-3\\pi,\\,3\\pi]\\)?',
  opts: [
    'Period \\(2\\pi\\), range \\([-1,1]\\), local maxima at \\(x = 0,\\,\\pm 2\\pi\\) (within the interval), crosses the \\(x\\)-axis at odd multiples of \\(\\dfrac{\\pi}{2}\\)',
    'Period \\(\\pi\\), range \\([-1,1]\\), maxima only at \\(x = \\pm\\pi\\)',
    'Period \\(2\\pi\\), range \\([0,1]\\), never crosses the \\(x\\)-axis',
    'Period \\(4\\pi\\), range \\([-2,2]\\), maxima at every multiple of \\(\\pi\\)',
  ],
  a: 0,
  difficulty: 'easy',
  timeLimit: 90,
  hint: 'Recall the standard features of \\(y = \\cos x\\): period, amplitude and zeros.',
  solutionSteps: [
    S(
      'Given: describe \\(y = \\cos x\\) for \\(-3\\pi \\le x \\le 3\\pi\\). Strategy: use the standard properties of the cosine function.',
      '\\(y = \\cos x\\)'
    ),
    S(
      'Period: \\(\\cos(x + 2\\pi) = \\cos x\\), so the fundamental period is \\(2\\pi\\). On \\([-3\\pi, 3\\pi]\\) the graph completes three full periods.',
      '\\(\\text{period } = 2\\pi\\)'
    ),
    S(
      'Range: cosine takes all values in \\([-1, 1]\\). Local maxima \\(y = 1\\) occur where \\(x = 2k\\pi\\) (e.g. \\(0,\\,\\pm 2\\pi\\) in this window). Local minima \\(y = -1\\) at \\(x = (2k+1)\\pi\\).',
      '\\(\\text{range }[-1,1]\\)'
    ),
    S(
      'Zeros: \\(\\cos x = 0\\) at \\(x = \\dfrac{\\pi}{2} + k\\pi\\) (odd multiples of \\(\\dfrac{\\pi}{2}\\)). A common slip is confusing the period with that of \\(\\sin 2x\\) or restricting the range to \\([0,1]\\).',
      '\\(\\text{zeros at odd multiples of }\\pi/2\\)'
    ),
    S(
      'Final answer: period \\(2\\pi\\), range \\([-1,1]\\), maxima at multiples of \\(2\\pi\\), correct zeros.',
      '\\(\\text{period }2\\pi,\\ \\text{range }[-1,1]\\)'
    ),
  ],
});

const sub14b = mc('y12a-6b-q14b', {
  question:
    "For \\(y = \\cos x\\), which list correctly gives \\(y',\\ y'',\\ y''',\\ y''''\\)?",
  opts: [
    "\\(y' = \\sin x,\\; y'' = \\cos x,\\; y''' = -\\sin x,\\; y'''' = -\\cos x\\)",
    "\\(y' = -\\sin x,\\; y'' = \\cos x,\\; y''' = \\sin x,\\; y'''' = -\\cos x\\)",
    "\\(y' = -\\sin x,\\; y'' = -\\cos x,\\; y''' = \\sin x,\\; y'''' = \\cos x\\)",
    "\\(y' = -\\sin x,\\; y'' = -\\cos x,\\; y''' = -\\sin x,\\; y'''' = -\\cos x\\)",
  ],
  a: 2,
  difficulty: 'medium',
  timeLimit: 120,
  hint: 'Differentiate repeatedly: each derivative of sine/cosine cycles every four steps, with careful signs.',
  solutionSteps: [
    S(
      'Given: \\(y = \\cos x\\). Strategy: differentiate four times using the standard forms.',
      '\\(y = \\cos x\\)'
    ),
    S(
      "First derivative: \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\). So \\(y' = -\\sin x\\).",
      "\\(y' = -\\sin x\\)"
    ),
    S(
      "Second: \\(\\dfrac{d}{dx}(-\\sin x) = -\\cos x\\). So \\(y'' = -\\cos x\\).",
      "\\(y'' = -\\cos x\\)"
    ),
    S(
      "Third: \\(\\dfrac{d}{dx}(-\\cos x) = \\sin x\\). So \\(y''' = \\sin x\\).",
      "\\(y''' = \\sin x\\)"
    ),
    S(
      "Fourth: \\(\\dfrac{d}{dx}\\sin x = \\cos x\\). So \\(y'''' = \\cos x\\). Notice \\(y'''' = y\\) and \\(y'' = -y\\).",
      "\\(y'''' = \\cos x\\)"
    ),
    S(
      "Final answer: \\(y' = -\\sin x,\\; y'' = -\\cos x,\\; y''' = \\sin x,\\; y'''' = \\cos x\\).",
      '\\(-\\sin x,\\ -\\cos x,\\ \\sin x,\\ \\cos x\\)'
    ),
  ],
});

const sub14ci = mc('y12a-6b-q14c_i', {
  question:
    "For \\(y = \\cos x\\) we have \\(y'' = -y\\). What geometric relationship does this describe between the graphs of \\(y\\) and \\(y''\\)?",
  opts: [
    "The graph of \\(y''\\) is the reflection of the graph of \\(y\\) in the \\(x\\)-axis",
    "The graph of \\(y''\\) is a horizontal translation of \\(y\\) by \\(\\pi\\)",
    'The two graphs are identical',
    "The graph of \\(y''\\) is the reflection of \\(y\\) in the \\(y\\)-axis",
  ],
  a: 0,
  difficulty: 'medium',
  timeLimit: 90,
  solutionSteps: [
    S(
      "From successive differentiation: if \\(y = \\cos x\\), then \\(y'' = -\\cos x = -y\\).",
      "\\(y'' = -y\\)"
    ),
    S(
      "Multiplying a function by \\(-1\\) reflects its graph in the \\(x\\)-axis. So the graph of \\(y''\\) is the \\(x\\)-axis reflection of the graph of \\(y\\).",
      '\\(\\text{reflect }y\\text{ in the }x\\text{-axis}\\)'
    ),
    S(
      "Check: at a maximum of \\(\\cos x\\) (\\(y = 1\\)), we have \\(y'' = -1\\) (a minimum). The shapes match after a vertical flip.",
      '\\(\\text{max }\\leftrightarrow\\text{ min}\\)'
    ),
    S(
      'Final answer: reflection of \\(y\\) in the \\(x\\)-axis.',
      '\\(\\text{reflection in the }x\\text{-axis}\\)'
    ),
  ],
});

const sub14cii = mc('y12a-6b-q14c_ii', {
  question:
    "For \\(y = \\cos x\\) we have \\(y'''' = y\\). What geometric relationship does this describe between the graphs of \\(y\\) and \\(y''''\\)?",
  opts: [
    "The graphs of \\(y\\) and \\(y''''\\) are identical",
    "The graph of \\(y''''\\) is the reflection of \\(y\\) in the \\(x\\)-axis",
    "The graph of \\(y''''\\) is a vertical stretch of \\(y\\) by factor 2",
    'The two graphs are unrelated',
  ],
  a: 0,
  difficulty: 'medium',
  timeLimit: 90,
  solutionSteps: [
    S(
      "From successive differentiation: \\(y'''' = \\cos x = y\\).",
      "\\(y'''' = y\\)"
    ),
    S(
      'If two functions are equal for all \\(x\\) in the domain, their graphs coincide — they are identical.',
      '\\(\\text{graphs identical}\\)'
    ),
    S(
      'This is the four-step cycle of differentiating sine/cosine: after four derivatives you return to the original function.',
      '\\(\\text{4-step differentiation cycle}\\)'
    ),
    S(
      "Final answer: the graphs of \\(y\\) and \\(y''''\\) are identical.",
      '\\(\\text{identical graphs}\\)'
    ),
  ],
});

const sub14di = mc('y12a-6b-q14d_i', {
  question:
    'Which of \\(y = e^{x}\\), \\(y = e^{-x}\\), \\(y = \\sin x\\) and \\(y = x^{n}\\) (\\(n\\) a positive integer) satisfy \\(y\' = y\\)?',
  opts: [
    '\\(y = e^{-x}\\) only',
    '\\(y = \\sin x\\) only',
    '\\(y = e^{x}\\) only',
    '\\(y = e^{x}\\) and \\(y = e^{-x}\\)',
  ],
  a: 2,
  difficulty: 'medium',
  timeLimit: 120,
  solutionSteps: [
    S(
      "Condition: \\(y' = y\\). Test each candidate by differentiating.",
      "\\(y' = y\\)"
    ),
    S(
      "For \\(y = e^{x}\\): \\(y' = e^{x} = y\\). Satisfies.",
      '\\(e^{x}:\\checkmark\\)'
    ),
    S(
      "For \\(y = e^{-x}\\): \\(y' = -e^{-x} = -y \\neq y\\) (unless \\(y = 0\\)). Does not satisfy.",
      '\\(e^{-x}:\\times\\)'
    ),
    S(
      "For \\(y = \\sin x\\): \\(y' = \\cos x \\neq \\sin x\\) in general. For \\(y = x^{n}\\): \\(y' = n x^{n-1} \\neq x^{n}\\) in general.",
      '\\(\\sin x,\\ x^{n}:\\times\\)'
    ),
    S('Final answer: only \\(y = e^{x}\\).', '\\(y = e^{x}\\ \\text{only}\\)'),
  ],
});

const sub14dii = mc('y12a-6b-q14d_ii', {
  question:
    'Which of \\(y = e^{x}\\), \\(y = e^{-x}\\), \\(y = \\sin x\\) and \\(y = x^{n}\\) satisfy \\(y\'\' = y\\)?',
  opts: [
    '\\(y = e^{x}\\) only',
    '\\(y = e^{-x}\\) only',
    '\\(y = e^{x}\\) and \\(y = \\sin x\\)',
    '\\(y = e^{x}\\) and \\(y = e^{-x}\\)',
  ],
  a: 3,
  difficulty: 'medium',
  timeLimit: 120,
  solutionSteps: [
    S(
      "Condition: \\(y'' = y\\). Differentiate each candidate twice.",
      "\\(y'' = y\\)"
    ),
    S(
      "For \\(y = e^{x}\\): \\(y' = e^{x}\\), \\(y'' = e^{x} = y\\). Satisfies.",
      '\\(e^{x}:\\checkmark\\)'
    ),
    S(
      "For \\(y = e^{-x}\\): \\(y' = -e^{-x}\\), \\(y'' = e^{-x} = y\\). Satisfies.",
      '\\(e^{-x}:\\checkmark\\)'
    ),
    S(
      "For \\(y = \\sin x\\): \\(y' = \\cos x\\), \\(y'' = -\\sin x = -y \\neq y\\). Does not satisfy. Powers \\(x^{n}\\) fail in general.",
      '\\(\\sin x,\\ x^{n}:\\times\\)'
    ),
    S(
      'Final answer: \\(y = e^{x}\\) and \\(y = e^{-x}\\).',
      '\\(y = e^{x}\\ \\text{and}\\ y = e^{-x}\\)'
    ),
  ],
});

const sub14diii = mc('y12a-6b-q14d_iii', {
  question:
    'Which of \\(y = e^{x}\\), \\(y = e^{-x}\\), \\(y = \\sin x\\) and \\(y = x^{n}\\) satisfy \\(y\'\'\' = y\\)?',
  opts: [
    '\\(y = e^{-x}\\) only',
    '\\(y = \\sin x\\) only',
    '\\(y = e^{x}\\) only',
    'none of these',
  ],
  a: 2,
  difficulty: 'medium',
  timeLimit: 120,
  solutionSteps: [
    S(
      "Condition: \\(y''' = y\\). Differentiate three times.",
      "\\(y''' = y\\)"
    ),
    S(
      "For \\(y = e^{x}\\): every derivative is still \\(e^{x}\\), so \\(y''' = e^{x} = y\\). Satisfies.",
      '\\(e^{x}:\\checkmark\\)'
    ),
    S(
      "For \\(y = e^{-x}\\): \\(y' = -e^{-x}\\), \\(y'' = e^{-x}\\), \\(y''' = -e^{-x} = -y \\neq y\\). Fails.",
      '\\(e^{-x}:\\times\\)'
    ),
    S(
      "For \\(y = \\sin x\\): \\(y' = \\cos x\\), \\(y'' = -\\sin x\\), \\(y''' = -\\cos x \\neq \\sin x\\). Fails. Powers fail in general.",
      '\\(\\sin x,\\ x^{n}:\\times\\)'
    ),
    S('Final answer: only \\(y = e^{x}\\).', '\\(y = e^{x}\\ \\text{only}\\)'),
  ],
});

const sub14div = mc('y12a-6b-q14d_iv', {
  question:
    'Which of \\(y = e^{x}\\), \\(y = e^{-x}\\), \\(y = \\sin x\\) and \\(y = x^{n}\\) satisfy \\(y\'\'\'\' = y\\)?',
  opts: [
    '\\(y = e^{x}\\) only',
    '\\(y = e^{x}\\) and \\(y = e^{-x}\\) only',
    '\\(y = e^{x}\\) and \\(y = \\sin x\\) only',
    '\\(y = e^{x},\\ y = e^{-x}\\) and \\(y = \\sin x\\)',
  ],
  a: 3,
  difficulty: 'medium',
  timeLimit: 120,
  solutionSteps: [
    S(
      "Condition: \\(y'''' = y\\) (fourth derivative equals the function).",
      "\\(y'''' = y\\)"
    ),
    S(
      "For \\(y = e^{x}\\): all derivatives equal \\(e^{x}\\), so \\(y'''' = y\\). Satisfies.",
      '\\(e^{x}:\\checkmark\\)'
    ),
    S(
      "For \\(y = e^{-x}\\): derivatives cycle every 2 with a sign, but the fourth derivative returns to \\(e^{-x}\\). So \\(y'''' = y\\). Satisfies.",
      '\\(e^{-x}:\\checkmark\\)'
    ),
    S(
      "For \\(y = \\sin x\\): the derivatives cycle every 4 steps and \\(y'''' = \\sin x = y\\). Satisfies. For \\(x^{n}\\), the fourth derivative is not equal to \\(x^{n}\\) in general.",
      '\\(\\sin x:\\checkmark;\\ x^{n}:\\times\\)'
    ),
    S(
      'Final answer: \\(y = e^{x}\\), \\(y = e^{-x}\\) and \\(y = \\sin x\\).',
      '\\(e^{x},\\ e^{-x},\\ \\sin x\\)'
    ),
  ],
});

const SUBS = [sub14a, sub14b, sub14ci, sub14cii, sub14di, sub14dii, sub14diii, sub14div];

const parent = {
  id: 'y12a-6b-q14',
  ...TOPIC,
  type: 'multi_part',
  difficulty: 'hard',
  timeLimit: 600,
  question:
    'Let \\(y = \\cos x\\). This question explores successive derivatives of cosine and related differential equations.',
  answer: '',
  hint:
    "Work through the parts in order. Keep a clear list of \\(y,\\ y',\\ y'',\\ y''',\\ y''''\\).",
  solution: '',
  solutionSteps: [],
  graphData: null,
  subQuestions: SUBS,
  isActive: true,
  requiresManualGrading: false,
};

(async () => {
  await db.collection('questions').doc(parent.id).set(
    { ...parent, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );

  for (const sub of SUBS) {
    await db.collection('questions').doc(sub.id).set(
      {
        ...sub,
        ...TOPIC,
        isActive: false,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log('sub', sub.id, 'a=', sub.a, 'steps', sub.solutionSteps.length);
  }

  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const mod = require(seedPath);
  let list = mod.Y12A_CH6B_QUESTIONS || [];
  const drop = new Set(SUBS.map((s) => s.id).concat(['y12a-6b-q14']));
  list = list.filter((q) => !drop.has(q.id));
  list.push(parent);
  list.sort((a, b) => String(a.id).localeCompare(String(b.id)));

  writeFileSync(
    seedPath,
    'export const Y12A_CH6B_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6B_QUESTIONS;\n'
  );
  console.log('seed count', list.length);

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  const r = spawnSync(
    'node',
    [path.join(__dirname, 'rebuildQuestionIndexes.js'), 'y12a-6'],
    { encoding: 'utf8', timeout: 120000 }
  );
  console.log(r.stdout || '');
  if (r.stderr) console.error(r.stderr);
  if (r.status !== 0) process.exit(r.status || 1);

  const d = (await db.collection('questions').doc('y12a-6b-q14').get()).data();
  console.log('parent type', d.type, 'subs', d.subQuestions?.map((s) => s.id + ':' + s.type));
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
