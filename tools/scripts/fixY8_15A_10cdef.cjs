const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const svg = `<div style="text-align:center;margin:12px 0;">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 230" width="340" height="230" style="font-family:sans-serif;background:#f8f9fa;border-radius:8px;">
  <rect width="340" height="230" fill="#f8f9fa"/>
  <rect x="20" y="20" width="300" height="210" fill="none" stroke="#333" stroke-width="2.5"/>
  <line x1="170" y1="20" x2="170" y2="230" stroke="#333" stroke-width="1.5"/>
  <line x1="20" y1="125" x2="170" y2="125" stroke="#333" stroke-width="1.5"/>
  <line x1="245" y1="20" x2="245" y2="110" stroke="#333" stroke-width="1.5"/>
  <line x1="170" y1="110" x2="320" y2="110" stroke="#333" stroke-width="1.5"/>
  <rect x="20" y="20" width="150" height="105" fill="#dbeafe" opacity="0.7"/>
  <rect x="170" y="20" width="75" height="90" fill="#dcfce7" opacity="0.7"/>
  <rect x="245" y="20" width="75" height="90" fill="#fef9c3" opacity="0.7"/>
  <rect x="170" y="110" width="150" height="120" fill="#f3e8ff" opacity="0.7"/>
  <rect x="20" y="125" width="150" height="105" fill="#ffe4e6" opacity="0.7"/>
  <text x="95" y="68" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">Family Room</text>
  <text x="95" y="84" text-anchor="middle" font-size="11" fill="#1e40af">5 cm × 3.5 cm</text>
  <text x="207" y="62" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Kitchen</text>
  <text x="207" y="76" text-anchor="middle" font-size="10" fill="#166534">3.5 × 3 cm</text>
  <text x="282" y="62" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">Hall</text>
  <text x="282" y="76" text-anchor="middle" font-size="10" fill="#854d0e">1.5 × 3.5 cm</text>
  <text x="245" y="165" text-anchor="middle" font-size="13" font-weight="bold" fill="#6b21a8">Lounge</text>
  <text x="245" y="181" text-anchor="middle" font-size="11" fill="#6b21a8">width 5 cm</text>
  <text x="95" y="175" text-anchor="middle" font-size="13" font-weight="bold" fill="#9f1239">Patio</text>
  <text x="95" y="191" text-anchor="middle" font-size="11" fill="#9f1239">5 cm × 3.5 cm</text>
  <text x="170" y="13" text-anchor="middle" font-size="11" fill="#666" font-style="italic">Floor Plan (Scale: 1 cm = 3 m)</text>
</svg>
</div>`;

  const baseText = `This diagram is the ground floor plan of a house drawn to a scale of \\(1\\text{ cm}\\) to represent \\(3\\text{ m}\\).

The measured dimensions on the paper are:
- Total length of the house: \\(10\\text{ cm}\\), Total width: \\(7\\text{ cm}\\)
- Family room: \\(5\\text{ cm} \\times 3.5\\text{ cm}\\)
- Kitchen: \\(3.5\\text{ cm} \\times 3\\text{ cm}\\)
- Hall: \\(1.5\\text{ cm} \\times 3.5\\text{ cm}\\)
- Lounge: width \\(5\\text{ cm}\\) at its widest point
- Patio: \\(5\\text{ cm} \\times 3.5\\text{ cm}\\)

${svg}

`;

  // ── q10c ──
  // answer: 15 by 10.5. Shuffle to B (index 1)
  const q10cSteps = [
    {
      explanation: 'Identify the family room dimensions on the plan. The list states it is 5 cm by 3.5 cm.',
      workingOut: '\\(\\text{Plan dimensions: } 5\\text{ cm} \\times 3.5\\text{ cm}\\)',
      graphData: null
    },
    {
      explanation: 'Convert the plan length to real-life length using the scale (1 cm = 3 m).',
      workingOut: [
        '\\(\\text{Length} = 5 \\times 3\\)',
        '\\(\\text{Length} = 15\\text{ m}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Convert the plan width to real-life width using the same scale.',
      workingOut: [
        '\\(\\text{Width} = 3.5 \\times 3\\)',
        '\\(\\text{Width} = 10.5\\text{ m}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Combine them in the requested format.',
      workingOut: '\\(\\text{Answer: } 15\\text{ by } 10.5\\)',
      graphData: null
    }
  ];
  
  const q10cFullText = baseText + "c) Find the length and width of the family room in the form 'L by W' (e.g. '15 by 10.5').";
  const q10cOpts = [
    { text: '\\(15\\text{ by } 10\\)', imageUrl: '' },
    { text: '\\(15\\text{ by } 10.5\\)', imageUrl: '' }, // Correct
    { text: '\\(10.5\\text{ by } 15\\)', imageUrl: '' },
    { text: '\\(18\\text{ by } 10.5\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15a-q10c').update({
    type: 'multiple_choice',
    question: q10cFullText,
    options: q10cOpts,
    answer: '1',
    solutionSteps: q10cSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ── q10d ──
  // Kitchen area. Plan: 3.5 cm x 3 cm
  // Real: (3.5*3) x (3*3) = 10.5 m x 9 m = 94.5 m²
  // Shuffle to A (index 0)
  const q10dSteps = [
    {
      explanation: 'First, find the real-life dimensions of the kitchen by multiplying the plan dimensions by 3 (the scale factor).',
      workingOut: [
        '\\(\\text{Plan dimensions: } 3.5\\text{ cm} \\times 3\\text{ cm}\\)',
        '\\(\\text{Real length} = 3.5 \\times 3 = 10.5\\text{ m}\\)',
        '\\(\\text{Real width} = 3 \\times 3 = 9\\text{ m}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the area by multiplying the real length by the real width.',
      workingOut: [
        '\\(\\text{Area} = \\text{length} \\times \\text{width}\\)',
        '\\(\\text{Area} = 10.5 \\times 9\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Complete the multiplication.',
      workingOut: '\\(\\text{Area} = 94.5\\text{ m}^2\\)',
      graphData: null
    }
  ];
  
  const q10dFullText = baseText + "d) What is the area of the kitchen (in square metres)?";
  const q10dOpts = [
    { text: '\\(94.5\\text{ m}^2\\)', imageUrl: '' }, // Correct
    { text: '\\(31.5\\text{ m}^2\\)', imageUrl: '' },
    { text: '\\(90\\text{ m}^2\\)', imageUrl: '' },
    { text: '\\(10.5\\text{ m}^2\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15a-q10d').update({
    type: 'multiple_choice',
    question: q10dFullText,
    options: q10dOpts,
    answer: '0',
    solutionSteps: q10dSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ── q10e ──
  // Lounge width: plan = 5 cm
  // Real: 5 * 3 = 15 m
  // Shuffle to D (index 3)
  const q10eSteps = [
    {
      explanation: 'Find the width of the lounge on the plan. The list states it is 5 cm at its widest point.',
      workingOut: '\\(\\text{Width on plan} = 5\\text{ cm}\\)',
      graphData: null
    },
    {
      explanation: 'Convert this to the real-life measurement by multiplying by the scale factor (1 cm = 3 m).',
      workingOut: [
        '\\(\\text{Real width} = 5 \\times 3\\)',
        '\\(\\text{Real width} = 15\\text{ m}\\)'
      ].join('\n'),
      graphData: null
    }
  ];
  
  const q10eFullText = baseText + "e) What is the width of the lounge at its widest point (in metres)?";
  const q10eOpts = [
    { text: '\\(1.67\\text{ m}\\)', imageUrl: '' },
    { text: '\\(12\\text{ m}\\)', imageUrl: '' },
    { text: '\\(5\\text{ m}\\)', imageUrl: '' },
    { text: '\\(15\\text{ m}\\)', imageUrl: '' } // Correct
  ];

  await db.collection('questions').doc('y8-15a-q10e').update({
    type: 'multiple_choice',
    question: q10eFullText,
    options: q10eOpts,
    answer: '3',
    solutionSteps: q10eSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // ── q10f ──
  // Patio area. Plan: 5 cm x 3.5 cm
  // Real: (5*3) x (3.5*3) = 15 m x 10.5 m = 157.5 m²
  // Shuffle to C (index 2)
  const q10fSteps = [
    {
      explanation: 'First, find the real-life dimensions of the patio by multiplying the plan dimensions by 3.',
      workingOut: [
        '\\(\\text{Plan dimensions: } 5\\text{ cm} \\times 3.5\\text{ cm}\\)',
        '\\(\\text{Real length} = 5 \\times 3 = 15\\text{ m}\\)',
        '\\(\\text{Real width} = 3.5 \\times 3 = 10.5\\text{ m}\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Calculate the area by multiplying the real length by the real width.',
      workingOut: [
        '\\(\\text{Area} = \\text{length} \\times \\text{width}\\)',
        '\\(\\text{Area} = 15 \\times 10.5\\)'
      ].join('\n'),
      graphData: null
    },
    {
      explanation: 'Complete the multiplication.',
      workingOut: '\\(\\text{Area} = 157.5\\text{ m}^2\\)',
      graphData: null
    }
  ];

  const q10fFullText = baseText + "f) What is the area of the patio (in square metres)?";
  const q10fOpts = [
    { text: '\\(105\\text{ m}^2\\)', imageUrl: '' },
    { text: '\\(52.5\\text{ m}^2\\)', imageUrl: '' },
    { text: '\\(157.5\\text{ m}^2\\)', imageUrl: '' }, // Correct
    { text: '\\(17.5\\text{ m}^2\\)', imageUrl: '' }
  ];

  await db.collection('questions').doc('y8-15a-q10f').update({
    type: 'multiple_choice',
    question: q10fFullText,
    options: q10fOpts,
    answer: '2',
    solutionSteps: q10fSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent subQuestions array
  const parentRef = db.collection('questions').doc('y8-15a-q10');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();
  if (parentData && parentData.subQuestions) {
    const newSubQs = parentData.subQuestions.map(sq => {
      if (sq.id === 'y8-15a-q10c') return { ...sq, question: q10cFullText, type: 'multiple_choice', options: q10cOpts, answer: '1', solutionSteps: q10cSteps };
      if (sq.id === 'y8-15a-q10d') return { ...sq, question: q10dFullText, type: 'multiple_choice', options: q10dOpts, answer: '0', solutionSteps: q10dSteps };
      if (sq.id === 'y8-15a-q10e') return { ...sq, question: q10eFullText, type: 'multiple_choice', options: q10eOpts, answer: '3', solutionSteps: q10eSteps };
      if (sq.id === 'y8-15a-q10f') return { ...sq, question: q10fFullText, type: 'multiple_choice', options: q10fOpts, answer: '2', solutionSteps: q10fSteps };
      return sq;
    });
    await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated y8-15a-q10c, d, e, f");
  process.exit(0);
}

run().catch(console.error);
