const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // Rectangle: width=x(=15), height=8, diagonal=17
  // Scale: 1 unit = 14px
  // width = 15*14 = 210px, height = 8*14 = 112px
  // A(50,180) B(260,180) C(260,68) D(50,68)
  // Diagonal from A(50,180) to C(260,68)

  const svg = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 260" width="330" height="260" style="font-family:sans-serif;">
  <defs>
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

  <!-- Rectangle ABCD: A(50,180) B(260,180) C(260,68) D(50,68) -->
  <rect x="50" y="68" width="210" height="112" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Diagonal from A(50,180) to C(260,68) -->
  <line x1="50" y1="180" x2="260" y2="68" stroke="#1e40af" stroke-width="2" stroke-dasharray="7,4"/>

  <!-- Right angle markers -->
  <polyline points="50,165 65,165 65,180" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="260,165 245,165 245,180" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="260,83 245,83 245,68" fill="none" stroke="#2563eb" stroke-width="1.5"/>
  <polyline points="50,83 65,83 65,68" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Label diagonal = 17 (rotated along diagonal) -->
  <!-- Diagonal midpoint: (155, 124). Angle: atan2(180-68, 260-50) = atan2(112,210) ≈ -28.1deg -->
  <text x="155" y="118" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e40af" transform="rotate(-28,155,118)">17</text>

  <!-- Label x for width (bottom, inside) -->
  <!-- x label inside the rectangle at bottom -->
  <text x="155" y="172" text-anchor="middle" font-size="15" font-style="italic" font-weight="bold" fill="#1e40af">x</text>

  <!-- Dimension line for height 8 (right side) -->
  <line x1="260" y1="68" x2="305" y2="68" stroke="#777" stroke-width="1"/>
  <line x1="260" y1="180" x2="305" y2="180" stroke="#777" stroke-width="1"/>
  <line x1="295" y1="68" x2="295" y2="180" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="287" y="124" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,287,124)">8</text>

  <!-- Dimension line for base x (bottom) -->
  <line x1="50" y1="180" x2="50" y2="225" stroke="#777" stroke-width="1"/>
  <line x1="260" y1="180" x2="260" y2="225" stroke="#777" stroke-width="1"/>
  <line x1="50" y1="215" x2="260" y2="215" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="155" y="208" text-anchor="middle" font-size="14" font-style="italic" font-weight="bold" fill="#333">x</text>
</svg>
</div>`;

  const questionText = `Find \\(x\\) and hence find the area of the rectangle shown.

a) Find \\(x\\).

${svg}`;

  const newSteps = [
    {
      explanation: 'The diagonal of the rectangle divides it into two right-angled triangles. The diagonal is the hypotenuse. We know the diagonal = 17 and one side = 8. We can use Pythagoras\' theorem to find \\(x\\).',
      workingOut: '\\(\\text{hypotenuse}^2 = \\text{base}^2 + \\text{height}^2\\)',
      graphData: null
    },
    {
      explanation: 'Substitute the known values: hypotenuse = 17, height = 8, and the unknown base = \\(x\\).',
      workingOut: [
        '\\(17^2 = x^2 + 8^2\\)',
        '\\(289 = x^2 + 64\\)',
        '\\(x^2 = 289 - 64 = 225\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Take the square root of both sides to find \\(x\\).',
      workingOut: [
        '\\(x = \\sqrt{225}\\)',
        '\\(x = 15\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 15. Shuffle to C (index 2). It's already at index 2 in original, keep it.
  // But let's reshuffle so it's not A
  const newOpts = [
    { text: '\\(14\\)', imageUrl: '' },
    { text: '\\(16\\)', imageUrl: '' },
    { text: '\\(15\\)', imageUrl: '' }, // Correct -> C
    { text: '\\(-15\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15a-q8a').update({
    question: questionText,
    type: 'multiple_choice',
    options: newOpts,
    answer: '2',
    solutionSteps: newSteps,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  const parentRef = db.collection('questions').doc('y8-15a-q8');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q8a') {
          return {
            ...sq,
            question: questionText,
            type: 'multiple_choice',
            options: newOpts,
            answer: '2',
            solutionSteps: newSteps,
            graphData: null
          };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15a-q8a with SVG, clean steps, shuffled options");
  process.exit(0);
}

run().catch(console.error);
