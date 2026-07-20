'use strict';
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

/** cos x on [-3π, 3π] — for solution steps only */
const COS_GRAPH = {
  jsxGraph: {
    width: 420,
    height: 240,
    boundingbox: [-10.2, 1.6, 10.2, -1.6],
    showAxisLabels: true,
    showGrid: true,
    script:
      "board.suspendUpdate();" +
      "board.create('arrow', [[-10,0],[10,0]], {strokeColor:'#94a3b8', strokeWidth:1.5});" +
      "board.create('arrow', [[0,-1.5],[0,1.5]], {strokeColor:'#94a3b8', strokeWidth:1.5});" +
      "board.create('text', [9.2, -0.35, 'x'], {fontSize:13, color:'#64748b'});" +
      "board.create('text', [0.25, 1.35, 'y'], {fontSize:13, color:'#64748b'});" +
      "board.create('functiongraph', [function(x){ return Math.cos(x); }, -9.5, 9.5], {strokeColor:'#6366f1', strokeWidth:2.6});" +
      "board.create('text', [2.2, 1.15, 'y = cos x'], {fontSize:13, color:'#4f46e5'});" +
      // mark a few key points
      "board.create('point', [0,1], {name:'', size:2, color:'#6366f1'});" +
      "board.create('point', [Math.PI,-1], {name:'', size:2, color:'#6366f1'});" +
      "board.create('point', [-Math.PI,-1], {name:'', size:2, color:'#6366f1'});" +
      "board.create('point', [2*Math.PI,1], {name:'', size:2, color:'#6366f1'});" +
      "board.create('point', [-2*Math.PI,1], {name:'', size:2, color:'#6366f1'});" +
      "board.create('text', [0.15, 1.15, '1'], {fontSize:11, color:'#64748b'});" +
      "board.create('text', [Math.PI-0.3, -1.35, 'π'], {fontSize:11, color:'#64748b'});" +
      "board.create('text', [2*Math.PI-0.4, 1.15, '2π'], {fontSize:11, color:'#64748b'});" +
      "board.unsuspendUpdate();",
  },
};

function S(explanation, workingOut, graphData = null) {
  return { explanation, workingOut, graphData };
}

const solutionSteps = [
  S(
    'Given: describe (and sketch) \\(y = \\cos x\\) for \\(-3\\pi \\le x \\le 3\\pi\\). The sketch belongs in the solution, not in the question stem.',
    '\\(y = \\cos x\\)',
    null
  ),
  S(
    'Sketch of \\(y = \\cos x\\) on a wide window covering about \\([-3\\pi, 3\\pi]\\). Period \\(2\\pi\\), amplitude 1, maxima at multiples of \\(2\\pi\\), minima at odd multiples of \\(\\pi\\).',
    '\\(y = \\cos x\\)',
    COS_GRAPH
  ),
  S(
    'Period: \\(\\cos(x + 2\\pi) = \\cos x\\), so the fundamental period is \\(2\\pi\\). On \\([-3\\pi, 3\\pi]\\) the graph completes three full periods.',
    '\\(\\text{period } = 2\\pi\\)'
  ),
  S(
    'Range: cosine takes all values in \\([-1, 1]\\). Local maxima \\(y = 1\\) at \\(x = 2k\\pi\\) (e.g. \\(0,\\,\\pm 2\\pi\\)). Local minima \\(y = -1\\) at \\(x = (2k+1)\\pi\\).',
    '\\(\\text{range }[-1,1]\\)'
  ),
  S(
    'Zeros: \\(\\cos x = 0\\) at \\(x = \\dfrac{\\pi}{2} + k\\pi\\) (odd multiples of \\(\\dfrac{\\pi}{2}\\)).',
    '\\(\\text{zeros at odd multiples of }\\pi/2\\)'
  ),
  S(
    'Final answer: period \\(2\\pi\\), range \\([-1,1]\\), maxima at multiples of \\(2\\pi\\), zeros at odd multiples of \\(\\dfrac{\\pi}{2}\\).',
    '\\(\\text{period }2\\pi,\\ \\text{range }[-1,1]\\)'
  ),
];

(async () => {
  // Flat child: no question graph; steps include graph
  await db.collection('questions').doc('y12a-6b-q14a').set(
    {
      graphData: null,
      solutionSteps,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  await db.collection('questions').doc('y12a-6b-q14a').update({ graphData: null });

  // Parent subQuestions array must match
  const parent = (await db.collection('questions').doc('y12a-6b-q14').get()).data();
  if (parent && Array.isArray(parent.subQuestions)) {
    const subs = parent.subQuestions.map((s) => {
      if (s.id !== 'y12a-6b-q14a') return s;
      return {
        ...s,
        graphData: null,
        solutionSteps,
      };
    });
    await db.collection('questions').doc('y12a-6b-q14').set(
      {
        subQuestions: subs,
        graphData: null,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    await db.collection('questions').doc('y12a-6b-q14').update({ graphData: null });
  }

  // Seed
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const mod = require(seedPath);
  const list = mod.Y12A_CH6B_QUESTIONS;
  const p = list.find((q) => q.id === 'y12a-6b-q14');
  if (p && Array.isArray(p.subQuestions)) {
    p.graphData = null;
    p.subQuestions = p.subQuestions.map((s) => {
      if (s.id !== 'y12a-6b-q14a') return s;
      return { ...s, graphData: null, solutionSteps };
    });
  }
  const flat = list.find((q) => q.id === 'y12a-6b-q14a');
  if (flat) {
    flat.graphData = null;
    flat.solutionSteps = solutionSteps;
  }
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

  const d = (await db.collection('questions').doc('y12a-6b-q14a').get()).data();
  const par = (await db.collection('questions').doc('y12a-6b-q14').get()).data();
  const sub = par.subQuestions.find((s) => s.id === 'y12a-6b-q14a');
  console.log('flat graphData', d.graphData);
  console.log('flat step graphs', d.solutionSteps.map((s) => !!s.graphData));
  console.log('parent.sub graphData', sub.graphData);
  console.log('parent.sub step graphs', sub.solutionSteps.map((s) => !!s.graphData));
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
