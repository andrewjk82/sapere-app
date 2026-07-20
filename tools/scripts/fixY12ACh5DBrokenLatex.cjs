/**
 * Fix broken / nonsensical LaTeX in y12a-5D MC options & steps.
 *
 * Issues from auto distractors:
 *  - \dfrac{n}{1}  (e.g. e^{-\dfrac{3}{1}x}) — fraction flip of 1/n
 *  - \dfrac{6}{2} etc. unsimplified
 *  - exponents e^{-\dfrac{1}{3}x} rewritten to e^{-\dfrac{x}{3}} for clear KaTeX
 *
 *   node tools/scripts/fixY12ACh5DBrokenLatex.cjs           # dry-run
 *   node tools/scripts/fixY12ACh5DBrokenLatex.cjs --write
 *   node tools/scripts/fixY12ACh5DBrokenLatex.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const ROOT = path.resolve(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12Ch5DQuestions.js');

function loadSeed() {
  const src = readFileSync(SEED, 'utf8');
  const body = src.replace(/^export const Y12A_CH5D_QUESTIONS = /, 'module.exports = ');
  const tmp = '/tmp/ch5d-fix-eval.cjs';
  writeFileSync(tmp, body);
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

/** Reduce common garbage auto-distractor LaTeX. */
function fixTex(s) {
  if (typeof s !== 'string') return s;
  let t = s;

  // \dfrac{n}{1} → n  (and same for \frac)
  t = t.replace(/\\dfrac\{(\d+)\}\{1\}/g, '$1');
  t = t.replace(/\\frac\{(\d+)\}\{1\}/g, '$1');

  // unsimplified doubles that inventDistractors produced
  t = t.replace(/\\dfrac\{6\}\{2\}/g, '3');
  t = t.replace(/\\frac\{6\}\{2\}/g, '3');
  t = t.replace(/\\dfrac\{4\}\{2\}/g, '2');
  t = t.replace(/\\dfrac\{9\}\{3\}/g, '3');

  // Cleaner exponential fractions: e^{\pm\dfrac{a}{b}x} → e^{\pm\dfrac{a x}{b}}
  // so KaTeX doesn't look like a bare fraction stuck next to x.
  // e^{\dfrac{1}{4}x} → e^{\dfrac{x}{4}}
  t = t.replace(/e\^\{(\\dfrac\{1\}\{(\d+)\})x\}/g, 'e^{\\dfrac{x}{$2}}');
  t = t.replace(/e\^\{-(\\dfrac\{1\}\{(\d+)\})x\}/g, 'e^{-\\dfrac{x}{$2}}');
  t = t.replace(/e\^\{(\\dfrac\{(\d+)\}\{(\d+)\})x\}/g, 'e^{\\dfrac{$2 x}{$3}}');
  t = t.replace(/e\^\{-(\\dfrac\{(\d+)\}\{(\d+)\})x\}/g, 'e^{-\\dfrac{$2 x}{$3}}');

  // same with \frac
  t = t.replace(/e\^\{(\\frac\{1\}\{(\d+)\})x\}/g, 'e^{\\frac{x}{$2}}');
  t = t.replace(/e\^\{-(\\frac\{1\}\{(\d+)\})x\}/g, 'e^{-\\frac{x}{$2}}');
  t = t.replace(/e\^\{(\\frac\{(\d+)\}\{(\d+)\})x\}/g, 'e^{\\frac{$2 x}{$3}}');
  t = t.replace(/e\^\{-(\\frac\{(\d+)\}\{(\d+)\})x\}/g, 'e^{-\\frac{$2 x}{$3}}');

  return t;
}

