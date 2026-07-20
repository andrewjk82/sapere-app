/**
 * Expand all Y12A 5L solutionSteps to detailed Why/What/mistake style
 * (matching y12a-5l-q16 quality). Also fixes known wrong option keys:
 *   q13: e^e - e + 1
 *   q19: 2e + 2/e - 4
 *
 * Usage:
 *   node tools/scripts/expandY12ACh5LSteps.cjs
 *   node tools/scripts/expandY12ACh5LSteps.cjs --push
 */
'use strict';

const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12Ch5LQuestions.js');
const PUSH = process.argv.includes('--push');

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

/** @type {Record<string, Array<{explanation:string,workingOut:string,graphData:null}>>} */
const STEPS = {
  'y12a-5l-q1': [
    S(
      'Given: \\(y = e^{4x}\\). Strategy: chain rule for the exponential. Write the inside as \\(u = 4x\\). Why? The derivative of \\(e^{u}\\) is \\(e^{u}\\,u\'\\), so we need \\(u\'\\) first.',
      '\\(y = e^{4x},\\quad u = 4x\\)'
    ),
    S(
      'Differentiate the inside: \\(u\' = 4\\). Apply the chain rule: \\(\\dfrac{dy}{dx} = e^{u}\\cdot u\' = e^{4x}\\cdot 4\\).',
      '\\(y\' = 4e^{4x}\\)'
    ),
    S(
      'A common slip is forgetting the chain-rule factor 4 (giving only \\(e^{4x}\\)), or writing \\(e^{4x}\\ln 4\\) (that rule is for \\(a^{x}\\), not \\(e^{kx}\\)).',
      '\\(y\' = 4e^{4x}\\)'
    ),
    S(
      'Final answer: \\(4e^{4x}\\).',
      '\\(4e^{4x}\\)'
    ),
  ],

  'y12a-5l-q2': [
    S(
      'Given: \\(y = e^{3x^{2}-1}\\). Strategy: chain rule with inside \\(u = 3x^{2}-1\\). Why? Again, \\(\\dfrac{d}{dx}e^{u} = e^{u}u\'\\).',
      '\\(u = 3x^{2}-1\\)'
    ),
    S(
      'Differentiate the inside: \\(u\' = 6x\\). (Derivative of \\(3x^{2}\\) is \\(6x\\); the constant \\(-1\\) vanishes.)',
      '\\(u\' = 6x\\)'
    ),
    S(
      'Therefore \\(y\' = e^{3x^{2}-1}\\cdot 6x = 6x\\,e^{3x^{2}-1}\\). A common slip is taking only the coefficient 3 (missing the chain factor from \\(x^{2}\\)), or writing \\((6x-1)e^{\\ldots}\\) by incorrectly differentiating the constant inside.',
      '\\(y\' = 6x e^{3x^{2}-1}\\)'
    ),
    S(
      'Final answer: \\(6x e^{3x^{2}-1}\\).',
      '\\(6x e^{3x^{2}-1}\\)'
    ),
  ],

  'y12a-5l-q3': [
    S(
      'Given: \\(y = x^{2}e^{-x}\\). Strategy: product rule. Set \\(u = x^{2}\\) and \\(v = e^{-x}\\). Why product rule? The expression is a product of a power and an exponential.',
      '\\(u = x^{2},\\quad v = e^{-x}\\)'
    ),
    S(
      'Differentiate each factor: \\(u\' = 2x\\). For \\(v\\), chain rule gives \\(v\' = -e^{-x}\\).',
      '\\(u\' = 2x,\\quad v\' = -e^{-x}\\)'
    ),
    S(
      'Product rule: \\(y\' = u\'v + uv\' = 2x\\,e^{-x} + x^{2}(-e^{-x}) = 2x e^{-x} - x^{2}e^{-x}\\).',
      '\\(y\' = 2x e^{-x} - x^{2}e^{-x}\\)'
    ),
    S(
      'Factor out the common \\(e^{-x}\\): \\(y\' = e^{-x}(2x - x^{2})\\). A common slip is the sign on the second term (forgetting that \\(\\dfrac{d}{dx}e^{-x} = -e^{-x}\\)).',
      '\\(y\' = e^{-x}(2x - x^{2})\\)'
    ),
    S(
      'Final answer: \\(e^{-x}(2x - x^{2})\\).',
      '\\(e^{-x}(2x - x^{2})\\)'
    ),
  ],

  'y12a-5l-q4': [
    S(
      'Given: \\(\\displaystyle\\int 5e^{2x}\\,dx\\). Strategy: use \\(\\displaystyle\\int e^{kx}\\,dx = \\dfrac{1}{k}e^{kx}+C\\) with constant factor 5 and \\(k = 2\\).',
      '\\(\\int 5e^{2x}\\,dx = 5\\int e^{2x}\\,dx\\)'
    ),
    S(
      'Integrate: \\(5\\cdot\\dfrac{1}{2}e^{2x}+C = \\dfrac{5}{2}e^{2x}+C\\). Check by differentiating: derivative of \\(\\dfrac{5}{2}e^{2x}\\) is \\(\\dfrac{5}{2}\\cdot 2e^{2x} = 5e^{2x}\\).',
      '\\(\\dfrac{5}{2}e^{2x}+C\\)'
    ),
    S(
      'A common slip is forgetting to divide by 2 (writing \\(5e^{2x}+C\\)), or multiplying by 2 instead of dividing.',
      '\\(\\dfrac{5}{2}e^{2x}+C\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{5}{2}e^{2x}+C\\).',
      '\\(\\dfrac{5}{2}e^{2x}+C\\)'
    ),
  ],

  'y12a-5l-q5': [
    S(
      'Given: \\(\\displaystyle\\int_0^{1} e^{3x}\\,dx\\). Strategy: find the antiderivative, then evaluate at the limits.',
      '\\(\\int_0^{1} e^{3x}\\,dx\\)'
    ),
    S(
      'Antiderivative of \\(e^{3x}\\) is \\(\\dfrac{1}{3}e^{3x}\\) (because the chain-rule factor 3 must be cancelled by dividing by 3).',
      '\\(\\dfrac{1}{3}e^{3x}\\)'
    ),
    S(
      'Evaluate: \\(\\left[\\dfrac{1}{3}e^{3x}\\right]_0^{1} = \\dfrac{1}{3}e^{3} - \\dfrac{1}{3}e^{0} = \\dfrac{1}{3}e^{3} - \\dfrac{1}{3}\\cdot 1 = \\dfrac{e^{3}-1}{3}\\).',
      '\\(\\dfrac{e^{3}-1}{3}\\)'
    ),
    S(
      'A common slip is forgetting the factor \\(\\dfrac{1}{3}\\) (leaving \\(e^{3}-1\\)), or evaluating only at the upper limit.',
      '\\(\\dfrac{e^{3}-1}{3}\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{e^{3}-1}{3}\\).',
      '\\(\\dfrac{e^{3}-1}{3}\\)'
    ),
  ],

  'y12a-5l-q6': [
    S(
      'Given: \\(y = \\ln(5x+3)\\). Strategy: chain rule for natural log. Recall \\(\\dfrac{d}{dx}\\ln u = \\dfrac{1}{u}\\,u\'\\) with \\(u = 5x+3\\).',
      '\\(u = 5x+3\\)'
    ),
    S(
      'Differentiate the inside: \\(u\' = 5\\). Therefore \\(y\' = \\dfrac{1}{5x+3}\\cdot 5 = \\dfrac{5}{5x+3}\\).',
      '\\(y\' = \\dfrac{5}{5x+3}\\)'
    ),
    S(
      'A common slip is omitting the chain-rule factor 5 (writing only \\(\\dfrac{1}{5x+3}\\)), or differentiating the 5 incorrectly in the denominator.',
      '\\(\\dfrac{5}{5x+3}\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{5}{5x+3}\\).',
      '\\(\\dfrac{5}{5x+3}\\)'
    ),
  ],

  'y12a-5l-q7': [
    S(
      'Given: \\(y = \\ln(x^{2}+4)\\). Strategy: chain rule with \\(u = x^{2}+4\\), so \\(y\' = \\dfrac{u\'}{u}\\).',
      '\\(u = x^{2}+4\\)'
    ),
    S(
      'Differentiate the inside: \\(u\' = 2x\\). Therefore \\(y\' = \\dfrac{2x}{x^{2}+4}\\).',
      '\\(y\' = \\dfrac{2x}{x^{2}+4}\\)'
    ),
    S(
      'A common slip is forgetting the 2 (writing \\(\\dfrac{x}{x^{2}+4}\\)), or writing the denominator as \\(x+4\\) instead of \\(x^{2}+4\\).',
      '\\(\\dfrac{2x}{x^{2}+4}\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{2x}{x^{2}+4}\\).',
      '\\(\\dfrac{2x}{x^{2}+4}\\)'
    ),
  ],

  'y12a-5l-q8': [
    S(
      'Given: \\(y = x\\ln x\\). Strategy: product rule with \\(u = x\\) and \\(v = \\ln x\\).',
      '\\(u = x,\\quad v = \\ln x\\)'
    ),
    S(
      'Differentiate: \\(u\' = 1\\) and \\(v\' = \\dfrac{1}{x}\\). Then \\(y\' = u\'v + uv\' = 1\\cdot\\ln x + x\\cdot\\dfrac{1}{x} = \\ln x + 1\\).',
      '\\(y\' = \\ln x + 1\\)'
    ),
    S(
      'A common slip is stopping at \\(\\ln x\\) (forgetting the product-rule second term), or writing only \\(\\dfrac{1}{x}\\).',
      '\\(\\ln x + 1\\)'
    ),
    S(
      'Final answer: \\(\\ln x + 1\\).',
      '\\(\\ln x + 1\\)'
    ),
  ],

  'y12a-5l-q9': [
    S(
      'Given: \\(y = \\dfrac{\\ln x}{x}\\). Strategy: quotient rule \\(\\dfrac{u}{v}\\) with \\(u = \\ln x\\), \\(v = x\\).',
      '\\(u = \\ln x,\\quad v = x\\)'
    ),
    S(
      'Then \\(u\' = \\dfrac{1}{x}\\) and \\(v\' = 1\\). Quotient rule: \\(y\' = \\dfrac{u\'v - uv\'}{v^{2}} = \\dfrac{\\dfrac{1}{x}\\cdot x - (\\ln x)\\cdot 1}{x^{2}} = \\dfrac{1 - \\ln x}{x^{2}}\\).',
      '\\(y\' = \\dfrac{1 - \\ln x}{x^{2}}\\)'
    ),
    S(
      'Alternatively, rewrite \\(y = x^{-1}\\ln x\\) and use the product rule: \\(y\' = -x^{-2}\\ln x + x^{-1}\\cdot\\dfrac{1}{x} = \\dfrac{1-\\ln x}{x^{2}}\\) (same result).',
      '\\(\\dfrac{1 - \\ln x}{x^{2}}\\)'
    ),
    S(
      'A common slip is reversing the numerator to \\(\\ln x - 1\\) (sign error in the quotient rule).',
      '\\(\\dfrac{1 - \\ln x}{x^{2}}\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{1-\\ln x}{x^{2}}\\).',
      '\\(\\dfrac{1-\\ln x}{x^{2}}\\)'
    ),
  ],

  'y12a-5l-q10': [
    S(
      'Given: \\(\\displaystyle\\int\\dfrac{6}{3x-1}\\,dx\\). Strategy: recognise the form \\(\\displaystyle\\int\\dfrac{f\'}{f}\\,dx = \\ln|f|+C\\), or substitute.',
      '\\(\\int\\dfrac{6}{3x-1}\\,dx\\)'
    ),
    S(
      'Let \\(u = 3x-1\\), so \\(du = 3\\,dx\\) and \\(dx = \\dfrac{du}{3}\\). Then the integral becomes \\(\\displaystyle\\int\\dfrac{6}{u}\\cdot\\dfrac{du}{3} = 2\\int\\dfrac{1}{u}\\,du = 2\\ln|u|+C\\).',
      '\\(2\\ln|u|+C\\)'
    ),
    S(
      'Back-substitute: \\(2\\ln|3x-1|+C\\). Check: derivative is \\(2\\cdot\\dfrac{3}{3x-1} = \\dfrac{6}{3x-1}\\).',
      '\\(2\\ln|3x-1|+C\\)'
    ),
    S(
      'A common slip is writing \\(6\\ln|3x-1|\\) (forgetting to divide by the chain-rule factor 3).',
      '\\(2\\ln|3x-1|+C\\)'
    ),
    S(
      'Final answer: \\(2\\ln|3x-1|+C\\).',
      '\\(2\\ln|3x-1|+C\\)'
    ),
  ],

  'y12a-5l-q11': [
    S(
      'Given: \\(\\displaystyle\\int\\dfrac{3x^{2}}{x^{3}+5}\\,dx\\). Strategy: the numerator is (almost) the derivative of the denominator. Let \\(u = x^{3}+5\\).',
      '\\(u = x^{3}+5\\)'
    ),
    S(
      'Then \\(u\' = 3x^{2}\\), so \\(du = 3x^{2}\\,dx\\). The integral is exactly \\(\\displaystyle\\int\\dfrac{1}{u}\\,du = \\ln|u|+C\\).',
      '\\(\\ln|u|+C\\)'
    ),
    S(
      'Back-substitute: \\(\\ln|x^{3}+5|+C\\). A common slip is inserting an extra factor of 3 in front of the log, or integrating numerator and denominator separately.',
      '\\(\\ln|x^{3}+5|+C\\)'
    ),
    S(
      'Final answer: \\(\\ln|x^{3}+5|+C\\).',
      '\\(\\ln|x^{3}+5|+C\\)'
    ),
  ],

  'y12a-5l-q12': [
    S(
      'Given: \\(\\displaystyle\\int_1^{4}\\dfrac{2}{x}\\,dx\\). Strategy: write as \\(2\\displaystyle\\int_1^{4}\\dfrac{1}{x}\\,dx\\) and use the antiderivative \\(\\ln|x|\\).',
      '\\(2\\int_1^{4}\\dfrac{1}{x}\\,dx\\)'
    ),
    S(
      'Antiderivative: \\(2\\ln|x|\\). Evaluate: \\([2\\ln x]_1^{4} = 2\\ln 4 - 2\\ln 1 = 2\\ln 4 - 0 = 2\\ln 4\\).',
      '\\(2\\ln 4\\)'
    ),
    S(
      'Note that \\(2\\ln 4 = \\ln 16 = 4\\ln 2\\) (equivalent forms). A common slip is forgetting the factor 2, or writing \\(2\\ln 3\\) by using upper limit minus lower incorrectly.',
      '\\(2\\ln 4\\)'
    ),
    S(
      'Final answer: \\(2\\ln 4\\).',
      '\\(2\\ln 4\\)'
    ),
  ],

  'y12a-5l-q13': [
    S(
      'Given: \\(\\displaystyle\\int_1^{e}\\left(e^{x}+\\dfrac{1}{x}\\right)dx\\). Strategy: integrate term by term.',
      '\\(\\int_1^{e} e^{x}\\,dx + \\int_1^{e}\\dfrac{1}{x}\\,dx\\)'
    ),
    S(
      'Antiderivative: \\(e^{x} + \\ln|x|\\). (Derivative of \\(e^{x}\\) is \\(e^{x}\\); derivative of \\(\\ln|x|\\) is \\(\\dfrac{1}{x}\\).)',
      '\\(e^{x} + \\ln|x|\\)'
    ),
    S(
      'Evaluate at the limits: \\([e^{x} + \\ln x]_1^{e} = \\bigl(e^{e} + \\ln e\\bigr) - \\bigl(e^{1} + \\ln 1\\bigr)\\).',
      '\\((e^{e}+1) - (e+0)\\)'
    ),
    S(
      'Simplify: \\(\\ln e = 1\\) and \\(\\ln 1 = 0\\), so the value is \\(e^{e} + 1 - e\\). A common slip is dropping the \\(+1\\) from \\(\\ln e\\).',
      '\\(e^{e} - e + 1\\)'
    ),
    S(
      'Final answer: \\(e^{e}-e+1\\).',
      '\\(e^{e}-e+1\\)'
    ),
  ],

  'y12a-5l-q14': [
    S(
      'Given: tangent to \\(y = e^{2x}\\) at the point where \\(x = 0\\). Strategy: find the point \\((x_0,y_0)\\) and the gradient \\(m = y\'(x_0)\\), then use point–slope form.',
      '\\(y = e^{2x}\\)'
    ),
    S(
      'At \\(x = 0\\): \\(y = e^{0} = 1\\). So the point of contact is \\((0,1)\\).',
      '\\(P(0,1)\\)'
    ),
    S(
      'Differentiate: \\(y\' = 2e^{2x}\\) (chain rule). At \\(x = 0\\): \\(m = 2e^{0} = 2\\).',
      '\\(m = 2\\)'
    ),
    S(
      'Point–slope: \\(y - 1 = 2(x - 0)\\Rightarrow y = 2x + 1\\). A common slip is using gradient 1, or writing the tangent through the origin.',
      '\\(y = 2x + 1\\)'
    ),
    S(
      'Final answer: \\(y = 2x + 1\\).',
      '\\(y = 2x + 1\\)'
    ),
  ],

  'y12a-5l-q15': [
    S(
      'Given: tangent to \\(y = \\ln x\\) at \\(x = 1\\). Strategy: find the point and the gradient, then write the tangent line.',
      '\\(y = \\ln x\\)'
    ),
    S(
      'At \\(x = 1\\): \\(y = \\ln 1 = 0\\). Point of contact: \\((1,0)\\).',
      '\\(P(1,0)\\)'
    ),
    S(
      'Differentiate: \\(y\' = \\dfrac{1}{x}\\). At \\(x = 1\\): \\(m = 1\\).',
      '\\(m = 1\\)'
    ),
    S(
      'Point–slope: \\(y - 0 = 1(x - 1)\\Rightarrow y = x - 1\\). A common slip is writing \\(y = x\\) (forgetting it must pass through \\((1,0)\\)).',
      '\\(y = x - 1\\)'
    ),
    S(
      'Final answer: \\(y = x - 1\\).',
      '\\(y = x - 1\\)'
    ),
  ],

  // q16 already detailed in seed — preserve unless shorter

  'y12a-5l-q17': [
    S(
      'Given: area under \\(y = e^{x}\\) from \\(x = 0\\) to \\(x = 2\\) (above the \\(x\\)-axis). Strategy: definite integral of a positive continuous function.',
      '\\(A = \\displaystyle\\int_0^{2} e^{x}\\,dx\\)'
    ),
    S(
      'Antiderivative of \\(e^{x}\\) is \\(e^{x}\\). Evaluate: \\([e^{x}]_0^{2} = e^{2} - e^{0} = e^{2} - 1\\).',
      '\\(e^{2} - 1\\)'
    ),
    S(
      'A common slip is writing only \\(e^{2}\\) (forgetting to subtract the lower-limit value 1), or adding 1 instead of subtracting.',
      '\\(e^{2} - 1\\)'
    ),
    S(
      'Final answer: \\(e^{2}-1\\).',
      '\\(e^{2}-1\\)'
    ),
  ],

  'y12a-5l-q18': [
    S(
      'Given: area under \\(y = \\dfrac{2}{x}\\) from \\(x = 1\\) to \\(x = 3\\). On \\([1,3]\\) we have \\(y > 0\\), so the area is the definite integral.',
      '\\(A = \\displaystyle\\int_1^{3}\\dfrac{2}{x}\\,dx\\)'
    ),
    S(
      'Antiderivative: \\(2\\ln|x|\\). Evaluate: \\([2\\ln x]_1^{3} = 2\\ln 3 - 2\\ln 1 = 2\\ln 3\\).',
      '\\(2\\ln 3\\)'
    ),
    S(
      'A common slip is dropping the factor 2, or evaluating \\(2(\\ln 3 - \\ln 1)\\) incorrectly as \\(2\\ln 2\\).',
      '\\(2\\ln 3\\)'
    ),
    S(
      'Final answer: \\(2\\ln 3\\).',
      '\\(2\\ln 3\\)'
    ),
  ],

  'y12a-5l-q19': [
    S(
      'Given: area enclosed between \\(y = e^{x}\\) and \\(y = e^{-x}\\) from \\(x = -1\\) to \\(x = 1\\). Strategy: integrate the absolute difference of the two curves.',
      '\\(A = \\displaystyle\\int_{-1}^{1}\\bigl|e^{x}-e^{-x}\\bigr|\\,dx\\)'
    ),
    S(
      'For \\(x \\ge 0\\), \\(e^{x} \\ge e^{-x}\\); for \\(x \\le 0\\), \\(e^{-x} \\ge e^{x}\\). The integrand is even (\\(|e^{x}-e^{-x}| = |e^{-x}-e^{x}|\\)), so \\(A = 2\\displaystyle\\int_0^{1}(e^{x}-e^{-x})\\,dx\\).',
      '\\(A = 2\\int_0^{1}(e^{x}-e^{-x})\\,dx\\)'
    ),
    S(
      'Antiderivative of \\(e^{x}-e^{-x}\\) is \\(e^{x}+e^{-x}\\). Evaluate: \\([e^{x}+e^{-x}]_0^{1} = \\bigl(e+e^{-1}\\bigr) - \\bigl(1+1\\bigr) = e + \\dfrac{1}{e} - 2\\).',
      '\\(e + \\dfrac{1}{e} - 2\\)'
    ),
    S(
      'Multiply by 2: \\(A = 2\\left(e + \\dfrac{1}{e} - 2\\right) = 2e + \\dfrac{2}{e} - 4\\). A common slip is forgetting the lower-limit contribution of 2, or the outer factor of 2.',
      '\\(2e + \\dfrac{2}{e} - 4\\)'
    ),
    S(
      'Final answer: \\(2e+\\dfrac{2}{e}-4\\).',
      '\\(2e+\\dfrac{2}{e}-4\\)'
    ),
  ],

  'y12a-5l-q20': [
    S(
      'Given: \\(y = 3^{x}\\). Strategy: rewrite as a natural exponential, or use the standard rule \\(\\dfrac{d}{dx}a^{x} = a^{x}\\ln a\\).',
      '\\(y = 3^{x}\\)'
    ),
    S(
      'Write \\(3^{x} = e^{x\\ln 3}\\). Chain rule: \\(y\' = e^{x\\ln 3}\\cdot\\ln 3 = 3^{x}\\ln 3\\).',
      '\\(y\' = 3^{x}\\ln 3\\)'
    ),
    S(
      'A common slip is treating it like a power rule (\\(x\\,3^{x-1}\\)), which applies only when the base is the variable and the exponent is constant.',
      '\\(3^{x}\\ln 3\\)'
    ),
    S(
      'Final answer: \\(3^{x}\\ln 3\\).',
      '\\(3^{x}\\ln 3\\)'
    ),
  ],

  'y12a-5l-q21': [
    S(
      'Given: \\(\\displaystyle\\int 2^{x}\\,dx\\). Strategy: use \\(\\displaystyle\\int a^{x}\\,dx = \\dfrac{a^{x}}{\\ln a}+C\\) for \\(a > 0\\), \\(a \\neq 1\\).',
      '\\(\\int 2^{x}\\,dx\\)'
    ),
    S(
      'With \\(a = 2\\): \\(\\dfrac{2^{x}}{\\ln 2}+C\\). Check by differentiating: derivative of \\(\\dfrac{2^{x}}{\\ln 2}\\) is \\(\\dfrac{2^{x}\\ln 2}{\\ln 2} = 2^{x}\\).',
      '\\(\\dfrac{2^{x}}{\\ln 2}+C\\)'
    ),
    S(
      'A common slip is multiplying by \\(\\ln 2\\) instead of dividing, or using the power-rule antiderivative.',
      '\\(\\dfrac{2^{x}}{\\ln 2}+C\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{2^{x}}{\\ln 2}+C\\).',
      '\\(\\dfrac{2^{x}}{\\ln 2}+C\\)'
    ),
  ],

  'y12a-5l-q22': [
    S(
      'Given: evaluate \\(\\log_3 20\\) to four significant figures. Strategy: change-of-base formula \\(\\log_b a = \\dfrac{\\ln a}{\\ln b}\\) (or common logs).',
      '\\(\\log_3 20 = \\dfrac{\\ln 20}{\\ln 3}\\)'
    ),
    S(
      'Using a calculator: \\(\\ln 20 \\approx 2.995732\\) and \\(\\ln 3 \\approx 1.098612\\). Divide: \\(\\dfrac{2.995732}{1.098612} \\approx 2.72683\\).',
      '\\(\\approx 2.72683\\)'
    ),
    S(
      'To four significant figures: \\(2.727\\). A common slip is computing \\(\\dfrac{\\ln 3}{\\ln 20}\\) (reciprocal), or reporting too few/many digits.',
      '\\(\\approx 2.727\\)'
    ),
    S(
      'Final answer: \\(\\approx 2.727\\).',
      '\\(\\approx 2.727\\)'
    ),
  ],

  'y12a-5l-q23': [
    S(
      'Given: on \\(y = \\ln x\\), the normal has gradient \\(-3\\). Strategy: relate normal gradient to the tangent gradient, then solve for \\(x\\).',
      '\\(y = \\ln x\\)'
    ),
    S(
      'If the normal has gradient \\(-3\\), the tangent (perpendicular) has gradient \\(m_t\\) satisfying \\(m_t\\cdot(-3) = -1\\), so \\(m_t = \\dfrac{1}{3}\\).',
      '\\(m_t = \\dfrac{1}{3}\\)'
    ),
    S(
      'But \\(y\' = \\dfrac{1}{x}\\), so at the required point \\(\\dfrac{1}{x} = \\dfrac{1}{3}\\Rightarrow x = 3\\) (and \\(x > 0\\) for \\(\\ln x\\)).',
      '\\(x = 3\\)'
    ),
    S(
      'A common slip is setting the tangent gradient equal to \\(-3\\) instead of the normal, which would give the wrong equation \\(\\dfrac{1}{x} = -3\\).',
      '\\(x = 3\\)'
    ),
    S(
      'Final answer: \\(x = 3\\).',
      '\\(x = 3\\)'
    ),
  ],

  'y12a-5l-q24': [
    S(
      'Given: \\(\\displaystyle\\int_0^{1} x e^{x^{2}}\\,dx\\). Strategy: substitution. The exponent\'s derivative is proportional to the factor \\(x\\) in front.',
      '\\(\\int_0^{1} x e^{x^{2}}\\,dx\\)'
    ),
    S(
      'Let \\(u = x^{2}\\). Then \\(du = 2x\\,dx\\), so \\(x\\,dx = \\dfrac{1}{2}\\,du\\). Limits: \\(x = 0\\Rightarrow u = 0\\); \\(x = 1\\Rightarrow u = 1\\).',
      '\\(u = x^{2},\\quad x\\,dx = \\dfrac{1}{2}\\,du\\)'
    ),
    S(
      'Integral becomes \\(\\displaystyle\\int_0^{1} e^{u}\\cdot\\dfrac{1}{2}\\,du = \\dfrac{1}{2}[e^{u}]_0^{1} = \\dfrac{1}{2}(e - 1) = \\dfrac{e-1}{2}\\).',
      '\\(\\dfrac{e-1}{2}\\)'
    ),
    S(
      'A common slip is forgetting the factor \\(\\dfrac{1}{2}\\) from \\(du = 2x\\,dx\\).',
      '\\(\\dfrac{e-1}{2}\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{e-1}{2}\\).',
      '\\(\\dfrac{e-1}{2}\\)'
    ),
  ],

  'y12a-5l-q25a': [
    S(
      'Given: \\(y = \\ln x - x + 2\\) (domain \\(x > 0\\)). Strategy: find stationary points by setting \\(y\' = 0\\).',
      '\\(y = \\ln x - x + 2\\)'
    ),
    S(
      'Differentiate: \\(y\' = \\dfrac{1}{x} - 1\\). Set \\(y\' = 0\\): \\(\\dfrac{1}{x} - 1 = 0\\Rightarrow \\dfrac{1}{x} = 1\\Rightarrow x = 1\\).',
      '\\(x = 1\\)'
    ),
    S(
      'Corresponding \\(y\\)-value: \\(y(1) = \\ln 1 - 1 + 2 = 0 - 1 + 2 = 1\\). So the stationary point is \\((1,1)\\).',
      '\\((1,\\ 1)\\)'
    ),
    S(
      'A common slip is computing \\(y(1) = 2\\) (forgetting \\(-x\\)), or solving \\(\\dfrac{1}{x}-1=0\\) incorrectly.',
      '\\((1,\\ 1)\\)'
    ),
    S(
      'Final answer: \\((1,\\ 1)\\).',
      '\\((1,\\ 1)\\)'
    ),
  ],

  'y12a-5l-q25b': [
    S(
      'Given the stationary point of \\(y = \\ln x - x + 2\\) at \\(x = 1\\). Strategy: second-derivative test (or first-derivative sign chart).',
      '\\(y\' = \\dfrac{1}{x} - 1\\)'
    ),
    S(
      'Differentiate again: \\(y\'\' = -\\dfrac{1}{x^{2}}\\). For all \\(x > 0\\), \\(y\'\' < 0\\).',
      '\\(y\'\' = -\\dfrac{1}{x^{2}} < 0\\)'
    ),
    S(
      'In particular at \\(x = 1\\): \\(y\'\'(1) = -1 < 0\\), so the stationary point is a local maximum. (First-derivative test: \\(y\' > 0\\) for \\(0 < x < 1\\) and \\(y\' < 0\\) for \\(x > 1\\), same conclusion.)',
      '\\(\\text{Maximum}\\)'
    ),
    S(
      'Final answer: Maximum (since \\(y\'\'=-\\dfrac{1}{x^{2}}<0\\) for all \\(x>0\\)).',
      '\\(\\text{Maximum}\\)'
    ),
  ],

  'y12a-5l-q26': [
    S(
      'Given: area under \\(y = \\dfrac{2x}{x^{2}+1}\\) from \\(x = 0\\) to \\(x = 2\\). Strategy: substitution matching the derivative of the denominator.',
      '\\(A = \\displaystyle\\int_0^{2}\\dfrac{2x}{x^{2}+1}\\,dx\\)'
    ),
    S(
      'Let \\(u = x^{2}+1\\). Then \\(du = 2x\\,dx\\). Limits: \\(x = 0\\Rightarrow u = 1\\); \\(x = 2\\Rightarrow u = 5\\).',
      '\\(u = x^{2}+1,\\quad du = 2x\\,dx\\)'
    ),
    S(
      'Integral: \\(\\displaystyle\\int_1^{5}\\dfrac{1}{u}\\,du = [\\ln|u|]_1^{5} = \\ln 5 - \\ln 1 = \\ln 5\\).',
      '\\(\\ln 5\\)'
    ),
    S(
      'A common slip is writing \\(2\\ln 5\\) (extra factor of 2) or using upper limit \\(u = 4\\) instead of 5.',
      '\\(\\ln 5\\)'
    ),
    S(
      'Final answer: \\(\\ln 5\\).',
      '\\(\\ln 5\\)'
    ),
  ],

  'y12a-5l-q27': [
    S(
      'Given: \\(f(x) = e^{x} - ex\\). Goal: show \\(f(x)\\ge 0\\) for all real \\(x\\), with equality only at \\(x = 1\\). Strategy: analyse critical points of \\(f\\).',
      '\\(f(x) = e^{x} - ex\\)'
    ),
    S(
      'Differentiate: \\(f\'(x) = e^{x} - e\\). Set \\(f\'(x) = 0\\): \\(e^{x} = e\\Rightarrow x = 1\\) (only solution, since the exponential is one-to-one).',
      '\\(f\'(x) = 0 \\Rightarrow x = 1\\)'
    ),
    S(
      'Second derivative: \\(f\'\'(x) = e^{x}\\). At \\(x = 1\\): \\(f\'\'(1) = e > 0\\), so \\(x = 1\\) is a local minimum. Also \\(f(1) = e - e\\cdot 1 = 0\\).',
      '\\(f\'\'(1) = e > 0,\\quad f(1) = 0\\)'
    ),
    S(
      'Since this is the only critical point and it is a global minimum (\\(f\'\' > 0\\) and \\(f\'\\) changes from negative to positive), we have \\(f(x)\\ge f(1) = 0\\) for all real \\(x\\), with equality only at \\(x = 1\\).',
      '\\(f(x)\\ge 0\\)'
    ),
    S(
      'Final answer: the argument that uses \\(f\'(x)=0\\) only at \\(x=1\\), \\(f\'\'(1)=e>0\\), and \\(f(1)=0\\).',
      '\\(f\\ge 0\\text{ with equality only at }x=1\\)'
    ),
  ],

  'y12a-5l-q28': [
    S(
      'Given: \\(\\displaystyle\\int_1^{e}\\dfrac{(\\ln x)^{2}}{x}\\,dx\\). Strategy: substitution with \\(u = \\ln x\\).',
      '\\(\\int_1^{e}\\dfrac{(\\ln x)^{2}}{x}\\,dx\\)'
    ),
    S(
      'Let \\(u = \\ln x\\). Then \\(du = \\dfrac{1}{x}\\,dx\\). Limits: \\(x = 1\\Rightarrow u = 0\\); \\(x = e\\Rightarrow u = 1\\).',
      '\\(u = \\ln x,\\quad du = \\dfrac{1}{x}\\,dx\\)'
    ),
    S(
      'Integral becomes \\(\\displaystyle\\int_0^{1} u^{2}\\,du = \\left[\\dfrac{u^{3}}{3}\\right]_0^{1} = \\dfrac{1}{3} - 0 = \\dfrac{1}{3}\\).',
      '\\(\\dfrac{1}{3}\\)'
    ),
    S(
      'A common slip is integrating \\((\\ln x)^{2}\\) without the substitution factor, or getting \\(\\dfrac{1}{2}\\) from a wrong power rule.',
      '\\(\\dfrac{1}{3}\\)'
    ),
    S(
      'Final answer: \\(\\dfrac{1}{3}\\).',
      '\\(\\dfrac{1}{3}\\)'
    ),
  ],

  'y12a-5l-q29': [
    S(
      'Given: region bounded by \\(y = e^{x}\\), \\(y = e^{-x}\\) and \\(x = 2\\) in the first quadrant. The curves meet when \\(e^{x} = e^{-x}\\Rightarrow x = 0\\). From \\(x = 0\\) to \\(x = 2\\), \\(e^{x}\\ge e^{-x}\\).',
      '\\(A = \\displaystyle\\int_0^{2}\\bigl(e^{x}-e^{-x}\\bigr)\\,dx\\)'
    ),
    S(
      'Antiderivative: \\(e^{x}+e^{-x}\\). Evaluate: \\([e^{x}+e^{-x}]_0^{2} = \\bigl(e^{2}+e^{-2}\\bigr) - \\bigl(e^{0}+e^{0}\\bigr) = e^{2}+e^{-2}-2\\).',
      '\\(e^{2}+e^{-2}-2\\)'
    ),
    S(
      'A common slip is the sign on the lower limit (writing \\(-2\\) as something else), or integrating only one of the two curves.',
      '\\(e^{2}+e^{-2}-2\\)'
    ),
    S(
      'Final answer: \\(e^{2}+e^{-2}-2\\).',
      '\\(e^{2}+e^{-2}-2\\)'
    ),
  ],

  'y12a-5l-q30': [
    S(
      'Given: \\(y = \\ln(\\sin x)\\). Strategy: chain rule for \\(\\ln u\\) with \\(u = \\sin x\\) (where \\(\\sin x > 0\\) in the intended domain).',
      '\\(u = \\sin x\\)'
    ),
    S(
      'Then \\(y\' = \\dfrac{1}{u}\\cdot u\' = \\dfrac{1}{\\sin x}\\cdot\\cos x = \\dfrac{\\cos x}{\\sin x} = \\cot x\\).',
      '\\(y\' = \\cot x\\)'
    ),
    S(
      'A common slip is writing \\(\\dfrac{1}{\\sin x}\\) (forgetting to multiply by \\(\\cos x\\)), or getting \\(\\tan x\\) by inverting incorrectly.',
      '\\(\\cot x\\)'
    ),
    S(
      'Final answer: \\(\\cot x\\).',
      '\\(\\cot x\\)'
    ),
  ],
};

