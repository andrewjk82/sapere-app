import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const list = JSON.parse(readFileSync('/private/tmp/claude-501/-Users-andrewkim-Desktop-sapere1/2091ab3e-e938-4ba3-9128-dd1b9704abe8/scratchpad/answer-mismatch-list.json', 'utf8'));

(async () => {
  const results = [];
  for (const item of list) {
    const snap = await db.doc(`questions/${item.id}`).get();
    if (snap.exists) {
      results.push({ id: item.id, chapterId: item.chapterId, topicId: item.topicId, ...snap.data() });
    }
  }
  writeFileSync('/private/tmp/claude-501/-Users-andrewkim-Desktop-sapere1/2091ab3e-e938-4ba3-9128-dd1b9704abe8/scratchpad/answer-mismatch-full.json', JSON.stringify(results, null, 2));
  console.log('fetched', results.length, 'docs');
  process.exit(0);
})();
