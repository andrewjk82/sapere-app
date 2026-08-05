const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svgContent = `
<div style="display: flex; justify-content: center; align-items: center; margin: 10px 0;">
<svg width="350" height="350" viewBox="-12 -12 24 24" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1, -1)">
    <!-- Axes -->
    <line x1="-12" y1="0" x2="12" y2="0" stroke="#94a3b8" stroke-width="0.075" />
    <line x1="0" y1="-12" x2="0" y2="12" stroke="#94a3b8" stroke-width="0.075" />
    
    <!-- Circle -->
    <circle cx="0" cy="0" r="10" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.125" />
    
    <!-- Square ABCD -->
    <polygon points="8,-6 6,8 -8,6 -6,-8" fill="#bfdbfe" fill-opacity="0.2" stroke="black" stroke-width="0.125" />
    
    <!-- Vertices -->
    <circle cx="8" cy="-6" r="0.2" fill="black" />
    <circle cx="6" cy="8" r="0.2" fill="black" />
    <circle cx="-8" cy="6" r="0.2" fill="black" />
    <circle cx="-6" cy="-8" r="0.2" fill="black" />
    <circle cx="0" cy="0" r="0.2" fill="#64748b" />
  </g>
  
  <text x="1.5" y="-10.2" font-size="1.1" fill="#4f46e5" font-family="sans-serif">x² + y² = 100</text>
  
  <!-- A(8, -6) -> SVG X:8, SVG Y:6 -->
  <text x="8.3" y="6.8" font-size="1" font-family="sans-serif" fill="black">A(8, -6)</text>
  <!-- B(6, 8) -> SVG X:6, SVG Y:-8 -->
  <text x="6.3" y="-8.3" font-size="1" font-family="sans-serif" fill="black">B(6, 8)</text>
  <!-- C(-8, 6) -> SVG X:-8, SVG Y:-6 -->
  <text x="-11.2" y="-6.3" font-size="1" font-family="sans-serif" fill="black">C(-8, 6)</text>
  <!-- D(-6, -8) -> SVG X:-6, SVG Y:8 -->
  <text x="-10.5" y="8.5" font-size="1" font-family="sans-serif" fill="black">D(-6, -8)</text>
  <!-- Origin O -> SVG X:0, SVG Y:0 -->
  <text x="0.3" y="-0.3" font-size="1" font-family="sans-serif" fill="#64748b">O</text>
</svg>
</div>
`;

  const baseGraphData = {
    html: svgContent
  };

  await db.collection('questions').doc('y9-11h-q10').update({
    graphData: baseGraphData,
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log("Updated graph with inline SVG.");
  process.exit(0);
}

run().catch(console.error);