/** Option / answer fixes when the seed key was mathematically wrong */
const FIXES = {
  'y12a-5l-q13': {
    opts: [
      '\\(e^{e}-e+1\\)',
      '\\(e^{e}-e\\)',
      '\\(e^{e}+1\\)',
      '\\(e-1\\)',
    ],
    a: 0,
    answer: '0',
    solution: 'The correct answer is \\(e^{e}-e+1\\).',
  },
  'y12a-5l-q19': {
    opts: [
      '\\(2e+\\dfrac{2}{e}-4\\)',
      '\\(2e-\\dfrac{2}{e}\\)',
      '\\(e-\\dfrac{1}{e}\\)',
      '\\(2e+\\dfrac{2}{e}\\)',
    ],
    a: 0,
    answer: '0',
    solution: 'The correct answer is \\(2e+\\dfrac{2}{e}-4\\).',
  },
};

function applyToQuestion(q) {
  if (STEPS[q.id]) {
    // Keep existing detailed q16 if already long enough
    if (q.id === 'y12a-5l-q16' && (q.solutionSteps || []).length >= 6) {
      // leave as-is
    } else {
      q.solutionSteps = STEPS[q.id];
    }
  }
  if (FIXES[q.id]) {
    Object.assign(q, FIXES[q.id]);
    // sync options array for UI
    if (FIXES[q.id].opts) {
      q.options = FIXES[q.id].opts.map((text) => ({ text, imageUrl: null }));
    }
  }
  // Always ensure options[] mirrors opts for MC
  if (q.type === 'multiple_choice' && Array.isArray(q.opts)) {
    q.options = q.opts.map((text) => ({ text, imageUrl: null }));
  }
  if (Array.isArray(q.subQuestions)) {
    for (const sub of q.subQuestions) {
      applyToQuestion(sub);
    }
  }
  return q;
}

