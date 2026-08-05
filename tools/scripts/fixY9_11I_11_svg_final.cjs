const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="320" height="200" viewBox="-7 -7 14 9" xmlns="http://www.w3.org/2000/svg">
  <!-- grid -->
  <g stroke="#e2e8f0" stroke-width="0.05">
    <line x1="-7" y1="-7" x2="7" y2="-7"/>
    <line x1="-7" y1="-6" x2="7" y2="-6"/>
    <line x1="-7" y1="-5" x2="7" y2="-5"/>
    <line x1="-7" y1="-4" x2="7" y2="-4"/>
    <line x1="-7" y1="-3" x2="7" y2="-3"/>
    <line x1="-7" y1="-2" x2="7" y2="-2"/>
    <line x1="-7" y1="-1" x2="7" y2="-1"/>
    <line x1="-7" y1="0" x2="7" y2="0"/>
    <line x1="-7" y1="1" x2="7" y2="1"/>
    <line x1="-7" y1="2" x2="7" y2="2"/>
    <line x1="-7" y1="-7" x2="-7" y2="2"/>
    <line x1="-6" y1="-7" x2="-6" y2="2"/>
    <line x1="-5" y1="-7" x2="-5" y2="2"/>
    <line x1="-4" y1="-7" x2="-4" y2="2"/>
    <line x1="-3" y1="-7" x2="-3" y2="2"/>
    <line x1="-2" y1="-7" x2="-2" y2="2"/>
    <line x1="-1" y1="-7" x2="-1" y2="2"/>
    <line x1="0" y1="-7" x2="0" y2="2"/>
    <line x1="1" y1="-7" x2="1" y2="2"/>
    <line x1="2" y1="-7" x2="2" y2="2"/>
    <line x1="3" y1="-7" x2="3" y2="2"/>
    <line x1="4" y1="-7" x2="4" y2="2"/>
    <line x1="5" y1="-7" x2="5" y2="2"/>
    <line x1="6" y1="-7" x2="6" y2="2"/>
    <line x1="7" y1="-7" x2="7" y2="2"/>
  </g>
  
  <!-- axes -->
  <line x1="-7" y1="0" x2="7" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
  <line x1="0" y1="-7" x2="0" y2="2" stroke="#94a3b8" stroke-width="0.12"/>
  
  <!-- semicircle from (-5, 0) to (5, 0) -->
  <path d="M -5 0 A 5 5 0 0 1 5 0" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.1"/>
  
  <!-- lines PA and PB -->
  <line x1="3" y1="-4" x2="-5" y2="0" stroke="#ef4444" stroke-width="0.1"/>
  <line x1="3" y1="-4" x2="5" y2="0" stroke="#10b981" stroke-width="0.1"/>
  
  <!-- right angle marker at P -->
  <polyline points="2.46,-3.73 2.73,-3.19 3.27,-3.46" fill="none" stroke="#f59e0b" stroke-width="0.1"/>
  
  <!-- Points -->
  <circle cx="-5" cy="0" r="0.2" fill="#4f46e5"/>
  <circle cx="5" cy="0" r="0.2" fill="#4f46e5"/>
  <circle cx="3" cy="-4" r="0.2" fill="#ef4444"/>
  <circle cx="0" cy="0" r="0.15" fill="#94a3b8"/>
  
  <!-- Labels -->
  <text x="-6.8" y="0.8" font-size="0.75" font-family="sans-serif" fill="#4f46e5">A(−R, 0)</text>
  <text x="4.8" y="0.8" font-size="0.75" font-family="sans-serif" fill="#4f46e5">B(R, 0)</text>
  <text x="3.3" y="-4.3" font-size="0.75" font-family="sans-serif" fill="#ef4444">P(x, y)</text>
  <text x="-0.5" y="0.8" font-size="0.75" font-family="sans-serif" fill="#94a3b8">O</text>
</svg>
</div>
`;

  await db.collection('questions').doc('y9-11i-q11').update({
    graphData: { html: svg }
  });

  const doc = await db.collection('questions').doc('y9-11i-q11').get();
  const data = doc.data();
  if (data.subQuestions) {
    const newSubQs = data.subQuestions.map(sq => {
      if (sq.solutionSteps && sq.solutionSteps[0] && sq.solutionSteps[0].graphData) {
        sq.solutionSteps[0].graphData.html = svg;
      }
      return sq;
    });
    
    await db.collection('questions').doc('y9-11i-q11').update({
      subQuestions: newSubQs
    });
  }

  console.log("Updated SVG for y9-11i-q11 (fully fixed rendering)");
  process.exit(0);
}

run().catch(console.error);
