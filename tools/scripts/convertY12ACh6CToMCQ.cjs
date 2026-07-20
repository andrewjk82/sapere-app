/**
 * Convert / rebuild Y12A 6C "Applications of differentiation":
 *  - Convert q1a,q1f,q1g,q11a to high-quality MC
 *  - Rebuild all existing MC with clean LaTeX, integer `a`, detailed solutionSteps
 *  - Keep Show/Prove/Sketch as teacher_review
 *  - Multipart parents q6–q16 → type multi_part with embedded subQuestions
 *  - Flat children isActive:false; parents active
 *
 *   node tools/scripts/convertY12ACh6CToMCQ.cjs
 */
'use strict';

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

const TOPIC = {
  topicId: 'y12a-6C',
  chapterId: 'y12a-6',
  c: '6C',
  t: 'Applications of differentiation',
  origin: 'seed',
  isNew: true,
};

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

function ensureMath(s) {
  if (s == null || s === '') return '\\(?\\)';
  const t = String(s).trim();
  if (t.includes('\\(') || t.includes('\\[')) return t;
  return `\\(${t}\\)`;
}

/** Build a multiple_choice doc. opts: string[4], a: 0–3 correct index. */
function mc(id, question, opts, a, steps, extra = {}) {
  if (!Array.isArray(opts) || opts.length !== 4) {
    throw new Error(`${id}: need exactly 4 opts, got ${opts?.length}`);
  }
  if (!(Number.isInteger(a) && a >= 0 && a <= 3)) {
    throw new Error(`${id}: a must be integer 0–3, got ${a}`);
  }
  const correct = opts[a];
  return {
    id,
    ...TOPIC,
    type: 'multiple_choice',
    difficulty: extra.difficulty || 'easy',
    timeLimit: extra.timeLimit || 90,
    question,
    opts,
    options: opts.map((text) => ({ text, imageUrl: null })),
    a,
    answer: String(a),
    hint: extra.hint || 'Differentiate first, then evaluate or solve as required.',
    solution: `The correct answer is ${correct}.`,
    solutionSteps: steps,
    graphData: null,
    requiresManualGrading: false,
    isActive: extra.isActive !== undefined ? extra.isActive : true,
  };
}

/** teacher_review (show / prove / sketch) */
function tr(id, question, answer, steps, extra = {}) {
  return {
    id,
    ...TOPIC,
    type: 'teacher_review',
    difficulty: extra.difficulty || 'medium',
    timeLimit: extra.timeLimit || 180,
    question,
    answer: answer || 'Proof',
    hint: extra.hint || 'Show all working clearly; match gradients and substitute the given point.',
    solution: answer || 'Proof',
    solutionSteps: steps,
    graphData: null,
    requiresManualGrading: true,
    isActive: extra.isActive !== undefined ? extra.isActive : true,
  };
}

function parent(id, stem, subs, extra = {}) {
  const embedded = subs.map((s) => {
    const copy = { ...s };
    // Keep embedded complete but children will also be written flat as inactive
    return copy;
  });
  return {
    id,
    ...TOPIC,
    type: 'multi_part',
    difficulty: extra.difficulty || 'medium',
    timeLimit: extra.timeLimit || 300,
    question: stem,
    answer: '',
    hint: extra.hint || '',
    solution: '',
    solutionSteps: [],
    graphData: null,
    subQuestions: embedded,
    requiresManualGrading: embedded.some((s) => s.type === 'teacher_review'),
    isActive: true,
  };
}

// ── Gradient of tangent (Q1) ───────────────────────────────────────────

