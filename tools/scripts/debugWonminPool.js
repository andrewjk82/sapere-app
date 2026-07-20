import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const wominUid = '1paF63GBe6ZVzMpOl2ZM9fGjGpw2';
const yesterday = '2026-07-11';

// 1. Check yesterday's daily assignment
const assignSnap = await db.collection('users').doc(wominUid).collection('daily_assignments').doc(yesterday).get();
if (assignSnap.exists) {
  const a = assignSnap.data();
  console.log(`=== YESTERDAY ASSIGNMENT (${yesterday}) ===`);
  console.log(`status: ${a.status}`);
  console.log(`questionCount: ${a.questionCount}`);
  console.log(`requestedQuestionCount: ${a.requestedQuestionCount}`);
  console.log(`questions.length: ${(a.questions || []).length}`);
  console.log(`questionIds.length: ${(a.questionIds || []).length}`);
  console.log(`generatedBy: ${a.generatedBy}`);
  console.log(`source.manualQuestionCount: ${a.source?.manualQuestionCount}`);
  console.log(`source.generatedQuestionCount: ${a.source?.generatedQuestionCount}`);
  console.log(`source.chapters: ${JSON.stringify(a.source?.chapters)}`);
  
  // Show question IDs
  const qids = (a.questions || []).map(q => q.id);
  console.log(`\nQuestion IDs (${qids.length}):`);
  qids.forEach((id, i) => console.log(`  ${i+1}. ${id}`));
} else {
  console.log(`No assignment for ${yesterday}`);
}

// 2. Check yesterday's stats
const statsSnap = await db.collection('users').doc(wominUid).collection('daily_stats').doc(yesterday).get();
if (statsSnap.exists) {
  const s = statsSnap.data();
  console.log(`\n=== YESTERDAY STATS ===`);
  console.log(`completed: ${s.completed}`);
  console.log(`score: ${s.score}`);
  console.log(`total: ${s.total}`);
  console.log(`questionCount: ${s.questionCount}`);
}

// 3. Check practice pool
const poolSnap = await db.collection('users').doc(wominUid).collection('practice_pool').doc('main').get();
if (poolSnap.exists) {
  const pool = poolSnap.data();
  const cp = pool.chapter_pools || {};
  const ca = pool.chapter_accuracy || {};
  console.log(`\n=== PRACTICE POOL ===`);
  console.log(`cycle: ${pool.cycle}`);
  
  let totalIds = 0, totalDone = 0, totalUndone = 0;
  const chapters = Object.keys(cp).sort();
  for (const cid of chapters) {
    const ids = cp[cid].ids || [];
    const done = cp[cid].done || [];
    const doneSet = new Set(done);
    const undone = ids.filter(id => !doneSet.has(id));
    const acc = ca[cid];
    const accuracy = acc && acc.total > 0 ? `${(acc.correct / acc.total * 100).toFixed(1)}% (${acc.correct}/${acc.total})` : 'N/A';
    totalIds += ids.length;
    totalDone += done.length;
    totalUndone += undone.length;
    console.log(`  ${cid.padEnd(15)}: ids=${String(ids.length).padStart(3)}, done=${String(done.length).padStart(3)}, undone=${String(undone.length).padStart(3)}, accuracy=${accuracy}`);
  }
  console.log(`\n  TOTAL: ids=${totalIds}, done=${totalDone}, undone=${totalUndone}`);

  // 4. Check for STALE IDs (in pool but not in Firestore questions)
  console.log(`\n=== CHECKING STALE IDS ===`);
  const allPoolIds = [];
  for (const cid of chapters) {
    for (const id of (cp[cid].ids || [])) {
      allPoolIds.push({ id, chapter: cid });
    }
  }
  
  let missingCount = 0, inactiveCount = 0;
  const missingIds = [];
  const inactiveIds = [];
  
  for (let i = 0; i < allPoolIds.length; i += 30) {
    const batch = allPoolIds.slice(i, i + 30);
    const snaps = await Promise.all(batch.map(item => db.collection('questions').doc(item.id).get()));
    for (let j = 0; j < snaps.length; j++) {
      if (!snaps[j].exists) {
        missingIds.push(batch[j]);
        missingCount++;
      } else {
        const qd = snaps[j].data();
        if (qd.isActive === false) {
          inactiveIds.push({ ...batch[j], isActive: qd.isActive });
          inactiveCount++;
        }
      }
    }
  }
  
  if (missingIds.length > 0) {
    console.log(`\n  MISSING from Firestore (${missingIds.length}):`);
    missingIds.forEach(m => console.log(`    ${m.id} (chapter: ${m.chapter})`));
  }
  if (inactiveIds.length > 0) {
    console.log(`\n  INACTIVE (isActive=false) (${inactiveIds.length}):`);
    inactiveIds.forEach(m => console.log(`    ${m.id} (chapter: ${m.chapter})`));
  }
  
  if (missingCount === 0 && inactiveCount === 0) {
    console.log(`  All ${allPoolIds.length} pool IDs are valid and active ✓`);
  } else {
    console.log(`\n  TOTAL STALE: ${missingCount + inactiveCount} (missing: ${missingCount}, inactive: ${inactiveCount})`);
  }
}

process.exit(0);
