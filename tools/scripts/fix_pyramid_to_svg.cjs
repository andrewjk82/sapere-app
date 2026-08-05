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

function generateSvgGraph(map) {
  const formatMath = (str) => {
    if (!str) return '';
    let res = '';
    for (let char of str) {
      if (/[a-z]/.test(char)) {
        res += `<tspan font-style="italic">${char}</tspan>`;
      } else {
        res += char;
      }
    }
    return res;
  };

  const getObj = (x, y, text) => {
    if (!text) return '';
    if (text === '?') {
      return `<text x="${x + 60}" y="${y + 34}" class="text target">?</text>`;
    } else {
      return `<text x="${x + 60}" y="${y + 32}" class="text">${formatMath(text)}</text>`;
    }
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 380 200" width="400" height="210">
  <style>
    .box { fill: #ffffff; stroke: #94a3b8; stroke-width: 2px; }
    .text { font-family: 'Times New Roman', Times, serif; font-size: 19px; fill: #0f172a; text-anchor: middle; dominant-baseline: middle; }
    .target { font-family: sans-serif; font-size: 32px; fill: #ef4444; font-weight: bold; }
  </style>

  <rect x="0" y="120" width="120" height="60" class="box" />
  <rect x="120" y="120" width="120" height="60" class="box" />
  <rect x="240" y="120" width="120" height="60" class="box" />
  <rect x="60" y="60" width="120" height="60" class="box" />
  <rect x="180" y="60" width="120" height="60" class="box" />
  <rect x="120" y="0" width="120" height="60" class="box" />

  ${getObj(0, 120, map.BL)}
  ${getObj(120, 120, map.BM)}
  ${getObj(240, 120, map.BR)}
  ${getObj(60, 60, map.ML)}
  ${getObj(180, 60, map.MR)}
  ${getObj(120, 0, map.TL)}
</svg>`;
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
      const svg = generateSvgGraph(map);
      
      q.graphData = { svg: svg }; // Replaced jsxGraph with simple SVG
      
      const docRef = db.collection('questions').doc(q.id);
      batch.update(docRef, { 
        graphData: q.graphData,
        updatedAt: FieldValue.serverTimestamp()
      });
      updatedCount++;
    }
  }

  await batch.commit();
  console.log(`Successfully updated ${updatedCount} questions in Firestore with SVG graphics.`);
  
  await touchChapterIndex(db, 'y9-1b');

  const output = prefix + JSON.stringify(questions, null, 2) + ';\n';
  fs.writeFileSync(seedPath, output);
  console.log('Successfully updated seedYear9Ch1BQuestions.js locally.');

  process.exit(0);
}

run().catch(console.error);