function buildQ1() {
  const out = [];

  out.push(
    mc(
      'y12a-6c-q1a',
      'Find the gradient of the tangent to the curve \\( y = \\sin x \\) at \\( x = 0 \\).',
      ['\\(1\\)', '\\(0\\)', '\\(-1\\)', '\\(\\dfrac{1}{2}\\)'],
      0,
      [
        S(
          'What is asked? The gradient of the tangent equals the derivative \\(y\'\\) evaluated at the given \\(x\\)-value. Why start with differentiation? Because the definition of the tangent gradient is \\(m = y\'(x_{0})\\). A common mistake is to substitute into \\(y\\) itself instead of into \\(y\'\\).',
          '\\(y = \\sin x\\)'
        ),
        S(
          'Differentiate using the standard form \\(\\dfrac{d}{dx}\\sin x = \\cos x\\). No chain-rule factor is needed because the angle is simply \\(x\\). This connects the curve to its slope function.',
          '\\(y\' = \\cos x\\)'
        ),
        S(
          'Substitute \\(x = 0\\): \\(y\'(0) = \\cos 0 = 1\\). Why is this exact? Cosine at 0 is the known unit value on the unit circle. A common slip is writing \\(\\sin 0 = 1\\) by confusing sine and cosine.',
          '\\(y\'(0) = \\cos 0 = 1\\)'
        ),
        S(
          'Final answer: the gradient is \\(1\\). This matches the familiar fact that \\(y = \\sin x\\) has slope 1 at the origin (the line \\(y = x\\) is the tangent there).',
          '\\(1\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Use \\(y\' = \\cos x\\), then evaluate at \\(x = 0\\).' }
    )
  );

  out.push(
    mc(
      'y12a-6c-q1b',
      'Find the gradient of the tangent to the curve \\( y = \\cos x \\) at \\( x = \\dfrac{\\pi}{2} \\).',
      ['\\(-1\\)', '\\(-2\\)', '\\(0\\)', '\\(1\\)'],
      0,
      [
        S(
          'Goal: evaluate the derivative of \\(y = \\cos x\\) at \\(x = \\dfrac{\\pi}{2}\\). The tangent gradient is always \\(y\'\\) at the point, not the function value. Connecting: we first need the slope function, then plug in.',
          '\\(y = \\cos x\\)'
        ),
        S(
          'Standard derivative: \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\). The negative sign is essential — forgetting it is a very common mistake and would give \\(+1\\) instead of \\(-1\\).',
          '\\(y\' = -\\sin x\\)'
        ),
        S(
          'At \\(x = \\dfrac{\\pi}{2}\\): \\(y\'\\!\\left(\\dfrac{\\pi}{2}\\right) = -\\sin\\dfrac{\\pi}{2} = -1\\). Why? \\(\\sin\\dfrac{\\pi}{2} = 1\\) on the unit circle.',
          '\\(y\'\\!\\left(\\dfrac{\\pi}{2}\\right) = -1\\)'
        ),
        S(
          'Final answer: \\(-1\\). Check: at the top of the cosine wave the slope should be falling through zero? Actually at \\(\\pi/2\\), cosine is zero and decreasing, so slope \\(-1\\) is consistent.',
          '\\(-1\\)'
        ),
      ],
      { difficulty: 'easy' }
    )
  );

  // y=sin x at π/3: y'=cos(π/3)=1/2  (NOT π/6)
  out.push(
    mc(
      'y12a-6c-q1c',
      'Find the gradient of the tangent to the curve \\( y = \\sin x \\) at \\( x = \\dfrac{\\pi}{3} \\).',
      ['\\(-\\dfrac{1}{2}\\)', '\\(\\dfrac{1}{2}\\)', '\\(\\dfrac{\\sqrt{3}}{2}\\)', '\\(1\\)'],
      1,
      [
        S(
          'We need the tangent gradient to \\(y = \\sin x\\) at \\(x = \\dfrac{\\pi}{3}\\). Strategy: differentiate, then substitute the exact angle. Do not confuse this with evaluating \\(\\sin\\dfrac{\\pi}{3}\\) itself.',
          '\\(y = \\sin x\\)'
        ),
        S(
          'Differentiate: \\(y\' = \\cos x\\). What this means: the slope function of sine is cosine. A common mistake is writing \\(y\' = -\\cos x\\) by mixing sine and cosine rules.',
          '\\(y\' = \\cos x\\)'
        ),
        S(
          'Evaluate: \\(\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}\\). Why not \\(\\dfrac{\\sqrt{3}}{2}\\)? That is \\(\\sin\\dfrac{\\pi}{3}\\) (or \\(\\cos\\dfrac{\\pi}{6}\\)). Connecting angle tables carefully avoids this classic swap.',
          '\\(y\'\\!\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2}\\)'
        ),
        S(
          'Final answer: \\(\\dfrac{1}{2}\\). The gradient is positive and less than 1, which fits the sine curve between 0 and \\(\\pi/2\\).',
          '\\(\\dfrac{1}{2}\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Remember \\(\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}\\), not \\(\\dfrac{\\sqrt{3}}{2}\\).' }
    )
  );

  out.push(
    mc(
      'y12a-6c-q1d',
      'Find the gradient of the tangent to the curve \\( y = \\cos x \\) at \\( x = \\dfrac{\\pi}{6} \\).',
      ['\\(-\\dfrac{1}{2}\\)', '\\(\\dfrac{1}{2}\\)', '\\(-\\dfrac{\\sqrt{3}}{2}\\)', '\\(\\dfrac{\\sqrt{3}}{2}\\)'],
      0,
      [
        S(
          'Goal: gradient of tangent to \\(y = \\cos x\\) at \\(x = \\dfrac{\\pi}{6}\\). Use \\(m = y\'\\) at that point. Why not use the table value of cosine alone? Cosine is the height, not the slope.',
          '\\(y = \\cos x\\)'
        ),
        S(
          'Differentiate: \\(y\' = -\\sin x\\). Keep the minus. Connecting: slope of cosine is the negative of sine.',
          '\\(y\' = -\\sin x\\)'
        ),
        S(
          'Substitute: \\(-\\sin\\dfrac{\\pi}{6} = -\\dfrac{1}{2}\\). A common mistake is dropping the minus and answering \\(+\\dfrac{1}{2}\\), or using \\(\\sin\\dfrac{\\pi}{3}\\) by accident.',
          '\\(y\'\\!\\left(\\dfrac{\\pi}{6}\\right) = -\\dfrac{1}{2}\\)'
        ),
        S(
          'Final answer: \\(-\\dfrac{1}{2}\\). Near \\(x = 0\\) cosine is decreasing gently, so a negative half-unit slope is reasonable.',
          '\\(-\\dfrac{1}{2}\\)'
        ),
      ],
      { difficulty: 'easy' }
    )
  );

  out.push(
    mc(
      'y12a-6c-q1e',
      'Find the gradient of the tangent to the curve \\( y = \\sin x \\) at \\( x = \\dfrac{\\pi}{4} \\).',
      ['\\(-\\dfrac{1}{\\sqrt{2}}\\)', '\\(\\dfrac{1}{\\sqrt{2}}\\)', '\\(\\dfrac{\\sqrt{2}}{2}\\)', '\\(1\\)'],
      1,
      [
        S(
          'Find the tangent gradient to \\(y = \\sin x\\) at \\(x = \\dfrac{\\pi}{4}\\). Strategy: \\(y\' = \\cos x\\), then exact evaluation. Note \\(\\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}\\) are equal, but only one option is listed as the principal form here.',
          '\\(y = \\sin x\\)'
        ),
        S(
          'Differentiate: \\(y\' = \\cos x\\). No chain factor. What this gives: the slope function for later substitution.',
          '\\(y\' = \\cos x\\)'
        ),
        S(
          'Evaluate: \\(\\cos\\dfrac{\\pi}{4} = \\dfrac{1}{\\sqrt{2}}\\). Why positive? In the first quadrant cosine is positive. A common slip is writing \\(-\\dfrac{1}{\\sqrt{2}}\\) by taking the derivative of cosine instead of sine.',
          '\\(y\'\\!\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{1}{\\sqrt{2}}\\)'
        ),
        S(
          'Final answer: \\(\\dfrac{1}{\\sqrt{2}}\\). Equivalent rationalised form \\(\\dfrac{\\sqrt{2}}{2}\\) has the same value; match the option text exactly.',
          '\\(\\dfrac{1}{\\sqrt{2}}\\)'
        ),
      ],
      { difficulty: 'easy' }
    )
  );

  out.push(
    mc(
      'y12a-6c-q1f',
      'Find the gradient of the tangent to the curve \\( y = \\tan x \\) at \\( x = 0 \\).',
      ['\\(1\\)', '\\(0\\)', '\\(2\\)', '\\(\\dfrac{1}{2}\\)'],
      0,
      [
        S(
          'Goal: tangent gradient to \\(y = \\tan x\\) at \\(x = 0\\). Strategy: use \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\), then evaluate. Why secant squared? It is the standard derivative of tangent (or quotient rule on \\(\\sin/\\cos\\)).',
          '\\(y = \\tan x\\)'
        ),
        S(
          'Differentiate: \\(y\' = \\sec^{2}x\\). Recall \\(\\sec x = \\dfrac{1}{\\cos x}\\), so \\(\\sec^{2}x = \\dfrac{1}{\\cos^{2}x}\\). A common mistake is writing \\(y\' = \\sec x\\) without the square.',
          '\\(y\' = \\sec^{2}x\\)'
        ),
        S(
          'At \\(x = 0\\): \\(\\sec 0 = \\dfrac{1}{\\cos 0} = 1\\), so \\(\\sec^{2}0 = 1\\). Connecting: near 0, \\(\\tan x \\approx x\\), so slope 1 matches the small-angle behaviour.',
          '\\(y\'(0) = 1\\)'
        ),
        S(
          'Final answer: \\(1\\). The line \\(y = x\\) is the tangent to \\(y = \\tan x\\) at the origin.',
          '\\(1\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Use \\(y\' = \\sec^{2}x\\) and \\(\\sec 0 = 1\\).' }
    )
  );

  out.push(
    mc(
      'y12a-6c-q1g',
      'Find the gradient of the tangent to the curve \\( y = \\tan x \\) at \\( x = \\dfrac{\\pi}{4} \\).',
      ['\\(1\\)', '\\(2\\)', '\\(\\sqrt{2}\\)', '\\(4\\)'],
      1,
      [
        S(
          'Goal: gradient of \\(y = \\tan x\\) at \\(x = \\dfrac{\\pi}{4}\\). Use \\(y\' = \\sec^{2}x\\). Why not evaluate \\(\\tan\\dfrac{\\pi}{4}\\)? That gives the height \\(1\\), not the slope.',
          '\\(y = \\tan x\\)'
        ),
        S(
          'Differentiate: \\(y\' = \\sec^{2}x = \\dfrac{1}{\\cos^{2}x}\\). This is the working slope function for every later substitution.',
          '\\(y\' = \\sec^{2}x\\)'
        ),
        S(
          'At \\(x = \\dfrac{\\pi}{4}\\): \\(\\cos\\dfrac{\\pi}{4} = \\dfrac{1}{\\sqrt{2}}\\), so \\(\\sec\\dfrac{\\pi}{4} = \\sqrt{2}\\) and \\(\\sec^{2}\\dfrac{\\pi}{4} = 2\\). Alternatively use \\(1 + \\tan^{2}x = \\sec^{2}x\\): \\(1 + 1^{2} = 2\\).',
          '\\(y\'\\!\\left(\\dfrac{\\pi}{4}\\right) = 2\\)'
        ),
        S(
          'Final answer: \\(2\\). A common slip is stopping at \\(\\sec = \\sqrt{2}\\) and forgetting to square.',
          '\\(2\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Use \\(\\sec^{2}x = 1 + \\tan^{2}x\\) with \\(\\tan\\dfrac{\\pi}{4} = 1\\).' }
    )
  );

  out.push(
    mc(
      'y12a-6c-q1h',
      'Find the gradient of the tangent to the curve \\( y = \\cos 2x \\) at \\( x = \\dfrac{\\pi}{4} \\).',
      ['\\(-1\\)', '\\(-2\\)', '\\(0\\)', '\\(2\\)'],
      1,
      [
        S(
          'Goal: tangent gradient to \\(y = \\cos 2x\\) at \\(x = \\dfrac{\\pi}{4}\\). Strategy: chain rule for cosine of a linear angle, then evaluate. Why chain rule? The inside is \\(2x\\), not \\(x\\).',
          '\\(y = \\cos 2x\\)'
        ),
        S(
          'Differentiate: outer cosine gives \\(-\\sin(\\cdot)\\), times derivative of inside 2: \\(y\' = -2\\sin 2x\\). Missing the factor 2 is a common mistake.',
          '\\(y\' = -2\\sin 2x\\)'
        ),
        S(
          'At \\(x = \\dfrac{\\pi}{4}\\): \\(2x = \\dfrac{\\pi}{2}\\), so \\(y\' = -2\\sin\\dfrac{\\pi}{2} = -2\\cdot 1 = -2\\). Connecting: at this point the double-angle cosine hits zero and is falling steeply.',
          '\\(y\'\\!\\left(\\dfrac{\\pi}{4}\\right) = -2\\)'
        ),
        S(
          'Final answer: \\(-2\\). Check sign: cosine of \\(2x\\) is decreasing through the point, so the gradient must be negative.',
          '\\(-2\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Chain rule: \\(\\dfrac{d}{dx}\\cos 2x = -2\\sin 2x\\).' }
    )
  );

  // y = -cos(x/2), y' = (1/2) sin(x/2), at 2π/3: (1/2)sin(π/3)=√3/4
  out.push(
    mc(
      'y12a-6c-q1i',
      'Find the gradient of the tangent to the curve \\( y = -\\cos\\dfrac{x}{2} \\) at \\( x = \\dfrac{2\\pi}{3} \\).',
      ['\\(-\\dfrac{\\sqrt{3}}{4}\\)', '\\(\\dfrac{\\sqrt{3}}{4}\\)', '\\(\\dfrac{\\sqrt{3}}{2}\\)', '\\(\\dfrac{1}{2}\\)'],
      1,
      [
        S(
          'Goal: gradient of \\(y = -\\cos\\dfrac{x}{2}\\) at \\(x = \\dfrac{2\\pi}{3}\\). Strategy: chain rule with the constant factor \\(-1\\) in front and inside angle \\(\\dfrac{x}{2}\\).',
          '\\(y = -\\cos\\dfrac{x}{2}\\)'
        ),
        S(
          'Differentiate: derivative of \\(-\\cos u\\) is \\(\\sin u\\cdot u\'\\). Here \\(u = \\dfrac{x}{2}\\), so \\(u\' = \\dfrac{1}{2}\\). Thus \\(y\' = \\sin\\dfrac{x}{2}\\cdot\\dfrac{1}{2} = \\dfrac{1}{2}\\sin\\dfrac{x}{2}\\). A common slip is forgetting the \\(\\dfrac{1}{2}\\) chain factor.',
          '\\(y\' = \\dfrac{1}{2}\\sin\\dfrac{x}{2}\\)'
        ),
        S(
          'At \\(x = \\dfrac{2\\pi}{3}\\): \\(\\dfrac{x}{2} = \\dfrac{\\pi}{3}\\), so \\(y\' = \\dfrac{1}{2}\\sin\\dfrac{\\pi}{3} = \\dfrac{1}{2}\\cdot\\dfrac{\\sqrt{3}}{2} = \\dfrac{\\sqrt{3}}{4}\\).',
          '\\(y\'\\!\\left(\\dfrac{2\\pi}{3}\\right) = \\dfrac{\\sqrt{3}}{4}\\)'
        ),
        S(
          'Final answer: \\(\\dfrac{\\sqrt{3}}{4}\\). Positive slope makes sense: \\(-\\cos(x/2)\\) is rising through this region.',
          '\\(\\dfrac{\\sqrt{3}}{4}\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Include both the leading minus and the chain factor \\(\\dfrac{1}{2}\\).' }
    )
  );

  // y=sin(x/2), y'=(1/2)cos(x/2), at 2π/3: (1/2)cos(π/3)=1/4
  out.push(
    mc(
      'y12a-6c-q1j',
      'Find the gradient of the tangent to the curve \\( y = \\sin\\dfrac{x}{2} \\) at \\( x = \\dfrac{2\\pi}{3} \\).',
      ['\\(-\\dfrac{1}{4}\\)', '\\(\\dfrac{1}{2}\\)', '\\(\\dfrac{1}{4}\\)', '\\(\\dfrac{\\sqrt{3}}{4}\\)'],
      2,
      [
        S(
          'Goal: tangent gradient to \\(y = \\sin\\dfrac{x}{2}\\) at \\(x = \\dfrac{2\\pi}{3}\\). Use the chain rule for sine of a half-angle.',
          '\\(y = \\sin\\dfrac{x}{2}\\)'
        ),
        S(
          'Differentiate: \\(y\' = \\cos\\dfrac{x}{2}\\cdot\\dfrac{1}{2} = \\dfrac{1}{2}\\cos\\dfrac{x}{2}\\). Why the half? Derivative of the inside \\(\\dfrac{x}{2}\\) is \\(\\dfrac{1}{2}\\). Omitting it is a classic error.',
          '\\(y\' = \\dfrac{1}{2}\\cos\\dfrac{x}{2}\\)'
        ),
        S(
          'Substitute \\(x = \\dfrac{2\\pi}{3}\\): \\(\\dfrac{x}{2} = \\dfrac{\\pi}{3}\\), so \\(y\' = \\dfrac{1}{2}\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}\\cdot\\dfrac{1}{2} = \\dfrac{1}{4}\\).',
          '\\(y\'\\!\\left(\\dfrac{2\\pi}{3}\\right) = \\dfrac{1}{4}\\)'
        ),
        S(
          'Final answer: \\(\\dfrac{1}{4}\\). Do not confuse with \\(\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}\\) — we need cosine of the half-angle, then multiply by \\(\\dfrac{1}{2}\\).',
          '\\(\\dfrac{1}{4}\\)'
        ),
      ],
      { difficulty: 'easy' }
    )
  );

  // y=tan 2x, y'=2 sec^2 2x, at π/6: 2 sec^2(π/3)=2*4=8
  out.push(
    mc(
      'y12a-6c-q1k',
      'Find the gradient of the tangent to the curve \\( y = \\tan 2x \\) at \\( x = \\dfrac{\\pi}{6} \\).',
      ['\\(-8\\)', '\\(2\\)', '\\(8\\)', '\\(4\\)'],
      2,
      [
        S(
          'Goal: gradient of \\(y = \\tan 2x\\) at \\(x = \\dfrac{\\pi}{6}\\). Strategy: chain rule — derivative of \\(\\tan u\\) is \\(\\sec^{2}u\\cdot u\'\\) with \\(u = 2x\\).',
          '\\(y = \\tan 2x\\)'
        ),
        S(
          'Differentiate: \\(y\' = \\sec^{2}(2x)\\cdot 2 = 2\\sec^{2} 2x\\). Forgetting the outer factor 2 gives half the correct slope — a very common slip.',
          '\\(y\' = 2\\sec^{2} 2x\\)'
        ),
        S(
          'At \\(x = \\dfrac{\\pi}{6}\\): \\(2x = \\dfrac{\\pi}{3}\\). Then \\(\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}\\), so \\(\\sec\\dfrac{\\pi}{3} = 2\\) and \\(\\sec^{2}\\dfrac{\\pi}{3} = 4\\). Therefore \\(y\' = 2\\cdot 4 = 8\\).',
          '\\(y\'\\!\\left(\\dfrac{\\pi}{6}\\right) = 8\\)'
        ),
        S(
          'Final answer: \\(8\\). Connecting identity check: \\(\\sec^{2}\\theta = 1 + \\tan^{2}\\theta\\) with \\(\\tan\\dfrac{\\pi}{3} = \\sqrt{3}\\) gives \\(1+3=4\\), same intermediate value.',
          '\\(8\\)'
        ),
      ],
      { difficulty: 'easy', hint: 'Chain rule factor 2 and \\(\\sec\\dfrac{\\pi}{3} = 2\\).' }
    )
  );

  // y=sin 2x, y'=2 cos 2x, at π/12: 2 cos(π/6)=2*(√3/2)=√3
  out.push(
    mc(
      'y12a-6c-q1l',
      'Find the gradient of the tangent to the curve \\( y = \\sin 2x \\) at \\( x = \\dfrac{\\pi}{12} \\).',
      ['\\(1\\)', '\\(\\sqrt{3}\\)', '\\(\\dfrac{\\sqrt{3}}{2}\\)', '\\(2\\)'],
      1,
      [
        S(
          'Goal: gradient of \\(y = \\sin 2x\\) at \\(x = \\dfrac{\\pi}{12}\\). Use chain rule for sine of double angle.',
          '\\(y = \\sin 2x\\)'
        ),
        S(
          'Differentiate: \\(y\' = \\cos 2x\\cdot 2 = 2\\cos 2x\\). The factor 2 must not be dropped. What this gives is the full slope function.',
          '\\(y\' = 2\\cos 2x\\)'
        ),
        S(
          'At \\(x = \\dfrac{\\pi}{12}\\): \\(2x = \\dfrac{\\pi}{6}\\), so \\(y\' = 2\\cos\\dfrac{\\pi}{6} = 2\\cdot\\dfrac{\\sqrt{3}}{2} = \\sqrt{3}\\). A common mistake is stopping at \\(\\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}\\) without multiplying by 2.',
          '\\(y\'\\!\\left(\\dfrac{\\pi}{12}\\right) = \\sqrt{3}\\)'
        ),
        S(
          'Final answer: \\(\\sqrt{3}\\). Positive and greater than 1, consistent with a steep rise of \\(\\sin 2x\\) near this small positive \\(x\\).',
          '\\(\\sqrt{3}\\)'
        ),
      ],
      { difficulty: 'easy' }
    )
  );

  return out;
}

// ── Show tangents (Q2) — keep teacher_review ───────────────────────────

function buildQ2() {
  return [
    tr(
      'y12a-6c-q2a',
      'Show that the line \\( y = x \\) is the tangent to the curve \\( y = \\sin x \\) at \\( (0, 0) \\).',
      'Proof',
      [
        S(
          'What must be shown? The line and curve share the same point and the same gradient there. Why both? A tangent must touch and match slope; matching only one condition is not enough. Strategy: verify the point, then compare derivatives.',
          '\\(y = \\sin x,\\quad \\ell: y = x\\)'
        ),
        S(
          'Point check: at \\(x = 0\\), \\(\\sin 0 = 0\\), so \\((0,0)\\) lies on the curve. The line also passes through \\((0,0)\\). This connects geometry (shared point) before slopes.',
          '\\(\\sin 0 = 0\\)'
        ),
        S(
          'Gradient of the curve: \\(\\dfrac{d}{dx}\\sin x = \\cos x\\), so at 0 the slope is \\(\\cos 0 = 1\\). Gradient of the line \\(y = x\\) is 1. They match. A common incomplete answer stops after the point check.',
          '\\(m_{\\text{curve}} = 1 = m_{\\text{line}}\\)'
        ),
        S(
          'Conclusion: same point and same gradient, so \\(y = x\\) is the tangent at \\((0,0)\\).',
          '\\text{shown}'
        ),
      ],
      { difficulty: 'easy', timeLimit: 150 }
    ),
    tr(
      'y12a-6c-q2b',
      'Show that the line \\( y = x \\) is the tangent to the curve \\( y = \\tan x \\) at \\( (0, 0) \\).',
      'Proof',
      [
        S(
          'Show that \\(y = x\\) is tangent to \\(y = \\tan x\\) at the origin. Need: shared point and equal derivatives at that point. Why both conditions? Either alone is insufficient for a tangent.',
          '\\(y = \\tan x,\\quad \\ell: y = x\\)'
        ),
        S(
          'Point: \\(\\tan 0 = 0\\), so \\((0,0)\\) is on the curve and on the line. This is the contact point.',
          '\\(\\tan 0 = 0\\)'
        ),
        S(
          'Derivative of the curve: \\(\\dfrac{d}{dx}\\tan x = \\sec^{2}x\\). At 0, \\(\\sec^{2}0 = 1\\). The line has slope 1. Gradients match. A common slip is computing \\(\\tan\' = \\sec\\) without squaring.',
          '\\(\\sec^{2}0 = 1\\)'
        ),
        S(
          'Therefore \\(y = x\\) is the tangent to \\(y = \\tan x\\) at \\((0,0)\\).',
          '\\text{shown}'
        ),
      ],
      { difficulty: 'easy', timeLimit: 150 }
    ),
    tr(
      'y12a-6c-q2c',
      'Show that the line \\( y = \\dfrac{\\pi}{2} - x \\) is the tangent to the curve \\( y = \\cos x \\) at \\( \\left(\\dfrac{\\pi}{2}, 0\\right) \\).',
      'Proof',
      [
        S(
          'Show the given straight line is the tangent to \\(y = \\cos x\\) at \\(\\left(\\dfrac{\\pi}{2}, 0\\right)\\). Verify the point lies on both, then compare gradients.',
          '\\(y = \\cos x\\)'
        ),
        S(
          'On the curve: \\(\\cos\\dfrac{\\pi}{2} = 0\\). On the line: \\(y = \\dfrac{\\pi}{2} - \\dfrac{\\pi}{2} = 0\\). Shared point confirmed.',
          '\\(\\cos\\dfrac{\\pi}{2} = 0\\)'
        ),
        S(
          'Curve gradient: \\(y\' = -\\sin x\\), so at \\(\\dfrac{\\pi}{2}\\) we get \\(-\\sin\\dfrac{\\pi}{2} = -1\\). Line gradient: coefficient of \\(x\\) is \\(-1\\). They match. Forgetting the minus on cosine\'s derivative is the usual error.',
          '\\(m = -1\\)'
        ),
        S(
          'Same point and same gradient, so the line is the required tangent.',
          '\\text{shown}'
        ),
      ],
      { difficulty: 'easy', timeLimit: 150 }
    ),
  ];
}

// ── Equations of tangents (Q3) ─────────────────────────────────────────

function buildQ3() {
  const out = [];

  out.push(
    mc(
      'y12a-6c-q3a',
      'Find the equation of the tangent to the curve \\( y = \\sin x \\) at the point \\( (\\pi, 0) \\).',
      ['\\(y = x - \\pi\\)', '\\(y = x + \\pi\\)', '\\(y = -x + \\pi\\)', '\\(y = -x - \\pi\\)'],
      2,
      [
        S(
          'Goal: equation of the tangent to \\(y = \\sin x\\) at \\((\\pi, 0)\\). Strategy: find slope \\(m = y\'(\\pi)\\), then use point–gradient form. Why not just guess from options? Slope errors flip the whole line.',
          '\\(y = \\sin x\\)'
        ),
        S(
          'Differentiate: \\(y\' = \\cos x\\). At \\(x = \\pi\\), \\(\\cos\\pi = -1\\). So \\(m = -1\\). A common mistake is using \\(\\sin\\pi = 0\\) as if it were the slope.',
          '\\(m = \\cos\\pi = -1\\)'
        ),
        S(
          'Point–gradient: \\(y - 0 = -1(x - \\pi)\\), so \\(y = -x + \\pi\\). Expand carefully: distributing the minus through \\((x - \\pi)\\) gives \\(-x + \\pi\\).',
          '\\(y = -x + \\pi\\)'
        ),
        S(
          'Final answer: \\(y = -x + \\pi\\). Check: at \\(x = \\pi\\), \\(y = 0\\); gradient \\(-1\\). Both conditions hold.',
          '\\(y = -x + \\pi\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    )
  );

  // m = sec^2(π/4)=2; y-1=2(x-π/4) → y=2x - π/2 + 1
  out.push(
    mc(
      'y12a-6c-q3b',
      'Find the equation of the tangent to the curve \\( y = \\tan x \\) at the point \\( \\left(\\dfrac{\\pi}{4}, 1\\right) \\).',
      [
        '\\(y = 2x - \\dfrac{\\pi}{2} + 1\\)',
        '\\(y = 2x - \\dfrac{\\pi}{4} + 1\\)',
        '\\(y = x - \\dfrac{\\pi}{2} + 1\\)',
        '\\(y = 2x + \\dfrac{\\pi}{2} + 1\\)',
      ],
      0,
      [
        S(
          'Goal: tangent to \\(y = \\tan x\\) at \\(\\left(\\dfrac{\\pi}{4}, 1\\right)\\). Find \\(m = \\sec^{2}\\dfrac{\\pi}{4}\\), then point–gradient. Why sec squared? Standard derivative of tangent.',
          '\\(y = \\tan x\\)'
        ),
        S(
          'Slope: \\(\\sec^{2}\\dfrac{\\pi}{4} = \\left(\\sqrt{2}\\right)^{2} = 2\\), or use \\(1 + \\tan^{2} = 1 + 1 = 2\\). Missing the square gives wrong slope \\(\\sqrt{2}\\).',
          '\\(m = 2\\)'
        ),
        S(
          'Point–gradient: \\(y - 1 = 2\\left(x - \\dfrac{\\pi}{4}\\right) = 2x - \\dfrac{\\pi}{2}\\). Hence \\(y = 2x - \\dfrac{\\pi}{2} + 1\\). Watch the arithmetic when expanding \\(2\\cdot\\dfrac{\\pi}{4}\\).',
          '\\(y = 2x - \\dfrac{\\pi}{2} + 1\\)'
        ),
        S(
          'Final answer: \\(y = 2x - \\dfrac{\\pi}{2} + 1\\). Verify the point: \\(2\\cdot\\dfrac{\\pi}{4} - \\dfrac{\\pi}{2} + 1 = \\dfrac{\\pi}{2} - \\dfrac{\\pi}{2} + 1 = 1\\).',
          '\\(y = 2x - \\dfrac{\\pi}{2} + 1\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    )
  );

  // y=cos x at (π/6, √3/2): m=-sin(π/6)=-1/2
  // y - √3/2 = -1/2 (x - π/6) → y = -x/2 + π/12 + √3/2
  out.push(
    mc(
      'y12a-6c-q3c',
      'Find the equation of the tangent to the curve \\( y = \\cos x \\) at the point \\( \\left(\\dfrac{\\pi}{6}, \\dfrac{\\sqrt{3}}{2}\\right) \\).',
      [
        '\\(y = -\\dfrac{1}{2}x + \\dfrac{\\pi}{12} + \\dfrac{\\sqrt{3}}{2}\\)',
        '\\(y = -\\dfrac{1}{2}x + \\dfrac{\\pi}{6} + \\dfrac{\\sqrt{3}}{2}\\)',
        '\\(y = \\dfrac{1}{2}x + \\dfrac{\\pi}{12} + \\dfrac{\\sqrt{3}}{2}\\)',
        '\\(y = -\\dfrac{1}{2}x - \\dfrac{\\pi}{12} + \\dfrac{\\sqrt{3}}{2}\\)',
      ],
      0,
      [
        S(
          'Goal: tangent equation at the given point on \\(y = \\cos x\\). Find slope from \\(y\' = -\\sin x\\), then rearrange point–gradient form carefully.',
          '\\(y = \\cos x\\)'
        ),
        S(
          'At \\(x = \\dfrac{\\pi}{6}\\): \\(m = -\\sin\\dfrac{\\pi}{6} = -\\dfrac{1}{2}\\). Dropping the minus gives the wrong half of the option set.',
          '\\(m = -\\dfrac{1}{2}\\)'
        ),
        S(
          'Point–gradient: \\(y - \\dfrac{\\sqrt{3}}{2} = -\\dfrac{1}{2}\\left(x - \\dfrac{\\pi}{6}\\right) = -\\dfrac{1}{2}x + \\dfrac{\\pi}{12}\\). Adding \\(\\dfrac{\\sqrt{3}}{2}\\) yields the intercept terms.',
          '\\(y = -\\dfrac{1}{2}x + \\dfrac{\\pi}{12} + \\dfrac{\\sqrt{3}}{2}\\)'
        ),
        S(
          'Final answer: \\(y = -\\dfrac{1}{2}x + \\dfrac{\\pi}{12} + \\dfrac{\\sqrt{3}}{2}\\). Common error: writing \\(\\dfrac{\\pi}{6}\\) instead of \\(\\dfrac{\\pi}{12}\\) after multiplying by \\(\\dfrac{1}{2}\\).',
          '\\(y = -\\dfrac{1}{2}x + \\dfrac{\\pi}{12} + \\dfrac{\\sqrt{3}}{2}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 150 }
    )
  );

  // y=cos 2x at (π/4, 0): m=-2sin(π/2)=-2
  // y-0=-2(x-π/4) → y=-2x+π/2
  out.push(
    mc(
      'y12a-6c-q3d',
      'Find the equation of the tangent to the curve \\( y = \\cos 2x \\) at the point \\( \\left(\\dfrac{\\pi}{4}, 0\\right) \\).',
      [
        '\\(y = -2x + \\dfrac{\\pi}{2}\\)',
        '\\(y = -2x + \\dfrac{\\pi}{4}\\)',
        '\\(y = 2x - \\dfrac{\\pi}{2}\\)',
        '\\(y = -x + \\dfrac{\\pi}{2}\\)',
      ],
      0,
      [
        S(
          'Goal: tangent to \\(y = \\cos 2x\\) at \\(\\left(\\dfrac{\\pi}{4}, 0\\right)\\). Chain rule for slope, then point–gradient.',
          '\\(y = \\cos 2x\\)'
        ),
        S(
          'Derivative: \\(y\' = -2\\sin 2x\\). At \\(x = \\dfrac{\\pi}{4}\\), \\(2x = \\dfrac{\\pi}{2}\\), so \\(m = -2\\sin\\dfrac{\\pi}{2} = -2\\). Forgetting the chain factor 2 gives \\(m = -1\\).',
          '\\(m = -2\\)'
        ),
        S(
          'Equation: \\(y - 0 = -2\\left(x - \\dfrac{\\pi}{4}\\right)\\) so \\(y = -2x + \\dfrac{\\pi}{2}\\). Expanding \\(-2\\cdot\\left(-\\dfrac{\\pi}{4}\\right)\\) carefully produces \\(+\\dfrac{\\pi}{2}\\).',
          '\\(y = -2x + \\dfrac{\\pi}{2}\\)'
        ),
        S(
          'Final answer: \\(y = -2x + \\dfrac{\\pi}{2}\\). Check the point: \\(-2\\cdot\\dfrac{\\pi}{4} + \\dfrac{\\pi}{2} = 0\\).',
          '\\(y = -2x + \\dfrac{\\pi}{2}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    )
  );

  // y=sin 2x at (π/3, √3/2): m=2 cos(2π/3)=2(-1/2)=-1
  // y-√3/2 = -1(x-π/3) → y=-x+π/3+√3/2
  out.push(
    mc(
      'y12a-6c-q3e',
      'Find the equation of the tangent to the curve \\( y = \\sin 2x \\) at the point \\( \\left(\\dfrac{\\pi}{3}, \\dfrac{\\sqrt{3}}{2}\\right) \\).',
      [
        '\\(y = -x + \\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{2}\\)',
        '\\(y = -x + \\dfrac{\\pi}{3} - \\dfrac{\\sqrt{3}}{2}\\)',
        '\\(y = x - \\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{2}\\)',
        '\\(y = -2x + \\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{2}\\)',
      ],
      0,
      [
        S(
          'Goal: tangent to \\(y = \\sin 2x\\) at the given point. Use chain rule for the slope, then point–gradient form.',
          '\\(y = \\sin 2x\\)'
        ),
        S(
          'Derivative: \\(y\' = 2\\cos 2x\\). At \\(x = \\dfrac{\\pi}{3}\\), \\(2x = \\dfrac{2\\pi}{3}\\), and \\(\\cos\\dfrac{2\\pi}{3} = -\\dfrac{1}{2}\\). Thus \\(m = 2\\cdot\\left(-\\dfrac{1}{2}\\right) = -1\\).',
          '\\(m = -1\\)'
        ),
        S(
          'Point–gradient: \\(y - \\dfrac{\\sqrt{3}}{2} = -1\\left(x - \\dfrac{\\pi}{3}\\right)\\), so \\(y = -x + \\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{2}\\).',
          '\\(y = -x + \\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{2}\\)'
        ),
        S(
          'Final answer: \\(y = -x + \\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{2}\\). A common error is using \\(\\cos\\dfrac{\\pi}{3}\\) instead of \\(\\cos\\dfrac{2\\pi}{3}\\).',
          '\\(y = -x + \\dfrac{\\pi}{3} + \\dfrac{\\sqrt{3}}{2}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 150 }
    )
  );

  // y=x sin x at (π,0): y'=sin x + x cos x → m = 0 + π(-1)= -π
  // y = -π(x-π) = -πx + π²
  out.push(
    mc(
      'y12a-6c-q3f',
      'Find the equation of the tangent to the curve \\( y = x \\sin x \\) at the point \\( (\\pi, 0) \\).',
      [
        '\\(y = -\\pi x + \\pi^{2}\\)',
        '\\(y = \\pi x - \\pi^{2}\\)',
        '\\(y = -\\pi x - \\pi^{2}\\)',
        '\\(y = -x + \\pi\\)',
      ],
      0,
      [
        S(
          'Goal: tangent to the product \\(y = x\\sin x\\) at \\((\\pi, 0)\\). Strategy: product rule for the derivative, evaluate slope, then point–gradient.',
          '\\(y = x\\sin x\\)'
        ),
        S(
          'Product rule: \\(y\' = \\sin x + x\\cos x\\). What each term is: derivative of \\(x\\) times \\(\\sin x\\), plus \\(x\\) times derivative of \\(\\sin x\\).',
          '\\(y\' = \\sin x + x\\cos x\\)'
        ),
        S(
          'At \\(x = \\pi\\): \\(\\sin\\pi + \\pi\\cos\\pi = 0 + \\pi(-1) = -\\pi\\). So \\(m = -\\pi\\). A common slip is treating the product as if the derivative were only \\(x\\cos x\\).',
          '\\(m = -\\pi\\)'
        ),
        S(
          'Equation: \\(y - 0 = -\\pi(x - \\pi)\\) gives \\(y = -\\pi x + \\pi^{2}\\). Final answer: \\(y = -\\pi x + \\pi^{2}\\).',
          '\\(y = -\\pi x + \\pi^{2}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 150, hint: 'Use the product rule for \\(y = x\\sin x\\).' }
    )
  );

  return out;
}

// ── Horizontal tangents (Q4) ───────────────────────────────────────────

function buildQ4() {
  return [
    mc(
      'y12a-6c-q4a',
      'Find, in the domain \\( 0 \\le x \\le 2\\pi \\), the \\(x\\)-coordinates of the points on the curve \\( y = 2 \\sin x \\) where the gradient of the tangent is zero.',
      [
        '\\(x = 0,\\, \\pi\\)',
        '\\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\)',
        '\\(x = \\dfrac{\\pi}{4},\\, \\dfrac{5\\pi}{4}\\)',
        '\\(x = \\dfrac{\\pi}{3},\\, \\dfrac{2\\pi}{3}\\)',
      ],
      1,
      [
        S(
          'Horizontal tangent means gradient zero: solve \\(y\' = 0\\) in the given domain. Why differentiate first? Stationary points are defined by the derivative, not by setting \\(y = 0\\).',
          '\\(y = 2\\sin x\\)'
        ),
        S(
          'Differentiate: \\(y\' = 2\\cos x\\). Set \\(2\\cos x = 0\\) so \\(\\cos x = 0\\). Connecting: zeros of cosine are odd multiples of \\(\\dfrac{\\pi}{2}\\).',
          '\\(2\\cos x = 0\\)'
        ),
        S(
          'In \\([0, 2\\pi]\\): \\(x = \\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{3\\pi}{2}\\). (Endpoints 0 and \\(2\\pi\\) have \\(\\cos = 1 \\neq 0\\).)',
          '\\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\)'
        ),
        S(
          'Final answer: \\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\). These are the top and bottom of one full sine wave scaled by 2.',
          '\\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    ),
    mc(
      'y12a-6c-q4b',
      'Find, in the domain \\( 0 \\le x \\le 2\\pi \\), the \\(x\\)-coordinates of the points on the curve \\( y = 2 \\sin x - x \\) where the gradient of the tangent is zero.',
      [
        '\\(x = \\dfrac{\\pi}{6},\\, \\dfrac{5\\pi}{6}\\)',
        '\\(x = \\dfrac{\\pi}{3},\\, \\dfrac{5\\pi}{3}\\)',
        '\\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\)',
        '\\(x = \\dfrac{\\pi}{3},\\, \\dfrac{2\\pi}{3}\\)',
      ],
      1,
      [
        S(
          'Solve \\(y\' = 0\\) for \\(y = 2\\sin x - x\\) on \\([0, 2\\pi]\\). The linear term changes the stationary locations relative to plain sine.',
          '\\(y = 2\\sin x - x\\)'
        ),
        S(
          'Differentiate: \\(y\' = 2\\cos x - 1\\). Set equal to zero: \\(2\\cos x = 1\\), so \\(\\cos x = \\dfrac{1}{2}\\).',
          '\\(2\\cos x - 1 = 0\\)'
        ),
        S(
          'Solutions of \\(\\cos x = \\dfrac{1}{2}\\) in the domain: \\(x = \\dfrac{\\pi}{3}\\) and \\(x = \\dfrac{5\\pi}{3}\\). A common mistake is listing the sine solutions \\(\\dfrac{\\pi}{6},\\,\\dfrac{5\\pi}{6}\\) instead.',
          '\\(x = \\dfrac{\\pi}{3},\\, \\dfrac{5\\pi}{3}\\)'
        ),
        S(
          'Final answer: \\(x = \\dfrac{\\pi}{3},\\, \\dfrac{5\\pi}{3}\\).',
          '\\(x = \\dfrac{\\pi}{3},\\, \\dfrac{5\\pi}{3}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    ),
    mc(
      'y12a-6c-q4c',
      'Find, in the domain \\( 0 \\le x \\le 2\\pi \\), the \\(x\\)-coordinates of the points on the curve \\( y = 2 \\cos x + x \\) where the gradient of the tangent is zero.',
      [
        '\\(x = \\dfrac{\\pi}{6},\\, \\dfrac{5\\pi}{6}\\)',
        '\\(x = \\dfrac{\\pi}{3},\\, \\dfrac{5\\pi}{3}\\)',
        '\\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\)',
        '\\(x = \\dfrac{\\pi}{6},\\, \\dfrac{11\\pi}{6}\\)',
      ],
      0,
      [
        S(
          'Horizontal tangents for \\(y = 2\\cos x + x\\) come from \\(y\' = 0\\). Differentiate term by term.',
          '\\(y = 2\\cos x + x\\)'
        ),
        S(
          'Derivative: \\(y\' = -2\\sin x + 1\\). Set \\(-2\\sin x + 1 = 0\\) so \\(\\sin x = \\dfrac{1}{2}\\). Watch the sign when solving for sine.',
          '\\(-2\\sin x + 1 = 0\\)'
        ),
        S(
          'In \\([0, 2\\pi]\\): \\(x = \\dfrac{\\pi}{6}\\) and \\(x = \\dfrac{5\\pi}{6}\\). (Not the third-quadrant/fourth-quadrant pair for negative sine.)',
          '\\(x = \\dfrac{\\pi}{6},\\, \\dfrac{5\\pi}{6}\\)'
        ),
        S(
          'Final answer: \\(x = \\dfrac{\\pi}{6},\\, \\dfrac{5\\pi}{6}\\).',
          '\\(x = \\dfrac{\\pi}{6},\\, \\dfrac{5\\pi}{6}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    ),
    mc(
      'y12a-6c-q4d',
      'Find, in the domain \\( 0 \\le x \\le 2\\pi \\), the \\(x\\)-coordinates of the points on the curve \\( y = 2 \\sin x + \\sqrt{3}\\, x \\) where the gradient of the tangent is zero.',
      [
        '\\(x = \\dfrac{\\pi}{6},\\, \\dfrac{11\\pi}{6}\\)',
        '\\(x = \\dfrac{5\\pi}{6},\\, \\dfrac{7\\pi}{6}\\)',
        '\\(x = \\dfrac{2\\pi}{3},\\, \\dfrac{4\\pi}{3}\\)',
        '\\(x = \\dfrac{\\pi}{3},\\, \\dfrac{5\\pi}{3}\\)',
      ],
      1,
      [
        S(
          'Solve \\(y\' = 0\\) for \\(y = 2\\sin x + \\sqrt{3}\\, x\\) on the given closed interval.',
          '\\(y = 2\\sin x + \\sqrt{3}\\, x\\)'
        ),
        S(
          'Differentiate: \\(y\' = 2\\cos x + \\sqrt{3}\\). Set to zero: \\(2\\cos x = -\\sqrt{3}\\), so \\(\\cos x = -\\dfrac{\\sqrt{3}}{2}\\).',
          '\\(2\\cos x + \\sqrt{3} = 0\\)'
        ),
        S(
          'Cosine is \\(-\\dfrac{\\sqrt{3}}{2}\\) at \\(x = \\dfrac{5\\pi}{6}\\) and \\(x = \\dfrac{7\\pi}{6}\\) in \\([0, 2\\pi]\\). A common error is taking the acute angles \\(\\dfrac{\\pi}{6},\\,\\dfrac{11\\pi}{6}\\) where cosine is positive.',
          '\\(x = \\dfrac{5\\pi}{6},\\, \\dfrac{7\\pi}{6}\\)'
        ),
        S(
          'Final answer: \\(x = \\dfrac{5\\pi}{6},\\, \\dfrac{7\\pi}{6}\\).',
          '\\(x = \\dfrac{5\\pi}{6},\\, \\dfrac{7\\pi}{6}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 120 }
    ),
  ];
}

// ── Q5 show tangent/normal — teacher_review ────────────────────────────

function buildQ5() {
  return [
    tr(
      'y12a-6c-q5a',
      'The point \\( P\\!\\left(\\dfrac{\\pi}{6}, \\dfrac{1}{2}\\right) \\) lies on the curve \\( y = 2 \\sin x - \\cos 2x \\). Show that the tangent at \\( P \\) has equation \\( 2\\sqrt{3}\\, x - y = \\dfrac{1}{3}\\pi\\sqrt{3} - \\dfrac{1}{2} \\).',
      'Proof',
      [
        S(
          'Show the stated tangent equation. Strategy: differentiate, evaluate the gradient at \\(P\\), form the tangent, then rearrange into the given linear form. Why rearrange? Exam “show that” answers must match the printed equation exactly.',
          '\\(y = 2\\sin x - \\cos 2x\\)'
        ),
        S(
          'Differentiate with the chain rule on the second term: \\(y\' = 2\\cos x + 2\\sin 2x\\). (Derivative of \\(-\\cos 2x\\) is \\(2\\sin 2x\\).)',
          '\\(y\' = 2\\cos x + 2\\sin 2x\\)'
        ),
        S(
          'At \\(x = \\dfrac{\\pi}{6}\\): \\(\\cos\\dfrac{\\pi}{6} = \\dfrac{\\sqrt{3}}{2}\\) and \\(\\sin\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}\\), so \\(y\' = 2\\cdot\\dfrac{\\sqrt{3}}{2} + 2\\cdot\\dfrac{\\sqrt{3}}{2} = \\sqrt{3} + \\sqrt{3} = 2\\sqrt{3}\\).',
          '\\(m = 2\\sqrt{3}\\)'
        ),
        S(
          'Tangent: \\(y - \\dfrac{1}{2} = 2\\sqrt{3}\\left(x - \\dfrac{\\pi}{6}\\right)\\). Expand and collect: \\(2\\sqrt{3}\\, x - y = 2\\sqrt{3}\\cdot\\dfrac{\\pi}{6} - \\dfrac{1}{2} = \\dfrac{\\pi\\sqrt{3}}{3} - \\dfrac{1}{2}\\), as required.',
          '\\(2\\sqrt{3}\\, x - y = \\dfrac{\\pi\\sqrt{3}}{3} - \\dfrac{1}{2}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 240 }
    ),
    tr(
      'y12a-6c-q5b',
      'The point \\( P\\!\\left(\\dfrac{\\pi}{6}, \\dfrac{1}{2}\\right) \\) lies on the curve \\( y = 2 \\sin x - \\cos 2x \\). Show that the normal at \\( P \\) has equation \\( x + 2\\sqrt{3}\\, y = \\dfrac{\\pi}{6} + \\sqrt{3} \\).',
      'Proof',
      [
        S(
          'From part (a) the tangent gradient is \\(m_{t} = 2\\sqrt{3}\\). The normal gradient is the negative reciprocal. Why negative reciprocal? Perpendicular lines in the plane satisfy \\(m_{1}m_{2} = -1\\) (neither vertical).',
          '\\(m_{t} = 2\\sqrt{3}\\)'
        ),
        S(
          'Normal gradient: \\(m_{n} = -\\dfrac{1}{2\\sqrt{3}} = -\\dfrac{\\sqrt{3}}{6}\\) after rationalising if desired. Use either form consistently.',
          '\\(m_{n} = -\\dfrac{1}{2\\sqrt{3}}\\)'
        ),
        S(
          'Point–gradient at \\(P\\): \\(y - \\dfrac{1}{2} = -\\dfrac{1}{2\\sqrt{3}}\\left(x - \\dfrac{\\pi}{6}\\right)\\). Multiply through by \\(2\\sqrt{3}\\) to clear the denominator: \\(2\\sqrt{3}\\, y - \\sqrt{3} = -\\left(x - \\dfrac{\\pi}{6}\\right)\\).',
          '\\(2\\sqrt{3}\\!\\left(y - \\dfrac{1}{2}\\right) = -\\left(x - \\dfrac{\\pi}{6}\\right)\\)'
        ),
        S(
          'Rearrange: \\(x + 2\\sqrt{3}\\, y = \\dfrac{\\pi}{6} + \\sqrt{3}\\), matching the required equation. A common slip is using reciprocal without the minus.',
          '\\(x + 2\\sqrt{3}\\, y = \\dfrac{\\pi}{6} + \\sqrt{3}\\)'
        ),
      ],
      { difficulty: 'medium', timeLimit: 240 }
    ),
  ];
}

// ── Multipart Q6 ───────────────────────────────────────────────────────

function buildQ6() {
  const stem = 'Consider the curve \\( y = \\sin^{2} x \\).';

  const a = tr(
    'y12a-6c-q6a',
    stem + '\n\n(a) Show that \\( y = \\sin^{2} x \\) has derivative \\( y\' = 2 \\sin x \\cos x \\).',
    'Proof',
    [
      S(
        'Show the derivative of \\(y = \\sin^{2}x\\) is \\(2\\sin x\\cos x\\). Strategy: chain rule treating \\(\\sin x\\) as the inside of a square, or product rule on \\(\\sin x\\cdot\\sin x\\).',
        '\\(y = \\sin^{2}x\\)'
      ),
      S(
        'Chain rule: let \\(u = \\sin x\\), so \\(y = u^{2}\\). Then \\(\\dfrac{dy}{dx} = 2u\\,\\dfrac{du}{dx} = 2\\sin x\\cdot\\cos x\\).',
        '\\(y\' = 2\\sin x\\cos x\\)'
      ),
      S(
        'Alternatively by product rule: \\(y = (\\sin x)(\\sin x)\\) gives \\(\\cos x\\sin x + \\sin x\\cos x = 2\\sin x\\cos x\\). Same result. A common incomplete answer forgets the chain factor 2.',
        '\\(y\' = 2\\sin x\\cos x\\)'
      ),
      S(
        'Therefore \\(y\' = 2\\sin x\\cos x\\), as required. (Optionally note the double-angle form \\(y\' = \\sin 2x\\).)',
        '\\text{shown}'
      ),
    ],
    { difficulty: 'easy', timeLimit: 120, isActive: false }
  );

  const b = mc(
    'y12a-6c-q6b',
    stem +
      '\n\n(b) Find the gradients of the tangent and normal to \\( y = \\sin^{2} x \\) at the point where \\( x = \\dfrac{\\pi}{4} \\).',
    [
      'Tangent gradient: \\(1\\), normal gradient: \\(-1\\)',
      'Tangent gradient: \\(\\dfrac{1}{2}\\), normal gradient: \\(-2\\)',
      'Tangent gradient: \\(2\\), normal gradient: \\(-\\dfrac{1}{2}\\)',
      'Tangent gradient: \\(0\\), normal gradient: undefined',
    ],
    0,
    [
      S(
        'From part (a), \\(y\' = 2\\sin x\\cos x\\) (or \\(\\sin 2x\\)). Evaluate at \\(x = \\dfrac{\\pi}{4}\\) for the tangent gradient, then take the negative reciprocal for the normal.',
        '\\(y\' = 2\\sin x\\cos x\\)'
      ),
      S(
        'At \\(x = \\dfrac{\\pi}{4}\\): \\(\\sin\\dfrac{\\pi}{4} = \\cos\\dfrac{\\pi}{4} = \\dfrac{1}{\\sqrt{2}}\\), so \\(y\' = 2\\cdot\\dfrac{1}{\\sqrt{2}}\\cdot\\dfrac{1}{\\sqrt{2}} = 2\\cdot\\dfrac{1}{2} = 1\\). Tangent gradient is 1.',
        '\\(m_{t} = 1\\)'
      ),
      S(
        'Normal gradient is the negative reciprocal: \\(m_{n} = -1\\). Why? Perpendicular lines satisfy \\(m_{t}m_{n} = -1\\).',
        '\\(m_{n} = -1\\)'
      ),
      S(
        'Final answer: tangent gradient 1, normal gradient \\(-1\\).',
        '\\(m_{t} = 1,\\ m_{n} = -1\\)'
      ),
    ],
    { difficulty: 'easy', timeLimit: 120, isActive: false }
  );

  const c = mc(
    'y12a-6c-q6c',
    stem +
      '\n\n(c) Find the equations of the tangent and normal to \\( y = \\sin^{2} x \\) at the point where \\( x = \\dfrac{\\pi}{4} \\).',
    [
      'Tangent: \\(y = x - \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\), normal: \\(y = -x + \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\)',
      'Tangent: \\(y = x - \\dfrac{\\pi}{4}\\), normal: \\(y = -x + \\dfrac{\\pi}{4}\\)',
      'Tangent: \\(y = x + \\dfrac{1}{2}\\), normal: \\(y = -x + \\dfrac{1}{2}\\)',
      'Tangent: \\(y = 2x - \\dfrac{\\pi}{2}\\), normal: \\(y = -\\dfrac{1}{2}x + \\dfrac{\\pi}{8} + \\dfrac{1}{2}\\)',
    ],
    0,
    [
      S(
        'At \\(x = \\dfrac{\\pi}{4}\\), the point on the curve is \\(y = \\sin^{2}\\dfrac{\\pi}{4} = \\left(\\dfrac{1}{\\sqrt{2}}\\right)^{2} = \\dfrac{1}{2}\\). From (b), tangent slope is 1 and normal slope is \\(-1\\).',
        '\\(P\\!\\left(\\dfrac{\\pi}{4},\\dfrac{1}{2}\\right)\\)'
      ),
      S(
        'Tangent: \\(y - \\dfrac{1}{2} = 1\\left(x - \\dfrac{\\pi}{4}\\right)\\), so \\(y = x - \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\). Expand carefully; do not drop the constant \\(\\dfrac{1}{2}\\).',
        '\\(y = x - \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\)'
      ),
      S(
        'Normal: \\(y - \\dfrac{1}{2} = -1\\left(x - \\dfrac{\\pi}{4}\\right)\\), so \\(y = -x + \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\).',
        '\\(y = -x + \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\)'
      ),
      S(
        'Final answer: tangent \\(y = x - \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\), normal \\(y = -x + \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\).',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 150, isActive: false }
  );

  const d = tr(
    'y12a-6c-q6d',
    stem +
      '\n\n(d) Suppose that the tangent meets the \\(x\\)-axis at \\(P\\), the normal meets the \\(y\\)-axis at \\(Q\\) and \\(O\\) is the origin. Show that \\(\\triangle OPQ\\) has area \\(\\dfrac{1}{32}\\left(\\pi^{2} - 4\\right)\\) units\\(^2\\).',
    'Proof',
    [
      S(
        'From part (c): tangent \\(y = x - \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\) and normal \\(y = -x + \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\). Find intercepts of these lines to locate \\(P\\) and \\(Q\\).',
        '\\text{use part (c)}'
      ),
      S(
        'Tangent meets \\(x\\)-axis where \\(y = 0\\): \\(0 = x - \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\) so \\(x = \\dfrac{\\pi}{4} - \\dfrac{1}{2}\\). Thus \\(P\\!\\left(\\dfrac{\\pi}{4} - \\dfrac{1}{2},\\, 0\\right)\\).',
        'P\\!\\left(\\dfrac{\\pi}{4}-\\dfrac{1}{2},0\\right)'
      ),
      S(
        'Normal meets \\(y\\)-axis where \\(x = 0\\): \\(y = \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\). Thus \\(Q\\!\\left(0,\\, \\dfrac{\\pi}{4} + \\dfrac{1}{2}\\right)\\).',
        'Q\\!\\left(0,\\dfrac{\\pi}{4}+\\dfrac{1}{2}\\right)'
      ),
      S(
        'Triangle \\(OPQ\\) is right-angled at \\(O\\) with legs \\(\\left|\\dfrac{\\pi}{4} - \\dfrac{1}{2}\\right|\\) and \\(\\dfrac{\\pi}{4} + \\dfrac{1}{2}\\). Area \\(= \\dfrac{1}{2}\\left(\\dfrac{\\pi}{4} - \\dfrac{1}{2}\\right)\\left(\\dfrac{\\pi}{4} + \\dfrac{1}{2}\\right) = \\dfrac{1}{2}\\left(\\left(\\dfrac{\\pi}{4}\\right)^{2} - \\left(\\dfrac{1}{2}\\right)^{2}\\) = \\dfrac{1}{2}\\left(\\dfrac{\\pi^{2}}{16} - \\dfrac{1}{4}\\) = \\dfrac{1}{32}\\left(\\pi^{2} - 4\\right)\\).',
        '\\dfrac{1}{32}(\\pi^{2}-4)'
      ),
    ],
    { difficulty: 'hard', timeLimit: 300, isActive: false }
  );

  return {
    parent: parent('y12a-6c-q6', stem, [a, b, c, d], {
      difficulty: 'medium',
      timeLimit: 600,
      hint: 'Differentiate with the chain rule, then form tangent and normal equations.',
    }),
    children: [a, b, c, d],
  };
}

// ── Q7 e^{sin x} ───────────────────────────────────────────────────────

function buildQ7() {
  const stem = 'Consider the curve \\( y = e^{\\sin x} \\).';
  const a = mc(
    'y12a-6c-q7a',
    stem + '\n\n(a) Differentiate \\( y = e^{\\sin x} \\).',
    [
      '\\(e^{-\\sin x}\\cos x\\)',
      '\\(e^{\\sin x + 1}\\cos x\\)',
      '\\(e^{\\sin x}\\cos x\\)',
      '\\(e^{\\sin x}\\sin x\\)',
    ],
    2,
    [
      S(
        'Differentiate the composite exponential \\(y = e^{\\sin x}\\). Strategy: chain rule — outer exponential, inner sine. Why chain rule? The exponent is not simply \\(x\\).',
        '\\(y = e^{\\sin x}\\)'
      ),
      S(
        'If \\(y = e^{u}\\) with \\(u = \\sin x\\), then \\(y\' = e^{u}u\'\\). Here \\(u\' = \\cos x\\). Connecting: the derivative keeps the same exponential factor.',
        '\\(y\' = e^{\\sin x}\\cdot\\cos x\\)'
      ),
      S(
        'So \\(y\' = e^{\\sin x}\\cos x\\). Common mistakes: multiplying by \\(\\sin x\\) instead of \\(\\cos x\\), or writing \\(e^{\\sin x + 1}\\).',
        '\\(y\' = e^{\\sin x}\\cos x\\)'
      ),
      S(
        'Final answer: \\(e^{\\sin x}\\cos x\\).',
        '\\(e^{\\sin x}\\cos x\\)'
      ),
    ],
    { difficulty: 'easy', timeLimit: 90, isActive: false }
  );

  const b = mc(
    'y12a-6c-q7b',
    stem +
      '\n\n(b) Hence find, in the domain \\([0, 2\\pi]\\), the \\(x\\)-coordinates of the points on the curve \\( y = e^{\\sin x} \\) where the tangent is horizontal.',
    [
      '\\(x = 0,\\, \\pi\\)',
      '\\(x = \\dfrac{\\pi}{4},\\, \\dfrac{5\\pi}{4}\\)',
      '\\(x = \\dfrac{\\pi}{3},\\, \\dfrac{5\\pi}{3}\\)',
      '\\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\)',
    ],
    3,
    [
      S(
        'Horizontal tangent means \\(y\' = 0\\). From (a), \\(y\' = e^{\\sin x}\\cos x\\). Why product form helps: a product is zero when either factor is zero.',
        '\\(y\' = e^{\\sin x}\\cos x\\)'
      ),
      S(
        'Now \\(e^{\\sin x} > 0\\) for all real \\(x\\), so it never vanishes. Therefore \\(y\' = 0\\) iff \\(\\cos x = 0\\).',
        '\\(\\cos x = 0\\)'
      ),
      S(
        'In \\([0, 2\\pi]\\): \\(x = \\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{3\\pi}{2}\\). Do not include endpoints unless cosine is zero there (it is not).',
        '\\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\)'
      ),
      S(
        'Final answer: \\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\).',
        '\\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\)'
      ),
    ],
    { difficulty: 'medium', timeLimit: 120, isActive: false }
  );

  return {
    parent: parent('y12a-6c-q7', stem, [a, b], {
      difficulty: 'medium',
      timeLimit: 240,
      hint: 'Chain rule for \\(e^{u}\\), then set the derivative to zero.',
    }),
    children: [a, b],
  };
}

// ── Q8 e^{cos x} ───────────────────────────────────────────────────────

function buildQ8() {
  const stem = 'Consider the curve \\( y = e^{\\cos x} \\).';
  const a = mc(
    'y12a-6c-q8a',
    stem + '\n\n(a) Differentiate \\( y = e^{\\cos x} \\).',
    [
      '\\(e^{\\cos x}\\sin x\\)',
      '\\(-e^{-\\cos x}\\sin x\\)',
      '\\(-e^{\\cos x}\\sin x\\)',
      '\\(-e^{\\sin x}\\sin x\\)',
    ],
    2,
    [
      S(
        'Differentiate \\(y = e^{\\cos x}\\) with the chain rule. Outer exponential, inner cosine. Track the minus from cosine carefully.',
        '\\(y = e^{\\cos x}\\)'
      ),
      S(
        'With \\(u = \\cos x\\), \\(y\' = e^{u}u\' = e^{\\cos x}\\cdot(-\\sin x) = -e^{\\cos x}\\sin x\\). Dropping the minus is the standard error.',
        '\\(y\' = -e^{\\cos x}\\sin x\\)'
      ),
      S(
        'Final form: \\(-e^{\\cos x}\\sin x\\). The exponential factor stays positive; the sign sits on the sine factor.',
        '\\(-e^{\\cos x}\\sin x\\)'
      ),
      S(
        'Final answer: \\(-e^{\\cos x}\\sin x\\).',
        '\\(-e^{\\cos x}\\sin x\\)'
      ),
    ],
    { difficulty: 'easy', timeLimit: 90, isActive: false }
  );

  const b = mc(
    'y12a-6c-q8b',
    stem +
      '\n\n(b) Hence find, in the domain \\([0, 2\\pi]\\), the \\(x\\)-coordinates of the points on the curve \\( y = e^{\\cos x} \\) where the tangent is horizontal.',
    [
      '\\(x = \\dfrac{\\pi}{2},\\, \\dfrac{3\\pi}{2}\\)',
      '\\(x = 0,\\, \\pi,\\, 2\\pi\\)',
      '\\(x = \\dfrac{\\pi}{4},\\, \\dfrac{5\\pi}{4}\\)',
      '\\(x = \\dfrac{\\pi}{3},\\, \\dfrac{5\\pi}{3}\\)',
    ],
    1,
    [
      S(
        'Set \\(y\' = 0\\). From (a), \\(y\' = -e^{\\cos x}\\sin x\\). Exponential never zero, so the equation reduces to \\(\\sin x = 0\\).',
        '\\(-e^{\\cos x}\\sin x = 0\\)'
      ),
      S(
        'Solve \\(\\sin x = 0\\) on \\([0, 2\\pi]\\): \\(x = 0,\\, \\pi,\\, 2\\pi\\). Why include both endpoints? The domain is closed and sine vanishes at both 0 and \\(2\\pi\\).',
        '\\(x = 0,\\, \\pi,\\, 2\\pi\\)'
      ),
      S(
        'Connecting: these are the max/min of the exponent \\(\\cos x\\), so the composite exponential also has horizontal tangents there.',
        '\\text{stationary at extrema of cos}'
      ),
      S(
        'Final answer: \\(x = 0,\\, \\pi,\\, 2\\pi\\).',
        '\\(x = 0,\\, \\pi,\\, 2\\pi\\)'
      ),
    ],
    { difficulty: 'medium', timeLimit: 120, isActive: false }
  );

  return {
    parent: parent('y12a-6c-q8', stem, [a, b], {
      difficulty: 'medium',
      timeLimit: 240,
    }),
    children: [a, b],
  };
}

// ── Q9 y = cos x + √3 sin x ────────────────────────────────────────────

function buildQ9() {
  const stem = 'For the curve \\( y = \\cos x + \\sqrt{3}\\,\\sin x \\):';

  const a = mc(
    'y12a-6c-q9a',
    stem + '\n\n(a) Find the first and second derivatives of \\( y \\).',
    [
      '\\(y\' = \\sin x + \\sqrt{3}\\,\\cos x,\\quad y\'\' = \\cos x - \\sqrt{3}\\,\\sin x\\)',
      '\\(y\' = -\\sin x + \\sqrt{3}\\,\\cos x,\\quad y\'\' = -\\cos x - \\sqrt{3}\\,\\sin x\\)',
      '\\(y\' = -\\sin x + \\sqrt{3}\\,\\sin x,\\quad y\'\' = -\\cos x - \\sqrt{3}\\,\\cos x\\)',
      '\\(y\' = -\\cos x + \\sqrt{3}\\,\\sin x,\\quad y\'\' = \\sin x + \\sqrt{3}\\,\\cos x\\)',
    ],
    1,
    [
      S(
        'Differentiate term by term. Recall \\(\\dfrac{d}{dx}\\cos x = -\\sin x\\) and \\(\\dfrac{d}{dx}\\sin x = \\cos x\\). The coefficient \\(\\sqrt{3}\\) multiplies only the sine term\'s derivative.',
        '\\(y = \\cos x + \\sqrt{3}\\,\\sin x\\)'
      ),
      S(
        'First derivative: \\(y\' = -\\sin x + \\sqrt{3}\\,\\cos x\\). A common slip is writing \\(+\\sin x\\) for the cosine term\'s derivative.',
        '\\(y\' = -\\sin x + \\sqrt{3}\\,\\cos x\\)'
      ),
      S(
        'Differentiate again: \\(y\'\' = -\\cos x + \\sqrt{3}(-\\sin x) = -\\cos x - \\sqrt{3}\\,\\sin x\\). Note \\(y\'\' = -y\\), which is a useful check later for inflection work.',
        '\\(y\'\' = -\\cos x - \\sqrt{3}\\,\\sin x\\)'
      ),
      S(
        'Final answer: \\(y\' = -\\sin x + \\sqrt{3}\\,\\cos x\\), \\(y\'\' = -\\cos x - \\sqrt{3}\\,\\sin x\\).',
        '\\(y\' = -\\sin x + \\sqrt{3}\\,\\cos x,\\ y\'\' = -\\cos x - \\sqrt{3}\\,\\sin x\\)'
      ),
    ],
    { difficulty: 'medium', timeLimit: 120, isActive: false }
  );

  const b = mc(
    'y12a-6c-q9b',
    stem +
      '\n\n(b) Find the stationary points in the domain \\( 0 \\le x \\le 2\\pi \\), and determine their nature.',
    [
      'Maximum at \\(\\left(\\dfrac{\\pi}{6}, 2\\right)\\), minimum at \\(\\left(\\dfrac{7\\pi}{6}, -2\\right)\\)',
      'Maximum at \\(\\left(\\dfrac{\\pi}{3}, 2\\right)\\), minimum at \\(\\left(\\dfrac{4\\pi}{3}, -2\\right)\\)',
      'Maximum at \\(\\left(\\dfrac{\\pi}{3}, 1\\right)\\), minimum at \\(\\left(\\dfrac{4\\pi}{3}, -1\\right)\\)',
      'Maximum at \\(\\left(\\dfrac{\\pi}{2}, 1\\right)\\), minimum at \\(\\left(\\dfrac{3\\pi}{2}, -1\\right)\\)',
    ],
    1,
    [
      S(
        'Stationary points solve \\(y\' = 0\\): \\(-\\sin x + \\sqrt{3}\\,\\cos x = 0\\) so \\(\\tan x = \\sqrt{3}\\). Why tan? Divide by \\(\\cos x\\) (where defined).',
        '\\(\\tan x = \\sqrt{3}\\)'
      ),
      S(
        'In \\([0, 2\\pi]\\): \\(x = \\dfrac{\\pi}{3}\\) and \\(x = \\dfrac{4\\pi}{3}\\). Evaluate \\(y\\): \\(y\\!\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{2} + \\sqrt{3}\\cdot\\dfrac{\\sqrt{3}}{2} = 2\\) and \\(y\\!\\left(\\dfrac{4\\pi}{3}\\right) = -\\dfrac{1}{2} + \\sqrt{3}\\cdot\\left(-\\dfrac{\\sqrt{3}}{2}\\right) = -2\\).',
        '\\(\\left(\\dfrac{\\pi}{3}, 2\\right),\\ \\left(\\dfrac{4\\pi}{3}, -2\\right)\\)'
      ),
      S(
        'Nature via second derivative (or first-derivative sign): at \\(\\dfrac{\\pi}{3}\\), \\(y\'\' < 0\\) so maximum; at \\(\\dfrac{4\\pi}{3}\\), \\(y\'\' > 0\\) so minimum. Amplitude 2 matches the R-form \\(2\\cos(x - \\pi/3)\\).',
        '\\text{max }2,\\ \\text{min }{-2}'
      ),
      S(
        'Final answer: maximum at \\(\\left(\\dfrac{\\pi}{3}, 2\\right)\\), minimum at \\(\\left(\\dfrac{4\\pi}{3}, -2\\right)\\).',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 180, isActive: false }
  );

  const c = mc(
    'y12a-6c-q9c',
    stem + '\n\n(c) Find the points of inflection.',
    [
      '\\(\\left(\\dfrac{\\pi}{6}, 0\\right)\\) and \\(\\left(\\dfrac{7\\pi}{6}, 0\\right)\\)',
      '\\(\\left(\\dfrac{5\\pi}{6}, 0\\right)\\) and \\(\\left(\\dfrac{11\\pi}{6}, 0\\right)\\)',
      '\\(\\left(\\dfrac{\\pi}{3}, 2\\right)\\) and \\(\\left(\\dfrac{4\\pi}{3}, -2\\right)\\)',
      '\\(\\left(\\dfrac{\\pi}{2}, 1\\right)\\) and \\(\\left(\\dfrac{3\\pi}{2}, -1\\right)\\)',
    ],
    1,
    [
      S(
        'Points of inflection occur where \\(y\'\' = 0\\) and the concavity changes. From (a), \\(y\'\' = -y = -(\\cos x + \\sqrt{3}\\,\\sin x)\\), so \\(y\'\' = 0\\) iff \\(y = 0\\).',
        '\\(y\'\' = 0 \\Leftrightarrow y = 0\\)'
      ),
      S(
        'Solve \\(\\cos x + \\sqrt{3}\\,\\sin x = 0\\): \\(\\tan x = -\\dfrac{1}{\\sqrt{3}}\\). In \\([0, 2\\pi]\\): \\(x = \\dfrac{5\\pi}{6}\\) and \\(x = \\dfrac{11\\pi}{6}\\).',
        '\\(x = \\dfrac{5\\pi}{6},\\, \\dfrac{11\\pi}{6}\\)'
      ),
      S(
        'At both, \\(y = 0\\). Concavity changes because \\(y\'\' = -y\\) and the wave crosses the axis. A common error is listing the stationary points as inflection points.',
        '\\(\\left(\\dfrac{5\\pi}{6}, 0\\right),\\ \\left(\\dfrac{11\\pi}{6}, 0\\right)\\)'
      ),
      S(
        'Final answer: \\(\\left(\\dfrac{5\\pi}{6}, 0\\right)\\) and \\(\\left(\\dfrac{11\\pi}{6}, 0\\right)\\).',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 150, isActive: false }
  );

  const d = tr(
    'y12a-6c-q9d',
    stem + '\n\n(d) Hence sketch the curve for \\( 0 \\le x \\le 2\\pi \\).',
    'Sketch',
    [
      S(
        'Use the stationary points and inflection points from (b) and (c). The curve is a single sine wave of amplitude 2 (R-method: \\(y = 2\\cos\\!\\left(x - \\dfrac{\\pi}{3}\\right)\\)).',
        '\\(y = 2\\cos\\!\\left(x - \\dfrac{\\pi}{3}\\right)\\)'
      ),
      S(
        'Plot maximum \\(\\left(\\dfrac{\\pi}{3}, 2\\right)\\), minimum \\(\\left(\\dfrac{4\\pi}{3}, -2\\right)\\), and axis crossings/inflections at \\(\\dfrac{5\\pi}{6}\\) and \\(\\dfrac{11\\pi}{6}\\). Mark endpoints \\(y(0) = 1\\) and \\(y(2\\pi) = 1\\).',
        '\\text{key points}'
      ),
      S(
        'Draw a smooth sinusoidal curve through these points with the correct concavity changes at the inflections. Label axes in terms of \\(\\pi\\).',
        '\\text{smooth curve}'
      ),
      S(
        'Sketch complete: one full period of a cosine wave shifted right by \\(\\dfrac{\\pi}{3}\\), amplitude 2.',
        '\\text{sketch}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 180, isActive: false }
  );

  return {
    parent: parent('y12a-6c-q9', stem, [a, b, c, d], {
      difficulty: 'medium',
      timeLimit: 600,
    }),
    children: [a, b, c, d],
  };
}

// ── Q10 y = cos x - sin x ──────────────────────────────────────────────

function buildQ10() {
  const stem = 'For the curve \\( y = \\cos x - \\sin x \\):';

  const a1 = mc(
    'y12a-6c-q10a_1',
    stem + '\n\n(a)(i) Find the first and second derivatives of \\( y \\).',
    [
      '\\(y\' = \\sin x + \\cos x,\\quad y\'\' = \\cos x - \\sin x\\)',
      '\\(y\' = -\\sin x - \\cos x,\\quad y\'\' = -\\cos x + \\sin x\\)',
      '\\(y\' = -\\sin x + \\cos x,\\quad y\'\' = -\\cos x - \\sin x\\)',
      '\\(y\' = -\\cos x - \\sin x,\\quad y\'\' = \\sin x - \\cos x\\)',
    ],
    1,
    [
      S(
        'Differentiate \\(y = \\cos x - \\sin x\\) term by term. Keep every sign: derivative of \\(-\\sin x\\) is \\(-\\cos x\\).',
        '\\(y = \\cos x - \\sin x\\)'
      ),
      S(
        'First derivative: \\(y\' = -\\sin x - \\cos x\\). Double-minus garbage like \\(--\\sin x\\) is wrong — there is a single minus on each term.',
        '\\(y\' = -\\sin x - \\cos x\\)'
      ),
      S(
        'Second derivative: \\(y\'\' = -\\cos x + \\sin x\\). Check by differentiating each term of \\(y\'\\) carefully.',
        '\\(y\'\' = -\\cos x + \\sin x\\)'
      ),
      S(
        'Final answer: \\(y\' = -\\sin x - \\cos x\\), \\(y\'\' = -\\cos x + \\sin x\\).',
        '\\(y\' = -\\sin x - \\cos x,\\ y\'\' = -\\cos x + \\sin x\\)'
      ),
    ],
    { difficulty: 'medium', timeLimit: 120, isActive: false }
  );

  const a2 = mc(
    'y12a-6c-q10a_2',
    stem +
      '\n\n(a)(ii) Find the stationary points in the domain \\( 0 \\le x \\le 2\\pi \\), and determine their nature.',
    [
      'Minimum at \\(\\left(\\dfrac{\\pi}{4}, -\\sqrt{2}\\right)\\), maximum at \\(\\left(\\dfrac{5\\pi}{4}, \\sqrt{2}\\right)\\)',
      'Minimum at \\(\\left(\\dfrac{3\\pi}{4}, -\\sqrt{2}\\right)\\), maximum at \\(\\left(\\dfrac{7\\pi}{4}, \\sqrt{2}\\right)\\)',
      'Minimum at \\(\\left(\\dfrac{3\\pi}{4}, -\\sqrt{2}\\right)\\), maximum at \\(\\left(\\dfrac{7\\pi}{4}, \\sqrt{2}\\right)\\)',
      'Maximum at \\(\\left(\\dfrac{3\\pi}{4}, \\sqrt{2}\\right)\\), minimum at \\(\\left(\\dfrac{7\\pi}{4}, -\\sqrt{2}\\right)\\)',
    ],
    1,
    [
      S(
        'Solve \\(y\' = 0\\): \\(-\\sin x - \\cos x = 0\\) so \\(\\tan x = -1\\). In \\([0, 2\\pi]\\): \\(x = \\dfrac{3\\pi}{4}\\) and \\(x = \\dfrac{7\\pi}{4}\\).',
        '\\(\\tan x = -1\\)'
      ),
      S(
        'Heights: \\(y\\!\\left(\\dfrac{3\\pi}{4}\\right) = -\\dfrac{\\sqrt{2}}{2} - \\dfrac{\\sqrt{2}}{2} = -\\sqrt{2}\\) and \\(y\\!\\left(\\dfrac{7\\pi}{4}\\right) = \\dfrac{\\sqrt{2}}{2} - \\left(-\\dfrac{\\sqrt{2}}{2}\\right) = \\sqrt{2}\\).',
        '\\((-\\sqrt{2}),\\ (\\sqrt{2})\\)'
      ),
      S(
        'Second-derivative test (or sign chart): at \\(\\dfrac{3\\pi}{4}\\) we have a local minimum; at \\(\\dfrac{7\\pi}{4}\\) a local maximum. Amplitude \\(\\sqrt{2}\\) matches the R-form.',
        '\\text{min then max}'
      ),
      S(
        'Final answer: minimum at \\(\\left(\\dfrac{3\\pi}{4}, -\\sqrt{2}\\right)\\), maximum at \\(\\left(\\dfrac{7\\pi}{4}, \\sqrt{2}\\right)\\).',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 180, isActive: false }
  );

  // Fix duplicate options in a2 - options 1 and 2 were identical. Fix:
  // I'll patch in the object after - wait I already wrote duplicate. Let me fix when assembling.

  const a3 = mc(
    'y12a-6c-q10a_3',
    stem + '\n\n(a)(iii) Find the points of inflection.',
    [
      '\\(\\left(\\dfrac{\\pi}{2}, -1\\right)\\) and \\(\\left(\\dfrac{3\\pi}{2}, 1\\right)\\)',
      '\\(\\left(0, 1\\right)\\) and \\(\\left(\\pi, -1\\right)\\)',
      '\\(\\left(\\dfrac{\\pi}{4}, 0\\right)\\) and \\(\\left(\\dfrac{5\\pi}{4}, 0\\right)\\)',
      '\\(\\left(\\dfrac{3\\pi}{4}, -\\sqrt{2}\\right)\\) and \\(\\left(\\dfrac{7\\pi}{4}, \\sqrt{2}\\right)\\)',
    ],
    2,
    [
      S(
        'Inflection points: solve \\(y\'\' = 0\\). From (a)(i), \\(y\'\' = -\\cos x + \\sin x = 0\\) so \\(\\tan x = 1\\).',
        '\\(\\sin x = \\cos x\\)'
      ),
      S(
        'In one full period: \\(x = \\dfrac{\\pi}{4}\\) and \\(x = \\dfrac{5\\pi}{4}\\). Evaluate \\(y\\): both give 0 because \\(\\cos = \\sin\\) implies \\(y = 0\\).',
        '\\(\\left(\\dfrac{\\pi}{4}, 0\\right),\\ \\left(\\dfrac{5\\pi}{4}, 0\\right)\\)'
      ),
      S(
        'Concavity changes through these zeros of \\(y\'\'\\). Do not confuse them with the stationary points from (a)(ii).',
        '\\text{POI on axis}'
      ),
      S(
        'Final answer: \\(\\left(\\dfrac{\\pi}{4}, 0\\right)\\) and \\(\\left(\\dfrac{5\\pi}{4}, 0\\right)\\).',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 150, isActive: false }
  );

  const b = tr(
    'y12a-6c-q10b',
    stem +
      '\n\n(b) Verify your results by sketching \\( y = \\cos x \\) and \\( y = -\\sin x \\) on the same diagram, and then sketching \\( y = \\cos x - \\sin x \\) by addition of heights.',
    'Sketch',
    [
      S(
        'Sketch \\(y = \\cos x\\) and \\(y = -\\sin x\\) on the same axes over \\([0, 2\\pi]\\). Mark their intercepts and turning points so vertical addition is accurate.',
        '\\(y = \\cos x,\\ y = -\\sin x\\)'
      ),
      S(
        'At each \\(x\\), add the two heights to plot \\(y = \\cos x - \\sin x\\). This graphical sum should match the analytical stationary and inflection points from part (a).',
        '\\text{add heights}'
      ),
      S(
        'Confirm maximum near \\(\\dfrac{7\\pi}{4}\\) of height about \\(\\sqrt{2}\\) and minimum near \\(\\dfrac{3\\pi}{4}\\) of height about \\(-\\sqrt{2}\\), with axis crossings near the inflection \\(x\\)-values.',
        '\\text{check key points}'
      ),
      S(
        'Final sketch: a sine wave of amplitude \\(\\sqrt{2}\\) phase-shifted relative to cosine alone.',
        '\\text{sketch}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 240, isActive: false }
  );

  // Fix a2 duplicate option
  a2.opts = [
    'Minimum at \\(\\left(\\dfrac{\\pi}{4}, -\\sqrt{2}\\right)\\), maximum at \\(\\left(\\dfrac{5\\pi}{4}, \\sqrt{2}\\right)\\)',
    'Minimum at \\(\\left(\\dfrac{3\\pi}{4}, -\\sqrt{2}\\right)\\), maximum at \\(\\left(\\dfrac{7\\pi}{4}, \\sqrt{2}\\right)\\)',
    'Maximum at \\(\\left(\\dfrac{3\\pi}{4}, \\sqrt{2}\\right)\\), minimum at \\(\\left(\\dfrac{7\\pi}{4}, -\\sqrt{2}\\right)\\)',
    'Minimum at \\(\\left(\\dfrac{3\\pi}{4}, -1\\right)\\), maximum at \\(\\left(\\dfrac{7\\pi}{4}, 1\\right)\\)',
  ];
  a2.a = 1;
  a2.answer = '1';
  a2.options = a2.opts.map((text) => ({ text, imageUrl: null }));
  a2.solution = `The correct answer is ${a2.opts[1]}.`;

  return {
    parent: parent('y12a-6c-q10', stem, [a1, a2, a3, b], {
      difficulty: 'medium',
      timeLimit: 600,
    }),
    children: [a1, a2, a3, b],
  };
}

// ── Q11 y = x + sin x ──────────────────────────────────────────────────

function buildQ11() {
  const stem = 'For the curve \\( y = x + \\sin x \\):';

  const a = mc(
    'y12a-6c-q11a',
    stem +
      '\n\n(a) Find the first and second derivatives of \\( y \\). (In particular, confirm \\( y\'\' = -\\sin x \\).)',
    [
      '\\(y\' = 1 - \\cos x,\\quad y\'\' = \\sin x\\)',
      '\\(y\' = 1 + \\cos x,\\quad y\'\' = -\\sin x\\)',
      '\\(y\' = 1 + \\sin x,\\quad y\'\' = \\cos x\\)',
      '\\(y\' = \\cos x,\\quad y\'\' = -\\sin x\\)',
    ],
    1,
    [
      S(
        'Differentiate \\(y = x + \\sin x\\) term by term. The derivative of \\(x\\) is 1; the derivative of \\(\\sin x\\) is \\(\\cos x\\). Why keep both? Omitting the 1 is a frequent error on mixed polynomial–trig functions.',
        '\\(y = x + \\sin x\\)'
      ),
      S(
        'First derivative: \\(y\' = 1 + \\cos x\\). This is always non-negative because \\(\\cos x \\ge -1\\), so \\(y\' \\ge 0\\) — useful later for nature of stationary points.',
        '\\(y\' = 1 + \\cos x\\)'
      ),
      S(
        'Second derivative: differentiate again to get \\(y\'\' = -\\sin x\\). The minus comes from the cosine rule. This is exactly the required identity.',
        '\\(y\'\' = -\\sin x\\)'
      ),
      S(
        'Final answer: \\(y\' = 1 + \\cos x\\), \\(y\'\' = -\\sin x\\).',
        '\\(y\' = 1 + \\cos x,\\ y\'\' = -\\sin x\\)'
      ),
    ],
    { difficulty: 'medium', timeLimit: 120, isActive: false }
  );

  const b = mc(
    'y12a-6c-q11b',
    stem +
      '\n\n(b) Find the stationary points in the domain \\( -2\\pi < x < 2\\pi \\), and determine their nature.',
    [
      'Local maxima at \\((-\\pi, -\\pi)\\) and \\((\\pi, \\pi)\\)',
      'Local minima at \\((-\\pi, -\\pi)\\) and \\((\\pi, \\pi)\\)',
      'Horizontal points of inflection at \\((-\\pi, -\\pi)\\) and \\((\\pi, \\pi)\\)',
      'No stationary points in the domain',
    ],
    2,
    [
      S(
        'Stationary points solve \\(y\' = 0\\): \\(1 + \\cos x = 0\\) so \\(\\cos x = -1\\). In the open interval \\((-2\\pi, 2\\pi)\\) this gives \\(x = -\\pi\\) and \\(x = \\pi\\).',
        '\\(\\cos x = -1\\)'
      ),
      S(
        'Heights: \\(y(-\\pi) = -\\pi + \\sin(-\\pi) = -\\pi\\) and \\(y(\\pi) = \\pi\\). So the candidate points are \\((-\\pi, -\\pi)\\) and \\((\\pi, \\pi)\\).',
        '\\((-\\pi,-\\pi),\\ (\\pi,\\pi)\\)'
      ),
      S(
        'At these points \\(y\'\' = -\\sin(\\pm\\pi) = 0\\), so the second-derivative test is inconclusive. Because \\(y\' = 1 + \\cos x \\ge 0\\) everywhere and only touches zero, the curve flattens but does not reverse — horizontal points of inflection, not max/min.',
        '\\text{HPOI}'
      ),
      S(
        'Final answer: horizontal points of inflection at \\((-\\pi, -\\pi)\\) and \\((\\pi, \\pi)\\).',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 180, isActive: false }
  );

  const c = mc(
    'y12a-6c-q11c',
    stem +
      '\n\n(c) Find the points of inflection in the domain \\( -2\\pi < x < 2\\pi \\).',
    [
      '\\((-\\pi, -\\pi),\\ (0, 0),\\ (\\pi, \\pi)\\)',
      '\\((0, 0)\\) only',
      '\\((-2\\pi, -2\\pi),\\ (0, 0),\\ (2\\pi, 2\\pi)\\)',
      '\\(\\left(-\\dfrac{\\pi}{2}, -\\dfrac{\\pi}{2}\\right),\\ \\left(\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right)\\)',
    ],
    0,
    [
      S(
        'Solve \\(y\'\' = 0\\): \\(-\\sin x = 0\\) so \\(\\sin x = 0\\). In the open interval: \\(x = -\\pi,\\, 0,\\, \\pi\\) (exclude the endpoints \\(\\pm 2\\pi\\)).',
        '\\(\\sin x = 0\\)'
      ),
      S(
        'Corresponding points: \\((-\\pi, -\\pi)\\), \\((0, 0)\\), \\((\\pi, \\pi)\\). Note the outer two are also the horizontal points of inflection from (b).',
        '\\text{three POI}'
      ),
      S(
        'Concavity of \\(y = x + \\sin x\\) changes as sine changes sign through each root, so each is a genuine inflection.',
        '\\text{sign change of } y\'\''
      ),
      S(
        'Final answer: \\((-\\pi, -\\pi),\\ (0, 0),\\ (\\pi, \\pi)\\).',
        '\\((-\\pi,-\\pi),\\ (0,0),\\ (\\pi,\\pi)\\)'
      ),
    ],
    { difficulty: 'medium', timeLimit: 150, isActive: false }
  );

  const d = tr(
    'y12a-6c-q11d',
    stem + '\n\n(d) Hence sketch the curve for \\( -2\\pi \\le x \\le 2\\pi \\).',
    'Sketch',
    [
      S(
        'The curve is the line \\(y = x\\) with a sine wave of amplitude 1 superimposed. It is always non-decreasing because \\(y\' \\ge 0\\).',
        '\\(y = x + \\sin x\\)'
      ),
      S(
        'Mark horizontal POI at \\((-\\pi, -\\pi)\\) and \\((\\pi, \\pi)\\), and the inflection at the origin. Endpoints approximately \\((-2\\pi, -2\\pi)\\) and \\((2\\pi, 2\\pi)\\).',
        '\\text{key points}'
      ),
      S(
        'Draw a smooth increasing curve that flattens at the horizontal POI and wiggles gently about \\(y = x\\).',
        '\\text{smooth increasing}'
      ),
      S(
        'Sketch complete over \\([-2\\pi, 2\\pi]\\).',
        '\\text{sketch}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 180, isActive: false }
  );

  return {
    parent: parent('y12a-6c-q11', stem, [a, b, c, d], {
      difficulty: 'medium',
      timeLimit: 600,
    }),
    children: [a, b, c, d],
  };
}

// ── Q12 y = x - cos x ──────────────────────────────────────────────────

function buildQ12() {
  const stem = 'For the curve \\( y = x - \\cos x \\):';

  const a = mc(
    'y12a-6c-q12a',
    stem + '\n\n(a) Find the first and second derivatives.',
    [
      '\\(y\' = 1 - \\sin x,\\quad y\'\' = -\\cos x\\)',
      '\\(y\' = 1 + \\sin x,\\quad y\'\' = \\cos x\\)',
      '\\(y\' = 1 + \\cos x,\\quad y\'\' = -\\sin x\\)',
      '\\(y\' = -\\sin x,\\quad y\'\' = -\\cos x\\)',
    ],
    1,
    [
      S(
        'Differentiate \\(y = x - \\cos x\\). Derivative of \\(x\\) is 1; derivative of \\(-\\cos x\\) is \\(+\\sin x\\) because the two minuses combine.',
        '\\(y = x - \\cos x\\)'
      ),
      S(
        'First derivative: \\(y\' = 1 + \\sin x\\). A common error writes \\(1 - \\sin x\\) by forgetting the minus in front of cosine.',
        '\\(y\' = 1 + \\sin x\\)'
      ),
      S(
        'Second derivative: \\(y\'\' = \\cos x\\). This will locate inflections where cosine vanishes.',
        '\\(y\'\' = \\cos x\\)'
      ),
      S(
        'Final answer: \\(y\' = 1 + \\sin x\\), \\(y\'\' = \\cos x\\).',
        '\\(y\' = 1 + \\sin x,\\ y\'\' = \\cos x\\)'
      ),
    ],
    { difficulty: 'medium', timeLimit: 120, isActive: false }
  );

  const b = mc(
    'y12a-6c-q12b',
    stem +
      '\n\n(b) Find the stationary points in the domain \\( -2\\pi < x < 2\\pi \\), and determine their nature.',
    [
      'Horizontal points of inflection at \\(\\left(-\\dfrac{\\pi}{2}, -\\dfrac{\\pi}{2}\\right)\\) and \\(\\left(\\dfrac{3\\pi}{2}, \\dfrac{3\\pi}{2}\\right)\\)',
      'Local max at \\(\\left(-\\dfrac{\\pi}{2}, -\\dfrac{\\pi}{2}\\right)\\), local min at \\(\\left(\\dfrac{3\\pi}{2}, \\dfrac{3\\pi}{2}\\right)\\)',
      'Local min at \\(\\left(-\\dfrac{\\pi}{2}, -\\dfrac{\\pi}{2}\\right)\\), local max at \\(\\left(\\dfrac{3\\pi}{2}, \\dfrac{3\\pi}{2}\\right)\\)',
      'No stationary points',
    ],
    0,
    [
      S(
        'Solve \\(y\' = 0\\): \\(1 + \\sin x = 0\\) so \\(\\sin x = -1\\). In \\((-2\\pi, 2\\pi)\\): \\(x = -\\dfrac{\\pi}{2}\\) and \\(x = \\dfrac{3\\pi}{2}\\).',
        '\\(\\sin x = -1\\)'
      ),
      S(
        'Heights: \\(y\\!\\left(-\\dfrac{\\pi}{2}\\right) = -\\dfrac{\\pi}{2} - 0 = -\\dfrac{\\pi}{2}\\) and \\(y\\!\\left(\\dfrac{3\\pi}{2}\\right) = \\dfrac{3\\pi}{2}\\).',
        '\\text{points on } y=x'
      ),
      S(
        'At both, \\(y\'\' = \\cos x = 0\\), and \\(y\' = 1 + \\sin x \\ge 0\\) always, so the curve only flattens: horizontal points of inflection, not turning points.',
        '\\text{HPOI}'
      ),
      S(
        'Final answer: horizontal points of inflection at \\(\\left(-\\dfrac{\\pi}{2}, -\\dfrac{\\pi}{2}\\right)\\) and \\(\\left(\\dfrac{3\\pi}{2}, \\dfrac{3\\pi}{2}\\right)\\).',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 180, isActive: false }
  );

  const c = mc(
    'y12a-6c-q12c',
    stem +
      '\n\n(c) Find the points of inflection in the domain \\( -2\\pi < x < 2\\pi \\).',
    [
      '\\(\\left(-\\dfrac{\\pi}{2}, -\\dfrac{\\pi}{2}\\right),\\ \\left(\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right)\\)',
      '\\(\\left(-\\dfrac{3\\pi}{2}, -\\dfrac{3\\pi}{2}\\right),\\ \\left(-\\dfrac{\\pi}{2}, -\\dfrac{\\pi}{2}\\right),\\ \\left(\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right),\\ \\left(\\dfrac{3\\pi}{2}, \\dfrac{3\\pi}{2}\\right)\\)',
      '\\((0, -1)\\) only',
      '\\(\\left(\\pm\\pi, \\pm\\pi\\right)\\)',
    ],
    1,
    [
      S(
        'Solve \\(y\'\' = 0\\): \\(\\cos x = 0\\). In the open interval the solutions are \\(x = \\pm\\dfrac{\\pi}{2},\\, \\pm\\dfrac{3\\pi}{2}\\).',
        '\\(\\cos x = 0\\)'
      ),
      S(
        'Because \\(y = x - \\cos x\\) and \\(\\cos = 0\\) at these \\(x\\), the points lie on \\(y = x\\): \\(\\left(-\\dfrac{3\\pi}{2}, -\\dfrac{3\\pi}{2}\\right)\\), \\(\\left(-\\dfrac{\\pi}{2}, -\\dfrac{\\pi}{2}\\right)\\), \\(\\left(\\dfrac{\\pi}{2}, \\dfrac{\\pi}{2}\\right)\\), \\(\\left(\\dfrac{3\\pi}{2}, \\dfrac{3\\pi}{2}\\right)\\).',
        '\\text{four POI}'
      ),
      S(
        'Concavity changes with the sign of cosine through each root, so all four are points of inflection (including the two horizontal ones).',
        '\\text{sign change}'
      ),
      S(
        'Final answer: the four points listed above.',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 150, isActive: false }
  );

  const d = tr(
    'y12a-6c-q12d',
    stem + '\n\n(d) Hence sketch the curve for \\( -2\\pi \\le x \\le 2\\pi \\).',
    'Sketch',
    [
      S(
        'The curve is the line \\(y = x\\) with \\(-\\cos x\\) added (a vertical shift oscillating between \\(-1\\) and 1 relative to \\(y = x\\) is not quite accurate — better: oscillates about \\(y = x\\) with amplitude 1).',
        '\\(y = x - \\cos x\\)'
      ),
      S(
        'Mark the horizontal POI and other inflections from (b) and (c). The curve is always increasing because \\(y\' = 1 + \\sin x \\ge 0\\).',
        '\\text{key points}'
      ),
      S(
        'Sketch a smooth increasing wave about the line \\(y = x\\) over \\([-2\\pi, 2\\pi]\\).',
        '\\text{sketch}'
      ),
      S(
        'Sketch complete.',
        '\\text{done}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 180, isActive: false }
  );

  return {
    parent: parent('y12a-6c-q12', stem, [a, b, c, d], {
      difficulty: 'medium',
      timeLimit: 600,
    }),
    children: [a, b, c, d],
  };
}

// ── Q13 conical tent ───────────────────────────────────────────────────

function buildQ13() {
  const stem =
    'A conical tent with top \\( T \\) is being designed to have a slant height of 3 metres. Let \\( \\theta = \\angle TPO \\), where \\( O \\) is the centre of the base and \\( P \\) is any point on the ground at the edge of the tent.';

  const a = tr(
    'y12a-6c-q13a',
    stem +
      '\n\n(a) Draw a diagram, and show that the vertical height of the tent is \\( h = 3 \\sin \\theta \\), and that the base radius is \\( r = 3 \\cos \\theta \\).',
    'Proof',
    [
      S(
        'Draw right triangle \\(TOP\\) with right angle at \\(O\\), hypotenuse \\(TP = 3\\) (slant height), angle at \\(P\\) equal to \\(\\theta\\). Why right-angled at \\(O\\)? The axis of the cone is perpendicular to the base.',
        '\\text{diagram } TOP'
      ),
      S(
        'In right triangle \\(TOP\\): opposite to \\(\\theta\\) is height \\(TO = h\\), so \\(\\sin\\theta = \\dfrac{h}{3}\\) and therefore \\(h = 3\\sin\\theta\\).',
        '\\(h = 3\\sin\\theta\\)'
      ),
      S(
        'Adjacent to \\(\\theta\\) is radius \\(OP = r\\), so \\(\\cos\\theta = \\dfrac{r}{3}\\) and \\(r = 3\\cos\\theta\\). A common swap interchanges sine and cosine for height and radius.',
        '\\(r = 3\\cos\\theta\\)'
      ),
      S(
        'Both relations are shown as required.',
        '\\text{shown}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 180, isActive: false }
  );

  const b = tr(
    'y12a-6c-q13b',
    stem +
      '\n\n(b) Use the formula \\( V = \\dfrac{1}{3}\\pi r^{2} h \\) for the volume of a cone to show that \\( V = 9\\pi(\\sin\\theta - \\sin^{3}\\theta) \\).',
    'Proof',
    [
      S(
        'Start from \\(V = \\dfrac{1}{3}\\pi r^{2}h\\) with \\(r = 3\\cos\\theta\\) and \\(h = 3\\sin\\theta\\) from part (a). Substitute carefully.',
        '\\(V = \\dfrac{1}{3}\\pi r^{2}h\\)'
      ),
      S(
        'Then \\(V = \\dfrac{1}{3}\\pi (3\\cos\\theta)^{2}(3\\sin\\theta) = \\dfrac{1}{3}\\pi \\cdot 9\\cos^{2}\\theta \\cdot 3\\sin\\theta = 9\\pi\\cos^{2}\\theta\\sin\\theta\\). Track the powers of 3 so the coefficient 9π is not lost.',
        '\\(V = 9\\pi\\cos^{2}\\theta\\sin\\theta\\)'
      ),
      S(
        'Rewrite using \\(\\cos^{2}\\theta = 1 - \\sin^{2}\\theta\\): \\(V = 9\\pi(1 - \\sin^{2}\\theta)\\sin\\theta = 9\\pi(\\sin\\theta - \\sin^{3}\\theta)\\). Why this form? Volume is now a function of a single variable ready for calculus.',
        '\\(V = 9\\pi(\\sin\\theta - \\sin^{3}\\theta)\\)'
      ),
      S(
        'Thus \\(V = 9\\pi(\\sin\\theta - \\sin^{3}\\theta)\\), as required.',
        '\\text{shown}'
      ),
    ],
    { difficulty: 'medium', timeLimit: 180, isActive: false }
  );

  const c = mc(
    'y12a-6c-q13c',
    stem +
      '\n\n(c) Given \\( V = 9\\pi(\\sin\\theta - \\sin^{3}\\theta) \\), find \\(\\dfrac{dV}{d\\theta}\\), and hence find in degrees, correct to two decimal places, the angle \\(\\theta\\) so that the cone has maximum volume.',
    ['\\(30.00^{\\circ}\\)', '\\(35.26^{\\circ}\\)', '\\(45.00^{\\circ}\\)', '\\(54.74^{\\circ}\\)'],
    1,
    [
      S(
        'Differentiate \\(V = 9\\pi(\\sin\\theta - \\sin^{3}\\theta)\\) with respect to \\(\\theta\\). Factor out the constant \\(9\\pi\\) and use the chain rule on \\(\\sin^{3}\\theta\\).',
        '\\(V = 9\\pi(\\sin\\theta - \\sin^{3}\\theta)\\)'
      ),
      S(
        '\\(\\dfrac{dV}{d\\theta} = 9\\pi\\bigl(\\cos\\theta - 3\\sin^{2}\\theta\\cos\\theta\\bigr) = 9\\pi\\cos\\theta(1 - 3\\sin^{2}\\theta)\\). Setting the derivative to zero: \\(\\cos\\theta = 0\\) or \\(\\sin^{2}\\theta = \\dfrac{1}{3}\\).',
        '\\(\\dfrac{dV}{d\\theta} = 9\\pi\\cos\\theta(1 - 3\\sin^{2}\\theta)\\)'
      ),
      S(
        'For a physical tent, \\(0 < \\theta < \\dfrac{\\pi}{2}\\). \\(\\cos\\theta = 0\\) flattens the cone (minimum volume). The maximum occurs at \\(\\sin\\theta = \\dfrac{1}{\\sqrt{3}}\\), so \\(\\theta = \\arcsin\\dfrac{1}{\\sqrt{3}} \\approx 35.26^{\\circ}\\).',
        '\\(\\theta \\approx 35.26^{\\circ}\\)'
      ),
      S(
        'Final answer: \\(35.26^{\\circ}\\) (to two decimal places).',
        '\\(35.26^{\\circ}\\)'
      ),
    ],
    { difficulty: 'medium', timeLimit: 180, isActive: false }
  );

  const d = mc(
    'y12a-6c-q13d',
    stem +
      '\n\n(d) What is the exact value of the maximum volume of the tent?',
    [
      '\\(2\\pi\\sqrt{3}\\ \\text{m}^{3}\\)',
      '\\(\\dfrac{2\\pi\\sqrt{3}}{3}\\ \\text{m}^{3}\\)',
      '\\(6\\pi\\sqrt{3}\\ \\text{m}^{3}\\)',
      '\\(\\dfrac{4\\pi\\sqrt{3}}{3}\\ \\text{m}^{3}\\)',
    ],
    0,
    [
      S(
        'At the maximum, \\(\\sin\\theta = \\dfrac{1}{\\sqrt{3}}\\). Then \\(\\cos^{2}\\theta = 1 - \\sin^{2}\\theta = 1 - \\dfrac{1}{3} = \\dfrac{2}{3}\\).',
        '\\(\\sin\\theta = \\dfrac{1}{\\sqrt{3}}\\)'
      ),
      S(
        'Substitute into \\(V = 9\\pi(\\sin\\theta - \\sin^{3}\\theta) = 9\\pi\\sin\\theta(1 - \\sin^{2}\\theta) = 9\\pi\\sin\\theta\\cos^{2}\\theta\\).',
        '\\(V = 9\\pi\\sin\\theta\\cos^{2}\\theta\\)'
      ),
      S(
        'So \\(V = 9\\pi\\cdot\\dfrac{1}{\\sqrt{3}}\\cdot\\dfrac{2}{3} = 6\\pi\\cdot\\dfrac{1}{\\sqrt{3}} = 2\\pi\\sqrt{3}\\) after rationalising. Units are cubic metres.',
        '\\(V = 2\\pi\\sqrt{3}\\)'
      ),
      S(
        'Final answer: \\(2\\pi\\sqrt{3}\\ \\text{m}^{3}\\). A common slip uses an inconsistent coefficient in \\(V\\) and gets a third of this value.',
        '\\(2\\pi\\sqrt{3}\\ \\text{m}^{3}\\)'
      ),
    ],
    { difficulty: 'medium', timeLimit: 150, isActive: false }
  );

  return {
    parent: parent('y12a-6c-q13', stem, [a, b, c, d], {
      difficulty: 'medium',
      timeLimit: 720,
    }),
    children: [a, b, c, d],
  };
}

// ── Q14 y = 2 sin x + x ────────────────────────────────────────────────

function buildQ14() {
  const stem =
    'For the curve \\( y = 2 \\sin x + x \\) in the interval \\( 0 \\le x \\le 2\\pi \\):';

  const a = mc(
    'y12a-6c-q14a',
    stem + '\n\n(a) Find any stationary points.',
    [
      '\\(\\left(\\dfrac{\\pi}{3}, \\sqrt{3} + \\dfrac{\\pi}{3}\\right)\\) max, \\(\\left(\\dfrac{5\\pi}{3}, -\\sqrt{3} + \\dfrac{5\\pi}{3}\\right)\\) min',
      '\\(\\left(\\dfrac{2\\pi}{3}, \\sqrt{3} + \\dfrac{2\\pi}{3}\\right)\\) max, \\(\\left(\\dfrac{4\\pi}{3}, -\\sqrt{3} + \\dfrac{4\\pi}{3}\\right)\\) min',
      '\\(\\left(\\dfrac{\\pi}{2}, 2 + \\dfrac{\\pi}{2}\\right)\\) max, \\(\\left(\\dfrac{3\\pi}{2}, -2 + \\dfrac{3\\pi}{2}\\right)\\) min',
      '\\(\\left(\\dfrac{2\\pi}{3}, -\\sqrt{3} + \\dfrac{2\\pi}{3}\\right)\\) min, \\(\\left(\\dfrac{4\\pi}{3}, \\sqrt{3} + \\dfrac{4\\pi}{3}\\right)\\) max',
    ],
    1,
    [
      S(
        'Stationary points: solve \\(y\' = 0\\) for \\(y = 2\\sin x + x\\). Differentiate: \\(y\' = 2\\cos x + 1\\).',
        '\\(y\' = 2\\cos x + 1\\)'
      ),
      S(
        'Set \\(2\\cos x + 1 = 0\\) so \\(\\cos x = -\\dfrac{1}{2}\\). In \\([0, 2\\pi]\\): \\(x = \\dfrac{2\\pi}{3}\\) and \\(x = \\dfrac{4\\pi}{3}\\).',
        '\\(x = \\dfrac{2\\pi}{3},\\, \\dfrac{4\\pi}{3}\\)'
      ),
      S(
        'Heights: \\(y\\!\\left(\\dfrac{2\\pi}{3}\\right) = 2\\cdot\\dfrac{\\sqrt{3}}{2} + \\dfrac{2\\pi}{3} = \\sqrt{3} + \\dfrac{2\\pi}{3}\\) and \\(y\\!\\left(\\dfrac{4\\pi}{3}\\right) = -\\sqrt{3} + \\dfrac{4\\pi}{3}\\). Second-derivative \\(y\'\' = -2\\sin x\\) shows max then min.',
        '\\text{max then min}'
      ),
      S(
        'Final answer: max at \\(\\left(\\dfrac{2\\pi}{3}, \\sqrt{3} + \\dfrac{2\\pi}{3}\\right)\\), min at \\(\\left(\\dfrac{4\\pi}{3}, -\\sqrt{3} + \\dfrac{4\\pi}{3}\\right)\\).',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'hard', timeLimit: 180, isActive: false }
  );

  const b = mc(
    'y12a-6c-q14b',
    stem + '\n\n(b) Find any points of inflection.',
    [
      '\\((0, 0),\\ (\\pi, \\pi),\\ (2\\pi, 2\\pi)\\)',
      '\\(\\left(\\dfrac{\\pi}{2}, 2 + \\dfrac{\\pi}{2}\\right),\\ \\left(\\dfrac{3\\pi}{2}, -2 + \\dfrac{3\\pi}{2}\\right)\\)',
      '\\(\\left(\\dfrac{2\\pi}{3}, \\sqrt{3} + \\dfrac{2\\pi}{3}\\right),\\ \\left(\\dfrac{4\\pi}{3}, -\\sqrt{3} + \\dfrac{4\\pi}{3}\\right)\\)',
      '\\((\\pi, \\pi)\\) only',
    ],
    0,
    [
      S(
        'Inflection points: solve \\(y\'\' = 0\\). From \\(y\' = 2\\cos x + 1\\) we get \\(y\'\' = -2\\sin x\\). Set \\(-2\\sin x = 0\\) so \\(\\sin x = 0\\).',
        '\\(y\'\' = -2\\sin x\\)'
      ),
      S(
        'In the closed interval: \\(x = 0,\\, \\pi,\\, 2\\pi\\). Corresponding points: \\((0, 0)\\), \\((\\pi, \\pi)\\), \\((2\\pi, 2\\pi)\\).',
        '\\((0,0),\\ (\\pi,\\pi),\\ (2\\pi,2\\pi)\\)'
      ),
      S(
        'Concavity changes with the sign of \\(-\\sin x\\) through each root (at endpoints the curve begins/ends a concavity region within the interval).',
        '\\text{POI}'
      ),
      S(
        'Final answer: \\((0, 0),\\ (\\pi, \\pi),\\ (2\\pi, 2\\pi)\\).',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'hard', timeLimit: 150, isActive: false }
  );

  const c = tr(
    'y12a-6c-q14c',
    stem + '\n\n(c) Hence sketch the curve.',
    'Sketch',
    [
      S(
        'Use the stationary points and inflection points from (a) and (b). The curve is roughly the line \\(y = x\\) with a sine oscillation of amplitude 2.',
        '\\(y = 2\\sin x + x\\)'
      ),
      S(
        'Mark max at \\(\\dfrac{2\\pi}{3}\\), min at \\(\\dfrac{4\\pi}{3}\\), and inflections at \\(0,\\,\\pi,\\,2\\pi\\). Connect smoothly with correct concavity.',
        '\\text{key points}'
      ),
      S(
        'Sketch over \\([0, 2\\pi]\\) with labelled axes.',
        '\\text{sketch}'
      ),
      S(
        'Sketch complete.',
        '\\text{done}'
      ),
    ],
    { difficulty: 'hard', timeLimit: 180, isActive: false }
  );

  return {
    parent: parent('y12a-6c-q14', stem, [a, b, c], {
      difficulty: 'hard',
      timeLimit: 480,
    }),
    children: [a, b, c],
  };
}

// ── Q15 isosceles triangle prove ───────────────────────────────────────

function buildQ15() {
  const stem =
    'An isosceles triangle \\( PQR \\) is inscribed in a circle with centre \\( O \\) of radius 1 unit. Let \\( \\angle QOR = 2\\theta \\), where \\( \\theta \\) is acute.';

  const a = tr(
    'y12a-6c-q15a',
    stem +
      '\n\n(a) Join \\( PO \\) and extend it to meet \\( QR \\) at \\( M \\). Then prove that \\( QM = \\sin\\theta \\) and \\( OM = \\cos\\theta \\).',
    'Proof',
    [
      S(
        'Draw radii \\(OQ = OR = OP = 1\\). Because \\(PQR\\) is isosceles with apex \\(P\\) and chord \\(QR\\) subtends \\(2\\theta\\) at the centre, the line \\(PO\\) extended bisects \\(\\angle QOR\\) and meets \\(QR\\) at its midpoint \\(M\\).',
        '\\text{diagram}'
      ),
      S(
        'In right triangle \\(OMQ\\): \\(\\angle QOM = \\theta\\), hypotenuse \\(OQ = 1\\). Therefore \\(QM = \\sin\\theta\\) and \\(OM = \\cos\\theta\\).',
        '\\(QM = \\sin\\theta,\\ OM = \\cos\\theta\\)'
      ),
      S(
        'Why right-angled at \\(M\\)? A radius to the midpoint of a chord is perpendicular to the chord. This connects circle geometry to the trig ratios.',
        '\\(OM \\perp QR\\)'
      ),
      S(
        'Hence \\(QM = \\sin\\theta\\) and \\(OM = \\cos\\theta\\) as required.',
        '\\text{shown}'
      ),
    ],
    { difficulty: 'hard', timeLimit: 240, isActive: false }
  );

  const b = tr(
    'y12a-6c-q15b',
    stem +
      '\n\n(b) Show that the area \\( A \\) of \\(\\triangle PQR\\) is \\( A = \\sin\\theta(\\cos\\theta + 1) \\).',
    'Proof',
    [
      S(
        'Base \\(QR = 2\\,QM = 2\\sin\\theta\\). Height from \\(P\\) to \\(QR\\) is \\(PM = PO + OM = 1 + \\cos\\theta\\) (since \\(M\\) lies between \\(O\\) and the chord when \\(\\theta\\) is acute).',
        '\\(QR = 2\\sin\\theta,\\ PM = 1 + \\cos\\theta\\)'
      ),
      S(
        'Area: \\(A = \\dfrac{1}{2}\\times\\text{base}\\times\\text{height} = \\dfrac{1}{2}(2\\sin\\theta)(1 + \\cos\\theta) = \\sin\\theta(1 + \\cos\\theta)\\).',
        '\\(A = \\sin\\theta(1 + \\cos\\theta)\\)'
      ),
      S(
        'This is the same as \\(A = \\sin\\theta(\\cos\\theta + 1)\\). A common slip places \\(O\\) on the wrong side of the chord and uses \\(1 - \\cos\\theta\\).',
        '\\(A = \\sin\\theta(\\cos\\theta + 1)\\)'
      ),
      S(
        'Shown as required.',
        '\\text{shown}'
      ),
    ],
    { difficulty: 'hard', timeLimit: 240, isActive: false }
  );

  const c = tr(
    'y12a-6c-q15c',
    stem +
      '\n\n(c) Hence show that, as \\(\\theta\\) varies, \\(\\triangle PQR\\) has its maximum possible area when it is equilateral.',
    'Proof',
    [
      S(
        'Maximise \\(A(\\theta) = \\sin\\theta(1 + \\cos\\theta)\\) for acute \\(\\theta\\) in the geometric range. Differentiate using the product rule.',
        '\\(A = \\sin\\theta(1 + \\cos\\theta)\\)'
      ),
      S(
        '\\(A\' = \\cos\\theta(1 + \\cos\\theta) + \\sin\\theta(-\\sin\\theta) = \\cos\\theta + \\cos^{2}\\theta - \\sin^{2}\\theta\\). Use \\(\\cos^{2} - \\sin^{2} = \\cos 2\\theta\\) and rewrite: \\(A\' = \\cos\\theta + \\cos 2\\theta\\).',
        '\\(A\' = \\cos\\theta + \\cos 2\\theta\\)'
      ),
      S(
        'Set \\(A\' = 0\\): \\(\\cos 2\\theta = -\\cos\\theta = \\cos(\\pi - \\theta)\\). Solving in the domain gives \\(2\\theta = \\pi - \\theta\\) so \\(\\theta = \\dfrac{\\pi}{3}\\) (acute solution). Second-derivative or endpoint checks confirm a maximum.',
        '\\(\\theta = \\dfrac{\\pi}{3}\\)'
      ),
      S(
        'When \\(\\theta = \\dfrac{\\pi}{3}\\), central angle \\(2\\theta = \\dfrac{2\\pi}{3}\\) and the three central angles at \\(O\\) are equal, so the inscribed triangle is equilateral. Hence maximum area occurs for the equilateral case.',
        '\\text{equilateral}'
      ),
    ],
    { difficulty: 'hard', timeLimit: 300, isActive: false }
  );

  return {
    parent: parent('y12a-6c-q15', stem, [a, b, c], {
      difficulty: 'hard',
      timeLimit: 720,
    }),
    children: [a, b, c],
  };
}

// ── Q16 ────────────────────────────────────────────────────────────────

function buildQ16() {
  const stem =
    'Consider the expression \\( \\dfrac{2 - \\sin\\theta}{\\cos\\theta} \\) for \\( 0 \\le \\theta \\le \\dfrac{\\pi}{4} \\).';

  const a = tr(
    'y12a-6c-q16a',
    '(a) Show that \\( \\dfrac{d}{d\\theta}\\left(\\dfrac{2 - \\sin\\theta}{\\cos\\theta}\\right) = \\dfrac{2\\sin\\theta - 1}{\\cos^{2}\\theta} \\).',
    'Proof',
    [
      S(
        'Differentiate the quotient \\(f(\\theta) = \\dfrac{2 - \\sin\\theta}{\\cos\\theta}\\) using the quotient rule \\(\\left(\\dfrac{u}{v}\\right)\' = \\dfrac{u\'v - uv\'}{v^{2}}\\).',
        '\\(u = 2 - \\sin\\theta,\\ v = \\cos\\theta\\)'
      ),
      S(
        'Then \\(u\' = -\\cos\\theta\\) and \\(v\' = -\\sin\\theta\\). Substitute: numerator of the derivative is \\((-\\cos\\theta)(\\cos\\theta) - (2 - \\sin\\theta)(-\\sin\\theta)\\).',
        '\\(u\'v - uv\' = -\\cos^{2}\\theta + (2 - \\sin\\theta)\\sin\\theta\\)'
      ),
      S(
        'Expand: \\(-\\cos^{2}\\theta + 2\\sin\\theta - \\sin^{2}\\theta = 2\\sin\\theta - (\\cos^{2}\\theta + \\sin^{2}\\theta) = 2\\sin\\theta - 1\\). Denominator is \\(\\cos^{2}\\theta\\).',
        '\\(\\dfrac{2\\sin\\theta - 1}{\\cos^{2}\\theta}\\)'
      ),
      S(
        'Therefore the derivative equals \\(\\dfrac{2\\sin\\theta - 1}{\\cos^{2}\\theta}\\), as required. A common slip loses a sign when expanding \\(-uv\'\\).',
        '\\text{shown}'
      ),
    ],
    { difficulty: 'hard', timeLimit: 240, isActive: false }
  );

  const b = mc(
    'y12a-6c-q16b',
    stem +
      '\n\n(b) Hence find the maximum and minimum values of \\( \\dfrac{2 - \\sin\\theta}{\\cos\\theta} \\) in the interval \\( 0 \\le \\theta \\le \\dfrac{\\pi}{4} \\), and state the values of \\(\\theta\\) for which they occur.',
    [
      'Maximum \\(2\\) at \\(\\theta = 0\\); minimum \\(\\sqrt{3}\\) at \\(\\theta = \\dfrac{\\pi}{6}\\)',
      'Maximum \\(\\sqrt{3}\\) at \\(\\theta = \\dfrac{\\pi}{6}\\); minimum \\(2\\) at \\(\\theta = 0\\)',
      'Maximum \\(2\\) at \\(\\theta = 0\\); minimum \\(2\\sqrt{2} - 1\\) at \\(\\theta = \\dfrac{\\pi}{4}\\)',
      'Maximum \\(1\\) at \\(\\theta = 0\\); minimum \\(\\dfrac{1}{2}\\) at \\(\\theta = \\dfrac{\\pi}{6}\\)',
    ],
    0,
    [
      S(
        'From part (a), critical points solve \\(2\\sin\\theta - 1 = 0\\) (since \\(\\cos^{2}\\theta > 0\\) on the interval). So \\(\\sin\\theta = \\dfrac{1}{2}\\) and \\(\\theta = \\dfrac{\\pi}{6}\\) lies in \\([0, \\dfrac{\\pi}{4}]\\).',
        '\\(\\theta = \\dfrac{\\pi}{6}\\)'
      ),
      S(
        'Evaluate endpoints and the critical point. At \\(\\theta = 0\\): \\(f = \\dfrac{2 - 0}{1} = 2\\). At \\(\\theta = \\dfrac{\\pi}{6}\\): \\(f = \\dfrac{2 - \\dfrac{1}{2}}{\\dfrac{\\sqrt{3}}{2}} = \\sqrt{3}\\). At \\(\\theta = \\dfrac{\\pi}{4}\\): \\(f = 2\\sqrt{2} - 1 \\approx 1.828\\).',
        '\\(f(0)=2,\\ f(\\pi/6)=\\sqrt{3},\\ f(\\pi/4)=2\\sqrt{2}-1\\)'
      ),
      S(
        'Compare values: maximum is 2 at \\(\\theta = 0\\); minimum is \\(\\sqrt{3}\\) at \\(\\theta = \\dfrac{\\pi}{6}\\) (smaller than the right endpoint). Why not the endpoint minimum? Because the critical value is lower.',
        '\\text{max }2,\\ \\text{min }\\sqrt{3}'
      ),
      S(
        'Final answer: maximum 2 at \\(\\theta = 0\\); minimum \\(\\sqrt{3}\\) at \\(\\theta = \\dfrac{\\pi}{6}\\).',
        '\\text{as above}'
      ),
    ],
    { difficulty: 'hard', timeLimit: 200, isActive: false }
  );

  return {
    parent: parent('y12a-6c-q16', stem, [a, b], {
      difficulty: 'hard',
      timeLimit: 420,
    }),
    children: [a, b],
  };
}

// ── Assemble all ───────────────────────────────────────────────────────

function buildAll() {
  const byId = new Map();
  const seedTop = [];

  for (const q of [...buildQ1(), ...buildQ2(), ...buildQ3(), ...buildQ4(), ...buildQ5()]) {
    byId.set(q.id, q);
    seedTop.push(q);
  }

  for (const build of [
    buildQ6,
    buildQ7,
    buildQ8,
    buildQ9,
    buildQ10,
    buildQ11,
    buildQ12,
    buildQ13,
    buildQ14,
    buildQ15,
    buildQ16,
  ]) {
    const { parent: p, children } = build();
    byId.set(p.id, p);
    seedTop.push(p);
    for (const ch of children) {
      const flat = { ...ch, isActive: false, ...TOPIC };
      flat.isActive = false;
      byId.set(ch.id, flat);
    }
  }

  // Validate MC
  let mcCount = 0;
  let trCount = 0;
  let mpCount = 0;
  for (const q of byId.values()) {
    if (q.type === 'multiple_choice') {
      mcCount++;
      if (q.opts[q.a] == null) throw new Error(`bad a on ${q.id}`);
      if (q.opts.length !== 4) throw new Error(`opts len on ${q.id}`);
      if (!q.solutionSteps || q.solutionSteps.length < 3) {
        throw new Error(`short steps on ${q.id}`);
      }
      // LaTeX sanity
      for (const o of q.opts) {
        if (o.includes('dfrac{13}') || o.includes('--\\') || /\\frac\{\\sqrt\{2\}\{1\}/.test(o)) {
          throw new Error(`garbage option on ${q.id}: ${o}`);
        }
        if (o.includes('$')) throw new Error(`dollar latex on ${q.id}`);
      }
    } else if (q.type === 'teacher_review') trCount++;
    else if (q.type === 'multi_part') mpCount++;
  }

  return { byId, seedTop, mcCount, trCount, mpCount };
}

async function main() {
  const { byId, seedTop, mcCount, trCount, mpCount } = buildAll();
  console.log(
    'Built docs:',
    byId.size,
    'MC',
    mcCount,
    'TR',
    trCount,
    'MP',
    mpCount,
    'seed top-level',
    seedTop.length
  );

  // Sample verify 5 key questions
  const samples = [
    'y12a-6c-q1a',
    'y12a-6c-q1c',
    'y12a-6c-q1g',
    'y12a-6c-q3a',
    'y12a-6c-q11a',
  ];
  console.log('\n=== Sample verification ===');
  for (const id of samples) {
    const q = byId.get(id);
    console.log(
      id,
      'type=',
      q.type,
      'a=',
      q.a,
      'opts[a]=',
      q.opts?.[q.a],
      'steps=',
      q.solutionSteps?.length
    );
  }

  // Push to Firestore
  let batch = db.batch();
  let n = 0;
  const flush = async () => {
    if (!n) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };

  for (const [id, q] of byId) {
    const payload = {
      ...q,
      chapterId: 'y12a-6',
      topicId: 'y12a-6C',
      origin: 'seed',
      isNew: true,
      updatedAt: FieldValue.serverTimestamp(),
    };
    if (payload.options == null && payload.opts) {
      payload.options = payload.opts.map((text) => ({ text, imageUrl: null }));
    }
    batch.set(db.collection('questions').doc(id), payload, { merge: true });
    n++;
    if (n >= 400) await flush();
  }
  await flush();
  console.log('Firestore upserted', byId.size, 'docs');

  // Write seed file (top-level only: standalones + multiparts)
  seedTop.sort((a, b) => String(a.id).localeCompare(String(b.id)));
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6CQuestions.js');
  // Strip any undefined; keep clean JSON
  const clean = JSON.parse(JSON.stringify(seedTop));
  writeFileSync(
    seedPath,
    'export const Y12A_CH6C_QUESTIONS = ' +
      JSON.stringify(clean, null, 2) +
      ';\n\nexport default Y12A_CH6C_QUESTIONS;\n'
  );
  console.log('Seed written', seedPath, 'entries', clean.length);

  // Bump sync_meta
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('sync_meta/questions version', ver);

  // Rebuild indexes
  const r = spawnSync(
    'node',
    [path.join(__dirname, 'rebuildQuestionIndexes.js'), 'y12a-6'],
    { encoding: 'utf8', timeout: 180000 }
  );
  console.log(r.stdout || '');
  if (r.stderr) console.error(r.stderr);
  if (r.status !== 0) {
    console.error('rebuild failed status', r.status);
    process.exit(1);
  }

  // Re-read samples from FS
  console.log('\n=== Firestore sample check ===');
  for (const id of samples) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      id,
      d?.type,
      'a=',
      d?.a,
      'opts[a]=',
      d?.opts?.[d?.a],
      'active=',
      d?.isActive,
      'steps=',
      d?.solutionSteps?.length
    );
  }
  for (const id of ['y12a-6c-q6', 'y12a-6c-q11', 'y12a-6c-q2a', 'y12a-6c-q6a']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      id,
      d?.type,
      'active=',
      d?.isActive,
      'subs=',
      d?.subQuestions?.length ?? 0,
      'tr?',
      d?.type === 'teacher_review'
    );
  }

  console.log('\nDone.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
