const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [];

  // --- q2j-alpha ---
  updates.push({
    id: 'y10-8a-q2j-alpha',
    svg: `<svg viewBox="0 20 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="none" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="100" x2="31" y2="60" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="100" x2="169" y2="60" stroke="#000" stroke-width="1"/>
  <line x1="31" y1="60" x2="169" y2="60" stroke="#000" stroke-width="1"/>
  <line x1="31" y1="60" x2="49" y2="161" stroke="#000" stroke-width="1"/>
  <line x1="169" y1="60" x2="49" y2="161" stroke="#000" stroke-width="1"/>
  <line x1="49" y1="161" x2="10" y2="161" stroke="#000" stroke-width="1"/>
  <polyline points="95,56 100,60 95,64" fill="none" stroke="#000" stroke-width="1"/>
  <polyline points="25,157 30,161 25,165" fill="none" stroke="#000" stroke-width="1"/>
  <circle cx="100" cy="100" r="1.5" fill="#000"/>
  <circle cx="31" cy="60" r="1.5" fill="#000"/>
  <circle cx="169" cy="60" r="1.5" fill="#000"/>
  <circle cx="49" cy="161" r="1.5" fill="#000"/>
  <text x="95" y="115" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">O</text>
  <text x="25" y="50" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">A</text>
  <text x="165" y="50" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">B</text>
  <text x="55" y="170" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">C</text>
  <text x="5" y="155" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">D</text>
  <text x="85" y="75" font-family="serif" font-size="12" fill="#000">120°</text>
  <text x="25" y="150" font-family="serif" font-size="12" fill="#000">80°</text>
  <text x="55" y="140" font-family="serif" font-size="12" fill="#000">α</text>
</svg>`,
    steps: [
      {
        explanation: "Identify the relationship between the angle at the center and the angle at the circumference.",
        workingOut: "The angle subtended by an arc at the center is double the angle subtended by it at any remaining part of the circle."
      },
      {
        explanation: "Apply the theorem to the given angles.",
        workingOut: "Here, the angle at the center is \\(\\angle AOB = 120^\\circ\\), and the angle at the circumference subtended by the same arc \\(AB\\) is \\(\\angle ACB\\) (which is \\(\\alpha\\))."
      },
      {
        explanation: "Calculate \\(\\alpha\\).",
        workingOut: "Therefore, \\(\\alpha = \\angle AOB \\div 2 = 120^\\circ \\div 2 = 60^\\circ\\). Note: The other information (\\(CD \\parallel AB\\), \\(\\angle ACD = 80^\\circ\\)) is extra information not needed to find \\(\\alpha\\)."
      }
    ]
  });

  // --- q2k-alpha ---
  updates.push({
    id: 'y10-8a-q2k-alpha',
    svg: `<svg viewBox="30 10 140 190" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="50,180 118,180 138,126 78,22" fill="none" stroke="#000" stroke-width="1"/>
  <circle cx="50" cy="180" r="1.5" fill="#000"/>
  <circle cx="118" cy="180" r="1.5" fill="#000"/>
  <circle cx="138" cy="126" r="1.5" fill="#000"/>
  <circle cx="78" cy="22" r="1.5" fill="#000"/>
  <text x="35" y="195" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">A</text>
  <text x="125" y="195" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">B</text>
  <text x="145" y="125" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">C</text>
  <text x="75" y="15" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">D</text>
  <text x="55" y="170" font-family="serif" font-size="12" fill="#000">80°</text>
  <text x="95" y="170" font-family="serif" font-size="12" fill="#000">110°</text>
  <text x="75" y="45" font-family="serif" font-size="12" fill="#000">40°</text>
  <text x="115" y="125" font-family="serif" font-size="12" fill="#000">α</text>
</svg>`,
    steps: [
      {
        explanation: "Use the sum of interior angles of a quadrilateral.",
        workingOut: "The sum of the interior angles of any quadrilateral is always \\(360^\\circ\\)."
      },
      {
        explanation: "Set up the equation.",
        workingOut: "Therefore, \\(\\angle A + \\angle B + \\angle C + \\angle D = 360^\\circ\\). Substituting the given values, we have \\(80^\\circ + 110^\\circ + \\alpha + 40^\\circ = 360^\\circ\\)."
      },
      {
        explanation: "Solve for \\(\\alpha\\).",
        workingOut: "Simplifying the left side gives \\(230^\\circ + \\alpha = 360^\\circ\\). Subtracting \\(230^\\circ\\) from both sides gives \\(\\alpha = 360^\\circ - 230^\\circ = 130^\\circ\\)."
      }
    ]
  });

  // --- q2l-alpha ---
  updates.push({
    id: 'y10-8a-q2l-alpha',
    svg: `<svg viewBox="10 10 180 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 176,75 147,165 53,165 24,75" fill="none" stroke="#000" stroke-width="1"/>
  <line x1="135" y1="44" x2="141" y2="51" stroke="#000" stroke-width="1"/>
  <line x1="165" y1="123" x2="158" y2="117" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="161" x2="100" y2="169" stroke="#000" stroke-width="1"/>
  <line x1="35" y1="123" x2="42" y2="117" stroke="#000" stroke-width="1"/>
  <line x1="65" y1="44" x2="59" y2="51" stroke="#000" stroke-width="1"/>
  <text x="63" y="153" font-family="serif" font-size="12" fill="#000">α</text>
</svg>`,
    steps: [
      {
        explanation: "Use the formula for the sum of interior angles.",
        workingOut: "The sum of interior angles of an \\(n\\)-sided polygon is given by the formula \\((n-2) \\times 180^\\circ\\)."
      },
      {
        explanation: "Calculate the sum for a pentagon.",
        workingOut: "For a pentagon, \\(n = 5\\). So the total sum is \\((5-2) \\times 180^\\circ = 3 \\times 180^\\circ = 540^\\circ\\)."
      },
      {
        explanation: "Calculate the single interior angle \\(\\alpha\\).",
        workingOut: "Since it is a regular pentagon, all 5 interior angles are equal. So a single interior angle is \\(\\alpha = 540^\\circ \\div 5 = 108^\\circ\\)."
      }
    ]
  });

  // --- q2m-alpha ---
  updates.push({
    id: 'y10-8a-q2m-alpha',
    svg: `<svg viewBox="30 60 230 110" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
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
  <text x="95" y="100" font-family="serif" font-size="12" fill="#000">α</text>
</svg>`,
    steps: [
      {
        explanation: "Use the properties of a parallelogram.",
        workingOut: "In a parallelogram, consecutive angles (angles next to each other along the same side) are supplementary, meaning they add up to \\(180^\\circ\\)."
      },
      {
        explanation: "Set up the equation.",
        workingOut: "Therefore, \\(\\angle A + \\angle D = 180^\\circ\\). Substituting the given angle, we have \\(60^\\circ + \\alpha = 180^\\circ\\)."
      },
      {
        explanation: "Solve for \\(\\alpha\\).",
        workingOut: "Subtracting \\(60^\\circ\\) from both sides gives \\(\\alpha = 180^\\circ - 60^\\circ = 120^\\circ\\)."
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
    
    const parentId = update.id.substring(0, update.id.lastIndexOf('-'));
    parentSnapMap[parentId] = true;
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
