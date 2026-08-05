const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeSvg38b() {
  let curveD = "";
  for (let x = 0.15; x <= 3.6; x += 0.05) {
    let px = 50 + x * 80;
    let py = 220 - Math.log(x) * 120;
    if (py < -20 || py > 350) continue;
    if (curveD === "") curveD += `M ${px.toFixed(1)},${py.toFixed(1)} `;
    else curveD += `L ${px.toFixed(1)},${py.toFixed(1)} `;
  }

  let p1x = 50 + 1 * 80; let p1y = 220 - Math.log(1) * 120;
  let p2x = 50 + 2 * 80; let p2y = 220 - Math.log(2) * 120;
  let p3x = 50 + 3 * 80; let p3y = 220 - Math.log(3) * 120;

  return `<svg viewBox="0 0 450 350" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #1e293b; stroke-width: 1.5; }
.curve { stroke: #3b82f6; stroke-width: 2.5; fill: none; }
.secant { stroke: #ef4444; stroke-width: 1.5; }
.label { font-size: 15px; fill: #1e293b; font-family: sans-serif; }
.shaded { fill: #fca5a5; opacity: 0.5; stroke: none; }
.dashed { stroke: #94a3b8; stroke-width: 1; stroke-dasharray: 4 4; }
</style>
<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b" />
</marker>
</defs>
<rect width="450" height="350" fill="#ffffff" />
<g>
  <!-- Axes -->
  <line x1="30" y1="220" x2="380" y2="220" class="axis" marker-end="url(#arrow)" />
  <text x="390" y="225" class="label">x</text>
  
  <line x1="50" y1="260" x2="50" y2="30" class="axis" marker-end="url(#arrow)" />
  <text x="35" y="20" class="label">y</text>
  <text x="35" y="235" class="label">0</text>
  
  <text x="${p1x - 5}" y="240" class="label">1</text>
  <text x="${p2x - 5}" y="240" class="label">2</text>
  <text x="${p3x - 5}" y="240" class="label">3</text>
  
  <line x1="45" y1="100" x2="55" y2="100" class="axis" />
  <text x="30" y="105" class="label">1</text>
  
  <!-- Shaded region (Trapezoids) -->
  <polygon points="${p1x},220 ${p2x},${p2y} ${p2x},220" class="shaded" />
  <polygon points="${p2x},220 ${p2x},${p2y} ${p3x},${p3y} ${p3x},220" class="shaded" />
  
  <!-- Vertical lines -->
  <line x1="${p2x}" y1="220" x2="${p2x}" y2="${p2y}" class="dashed" />
  <line x1="${p3x}" y1="220" x2="${p3x}" y2="${p3y}" class="dashed" />
  
  <!-- Curve y = ln(x) -->
  <path d="${curveD}" class="curve" />
  
  <!-- Secant lines -->
  <line x1="${p1x}" y1="${p1y}" x2="${p2x}" y2="${p2y}" class="secant" />
  <line x1="${p2x}" y1="${p2y}" x2="${p3x}" y2="${p3y}" class="secant" />
</g>
</svg>`;
}

function makeSvg38bs() {
  let curveD = "";
  for (let x = -0.5; x <= 2.2; x += 0.05) {
    let px = 50 + x * 100;
    let py = 260 - Math.exp(x) * 30;
    if (py < -20 || py > 350) continue;
    if (curveD === "") curveD += `M ${px.toFixed(1)},${py.toFixed(1)} `;
    else curveD += `L ${px.toFixed(1)},${py.toFixed(1)} `;
  }

  let p0x = 50 + 0 * 100; let p0y = 260 - Math.exp(0) * 30;
  let p1x = 50 + 1 * 100; let p1y = 260 - Math.exp(1) * 30;
  let p2x = 50 + 2 * 100; let p2y = 260 - Math.exp(2) * 30;

  return `<svg viewBox="0 0 450 350" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #1e293b; stroke-width: 1.5; }
.curve { stroke: #3b82f6; stroke-width: 2.5; fill: none; }
.secant { stroke: #ef4444; stroke-width: 1.5; }
.label { font-size: 15px; fill: #1e293b; font-family: sans-serif; }
.shaded { fill: #fca5a5; opacity: 0.5; stroke: none; }
.dashed { stroke: #94a3b8; stroke-width: 1; stroke-dasharray: 4 4; }
</style>
<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b" />
</marker>
</defs>
<rect width="450" height="350" fill="#ffffff" />
<g>
  <!-- Axes -->
  <line x1="30" y1="260" x2="380" y2="260" class="axis" marker-end="url(#arrow)" />
  <text x="390" y="265" class="label">x</text>
  
  <line x1="50" y1="280" x2="50" y2="20" class="axis" marker-end="url(#arrow)" />
  <text x="35" y="20" class="label">y</text>
  <text x="35" y="275" class="label">0</text>
  
  <text x="${p1x - 5}" y="280" class="label">1</text>
  <text x="${p2x - 5}" y="280" class="label">2</text>
  
  <!-- Shaded region (Trapezoids) -->
  <polygon points="${p0x},260 ${p0x},${p0y} ${p1x},${p1y} ${p1x},260" class="shaded" />
  <polygon points="${p1x},260 ${p1x},${p1y} ${p2x},${p2y} ${p2x},260" class="shaded" />
  
  <!-- Vertical lines -->
  <line x1="${p1x}" y1="260" x2="${p1x}" y2="${p1y}" class="dashed" />
  <line x1="${p2x}" y1="260" x2="${p2x}" y2="${p2y}" class="dashed" />
  
  <!-- Curve y = e^x -->
  <path d="${curveD}" class="curve" />
  
  <!-- Secant lines -->
  <line x1="${p0x}" y1="${p0y}" x2="${p1x}" y2="${p1y}" class="secant" />
  <line x1="${p1x}" y1="${p1y}" x2="${p2x}" y2="${p2y}" class="secant" />
</g>
</svg>`;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  batch.update(db.collection('questions').doc('girr2020-mc38'), {
    'graphData.svg': makeSvg38b()
  });

  batch.update(db.collection('questions').doc('girr2020-mc38s'), {
    'graphData.svg': makeSvg38bs()
  });

  const now = Date.now();
  batch.update(db.doc('sync_meta/questions'), {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated mc38 and mc38s SVGs (removed text) in Firestore.");
  process.exit(0);
}

run().catch(console.error);
