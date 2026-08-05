const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const qId = 'y9-11h-q1g';
  const docRef = db.collection('questions').doc(qId);
  const doc = await docRef.get();
  
  if (!doc.exists) {
    console.log(`Missing ${qId}`);
    return;
  }

  const px = (5 * Math.sqrt(2)) / 2;
  const py = (5 * Math.sqrt(2)) / 2;
  const rSq = 25;
  const r = 5;
  const isYes = true;
  const answerStr = "Yes";
  const xStr = "\\frac{5\\sqrt{2}}{2}";
  const yStr = "\\frac{5\\sqrt{2}}{2}";

  const bound = 8;
  const viewBox = `-${bound} -${bound} ${bound*2} ${bound*2}`;
  
  let gridLines = '';
  for (let i = -bound; i <= bound; i++) {
    gridLines += `<line x1="${-bound}" y1="${i}" x2="${bound}" y2="${i}" stroke="#e2e8f0" stroke-width="0.05" />`;
    gridLines += `<line x1="${i}" y1="${-bound}" x2="${i}" y2="${bound}" stroke="#e2e8f0" stroke-width="0.05" />`;
  }

  const svgContent = `
<div style="display: flex; justify-content: center; align-items: center; margin: 10px 0;">
<svg width="300" height="300" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">
  <g transform="scale(1, -1)">
    ${gridLines}
    <line x1="${-bound}" y1="0" x2="${bound}" y2="0" stroke="#94a3b8" stroke-width="0.1" />
    <line x1="0" y1="${-bound}" x2="0" y2="${bound}" stroke="#94a3b8" stroke-width="0.1" />
    <circle cx="0" cy="0" r="${r}" fill="#6366f1" fill-opacity="0.06" stroke="#6366f1" stroke-width="0.08" />
    <circle cx="${px}" cy="${py}" r="0.15" fill="#ef4444" />
  </g>
  <text x="${px + 0.3}" y="${-py - 0.3}" font-size="0.6" font-family="sans-serif" fill="#ef4444">(5√2 / 2, 5√2 / 2)</text>
  <text x="0.3" y="${-r + 0.5}" font-size="0.6" fill="#4f46e5" font-family="sans-serif">x² + y² = ${rSq}</text>
</svg>
</div>
`;

  const steps = [
    {
      "explanation": `Substitute the coordinates \\(x = ${xStr}\\) and \\(y = ${yStr}\\) into the left-hand side of the circle's equation, \\(x^2 + y^2\\).`,
      "workingOut": `\\(x^2 + y^2 = \\left(${xStr}\\right)^2 + \\left(${yStr}\\right)^2\\)`
    },
    {
      "explanation": "Calculate the squares.",
      "workingOut": `\\(= \\frac{50}{4} + \\frac{50}{4}\\)`
    },
    {
      "explanation": "Add the values together and compare the sum to the radius squared from the equation (which is " + rSq + ").",
      "workingOut": `\\(= \\frac{100}{4} = 25 \\quad = \\quad 25\\)`
    },
    {
      "explanation": `Since the result equals ${rSq}, the point DOES lie on the circle.`,
      "workingOut": `\\text{Answer: } Yes`
    }
  ];

  await docRef.update({
    opts: ["Yes", "No"],
    answer: "Yes",
    solution: "",
    solutionSteps: steps,
    graphData: { html: svgContent },
    updatedAt: FieldValue.serverTimestamp()
  });

  console.log(`Updated ${qId}`);
  process.exit(0);
}

run().catch(console.error);
