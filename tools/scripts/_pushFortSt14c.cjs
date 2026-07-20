const { readFileSync } = require('fs');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

function loadExport(file, name) {
  const src = readFileSync(file, 'utf8');
  const body = src.replace(new RegExp(`^export const ${name} = `), 'module.exports = ');
  const tmp = `/tmp/${name}.cjs`;
  require('fs').writeFileSync(tmp, body);
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

const main = loadExport('/Users/andrewkim/Desktop/sapere1/src/constants/seedFortSt2020Questions.js', 'FORTST_2020_QUESTIONS');
const sim = loadExport('/Users/andrewkim/Desktop/sapere1/src/constants/seedFortSt2020SimilarQuestions.js', 'FORTST_2020_SIMILAR_QUESTIONS');
const q1 = main.find(q => q.id === 'fortst2020-q14c');
const q2 = sim.find(q => q.id === 'fortst2020s-q14c');
if (!q1 || !q2) throw new Error('missing seed items');
if (q1.type !== 'multiple_choice' || q2.type !== 'multiple_choice') throw new Error('not MC');
if (q1.opts[q1.a] !== '\\(3\\ln 4\\)') throw new Error('wrong correct fortst: ' + q1.opts[q1.a]);
if (q2.opts[q2.a] !== '\\(2+\\ln 3\\)') throw new Error('wrong correct similar: ' + q2.opts[q2.a]);
console.log('seed OK', q1.id, 'a=', q1.a, q1.opts[q1.a]);
console.log('seed OK', q2.id, 'a=', q2.a, q2.opts[q2.a]);

const sa = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

async function upsert(raw, meta) {
  const ref = db.collection('questions').doc(raw.id);
  const snap = await ref.get();
  if (snap.exists && snap.data()?.origin === 'teacher') {
    console.log('skip teacher', raw.id);
    return;
  }
  const prev = snap.exists ? snap.data() : {};
  const payload = {
    chapterId: prev.chapterId || meta.chapterId,
    chapterTitle: prev.chapterTitle || meta.chapterTitle,
    topicId: raw.topicId || 'y12a-5E',
    topicCode: raw.c || '5E',
    topicTitle: raw.t || prev.topicTitle || 'Applications of integration of e^x',
    year: prev.year || 'Year 12',
    source: raw.source || prev.source || '',
    isManual: true,
    origin: prev.origin || 'seed',
    isActive: true,
    title: String(raw.q || raw.question || '').replace(/\\[\(\)\[\]]/g, '').slice(0, 40) + '...',
    question: raw.question || raw.q,
    difficulty: raw.difficulty || 'hard',
    type: 'multiple_choice',
    requiresManualGrading: false,
    options: raw.opts.map((t) => ({ text: t, imageUrl: '' })),
    answer: String(raw.a),
    hint: raw.hint || raw.h || '',
    solution: raw.solution || raw.s || '',
    solutionSteps: (raw.solutionSteps || []).map((s) => ({
      explanation: s.explanation,
      workingOut: s.workingOut?.startsWith('\\(') ? s.workingOut : (s.workingOut ? `\\(${s.workingOut}\\)` : ''),
      graphData: s.graphData ?? null,
    })),
    subQuestions: [],
    isNew: true,
    updatedAt: FieldValue.serverTimestamp(),
  };
  if (!snap.exists) payload.createdAt = FieldValue.serverTimestamp();
  await ref.set(payload, { merge: true });
  console.log('upserted', raw.id, 'ans', payload.answer, payload.options[Number(payload.answer)].text);
}

(async () => {
  await upsert(q1, { chapterId: 'exam:fortst2020', chapterTitle: 'Exam Practice' });
  await upsert(q2, { chapterId: 'exam:fortst2020similar', chapterTitle: 'Exam Practice' });
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('sync version', ver);
})().catch((e) => { console.error(e); process.exit(1); });
