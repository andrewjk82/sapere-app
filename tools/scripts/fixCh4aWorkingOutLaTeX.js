import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

async function run() {
  const batch = db.batch();
  const questionsCol = db.collection('questions');

  const workingOutMap = {
    'y9-4a-3a': '\\(8(y + 4)\\)',
    'y9-4a-3b': '\\(7(b + 3)\\)',
    'y9-4a-3c': '\\(p(q + 6)\\)',
    'y9-4a-3d': '\\(m(m + 1)\\)',
    'y9-4a-3e': '\\(v(v + u)\\)',
    'y9-4a-3f': '\\(4(y + 9)\\)',
    'y9-4a-3g': '\\(5(z + 6)\\)',
    'y9-4a-3h': '\\(8(m - 9)\\)',
    'y9-4a-3i': '\\(10(c + 4)\\)',
    'y9-4a-3j': '\\(p(p + 8)\\)',
    'y9-4a-3k': '\\(q(q - 4)\\)',
    'y9-4a-3l': '\\(5(3z + 4)\\)',
    'y9-4a-3m': '\\(15(2x - 3)\\)',
    'y9-4a-3n': '\\(-8(2b + 3)\\)',
    'y9-4a-3o': '\\(-4(2x + 3)\\)',
    'y9-4a-3p': '\\(-5(1 + 3p)\\)',
    'y9-4a-4a': '\\(5p(q + 4)\\)',
    'y9-4a-4b': '\\(5b(3b + 2)\\)',
    'y9-4a-4c': '\\(12xy(2x + y)\\)',
    'y9-4a-4d': '\\(5uv^2(4u + 3)\\)'
  };

  for (const [id, latex] of Object.entries(workingOutMap)) {
    console.log(`Wrapping workingOut in LaTeX delimiters for ${id}: ${latex}`);
    const docRef = questionsCol.doc(id);
    batch.update(docRef, {
      solutionSteps: [
        {
          explanation: id.includes('-3') 
            ? `Find the Highest Common Factor (HCF) of the terms, and factor it out.`
            : `Find the Highest Common Factor (HCF) of the terms, and factor it out.`,
          workingOut: latex
        }
      ]
    });
  }

  // Update sync version
  const questionsMetaRef = db.doc('sync_meta/questions');
  const now = Date.now();
  batch.update(questionsMetaRef, {
    version: now,
    membershipVersion: now,
    updatedAt: FieldValue.serverTimestamp()
  });

  await batch.commit();
  console.log('Successfully wrapped all Ch4A converted workingOut expressions in LaTeX!');
  process.exit(0);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
