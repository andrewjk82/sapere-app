import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const missingQNums = [8, 11, 14, 30, 32];

(async () => {
  try {
    const snap = await db.collection('questions').where('topicId', '==', 'y12a-exam-dane').get();
    console.log(`Searching for Q numbers: ${missingQNums.join(', ')}`);
    console.log(`Total docs in topic: ${snap.size}\n`);

    const allSources = new Set();
    snap.docs.forEach((doc) => {
      const d = doc.data();
      if (d.source) {
        allSources.add(d.source);
      }
    });

    console.log('All source values found:');
    Array.from(allSources).sort().forEach((s) => console.log(`  - ${s}`));

    console.log('\n--- Looking for missing question numbers ---');
    for (const qNum of missingQNums) {
      const docs = snap.docs.filter((doc) => {
        const source = doc.data().source || '';
        return source.includes(`Q${qNum}`) || source.includes(`Q${qNum}(`);
      });
      console.log(`\nQ${qNum}: Found ${docs.length} doc(s)`);
      docs.forEach((doc) => {
        const d = doc.data();
        console.log(`  ${doc.id}: source="${d.source}", question="${(d.question || '').slice(0, 80)}"`);
      });
    }

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
