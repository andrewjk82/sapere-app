const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // --- q12 ---
  const q12_svg = `<svg viewBox="-20 0 320 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Large Triangle -->
  <polygon points="50,180 250,180 250,50" fill="none" stroke="#000" stroke-width="1.5"/>
  <!-- Small Triangle Vertical Line -->
  <line x1="150" y1="180" x2="150" y2="115" stroke="#000" stroke-width="1.5"/>
  
  <!-- Right angle symbols -->
  <polyline points="140,180 140,170 150,170" fill="none" stroke="#000" stroke-width="1"/>
  <polyline points="240,180 240,170 250,170" fill="none" stroke="#000" stroke-width="1"/>
  
  <!-- Dimension lines for bases -->
  <!-- s -->
  <line x1="50" y1="195" x2="150" y2="195" stroke="#000" stroke-width="0.5"/>
  <line x1="50" y1="192" x2="50" y2="198" stroke="#000" stroke-width="0.5"/>
  <line x1="150" y1="192" x2="150" y2="198" stroke="#000" stroke-width="0.5"/>
  <text x="95" y="190" font-family="serif" font-style="italic" font-size="12" fill="#000">s</text>
  
  <!-- w -->
  <line x1="50" y1="215" x2="250" y2="215" stroke="#000" stroke-width="0.5"/>
  <line x1="50" y1="212" x2="50" y2="218" stroke="#000" stroke-width="0.5"/>
  <line x1="250" y1="212" x2="250" y2="218" stroke="#000" stroke-width="0.5"/>
  <text x="145" y="210" font-family="serif" font-style="italic" font-size="12" fill="#000">w</text>

  <!-- Labels for heights -->
  <text x="135" y="152" font-family="serif" font-style="italic" font-size="12" fill="#000">y</text>
  <text x="255" y="120" font-family="serif" font-style="italic" font-size="12" fill="#000">h</text>
</svg>`;

  const q12_steps = [
    {
      explanation: "Identify similar triangles.",
      workingOut: "The diagram shows a smaller right-angled triangle nested inside a larger right-angled triangle. Because they share the same angle at the bottom left and both have a right angle, they are similar triangles."
    },
    {
      explanation: "Set up the ratio of corresponding sides.",
      workingOut: "For similar triangles, the ratio of their corresponding heights is equal to the ratio of their corresponding bases. Therefore, we can write the equation: \\( \\frac{y}{h} = \\frac{s}{w} \\)."
    },
    {
      explanation: "Solve for \\(y\\).",
      workingOut: "To make \\(y\\) the subject of the formula, multiply both sides by \\(h\\). This gives \\( y = \\frac{h \\times s}{w} \\) or \\( y = \\frac{hs}{w} \\)."
    }
  ];

  await db.collection('questions').doc('y10-8e-q12').update({
    graphData: { svg: q12_svg },
    solutionSteps: q12_steps,
    explanation: FieldValue.delete(),
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8e-q12');


  // --- q13 ---
  const q13_svg = `<svg viewBox="-20 0 340 230" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Triangle ABC -->
  <polygon points="50,180 250,180 150,40" fill="none" stroke="#000" stroke-width="1.5"/>
  <!-- Altitude BF -->
  <line x1="150" y1="40" x2="150" y2="180" stroke="#000" stroke-width="1.5"/>
  <!-- Lines BD, BE -->
  <line x1="150" y1="40" x2="110" y2="180" stroke="#000" stroke-width="1.5"/>
  <line x1="150" y1="40" x2="190" y2="180" stroke="#000" stroke-width="1.5"/>
  
  <!-- Right angle at F -->
  <polyline points="140,180 140,170 150,170" fill="none" stroke="#000" stroke-width="1"/>
  
  <!-- Tick marks -->
  <!-- AB (double) -->
  <line x1="94" y1="108" x2="102" y2="102" stroke="#000" stroke-width="1"/>
  <line x1="97" y1="112" x2="105" y2="106" stroke="#000" stroke-width="1"/>
  <!-- CB (double) -->
  <line x1="198" y1="102" x2="206" y2="108" stroke="#000" stroke-width="1"/>
  <line x1="195" y1="106" x2="203" y2="112" stroke="#000" stroke-width="1"/>
  
  <!-- AD (single) -->
  <line x1="80" y1="175" x2="80" y2="185" stroke="#000" stroke-width="1"/>
  <!-- CE (single) -->
  <line x1="220" y1="175" x2="220" y2="185" stroke="#000" stroke-width="1"/>
  
  <!-- Points and Labels -->
  <circle cx="150" cy="40" r="1.5" fill="#000"/>
  <circle cx="50" cy="180" r="1.5" fill="#000"/>
  <circle cx="250" cy="180" r="1.5" fill="#000"/>
  <circle cx="110" cy="180" r="1.5" fill="#000"/>
  <circle cx="190" cy="180" r="1.5" fill="#000"/>
  <circle cx="150" cy="180" r="1.5" fill="#000"/>
  
  <text x="145" y="30" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">B</text>
  <text x="35" y="195" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">A</text>
  <text x="255" y="195" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">C</text>
  <text x="105" y="195" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">D</text>
  <text x="185" y="195" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">E</text>
  <text x="145" y="195" font-family="serif" font-weight="bold" font-style="italic" font-size="12" fill="#000">F</text>
</svg>`;

  const q13a_steps = [
    {
      explanation: "Identify the shared side and angles.",
      workingOut: "In \\(\\Delta DFB\\) and \\(\\Delta EFB\\), the side \\(FB\\) is shared by both triangles (common side). The angles \\(\\angle DFB\\) and \\(\\angle EFB\\) are both \\(90^\\circ\\) because \\(FB\\) is the altitude to the base."
    },
    {
      explanation: "Identify the equal base segments.",
      workingOut: "Because the figure is symmetric about the center line \\(FB\\), the distance from the center to \\(D\\) is the same as the distance to \\(E\\). Therefore, \\(DF = EF\\)."
    },
    {
      explanation: "Apply a congruence test.",
      workingOut: "Since we have two pairs of equal sides (\\(FB = FB\\) and \\(DF = EF\\)) and their included angles are equal (\\(\\angle DFB = \\angle EFB = 90^\\circ\\)), we can conclude that \\(\\Delta DFB \\equiv \\Delta EFB\\) by the SAS (Side-Angle-Side) congruence test."
    }
  ];

  const q13b_steps = [
    {
      explanation: "Identify given equal sides.",
      workingOut: "From the tick marks on the symmetric figure, we are given that \\(AB = CB\\) and \\(AD = CE\\)."
    },
    {
      explanation: "Identify the equal angles.",
      workingOut: "Since \\(\\Delta ABC\\) is an isosceles triangle (because \\(AB = CB\\)), the base angles opposite these equal sides are also equal. Therefore, \\(\\angle A = \\angle C\\)."
    },
    {
      explanation: "Apply a congruence test.",
      workingOut: "In \\(\\Delta ABD\\) and \\(\\Delta CBE\\), we have two pairs of equal sides (\\(AB = CB\\) and \\(AD = CE\\)) and their included angles are equal (\\(\\angle A = \\angle C\\)). Thus, \\(\\Delta ABD \\equiv \\Delta CBE\\) by the SAS (Side-Angle-Side) congruence test."
    }
  ];

  const p13Snap = await db.collection('questions').doc('y10-8e-q13').get();
  if (p13Snap.exists) {
    let subQs = p13Snap.data().subQuestions;
    if (subQs) {
      subQs = subQs.map(sq => {
        if (sq.id === 'y10-8e-q13a') {
          return { ...sq, graphData: { svg: q13_svg }, solutionSteps: q13a_steps, explanation: null };
        } else if (sq.id === 'y10-8e-q13b') {
          return { ...sq, graphData: { svg: q13_svg }, solutionSteps: q13b_steps, explanation: null };
        }
        return sq;
      });
      // Remove null explanations
      subQs.forEach(sq => { if (sq.explanation === null) delete sq.explanation; });
      await p13Snap.ref.update({
        graphData: { svg: q13_svg },
        subQuestions: subQs,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Updated y10-8e-q13 and its subquestions');
    }
  }

  // Update individual subquestion documents if they exist
  const subIds = ['y10-8e-q13a', 'y10-8e-q13b'];
  for (const sid of subIds) {
    const sSnap = await db.collection('questions').doc(sid).get();
    if (sSnap.exists) {
      await sSnap.ref.update({
        graphData: { svg: q13_svg },
        solutionSteps: sid === 'y10-8e-q13a' ? q13a_steps : q13b_steps,
        explanation: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Updated', sid);
    }
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
