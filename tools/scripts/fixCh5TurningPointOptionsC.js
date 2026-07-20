import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

async function run() {
  const docId = 'y11a-5-12c';
  console.log(`Getting document: ${docId}`);
  
  const docRef = db.collection('questions').doc(docId);
  const docSnap = await docRef.get();
  if (!docSnap.exists) {
    console.error('Document does not exist!');
    return;
  }
  
  console.log('Current options:', docSnap.data().options);

  const updateData = {
    question: "By completing the square, express \\(y = x^2 - 6x + 14\\) in the form \\(y = (x - h)^2 + k\\). Find only the coordinates of the turning point.",
    opts: [
      "\\((6, -22)\\)",
      "\\((3, 5)\\)",
      "\\((-3, 5)\\)",
      "\\((3, -5)\\)"
    ],
    options: [
      "\\((6, -22)\\)",
      "\\((3, 5)\\)",
      "\\((-3, 5)\\)",
      "\\((3, -5)\\)"
    ],
    a: 1,
    answer: 1,
    solutionSteps: [
      {
        "explanation": "We begin by writing down the given quadratic equation and preparing to complete the square. The goal is to rearrange the terms so we can easily identify the turning point of the parabola. We will first isolate the quadratic and linear terms.",
        "workingOut": "Given equation: \\(y = x^2 - 6x + 14\\)",
        "graphData": null
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and then add and subtract this value to complete the square. This forms a perfect square trinomial. A common mistake is forgetting to subtract the squared term, which alters the original equation.",
        "workingOut": "\\(y = (x^2 - 6x + 9) - 9 + 14 \\;\\Rightarrow\\; y = (x - 3)^2 + 5\\)",
        "graphData": null
      },
      {
        "explanation": "Finally, we compare our equation with the standard vertex form to find the coordinates of the turning point. The horizontal coordinate is the value that makes the squared term zero, and the vertical coordinate is the constant. This matches our target coordinates.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (3, 5)\\)",
        "graphData": null
      }
    ],
    isNew: true
  };

  await docRef.update(updateData);
  console.log(`Successfully updated document ${docId} in Firestore!`);
}

run().catch(console.error);
