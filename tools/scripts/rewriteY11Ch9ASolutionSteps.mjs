/**
 * Rewrite ALL y11a-9A solutionSteps with problem-specific calculus working
 * (replaces generic template explanations).
 *
 * Usage: node tools/scripts/rewriteY11Ch9ASolutionSteps.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const seedPath = path.resolve(__dirname, '../../src/constants/seedYear11Ch9AQuestions.js');

const step = (explanation, workingOut) => ({
  explanation,
  workingOut,
  graphData: null,
});

/** @type {Record<string, Array<{explanation:string, workingOut:string, graphData:null}>>} */
const STEPS = {};

// ─── Linear: expand f(x)= (3/5)(x+7) ───────────────────────────────────────
STEPS['2vDD36PdmHTG2GaZrPho'] = [
  step(
    'The stem gives a template function and a swapped version. Work with the swapped function \\(f(x) = \\frac{3}{5}(x + 7)\\). Goal: rewrite it as \\(f(x) = mx + b\\), then read off the derivative.',
    '\\(f(x) = \\frac{3}{5}(x + 7)\\)'
  ),
  step(
    'Expand the brackets by distributing the coefficient \\(\\frac{3}{5}\\) onto each term inside.',
    '\\(f(x) = \\frac{3}{5} \\cdot x + \\frac{3}{5} \\cdot 7\\)'
  ),
  step(
    'Simplify the constant term: \\(\\frac{3}{5} \\times 7 = \\frac{21}{5}\\). The function is now in gradient–intercept form with gradient \\(m = \\frac{3}{5}\\) and intercept \\(b = \\frac{21}{5}\\).',
    '\\(f(x) = \\frac{3}{5}x + \\frac{21}{5}\\)'
  ),
  step(
    'For any linear function \\(f(x) = mx + b\\), the derivative is the constant gradient: \\(f\'(x) = m\\). Here \\(m = \\frac{3}{5}\\).',
    '\\(f\'(x) = \\frac{3}{5}\\)'
  ),
  step(
    'Combine both results. This matches option 0 exactly.',
    '\\(f(x) = \\frac{3}{5}x + \\frac{21}{5},\\; f\'(x) = \\frac{3}{5}\\)'
  ),
];

// ─── Linear: rearrange f(x)=9-6x ───────────────────────────────────────────
STEPS['7PPC7oiOaepmADEZfSxB'] = [
  step(
    'Use the swapped function \\(f(x) = 9 - 6x\\). Rewrite it so the \\(x\\)-term comes first, matching the standard form \\(f(x) = mx + b\\).',
    '\\(f(x) = 9 - 6x\\)'
  ),
  step(
    'Commutativity of addition lets us reorder the terms: write the multiple of \\(x\\) before the constant.',
    '\\(f(x) = -6x + 9\\)'
  ),
  step(
    'Identify the gradient and intercept: the coefficient of \\(x\\) is \\(m = -6\\) and the constant term is \\(b = 9\\).',
    '\\(m = -6,\\; b = 9\\)'
  ),
  step(
    'Differentiate a linear function by taking its gradient. The derivative of \\(mx + b\\) is the constant \\(m\\).',
    '\\(f\'(x) = -6\\)'
  ),
  step(
    'State the expanded form and its derivative together.',
    '\\(f(x) = -6x + 9,\\; f\'(x) = -6\\)'
  ),
];

// ─── Linear: already mx+b, f(x)=4x+7 ───────────────────────────────────────
STEPS['ByHdszMLRJ35yOo60bR7'] = [
  step(
    'Use the swapped function \\(f(x) = 4x + 7\\). It is already written in the form \\(f(x) = mx + b\\).',
    '\\(f(x) = 4x + 7\\)'
  ),
  step(
    'Read the parameters directly: the coefficient of \\(x\\) is the gradient, and the constant term is the intercept.',
    '\\(m = 4,\\; b = 7\\)'
  ),
  step(
    'By the differentiation rule for linear functions, \\(\\dfrac{d}{dx}(mx + b) = m\\). The intercept does not affect the derivative.',
    '\\(f\'(x) = m = 4\\)'
  ),
  step(
    'Interpret geometrically: the graph is a straight line of constant slope 4, so the tangent gradient is 4 at every point.',
    '\\(f\'(x) = 4\\)'
  ),
  step(
    'Final answer: the linear form and its constant derivative.',
    '\\(f(x) = 4x + 7,\\; f\'(x) = 4\\)'
  ),
];

