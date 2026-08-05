const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const q15_svg = `<svg viewBox="10 10 280 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <polygon points="150,40 50,200 250,200" fill="none" stroke="#000" stroke-width="1.5"/>
  <line x1="125" y1="80" x2="175" y2="80" stroke="#000" stroke-width="1.5"/>
  <line x1="50" y1="200" x2="175" y2="80" stroke="#000" stroke-width="1"/>
  <line x1="250" y1="200" x2="125" y2="80" stroke="#000" stroke-width="1"/>
  
  <circle cx="150" cy="40" r="2" fill="#000"/>
  <circle cx="50" cy="200" r="2" fill="#000"/>
  <circle cx="250" cy="200" r="2" fill="#000"/>
  <circle cx="125" cy="80" r="2" fill="#000"/>
  <circle cx="175" cy="80" r="2" fill="#000"/>
  <circle cx="150" cy="104" r="2" fill="#000"/>
  
  <text x="145" y="30" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">A</text>
  <text x="35" y="215" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">B</text>
  <text x="255" y="215" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">C</text>
  <text x="105" y="75" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">M</text>
  <text x="185" y="75" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">N</text>
  <text x="145" y="125" font-family="serif" font-weight="bold" font-style="italic" font-size="14" fill="#000">P</text>
  
  <text x="115" y="55" font-family="serif" font-size="12" fill="#000">1</text>
  <text x="175" y="55" font-family="serif" font-size="12" fill="#000">1</text>
  <text x="80" y="145" font-family="serif" font-size="12" fill="#000">3</text>
  <text x="210" y="145" font-family="serif" font-size="12" fill="#000">3</text>
</svg>`;

  const q15a_steps = [
    {
      explanation: "Identify the triangles to compare.",
      workingOut: "We will compare the small top triangle \\(\\Delta AMN\\) and the large outer triangle \\(\\Delta ABC\\)."
    },
    {
      explanation: "Identify equal angles.",
      workingOut: "Both triangles share the same angle at the top, so \\(\\angle A\\) is a common angle to both triangles."
    },
    {
      explanation: "Compare the ratios of corresponding sides.",
      workingOut: "From the given ratio intervals (1 and 3 on the diagram), we can see that \\(AM\\) is 1 part and the whole side \\(AB\\) is \\(1+3=4\\) parts. Thus, \\(\\frac{AM}{AB} = \\frac{1}{4}\\). Similarly on the other side, \\(AN\\) is 1 part and \\(AC\\) is 4 parts, so \\(\\frac{AN}{AC} = \\frac{1}{4}\\)."
    },
    {
      explanation: "Apply a similarity test and conclude.",
      workingOut: "Because the ratio of two corresponding sides is equal and the included angle (\\(\\angle A\\)) is common, we can conclude that \\(\\Delta AMN \\sim \\Delta ABC\\) by the SAS (Side-Angle-Side) similarity test. Since the triangles are similar, their corresponding angles are equal (\\(\\angle AMN = \\angle ABC\\)). Because these are corresponding angles on a transversal, it proves that the lines must be parallel: \\(BC \\parallel MN\\)."
    }
  ];

  const q15b_steps = [
    {
      explanation: "Identify a new pair of similar triangles.",
      workingOut: "Consider the triangles \\(\\Delta PMN\\) (top) and \\(\\Delta PCB\\) (bottom). Because we proved in part (a) that \\(BC \\parallel MN\\), we can use the properties of parallel lines to find equal angles."
    },
    {
      explanation: "Identify equal alternate interior angles.",
      workingOut: "The angle \\(\\angle PMN = \\angle PCB\\) because they are alternate interior angles along the transversal line \\(MC\\). Also, \\(\\angle PNM = \\angle PBC\\) because they are alternate interior angles along the transversal line \\(NB\\)."
    },
    {
      explanation: "Apply a similarity test.",
      workingOut: "Because we found two pairs of equal angles, we can conclude that \\(\\Delta PMN \\sim \\Delta PCB\\) by the AA (or AAA) similarity test."
    },
    {
      explanation: "Use similarity to find the ratio of lengths.",
      workingOut: "Because these triangles are similar, the ratio of their corresponding sides is equal: \\(\\frac{PN}{BP} = \\frac{MN}{BC}\\). From part (a), we know \\(\\Delta AMN \\sim \\Delta ABC\\) with a ratio of \\(\\frac{1}{4}\\), meaning \\(\\frac{MN}{BC} = \\frac{1}{4}\\). Therefore, \\(\\frac{PN}{BP} = \\frac{1}{4}\\). Multiplying both sides by \\(4 \\cdot BP\\) gives \\(BP = 4PN\\)."
    }
  ];

  const p15Snap = await db.collection('questions').doc('y10-8e-q15').get();
  if (p15Snap.exists) {
    let subQs = p15Snap.data().subQuestions;
    if (subQs) {
      subQs = subQs.map(sq => {
        if (sq.id === 'y10-8e-q15a') {
          return { ...sq, graphData: { svg: q15_svg }, solutionSteps: q15a_steps, explanation: null };
        } else if (sq.id === 'y10-8e-q15b') {
          return { ...sq, graphData: { svg: q15_svg }, solutionSteps: q15b_steps, explanation: null };
        }
        return sq;
      });
      subQs.forEach(sq => { if (sq.explanation === null) delete sq.explanation; });
      await p15Snap.ref.update({
        graphData: { svg: q15_svg },
        subQuestions: subQs,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Updated parent y10-8e-q15 and its subquestions');
    }
  }

  const subIds = ['y10-8e-q15a', 'y10-8e-q15b'];
  for (const sid of subIds) {
    const sSnap = await db.collection('questions').doc(sid).get();
    if (sSnap.exists) {
      await sSnap.ref.update({
        graphData: { svg: q15_svg },
        solutionSteps: sid === 'y10-8e-q15a' ? q15a_steps : q15b_steps,
        explanation: FieldValue.delete(),
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Updated subquestion doc', sid);
    }
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
