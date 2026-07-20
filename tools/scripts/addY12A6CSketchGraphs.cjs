/**
 * Add jsxGraph sketches to solutionSteps of 6C sketch teacher_review parts.
 * Graph goes in SOLUTION only (question graphData stays null).
 *
 *   node tools/scripts/addY12A6CSketchGraphs.cjs
 */
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

function S(explanation, workingOut, graphData = null) {
  return { explanation, workingOut, graphData };
}

function axesScript(xMin, xMax, yMin, yMax) {
  return (
    `board.create('arrow', [[${xMin},0],[${xMax},0]], {strokeColor:'#94a3b8', strokeWidth:1.5});` +
    `board.create('arrow', [[0,${yMin}],[0,${yMax}]], {strokeColor:'#94a3b8', strokeWidth:1.5});` +
    `board.create('text', [${xMax - 0.6}, -0.45, 'x'], {fontSize:13, color:'#64748b'});` +
    `board.create('text', [0.25, ${yMax - 0.35}, 'y'], {fontSize:13, color:'#64748b'});`
  );
}

function jxg(script, bb, width = 440, height = 280) {
  return {
    jsxGraph: {
      width,
      height,
      boundingbox: bb,
      showAxisLabels: false,
      showGrid: true,
      script: `board.suspendUpdate(); ${script} board.unsuspendUpdate();`,
    },
  };
}

// y = x + sin x on [-2π, 2π]
const GRAPH_X_PLUS_SIN = jxg(
  axesScript(-7.2, 7.2, -7.5, 7.5) +
    "board.create('functiongraph', [function(x){ return x; }, -6.5, 6.5], {strokeColor:'#94a3b8', strokeWidth:1.2, dash:2});" +
    "board.create('functiongraph', [function(x){ return x + Math.sin(x); }, -6.5, 6.5], {strokeColor:'#6366f1', strokeWidth:2.6});" +
    "board.create('point', [-Math.PI, -Math.PI], {name:'', size:2.5, color:'#f43f5e'});" +
    "board.create('point', [Math.PI, Math.PI], {name:'', size:2.5, color:'#f43f5e'});" +
    "board.create('point', [0, 0], {name:'', size:2, color:'#10b981'});" +
    "board.create('text', [2.4, 5.2, 'y = x + sin x'], {fontSize:13, color:'#4f46e5'});" +
    "board.create('text', [3.5, 2.8, 'y = x'], {fontSize:11, color:'#64748b'});" +
    "board.create('text', [-Math.PI - 0.2, -Math.PI + 0.7, '(-π,-π)'], {fontSize:11, color:'#e11d48'});" +
    "board.create('text', [Math.PI + 0.15, Math.PI + 0.5, '(π,π)'], {fontSize:11, color:'#e11d48'});",
  [-7.5, 7.8, 7.5, -7.8]
);

// y = x - cos x on [-2π, 2π]
const GRAPH_X_MINUS_COS = jxg(
  axesScript(-7.2, 7.2, -8, 8) +
    "board.create('functiongraph', [function(x){ return x; }, -6.5, 6.5], {strokeColor:'#94a3b8', strokeWidth:1.2, dash:2});" +
    "board.create('functiongraph', [function(x){ return x - Math.cos(x); }, -6.5, 6.5], {strokeColor:'#6366f1', strokeWidth:2.6});" +
    "board.create('point', [-Math.PI/2, -Math.PI/2], {name:'', size:2.5, color:'#f43f5e'});" +
    "board.create('point', [3*Math.PI/2, 3*Math.PI/2], {name:'', size:2.5, color:'#f43f5e'});" +
    "board.create('text', [2.2, 5.5, 'y = x − cos x'], {fontSize:13, color:'#4f46e5'});" +
    "board.create('text', [3.6, 2.9, 'y = x'], {fontSize:11, color:'#64748b'});",
  [-7.5, 8.2, 7.5, -8.2]
);

