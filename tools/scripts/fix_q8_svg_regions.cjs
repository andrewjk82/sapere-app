const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

function getSvg(regionType) {
  const width = 450;
  const height = 300;
  const minX = -6;
  const maxX = 8;
  const minY = -80;
  const maxY = 50;

  const scaleX = width / (maxX - minX);
  const scaleY = height / (maxY - minY);

  function tx(x) { return (x - minX) * scaleX; }
  function ty(y) { return height - (y - minY) * scaleY; }

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

  let regionsHtml = '';
  const fillColor = "rgba(34, 197, 94, 0.15)"; // light green

  if (regionType === 'increasing') {
    let w1 = tx(-2) - tx(minX);
    let w2 = tx(maxX) - tx(4);
    regionsHtml += `<rect x="${tx(minX)}" y="0" width="${w1}" height="${height}" fill="${fillColor}" />`;
    regionsHtml += `<rect x="${tx(4)}" y="0" width="${w2}" height="${height}" fill="${fillColor}" />`;
    regionsHtml += `<text x="${tx(-4)}" y="20" font-family="sans-serif" font-size="14" fill="#166534" text-anchor="middle" font-weight="bold">Increasing (x &lt; -2)</text>`;
    regionsHtml += `<text x="${tx(6)}" y="20" font-family="sans-serif" font-size="14" fill="#166534" text-anchor="middle" font-weight="bold">Increasing (x &gt; 4)</text>`;
  } else if (regionType === 'decreasing') {
    let w = tx(4) - tx(-2);
    regionsHtml += `<rect x="${tx(-2)}" y="0" width="${w}" height="${height}" fill="${fillColor}" />`;
    regionsHtml += `<text x="${tx(1)}" y="20" font-family="sans-serif" font-size="14" fill="#166534" text-anchor="middle" font-weight="bold">Decreasing (-2 &lt; x &lt; 4)</text>`;
  } else if (regionType === 'concave_up') {
    let w = tx(maxX) - tx(1);
    regionsHtml += `<rect x="${tx(1)}" y="0" width="${w}" height="${height}" fill="${fillColor}" />`;
    regionsHtml += `<text x="${tx(4.5)}" y="20" font-family="sans-serif" font-size="14" fill="#166534" text-anchor="middle" font-weight="bold">Concave Up (x &gt; 1)</text>`;
  } else if (regionType === 'concave_down') {
    let w = tx(1) - tx(minX);
    regionsHtml += `<rect x="${tx(minX)}" y="0" width="${w}" height="${height}" fill="${fillColor}" />`;
    regionsHtml += `<text x="${tx(-2.5)}" y="20" font-family="sans-serif" font-size="14" fill="#166534" text-anchor="middle" font-weight="bold">Concave Down (x &lt; 1)</text>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="100%" height="auto" style="max-width: 500px;">
  <!-- Background -->
  <rect width="100%" height="100%" fill="#ffffff" />
  
  <!-- Highlight Regions -->
  ${regionsHtml}

  <!-- Axes -->
  <line x1="0" y1="${xAxisY}" x2="${width}" y2="${xAxisY}" stroke="#cbd5e1" stroke-width="2" />
  <line x1="${yAxisX}" y1="0" x2="${yAxisX}" y2="${height}" stroke="#cbd5e1" stroke-width="2" />
  
  <!-- Curve -->
  <path d="${pathData}" fill="none" stroke="#3b82f6" stroke-width="3" />
  
  <!-- Critical Points -->
  <circle cx="${maxPx}" cy="${maxPy}" r="5" fill="#ef4444" />
  <text x="${maxPx}" y="${maxPy - 12}" font-family="sans-serif" font-size="13" fill="#333" text-anchor="middle" font-weight="bold">Max(-2, 38)</text>

  <circle cx="${minPx}" cy="${minPy}" r="5" fill="#ef4444" />
  <text x="${minPx}" y="${minPy + 18}" font-family="sans-serif" font-size="13" fill="#333" text-anchor="middle" font-weight="bold">Min(4, -70)</text>

  <circle cx="${infPx}" cy="${infPy}" r="5" fill="#8b5cf6" />
  <text x="${infPx + 10}" y="${infPy + 5}" font-family="sans-serif" font-size="13" fill="#333" text-anchor="start" font-weight="bold">Inflection(1, -16)</text>
</svg>`;
}

const filePath = '/Users/andrewkim/Desktop/sapere1/src/constants/seedYear12aCh3IQuestions.js';
let content = fs.readFileSync(filePath, 'utf8');
const match = content.match(/export const Y12A_CH3I_QUESTIONS = (\[[\s\S]*\]);$/m);
let questions = eval(match[1]);

let qs = [];
const configs = {
  'y12a-3i-q8a': 'increasing',
  'y12a-3i-q8b': 'decreasing',
  'y12a-3i-q8c': 'concave_up',
  'y12a-3i-q8d': 'concave_down'
};

for (let id of Object.keys(configs)) {
  let q = questions.find(x => x.id === id);
  if (!q) {
    let parent = questions.find(x => x.subQuestions && x.subQuestions.some(sq => sq.id === id));
    if (parent) q = parent.subQuestions.find(sq => sq.id === id);
  }
  if (q && q.solutionSteps && q.solutionSteps.length > 0) {
    const svgStr = getSvg(configs[id]);
    q.solutionSteps[q.solutionSteps.length - 1].graphData = { svg: svgStr };
    
    // Adjust text to match what's shown on graph if necessary
    let stepText = q.solutionSteps[q.solutionSteps.length - 1].workingOut;
    let expText = q.solutionSteps[q.solutionSteps.length - 1].explanation;
    if (expText.includes("Determine valid regions")) {
       q.solutionSteps[q.solutionSteps.length - 1].explanation = "Determine valid regions (See highlighted areas on graph)";
    }

    qs.push(q);
  }
}

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
  console.log('Successfully updated q8a-d with region-highlighted SVG graphData in Firestore.');
  process.exit(0);
}
updateDb();