// ─── Algebraic: (a-bx)/c + (a+bx)/c ────────────────────────────────────────
STEPS['GIm2Pehi0FwXVeWO7OZU'] = [
  step(
    'Use the swapped expression \\(f(x) = \\dfrac{a - bx}{c} + \\dfrac{a + bx}{c}\\). Both fractions share denominator \\(c\\), so combine the numerators.',
    '\\(f(x) = \\dfrac{(a - bx) + (a + bx)}{c}\\)'
  ),
  step(
    'Expand the numerator carefully, grouping constant terms and coefficients of \\(x\\).',
    '\\(f(x) = \\dfrac{a - bx + a + bx}{c} = \\dfrac{(a + a) + (-bx + bx)}{c}\\)'
  ),
  step(
    'The linear terms cancel: \\(-bx + bx = 0\\). Only the constant remains: \\(a + a = 2a\\). So \\(f\\) does not depend on \\(x\\).',
    '\\(f(x) = \\dfrac{2a}{c}\\)'
  ),
  step(
    'A constant function has zero rate of change. Differentiating with respect to \\(x\\) therefore gives zero (the graph is a horizontal line).',
    '\\(f\'(x) = 0\\)'
  ),
  step(
    'Combine the simplified function and its derivative.',
    '\\(f(x) = \\dfrac{2a}{c},\\; f\'(x) = 0\\)'
  ),
];

// ─── Linear: f(x)=(1/5)x - 3 ───────────────────────────────────────────────
STEPS['I8KnnE8QOqx3hcElXeOb'] = [
  step(
    'Use the swapped function \\(f(x) = \\frac{1}{5}x - 3\\). It is already in gradient–intercept form \\(mx + b\\).',
    '\\(f(x) = \\frac{1}{5}x - 3\\)'
  ),
  step(
    'Identify the parameters: the coefficient of \\(x\\) is the gradient and the constant is the intercept.',
    '\\(m = \\frac{1}{5},\\; b = -3\\)'
  ),
  step(
    'Apply the linear differentiation rule: the derivative equals the gradient coefficient only; the constant term differentiates to zero.',
    '\\(f\'(x) = m = \\frac{1}{5}\\)'
  ),
  step(
    'Check a common error: the derivative is not \\(-3\\) (that is the intercept) and not \\(\\frac{1}{5}x\\) (that would still involve \\(x\\)).',
    '\\(f\'(x) = \\frac{1}{5}\\)'
  ),
  step(
    'State both results together.',
    '\\(f(x) = \\frac{1}{5}x - 3,\\; f\'(x) = \\frac{1}{5}\\)'
  ),
];

// ─── Linear general: f(x)=px+q ─────────────────────────────────────────────
STEPS['IWzJl6oLgrtk3Vdf559h'] = [
  step(
    'Use the swapped general linear function \\(f(x) = px + q\\). Compare it with the standard form \\(f(x) = mx + b\\).',
    '\\(f(x) = px + q\\)'
  ),
  step(
    'Match coefficients: the gradient parameter is the coefficient of \\(x\\), and the intercept parameter is the constant term.',
    '\\(m = p,\\; b = q\\)'
  ),
  step(
    'Differentiate: for \\(f(x) = mx + b\\) we always have \\(f\'(x) = m\\). Substituting \\(m = p\\) gives a constant derivative.',
    '\\(f\'(x) = p\\)'
  ),
  step(
    'Note that the intercept \\(q\\) does not appear in the derivative. Only the slope coefficient survives differentiation.',
    '\\(\\dfrac{d}{dx}(px + q) = p\\)'
  ),
  step(
    'Final answer: the function stays \\(px + q\\) and its derivative is the constant \\(p\\).',
    '\\(f(x) = px + q,\\; f\'(x) = p\\)'
  ),
];

