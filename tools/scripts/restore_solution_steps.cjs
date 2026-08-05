const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const alphaSteps = [
    {
      explanation: "Draw an auxiliary line.",
      workingOut: "Draw an auxiliary line through point \\(T\\) that is parallel to both line \\(PQ\\) and line \\(RS\\)."
    },
    {
      explanation: "Find the upper part of \\(\\angle PTU\\).",
      workingOut: "Since the auxiliary line is parallel to \\(PQ\\), by the alternate interior angles theorem, the upper part of \\(\\angle PTU\\) is equal to \\(\\angle TPQ\\), which is \\(48^\\circ\\)."
    },
    {
      explanation: "Find the lower part of \\(\\angle PTU\\).",
      workingOut: "Since the auxiliary line is parallel to \\(RS\\), by the alternate interior angles theorem, the lower part of \\(\\angle PTU\\) is equal to \\(\\angle TUS\\), which is \\(73^\\circ\\)."
    },
    {
      explanation: "Calculate \\(\\alpha\\).",
      workingOut: "Add the two parts together to find the total angle: \\(\\alpha = 48^\\circ + 73^\\circ = 121^\\circ\\)."
    }
  ];

  const betaSteps = [
    {
      explanation: "Find the interior angles at \\(A\\) and \\(C\\).",
      workingOut: "Since \\(EAF\\) and \\(GCH\\) are straight lines, the interior angles are supplementary to the given exterior angles. \\(\\angle KAF = 180^\\circ - 130^\\circ = 50^\\circ\\) and \\(\\angle KCH = 180^\\circ - 125^\\circ = 55^\\circ\\)."
    },
    {
      explanation: "Draw an auxiliary line.",
      workingOut: "Draw an auxiliary line through point \\(K\\) that is parallel to both line \\(EF\\) and line \\(GH\\)."
    },
    {
      explanation: "Find the two parts of \\(\\angle AKC\\).",
      workingOut: "Using alternate interior angles with the auxiliary line, the upper part of \\(\\angle AKC\\) is equal to \\(\\angle KAF\\) (\\(50^\\circ\\)), and the lower part is equal to \\(\\angle KCH\\) (\\(55^\\circ\\))."
    },
    {
      explanation: "Calculate \\(\\beta\\).",
      workingOut: "Add the two parts together to find the total angle: \\(\\beta = 50^\\circ + 55^\\circ = 105^\\circ\\)."
    }
  ];

  await db.collection('questions').doc('y10-8a-q2f-alpha').update({
    solutionSteps: alphaSteps,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8a-q2f-alpha');

  await db.collection('questions').doc('y10-8a-q2f-beta').update({
    solutionSteps: betaSteps,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8a-q2f-beta');

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
