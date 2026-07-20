/**
 * Convert Year 12 Adv Ch5F (Review of logarithmic functions)
 * short_answer → FLAT top-level multiple_choice + richer solutionSteps.
 *
 *   node tools/scripts/convertY12ACh5FToMCQ.cjs
 *   node tools/scripts/convertY12ACh5FToMCQ.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const ROOT = path.resolve(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12Ch5FQuestions.js');

function hashId(id) {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

function normalizeLatex(s) {
  if (s == null) return '';
  let t = String(s).trim();
  t = t.replace(/\$([^$]+)\$/g, '\\($1\\)');
  t = t.replace(/(^|[^\\])\$/g, '$1');
  t = t.replace(/log_e/g, '\\log_e');
  t = t.replace(/\\log_e/g, '\\ln'); // prefer \ln in display
  // undo double
  t = t.replace(/\\\\ln/g, '\\ln');
  return t.trim();
}

function stripDelims(s) {
  let t = normalizeLatex(s);
  const m = t.match(/^\\\(([\s\S]*)\\\)$/);
  if (m) t = m[1].trim();
  return t;
}

function isProse(s) {
  const t = stripDelims(s);
  return (
    /^[A-Z]/.test(t) &&
    /[a-z]{3,}/.test(t) &&
    !/\\[a-zA-Z]{2,}/.test(t) &&
    t.split(/\s+/).length >= 2
  );
}

function wrapMath(s) {
  const t = stripDelims(s);
  if (!t) return t;
  // already contains math delimiters → do not wrap again (avoids nested \( \))
  if (/\\\(/.test(String(s)) || /\\\(/.test(t)) {
    // if multiple \( groups in one option, convert to plain-ish text
    if ((String(s).match(/\\\(/g) || []).length > 1 || (t.match(/\\\(/g) || []).length > 1) {
      return t
        .replace(/\\\(/g, '')
        .replace(/\\\)/g, '')
        .replace(/\\ln/g, 'ln')
        .replace(/\\log_?e?/g, 'log')
        .replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
        .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
        .replace(/\\/g, '');
    }
    return normalizeLatex(s.startsWith('\\(') ? s : `\\(${t}\\)`);
  }
  if (isProse(t)) return t; // plain English for MC options
  // pure math
  return `\\(${t}\\)`;
}

function S(explanation, workingOut) {
  let exp = String(explanation || '').trim();
  if (exp.length < 30) {
    exp = `${exp} Work carefully and simplify fully before choosing the matching option.`;
  }
  if (!/[.!?]$/.test(exp)) exp += '.';
  let w = workingOut == null ? '' : String(workingOut).trim();
  if (w && !/\\\(|\\\[/.test(w) && /[\\^=_{}]|\\ln|\\log|\\frac|\\dfrac/.test(w)) {
    w = `\\(${stripDelims(w)}\\)`;
  } else if (w && !/\\\(/.test(w) && isProse(w)) {
    // leave prose workingOut plain or light wrap
  } else if (w && !/\\\(/.test(w) && w.length < 60) {
    w = wrapMath(w);
  }
  return { explanation: exp, workingOut: w, graphData: null };
}

function inventDistractors(correctRaw, q) {
  const raw = stripDelims(correctRaw);
  const set = new Set();
  const add = (s) => {
    const t = stripDelims(s);
    if (t && t !== raw) set.add(t);
  };

  // numeric
  if (/^-?\d+(\.\d+)?$/.test(raw.replace(/\s/g, ''))) {
    const n = Number(raw);
    add(String((n + 0.1).toPrecision(4)));
    add(String((n - 0.1).toPrecision(4)));
    add(String((-n).toPrecision(4)));
    add(String((n * 2).toPrecision(4)));
  }

  // transformation phrases
  if (/dilation|translation|reflection|sketch/i.test(raw) || /dilation|translation|reflection/i.test(q.question || '')) {
    add('Translation left by 2 units.');
    add('Vertical dilation by factor 2.');
    add('Reflection in the x-axis.');
    add('Horizontal dilation by factor 2.');
    add('Translation upwards by 1 unit.');
    add('Translation downwards by 2 units.');
  }

  // multi-root x = a, x = b
  if (/x\s*=/.test(raw)) {
    add(raw.replace(/x\s*=\s*0/, 'x = 1'));
    add(raw.replace(/,\s*x\s*=.*/, ''));
    add('x = 1 only');
    add('no real solutions');
  }

  if (raw.startsWith('-')) add(raw.slice(1));
  else if (/^\d|\\ln|e\^|\\frac|\\dfrac/.test(raw)) add(`-${raw}`);

  add(raw.replace(/\\ln/g, '\\log'));
  add(raw.replace(/\+/g, '-'));
  add(raw + ' + 1');

  const pool = [...set];
  while (pool.length < 3) pool.push(`option ${pool.length + 1}`);
  return pool.slice(0, 8);
}

