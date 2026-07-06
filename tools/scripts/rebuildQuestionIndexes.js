/**
 * rebuildQuestionIndexes.js
 * ─────────────────────────────────────────────────────────────────────────
 * Rebuild question_index / question_topic_index / question_counts for the
 * given chapters from the ACTUAL questions collection state.
 *
 * RUN THIS AFTER ANY ADMIN-SDK SCRIPT THAT WRITES/DELETES QUESTION DOCS.
 * The client keeps these denormalized docs in sync incrementally, but admin
 * scripts bypass the client — leaving question_index pointing at deleted ids
 * or missing new ones. Readers (Question Bank, practice pools, daily
 * assignments) trust an EXISTING index doc completely, so a stale/partial
 * index silently hides questions from students and teachers.
 * (2026-07-06 incident: migrateY5Ch5Questions.js re-uploaded y5-ar-4 without
 * rebuilding the index → Question Bank showed 1 of 23 questions.)
 *
 * Usage:
 *   node tools/scripts/rebuildQuestionIndexes.js <chapterId> [chapterId ...]
 *   node tools/scripts/rebuildQuestionIndexes.js y5-ar y5-rn
 * ─────────────────────────────────────────────────────────────────────────
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const chapterIds = process.argv.slice(2).filter(Boolean);
if (chapterIds.length === 0) {
  console.error('Usage: node tools/scripts/rebuildQuestionIndexes.js <chapterId> [chapterId ...]');
  process.exit(1);
}

async function run() {
  // One shared version across sync_meta/questions, question_index/_meta and
  // question_counts — if they diverge the counts doc looks stale and triggers
  // a full rebuild on the next admin Curriculum load.
  const version = Date.now();
  const counts = {};

  for (const chapterId of chapterIds) {
    const prevIndexSnap = await db.collection('question_index').doc(chapterId).get();
    const prevIds = new Set(prevIndexSnap.data()?.ids || []);

    const snap = await db.collection('questions').where('chapterId', '==', chapterId).get();
    const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    const active = docs.filter((q) => q.isActive !== false);

    // question_index/{chapterId}: every ACTIVE question in the chapter.
    const ids = active.map((q) => q.id).sort();
    await db.collection('question_index').doc(chapterId).set({
      ids,
      count: ids.length,
      updatedAt: FieldValue.serverTimestamp(),
    });
    console.log(`question_index/${chapterId}: ${ids.length} ids (was scanning ${docs.length} docs)`);

    // Stamp isNew:true on ids that weren't in the previous index — these are
    // the questions this run (or the script that ran before it) actually
    // added. Powers the unread badges in Curriculum/QuestionBankPage; admin
    // scripts don't need to set isNew themselves since this is the one
    // required step after any questions-collection write (see CLAUDE.md).
    const newlyAdded = active.filter((q) => !prevIds.has(q.id));
    if (newlyAdded.length > 0) {
      const batches = [];
      for (let i = 0; i < newlyAdded.length; i += 400) {
        const batch = db.batch();
        newlyAdded.slice(i, i + 400).forEach((q) => {
          batch.set(db.collection('questions').doc(q.id), { isNew: true }, { merge: true });
        });
        batches.push(batch.commit());
      }
      await Promise.all(batches);
      console.log(`  isNew stamped on ${newlyAdded.length} new question(s):`);
      newlyAdded.forEach((q) => console.log(`    + ${q.id} (topic: ${q.topicId || 'n/a'})`));
    }

    // question_topic_index/{topicId}: seed-origin ids per topic. The chapter
    // seeder diffs against this doc, so teacher-added/edited docs are
    // excluded here exactly like the seeder's own fallback scan does.
    const byTopic = {};
    active.forEach((q) => {
      if (!q.topicId || q.origin === 'teacher') return;
      (byTopic[q.topicId] = byTopic[q.topicId] || []).push(q.id);
    });
    for (const [topicId, topicIds] of Object.entries(byTopic)) {
      await db.collection('question_topic_index').doc(topicId).set({
        ids: topicIds.sort(),
        chapterId,
        updatedAt: FieldValue.serverTimestamp(),
      });
      console.log(`  question_topic_index/${topicId}: ${topicIds.length} ids`);
    }

    // Aggregate counts mirror recountIds(): raw doc count per chapter/topic.
    counts[chapterId] = docs.length;
    const topicDocCounts = {};
    docs.forEach((q) => {
      if (q.topicId) topicDocCounts[q.topicId] = (topicDocCounts[q.topicId] || 0) + 1;
    });
    Object.assign(counts, topicDocCounts);
  }

  // membershipVersion bump: the active-question SET changed from the readers'
  // point of view, so student practice_pool signatures must rebuild.
  await db.collection('sync_meta').doc('questions').set({
    version,
    membershipVersion: version,
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  await db.collection('question_index').doc('_meta').set({
    builtVersion: version,
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });
  await db.collection('sync_meta').doc('question_counts').set({
    counts,
    version,
    updatedAt: FieldValue.serverTimestamp(),
  }, { merge: true });

  console.log(`\n✅ Rebuilt ${chapterIds.length} chapter(s); stamped version ${version} on sync_meta/questions, question_index/_meta and question_counts.`);
}

run().then(() => process.exit(0)).catch((err) => { console.error(err); process.exit(1); });
