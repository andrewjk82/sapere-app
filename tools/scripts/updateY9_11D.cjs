const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function makeSvgQ10() {
  return `<svg viewBox="0 0 350 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #1e293b; stroke-width: 1.5; }
.line { stroke: #3b82f6; stroke-width: 2; }
.point { fill: #ef4444; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
</style>
<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b" />
</marker>
</defs>
<rect width="350" height="300" fill="#ffffff" />
<g>
  <!-- Axes: x from -4 to 3 (7 units -> 300px, roughly 40px/unit). Origin at x = 160 -->
  <!-- y from -3 to 11 (14 units -> 260px, roughly 18px/unit). Origin at y = 240 -->
  <line x1="20" y1="240" x2="330" y2="240" class="axis" marker-end="url(#arrow)" />
  <text x="335" y="245" class="label">x</text>
  
  <line x1="160" y1="280" x2="160" y2="20" class="axis" marker-end="url(#arrow)" />
  <text x="145" y="25" class="label">y</text>
  
  <!-- Line y = 3x + 6 -->
  <!-- x=-3 => y=-3 => px=40, py=294 -->
  <!-- x=2 => y=12 => px=240, py=24 -->
  <line x1="40" y1="294" x2="240" y2="24" class="line" />
  
  <!-- Points -->
  <!-- (0, 6) -> px=160, py=132 -->
  <circle cx="160" cy="132" r="4" class="point" />
  <text x="170" y="136" class="label">(0, a)</text>
  
  <!-- (-2, 0) -> px=80, py=240 -->
  <circle cx="80" cy="240" r="4" class="point" />
  <text x="70" y="260" class="label">(b, 0)</text>
  
  <!-- (1, 9) -> px=200, py=78 -->
  <circle cx="200" cy="78" r="4" class="point" />
  <text x="210" y="82" class="label">(1, c)</text>
</g>
</svg>`;
}

