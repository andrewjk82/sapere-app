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
        { text: '\\(12\\)', imageUrl: '' },
        { text: '\\(24\\)', imageUrl: '' },
        { text: '\\(6\\)', imageUrl: '' },
        { text: '\\(12\\sqrt{2}\\)', imageUrl: '' }
      ],
      answer: "0",
      graphData: {
        svg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,30 40,140 150,140" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <rect x="40" y="130" width="10" height="10" fill="none" stroke="#4f46e5" stroke-width="1.5"/>
  <text x="35" y="20" font-family="sans-serif" font-size="16" fill="#333">A</text>
  <text x="25" y="145" font-family="sans-serif" font-size="16" fill="#333">B</text>
  <text x="155" y="145" font-family="sans-serif" font-size="16" fill="#333">C</text>
  <text x="85" y="160" font-family="sans-serif" font-size="16" fill="#333">12</text>
  <text x="20" y="90" font-family="sans-serif" font-size="16" fill="#dc2626">x</text>
  <path d="M 40 50 A 20 20 0 0 0 58 48" fill="none" stroke="#333" stroke-width="1.5"/>
  <text x="45" y="65" font-family="sans-serif" font-size="14" fill="#333">45°</text>
</svg>`
      },
      solutionSteps: [
        { explanation: "Identify the properties of the right-angled triangle.", workingOut: "In triangle \\(ABC\\), the angle at \\(B\\) is \\(90^\\circ\\) and angle \\(A = 45^\\circ\\)." },
        { explanation: "Use the sum of angles in a triangle to find the third angle.", workingOut: "The sum of angles in a triangle is \\(180^\\circ\\). So, \\(\\angle C = 180^\\circ - 90^\\circ - 45^\\circ = 45^\\circ\\)." },
        { explanation: "Recognize the type of triangle.", workingOut: "Since \\(\\angle A = \\angle C = 45^\\circ\\), the triangle is an isosceles right-angled triangle. This means the two shorter sides (legs) are equal in length." },
        { explanation: "Find \\(x\\).", workingOut: "Therefore, side \\(AB\\) is equal to side \\(BC\\). Since \\(BC = 12\\), \\(x = 12\\)." }
      ]
    },
    'y10-8a-q2a': {
      options: [
        { text: '\\(60, 60, 60\\)', imageUrl: '' },
        { text: '\\(45, 45, 90\\)', imageUrl: '' },
        { text: '\\(30, 60, 90\\)', imageUrl: '' },
        { text: '\\(50, 60, 70\\)', imageUrl: '' }
      ],
      answer: "0",
      graphData: {
        svg: `<svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 30,140 170,140" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <text x="95" y="15" font-family="sans-serif" font-size="16" fill="#333">R</text>
  <text x="15" y="145" font-family="sans-serif" font-size="16" fill="#333">S</text>
  <text x="175" y="145" font-family="sans-serif" font-size="16" fill="#333">T</text>
  <line x1="60" y1="85" x2="70" y2="75" stroke="#4f46e5" stroke-width="2"/>
  <line x1="130" y1="75" x2="140" y2="85" stroke="#4f46e5" stroke-width="2"/>
  <line x1="100" y1="135" x2="100" y2="145" stroke="#4f46e5" stroke-width="2"/>
  <path d="M 90 37 A 20 20 0 0 0 110 37" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="95" y="55" font-family="sans-serif" font-size="16" fill="#dc2626">α</text>
  <path d="M 45 140 A 20 20 0 0 0 40 122" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="45" y="132" font-family="sans-serif" font-size="16" fill="#dc2626">β</text>
  <path d="M 155 140 A 20 20 0 0 1 160 122" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="145" y="132" font-family="sans-serif" font-size="16" fill="#dc2626">γ</text>
</svg>`
      },
      solutionSteps: [
        { explanation: "Identify the properties of the given triangle.", workingOut: "We are given that triangle \\(RST\\) is an equilateral triangle." },
        { explanation: "State the angle properties of an equilateral triangle.", workingOut: "In an equilateral triangle, all three sides are equal in length, and consequently, all three interior angles are equal in measure." },
        { explanation: "Use the sum of angles in a triangle.", workingOut: "The sum of the interior angles of any triangle is \\(180^\\circ\\). So, \\(\\alpha + \\beta + \\gamma = 180^\\circ\\)." },
        { explanation: "Calculate the value of each angle.", workingOut: "Since \\(\\alpha = \\beta = \\gamma\\), we have \\(3\\alpha = 180^\\circ\\). Dividing by 3 gives \\(\\alpha = 60^\\circ\\). Therefore, \\(\\alpha = 60\\), \\(\\beta = 60\\), and \\(\\gamma = 60\\)." }
      ]
    },
    'y10-8a-q2b-theta': {
      graphData: {
        svg: `<svg viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
  <polygon points="40,130 140,40 200,130" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <line x1="40" y1="130" x2="180" y2="4" stroke="#999" stroke-width="2" stroke-dasharray="4"/>
  <text x="25" y="140" font-family="sans-serif" font-size="16" fill="#333">W</text>
  <text x="120" y="30" font-family="sans-serif" font-size="16" fill="#333">X</text>
  <text x="205" y="140" font-family="sans-serif" font-size="16" fill="#333">Y</text>
  <path d="M 140 40 A 25 25 0 0 0 162 20" fill="none" stroke="#333" stroke-width="1.5"/>
  <text x="165" y="30" font-family="sans-serif" font-size="14" fill="#333">80°</text>
  <line x1="82" y1="80" x2="92" y2="90" stroke="#4f46e5" stroke-width="2"/>
  <line x1="88" y1="76" x2="98" y2="86" stroke="#4f46e5" stroke-width="2"/>
  <line x1="165" y1="80" x2="175" y2="88" stroke="#4f46e5" stroke-width="2"/>
  <line x1="161" y1="85" x2="171" y2="93" stroke="#4f46e5" stroke-width="2"/>
  <path d="M 60 130 A 20 20 0 0 0 55 116" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="65" y="125" font-family="sans-serif" font-size="16" fill="#dc2626">θ</text>
</svg>`
      }
    },
    'y10-8a-q2c-theta': {
      graphData: {
        svg: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 20,150 180,150" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <text x="95" y="15" font-family="sans-serif" font-size="16" fill="#333">P</text>
  <text x="5" y="160" font-family="sans-serif" font-size="16" fill="#333">Q</text>
  <text x="185" y="160" font-family="sans-serif" font-size="16" fill="#333">R</text>
  <line x1="55" y1="85" x2="65" y2="85" stroke="#4f46e5" stroke-width="2"/>
  <line x1="100" y1="143" x2="100" y2="157" stroke="#4f46e5" stroke-width="2"/>
  <text x="90" y="170" font-family="sans-serif" font-size="16" fill="#333">7 cm</text>
  <path d="M 40 150 A 20 20 0 0 0 32 130" fill="none" stroke="#333" stroke-width="1.5"/>
  <text x="45" y="145" font-family="sans-serif" font-size="14" fill="#333">60°</text>
  <path d="M 85 45 A 30 30 0 0 0 115 45" fill="none" stroke="#dc2626" stroke-width="1.5"/>
  <text x="92" y="65" font-family="sans-serif" font-size="16" fill="#dc2626">θ</text>
</svg>`
      }
    },
    'y10-8a-q2c-y': {
      graphData: {
        svg: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 20,150 180,150" fill="none" stroke="#4f46e5" stroke-width="2"/>
  <text x="95" y="15" font-family="sans-serif" font-size="16" fill="#333">P</text>
  <text x="5" y="160" font-family="sans-serif" font-size="16" fill="#333">Q</text>
  <text x="185" y="160" font-family="sans-serif" font-size="16" fill="#333">R</text>
  <line x1="55" y1="85" x2="65" y2="85" stroke="#4f46e5" stroke-width="2"/>
  <line x1="100" y1="143" x2="100" y2="157" stroke="#4f46e5" stroke-width="2"/>
  <text x="90" y="170" font-family="sans-serif" font-size="16" fill="#333">7 cm</text>
  <path d="M 40 150 A 20 20 0 0 0 32 130" fill="none" stroke="#333" stroke-width="1.5"/>
  <text x="45" y="145" font-family="sans-serif" font-size="14" fill="#333">60°</text>
  <text x="150" y="80" font-family="sans-serif" font-size="16" fill="#dc2626">y</text>
</svg>`
      }
    }
  };

  const parentSet = new Set();
  for (const [id, updateData] of Object.entries(updates)) {
    const docRef = db.collection('questions').doc(id);
    await docRef.update({
      ...updateData,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log(`Fixed ${id}`);
    
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

  console.log('Finished fixing questions');
  process.exit(0);
}

run().catch(console.error);
