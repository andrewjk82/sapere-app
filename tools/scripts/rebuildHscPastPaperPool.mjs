#!/usr/bin/env node
/**
 * Build sync_meta/hsc_past_paper_pool — the flat id pool that
 * dailyAssignmentService.js draws from when a student has
 * hscPastPaperEnabled:true, so Daily Challenge can mix in HSC trial-paper
 * questions without needing per-question curriculum chapter mapping.
 *
 * Unions question_index/{chapterId}.ids across every exam:* chapter
 * registered in curriculumSeeds.js (CHAPTER_SEED_REGISTRY).
 *
 * Re-run this after adding/removing questions in any exam:* chapter, or
 * after registering a new past-paper chapter.
 *
 * Usage: node tools/scripts/rebuildHscPastPaperPool.mjs
 */
import { readFileSync } from 'fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { CHAPTER_SEED_REGISTRY } from '../../src/constants/curriculumSeeds.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const examChapterIds = CHAPTER_SEED_REGISTRY
  .filter((c) => typeof c.chapterId === 'string' && c.chapterId.startsWith('exam:'))
  .map((c) => c.chapterId);

console.log(`Found ${examChapterIds.length} exam chapters:`, examChapterIds);

async function run() {
  const snaps = await db.getAll(...examChapterIds.map((id) => db.collection('question_index').doc(id)));
  const idSet = new Set();
  const byChapter = {};
  snaps.forEach((snap, i) => {
    const chapterId = examChapterIds[i];
    if (!snap.exists) { console.warn(`  ⚠️  question_index/${chapterId} missing — run rebuildQuestionIndexes.js for it first`); return; }
    const ids = snap.data().ids || [];
    byChapter[chapterId] = ids.length;
    ids.forEach((id) => idSet.add(id));
  });

  const ids = [...idSet];
  console.log('Per-chapter counts:', byChapter);
  console.log(`Total unique ids: ${ids.length}`);

  await db.collection('sync_meta').doc('hsc_past_paper_pool').set({
    ids,
    count: ids.length,
    sourceChapterIds: examChapterIds,
    updatedAt: FieldValue.serverTimestamp(),
  });

  console.log('✅ sync_meta/hsc_past_paper_pool written.');
  process.exit(0);
}

run().catch((err) => { console.error(err); process.exit(1); });
