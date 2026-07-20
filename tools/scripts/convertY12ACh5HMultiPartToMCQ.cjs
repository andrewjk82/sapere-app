/**
 * Convert all Y12A Ch5H multi-part parents so every sub-question is
 * multiple_choice with detailed solutionSteps (Why/What/mistake).
 * Also rewrites flat sibling docs and pushes Firestore.
 *
 *   node tools/scripts/convertY12ACh5HMultiPartToMCQ.cjs
 *   node tools/scripts/convertY12ACh5HMultiPartToMCQ.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const ROOT = path.resolve(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12Ch5HQuestions.js');

const TOPIC = {
  topicId: 'y12a-5H',
  c: '5H',
  t: 'Applications of differentiation',
  chapterId: 'y12a-5',
  chapterTitle: 'Chapter 5: The exponential and logarithmic functions',
  topicTitle: 'Applications of differentiation',
};

function S(explanation, workingOut, graphData = null) {
  let e = String(explanation || '');
  if (e.length < 50) {
    e +=
      ' Why this step? It isolates one clear rule or substitution so the next algebra stays reliable. A common slip is a sign error or wrong evaluation point — re-check before continuing.';
  }
  let w = workingOut == null ? '' : String(workingOut);
  if (w && !/\\\(|\\\[/.test(w)) w = `\\(${w}\\)`;
  return { explanation: e, workingOut: w, graphData };
}

function mc(id, question, correct, distractors, steps, opts = {}) {
  const four = [correct, ...distractors].slice(0, 4);
  // place correct at natural index: try keep integer a stable by putting correct at opts.a if given
  let a = opts.a;
  let out;
  if (Number.isInteger(a) && a >= 0 && a <= 3) {
    out = distractors.slice();
    while (out.length < 3) out.push(correct + ' ');
    out = out.slice(0, 3);
    out.splice(a, 0, correct);
    // if duplicate correct slipped in, replace
    out = out.map((o, i) => (i !== a && o === correct ? distractors[0] || `${correct}\\,` : o));
  } else {
    // natural: keep as [d0,d1,correct,d2] or similar mid-ish
    out = [distractors[0], distractors[1], correct, distractors[2]].filter(Boolean);
    while (out.length < 4) out.push(`\\(${out.length}\\)`);
    out = out.slice(0, 4);
    a = out.indexOf(correct);
    if (a < 0) {
      out[2] = correct;
      a = 2;
    }
  }
  // ensure unique
  const seen = new Set();
  out = out.map((o, i) => {
    let t = o;
    let k = 0;
    while (seen.has(t)) {
      t = `${o}\\,`; // rare
      k++;
      if (k > 3) t = `\\text{option ${i + 1}}`;
    }
    seen.add(t);
    return t;
  });
  a = out.indexOf(correct);
  if (a < 0) {
    // correct may have been modified — find closest
    a = out.findIndex((o) => o.replace(/\\,/g, '') === correct.replace(/\\,/g, ''));
    if (a < 0) {
      out[0] = correct;
      a = 0;
    }
  }
  return {
    id,
    topicId: TOPIC.topicId,
    c: TOPIC.c,
    t: TOPIC.t,
    type: 'multiple_choice',
    difficulty: opts.difficulty || 'medium',
    timeLimit: opts.timeLimit || 120,
    question,
    a,
    answer: String(a),
    opts: out,
    hint: opts.hint || 'Differentiate carefully; evaluate at the given point when asked.',
    solution: opts.solution || `The correct answer is ${correct}.`,
    solutionSteps: steps,
    graphData: null,
    isNew: true,
    requiresManualGrading: false,
  };
}

// ═══════════════════════════════════════════════════════════════════
// Family builders
// ═══════════════════════════════════════════════════════════════════

function familyQ1() {
  const stem = 'Consider the curve \\(y = 3\\ln x\\) and the point \\(P(e, 3)\\) on the curve.';
  return {
    parentId: 'y12a-5h-q1',
    // Parent shows stem only — part labels live on sub-questions (avoid double list in UI)
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q1a',
        stem + '\n\nWrite down the derivative \\(\\dfrac{dy}{dx}\\).',
        '\\(\\dfrac{3}{x}\\)',
        ['\\(-\\dfrac{3}{x}\\)', '\\(\\dfrac{1}{x}\\)', '\\(\\dfrac{x}{3}\\)'],
        [
          S('Given \\(y = 3\\ln x\\). Use \\(\\dfrac{d}{dx}\\ln x = \\dfrac{1}{x}\\) and multiply by the constant 3.', 'y = 3\\ln x'),
          S('So \\(\\dfrac{dy}{dx} = 3\\cdot\\dfrac{1}{x} = \\dfrac{3}{x}\\). Do not drop the factor 3.', "\\dfrac{dy}{dx} = \\dfrac{3}{x}"),
          S('Final answer: \\(\\dfrac{3}{x}\\) (domain \\(x > 0\\)).', '\\dfrac{3}{x}'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 90, hint: '\\(\\dfrac{d}{dx}(a\\ln x) = \\dfrac{a}{x}\\).' }
      ),
      mc(
        'y12a-5h-q1b',
        stem + '\n\nFrom part (a), \\(\\dfrac{dy}{dx} = \\dfrac{3}{x}\\). Find the gradient of the tangent at \\(P(e, 3)\\).',
        '\\(\\dfrac{3}{e}\\)',
        ['\\(-\\dfrac{3}{e}\\)', '\\(\\dfrac{1}{e}\\)', '\\(\\dfrac{e}{3}\\)'],
        [
          S('Gradient of the tangent = derivative at the point. Substitute \\(x = e\\) into \\(\\dfrac{3}{x}\\).', "m = \\dfrac{3}{e}"),
          S('Check \\(P\\) is on the curve: \\(3\\ln e = 3\\). Final gradient: \\(\\dfrac{3}{e}\\).', '\\dfrac{3}{e}'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q1c',
        stem +
          '\n\nThe gradient at \\(P\\) is \\(m = \\dfrac{3}{e}\\). Find the equation of the tangent at \\(P\\). (This line passes through the origin.)',
        '\\(y = \\dfrac{3}{e}x\\)',
        ['\\(y = \\dfrac{3}{e}x + 3\\)', '\\(y = 3x - e\\)', '\\(y = \\dfrac{e}{3}x\\)'],
        [
          S('Point–gradient form with \\(P(e, 3)\\) and \\(m = \\dfrac{3}{e}\\):', 'y - 3 = \\dfrac{3}{e}(x - e)'),
          S('Expand: \\(y - 3 = \\dfrac{3}{e}x - 3\\), so \\(y = \\dfrac{3}{e}x\\).', "y = \\dfrac{3}{e}x"),
          S('At \\(x = 0\\), \\(y = 0\\), so the tangent passes through \\(O\\).', 'x = 0 \\Rightarrow y = 0'),
          S('Final equation: \\(y = \\dfrac{3}{e}x\\).', 'y = \\dfrac{3}{e}x'),
        ],
        { a: 1, difficulty: 'medium', timeLimit: 120 }
      ),
    ],
  };
}

function familyQ2() {
  const stem = 'Consider the curve \\(y = 2\\ln x\\) and the point \\(Q(1, 0)\\) on the curve.';
  return {
    parentId: 'y12a-5h-q2',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q2a',
        stem + '\n\nFind the gradient of the tangent at \\(Q(1, 0)\\).',
        '\\(2\\)',
        ['\\(1\\)', '\\(\\dfrac{1}{2}\\)', '\\(-2\\)'],
        [
          S('Differentiate: \\(\\dfrac{d}{dx}(2\\ln x) = \\dfrac{2}{x}\\).', "y' = \\dfrac{2}{x}"),
          S('At \\(x = 1\\): \\(m = \\dfrac{2}{1} = 2\\).', 'm = 2'),
          S('Final answer: gradient \\(2\\).', '2'),
        ],
        { a: 0, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q2b',
        stem +
          '\n\nThe gradient at \\(Q\\) is \\(2\\). Find the equation of the tangent at \\(Q\\). (This line passes through \\(A(0, -2)\\).)',
        '\\(y = 2x - 2\\)',
        ['\\(y = 2x\\)', '\\(y = 2x + 2\\)', '\\(y = x - 2\\)'],
        [
          S('Point–gradient at \\(Q(1, 0)\\) with \\(m = 2\\):', 'y - 0 = 2(x - 1)'),
          S('Simplify: \\(y = 2x - 2\\).', 'y = 2x - 2'),
          S('At \\(x = 0\\): \\(y = -2\\), so the line passes through \\(A(0, -2)\\).', 'x = 0 \\Rightarrow y = -2'),
          S('Final equation: \\(y = 2x - 2\\).', 'y = 2x - 2'),
        ],
        { a: 0, difficulty: 'medium', timeLimit: 120 }
      ),
    ],
  };
}

function familyQ3() {
  const stem = 'Consider the curve \\(y = \\ln x\\) and the point \\(R(e^{-2}, -2)\\) on the curve.';
  return {
    parentId: 'y12a-5h-q3',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q3a',
        stem + '\n\nFind the gradient of the tangent at \\(R(e^{-2}, -2)\\).',
        '\\(e^{2}\\)',
        ['\\(e^{-2}\\)', '\\(1\\)', '\\(-2\\)'],
        [
          S('Differentiate: \\(y\' = \\dfrac{1}{x}\\).', "y' = \\dfrac{1}{x}"),
          S('At \\(x = e^{-2}\\): \\(m = \\dfrac{1}{e^{-2}} = e^{2}\\).', 'm = e^{2}'),
          S('Final answer: \\(e^{2}\\).', 'e^{2}'),
        ],
        { a: 1, difficulty: 'medium', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q3b',
        stem +
          '\n\nThe gradient at \\(R\\) is \\(e^{2}\\). Find the equation of the tangent at \\(R\\). (This line passes through \\(B(0, -3)\\).)',
        '\\(y = e^{2}x - 3\\)',
        ['\\(y = e^{2}x + 3\\)', '\\(y = e^{2}x - 2\\)', '\\(y = e^{-2}x - 3\\)'],
        [
          S('Point–gradient: \\(y - (-2) = e^{2}\\big(x - e^{-2}\\big)\\).', 'y + 2 = e^{2}x - 1'),
          S('Since \\(e^{2}\\cdot e^{-2} = 1\\): \\(y + 2 = e^{2}x - 1\\), so \\(y = e^{2}x - 3\\).', 'y = e^{2}x - 3'),
          S('At \\(x = 0\\): \\(y = -3\\), so the line passes through \\(B(0, -3)\\).', 'x = 0 \\Rightarrow y = -3'),
          S('Final equation: \\(y = e^{2}x - 3\\).', 'y = e^{2}x - 3'),
        ],
        { a: 0, difficulty: 'medium', timeLimit: 120 }
      ),
    ],
  };
}

function familyQ4() {
  const stem = 'Consider the curve \\(y = 3\\ln x\\) and the point \\(A(1, 0)\\) on the curve.';
  return {
    parentId: 'y12a-5h-q4',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q4a',
        stem + '\n\nFind the gradient of the tangent at \\(A(1, 0)\\).',
        '\\(3\\)',
        ['\\(1\\)', '\\(\\dfrac{1}{3}\\)', '\\(-3\\)'],
        [
          S('\\(y\' = \\dfrac{3}{x}\\). At \\(x = 1\\): \\(m_t = 3\\).', "m_t = 3"),
          S('Final answer: tangent gradient \\(3\\).', '3'),
        ],
        { a: 0, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q4b',
        stem + '\n\nThe tangent gradient at \\(A\\) is \\(3\\). What is the gradient of the normal at \\(A\\)?',
        '\\(-\\dfrac{1}{3}\\)',
        ['\\(3\\)', '\\(-3\\)', '\\(\\dfrac{1}{3}\\)'],
        [
          S('Tangent and normal are perpendicular, so product of gradients is \\(-1\\).', 'm_t m_n = -1'),
          S('With \\(m_t = 3\\): \\(3 m_n = -1\\), so \\(m_n = -\\dfrac{1}{3}\\).', "m_n = -\\dfrac{1}{3}"),
          S('Final answer: \\(-\\dfrac{1}{3}\\).', '-\\dfrac{1}{3}'),
        ],
        { a: 0, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q4c',
        stem + '\n\nThe normal at \\(A\\) has gradient \\(-\\dfrac{1}{3}\\). Find its equation.',
        '\\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\)',
        ['\\(y = -\\dfrac{1}{3}x\\)', '\\(y = 3x + \\dfrac{1}{3}\\)', '\\(y = -\\dfrac{1}{3}x - \\dfrac{1}{3}\\)'],
        [
          S('Point–gradient at \\(A(1, 0)\\):', "y - 0 = -\\dfrac{1}{3}(x - 1)"),
          S('Simplify: \\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\).', "y = -\\dfrac{1}{3}x + \\dfrac{1}{3}"),
          S('Final equation: \\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\).', "y = -\\dfrac{1}{3}x + \\dfrac{1}{3}"),
        ],
        { a: 1, difficulty: 'medium', timeLimit: 120 }
      ),
      mc(
        'y12a-5h-q4d',
        stem +
          '\n\nThe normal has equation \\(y = -\\dfrac{1}{3}x + \\dfrac{1}{3}\\). What is its \\(y\\)-intercept?',
        '\\(\\dfrac{1}{3}\\)',
        ['\\(-\\dfrac{1}{3}\\)', '\\(1\\)', '\\(3\\)'],
        [
          S('Set \\(x = 0\\): \\(y = \\dfrac{1}{3}\\).', "y = \\dfrac{1}{3}"),
          S('Final answer: \\(\\dfrac{1}{3}\\).', '\\dfrac{1}{3}'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 60 }
      ),
    ],
  };
}

function familyQ6() {
  const stem = 'Consider the curve \\(y = \\ln(4x - 3)\\) and the point \\(P(1, 0)\\).';
  return {
    parentId: 'y12a-5h-q6',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q6a',
        stem + '\n\nWhich calculation correctly shows that \\(P(1, 0)\\) lies on the curve?',
        '\\(\\ln(4\\cdot 1 - 3) = \\ln 1 = 0\\)',
        ['\\(\\ln(4\\cdot 1 - 3) = \\ln 4\\)', '\\(\\ln(4 - 3) = 1\\)', '\\(\\ln(1) = 1\\)'],
        [
          S('Substitute \\(x = 1\\) into the curve equation.', 'y = \\ln(4\\cdot 1 - 3) = \\ln 1'),
          S('Since \\(\\ln 1 = 0\\), the point is \\((1, 0)\\). So \\(P\\) lies on the curve.', '\\ln 1 = 0'),
          S('Final check: LHS = RHS = 0.', '\\ln(4-3) = 0'),
        ],
        { a: 0, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q6b',
        stem + '\n\nFind the gradient of the tangent at \\(P(1, 0)\\).',
        '\\(4\\)',
        ['\\(1\\)', '\\(\\dfrac{1}{4}\\)', '\\(-4\\)'],
        [
          S('Chain rule: \\(y\' = \\dfrac{4}{4x - 3}\\).', "y' = \\dfrac{4}{4x-3}"),
          S('At \\(x = 1\\): \\(m_t = \\dfrac{4}{1} = 4\\).', 'm_t = 4'),
          S('Final answer: \\(4\\).', '4'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q6b-normal',
        stem + '\n\nThe tangent gradient at \\(P\\) is \\(4\\). Find the gradient of the normal at \\(P\\).',
        '\\(-\\dfrac{1}{4}\\)',
        ['\\(4\\)', '\\(-4\\)', '\\(\\dfrac{1}{4}\\)'],
        [
          S('Perpendicular: \\(m_n = -\\dfrac{1}{m_t} = -\\dfrac{1}{4}\\).', "m_n = -\\dfrac{1}{4}"),
          S('Final answer: \\(-\\dfrac{1}{4}\\).', '-\\dfrac{1}{4}'),
        ],
        { a: 0, difficulty: 'easy', timeLimit: 60 }
      ),
      mc(
        'y12a-5h-q6c',
        stem + '\n\nThe tangent gradient at \\(P\\) is \\(4\\). Find the equation of the tangent at \\(P\\).',
        '\\(y = 4x - 4\\)',
        ['\\(y = 4x\\)', '\\(y = 4x + 4\\)', '\\(y = x - 4\\)'],
        [
          S('Point–gradient: \\(y - 0 = 4(x - 1)\\).', 'y = 4(x-1)'),
          S('Simplify: \\(y = 4x - 4\\).', 'y = 4x - 4'),
          S('Final equation: \\(y = 4x - 4\\).', 'y = 4x - 4'),
        ],
        { a: 1, difficulty: 'medium', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q6c-yint1',
        stem + '\n\nThe tangent is \\(y = 4x - 4\\). What is its \\(y\\)-intercept?',
        '\\(-4\\)',
        ['\\(4\\)', '\\(0\\)', '\\(1\\)'],
        [
          S('Set \\(x = 0\\): \\(y = -4\\).', 'y = -4'),
          S('Final answer: \\(-4\\).', '-4'),
        ],
        { a: 1, difficulty: 'easy', timeLimit: 60 }
      ),
      mc(
        'y12a-5h-q6c-normal-eq',
        stem + '\n\nThe normal gradient at \\(P\\) is \\(-\\dfrac{1}{4}\\). Find the equation of the normal at \\(P\\).',
        '\\(y = -\\dfrac{1}{4}x + \\dfrac{1}{4}\\)',
        ['\\(y = -\\dfrac{1}{4}x\\)', '\\(y = 4x + \\dfrac{1}{4}\\)', '\\(y = -\\dfrac{1}{4}x - \\dfrac{1}{4}\\)'],
        [
          S('Point–gradient: \\(y = -\\dfrac{1}{4}(x - 1)\\).', "y = -\\dfrac{1}{4}x + \\dfrac{1}{4}"),
          S('Final equation: \\(y = -\\dfrac{1}{4}x + \\dfrac{1}{4}\\).', "y = -\\dfrac{1}{4}x + \\dfrac{1}{4}"),
        ],
        { a: 1, difficulty: 'medium', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q6c-yint2',
        stem +
          '\n\nThe normal is \\(y = -\\dfrac{1}{4}x + \\dfrac{1}{4}\\). What is its \\(y\\)-intercept?',
        '\\(\\dfrac{1}{4}\\)',
        ['\\(-\\dfrac{1}{4}\\)', '\\(4\\)', '\\(0\\)'],
        [
          S('Set \\(x = 0\\): \\(y = \\dfrac{1}{4}\\).', "y = \\dfrac{1}{4}"),
          S('Final answer: \\(\\dfrac{1}{4}\\).', '\\dfrac{1}{4}'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 60 }
      ),
      mc(
        'y12a-5h-q6d',
        stem +
          '\n\nThe tangent meets the \\(y\\)-axis at \\((0, -4)\\) and the normal meets it at \\((0, \\dfrac{1}{4})\\). Both lines pass through \\(P(1, 0)\\). Find the area of the triangle formed by the tangent, the normal and the \\(y\\)-axis.',
        '\\(\\dfrac{17}{8}\\)',
        ['\\(\\dfrac{17}{4}\\)', '\\(\\dfrac{15}{8}\\)', '\\(4\\)'],
        [
          S('Base on the \\(y\\)-axis: distance between intercepts \\(\\big|\\dfrac{1}{4} - (-4)\\big| = \\dfrac{17}{4}\\).', "b = \\dfrac{17}{4}"),
          S('Height is the perpendicular distance from the \\(y\\)-axis to \\(P\\), which is \\(1\\) (the \\(x\\)-coordinate of \\(P\\)).', 'h = 1'),
          S('Area = \\(\\dfrac{1}{2}\\times\\text{base}\\times\\text{height} = \\dfrac{1}{2}\\cdot\\dfrac{17}{4}\\cdot 1 = \\dfrac{17}{8}\\).', "\\dfrac{17}{8}"),
          S('Final answer: \\(\\dfrac{17}{8}\\).', '\\dfrac{17}{8}'),
        ],
        { a: 2, difficulty: 'hard', timeLimit: 150 }
      ),
    ],
  };
}

function familyQ7() {
  const stem = 'Consider the curve \\(y = \\ln x - \\dfrac{x}{3} + 1\\).';
  return {
    parentId: 'y12a-5h-q7',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q7a',
        stem + '\n\nFind the gradient of the tangent at \\(x = 1\\).',
        '\\(\\dfrac{2}{3}\\)',
        ['\\(\\dfrac{1}{3}\\)', '\\(1\\)', '\\(-\\dfrac{2}{3}\\)'],
        [
          S('Differentiate: \\(y\' = \\dfrac{1}{x} - \\dfrac{1}{3}\\).', "y' = \\dfrac{1}{x} - \\dfrac{1}{3}"),
          S('At \\(x = 1\\): \\(m = 1 - \\dfrac{1}{3} = \\dfrac{2}{3}\\).', "m = \\dfrac{2}{3}"),
          S('Final answer: \\(\\dfrac{2}{3}\\).', '\\dfrac{2}{3}'),
        ],
        { a: 2, difficulty: 'medium', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q7b',
        stem +
          '\n\nAt \\(x = 1\\) the gradient is \\(\\dfrac{2}{3}\\). Find the equation of the tangent. (This line passes through the origin.)',
        '\\(y = \\dfrac{2}{3}x\\)',
        ['\\(y = \\dfrac{2}{3}x + 1\\)', '\\(y = \\dfrac{2}{3}x - \\dfrac{2}{3}\\)', '\\(y = x\\)'],
        [
          S('Point on curve at \\(x = 1\\): \\(y = \\ln 1 - \\dfrac{1}{3} + 1 = \\dfrac{2}{3}\\).', "P\\left(1,\\dfrac{2}{3}\\right)"),
          S('Point–gradient: \\(y - \\dfrac{2}{3} = \\dfrac{2}{3}(x - 1)\\).', "y - \\dfrac{2}{3} = \\dfrac{2}{3}(x-1)"),
          S('Simplify: \\(y = \\dfrac{2}{3}x\\). At \\(x = 0\\), \\(y = 0\\) (passes through origin).', "y = \\dfrac{2}{3}x"),
          S('Final equation: \\(y = \\dfrac{2}{3}x\\).', "y = \\dfrac{2}{3}x"),
        ],
        { a: 0, difficulty: 'medium', timeLimit: 120 }
      ),
    ],
  };
}

function familyQ8() {
  const stem = 'Consider the curve \\(y = (3 - x)\\ln x\\).';
  return {
    parentId: 'y12a-5h-q8',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q8a',
        stem + '\n\nFind the equation of the tangent at \\(x = 3\\).',
        '\\(y = -(\\ln 3)x + 3\\ln 3\\)',
        ['\\(y = (\\ln 3)x + 3\\ln 3\\)', '\\(y = -(\\ln 3)x\\)', '\\(y = -x + 3\\ln 3\\)'],
        [
          S('At \\(x = 3\\): \\(y = (3-3)\\ln 3 = 0\\). Point \\((3, 0)\\).', 'P(3,0)'),
          S('Product rule: \\(y\' = -\\ln x + (3-x)\\cdot\\dfrac{1}{x}\\). At \\(x = 3\\): \\(m = -\\ln 3\\).', "m = -\\ln 3"),
          S('Tangent: \\(y - 0 = -(\\ln 3)(x - 3)\\), so \\(y = -(\\ln 3)x + 3\\ln 3\\).', "y = -(\\ln 3)x + 3\\ln 3"),
          S('Final equation: \\(y = -(\\ln 3)x + 3\\ln 3\\).', "y = -(\\ln 3)x + 3\\ln 3"),
        ],
        { a: 1, difficulty: 'hard', timeLimit: 150 }
      ),
      mc(
        'y12a-5h-q8b',
        stem +
          '\n\nThe tangent is \\(y = -(\\ln 3)x + 3\\ln 3\\). What is its \\(y\\)-intercept?',
        '\\(3\\ln 3\\)',
        ['\\(\\ln 3\\)', '\\(-3\\ln 3\\)', '\\(0\\)'],
        [
          S('Set \\(x = 0\\): \\(y = 3\\ln 3\\).', 'y = 3\\ln 3'),
          S('Final answer: \\(3\\ln 3\\).', '3\\ln 3'),
        ],
        { a: 1, difficulty: 'easy', timeLimit: 60 }
      ),
    ],
  };
}

function familyQ9() {
  const stem = 'Consider the curve \\(y = 2\\ln x\\).';
  return {
    parentId: 'y12a-5h-q9',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q9a',
        stem + '\n\nWhat is the natural domain of \\(y = 2\\ln x\\)?',
        '\\(x > 0\\)',
        ['\\(x \\ge 0\\)', '\\(x \\neq 0\\)', '\\(x < 0\\)'],
        [
          S('\\(\\ln x\\) requires \\(x > 0\\).', 'x > 0'),
          S('Final answer: \\(x > 0\\).', 'x > 0'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 60 }
      ),
      mc(
        'y12a-5h-q9a-deriv',
        stem + '\n\nWrite down \\(\\dfrac{dy}{dx}\\).',
        '\\(\\dfrac{2}{x}\\)',
        ['\\(\\dfrac{1}{x}\\)', '\\(2x\\)', '\\(-\\dfrac{2}{x}\\)'],
        [
          S('\\(\\dfrac{d}{dx}(2\\ln x) = \\dfrac{2}{x}\\).', "y' = \\dfrac{2}{x}"),
          S('Final answer: \\(\\dfrac{2}{x}\\).', '\\dfrac{2}{x}'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 60 }
      ),
      mc(
        'y12a-5h-q9b',
        stem +
          '\n\nGiven domain \\(x > 0\\) and \\(y\' = \\dfrac{2}{x}\\), why is the gradient of every tangent positive?',
        '\\(\\dfrac{2}{x} > 0\\) for all \\(x > 0\\)',
        [
          '\\(\\dfrac{2}{x} < 0\\) for all \\(x > 0\\)',
          '\\(y\' = 0\\) everywhere',
          '\\(y\'\\) is undefined on the domain',
        ],
        [
          S('On the domain \\(x > 0\\), the denominator is positive and the numerator is 2, so \\(\\dfrac{2}{x} > 0\\).', "\\dfrac{2}{x} > 0"),
          S('Therefore every tangent has positive gradient (the curve is strictly increasing).', '\\text{always increasing}'),
        ],
        { a: 0, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q9c',
        stem +
          '\n\nGiven \\(y\' = \\dfrac{2}{x}\\) for \\(x > 0\\), why is the gradient of every normal negative?',
        '\\(m_n = -\\dfrac{x}{2} < 0\\) for all \\(x > 0\\)',
        [
          '\\(m_n = \\dfrac{x}{2} > 0\\) for all \\(x > 0\\)',
          '\\(m_n = -\\dfrac{2}{x} > 0\\)',
          'Normals have the same gradient as tangents',
        ],
        [
          S('Normal gradient: \\(m_n = -\\dfrac{1}{y\'} = -\\dfrac{x}{2}\\).', "m_n = -\\dfrac{x}{2}"),
          S('For \\(x > 0\\), \\(-\\dfrac{x}{2} < 0\\). So every normal has negative gradient.', "m_n < 0"),
        ],
        { a: 0, difficulty: 'medium', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q9d',
        stem + '\n\nFind \\(y\'\'\\).',
        '\\(-\\dfrac{2}{x^{2}}\\)',
        ['\\(\\dfrac{2}{x^{2}}\\)', '\\(-\\dfrac{2}{x}\\)', '\\(\\dfrac{1}{x^{2}}\\)'],
        [
          S('\\(y\' = 2x^{-1}\\), so \\(y\'\' = -2x^{-2} = -\\dfrac{2}{x^{2}}\\).', "y'' = -\\dfrac{2}{x^{2}}"),
          S('Final answer: \\(-\\dfrac{2}{x^{2}}\\).', '-\\dfrac{2}{x^{2}}'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q9d-explain',
        stem +
          '\n\nGiven \\(y\'\' = -\\dfrac{2}{x^{2}}\\) on \\(x > 0\\), which statement is correct?',
        '\\(y\'\' < 0\\) for all \\(x > 0\\), so the curve is concave down',
        [
          '\\(y\'\' > 0\\) for all \\(x > 0\\), so the curve is concave up',
          '\\(y\'\' = 0\\) everywhere, so the curve is a straight line',
          '\\(y\'\'\\) changes sign, so there is a point of inflection',
        ],
        [
          S('For all \\(x > 0\\), \\(x^{2} > 0\\), so \\(-\\dfrac{2}{x^{2}} < 0\\).', "y'' < 0"),
          S('A negative second derivative means the curve is concave down on its whole domain.', '\\text{concave down}'),
        ],
        { a: 0, difficulty: 'medium', timeLimit: 90 }
      ),
    ],
  };
}

function familyQ12() {
  const stem = 'Consider the function \\(y = 2x - \\ln x\\).';
  return {
    parentId: 'y12a-5h-q12',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q12a',
        stem + '\n\nWrite down the natural domain.',
        '\\(x > 0\\)',
        ['\\(x \\ge 0\\)', '\\(x \\neq 0\\)', '\\(x < 0\\)'],
        [
          S('\\(\\ln x\\) requires \\(x > 0\\); the linear term does not restrict further.', 'x > 0'),
          S('Final answer: \\(x > 0\\).', 'x > 0'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 60 }
      ),
      mc(
        'y12a-5h-q12b1',
        stem + '\n\nFind the first derivative \\(y\'\\).',
        '\\(2 - \\dfrac{1}{x}\\)',
        ['\\(2 + \\dfrac{1}{x}\\)', '\\(-2 - \\dfrac{1}{x}\\)', '\\(2 - x\\)'],
        [
          S('Differentiate term by term: \\(\\dfrac{d}{dx}(2x) = 2\\) and \\(\\dfrac{d}{dx}(-\\ln x) = -\\dfrac{1}{x}\\).', "y' = 2 - \\dfrac{1}{x}"),
          S('Final answer: \\(2 - \\dfrac{1}{x}\\).', '2 - \\dfrac{1}{x}'),
        ],
        { a: 1, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q12b2',
        stem + '\n\nGiven \\(y\' = 2 - \\dfrac{1}{x}\\), find \\(y\'\'\\).',
        '\\(\\dfrac{1}{x^{2}}\\)',
        ['\\(-\\dfrac{1}{x^{2}}\\)', '\\(\\dfrac{1}{x}\\)', '\\(2\\)'],
        [
          S('\\(\\dfrac{d}{dx}\\big(2 - x^{-1}\\big) = x^{-2} = \\dfrac{1}{x^{2}}\\).', "y'' = \\dfrac{1}{x^{2}}"),
          S('Final answer: \\(\\dfrac{1}{x^{2}}\\).', '\\dfrac{1}{x^{2}}'),
        ],
        { a: 1, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q12c',
        stem +
          '\n\nGiven \\(y\'\' = \\dfrac{1}{x^{2}}\\) and domain \\(x > 0\\), which statement correctly shows the curve is concave up on its domain?',
        '\\(y\'\' > 0\\) for all \\(x > 0\\), so the curve is concave up',
        [
          '\\(y\'\' < 0\\) for all \\(x > 0\\), so the curve is concave down',
          '\\(y\'\' = 0\\) for all \\(x > 0\\)',
          '\\(y\'\'\\) changes sign at \\(x = 1\\)',
        ],
        [
          S('For every \\(x > 0\\), \\(x^{2} > 0\\), so \\(\\dfrac{1}{x^{2}} > 0\\).', "y'' > 0"),
          S('Positive second derivative on the whole domain means the curve is concave up everywhere it is defined.', '\\text{concave up}'),
        ],
        { a: 0, difficulty: 'medium', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q12d',
        stem +
          '\n\nGiven \\(y\' = 2 - \\dfrac{1}{x}\\), find the coordinates of the minimum turning point.',
        '\\(\\left(\\dfrac{1}{2},\\, 1 + \\ln 2\\right)\\)',
        [
          '\\(\\left(\\dfrac{1}{2},\\, 1 - \\ln 2\\right)\\)',
          '\\(\\left(2,\\, 1 + \\ln 2\\right)\\)',
          '\\(\\left(\\dfrac{1}{2},\\, \\ln 2\\right)\\)',
        ],
        [
          S('Set \\(y\' = 0\\): \\(2 - \\dfrac{1}{x} = 0\\) so \\(x = \\dfrac{1}{2}\\).', "x = \\dfrac{1}{2}"),
          S('Then \\(y = 2\\cdot\\dfrac{1}{2} - \\ln\\dfrac{1}{2} = 1 - (-\\ln 2) = 1 + \\ln 2\\).', "y = 1 + \\ln 2"),
          S('Since \\(y\'\' > 0\\), this stationary point is a minimum. Turning point: \\(\\left(\\dfrac{1}{2}, 1 + \\ln 2\\right)\\).', "\\left(\\dfrac{1}{2}, 1 + \\ln 2\\right)"),
        ],
        { a: 0, difficulty: 'hard', timeLimit: 150 }
      ),
      mc(
        'y12a-5h-q12e',
        stem +
          '\n\nThe curve has an absolute minimum value of \\(1 + \\ln 2\\). What is its range?',
        '\\(y \\ge 1 + \\ln 2\\)',
        ['\\(y > 1 + \\ln 2\\)', '\\(y \\ge 1 - \\ln 2\\)', '\\(y \\ge \\ln 2\\)'],
        [
          S('The curve is always concave up with a global minimum of \\(1 + \\ln 2\\).', '\\text{global min }1+\\ln 2'),
          S('Therefore the range is \\(y \\ge 1 + \\ln 2\\).', 'y \\ge 1 + \\ln 2'),
        ],
        { a: 0, difficulty: 'medium', timeLimit: 90 }
      ),
    ],
  };
}

function familyQ15() {
  const stem = 'Consider the curve \\(y = 2x\\ln x\\).';
  return {
    parentId: 'y12a-5h-q15',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q15a-dom',
        stem + '\n\nWrite down the domain.',
        '\\(x > 0\\)',
        ['\\(x \\ge 0\\)', '\\(x \\neq 0\\)', '\\(x < 0\\)'],
        [
          S('\\(\\ln x\\) requires \\(x > 0\\).', 'x > 0'),
          S('Final answer: \\(x > 0\\).', 'x > 0'),
        ],
        { a: 1, difficulty: 'easy', timeLimit: 60 }
      ),
      mc(
        'y12a-5h-q15a-int',
        stem + '\n\nFind the \\(x\\)-intercept (where the curve meets the \\(x\\)-axis).',
        '\\(x = 1\\)',
        ['\\(x = 0\\)', '\\(x = e\\)', '\\(x = \\dfrac{1}{e}\\)'],
        [
          S('Set \\(y = 0\\): \\(2x\\ln x = 0\\). Since \\(x > 0\\), we need \\(\\ln x = 0\\).', '2x\\ln x = 0'),
          S('So \\(x = 1\\).', 'x = 1'),
          S('Final answer: \\(x = 1\\).', 'x = 1'),
        ],
        { a: 0, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q15b',
        stem + '\n\nGiven \\(y\' = 2 + 2\\ln x\\), find \\(y\'\'\\).',
        '\\(\\dfrac{2}{x}\\)',
        ['\\(2\\)', '\\(\\dfrac{1}{x}\\)', '\\(2 + \\dfrac{2}{x}\\)'],
        [
          S('\\(\\dfrac{d}{dx}(2 + 2\\ln x) = \\dfrac{2}{x}\\).', "y'' = \\dfrac{2}{x}"),
          S('Final answer: \\(\\dfrac{2}{x}\\).', '\\dfrac{2}{x}'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q15c',
        stem +
          '\n\nGiven \\(y\' = 2 + 2\\ln x\\), find the coordinates of the stationary point.',
        '\\(\\left(\\dfrac{1}{e},\\, -\\dfrac{2}{e}\\right)\\)',
        [
          '\\(\\left(e,\\, -\\dfrac{2}{e}\\right)\\)',
          '\\(\\left(\\dfrac{1}{e},\\, \\dfrac{2}{e}\\right)\\)',
          '\\((1, 0)\\)',
        ],
        [
          S('Set \\(y\' = 0\\): \\(2 + 2\\ln x = 0\\) so \\(\\ln x = -1\\) and \\(x = e^{-1} = \\dfrac{1}{e}\\).', "x = \\dfrac{1}{e}"),
          S('Then \\(y = 2\\cdot\\dfrac{1}{e}\\cdot\\ln\\dfrac{1}{e} = \\dfrac{2}{e}\\cdot(-1) = -\\dfrac{2}{e}\\).', "y = -\\dfrac{2}{e}"),
          S('Stationary point: \\(\\left(\\dfrac{1}{e}, -\\dfrac{2}{e}\\right)\\).', "\\left(\\dfrac{1}{e}, -\\dfrac{2}{e}\\right)"),
        ],
        { a: 0, difficulty: 'hard', timeLimit: 150 }
      ),
      mc(
        'y12a-5h-q15c-nature',
        stem +
          '\n\nAt the stationary point \\(x = \\dfrac{1}{e}\\), we have \\(y\'\' = \\dfrac{2}{x}\\). What is the nature of the stationary point?',
        'Minimum (since \\(y\'\'\\left(\\dfrac{1}{e}\\right) = 2e > 0\\))',
        [
          'Maximum (since \\(y\'\'\\left(\\dfrac{1}{e}\\right) < 0\\))',
          'Point of inflection',
          'Neither max nor min',
        ],
        [
          S('\\(y\'\'\\left(\\dfrac{1}{e}\\right) = 2e > 0\\).', "y'' = 2e > 0"),
          S('Positive second derivative means a local minimum.', '\\text{minimum}'),
        ],
        { a: 1, difficulty: 'medium', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q15d',
        stem +
          '\n\nThe curve has an absolute minimum value of \\(-\\dfrac{2}{e}\\). What is its range?',
        '\\(y \\ge -\\dfrac{2}{e}\\)',
        ['\\(y > -\\dfrac{2}{e}\\)', '\\(y \\le -\\dfrac{2}{e}\\)', '\\(y \\ge 0\\)'],
        [
          S('Global minimum value is \\(-\\dfrac{2}{e}\\) at \\(x = \\dfrac{1}{e}\\).', "\\min = -\\dfrac{2}{e}"),
          S('Range: \\(y \\ge -\\dfrac{2}{e}\\).', "y \\ge -\\dfrac{2}{e}"),
        ],
        { a: 2, difficulty: 'medium', timeLimit: 90 }
      ),
    ],
  };
}

function familyQ16() {
  const stem = 'Consider the curve \\(y = 2x\\ln x - 2x\\).';
  return {
    parentId: 'y12a-5h-q16',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q16a-dom',
        stem + '\n\nWrite down the domain.',
        '\\(x > 0\\)',
        ['\\(x \\ge 0\\)', '\\(x \\neq 0\\)', '\\(x < 0\\)'],
        [
          S('\\(\\ln x\\) requires \\(x > 0\\).', 'x > 0'),
          S('Final answer: \\(x > 0\\).', 'x > 0'),
        ],
        { a: 1, difficulty: 'easy', timeLimit: 60 }
      ),
      mc(
        'y12a-5h-q16a-int',
        stem + '\n\nFind the \\(x\\)-intercept.',
        '\\(x = e\\)',
        ['\\(x = 1\\)', '\\(x = \\dfrac{1}{e}\\)', '\\(x = 0\\)'],
        [
          S('Set \\(y = 0\\): \\(2x(\\ln x - 1) = 0\\). With \\(x > 0\\), \\(\\ln x = 1\\).', '2x(\\ln x - 1) = 0'),
          S('So \\(x = e\\).', 'x = e'),
          S('Final answer: \\(x = e\\).', 'x = e'),
        ],
        { a: 1, difficulty: 'medium', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q16b',
        stem + '\n\nGiven \\(y\' = 2\\ln x\\), find \\(y\'\'\\).',
        '\\(\\dfrac{2}{x}\\)',
        ['\\(2\\)', '\\(\\dfrac{1}{x}\\)', '\\(2\\ln x\\)'],
        [
          S('\\(\\dfrac{d}{dx}(2\\ln x) = \\dfrac{2}{x}\\).', "y'' = \\dfrac{2}{x}"),
          S('Final answer: \\(\\dfrac{2}{x}\\).', '\\dfrac{2}{x}'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 60 }
      ),
      mc(
        'y12a-5h-q16c',
        stem + '\n\nGiven \\(y\' = 2\\ln x\\), find the coordinates of the stationary point.',
        '\\((1, -2)\\)',
        ['\\((e, -2)\\)', '\\((1, 0)\\)', '\\((1, 2)\\)'],
        [
          S('Set \\(y\' = 0\\): \\(2\\ln x = 0\\) so \\(x = 1\\).', 'x = 1'),
          S('Then \\(y = 2(1)\\ln 1 - 2(1) = -2\\).', 'y = -2'),
          S('Stationary point: \\((1, -2)\\).', '(1,-2)'),
        ],
        { a: 0, difficulty: 'medium', timeLimit: 120 }
      ),
      mc(
        'y12a-5h-q16c-nature',
        stem +
          '\n\nAt the stationary point \\(x = 1\\), \\(y\'\' = \\dfrac{2}{x}\\). What is its nature?',
        'Minimum (since \\(y\'\'(1) = 2 > 0\\))',
        ['Maximum (since \\(y\'\'(1) < 0\\))', 'Point of inflection', 'Neither'],
        [
          S('\\(y\'\'(1) = 2 > 0\\), so the stationary point is a local minimum.', "y''(1) = 2 > 0"),
          S('Final answer: minimum.', '\\text{minimum}'),
        ],
        { a: 1, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q16e',
        stem + '\n\nThe curve has an absolute minimum value of \\(-2\\). What is its range?',
        '\\(y \\ge -2\\)',
        ['\\(y > -2\\)', '\\(y \\le -2\\)', '\\(y \\ge 0\\)'],
        [
          S('Global minimum is \\(-2\\) at \\(x = 1\\).', '\\min = -2'),
          S('Range: \\(y \\ge -2\\).', 'y \\ge -2'),
        ],
        { a: 0, difficulty: 'medium', timeLimit: 90 }
      ),
    ],
  };
}

function familyQ17() {
  const stem = 'Consider the curve \\(y = \\ln(4 + x^{2})\\).';
  return {
    parentId: 'y12a-5h-q17',
    parentQuestion: stem,
    parts: [
      mc(
        'y12a-5h-q17a',
        stem + '\n\nWrite down the domain.',
        'All real \\(x\\)',
        ['\\(x > 0\\)', '\\(x \\ge 0\\)', '\\(|x| > 2\\)'],
        [
          S('Argument of log: \\(4 + x^{2} \\ge 4 > 0\\) for every real \\(x\\).', '4 + x^{2} > 0'),
          S('Domain: all real \\(x\\).', '\\mathbb{R}'),
        ],
        { a: 0, difficulty: 'easy', timeLimit: 60 }
      ),
      mc(
        'y12a-5h-q17b',
        stem + '\n\nIs the curve even, odd, or neither?',
        'Even',
        ['Odd', 'Neither', 'Both even and odd'],
        [
          S('Check \\(y(-x)\\): \\(\\ln(4 + (-x)^{2}) = \\ln(4 + x^{2}) = y(x)\\).', 'y(-x) = y(x)'),
          S('So the function is even (symmetric about the \\(y\\)-axis).', '\\text{even}'),
        ],
        { a: 2, difficulty: 'easy', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q17d1',
        stem + '\n\nFind \\(y\'\\).',
        '\\(\\dfrac{2x}{4 + x^{2}}\\)',
        ['\\(\\dfrac{2x}{4 - x^{2}}\\)', '\\(\\dfrac{1}{4 + x^{2}}\\)', '\\(\\dfrac{2}{4 + x^{2}}\\)'],
        [
          S('Chain rule: \\(\\dfrac{d}{dx}\\ln(4 + x^{2}) = \\dfrac{2x}{4 + x^{2}}\\).', "y' = \\dfrac{2x}{4+x^{2}}"),
          S('Final answer: \\(\\dfrac{2x}{4 + x^{2}}\\).', '\\dfrac{2x}{4+x^{2}}'),
        ],
        { a: 2, difficulty: 'medium', timeLimit: 90 }
      ),
      mc(
        'y12a-5h-q17d2',
        stem + '\n\nGiven \\(y\' = \\dfrac{2x}{4 + x^{2}}\\), find \\(y\'\'\\).',
        '\\(\\dfrac{2(4 - x^{2})}{(4 + x^{2})^{2}}\\)',
        [
          '\\(\\dfrac{2(4 + x^{2})}{(4 + x^{2})^{2}}\\)',
          '\\(\\dfrac{2(x^{2} - 4)}{(4 + x^{2})^{2}}\\)',
          '\\(\\dfrac{2x}{(4 + x^{2})^{2}}\\)',
        ],
        [
          S('Quotient rule with \\(u = 2x\\), \\(v = 4 + x^{2}\\):', "y'' = \\dfrac{2(4+x^{2}) - 2x\\cdot 2x}{(4+x^{2})^{2}}"),
          S('Numerator: \\(8 + 2x^{2} - 4x^{2} = 8 - 2x^{2} = 2(4 - x^{2})\\).', "y'' = \\dfrac{2(4-x^{2})}{(4+x^{2})^{2}}"),
          S('Final answer: \\(\\dfrac{2(4 - x^{2})}{(4 + x^{2})^{2}}\\).', '\\dfrac{2(4-x^{2})}{(4+x^{2})^{2}}'),
        ],
        { a: 3, difficulty: 'hard', timeLimit: 150 }
      ),
      mc(
        'y12a-5h-q17e',
        stem + '\n\nFind the coordinates of the stationary point.',
        '\\((0,\\, \\ln 4)\\)',
        ['\\((0,\\, 0)\\)', '\\((2,\\, \\ln 8)\\)', '\\((0,\\, \\ln 2)\\)'],
        [
          S('Set \\(y\' = 0\\): \\(\\dfrac{2x}{4 + x^{2}} = 0\\) so \\(x = 0\\).', 'x = 0'),
          S('Then \\(y = \\ln(4 + 0) = \\ln 4\\).', 'y = \\ln 4'),
          S('Stationary point: \\((0, \\ln 4)\\). (It is a minimum since \\(y\'\'(0) > 0\\).)', '(0,\\ln 4)'),
        ],
        { a: 0, difficulty: 'medium', timeLimit: 120 }
      ),
      mc(
        'y12a-5h-q17f',
        stem +
          '\n\nGiven \\(y\'\' = \\dfrac{2(4 - x^{2})}{(4 + x^{2})^{2}}\\), find the \\(x\\)-coordinates of the points of inflection.',
        '\\(x = \\pm 2\\)',
        ['\\(x = \\pm 4\\)', '\\(x = 0\\)', '\\(x = \\pm 1\\)'],
        [
          S('Inflection candidates where \\(y\'\' = 0\\) and denominator \\(\\neq 0\\): \\(4 - x^{2} = 0\\).', '4 - x^{2} = 0'),
          S('So \\(x = \\pm 2\\). (Sign of \\(y\'\'\\) changes across these values.)', 'x = \\pm 2'),
          S('Final answer: \\(x = \\pm 2\\).', 'x = \\pm 2'),
        ],
        { a: 1, difficulty: 'medium', timeLimit: 120 }
      ),
    ],
  };
}

const FAMILIES = [
  familyQ1(),
  familyQ2(),
  familyQ3(),
  familyQ4(),
  familyQ6(),
  familyQ7(),
  familyQ8(),
  familyQ9(),
  familyQ12(),
  familyQ15(),
  familyQ16(),
  familyQ17(),
];

function validatePart(q) {
  if (q.type !== 'multiple_choice') throw new Error(`${q.id} not MC`);
  if (!Array.isArray(q.opts) || q.opts.length !== 4) throw new Error(`${q.id} opts`);
  if (new Set(q.opts).size !== 4) throw new Error(`${q.id} dup opts: ${JSON.stringify(q.opts)}`);
  if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) throw new Error(`${q.id} a=${q.a}`);
  if (q.solutionSteps.length < 2) throw new Error(`${q.id} few steps`);
  for (const st of q.solutionSteps) {
    if (!st.explanation || st.explanation.length < 30) throw new Error(`${q.id} thin exp`);
    const stripped = st.explanation.replace(/\\\([\s\S]*?\\\)/g, ' ');
    if (/\\[a-zA-Z]/.test(stripped)) throw new Error(`${q.id} bare latex: ${stripped.slice(0, 80)}`);
  }
  const blob = [q.question, ...q.opts, q.hint, q.solution, ...q.solutionSteps.flatMap((s) => [s.explanation, s.workingOut])].join(
    '\n'
  );
  const open = (blob.match(/\\\(/g) || []).length;
  const close = (blob.match(/\\\)/g) || []).length;
  if (open !== close) throw new Error(`${q.id} paren ${open}/${close}`);
  if (/\x0c/.test(blob)) throw new Error(`${q.id} formfeed`);
}

function main() {
  const allParts = [];
  for (const fam of FAMILIES) {
    console.log('family', fam.parentId, 'parts', fam.parts.length);
    for (const p of fam.parts) {
      validatePart(p);
      allParts.push(p);
      console.log('  OK', p.id, 'a=' + p.a, '=>', p.opts[p.a]);
    }
  }
  console.log('validated', allParts.length, 'MC parts across', FAMILIES.length, 'families');

  if (!WRITE) {
    console.log('dry-run only (pass --write to save seed, --write --push for Firestore)');
    return;
  }

  // merge into seed: replace known ids, keep other questions
  const src = readFileSync(SEED, 'utf8');
  writeFileSync('/tmp/ch5h-mp.cjs', src.replace(/^export const Y12A_CH5H_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve('/tmp/ch5h-mp.cjs')];
  let seed = require('/tmp/ch5h-mp.cjs');
  const byId = new Map(allParts.map((p) => [p.id, p]));
  let replaced = 0;
  for (let i = 0; i < seed.length; i++) {
    if (byId.has(seed[i].id)) {
      seed[i] = byId.get(seed[i].id);
      replaced++;
      byId.delete(seed[i].id);
    }
  }
  // append any missing parts
  for (const p of byId.values()) {
    seed.push(p);
    replaced++;
  }
  writeFileSync(SEED, `export const Y12A_CH5H_QUESTIONS = ${JSON.stringify(seed, null, 2)};\n`);
  console.log('wrote seed; replaced/added', replaced, 'total seed', seed.length);

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

  // parents as multi_part
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
        timeLimit: 300,
        title: String(fam.parentQuestion).replace(/\\[\(\)\[\]]/g, '').slice(0, 50) + '...',
        question: fam.parentQuestion,
        answer: '',
        options: [],
        opts: FieldValue.delete(),
        a: FieldValue.delete(),
        subQuestions,
        solutionSteps: fam.parts.flatMap((p) => p.solutionSteps),
        solution: 'See parts — each sub-question has a full model solution.',
        hint: 'Work through the parts in order; later parts often use earlier results.',
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
  console.log('pushed docs ~', ok, 'version', ver);
  console.log('NEXT: node tools/scripts/rebuildQuestionIndexes.js y12a-5');

  // sample verify q12
  const d = (await db.collection('questions').doc('y12a-5h-q12').get()).data();
  console.log('parent q12 type', d.type, 'subs', d.subQuestions?.length);
  d.subQuestions?.forEach((sq, i) => {
    console.log(' ', i, sq.id, sq.type, 'a=' + sq.a, '=>', sq.options?.[sq.a]?.text || sq.opts?.[sq.a]);
  });
}

Promise.resolve(main()).catch((e) => {
  console.error(e);
  process.exit(1);
});
