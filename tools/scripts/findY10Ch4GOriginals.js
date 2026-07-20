import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y10-4g').get();
  console.log('Total Y10 4G questions in DB:', snap.size);
  
  const docs = snap.docs.map(d => ({ id: d.id, data: d.data() }));
  
  // Sort them roughly by id or coordinate if possible, or just list them
  docs.forEach((d, idx) => {
    console.log(`\n[${idx+1}] ID: ${d.id}`);
    console.log(`    Q: ${d.data.question}`);
    console.log(`    type: ${d.data.type}`);
    console.log(`    isNew: ${d.data.isNew}`);
    if (d.data.subQuestions) {
      console.log(`    SubQuestions Count: ${d.data.subQuestions.length}`);
      d.data.subQuestions.forEach((sq, sidx) => {
        console.log(`       Sub[${sidx+1}] ID: ${sq.id} | Q: ${sq.question}`);
      });
    }
  });
  
  process.exit(0);
})();
