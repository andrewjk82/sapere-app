const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [];

  // --- q2m-beta ---
  updates.push({
    id: 'y10-8a-q2m-beta',
    svg: `<svg viewBox="-50 0 390 230" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,150 200,150 240,81 90,81" fill="none" stroke="#000" stroke-width="1"/>
  <polyline points="120,146 125,150 120,154" fill="none" stroke="#000" stroke-width="1"/>
  <polyline points="160,77 165,81 160,85" fill="none" stroke="#000" stroke-width="1"/>
  <polyline points="66,119 70,115 66,111" fill="none" stroke="#000" stroke-width="1"/>
  <polyline points="71,119 75,115 71,111" fill="none" stroke="#000" stroke-width="1"/>
  <polyline points="216,119 220,115 216,111" fill="none" stroke="#000" stroke-width="1"/>
  <polyline points="221,119 225,115 221,111" fill="none" stroke="#000" stroke-width="1"/>
  <circle cx="50" cy="150" r="1.5" fill="#000"/>
  <circle cx="200" cy="150" r="1.5" fill="#000"/>
  <circle cx="240" cy="81" r="1.5" fill="#000"/>
  <circle cx="90" cy="81" r="1.5" fill="#000"/>
  <text x="35" y="160" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">A</text>
  <text x="210" y="160" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">B</text>
  <text x="250" y="80" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">C</text>
  <text x="75" y="80" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">D</text>
  <text x="65" y="145" font-family="serif" font-size="12" fill="#000">60°</text>
  <text x="215" y="100" font-family="serif" font-size="12" fill="#000">β</text>
</svg>`,
    steps: [
      {
        explanation: "Use the properties of a parallelogram.",
        workingOut: "In a parallelogram, opposite angles (angles diagonally across from each other) are equal."
      },
      {
        explanation: "Identify the corresponding angle.",
        workingOut: "We are given that \\(\\angle A = 60^\\circ\\). The angle opposite to \\(\\angle A\\) is \\(\\angle C\\)."
      },
      {
        explanation: "Calculate \\(\\beta\\).",
        workingOut: "Therefore, \\(\\beta = \\angle C = \\angle A = 60^\\circ\\)."
      }
    ]
  });

  // --- q3 ---
  updates.push({
    id: 'y10-8a-q3',
    svg: `<svg viewBox="-20 20 260 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="155,123 155,77 123,45 77,45 45,77 45,123 77,155 123,155" fill="none" stroke="#000" stroke-width="1"/>
  <!-- Extended line -->
  <line x1="123" y1="155" x2="165" y2="155" stroke="#000" stroke-width="1" stroke-dasharray="4"/>
  <!-- Exterior angle text -->
  <text x="135" y="148" font-family="serif" font-size="12" fill="#000">45°</text>
</svg>`,
    steps: [
      {
        explanation: "Use the formula for the sum of exterior angles.",
        workingOut: "For any polygon, the sum of all its exterior angles is always \\(360^\\circ\\)."
      },
      {
        explanation: "Set up the equation for a regular polygon.",
        workingOut: "In a regular polygon with \\(n\\) sides, all \\(n\\) exterior angles are equal. So, the size of one exterior angle is \\(360^\\circ \\div n\\)."
      },
      {
        explanation: "Solve for the number of sides \\(n\\).",
        workingOut: "We are given that each exterior angle is \\(45^\\circ\\). Setting up the equation: \\(360^\\circ \\div n = 45^\\circ\\). Multiplying both sides by \\(n\\) gives \\(360^\\circ = 45^\\circ \\times n\\)."
      },
      {
        explanation: "Calculate \\(n\\).",
        workingOut: "Dividing by \\(45^\\circ\\) gives \\(n = 360^\\circ \\div 45^\\circ = 8\\). The polygon has 8 sides (an octagon)."
      }
    ]
  });

  // --- q4 ---
  updates.push({
    id: 'y10-8a-q4',
    svg: `<svg viewBox="-40 10 280 120" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,100 182,100 140,58 101,47 62,58" fill="none" stroke="#000" stroke-width="1"/>
  <circle cx="20" cy="100" r="1.5" fill="#000"/>
  <circle cx="182" cy="100" r="1.5" fill="#000"/>
  <circle cx="140" cy="58" r="1.5" fill="#000"/>
  <circle cx="101" cy="47" r="1.5" fill="#000"/>
  <circle cx="62" cy="58" r="1.5" fill="#000"/>
  
  <text x="50" y="75" font-family="serif" font-size="12" fill="#000">150°</text>
  <text x="85" y="65" font-family="serif" font-size="12" fill="#000">150°</text>
  <text x="120" y="75" font-family="serif" font-size="12" fill="#000">150°</text>
  <text x="35" y="95" font-family="serif" font-size="12" fill="#000">x</text>
  <text x="160" y="95" font-family="serif" font-size="12" fill="#000">x</text>
</svg>`,
    steps: [
      {
        explanation: "Calculate the sum of interior angles of a pentagon.",
        workingOut: "A pentagon has 5 sides (\\(n = 5\\)). The sum of its interior angles is given by the formula \\((n - 2) \\times 180^\\circ = (5 - 2) \\times 180^\\circ = 3 \\times 180^\\circ = 540^\\circ\\)."
      },
      {
        explanation: "Calculate the sum of the known angles.",
        workingOut: "We are given three angles that are \\(150^\\circ\\) each. Their sum is \\(3 \\times 150^\\circ = 450^\\circ\\)."
      },
      {
        explanation: "Find the sum of the remaining two angles.",
        workingOut: "Subtract the known sum from the total sum: \\(540^\\circ - 450^\\circ = 90^\\circ\\). The two remaining angles (marked as \\(x\\)) add up to \\(90^\\circ\\)."
      },
      {
        explanation: "Calculate the size of each remaining angle.",
        workingOut: "Since the remaining two angles are equal, divide their sum by 2: \\(90^\\circ \\div 2 = 45^\\circ\\). Each of the remaining angles is \\(45^\\circ\\)."
      }
    ]
  });

  const parentSnapMap = {};

  for (const update of updates) {
    await db.collection('questions').doc(update.id).update({
      graphData: { svg: update.svg },
      solutionSteps: update.steps,
      explanation: FieldValue.delete(),
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log('Updated', update.id);
    
    // For q3 and q4 they don't have alpha/beta, so they are their own parents or belong to a general chapter
    // Actually, in previous logs, q3 and q4 didn't seem to be subquestions of a larger question, 
    // but just in case, let's try to update parent if it's formatted like q2m-beta
    if (update.id.includes('-alpha') || update.id.includes('-beta')) {
      const parentId = update.id.substring(0, update.id.lastIndexOf('-'));
      parentSnapMap[parentId] = true;
    } else {
      // It's a top level question like y10-8a-q3
      // Top level questions don't have parents in this structure
    }
  }

  for (const parentId of Object.keys(parentSnapMap)) {
    const pSnap = await db.collection('questions').doc(parentId).get();
    if (pSnap.exists && pSnap.data().subQuestions) {
      const newSubQs = pSnap.data().subQuestions.map(sq => {
        const matchingUpdate = updates.find(u => u.id === sq.id);
        if (matchingUpdate) {
          return { ...sq, graphData: { svg: matchingUpdate.svg }, solutionSteps: matchingUpdate.steps, explanation: null };
        }
        return sq;
      });
      newSubQs.forEach(sq => { if (sq.explanation === null) delete sq.explanation; });
      await pSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
      console.log('Updated parent', parentId);
    }
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
