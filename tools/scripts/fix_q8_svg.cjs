const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

function getSvg() {
  const width = 400;
  const height = 300;
  const minX = -5;
  const maxX = 7;
  const minY = -80;
  const maxY = 50;

  const scaleX = width / (maxX - minX);
  const scaleY = height / (maxY - minY);

  function tx(x) { return (x - minX) * scaleX; }
  function ty(y) { return height - (y - minY) * scaleY; }

  // Draw axes
  const xAxisY = ty(0);
  const yAxisX = tx(0);

  let pathData = '';
  for (let x = minX; x <= maxX; x += 0.1) {
    let y = Math.pow(x, 3) - 3 * Math.pow(x, 2) - 24 * x + 10;
    if (y > 100) y = 100;
    if (y < -100) y = -100;
    
    let px = tx(x).toFixed(2);
    let py = ty(y).toFixed(2);
    if (pathData === '') {
      pathData += `M ${px} ${py} `;
    } else {
      pathData += `L ${px} ${py} `;
    }
  }

  const maxPx = tx(-2);
  const maxPy = ty(38);
  const minPx = tx(4);
  const minPy = ty(-70);
  const infPx = tx(1);
  const infPy = ty(-16);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <!-- Background -->
  <rect width="100%" height="100%" fill="#ffffff" />
  
  <!-- Axes -->
  <line x1="0" y1="${xAxisY}" x2="${width}" y2="${xAxisY}" stroke="#cbd5e1" stroke-width="2" />
  <line x1="${yAxisX}" y1="0" x2="${yAxisX}" y2="${height}" stroke="#cbd5e1" stroke-width="2" />
  
  <!-- Curve -->
  <path d="${pathData}" fill="none" stroke="#3b82f6" stroke-width="3" />
  
  <!-- Critical Points -->
  <circle cx="${maxPx}" cy="${maxPy}" r="4" fill="#ef4444" />
  <text x="${maxPx}" y="${maxPy - 10}" font-family="sans-serif" font-size="12" fill="#333" text-anchor="middle">Max(-2, 38)</text>

  <circle cx="${minPx}" cy="${minPy}" r="4" fill="#ef4444" />
  <text x="${minPx}" y="${minPy + 15}" font-family="sans-serif" font-size="12" fill="#333" text-anchor="middle">Min(4, -70)</text>

  <circle cx="${infPx}" cy="${infPy}" r="4" fill="#8b5cf6" />
  <text x="${infPx + 10}" y="${infPy + 5}" font-family="sans-serif" font-size="12" fill="#333" text-anchor="start">Inflection(1, -16)</text>
</svg>`;
}

const svgString = getSvg();

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let qs = [];
const qIds = ['y12a-3i-q8a', 'y12a-3i-q8b', 'y12a-3i-q8c', 'y12a-3i-q8d'];

for (let id of qIds) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (q && q.solutionSteps && q.solutionSteps.length > 0) {
    // Replace geometry graphData with standard svg graphData
    q.solutionSteps[q.solutionSteps.length - 1].graphData = { svg: svgString };
    qs.push(q);
  }
}

// Safer Regex to unquote only standard Javascript identifiers
const newArrayStr = JSON.stringify(questions, null, 2).replace(/"([a-zA-Z_$][0-9a-zA-Z_$]*)":/g, '$1:');
fs.writeFileSync(filePath, content.substring(0, match.index) + 'export const Y12A_CH3I_QUESTIONS = ' + newArrayStr + ';\n', 'utf8');

async function updateDb() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  
  for (let q of qs) {
    let isSub = !questions.find(x => x.id === q.id);
    if (!isSub) {
      await db.collection('questions').doc(q.id).update({
        solutionSteps: q.solutionSteps
      });
    } else {
      let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === q.id));
      if (parent) {
        let parentDoc = await db.collection('questions').doc(parent.id).get();
        if (parentDoc.exists) {
          let pData = parentDoc.data();
          let sqIdx = pData.subQuestions.findIndex(sq => sq.id === q.id);
          if (sqIdx > -1) {
            pData.subQuestions[sqIdx].solutionSteps = q.solutionSteps;
            await db.collection('questions').doc(parent.id).update({
              subQuestions: pData.subQuestions
            });
          }
        }
      }
    }
  }
  console.log('Successfully updated q8a-d with SVG graphData in Firestore.');
  process.exit(0);
}
updateDb();
