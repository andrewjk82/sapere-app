const fs = require('fs');
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore, FieldPath, FieldValue } = require('firebase-admin/firestore');

async function run() {
  const serviceAccount = JSON.parse(fs.readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
  initializeApp({ credential: cert(serviceAccount) });
  const db = getFirestore();
  const batch = db.batch();

  const snapshot = await db.collection('questions')
    .where(FieldPath.documentId(), '>=', 'y9-11g-q6a')
    .where(FieldPath.documentId(), '<=', 'y9-11g-q6\uf8ff')
    .get();

  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  
  // Custom shuffle based on a seed to make it deterministic but mixed
  const targetIndexes = [2, 1, 3, 2, 1, 3, 2, 0, 1, 2]; // Just spreading out the correct answer (0, 1, 2, 3)

  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.options && data.options.length === 4) {
      const id = doc.id;
      const letter = id.charAt(id.length - 1);
      const letterIdx = letters.indexOf(letter);
      
      const currentAnsIdx = parseInt(data.answer, 10);
      const correctAnswer = data.options[currentAnsIdx];
      
      // We will place the correct answer at a target index.
      // If target index is out of bounds or same, we just swap.
      let newIdx = targetIndexes[letterIdx];
      
      let newOptions = [...data.options];
      // Swap currentAnsIdx with newIdx
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
  console.log("Shuffled options for q6a to q6j successfully.");
  process.exit(0);
}

run().catch(console.error);
