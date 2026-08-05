const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 200" width="240" height="200" style="font-family:sans-serif;">
  <defs>
    <!-- Scaled down arrows -->
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

  <!-- Square (140x140) -->
  <rect x="40" y="20" width="140" height="140" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Right angle marker -->
  <polyline points="40,145 55,145 55,160" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Dimension line for Right side: 4a -->
  <line x1="180" y1="20" x2="225" y2="20" stroke="#777" stroke-width="1"/>
  <line x1="180" y1="160" x2="225" y2="160" stroke="#777" stroke-width="1"/>
  <line x1="215" y1="20" x2="215" y2="160" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="207" y="90" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,207,90)">4a</text>
  
</svg>
</div>`;

  const questionText = `Write down an algebraic formula, in simplest form, for the area of the square shown.

${svg}`;

  const newSteps = [
    {
      explanation: 'First, remember the formula for the area of a square. Since all sides of a square are equal, you square the length of one side.',
      workingOut: '\\(\\text{Area} = \\text{side} \\times \\text{side} = (\\text{side})^2\\)',
      graphData: null
    },
    {
      explanation: 'Substitute the given side length, \\(4a\\), into the formula.',
      workingOut: '\\(\\text{Area} = (4a)^2\\)',
      graphData: null
    },
    {
      explanation: 'Square both the number (\\(4^2 = 16\\)) and the variable (\\(a^2 = a^2\\)) to find the final algebraic expression.',
      workingOut: [
        '\\(\\text{Area} = 4^2 \\times a^2\\)',
        '\\(\\text{Area} = 16a^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 16a^2. Shuffle to D (index 3).
  const newOpts = [
    { text: '\\(16a^2 + 1\\)', imageUrl: '' },
    { text: '\\(-16a^2\\)', imageUrl: '' },
    { text: '\\(16a^3\\)', imageUrl: '' },
    { text: '\\(16a^2\\)', imageUrl: '' } // Correct -> D
  ];

  const docRef = db.collection('questions').doc('y8-15a-q5b');
  await docRef.update({
    question: questionText,
    type: 'multiple_choice',
    options: newOpts,
    answer: '3',
    solutionSteps: newSteps,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q5');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q5b') {
          return {
            ...sq,
            question: questionText,
            type: 'multiple_choice',
            options: newOpts,
            answer: '3',
            solutionSteps: newSteps,
            graphData: null
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15a-q5b with SVG, clean steps, removed graphData");
  process.exit(0);
}

run().catch(console.error);
