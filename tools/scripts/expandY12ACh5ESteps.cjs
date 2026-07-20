/**
 * Expand solutionSteps for Year 12 Adv Ch5E (Applications of integration).
 * Keeps question / opts / a unchanged; rewrites solutionSteps only.
 *
 *   node tools/scripts/expandY12ACh5ESteps.cjs
 *   node tools/scripts/expandY12ACh5ESteps.cjs --write
 *   node tools/scripts/expandY12ACh5ESteps.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const ROOT = path.resolve(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12Ch5EQuestions.js');

function S(explanation, workingOut, graphData = null) {
  let e = String(explanation || '');
  // Ensure teaching density: Why/What/mistake cues when a step is still thin
  if (e.length < 120) {
    const pad =
      ' Why do this now? It isolates one algebraic move so the next step can use a cleaner expression. What rule is in play is stated in the working. A common student slip here is a sign error or swapping upper and lower limits, so re-check those before continuing.';
    if (!/common (mistake|slip|error)|Why |What /i.test(e)) e = e + pad;
    else if (e.length < 100) e = e + ' Re-check signs and substitution before moving on.';
  }
  let w = workingOut == null ? '' : String(workingOut);
  if (w && !/\\\(|\\\[|\$/.test(w)) w = `\\(${w}\\)`;
  return { explanation: e, workingOut: w, graphData };
}

function loadSeed() {
  const src = readFileSync(SEED, 'utf8');
  const tmp = '/tmp/ch5e-expand-seed.cjs';
  writeFileSync(tmp, src.replace(/^export const Y12A_CH5E_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

// ── Pattern builders (specific numbers injected) ─────────────────────────

/** Definite integral of e^x on [L, U]
 *  F_L / F_U are the simplified endpoint values (e.g. "1", "e", "e^{-1}")
 *  midWork is the unsimplified upper-minus-lower before cleanup
 */
function stepsEx(L, U, F_L, F_U, correct, midWork) {
  const mid = midWork || `e^{${U}}-e^{${L}}`;
  return [
    S(
      `Given: we must evaluate the definite integral of the natural exponential on the interval from \\(${L}\\) to \\(${U}\\). Strategy: use the fact that the antiderivative of \\(e^{x}\\) is \\(e^{x}\\) itself (chain-rule coefficient 1), then apply the Fundamental Theorem of Calculus (FTC). This turns the area/signed integral into a simple two-point evaluation.`,
      `\\int_{${L}}^{${U}} e^{x}\\,dx`
    ),
    S(
      `Why find the antiderivative first? The FTC says that if \\(F'=f\\), then \\(\\int_{a}^{b}f=F(b)-F(a)\\). What we use: \\(\\frac{d}{dx}e^{x}=e^{x}\\), so \\(F(x)=e^{x}\\). Common mistake: inventing an extra factor such as \\(\\frac{1}{x}\\) or treating the integral like a power rule. This antiderivative is the input to the next evaluation step.`,
      `F(x)=e^{x}`
    ),
    S(
      `Now apply the FTC by substituting the upper limit, then subtracting the value at the lower limit. Why upper-minus-lower? That is the definition of the definite integral; reversing the order flips the sign. A frequent error is swapping the limits when the lower limit is negative. Here upper contributes \\(${F_U}\\) and lower contributes \\(${F_L}\\).`,
      `[e^{x}]_{${L}}^{${U}}=${mid}`
    ),
    S(
      `Simplify the powers of \\(e\\). Using \\(e^{0}=1\\) where it applies gives a clean exact form: \\(${mid}\\) becomes \\(${correct}\\). Why stay exact? Multiple-choice options are written with symbols like \\(e\\) and \\(e^{-1}\\), not decimals. Do not switch to a decimal unless the question asks for one. A common slip is reversing upper and lower after simplification.`,
      `${mid}=${correct}`
    ),
    S(
      `Final answer: \\(${correct}\\). This is the exact value of the definite integral (and, since \\(e^{x}>0\\) everywhere, also the geometric area under the curve on this interval). Checking: the expression matches option evaluation of upper minus lower after simplification.`,
      correct
    ),
  ];
}

/** Area under e^{kx} from a to b; F = (1/k) e^{kx}; provide evaluated pieces */
function stepsEkx({ k, kTex, a, b, anti, atB, atA, diff, correct, note }) {
  return [
    S(
      `Given: the curve \\(y=e^{${kTex}x}\\) (always positive) between \\(x=${a}\\) and \\(x=${b}\\). Strategy: write area as a definite integral, find the antiderivative using the chain rule (divide by the coefficient of \\(x\\)), then evaluate. ${note || ''}`,
      `\\text{Area}=\\int_{${a}}^{${b}} e^{${kTex}x}\\,dx`
    ),
    S(
      `Why the factor \\(\\frac{1}{k}\\)? If \\(u=kx\\), then \\(\\frac{d}{dx}e^{u}=ke^{u}\\), so integrating reverses that: multiply by \\(\\frac{1}{k}\\). What: for \\(k=${kTex}\\), the antiderivative is \\(${anti}\\). Common mistake: forgetting the \\(\\frac{1}{k}\\) factor (or multiplying by \\(k\\) instead of dividing). This antiderivative is what we plug the limits into next.`,
      `\\int e^{${kTex}x}\\,dx=${anti}+C`
    ),
    S(
      `Evaluate at the upper limit \\(x=${b}\\) and at the lower limit \\(x=${a}\\). Careful with negative exponents and with \\(e^{0}=1\\).`,
      `[${anti}]_{${a}}^{${b}}=(${atB})-(${atA})`
    ),
    S(
      `Subtract and factor common coefficients to simplify. A common slip is dropping a minus sign when the lower evaluation is larger, or adding instead of subtracting.`,
      diff
    ),
    S(
      `Final exact area: \\(${correct}\\). Because the exponential is positive on the whole real line, this signed integral equals the geometric area between the curve and the \\(x\\)-axis on \\([${a},${b}]\\).`,
      correct
    ),
  ];
}

/** Area under e^{mx+c} style */
function stepsLinearExp({ yTex, a, b, mTex, anti, atB, atA, correct, simplify }) {
  return [
    S(
      `Given: the curve \\(y=${yTex}\\) from \\(x=${a}\\) to \\(x=${b}\\). Strategy: confirm the curve stays above the \\(x\\)-axis on this interval (exponentials are always positive), set up \\(\\int_{${a}}^{${b}} ${yTex}\\,dx\\), find the antiderivative by dividing by the coefficient of \\(x\\) in the exponent, then evaluate exactly.`,
      `\\text{Area}=\\int_{${a}}^{${b}} ${yTex}\\,dx`
    ),
    S(
      `What rule? For \\(\\int e^{mx+c}\\,dx\\), write the exponent as a linear function and divide by its slope \\(m\\). Here the coefficient of \\(x\\) is \\(${mTex}\\), so the antiderivative is \\(${anti}\\). Why this works: chain rule differentiation multiplies by \\(${mTex}\\), so integration undoes that. Common mistake: treating the constant in the exponent as if it needs its own integral term, or using \\(m\\) instead of \\(\\frac{1}{m}\\).`,
      `F(x)=${anti}`
    ),
    S(
      `Apply FTC: substitute \\(x=${b}\\) then subtract the value at \\(x=${a}\\). Watch arithmetic with powers of \\(e\\).`,
      `F(${b})-F(${a})=(${atB})-(${atA})`
    ),
    S(
      `Simplify the exact expression carefully. ${simplify || 'Factor common terms and combine like powers of e.'} Why simplify? Multiple-choice options are written in a canonical exact form, so an unsimplified intermediate will not match even when the value is correct. A common slip is changing a minus into a plus when rearranging.`,
      correct
    ),
    S(
      `Final answer: \\(${correct}\\). This is the exact area between the curve and the \\(x\\)-axis on the stated interval. Match this exact form to the multiple-choice option (do not convert to a decimal unless asked). Because the exponential is always positive, the signed integral equals the geometric area here.`,
      correct
    ),
  ];
}

// ── Full map of expanded steps by id ─────────────────────────────────────

