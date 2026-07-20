import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const OUT_PATH = '/Users/andrewkim/Desktop/sapere1/tools/audit-state/y11a-3-full-dump.json';

(async () => {
  const snap = await db.collection('questions').where('chapterId', '==', 'y11a-3').get();
  const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  writeFileSync(OUT_PATH, JSON.stringify(docs, null, 2));
  console.log(`Fetched ${docs.length} docs (1 query). Saved to ${OUT_PATH}`);
  process.exit(0);
})().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
