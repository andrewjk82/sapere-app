import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Generates a JSXGraph script for a number line with one point and an arrow
function makeOptionGraph(v, isOpen, isRight) {
  const minX = v - 6;
  const maxX = v + 6;
  const arrowEnd = isRight ? (v + 5) : (v - 5);
  const fillColor = isOpen ? 'white' : 'blue';

  return {
    width: 350,
    height: 80,
    boundingbox: [minX - 1, 1, maxX + 1, -1],
    script: `board.suspendUpdate();
var axis = board.create('axis', [[${minX},0], [${maxX},0]], {ticks: {insertTicks: false, ticksDistance: 1, minorTicks: 0}});
board.create('point', [${v}, 0], {size: 3, color: 'blue', fillColor: '${fillColor}', name: '', fixed: true, withLabel: false, label: {autoPosition: false, offset: [0, 10]}});
board.create('arrow', [[${v}, 0], [${arrowEnd}, 0]], {strokeColor: 'blue', strokeWidth: 3});
board.unsuspendUpdate();`
  };
}

// Generate the 4 combinations:
// 0: Open, Right
// 1: Closed, Right
// 2: Open, Left
// 3: Closed, Left
function makeOptionsForValue(v) {
  return [
    { text: `Open circle at \\(${v}\\), arrow pointing right`, graphData: { jsxGraph: makeOptionGraph(v, true, true) } },
    { text: `Closed circle at \\(${v}\\), arrow pointing right`, graphData: { jsxGraph: makeOptionGraph(v, false, true) } },
    { text: `Open circle at \\(${v}\\), arrow pointing left`, graphData: { jsxGraph: makeOptionGraph(v, true, false) } },
    { text: `Closed circle at \\(${v}\\), arrow pointing left`, graphData: { jsxGraph: makeOptionGraph(v, false, false) } }
  ];
}

// Helper to shuffle options and return new array with correct index
function shuffleOptions(opts, correctIdx) {
  const arr = [...opts];
  const correctVal = arr[correctIdx];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  const idx = arr.indexOf(correctVal);
  return { options: arr, answer: String(idx) };
}

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  const configs = {
    'y9-5g-q3a': { v: 6, correctIdx: 0, text: "Sketch the set \\(\\{x: x > 6\\}\\) on a number line. Choose the correct sketch:" },
    'y9-5g-q3b': { v: 1, correctIdx: 3, text: "Sketch the set \\(\\{x: x \\le 1\\}\\) on a number line. Choose the correct sketch:" },
    'y9-5g-q3c': { v: -3, correctIdx: 2, text: "Sketch the set \\(\\{x: x < -3\\}\\) on a number line. Choose the correct sketch:" },
    'y9-5g-q3d': { v: -2, correctIdx: 0, text: "Sketch the set \\(\\{x: x > -2\\}\\) on a number line. Choose the correct sketch:" },
    'y9-5g-q3e': { v: -1, correctIdx: 3, text: "Sketch the set \\(\\{x: x \\le -1\\}\\) on a number line. Choose the correct sketch:" },
    'y9-5g-q3f': { v: -3, correctIdx: 1, text: "Sketch the set \\(\\{x: x \\ge -3\\}\\) on a number line. Choose the correct sketch:" },
    'y9-5g-q3g': { v: 1.5, correctIdx: 2, text: "Sketch the set \\(\\{x: x < 1.5\\}\\) on a number line. Choose the correct sketch:" },
    'y9-5g-q3h': { v: -2.5, correctIdx: 1, text: "Sketch the set \\(\\{x: x \\ge -2.5\\}\\) on a number line. Choose the correct sketch:" },
    'y9-5g-q3i': { v: -0.5, correctIdx: 3, text: "Sketch the set \\(\\{x: x \\le -0.5\\}\\) on a number line. Choose the correct sketch:" }
  };

  for (const [id, cfg] of Object.entries(configs)) {
    const rawOptions = makeOptionsForValue(cfg.v);
    const { options, answer } = shuffleOptions(rawOptions, cfg.correctIdx);

    console.log(`Updating ${id} with JSXGraph script options...`);
    batch.update(questionsCol.doc(id), {
      question: cfg.text,
      options,
      answer,
      type: 'multiple_choice',
      requiresManualGrading: false
    });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully completed drawing number lines for MCQ options for y9-5g-q3a to q3i!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
