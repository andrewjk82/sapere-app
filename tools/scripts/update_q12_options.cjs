const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const newOptions = [
    { text: "\\( y = \\frac{hs}{w} \\)" },
    { text: "\\( y = \\frac{hw}{s} \\)" },
    { text: "\\( y = \\frac{sw}{h} \\)" },
    { text: "\\( y = \\frac{h}{sw} \\)" }
  ];

  const q12_steps = [
    {
      explanation: "Identify the similar triangles in the diagram.",
      workingOut: "The diagram shows a smaller right-angled triangle nested inside a larger right-angled triangle. They share the same base angle on the left, and both have a right angle (\\(90^\\circ\\)) on the right. Because they have two corresponding angles that are equal, the two triangles are similar."
    },
    {
      explanation: "Set up the ratio of corresponding sides.",
      workingOut: "For similar triangles, the ratio of their corresponding heights must equal the ratio of their corresponding bases. The height of the small triangle is \\(y\\) and the large triangle is \\(h\\). The base of the small triangle is \\(s\\) and the large triangle is \\(w\\). Therefore, we can write the equation:\n\n\\[ \\frac{y}{h} = \\frac{s}{w} \\]"
    },
    {
      explanation: "Solve the equation for \\(y\\).",
      workingOut: "To make \\(y\\) the subject of the formula, we need to isolate it. Multiply both sides of the equation by \\(h\\):\n\n\\[ y = \\frac{s}{w} \\times h \\]\n\nThis simplifies to the final formula:\n\n\\[ y = \\frac{hs}{w} \\]"
    }
  ];

  await db.collection('questions').doc('y10-8e-q12').update({
    options: newOptions,
    answer: 0,
    solutionSteps: q12_steps,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Updated y10-8e-q12 options and steps');

  const parentId = 'y10-8e-q12'.substring(0, 'y10-8e-q12'.lastIndexOf('-'));
  if (parentId && parentId !== 'y10-8e-q1') {
    // Wait, y10-8e-q12 is NOT a subquestion. Its ID doesn't have a dash after q12.
    // The previous script handled it as a top level question.
  }

  console.log('Done!');
  process.exit(0);
}

run().catch(console.error);
