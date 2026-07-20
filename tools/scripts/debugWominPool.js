import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

// Find womin student
const usersSnap = await db.collection('users').get();
let wominUid = null;
let wominData = null;
for (const doc of usersSnap.docs) {
  const d = doc.data();
  const name = (d.name || d.firstName || d.displayName || '').toLowerCase();
  if (name.includes('womin')) {
    wominUid = doc.id;
    wominData = d;
    console.log(`\n=== FOUND WOMIN ===`);
    console.log(`UID: ${doc.id}`);
    console.log(`Name: ${d.name || d.firstName}`);
    console.log(`Year: ${JSON.stringify(d.assignedYear)}`);
    console.log(`dailyQuestionCount: ${d.dailyQuestionCount}`);
    console.log(`assignedChapters: ${JSON.stringify(d.assignedChapters)}`);
    break;
  }
}

if (!wominUid) {
  console.log('womin student not found');
  process.exit(1);
}

// Check yesterday's daily assignment (2026-07-11)
const yesterday = '2026-07-11';
const assignSnap = await db.collection('users').doc(wominUid).collection('daily_assignments').doc(yesterday).get();
if (assignSnap.exists()) {
  const a = assignSnap.data();
  console.log(`\n=== YESTERDAY ASSIGNMENT (${yesterday}) ===`);
  console.log(`status: ${a.status}`);
  console.log(`questionCount: ${a.questionCount}`);
  console.log(`requestedQuestionCount: ${a.requestedQuestionCount}`);
  console.log(`questions.length: ${(a.questions || []).length}`);
  console.log(`questionIds.length: ${(a.questionIds || []).length}`);
  console.log(`generatedBy: ${a.generatedBy}`);
  console.log(`source.manualQuestionCount: ${a.source?.manualQuestionCount}`);
  console.log(`source.generatedQuestionCount: ${a.source?.generatedQuestionCount}`);
  console.log(`source.chapters: ${JSON.stringify(a.source?.chapters)}`);
} else {
  console.log(`\nNo assignment found for ${yesterday}`);
}

// Check practice pool
const poolSnap = await db.collection('users').doc(wominUid).collection('practice_pool').doc('main').get();
if (poolSnap.exists()) {
  const pool = poolSnap.data();
  const cp = pool.chapter_pools || {};
  const ca = pool.chapter_accuracy || {};
  console.log(`\n=== PRACTICE POOL ===`);
  console.log(`cycle: ${pool.cycle}`);
  console.log(`curriculumSignature: ${pool.curriculumSignature}`);
  console.log(`Total chapters: ${Object.keys(cp).length}`);
  
  let totalIds = 0, totalDone = 0, totalUndone = 0;
  console.log(`\n--- Chapter breakdown ---`);
  const chapters = Object.keys(cp).sort();
  for (const cid of chapters) {
    const ids = cp[cid].ids || [];
    const done = cp[cid].done || [];
    const undone = ids.filter(id => !new Set(done).has(id));
    const acc = ca[cid];
    const accuracy = acc && acc.total > 0 ? (acc.correct / acc.total * 100).toFixed(1) : 'N/A';
    totalIds += ids.length;
    totalDone += done.length;
    totalUndone += undone.length;
    console.log(`  ${cid}: ids=${ids.length}, done=${done.length}, undone=${undone.length}, accuracy=${accuracy}%`);
  }
  console.log(`\nTOTAL: ids=${totalIds}, done=${totalDone}, undone=${totalUndone}`);
  
  // Check for IDs in pool that DON'T exist in Firestore questions collection
  console.log(`\n=== CHECKING FOR STALE/MISSING IDS ===`);
  const allPoolIds = [];
  for (const cid of chapters) {
    const ids = cp[cid].ids || [];
    allPoolIds.push(...ids);
  }
  
  // Batch check in groups of 30
  let missingCount = 0;
  let inactiveCount = 0;
  for (let i = 0; i < allPoolIds.length; i += 30) {
    const batch = allPoolIds.slice(i, i + 30);
    const snaps = await Promise.all(batch.map(id => db.collection('questions').doc(id).get()));
    for (let j = 0; j < snaps.length; j++) {
      if (!snaps[j].exists()) {
        console.log(`  MISSING: ${batch[j]}`);
        missingCount++;
      } else {
        const qd = snaps[j].data();
        if (qd.isActive === false) {
          console.log(`  INACTIVE: ${batch[j]}`);
          inactiveCount++;
        }
      }
    }
  }
  console.log(`\nMissing IDs: ${missingCount}`);
  console.log(`Inactive IDs: ${inactiveCount}`);
  console.log(`Total stale: ${missingCount + inactiveCount}`);
}

// Check yesterday's stats too
const statsSnap = await db.collection('users').doc(wominUid).collection('daily_stats').doc(yesterday).get();
if (statsSnap.exists()) {
  const s = statsSnap.data();
  console.log(`\n=== YESTERDAY STATS (${yesterday}) ===`);
  console.log(`completed: ${s.completed}`);
  console.log(`score: ${s.score}`);
  console.log(`total: ${s.total}`);
  console.log(`questionCount: ${s.questionCount}`);
}

process.exit(0);
