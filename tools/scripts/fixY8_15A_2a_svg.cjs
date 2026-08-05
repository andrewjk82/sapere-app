const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // SVG representation of the shaded region
  // 8m x 5m outer rectangle. 2m x 2m holes.
  // Scale: 40px per meter. 8*40=320, 5*40=200
  // Left hole: x=1.5*40=60, y=1.5*40=60, w=80, h=80
  // Right hole: x=4.5*40=180, y=60, w=80, h=80

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 280" width="400" height="280" style="font-family:sans-serif;">
  <defs>
    <!-- Pattern for shaded area -->
    <pattern id="diagonalHatch" patternUnits="userSpaceOnUse" width="8" height="8">
      <path d="M-2,2 l4,-4 M0,8 l8,-8 M6,10 l4,-4" stroke="#60a5fa" stroke-width="1.5" opacity="0.5"/>
    </pattern>
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="#555"/>
    </marker>
  </defs>

  <!-- Background/Shaded Region with Holes -->
  <!-- We can draw the shaded region using a path with holes (using evenodd or just subpaths) -->
  <path d="M40,40 h320 v200 h-320 v-200 z
           M100,100 h80 v80 h-80 v-80 z
           M220,100 h80 v80 h-80 v-80 z" 
        fill="#bfdbfe" fill-rule="evenodd" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Outer border -->
  <rect x="40" y="40" width="320" height="200" fill="none" stroke="#1e40af" stroke-width="2.5"/>
  
  <!-- Left square hole -->
  <rect x="100" y="100" width="80" height="80" fill="#ffffff" stroke="#1e40af" stroke-width="2"/>
  
  <!-- Right square hole -->
  <rect x="220" y="100" width="80" height="80" fill="#ffffff" stroke="#1e40af" stroke-width="2"/>
  
  <!-- Tick marks for left square to show it's a square -->
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
  <!-- 8m width -->
  <line x1="40" y1="20" x2="360" y2="20" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="200" y="13" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">8 m</text>
  
  <!-- 5m height -->
  <line x1="20" y1="40" x2="20" y2="240" stroke="#555" stroke-width="1.5" marker-end="url(#arrow)" marker-start="url(#arrow)"/>
  <text x="12" y="145" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,12,145)">5 m</text>

  <!-- 2m hole label -->
  <text x="140" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">2 m</text>
  <text x="260" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">2 m</text>

</svg>
</div>`;

  const questionText = `Find the area of the shaded region in the figure below.

${svg}

(The tick marks indicate that the small inner quadrilaterals are squares.)`;

  const docRef = db.collection('questions').doc('y8-15a-q2a');
  const docSnap = await docRef.get();
  const data = docSnap.data();

  // We want to remove graphData from solutionSteps so the old geometry renderer doesn't show
  const newSteps = data.solutionSteps.map(step => {
    return { ...step, graphData: null };
  });

  await docRef.update({
    question: questionText,
    solutionSteps: newSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q2');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q2a') {
          return {
            ...sq,
            question: questionText,
            solutionSteps: newSteps
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Added beautiful SVG to y8-15a-q2a");
  process.exit(0);
}

run().catch(console.error);
