const { readFileSync, writeFileSync } = require('fs');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const SEED = require('path').resolve(__dirname, '../../src/constants/seedYear12Ch5DQuestions.js');
const src = readFileSync(SEED, 'utf8');
const body = src.replace(/^export const Y12A_CH5D_QUESTIONS = /, 'module.exports = ');
writeFileSync('/tmp/ch5d-repair.cjs', body);
delete require.cache[require.resolve('/tmp/ch5d-repair.cjs')];
const qs = require('/tmp/ch5d-repair.cjs');

function fix(s) {
  if (typeof s !== 'string') return s;
  let t = s;
  // e{4x} → e^{4x} (does not double-apply to e^{ already)
  t = t.replace(/e\{/g, 'e^{');

  // Inside exponents: \dfrac → \frac (never leave displaystyle in superscripts)
  t = t.replace(/e\^\{\\dfrac/g, 'e^{\\frac');
  t = t.replace(/e\^\{-\\dfrac/g, 'e^{-\\frac');
  // Slash form → proper text frac (pretty)
  t = t.replace(/e\^\{(-?)(\d+)x\/(\d+)\}/g, 'e^{$1\\frac{$2x}{$3}}');
  t = t.replace(/e\^\{(-?)x\/(\d+)\}/g, 'e^{$1\\frac{x}{$2}}');
  t = t.replace(/e\^\{(-?)(\d+)\/(\d+)\}/g, 'e^{$1\\frac{$2}{$3}}');
  return t;
}

function walk(o) {
  if (typeof o === 'string') return fix(o);
  if (Array.isArray(o)) return o.map(walk);
  if (o && typeof o === 'object') {
    const n = {};
    for (const [k, v] of Object.entries(o)) n[k] = walk(v);
    return n;
  }
  return o;
}

const fixed = qs.map(walk);
let bad = 0;
for (const q of fixed) {
  const text = [q.question, ...(q.opts || []), ...(q.solutionSteps || []).flatMap((s) => [s.workingOut, s.explanation])]
    .filter(Boolean)
    .join('\n');
  const stripped = text.replace(/e\^\{/g, 'OK');
  if (/e\{/.test(stripped)) {
    console.log('still broken', q.id, stripped.match(/e\{[^}]{0,20}/g));
    bad++;
  }
  if (q.type === 'multiple_choice' && new Set(q.opts).size !== 4) {
    console.log('dup', q.id, q.opts);
    bad++;
  }
}
console.log('bad', bad);
console.log('q17b', fixed.find((x) => x.id === 'y12a-5d-q17b').opts);
console.log('q15d', fixed.find((x) => x.id === 'y12a-5d-q15d').opts);
console.log('q15f', fixed.find((x) => x.id === 'y12a-5d-q15f').opts);
console.log('q1a', fixed.find((x) => x.id === 'y12a-5d-q1a').opts);
if (bad) process.exit(1);

writeFileSync(SEED, `export const Y12A_CH5D_QUESTIONS = ${JSON.stringify(fixed, null, 2)};\n`);
console.log('wrote seed');

const sa = JSON.parse(
  readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8')
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();
let batch = db.batch();
let n = 0;
let ok = 0;
const flush = async () => {
  if (!n) return;
  await batch.commit();
  batch = db.batch();
  n = 0;
};
(async () => {
  for (const raw of fixed) {
    const ref = db.collection('questions').doc(raw.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') continue;
    const isMC = raw.type === 'multiple_choice';
    batch.set(
      ref,
      {
        question: raw.question,
        options: isMC ? raw.opts.map((t) => ({ text: t, imageUrl: '' })) : [],
        answer: isMC ? String(raw.a) : String(raw.answer ?? raw.a ?? ''),
        solution: raw.solution || '',
        solutionSteps: raw.solutionSteps || [],
        hint: raw.hint || '',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    n++;
    ok++;
    if (n >= 400) await flush();
  }
  await flush();
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('pushed', ok, ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
