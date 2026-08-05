const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const R = 5;
  const px = 3, py = 4; // on circle since 9+16=25=R²
  const bound = 7; // Mathematical range: x in [-7, 7], y in [-2, 7]

  let grid = '';
  for (let i = -bound; i <= bound; i++) {
    // horizontal grid lines
    if (i >= -2 && i <= 7) {
      grid += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    }
    // vertical grid lines
    grid += `<line x1="${i}" y1="${-2}" x2="${i}" y2="${7}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  }

  // viewBox="-7 -7 14 9". With scale(1, -1), this maps to math y from 7 down to -2
  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="320" height="200" viewBox="${-bound} -7 ${bound*2} 9" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid}
    <!-- x-axis -->
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <!-- y-axis -->
    <line x1="0" y1="-2" x2="0" y2="7" stroke="#94a3b8" stroke-width="0.12"/>
    
    <!-- semicircle (upper half) -->
    <!-- M R,0 A R,R 0 0,0 -R,0 (draws counter-clockwise in SVG space, which with scale(1,-1) is the upper half) -->
    <path d="M ${R} 0 A ${R} ${R} 0 0 0 ${-R} 0" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.1"/>
    
    <!-- lines PA and PB -->
    <line x1="${px}" y1="${py}" x2="${-R}" y2="0" stroke="#ef4444" stroke-width="0.1"/>
    <line x1="${px}" y1="${py}" x2="${R}" y2="0" stroke="#10b981" stroke-width="0.1"/>
    
    <!-- right angle marker at P -->
    <polyline points="2.6,3.2 3.4,2.8 3.8,3.6" fill="none" stroke="#f59e0b" stroke-width="0.1"/>
    
    <!-- Points -->
    <circle cx="${-R}" cy="0" r="0.2" fill="#4f46e5"/>
    <circle cx="${R}" cy="0" r="0.2" fill="#4f46e5"/>
    <circle cx="${px}" cy="${py}" r="0.2" fill="#ef4444"/>
    <circle cx="0" cy="0" r="0.15" fill="#94a3b8"/>
  </g>
  <!-- Labels (no flip) - these use the SVG viewBox coordinates, so y is mathematical -y -->
  <text x="${-R-1.5}" y="1" font-size="0.75" font-family="sans-serif" fill="#4f46e5">A(−R, 0)</text>
  <text x="${R+0.3}" y="1" font-size="0.75" font-family="sans-serif" fill="#4f46e5">B(R, 0)</text>
  <text x="${px+0.3}" y="${-py - 0.3}" font-size="0.75" font-family="sans-serif" fill="#ef4444">P(x, y)</text>
  <text x="-0.5" y="1" font-size="0.75" font-family="sans-serif" fill="#94a3b8">O</text>
</svg>
</div>`;

  await db.collection('questions').doc('y9-11i-q11').update({
    graphData: { html: svg }
  });

  const subQA = db.collection('questions').doc('y9-11i-q11').collection('subQuestions'); // Not how subQ are stored. They are an array in the doc.
  
  const doc = await db.collection('questions').doc('y9-11i-q11').get();
  const data = doc.data();
  if (data.subQuestions) {
    const newSubQs = data.subQuestions.map(sq => {
      if (sq.id === 'y9-11i-q11a') {
        if (sq.solutionSteps && sq.solutionSteps[0] && sq.solutionSteps[0].graphData) {
          sq.solutionSteps[0].graphData.html = svg;
        }
      }
      if (sq.id === 'y9-11i-q11b') {
        if (sq.solutionSteps && sq.solutionSteps[0] && sq.solutionSteps[0].graphData) {
          sq.solutionSteps[0].graphData.html = svg;
        }
      }
      if (sq.id === 'y9-11i-q11c') {
        if (sq.solutionSteps && sq.solutionSteps[0] && sq.solutionSteps[0].graphData) {
          sq.solutionSteps[0].graphData.html = svg;
        }
      }
      return sq;
    });
    
    await db.collection('questions').doc('y9-11i-q11').update({
      subQuestions: newSubQs
    });
  }

  console.log("Updated SVG for y9-11i-q11");
  process.exit(0);
}

run().catch(console.error);
