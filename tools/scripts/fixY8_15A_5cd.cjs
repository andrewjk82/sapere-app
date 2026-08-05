const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ----- Update y8-15a-q5c -----
  const svg5c = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 270" width="260" height="270" style="font-family:sans-serif;">
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

  <!-- Triangle ABC -->
  <!-- Base A(30,200) to B(230,200) -> width 200 -->
  <!-- Height 180 -> C(130,20) -->
  <!-- Dashed line C(130,20) to H(130,200) -->
  <polygon points="30,200 230,200 130,20" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <line x1="130" y1="20" x2="130" y2="200" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  
  <!-- Right angle at H -->
  <polyline points="130,185 145,185 145,200" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Dimension line for Base 10y -->
  <line x1="30" y1="200" x2="30" y2="245" stroke="#777" stroke-width="1"/>
  <line x1="230" y1="200" x2="230" y2="245" stroke="#777" stroke-width="1"/>
  <line x1="30" y1="235" x2="230" y2="235" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="130" y="228" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">10y</text>
  
  <!-- Dimension line for Height 9x -->
  <!-- Placed slightly to the left of the dashed line -->
  <line x1="115" y1="20" x2="130" y2="20" stroke="#777" stroke-width="1"/>
  <line x1="115" y1="200" x2="130" y2="200" stroke="#777" stroke-width="1"/>
  <line x1="120" y1="20" x2="120" y2="200" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="112" y="110" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-90,112,110)">9x</text>
  
