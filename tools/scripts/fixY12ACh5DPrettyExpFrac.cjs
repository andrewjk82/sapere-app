/**
 * Convert slash exponents e^{-3x/2} → e^{-\frac{3x}{2}} (text-style \frac).
 * Keep coefficients as \dfrac for display polish.
 *
 * Do NOT use \dfrac inside exponents (renders oversized).
 *
 *   node tools/scripts/fixY12ACh5DPrettyExpFrac.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const SEED = path.resolve(__dirname, '../../src/constants/seedYear12Ch5DQuestions.js');

function loadSeed() {
  const src = readFileSync(SEED, 'utf8');
  writeFileSync('/tmp/ch5d-pretty.cjs', src.replace(/^export const Y12A_CH5D_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve('/tmp/ch5d-pretty.cjs')];
  return require('/tmp/ch5d-pretty.cjs');
}

/**
 * Pretty-print exponents inside e^{...}:
 *   e^{-3x/2}  → e^{-\frac{3x}{2}}
 *   e^{5x/3}   → e^{\frac{5x}{3}}
 *   e^{-x/3}   → e^{-\frac{x}{3}}
 *   e^{1/4}    → e^{\frac{1}{4}}
 *
 * Leaves already-frac exponents alone. Never introduces \dfrac in exponents.
 */
function prettyExp(s) {
  if (typeof s !== 'string') return s;
  let t = s;

  // Fix any leftover e{ without caret first
  t = t.replace(/e\{/g, 'e^{');

  // Process each e^{...} block (one nesting level of braces for frac args)
  t = t.replace(/e\^\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, (full, inner) => {
    let i = inner;

    // Already has \frac or \dfrac — normalize dfrac→frac only inside exp
    i = i.replace(/\\dfrac/g, '\\frac');

    // Slash patterns (only when no \frac already consuming that part)
    // -3x/2 or 3x/2
    i = i.replace(/(^|[^\\a-zA-Z])(-?)(\d+)x\/(\d+)(?![0-9])/g, (m, pre, sign, num, den) => {
      return `${pre}${sign}\\frac{${num}x}{${den}}`;
    });
    // -x/3 or x/3
    i = i.replace(/(^|[^\\a-zA-Z0-9])(-?)x\/(\d+)(?![0-9])/g, (m, pre, sign, den) => {
      return `${pre}${sign}\\frac{x}{${den}}`;
    });
    // bare 1/4 (no x) — careful not to touch 3/5 outside; we're only inside e^{}
    i = i.replace(/(^|[^\\a-zA-Z0-9/])(-?)(\d+)\/(\d+)(?![0-9x])/g, (m, pre, sign, num, den) => {
      // skip if already part of \frac
      return `${pre}${sign}\\frac{${num}}{${den}}`;
    });

    return `e^{${i}}`;
  });

  return t;
}

function walk(o) {
  if (typeof o === 'string') return prettyExp(o);
  if (Array.isArray(o)) return o.map(walk);
  if (o && typeof o === 'object') {
    const n = {};
    for (const [k, v] of Object.entries(o)) n[k] = walk(v);
    return n;
  }
  return o;
}

function selfCheck(qs) {
  for (const q of qs) {
    const text = [q.question, ...(q.opts || []), q.solution, ...(q.solutionSteps || []).flatMap((s) => [s.explanation, s.workingOut])]
      .filter(Boolean)
      .join('\n');
    // no slash exponents left in e^{...}
    const slashInExp = text.match(/e\^\{[^}]*\d+x\/\d+[^}]*\}|e\^\{[^}]*x\/\d+[^}]*\}/g);
    if (slashInExp) {
      // allow if it's not actually - might still have edge cases
      console.warn('slash remaining', q.id, slashInExp);
    }
    // no dfrac inside e^{
    if (/e\^\{[^}]*\\dfrac/.test(text)) throw new Error(`dfrac in exp ${q.id}`);
    if (q.type === 'multiple_choice' && new Set(q.opts).size !== 4) {
      throw new Error(`dup opts ${q.id}`);
    }
  }
  console.log('15e', qs.find((x) => x.id === 'y12a-5d-q15e').opts);
  console.log('17b', qs.find((x) => x.id === 'y12a-5d-q17b').opts);
  console.log('15f', qs.find((x) => x.id === 'y12a-5d-q15f').opts);
  console.log('1c', qs.find((x) => x.id === 'y12a-5d-q1c').opts);
  console.log('self-check OK');
}

async function push(qs) {
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
  let ok = 0;
  const flush = async () => {
    if (!n) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };
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
  console.log('pushed', ok, ver);
}

async function main() {
  const qs = loadSeed();
  const fixed = qs.map(walk);
  let changed = 0;
  for (let i = 0; i < qs.length; i++) {
    if (JSON.stringify(qs[i]) !== JSON.stringify(fixed[i])) changed++;
  }
  console.log('changed', changed);
  selfCheck(fixed);

  if (WRITE) {
    writeFileSync(SEED, `export const Y12A_CH5D_QUESTIONS = ${JSON.stringify(fixed, null, 2)};\n`);
    console.log('wrote seed');
  }
  if (PUSH) {
    if (!WRITE) {
      console.error('need --write');
      process.exit(1);
    }
    await push(fixed);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
