import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('topicId', '==', 'y10-4c').get();
  console.log('Total Y10 4C questions in DB:', snap.size);
  
  // Find which ones are duplicates and which ones are not yet updated to MCQ
  const docs = snap.docs.map(d => ({ id: d.id, data: d.data() }));
  
  // Let's filter out docs where isNew is not true or type is not multiple_choice
  const oldDocs = docs.filter(d => d.data.isNew !== true || d.data.type !== 'multiple_choice');
  console.log('\nOld or non-MCQ converted docs count:', oldDocs.length);
  oldDocs.forEach((d, i) => {
    console.log(`[${i+1}] ID: ${d.id} | isNew: ${d.data.isNew} | type: ${d.data.type}`);
    console.log(`    Question: ${d.data.question}`);
    console.log(`    Answer: ${d.data.answer}`);
  });
  
  process.exit(0);
})();
