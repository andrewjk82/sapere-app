const fs = require('fs');
const path = require('path');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

const boxMap = {
  'y9-1b-q9b1': { BL: 'm + 3n', BM: '2m + n', ML: '?' },
  'y9-1b-q9b2': { BM: '2m + n', BR: '4m + 3n', MR: '?' },
  'y9-1b-q9b3': { ML: '3m + 4n', MR: '6m + 4n', TL: '?' },
  'y9-1b-q9c1': { BL: '2p - 3q', BM: '4p + q', ML: '?' },
  'y9-1b-q9c2': { BM: '4p + q', BR: '5p - 2q', MR: '?' },
  'y9-1b-q9c3': { ML: '6p - 2q', MR: '9p - q', TL: '?' },
  
  'y9-1b-q9d1': { BR: '4a + b', MR: '6a + 2b', BM: '?' },
  'y9-1b-q9d2': { BL: '3a + 2b', BM: '2a + b', ML: '?' },
  'y9-1b-q9d3': { ML: '5a + 3b', MR: '6a + 2b', TL: '?' },
  
  'y9-1b-q9e1': { TL: '11x + 2y', MR: '6x - 3y', ML: '?' },
  'y9-1b-q9e2': { ML: '5x + 5y', BL: '4x - y', BM: '?' },
  'y9-1b-q9e3': { MR: '6x - 3y', BM: 'x + 6y', BR: '?' },
  
  'y9-1b-q9f1': { BM: '5d + 3e', ML: '7d + e', BL: '?' },
  'y9-1b-q9f2': { BM: '5d + 3e', MR: '4d - 5e', BR: '?' },
  'y9-1b-q9f3': { ML: '7d + e', MR: '4d - 5e', TL: '?' }
};

function generateJsxGraph(map) {
  return `
board.suspendUpdate();
var opts = {
  fillColor: '#ffffff', 
  highlightFillColor: '#ffffff', 
  borders: {strokeColor: '#94a3b8', strokeWidth: 2}, 
  vertices: {visible: false}
};

function box(x1, x2, y1, y2) {
  var p1 = board.create('point', [x1, y1], {visible: false});
  var p2 = board.create('point', [x2, y1], {visible: false});
  var p3 = board.create('point', [x2, y2], {visible: false});
  var p4 = board.create('point', [x1, y2], {visible: false});
  board.create('polygon', [p1, p2, p3, p4], opts);
}

box(-6, -2, 0, 2);
box(-2, 2, 0, 2);
box(2, 6, 0, 2);
box(-4, 0, 2, 4);
box(0, 4, 2, 4);
box(-2, 2, 4, 6);

function addText(x, y, text) {
  if (text === '?') {
    board.create('text', [x, y, '?'], {fontSize: 24, color: '#ef4444', cssClass: 'font-bold', anchorX: 'middle', anchorY: 'middle'});
  } else if (text) {
    // using raw text elements since useMathJax can be flaky in older JSXGraph,
    // but wrapping in \\\\( \\\\) just in case MathJax is enabled.
    board.create('text', [x, y, '\\\\(' + text + '\\\\)'], {fontSize: 16, color: '#0f172a', anchorX: 'middle', anchorY: 'middle', useMathJax: true, parse: false});
  }
}

addText(-4, 1, '${map.BL || ""}');
addText(0, 1, '${map.BM || ""}');
addText(4, 1, '${map.BR || ""}');
addText(-2, 3, '${map.ML || ""}');
addText(2, 3, '${map.MR || ""}');
addText(0, 5, '${map.TL || ""}');
board.unsuspendUpdate();
  `.trim();
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const seedPath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear9Ch1BQuestions.js';
  let content = fs.readFileSync(seedPath, 'utf8');
  
  const prefix = 'export const Y9_CH1B_QUESTIONS = ';
  if (!content.startsWith(prefix)) {
    console.error('File does not start with expected prefix.');
    process.exit(1);
  }
  
  const arrayString = content.slice(prefix.length).trim().replace(/;$/, '');
  let questions = JSON.parse(arrayString);
  
  let updatedCount = 0;
  for (let q of questions) {
    if (q.id && q.id.startsWith('y9-1b-q9') && boxMap[q.id]) {
      const map = boxMap[q.id];
      const jsxScript = generateJsxGraph(map);
      
      q.graphData = {
        jsxGraph: {
          width: 440,
          height: 260,
          boundingbox: [-7, 7, 7, -1],
          script: jsxScript
        }
      };
      
      const docRef = db.collection('questions').doc(q.id);
      batch.update(docRef, { 
        graphData: q.graphData,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  await batch.commit();
  console.log(`Successfully updated ${updatedCount} questions in Firestore with fixed graphics.`);
  
  await touchChapterIndex(db, 'y9-1b');

  const output = prefix + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(seedPath, output);
  console.log('Successfully updated seedYear9Ch1BQuestions.js locally.');

  process.exit(0);
}

run().catch(console.error);
