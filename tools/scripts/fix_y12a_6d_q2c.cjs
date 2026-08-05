const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { touchChapterIndex } = require('./_lib/touchChapterIndex.js');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const improvedSteps = [
    { 
      explanation: "Find the antiderivative of the function. The integral of \\(\\sin x\\) is \\(-\\cos x\\).", 
      workingOut: "\\(\\int_{0}^{\\frac{\\pi}{4}} \\sin x \\,dx = \\left[ -\\cos x \\right]_{0}^{\\frac{\\pi}{4}}\\)", 
      graphData: null 
    },
    { 
      explanation: "Substitute the upper bound (\\(\\frac{\\pi}{4}\\)) and the lower bound (\\(0\\)) into the antiderivative.", 
      workingOut: "\\(= \\left(-\\cos\\left(\\frac{\\pi}{4}\\right)\\right) - \\left(-\\cos(0)\\right)\\)", 
      graphData: null 
    },
    { 
      explanation: "Evaluate the exact trigonometric values: \\(\\cos\\left(\\frac{\\pi}{4}\\right) = \\frac{1}{\\sqrt{2}}\\) and \\(\\cos(0) = 1\\).", 
      workingOut: "\\(= -\\frac{1}{\\sqrt{2}} - (-1)\\)", 
      graphData: null 
    },
    { 
      explanation: "Simplify the expression by combining the terms.", 
      workingOut: "\\(= 1 - \\frac{1}{\\sqrt{2}}\\)", 
      graphData: null 
    }
  ];

  await db.collection('questions').doc('y12a-6d-q2c').update({
    solutionSteps: improvedSteps,
    updatedAt: FieldValue.serverTimestamp()
  });
  console.log('Fixed y12a-6d-q2c solution steps');
  
  console.log('Syncing chapter index for y12a-6...');
  await touchChapterIndex(db, 'y12a-6'); 
  console.log('Sync complete.');

  process.exit(0);
}

run().catch(console.error);
