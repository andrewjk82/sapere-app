import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  const snap = await db.collection('questions').where('chapterId', '==', 'y7-4').where('topicId', '==', 'y7-4a').get();
  const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  writeFileSync('/private/tmp/claude-501/-Users-andrewkim-Desktop-sapere1/2091ab3e-e938-4ba3-9128-dd1b9704abe8/scratchpad/y7-4a-dump.json', JSON.stringify(docs, null, 2));
  console.log('dumped', docs.length, 'docs');
  process.exit(0);
})();
