/**
 * Pull converted Y7-6 / Y7-23 MC questions from Firestore back into seed files.
 *   node tools/scripts/syncY7SeedsFromFirestore.cjs
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

const SA =
  process.env.GOOGLE_APPLICATION_CREDENTIALS ||
  '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const ROOT = path.resolve(__dirname, '../..');

const MAP = [
  { prefix: 'y7-6a-', exportName: 'Y7_CH6A_QUESTIONS', file: 'src/constants/seedYear7Ch6AQuestions.js' },
  { prefix: 'y7-6b-', exportName: 'Y7_CH6B_QUESTIONS', file: 'src/constants/seedYear7Ch6BQuestions.js' },
  { prefix: 'y7-6c-', exportName: 'Y7_CH6C_QUESTIONS', file: 'src/constants/seedYear7Ch6CQuestions.js' },
  { prefix: 'y7-6d-', exportName: 'Y7_CH6D_QUESTIONS', file: 'src/constants/seedYear7Ch6DQuestions.js' },
  { prefix: 'y7-23a-', exportName: 'Y7_CH23A_QUESTIONS', file: 'src/constants/seedYear7Ch23AQuestions.js' },
  { prefix: 'y7-23b-', exportName: 'Y7_CH23B_QUESTIONS', file: 'src/constants/seedYear7Ch23BQuestions.js' },
  { prefix: 'y7-23c-', exportName: 'Y7_CH23C_QUESTIONS', file: 'src/constants/seedYear7Ch23CQuestions.js' },
  { prefix: 'y7-23d-', exportName: 'Y7_CH23D_QUESTIONS', file: 'src/constants/seedYear7Ch23DQuestions.js' },
  { prefix: 'y7-23e-', exportName: 'Y7_CH23E_QUESTIONS', file: 'src/constants/seedYear7Ch23EQuestions.js' },
  { prefix: 'y7-23f-', exportName: 'Y7_CH23F_QUESTIONS', file: 'src/constants/seedYear7Ch23FQuestions.js' },
  { prefix: 'y7-23h-', exportName: 'Y7_CH23H_QUESTIONS', file: 'src/constants/seedYear7Ch23HQuestions.js' },
  { prefix: 'y7-23i-', exportName: 'Y7_CH23I_QUESTIONS', file: 'src/constants/seedYear7Ch23IQuestions.js' },
  { prefix: 'y7-23j-', exportName: 'Y7_CH23J_QUESTIONS', file: 'src/constants/seedYear7Ch23JQuestions.js' },
];

function toSeedShape(id, d) {
  const opts = (d.options || []).map((o) => (typeof o === 'string' ? o : o.text || ''));
  return {
    id,
    topicId: d.topicId,
    c: d.topicCode || d.c,
    t: d.topicTitle || d.t,
    type: d.type || 'multiple_choice',
    difficulty: d.difficulty || 'medium',
    timeLimit: d.timeLimit || 90,
    question: d.question || '',
    a: Number(d.answer),
    answer: String(d.answer ?? ''),
    opts,
    hint: d.hint || '',
    solution: d.solution || '',
    solutionSteps: Array.isArray(d.solutionSteps)
      ? d.solutionSteps.map((s) => ({
          explanation: s.explanation || '',
          workingOut: s.workingOut || '',
          graphData: s.graphData ?? null,
        }))
      : [],
    graphData: d.graphData ?? null,
    isNew: true,
  };
}

async function main() {
  const sa = JSON.parse(readFileSync(SA, 'utf8'));
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  for (const ch of ['y7-6', 'y7-23']) {
    const snap = await db.collection('questions').where('chapterId', '==', ch).get();
    const byId = {};
    for (const doc of snap.docs) {
      byId[doc.id] = doc.data();
    }
    for (const m of MAP) {
      if (!m.prefix.startsWith(ch === 'y7-6' ? 'y7-6' : 'y7-23')) continue;
      const ids = Object.keys(byId)
        .filter((id) => id.startsWith(m.prefix))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
      if (ids.length === 0) {
        // keep existing seed if FS empty for prefix
        console.log('no FS docs for', m.prefix, '— leave seed');
        continue;
      }
      const arr = ids.map((id) => toSeedShape(id, byId[id]));
      const out = `export const ${m.exportName} = ${JSON.stringify(arr, null, 2)};\n`;
      writeFileSync(path.join(ROOT, m.file), out);
      console.log('wrote', m.file, arr.length);
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
