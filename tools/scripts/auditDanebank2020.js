import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  try {
    const snap = await db.collection('questions')
      .where('topicId', '==', 'y12a-exam-dane')
      .get();
    console.log(`Total docs in y12a-exam-dane: ${snap.size}`);

    let blank = 0;
    let hasImage = 0;
    snap.docs.forEach((doc) => {
      const d = doc.data();
      const q = (d.question || '').trim();
      if (!q) {
        blank++;
        if (d.questionImage) hasImage++;
      }
    });
    console.log(`Blank question text: ${blank} / ${snap.size}`);
    console.log(`Of those, have questionImage set: ${hasImage}`);

    // Print the exact one from the screenshot report (options mention
    // "a + b = 0.35" and "The opposite of this statement is true.")
    const suspect = snap.docs.find((doc) => {
      const d = doc.data();
      return (d.options || []).some((o) => String(o?.text || o || '').includes('opposite of this statement'));
    });
    if (suspect) {
      const d = suspect.data();
      console.log(`\n=== Suspect doc: ${suspect.id} ===`);
      console.log(JSON.stringify(d, null, 2));
    } else {
      console.log('\nSuspect doc not found by option text search.');
    }
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
