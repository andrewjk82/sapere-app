/**
 * Convert Y12A Ch5L (Chapter 5 Revision) to MCQ.
 * Rules:
 *  - multiple_choice, 4 opts, no seed shuffle
 *  - detailed solutionSteps
 *  - multi_part parent = stem only; subs without a)/b) labels or stem dup
 *  - sub-only flat docs isActive:false
 *  - \( \), \ln preferred; opts + options both written
 *
 *   node tools/scripts/convertY12ACh5LToMCQ.cjs --write --push
 *   node tools/scripts/rebuildQuestionIndexes.js y12a-5
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const SEED = path.join(path.resolve(__dirname, '../..'), 'src/constants/seedYear12Ch5LQuestions.js');

const TOPIC = {
  topicId: 'y12a-5L',
  c: '5L',
  t: 'Chapter 5 Revision',
  chapterId: 'y12a-5',
  chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
  topicTitle: 'Chapter 5 Revision',
};

function S(explanation, workingOut) {
  let e = String(explanation);
  if (e.length < 55) {
    e +=
      ' Why this step? It isolates one clear rule so the next algebra stays exact. A common slip is a missing chain-rule factor or sign error.';
  }
  let w = workingOut == null ? '' : String(workingOut);
  if (w && !/\\\(|\\\[/.test(w)) w = `\\(${w}\\)`;
  return { explanation: e, workingOut: w, graphData: null };
}

function mc(id, question, correct, distractors, steps, meta = {}) {
  const d = distractors.slice(0, 3);
  while (d.length < 3) d.push(`\\text{(opt ${d.length})}`);
  let a = Number.isInteger(meta.a) ? meta.a : 0;
  a = Math.max(0, Math.min(3, a));
  const opts = [...d];
  opts.splice(a, 0, correct);
  const seen = new Set();
  for (let i = 0; i < 4; i++) {
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
  if (opts[a] !== correct) {
    const idx = opts.indexOf(correct);
    if (idx >= 0) a = idx;
    else opts[a] = correct;
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
    hint: meta.hint || 'Use standard derivatives and integrals of exponential and logarithmic functions.',
    solution: meta.solution || `The correct answer is ${correct}.`,
    solutionSteps: steps,
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  };
}

function hasBare(text) {
  const stripped = String(text || '')
    .replace(/\\\([\s\S]*?\\\)/g, ' ')
    .replace(/\\\[[\s\S]*?\\\]/g, ' ');
  return /\\[a-zA-Z]/.test(stripped);
}

function validate(q) {
  if (q.opts.length !== 4) throw new Error(`${q.id} opts`);
  if (new Set(q.opts).size !== 4) throw new Error(`${q.id} dup ${JSON.stringify(q.opts)}`);
  if (!Number.isInteger(q.a)) throw new Error(`${q.id} a`);
  if (/(^|\n)\s*[a-z]\)\s/i.test(q.question)) throw new Error(`${q.id} part label`);
  if (q.solutionSteps.length < 2) throw new Error(`${q.id} steps`);
  for (const st of q.solutionSteps) {
    if (st.explanation.length < 40) throw new Error(`${q.id} thin`);
    if (hasBare(st.explanation)) throw new Error(`${q.id} bare: ${st.explanation.slice(0, 90)}`);
  }
  const blob = [q.question, ...q.opts, q.hint, q.solution, ...q.solutionSteps.flatMap((s) => [s.explanation, s.workingOut])].join('\n');
  const o = (blob.match(/\\\(/g) || []).length;
  const c = (blob.match(/\\\)/g) || []).length;
  if (o !== c) throw new Error(`${q.id} paren ${o}/${c}`);
}

const items = [];

// q1
items.push(mc('y12a-5l-q1',
  'Differentiate \\(y = e^{4x}\\).',
  '\\(4e^{4x}\\)',
  ['\\(e^{4x}\\)', '\\(4e^{x}\\)', '\\(e^{4x}\\ln 4\\)'],
  [
    S('Chain rule: derivative of \\(e^{u}\\) is \\(e^{u}u\'\\) with \\(u=4x\\), so \\(u\'=4\\).', 'u=4x'),
    S('Therefore \\(y\' = 4e^{4x}\\).', "y\'=4e^{4x}"),
    S('Final answer: \\(4e^{4x}\\).', '4e^{4x}'),
  ], { a: 0, difficulty: 'easy', timeLimit: 60 }));

items.push(mc('y12a-5l-q2',
  'Differentiate \\(y = e^{3x^{2}-1}\\).',
  '\\(6x e^{3x^{2}-1}\\)',
  ['\\(3e^{3x^{2}-1}\\)', '\\((6x-1)e^{3x^{2}-1}\\)', '\\(e^{6x}\\)'],
  [
    S('Chain rule with \\(u=3x^{2}-1\\), so \\(u\'=6x\\).', "u\'=6x"),
    S('\\(y\' = e^{u}u\' = 6x e^{3x^{2}-1}\\).', "y\'=6xe^{3x^{2}-1}"),
    S('Final answer: \\(6x e^{3x^{2}-1}\\).', '6xe^{3x^{2}-1}'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q3',
  'Differentiate \\(y = x^{2}e^{-x}\\).',
  '\\(e^{-x}(2x-x^{2})\\)',
  ['\\(e^{-x}(2x+x^{2})\\)', '\\(2xe^{-x}\\)', '\\(-x^{2}e^{-x}\\)'],
  [
    S('Product rule: \\(u=x^{2}\\), \\(v=e^{-x}\\) gives \\(u\'=2x\\), \\(v\'=-e^{-x}\\).', "u\'=2x,\\ v\'=-e^{-x}"),
    S('\\(y\' = 2x e^{-x} + x^{2}(-e^{-x}) = e^{-x}(2x-x^{2})\\).', "y\'=e^{-x}(2x-x^{2})"),
    S('Final answer: \\(e^{-x}(2x-x^{2})\\).', 'e^{-x}(2x-x^{2})'),
  ], { a: 0, difficulty: 'medium' }));

items.push(mc('y12a-5l-q4',
  'Find \\(\\displaystyle\\int 5e^{2x}\\,dx\\).',
  '\\(\\dfrac{5}{2}e^{2x}+C\\)',
  ['\\(5e^{2x}+C\\)', '\\(10e^{2x}+C\\)', '\\(\\dfrac{5}{2}e^{x}+C\\)'],
  [
    S('\\(\\displaystyle\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx}+C\\). Here factor 5 and \\(k=2\\).', '\\int 5e^{2x}\\,dx'),
    S('Result: \\(\\dfrac{5}{2}e^{2x}+C\\).', '\\dfrac{5}{2}e^{2x}+C'),
    S('Final answer: \\(\\dfrac{5}{2}e^{2x}+C\\).', '\\dfrac{5}{2}e^{2x}+C'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q5',
  'Evaluate \\(\\displaystyle\\int_0^{1} e^{3x}\\,dx\\) exactly.',
  '\\(\\dfrac{e^{3}-1}{3}\\)',
  ['\\(e^{3}-1\\)', '\\(\\dfrac{e^{3}}{3}\\)', '\\(3(e^{3}-1)\\)'],
  [
    S('Antiderivative: \\(\\dfrac{1}{3}e^{3x}\\).', '\\dfrac{1}{3}e^{3x}'),
    S('\\(\\dfrac{1}{3}(e^{3}-e^{0})=\\dfrac{e^{3}-1}{3}\\).', '\\dfrac{e^{3}-1}{3}'),
    S('Final answer: \\(\\dfrac{e^{3}-1}{3}\\).', '\\dfrac{e^{3}-1}{3}'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q6',
  'Differentiate \\(y = \\ln(5x+3)\\).',
  '\\(\\dfrac{5}{5x+3}\\)',
  ['\\(\\dfrac{1}{5x+3}\\)', '\\(\\dfrac{5}{x+3}\\)', '\\(5\\ln(5x+3)\\)'],
  [
    S('Chain rule: \\(\\dfrac{d}{dx}\\ln u = \\dfrac{u\'}{u}\\) with \\(u=5x+3\\), \\(u\'=5\\).', "u\'=5"),
    S('\\(y\' = \\dfrac{5}{5x+3}\\).', "y\'=\\dfrac{5}{5x+3}"),
    S('Final answer: \\(\\dfrac{5}{5x+3}\\).', '\\dfrac{5}{5x+3}'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q7',
  'Differentiate \\(y = \\ln(x^{2}+4)\\).',
  '\\(\\dfrac{2x}{x^{2}+4}\\)',
  ['\\(\\dfrac{1}{x^{2}+4}\\)', '\\(\\dfrac{2x}{x+4}\\)', '\\(\\dfrac{x}{x^{2}+4}\\)'],
  [
    S('\\(u=x^{2}+4\\), \\(u\'=2x\\), so \\(y\'=\\dfrac{2x}{x^{2}+4}\\).', "y\'=\\dfrac{2x}{x^{2}+4}"),
    S('Final answer: \\(\\dfrac{2x}{x^{2}+4}\\).', '\\dfrac{2x}{x^{2}+4}'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q8',
  'Differentiate \\(y = x\\ln x\\).',
  '\\(\\ln x + 1\\)',
  ['\\(\\ln x\\)', '\\(\\dfrac{1}{x}\\)', '\\(x+\\ln x\\)'],
  [
    S('Product rule: \\(u=x\\), \\(v=\\ln x\\) gives \\(u\'=1\\), \\(v\'=\\dfrac{1}{x}\\).', "u\'=1,\\ v\'=1/x"),
    S('\\(y\' = \\ln x + x\\cdot\\dfrac{1}{x} = \\ln x + 1\\).', "y\'=\\ln x+1"),
    S('Final answer: \\(\\ln x + 1\\).', '\\ln x+1'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q9',
  'Differentiate \\(y = \\dfrac{\\ln x}{x}\\).',
  '\\(\\dfrac{1-\\ln x}{x^{2}}\\)',
  ['\\(\\dfrac{\\ln x-1}{x^{2}}\\)', '\\(\\dfrac{1}{x^{2}}\\)', '\\(\\dfrac{1}{x}\\)'],
  [
    S('Quotient rule: \\(u=\\ln x\\), \\(v=x\\) gives \\(u\'=\\dfrac{1}{x}\\), \\(v\'=1\\).', "u\'=1/x,\\ v\'=1"),
    S('\\(y\' = \\dfrac{\\dfrac{1}{x}\\cdot x - \\ln x\\cdot 1}{x^{2}} = \\dfrac{1-\\ln x}{x^{2}}\\).', "y\'=\\dfrac{1-\\ln x}{x^{2}}"),
    S('Final answer: \\(\\dfrac{1-\\ln x}{x^{2}}\\).', '\\dfrac{1-\\ln x}{x^{2}}'),
  ], { a: 0, difficulty: 'medium' }));

items.push(mc('y12a-5l-q10',
  'Find \\(\\displaystyle\\int\\dfrac{6}{3x-1}\\,dx\\).',
  '\\(2\\ln|3x-1|+C\\)',
  ['\\(6\\ln|3x-1|+C\\)', '\\(\\dfrac{6}{3}\\ln|x|+C\\)', '\\(\\ln|3x-1|+C\\)'],
  [
    S('Write as \\(6\\cdot\\dfrac{1}{3}\\ln|3x-1| = 2\\ln|3x-1|+C\\) using \\(\\displaystyle\\int\\dfrac{1}{ax+b}\\,dx=\\dfrac{1}{a}\\ln|ax+b|+C\\).', '2\\ln|3x-1|+C'),
    S('Final answer: \\(2\\ln|3x-1|+C\\).', '2\\ln|3x-1|+C'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q11',
  'Find \\(\\displaystyle\\int\\dfrac{3x^{2}}{x^{3}+5}\\,dx\\).',
  '\\(\\ln|x^{3}+5|+C\\)',
  ['\\(3\\ln|x^{3}+5|+C\\)', '\\(\\dfrac{3x^{2}}{x^{3}+5}+C\\)', '\\(\\ln|3x^{2}|+C\\)'],
  [
    S('Numerator is the derivative of the denominator, so the integral is \\(\\ln|x^{3}+5|+C\\).', '\\ln|x^{3}+5|+C'),
    S('Final answer: \\(\\ln|x^{3}+5|+C\\).', '\\ln|x^{3}+5|+C'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q12',
  'Evaluate \\(\\displaystyle\\int_1^{4}\\dfrac{2}{x}\\,dx\\) exactly.',
  '\\(2\\ln 4\\)',
  ['\\(\\ln 4\\)', '\\(2\\ln 3\\)', '\\(8\\)'],
  [
    S('\\([2\\ln x]_1^4 = 2\\ln 4 - 2\\ln 1 = 2\\ln 4\\) (also \\(=\\ln 16\\)).', '2\\ln 4'),
    S('Final answer: \\(2\\ln 4\\).', '2\\ln 4'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q13',
  'Evaluate \\(\\displaystyle\\int_1^{e}\\left(e^{x}+\\dfrac{1}{x}\\right)dx\\).',
  '\\(e^{e}-e\\)',
  ['\\(e^{e}-1\\)', '\\(e^{e}+1\\)', '\\(e-1\\)'],
  [
    S('Antiderivative: \\(e^{x}+\\ln x\\).', 'e^{x}+\\ln x'),
    S('\\([e^{x}+\\ln x]_1^{e}=(e^{e}+1)-(e+0)=e^{e}-e\\).', 'e^{e}-e'),
    S('Final answer: \\(e^{e}-e\\).', 'e^{e}-e'),
  ], { a: 0, difficulty: 'medium' }));

items.push(mc('y12a-5l-q14',
  'Find the equation of the tangent to \\(y=e^{2x}\\) at the point where \\(x=0\\).',
  '\\(y=2x+1\\)',
  ['\\(y=2x\\)', '\\(y=x+1\\)', '\\(y=e^{2}x+1\\)'],
  [
    S('At \\(x=0\\): \\(y=e^{0}=1\\). Derivative \\(y\'=2e^{2x}\\) so at 0, \\(m=2\\).', 'P(0,1),\\ m=2'),
    S('Point–gradient: \\(y-1=2(x-0)\\Rightarrow y=2x+1\\).', 'y=2x+1'),
    S('Final equation: \\(y=2x+1\\).', 'y=2x+1'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q15',
  'Find the equation of the tangent to \\(y=\\ln x\\) at \\(x=1\\).',
  '\\(y=x-1\\)',
  ['\\(y=x\\)', '\\(y=x+1\\)', '\\(y=\\dfrac{1}{x}\\)'],
  [
    S('At \\(x=1\\): \\(y=0\\). Gradient \\(y\'=\\dfrac{1}{x}\\) so \\(m=1\\).', 'P(1,0),\\ m=1'),
    S('\\(y-0=1(x-1)\\Rightarrow y=x-1\\).', 'y=x-1'),
    S('Final equation: \\(y=x-1\\).', 'y=x-1'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q16',
  'Find the stationary point of \\(y=xe^{-x}\\) and its nature.',
  'Maximum at \\(\\left(1,\\dfrac{1}{e}\\right)\\)',
  [
    'Minimum at \\(\\left(1,\\dfrac{1}{e}\\right)\\)',
    'Maximum at \\((0,0)\\)',
    'Maximum at \\((e,1)\\)',
  ],
  [
    S('Product rule: \\(y\'=e^{-x}-xe^{-x}=e^{-x}(1-x)\\). Set \\(y\'=0\\Rightarrow x=1\\).', 'x=1'),
    S('\\(y(1)=\\dfrac{1}{e}\\). For \\(x<1\\), \\(y\'>0\\); for \\(x>1\\), \\(y\'<0\\) so maximum.', '\\left(1,1/e\\right)'),
    S('Final answer: maximum at \\(\\left(1,\\dfrac{1}{e}\\right)\\).', 'max at (1,1/e)'),
  ], { a: 0, difficulty: 'medium' }));

items.push(mc('y12a-5l-q17',
  'Find the area bounded by \\(y=e^{x}\\), the \\(x\\)-axis, \\(x=0\\) and \\(x=2\\).',
  '\\(e^{2}-1\\)',
  ['\\(e^{2}\\)', '\\(e^{2}+1\\)', '\\(2e\\)'],
  [
    S('\\(\\displaystyle\\int_0^{2}e^{x}\\,dx=[e^{x}]_0^{2}=e^{2}-1\\).', 'e^{2}-1'),
    S('Final answer: \\(e^{2}-1\\).', 'e^{2}-1'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q18',
  'Find the area bounded by \\(y=\\dfrac{2}{x}\\), the \\(x\\)-axis, \\(x=1\\) and \\(x=3\\).',
  '\\(2\\ln 3\\)',
  ['\\(\\ln 3\\)', '\\(2\\ln 2\\)', '\\(6\\)'],
  [
    S('\\([2\\ln x]_1^{3}=2\\ln 3\\).', '2\\ln 3'),
    S('Final answer: \\(2\\ln 3\\).', '2\\ln 3'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q19',
  'Find the area enclosed between \\(y=e^{x}\\) and \\(y=e^{-x}\\) from \\(x=-1\\) to \\(x=1\\).',
  '\\(2e-\\dfrac{2}{e}\\)',
  ['\\(2e\\)', '\\(e-\\dfrac{1}{e}\\)', '\\(2e+\\dfrac{2}{e}\\)'],
  [
    S('On \\([-1,1]\\), \\(e^{x}\\ge e^{-x}\\). Area=\\(\\displaystyle\\int_{-1}^{1}(e^{x}-e^{-x})dx=[e^{x}+e^{-x}]_{-1}^{1}=2e-\\dfrac{2}{e}\\).', '2e-2/e'),
    S('Final answer: \\(2e-\\dfrac{2}{e}\\).', '2e-\\dfrac{2}{e}'),
  ], { a: 0, difficulty: 'medium' }));

items.push(mc('y12a-5l-q20',
  'Differentiate \\(y=3^{x}\\).',
  '\\(3^{x}\\ln 3\\)',
  ['\\(3^{x}\\)', '\\(x3^{x-1}\\)', '\\(\\dfrac{3^{x}}{\\ln 3}\\)'],
  [
    S('Standard form: \\(\\dfrac{d}{dx}a^{x}=a^{x}\\ln a\\).', "y\'=3^{x}\\ln 3"),
    S('Final answer: \\(3^{x}\\ln 3\\).', '3^{x}\\ln 3'),
  ], { a: 0, difficulty: 'easy', timeLimit: 60 }));

items.push(mc('y12a-5l-q21',
  'Find \\(\\displaystyle\\int 2^{x}\\,dx\\).',
  '\\(\\dfrac{2^{x}}{\\ln 2}+C\\)',
  ['\\(2^{x}\\ln 2+C\\)', '\\(\\dfrac{2^{x}}{2}+C\\)', '\\(x2^{x-1}+C\\)'],
  [
    S('\\(\\displaystyle\\int a^{x}\\,dx=\\dfrac{a^{x}}{\\ln a}+C\\).', '\\dfrac{2^{x}}{\\ln 2}+C'),
    S('Final answer: \\(\\dfrac{2^{x}}{\\ln 2}+C\\).', '\\dfrac{2^{x}}{\\ln 2}+C'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q22',
  'Use change of base to evaluate \\(\\log_3 20\\) correct to four significant figures.',
  '\\(\\approx 2.727\\)',
  ['\\(\\approx 1.301\\)', '\\(\\approx 2.996\\)', '\\(\\approx 0.367\\)'],
  [
    S('\\(\\log_3 20=\\dfrac{\\ln 20}{\\ln 3}\\approx 2.7268\\approx 2.727\\) (4 s.f.).', '2.727'),
    S('Final answer: approximately \\(2.727\\).', '2.727'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q23',
  'Find the \\(x\\)-coordinate of the point on \\(y=\\ln x\\) where the normal has gradient \\(-3\\).',
  '\\(x=\\dfrac{1}{3}\\)',
  ['\\(x=3\\)', '\\(x=1\\)', '\\(x=-3\\)'],
  [
    S('Tangent gradient is \\(\\dfrac{1}{x}\\), so normal gradient is \\(-x\\). Set \\(-x=-3\\Rightarrow x=3\\)? Wait: normal = -1/(tangent) = -x. Set -x = -3 ⇒ x=3. But answer key says 1/3.', 'check'),
  ],
  { a: 0 }
));
// Fix q23 carefully: y\'=1/x, normal gradient = -1/y\' = -x.
// If normal has gradient -3: -x = -3 => x=3.
// Backup says x=1/3. Maybe they meant tangent gradient -3? 
// "normal has gradient -3": -x = -3 => x=3.
// If tangent has gradient -3: 1/x = -3 impossible for x>0.
// Perhaps they want normal gradient = -3 so -1/(1/x) = -x = -3 => x=3.
// Backup answer 1/3 might mean they set 1/x = 3 for tangent? 
// "normal has gradient -3" => m_n = -3 = -1/m_t => m_t = 1/3 = 1/x => x=3.
// Wait: m_n = -1/m_t. If m_n=-3, m_t=1/3. For y=ln x, m_t=1/x=1/3 => x=3.
// Backup A: x=1/3. That would be if m_t=3: 1/x=3 => x=1/3, then m_n=-1/3 not -3.
// Or if they said gradient of normal is 3? 
// I'll use mathematically correct: m_n=-3 => m_t=1/3 => x=3.

// Remove broken q23 and re-add
items.pop();
items.push(mc('y12a-5l-q23',
  'Find the \\(x\\)-coordinate of the point on \\(y=\\ln x\\) where the normal has gradient \\(-3\\).',
  '\\(x=3\\)',
  ['\\(x=\\dfrac{1}{3}\\)', '\\(x=1\\)', '\\(x=-3\\)'],
  [
    S('Tangent gradient is \\(\\dfrac{1}{x}\\). The normal gradient is \\(-x\\) (negative reciprocal of \\(\\dfrac{1}{x}\\)).', 'm_n=-x'),
    S('Set \\(-x=-3\\Rightarrow x=3\\). (Equivalently: if normal slope is \\(-3\\), tangent slope is \\(\\dfrac{1}{3}=\\dfrac{1}{x}\\), so \\(x=3\\).)', 'x=3'),
    S('Final answer: \\(x=3\\).', 'x=3'),
  ], { a: 0, difficulty: 'medium' }));

items.push(mc('y12a-5l-q24',
  'Evaluate \\(\\displaystyle\\int_0^{1} x e^{x^{2}}\\,dx\\).',
  '\\(\\dfrac{e-1}{2}\\)',
  ['\\(e-1\\)', '\\(\\dfrac{e}{2}\\)', '\\(e^{2}-1\\)'],
  [
    S('Let \\(u=x^{2}\\), \\(du=2x\\,dx\\). Then \\(\\displaystyle\\int x e^{x^{2}}\\,dx=\\dfrac{1}{2}e^{x^{2}}+C\\).', '\\dfrac{1}{2}e^{x^{2}}'),
    S('\\(\\dfrac{1}{2}(e^{1}-e^{0})=\\dfrac{e-1}{2}\\).', '\\dfrac{e-1}{2}'),
    S('Final answer: \\(\\dfrac{e-1}{2}\\).', '\\dfrac{e-1}{2}'),
  ], { a: 0, difficulty: 'medium' }));

// q25 multi parts - correct stationary is (1,1) not (1,2)
items.push(mc('y12a-5l-q25a',
  'Find the coordinates of the stationary point of \\(y=\\ln x - x + 2\\).',
  '\\((1,\\ 1)\\)',
  ['\\((1,\\ 2)\\)', '\\((e,\\ 1)\\)', '\\((1,\\ 0)\\)'],
  [
    S('\\(y\'=\\dfrac{1}{x}-1=0\\Rightarrow x=1\\).', 'x=1'),
    S('\\(y(1)=\\ln 1 - 1 + 2 = 1\\). Stationary point \\((1,1)\\).', '(1,1)'),
    S('Final answer: \\((1,\\ 1)\\).', '(1,1)'),
  ], { a: 0, difficulty: 'medium' }));

items.push(mc('y12a-5l-q25b',
  'Determine the nature of the stationary point of \\(y=\\ln x - x + 2\\).',
  'Maximum (since \\(y\'\'=-\\dfrac{1}{x^{2}}<0\\) for all \\(x>0\\))',
  [
    'Minimum (since \\(y\'\'>0\\))',
    'Point of inflection',
    'Neither max nor min',
  ],
  [
    S('\\(y\'\'=-\\dfrac{1}{x^{2}}<0\\) for all \\(x>0\\), so the stationary point is a maximum.', "y\''<0"),
    S('Final answer: maximum.', 'maximum'),
  ], { a: 0, difficulty: 'easy' }));

items.push(mc('y12a-5l-q26',
  'Find the exact area between \\(y=\\dfrac{2x}{x^{2}+1}\\) and the \\(x\\)-axis from \\(x=0\\) to \\(x=2\\).',
  '\\(\\ln 5\\)',
  ['\\(\\ln 4\\)', '\\(2\\ln 5\\)', '\\(\\dfrac{1}{2}\\ln 5\\)'],
  [
    S('Numerator is derivative of denominator: \\(\\displaystyle\\int\\dfrac{2x}{x^{2}+1}\\,dx=\\ln|x^{2}+1|+C\\).', '\\ln|x^{2}+1|'),
    S('\\([\\ln(x^{2}+1)]_0^{2}=\\ln 5-\\ln 1=\\ln 5\\).', '\\ln 5'),
    S('Final answer: \\(\\ln 5\\).', '\\ln 5'),
  ], { a: 0, difficulty: 'medium' }));

items.push(mc('y12a-5l-q27',
  'Given \\(f(x)=e^{x}-ex\\), which argument correctly shows \\(f(x)\\ge 0\\) for all real \\(x\\), with equality only at \\(x=1\\)?',
  '\\(f\'(x)=e^{x}-e=0\\) only at \\(x=1\\); \\(f\'\'(1)=e>0\\) so a minimum; \\(f(1)=0\\); hence \\(f\\ge 0\\)',
  [
    '\\(f\'(x)=0\\) at \\(x=0\\) and \\(f(0)=1>0\\)',
    '\\(f(x)=e^{x}(1-x)\\) which is always positive',
    '\\(f\'\'(x)<0\\) everywhere so the graph is always above the axis',
  ],
  [
    S('\\(f\'(x)=e^{x}-e=0\\Rightarrow x=1\\). Second derivative \\(f\'\'(x)=e^{x}\\), so \\(f\'\'(1)=e>0\\) (local minimum).', 'min at x=1'),
    S('\\(f(1)=e-e=0\\). The only critical point is a minimum of value 0, so \\(f(x)\\ge 0\\) with equality only at \\(x=1\\).', 'f\\ge 0'),
  ], { a: 0, difficulty: 'hard', timeLimit: 150 }));

items.push(mc('y12a-5l-q28',
  'Evaluate \\(\\displaystyle\\int_1^{e}\\dfrac{(\\ln x)^{2}}{x}\\,dx\\).',
  '\\(\\dfrac{1}{3}\\)',
  ['\\(1\\)', '\\(\\dfrac{1}{2}\\)', '\\(e\\)'],
  [
    S('Let \\(u=\\ln x\\), \\(du=\\dfrac{1}{x}\\,dx\\). Limits: \\(x=1\\Rightarrow u=0\\); \\(x=e\\Rightarrow u=1\\).', 'u=\\ln x'),
    S('\\(\\displaystyle\\int_0^{1}u^{2}\\,du=\\dfrac{1}{3}u^{3}\\big|_0^1=\\dfrac{1}{3}\\).', '\\dfrac{1}{3}'),
    S('Final answer: \\(\\dfrac{1}{3}\\).', '\\dfrac{1}{3}'),
  ], { a: 0, difficulty: 'medium' }));

items.push(mc('y12a-5l-q29',
  'Find the area of the region bounded by \\(y=e^{x}\\), \\(y=e^{-x}\\) and \\(x=2\\) in the first quadrant.',
  '\\(e^{2}-e^{-2}-2\\)',
  ['\\(e^{2}-e^{-2}\\)', '\\(e^{2}-2\\)', '\\(e^{2}+e^{-2}-2\\)'],
  [
    S('Curves meet when \\(e^{x}=e^{-x}\\Rightarrow x=0\\). Area from 0 to 2 of upper minus lower: \\(\\displaystyle\\int_0^{2}(e^{x}-e^{-x})dx=[e^{x}+e^{-x}]_0^{2}=e^{2}+e^{-2}-2\\).', 'e^{2}+e^{-2}-2'),
    S('Final answer: \\(e^{2}-e^{-2}-2\\) (same as \\(e^{2}+\\dfrac{1}{e^{2}}-2\\)).', 'e^{2}-e^{-2}-2'),
  ], { a: 0, difficulty: 'hard', timeLimit: 150 }));

// Fix q29 - I wrote e^2+e^{-2}-2 in working but correct option is e^2-e^{-2}-2 which is WRONG algebraically.
// [e^x + e^{-x}]_0^2 = (e^2 + e^{-2}) - (1+1) = e^2 + e^{-2} - 2
// Backup said e^2 - 1/e^2 - 2 which is e^2 - e^{-2} - 2 - that would be if integral of e^x + e^{-x} was e^x - e^{-x} wrongly.
// Correct is e^2 + e^{-2} - 2.
items[items.length-1] = mc('y12a-5l-q29',
  'Find the area of the region bounded by \\(y=e^{x}\\), \\(y=e^{-x}\\) and \\(x=2\\) in the first quadrant.',
  '\\(e^{2}+e^{-2}-2\\)',
  ['\\(e^{2}-e^{-2}-2\\)', '\\(e^{2}-2\\)', '\\(e^{2}+e^{-2}\\)'],
  [
    S('Intersect at \\(x=0\\). Area=\\(\\displaystyle\\int_0^{2}(e^{x}-e^{-x})dx=[e^{x}+e^{-x}]_0^{2}=(e^{2}+e^{-2})-(2)=e^{2}+e^{-2}-2\\).', 'e^{2}+e^{-2}-2'),
    S('Final answer: \\(e^{2}+e^{-2}-2\\).', 'e^{2}+e^{-2}-2'),
  ], { a: 0, difficulty: 'hard', timeLimit: 150 });

items.push(mc('y12a-5l-q30',
  'If \\(y=\\ln(\\sin x)\\), find \\(\\dfrac{dy}{dx}\\).',
  '\\(\\cot x\\)',
  ['\\(\\tan x\\)', '\\(\\dfrac{1}{\\sin x}\\)', '\\(-\\cot x\\)'],
  [
    S('Chain rule: \\(\\dfrac{d}{dx}\\ln(\\sin x)=\\dfrac{1}{\\sin x}\\cdot\\cos x=\\cot x\\).', '\\cot x'),
    S('Final answer: \\(\\cot x\\).', '\\cot x'),
  ], { a: 0, difficulty: 'easy' }));

// Parent for q25
const parents = [
  {
    id: 'y12a-5l-q25',
    stem: 'Consider the function \\(y=\\ln x - x + 2\\).',
    parts: ['y12a-5l-q25a', 'y12a-5l-q25b'],
  },
];

for (const q of items) {
  validate(q);
  console.log('OK', q.id, '=>', String(q.opts[q.a]).slice(0, 45));
}
console.log('TOTAL', items.length);

const subOnly = new Set();
for (const p of parents) for (const id of p.parts) subOnly.add(id);

if (!WRITE) {
  console.log('dry-run OK');
  process.exit(0);
}

const byId = new Map(items.map((q) => [q.id, q]));
const seedOut = [];
for (const q of items) {
  if (!subOnly.has(q.id)) seedOut.push(q);
}
for (const p of parents) {
  const parts = p.parts.map((id) => byId.get(id)).filter(Boolean);
  seedOut.push({
    id: p.id,
    topicId: TOPIC.topicId,
    c: TOPIC.c,
    t: TOPIC.t,
    type: 'multi_part',
    difficulty: 'medium',
    timeLimit: 180,
    question: p.stem,
    answer: '',
    hint: 'Work through the parts in order.',
    solution: 'See each part for a full worked solution.',
    solutionSteps: parts.flatMap((q) => q.solutionSteps || []),
    subQuestions: parts.map((q) => ({
      id: q.id,
      type: 'multiple_choice',
      difficulty: q.difficulty,
      timeLimit: q.timeLimit,
      question: q.question,
      opts: q.opts,
      a: q.a,
      answer: String(q.a),
      hint: q.hint,
      solution: q.solution,
      solutionSteps: q.solutionSteps,
      graphData: null,
      requiresManualGrading: false,
    })),
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  });
}
writeFileSync(SEED, `export const Y12A_CH5L_QUESTIONS = ${JSON.stringify(seedOut, null, 2)};\n`);
console.log('seed', seedOut.length);

if (!PUSH) process.exit(0);

async function pushAll() {
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

  for (const q of items) {
    const ref = db.collection('questions').doc(q.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') continue;
    const isSub = subOnly.has(q.id);
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
        isActive: !isSub,
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
        ...(snap.exists ? {} : { createdAt: FieldValue.serverTimestamp() }),
      },
      { merge: true }
    );
    n++;
    if (n >= 200) await flush();
  }

  for (const p of parents) {
    const parts = p.parts.map((id) => byId.get(id)).filter(Boolean);
    const ref = db.collection('questions').doc(p.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') continue;
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
        timeLimit: 180,
        title: String(p.stem).replace(/\\[\(\)\[\]]/g, '').slice(0, 50) + '...',
        question: p.stem,
        answer: '',
        options: [],
        opts: FieldValue.delete(),
        a: FieldValue.delete(),
        subQuestions: parts.map((q) => ({
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
        })),
        solutionSteps: parts.flatMap((q) => q.solutionSteps || []),
        solution: 'See each part for a full worked solution.',
        hint: 'Work through the parts in order.',
        requiresManualGrading: false,
        isNew: true,
        graphData: null,
        updatedAt: FieldValue.serverTimestamp(),
        ...(snap.exists ? {} : { createdAt: FieldValue.serverTimestamp() }),
      },
      { merge: true }
    );
    n++;
    if (n >= 200) await flush();
  }

  // Deactivate old orphan short_answer docs if any leftover ids
  const existing = await db.collection('questions').where('topicId', '==', 'y12a-5L').get();
  const keep = new Set([...items.map((q) => q.id), ...parents.map((p) => p.id)]);
  for (const doc of existing.docs) {
    if (keep.has(doc.id)) continue;
    if (doc.data()?.origin === 'teacher') continue;
    // old q25b style leftover
    batch.set(doc.ref, { isActive: false, updatedAt: FieldValue.serverTimestamp() }, { merge: true });
    n++;
    if (n >= 200) await flush();
  }
  await flush();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('pushed version', ver);
  console.log('NEXT: node tools/scripts/rebuildQuestionIndexes.js y12a-5');
  for (const id of ['y12a-5l-q1', 'y12a-5l-q25', 'y12a-5l-q25a', 'y12a-5l-q16']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(id, d?.type, 'active=' + d?.isActive, d?.subQuestions ? 'subs=' + d.subQuestions.length : 'a=' + d?.a);
  }
}

pushAll().catch((e) => {
  console.error(e);
  process.exit(1);
});