// y = cos x - sin x = √2 cos(x+π/4)
const GRAPH_COS_MINUS_SIN = jxg(
  axesScript(-1.2, 7.2, -2.2, 2.2) +
    "board.create('functiongraph', [function(x){ return Math.cos(x); }, -0.2, 6.6], {strokeColor:'#94a3b8', strokeWidth:1.3, dash:2});" +
    "board.create('functiongraph', [function(x){ return -Math.sin(x); }, -0.2, 6.6], {strokeColor:'#f59e0b', strokeWidth:1.3, dash:2});" +
    "board.create('functiongraph', [function(x){ return Math.cos(x) - Math.sin(x); }, -0.2, 6.6], {strokeColor:'#6366f1', strokeWidth:2.6});" +
    "board.create('point', [3*Math.PI/4, -Math.SQRT2], {name:'', size:2.5, color:'#f43f5e'});" +
    "board.create('point', [7*Math.PI/4, Math.SQRT2], {name:'', size:2.5, color:'#10b981'});" +
    "board.create('text', [3.8, 1.7, 'y = cos x − sin x'], {fontSize:12, color:'#4f46e5'});" +
    "board.create('text', [0.3, 1.4, 'cos x'], {fontSize:11, color:'#64748b'});" +
    "board.create('text', [1.2, -1.5, '−sin x'], {fontSize:11, color:'#d97706'});",
  [-1.5, 2.4, 7.0, -2.4],
  440,
  260
);

// y = cos x + √3 sin x = 2 sin(x+π/6) or 2 cos(x-π/3)
const GRAPH_COS_PLUS_SQRT3_SIN = jxg(
  axesScript(-0.8, 7.0, -2.6, 2.6) +
    "board.create('functiongraph', [function(x){ return Math.cos(x) + Math.sqrt(3)*Math.sin(x); }, -0.2, 6.5], {strokeColor:'#6366f1', strokeWidth:2.6});" +
    "board.create('point', [Math.PI/3, 2], {name:'', size:2.5, color:'#10b981'});" +
    "board.create('point', [4*Math.PI/3, -2], {name:'', size:2.5, color:'#f43f5e'});" +
    "board.create('text', [3.2, 2.15, 'y = cos x + √3 sin x'], {fontSize:12, color:'#4f46e5'});" +
    "board.create('text', [Math.PI/3 + 0.15, 2.25, 'max 2'], {fontSize:11, color:'#059669'});" +
    "board.create('text', [4*Math.PI/3 + 0.1, -2.35, 'min −2'], {fontSize:11, color:'#e11d48'});",
  [-1.0, 2.8, 6.8, -2.8],
  440,
  260
);

// y = 2 sin x + x on [0, 2π]
const GRAPH_2SIN_PLUS_X = jxg(
  axesScript(-0.6, 7.0, -1.5, 8.5) +
    "board.create('functiongraph', [function(x){ return x; }, 0, 6.4], {strokeColor:'#94a3b8', strokeWidth:1.2, dash:2});" +
    "board.create('functiongraph', [function(x){ return 2*Math.sin(x) + x; }, 0, 6.4], {strokeColor:'#6366f1', strokeWidth:2.6});" +
    "board.create('point', [2*Math.PI/3, 2*Math.sin(2*Math.PI/3)+2*Math.PI/3], {name:'', size:2.5, color:'#10b981'});" +
    "board.create('point', [4*Math.PI/3, 2*Math.sin(4*Math.PI/3)+4*Math.PI/3], {name:'', size:2.5, color:'#f43f5e'});" +
    "board.create('text', [3.5, 7.2, 'y = 2 sin x + x'], {fontSize:12, color:'#4f46e5'});" +
    "board.create('text', [4.2, 3.6, 'y = x'], {fontSize:11, color:'#64748b'});",
  [-0.8, 8.8, 6.8, -1.8],
  440,
  280
);