// ─── Constant sum of fractions: 2/5 + 3/4 ──────────────────────────────────
STEPS['OuQnEVwwRL8f2uCXRm9m'] = [
  step(
    'Use the swapped constant expression \\(f(x) = \\frac{2}{5} + \\frac{3}{4}\\). First combine the two fractions into a single constant value.',
    '\\(f(x) = \\frac{2}{5} + \\frac{3}{4}\\)'
  ),
  step(
    'The LCD of 5 and 4 is 20. Rewrite each fraction over 20.',
    '\\(\\frac{2}{5} = \\frac{8}{20},\\quad \\frac{3}{4} = \\frac{15}{20}\\)'
  ),
  step(
    'Add the numerators: \\(8 + 15 = 23\\). So the function is the constant \\(\\frac{23}{20}\\). In the form \\(mx + b\\) this is \\(0 \\cdot x + \\frac{23}{20}\\).',
    '\\(f(x) = \\frac{23}{20} = 0x + \\frac{23}{20}\\)'
  ),
  step(
    'A constant function has gradient zero everywhere, because its graph is a horizontal line. Hence the derivative is identically zero.',
    '\\(f\'(x) = 0\\)'
  ),
  step(
    'Combine the simplified constant value and its derivative.',
    '\\(f(x) = \\frac{23}{20},\\; f\'(x) = 0\\)'
  ),
];

// ─── Rational: f(x)=2/x, gradient at x=-1 ──────────────────────────────────
STEPS['YKiaspTby4hrwTTvDcJr'] = [
  step(
    'Use the swapped rational function \\(f(x) = \\frac{2}{x}\\). Rewrite with a negative index so the power rule applies.',
    '\\(f(x) = 2x^{-1}\\)'
  ),
  step(
    'Differentiate using the power rule: bring the exponent down as a multiplier and reduce the exponent by 1. Coefficient 2 is kept.',
    '\\(f\'(x) = 2 \\cdot (-1) x^{-1-1} = -2x^{-2}\\)'
  ),
  step(
    'Rewrite the derivative in fractional form for readability.',
    '\\(f\'(x) = -\\frac{2}{x^{2}}\\)'
  ),
  step(
    'The gradient of the tangent at a point equals the derivative evaluated there. Substitute \\(x = -1\\). Note that \\((-1)^{2} = 1\\).',
    '\\(f\'(-1) = -\\frac{2}{(-1)^{2}} = -\\frac{2}{1} = -2\\)'
  ),
  step(
    'State the derived function and the tangent gradient at \\(x = -1\\).',
    '\\(f\'(x) = -\\frac{2}{x^{2}}\\text{ and gradient at }x=-1\\text{ is }-2\\)'
  ),
];

// ─── Linear fraction: (7-4x)/3 ──────────────────────────────────────────────
STEPS['c9UMbkmFxl8eSdYqXPny'] = [
  step(
    'Use the swapped function \\(f(x) = \\dfrac{7 - 4x}{3}\\). Split the single fraction into two separate terms.',
    '\\(f(x) = \\dfrac{7}{3} - \\dfrac{4x}{3}\\)'
  ),
  step(
    'Rewrite so the multiple of \\(x\\) appears first, matching \\(f(x) = mx + b\\).',
    '\\(f(x) = -\\dfrac{4}{3}x + \\dfrac{7}{3}\\)'
  ),
  step(
    'Read off the gradient and intercept from this standard form.',
    '\\(m = -\\dfrac{4}{3},\\; b = \\dfrac{7}{3}\\)'
  ),
  step(
    'Differentiate: for a linear function the derivative is the constant gradient coefficient.',
    '\\(f\'(x) = -\\dfrac{4}{3}\\)'
  ),
  step(
    'Final combined statement of the linear form and its derivative.',
    '\\(f(x) = -\\dfrac{4}{3}x + \\dfrac{7}{3},\\; f\'(x) = -\\dfrac{4}{3}\\)'
  ),
];

