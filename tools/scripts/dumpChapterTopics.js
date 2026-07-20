import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const chapterIds = process.argv.slice(2);
if (chapterIds.length === 0) {
  console.error('Usage: node dumpChapterTopics.js <chapterId> [chapterId ...]');
  process.exit(1);
}

(async () => {
  for (const chapterId of chapterIds) {
    const snap = await db.collection('questions').where('chapterId', '==', chapterId).get();
    const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    const topicCounts = {};
    const typeCounts = {};
    let teacherOrigin = 0;
    let manualGrading = 0;
    docs.forEach(d => {
      const t = d.topicId || 'unknown';
      topicCounts[t] = (topicCounts[t] || 0) + 1;
      typeCounts[d.type || 'unknown'] = (typeCounts[d.type || 'unknown'] || 0) + 1;
      if (d.origin === 'teacher') teacherOrigin++;
      if (d.requiresManualGrading) manualGrading++;
    });
    console.log(`\n=== ${chapterId} ===`);
    console.log('total:', docs.length);
    console.log('topics:', topicCounts);
    console.log('types:', typeCounts);
    console.log('teacher origin:', teacherOrigin, ' manualGrading:', manualGrading);
    writeFileSync(`/Users/andrewkim/Desktop/sapere1/tools/audit-state/dump-${chapterId}.json`, JSON.stringify(docs, null, 2));
  }
  process.exit(0);
})();
