const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = {
    'y10-8a-q1a-x': {
      options: [
        { text: '\\(8\\)', imageUrl: '' },
        { text: '\\(10\\)', imageUrl: '' },
        { text: '\\(14\\)', imageUrl: '' },
        { text: '\\(100\\)', imageUrl: '' }
      ],
      answer: "1",
      graphData: {
        svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,130 160,130 40,40" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <rect x="40" y="120" width="10" height="10" fill="none" stroke="#4f46e5" stroke-width="1"/>
  <text x="90" y="145" font-family="sans-serif" font-size="14" fill="#333">8 cm</text>
  <text x="5" y="85" font-family="sans-serif" font-size="14" fill="#333">6 cm</text>
  <text x="110" y="80" font-family="sans-serif" font-size="14" fill="#dc2626">x</text>
</svg>`
      },
      solutionSteps: [
        { explanation: "Identify the type of triangle and the sides given.", workingOut: "We have a right-angled triangle with two shorter sides (legs) of length \\(6\\) cm and \\(8\\) cm. We need to find the hypotenuse \\(x\\)." },
        { explanation: "Apply Pythagoras' theorem.", workingOut: "Pythagoras' theorem states that for a right-angled triangle, \\(a^2 + b^2 = c^2\\), where \\(c\\) is the hypotenuse. So, \\(x^2 = 6^2 + 8^2\\)." },
        { explanation: "Calculate the squares of the shorter sides.", workingOut: "\\(x^2 = 36 + 64\\)\n\\(x^2 = 100\\)" },
        { explanation: "Solve for \\(x\\) by taking the square root.", workingOut: "\\(x = \\sqrt{100}\\)\n\\(x = 10\\). The hypotenuse is \\(10\\) cm." }
      ]
    },
    'y10-8a-q2a': {
      options: [
        { text: '\\(70\\)', imageUrl: '' },
        { text: '\\(40\\)', imageUrl: '' },
        { text: '\\(100\\)', imageUrl: '' },
        { text: '\\(140\\)', imageUrl: '' }
      ],
      answer: "0",
      graphData: {
        svg: `<svg viewBox="0 0 200 150" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 40,130 160,130" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <text x="95" y="15" font-family="sans-serif" font-size="14" fill="#333">A</text>
  <text x="25" y="140" font-family="sans-serif" font-size="14" fill="#333">B</text>
  <text x="165" y="140" font-family="sans-serif" font-size="14" fill="#333">C</text>
  <line x1="60" y1="75" x2="70" y2="70" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="65" y1="80" x2="75" y2="75" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="130" y1="70" x2="140" y2="75" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="125" y1="75" x2="135" y2="80" stroke="#4f46e5" stroke-width="1.5"/>
  <path d="M 85 47 A 30 30 0 0 0 115 47" fill="none" stroke="#4f46e5" stroke-width="1"/>
  <text x="90" y="65" font-family="sans-serif" font-size="12" fill="#333">40°</text>
  <path d="M 60 130 A 20 20 0 0 0 52 108" fill="none" stroke="#dc2626" stroke-width="1"/>
  <text x="65" y="125" font-family="sans-serif" font-size="12" fill="#dc2626">?</text>
</svg>`
      },
      solutionSteps: [
        { explanation: "Use the properties of an isosceles triangle.", workingOut: "Because \\(AB = AC\\), the triangle is isosceles. Therefore, the base angles are equal: \\(\\angle B = \\angle C\\)." },
        { explanation: "Set up an equation using the angle sum of a triangle.", workingOut: "The sum of the angles in any triangle is \\(180^\\circ\\). So, \\(\\angle A + \\angle B + \\angle C = 180^\\circ\\)." },
        { explanation: "Substitute the known values.", workingOut: "Substitute \\(\\angle A = 40^\\circ\\) and replace \\(\\angle C\\) with \\(\\angle B\\): \n\\(40^\\circ + \\angle B + \\angle B = 180^\\circ\\)\n\\(40^\\circ + 2\\angle B = 180^\\circ\\)." },
        { explanation: "Solve for \\(\\angle B\\).", workingOut: "\\(2\\angle B = 180^\\circ - 40^\\circ = 140^\\circ\\)\n\\(\\angle B = 140^\\circ \\div 2 = 70^\\circ\\). The angle at \\(B\\) is \\(70^\\circ\\)." }
      ]
    },
    'y10-8a-q2b-theta': {
      options: [
        { text: '\\(40\\)', imageUrl: '' },
        { text: '\\(50\\)', imageUrl: '' },
        { text: '\\(80\\)', imageUrl: '' },
        { text: '\\(100\\)', imageUrl: '' }
      ],
      answer: "0",
      graphData: {
        svg: `<svg viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,130 140,40 200,130" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <line x1="40" y1="130" x2="180" y2="4" stroke="#999" stroke-width="1.5" stroke-dasharray="4"/>
  <text x="25" y="140" font-family="sans-serif" font-size="14" fill="#333">W</text>
  <text x="120" y="30" font-family="sans-serif" font-size="14" fill="#333">X</text>
  <text x="205" y="140" font-family="sans-serif" font-size="14" fill="#333">Y</text>
  <path d="M 140 40 A 25 25 0 0 0 162 20" fill="none" stroke="#333" stroke-width="1"/>
  <text x="165" y="30" font-family="sans-serif" font-size="12" fill="#333">80°</text>
  <line x1="80" y1="90" x2="95" y2="80" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="85" y1="95" x2="100" y2="85" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="175" y1="90" x2="160" y2="85" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="170" y1="95" x2="155" y2="90" stroke="#4f46e5" stroke-width="1.5"/>
  <path d="M 60 130 A 20 20 0 0 0 55 116" fill="none" stroke="#dc2626" stroke-width="1"/>
  <text x="65" y="125" font-family="sans-serif" font-size="14" fill="#dc2626">θ</text>
</svg>`
      },
      solutionSteps: [
        { explanation: "Use the Exterior Angle Theorem.", workingOut: "The exterior angle of a triangle is equal to the sum of the two opposite interior angles. Here, the exterior angle at \\(X\\) (\\(80^\\circ\\)) equals \\(\\angle W + \\angle Y\\)." },
        { explanation: "Use the properties of an isosceles triangle.", workingOut: "Because \\(WX = XY\\), the triangle is isosceles and its base angles are equal. Therefore, \\(\\angle W = \\angle Y = \\theta\\)." },
        { explanation: "Set up the equation.", workingOut: "Substitute \\(\\theta\\) into our first equation: \n\\(80^\\circ = \\theta + \\theta\\)\n\\(80^\\circ = 2\\theta\\)." },
        { explanation: "Solve for \\(\\theta\\).", workingOut: "\\(\\theta = 80^\\circ \\div 2 = 40^\\circ\\). So, \\(\\theta = 40\\)." }
      ]
    },
    'y10-8a-q2c-theta': {
      options: [
        { text: '\\(60\\)', imageUrl: '' },
        { text: '\\(30\\)', imageUrl: '' },
        { text: '\\(120\\)', imageUrl: '' },
        { text: '\\(90\\)', imageUrl: '' }
      ],
      answer: "0",
      graphData: {
        svg: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 20,150 180,150" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <text x="95" y="15" font-family="sans-serif" font-size="14" fill="#333">P</text>
  <text x="5" y="160" font-family="sans-serif" font-size="14" fill="#333">Q</text>
  <text x="185" y="160" font-family="sans-serif" font-size="14" fill="#333">R</text>
  <line x1="55" y1="90" x2="70" y2="85" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="60" y1="95" x2="75" y2="90" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="100" y1="145" x2="100" y2="155" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="105" y1="145" x2="105" y2="155" stroke="#4f46e5" stroke-width="1.5"/>
  <text x="90" y="170" font-family="sans-serif" font-size="14" fill="#333">7 cm</text>
  <path d="M 40 150 A 20 20 0 0 0 32 130" fill="none" stroke="#333" stroke-width="1"/>
  <text x="45" y="145" font-family="sans-serif" font-size="12" fill="#333">60°</text>
  <path d="M 85 45 A 30 30 0 0 0 115 45" fill="none" stroke="#dc2626" stroke-width="1"/>
  <text x="92" y="65" font-family="sans-serif" font-size="14" fill="#dc2626">θ</text>
</svg>`
      },
      solutionSteps: [
        { explanation: "Use the properties of an isosceles triangle.", workingOut: "Since \\(PQ = QR\\), the triangle is isosceles. Therefore, the angles opposite to these sides are equal: \\(\\angle P = \\angle R\\). Let both be \\(\\theta\\)." },
        { explanation: "Set up an equation using the angle sum.", workingOut: "The sum of angles in a triangle is \\(180^\\circ\\). So, \\(\\angle P + \\angle R + \\angle Q = 180^\\circ\\)." },
        { explanation: "Substitute the known values.", workingOut: "\\(\\theta + \\theta + 60^\\circ = 180^\\circ\\)\n\\(2\\theta + 60^\\circ = 180^\\circ\\)." },
        { explanation: "Solve for \\(\\theta\\).", workingOut: "\\(2\\theta = 120^\\circ\\)\n\\(\\theta = 60^\\circ\\). So \\(\\theta = 60\\)." }
      ]
    },
    'y10-8a-q2c-y': {
      options: [
        { text: '\\(7\\)', imageUrl: '' },
        { text: '\\(6\\)', imageUrl: '' },
        { text: '\\(14\\)', imageUrl: '' },
        { text: '\\(60\\)', imageUrl: '' }
      ],
      answer: "0",
      graphData: {
        svg: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 20,150 180,150" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <text x="95" y="15" font-family="sans-serif" font-size="14" fill="#333">P</text>
  <text x="5" y="160" font-family="sans-serif" font-size="14" fill="#333">Q</text>
  <text x="185" y="160" font-family="sans-serif" font-size="14" fill="#333">R</text>
  <line x1="55" y1="90" x2="70" y2="85" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="60" y1="95" x2="75" y2="90" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="100" y1="145" x2="100" y2="155" stroke="#4f46e5" stroke-width="1.5"/>
  <line x1="105" y1="145" x2="105" y2="155" stroke="#4f46e5" stroke-width="1.5"/>
  <text x="90" y="170" font-family="sans-serif" font-size="14" fill="#333">7 cm</text>
  <path d="M 40 150 A 20 20 0 0 0 32 130" fill="none" stroke="#333" stroke-width="1"/>
  <text x="45" y="145" font-family="sans-serif" font-size="12" fill="#333">60°</text>
  <text x="150" y="80" font-family="sans-serif" font-size="14" fill="#dc2626">y</text>
</svg>`
      },
      solutionSteps: [
        { explanation: "Determine all angles in the triangle.", workingOut: "From the previous calculations, since \\(PQ = QR\\) and \\(\\angle Q = 60^\\circ\\), we found that \\(\\angle P = \\angle R = 60^\\circ\\)." },
        { explanation: "Identify the type of triangle.", workingOut: "Because all three angles are \\(60^\\circ\\), triangle \\(PQR\\) is an equilateral triangle." },
        { explanation: "Use equilateral triangle properties.", workingOut: "In an equilateral triangle, all three sides are equal in length. Therefore, \\(PR = PQ = QR\\)." },
        { explanation: "Find the value of \\(y\\).", workingOut: "Since \\(QR = 7\\) cm, the side \\(y\\) (which is \\(PR\\)) must also be \\(7\\) cm. So, \\(y = 7\\)." }
      ]
    }
  };

  const parentSet = new Set();
  for (const [id, updateData] of Object.entries(updates)) {
    const docRef = db.collection('questions').doc(id);
    await docRef.update({
      ...updateData,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log(`Updated ${id}`);
    parentSet.add(id.replace(/[a-z]$/, ''));
    // wait some ids end with `-x`, `-y`, `-theta`.
    // We should parse the parent ID correctly
    let parentId = id;
    if (id.includes('-')) {
       let parts = id.split('-');
       if (parts.length > 3) {
          parentId = parts.slice(0, 3).join('-');
       } else {
          parentId = id.replace(/[a-z]$/, '');
       }
    }
    parentSet.add(parentId);
  }

  // Update parents
  for (const parentId of parentSet) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = await Promise.all(pSnap.data().subQuestions.map(async sq => {
        const cSnap = await db.collection('questions').doc(sq.id).get();
        return cSnap.exists ? { ...sq, options: cSnap.data().options, answer: cSnap.data().answer, solutionSteps: cSnap.data().solutionSteps, graphData: cSnap.data().graphData } : sq;
      }));
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    }
  }

  console.log('Finished updating questions');
  process.exit(0);
}

run().catch(console.error);
