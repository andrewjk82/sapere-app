const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const SVG_BASE = `<svg viewBox="20 10 240 210" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Parallel Lines -->
  <line x1="40" y1="190" x2="230" y2="190" stroke="#000" stroke-width="1"/>
  <line x1="40" y1="115" x2="230" y2="115" stroke="#000" stroke-width="1"/>
  
  <!-- Triangle FAD -->
  <line x1="80" y1="40" x2="80" y2="190" stroke="#000" stroke-width="1"/>
  <line x1="80" y1="40" x2="143" y2="115" stroke="#000" stroke-width="1"/>
  <line x1="80" y1="190" x2="143" y2="115" stroke="#000" stroke-width="1"/>

  <!-- Parallel markers on CE and AB -->
  <line x1="180" y1="110" x2="188" y2="115" stroke="#000" stroke-width="1"/>
  <line x1="180" y1="120" x2="188" y2="115" stroke="#000" stroke-width="1"/>
  <line x1="185" y1="110" x2="193" y2="115" stroke="#000" stroke-width="1"/>
  <line x1="185" y1="120" x2="193" y2="115" stroke="#000" stroke-width="1"/>

  <line x1="180" y1="185" x2="188" y2="190" stroke="#000" stroke-width="1"/>
  <line x1="180" y1="195" x2="188" y2="190" stroke="#000" stroke-width="1"/>
  <line x1="185" y1="185" x2="193" y2="190" stroke="#000" stroke-width="1"/>
  <line x1="185" y1="195" x2="193" y2="190" stroke="#000" stroke-width="1"/>

  <!-- Right angle at A -->
  <polyline points="80,180 90,180 90,190" fill="none" stroke="#000" stroke-width="1"/>

  <!-- Tick marks for FD = AD -->
  <line x1="106" y1="82" x2="116" y2="73" stroke="#000" stroke-width="1"/>
  <line x1="106" y1="148" x2="116" y2="157" stroke="#000" stroke-width="1"/>

  <!-- Points -->
  <circle cx="80" cy="190" r="1.2" fill="#000"/>
  <circle cx="80" cy="40" r="1.2" fill="#000"/>
  <circle cx="143" cy="115" r="1.2" fill="#000"/>
  
  <!-- Labels -->
  <text x="70" y="208" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">A</text>
  <text x="215" y="208" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">B</text>
  <text x="70" y="35" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">F</text>
  <text x="146" y="102" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">D</text>
  <text x="40" y="107" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">C</text>
  <text x="215" y="107" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">E</text>

  <!-- Given Angle -->
  <text x="85" y="175" font-family="serif" font-size="12" fill="#000">40°</text>`;

  const SVG_ALPHA = SVG_BASE + `\n  <text x="120" y="132" font-family="serif" font-size="12" fill="#000">α</text>\n</svg>`;
  const SVG_THETA = SVG_BASE + `\n  <text x="150" y="105" font-family="serif" font-size="12" fill="#000">θ</text>\n</svg>`;

  const alphaSteps = [
    {
      explanation: "Identify the right-angled triangle \\(APD\\).",
      workingOut: "Let line \\(FA\\) intersect line \\(CE\\) at a point \\(P\\). Since \\(FA \\perp AB\\) and \\(CE \\parallel AB\\), line \\(FA\\) is perpendicular to \\(CE\\). This creates a right-angled triangle \\(APD\\) with \\(\\angle APD = 90^\\circ\\)."
    },
    {
      explanation: "Calculate \\(\\alpha\\) (\\(\\angle ADC\\)).",
      workingOut: "In triangle \\(APD\\), we are given \\(\\angle PAD = 40^\\circ\\). The sum of angles in a triangle is \\(180^\\circ\\). Therefore, \\(\\angle PDA = 180^\\circ - 90^\\circ - 40^\\circ = 50^\\circ\\). Since \\(P\\) is on the left side (towards \\(C\\)), \\(\\alpha = \\angle ADC = \\angle PDA = 50^\\circ\\)."
    }
  ];

  const thetaSteps = [
    {
      explanation: "Identify the right-angled triangle \\(FPD\\).",
      workingOut: "Let line \\(FA\\) intersect line \\(CE\\) at a point \\(P\\). Since \\(FA \\perp AB\\) and \\(CE \\parallel AB\\), line \\(FA\\) is perpendicular to \\(CE\\). This creates a right-angled triangle \\(FPD\\) with \\(\\angle FPD = 90^\\circ\\)."
    },
    {
      explanation: "Find \\(\\angle PFD\\).",
      workingOut: "Triangle \\(FAD\\) is isosceles with \\(FD = AD\\), so the base angles are equal: \\(\\angle AFD = \\angle FAD = 40^\\circ\\). Thus, \\(\\angle PFD = 40^\\circ\\)."
    },
    {
      explanation: "Calculate \\(\\angle FDC\\).",
      workingOut: "In the right-angled triangle \\(FPD\\), the sum of angles is \\(180^\\circ\\). Therefore, \\(\\angle FDP = 180^\\circ - 90^\\circ - 40^\\circ = 50^\\circ\\). Since \\(P\\) is on the left side (towards \\(C\\)), \\(\\angle FDC = 50^\\circ\\)."
    },
    {
      explanation: "Calculate \\(\\theta\\) (\\(\\angle FDE\\)).",
      workingOut: "Angles on the straight line \\(CE\\) add up to \\(180^\\circ\\). Therefore, \\(\\theta = \\angle FDE = 180^\\circ - \\angle FDC = 180^\\circ - 50^\\circ = 130^\\circ\\)."
    }
  ];

  await db.collection('questions').doc('y10-8a-q2g-alpha').update({
    graphData: { svg: SVG_ALPHA },
    solutionSteps: alphaSteps,
    explanation: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8a-q2g-alpha');

  await db.collection('questions').doc('y10-8a-q2g-theta').update({
    graphData: { svg: SVG_THETA },
    solutionSteps: thetaSteps,
    explanation: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8a-q2g-theta');

  // Update parent doc's subQuestions to embed SVG and new solutionSteps
  const parentSnap = await db.collection('questions').doc('y10-8a-q2g').get();
  if (parentSnap.exists && parentSnap.data().subQuestions) {
    const newSubQs = parentSnap.data().subQuestions.map(sq => {
      if (sq.id === 'y10-8a-q2g-alpha') {
        return { ...sq, graphData: { svg: SVG_ALPHA }, solutionSteps: alphaSteps, explanation: null };
      }
      if (sq.id === 'y10-8a-q2g-theta') {
        return { ...sq, graphData: { svg: SVG_THETA }, solutionSteps: thetaSteps, explanation: null };
      }
      return sq;
    });
    // Remove null explanations
    newSubQs.forEach(sq => { if (sq.explanation === null) delete sq.explanation; });

    await parentSnap.ref.update({ subQuestions: newSubQs, updatedAt: FieldValue.serverTimestamp() });
    console.log('Updated parent y10-8a-q2g');
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