function placeCorrect(id, correct, distractors) {
  const c = wrapMath(correct);
  const seen = new Set([c]);
  const uniq = [];
  for (const d of distractors) {
    const w = wrapMath(d);
    if (!w || seen.has(w)) continue;
    // no nested \(
    if ((w.match(/\\\(/g) || []).length > 1) continue;
    seen.add(w);
    uniq.push(w);
    if (uniq.length === 3) break;
  }
  let k = 0;
  while (uniq.length < 3) {
    const pad = isProse(c) ? `Another description ${k + 1}.` : wrapMath(String(k + 7));
    if (!seen.has(pad)) {
      seen.add(pad);
      uniq.push(pad);
    }
    k++;
  }
  const a = hashId(id) % 4;
  const opts = [...uniq.slice(0, 3)];
  opts.splice(a, 0, c);
  if (new Set(opts).size !== 4) {
    // force unique
    const base = [c];
    for (const o of opts) if (o !== c && !base.includes(o)) base.push(o);
    while (base.length < 4) base.push(isProse(c) ? `Alt ${base.length}` : wrapMath(String(20 + base.length)));
    const a2 = hashId(id) % 4;
    const rest = base.filter((x) => x !== c).slice(0, 3);
    rest.splice(a2, 0, c);
    return { opts: rest.slice(0, 4), a: rest.indexOf(c) };
  }
  return { opts: opts.slice(0, 4), a: opts.indexOf(c) };
}

function enrichSteps(q, correct) {
  const id = q.id;
  const ans = stripDelims(correct);
  const existing = Array.isArray(q.solutionSteps) ? q.solutionSteps : [];

  // Category-specific richer steps
  if (/q1[a-f]$/.test(id)) {
    return [
      S(
        'The natural logarithm \\(\\ln x\\) (also written \\(\\log_e x\\)) is evaluated on a calculator with the \\(\\ln\\) key. Enter the given argument carefully, including any decimal points.',
        String(q.question || '').match(/\\\([\s\S]*?\\\)/)?.[0] || '\\(\\ln(\\ldots)\\)'
      ),
      S(
        'Read the calculator display. Four significant figures means keep four digits starting from the first non-zero digit, and round the last digit correctly.',
        wrapMath(ans)
      ),
      S('State the approximation to four significant figures as required.', wrapMath(ans)),
    ];
  }

  if (/q2[a-h]$/.test(id)) {
    return [
      S(
        'Use the inverse identities: \\(\\ln(e^{x})=x\\) for all real \\(x\\), and \\(e^{\\ln x}=x\\) for \\(x>0\\). These undo each other.',
        '\\(\\ln(e^{x})=x,\\quad e^{\\ln x}=x\\ (x>0)\\)'
      ),
      S(
        'Rewrite the given expression so one of these identities applies directly, simplifying any coefficients inside the exponent if needed.',
        wrapMath(ans)
      ),
      S('The simplified exact value is the correct option.', wrapMath(ans)),
    ];
  }

  if (/q4[a-d]$/.test(id)) {
    return [
      S(
        'Recall the conversion: \\(y=\\ln x\\) means \\(x=e^{y}\\), and \\(x=e^{y}\\) means \\(y=\\ln x\\) (with domain restrictions \\(x>0\\)).',
        '\\(y=\\ln x \\iff x=e^{y}\\)'
      ),
      S('Apply the conversion to the given statement carefully, keeping the same unknown.', wrapMath(ans)),
      S('Check that the rewritten form is equivalent to the original.', wrapMath(ans)),
    ];
  }

  if (/q5[a-c]$/.test(id)) {
    return [
      S(
        'The change-of-base formula states \\(\\log_b a=\\dfrac{\\ln a}{\\ln b}\\) for positive \\(a\\) and \\(b\\neq 1\\).',
        '\\(\\log_b a=\\dfrac{\\ln a}{\\ln b}\\)'
      ),
      S('Substitute the given base and argument into the formula.', wrapMath(ans.split('approx')[0] || ans)),
      S('Evaluate with a calculator and round as required (three decimal places if an approximation is asked).', wrapMath(ans)),
    ];
  }

  if (/q10|q11|q12|q14/.test(id) && /x\s*=/.test(ans)) {
    return [
      S(
        'Introduce a substitution that reduces the equation to a polynomial in one variable (for example \\(u=a^{x}\\) or \\(u=e^{x}\\) or \\(u=\\ln x\\)).',
        '\\(u=\\ldots\\)'
      ),
      S(
        'Solve the resulting quadratic or linear equation for \\(u\\), discarding any roots that are invalid for the substitution (such as \\(u\\le 0\\) when \\(u=a^{x}\\)).',
        '\\(u=\\ldots\\)'
      ),
      S(
        'Convert each valid \\(u\\) back to \\(x\\) using logarithms or inspection, and list all real solutions.',
        wrapMath(ans)
      ),
    ];
  }

  if (/q13/.test(id)) {
    return [
      S(
        'Use the log laws: \\(\\ln(ab)=\\ln a+\\ln b\\), \\(\\ln\\!\\left(\\dfrac{a}{b}\\right)=\\ln a-\\ln b\\), and \\(\\ln(e^{k})=k\\).',
        '\\(\\ln(ab)=\\ln a+\\ln b\\)'
      ),
      S('Combine or expand the given expression step by step until a single logarithm or a constant remains.', wrapMath(ans)),
      S('The simplified form is the correct option.', wrapMath(ans)),
    ];
  }

  if (/dilation|translation|reflection|Sketch required|Confirmed/i.test(ans) || /q6|q7|q8|q9|q15|q16|q3/.test(id)) {
    return [
      S(
        'Relate the given graph equation to the base graph \\(y=\\ln x\\) (or \\(y=\\ln(-x)\\)) by rewriting it with log laws if helpful.',
        '\\(y=\\ln x\\)'
      ),
      S(
        'Identify the geometric transformation (translation, dilation, or reflection) that maps the base graph onto the given graph.',
        wrapMath(ans)
      ),
      S('State the transformation clearly so it matches one of the options.', wrapMath(ans)),
    ];
  }

  // fallback from existing
  const steps = [];
  if (existing.length) {
    for (const st of existing) {
      steps.push(S(st.explanation || 'Carry out the next step of the solution.', st.workingOut || ans));
    }
  }
  while (steps.length < 3) {
    steps.push(
      S(
        steps.length === 0
          ? 'Identify the logarithm or exponential identity that applies to this question.'
          : steps.length === 1
            ? 'Apply the identity or calculator evaluation and simplify.'
            : 'Match the final simplified result to the correct option.',
        wrapMath(ans)
      )
    );
  }
  return steps.slice(0, 7);
}

// Hand overrides for awkward answers → clean MC
const HAND = {
  'y12a-5f-q3a': {
    correct: 'Yes, ln 1 = 0',
    distractors: ['Yes, ln 1 = 1', 'No, ln 1 = e', 'No, ln 1 is undefined'],
  },
  'y12a-5f-q3b': {
    correct: '1 = e^0, so ln 1 = ln(e^0) = 0',
    distractors: ['1 = e^1, so ln 1 = 1', '1 = 0·e, so ln 1 = 0', 'ln 1 = ln e = 1'],
  },
  'y12a-5f-q3c': {
    correct: 'Yes, ln e = 1',
    distractors: ['Yes, ln e = 0', 'Yes, ln e = e', 'No, ln e is undefined'],
  },
  'y12a-5f-q3d': {
    correct: 'e = e^1, so ln e = ln(e^1) = 1',
    distractors: ['e = e^0, so ln e = 0', 'ln e = e', 'ln e = 1/e'],
  },
  'y12a-5f-q6a': {
    correct: 'Reflection in the line y = x (inverse functions; reciprocal gradients)',
    distractors: ['Reflection in the x-axis', 'Reflection in the y-axis', 'Translation 1 unit right'],
  },
  'y12a-5f-q6b': {
    correct: 'Reflection in the y-axis (replace x with −x)',
    distractors: ['Reflection in the x-axis', 'Reflection in y = x', 'Horizontal dilation by factor 2'],
  },
  'y12a-5f-q6c': {
    correct: 'y = ln x (x > 0) and y = ln(−x) (x < 0), mirrors in the y-axis',
    distractors: [
      'Both curves only defined for x > 0',
      'The graphs are the same curve',
      'Both are horizontal lines',
    ],
  },
  'y12a-5f-q9': {
    correct: 'Horizontal dilation by factor 1/2 (equation of the form y = ln(−2x))',
    distractors: [
      'Vertical dilation by factor 1/2',
      'Translation left by 2 units',
      'Reflection in the x-axis only',
    ],
  },
};

function loadOriginal() {
  const src = readFileSync(SEED, 'utf8');
  writeFileSync('/tmp/ch5f-conv.cjs', src.replace(/^export const Y12A_CH5F_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve('/tmp/ch5f-conv.cjs')];
  return require('/tmp/ch5f-conv.cjs');
}

function convertOne(q) {
  if (q.type === 'multiple_choice' && Array.isArray(q.opts) && q.opts.length === 4) {
    // already converted
    return q;
  }
  const hand = HAND[q.id];
  let correct = hand ? hand.correct : String(q.a ?? q.answer ?? '').trim();
  let distractors = hand ? hand.distractors : inventDistractors(correct, q);

  // clean sketch-required into description options
  if (/sketch required/i.test(correct)) {
    correct = HAND[q.id]?.correct || 'See the correct transformation description.';
    distractors = HAND[q.id]?.distractors || inventDistractors(correct, q);
  }

  // normalize math answers
  correct = correct.replace(/log_e/g, '\\ln').replace(/\\\\ln/g, '\\ln');
  if (/frac\{/.test(correct) && !/\\frac|\\dfrac/.test(correct)) {
    correct = correct.replace(/frac/g, '\\dfrac');
  }

  const { opts, a } = placeCorrect(q.id, correct, distractors);
  const steps = enrichSteps(q, opts[a]);

  // fix hint dollars
  const hint = normalizeLatex(String(q.hint || '').replace(/\$\\ln\$/g, '\\(\\ln\\)').replace(/\$([^$]+)\$/g, '\\($1\\)'));

  return {
    id: q.id,
    topicId: 'y12a-5F',
    c: '5F',
    t: 'Review of logarithmic functions',
    type: 'multiple_choice',
    difficulty: q.difficulty || 'medium',
    timeLimit: q.timeLimit || 120,
    question: normalizeLatex(q.question || q.q || ''),
    a,
    answer: String(a),
    opts,
    hint: hint || 'Use logarithm laws, the \\(\\ln\\) key, or a suitable substitution.',
    solution: normalizeLatex(q.solution || '') || `The correct answer is ${opts[a]}.`,
    solutionSteps: steps,
    graphData: q.graphData ?? null,
    isNew: true,
    requiresManualGrading: false,
  };
}

function selfCheck(items) {
  const hist = [0, 0, 0, 0];
  for (const q of items) {
    if (q.type !== 'multiple_choice') throw new Error(`not MC ${q.id}`);
    if (!Array.isArray(q.opts) || q.opts.length !== 4) throw new Error(`opts ${q.id}`);
    if (new Set(q.opts).size !== 4) throw new Error(`dup opts ${q.id}: ${JSON.stringify(q.opts)}`);
    if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) throw new Error(`a ${q.id}`);
    hist[q.a]++;
    if (q.solutionSteps.length < 3) throw new Error(`steps ${q.id}`);
    for (const o of q.opts) {
      if ((String(o).match(/\\\(/g) || []).length > 1) throw new Error(`nested ${q.id}: ${o}`);
    }
    const blob = [q.question, ...q.opts, ...q.solutionSteps.flatMap((s) => [s.explanation, s.workingOut])].join('\n');
    const open = (blob.match(/\\\(/g) || []).length;
    const close = (blob.match(/\\\)/g) || []).length;
    if (open !== close) console.warn('paren mismatch', q.id, open, close);
  }
  console.log('self-check OK', { total: items.length, hist });
}

async function push(items) {
  const sa = JSON.parse(
    readFileSync(
      process.env.GOOGLE_APPLICATION_CREDENTIALS ||
        '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
      'utf8'
    )
  );
  if (!getApps().length) initializeApp({ credential: cert(sa) });
  const db = getFirestore();

  const seedIds = new Set(items.map((q) => q.id));
  const existing = await db.collection('questions').where('topicId', '==', 'y12a-5F').get();
  let del = 0;
  let batch = db.batch();
  let n = 0;
  const flush = async () => {
    if (!n) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };

  for (const doc of existing.docs) {
    if (!doc.id.startsWith('y12a-5f-')) continue;
    if (doc.data()?.origin === 'teacher') continue;
    if (!seedIds.has(doc.id)) {
      batch.delete(doc.ref);
      n++;
      del++;
      if (n >= 400) await flush();
    }
  }
  await flush();

  let ok = 0;
  for (const raw of items) {
    const ref = db.collection('questions').doc(raw.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') continue;
    batch.set(
      ref,
      {
        chapterId: 'y12a-5',
        chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
        topicId: 'y12a-5F',
        topicCode: '5F',
        topicTitle: 'Review of logarithmic functions',
        year: 'Year 12',
        isManual: true,
        origin: 'seed',
        isActive: true,
        title: String(raw.question || '').replace(/\\[\(\)\[\]]/g, '').slice(0, 40) + '...',
        question: raw.question,
        difficulty: raw.difficulty || 'medium',
        timeLimit: raw.timeLimit || 120,
        type: 'multiple_choice',
        requiresManualGrading: false,
        options: raw.opts.map((t) => ({ text: t, imageUrl: '' })),
        answer: String(raw.a),
        hint: raw.hint || '',
        solution: raw.solution || '',
        solutionSteps: raw.solutionSteps || [],
        subQuestions: [],
        graphData: raw.graphData ?? null,
        isNew: true,
        updatedAt: FieldValue.serverTimestamp(),
        ...(snap.exists ? {} : { createdAt: FieldValue.serverTimestamp() }),
      },
      { merge: true }
    );
    n++;
    ok++;
    if (n >= 200) await flush();
  }
  await flush();
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('pushed', ok, 'deleted obsolete bank', del, 'ver', ver);
}

async function main() {
  const originals = loadOriginal();
  console.log('loaded', originals.length);
  if (originals.every((q) => q.type === 'multiple_choice') && originals[0]?.opts?.length === 4) {
    console.log('already MC — will still rewrite from current file content');
  }
  const items = originals.map(convertOne);
  selfCheck(items);

  if (WRITE) {
    writeFileSync(SEED, `export const Y12A_CH5F_QUESTIONS = ${JSON.stringify(items, null, 2)};\n`);
    console.log('wrote', SEED, items.length);
  } else {
    console.log('dry-run', items.length);
  }

  if (PUSH) {
    if (!WRITE) {
      console.error('need --write with --push');
      process.exit(1);
    }
    await push(items);
    console.log('NEXT: node tools/scripts/rebuildQuestionIndexes.js y12a-5');
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