function main() {
  // Load seed as module
  delete require.cache[require.resolve(SEED)];
  const mod = require(SEED);
  const list = mod.Y12A_CH5L_QUESTIONS || mod.default;
  if (!Array.isArray(list)) throw new Error('Could not load Y12A_CH5L_QUESTIONS');

  let updated = 0;
  for (const q of list) {
    const before = JSON.stringify(q.solutionSteps);
    applyToQuestion(q);
    if (JSON.stringify(q.solutionSteps) !== before || FIXES[q.id]) updated++;
    if (q.subQuestions) {
      for (const s of q.subQuestions) {
        if (STEPS[s.id]) updated++;
      }
    }
  }

  // Write seed file
  const body =
    'export const Y12A_CH5L_QUESTIONS = ' +
    JSON.stringify(list, null, 2) +
    ';\n\nexport default Y12A_CH5L_QUESTIONS;\n';
  writeFileSync(SEED, body, 'utf8');
  console.log('Wrote', SEED);
  console.log('Questions touched:', updated);

  // Summary of step counts
  for (const q of list) {
    const n = (q.solutionSteps || []).length;
    console.log(q.id, 'steps', n);
    if (q.subQuestions) {
      for (const s of q.subQuestions) {
        console.log(' ', s.id, 'steps', (s.solutionSteps || []).length);
      }
    }
  }

  if (!PUSH) {
    console.log('\nSeed only. Re-run with --push to update Firestore.');
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
  if (!getApps().length) {
    initializeApp({ credential: cert(sa) });
  }
  const db = getFirestore();

  const allDocs = [];
  for (const q of list) {
    allDocs.push(q);
    if (Array.isArray(q.subQuestions)) {
      // Parent keeps subQuestions; flat children may also exist — update parent payload fully
      for (const sub of q.subQuestions) {
        // Also merge steps onto any flat child docs if present
        allDocs.push({ ...sub, isActive: false });
      }
    }
  }

  let batch = db.batch();
  let n = 0;
  const commit = async () => {
    if (n === 0) return;
    await batch.commit();
    batch = db.batch();
    n = 0;
  };

  for (const q of list) {
    const payload = { ...q, updatedAt: FieldValue.serverTimestamp() };
    // multi_part children stored inside parent; also deactivate flat copies
    batch.set(db.collection('questions').doc(q.id), payload, { merge: true });
    n++;
    if (n >= 400) await commit();

    if (q.type === 'multi_part' && Array.isArray(q.subQuestions)) {
      for (const sub of q.subQuestions) {
        // Update flat child if it exists (isActive false so index rebuild excludes)
        batch.set(
          db.collection('questions').doc(sub.id),
          {
            ...sub,
            isActive: false,
            topicId: q.topicId || 'y12a-5L',
            c: q.c || '5L',
            updatedAt: FieldValue.serverTimestamp(),
          },
          { merge: true }
        );
        n++;
        if (n >= 400) await commit();
      }
    }
  }
  await commit();

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );
  console.log('Pushed to Firestore. sync_meta version', ver);

  // sample
  for (const id of ['y12a-5l-q3', 'y12a-5l-q9', 'y12a-5l-q13', 'y12a-5l-q19', 'y12a-5l-q16', 'y12a-5l-q27']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log(
      id,
      'steps',
      d?.solutionSteps?.length,
      'opts0',
      d?.opts?.[0],
      'wo0',
      d?.solutionSteps?.[0]?.workingOut?.slice?.(0, 40)
    );
  }
}

main();
