/**
 * Expand Y12A 6B solutionSteps — replace finance/template garbage with real
 * differentiation steps. Also fix a few absurd MC distractors.
 *
 *   node tools/scripts/expandY12ACh6BSteps.cjs
 *   node tools/scripts/expandY12ACh6BSteps.cjs --push
 */
'use strict';

const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12aCh6BQuestions.js');
const PUSH = process.argv.includes('--push');

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

function stripMath(s) {
  if (!s) return '';
  return String(s)
    .replace(/\\\(|\\\)/g, '')
    .replace(/\\dfrac\{([^}]*)\}\{([^}]*)\}/g, '($1)/($2)')
    .replace(/\\frac\{([^}]*)\}\{([^}]*)\}/g, '($1)/($2)')
    .trim();
}

function unwrap(s) {
  if (!s) return '';
  let t = String(s).trim();
  // ensure \( \) wrapper for display
  if (!t.includes('\\(')) t = `\\(${t}\\)`;
  return t;
}

function extractExpr(question) {
  const q = question || '';
  // f(x) = ... or y = ... after last colon or directly
  let m =
    q.match(/f\(x\)\s*=\s*\\?\(?\s*(.+?)\\?\s*\)?\s*$/) ||
    q.match(/y\s*=\s*\\?\(?\s*(.+?)\\?\s*\)?\s*$/) ||
    q.match(/:\s*\\?\(\s*(.+?)\s*\\\)/) ||
    q.match(/:\s*(.+)$/);
  if (m) {
    let e = m[1].trim();
    e = e.replace(/^\\\(/, '').replace(/\\\)$/, '').trim();
    return e;
  }
  return null;
}

function isTemplateSteps(steps) {
  const s = JSON.stringify(steps || []);
  return (
    s.includes('finance') ||
    s.includes('compound interest') ||
    s.includes('Apply the appropriate standard form') ||
    s.includes('amount of money') ||
    s.includes('standard calculus or finance')
  );
}

function getOpts(q) {
  if (Array.isArray(q.opts) && q.opts.length) return q.opts.slice();
  if (Array.isArray(q.options) && q.options.length)
    return q.options.map((o) => (typeof o === 'string' ? o : o.text || ''));
  return [];
}

function getCorrect(q) {
  const opts = getOpts(q);
  const idx = Number(q.a != null ? q.a : q.answer);
  if (Number.isInteger(idx) && opts[idx]) return { idx, text: opts[idx], opts };
  return { idx: 0, text: opts[0] || q.solution || '', opts };
}

