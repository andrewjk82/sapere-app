import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

(async () => {
  console.log('--- Finding Yejune ---');
  const userSnap = await db.collection('users').get();
  let yejuneUid = null;
  let yejuneData = null;
  userSnap.forEach(doc => {
    const data = doc.data();
    const first = (data.firstName || '').toString().trim().toLowerCase();
    const display = (data.displayName || '').toString().trim().toLowerCase();
    if (first.startsWith('yejune') || display.startsWith('yejune')) {
      yejuneUid = doc.id;
      yejuneData = data;
    }
  });

  if (!yejuneUid) {
    console.log('Yejune not found in users collection.');
    process.exit(0);
  }
  console.log(`Found Yejune: UID=${yejuneUid}, email=${yejuneData.email}, firstName=${yejuneData.firstName}, year=${yejuneData.year}`);

  // Practice pool
  const poolSnap = await db.collection('users').doc(yejuneUid).collection('practice_pool').doc('main').get();
  if (!poolSnap.exists) {
    console.log('\nNo practice_pool/main doc.');
  } else {
    const pool = poolSnap.data();
    const cp = pool.chapter_pools || {};
    console.log(`\n=== PRACTICE POOL (cycle=${pool.cycle}) ===`);

    const allPoolIds = [];
    for (const cid of Object.keys(cp)) {
      const ids = cp[cid].ids || [];
      const done = cp[cid].done || [];
      console.log(`  ${cid}: ids=${ids.length}, done=${done.length}`);
      for (const id of ids) allPoolIds.push({ id, chapter: cid });
    }

    console.log(`\n=== CHECKING STALE IDS (${allPoolIds.length} total) ===`);
    const missingIds = [];
    const inactiveIds = [];
    for (let i = 0; i < allPoolIds.length; i += 30) {
      const batch = allPoolIds.slice(i, i + 30);
      const snaps = await Promise.all(batch.map(item => db.collection('questions').doc(item.id).get()));
      snaps.forEach((snap, j) => {
        if (!snap.exists) {
          missingIds.push(batch[j]);
        } else if (snap.data().isActive === false) {
          inactiveIds.push(batch[j]);
        }
      });
    }
    if (missingIds.length) {
      console.log(`  MISSING from Firestore (${missingIds.length}):`);
      missingIds.forEach(m => console.log(`    ${m.id} (chapter: ${m.chapter})`));
    }
    if (inactiveIds.length) {
      console.log(`  INACTIVE (${inactiveIds.length}):`);
      inactiveIds.forEach(m => console.log(`    ${m.id} (chapter: ${m.chapter})`));
    }
    if (!missingIds.length && !inactiveIds.length) {
      console.log('  All pool IDs valid and active.');
    }
  }

  // Today's daily assignment (point read, cheap)
  const today = new Date().toISOString().slice(0, 10);
  const assignSnap = await db.collection('users').doc(yejuneUid).collection('daily_assignments').doc(today).get();
  if (assignSnap.exists) {
    const a = assignSnap.data();
    console.log(`\n=== TODAY ASSIGNMENT (${today}) ===`);
    console.log(`status: ${a.status}, questionCount: ${a.questionCount}, generatedBy: ${a.generatedBy}`);
    const qids = (a.questions || []).map(q => q.id);
    if (qids.length) {
      const snaps = await Promise.all(qids.map(id => db.collection('questions').doc(id).get()));
      snaps.forEach((snap, j) => {
        if (!snap.exists) console.log(`  MISSING question: ${qids[j]}`);
        else if (snap.data().isActive === false) console.log(`  INACTIVE question: ${qids[j]}`);
      });
    }
  } else {
    console.log(`\nNo daily assignment doc for ${today}.`);
  }

  process.exit(0);
})();