// ─── Quadratic: f(x)=9-x^2, gradient at x=2 ────────────────────────────────
STEPS['ckqjntmz67BQBCqKRJv5'] = [
  step(
    'Use the swapped quadratic \\(f(x) = 9 - x^{2}\\). This is a downward-opening parabola with vertex at \\((0, 9)\\).',
    '\\(f(x) = 9 - x^{2}\\)'
  ),
  step(
    'Differentiate term by term. The derivative of the constant 9 is 0. For the power term use \\(\\dfrac{d}{dx}(x^{n}) = nx^{n-1}\\) on \\(-x^{2}\\).',
    '\\(f\'(x) = 0 - 2x = -2x\\)'
  ),
  step(
    'The gradient of the tangent at a specific point is the derivative evaluated at that \\(x\\)-value. Substitute \\(x = 2\\).',
    '\\(f\'(2) = -2(2) = -4\\)'
  ),
  step(
    'Check geometrically: at \\(x = 2\\), the point on the curve is \\((2, 9 - 4) = (2, 5)\\). The curve is decreasing there, so a negative slope of \\(-4\\) is consistent.',
    '\\(f(2) = 5,\\; \\text{tangent slope } = -4\\)'
  ),
  step(
    'State the derived function and the exact tangent gradient at \\(x = 2\\).',
    '\\(f\'(x) = -2x\\text{ and gradient at }x=2\\text{ is }-4\\)'
  ),
];

// ─── Difference of squares: (x+4)^2 - (x-4)^2 ──────────────────────────────
STEPS['iAfcRP653wbAk7ksdYCS'] = [
  step(
    'Use the swapped expression \\(f(x) = (x + 4)^{2} - (x - 4)^{2}\\). Expand each squared binomial with \\((a \\pm b)^{2} = a^{2} \\pm 2ab + b^{2}\\).',
    '\\((x+4)^{2} = x^{2} + 8x + 16,\\quad (x-4)^{2} = x^{2} - 8x + 16\\)'
  ),
  step(
    'Subtract the second expansion from the first. Distribute the minus sign carefully across every term of the second bracket.',
    '\\(f(x) = (x^{2} + 8x + 16) - (x^{2} - 8x + 16)\\)'
  ),
  step(
    'Remove brackets: the minus flips the signs of \\(-8x\\) and \\(+16\\).',
    '\\(f(x) = x^{2} + 8x + 16 - x^{2} + 8x - 16\\)'
  ),
  step(
    'Collect like terms. The \\(x^{2}\\) terms cancel and the constants cancel, leaving only the linear term.',
    '\\(f(x) = (8x + 8x) = 16x\\)'
  ),
  step(
    'Now \\(f(x) = 16x\\) is linear with gradient 16. Differentiate: \\(f\'(x) = 16\\).',
    '\\(f(x) = 16x,\\; f\'(x) = 16\\)'
  ),
];

// ─── Exponential: f(x)=3^x, gradient at x=1 ────────────────────────────────
STEPS['jCXo8UoZ3kyYwQ1lhxXg'] = [
  step(
    'Use the swapped exponential \\(f(x) = 3^{x}\\). Recall the standard derivative rule for a constant base \\(a > 0\\), \\(a \\neq 1\\).',
    '\\(\\dfrac{d}{dx}\\bigl(a^{x}\\bigr) = a^{x}\\ln a\\)'
  ),
  step(
    'Here the base is \\(a = 3\\). Substitute into the rule to obtain the derived function. The natural logarithm of the base appears as a constant factor.',
    '\\(f\'(x) = 3^{x}\\ln 3\\)'
  ),
  step(
    'The tangent gradient at a point is the derivative evaluated there. Substitute \\(x = 1\\).',
    '\\(f\'(1) = 3^{1}\\ln 3 = 3\\ln 3\\)'
  ),
  step(
    'Leave the answer exact: do not replace \\(\\ln 3\\) by a decimal approximation unless asked. Note that the gradient is not simply 3 (that would omit the log factor).',
    '\\(f\'(1) = 3\\ln 3\\)'
  ),
  step(
    'State the derived function and the exact tangent gradient at \\(x = 1\\).',
    '\\(f\'(x) = 3^{x}\\ln 3\\text{ and gradient at }x=1\\text{ is }3\\ln 3\\)'
  ),
];

