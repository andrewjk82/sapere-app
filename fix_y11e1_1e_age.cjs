const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('e033cb5a9356fd410e7af76d207f0625');
  
  await docRef.update({
    options: [
      { text: "Father: 36, Son: 12", imageUrl: "" },
      { text: "Father: 34, Son: 10", imageUrl: "" },
      { text: "Father: 38, Son: 14", imageUrl: "" },
      { text: "Father: 40, Son: 12", imageUrl: "" }
    ],
    answer: 0,
    solution: "Father: 36, Son: 12",
    solutionSteps: [
      {
        explanation: "Let \\( f \\) be the father's current age, and \\( s \\) be the son's current age. From the first sentence, we know that \\( f = 3s \\).",
        workingOut: "\\( f = 3s \\)",
        graphData: null
      },
      {
        explanation: "In 12 years, the father will be \\( f + 12 \\), and the son will be \\( s + 12 \\). The father will be twice as old as the son.",
        workingOut: "\\( f + 12 = 2(s + 12) \\)",
        graphData: null
      },
      {
        explanation: "Substitute \\( f = 3s \\) into the second equation and solve for \\( s \\).",
        workingOut: "\\( 3s + 12 = 2s + 24 \\implies s = 12 \\)",
        graphData: null
      },
      {
        explanation: "Substitute \\( s = 12 \\) back into the first equation to find \\( f \\).",
        workingOut: "\\( f = 3(12) = 36 \\)",
        graphData: null
      }
    ]
  });

  console.log('Fixed age problem in DB!');
}

run().catch(console.error);
