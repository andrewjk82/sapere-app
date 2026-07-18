/**
 * Fix Ch5E conceptual options that double-wrapped \(...\) around prose
 * containing more \(...\), breaking KaTeX (nested delimiters).
 *
 *   node tools/scripts/fixY12ACh5EProseOpts.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const SEED = path.resolve(__dirname, '../../src/constants/seedYear12Ch5EQuestions.js');

/** Per-id correct option sets (plain text OR single outer \(...\) only). */
const FIX = {
  'y12a-5e-q9a': {
    opts: [
      'The region is symmetric about the y-axis',
      'The region is symmetric about the x-axis',
      'The integrand is an odd function',
      'The curves do not meet the axes',
    ],
    // correct was y-axis — need to find which index after rebuild
    correct: 'The region is symmetric about the y-axis',
  },
  'y12a-5e-q10a': {
    opts: [
      'The region is symmetric about the y-axis',
      'The region is symmetric about the line y = x',
      'Both curves are odd functions',
      'The area to the left of the y-axis is zero',
    ],
    correct: 'The region is symmetric about the y-axis',
  },
  'y12a-5e-q11c': {
    opts: [
      'The graph is odd, so the areas left and right of the y-axis are equal',
      'The graph is even, so the areas are equal',
      'The function is always negative on [-3, 0]',
      'The integral from -3 to 3 is already the area',
    ],
    correct: 'The graph is odd, so the areas left and right of the y-axis are equal',
  },
  'y12a-5e-q12b': {
    opts: [
      '\\(\\text{For }-1\\le x\\le 0,\\; e^{x+1}\\ge x^{2}\\)',
      '\\(\\text{For }-1\\le x\\le 0,\\; x^{2}\\ge e^{x+1}\\)',
      'The curves do not meet the y-axis',
      'The region has zero area',
    ],
    correct: '\\(\\text{For }-1\\le x\\le 0,\\; e^{x+1}\\ge x^{2}\\)',
  },
  'y12a-5e-q15c': {
    opts: [
      'Greater, because y = e^x is concave up (trapezoids sit above the curve)',
      'Less, because y = e^x is concave up',
      'Greater, because y = e^x is concave down',
      'Exactly equal to the true area',
    ],
    correct: 'Greater, because y = e^x is concave up (trapezoids sit above the curve)',
  },
};

function hashId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

function placeCorrect(id, correct, distractors) {
  const opts = [...distractors];
  const a = hashId(id) % 4;
  opts.splice(a, 0, correct);
  // uniqueness
  if (new Set(opts).size !== 4) throw new Error(`dup ${id}`);
  return { opts, a };
}

function load() {
  const src = readFileSync(SEED, 'utf8');
  writeFileSync('/tmp/ch5e-fix-prose.cjs', src.replace(/^export const Y12A_CH5E_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve('/tmp/ch5e-fix-prose.cjs')];
  return require('/tmp/ch5e-fix-prose.cjs');
}

/** Strip outer \( \) and fix any remaining nested prose options generically. */
function sanitizeOpt(o) {
  let t = String(o);
  // unwrap single outer \( ... \)
  const m = t.match(/^\\\(([\s\S]*)\\\)$/);
  if (m) t = m[1];
  // if still has nested \(  — convert inner \(x\) to plain x for simple axis words
  if ((t.match(/\\\(/g) || []).length > 0) {
    // Prefer converting whole thing to plain prose where possible
    t = t
      .replace(/\\\(/g, '')
      .replace(/\\\)/g, '')
      .replace(/\\le/g, '≤')
      .replace(/\\ge/g, '≥')
      .replace(/\\,/g, ' ')
      .replace(/\\;/g, ' ')
      .replace(/\\text\{([^}]*)\}/g, '$1')
      .replace(/\\([a-zA-Z]+)/g, '$1') // crude
      .replace(/\s+/g, ' ')
      .trim();
  }
  return t;
}

function fixAll(qs) {
  return qs.map((q) => {
    if (FIX[q.id]) {
      const { opts: base, correct } = FIX[q.id];
      const distractors = base.filter((o) => o !== correct);
      const { opts, a } = placeCorrect(q.id, correct, distractors);
      return { ...q, opts, a, answer: String(a) };
    }
    // generic: any nested opts
    if (!Array.isArray(q.opts)) return q;
    const hasNested = q.opts.some((o) => ((String(o).match(/\\\(/g) || []).length > 1));
    if (!hasNested) return q;
    const correctText = q.opts[q.a];
    const cleaned = q.opts.map(sanitizeOpt);
    const correctClean = sanitizeOpt(correctText);
    const a = cleaned.indexOf(correctClean);
    if (a < 0) {
      console.warn('could not remap', q.id, cleaned, correctClean);
      return { ...q, opts: cleaned };
    }
    return { ...q, opts: cleaned, a, answer: String(a) };
  });
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
  const ids = Object.keys(FIX);
  let n = 0;
  for (const q of qs) {
    if (!ids.includes(q.id) && !q.opts?.some((o) => (String(o).match(/\\\(/g) || []).length > 1)) {
      // only push fixed ones - check if id in FIX or was sanitized
    }
  }
  // push all FIX ids + any that still needed sanitize
  const toPush = qs.filter((q) => FIX[q.id]);
  for (const raw of toPush) {
    const ref = db.collection('questions').doc(raw.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') continue;
    await ref.set(
      {
        options: raw.opts.map((t) => ({ text: t, imageUrl: '' })),
        answer: String(raw.a),
        type: 'multiple_choice',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    n++;
    console.log('updated', raw.id, 'a=', raw.a, raw.opts[raw.a]);
  }
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('pushed', n, 'ver', ver);
}

async function main() {
  const qs = load();
  const fixed = fixAll(qs);

  // verify no nested
  for (const q of fixed) {
    for (const o of q.opts || []) {
      const n = (String(o).match(/\\\(/g) || []).length;
      if (n > 1) throw new Error(`still nested ${q.id}: ${o}`);
    }
  }
  for (const id of Object.keys(FIX)) {
    const q = fixed.find((x) => x.id === id);
    console.log(id, 'a=' + q.a, q.opts);
  }

  if (WRITE) {
    writeFileSync(SEED, `export const Y12A_CH5E_QUESTIONS = ${JSON.stringify(fixed, null, 2)};\n`);
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