/** Per-id hand fixes for distractors that are still nonsense after regex. */
const HAND = {
  'y12a-5d-q15f': {
    // ∫ 1/cbrt(e^x) dx = -3 e^{-x/3} + C
    opts: [
      '\\(3e^{-\\dfrac{x}{3}} + C\\)',
      '\\(-3e^{-\\dfrac{x}{3}} + C\\)',
      '\\(-3e^{-3x} + C\\)',
      '\\(-\\dfrac{1}{3}e^{-\\dfrac{x}{3}} + C\\)',
    ],
    a: 1,
  },
  'y12a-5d-q15e': {
    opts: [
      '\\(-\\dfrac{2}{3}e^{-\\dfrac{3x}{2}} + C\\)',
      '\\(\\dfrac{2}{3}e^{-\\dfrac{3x}{2}} + C\\)',
      '\\(-\\dfrac{3}{2}e^{-\\dfrac{3x}{2}} + C\\)',
      '\\(-\\dfrac{2}{3}e^{\\dfrac{3x}{2}} + C\\)',
    ],
    a: 0,
  },
  'y12a-5d-q15c': {
    opts: [
      '\\(-\\dfrac{2}{3}e^{\\dfrac{3x}{2}} + C\\)',
      '\\(\\dfrac{3}{2}e^{\\dfrac{3x}{2}} + C\\)',
      '\\(\\dfrac{2}{3}e^{\\dfrac{3x}{2}} + C\\)',
      '\\(\\dfrac{2}{3}e^{\\dfrac{2x}{3}} + C\\)',
    ],
    a: 2,
  },
  'y12a-5d-q15d': {
    opts: [
      '\\(-\\dfrac{3}{2}e^{\\dfrac{2x}{3}} + C\\)',
      '\\(\\dfrac{2}{3}e^{\\dfrac{2x}{3}} + C\\)',
      '\\(\\dfrac{3}{2}e^{\\dfrac{3x}{2}} + C\\)',
      '\\(\\dfrac{3}{2}e^{\\dfrac{2x}{3}} + C\\)',
    ],
    a: 3,
  },
  'y12a-5d-q15a': {
    opts: [
      '\\(-\\dfrac{1}{3}e^{-3x} + C\\)',
      '\\(\\dfrac{1}{3}e^{-3x} + C\\)',
      '\\(-3e^{-3x} + C\\)',
      '\\(-\\dfrac{1}{3}e^{3x} + C\\)',
    ],
    a: 0,
  },
  'y12a-5d-q15b': {
    opts: [
      '\\(\\dfrac{1}{4}e^{-4x} + C\\)',
      '\\(-\\dfrac{1}{4}e^{-4x} + C\\)',
      '\\(-4e^{-4x} + C\\)',
      '\\(-\\dfrac{1}{4}e^{4x} + C\\)',
    ],
    a: 1,
  },
};

function walkFix(obj) {
  if (typeof obj === 'string') return fixTex(obj);
  if (Array.isArray(obj)) return obj.map(walkFix);
  if (obj && typeof obj === 'object') {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      out[k] = walkFix(v);
    }
    return out;
  }
  return obj;
}

/** Build 3 unique distractors from the correct option text. */
function uniqueOpts(opts, correctIdx) {
  const correct = opts[correctIdx];
  const inner = correct.replace(/^\\\(|\\\)$/g, '').trim();

  const candidates = [];
  // sign flip of whole expression
  if (inner.startsWith('-')) candidates.push(`\\(${inner.slice(1)}\\)`);
  else candidates.push(`\\(-${inner}\\)`);
  // drop +C
  if (inner.includes('+ C')) candidates.push(`\\(${inner.replace(/\s*\+\s*C\s*$/, '')}\\)`);
  // double leading coefficient heuristic
  candidates.push(`\\(${inner.replace(/^(-?\\dfrac\{)([^}]+)(\})/, '$1$2$2$3').replace(/^(-?\d+)/, (m) => String(Number(m) * 2 || m))}\\)`);
  candidates.push(`\\(e^{x}+C\\)`, `\\(e^{2x}+C\\)`, `\\(-e^{x}+C\\)`, `\\(2e^{x}+C\\)`);
  candidates.push(`\\(\\dfrac{1}{2}e^{x}+C\\)`, `\\(-\\dfrac{1}{2}e^{x}+C\\)`);
  candidates.push(`\\(e^{-x}+C\\)`, `\\(3e^{x}+C\\)`, `\\(-3e^{x}+C\\)`);

  const out = new Array(4);
  out[correctIdx] = correct;
  const used = new Set([correct]);
  let ci = 0;
  for (let i = 0; i < 4; i++) {
    if (i === correctIdx) continue;
    // keep original if unique and not equal correct
    let pick = opts[i];
    if (!used.has(pick) && pick !== correct) {
      out[i] = pick;
      used.add(pick);
      continue;
    }
    while (ci < candidates.length && used.has(candidates[ci])) ci++;
    pick = candidates[ci++] || `\\(e^{${i}x}+C\\)`;
    // last resort
    let k = 0;
    while (used.has(pick)) {
      pick = `\\(${k % 2 ? '-' : ''}e^{${k + 4}x}+C\\)`;
      k++;
    }
    out[i] = pick;
    used.add(pick);
  }
  return out;
}

