const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ================= q1e =================
  const svg1e = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200" style="font-family:sans-serif;">
  <!-- Sector 270 degrees. Center (100,100). Radius 80 -->
  <!-- Top: (100,20), Right: (180,100) -->
  <path d="M 100,20 A 80 80 0 1 0 180 100 L 100,100 Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Right angle symbol in the missing quadrant -->
  <polyline points="100,85 115,85 115,100" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Dimension line for radius -->
  <!-- Vertical edge at top -->
  <text x="80" y="60" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">12 m</text>
  <!-- Horizontal edge at right -->
  <text x="140" y="120" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">12 m</text>
</svg>
</div>`;

  const q1e_text = `Find the perimeter and area of a sector of a circle with radius 12 m. A right angle (\\(90^\\circ\\)) has been removed, so the angle of the sector is \\(270^\\circ\\). Give answers in terms of \\(\\pi\\).

${svg1e}`;

  const steps1e = [
    {
      explanation: 'First, find the perimeter. The perimeter is the sum of the curved arc length and the two straight radii. The angle is \\(270^\\circ\\), which is \\(\\frac{3}{4}\\) of a full circle.',
      workingOut: [
        '\\(\\text{Arc length} = \\frac{270}{360} \\times 2 \\times \\pi \\times r = \\frac{3}{4} \\times 2 \\times \\pi \\times 12 = 18\\pi\\)',
        '\\(\\text{Straight edges} = 12 + 12 = 24\\)',
        '\\(\\text{Perimeter} = (24 + 18\\pi)\\text{ m}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: "Next, find the area. The area of the sector is a fraction of the full circle's area.",
      workingOut: [
        '\\(\\text{Area} = \\frac{270}{360} \\times \\pi \\times r^2\\)',
        '\\(\\text{Area} = \\frac{3}{4} \\times \\pi \\times 12^2 = \\frac{3}{4} \\times 144\\pi = 108\\pi\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const opts1e = [
    { text: 'Perimeter = \\((12 + 18\\pi)\\text{ m}\\), Area = \\(144\\pi\\text{ m}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\((24 + 18\\pi)\\text{ m}\\), Area = \\(108\\pi\\text{ m}^2\\)', imageUrl: '' }, // Correct -> B
    { text: 'Perimeter = \\((24 + 9\\pi)\\text{ m}\\), Area = \\(108\\pi\\text{ m}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\((24 + 18\\pi)\\text{ m}\\), Area = \\(54\\pi\\text{ m}^2\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15i-q1e').update({
    question: q1e_text, type: 'multiple_choice', options: opts1e, answer: '1', solutionSteps: steps1e, graphData: null, requiresManualGrading: FieldValue.delete(), updatedAt: FieldValue.serverTimestamp()
  });

  // ================= q1f =================
  const svg1f = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250" width="250" height="250" style="font-family:sans-serif;">
  <!-- Quarter annulus -->
  <!-- Center O(50,200). Inner r=100 (10mm). Outer r=160 (16mm). -->
  <path d="M 150,200 L 210,200 A 160 160 0 0 0 50 40 L 50,100 A 100 100 0 0 1 150 200 Z" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Dashed lines to center -->
  <line x1="50" y1="200" x2="150" y2="200" stroke="#777" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="50" y1="200" x2="50" y2="100" stroke="#777" stroke-width="1.5" stroke-dasharray="4,4"/>
  
  <!-- Right angle at center -->
  <polyline points="50,185 65,185 65,200" fill="none" stroke="#777" stroke-width="1.5"/>
  <text x="40" y="215" font-size="14" font-weight="bold" fill="#555">O</text>

  <!-- Labels -->
  <text x="100" y="218" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">10 mm</text>
  <text x="180" y="218" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">6 mm</text>
</svg>
</div>`;

  const q1f_text = `Find the perimeter and area of a shape that is a quarter of an annulus. The inner radius is 10 mm and the width of the band is 6 mm, making the outer radius 16 mm. The angle is \\(90^\\circ\\). Give answers in terms of \\(\\pi\\).

${svg1f}`;

  const steps1f = [
    {
      explanation: 'First, find the perimeter. The perimeter is made of two curved arcs (outer and inner) and two straight edges. The angle is \\(90^\\circ\\), which is \\(\\frac{1}{4}\\) of a circle.',
      workingOut: [
        '\\(\\text{Outer arc} = \\frac{1}{4} \\times 2 \\times \\pi \\times 16 = 8\\pi\\)',
        '\\(\\text{Inner arc} = \\frac{1}{4} \\times 2 \\times \\pi \\times 10 = 5\\pi\\)',
        '\\(\\text{Straight edges} = 6 + 6 = 12\\)',
        '\\(\\text{Perimeter} = (12 + 13\\pi)\\text{ mm}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Next, find the area. The area of the quarter annulus is the area of the large quarter-circle minus the area of the small quarter-circle.',
      workingOut: [
        '\\(\\text{Large quarter-circle} = \\frac{1}{4} \\times \\pi \\times 16^2 = 64\\pi\\)',
        '\\(\\text{Small quarter-circle} = \\frac{1}{4} \\times \\pi \\times 10^2 = 25\\pi\\)',
        '\\(\\text{Area} = 64\\pi - 25\\pi = 39\\pi\\text{ mm}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const opts1f = [
    { text: 'Perimeter = \\((12 + 13\\pi)\\text{ mm}\\), Area = \\(39\\pi\\text{ mm}^2\\)', imageUrl: '' }, // Correct -> A? Wait, requested not A. Let's swap
    { text: 'Perimeter = \\((16 + 13\\pi)\\text{ mm}\\), Area = \\(39\\pi\\text{ mm}^2\\)', imageUrl: '' },
    { text: 'Perimeter = \\((12 + 13\\pi)\\text{ mm}\\), Area = \\(39\\pi\\text{ mm}^2\\)', imageUrl: '' }, // Correct -> C
    { text: 'Perimeter = \\((12 + 13\\pi)\\text{ mm}\\), Area = \\(156\\pi\\text{ mm}^2\\)', imageUrl: '' }
  ];
  opts1f[0] = { text: 'Perimeter = \\((12 + 8\\pi)\\text{ mm}\\), Area = \\(25\\pi\\text{ mm}^2\\)', imageUrl: '' };

  await db.collection('questions').doc('y8-15i-q1f').update({
    question: q1f_text, type: 'multiple_choice', options: opts1f, answer: '2', solutionSteps: steps1f, graphData: null, requiresManualGrading: FieldValue.delete(), updatedAt: FieldValue.serverTimestamp()
  });

  // ================= q2a =================
  const svg2a = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200" width="260" height="200" style="font-family:sans-serif;">
  <!-- Rectangular Prism -->
  <polygon points="50,150 170,150 170,90 50,90" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <polygon points="170,150 230,110 230,50 170,90" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
  <polygon points="50,90 170,90 230,50 110,50" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  
  <line x1="50" y1="150" x2="110" y2="110" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="110" y1="110" x2="230" y2="110" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="110" y1="110" x2="110" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>

  <text x="110" y="165" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">8 m</text>
  <text x="210" y="140" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">5 m</text>
  <text x="35" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">3 m</text>
</svg>
</div>`;

  const q2a_text = `Find the volume of a rectangular prism with length 8 m, width 5 m, and height 3 m.

${svg2a}`;

  const steps2a = [
    {
      explanation: 'To find the volume of a rectangular prism, multiply its length, width, and height.',
      workingOut: [
        '\\(\\text{Volume} = \\text{length} \\times \\text{width} \\times \\text{height}\\)',
        '\\(\\text{Volume} = 8 \\times 5 \\times 3\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the final result.',
      workingOut: '\\(\\text{Volume} = 120\\text{ m}^3\\)',
      graphData: null
    }
  ];

  const opts2a = [
    { text: '\\(40\\text{ m}^3\\)', imageUrl: '' },
    { text: '\\(120\\text{ m}^3\\)', imageUrl: '' }, // Correct -> B
    { text: '\\(158\\text{ m}^3\\)', imageUrl: '' },
    { text: '\\(85\\text{ m}^3\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15i-q2a').update({
    question: q2a_text, type: 'multiple_choice', options: opts2a, answer: '1', solutionSteps: steps2a, graphData: null, requiresManualGrading: FieldValue.delete(), updatedAt: FieldValue.serverTimestamp()
  });

  // ================= q2b =================
  const svg2b = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="280" height="200" style="font-family:sans-serif;">
  <!-- Triangular Prism -->
  <polygon points="50,150 150,150 100,50" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <polygon points="150,150 230,120 180,20 100,50" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
  
  <line x1="50" y1="150" x2="130" y2="120" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="130" y1="120" x2="230" y2="120" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="130" y1="120" x2="180" y2="20" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>

  <!-- Base 10, height 6 for front triangle -->
  <line x1="100" y1="50" x2="100" y2="150" stroke="#1e40af" stroke-width="1.5" stroke-dasharray="4,4"/>
  <polyline points="100,140 110,140 110,150" fill="none" stroke="#1e40af" stroke-width="1"/>
  <text x="105" y="110" font-size="14" font-weight="bold" fill="#1e40af">6 cm</text>
  <text x="100" y="165" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">10 cm</text>
  
  <!-- Length 15 -->
  <text x="200" y="150" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">15 cm</text>
</svg>
</div>`;

  const q2b_text = `Find the volume of a triangular prism. The triangular base has a base of 10 cm and a perpendicular height of 6 cm. The length of the prism is 15 cm.

${svg2b}`;

  const steps2b = [
    {
      explanation: 'First, find the area of the triangular base at the front of the prism.',
      workingOut: [
        '\\(\\text{Base Area} = \\frac{1}{2} \\times \\text{base} \\times \\text{height}\\)',
        '\\(\\text{Base Area} = \\frac{1}{2} \\times 10 \\times 6 = 30\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Next, find the volume of the prism by multiplying the base area by the length of the prism.',
      workingOut: [
        '\\(\\text{Volume} = \\text{Base Area} \\times \\text{length}\\)',
        '\\(\\text{Volume} = 30 \\times 15\\)',
        '\\(\\text{Volume} = 450\\text{ cm}^3\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const opts2b = [
    { text: '\\(900\\text{ cm}^3\\)', imageUrl: '' },
    { text: '\\(300\\text{ cm}^3\\)', imageUrl: '' },
    { text: '\\(450\\text{ cm}^3\\)', imageUrl: '' }, // Correct -> C
    { text: '\\(225\\text{ cm}^3\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15i-q2b').update({
    question: q2b_text, type: 'multiple_choice', options: opts2b, answer: '2', solutionSteps: steps2b, graphData: null, requiresManualGrading: FieldValue.delete(), updatedAt: FieldValue.serverTimestamp()
  });

  // Update parents just to be safe
  const p1 = db.collection('questions').doc('y8-15i-q1');
  const p2 = db.collection('questions').doc('y8-15i-q2');
  
  for (const [pRef, ids] of [[p1, ['y8-15i-q1e','y8-15i-q1f']], [p2, ['y8-15i-q2a','y8-15i-q2b']]]) {
    const pSnap = await pRef.get();
    if (pSnap.exists) {
      const pData = pSnap.data();
      if (pData.subQuestions) {
        const newSubQs = pData.subQuestions.map(sq => {
          if (sq.id === 'y8-15i-q1e') return { ...sq, question: q1e_text, type: 'multiple_choice', options: opts1e, answer: '1', solutionSteps: steps1e, graphData: null, requiresManualGrading: FieldValue.delete() };
          if (sq.id === 'y8-15i-q1f') return { ...sq, question: q1f_text, type: 'multiple_choice', options: opts1f, answer: '2', solutionSteps: steps1f, graphData: null, requiresManualGrading: FieldValue.delete() };
          if (sq.id === 'y8-15i-q2a') return { ...sq, question: q2a_text, type: 'multiple_choice', options: opts2a, answer: '1', solutionSteps: steps2a, graphData: null, requiresManualGrading: FieldValue.delete() };
          if (sq.id === 'y8-15i-q2b') return { ...sq, question: q2b_text, type: 'multiple_choice', options: opts2b, answer: '2', solutionSteps: steps2b, graphData: null, requiresManualGrading: FieldValue.delete() };
          return sq;
        });
        await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
      }
    }
  }

  console.log("Updated q1e, q1f, q2a, q2b");
  process.exit(0);
}

run().catch(console.error);