// ─── Constant: f(x)=-8 ─────────────────────────────────────────────────────
STEPS['jHIUaKkyA8IFfgs7M837'] = [
  step(
    'Use the swapped constant function \\(f(x) = -8\\). Write it in the form \\(mx + b\\) by making the coefficient of \\(x\\) explicit.',
    '\\(f(x) = -8 = 0x - 8\\)'
  ),
  step(
    'Identify the gradient and intercept parameters from this writing.',
    '\\(m = 0,\\; b = -8\\)'
  ),
  step(
    'Geometrically, \\(y = -8\\) is a horizontal line. Every horizontal line has slope zero at every point.',
    '\\(f\'(x) = 0\\)'
  ),
  step(
    'Algebraically the same result follows: the derivative of any constant is zero, so the intercept value \\(-8\\) does not appear in \\(f\'(x)\\).',
    '\\(\\dfrac{d}{dx}(-8) = 0\\)'
  ),
  step(
    'Final answer: the constant function and its zero derivative.',
    '\\(f(x) = -8,\\; f\'(x) = 0\\)'
  ),
];

// ─── Graph properties: odd, g(5)=0, g'(2)=0, g'>0 for x>2 ─────────────────
STEPS['mFAlFEL8L2WU3RfHTp6D'] = [
  step(
    'Condition 1: \\(g\\) is an odd function, so its graph has 180° rotational symmetry about the origin: \\(g(-x) = -g(x)\\). Eliminate any graphs that look even (mirror symmetry in the \\(y\\)-axis) or lack origin symmetry.',
    '\\(g(-x) = -g(x)\\quad\\text{(odd)}\\)'
  ),
  step(
    'Condition 2: \\(g(5) = 0\\) means the curve crosses the \\(x\\)-axis at \\(x = 5\\). Keep only graphs that pass through the point \\((5, 0)\\).',
    '\\(g(5) = 0\\)'
  ),
  step(
    'Condition 3: \\(g\'(2) = 0\\) means the tangent is horizontal at \\(x = 2\\) — a stationary point (turning point or horizontal inflection) on the curve at that abscissa.',
    '\\(g\'(2) = 0\\)'
  ),
  step(
    'Condition 4: \\(g\'(x) > 0\\) for all \\(x > 2\\) means the function is strictly increasing to the right of \\(x = 2\\). Discard any remaining graph that falls after \\(x = 2\\).',
    '\\(g\'(x) > 0\\text{ for }x > 2\\)'
  ),
  step(
    'Only Graph C satisfies all four conditions simultaneously (odd symmetry, root at 5, stationary at 2, and increasing for \\(x > 2\\)). The correct option is C, which is index 2.',
    '\\(\\text{Answer: } C\\)'
  ),
];

// ─── Expand f(x)=(3/4)(5 - (2/3)x) ─────────────────────────────────────────
STEPS['oDCwSXbzqSOdjzYKNin3'] = [
  step(
    'Use the swapped function \\(f(x) = \\frac{3}{4}\\bigl(5 - \\frac{2}{3}x\\bigr)\\). Expand by distributing \\(\\frac{3}{4}\\) across both terms inside the brackets.',
    '\\(f(x) = \\frac{3}{4} \\cdot 5 - \\frac{3}{4} \\cdot \\frac{2}{3}x\\)'
  ),
  step(
    'Compute each product separately. First the constant term: \\(\\frac{3}{4} \\times 5 = \\frac{15}{4}\\).',
    '\\(\\frac{3}{4} \\times 5 = \\frac{15}{4}\\)'
  ),
  step(
    'Next the coefficient of \\(x\\): \\(\\frac{3}{4} \\times \\frac{2}{3} = \\frac{6}{12} = \\frac{1}{2}\\). So the second term is \\(-\\frac{1}{2}x\\).',
    '\\(f(x) = \\frac{15}{4} - \\frac{1}{2}x\\)'
  ),
  step(
    'Reorder into the standard form \\(mx + b\\) with the gradient term first. Then \\(m = -\\frac{1}{2}\\) and \\(b = \\frac{15}{4}\\).',
    '\\(f(x) = -\\frac{1}{2}x + \\frac{15}{4}\\)'
  ),
  step(
    'Differentiate the linear form: the derivative is the constant gradient \\(m\\).',
    '\\(f(x) = -\\frac{1}{2}x + \\frac{15}{4},\\; f\'(x) = -\\frac{1}{2}\\)'
  ),
];