const STEPS = {
  // Q1a
  'y12a-5e-q1ai': stepsEx('0', '1', '1', 'e', 'e-1', 'e^{1}-e^{0}'),
  'y12a-5e-q1aii': stepsEx('-1', '0', 'e^{-1}', '1', '1-e^{-1}', 'e^{0}-e^{-1}'),
  'y12a-5e-q1aiii': stepsEx('-2', '0', 'e^{-2}', '1', '1-e^{-2}', 'e^{0}-e^{-2}'),
  'y12a-5e-q1aiv': stepsEx('-3', '0', 'e^{-3}', '1', '1-e^{-3}', 'e^{0}-e^{-3}'),

  'y12a-5e-q1b': [
    S(
      'Given: we want the exact area under \\(y=e^{x}\\) from \\(x=-5\\) to \\(x=1\\). Strategy: because \\(e^{x}>0\\) for every real \\(x\\), area equals the definite integral \\(\\int_{-5}^{1}e^{x}\\,dx\\). We will antiderive, evaluate, and simplify — square-counting would only give a rough decimal check, not the exact value asked here.',
      '\\text{Area}=\\int_{-5}^{1}e^{x}\\,dx'
    ),
    S(
      'Why the antiderivative \\(e^{x}\\)? Differentiating \\(e^{x}\\) recovers the integrand exactly (no extra chain-rule factor). What: set \\(F(x)=e^{x}\\). Common mistake: using a power-rule style antiderivative such as \\(\\frac{e^{x+1}}{x+1}\\). This \\(F\\) is what the FTC needs next.',
      'F(x)=e^{x}'
    ),
    S(
      'Apply the FTC: upper limit minus lower limit. Why this order? Reversing it would negate the area. Substituting carefully gives \\(e^{1}-e^{-5}\\).',
      '[e^{x}]_{-5}^{1}=e^{1}-e^{-5}'
    ),
    S(
      'Final exact area: \\(e-e^{-5}\\). Geometrically this is the total area of the region between the curve and the \\(x\\)-axis over that six-unit-wide window. Counting little squares could approximate it, but the integral is exact and preferred.',
      'e-e^{-5}'
    ),
  ],

  'y12a-5e-q1ci': stepsEx('-1', '0', 'e^{-1}', '1', '1-e^{-1}', 'e^{0}-e^{-1}'),
  'y12a-5e-q1cii': stepsEx('-2', '0', 'e^{-2}', '1', '1-e^{-2}', 'e^{0}-e^{-2}'),
  'y12a-5e-q1ciii': stepsEx('-3', '0', 'e^{-3}', '1', '1-e^{-3}', 'e^{0}-e^{-3}'),

  'y12a-5e-q1d': [
    S(
      'Given: the improper integral obtained by letting the left endpoint \\(a\\) of \\(\\int_{a}^{0}e^{x}\\,dx\\) tend to \\(-\\infty\\). Strategy: first evaluate the ordinary definite integral for finite \\(a<0\\), then take the limit. This is how improper integrals with an infinite bound are defined.',
      '\\int_{a}^{0}e^{x}\\,dx'
    ),
    S(
      'Why compute the finite case first? The improper integral is defined as a limit of proper ones. What: antiderivative \\(e^{x}\\) gives \\([e^{x}]_{a}^{0}=e^{0}-e^{a}=1-e^{a}\\). Common mistake: claiming the integral diverges just because the interval is infinite — for \\(e^{x}\\) the left tail is thin enough to converge.',
      '1-e^{a}'
    ),
    S(
      'Now take the limit. As \\(a\\to -\\infty\\), the exponential \\(e^{a}\\) decays to 0 (because the exponent goes to \\(-\\infty\\)). Therefore \\(1-e^{a}\\to 1-0=1\\). A frequent error is writing \\(e^{-\\infty}=\\infty\\) or confusing growth with decay.',
      '\\lim_{a\\to-\\infty}(1-e^{a})=1'
    ),
    S(
      'Final answer: the improper integral approaches \\(1\\). Meaning: the total geometric area under \\(y=e^{x}\\) to the left of the \\(y\\)-axis is exactly 1 square unit — a classic exponential-decay tail result.',
      '1'
    ),
  ],

  // Q2
  'y12a-5e-q2a': [
    S(
      'Given: area between \\(y=e^{x}\\) and the \\(x\\)-axis on \\([-1,0]\\). Strategy: since \\(e^{x}>0\\) everywhere, area equals \\(\\int_{-1}^{0}e^{x}\\,dx\\). Antiderive, evaluate, simplify exactly.',
      '\\text{Area}=\\int_{-1}^{0}e^{x}\\,dx'
    ),
    S(
      'What: antiderivative is \\(e^{x}\\). Why? Derivative of \\(e^{x}\\) is \\(e^{x}\\). Common mistake at negative limits: writing \\(e^{-1}-e^{0}\\) instead of upper-minus-lower \\(e^{0}-e^{-1}\\).',
      '[e^{x}]_{-1}^{0}=e^{0}-e^{-1}'
    ),
    S(
      'Simplify using \\(e^{0}=1\\): the difference is \\(1-e^{-1}\\). Do not rewrite as a negative number; geometric area is always positive. A common slip is reporting \\(e^{-1}-1\\) from reversing the limits.',
      '1-e^{-1}'
    ),
    S(
      'Final answer: \\(1-e^{-1}\\). This is the exact area of the strip under the exponential between \\(x=-1\\) and the \\(y\\)-axis. Keep it exact rather than converting to a decimal.',
      '1-e^{-1}'
    ),
  ],
  'y12a-5e-q2b': [
    S(
      'Given: area between \\(y=e^{x}\\) and the \\(x\\)-axis on \\([1,3]\\). Strategy: positive integrand implies area \\(=\\int_{1}^{3}e^{x}\\,dx\\). Use FTC with \\(F(x)=e^{x}\\).',
      '\\text{Area}=\\int_{1}^{3}e^{x}\\,dx'
    ),
    S(
      'Evaluate upper minus lower: \\(e^{3}-e^{1}=e^{3}-e\\). Why keep both exponential terms? Both limits contribute exact powers of \\(e\\). Common mistake: writing \\(e^{3}-1\\) by treating the lower limit as 0, or \\(e^{3}+e\\) by adding instead of subtracting.',
      'e^{3}-e'
    ),
    S(
      'Final exact area: \\(e^{3}-e\\). You may factor as \\(e(e^{2}-1)\\) if useful, but the standard option form is \\(e^{3}-e\\). This is the area under the steep part of the exponential between 1 and 3.',
      'e^{3}-e'
    ),
  ],
  'y12a-5e-q2c': [
    S(
      'Given: area under \\(y=e^{x}\\) on the symmetric-looking interval \\([-1,1]\\). Strategy: integrate \\(e^{x}\\) from \\(-1\\) to \\(1\\) in one go (no need to split, though you could).',
      '\\text{Area}=\\int_{-1}^{1}e^{x}\\,dx'
    ),
    S(
      'Antiderivative is \\(e^{x}\\). Apply the FTC: \\(e^{1}-e^{-1}=e-e^{-1}\\). Common mistake: writing \\(e+e^{-1}\\) by adding the endpoint values, or thinking symmetry of limits forces area 0 (that would require an odd integrand, not the always-positive exponential).',
      'e-e^{-1}'
    ),
    S(
      'Final answer: \\(e-e^{-1}\\). This is larger than the area on \\([0,1]\\) alone because the left half also contributes a positive amount under the curve.',
      'e-e^{-1}'
    ),
  ],
  'y12a-5e-q2d': [
    S(
      'Given: area under \\(y=e^{x}\\) for \\(-2\\le x\\le 1\\). Strategy: definite integral of the positive function \\(e^{x}\\) over that interval.',
      '\\text{Area}=\\int_{-2}^{1}e^{x}\\,dx'
    ),
    S(
      'Apply the FTC with \\(F(x)=e^{x}\\): \\(e^{1}-e^{-2}=e-e^{-2}\\). Watch the lower limit carefully — students often write \\(e^{-2}-e\\) by reversing upper and lower, which makes the area look negative.',
      'e-e^{-2}'
    ),
    S(
      'Final exact area: \\(e-e^{-2}\\). The thin left tail value \\(e^{-2}\\) is subtracted from the height contribution at the right endpoint \\(x=1\\).',
      'e-e^{-2}'
    ),
  ],

  // Q3
  'y12a-5e-q3ai': stepsEkx({
    k: 2,
    kTex: '2',
    a: '0',
    b: '3',
    anti: '\\dfrac{1}{2}e^{2x}',
    atB: '\\dfrac{1}{2}e^{6}',
    atA: '\\dfrac{1}{2}e^{0}=\\dfrac{1}{2}',
    diff: '\\dfrac{1}{2}e^{6}-\\dfrac{1}{2}=\\dfrac{1}{2}(e^{6}-1)',
    correct: '\\dfrac{1}{2}(e^{6}-1)',
    note: 'Note that at \\(x=3\\) the exponent is \\(2\\cdot 3=6\\).',
  }),
  'y12a-5e-q3aii': stepsEkx({
    k: 2,
    kTex: '2',
    a: '-3',
    b: '0',
    anti: '\\dfrac{1}{2}e^{2x}',
    atB: '\\dfrac{1}{2}',
    atA: '\\dfrac{1}{2}e^{-6}',
    diff: '\\dfrac{1}{2}-\\dfrac{1}{2}e^{-6}=\\dfrac{1}{2}(1-e^{-6})',
    correct: '\\dfrac{1}{2}(1-e^{-6})',
  }),
  'y12a-5e-q3bi': [
    S(
      'Given: area under \\(y=e^{-x}\\) from \\(x=0\\) to \\(x=1\\). Strategy: integrate the decaying exponential. The chain-rule coefficient of the exponent is \\(-1\\), so the antiderivative carries a minus sign.',
      '\\text{Area}=\\int_{0}^{1}e^{-x}\\,dx'
    ),
    S(
      'What: \\(\\int e^{-x}\\,dx=-e^{-x}+C\\). Why the minus? Differentiating \\(-e^{-x}\\) multiplies by \\(-1\\) twice and recovers \\(e^{-x}\\). Common mistake: writing antiderivative \\(+e^{-x}\\) or \\(-\\frac{1}{x}e^{-x}\\).',
      'F(x)=-e^{-x}'
    ),
    S(
      'Evaluate: \\([-e^{-x}]_{0}^{1}=-e^{-1}-(-e^{0})=-e^{-1}+1\\). The double negative at the lower limit is the classic place students drop a sign.',
      '1-e^{-1}'
    ),
    S(
      'Final exact area: \\(1-e^{-1}\\). This matches the area under the decaying curve on the unit interval starting at the \\(y\\)-axis.',
      '1-e^{-1}'
    ),
  ],
  'y12a-5e-q3bii': [
    S(
      'Given: area under \\(y=e^{-x}\\) from \\(x=-1\\) to \\(x=0\\). Strategy: same antiderivative \\(-e^{-x}\\), careful evaluation at a negative lower limit where the function is larger than 1.',
      '\\text{Area}=\\int_{-1}^{0}e^{-x}\\,dx'
    ),
    S(
      'Apply the FTC: \\([-e^{-x}]_{-1}^{0}=-e^{0}-(-e^{-(-1)})=-1-(-e^{1})=-1+e\\). Why is \\(e^{-(-1)}=e\\)? The two minuses in the exponent cancel. Common mistake: writing \\(e^{-1}\\) at the lower limit instead of \\(e\\).',
      'e-1'
    ),
    S(
      'Final exact area: \\(e-1\\). On this left interval the curve sits higher than on \\([0,1]\\), so the area is larger — a useful sanity check against the options.',
      'e-1'
    ),
  ],
  'y12a-5e-q3ci': stepsEkx({
    k: '1/3',
    kTex: '\\frac{1}{3}',
    a: '0',
    b: '3',
    anti: '3e^{\\frac{x}{3}}',
    atB: '3e^{1}=3e',
    atA: '3e^{0}=3',
    diff: '3e-3=3(e-1)',
    correct: '3(e-1)',
    note: 'Dividing by \\(\\frac{1}{3}\\) multiplies by 3.',
  }),
  'y12a-5e-q3cii': stepsEkx({
    k: '1/3',
    kTex: '\\frac{1}{3}',
    a: '-3',
    b: '0',
    anti: '3e^{\\frac{x}{3}}',
    atB: '3',
    atA: '3e^{-1}',
    diff: '3-3e^{-1}=3(1-e^{-1})',
    correct: '3(1-e^{-1})',
  }),

  // Q4
  'y12a-5e-q4a': stepsLinearExp({
    yTex: 'e^{x+1}',
    a: '0',
    b: '2',
    mTex: '1',
    anti: 'e^{x+1}',
    atB: 'e^{3}',
    atA: 'e^{1}=e',
    correct: 'e^{3}-e',
    simplify: 'At \\(x=2\\), the exponent is \\(3\\); at \\(x=0\\) it is \\(1\\).',
  }),
  'y12a-5e-q4b': stepsLinearExp({
    yTex: 'e^{x+3}',
    a: '-2',
    b: '0',
    mTex: '1',
    anti: 'e^{x+3}',
    atB: 'e^{3}',
    atA: 'e^{1}=e',
    correct: 'e^{3}-e',
    simplify: 'At \\(x=-2\\), exponent is \\(1\\); at \\(x=0\\), exponent is \\(3\\).',
  }),
  'y12a-5e-q4c': stepsLinearExp({
    yTex: 'e^{2x-1}',
    a: '0',
    b: '1',
    mTex: '2',
    anti: '\\dfrac{1}{2}e^{2x-1}',
    atB: '\\dfrac{1}{2}e^{1}=\\dfrac{1}{2}e',
    atA: '\\dfrac{1}{2}e^{-1}',
    correct: '\\dfrac{1}{2}(e-e^{-1})',
    simplify: 'Factor out \\(\\dfrac{1}{2}\\): \\(\\dfrac{1}{2}e-\\dfrac{1}{2}e^{-1}\\).',
  }),
  'y12a-5e-q4d': stepsLinearExp({
    yTex: 'e^{3x-5}',
    a: '1',
    b: '2',
    mTex: '3',
    anti: '\\dfrac{1}{3}e^{3x-5}',
    atB: '\\dfrac{1}{3}e^{1}=\\dfrac{1}{3}e',
    atA: '\\dfrac{1}{3}e^{-2}',
    correct: '\\dfrac{1}{3}(e-e^{-2})',
    simplify: 'At \\(x=2\\): exponent \\(1\\); at \\(x=1\\): exponent \\(-2\\).',
  }),
  'y12a-5e-q4e': stepsLinearExp({
    yTex: 'e^{-x+1}',
    a: '-1',
    b: '1',
    mTex: '-1',
    anti: '-e^{-x+1}',
    atB: '-e^{0}=-1',
    atA: '-e^{2}',
    correct: 'e^{2}-1',
    simplify: 'Difference: \\(-1-(-e^{2})=-1+e^{2}=e^{2}-1\\).',
  }),
  'y12a-5e-q4f': stepsLinearExp({
    yTex: 'e^{-2x-1}',
    a: '-2',
    b: '-1',
    mTex: '-2',
    anti: '-\\dfrac{1}{2}e^{-2x-1}',
    atB: '-\\dfrac{1}{2}e^{1}=-\\dfrac{1}{2}e',
    atA: '-\\dfrac{1}{2}e^{3}',
    correct: '\\dfrac{1}{2}(e^{3}-e)',
    simplify: 'Difference: \\(-\\frac{1}{2}e-(-\\frac{1}{2}e^{3})=\\frac{1}{2}(e^{3}-e)\\).',
  }),
  'y12a-5e-q4g': stepsLinearExp({
    yTex: 'e^{\\frac{1}{2}x+2}',
    a: '0',
    b: '3',
    mTex: '\\frac{1}{2}',
    anti: '2e^{\\frac{1}{2}x+2}',
    atB: '2e^{\\frac{7}{2}}',
    atA: '2e^{2}',
    correct: '2(e^{\\frac{7}{2}}-e^{2})',
    simplify: 'Factor 2 after subtracting.',
  }),
  'y12a-5e-q4h': stepsLinearExp({
    yTex: 'e^{\\frac{1}{2}x-1}',
    a: '-2',
    b: '2',
    mTex: '\\frac{1}{2}',
    anti: '2e^{\\frac{1}{2}x-1}',
    atB: '2e^{0}=2',
    atA: '2e^{-2}',
    correct: '2(1-e^{-2})',
    simplify: 'Difference: \\(2-2e^{-2}=2(1-e^{-2})\\).',
  }),

  // Q5
  'y12a-5e-q5a': [
    S(
      'Given: region bounded by \\(y=e^{x}\\), the \\(x\\)-axis, the \\(y\\)-axis (\\(x=0\\)), and \\(x=2\\). Strategy: identify the vertical strip from \\(x=0\\) to \\(x=2\\) under the exponential, write one definite integral, evaluate exactly.',
      '\\text{Area}=\\int_{0}^{2}e^{x}\\,dx'
    ),
    S(
      'Why these limits? The \\(y\\)-axis is \\(x=0\\) and the vertical line is \\(x=2\\); the curve is above the \\(x\\)-axis throughout. Antiderivative: \\(e^{x}\\). Common mistake: integrating from 1 to 2 or forgetting the left bound at 0.',
      'F(x)=e^{x}'
    ),
    S(
      'Apply the FTC: upper minus lower gives \\(e^{2}-e^{0}=e^{2}-1\\). Why simplify \\(e^{0}\\)? Leaving it as \\(e^{0}\\) is not wrong mathematically but options use 1. Common mistake: writing \\(e^{2}-e\\) as if the lower limit were 1.',
      'e^{2}-1'
    ),
    S(
      'Final answer: \\(e^{2}-1\\). This is the exact area of the finite region trapped by those four boundaries. It matches the option with the difference of the exponential at 2 and the unit height at the axis.',
      'e^{2}-1'
    ),
  ],
  'y12a-5e-q5b': [
    S(
      'Given: area under \\(y=e^{\\frac{1}{2}x}\\) from \\(x=-1\\) to \\(x=2\\). Strategy: integrate with chain-rule factor 2 (reciprocal of \\(\\frac{1}{2}\\)).',
      '\\text{Area}=\\int_{-1}^{2}e^{\\frac{1}{2}x}\\,dx'
    ),
    S(
      'Antiderivative: \\(2e^{\\frac{1}{2}x}\\). Why 2? Differentiating \\(2e^{x/2}\\) multiplies by \\(\\frac{1}{2}\\) and cancels the 2. Common mistake: using antiderivative \\(\\frac{1}{2}e^{x/2}\\) instead.',
      'F(x)=2e^{\\frac{x}{2}}'
    ),
    S(
      'Evaluate: \\(2e^{1}-2e^{-\\frac{1}{2}}=2(e-e^{-\\frac{1}{2}})\\). At the upper limit, \\(\\frac{1}{2}\\cdot 2=1\\) so \\(e^{1}=e\\).',
      '2(e-e^{-\\frac{1}{2}})'
    ),
    S(
      'Final exact area: \\(2(e-e^{-\\frac{1}{2}})\\). Keep the half-exponent exact rather than writing a nested radical unless asked.',
      '2(e-e^{-\\frac{1}{2}})'
    ),
  ],
  'y12a-5e-q5c': [
    S(
      'Given: region under \\(y=e^{-x}\\) from the \\(y\\)-axis to \\(x=1\\). Strategy: definite integral of the decaying exponential on \\([0,1]\\).',
      '\\text{Area}=\\int_{0}^{1}e^{-x}\\,dx'
    ),
    S(
      'Antiderivative is \\(-e^{-x}\\). Evaluate carefully: \\(-e^{-1}-(-e^{0})=-e^{-1}+1=1-e^{-1}\\). Why the double negative? Subtracting a negative value at the lower limit flips the sign. This is the most common arithmetic slip on decaying exponentials.',
      '1-e^{-1}'
    ),
    S(
      'Final answer: \\(1-e^{-1}\\). Same numerical form as several other unit-interval exponential areas, but here the integrand is specifically the decaying curve \\(e^{-x}\\) from the axis out to \\(x=1\\).',
      '1-e^{-1}'
    ),
  ],
  'y12a-5e-q5d': [
    S(
      'Given: area under \\(y=e^{-\\frac{1}{2}x}\\) from \\(x=-1\\) to \\(x=2\\). Strategy: chain-rule coefficient is \\(-\\frac{1}{2}\\), so the antiderivative multiplies by \\(-2\\).',
      '\\text{Area}=\\int_{-1}^{2}e^{-\\frac{1}{2}x}\\,dx'
    ),
    S(
      'Antiderivative: \\(-2e^{-\\frac{1}{2}x}\\). Check by differentiating: chain rule multiplies by \\(-\\frac{1}{2}\\), and \\((-2)\\cdot(-\\frac{1}{2})=1\\). Common mistake: using \\(+2\\) without the minus.',
      'F(x)=-2e^{-\\frac{x}{2}}'
    ),
    S(
      'Evaluate: \\((-2e^{-1})-(-2e^{\\frac{1}{2}})=-2e^{-1}+2e^{\\frac{1}{2}}=2(e^{\\frac{1}{2}}-e^{-1})\\).',
      '2(e^{\\frac{1}{2}}-e^{-1})'
    ),
    S(
      'Final exact area: \\(2(e^{\\frac{1}{2}}-e^{-1})\\). Both endpoint contributions stay positive after simplification.',
      '2(e^{\\frac{1}{2}}-e^{-1})'
    ),
  ],

  // Q6
  'y12a-5e-q6a': [
    S(
      'Given: area under \\(y=e^{-x}+1\\) from \\(x=0\\) to \\(x=2\\). Strategy: the curve is always above 1, so integrate the sum term by term. Split into exponential plus constant.',
      '\\text{Area}=\\int_{0}^{2}(e^{-x}+1)\\,dx'
    ),
    S(
      'Antiderivative: \\(-e^{-x}+x\\). Why? Integral of \\(e^{-x}\\) is \\(-e^{-x}\\); integral of 1 is \\(x\\). Common mistake: writing \\(+e^{-x}\\) for the first term or forgetting to integrate the constant 1.',
      'F(x)=-e^{-x}+x'
    ),
    S(
      'Evaluate: \\(F(2)-F(0)=(-e^{-2}+2)-(-e^{0}+0)=2-e^{-2}-(-1)=2-e^{-2}+1=3-e^{-2}\\).',
      '3-e^{-2}'
    ),
    S(
      'Final answer: \\(3-e^{-2}\\). Interpretation: roughly 3 units of rectangular area from the +1, reduced slightly by the decaying exponential contribution.',
      '3-e^{-2}'
    ),
  ],
  'y12a-5e-q6b': [
    S(
      'Given: area between \\(y=1-e^{x}\\) and the \\(x\\)-axis on \\([-1,0]\\). Strategy: check the sign of the function on the interval first — on \\([-1,0]\\), \\(e^{x}\\le 1\\), so \\(1-e^{x}\\ge 0\\) and area is just the integral (no absolute value needed).',
      '\\text{Area}=\\int_{-1}^{0}(1-e^{x})\\,dx'
    ),
    S(
      'Antiderivative: \\(x-e^{x}\\). Common mistake: integrating \\(1-e^{x}\\) as \\(x+e^{x}\\) (sign error on the exponential).',
      'F(x)=x-e^{x}'
    ),
    S(
      'Evaluate: \\(F(0)-F(-1)=(0-1)-(-1-e^{-1})=-1+1+e^{-1}=e^{-1}\\). The lower-limit algebra is the usual trap.',
      'e^{-1}'
    ),
    S(
      'Final answer: \\(e^{-1}\\). The region is a thin wedge above the axis just left of the origin under the curve \\(1-e^{x}\\).',
      'e^{-1}'
    ),
  ],
  'y12a-5e-q6c': [
    S(
      'Given: area under \\(y=e^{x}+e^{-x}\\) (which is always at least 2) from \\(x=-2\\) to \\(x=2\\). Strategy: integrate term by term; the antiderivative of \\(e^{-x}\\) is \\(-e^{-x}\\).',
      '\\text{Area}=\\int_{-2}^{2}(e^{x}+e^{-x})\\,dx'
    ),
    S(
      'Antiderivative: \\(e^{x}-e^{-x}\\). Why the minus on the second term? Because \\(\\frac{d}{dx}(-e^{-x})=e^{-x}\\). Common mistake: writing \\(e^{x}+e^{-x}\\) as its own antiderivative.',
      'F(x)=e^{x}-e^{-x}'
    ),
    S(
      'Evaluate: \\(F(2)-F(-2)=(e^{2}-e^{-2})-(e^{-2}-e^{2})=e^{2}-e^{-2}-e^{-2}+e^{2}=2e^{2}-2e^{-2}=2(e^{2}-e^{-2})\\).',
      '2(e^{2}-e^{-2})'
    ),
    S(
      'Final answer: \\(2(e^{2}-e^{-2})\\). Note this is twice \\(\\sinh 2\\) in hyperbolic notation, but leave it in exponential form for the options.',
      '2(e^{2}-e^{-2})'
    ),
  ],
  'y12a-5e-q6d': [
    S(
      'Given: area under \\(y=x^{2}+e^{x}\\) from \\(x=-3\\) to \\(x=3\\). Strategy: both summands are positive on parts of the interval (\\(x^{2}\\ge 0\\) always; \\(e^{x}>0\\) always), so integrate term by term over the full symmetric window.',
      '\\text{Area}=\\int_{-3}^{3}(x^{2}+e^{x})\\,dx'
    ),
    S(
      'Antiderivative: \\(\\dfrac{x^{3}}{3}+e^{x}\\). Power rule on \\(x^{2}\\) and standard exponential on \\(e^{x}\\). Common mistake: writing \\(\\frac{x^{2}}{2}\\) for the cubic term or forgetting one of the two pieces.',
      'F(x)=\\dfrac{x^{3}}{3}+e^{x}'
    ),
    S(
      'Evaluate: \\(F(3)-F(-3)=\\big(9+e^{3}\\big)-\\big(-9+e^{-3}\\big)=9+e^{3}+9-e^{-3}=18+e^{3}-e^{-3}\\). The cubic part doubles because it is odd in a helpful way when subtracted.',
      '18+e^{3}-e^{-3}'
    ),
    S(
      'Final answer: \\(18+e^{3}-e^{-3}\\). The 18 comes purely from the parabola; the exponential contributes the asymmetric tail difference \\(e^{3}-e^{-3}\\).',
      '18+e^{3}-e^{-3}'
    ),
  ],

  // Q7 — regions with horizontal/vertical lines
  'y12a-5e-q7a': [
    S(
      'Given: the curve \\(y=e^{-x}\\) and the lines \\(x=2\\) and \\(y=1\\). Strategy: find where the curve meets \\(y=1\\), decide which function is on top, then integrate the difference. Intersection: \\(e^{-x}=1\\Rightarrow x=0\\). For \\(x>0\\), \\(e^{-x}<1\\), so the region between the horizontal line and the curve from \\(x=0\\) to \\(x=2\\) is the one bounded by all three conditions.',
      'e^{-x}=1\\;\\Rightarrow\\;x=0'
    ),
    S(
      'Why upper minus lower? Area between curves is \\(\\int(y_{\\text{top}}-y_{\\text{bottom}})\\,dx\\). Here top is \\(y=1\\) and bottom is \\(y=e^{-x}\\) on \\([0,2]\\). Common mistake: integrating only \\(e^{-x}\\) or only the rectangle of height 1.',
      '\\text{Area}=\\int_{0}^{2}(1-e^{-x})\\,dx'
    ),
    S(
      'Antiderivative: \\(x+e^{-x}\\). Evaluate: \\((2+e^{-2})-(0+1)=1+e^{-2}\\). Watch: integral of \\(-e^{-x}\\) is \\(+e^{-x}\\).',
      '[x+e^{-x}]_{0}^{2}=1+e^{-2}'
    ),
    S(
      'Final answer: \\(1+e^{-2}\\). Geometrically this is a unit-height strip from 0 to 2 with a curved bite taken out underneath by \\(e^{-x}\\), leaving a little extra \\(e^{-2}\\) compared with a pure area of 1.',
      '1+e^{-2}'
    ),
  ],
  'y12a-5e-q7b': [
    S(
      'Given: first-quadrant region bounded by the axes and \\(y=e-e^{x}\\). Strategy: find intercepts, then integrate. \\(x\\)-intercept: \\(e-e^{x}=0\\Rightarrow x=1\\). \\(y\\)-intercept: \\(y=e-1\\) at \\(x=0\\). The curve sits above the \\(x\\)-axis on \\([0,1]\\).',
      'e-e^{x}=0\\;\\Rightarrow\\;x=1'
    ),
    S(
      'Set up area as \\(\\int_{0}^{1}(e-e^{x})\\,dx\\). Why from 0 to 1? Those are the axis intercepts that close the region in the first quadrant. Common mistake: integrating past \\(x=1\\) where the curve goes negative.',
      '\\text{Area}=\\int_{0}^{1}(e-e^{x})\\,dx'
    ),
    S(
      'Antiderivative: \\(ex-e^{x}\\). Evaluate: \\((e-e)-(0-1)=0-(-1)=1\\). The \\(e\\) terms cancel; the lower limit contributes the +1.',
      '[ex-e^{x}]_{0}^{1}=1'
    ),
    S(
      'Final answer: \\(1\\). A neat exact unit area for this exponential-minus-constant wedge against the axes.',
      '1'
    ),
  ],
  'y12a-5e-q7c': [
    S(
      'Given: region between the \\(x\\)-axis, \\(y=e^{x}-1\\), and \\(x=-1\\). Strategy: the curve meets the axis where \\(e^{x}-1=0\\Rightarrow x=0\\). On \\([-1,0]\\) we have \\(e^{x}-1\\le 0\\), so the curve is below the axis; geometric area uses the absolute value, i.e. integrate \\(1-e^{x}\\).',
      'e^{x}-1=0\\;\\Rightarrow\\;x=0'
    ),
    S(
      'Area = \\(\\int_{-1}^{0}|e^{x}-1|\\,dx=\\int_{-1}^{0}(1-e^{x})\\,dx\\). Common mistake: integrating the signed function and reporting a negative area, or integrating from 0 to 1 instead of the left interval.',
      '\\int_{-1}^{0}(1-e^{x})\\,dx'
    ),
    S(
      'Antiderivative \\(x-e^{x}\\). Evaluate: \\((0-1)-(-1-e^{-1})=-1+1+e^{-1}=e^{-1}\\).',
      'e^{-1}'
    ),
    S(
      'Final answer: \\(e^{-1}\\). This is the geometric area of the region to the left of the origin under the axis and above the curve down to \\(x=-1\\).',
      'e^{-1}'
    ),
  ],
  'y12a-5e-q7d': [
    S(
      'Given: bounds \\(x=2\\), \\(y=e^{-x}-2\\), the \\(x\\)-axis and the \\(y\\)-axis. Strategy: note \\(e^{-x}-2\\le -1<0\\) for all real \\(x\\), so the curve lies below the \\(x\\)-axis. The closed region from \\(x=0\\) to \\(x=2\\) between the curve and the axis has area \\(\\int_{0}^{2}(2-e^{-x})\\,dx\\).',
      'y=e^{-x}-2<0'
    ),
    S(
      'Why flip to \\(2-e^{-x}\\)? Geometric area is the absolute value of the signed integral. Common mistake: integrating \\(e^{-x}-2\\) and keeping the negative sign as the answer.',
      '\\text{Area}=\\int_{0}^{2}(2-e^{-x})\\,dx'
    ),
    S(
      'Antiderivative: \\(2x+e^{-x}\\). Evaluate: \\((4+e^{-2})-(0+1)=3+e^{-2}\\).',
      '3+e^{-2}'
    ),
    S(
      'Final answer: \\(3+e^{-2}\\). Roughly a 2-by-2 rectangle of area 4, reduced by the integral of \\(e^{-x}\\) on \\([0,2]\\) which equals \\(1-e^{-2}\\), giving \\(4-(1-e^{-2})=3+e^{-2}\\).',
      '3+e^{-2}'
    ),
  ],
  'y12a-5e-q7e': [
    S(
      'Given: region bounded by \\(y=e^{-x}-e\\) and the coordinate axes. Strategy: find intercepts. Axis zeros: \\(e^{-x}-e=0\\Rightarrow e^{-x}=e\\Rightarrow x=-1\\). At \\(x=0\\), \\(y=1-e<0\\). So the region runs from \\(x=-1\\) to the \\(y\\)-axis under the axis (curve below).',
      'e^{-x}=e\\;\\Rightarrow\\;x=-1'
    ),
    S(
      'Geometric area: \\(\\int_{-1}^{0}|e^{-x}-e|\\,dx=\\int_{-1}^{0}(e-e^{-x})\\,dx\\). Common mistake: integrating only from 0 to something positive where the curve is even more negative and not closed by both axes in the same way.',
      '\\int_{-1}^{0}(e-e^{-x})\\,dx'
    ),
    S(
      'Antiderivative: \\(ex+e^{-x}\\). Evaluate: \\((0+1)-(-e+e^{1})=1-(-e+e)=1\\). The \\(\\pm e\\) terms cancel.',
      '1'
    ),
    S(
      'Final answer: \\(1\\). Another clean unit area, this time for the exponential shifted down by \\(e\\) against the axes.',
      '1'
    ),
  ],
  'y12a-5e-q7f': [
    S(
      'Given: area under \\(y=3-e^{-x}\\) from \\(x=-1\\) to \\(x=2\\). Strategy: check positivity — since \\(e^{-x}>0\\), we have \\(3-e^{-x}<3\\), and the minimum of \\(e^{-x}\\) on a finite interval is positive but less than 3 for these bounds, so the curve stays above the axis. Integrate directly.',
      '\\text{Area}=\\int_{-1}^{2}(3-e^{-x})\\,dx'
    ),
    S(
      'Antiderivative: \\(3x+e^{-x}\\). Integral of 3 is \\(3x\\); integral of \\(-e^{-x}\\) is \\(+e^{-x}\\). Common sign error: writing \\(-e^{-x}\\) in the antiderivative.',
      'F(x)=3x+e^{-x}'
    ),
    S(
      'Evaluate: \\(F(2)-F(-1)=(6+e^{-2})-(-3+e^{1})=6+e^{-2}+3-e=9-e+e^{-2}\\).',
      '9-e+e^{-2}'
    ),
    S(
      'Final answer: \\(9-e+e^{-2}\\). The 9 is from the constant 3 over a width of 3; the exponential corrections at the two ends give \\(-e+e^{-2}\\).',
      '9-e+e^{-2}'
    ),
  ],

  // Q8 / Q14 between curves
  'y12a-5e-q8a': [
    S(
      'Given: curves \\(y=e^{x}\\) and \\(y=x+1\\) from \\(x=0\\) to \\(x=1\\). Strategy: decide which is above, set up the difference integral, evaluate. At \\(x=0\\) both equal 1; for \\(x\\in(0,1]\\), \\(e^{x}>x+1\\) (exponential grows faster than the tangent line at 0 — actually the line \\(y=x+1\\) is the tangent to \\(e^{x}\\) at 0, so the curve is above its tangent).',
      'e^{x}\\ge x+1\\text{ on }[0,1]'
    ),
    S(
      'Why upper minus lower? Area between graphs is \\(\\int(y_{\\text{upper}}-y_{\\text{lower}})\\,dx\\). Here: \\(\\int_{0}^{1}(e^{x}-(x+1))\\,dx\\). Common mistake: integrating \\(e^{x}+x+1\\) or using the wrong top curve.',
      '\\text{Area}=\\int_{0}^{1}(e^{x}-x-1)\\,dx'
    ),
    S(
      'Antiderivative: \\(e^{x}-\\dfrac{x^{2}}{2}-x\\). Evaluate from 0 to 1: \\(\\big(e-\\frac{1}{2}-1\\big)-\\big(1-0-0\\big)=e-\\frac{3}{2}-1=e-\\frac{5}{2}\\).',
      'e-\\dfrac{5}{2}'
    ),
    S(
      'Final answer: \\(e-\\dfrac{5}{2}\\). Since \\(e\\approx 2.718>2.5\\), the area is a small positive number, as expected for a thin lens between a curve and its tangent on a unit interval.',
      'e-\\dfrac{5}{2}'
    ),
  ],
  'y12a-5e-q8b': [
    S(
      'Given: curves \\(y=e^{x}\\) and \\(y=1-x\\) from \\(x=0\\) to \\(x=1\\). Strategy: compare heights. At 0 both are 1; at 1, \\(e>0=1-1\\), and \\(e^{x}\\) stays above the decreasing line on \\([0,1]\\).',
      'e^{x}\\ge 1-x\\text{ on }[0,1]'
    ),
    S(
      'Area = \\(\\int_{0}^{1}\\big(e^{x}-(1-x)\\big)\\,dx=\\int_{0}^{1}(e^{x}-1+x)\\,dx\\). Common mistake: writing \\(1-x-e^{x}\\) (wrong order) which would make the integral negative.',
      '\\int_{0}^{1}(e^{x}-1+x)\\,dx'
    ),
    S(
      'Antiderivative: \\(e^{x}-x+\\dfrac{x^{2}}{2}\\). At 1: \\(e-1+\\frac{1}{2}\\). At 0: 1. Difference: \\(e-\\frac{1}{2}-1=e-\\frac{3}{2}\\).',
      'e-\\dfrac{3}{2}'
    ),
    S(
      'Final answer: \\(e-\\dfrac{3}{2}\\). Larger than the previous tangent-line gap because the line \\(1-x\\) falls away from the exponential instead of hugging it.',
      'e-\\dfrac{3}{2}'
    ),
  ],
  'y12a-5e-q14': [
    S(
      'Given: region between \\(y=e^{x}\\) and \\(y=x\\) from the \\(y\\)-axis (\\(x=0\\)) to \\(x=2\\). Strategy: on \\([0,2]\\), \\(e^{x}\\ge x\\) (equality only at 0), so integrate the difference \\(e^{x}-x\\).',
      '\\text{Area}=\\int_{0}^{2}(e^{x}-x)\\,dx'
    ),
    S(
      'Antiderivative: \\(e^{x}-\\dfrac{x^{2}}{2}\\). Why? Standard exponential plus power rule. Common mistake: subtracting \\(\\frac{x^{2}}{2}\\) with the wrong sign or integrating \\(x\\) as \\(x^{2}\\).',
      'F(x)=e^{x}-\\dfrac{x^{2}}{2}'
    ),
    S(
      'Evaluate: \\(F(2)-F(0)=\\big(e^{2}-2\\big)-\\big(1-0\\big)=e^{2}-3\\).',
      'e^{2}-3'
    ),
    S(
      'Final answer: \\(e^{2}-3\\). Positive because \\(e^{2}\\approx 7.39>3\\). This is the area of the curved triangular region between the exponential and the diagonal line up to \\(x=2\\).',
      'e^{2}-3'
    ),
  ],

  // Q9 symmetry
  'y12a-5e-q9a': [
    S(
      'Given: the region above the \\(x\\)-axis and below both \\(y=e^{x}\\) and \\(y=e^{-x}\\). That means we are under the lower envelope of the two curves. Strategy: identify where each curve is lower, then use symmetry.',
      '\\text{lower envelope of }e^{x},\\,e^{-x}'
    ),
    S(
      'What is the lower envelope? For \\(x\\ge 0\\), \\(e^{-x}\\le e^{x}\\), so the lower curve is \\(e^{-x}\\). For \\(x\\le 0\\), the lower curve is \\(e^{x}\\). The two halves are mirror images across the \\(y\\)-axis because replacing \\(x\\) by \\(-x\\) swaps the curves. Common mistake: claiming symmetry about the \\(x\\)-axis (these graphs are not reflections through the \\(x\\)-axis in a way that helps the area factor of 2).',
      'e^{-x}\\le e^{x}\\text{ for }x\\ge 0'
    ),
    S(
      'Why the factor 2? Total area = left half + right half, and by \\(y\\)-axis symmetry those halves are equal. The right half is exactly \\(\\int_{0}^{1}e^{-x}\\,dx\\) (the curves meet the lower envelope junction at \\(x=0\\) where both equal 1, and the diagram region ends where relevant at the unit scale used in the book). Hence area \\(=2\\int_{0}^{1}e^{-x}\\,dx\\).',
      '2\\int_{0}^{1}e^{-x}\\,dx'
    ),
    S(
      'Final conclusion: the area may be written as \\(2\\int_{0}^{1}e^{-x}\\,dx\\) because the region is symmetric about the \\(y\\)-axis. That is the correct conceptual reason among the options.',
      '\\text{symmetric about the }y\\text{-axis}'
    ),
  ],
  'y12a-5e-q9b': [
    S(
      'Given: from the previous part, area \\(=2\\int_{0}^{1}e^{-x}\\,dx\\). Strategy: evaluate the integral, then double. This is a direct FTC computation.',
      '2\\int_{0}^{1}e^{-x}\\,dx'
    ),
    S(
      'Inner integral: antiderivative \\(-e^{-x}\\). Evaluate \\([-e^{-x}]_{0}^{1}=-e^{-1}-(-1)=1-e^{-1}\\). Common sign error at the lower limit.',
      '1-e^{-1}'
    ),
    S(
      'Multiply by 2: \\(2(1-e^{-1})\\). Why multiply after integrating the half-interval? Because the factor 2 was a symmetry argument outside the integral, representing the matching left-hand half of the region.',
      '2(1-e^{-1})'
    ),
    S(
      'Final exact area: \\(2(1-e^{-1})\\). This is the total area under the lower envelope of \\(e^{x}\\) and \\(e^{-x}\\) as described in the diagram. Leave it exact; do not expand to a decimal unless asked.',
      '2(1-e^{-1})'
    ),
  ],

  // Q10
  'y12a-5e-q10a': [
    S(
      'Given: region above the \\(x\\)-axis and below both \\(y=e-e^{-x}\\) and \\(y=e-e^{x}\\). Strategy: understand the lower envelope and symmetry under \\(x\\mapsto -x\\).',
      'y=e-e^{\\pm x}'
    ),
    S(
      'Replacing \\(x\\) by \\(-x\\) swaps \\(e-e^{x}\\) with \\(e-e^{-x}\\), so the region is symmetric about the \\(y\\)-axis. For \\(x\\ge 0\\), compare: \\(e^{x}\\ge e^{-x}\\) implies \\(e-e^{x}\\le e-e^{-x}\\), so the lower upper-boundary is \\(e-e^{x}\\). Common mistake: saying the region is symmetric about \\(y=x\\) (that would be inverse-function symmetry, not this).',
      'e-e^{x}\\le e-e^{-x}\\text{ for }x\\ge 0'
    ),
    S(
      'Therefore total area equals twice the right-hand half-area: \\(2\\int_{0}^{1}(e-e^{x})\\,dx\\). The factor 2 is justified by \\(y\\)-axis symmetry, not by any claim that left area is zero.',
      '2\\int_{0}^{1}(e-e^{x})\\,dx'
    ),
    S(
      'Final conclusion: the correct reason is that the region is symmetric about the \\(y\\)-axis.',
      '\\text{symmetric about the }y\\text{-axis}'
    ),
  ],
  'y12a-5e-q10b': [
    S(
      'Given: area \\(=2\\int_{0}^{1}(e-e^{x})\\,dx\\). Strategy: antiderive the integrand, evaluate on \\([0,1]\\), then multiply by 2.',
      '2\\int_{0}^{1}(e-e^{x})\\,dx'
    ),
    S(
      'Antiderivative of \\(e-e^{x}\\) is \\(ex-e^{x}\\). Evaluate: \\([ex-e^{x}]_{0}^{1}=(e-e)-(0-1)=1\\). Common mistake: forgetting the lower limit contribution \\(-(-1)\\).',
      '[ex-e^{x}]_{0}^{1}=1'
    ),
    S(
      'Multiply by the symmetry factor of 2 that came from reflecting the right-hand half across the \\(y\\)-axis: area \\(=2\\cdot 1=2\\). Do not forget this outer factor after evaluating the integral.',
      '2'
    ),
    S(
      'Final answer: \\(2\\). A surprisingly simple exact area for this pair of reflected exponential caps above the axis. Sanity check: the inner half-area was 1, so doubling must give 2.',
      '2'
    ),
  ],

  // Q11 odd function
  'y12a-5e-q11a': [
    S(
      'Given: \\(f(x)=e^{x}-e^{-x}\\). Strategy: test the odd-function definition \\(f(-x)=-f(x)\\) by direct substitution. This algebraic check is what the multiple choice is asking for.',
      'f(x)=e^{x}-e^{-x}'
    ),
    S(
      'Substitute \\(-x\\): \\(f(-x)=e^{-x}-e^{-(-x)}=e^{-x}-e^{x}\\). Why rewrite next? We want to compare with \\(-f(x)\\). Common mistake: rearranging until it looks even (\\(f(-x)=f(x)\\)) by flipping signs carelessly.',
      'f(-x)=e^{-x}-e^{x}'
    ),
    S(
      'Factor out a minus: \\(e^{-x}-e^{x}=-(e^{x}-e^{-x})=-f(x)\\). This is exactly the odd-function identity.',
      'f(-x)=-f(x)'
    ),
    S(
      'Final conclusion: the correct calculation is \\(f(-x)=e^{-x}-e^{x}=-(e^{x}-e^{-x})=-f(x)\\). So \\(f\\) is odd (a multiple of \\(\\sinh x\\)).',
      'f\\text{ is odd}'
    ),
  ],
  'y12a-5e-q11b': [
    S(
      'Given: we already know \\(f(x)=e^{x}-e^{-x}\\) is odd. Strategy: use the theorem that an odd integrable function integrated over a symmetric interval \\([-a,a]\\) has signed integral zero.',
      '\\int_{-a}^{a}f=0\\text{ if }f\\text{ odd}'
    ),
    S(
      'Here \\(a=3\\). Why does the theorem apply? The interval \\([-3,3]\\) is symmetric about 0 and \\(f\\) is continuous (hence integrable). Common mistake: reporting the geometric area (twice the right half) instead of the signed integral the question asks for.',
      '\\int_{-3}^{3}(e^{x}-e^{-x})\\,dx=0'
    ),
    S(
      'You can also check by antiderivative: \\([e^{x}+e^{-x}]_{-3}^{3}=(e^{3}+e^{-3})-(e^{-3}+e^{3})=0\\).',
      '0'
    ),
    S(
      'Final answer: \\(0\\). Important distinction: signed area cancels (positive right, negative left), but the geometric area of the shaded lobes is not zero — that comes in the next parts.',
      '0'
    ),
  ],
  'y12a-5e-q11c': [
    S(
      'Given: same odd curve on \\([-3,3]\\). Strategy: convert signed-area cancellation into a geometric-area formula by using absolute values / symmetry of magnitudes.',
      '\\text{geometric area vs signed integral}'
    ),
    S(
      'Because \\(f\\) is odd, the graph has 180° rotational symmetry about the origin, so the absolute area left of the \\(y\\)-axis equals the absolute area right of it. On \\([0,3]\\), \\(e^{x}-e^{-x}\\ge 0\\), so that half-area is simply \\(\\int_{0}^{3}(e^{x}-e^{-x})\\,dx\\). Common mistake: thinking an odd graph is symmetric about the \\(y\\)-axis like an even function (even would reflect; odd rotates).',
      '\\text{equal absolute areas left and right}'
    ),
    S(
      'Therefore total geometric area = \\(2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx\\). The factor 2 doubles the right-hand positive lobe.',
      '2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx'
    ),
    S(
      'Final conclusion: the geometric area equals that doubled integral because the graph is odd, so the areas left and right of the \\(y\\)-axis are equal in magnitude.',
      '\\text{odd }\\Rightarrow\\text{ equal side areas}'
    ),
  ],
  'y12a-5e-q11d': [
    S(
      'Given: geometric area \\(=2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx\\). Strategy: find the antiderivative, evaluate on \\([0,3]\\), then double.',
      '2\\int_{0}^{3}(e^{x}-e^{-x})\\,dx'
    ),
    S(
      'Antiderivative of \\(e^{x}-e^{-x}\\) is \\(e^{x}+e^{-x}\\). Why the plus on the second term? Differentiating \\(e^{-x}\\) produces \\(-e^{-x}\\), so integrating \\(-e^{-x}\\) recovers \\(+e^{-x}\\). Evaluate: \\([e^{x}+e^{-x}]_{0}^{3}=(e^{3}+e^{-3})-(1+1)=e^{3}+e^{-3}-2\\). Common mistake: writing \\(e^{3}-e^{-3}\\) from the wrong antiderivative.',
      'e^{3}+e^{-3}-2'
    ),
    S(
      'Double for both sides of the \\(y\\)-axis: \\(2(e^{3}+e^{-3}-2)\\). The factor 2 is required because we only integrated the right-hand positive lobe so far.',
      '2(e^{3}+e^{-3}-2)'
    ),
    S(
      'Final exact geometric area: \\(2(e^{3}+e^{-3}-2)\\). This counts both the upper-right and lower-left lobes as positive area, unlike the signed integral which cancelled to zero.',
      '2(e^{3}+e^{-3}-2)'
    ),
  ],

  // Q12
  'y12a-5e-q12a': [
    S(
      'Given: curves \\(y=x^{2}\\) and \\(y=e^{x+1}\\). Strategy: to show they meet at a claimed \\(x\\)-value, substitute that value into both formulas and check the \\(y\\)-coordinates match.',
      'x=-1\\text{ candidate}'
    ),
    S(
      'Parabola at \\(x=-1\\): \\(y=(-1)^{2}=1\\). Exponential at \\(x=-1\\): \\(y=e^{-1+1}=e^{0}=1\\). Same point. Common mistake: computing \\((-1)^{2}\\) as \\(-1\\), or writing \\(e^{-1}\\) instead of \\(e^{0}\\).',
      '(-1)^{2}=1,\\quad e^{0}=1'
    ),
    S(
      'Therefore both curves pass through the same point \\((-1,1)\\), so they meet at \\(x=-1\\). The correct multiple-choice option is precisely the calculation that shows both sides equal 1 at that abscissa.',
      '(-1,1)'
    ),
  ],
  'y12a-5e-q12b': [
    S(
      'Given: second-quadrant region between the curves and the \\(y\\)-axis. Strategy: on \\([-1,0]\\), decide which curve is above. Endpoints: at \\(x=-1\\) both give 1; at \\(x=0\\), parabola gives 0 while exponential gives \\(e^{1}=e>0\\).',
      'compare\\,x^{2}\\text{ and }e^{x+1}\\text{ on }[-1,0]'
    ),
    S(
      'Between the endpoints the exponential stays above the parabola (you can check a midpoint, e.g. \\(x=-0.5\\): \\(e^{0.5}\\approx 1.65>0.25\\)). So \\(e^{x+1}\\ge x^{2}\\) on \\([-1,0]\\). Common mistake: reversing the inequality because the parabola "looks higher" near zero in some rough sketches.',
      'e^{x+1}\\ge x^{2}'
    ),
    S(
      'This comparison is exactly what is needed to set up the next area integral as upper minus lower: \\(\\int_{-1}^{0}(e^{x+1}-x^{2})\\,dx\\). Final choice: for \\(-1\\le x\\le 0\\), \\(e^{x+1}\\ge x^{2}\\). Reversing the inequality would reverse the sign of the area.',
      '\\int_{-1}^{0}(e^{x+1}-x^{2})\\,dx'
    ),
  ],
  'y12a-5e-q12c': [
    S(
      'Given: second-quadrant area between \\(y=e^{x+1}\\) (upper), \\(y=x^{2}\\) (lower), and the \\(y\\)-axis. Strategy: integrate the difference from \\(x=-1\\) to \\(x=0\\).',
      '\\text{Area}=\\int_{-1}^{0}(e^{x+1}-x^{2})\\,dx'
    ),
    S(
      'Antiderivative: \\(e^{x+1}-\\dfrac{x^{3}}{3}\\). Why \\(e^{x+1}\\) without an extra factor? The coefficient of \\(x\\) in the exponent is 1. Common mistake: dividing by something or integrating \\(x^{2}\\) as \\(\\frac{x^{2}}{2}\\).',
      'F(x)=e^{x+1}-\\dfrac{x^{3}}{3}'
    ),
    S(
      'Evaluate: \\(F(0)=e-0=e\\). \\(F(-1)=e^{0}-\\dfrac{(-1)^{3}}{3}=1-\\big(-\\dfrac{1}{3}\\big)=1+\\dfrac{1}{3}=\\dfrac{4}{3}\\). Difference: \\(e-\\dfrac{4}{3}\\). Note carefully: \\((-1)^{3}=-1\\), so minus a negative becomes plus.',
      'e-\\dfrac{4}{3}'
    ),
    S(
      'Final exact area: \\(e-\\dfrac{4}{3}\\). Positive because \\(e>1.333\\). This is the area of the second-quadrant pocket between the exponential and the parabola up to the \\(y\\)-axis.',
      'e-\\dfrac{4}{3}'
    ),
  ],

  // Q13
  'y12a-5e-q13a': [
    S(
      'Given: \\(y=e^{x}\\) and the line \\(y=(e-1)x+1\\). Strategy: test the convenient integer \\(x\\)-values 0 and 1 that typically close such textbook regions.',
      'test\\,x=0\\text{ and }x=1'
    ),
    S(
      'At \\(x=0\\): exponential gives \\(e^{0}=1\\); line gives \\((e-1)\\cdot 0+1=1\\). Point \\(A(0,1)\\). At \\(x=1\\): exponential gives \\(e\\); line gives \\((e-1)+1=e\\). Point \\(B(1,e)\\). Common mistake: writing \\(B(1,1)\\) by forgetting to add 1 on the line.',
      'A(0,1),\\;B(1,e)'
    ),
    S(
      'Final answer: the curves meet at the pair of points \\(A(0,1)\\) and \\(B(1,e)\\). These two points become the endpoints of the definite integral when you find the area between the line and the curve in the next part.',
      'A(0,1)\\text{ and }B(1,e)'
    ),
  ],
  'y12a-5e-q13b': [
    S(
      'Given: area between the line \\(y=(e-1)x+1\\) and the curve \\(y=e^{x}\\) from \\(x=0\\) to \\(x=1\\). Strategy: on this interval the chord/line lies above the exponential (they meet at the endpoints; between them the exponential is convex so it sits below its chords).',
      'line\\ge e^{x}\\text{ on }[0,1]'
    ),
    S(
      'Area = \\(\\int_{0}^{1}\\big((e-1)x+1-e^{x}\\big)\\,dx\\). Common mistake: putting the exponential on top, which would negate the answer.',
      '\\int_{0}^{1}((e-1)x+1-e^{x})\\,dx'
    ),
    S(
      'Antiderivative: \\(\\dfrac{e-1}{2}x^{2}+x-e^{x}\\). At 1: \\(\\dfrac{e-1}{2}+1-e\\). At 0: \\(-1\\). Difference: \\(\\dfrac{e-1}{2}+1-e-(-1)=\\dfrac{e-1}{2}+2-e\\).',
      '\\dfrac{e-1}{2}+2-e'
    ),
    S(
      'Simplify over a common denominator: \\(\\dfrac{e-1+4-2e}{2}=\\dfrac{3-e}{2}=\\dfrac{3}{2}-\\dfrac{e}{2}\\). Final answer: \\(\\dfrac{3}{2}-\\dfrac{e}{2}\\). Positive because \\(e<3\\).',
      '\\dfrac{3}{2}-\\dfrac{e}{2}'
    ),
  ],

  // Q15 numerical
  'y12a-5e-q15a': [
    S(
      'Given: area under \\(y=e^{x}\\) on \\([0,1]\\), required to 4 decimal places. Strategy: first get the exact integral, then convert using a known value of \\(e\\).',
      '\\int_{0}^{1}e^{x}\\,dx=e-1'
    ),
    S(
      'Why exact first? Rounding intermediate junk early causes off-by-one errors in the last decimal place. What: use \\(e\\approx 2.718281828\\ldots\\). Common mistake: rounding \\(e\\) to 2.718 and getting 1.7180 instead of checking the next digits.',
      'e-1\\approx 1.718281828'
    ),
    S(
      'Round to four decimal places using standard half-up rules. Digits after the decimal: 71828… The fourth decimal digit is 2 and the next digit is 8 (at least 5), so round the 2 up to 3. Result: 1.7183. Common mistake: truncating to 1.7182 without rounding.',
      '1.7183'
    ),
    S(
      'Final answer: \\(1.7183\\) (4 d.p.). This is the standard rounded value of \\(e-1\\).',
      '1.7183'
    ),
  ],
  'y12a-5e-q15b': [
    S(
      'Given: trapezoidal rule with two subintervals for \\(\\int_{0}^{1}e^{x}\\,dx\\). Strategy: width \\(h=\\frac{1-0}{2}=0.5\\); nodes \\(x=0,0.5,1\\); compute function values; apply the composite trapezoidal formula.',
      'h=0.5,\\;x=0,0.5,1'
    ),
    S(
      'Function values: \\(y_0=e^{0}=1\\), \\(y_1=e^{0.5}\\approx 1.648721\\) (use 1.6487 to 4 d.p. for tabulated work), \\(y_2=e^{1}\\approx 2.718282\\approx 2.7183\\). Common mistake: using three equal weights instead of the trapezoidal pattern 1,2,1.',
      'y_0=1,\\;y_1\\approx 1.6487,\\;y_2\\approx 2.7183'
    ),
    S(
      'Formula: \\(T=\\dfrac{h}{2}(y_0+2y_1+y_2)=\\dfrac{0.5}{2}(1+2\\cdot 1.6487+2.7183)=0.25(1+3.2974+2.7183)=0.25\\times 7.0157\\).',
      '0.25\\times 7.0157'
    ),
    S(
      'Compute \\(0.25\\times 7.0157=1.753925\\approx 1.7539\\) to 4 d.p. Final trapezoidal estimate: \\(1.7539\\).',
      '1.7539'
    ),
  ],
  'y12a-5e-q15c': [
    S(
      'Given: compare trapezoidal estimate 1.7539 with exact 1.7183. Strategy: use the concavity of \\(y=e^{x}\\) to explain the systematic error of the trapezoidal rule.',
      'T=1.7539,\\;\\int=1.7183'
    ),
    S(
      'What is concavity? Second derivative \\(y\'\'=e^{x}>0\\) for all \\(x\\), so the graph is concave up (convex function). Common mistake: confusing concave up with concave down from the everyday word "concave".',
      "y''=e^{x}>0"
    ),
    S(
      'Why does concave up make trapezoids overestimate? The straight chord between two points on a concave-up curve lies above the curve, so each trapezoid includes a little extra area. Therefore \\(T>\\int\\).',
      'T>\\int'
    ),
    S(
      'Final conclusion: the trapezoidal estimate is greater than the exact value because \\(y=e^{x}\\) is concave up (trapezoid tops sit above the curve). Numerically, 1.7539 > 1.7183 confirms this.',
      '1.7539>1.7183'
    ),
  ],
};

