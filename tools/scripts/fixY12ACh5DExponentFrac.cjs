/**
 * Fix oversized exponent fractions in y12a-5D (+ repair accidental e{ vs e^{}).
 *
 * Root cause of huge index: \dfrac (displaystyle) inside e^{...}.
 * Use slash form e^{5x/3} or text-style \frac only.
 *
 *   node tools/scripts/fixY12ACh5DExponentFrac.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const SEED = path.resolve(__dirname, '../../src/constants/seedYear12Ch5DQuestions.js');

function loadSeed() {
  const src = readFileSync(SEED, 'utf8');
  const body = src.replace(/^export const Y12A_CH5D_QUESTIONS = /, 'module.exports = ');
  const tmp = '/tmp/ch5d-exp-eval2.cjs';
  writeFileSync(tmp, body);
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

function fixExponents(s) {
  if (typeof s !== 'string') return s;
  let t = s;

  // Repair previous botched run: e{\dfrac → e^{\dfrac  and e{-\dfrac → e^{-\dfrac
  t = t.replace(/e\{(\\dfrac)/g, 'e^{$1');
  t = t.replace(/e\{-(\\dfrac)/g, 'e^{-$1');
  t = t.replace(/e\{(\\frac)/g, 'e^{$1');
  t = t.replace(/e\{-(\\frac)/g, 'e^{-$1');
  t = t.replace(/e\{\+(\\d?frac)/g, 'e^{+$1');

  // \dfrac inside exponents → will convert to slash form below; first normalize to \frac
  t = t.replace(/e\^\{\\dfrac/g, 'e^{\\frac');
  t = t.replace(/e\^\{-\\dfrac/g, 'e^{-\\frac');
  t = t.replace(/e\^\{\+\\dfrac/g, 'e^{+\\frac');

  // Compact to slash form (best rendering in options)
  // e^{\frac{Nx}{D}} / e^{\frac{N x}{D}}
  t = t.replace(/e\^\{\\frac\{(\d+)\s*x\}\{(\d+)\}\}/g, 'e^{$1x/$2}');
  t = t.replace(/e\^\{-\\frac\{(\d+)\s*x\}\{(\d+)\}\}/g, 'e^{-$1x/$2}');
  // e^{\frac{x}{D}}
  t = t.replace(/e\^\{\\frac\{x\}\{(\d+)\}\}/g, 'e^{x/$1}');
  t = t.replace(/e\^\{-\\frac\{x\}\{(\d+)\}\}/g, 'e^{-x/$1}');
  // e^{\frac{N}{D}x}
  t = t.replace(/e\^\{\\frac\{(\d+)\}\{(\d+)\}x\}/g, 'e^{$1x/$2}');
  t = t.replace(/e\^\{-\\frac\{(\d+)\}\{(\d+)\}x\}/g, 'e^{-$1x/$2}');
  // e^{\frac{1}{D}} alone (rare)
  t = t.replace(/e\^\{\\frac\{1\}\{(\d+)\}\}/g, 'e^{1/$1}');
  t = t.replace(/e\^\{-\\frac\{1\}\{(\d+)\}\}/g, 'e^{-1/$1}');

  // e^{\frac{N}{D}x+c} style mixed (keep frac, not dfrac) — already frac from above

  return t;
}

function walk(obj) {
  if (typeof obj === 'string') return fixExponents(obj);
  if (Array.isArray(obj)) return obj.map(walk);
  if (obj && typeof obj === 'object') {
    const o = {};
    for (const [k, v] of Object.entries(obj)) o[k] = walk(v);
    return o;
  }
  return obj;
}

function selfCheck(qs) {
  for (const q of qs) {
    const text = [q.question, ...(q.opts || []), q.solution, ...(q.solutionSteps || []).flatMap((s) => [s.explanation, s.workingOut])]
      .filter(Boolean)
      .join('\n');
    // broken missing-caret
    if (/e\{[\\d]/.test(text) || /e\{\\d?frac/.test(text) || /e\{-\\d?frac/.test(text)) {
      throw new Error(`broken e{ without ^ in ${q.id}: ${text.match(/e\{[^}]{0,40}/)?.[0]}`);
    }
    // no dfrac inside e^{
    if (/e\^\{[^}]*\\dfrac/.test(text)) {
      throw new Error(`dfrac still in exp ${q.id}`);
    }
    if (q.type === 'multiple_choice' && new Set(q.opts).size !== 4) {
      throw new Error(`dup opts ${q.id}: ${JSON.stringify(q.opts)}`);
    }
  }
  console.log('q17b', qs.find((x) => x.id === 'y12a-5d-q17b').opts);
  console.log('q15d', qs.find((x) => x.id === 'y12a-5d-q15d').opts);
  console.log('q15f', qs.find((x) => x.id === 'y12a-5d-q15f').opts);
  console.log('self-check OK');
}

async function push(qs) {
  const { initializeApp, cert, getApps } = require('firebase-admin/app');
  const { getFirestore, FieldValue } = require('firebase-admin/firestore');
  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  let batch = db.batch();
  let n = 0;
  const flush = async () => {
    if (!n) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };

  let ok = 0;
  for (const raw of qs) {
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
  console.log('pushed', ok, 'version', ver);
}

async function main() {
  const qs = loadSeed();
  const fixed = qs.map(walk);
  selfCheck(fixed);

  if (WRITE) {
    writeFileSync(SEED, `export const Y12A_CH5D_QUESTIONS = ${JSON.stringify(fixed, null, 2)};\n`);
    console.log('wrote seed');
  }
  if (PUSH) {
    if (!WRITE) process.exit(1);
    await push(fixed);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
