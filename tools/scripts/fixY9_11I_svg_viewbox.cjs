const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----------------------------------------------------
  // FIX Q3
  // ----------------------------------------------------
  const bound3 = 9;
  let grid3 = '';
  for (let i = -bound3; i <= bound3; i++) {
    grid3 += `<line x1="${-bound3}" y1="${i}" x2="${bound3}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    grid3 += `<line x1="${i}" y1="${-bound3}" x2="${i}" y2="${bound3}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  }

  // Math y goes from -2 to 9 => SVG y goes from -9 to 2
  const svg3 = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="280" height="280" viewBox="-4 -9 14 11" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid3}
    <line x1="${-bound3}" y1="0" x2="${bound3}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="${-bound3}" x2="0" y2="${bound3}" stroke="#94a3b8" stroke-width="0.12"/>
    
    <!-- Parallelogram ABCD -->
    <polygon points="2,1 8,5 4,7 -2,3" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-width="0.12"/>
    
    <!-- Diagonals -->
    <line x1="2" y1="1" x2="4" y2="7" stroke="#ef4444" stroke-width="0.1" stroke-dasharray="0.3,0.3"/>
    <line x1="8" y1="5" x2="-2" y2="3" stroke="#ef4444" stroke-width="0.1" stroke-dasharray="0.3,0.3"/>
    
    <!-- Points -->
    <circle cx="2" cy="1" r="0.2" fill="#4f46e5"/>
    <circle cx="8" cy="5" r="0.2" fill="#4f46e5"/>
    <circle cx="4" cy="7" r="0.2" fill="#4f46e5"/>
    <circle cx="-2" cy="3" r="0.2" fill="#4f46e5"/>
  </g>
  
  <!-- Labels -->
  <text x="2.2" y="-1.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">A(2, 1)</text>
  <text x="8.2" y="-5.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">B(8, 5)</text>
  <text x="3.7" y="-7.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">C(4, 7)</text>
  <text x="-3.5" y="-3.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">D(−2, 3)</text>
</svg>
</div>`;

  const doc3 = await db.collection('questions').doc('y9-11i-q3').get();
  const data3 = doc3.data();
  if (data3.solutionSteps && data3.solutionSteps[0]) {
    data3.solutionSteps[0].graphData.html = svg3;
    await db.collection('questions').doc('y9-11i-q3').update({
      solutionSteps: data3.solutionSteps
    });
  }

  // ----------------------------------------------------
  // FIX Q4
  // ----------------------------------------------------
  const bound4 = 11;
  let grid4 = '';
  for (let i = -bound4; i <= bound4; i++) {
    grid4 += `<line x1="${-bound4}" y1="${i}" x2="${bound4}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05"/>`;
    grid4 += `<line x1="${i}" y1="${-bound4}" x2="${i}" y2="${bound4}" stroke="#e2e8f0" stroke-width="0.05"/>`;
  }

  // Math y goes from -6 to 12 => SVG y goes from -12 to 6
  // min-x=-6, min-y=-12, width=16, height=18 => SVG y goes -12 to 6.
  const svg4 = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="320" height="340" viewBox="-6 -12 16 18" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1,-1)">
    ${grid4}
    <line x1="${-bound4}" y1="0" x2="${bound4}" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
    <line x1="0" y1="${-bound4}" x2="0" y2="${bound4}" stroke="#94a3b8" stroke-width="0.12"/>
    
    <!-- Original points triangle -->
    <polygon points="4,-1 -2,3 2,6" fill="none" stroke="#94a3b8" stroke-width="0.1" stroke-dasharray="0.3,0.3"/>
    
    <!-- Parallelogram 1 (Valid: AC diagonal, D1=(8,2)) -->
    <polygon points="4,-1 8,2 2,6 -2,3" fill="#6366f1" fill-opacity="0.08" stroke="#6366f1" stroke-width="0.12"/>
    
    <!-- Other possible D points (D2=(0,-4), D3=(-4,10)) -->
    <line x1="4" y1="-1" x2="0" y2="-4" stroke="#f87171" stroke-width="0.08" stroke-dasharray="0.2,0.2"/>
    <line x1="2" y1="6" x2="0" y2="-4" stroke="#f87171" stroke-width="0.08" stroke-dasharray="0.2,0.2"/>
    
    <line x1="-2" y1="3" x2="-4" y2="10" stroke="#f87171" stroke-width="0.08" stroke-dasharray="0.2,0.2"/>
    <line x1="2" y1="6" x2="-4" y2="10" stroke="#f87171" stroke-width="0.08" stroke-dasharray="0.2,0.2"/>
    
    <!-- Points -->
    <circle cx="4" cy="-1" r="0.2" fill="#4f46e5"/>
    <circle cx="-2" cy="3" r="0.2" fill="#4f46e5"/>
    <circle cx="2" cy="6" r="0.2" fill="#4f46e5"/>
    
    <!-- Valid D1 -->
    <circle cx="8" cy="2" r="0.25" fill="#10b981"/>
    
    <!-- Invalid D2, D3 -->
    <circle cx="0" cy="-4" r="0.15" fill="#f87171"/>
    <circle cx="-4" cy="10" r="0.15" fill="#f87171"/>
  </g>
  
  <!-- Labels -->
  <text x="4.3" y="1.4" font-size="0.6" font-family="sans-serif" fill="#4f46e5">A(4, −1)</text>
  <text x="-3.8" y="-3.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">B(−2, 3)</text>
  <text x="2.3" y="-6.3" font-size="0.6" font-family="sans-serif" fill="#4f46e5">C(2, 6)</text>
  
  <!-- Correct D1 -->
  <text x="8.3" y="-2.3" font-size="0.65" font-family="sans-serif" fill="#10b981" font-weight="bold">D(8, 2)</text>
  
  <!-- Invalid ones -->
  <text x="-1.7" y="4.5" font-size="0.5" font-family="sans-serif" fill="#ef4444">D₂(0, −4)</text>
  <text x="-3.5" y="-10.3" font-size="0.5" font-family="sans-serif" fill="#ef4444">D₃(−4, 10)</text>
</svg>
</div>`;

  const doc4 = await db.collection('questions').doc('y9-11i-q4').get();
  const data4 = doc4.data();
  if (data4.solutionSteps && data4.solutionSteps[0]) {
    data4.solutionSteps[0].graphData.html = svg4;
    await db.collection('questions').doc('y9-11i-q4').update({
      solutionSteps: data4.solutionSteps
    });
  }

  console.log("Fixed SVG viewBox for y9-11i-q3 and y9-11i-q4");
  process.exit(0);
}

run().catch(console.error);
