const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // ================= q2c =================
  const svg2c = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 300" width="240" height="300" style="font-family:sans-serif;">
  <defs>
    <marker id="arrow-end" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#555"/></marker>
    <marker id="arrow-start" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4 Z" fill="#555"/></marker>
    <marker id="arrow-end-rot" markerWidth="6" markerHeight="4" refX="6" refY="2" orient="auto"><path d="M0,0 L6,2 L0,4 Z" fill="#555"/></marker>
    <marker id="arrow-start-rot" markerWidth="6" markerHeight="4" refX="0" refY="2" orient="auto"><path d="M6,0 L0,2 L6,4 Z" fill="#555"/></marker>
  </defs>

  <!-- Cylinder -->
  <!-- Bottom ellipse (back half dashed, front half solid) -->
  <path d="M 40,250 A 80 25 0 0 1 200 250" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <path d="M 40,250 A 80 25 0 0 0 200 250" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Cylinder body (transparent to show dashed lines) -->
  <rect x="40" y="50" width="160" height="200" fill="#dbeafe" opacity="0.6"/>
  
  <!-- Left and right edges -->
  <line x1="40" y1="50" x2="40" y2="250" stroke="#2563eb" stroke-width="2"/>
  <line x1="200" y1="50" x2="200" y2="250" stroke="#2563eb" stroke-width="2"/>

  <!-- Top ellipse -->
  <ellipse cx="120" cy="50" rx="80" ry="25" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Center dot at top -->
  <circle cx="120" cy="50" r="3" fill="#1e40af"/>

  <!-- Dimension line for diameter 8cm at the top -->
  <line x1="40" y1="50" x2="200" y2="50" stroke="#555" stroke-width="1.5" stroke-dasharray="4,4"/>
  <text x="120" y="45" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">8 cm</text>

  <!-- Dimension line for height 20cm -->
  <line x1="200" y1="50" x2="225" y2="50" stroke="#777" stroke-width="1"/>
  <line x1="200" y1="250" x2="225" y2="250" stroke="#777" stroke-width="1"/>
  <line x1="215" y1="60" x2="215" y2="240" stroke="#555" stroke-width="1.5" marker-end="url(#arrow-end-rot)" marker-start="url(#arrow-start-rot)"/>
  <text x="225" y="150" text-anchor="start" font-size="14" font-weight="bold" fill="#333">20 cm</text>
</svg>
</div>`;

  const q2c_text = `Find the volume of a cylinder with a diameter of 8 cm and a height of 20 cm. Leave your answer in terms of \\(\\pi\\).