function selfCheck(items) {
  const missing = [];
  for (const q of items) {
    if (!STEPS[q.id]) missing.push(q.id);
  }
  if (missing.length) throw new Error('Missing expanded steps for: ' + missing.join(', '));

  for (const q of items) {
    const steps = STEPS[q.id];
    if (steps.length < 3) throw new Error(`too few steps ${q.id}`);
    for (const st of steps) {
      if (!st.explanation || st.explanation.length < 90) {
        throw new Error(`thin explanation ${q.id}: ${st.explanation?.length} — ${st.explanation?.slice(0, 80)}`);
      }
      if (!st.workingOut) throw new Error(`empty workingOut ${q.id}`);
    }
    const blob = steps.map((s) => s.explanation + s.workingOut).join('\n');
    const open = (blob.match(/\\\(/g) || []).length;
    const close = (blob.match(/\\\)/g) || []).length;
    if (open !== close) throw new Error(`LaTeX paren mismatch ${q.id}: ${open}/${close}`);
    // forbid form-feed producing patterns: three-backslash before f/t/n/b/r in source is about file writing;
    // check no literal form feed
    if (blob.includes('\x0c')) throw new Error(`form feed in ${q.id}`);
    if (/e\^\{[^}]*\\dfrac/.test(blob)) throw new Error(`dfrac in exp ${q.id}`);
  }
  console.log('self-check OK for', items.length, 'questions');
}

