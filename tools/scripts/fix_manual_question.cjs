const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docId = 'n7HufknabA4acDCzrkSI';
  const docRef = db.collection('questions').doc(docId);
  
  const updateData = {
    answer: "3", // Index 3 is \(0.6\)
    solutionSteps: [
      {
        explanation: "To convert the fraction \\(\\frac{3}{5}\\) into a decimal, we can find an equivalent fraction with a denominator of 10.",
        workingOut: "\\(\\frac{3 \\times 2}{5 \\times 2} = \\frac{6}{10}\\)",
        graphData: null
      },
      {
        explanation: "Now write the fraction \\(\\frac{6}{10}\\) as a decimal.",
        workingOut: "\\(\\frac{6}{10} = 0.6\\)",
        graphData: null
      },
      {
        explanation: "Therefore, the decimal representation is 0.6.",
        workingOut: "\\(0.6\\)",
        graphData: null
      }
    ]
  };

  await docRef.update(updateData);
  console.log(`Successfully updated question ${docId} in Firestore.`);
  process.exit(0);
}

run().catch(console.error);