const PATCH = {
  'y12a-6c-q11d': {
    answer:
      'Sketch of y = x + sin x on [-2π, 2π]: increasing curve about y = x, flattening at horizontal points of inflection (-π,-π) and (π,π).',
    solutionSteps: [
      S(
        'Why sketch last? Parts (a)–(c) already give y′ = 1 + cos x ≥ 0, horizontal points of inflection at (±π, ±π), and an inflection at the origin. What we do now is assemble those features into one accurate diagram on [-2π, 2π]. A common mistake is drawing a pure sine wave and forgetting the underlying line y = x.',
        '\\(y = x + \\sin x\\)',
        null
      ),
      S(
        'Solution sketch: the solid curve is y = x + sin x; the dashed line is y = x for reference. Mark horizontal POI at (-π, -π) and (π, π) (red) and the origin inflection (green). The curve is always non-decreasing because y′ = 1 + cos x ≥ 0, and it “wiggles” gently about y = x with amplitude 1.',
        '\\(y = x + \\sin x\\ \\text{on}\\ [-2\\pi,\\ 2\\pi]\\)',
        GRAPH_X_PLUS_SIN
      ),
      S(
        'Check features on the graph: near x = ±π the curve flattens (horizontal tangent and y′′ = 0). Endpoints are near (-2π, -2π) and (2π, 2π). Why this matters: the sketch must match the calculus, not a freehand sine.',
        '\\text{POI at }(\\pm\\pi,\\ \\pm\\pi)'
      ),
      S(
        'Final: a smooth increasing curve on [-2π, 2π] about y = x, with marked stationary-inflection points (±π, ±π) and gentle oscillations of amplitude 1.',
        '\\text{sketch complete}'
      ),
    ],
    graphData: null,
  },

  'y12a-6c-q12d': {
    answer:
      'Sketch of y = x − cos x on [-2π, 2π]: increasing curve about y = x, with horizontal POI near (-π/2, -π/2) and (3π/2, 3π/2).',
    solutionSteps: [
      S(
        'From earlier parts: y′ = 1 + sin x ≥ 0 so the curve is non-decreasing; y′′ = cos x. Why sketch now? To combine stationary/inflection information into one diagram on [-2π, 2π]. A common slip is swapping x − cos x for x + cos x.',
        '\\(y = x - \\cos x\\)'
      ),
      S(
        'Solution sketch (solid): y = x − cos x; dashed: y = x. The curve rides above and below the line as cos x changes, always rising overall.',
        '\\(y = x - \\cos x\\ \\text{on}\\ [-2\\pi,\\ 2\\pi]\\)',
        GRAPH_X_MINUS_COS
      ),
      S(
        'Mark horizontal points of inflection where y′ = 0 and y′′ = 0 consistently with earlier answers (e.g. near x = −π/2 and x = 3π/2 in the domain). Endpoints near (−2π, −2π) and (2π, 2π).',
        '\\text{horizontal POI marked}'
      ),
      S(
        'Final: smooth non-decreasing sketch about y = x with the correct POI marked on [-2π, 2π].',
        '\\text{sketch complete}'
      ),
    ],
    graphData: null,
  },

  'y12a-6c-q10b': {
    answer:
      'Sketch y = cos x, y = −sin x, and their sum y = cos x − sin x (amplitude √2) to verify max/min and zeros.',
    solutionSteps: [
      S(
        'Why sketch three graphs? Addition of ordinates checks that y = cos x − sin x really has amplitude √2 and the stationary points found in part (a). What: draw cos x (grey dashed), −sin x (amber dashed), and the sum (indigo solid).',
        '\\(y = \\cos x - \\sin x\\)'
      ),
      S(
        'Solution sketch on [0, 2π]: solid curve is the sum. Maximum near (7π/4, √2) and minimum near (3π/4, −√2). Zeros where cos x = sin x (e.g. π/4, 5π/4).',
        '\\(y = \\sqrt{2}\\,\\cos\\!\\left(x+\\dfrac{\\pi}{4}\\right)\\)',
        GRAPH_COS_MINUS_SIN
      ),
      S(
        'Compare heights: at each x, the solid curve height equals grey height plus amber height. A common mistake is sketching cos x − sin x as a pure sine of amplitude 1.',
        '\\text{amplitude }\\sqrt{2}'
      ),
      S(
        'Final: the sketch confirms the calculus — max √2, min −√2, period 2π.',
        '\\text{sketch verifies part (a)}'
      ),
    ],
    graphData: null,
  },

  'y12a-6c-q9d': {
    answer:
      'Sketch y = cos x + √3 sin x on [0, 2π]: sine wave of amplitude 2, max 2 at x = π/3, min −2 at x = 4π/3.',
    solutionSteps: [
      S(
        'Why sketch? Rewrite y = R cos(x − α) or R sin(x + α) with R = 2 shows a pure sine/cosine of amplitude 2. What: draw one smooth wave on [0, 2π] with the stationary points from part (b).',
        '\\(y = \\cos x + \\sqrt{3}\\sin x = 2\\sin\\!\\left(x+\\dfrac{\\pi}{6}\\right)\\)'
      ),
      S(
        'Solution sketch: maximum (π/3, 2) and minimum (4π/3, −2). Crosses the x-axis between these extrema.',
        '\\text{amplitude }2\\ \\text{on }[0,\\ 2\\pi]',
        GRAPH_COS_PLUS_SQRT3_SIN
      ),
      S(
        'A common slip is drawing amplitude 1 + √3 instead of R = 2. The graph must peak at height 2 only.',
        '\\text{max }2,\\ \\text{min }-2'
      ),
      S(
        'Final: one full period (or the interval [0, 2π] covering the wave) with marked max/min matching the calculus.',
        '\\text{sketch complete}'
      ),
    ],
    graphData: null,
  },

  'y12a-6c-q14c': {
    answer:
      'Sketch y = 2 sin x + x on [0, 2π]: increasing overall about y = x, local max near 2π/3 and local min near 4π/3.',
    solutionSteps: [
      S(
        'Why sketch? Earlier parts give stationary points of y = 2 sin x + x on [0, 2π]. What: draw the curve riding about the line y = x with a local max then a local min.',
        '\\(y = 2\\sin x + x\\)'
      ),
      S(
        'Solution sketch (solid) with dashed y = x. Local maximum near x = 2π/3 and local minimum near x = 4π/3; endpoints (0, 0) and (2π, 2π).',
        '\\(y = 2\\sin x + x\\ \\text{on }[0,\\ 2\\pi]',
        GRAPH_2SIN_PLUS_X
      ),
      S(
        'Because the linear term dominates, the curve still trends upward overall. A common mistake is drawing a pure sine of amplitude 2 without the +x drift.',
        '\\text{local max then local min}'
      ),
      S(
        'Final: smooth sketch on [0, 2π] about y = x with the correct local max/min marked.',
        '\\text{sketch complete}'
      ),
    ],
    graphData: null,
  },
};

