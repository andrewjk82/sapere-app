import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const chapters = ['y11a-13','y12a-7','y12a-4','y11a-10','y11a-2','y11a-8','y11a-3','y11a-9','y11a-4','y12a-8','y12a-6','y12a-1','y12a-3','y12a-9','y11a-12','y11a-6','y11a-7','y12a-5','y12a-2','y11a-5','y12a-10','y11a-1','y11a-11'];

(async () => {
  for (const cid of chapters) {
    const snap = await db.doc(`question_index/${cid}`).get();
    if (!snap.exists) {
      console.log(`${cid}: NO question_index DOC`);
      continue;
    }
    const d = snap.data();
    console.log(`${cid}: count=${d.count}, ids.length=${(d.ids||[]).length}, builtVersion=${d.builtVersion}`);
  }
  process.exit(0);
})();
