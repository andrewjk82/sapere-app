// One-off sync: push the corrected graphData.svg for the Ch6A diagram fixes
// (open-tray box corner fix + q10 cube-stack redesign + q11 label/hidden-vertex
// fix) from src/constants/seedYear10Ch6Questions.js into the live `questions`
// Firestore collection. Local seed-file edits alone never reach students —
// QuestionBankPage.jsx reads from Firestore, not the bundled seed constants.
//
// Safety: skips any doc with origin === 'teacher' (never overwrite a
// teacher's manual edit). Only touches the `graphData` field + updatedAt;
// leaves question text, options, solutionSteps etc. untouched.

const admin = require('firebase-admin');
const serviceAccount = require('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
const db = admin.firestore();

const AFFECTED_IDS = [
  'y10-6a-q1a',
  'y10-6a-q1b',
  'y10-6a-q1d',
  'y10-6a-q3',
  'y10-6a-q6a',
  'y10-6a-q9a',
  'y10-6a-q9b',
  'y10-6a-q10',
  'y10-6a-q11',
  'y10-6a-q13a',
  'y10-6a-q13b',
  'y10-6a-q13c',
];

async function main() {
  // Load the seed file via dynamic import (it's an ES module).
  const { Y10_CH6_QUESTIONS } = await import('../../src/constants/seedYear10Ch6Questions.js');
  const byId = new Map(Y10_CH6_QUESTIONS.map(q => [q.id, q]));

  let updated = 0, skippedTeacher = 0, skippedMissing = 0, skippedNoSvg = 0;

  for (const id of AFFECTED_IDS) {
    const seedQ = byId.get(id);
    if (!seedQ || !seedQ.graphData || !seedQ.graphData.svg) {
      console.log('SKIP (no local svg):', id);
      skippedNoSvg++;
      continue;
    }
    const ref = db.collection('questions').doc(id);
    const snap = await ref.get();
    if (!snap.exists) {
      console.log('SKIP (not in Firestore):', id);
      skippedMissing++;
      continue;
    }
    const data = snap.data();
    if (data.origin === 'teacher') {
      console.log('SKIP (origin=teacher, protected):', id);
      skippedTeacher++;
      continue;
    }
    await ref.update({
      graphData: { svg: seedQ.graphData.svg },
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log('UPDATED:', id);
    updated++;
  }

  // Bump the chapter's index updatedAt so chapterQuestionsCache invalidates
  // for every student on their next load, per-chapter only.
  await db.collection('question_index').doc('y10-6a').set(
    { updatedAt: admin.firestore.FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('Bumped question_index/y10-6a.updatedAt');

  console.log(`\nDone. updated=${updated} skippedTeacher=${skippedTeacher} skippedMissing=${skippedMissing} skippedNoSvg=${skippedNoSvg}`);
  process.exit(0);
}

main().catch(e => { console.error(e); process.exit(1); });
