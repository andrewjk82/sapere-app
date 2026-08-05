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

  const question = `This diagram is the ground floor plan of a house drawn to a scale of \\(1\\text{ cm}\\) to represent \\(3\\text{ m}\\).

The measured dimensions on the paper are:
- Total length of the house: \\(10\\text{ cm}\\), Total width: \\(7\\text{ cm}\\)
- Family room: \\(5\\text{ cm} \\times 3.5\\text{ cm}\\)
- Kitchen: \\(3.5\\text{ cm} \\times 3\\text{ cm}\\)
- Hall: \\(1.5\\text{ cm} \\times 3.5\\text{ cm}\\)
- Lounge: width \\(5\\text{ cm}\\) at its widest point
- Patio: \\(5\\text{ cm} \\times 3.5\\text{ cm}\\)

${svg}

a) What is the length of the house (in metres)?`;

  const solutionSteps = [
    {
      explanation: 'Identify the scale. Every 1 cm on the plan represents 3 m in real life.',
      workingOut: '\\(\\text{Scale: } 1\\text{ cm} = 3\\text{ m}\\)',
      graphData: null
    },
    {
      explanation: 'Find the length of the house on the plan. The total length is 10 cm.',
      workingOut: '\\(\\text{Length on plan} = 10\\text{ cm}\\)',
      graphData: null
    },
    {
      explanation: 'Multiply the plan length by the scale factor to get the real-life length.',
      workingOut: [
        '\\(\\text{Real length} = 10 \\times 3\\)',
        '\\(\\text{Real length} = 30\\text{ m}\\)'
      ].join('\n'),
      graphData: null
    }
  ];

  await db.collection('questions').doc('y8-15a-q10a').update({
    question: question,
    solutionSteps: solutionSteps,
    updatedAt: FieldValue.serverTimestamp()
  });

  // Update parent subQuestions array
  const parentRef = db.collection('questions').doc('y8-15a-q10');
  const parentSnap = await parentRef.get();
  const parentData = parentSnap.data();
  if (parentData && parentData.subQuestions) {
    const newSubQs = parentData.subQuestions.map(sq => {
      if (sq.id === 'y8-15a-q10a') return { ...sq, question, solutionSteps };
      return sq;
    });
    await parentRef.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
  }

  console.log("Updated y8-15a-q10a: SVG centred, question text below");
  process.exit(0);
}

run().catch(console.error);
