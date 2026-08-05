const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

// Pre-compute SVG path points in Node.js
function computePath10a() {
  const s = Math.SQRT2 / 2;
  const cx = 175, cy = 175, scale = 22;
  const points = [];
  for (let ti = -25; ti <= 25; ti++) {
    const t = ti / 10;
    const xm = s * (t * t - t);
    const ym = -s * (t * t + t);
    const xs = cx + scale * xm;
    const ys = cy - scale * ym;
    if (xs >= 0 && xs <= 350 && ys >= 0 && ys <= 350) {
      points.push(`${xs.toFixed(1)},${ys.toFixed(1)}`);
    }
  }
  return points;
}

function computePath10b() {
  const cx = 280, cy = 175, scale = 22;
  const points = [];
  for (let ti = -25; ti <= 25; ti++) {
    const t = ti / 10;
    const xm = -t * t;
    const ym = t;
    const xs = cx + scale * xm;
    const ys = cy - scale * ym;
    if (xs >= 0 && xs <= 350 && ys >= 0 && ys <= 350) {
      points.push(`${xs.toFixed(1)},${ys.toFixed(1)}`);
    }
  }
  return points;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const pts10a = computePath10a();
  const pts10b = computePath10b();

  // SVG for q10a - 135° CW rotated parabola
  const svg10a = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" width="350" height="350" style="font-family:sans-serif;">
  <defs>
    <marker id="arr10a-x" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#94a3b8"/></marker>
    <marker id="arr10a-y" markerWidth="6" markerHeight="4" refX="3" refY="0" orient="auto"><path d="M0,6 L3,0 L6,6 Z" fill="#94a3b8"/></marker>
  </defs>
  <!-- Axes -->
  <line x1="20" y1="175" x2="330" y2="175" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr10a-x)"/>
  <line x1="175" y1="330" x2="175" y2="20" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr10a-y)"/>
  <text x="322" y="170" font-size="13" fill="#64748b">x</text>
  <text x="178" y="20" font-size="13" fill="#64748b">y</text>
  <!-- Grid labels -->
  <text x="171" y="192" font-size="11" fill="#94a3b8">O</text>
  <!-- Axis of symmetry y = -x (dashed) -->
  <line x1="20" y1="330" x2="330" y2="20" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,4"/>
  <text x="285" y="45" font-size="11" fill="#64748b">y = −x</text>
  <!-- Rotated parabola -->
  <polyline points="${pts10a.join(' ')}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round"/>
  <!-- Key points -->
  <circle cx="175" cy="175" r="5" fill="#dc2626"/>
  <text x="180" y="168" font-size="11" fill="#dc2626" font-weight="bold">Vertex (0,0)</text>
  <!-- (1,1) → (0, -√2) -->
  <circle cx="175" cy="206" r="4" fill="#f97316"/>
  <text x="180" y="210" font-size="10" fill="#f97316">(1,1)→(0,−√2)</text>
  <!-- (-1,1) → (√2, 0) -->
  <circle cx="206" cy="175" r="4" fill="#f97316"/>
  <text x="210" y="172" font-size="10" fill="#f97316">(−1,1)→(√2,0)</text>
  <text x="80" y="300" font-size="12" fill="#4f46e5" font-weight="bold">Rotated 135° clockwise</text>
