const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const docRef = db.collection('questions').doc('y9-11g-q7');
  const doc = await docRef.get();
  
  if (doc.exists) {
    let questionText = doc.data().question;
    
    // Replace **a** with a), **b** with b), etc.
    questionText = questionText.replace(/\*\*([a-h])\*\*/g, '$1)');
    
    await docRef.update({
      question: questionText,
      updatedAt: FieldValue.serverTimestamp()
    });
    console.log("Removed bold formatting from question text successfully.");
  } else {
    console.log("Document not found.");
  }

  process.exit(0);
}

run().catch(console.error);