${svg2c}`;

  const steps2c = [
    {
      explanation: 'First, find the radius. The diameter is given as 8 cm. The radius is half of the diameter.',
      workingOut: '\\(r = \\frac{8}{2} = 4\\text{ cm}\\)',
      graphData: null
    },
    {
      explanation: 'Next, use the formula for the volume of a cylinder: \\(V = \\pi \\times r^2 \\times h\\).',
      workingOut: [
        '\\(V = \\pi \\times 4^2 \\times 20\\)',
        '\\(V = \\pi \\times 16 \\times 20\\)',
        '\\(V = 320\\pi\\text{ cm}^3\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const opts2c = [
    { text: '\\(160\\pi\\text{ cm}^3\\)', imageUrl: '' },
    { text: '\\(640\\pi\\text{ cm}^3\\)', imageUrl: '' },
    { text: '\\(1280\\pi\\text{ cm}^3\\)', imageUrl: '' },
    { text: '\\(320\\pi\\text{ cm}^3\\)', imageUrl: '' } // Correct -> D
  ];

  await db.collection('questions').doc('y8-15i-q2c').update({
    question: q2c_text, type: 'multiple_choice', options: opts2c, answer: '3', solutionSteps: steps2c, graphData: null, requiresManualGrading: FieldValue.delete(), updatedAt: FieldValue.serverTimestamp()
  });

  // ================= q3a =================
  const svg3a = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 200" width="260" height="200" style="font-family:sans-serif;">
  <!-- Rectangular Prism -->
  <polygon points="50,150 170,150 170,90 50,90" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <polygon points="170,150 230,110 230,50 170,90" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
  <polygon points="50,90 170,90 230,50 110,50" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  
  <line x1="50" y1="150" x2="110" y2="110" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="110" y1="110" x2="230" y2="110" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="110" y1="110" x2="110" y2="50" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>

  <text x="110" y="165" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">7 cm</text>
  <text x="210" y="140" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">4 cm</text>
  <text x="35" y="125" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">2 cm</text>
</svg>
</div>`;

  const q3a_text = `Find the surface area of a rectangular prism with dimensions 7 cm by 4 cm by 2 cm.

${svg3a}`;

  const steps3a = [
    {
      explanation: 'To find the surface area of a rectangular prism, we need to find the area of all six rectangular faces and add them together. There are three pairs of matching opposite faces.',
      workingOut: 'Pairs of faces: Top/Bottom, Front/Back, Left/Right.',
      graphData: null
    },
    {
      explanation: 'Calculate the area of each pair.',
      workingOut: [
        '\\(\\text{Front and Back} = 2 \\times (7 \\times 2) = 28\\text{ cm}^2\\)',
        '\\(\\text{Top and Bottom} = 2 \\times (7 \\times 4) = 56\\text{ cm}^2\\)',
        '\\(\\text{Left and Right} = 2 \\times (4 \\times 2) = 16\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Add them all together for the total surface area.',
      workingOut: [
        '\\(\\text{Surface Area} = 28 + 56 + 16\\)',
        '\\(\\text{Surface Area} = 100\\text{ cm}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const opts3a = [
    { text: '\\(56\\text{ cm}^2\\)', imageUrl: '' },
    { text: '\\(100\\text{ cm}^2\\)', imageUrl: '' }, // Correct -> B
    { text: '\\(50\\text{ cm}^2\\)', imageUrl: '' },
    { text: '\\(114\\text{ cm}^2\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15i-q3a').update({
    question: q3a_text, type: 'multiple_choice', options: opts3a, answer: '1', solutionSteps: steps3a, graphData: null, requiresManualGrading: FieldValue.delete(), updatedAt: FieldValue.serverTimestamp()
  });

  // ================= q3b =================
  const svg3b = `<div style="text-align:center;margin:16px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="280" height="200" style="font-family:sans-serif;">
  <!-- Triangular Prism -->
  <polygon points="50,150 150,150 50,50" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
  <polygon points="150,150 230,120 130,20 50,50" fill="#93c5fd" stroke="#2563eb" stroke-width="2"/>
  
  <!-- Right angle at front triangle A(50,150) -->
  <polyline points="50,135 65,135 65,150" fill="none" stroke="#2563eb" stroke-width="1.5"/>

  <!-- Back dashed edges -->
  <line x1="50" y1="50" x2="130" y2="20" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="50" y1="150" x2="130" y2="120" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="130" y1="120" x2="230" y2="120" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>
  <line x1="130" y1="120" x2="130" y2="20" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4"/>

  <!-- Labels -->
  <!-- Front base 4 -->
  <text x="100" y="165" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">4 m</text>
  <!-- Front height 3 -->
  <text x="35" y="100" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">3 m</text>
  <!-- Front hypotenuse 5 -->
  <text x="110" y="95" text-anchor="middle" font-size="14" font-weight="bold" fill="#333" transform="rotate(-45,110,95)">5 m</text>
  <!-- Length 10 -->
  <text x="200" y="150" text-anchor="middle" font-size="14" font-weight="bold" fill="#333">10 m</text>
</svg>
</div>`;

  const q3b_text = `Find the surface area of a triangular prism. The bases are right-angled triangles with side lengths 3 m, 4 m, and 5 m. The length of the prism is 10 m.

${svg3b}`;

  const steps3b = [
    {
      explanation: 'To find the surface area of a prism, calculate the area of the two triangular bases and the three rectangular sides.',
      workingOut: '',
      graphData: null
    },
    {
      explanation: 'Calculate the area of the two triangular bases (front and back). The base is a right-angled triangle with a base of 4 m and a height of 3 m.',
      workingOut: [
        '\\(\\text{One triangle area} = \\frac{1}{2} \\times 4 \\times 3 = 6\\text{ m}^2\\)',
        '\\(\\text{Two triangles area} = 2 \\times 6 = 12\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the area of the three rectangular sides. Each rectangle is formed by a side of the triangle (3, 4, and 5) multiplied by the length of the prism (10).',
      workingOut: [
        '\\(\\text{Bottom rectangle} = 4 \\times 10 = 40\\text{ m}^2\\)',
        '\\(\\text{Vertical rectangle} = 3 \\times 10 = 30\\text{ m}^2\\)',
        '\\(\\text{Slanted rectangle} = 5 \\times 10 = 50\\text{ m}^2\\)',
        '\\(\\text{Sum of rectangles} = 40 + 30 + 50 = 120\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Add all the areas together to find the total surface area.',
      workingOut: [
        '\\(\\text{Total Surface Area} = 12 + 120\\)',
        '\\(\\text{Total Surface Area} = 132\\text{ m}^2\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  const opts3b = [
    { text: '\\(60\\text{ m}^2\\)', imageUrl: '' },
    { text: '\\(120\\text{ m}^2\\)', imageUrl: '' },
    { text: '\\(132\\text{ m}^2\\)', imageUrl: '' }, // Correct -> C
    { text: '\\(144\\text{ m}^2\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15i-q3b').update({
    question: q3b_text, type: 'multiple_choice', options: opts3b, answer: '2', solutionSteps: steps3b, graphData: null, requiresManualGrading: FieldValue.delete(), updatedAt: FieldValue.serverTimestamp()
  });

  // Update parents just to be safe
  const p2 = db.collection('questions').doc('y8-15i-q2');
  const p3 = db.collection('questions').doc('y8-15i-q3');
  
  for (const [pRef, ids] of [[p2, ['y8-15i-q2c']], [p3, ['y8-15i-q3a','y8-15i-q3b']]]) {
    const pSnap = await pRef.get();
    if (pSnap.exists) {
      const pData = pSnap.data();
      if (pData.subQuestions) {
        const newSubQs = pData.subQuestions.map(sq => {
          if (sq.id === 'y8-15i-q2c') return { ...sq, question: q2c_text, type: 'multiple_choice', options: opts2c, answer: '3', solutionSteps: steps2c, graphData: null, requiresManualGrading: FieldValue.delete() };
          if (sq.id === 'y8-15i-q3a') return { ...sq, question: q3a_text, type: 'multiple_choice', options: opts3a, answer: '1', solutionSteps: steps3a, graphData: null, requiresManualGrading: FieldValue.delete() };
          if (sq.id === 'y8-15i-q3b') return { ...sq, question: q3b_text, type: 'multiple_choice', options: opts3b, answer: '2', solutionSteps: steps3b, graphData: null, requiresManualGrading: FieldValue.delete() };
          return sq;
        });
        await pRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
      }
    }
  }

  console.log("Updated q2c, q3a, q3b");
  process.exit(0);
}

run().catch(console.error);
