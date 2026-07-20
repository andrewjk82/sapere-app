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

function S(e, w) {
  return { explanation: e, workingOut: w, graphData: null };
}
const TOPIC = {
  topicId: 'y12a-6B',
  chapterId: 'y12a-6',
  c: '6B',
  t: 'Differentiating the trigonometric functions',
  origin: 'seed',
};

const q4a = {
  id: 'y12a-6b-q4a',
  ...TOPIC,
  isNew: true,
  isActive: true,
  type: 'multiple_choice',
  difficulty: 'easy',
  timeLimit: 90,
  question: "If \\(f(x) = \\cos 2x\\), find \\(f'(0)\\).",
  opts: ['\\(0\\)', '\\(-1\\)', '\\(-2\\)', '\\(1\\)'],
  a: 0,
  answer: '0',
  hint: "Differentiate, then substitute \\(x = 0\\).",
  solution: 'The correct answer is \\(0\\).',
  solutionSteps: [
    S(
      'Given: \\(f(x) = \\cos 2x\\). Strategy: differentiate using the chain rule, then evaluate at \\(x = 0\\).',
      '\\(f(x) = \\cos 2x\\)'
    ),
    S("Derivative: \\(f'(x) = -2\\sin 2x\\).", "\\(f'(x) = -2\\sin 2x\\)"),
    S("At \\(x = 0\\): \\(f'(0) = -2\\sin 0 = 0\\).", "\\(f'(0) = 0\\)"),
    S('Final answer: \\(0\\).', '\\(0\\)'),
  ],
  graphData: null,
  requiresManualGrading: false,
};
q4a.options = q4a.opts.map((text) => ({ text, imageUrl: null }));

const q5a = {
  id: 'y12a-6b-q5a',
  ...TOPIC,
  isNew: true,
  isActive: true,
  type: 'multiple_choice',
  difficulty: 'easy',
  timeLimit: 90,
  question:
    "If \\(f(x) = \\sin\\!\\left(\\dfrac{1}{4}x + \\dfrac{\\pi}{2}\\right)\\), find \\(f'(0)\\).",
  opts: ['\\(0\\)', '\\(\\dfrac{1}{4}\\)', '\\(-\\dfrac{1}{4}\\)', '\\(1\\)'],
  a: 0,
  answer: '0',
  hint: "Chain rule, then substitute \\(x = 0\\). Note \\(\\cos(\\pi/2) = 0\\).",
  solution: 'The correct answer is \\(0\\).',
  solutionSteps: [
    S(
      'Given: \\(f(x) = \\sin\\!\\left(\\dfrac{x}{4} + \\dfrac{\\pi}{2}\\right)\\). Strategy: chain rule, then evaluate at 0.',
      '\\(f(x) = \\sin\\!\\left(\\dfrac{x}{4} + \\dfrac{\\pi}{2}\\right)\\)'
    ),
    S(
      "Let \\(u = \\dfrac{x}{4} + \\dfrac{\\pi}{2}\\), so \\(u' = \\dfrac{1}{4}\\). Then \\(f'(x) = \\dfrac{1}{4}\\cos u\\).",
      "\\(f'(x) = \\dfrac{1}{4}\\cos\\!\\left(\\dfrac{x}{4} + \\dfrac{\\pi}{2}\\right)\\)"
    ),
    S(
      "At \\(x = 0\\): \\(f'(0) = \\dfrac{1}{4}\\cos(\\pi/2) = 0\\).",
      "\\(f'(0) = 0\\)"
    ),
    S(
      "Check via identity: \\(\\sin(x/4+\\pi/2)=\\cos(x/4)\\) so \\(f'(x)=-\\dfrac{1}{4}\\sin(x/4)\\) and \\(f'(0)=0\\).",
      '\\(0\\)'
    ),
    S('Final answer: \\(0\\).', '\\(0\\)'),
  ],
  graphData: null,
  requiresManualGrading: false,
};
q5a.options = q5a.opts.map((text) => ({ text, imageUrl: null }));

