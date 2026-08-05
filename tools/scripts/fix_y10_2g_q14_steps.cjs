const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const stepsIii = [
    {
      explanation: "Identify the collinear points on the top edge of the rectangle. Since AHFD and HBCF are squares with side length 3, points D, F, and C lie on a straight line. The length of CD is 6, and F is exactly in the middle.",
      workingOut: "\\\\( CF = 3, \\\\; CD = 6 \\\\implies \\\\frac{CF}{CD} = \\\\frac{1}{2} \\\\)",
      graphData: null
    },
    {
      explanation: "Use similar triangles to find the position of point G. In triangle CDE, we are given that FG is parallel to DE. Therefore, triangle CFG is similar to triangle CDE. The ratio of their sides must be equal.",
      workingOut: "\\\\( \\\\triangle CFG \\\\sim \\\\triangle CDE \\\\implies \\\\frac{CG}{CE} = \\\\frac{CF}{CD} = \\\\frac{1}{2} \\\\)",
      graphData: null
    },
    {
      explanation: "Calculate the total length of the diagonal AC, and use it to find CE. By Pythagoras' theorem, \\\\( AC = \\\\sqrt{6^2 + 3^2} = 3\\\\sqrt{5} \\\\). Since AE = 3, we subtract this from AC to find CE.",
      workingOut: "\\\\( CE = AC - AE = 3\\\\sqrt{5} - 3 \\\\)",
      graphData: null
    },
    {
      explanation: "Finally, calculate the exact length of EG. Since the ratio \\\\( \\\\frac{CG}{CE} = \\\\frac{1}{2} \\\\), G is the midpoint of CE. Therefore, EG is exactly half of CE.",
      workingOut: "\\\\( EG = \\\\frac{CE}{2} = \\\\frac{3\\\\sqrt{5} - 3}{2} \\\\)",
      graphData: null
    }
  ];

  const stepsIv = [
    {
      explanation: "Identify the collinear points on the top edge of the rectangle. Since AHFD and HBCF are squares with side length 3, points D, F, and C lie on a straight line. The length of CD is 6, and F is exactly in the middle.",
      workingOut: "\\\\( CF = 3, \\\\; CD = 6 \\\\implies \\\\frac{CF}{CD} = \\\\frac{1}{2} \\\\)",
      graphData: null
    },
    {
      explanation: "Use similar triangles to find the position of point G. In triangle CDE, we are given that FG is parallel to DE. Therefore, triangle CFG is similar to triangle CDE. The ratio of their sides must be equal.",
      workingOut: "\\\\( \\\\triangle CFG \\\\sim \\\\triangle CDE \\\\implies \\\\frac{CG}{CE} = \\\\frac{CF}{CD} = \\\\frac{1}{2} \\\\)",
      graphData: null
    },
    {
      explanation: "Calculate the total length of the diagonal AC, and use it to find CE. By Pythagoras' theorem, \\\\( AC = \\\\sqrt{6^2 + 3^2} = 3\\\\sqrt{5} \\\\). Since AE = 3, we subtract this from AC to find CE.",
      workingOut: "\\\\( CE = AC - AE = 3\\\\sqrt{5} - 3 \\\\)",
      graphData: null
    },
    {
      explanation: "Finally, calculate the exact length of GC. Since the ratio \\\\( \\\\frac{CG}{CE} = \\\\frac{1}{2} \\\\), GC is exactly half of CE.",
      workingOut: "\\\\( GC = \\\\frac{CE}{2} = \\\\frac{3\\\\sqrt{5} - 3}{2} \\\\)",
      graphData: null
    }
  ];

  await db.collection('questions').doc('y10-2g-q14aiii').update({ solutionSteps: stepsIii });
  console.log('Updated y10-2g-q14aiii solution steps in Firestore.');

  await db.collection('questions').doc('y10-2g-q14aiv').update({ solutionSteps: stepsIv });
  console.log('Updated y10-2g-q14aiv solution steps in Firestore.');

  process.exit(0);
}

run().catch(console.error);
