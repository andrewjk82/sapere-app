const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y8-19a-q3');
  const snap = await docRef.get();
  
  if (snap.exists) {
    const data = snap.data();
    if (data.solutionSteps && data.solutionSteps.length > 0) {
      // Fix the typo in the first step's workingOut
      data.solutionSteps[0].workingOut = '\\(\\text{Mean} = \\frac{\\text{Sum of all values}}{\\text{Total number of values}}\\)';
      
      await docRef.update({
        solutionSteps: data.solutionSteps,
        updatedAt: FieldValue.serverTimestamp()
      });
      console.log('Fixed LaTeX typo in y8-19a-q3');
    }
  }
  process.exit(0);
}

run().catch(console.error);
