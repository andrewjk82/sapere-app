import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (getApps().length === 0) {
  initializeApp({ credential: cert(serviceAccount) });
}
const db = getFirestore();

async function run() {
  const docId = 'y11a-5-12b';
  console.log(`Getting document: ${docId}`);
  
  const docRef = db.collection('questions').doc(docId);
  const docSnap = await docRef.get();
  if (!docSnap.exists) {
    console.error('Document does not exist!');
    return;
  }
  
  console.log('Current options:', docSnap.data().options);

  const updateData = {
    question: "By completing the square, express \\(y = x^2 + 10x + 22\\) in the form \\(y = (x - h)^2 + k\\). Find only the coordinates of the turning point.",
    opts: [
      "\\((-5, 3)\\)",
      "\\((-10, -78)\\)",
      "\\((5, -3)\\)",
      "\\((-5, -3)\\)"
    ],
    options: [
      "\\((-5, 3)\\)",
      "\\((-10, -78)\\)",
      "\\((5, -3)\\)",
      "\\((-5, -3)\\)"
    ],
    a: 3,
    answer: 3,
    solutionSteps: [
      {
        "explanation": "We begin by writing down the given quadratic equation and preparing it for completing the square. The objective is to convert the expression into a binomial square and a constant term, which allows us to find the coordinates of the turning point. We will first group the variable terms.",
        "workingOut": "Given equation: \\(y = x^2 + 10x + 22\\)",
        "graphData": null
      },
      {
        "explanation": "Next, we take the coefficient of the linear term, divide it by two, square it, and then add and subtract this value to complete the square. This process creates a perfect square trinomial. A common mistake is forgetting to subtract the squared term, which would change the overall equation balance.",
        "workingOut": "\\(y = (x^2 + 10x + 25) - 25 + 22 \\;\\Rightarrow\\; y = (x + 5)^2 - 3\\)",
        "graphData": null
      },
      {
        "explanation": "Finally, we extract the coordinates of the turning point by comparing the equation with the standard vertex form. The horizontal coordinate is the value of the variable that makes the squared term zero, and the vertical coordinate is the constant. This matches our target coordinates.",
        "workingOut": "Standard form: \\(y = (x - h)^2 + k \\;\\Rightarrow\\; \\text{Turning Point: } (-5, -3)\\)",
        "graphData": null
      }
    ],
    isNew: true
  };

  await docRef.update(updateData);
  console.log(`Successfully updated document ${docId} in Firestore!`);
}

run().catch(console.error);