</svg>
</div>`;

  // SVG for q10b - 90° ACW rotated parabola (x = -y²)
  const svg10b = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" width="350" height="350" style="font-family:sans-serif;">
  <defs>
    <marker id="arr10b-x" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#94a3b8"/></marker>
    <marker id="arr10b-y" markerWidth="6" markerHeight="4" refX="3" refY="0" orient="auto"><path d="M0,6 L3,0 L6,6 Z" fill="#94a3b8"/></marker>
  </defs>
  <!-- Axes (center at 280,175) -->
  <line x1="20" y1="175" x2="330" y2="175" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr10b-x)"/>
  <line x1="280" y1="330" x2="280" y2="20" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arr10b-y)"/>
  <text x="322" y="170" font-size="13" fill="#64748b">x</text>
  <text x="283" y="20" font-size="13" fill="#64748b">y</text>
  <text x="274" y="192" font-size="11" fill="#94a3b8">O</text>
  <!-- x=0 axis of symmetry (y-axis = x-axis here, horizontal) highlight -->
  <text x="286" y="140" font-size="11" fill="#64748b">axis: y=0</text>
  <!-- Rotated parabola x = -y² -->
  <polyline points="${pts10b.join(' ')}" fill="none" stroke="#6366f1" stroke-width="2.5" stroke-linejoin="round"/>
  <!-- Key points -->
  <circle cx="280" cy="175" r="5" fill="#dc2626"/>
  <text x="285" y="168" font-size="11" fill="#dc2626" font-weight="bold">Vertex (0,0)</text>
  <!-- (1,1) → (-1, 1) -->
  <circle cx="258" cy="153" r="4" fill="#f97316"/>
  <text x="195" y="150" font-size="10" fill="#f97316">(1,1)→(−1,1)</text>
  <!-- (-1,1) → (-1,-1) -->
  <circle cx="258" cy="197" r="4" fill="#f97316"/>
  <text x="193" y="200" font-size="10" fill="#f97316">(−1,1)→(−1,−1)</text>
  <!-- (2,4) → (-4,2) -->
  <circle cx="192" cy="131" r="4" fill="#f97316"/>
  <text x="115" y="128" font-size="10" fill="#f97316">(2,4)→(−4,2)</text>
  <text x="60" y="300" font-size="12" fill="#4f46e5" font-weight="bold">Rotated 90° anticlockwise: x = −y²</text>
</svg>
</div>`;

  // Now fetch existing steps and update only the last step (graph step)
  const q10aSnap = await db.collection('questions').doc('y10-7a-q10a').get();
  const q10bSnap = await db.collection('questions').doc('y10-7a-q10b').get();

  const steps10a = q10aSnap.data().solutionSteps;
  const steps10b = q10bSnap.data().solutionSteps;

  // Replace last step to use SVG in workingOut instead of graphData
  steps10a[steps10a.length - 1] = {
    explanation: 'The axis of symmetry was along the positive \\(y\\)-axis. After rotating \\(135^\\circ\\) clockwise, it now points in the direction \\(45^\\circ\\) below the positive \\(x\\)-axis — along the line \\(y = -x\\). The parabola opens toward the lower-right. Here is the result:',
    workingOut: svg10a,
    graphData: null
  };

  steps10b[steps10b.length - 1] = {
    explanation: 'The original equation \\(y = x^2\\) becomes \\(x = -y^2\\) after a \\(90^\\circ\\) anticlockwise rotation. The axis of symmetry was the \\(y\\)-axis; it now becomes the \\(x\\)-axis (\\(y = 0\\)). The parabola opens to the LEFT.',
    workingOut: svg10b,
    graphData: null
  };

  await db.collection('questions').doc('y10-7a-q10a').update({
    solutionSteps: steps10a,
    updatedAt: FieldValue.serverTimestamp()
  });

  await db.collection('questions').doc('y10-7a-q10b').update({
    solutionSteps: steps10b,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent
  const pRef = db.collection('questions').doc('y10-7a-q10');
  const pSnap = await pRef.get();
  if (pSnap.exists && pSnap.data().subQuestions) {
    const newSubQs = pSnap.data().subQuestions.map(sq => {
      if (sq.id === 'y10-7a-q10a') return { ...sq, solutionSteps: steps10a };
      if (sq.id === 'y10-7a-q10b') return { ...sq, solutionSteps: steps10b };
      return sq;
    });
    await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("SVG paths:", pts10a.length, "points for 10a,", pts10b.length, "for 10b");
  console.log("Updated q10a and q10b graphs to use SVG");
  process.exit(0);
}

run().catch(console.error);
