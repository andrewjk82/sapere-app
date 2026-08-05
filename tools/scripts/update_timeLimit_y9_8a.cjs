const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();

  // First, find all documents in questions collection that start with y9-8a
  const snap = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-8a')
    .where(FieldPath.documentId(), '<=', 'y9-8a\uf8ff')
    .get();

  let updateCount = 0;
  
  for (const doc of snap.docs) {
    const data = doc.data();
    let updates = {};
    
    // Set timeLimit on the document itself if it's a leaf node or even a parent node
    // Usually only leaf nodes have timeLimit that matters, but setting it everywhere is safe.
    if (data.type) {
       updates.timeLimit = 30;
    }
    
    // If it's a parent node, update all subQuestions objects
    if (data.subQuestions && Array.isArray(data.subQuestions)) {
       const newSubQs = data.subQuestions.map(sq => {
         return { ...sq, timeLimit: 30 };
       });
       updates.subQuestions = newSubQs;
    }
    
    if (Object.keys(updates).length > 0) {
       updates.updatedAt = FieldValue.serverTimestamp();
       await doc.ref.update(updates);
       updateCount++;
    }
  }

  console.log('Updated timeLimit to 30 for', updateCount, 'documents in Year 9 Chapter 8A');
  process.exit(0);
}

run().catch(console.error);
