const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const snapshot = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-11g-q8a')
    .where(FieldPath.documentId(), '<=', 'y9-11g-q8\uf8ff')
    .get();

  const letters = ['a', 'b', 'c', 'd', 'e', 'f'];
  const targetIndexes = [2, 0, 3, 2, 0, 1]; // Just spreading out the correct answer

  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.options && data.options.length === 4) {
      const id = doc.id;
      const letter = id.charAt(id.length - 1);
      const letterIdx = letters.indexOf(letter);
      
      const currentAnsIdx = parseInt(data.answer, 10);
      let newIdx = targetIndexes[letterIdx];
      
      let newOptions = [...data.options];
      let temp = newOptions[currentAnsIdx];
      newOptions[currentAnsIdx] = newOptions[newIdx];
      newOptions[newIdx] = temp;

      batch.update(db.collection('questions').doc(id), {
        options: newOptions,
        answer: newIdx.toString(),
        updatedAt: FieldValue.serverTimestamp()
      });
    }
  });

  await batch.commit();
  console.log("Shuffled options for q8a to q8f successfully.");
  process.exit(0);
}

run().catch(console.error);
