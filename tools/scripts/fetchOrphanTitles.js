/**
 * Cheap read: for each orphan chapter (exists in question_index but not in
 * curriculumSeeds.js) that has count > 0, fetch exactly ONE sample question
 * doc (using the first id already listed in question_index) to recover
 * chapterTitle/topicTitle/topicCode/year for the chapter map. This is ~30
 * single-doc reads total, not a collection scan.
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const orphanChapterIds = JSON.parse(readFileSync(process.argv[2], 'utf8'));

(async () => {
  const results = {};
  for (const chapterId of orphanChapterIds) {
    const idxSnap = await db.doc(`question_index/${chapterId}`).get();
    if (!idxSnap.exists) continue;
    const { ids = [], count = 0 } = idxSnap.data();
    if (count === 0 || ids.length === 0) {
      results[chapterId] = { count: 0, sample: null };
      continue;
    }
    const sampleSnap = await db.doc(`questions/${ids[0]}`).get();
    if (sampleSnap.exists) {
      const d = sampleSnap.data();
      results[chapterId] = {
        count,
        year: d.year || null,
        chapterTitle: d.chapterTitle || null,
        topicSample: { topicId: d.topicId, topicCode: d.topicCode, topicTitle: d.topicTitle },
      };
    } else {
      results[chapterId] = { count, sample: 'id-not-found' };
    }
  }
  writeFileSync('/Users/andrewkim/Desktop/sapere1/tools/audit-state/orphan_chapter_titles.json', JSON.stringify(results, null, 2));
  console.log('done, chapters processed:', Object.keys(results).length);
  process.exit(0);
})();
