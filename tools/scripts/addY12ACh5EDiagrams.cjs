/**
 * Add jsxGraph diagrams to Ch5E "the diagram shows..." questions.
 *
 *   node tools/scripts/addY12ACh5EDiagrams.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const SEED = path.resolve(__dirname, '../../src/constants/seedYear12Ch5EQuestions.js');

/**
 * Flatten multiline board scripts safely.
 * NEVER leave // comments when collapsing newlines — the rest of the file
 * becomes a single-line comment and curves never draw (axes-only bug).
 */
function flattenScript(src) {
  return String(src)
    .split('\n')
    .map((line) => line.replace(/\/\/.*$/, '').trim())
    .filter(Boolean)
    .join(' ');
}

const GRAPH = {
  q9: {
    width: 360,
    height: 260,
    boundingbox: [-1.6, 2.4, 1.6, -0.35],
    script: flattenScript(`
board.suspendUpdate();
board.create('arrow', [[-1.55,0],[1.55,0]], {strokeColor:'black', strokeWidth:1.4});
board.create('arrow', [[0,-0.3],[0,2.3]], {strokeColor:'black', strokeWidth:1.4});
board.create('text', [1.42, -0.18, 'x'], {fontSize:13});
board.create('text', [0.08, 2.15, 'y'], {fontSize:13});
var shade = [];
for (var i = 0; i <= 50; i++) {
  var x = -1 + 2 * i / 50;
  var y = Math.exp(-Math.abs(x));
  shade.push([x, y]);
}
shade.push([1, 0]);
shade.push([-1, 0]);
board.create('polygon', shade, {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});
board.create('functiongraph', [function(x){ return Math.exp(x); }, -1.5, 1.2], {strokeColor:'#2563eb', strokeWidth:2.4});
board.create('functiongraph', [function(x){ return Math.exp(-x); }, -1.2, 1.5], {strokeColor:'#dc2626', strokeWidth:2.4});
board.create('text', [0.55, 1.85, 'y = eˣ'], {fontSize:12, color:'#2563eb'});
board.create('text', [-1.15, 1.85, 'y = e⁻ˣ'], {fontSize:12, color:'#dc2626'});
board.create('text', [0.15, 0.45, 'R'], {fontSize:14, color:'#1d4ed8', fontWeight:700});
board.create('text', [1, -0.2, '1'], {fontSize:11});
board.create('text', [-1, -0.2, '-1'], {fontSize:11});
board.unsuspendUpdate();
`),
  },

  q10: {
    width: 360,
    height: 260,
    boundingbox: [-1.5, 3.2, 1.5, -0.4],
    script: flattenScript(`
board.suspendUpdate();
board.create('arrow', [[-1.45,0],[1.45,0]], {strokeColor:'black', strokeWidth:1.4});
board.create('arrow', [[0,-0.35],[0,3.05]], {strokeColor:'black', strokeWidth:1.4});
board.create('text', [1.32, -0.2, 'x'], {fontSize:13});
board.create('text', [0.08, 2.9, 'y'], {fontSize:13});
var shade = [];
for (var i = 0; i <= 50; i++) {
  var x = -1 + 2 * i / 50;
  var y = (x >= 0) ? (Math.E - Math.exp(x)) : (Math.E - Math.exp(-x));
  if (y < 0) y = 0;
  shade.push([x, y]);
}
shade.push([1, 0]);
shade.push([-1, 0]);
board.create('polygon', shade, {fillColor:'#93c5fd', fillOpacity:0.45, strokeWidth:0});
board.create('functiongraph', [function(x){ return Math.E - Math.exp(-x); }, -1.4, 1.4], {strokeColor:'#2563eb', strokeWidth:2.4});
board.create('functiongraph', [function(x){ return Math.E - Math.exp(x); }, -1.4, 1.4], {strokeColor:'#dc2626', strokeWidth:2.4});
board.create('text', [0.25, 2.55, 'y = e − e⁻ˣ'], {fontSize:11, color:'#2563eb'});
board.create('text', [-1.35, 2.55, 'y = e − eˣ'], {fontSize:11, color:'#dc2626'});
board.create('text', [0.12, 0.7, 'R'], {fontSize:14, color:'#1d4ed8', fontWeight:700});
board.create('text', [1, -0.22, '1'], {fontSize:11});
board.create('text', [-1, -0.22, '-1'], {fontSize:11});
board.unsuspendUpdate();
`),
  },

  q11: {
    width: 380,
    height: 260,
    boundingbox: [-3.6, 12, 3.6, -12],
    script: flattenScript(`
board.suspendUpdate();
board.create('arrow', [[-3.5,0],[3.5,0]], {strokeColor:'black', strokeWidth:1.4});
board.create('arrow', [[0,-11.5],[0,11.5]], {strokeColor:'black', strokeWidth:1.4});
board.create('text', [3.25, -0.9, 'x'], {fontSize:13});
board.create('text', [0.15, 10.8, 'y'], {fontSize:13});
var up = [], dn = [];
for (var i = 0; i <= 40; i++) {
  var x = 0 + 3 * i / 40;
  var y = Math.exp(x) - Math.exp(-x);
  up.push([x, y]);
}
up.push([3, 0]);
up.push([0, 0]);
board.create('polygon', up, {fillColor:'#93c5fd', fillOpacity:0.4, strokeWidth:0});
for (var j = 0; j <= 40; j++) {
  var x2 = -3 + 3 * j / 40;
  var y2 = Math.exp(x2) - Math.exp(-x2);
  dn.push([x2, y2]);
}
dn.push([0, 0]);
dn.push([-3, 0]);
board.create('polygon', dn, {fillColor:'#fca5a5', fillOpacity:0.35, strokeWidth:0});
board.create('functiongraph', [function(x){ return Math.exp(x) - Math.exp(-x); }, -3.2, 3.2], {strokeColor:'#7c3aed', strokeWidth:2.5});
board.create('line', [[-3,-12],[-3,12]], {strokeColor:'#94a3b8', strokeWidth:1, dash:2});
board.create('line', [[3,-12],[3,12]], {strokeColor:'#94a3b8', strokeWidth:1, dash:2});
board.create('text', [1.2, 8, 'y = eˣ − e⁻ˣ'], {fontSize:12, color:'#7c3aed'});
board.create('text', [3, -1.2, '3'], {fontSize:11});
board.create('text', [-3, -1.2, '-3'], {fontSize:11});
board.unsuspendUpdate();
`),
  },
};

