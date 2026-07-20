import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const usersSnap = await db.collection('users').get();
let totalCleaned = 0;

for (const userDoc of usersSnap.docs) {
  const uid = userDoc.id;
  const name = userDoc.data().name || userDoc.data().firstName || uid;
  
  const poolSnap = await db.collection('users').doc(uid).collection('practice_pool').doc('main').get();
  if (!poolSnap.exists) continue;
  
  const pool = poolSnap.data();
  const cp = pool.chapter_pools || {};
  const chapters = Object.keys(cp);
  if (chapters.length === 0) continue;
  
  // Collect ALL ids from all chapters
  const allIds = [];
  for (const cid of chapters) {
    for (const id of (cp[cid].ids || [])) {
      allIds.push({ id, chapter: cid });
    }
  }
  if (allIds.length === 0) continue;
  
  // Batch-check existence in Firestore questions collection
  const missingIds = new Set();
  for (let i = 0; i < allIds.length; i += 30) {
    const batch = allIds.slice(i, i + 30);
    const snaps = await Promise.all(batch.map(item => db.collection('questions').doc(item.id).get()));
    for (let j = 0; j < snaps.length; j++) {
      if (!snaps[j].exists) {
        missingIds.add(batch[j].id);
      } else if (snaps[j].data().isActive === false) {
        missingIds.add(batch[j].id);
      }
    }
  }
  
  if (missingIds.size === 0) continue;
  
  // Clean up: remove stale IDs from ids AND done arrays
  const cleanedPools = {};
  let removedCount = 0;
  for (const cid of chapters) {
    const orig = cp[cid];
    const cleanIds = (orig.ids || []).filter(id => !missingIds.has(id));
    const cleanDone = (orig.done || []).filter(id => !missingIds.has(id));
    const removed = (orig.ids || []).length - cleanIds.length;
    removedCount += removed;
    cleanedPools[cid] = { ...orig, ids: cleanIds, done: cleanDone };
  }
  
  if (removedCount > 0) {
    console.log(`${name}: removed ${removedCount} stale IDs (${[...missingIds].join(', ')})`);
    await db.collection('users').doc(uid).collection('practice_pool').doc('main').set(
      { ...pool, chapter_pools: cleanedPools },
      { merge: false }
    );
    totalCleaned += removedCount;
  }
}

console.log(`\n=== DONE: Cleaned ${totalCleaned} stale IDs across all students ===`);
process.exit(0);
