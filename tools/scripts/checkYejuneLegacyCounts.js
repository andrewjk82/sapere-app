import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const chapters = ['y11a-10', 'y11a-13', 'y12a-7', 'y12a-4'];

(async () => {
  for (const cid of chapters) {
    const snap = await db.collection('questions').where('chapterId', '==', cid).get();
    console.log(`${cid}: legacy query found ${snap.size} question docs (isActive breakdown: active=${snap.docs.filter(d=>d.data().isActive!==false).length}, inactive=${snap.docs.filter(d=>d.data().isActive===false).length})`);
  }
  process.exit(0);
})();