function apply(qs) {
  const next = qs.map((q) => {
    let nq = walkFix(q);
    const hand = HAND[nq.id];
    if (hand) {
      nq = {
        ...nq,
        opts: hand.opts,
        a: hand.a,
        answer: String(hand.a),
      };
    } else if (nq.type === 'multiple_choice' && Array.isArray(nq.opts)) {
      if (new Set(nq.opts).size !== 4) {
        nq = { ...nq, opts: uniqueOpts(nq.opts, nq.a) };
      }
    }
    return nq;
  });
  return next;
}

function selfCheck(qs) {
  for (const q of qs) {
    if (q.type !== 'multiple_choice') continue;
    if (new Set(q.opts).size !== 4) throw new Error(`dup opts ${q.id}: ${JSON.stringify(q.opts)}`);
    if (!Number.isInteger(q.a) || !q.opts[q.a]) throw new Error(`bad a ${q.id}`);
    const blob = [q.question, ...(q.opts || []), q.solution, ...(q.solutionSteps || []).flatMap((s) => [s.explanation, s.workingOut])]
      .filter(Boolean)
      .join('\n');
    if (/\\dfrac\{\d+\}\{1\}/.test(blob) || /\\frac\{\d+\}\{1\}/.test(blob)) {
      throw new Error(`still has n/1 fraction in ${q.id}: ${blob.match(/\\d?frac\{\d+\}\{1\}[^\\n]*/)?.[0]}`);
    }
  }
  console.log('self-check OK', qs.length);
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
    const payload = {
      question: raw.question,
      options: isMC ? raw.opts.map((t) => ({ text: t, imageUrl: '' })) : [],
      answer: isMC ? String(raw.a) : String(raw.answer ?? raw.a ?? ''),
      hint: raw.hint || '',
      solution: raw.solution || '',
      solutionSteps: raw.solutionSteps || [],
      updatedAt: FieldValue.serverTimestamp(),
    };
    batch.set(ref, payload, { merge: true });
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
  console.log('pushed field updates', ok, 'version', ver);
}

async function main() {
  const qs = loadSeed();
  const fixed = apply(qs);
  selfCheck(fixed);

  // report q15f
  const q = fixed.find((x) => x.id === 'y12a-5d-q15f');
  console.log('q15f opts after fix:', q.opts);

  // count changes
  let changed = 0;
  for (let i = 0; i < qs.length; i++) {
    if (JSON.stringify(qs[i]) !== JSON.stringify(fixed[i])) changed++;
  }
  console.log('questions changed:', changed);

  if (WRITE) {
    writeFileSync(SEED, `export const Y12A_CH5D_QUESTIONS = ${JSON.stringify(fixed, null, 2)};\n`);
    console.log('wrote', SEED);
  }
  if (PUSH) {
    if (!WRITE) {
      console.error('need --write with --push');
      process.exit(1);
    }
    await push(fixed);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