const subA = {
  id: 'y12a-6b-q17a',
  type: 'multiple_choice',
  difficulty: 'medium',
  timeLimit: 150,
  question:
    'Let \\(y = \\dfrac{1}{3}\\tan^{3}x - \\tan x + x\\). Which expression equals \\(\\dfrac{dy}{dx}\\)?',
  opts: [
    '\\(\\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\)',
    '\\(\\tan^{2}x\\,\\sec^{2}x + \\sec^{2}x + 1\\)',
    '\\(\\tan^{3}x\\,\\sec^{2}x - \\sec^{2}x\\)',
    '\\(\\tan^{2}x\\,\\sec x - \\sec^{2}x + 1\\)',
  ],
  a: 0,
  answer: '0',
  hint: 'Differentiate term by term. For \\(\\tan^{3}x\\) use the chain rule.',
  solution: 'The correct answer is \\(\\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\).',
  solutionSteps: [
    S(
      'Given: \\(y = \\dfrac{1}{3}\\tan^{3}x - \\tan x + x\\). Strategy: differentiate term by term.',
      '\\(y = \\dfrac{1}{3}\\tan^{3}x - \\tan x + x\\)'
    ),
    S(
      'First term: \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{1}{3}\\tan^{3}x\\right) = \\tan^{2}x\\,\\sec^{2}x\\).',
      '\\(\\tan^{2}x\\,\\sec^{2}x\\)'
    ),
    S(
      'Second: \\(\\dfrac{d}{dx}(-\\tan x) = -\\sec^{2}x\\). Third: \\(\\dfrac{d}{dx}(x) = 1\\).',
      '\\(-\\sec^{2}x + 1\\)'
    ),
    S(
      'Combine: \\(\\dfrac{dy}{dx} = \\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\).',
      '\\(\\dfrac{dy}{dx} = \\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\)'
    ),
    S(
      'Final answer: \\(\\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\).',
      '\\(\\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\)'
    ),
  ],
  graphData: null,
  requiresManualGrading: false,
};
subA.options = subA.opts.map((text) => ({ text, imageUrl: null }));

const subB = {
  id: 'y12a-6b-q17b',
  type: 'multiple_choice',
  difficulty: 'hard',
  timeLimit: 180,
  question:
    'Hence, using \\(\\sec^{2}x = 1 + \\tan^{2}x\\), simplify \\(\\dfrac{dy}{dx}\\) for \\(y = \\dfrac{1}{3}\\tan^{3}x - \\tan x + x\\).',
  opts: [
    '\\(\\tan^{4}x\\)',
    '\\(\\tan^{2}x\\)',
    '\\(\\sec^{4}x\\)',
    '\\(\\tan^{2}x\\,\\sec^{2}x\\)',
  ],
  a: 0,
  answer: '0',
  hint: 'Start from part (a) and replace every \\(\\sec^{2}x\\).',
  solution: 'The correct answer is \\(\\tan^{4}x\\).',
  solutionSteps: [
    S(
      'From part (a): \\(\\dfrac{dy}{dx} = \\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\).',
      '\\(\\dfrac{dy}{dx} = \\tan^{2}x\\,\\sec^{2}x - \\sec^{2}x + 1\\)'
    ),
    S(
      'Replace \\(\\sec^{2}x\\) by \\(1+\\tan^{2}x\\): \\(\\tan^{2}x(1+\\tan^{2}x)-(1+\\tan^{2}x)+1\\).',
      '\\(\\tan^{2}x + \\tan^{4}x - 1 - \\tan^{2}x + 1\\)'
    ),
    S(
      'Simplify: \\(\\tan^{4}x\\).',
      '\\(\\dfrac{dy}{dx} = \\tan^{4}x\\)'
    ),
    S('Final answer: \\(\\tan^{4}x\\).', '\\(\\tan^{4}x\\)'),
  ],
  graphData: null,
  requiresManualGrading: false,
};
subB.options = subB.opts.map((text) => ({ text, imageUrl: null }));

const q17 = {
  id: 'y12a-6b-q17',
  ...TOPIC,
  isNew: true,
  isActive: true,
  type: 'multi_part',
  difficulty: 'hard',
  timeLimit: 300,
  question: 'Consider the function \\(y = \\dfrac{1}{3}\\tan^{3}x - \\tan x + x\\).',
  answer: '',
  hint: 'Differentiate term by term, then simplify using \\(\\sec^{2}x = 1 + \\tan^{2}x\\).',
  solution: '',
  solutionSteps: [],
  graphData: null,
  subQuestions: [subA, subB],
  requiresManualGrading: false,
};

(async () => {
  for (const q of [q4a, q5a, q17]) {
    await db
      .collection('questions')
      .doc(q.id)
      .set({ ...q, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
  }
  for (const s of [subA, subB]) {
    await db.collection('questions').doc(s.id).set(
      {
        ...s,
        ...TOPIC,
        isActive: false,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  }

  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  let list = require(seedPath).Y12A_CH6B_QUESTIONS;
  list = list.filter((q) => !['y12a-6b-q17a', 'y12a-6b-q17b'].includes(q.id));
  for (const q of [q4a, q5a, q17]) {
    const i = list.findIndex((x) => x.id === q.id);
    if (i >= 0) list[i] = q;
    else list.push(q);
  }
  list.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  writeFileSync(
    seedPath,
    'export const Y12A_CH6B_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6B_QUESTIONS;\n'
  );

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  spawnSync('node', [path.join(__dirname, 'rebuildQuestionIndexes.js'), 'y12a-6'], {
    encoding: 'utf8',
  });

  for (const id of ['y12a-6b-q4a', 'y12a-6b-q5a', 'y12a-6b-q17', 'y12a-6b-q1a', 'y12a-6b-q11b']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      id,
      d.type,
      'steps',
      d.solutionSteps?.length,
      d.solutionSteps?.[0]?.workingOut?.slice?.(0, 40) || d.subQuestions?.map((s) => s.type)
    );
  }
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