function makeSvgQ11() {
  return `<svg viewBox="0 0 350 300" xmlns="http://www.w3.org/2000/svg">
<defs>
<style>
.axis { stroke: #1e293b; stroke-width: 1.5; }
.line { stroke: #3b82f6; stroke-width: 2; }
.point { fill: #ef4444; }
.label { font-size: 14px; fill: #1e293b; font-family: sans-serif; }
</style>
<marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M 0 0 L 10 5 L 0 10 z" fill="#1e293b" />
</marker>
</defs>
<rect width="350" height="300" fill="#ffffff" />
<g>
  <!-- Axes: x from -3 to 6 (9 units -> 300px, 33px/unit). Origin at x = 120 -->
  <!-- y from -2 to 12 (14 units -> 260px, 18px/unit). Origin at y = 250 -->
  <line x1="20" y1="250" x2="330" y2="250" class="axis" marker-end="url(#arrow)" />
  <text x="335" y="255" class="label">x</text>
  
  <line x1="120" y1="280" x2="120" y2="20" class="axis" marker-end="url(#arrow)" />
  <text x="105" y="25" class="label">y</text>
  
  <!-- Line y = -2x + 8 -->
  <!-- x=-2 => y=12 => px=54, py=34 -->
  <!-- x=5 => y=-2 => px=285, py=286 -->
  <line x1="54" y1="34" x2="285" y2="286" class="line" />
  
  <!-- Points -->
  <!-- (0, 8) -> px=120, py=106 -->
  <circle cx="120" cy="106" r="4" class="point" />
  <text x="130" y="110" class="label">(0, a)</text>
  
  <!-- (4, 0) -> px=252, py=250 -->
  <circle cx="252" cy="250" r="4" class="point" />
  <text x="260" y="245" class="label">(b, 0)</text>
  
  <!-- (-1, 10) -> px=87, py=70 -->
  <circle cx="87" cy="70" r="4" class="point" />
  <text x="95" y="74" class="label">(-1, c)</text>
</g>
</svg>`;
}

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  // Update Q10
  batch.update(db.collection('questions').doc('y9-11d-q10'), {
    'graphData': { svg: makeSvgQ10() },
    'answer': '0',
    'options': [
      { text: '$a = 6,\\; b = -2,\\; c = 9$', imageUrl: '' },
      { text: '$a = 6,\\; b = 2,\\; c = 9$', imageUrl: '' },
      { text: '$a = -2,\\; b = 6,\\; c = 9$', imageUrl: '' },
      { text: '$a = 6,\\; b = -2,\\; c = 3$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'To find the $y$-intercept $(0, a)$, substitute $x = 0$ into the equation $y = 3x + 6$.',
        workingOut: 'y = 3(0) + 6 \\\\ y = 6 \\\\ \\therefore a = 6'
      },
      {
        explanation: 'To find the $x$-intercept $(b, 0)$, substitute $y = 0$ into the equation and solve for $x$.',
        workingOut: '0 = 3x + 6 \\\\ -3x = 6 \\\\ x = -2 \\\\ \\therefore b = -2'
      },
      {
        explanation: 'To find the point $(1, c)$ on the line, substitute $x = 1$ into the equation.',
        workingOut: 'y = 3(1) + 6 \\\\ y = 9 \\\\ \\therefore c = 9'
      },
      {
        explanation: 'Combine all the found values.',
        workingOut: 'a = 6,\\; b = -2,\\; c = 9'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q11
  batch.update(db.collection('questions').doc('y9-11d-q11'), {
    'graphData': { svg: makeSvgQ11() },
    'answer': '1',
    'options': [
      { text: '$a = 8,\\; b = -4,\\; c = 10$', imageUrl: '' },
      { text: '$a = 8,\\; b = 4,\\; c = 10$', imageUrl: '' },
      { text: '$a = 4,\\; b = 8,\\; c = 10$', imageUrl: '' },
      { text: '$a = 8,\\; b = 4,\\; c = -10$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'To find the $y$-intercept $(0, a)$, substitute $x = 0$ into the equation $y = -2x + 8$.',
        workingOut: 'y = -2(0) + 8 \\\\ y = 8 \\\\ \\therefore a = 8'
      },
      {
        explanation: 'To find the $x$-intercept $(b, 0)$, substitute $y = 0$ into the equation and solve for $x$.',
        workingOut: '0 = -2x + 8 \\\\ 2x = 8 \\\\ x = 4 \\\\ \\therefore b = 4'
      },
      {
        explanation: 'To find the point $(-1, c)$ on the line, substitute $x = -1$ into the equation.',
        workingOut: 'y = -2(-1) + 8 \\\\ y = 2 + 8 = 10 \\\\ \\therefore c = 10'
      },
      {
        explanation: 'Combine all the found values.',
        workingOut: 'a = 8,\\; b = 4,\\; c = 10'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  // Update Q12a
  batch.update(db.collection('questions').doc('y9-11d-q12a'), {
    'answer': '0',
    'options': [
      { text: '$y = -3x + 12,\\quad m = -3,\\quad c = 12$', imageUrl: '' },
      { text: '$y = 3x - 12,\\quad m = 3,\\quad c = -12$', imageUrl: '' },
      { text: '$y = -3x - 12,\\quad m = -3,\\quad c = -12$', imageUrl: '' },
      { text: '$y = 3x + 12,\\quad m = 3,\\quad c = 12$', imageUrl: '' }
    ],
    'solutionSteps': [
      {
        explanation: 'Start with the given equation and isolate $y$ on the left side to get it into the form $y = mx + c$. Subtract $3x$ from both sides.',
        workingOut: '3x + y = 12 \\\\ y = -3x + 12'
      },
      {
        explanation: 'Identify the gradient $m$ and the $y$-intercept $c$ from the equation $y = -3x + 12$.',
        workingOut: 'm = -3, \\quad c = 12'
      },
      {
        explanation: 'State the final answer clearly.',
        workingOut: 'y = -3x + 12,\\quad m = -3,\\quad c = 12'
      }
    ],
    'updatedAt': FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log("Updated y9-11d-q10, q11, q12a.");
  process.exit(0);
}

run().catch(console.error);
