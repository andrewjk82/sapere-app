const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docId = 'y9-5g-q3b';
  const docRef = db.collection('questions').doc(docId);
  const doc = await docRef.get();
  
  if (!doc.exists) {
    console.log('Doc does not exist!');
    process.exit(1);
  }
  
  const data = doc.data();
  if (data.solutionSteps && data.solutionSteps.length > 0) {
    // Fix the first step's workingOut to be something sensible
    data.solutionSteps[0].workingOut = "\\(\\text{Closed (filled-in) circle at } 1\\)";
    
    await docRef.update({ solutionSteps: data.solutionSteps });
    console.log(`Successfully updated question ${docId} solutionSteps in Firestore.`);
  } else {
    console.log('No solutionSteps found.');
  }
  
  process.exit(0);
}

run().catch(console.error);