/** Build solid differentiation steps from stem + correct answer */
function buildSteps(q) {
  const { text: ansRaw } = getCorrect(q);
  const ans = unwrap(ansRaw.replace(/^The correct answer is\s*/i, '').replace(/\.$/, ''));
  const stem = q.question || '';
  const expr = extractExpr(stem);
  const exprDisp = expr ? `\\(${expr}\\)` : 'the given function';
  const ql = stem.toLowerCase();

  // ── higher derivatives ──
  if (/first,\s*second,\s*third/i.test(stem) || /y',\s*y'',\s*y'''/i.test(stem)) {
    return [
      S(
        `Given: ${exprDisp}. Strategy: differentiate repeatedly using the chain rule for sine/cosine.`,
        exprDisp
      ),
      S(
        `First derivative: apply \\(\\dfrac{d}{dx}\\sin(kx)=k\\cos(kx)\\) or \\(\\dfrac{d}{dx}\\cos(kx)=-k\\sin(kx)\\) as appropriate.`,
        `\\(y'\\)` 
      ),
      S(
        `Differentiate again for \\(y''\\), then \\(y'''\\) and \\(y''''\\). Each step multiplies by the chain-rule factor and switches between sine and cosine (with signs).`,
        ans
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── amplitudes ──
  if (/amplitudes/i.test(stem)) {
    return [
      S(
        `Given the successive derivatives from the previous part. Strategy: the amplitude of \\(A\\sin(kx)\\) or \\(A\\cos(kx)\\) is \\(|A|\\).`,
        `\\text{read coefficients}`
      ),
      S(
        `List the absolute values of the coefficients of the four derivative functions.`,
        ans
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── evaluate f'(a) ──
  if (/find\s+f'\(/i.test(stem) || /f'\\?\(/i.test(stem) && /find/i.test(stem)) {
    return [
      S(
        `Given the function in the stem. Strategy: differentiate first, then substitute the given value of \\(x\\).`,
        exprDisp
      ),
      S(
        `Differentiate using standard trigonometric forms and the chain rule.`,
        `\\(f'(x)\\)`
      ),
      S(
        `Substitute the given \\(x\\)-value carefully (exact values of sine/cosine where possible).`,
        ans
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── product rule ──
  if (/product rule/i.test(stem)) {
    return [
      S(
        `Given: ${exprDisp}. Strategy: product rule \\((uv)' = u'v + uv'\\).`,
        exprDisp
      ),
      S(
        `Identify \\(u\\) and \\(v\\), differentiate each (using the chain rule on any composite trig factor).`,
        `\\(u',\\ v'\\)`
      ),
      S(
        `Form \\(u'v + uv'\\) and simplify. A common slip is missing the chain-rule factor on the trig part.`,
        ans
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── quotient rule ──
  if (/quotient rule/i.test(stem) || /\\frac\{/.test(expr || '') && /find/i.test(stem)) {
    return [
      S(
        `Given: ${exprDisp}. Strategy: quotient rule \\(\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^{2}}\\).`,
        exprDisp
      ),
      S(
        `Identify numerator \\(u\\) and denominator \\(v\\). Differentiate each.`,
        `\\(u',\\ v'\\)`
      ),
      S(
        `Substitute into the quotient formula and simplify. Watch the minus sign in the numerator.`,
        ans
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── chain rule (explicit) ──
  if (/chain rule/i.test(stem)) {
    return [
      S(
        `Given: ${exprDisp}. Strategy: chain rule. Write as an outer function of an inner function \\(u\\).`,
        exprDisp
      ),
      S(
        `Differentiate the outer function, multiply by \\(u'\\). For powers such as \\(\\sin^{n}x\\), use \\(n\\sin^{n-1}x\\cdot\\cos x\\).`,
        `\\(\\dfrac{dy}{du}\\cdot u'\\)`
      ),
      S(
        `Simplify. A common slip is forgetting the derivative of the inner function.`,
        ans
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── log of trig ──
  if (/\\log_e|\\ln/.test(stem) || /log_e/.test(stem)) {
    return [
      S(
        `Given: ${exprDisp}. Strategy: chain rule for natural log. Recall \\(\\dfrac{d}{dx}\\ln u = \\dfrac{1}{u}\\,u'\\).`,
        exprDisp
      ),
      S(
        `Here \\(u\\) is the trig expression inside the log. Differentiate: \\(f'(x) = \\dfrac{1}{u}\\cdot u'\\).`,
        `\\(f' = \\dfrac{u'}{u}\\)`
      ),
      S(
        `Simplify using a reciprocal trig identity if possible (e.g. \\(\\dfrac{\\cos x}{\\sin x} = \\cot x\\), \\(\\dfrac{-\\sin x}{\\cos x} = -\\tan x\\)).`,
        ans
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── exp of trig / trig of exp ──
  if (/e\^\{|e\^\\/.test(stem) || /e\^\{/.test(expr || '')) {
    return [
      S(
        `Given: ${exprDisp}. Strategy: chain rule. The derivative of \\(e^{u}\\) is \\(e^{u}u'\\); the derivative of \\(\\sin u\\) is \\(\\cos u\\,u'\\).`,
        exprDisp
      ),
      S(
        `Differentiate the outer function, then multiply by the derivative of the exponent or the inside.`,
        `\\text{chain rule}`
      ),
      S(
        `Simplify. A common slip is forgetting a chain-rule factor (e.g. the 2 in \\(e^{2x}\\) or in \\(\\sin 2x\\)).`,
        ans
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── DE / which functions satisfy ──
  if (/satisfy|which of the functions/i.test(stem)) {
    return [
      S(
        `Given several candidate functions. Strategy: differentiate each and test the stated differential equation.`,
        `\\text{test each candidate}`
      ),
      S(
        `For example, if the condition is \\(y' = y\\), only exponential growth \\(y = e^{x}\\) works among the usual list. Check each condition carefully.`,
        `\\text{compare } y', y'', \\ldots`
      ),
      S(
        `Select every function that satisfies the condition (sometimes more than one).`,
        ans
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── geometric relationship y'' = -y etc ──
  if (/geometric relationship/i.test(stem)) {
    return [
      S(
        `Given a relationship between a function and one of its derivatives.`,
        stem.includes("y''''") ? "\\(y'''' = y\\)" : "\\(y'' = -y\\)"
      ),
      S(
        `Interpret geometrically: \\(y'' = -y\\) means the graph of \\(y''\\) is the reflection of \\(y\\) in the \\(x\\)-axis. \\(y'''' = y\\) means the fourth derivative graph coincides with the original.`,
        `\\text{compare graphs}`
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── sum of trig (linear combination) ──
  if (/\+/.test(expr || '') && /sin|cos|tan/.test(expr || '')) {
    return [
      S(
        `Given: ${exprDisp}. Strategy: differentiate term by term using standard forms.`,
        exprDisp
      ),
      S(
        `Use \\(\\dfrac{d}{dx}\\sin(ax+b)=a\\cos(ax+b)\\), \\(\\dfrac{d}{dx}\\cos(ax+b)=-a\\sin(ax+b)\\), \\(\\dfrac{d}{dx}\\tan(ax+b)=a\\sec^{2}(ax+b)\\).`,
        `\\text{term-by-term}`
      ),
      S(
        `Combine and simplify. Watch signs carefully (especially derivatives of cosine).`,
        ans
      ),
      S(`Final answer: ${ans}.`, ans),
    ];
  }

  // ── default: standard form / linear chain ──
  return [
    S(
      `Given: ${exprDisp}. Strategy: use the standard derivative of sine, cosine or tangent, with the chain rule if the angle is not simply \\(x\\).`,
      exprDisp
    ),
    S(
      `Standard forms: \\(\\dfrac{d}{dx}\\sin u = \\cos u\\cdot u'\\), \\(\\dfrac{d}{dx}\\cos u = -\\sin u\\cdot u'\\), \\(\\dfrac{d}{dx}\\tan u = \\sec^{2}u\\cdot u'\\).`,
      `\\text{apply form}`
    ),
    S(
      `If the inside is linear (e.g. \\(kx\\) or \\(ax+b\\)), multiply by the constant derivative of the inside. Simplify signs.`,
      ans
    ),
    S(`Final answer: ${ans}.`, ans),
  ];
}

/** Fix nonsense distractors on specific known-bad questions */
const OPTS_FIX = {
  'y12a-6b-q11e': {
    opts: [
      '\\(\\cot x\\)',
      '\\(\\cot x + 1\\)',
      '\\(\\tan x\\)',
      '\\(\\dfrac{\\cos x}{\\sin x} + \\sin x\\)',
    ],
    a: 0,
    answer: '0',
  },
  'y12a-6b-q1c': {
    // was: dfrac 13/(x+3) as option 0
    opts: [
      '\\(\\sec x\\)',
      '\\(\\sec^{2} x\\)',
      '\\(\\sec^{2} x + 1\\)',
      '\\(\\sec^{4} x\\)',
    ],
    a: 1,
    answer: '1',
  },
  'y12a-6b-q14d_i': {
    opts: [
      '\\(y = e^{-x}\\)',
      '\\(y = \\sin x\\)',
      '\\(y = e^{x}\\)',
      '\\(y = x^{n}\\)',
    ],
    a: 2,
    answer: '2',
  },
  'y12a-6b-q14d_iii': {
    opts: [
      '\\(y = e^{-x}\\)',
      '\\(y = \\sin x\\)',
      '\\(y = e^{x}\\)',
      '\\(\\text{none of these}\\)',
    ],
    a: 2,
    answer: '2',
  },
};

function applyQuestion(q) {
  if (q.type !== 'multiple_choice' && q.type !== 'mc') {
    // still try multiparts' embedded subs later
    if (Array.isArray(q.subQuestions)) {
      q.subQuestions = q.subQuestions.map((s) => applyQuestion(s));
    }
    return q;
  }

  if (OPTS_FIX[q.id]) {
    Object.assign(q, OPTS_FIX[q.id]);
  }

  const opts = getOpts(q);
  if (opts.length) {
    q.opts = opts;
    q.options = opts.map((text) => ({ text, imageUrl: null }));
  }

  if (isTemplateSteps(q.solutionSteps) || !q.solutionSteps || q.solutionSteps.length < 3) {
    q.solutionSteps = buildSteps(q);
  }

  // clean solution line
  const { text } = getCorrect(q);
  if (text) {
    q.solution = `The correct answer is ${unwrap(text)}.`;
  }

  // sensible hint if empty
  if (!q.hint) {
    q.hint =
      'Use the standard derivatives of \\(\\sin\\), \\(\\cos\\) and \\(\\tan\\), with the chain, product or quotient rule as required.';
  }

  return q;
}

function main() {
  delete require.cache[require.resolve(SEED)];
  const mod = require(SEED);
  const list = mod.Y12A_CH6B_QUESTIONS || mod.default;
  if (!Array.isArray(list)) throw new Error('Could not load Y12A_CH6B_QUESTIONS');

  let fixed = 0;
  for (const q of list) {
    const before = JSON.stringify(q.solutionSteps);
    applyQuestion(q);
    if (JSON.stringify(q.solutionSteps) !== before || OPTS_FIX[q.id]) fixed++;
  }

  writeFileSync(
    SEED,
    'export const Y12A_CH6B_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6B_QUESTIONS;\n',
    'utf8'
  );
  console.log('Wrote', SEED, 'questions fixed/touched', fixed, '/', list.length);

  // sample
  for (const id of ['y12a-6b-q11e', 'y12a-6b-q1a', 'y12a-6b-q6a', 'y12a-6b-q11c']) {
    const q = list.find((x) => x.id === id);
    if (!q) continue;
    console.log('\n===', id, '===');
    console.log('opts', q.opts);
    console.log('step0', q.solutionSteps[0].explanation.slice(0, 100));
    console.log('step1 wo', q.solutionSteps[1].workingOut);
  }

  if (!PUSH) {
    console.log('\nSeed only. Re-run with --push for Firestore.');
    return;
  }
  pushFirestore(list).catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

async function pushFirestore(list) {
  const { initializeApp, cert, getApps } = require('firebase-admin/app');
  const { getFirestore, FieldValue } = require('firebase-admin/firestore');
  const saPath =
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
  const sa = JSON.parse(readFileSync(saPath, 'utf8'));
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

  // Also pull live FS docs that may not be in seed (all topic 6B MC)
  const snap = await db.collection('questions').where('topicId', '==', 'y12a-6B').get();
  const byId = new Map(list.map((q) => [q.id, q]));

  for (const doc of snap.docs) {
    let q = byId.get(doc.id);
    if (!q) {
      // expand in place from FS data
      q = applyQuestion({ id: doc.id, ...doc.data() });
    } else {
      q = applyQuestion(JSON.parse(JSON.stringify(q)));
    }
    if (q.type !== 'multiple_choice' && q.type !== 'mc') {
      // still update if template
      if (!isTemplateSteps(doc.data().solutionSteps) && !OPTS_FIX[doc.id]) continue;
    }

    const payload = {
      solutionSteps: q.solutionSteps,
      solution: q.solution || null,
      hint: q.hint || null,
      updatedAt: FieldValue.serverTimestamp(),
      origin: 'seed',
    };
    if (q.opts) {
      payload.opts = q.opts;
      payload.options = q.opts.map((text) => ({ text, imageUrl: null }));
    }
    if (q.a != null) {
      payload.a = q.a;
      payload.answer = String(q.a);
    }
    batch.set(db.collection('questions').doc(q.id), payload, { merge: true });
    n++;
    if (n >= 400) await flush();
  }
  await flush();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('\nPushed Firestore version', ver);

  const d = (await db.collection('questions').doc('y12a-6b-q11e').get()).data();
  console.log('q11e opts', d.options?.map((o) => o.text));
  console.log('q11e step0', d.solutionSteps?.[0]?.explanation?.slice(0, 120));
  console.log('q11e step1', d.solutionSteps?.[1]?.explanation?.slice(0, 120));
}

main();
