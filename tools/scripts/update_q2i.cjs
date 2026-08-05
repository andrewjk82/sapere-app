const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const SVG_BASE = `<svg viewBox="40 10 180 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Parallel Lines -->
  <line x1="120" y1="40" x2="200" y2="40" stroke="#000" stroke-width="1"/>
  <line x1="50" y1="150" x2="200" y2="150" stroke="#000" stroke-width="1"/>
  
  <!-- Parallel Markers -->
  <polyline points="165,36 170,40 165,44" fill="none" stroke="#000" stroke-width="1"/>
  <polyline points="165,146 170,150 165,154" fill="none" stroke="#000" stroke-width="1"/>
  
  <!-- Triangle ABC -->
  <line x1="120" y1="40" x2="84" y2="150" stroke="#000" stroke-width="1"/>
  <line x1="120" y1="40" x2="156" y2="150" stroke="#000" stroke-width="1"/>
  
  <!-- Tick marks for AB = AC -->
  <line x1="97" y1="93" x2="107" y2="97" stroke="#000" stroke-width="1"/>
  <line x1="133" y1="97" x2="143" y2="93" stroke="#000" stroke-width="1"/>
  
  <!-- Points -->
  <circle cx="120" cy="40" r="1.5" fill="#000"/>
  <circle cx="84" cy="150" r="1.5" fill="#000"/>
  <circle cx="156" cy="150" r="1.5" fill="#000"/>
  
  <!-- Labels -->
  <text x="115" y="30" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">A</text>
  <text x="75" y="165" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">B</text>
  <text x="156" y="165" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">C</text>
  <text x="195" y="35" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">D</text>

  <!-- Angles -->
  <text x="116" y="65" font-family="serif" font-size="12" fill="#000">α</text>
  <text x="135" y="52" font-family="serif" font-size="12" fill="#000">2α</text>`;

  const SVG_ALPHA = SVG_BASE + `\n</svg>`;
  const SVG_BETA = SVG_BASE + `\n  <text x="96" y="142" font-family="serif" font-size="12" fill="#000">β</text>\n</svg>`;

  const alphaSteps = [
    {
      explanation: "Use the properties of parallel lines.",
      workingOut: "Since line \\(AD \\parallel BC\\), the alternate interior angles are equal. Therefore, \\(\\angle ACB = \\angle CAD = 2\\alpha\\)."
    },
    {
      explanation: "Identify the properties of the isosceles triangle.",
      workingOut: "We are given that \\(AB = AC\\), which makes triangle \\(ABC\\) an isosceles triangle with base \\(BC\\). The base angles opposite the equal sides must be equal, so \\(\\angle ABC = \\angle ACB = 2\\alpha\\)."
    },
    {
      explanation: "Calculate \\(\\alpha\\) using the sum of angles in a triangle.",
      workingOut: "The sum of the angles in triangle \\(ABC\\) is always \\(180^\\circ\\). So, \\(\\angle BAC + \\angle ABC + \\angle ACB = 180^\\circ\\). Substituting our values gives \\(\\alpha + 2\\alpha + 2\\alpha = 180^\\circ\\)."
    },
    {
      explanation: "Solve the equation for \\(\\alpha\\).",
      workingOut: "Combining the terms, we have \\(5\\alpha = 180^\\circ\\). Dividing both sides by 5 gives \\(\\alpha = 36^\\circ\\)."
    }
  ];

  const betaSteps = [
    {
      explanation: "Use the properties of parallel lines.",
      workingOut: "Since line \\(AD \\parallel BC\\), the alternate interior angles are equal. Therefore, \\(\\angle ACB = \\angle CAD = 2\\alpha\\)."
    },
    {
      explanation: "Identify the properties of the isosceles triangle.",
      workingOut: "We are given that \\(AB = AC\\), which makes triangle \\(ABC\\) an isosceles triangle with base \\(BC\\). The base angles opposite the equal sides must be equal, so \\(\\beta = \\angle ABC = \\angle ACB = 2\\alpha\\)."
    },
    {
      explanation: "Set up the equation for the sum of angles.",
      workingOut: "The sum of the angles in triangle \\(ABC\\) is \\(180^\\circ\\). So, \\(\\angle BAC + \\angle ABC + \\angle ACB = 180^\\circ\\). Substituting our expressions gives \\(\\alpha + 2\\alpha + 2\\alpha = 180^\\circ\\), which simplifies to \\(5\\alpha = 180^\\circ\\)."
    },
    {
      explanation: "Solve for \\(\\alpha\\) and then calculate \\(\\beta\\).",
      workingOut: "Dividing by 5 gives \\(\\alpha = 36^\\circ\\). Since we established that \\(\\beta = 2\\alpha\\), we substitute the value to find \\(\\beta = 2 \\times 36^\\circ = 72^\\circ\\)."
    }
  ];

  await db.collection('questions').doc('y10-8a-q2i-alpha').update({
    graphData: { svg: SVG_ALPHA },
    solutionSteps: alphaSteps,
    explanation: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8a-q2i-alpha');

  await db.collection('questions').doc('y10-8a-q2i-beta').update({
    graphData: { svg: SVG_BETA },
    solutionSteps: betaSteps,
    explanation: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8a-q2i-beta');

  // Update parent doc's subQuestions to embed SVG and new solutionSteps
  const parentSnap = await db.collection('questions').doc('y10-8a-q2i').get();
  if (parentSnap.exists && parentSnap.data().subQuestions) {
    const newSubQs = parentSnap.data().subQuestions.map(sq => {
      if (sq.id === 'y10-8a-q2i-alpha') {
        return { ...sq, graphData: { svg: SVG_ALPHA }, solutionSteps: alphaSteps, explanation: null };
      }
      if (sq.id === 'y10-8a-q2i-beta') {
        return { ...sq, graphData: { svg: SVG_BETA }, solutionSteps: betaSteps, explanation: null };
      }
      return sq;
    });
    newSubQs.forEach(sq => { if (sq.explanation === null) delete sq.explanation; });

    await parentSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    console.log('Updated parent y10-8a-q2i');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
