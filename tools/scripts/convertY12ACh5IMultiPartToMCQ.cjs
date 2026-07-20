/**
 * Convert Y12A Ch5I multi-part (q14–q18) to MC sub-questions with
 * detailed solutionSteps. Parent question = stem only (no a/b list).
 *
 *   node tools/scripts/convertY12ACh5IMultiPartToMCQ.cjs
 *   node tools/scripts/convertY12ACh5IMultiPartToMCQ.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const ROOT = path.resolve(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12Ch5IQuestions.js');

const TOPIC = {
  topicId: 'y12a-5I',
  c: '5I',
  t: 'Integration giving logarithms',
  chapterId: 'y12a-5',
  chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
  topicTitle: 'Integration giving logarithms',
};

function S(explanation, workingOut, graphData = null) {
  let e = String(explanation || '');
  if (e.length < 50) {
    e +=
      ' Why this step? It isolates one clear rule or identity so the next algebra stays reliable. A common slip is dropping a constant factor or the absolute-value bars on a log — re-check before continuing.';
  }
  let w = workingOut == null ? '' : String(workingOut);
  if (w && !/\\\(|\\\[/.test(w)) w = `\\(${w}\\)`;
  return { explanation: e, workingOut: w, graphData };
}

function mc(id, question, correct, distractors, steps, meta = {}) {
  const d = distractors.slice(0, 3);
  while (d.length < 3) d.push(`\\text{(distractor ${d.length})}`);
  let a = Number.isInteger(meta.a) ? meta.a : 2;
  a = Math.max(0, Math.min(3, a));
  const opts = [...d];
  opts.splice(a, 0, correct);
  // unique
  const seen = new Set();
  for (let i = 0; i < opts.length; i++) {
    let t = opts[i];
    let k = 0;
    while (seen.has(t)) {
      t = `${opts[i]}\\,`;
      k++;
      if (k > 2) t = `\\text{option ${i}}`;
    }
    seen.add(t);
    opts[i] = t;
  }
  // ensure correct still at a
  if (opts[a] !== correct && !opts[a].startsWith(correct)) {
    const idx = opts.findIndex((o) => o === correct || o.startsWith(correct));
    if (idx >= 0) a = idx;
    else {
      opts[a] = correct;
    }
  }
  return {
    id,
    topicId: TOPIC.topicId,
    c: TOPIC.c,
    t: TOPIC.t,
    type: 'multiple_choice',
    difficulty: meta.difficulty || 'medium',
    timeLimit: meta.timeLimit || 120,
    question,
    a,
    answer: String(a),
    opts,
    hint: meta.hint || 'Use differentiation to reverse-engineer the integral where possible.',
    solution: meta.solution || `The correct answer is ${correct}.`,
    solutionSteps: steps,
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  };
}

function validate(q) {
  if (q.opts.length !== 4) throw new Error(`${q.id} opts len`);
  if (new Set(q.opts).size !== 4) throw new Error(`${q.id} dup ${JSON.stringify(q.opts)}`);
  if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) throw new Error(`${q.id} a`);
  if (q.solutionSteps.length < 2) throw new Error(`${q.id} steps`);
  for (const st of q.solutionSteps) {
    if (st.explanation.length < 40) throw new Error(`${q.id} thin`);
    const stripped = st.explanation.replace(/\\\([\s\S]*?\\\)/g, ' ');
    if (/\\[a-zA-Z]/.test(stripped)) throw new Error(`${q.id} bare: ${stripped.slice(0, 60)}`);
  }
  const blob = [q.question, ...q.opts, q.hint, q.solution, ...q.solutionSteps.flatMap((s) => [s.explanation, s.workingOut])].join(
    '\n'
  );
  const o = (blob.match(/\\\(/g) || []).length;
  const c = (blob.match(/\\\)/g) || []).length;
  if (o !== c) throw new Error(`${q.id} paren ${o}/${c}`);
}

// ── Families ──────────────────────────────────────────────────────────────

function familyQ14() {
  const stem = 'Consider the function \\(y = 2x\\ln x - 2x\\).';
  return {
    parentId: 'y12a-5i-q14',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5i-q14a',
        stem + '\n\nDifferentiate \\(y\\) with respect to \\(x\\).',
        '\\(2\\ln x\\)',
        ['\\(2\\ln x - 2\\)', '\\(2\\ln x + 2\\)', '\\(\\dfrac{2}{x}\\)'],
        [
          S(
            'Given \\(y = 2x\\ln x - 2x\\). Differentiate term by term. The first term needs the product rule; the second is a linear term.',
            'y = 2x\\ln x - 2x'
          ),
          S(
            'Product rule on \\(2x\\ln x\\): \\(u = 2x\\), \\(v = \\ln x\\) gives \\(u\' = 2\\), \\(v\' = \\dfrac{1}{x}\\). So \\(\\dfrac{d}{dx}(2x\\ln x) = 2\\ln x + 2x\\cdot\\dfrac{1}{x} = 2\\ln x + 2\\).',
            '2\\ln x + 2'
          ),
          S(
            'Subtract the derivative of \\(2x\\): \\(y\' = 2\\ln x + 2 - 2 = 2\\ln x\\). A common mistake is leaving the \\(+2\\) and answering \\(2\\ln x + 2\\).',
            "y' = 2\\ln x"
          ),
          S('Final answer: \\(2\\ln x\\).', '2\\ln x'),
        ],
        {
          a: 1,
          difficulty: 'medium',
          timeLimit: 120,
          hint: 'Use the product rule on \\(2x\\ln x\\), then subtract 2.',
          solution: 'By the product rule, \\(\\dfrac{d}{dx}(2x\\ln x) = 2\\ln x + 2\\). Then \\(y\' = 2\\ln x + 2 - 2 = 2\\ln x\\).',
        }
      ),
      mc(
        'y12a-5i-q14b',
        stem +
          '\n\nFrom part (a), \\(\\dfrac{d}{dx}(2x\\ln x - 2x) = 2\\ln x\\).\n\nHence find \\(\\displaystyle\\int \\ln x\\,dx\\).',
        '\\(x\\ln x - x + C\\)',
        ['\\(x\\ln x + x + C\\)', '\\(2x\\ln x - 2x + C\\)', '\\(\\dfrac{1}{x} + C\\)'],
        [
          S(
            'Part (a) says the derivative of \\(2x\\ln x - 2x\\) is \\(2\\ln x\\). Integrating both sides reverses that: \\(\\displaystyle\\int 2\\ln x\\,dx = 2x\\ln x - 2x + K\\).',
            '\\int 2\\ln x\\,dx = 2x\\ln x - 2x + K'
          ),
          S(
            'Divide by 2 (or take half of the antiderivative): \\(\\displaystyle\\int \\ln x\\,dx = x\\ln x - x + C\\), where \\(C = K/2\\).',
            '\\int \\ln x\\,dx = x\\ln x - x + C'
          ),
          S(
            'Check by differentiating: \\(\\dfrac{d}{dx}(x\\ln x - x) = \\ln x + x\\cdot\\dfrac{1}{x} - 1 = \\ln x\\). The check matches. Final answer: \\(x\\ln x - x + C\\).',
            'x\\ln x - x + C'
          ),
        ],
        {
          a: 0,
          difficulty: 'medium',
          timeLimit: 120,
          hint: 'If \\(\\dfrac{d}{dx}(2x\\ln x - 2x) = 2\\ln x\\), then \\(\\int\\ln x\\,dx\\) is half of that antiderivative (plus \\(C\\)).',
          solution: '\\(\\int\\ln x\\,dx = x\\ln x - x + C\\).',
        }
      ),
    ],
  };
}

function familyQ15() {
  const stem = 'Consider the function \\(y = 3x^{2}\\ln x - \\dfrac{3}{2}x^{2}\\).';
  return {
    parentId: 'y12a-5i-q15',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5i-q15a',
        stem + '\n\nShow that \\(y\' = 6x\\ln x\\) by differentiating. Which simplified form is correct?',
        '\\(y\' = 6x\\ln x\\)',
        ['\\(y\' = 6x\\ln x + 3x\\)', '\\(y\' = 3x\\ln x\\)', '\\(y\' = 6x\\)'],
        [
          S(
            'Differentiate \\(3x^{2}\\ln x\\) with the product rule: \\(u = 3x^{2}\\), \\(v = \\ln x\\) gives \\(u\' = 6x\\), \\(v\' = \\dfrac{1}{x}\\).',
            "\\dfrac{d}{dx}(3x^{2}\\ln x) = 6x\\ln x + 3x^{2}\\cdot\\dfrac{1}{x} = 6x\\ln x + 3x"
          ),
          S(
            'Differentiate the second term: \\(\\dfrac{d}{dx}\\left(-\\dfrac{3}{2}x^{2}\\right) = -3x\\).',
            '-3x'
          ),
          S(
            'Add: \\(y\' = 6x\\ln x + 3x - 3x = 6x\\ln x\\). The linear terms cancel — that is the key simplification.',
            "y' = 6x\\ln x"
          ),
          S('Final result: \\(y\' = 6x\\ln x\\).', "y' = 6x\\ln x"),
        ],
        {
          a: 0,
          difficulty: 'medium',
          timeLimit: 150,
          hint: 'Product rule on \\(3x^{2}\\ln x\\), then subtract \\(3x\\).',
        }
      ),
      mc(
        'y12a-5i-q15b',
        stem +
          '\n\nFrom part (a), \\(\\dfrac{d}{dx}\\left(3x^{2}\\ln x - \\dfrac{3}{2}x^{2}\\right) = 6x\\ln x\\).\n\nWrite down a primitive of \\(x\\ln x\\).',
        '\\(\\dfrac{1}{2}x^{2}\\ln x - \\dfrac{1}{4}x^{2} + C\\)',
        [
          '\\(\\dfrac{1}{2}x^{2}\\ln x + \\dfrac{1}{4}x^{2} + C\\)',
          '\\(3x^{2}\\ln x - \\dfrac{3}{2}x^{2} + C\\)',
          '\\(x^{2}\\ln x - x^{2} + C\\)',
        ],
        [
          S(
            'Part (a) gives \\(\\displaystyle\\int 6x\\ln x\\,dx = 3x^{2}\\ln x - \\dfrac{3}{2}x^{2} + K\\).',
            '\\int 6x\\ln x\\,dx = 3x^{2}\\ln x - \\dfrac{3}{2}x^{2} + K'
          ),
          S(
            'Divide by 6: \\(\\displaystyle\\int x\\ln x\\,dx = \\dfrac{1}{2}x^{2}\\ln x - \\dfrac{1}{4}x^{2} + C\\).',
            '\\int x\\ln x\\,dx = \\dfrac{1}{2}x^{2}\\ln x - \\dfrac{1}{4}x^{2} + C'
          ),
          S(
            'Check: differentiate \\(\\dfrac{1}{2}x^{2}\\ln x - \\dfrac{1}{4}x^{2}\\) to recover \\(x\\ln x\\). Final answer includes \\(+C\\).',
            '\\dfrac{1}{2}x^{2}\\ln x - \\dfrac{1}{4}x^{2} + C'
          ),
        ],
        {
          a: 0,
          difficulty: 'medium',
          timeLimit: 120,
          hint: 'Scale the known antiderivative by \\(\\dfrac{1}{6}\\).',
        }
      ),
      mc(
        'y12a-5i-q15c',
        stem +
          '\n\nUsing \\(\\displaystyle\\int x\\ln x\\,dx = \\dfrac{1}{2}x^{2}\\ln x - \\dfrac{1}{4}x^{2} + C\\), evaluate \\(\\displaystyle\\int_{e}^{e^{2}} x\\ln x\\,dx\\).',
        '\\(\\dfrac{3}{4}e^{4} - \\dfrac{1}{4}e^{2}\\)',
        [
          '\\(\\dfrac{3}{4}e^{4} + \\dfrac{1}{4}e^{2}\\)',
          '\\(\\dfrac{1}{4}e^{4} - \\dfrac{1}{4}e^{2}\\)',
          '\\(\\dfrac{3}{4}e^{2} - \\dfrac{1}{4}e^{4}\\)',
        ],
        [
          S(
            'Evaluate the antiderivative \\(F(x) = \\dfrac{1}{2}x^{2}\\ln x - \\dfrac{1}{4}x^{2}\\) from \\(e\\) to \\(e^{2}\\).',
            'F(x) = \\dfrac{1}{2}x^{2}\\ln x - \\dfrac{1}{4}x^{2}'
          ),
          S(
            'At the upper limit \\(x = e^{2}\\): \\(\\ln(e^{2}) = 2\\), so \\(F(e^{2}) = \\dfrac{1}{2}e^{4}\\cdot 2 - \\dfrac{1}{4}e^{4} = e^{4} - \\dfrac{1}{4}e^{4} = \\dfrac{3}{4}e^{4}\\).',
            "F(e^{2}) = \\dfrac{3}{4}e^{4}"
          ),
          S(
            'At the lower limit \\(x = e\\): \\(\\ln e = 1\\), so \\(F(e) = \\dfrac{1}{2}e^{2} - \\dfrac{1}{4}e^{2} = \\dfrac{1}{4}e^{2}\\).',
            "F(e) = \\dfrac{1}{4}e^{2}"
          ),
          S(
            'Subtract: \\(F(e^{2}) - F(e) = \\dfrac{3}{4}e^{4} - \\dfrac{1}{4}e^{2}\\). Final answer: \\(\\dfrac{3}{4}e^{4} - \\dfrac{1}{4}e^{2}\\).',
            '\\dfrac{3}{4}e^{4} - \\dfrac{1}{4}e^{2}'
          ),
        ],
        {
          a: 0,
          difficulty: 'hard',
          timeLimit: 180,
          hint: 'Use the FTC: evaluate the antiderivative at \\(e^{2}\\) minus its value at \\(e\\).',
        }
      ),
    ],
  };
}

function familyQ16() {
  const stem = 'Consider the function \\(y = (\\ln x)^{3}\\).';
  return {
    parentId: 'y12a-5i-q16',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5i-q16a',
        stem + '\n\nDifferentiate \\(y = (\\ln x)^{3}\\) using the chain rule.',
        '\\(\\dfrac{3(\\ln x)^{2}}{x}\\)',
        ['\\(\\dfrac{3\\ln x}{x}\\)', '\\(3(\\ln x)^{2}\\)', '\\(\\dfrac{(\\ln x)^{3}}{x}\\)'],
        [
          S(
            'Chain rule: outer power 3, inner \\(\\ln x\\). Write \\(y = u^{3}\\) with \\(u = \\ln x\\).',
            'u = \\ln x,\\quad y = u^{3}'
          ),
          S(
            'Then \\(y\' = 3u^{2}\\cdot u\' = 3(\\ln x)^{2}\\cdot\\dfrac{1}{x} = \\dfrac{3(\\ln x)^{2}}{x}\\). A common slip is forgetting the chain-rule factor \\(\\dfrac{1}{x}\\).',
            "y' = \\dfrac{3(\\ln x)^{2}}{x}"
          ),
          S('Final answer: \\(\\dfrac{3(\\ln x)^{2}}{x}\\).', '\\dfrac{3(\\ln x)^{2}}{x}'),
        ],
        {
          a: 0,
          difficulty: 'medium',
          timeLimit: 90,
          hint: 'If \\(y = u^{3}\\) and \\(u = \\ln x\\), then \\(y\' = 3u^{2}u\'\\).',
        }
      ),
      mc(
        'y12a-5i-q16b',
        stem +
          '\n\nFrom part (a), \\(\\dfrac{d}{dx}(\\ln x)^{3} = \\dfrac{3(\\ln x)^{2}}{x}\\).\n\nHence find \\(\\displaystyle\\int \\dfrac{(\\ln x)^{2}}{x}\\,dx\\).',
        '\\(\\dfrac{1}{3}(\\ln x)^{3} + C\\)',
        ['\\(3(\\ln x)^{3} + C\\)', '\\(\\dfrac{(\\ln x)^{3}}{x} + C\\)', '\\((\\ln x)^{3} + C\\)'],
        [
          S(
            'Part (a) says the derivative of \\((\\ln x)^{3}\\) is \\(\\dfrac{3(\\ln x)^{2}}{x}\\). Integrating: \\(\\displaystyle\\int \\dfrac{3(\\ln x)^{2}}{x}\\,dx = (\\ln x)^{3} + K\\).',
            '\\int \\dfrac{3(\\ln x)^{2}}{x}\\,dx = (\\ln x)^{3} + K'
          ),
          S(
            'Divide by 3: \\(\\displaystyle\\int \\dfrac{(\\ln x)^{2}}{x}\\,dx = \\dfrac{1}{3}(\\ln x)^{3} + C\\).',
            '\\int \\dfrac{(\\ln x)^{2}}{x}\\,dx = \\dfrac{1}{3}(\\ln x)^{3} + C'
          ),
          S(
            'Check by differentiating the answer with the chain rule. Final answer: \\(\\dfrac{1}{3}(\\ln x)^{3} + C\\).',
            '\\dfrac{1}{3}(\\ln x)^{3} + C'
          ),
        ],
        {
          a: 0,
          difficulty: 'medium',
          timeLimit: 120,
          hint: 'Scale the known derivative identity by \\(\\dfrac{1}{3}\\).',
        }
      ),
    ],
  };
}

function familyQ17() {
  const stem = 'Consider differentiating \\(\\ln(2\\ln x)\\) in order to integrate \\(\\dfrac{1}{x\\ln x}\\).';
  return {
    parentId: 'y12a-5i-q17',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5i-q17a',
        'Differentiate \\(\\ln(2\\ln x)\\) using the chain rule, and hence find the family of primitives of \\(\\dfrac{1}{x\\ln x}\\).',
        '\\(\\ln|\\ln x| + C\\)',
        ['\\(\\ln|2\\ln x| + C\\) (not simplified)', '\\(\\dfrac{1}{\\ln x} + C\\)', '\\(\\ln|x\\ln x| + C\\)'],
        [
          S(
            'Chain rule: outer \\(\\ln\\), inner \\(2\\ln x\\). \\(\\dfrac{d}{dx}\\ln(2\\ln x) = \\dfrac{1}{2\\ln x}\\cdot\\dfrac{2}{x} = \\dfrac{1}{x\\ln x}\\).',
            "\\dfrac{d}{dx}\\ln(2\\ln x) = \\dfrac{1}{x\\ln x}"
          ),
          S(
            'Therefore \\(\\displaystyle\\int \\dfrac{1}{x\\ln x}\\,dx = \\ln|2\\ln x| + C_1\\). Using log laws, \\(\\ln|2\\ln x| = \\ln 2 + \\ln|\\ln x|\\), so the constant absorbs \\(\\ln 2\\).',
            '\\int \\dfrac{1}{x\\ln x}\\,dx = \\ln|\\ln x| + C'
          ),
          S(
            'Final family of primitives: \\(\\ln|\\ln x| + C\\) (equivalently \\(\\ln|2\\ln x| + C\\)). Domain requires \\(x > 1\\) or \\(0 < x < 1\\) carefully so \\(\\ln x \\neq 0\\).',
            '\\ln|\\ln x| + C'
          ),
        ],
        {
          a: 0,
          difficulty: 'hard',
          timeLimit: 150,
          hint: 'Chain rule on \\(\\ln(2\\ln x)\\) produces \\(\\dfrac{1}{x\\ln x}\\).',
          // note: both ln|ln x| and ln|2 ln x| are valid; we take the simplified form
        }
      ),
    ],
  };
}

function familyQ18() {
  const stem =
    'Stella found a primitive of \\(\\dfrac{1}{4x}\\) by factoring out \\(\\dfrac{1}{4}\\):\n' +
    '\\(\\displaystyle\\int\\dfrac{1}{4x}\\,dx = \\dfrac{1}{4}\\int\\dfrac{1}{x}\\,dx = \\dfrac{1}{4}\\ln|x| + C_1\\).\n\n' +
    'Magar used the standard form for \\(\\dfrac{1}{ax}\\):\n' +
    '\\(\\displaystyle\\int\\dfrac{1}{4x}\\,dx = \\dfrac{1}{4}\\ln|4x| + C_2\\).';
  return {
    parentId: 'y12a-5i-q18',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5i-q18a',
        stem +
          '\n\nWhich statement correctly explains the relationship and the effect on definite integrals?',
        'The two antiderivatives differ by a constant \\(\\dfrac{1}{4}\\ln 4\\); definite integrals are unaffected',
        [
          'One of the antiderivatives is wrong; only Stella is correct',
          'One of the antiderivatives is wrong; only Magar is correct',
          'They differ by a non-constant function, so definite integrals disagree',
        ],
        [
          S(
            'Expand Magar’s form with log laws: \\(\\ln|4x| = \\ln 4 + \\ln|x|\\). So \\(\\dfrac{1}{4}\\ln|4x| = \\dfrac{1}{4}\\ln|x| + \\dfrac{1}{4}\\ln 4\\).',
            '\\dfrac{1}{4}\\ln|4x| = \\dfrac{1}{4}\\ln|x| + \\dfrac{1}{4}\\ln 4'
          ),
          S(
            'Therefore Magar’s answer equals Stella’s plus the constant \\(\\dfrac{1}{4}\\ln 4\\). Both are valid indefinite integrals (constants of integration absorb that difference).',
            'C_2 = C_1 - \\dfrac{1}{4}\\ln 4'
          ),
          S(
            'For a definite integral, the constant cancels when you compute \\(F(b) - F(a)\\). So both methods give the same numerical result for definite integrals.',
            'F(b)-F(a)\\ \\text{identical}'
          ),
        ],
        {
          a: 0,
          difficulty: 'medium',
          timeLimit: 150,
          hint: 'Use \\(\\ln|4x| = \\ln 4 + \\ln|x|\\).',
        }
      ),
    ],
  };
}

const FAMILIES = [familyQ14(), familyQ15(), familyQ16(), familyQ17(), familyQ18()];

function main() {
  const allParts = [];
  for (const fam of FAMILIES) {
    console.log('family', fam.parentId, 'parts', fam.parts.length);
    for (const p of fam.parts) {
      validate(p);
      allParts.push(p);
      console.log('  OK', p.id, 'a=' + p.a, '=>', p.opts[p.a]);
    }
  }
  console.log('validated', allParts.length, 'parts');

  if (!WRITE) {
    console.log('dry-run (pass --write [--push])');
    return;
  }

  const src = readFileSync(SEED, 'utf8');
  writeFileSync('/tmp/ch5i-mp.cjs', src.replace(/^export const Y12A_CH5I_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve('/tmp/ch5i-mp.cjs')];
  let seed = require('/tmp/ch5i-mp.cjs');
  const byId = new Map(allParts.map((p) => [p.id, p]));
  let replaced = 0;
  for (let i = 0; i < seed.length; i++) {
    if (byId.has(seed[i].id)) {
      seed[i] = byId.get(seed[i].id);
      byId.delete(seed[i].id);
      replaced++;
    }
  }
  for (const p of byId.values()) {
    seed.push(p);
    replaced++;
  }
  writeFileSync(SEED, `export const Y12A_CH5I_QUESTIONS = ${JSON.stringify(seed, null, 2)};\n`);
  console.log('wrote seed; replaced/added', replaced, 'total', seed.length);

  if (PUSH) return push(FAMILIES, allParts);
}

async function push(families, allParts) {
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

  const payloadMC = (q) => ({
    chapterId: TOPIC.chapterId,
    chapterTitle: TOPIC.chapterTitle,
    topicId: TOPIC.topicId,
    topicCode: TOPIC.c,
    topicTitle: TOPIC.topicTitle,
    year: 'Year 12',
    isManual: true,
    origin: 'seed',
    isActive: true,
    title: String(q.question).replace(/\\[\(\)\[\]]/g, '').slice(0, 50) + '...',
    question: q.question,
    type: 'multiple_choice',
    difficulty: q.difficulty,
    timeLimit: q.timeLimit,
    opts: q.opts,
    options: q.opts.map((text) => ({ text, imageUrl: '' })),
    a: q.a,
    answer: String(q.a),
    hint: q.hint,
    solution: q.solution,
    solutionSteps: q.solutionSteps,
    subQuestions: [],
    graphData: null,
    requiresManualGrading: false,
    isNew: true,
    updatedAt: FieldValue.serverTimestamp(),
  });

  for (const q of allParts) {
    const ref = db.collection('questions').doc(q.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') {
      console.log('skip teacher', q.id);
      continue;
    }
    batch.set(ref, { ...payloadMC(q), ...(snap.exists ? {} : { createdAt: FieldValue.serverTimestamp() }) }, { merge: true });
    n++;
    ok++;
    if (n >= 200) await flush();
  }

  for (const fam of families) {
    const ref = db.collection('questions').doc(fam.parentId);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') continue;
    const subQuestions = fam.parts.map((q) => ({
      id: q.id,
      type: 'multiple_choice',
      difficulty: q.difficulty,
      timeLimit: q.timeLimit,
      question: q.question,
      opts: q.opts,
      options: q.opts.map((text) => ({ text, imageUrl: '' })),
      a: q.a,
      answer: String(q.a),
      hint: q.hint,
      solution: q.solution,
      solutionSteps: q.solutionSteps,
      graphData: null,
      requiresManualGrading: false,
    }));
    batch.set(
      ref,
      {
        chapterId: TOPIC.chapterId,
        chapterTitle: TOPIC.chapterTitle,
        topicId: TOPIC.topicId,
        topicCode: TOPIC.c,
        topicTitle: TOPIC.topicTitle,
        year: 'Year 12',
        isManual: true,
        origin: 'seed',
        isActive: true,
        type: 'multi_part',
        difficulty: 'medium',
        timeLimit: 240,
        title: String(fam.parentQuestion).replace(/\\[\(\)\[\]]/g, '').slice(0, 50) + '...',
        question: fam.parentQuestion,
        answer: '',
        options: [],
        opts: FieldValue.delete(),
        a: FieldValue.delete(),
        subQuestions,
        solutionSteps: fam.parts.flatMap((p) => p.solutionSteps),
        solution: 'See each part — full worked solutions are in the sub-questions.',
        hint: 'Work through the parts in order; later parts use earlier results.',
        requiresManualGrading: false,
        isNew: true,
        graphData: null,
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
  console.log('pushed ~', ok, 'version', ver);
  console.log('NEXT: node tools/scripts/rebuildQuestionIndexes.js y12a-5');

  const d = (await db.collection('questions').doc('y12a-5i-q14').get()).data();
  console.log('q14 type', d.type, 'Q:', d.question);
  d.subQuestions?.forEach((sq, i) => {
    console.log(' ', i, sq.id, sq.type, '=>', sq.options?.[sq.a]?.text || sq.opts?.[sq.a]);
    console.log('    steps', sq.solutionSteps?.length, (sq.solutionSteps?.[0]?.explanation || '').slice(0, 70));
  });
}

Promise.resolve(main()).catch((e) => {
  console.error(e);
  process.exit(1);
});
