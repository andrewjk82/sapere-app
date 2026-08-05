const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeSvg37b() {
  return `<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #1e293b; stroke-width: 1.5; }
.curve { stroke: #3b82f6; stroke-width: 2; fill: none; }
.asymptote { stroke: #3b82f6; stroke-width: 1.5; stroke-dasharray: 6 6; }
.label { font-size: 16px; fill: #1e293b; font-family: sans-serif; }
.small-label { font-size: 14px; fill: #1e293b; font-family: sans-serif; font-style: italic; }
</style>
<!-- Arrowhead for axes -->
<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b" />
</marker>
<!-- Arrowhead for blue curves -->
<marker id="blue-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
</marker>
</defs>
<rect width="500" height="350" fill="#ffffff" />
<g>
  <!-- Axes -->
  <line x1="40" y1="200" x2="450" y2="200" class="axis" marker-end="url(#arrow)" marker-start="url(#arrow)" />
  <text x="460" y="205" class="label">x</text>
  <line x1="250" y1="300" x2="250" y2="40" class="axis" marker-end="url(#arrow)" marker-start="url(#arrow)" />
  <text x="245" y="25" class="label">y</text>
  
  <!-- Asymptotes x = -7, x = 7 -->
  <line x1="150" y1="320" x2="150" y2="40" class="asymptote" marker-end="url(#blue-arrow)" marker-start="url(#blue-arrow)" />
  <text x="135" y="220" class="label">-7</text>
  
  <line x1="350" y1="320" x2="350" y2="40" class="asymptote" marker-end="url(#blue-arrow)" marker-start="url(#blue-arrow)" />
  <text x="355" y="220" class="label">7</text>
  
  <!-- Middle curve (-7, 7) -->
  <!-- y-intercept is -1/49 (approx at y=205 visually). Goes down to asymptotes. -->
  <path d="M 155,300 C 160,210 210,205 250,205 C 290,205 340,210 345,300" class="curve" marker-end="url(#blue-arrow)" marker-start="url(#blue-arrow)" />
  <text x="255" y="220" class="label">-1/49</text>
  
  <!-- Left curve x < -7 -->
  <!-- From y=0 (approx at y=198), goes up to x=-7 -->
  <path d="M 50,195 C 100,195 140,180 145,50" class="curve" marker-end="url(#blue-arrow)" marker-start="url(#blue-arrow)" />
  
  <!-- Right curve x > 7 -->
  <!-- From x=7 goes up, approaches y=0 as x->inf -->
  <path d="M 355,50 C 360,180 400,195 440,195" class="curve" marker-end="url(#blue-arrow)" marker-start="url(#blue-arrow)" />
  
  <!-- Additional text for y=0 asymptote -->
  <path d="M 380,225 L 420,225 L 420,205" fill="none" stroke="#1e293b" stroke-width="1" marker-end="url(#arrow)" />
  <text x="360" y="245" class="small-label">y=0 is also</text>
  <text x="360" y="260" class="small-label">an asymptote</text>
</g>
</svg>`;
}

function makeSvg37bs() {
  return `<svg viewBox="0 0 500 350" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #1e293b; stroke-width: 1.5; }
.curve { stroke: #3b82f6; stroke-width: 2; fill: none; }
.asymptote { stroke: #3b82f6; stroke-width: 1.5; stroke-dasharray: 6 6; }
.label { font-size: 16px; fill: #1e293b; font-family: sans-serif; }
.small-label { font-size: 14px; fill: #1e293b; font-family: sans-serif; font-style: italic; }
</style>
<!-- Arrowhead for axes -->
<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b" />
</marker>
<!-- Arrowhead for blue curves -->
<marker id="blue-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
</marker>
</defs>
<rect width="500" height="350" fill="#ffffff" />
<g>
  <!-- Axes -->
  <line x1="40" y1="200" x2="450" y2="200" class="axis" marker-end="url(#arrow)" marker-start="url(#arrow)" />
  <text x="460" y="205" class="label">x</text>
  <line x1="250" y1="300" x2="250" y2="40" class="axis" marker-end="url(#arrow)" marker-start="url(#arrow)" />
  <text x="245" y="25" class="label">y</text>
  
  <!-- Asymptotes x = -5, x = 5 -->
  <line x1="170" y1="320" x2="170" y2="40" class="asymptote" marker-end="url(#blue-arrow)" marker-start="url(#blue-arrow)" />
  <text x="150" y="220" class="label">-5</text>
  
  <line x1="330" y1="320" x2="330" y2="40" class="asymptote" marker-end="url(#blue-arrow)" marker-start="url(#blue-arrow)" />
  <text x="335" y="220" class="label">5</text>
  
  <!-- Middle curve (-5, 5) -->
  <path d="M 175,300 C 180,210 210,205 250,205 C 290,205 320,210 325,300" class="curve" marker-end="url(#blue-arrow)" marker-start="url(#blue-arrow)" />
  <text x="255" y="220" class="label">-1/25</text>
  
  <!-- Left curve x < -5 -->
  <path d="M 50,195 C 110,195 160,180 165,50" class="curve" marker-end="url(#blue-arrow)" marker-start="url(#blue-arrow)" />
  
  <!-- Right curve x > 5 -->
  <path d="M 335,50 C 340,180 390,195 440,195" class="curve" marker-end="url(#blue-arrow)" marker-start="url(#blue-arrow)" />
  
  <!-- Additional text for y=0 asymptote -->
  <path d="M 380,225 L 420,225 L 420,205" fill="none" stroke="#1e293b" stroke-width="1" marker-end="url(#arrow)" />
  <text x="360" y="245" class="small-label">y=0 is also</text>
  <text x="360" y="260" class="small-label">an asymptote</text>
</g>
</svg>`;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  batch.update(db.collection('questions').doc('girr2020-mc37'), {
    'graphData.svg': makeSvg37b()
  });

  batch.update(db.collection('questions').doc('girr2020-mc37s'), {
    'graphData.svg': makeSvg37bs()
  });

  const now = Date.now();
  batch.update(db.doc('sync_meta/questions'), {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated mc37 and mc37s SVGs in Firestore.");
  process.exit(0);
}

run().catch(console.error);