// fix typo in GRAPH_2SIN workingOut string - missing closing \)
PATCH['y12a-6c-q14c'].solutionSteps[1].workingOut =
  '\\(y = 2\\sin x + x\\ \\text{on }[0,\\ 2\\pi]\\)';

(async () => {
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6CQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const list = require(seedPath).Y12A_CH6C_QUESTIONS;

  for (const [id, patch] of Object.entries(PATCH)) {
    const payload = {
      ...patch,
      type: 'teacher_review',
      requiresManualGrading: true,
      graphData: null, // question stem has no graph
      isNew: true,
      origin: 'seed',
      updatedAt: FieldValue.serverTimestamp(),
    };
    await db.collection('questions').doc(id).set(payload, { merge: true });
    await db.collection('questions').doc(id).update({ graphData: null });

    // update parent multi_part subQuestions if present
    const parentId = id.replace(/[a-d]$/, '').replace(/b$/, ''); // rough
    // better: known parents
    const parents = {
      'y12a-6c-q11d': 'y12a-6c-q11',
      'y12a-6c-q12d': 'y12a-6c-q12',
      'y12a-6c-q10b': 'y12a-6c-q10',
      'y12a-6c-q9d': 'y12a-6c-q9',
      'y12a-6c-q14c': 'y12a-6c-q14',
    };
    const pid = parents[id];
    if (pid) {
      const parent = (await db.collection('questions').doc(pid).get()).data();
      if (parent && Array.isArray(parent.subQuestions)) {
        const subs = parent.subQuestions.map((s) => {
          if (s.id !== id) return s;
          return {
            ...s,
            ...patch,
            graphData: null,
            type: 'teacher_review',
            requiresManualGrading: true,
          };
        });
        await db.collection('questions').doc(pid).set(
          {
            subQuestions: subs,
            updatedAt: FieldValue.serverTimestamp(),
            isNew: true,
          },
          { merge: true }
        );
      }
    }

    // seed list: may be multiparts only at top level
    for (const q of list) {
      if (q.id === id) {
        Object.assign(q, patch, { graphData: null, type: 'teacher_review' });
      }
      if (q.subQuestions) {
        q.subQuestions = q.subQuestions.map((s) => {
          if (s.id !== id) return s;
          return {
            ...s,
            ...patch,
            graphData: null,
            type: 'teacher_review',
            requiresManualGrading: true,
          };
        });
      }
    }
    console.log(
      'updated',
      id,
      'step graphs',
      patch.solutionSteps.map((s) => !!s.graphData)
    );
  }

  writeFileSync(
    seedPath,
    'export const Y12A_CH6C_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6C_QUESTIONS;\n'
  );

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  const d = (await db.collection('questions').doc('y12a-6c-q11d').get()).data();
  console.log('\nq11d question graph', d.graphData);
  console.log(
    'q11d steps with graph',
    d.solutionSteps.map((s, i) => i + ':' + !!s.graphData?.jsxGraph)
  );
  console.log('version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
