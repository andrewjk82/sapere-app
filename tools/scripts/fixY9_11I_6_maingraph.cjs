const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Rhombus ABCD: A(1,1), B(5,4), C(2,8), D(-2,5)
  // Math coord -> SVG: svg_y = -math_y
  // Bounding box: math x in [-4, 8], math y in [-1, 10]
  // SVG viewBox: x from -4, y from -10 (=-math_y_max), width=12, height=12

  const svg = `
<div style="display:flex;justify-content:center;align-items:center;margin:10px 0;">
<svg width="280" height="280" viewBox="-4 -10 12 12" xmlns="http://www.w3.org/2000/svg">
  <!-- Grid -->
  <g stroke="#e2e8f0" stroke-width="0.05">
    ${[-4,-3,-2,-1,0,1,2,3,4,5,6,7].map(i => `<line x1="${i}" y1="-10" x2="${i}" y2="2"/>`).join('')}
    ${Array.from({length:13},(_,i)=>i-10).map(i => `<line x1="-4" y1="${i}" x2="8" y2="${i}"/>`).join('')}
  </g>

  <!-- Axes -->
  <line x1="-4" y1="0" x2="8" y2="0" stroke="#94a3b8" stroke-width="0.12"/>
  <line x1="0" y1="-10" x2="0" y2="2" stroke="#94a3b8" stroke-width="0.12"/>

  <!-- Axis tick labels -->
  <text x="1" y="0.7" font-size="0.55" font-family="sans-serif" fill="#94a3b8">1</text>
  <text x="2" y="0.7" font-size="0.55" font-family="sans-serif" fill="#94a3b8">2</text>
  <text x="4" y="0.7" font-size="0.55" font-family="sans-serif" fill="#94a3b8">4</text>
  <text x="6" y="0.7" font-size="0.55" font-family="sans-serif" fill="#94a3b8">6</text>
  <text x="-2.4" y="0.7" font-size="0.55" font-family="sans-serif" fill="#94a3b8">−2</text>
  <text x="0.15" y="-1" font-size="0.55" font-family="sans-serif" fill="#94a3b8">1</text>
  <text x="0.15" y="-3" font-size="0.55" font-family="sans-serif" fill="#94a3b8">3</text>
  <text x="0.15" y="-5" font-size="0.55" font-family="sans-serif" fill="#94a3b8">5</text>
  <text x="0.15" y="-7" font-size="0.55" font-family="sans-serif" fill="#94a3b8">7</text>

  <!-- Rhombus sides: A(1,1)->B(5,4)->C(2,8)->D(-2,5)->A(1,1) -->
  <polygon points="1,-1 5,-4 2,-8 -2,-5" 
           fill="#6366f1" fill-opacity="0.06" 
           stroke="#6366f1" stroke-width="0.15"/>

  <!-- Vertices -->
  <circle cx="1"  cy="-1"  r="0.22" fill="#4f46e5"/>
  <circle cx="5"  cy="-4"  r="0.22" fill="#4f46e5"/>
  <circle cx="2"  cy="-8"  r="0.22" fill="#4f46e5"/>
  <circle cx="-2" cy="-5"  r="0.22" fill="#4f46e5"/>

  <!-- Labels -->
  <text x="1.3"  y="-0.6"  font-size="0.65" font-family="sans-serif" fill="#4f46e5" font-weight="bold">A(1, 1)</text>
  <text x="5.3"  y="-4.1"  font-size="0.65" font-family="sans-serif" fill="#4f46e5" font-weight="bold">B(b, 4)</text>
  <text x="2.3"  y="-8.2"  font-size="0.65" font-family="sans-serif" fill="#4f46e5" font-weight="bold">C(2, c)</text>
  <text x="-4.2" y="-5.1"  font-size="0.65" font-family="sans-serif" fill="#4f46e5" font-weight="bold">D</text>

  <!-- Side labels -->
  <text x="3.5"  y="-2.1"  font-size="0.5" font-family="sans-serif" fill="#6366f1" transform="rotate(-36 3.5 -2.1)">AB</text>
  <text x="4.0"  y="-6.5"  font-size="0.5" font-family="sans-serif" fill="#6366f1" transform="rotate(52 4.0 -6.5)">BC</text>
  <text x="-0.2" y="-7.0"  font-size="0.5" font-family="sans-serif" fill="#6366f1" transform="rotate(-36 -0.2 -7.0)">CD</text>
  <text x="-1.0" y="-2.5"  font-size="0.5" font-family="sans-serif" fill="#6366f1" transform="rotate(52 -1.0 -2.5)">DA</text>
</svg>
</div>`;

  // Update parent doc graphData
  await db.collection('questions').doc('y9-11i-q6').update({
    graphData: { html: svg },
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log('Updated y9-11i-q6 main question SVG');
  process.exit(0);
}

run().catch(console.error);
