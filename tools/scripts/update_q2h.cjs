const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const SVG_BASE = `<svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Circle -->
  <circle cx="100" cy="100" r="80" fill="none" stroke="#000" stroke-width="1"/>
  
  <!-- Radii -->
  <line x1="100" y1="100" x2="180" y2="100" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="100" x2="140" y2="31" stroke="#000" stroke-width="1"/>
  <line x1="100" y1="100" x2="49" y2="161" stroke="#000" stroke-width="1"/>
  
  <!-- Chords -->
  <line x1="180" y1="100" x2="140" y2="31" stroke="#000" stroke-width="1"/>
  <line x1="180" y1="100" x2="49" y2="161" stroke="#000" stroke-width="1"/>

  <!-- Tick marks for radii (OA, OB, OC are all equal) -->
  <line x1="140" y1="95" x2="140" y2="105" stroke="#000" stroke-width="1"/>
  <line x1="116" y1="63" x2="124" y2="68" stroke="#000" stroke-width="1"/>
  <line x1="71" y1="127" x2="78" y2="134" stroke="#000" stroke-width="1"/>

  <!-- Points -->
  <circle cx="100" cy="100" r="1.5" fill="#000"/>
  <circle cx="180" cy="100" r="1.5" fill="#000"/>
  <circle cx="140" cy="31" r="1.5" fill="#000"/>
  <circle cx="49" cy="161" r="1.5" fill="#000"/>

  <!-- Labels -->
  <text x="85" y="105" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">O</text>
  <text x="188" y="105" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">B</text>
  <text x="145" y="25" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">C</text>
  <text x="35" y="175" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">A</text>

  <!-- Given angles -->
  <text x="95" y="125" font-family="serif" font-size="12" fill="#000">130°</text>
  <text x="110" y="85" font-family="serif" font-size="12" fill="#000">60°</text>`;

  const SVG_ALPHA = SVG_BASE + `\n  <text x="155" y="90" font-family="serif" font-size="12" fill="#000">α</text>\n</svg>`;
  const SVG_BETA = SVG_BASE + `\n  <text x="148" y="115" font-family="serif" font-size="12" fill="#000">β</text>\n</svg>`;

  const alphaSteps = [
    {
      explanation: "Identify the properties of triangle \\(OBC\\).",
      workingOut: "Points \\(B\\) and \\(C\\) lie on the circle with center \\(O\\). Therefore, \\(OB\\) and \\(OC\\) are radii of the same circle, which means \\(OB = OC\\). This makes triangle \\(OBC\\) an isosceles triangle."
    },
    {
      explanation: "Use the properties of an isosceles triangle to find \\(\\alpha\\).",
      workingOut: "In an isosceles triangle, the angles opposite the equal sides are equal. Therefore, \\(\\angle OBC = \\angle OCB\\), which is \\(\\alpha\\). The sum of angles in a triangle is always \\(180^\\circ\\)."
    },
    {
      explanation: "Calculate \\(\\alpha\\).",
      workingOut: "We are given that \\(\\angle BOC = 60^\\circ\\). So, \\(\\alpha + \\alpha + 60^\\circ = 180^\\circ\\). This gives \\(2\\alpha = 120^\\circ\\), and dividing by 2 yields \\(\\alpha = 60^\\circ\\)."
    }
  ];

  const betaSteps = [
    {
      explanation: "Identify the properties of triangle \\(OAB\\).",
      workingOut: "Points \\(A\\) and \\(B\\) lie on the circle with center \\(O\\). Therefore, \\(OA\\) and \\(OB\\) are radii of the same circle, which means \\(OA = OB\\). This makes triangle \\(OAB\\) an isosceles triangle."
    },
    {
      explanation: "Use the properties of an isosceles triangle to find \\(\\beta\\).",
      workingOut: "In an isosceles triangle, the angles opposite the equal sides are equal. Therefore, \\(\\angle OBA = \\angle OAB\\), which is \\(\\beta\\). The sum of angles in a triangle is always \\(180^\\circ\\)."
    },
    {
      explanation: "Calculate \\(\\beta\\).",
      workingOut: "We are given that \\(\\angle AOB = 130^\\circ\\). So, \\(\\beta + \\beta + 130^\\circ = 180^\\circ\\). This gives \\(2\\beta = 50^\\circ\\), and dividing by 2 yields \\(\\beta = 25^\\circ\\)."
    }
  ];

  await db.collection('questions').doc('y10-8a-q2h-alpha').update({
    graphData: { svg: SVG_ALPHA },
    solutionSteps: alphaSteps,
    explanation: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8a-q2h-alpha');

  await db.collection('questions').doc('y10-8a-q2h-beta').update({
    graphData: { svg: SVG_BETA },
    solutionSteps: betaSteps,
    explanation: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8a-q2h-beta');

  // Update parent doc's subQuestions to embed SVG and new solutionSteps
  const parentSnap = await db.collection('questions').doc('y10-8a-q2h').get();
  if (parentSnap.exists && parentSnap.data().subQuestions) {
    const newSubQs = parentSnap.data().subQuestions.map(sq => {
      if (sq.id === 'y10-8a-q2h-alpha') {
        return { ...sq, graphData: { svg: SVG_ALPHA }, solutionSteps: alphaSteps, explanation: null };
      }
      if (sq.id === 'y10-8a-q2h-beta') {
        return { ...sq, graphData: { svg: SVG_BETA }, solutionSteps: betaSteps, explanation: null };
      }
      return sq;
    });
    // Remove null explanations
    newSubQs.forEach(sq => { if (sq.explanation === null) delete sq.explanation; });

    await parentSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    console.log('Updated parent y10-8a-q2h');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
