import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  const questionIds = [
    'y9-5g-q3a',
    'y9-5g-q3b',
    'y9-5g-q3c',
    'y9-5g-q3d',
    'y9-5g-q3e',
    'y9-5g-q3f',
    'y9-5g-q3g',
    'y9-5g-q3h',
    'y9-5g-q3i'
  ];

  for (const id of questionIds) {
    const docRef = questionsCol.doc(id);
    const snap = await docRef.get();
    if (!snap.exists) continue;

    const data = snap.data();
    if (!Array.isArray(data.options)) continue;

    // Clear the text of each option so it becomes an empty string
    const updatedOptions = data.options.map(opt => {
      if (typeof opt === 'object' && opt !== null) {
        return {
          ...opt,
          text: ""
        };
      }
      return opt;
    });

    console.log(`Clearing option text for question ${id}...`);
    batch.update(docRef, {
      options: updatedOptions
    });
  }

  // Bump sync version to force reload
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully removed text labels from MCQ options for y9-5g-q3!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