</svg>
</div>`;

  const steps5c = [
    {
      explanation: 'First, recall the formula for the area of a triangle.',
      workingOut: '\\(\\text{Area} = \\frac{\\text{base} \\times \\text{height}}{2}\\)',
      graphData: null
    },
    {
      explanation: 'Substitute the given algebraic expressions into the formula. The base is \\(10y\\) and the height is \\(9x\\).',
      workingOut: '\\(\\text{Area} = \\frac{10y \\times 9x}{2}\\)',
      graphData: null
    },
    {
      explanation: 'Multiply the terms in the numerator (\\(10 \\times 9 = 90\\) and \\(y \\times x = xy\\)), and then divide by 2.',
      workingOut: [
        '\\(\\text{Area} = \\frac{90xy}{2}\\)',
        '\\(\\text{Area} = 45xy\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 45xy. Shuffle to D (index 3).
  const opts5c = [
    { text: '\\(45xy + 1\\)', imageUrl: '' },
    { text: '\\(\\dfrac{13}{6}\\)', imageUrl: '' },
    { text: '\\(-45xy\\)', imageUrl: '' },
    { text: '\\(45xy\\)', imageUrl: '' } // Correct -> D
  ];

  await db.collection('questions').doc('y8-15a-q5c').update({
    question: `Write down an algebraic formula, in simplest form, for the area of the triangle shown.\n\n${svg5c}`,
    options: opts5c,
    answer: '3',
    solutionSteps: steps5c,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ----- Update y8-15a-q5d -----
  const svg5d = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 310" width="240" height="310" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto">
      <path d="M0,0 L6,2 L0,4 Z" fill="#555"/>
    </marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto">
      <path d="M6,0 L0,2 L6,4 Z" fill="#555"/>
    </marker>
  </defs>

  <!-- Square ABCD (width 120, height 120) -->
  <!-- A(60,240), B(180,240), C(180,120), D(60,120) -->
  <rect x="60" y="120" width="120" height="120" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Triangle CDE on top -->
  <!-- E(120, 20) -->
  <polygon points="60,120 180,120 120,20" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Dashed height EH -->
  <!-- H(120, 120) -->
  <line x1="120" y1="20" x2="120" y2="120" stroke="#2563eb" stroke-width="2" stroke-dasharray="6,4"/>
  
  <!-- Right angle at H -->
  <polyline points="120,105 135,105 135,120" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Tick marks for equality (val 1) on AB, BC, AD, and EH -->
  <line x1="120" y1="235" x2="120" y2="245" stroke="#1e40af" stroke-width="2"/> <!-- AB -->
  <line x1="55" y1="180" x2="65" y2="180" stroke="#1e40af" stroke-width="2"/> <!-- AD -->
  <line x1="175" y1="180" x2="185" y2="180" stroke="#1e40af" stroke-width="2"/> <!-- BC -->
  <line x1="115" y1="70" x2="125" y2="70" stroke="#1e40af" stroke-width="2"/> <!-- EH -->

  <!-- Dimension line for Base AB: 4m -->
  <line x1="60" y1="240" x2="60" y2="285" stroke="#777" stroke-width="1"/>
  <line x1="180" y1="240" x2="180" y2="285" stroke="#777" stroke-width="1"/>
  <line x1="60" y1="275" x2="180" y2="275" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end)" marker-start="url(#arrow-start)"/>
  <text x="120" y="268" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">4m</text>
  
</svg>
</div>`;

  const steps5d = [
    {
      explanation: 'First, identify the two simple shapes that make up the compound figure: a square on the bottom and a triangle on the top.',
      workingOut: "The tick marks show that the bottom shape has equal sides of length \\(4m\\), making it a square. The tick mark on the triangle's dashed height shows it is also \\(4m\\).",
      graphData: null
    },
    {
      explanation: 'Calculate the area of the square.',
      workingOut: [
        '\\(\\text{Area}_{\\text{square}} = \\text{side} \\times \\text{side}\\)',
        '\\(\\text{Area}_{\\text{square}} = 4m \\times 4m = 16m^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the area of the triangle. Its base is the top of the square (\\(4m\\)), and its height is also \\(4m\\).',
      workingOut: [
        '\\(\\text{Area}_{\\text{triangle}} = \\frac{\\text{base} \\times \\text{height}}{2}\\)',
        '\\(\\text{Area}_{\\text{triangle}} = \\frac{4m \\times 4m}{2} = \\frac{16m^2}{2} = 8m^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Finally, add the two areas together to find the total area of the compound figure.',
      workingOut: [
        '\\(\\text{Total Area} = 16m^2 + 8m^2\\)',
        '\\(\\text{Total Area} = 24m^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  // Answer is 24m^2. Shuffle to C (index 2).
  const opts5d = [
    { text: '\\(-24m^2\\)', imageUrl: '' },
    { text: '\\(24m^2 + 1\\)', imageUrl: '' },
    { text: '\\(24m^2\\)', imageUrl: '' }, // Correct -> C
    { text: '\\(34m^3\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15a-q5d').update({
    question: `Write down an algebraic formula, in simplest form, for the area of the compound figure shown.\n\n${svg5d}`,
    options: opts5d,
    answer: '2',
    solutionSteps: steps5d,
    graphData: null,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent subQuestions
  const parentRef = db.collection('questions').doc('y8-15a-q5');
  const parentSnap = await parentRef.get();
  if (parentSnap.exists) {
    const parentData = parentSnap.data();
    if (parentData.subQuestions) {
      const newSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q5c') {
          return { ...sq, question: `Write down an algebraic formula, in simplest form, for the area of the triangle shown.\n\n${svg5c}`, options: opts5d, answer: '2' };
        }
        if (sq.id === 'y8-15a-q5d') {
          return { ...sq, question: `Write down an algebraic formula, in simplest form, for the area of the compound figure shown.\n\n${svg5d}`, options: opts5d, answer: '2' };
        }
        return sq;
      });
      // Actually let's not overwrite the options and answers in the parent if not strictly necessary, 
      // but it's safer to keep them in sync. Wait, I used opts5d for 5c by mistake in the map function above. 
      // Let's do it right.
      const correctSubQs = parentData.subQuestions.map(sq => {
        if (sq.id === 'y8-15a-q5c') {
          return { ...sq, question: `Write down an algebraic formula, in simplest form, for the area of the triangle shown.\n\n${svg5c}`, options: opts5c, answer: '3' };
        }
        if (sq.id === 'y8-15a-q5d') {
          return { ...sq, question: `Write down an algebraic formula, in simplest form, for the area of the compound figure shown.\n\n${svg5d}`, options: opts5d, answer: '2' };
        }
        return sq;
      });
      await parentRef.update({ subQuestions: correctSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log("Updated y8-15a-q5c and q5d with SVG, clean steps, removed graphData");
  process.exit(0);
}

run().catch(console.error);
