/**
 * Convert y12a-6b-q16a to multi_part MC with detailed product-rule / DE steps.
 *
 *   node tools/scripts/convertY12A6Bq16aToMCQ.cjs
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
      'Use the product rule carefully, then substitute into the left-hand side of the differential equation.',
    solution: 'The correct answer is ' + opts[a] + '.',
    solutionSteps,
    graphData: null,
    requiresManualGrading: false,
  };
}

// ── Sub (1): y' ────────────────────────────────────────────────────────
const sub1 = mc('y12a-6b-q16a_1', {
  question: "Find \\(y'\\) for \\(y = e^{x}\\sin x\\).",
  opts: [
    '\\(e^{x}(\\cos x - \\sin x)\\)',
    '\\(e^{x}(\\sin x + \\cos x)\\)',
    '\\(e^{x}(\\sin x - \\cos x)\\)',
    '\\(2e^{x}\\sin x\\)',
  ],
  a: 1,
  difficulty: 'medium',
  timeLimit: 120,
  hint: 'Product rule: \\((uv)\' = u\'v + uv\'\\) with \\(u = e^{x}\\) and \\(v = \\sin x\\).',
  solutionSteps: [
    S(
      'Given: \\(y = e^{x}\\sin x\\). Strategy: product rule with \\(u = e^{x}\\) and \\(v = \\sin x\\).',
      '\\(y = e^{x}\\sin x\\)'
    ),
    S(
      "Differentiate each factor: \\(u' = e^{x}\\) and \\(v' = \\cos x\\).",
      "\\(u' = e^{x},\\quad v' = \\cos x\\)"
    ),
    S(
      "Product rule: \\(y' = u'v + uv' = e^{x}\\sin x + e^{x}\\cos x\\).",
      "\\(y' = e^{x}\\sin x + e^{x}\\cos x\\)"
    ),
    S(
      "Factor out the common \\(e^{x}\\): \\(y' = e^{x}(\\sin x + \\cos x)\\). A common slip is a sign error on the cosine term, or forgetting one of the two product-rule terms.",
      "\\(y' = e^{x}(\\sin x + \\cos x)\\)"
    ),
    S(
      "Final answer: \\(e^{x}(\\sin x + \\cos x)\\).",
      "\\(e^{x}(\\sin x + \\cos x)\\)"
    ),
  ],
});

// ── Sub (2): y'' ───────────────────────────────────────────────────────
const sub2 = mc('y12a-6b-q16a_2', {
  question: "Find \\(y''\\) for \\(y = e^{x}\\sin x\\).",
  opts: [
    '\\(-2e^{x}\\cos x\\)',
    '\\(2e^{x}\\sin x\\)',
    '\\(2e^{x}\\cos x\\)',
    '\\(e^{x}(\\sin x + \\cos x)\\)',
  ],
  a: 2,
  difficulty: 'medium',
  timeLimit: 150,
  hint: "Differentiate \\(y' = e^{x}(\\sin x + \\cos x)\\) using the product rule again.",
  solutionSteps: [
    S(
      "From the previous part: \\(y' = e^{x}(\\sin x + \\cos x)\\). Strategy: product rule again to find \\(y''\\).",
      "\\(y' = e^{x}(\\sin x + \\cos x)\\)"
    ),
    S(
      "Write \\(y' = e^{x}\\cdot w\\) with \\(w = \\sin x + \\cos x\\). Then \\(w' = \\cos x - \\sin x\\).",
      "\\(w = \\sin x + \\cos x,\\quad w' = \\cos x - \\sin x\\)"
    ),
    S(
      "Product rule: \\(y'' = e^{x}\\,w + e^{x}\\,w' = e^{x}\\bigl[(\\sin x + \\cos x) + (\\cos x - \\sin x)\\bigr]\\).",
      "\\(y'' = e^{x}\\bigl[\\sin x + \\cos x + \\cos x - \\sin x\\bigr]\\)"
    ),
    S(
      'Simplify inside the brackets: \\(\\sin x - \\sin x + \\cos x + \\cos x = 2\\cos x\\).',
      '\\(y\'\' = e^{x}\\cdot 2\\cos x\\)'
    ),
    S(
      "Therefore \\(y'' = 2e^{x}\\cos x\\). A common slip is dropping a sign when differentiating \\(\\cos x\\), or forgetting the product rule on the exponential factor.",
      "\\(y'' = 2e^{x}\\cos x\\)"
    ),
    S("Final answer: \\(2e^{x}\\cos x\\).", "\\(2e^{x}\\cos x\\)"),
  ],
});

// ── Sub (3): show DE (as MC) ────────────────────────────────────────────
const sub3 = mc('y12a-6b-q16a_3', {
  question:
    "Given \\(y = e^{x}\\sin x\\) with \\(y' = e^{x}(\\sin x + \\cos x)\\) and \\(y'' = 2e^{x}\\cos x\\), which calculation correctly shows that \\(y'' - 2y' + 2y = 0\\)?",
  opts: [
    "\\(2e^{x}\\cos x - 2e^{x}(\\sin x + \\cos x) + 2e^{x}\\sin x = 2e^{x}\\cos x - 2e^{x}\\sin x - 2e^{x}\\cos x + 2e^{x}\\sin x = 0\\)",
    "\\(2e^{x}\\cos x - 2e^{x}(\\sin x + \\cos x) + 2e^{x}\\sin x = 4e^{x}\\cos x \\neq 0\\)",
    "\\(2e^{x}\\cos x + 2e^{x}(\\sin x + \\cos x) - 2e^{x}\\sin x = 0\\) (wrong signs on the middle term)",
    "\\(y'' - 2y' + 2y = e^{x}\\sin x \\neq 0\\)",
  ],
  a: 0,
  difficulty: 'hard',
  timeLimit: 180,
  hint: 'Substitute the expressions for \\(y\', y\'\'\\) and \\(y\\), expand, and cancel like terms.',
  solutionSteps: [
    S(
      "Goal: show \\(y'' - 2y' + 2y = 0\\) for \\(y = e^{x}\\sin x\\). Use the expressions already found.",
      "\\(y = e^{x}\\sin x,\\quad y' = e^{x}(\\sin x + \\cos x),\\quad y'' = 2e^{x}\\cos x\\)"
    ),
    S(
      "Substitute into the left-hand side: \\(y'' - 2y' + 2y = 2e^{x}\\cos x - 2\\cdot e^{x}(\\sin x + \\cos x) + 2\\cdot e^{x}\\sin x\\).",
      "\\(2e^{x}\\cos x - 2e^{x}(\\sin x + \\cos x) + 2e^{x}\\sin x\\)"
    ),
    S(
      'Expand the middle term: \\(-2e^{x}(\\sin x + \\cos x) = -2e^{x}\\sin x - 2e^{x}\\cos x\\).',
      '\\(2e^{x}\\cos x - 2e^{x}\\sin x - 2e^{x}\\cos x + 2e^{x}\\sin x\\)'
    ),
    S(
      'Group like terms: \\((2e^{x}\\cos x - 2e^{x}\\cos x) + (-2e^{x}\\sin x + 2e^{x}\\sin x) = 0 + 0 = 0\\).',
      '\\(0\\)'
    ),
    S(
      "Therefore \\(y'' - 2y' + 2y = 0\\), as required. A common slip is a sign error when expanding \\(-2y'\\).",
      "\\(y'' - 2y' + 2y = 0\\)"
    ),
  ],
});

const SUBS = [sub1, sub2, sub3];

const parent = {
  id: 'y12a-6b-q16a',
  ...TOPIC,
  type: 'multi_part',
  difficulty: 'hard',
  timeLimit: 360,
  question: 'Let \\(y = e^{x}\\sin x\\).',
  answer: '',
  hint:
    "Use the product rule for \\(y'\\) and \\(y''\\), then substitute into the left-hand side of the differential equation.",
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

  // seed
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const mod = require(seedPath);
  let list = mod.Y12A_CH6B_QUESTIONS || [];
  const drop = new Set(['y12a-6b-q16a', 'y12a-6b-q16a_1', 'y12a-6b-q16a_2', 'y12a-6b-q16a_3']);
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

  const d = (await db.collection('questions').doc('y12a-6b-q16a').get()).data();
  console.log(
    'parent',
    d.type,
    d.subQuestions.map((s) => s.id + ':' + s.type)
  );
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
