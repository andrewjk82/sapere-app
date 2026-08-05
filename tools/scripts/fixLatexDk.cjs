const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const sa = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function run() {
  const fixedSolution = '<div style="text-align: left;"><p>Let\'s check the probabilities of each option:</p><ul><li><strong>Rolling an odd number on a 6-sided die</strong>: Odd numbers are {1, 3, 5} (3 outcomes out of 6). Probability = \\(\\frac{3}{6} = \\frac{1}{2}\\).</li><li>Selecting a blue pen (3 blue, 7 black): Probability = \\(\\frac{3}{10}\\).</li><li>Rolling a 5: Probability = \\(\\frac{1}{6}\\).</li><li>Getting a card that is a spade: Spades represent 13 cards out of 52. Probability = \\(\\frac{13}{52} = \\frac{1}{4}\\).</li></ul></div>';
  
  await db.collection('questions').doc('DkUpFtuPP5NCqjRMqmar').update({
    solution: fixedSolution,
    'solutionSteps.1.workingOut': fixedSolution
  });
  console.log('Fixed LaTeX in DkUpFtuPP5NCqjRMqmar');
}
run().catch(console.error);
