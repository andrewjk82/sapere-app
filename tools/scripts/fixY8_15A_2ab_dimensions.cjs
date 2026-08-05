const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Update y8-15a-q2a -----
  const svg2a = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="400" height="280" style="font-family:sans-serif;">
  <defs>
    <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8">
      <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="#60a5fa" stroke-width="1.5" opacity="0.5"/>
    </pattern>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-end-rot" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start-rot" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
  </defs>

  <path d="M40,40 h320 v200 h-320 v-200 z
           M100,100 h80 v80 h-80 v-80 z
           M220,100 h80 v80 h-80 v-80 z" 
        fill="#bfdbfe" fill-rule="evenodd" stroke="#2563eb" stroke-width="2"/>
  
  <rect x="40" y="40" width="320" height="200" fill="none" stroke="#1e40af" stroke-width="2.5"/>
  <rect x="100" y="100" width="80" height="80" fill="#ffffff" stroke="#1e40af" stroke-width="2"/>
  <rect x="220" y="100" width="80" height="80" fill="#ffffff" stroke="#1e40af" stroke-width="2"/>
  
  <!-- Tick marks for left square -->
  <line x1="135" y1="95" x2="145" y2="105" stroke="#1e40af" stroke-width="2"/>
  <line x1="135" y1="175" x2="145" y2="185" stroke="#1e40af" stroke-width="2"/>
  <line x1="95" y1="135" x2="105" y2="145" stroke="#1e40af" stroke-width="2"/>
  <line x1="175" y1="135" x2="185" y2="145" stroke="#1e40af" stroke-width="2"/>

  <!-- Tick marks for right square -->
  <line x1="255" y1="95" x2="265" y2="105" stroke="#1e40af" stroke-width="2"/>
  <line x1="255" y1="175" x2="265" y2="185" stroke="#1e40af" stroke-width="2"/>
  <line x1="215" y1="135" x2="225" y2="145" stroke="#1e40af" stroke-width="2"/>
  <line x1="295" y1="135" x2="305" y2="145" stroke="#1e40af" stroke-width="2"/>

  <!-- Labels -->
  <!-- 8 m width -->
  <line x1="40" y1="20" x2="40" y2="35" stroke="#777" stroke-width="1"/>
  <line x1="360" y1="20" x2="360" y2="35" stroke="#777" stroke-width="1"/>
  <line x1="40" y1="25" x2="360" y2="25" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="200" y="18" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">8 m</text>
  
  <!-- 5 m height -->
  <line x1="25" y1="40" x2="35" y2="40" stroke="#777" stroke-width="1"/>
  <line x1="25" y1="240" x2="35" y2="240" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="40" x2="30" y2="240" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="22" y="140" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,22,140)">5 m</text>

  <!-- 2 m hole labels -->
  <text x="140" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">2 m</text>
  <text x="260" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">2 m</text>
</svg>
</div>`;

  const docRef2a = db.collection('questions').doc('y8-15a-q2a');
  const snap2a = await docRef2a.get();
  if (snap2a.exists) {
    const data = snap2a.data();
    // find the old SVG and replace it, we can just replace the whole question text safely since we know its structure
    const questionText = `Find the area of the shaded region in the figure below.

${svg2a}

(The tick marks indicate that the small inner quadrilaterals are squares.)`;
    await docRef2a.update({ question: questionText, updatedAt: FieldValue.serverTimestamp() });
  }

  // ----- Update y8-15a-q2b -----
  const svg2b = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="400" height="250" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
  </defs>

  <rect x="40" y="30" width="300" height="180" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <polygon points="40,210 340,210 160,30" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>
  
  <polyline points="40,195 55,195 55,210" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="340,195 325,195 325,210" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="340,45 325,45 325,30" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="40,45 55,45 55,30" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Labels -->
  <!-- 10 cm width -->
  <line x1="40" y1="210" x2="40" y2="245" stroke="#777" stroke-width="1"/>
  <line x1="340" y1="210" x2="340" y2="245" stroke="#777" stroke-width="1"/>
  <line x1="40" y1="235" x2="340" y2="235" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="190" y="228" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">10 cm</text>
  
  <!-- 6 cm height -->
  <line x1="25" y1="30" x2="35" y2="30" stroke="#777" stroke-width="1"/>
  <line x1="25" y1="210" x2="35" y2="210" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="30" x2="30" y2="210" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="22" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,22,120)">6 cm</text>
</svg>
</div>`;

  const docRef2b = db.collection('questions').doc('y8-15a-q2b');
  const snap2b = await docRef2b.get();
  if (snap2b.exists) {
    const questionText = `Find the area of the shaded region in the figure below.

${svg2b}
`;
    await docRef2b.update({ question: questionText, updatedAt: FieldValue.serverTimestamp() });
  }

  // Update parent for both
  const parentRef = db.collection('questions').doc('y8-15a-q2');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q2a') {
          return { ...sq, question: `Find the area of the shaded region in the figure below.\n\n${svg2a}\n\n(The tick marks indicate that the small inner quadrilaterals are squares.)` };
        }
        if (sq.id === 'y8-15a-q2b') {
          return { ...sq, question: `Find the area of the shaded region in the figure below.\n\n${svg2b}\n` };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated dimension lines and arrows for y8-15a-q2a and q2b");
  process.exit(0);
}

run().catch(console.error);