function makeGraph(key) {
  const g = GRAPH[key];
  return {
    jsxGraph: {
      width: g.width,
      height: g.height,
      boundingbox: g.boundingbox,
      showAxisLabels: false,
      script: g.script.trim(),
    },
  };
}

const ASSIGN = {
  'y12a-5e-q9a': 'q9',
  'y12a-5e-q9b': 'q9',
  'y12a-5e-q10a': 'q10',
  'y12a-5e-q10b': 'q10',
  'y12a-5e-q11a': 'q11',
  'y12a-5e-q11b': 'q11',
  'y12a-5e-q11c': 'q11',
  'y12a-5e-q11d': 'q11',
};

function load() {
  const src = readFileSync(SEED, 'utf8');
  writeFileSync('/tmp/ch5e-diag.cjs', src.replace(/^export const Y12A_CH5E_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve('/tmp/ch5e-diag.cjs')];
  return require('/tmp/ch5e-diag.cjs');
}

async function push(qs) {
  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();
  let n = 0;
  for (const q of qs) {
    if (!ASSIGN[q.id]) continue;
    const ref = db.collection('questions').doc(q.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') continue;
    await ref.set(
      {
        graphData: q.graphData,
        question: q.question,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    n++;
    console.log('pushed graph', q.id);
  }
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('done', n, ver);
}

async function main() {
  const qs = load();
  const fixed = qs.map((q) => {
    const key = ASSIGN[q.id];
    if (!key) return q;
    return { ...q, graphData: makeGraph(key) };
  });

  for (const id of Object.keys(ASSIGN)) {
    const q = fixed.find((x) => x.id === id);
    console.log(id, !!q.graphData?.jsxGraph?.script, 'bb', q.graphData?.jsxGraph?.boundingbox);
  }

  if (WRITE) {
    writeFileSync(SEED, `export const Y12A_CH5E_QUESTIONS = ${JSON.stringify(fixed, null, 2)};\n`);
    console.log('wrote seed');
  }
  if (PUSH) {
    if (!WRITE) process.exit(1);
    await push(fixed);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