// ─── Compound: (5+7x)/3 - (2-4x)/3 ─────────────────────────────────────────
STEPS['xj0uwoXfKZlZ9NJD5oni'] = [
  step(
    'Use the swapped compound expression \\(f(x) = \\dfrac{5 + 7x}{3} - \\dfrac{2 - 4x}{3}\\). Both fractions share denominator 3, so combine over a single fraction.',
    '\\(f(x) = \\dfrac{(5 + 7x) - (2 - 4x)}{3}\\)'
  ),
  step(
    'Expand the numerator by distributing the minus sign through the second bracket. Watch the sign change on \\(-4x\\).',
    '\\(f(x) = \\dfrac{5 + 7x - 2 + 4x}{3}\\)'
  ),
  step(
    'Collect like terms in the numerator: constants \\(5 - 2 = 3\\) and coefficients of \\(x\\) give \\(7x + 4x = 11x\\).',
    '\\(f(x) = \\dfrac{3 + 11x}{3}\\)'
  ),
  step(
    'Split the fraction into two terms and simplify the constant: \\(\\frac{3}{3} = 1\\). This yields gradient–intercept form.',
    '\\(f(x) = \\frac{11}{3}x + 1\\)'
  ),
  step(
    'Differentiate the linear function: the derivative equals the gradient coefficient \\(\\frac{11}{3}\\).',
    '\\(f(x) = \\frac{11}{3}x + 1,\\; f\'(x) = \\frac{11}{3}\\)'
  ),
];

// ─── Apply to seed file ────────────────────────────────────────────────────
const { Y11_CH9A_QUESTIONS } = await import(pathToFileURL(seedPath).href);

const idsInSeed = Y11_CH9A_QUESTIONS.map((q) => q.id);
const missingSteps = idsInSeed.filter((id) => !STEPS[id]);
const extraSteps = Object.keys(STEPS).filter((id) => !idsInSeed.includes(id));

if (missingSteps.length) {
  console.error('Missing STEPS for:', missingSteps);
  process.exit(1);
}
if (extraSteps.length) {
  console.warn('Extra STEPS (not in seed):', extraSteps);
}

let updated = 0;
for (const q of Y11_CH9A_QUESTIONS) {
  const steps = STEPS[q.id];
  if (!steps || steps.length < 4) {
    console.error(`Abort: ${q.id} has ${steps?.length ?? 0} steps (<4)`);
    process.exit(1);
  }
  // Guard: no generic template leftovers
  const bad = steps.some(
    (s) =>
      s.workingOut === 'Given data' ||
      s.workingOut === 'Apply the appropriate standard form' ||
      (s.explanation || '').includes('Strategy for Tangents and the derivative')
  );
  if (bad) {
    console.error(`Abort: ${q.id} still has generic template text`);
    process.exit(1);
  }
  q.solutionSteps = steps;
  // Keep solution text aligned with the new step narrative (plain English + LaTeX)
  q.solution = steps
    .map((s, i) => `**Step ${i + 1}:** ${s.explanation}\n${s.workingOut}`)
    .join('\n\n');
  updated++;
}

const header = 'export const Y11_CH9A_QUESTIONS = ';
const body = JSON.stringify(Y11_CH9A_QUESTIONS, null, 2);
fs.writeFileSync(seedPath, header + body + ';\n', 'utf8');

const stepCounts = {};
for (const q of Y11_CH9A_QUESTIONS) {
  const n = q.solutionSteps.length;
  stepCounts[n] = (stepCounts[n] || 0) + 1;
}
console.log(`Rewrote solutionSteps for ${updated} questions in ${seedPath}`);
console.log('Step-count distribution:', stepCounts);
console.log(
  'Sample first step (Q1):',
  Y11_CH9A_QUESTIONS[0].solutionSteps[0].workingOut
);
