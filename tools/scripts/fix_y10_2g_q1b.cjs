const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  const updates = [
    {
      id: 'y10-2g-q1bi',
      question: "Given the identity \\\\((\\\\sqrt{a} + \\\\sqrt{b})^2 = a + b + 2\\\\sqrt{ab}\\\\), find the exact value of \\\\(\\\\sqrt{14 + 2\\\\sqrt{33}}\\\\)."
    },
    {
      id: 'y10-2g-q1bii',
      question: "Given the identity \\\\((\\\\sqrt{a} - \\\\sqrt{b})^2 = a + b - 2\\\\sqrt{ab}\\\\), find the exact value of \\\\(\\\\sqrt{14 - 2\\\\sqrt{33}}\\\\)."
    }
  ];
  
  for (const item of updates) {
    const docRef = db.collection('questions').doc(item.id);
    const doc = await docRef.get();
    if (doc.exists) {
      await docRef.update({
        question: item.question
      });
      console.log('Updated question text for ' + item.id);
    }
  }
  
  process.exit(0);
}

run().catch(console.error);
