const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const newQuestionText = `The equations of eight lines are given below:
a) \\(y = 3x - 5\\)
b) \\(2x + y = 6\\)
c) \\(y = 5 - 2x\\)
d) \\(x = \\frac{1}{3}y + 2\\)
e) \\(y = \\frac{1}{2}x - 4\\)
f) \\(2y - x = 8\\)
g) \\(3y + x = 9\\)
h) \\(y = -2x + 7\\)

State which groups of lines are parallel (have the same gradient). Format parallel groups separated by semicolons (e.g. a and d; b, c and h; e and f).`;

  const q1Data = {
    question: newQuestionText,
    solution: "",
    graphData: null,
    options: [
      { text: 'a and d; b, c and h; e and f', imageUrl: '' },
      { text: 'a and d; b and c; e, f and h', imageUrl: '' },
      { text: 'a, d and g; b, c and h; e and f', imageUrl: '' },
      { text: 'a and d; b, f and h; c and e', imageUrl: '' }
    ],
    answer: '0',
    solutionSteps: [
      {
        explanation: 'State the condition for parallel lines.',
        workingOut: '\\text{Parallel lines have the same gradient } m. \\\\ \\text{Rearrange each equation into the form } y = mx + c.',
        graphData: null
      },
      {
        explanation: 'Find the gradients for lines a, d, and g.',
        workingOut: '\\text{a) } y = 3x - 5 \\implies m = 3 \\\\ \\text{d) } x = \\frac{1}{3}y + 2 \\implies \\frac{1}{3}y = x - 2 \\implies y = 3x - 6 \\implies m = 3 \\\\ \\text{g) } 3y + x = 9 \\implies 3y = -x + 9 \\implies y = -\\frac{1}{3}x + 3 \\implies m = -\\frac{1}{3}',
        graphData: null
      },
      {
        explanation: 'Find the gradients for lines b, c, and h.',
        workingOut: '\\text{b) } 2x + y = 6 \\implies y = -2x + 6 \\implies m = -2 \\\\ \\text{c) } y = 5 - 2x \\implies y = -2x + 5 \\implies m = -2 \\\\ \\text{h) } y = -2x + 7 \\implies m = -2',
        graphData: null
      },
      {
        explanation: 'Find the gradients for lines e and f.',
        workingOut: '\\text{e) } y = \\frac{1}{2}x - 4 \\implies m = \\frac{1}{2} \\\\ \\text{f) } 2y - x = 8 \\implies 2y = x + 8 \\implies y = \\frac{1}{2}x + 4 \\implies m = \\frac{1}{2}',
        graphData: null
      },
      {
        explanation: 'Group the lines with equal gradients.',
        workingOut: '\\text{Gradient } 3\\text{: a and d} \\\\ \\text{Gradient } -2\\text{: b, c and h} \\\\ \\text{Gradient } \\frac{1}{2}\\text{: e and f}',
        graphData: null
      }
    ],
    updatedAt: FieldValue.serverTimestamp()
  };

  await db.collection('questions').doc('y9-11g-q1').update(q1Data);

  console.log("Updated y9-11g-q1 successfully.");
  process.exit(0);
}

run().catch(console.error);