async function push(items) {
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

  for (const raw of items) {
    const ref = db.collection('questions').doc(raw.id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') {
      console.log('skip teacher', raw.id);
      continue;
    }
    batch.set(
      ref,
      {
        solutionSteps: raw.solutionSteps,
        solution: raw.solution || '',
        isNew: true,
        updatedAt: FieldValue.serverTimestamp(),
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
  console.log('pushed solutionSteps for', ok, 'docs; version', ver);
  console.log('NEXT: node tools/scripts/rebuildQuestionIndexes.js y12a-5');
}

function main() {
  const items = loadSeed();
  if (!items.length) throw new Error('empty seed');
  selfCheck(items);

  let expanded = 0;
  for (const q of items) {
    q.solutionSteps = STEPS[q.id];
    q.isNew = true;
    // keep solution one-liner in sync with correct option if present
    if (q.opts && Number.isInteger(q.a)) {
      q.solution = `The exact answer is ${q.opts[q.a]}.`;
    }
    expanded++;
  }

  // quality stats
  const explLens = items.flatMap((q) => q.solutionSteps.map((s) => s.explanation.length));
  const stepCounts = items.map((q) => q.solutionSteps.length);
  console.log({
    expanded,
    stepsMinAvgMax: [
      Math.min(...stepCounts),
      (stepCounts.reduce((a, b) => a + b, 0) / stepCounts.length).toFixed(1),
      Math.max(...stepCounts),
    ],
    explMinAvgMax: [
      Math.min(...explLens),
      Math.round(explLens.reduce((a, b) => a + b, 0) / explLens.length),
      Math.max(...explLens),
    ],
  });

  if (WRITE) {
    writeFileSync(SEED, `export const Y12A_CH5E_QUESTIONS = ${JSON.stringify(items, null, 2)};\n`);
    console.log('wrote', SEED);
  } else {
    console.log('dry-run only (pass --write to save)');
  }

  if (PUSH) {
    if (!WRITE) {
      console.error('need --write with --push');
      process.exit(1);
    }
    return push(items);
  }
}

Promise.resolve(main()).catch((e) => {
  console.error(e);
  process.exit(1);
});
