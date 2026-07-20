import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    console.log('[Audit & Fix] Fetching all questions from topic y8-4a to sync fields...');
    const snap = await db.collection('questions').where('topicId', '==', 'y8-4a').get();
    console.log(`Found ${snap.size} questions in topic y8-4a.`);

    let fixedCount = 0;

    for (const doc of snap.docs) {
      const data = doc.data();
      
      // We only convert multiple_choice type questions
      if (data.type === 'multiple_choice') {
        const updatePayload = {};
        let modified = false;

        // Rule 11-1: Ensure opts and options are identical and synced
        if (data.options && Array.isArray(data.options)) {
          updatePayload.opts = data.options;
          updatePayload.options = data.options;
          modified = true;
        } else if (data.opts && Array.isArray(data.opts)) {
          updatePayload.opts = data.opts;
          updatePayload.options = data.opts;
          modified = true;
        }

        // Rule 11-1: Ensure a and answer are identical and synced integers
        if (data.answer !== undefined) {
          const ansInt = typeof data.answer === 'string' ? parseInt(data.answer, 10) : data.answer;
          updatePayload.a = ansInt;
          updatePayload.answer = ansInt;
          modified = true;
        } else if (data.a !== undefined) {
          const aInt = typeof data.a === 'string' ? parseInt(data.a, 10) : data.a;
          updatePayload.a = aInt;
          updatePayload.answer = aInt;
          modified = true;
        }

        if (modified) {
          await doc.ref.update(updatePayload);
          console.log(`  [SYNCED] ID: ${doc.id} -> Synced opts/options & a/answer.`);
          fixedCount++;
        }
      }
    }

    console.log(`\nSuccessfully synced fields for ${fixedCount} multiple_choice questions in y8-4a.`);
    process.exit(0);
  } catch (err) {
    console.error('Fatal error during field synchronization:', err);
    process.exit(1);
  }
})();
