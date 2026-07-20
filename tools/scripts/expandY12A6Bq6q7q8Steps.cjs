/**
 * Expand solutionSteps for 6B product / quotient / chain series:
 * q6a–d, q7a–d, q8b–h
 *
 *   node tools/scripts/expandY12A6Bq6q7q8Steps.cjs
 */
'use strict';

const { initializeApp, cert, getApps } = require('firebase-admin/app');
const { getFirestore, FieldValue } = require('firebase-admin/firestore');
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const sa = JSON.parse(
  readFileSync(
    '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

const PATCH = {
  // ── q6 product rule ───────────────────────────────────────────────
  'y12a-6b-q6a': {
    solution: 'The correct answer is \\(\\sin x + x\\cos x\\).',
    hint:
      'Product rule: if \\(y=uv\\) then \\(y\'=u\'v+uv\'\\). Take \\(u=x\\) and \\(v=\\sin x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=x\\sin x\\). Why product rule? This is a product of two non-constant functions of \\(x\\) (a polynomial factor and a trig factor). What we will use is the product rule \\(y\'=u\'v+uv\'\\). A common slip is differentiating only one factor and treating the other as constant.',
        '\\(y = x\\sin x\\)'
      ),
      S(
        'Identify the factors carefully: let \\(u=x\\) and \\(v=\\sin x\\). Why this split? Each piece has a standard derivative. What: \\(u\'=1\\) (power rule) and \\(v\'=\\cos x\\) (standard sine derivative). Do not confuse with the chain rule yet — there is no composite angle here.',
        '\\(u = x,\\quad v = \\sin x,\\quad u\' = 1,\\quad v\' = \\cos x\\)'
      ),
      S(
        'Apply the product rule fully: \\(y\' = u\'v + uv\' = (1)(\\sin x) + (x)(\\cos x)\\). Why both terms? Dropping either term is the classic product-rule error. Expand carefully so the order of factors matches the options.',
        '\\(y\' = \\sin x + x\\cos x\\)'
      ),
      S(
        'Simplify: nothing cancels further. The answer can be written \\(\\sin x + x\\cos x\\) (or factored as \\(\\sin x + x\\cos x\\) only). Connect: this is not the same as \\(x\\cos x\\) alone, nor \\(\\sin x + x\\sin x\\).',
        '\\(y\' = \\sin x + x\\cos x\\)'
      ),
      S(
        'Final answer: \\(\\sin x + x\\cos x\\). Check: at \\(x=0\\), \\(y=0\\) and \\(y\'=\\sin 0 + 0\\cdot\\cos 0=0\\), which matches the product rule evaluation. Reject distractors that flip a sign on cos or replace cos with sin in the second term.',
        '\\(\\sin x + x\\cos x\\)'
      ),
    ],
  },

  'y12a-6b-q6b': {
    solution: 'The correct answer is \\(2\\tan 2x + 4x\\sec^{2} 2x\\).',
    hint:
      'Product rule with \\(u=2x\\), \\(v=\\tan 2x\\). Use the chain rule: \\(\\dfrac{d}{dx}\\tan 2x = 2\\sec^{2} 2x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=2x\\tan 2x\\). Why both product and chain? It is a product, and the second factor is a composite (tan of \\(2x\\)). What we will use is \\(y\'=u\'v+uv\'\\) with a chain-rule derivative for \\(v\\). A common slip is using \\(\\sec^{2} 2x\\) without the factor \\(2\\) from the inner derivative.',
        '\\(y = 2x\\tan 2x\\)'
      ),
      S(
        'Set \\(u=2x\\) and \\(v=\\tan 2x\\). Then \\(u\'=2\\). For \\(v\\), write the chain rule carefully: outer derivative of tan is \\(\\sec^{2}\\) of the same argument, times the derivative of the inside \\(2x\\). So \\(v\'=\\sec^{2}(2x)\\cdot 2=2\\sec^{2} 2x\\).',
        '\\(u\' = 2,\\quad v\' = 2\\sec^{2} 2x\\)'
      ),
      S(
        'Substitute into the product rule: \\(y\' = u\'v + uv\' = 2\\cdot\\tan 2x + (2x)\\cdot(2\\sec^{2} 2x)\\). Why keep the argument as \\(2x\\) everywhere? Replacing \\(\\tan 2x\\) by \\(\\tan x\\) or dropping a power of sec is a frequent multiple-choice trap.',
        '\\(y\' = 2\\tan 2x + 4x\\sec^{2} 2x\\)'
      ),
      S(
        'Simplify the second term: \\(2x\\cdot 2\\sec^{2} 2x = 4x\\sec^{2} 2x\\). The first term stays \\(2\\tan 2x\\). No further trig identity is required to match the options.',
        '\\(y\' = 2\\tan 2x + 4x\\sec^{2} 2x\\)'
      ),
      S(
        'Final answer: \\(2\\tan 2x + 4x\\sec^{2} 2x\\). Reject options that use \\(\\sec 2x\\) (not squared), that replace tan by sin, or that put a minus on the first term from confusing product with quotient.',
        '\\(2\\tan 2x + 4x\\sec^{2} 2x\\)'
      ),
    ],
  },

  'y12a-6b-q6c': {
    solution: 'The correct answer is \\(2x\\cos 2x - 2x^{2}\\sin 2x\\).',
    hint:
      'Product rule: \\(u=x^{2}\\), \\(v=\\cos 2x\\). Chain rule on cos: \\(v\'=-2\\sin 2x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=x^{2}\\cos 2x\\). Why product + chain? Polynomial times a composite cosine. What: product rule \\(y\'=u\'v+uv\'\\) with chain rule on the cosine factor. A common slip is using \\(-\\sin 2x\\) without the chain factor \\(2\\).',
        '\\(y = x^{2}\\cos 2x\\)'
      ),
      S(
        'Let \\(u=x^{2}\\) and \\(v=\\cos 2x\\). Then \\(u\'=2x\\). For \\(v\\): derivative of cos of the inside is \\(-\\sin(\\text{inside})\\) times the inside derivative. Inside is \\(2x\\), so \\(v\'=-\\sin(2x)\\cdot 2=-2\\sin 2x\\).',
        '\\(u\' = 2x,\\quad v\' = -2\\sin 2x\\)'
      ),
      S(
        'Apply the product rule: \\(y\' = (2x)\\cos 2x + x^{2}(-2\\sin 2x)\\). Keep the signs explicit so the second term becomes a subtraction after simplifying.',
        '\\(y\' = 2x\\cos 2x + x^{2}(-2\\sin 2x)\\)'
      ),
      S(
        'Simplify: \\(x^{2}(-2\\sin 2x)=-2x^{2}\\sin 2x\\). Therefore \\(y\'=2x\\cos 2x - 2x^{2}\\sin 2x\\). Do not reduce the power of \\(x\\) in the second term to \\(2x\\sin 2x\\) (that would drop an \\(x\\)).',
        '\\(y\' = 2x\\cos 2x - 2x^{2}\\sin 2x\\)'
      ),
      S(
        'Final answer: \\(2x\\cos 2x - 2x^{2}\\sin 2x\\). Check structure: first term has cos (from differentiating \\(x^{2}\\) only), second has sin (from differentiating the cosine factor). Reject options with wrong powers of \\(x\\) or missing the minus.',
        '\\(2x\\cos 2x - 2x^{2}\\sin 2x\\)'
      ),
    ],
  },

  'y12a-6b-q6d': {
    solution: 'The correct answer is \\(3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\).',
    hint:
      'Product rule: \\(u=x^{3}\\), \\(v=\\sin 3x\\). Chain rule: \\(v\'=3\\cos 3x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=x^{3}\\sin 3x\\). Why product + chain? Cubic power times sine of a multiple angle. What: \\(y\'=u\'v+uv\'\\) with chain rule on \\(\\sin 3x\\). A common slip is using \\(\\cos 3x\\) without the factor \\(3\\).',
        '\\(y = x^{3}\\sin 3x\\)'
      ),
      S(
        'Let \\(u=x^{3}\\) and \\(v=\\sin 3x\\). Power rule: \\(u\'=3x^{2}\\). Chain rule for sine: outer cos of the same argument, times derivative of \\(3x\\). So \\(v\'=\\cos(3x)\\cdot 3=3\\cos 3x\\).',
        '\\(u\' = 3x^{2},\\quad v\' = 3\\cos 3x\\)'
      ),
      S(
        'Product rule: \\(y\' = (3x^{2})(\\sin 3x) + (x^{3})(3\\cos 3x)\\). Both terms are positive here because the derivative of sine is cos (no automatic minus).',
        '\\(y\' = 3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\)'
      ),
      S(
        'You may factor \\(3x^{2}\\) if you wish: \\(y\'=3x^{2}(\\sin 3x + x\\cos 3x)\\), but the expanded form matches the options directly. Keep the argument as \\(3x\\) in both trig functions.',
        '\\(y\' = 3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\)'
      ),
      S(
        'Final answer: \\(3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\). Reject options that use \\(\\sin\\) in both terms, drop an \\(x\\) power, or put a minus between the terms from confusing sin with cos differentiation.',
        '\\(3x^{2}\\sin 3x + 3x^{3}\\cos 3x\\)'
      ),
    ],
  },

  // ── q7 quotient rule ──────────────────────────────────────────────
  'y12a-6b-q7a': {
    solution: 'The correct answer is \\(\\dfrac{x\\cos x - \\sin x}{x^{2}}\\).',
    hint:
      'Quotient rule: \\(\\left(\\dfrac{u}{v}\\right)\'=\\dfrac{u\'v-uv\'}{v^{2}}\\) with \\(u=\\sin x\\), \\(v=x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\dfrac{\\sin x}{x}\\). Why quotient rule? A fraction where both numerator and denominator depend on \\(x\\). What: \\(\\left(\\dfrac{u}{v}\\right)\'=\\dfrac{u\'v-uv\'}{v^{2}}\\). A common slip is writing \\(u\'v+uv\'\\) (product-rule signs) or forgetting to square the denominator.',
        '\\(y = \\dfrac{\\sin x}{x}\\)'
      ),
      S(
        'Set \\(u=\\sin x\\) and \\(v=x\\). Then \\(u\'=\\cos x\\) and \\(v\'=1\\). Why these? Standard sine derivative and power rule on \\(x^{1}\\). Do not treat the denominator as constant (that would give only \\(\\dfrac{\\cos x}{x}\\)).',
        '\\(u = \\sin x,\\quad v = x,\\quad u\' = \\cos x,\\quad v\' = 1\\)'
      ),
      S(
        'Substitute into the quotient formula carefully: numerator is \\(u\'v - uv\' = (\\cos x)(x) - (\\sin x)(1) = x\\cos x - \\sin x\\). Denominator is \\(v^{2}=x^{2}\\). The minus between the two numerator terms is essential.',
        '\\(y\' = \\dfrac{x\\cos x - \\sin x}{x^{2}}\\)'
      ),
      S(
        'Leave the answer in this simplified form. You could write \\(\\dfrac{\\cos x}{x}-\\dfrac{\\sin x}{x^{2}}\\) by splitting, but the single-fraction form matches the options. Domain note: undefined at \\(x=0\\).',
        '\\(y\' = \\dfrac{x\\cos x - \\sin x}{x^{2}}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{x\\cos x - \\sin x}{x^{2}}\\). Reject a global minus sign in front of the whole fraction, or the reciprocal of the derivative expression.',
        '\\(\\dfrac{x\\cos x - \\sin x}{x^{2}}\\)'
      ),
    ],
  },

  'y12a-6b-q7b': {
    solution: 'The correct answer is \\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\).',
    hint:
      'Quotient rule with \\(u=\\cos x\\), \\(v=x\\). Remember \\(u\'=-\\sin x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\dfrac{\\cos x}{x}\\). Why quotient rule? Fraction of two functions of \\(x\\). What: \\(\\dfrac{u\'v-uv\'}{v^{2}}\\). A common slip is using \\(u\'=\\sin x\\) (missing the minus from the cosine derivative).',
        '\\(y = \\dfrac{\\cos x}{x}\\)'
      ),
      S(
        'Let \\(u=\\cos x\\) and \\(v=x\\). Then \\(u\'=-\\sin x\\) and \\(v\'=1\\). Keep the minus on \\(u\'\\) visible in every later line so it does not disappear.',
        '\\(u = \\cos x,\\quad v = x,\\quad u\' = -\\sin x,\\quad v\' = 1\\)'
      ),
      S(
        'Numerator: \\(u\'v - uv\' = (-\\sin x)(x) - (\\cos x)(1) = -x\\sin x - \\cos x\\). Denominator: \\(x^{2}\\). Both terms in the numerator end up with a minus.',
        '\\(y\' = \\dfrac{-x\\sin x - \\cos x}{x^{2}}\\)'
      ),
      S(
        'Equivalent forms: \\(-\\dfrac{x\\sin x + \\cos x}{x^{2}}\\) factors out a global minus. The option form \\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\) is the same. Do not flip only one of the two minus signs.',
        '\\(y\' = \\dfrac{-x\\sin x - \\cos x}{x^{2}}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\). Reject versions that use \\(+x\\sin x\\) in the numerator (from forgetting that the derivative of cos is \\(-\\sin\\)).',
        '\\(\\dfrac{-x\\sin x - \\cos x}{x^{2}}\\)'
      ),
    ],
  },

  'y12a-6b-q7c': {
    solution: 'The correct answer is \\(\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\).',
    hint:
      'Quotient rule: \\(u=x^{2}\\), \\(v=\\cos x\\). Watch the double minus when subtracting \\(u v\'\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\dfrac{x^{2}}{\\cos x}\\). Why quotient? Power in the numerator, cosine in the denominator. What: quotient rule. A common slip is writing the denominator as \\(\\cos x\\) instead of \\(\\cos^{2}x\\).',
        '\\(y = \\dfrac{x^{2}}{\\cos x}\\)'
      ),
      S(
        'Let \\(u=x^{2}\\) and \\(v=\\cos x\\). Then \\(u\'=2x\\) and \\(v\'=-\\sin x\\). The minus on \\(v\'\\) will create a double minus in the next step — handle it carefully.',
        '\\(u = x^{2},\\quad v = \\cos x,\\quad u\' = 2x,\\quad v\' = -\\sin x\\)'
      ),
      S(
        'Numerator: \\(u\'v - uv\' = (2x)(\\cos x) - (x^{2})(-\\sin x)\\). The second term is minus times a negative: \\(-(x^{2})(-\\sin x)=+x^{2}\\sin x\\). So the numerator is \\(2x\\cos x + x^{2}\\sin x\\).',
        '\\(\\text{numerator} = 2x\\cos x + x^{2}\\sin x\\)'
      ),
      S(
        'Denominator is always \\(v^{2}=\\cos^{2}x\\) (never just \\(\\cos x\\)). Combine: \\(y\'=\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\). You may also write this as \\(2x\\sec x + x^{2}\\sec x\\tan x\\), but the fraction form matches the options.',
        '\\(y\' = \\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\). Reject a global minus in front of the fraction (that comes from mishandling the double minus).',
        '\\(\\dfrac{2x\\cos x + x^{2}\\sin x}{\\cos^{2}x}\\)'
      ),
    ],
  },

  'y12a-6b-q7d': {
    solution: 'The correct answer is \\(\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\).',
    hint:
      'Quotient rule: \\(u=x\\), \\(v=1+\\sin x\\). Then \\(v\'=\\cos x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\dfrac{x}{1+\\sin x}\\). Why quotient? Linear numerator over a trig binomial. What: \\(\\dfrac{u\'v-uv\'}{v^{2}}\\). A common slip is differentiating only the numerator and ignoring the chain/sum in the denominator.',
        '\\(y = \\dfrac{x}{1+\\sin x}\\)'
      ),
      S(
        'Let \\(u=x\\) and \\(v=1+\\sin x\\). Then \\(u\'=1\\). For \\(v\\), derivative of a constant plus sine is just cos: \\(v\'=\\cos x\\). The \\(1\\) contributes zero.',
        '\\(u = x,\\quad v = 1+\\sin x,\\quad u\' = 1,\\quad v\' = \\cos x\\)'
      ),
      S(
        'Numerator: \\(u\'v - uv\' = (1)(1+\\sin x) - (x)(\\cos x) = 1+\\sin x - x\\cos x\\). Keep the three-term expression; do not cancel the \\(1+\\sin x\\) against the denominator yet (they are not identical factors after the subtraction).',
        '\\(\\text{numerator} = 1 + \\sin x - x\\cos x\\)'
      ),
      S(
        'Denominator: \\(v^{2}=(1+\\sin x)^{2}\\). Therefore \\(y\'=\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\). Do not leave the denominator as only \\(1+\\sin x\\).',
        '\\(y\' = \\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\). Reject a global minus (from swapping the order in \\(u\'v-uv\'\\)) or the reciprocal of this expression.',
        '\\(\\dfrac{1+\\sin x - x\\cos x}{(1+\\sin x)^{2}}\\)'
      ),
    ],
  },

  // ── q8 chain rule ─────────────────────────────────────────────────
  'y12a-6b-q8b': {
    solution: 'The correct answer is \\(-2x\\cos(1-x^{2})\\).',
    hint:
      'Chain rule: outer sin, inner \\(1-x^{2}\\). Then \\(y\'=\\cos(1-x^{2})\\cdot(-2x)\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\sin(1-x^{2})\\). Why chain rule? Sine of a non-linear expression in \\(x\\) — a composition. What: if \\(y=\\sin u\\) then \\(y\'=\\cos u\\cdot u\'\\). A common slip is differentiating the inside incorrectly as \\(-x\\) or \\(-2\\) only.',
        '\\(y = \\sin(1-x^{2})\\)'
      ),
      S(
        'Set the inside carefully: let \\(u=1-x^{2}\\). Why? Outer function is sin; everything inside the brackets is \\(u\\). Differentiate the inside: derivative of \\(1\\) is \\(0\\), derivative of \\(-x^{2}\\) is \\(-2x\\), so \\(u\'=-2x\\).',
        '\\(u = 1 - x^{2},\\quad u\' = -2x\\)'
      ),
      S(
        'Outer derivative first: \\(\\dfrac{d}{du}\\sin u = \\cos u\\). Multiply by the inside derivative: \\(y\'=\\cos u\\cdot u\'=\\cos(1-x^{2})\\cdot(-2x)\\). Keep the full argument \\(1-x^{2}\\) — do not replace it by \\(1-x\\).',
        '\\(y\' = \\cos(1-x^{2})\\cdot(-2x)\\)'
      ),
      S(
        'Rewrite with the constant factor in front (standard option form): \\(y\'=-2x\\cos(1-x^{2})\\). The minus comes only from \\(u\'\\); the outer sin still contributes cos, not sin or a second minus.',
        '\\(y\' = -2x\\cos(1-x^{2})\\)'
      ),
      S(
        'Final answer: \\(-2x\\cos(1-x^{2})\\). Reject \\(-2x\\sin(1-x^{2})\\) (wrong outer derivative) and any option that changes the argument to \\(1-x\\).',
        '\\(-2x\\cos(1-x^{2})\\)'
      ),
    ],
  },

  'y12a-6b-q8c': {
    solution: 'The correct answer is \\(-3x^{2}\\sin(x^{3}+1)\\).',
    hint:
      'Chain rule: outer cos, inner \\(x^{3}+1\\). Outer derivative is \\(-\\sin\\) of the same argument.',
    solutionSteps: [
      S(
        'Given: \\(y=\\cos(x^{3}+1)\\). Why chain rule? Cosine of a polynomial composite. What: if \\(y=\\cos u\\) then \\(y\'=-\\sin u\\cdot u\'\\). A common slip is dropping the automatic minus from the cosine derivative.',
        '\\(y = \\cos(x^{3}+1)\\)'
      ),
      S(
        'Let \\(u=x^{3}+1\\). Then power rule: \\(u\'=3x^{2}\\) (constant \\(+1\\) vanishes). Do not write \\(u\'=3x\\) — the power rule multiplies by the old power, leaving \\(x^{2}\\).',
        '\\(u = x^{3}+1,\\quad u\' = 3x^{2}\\)'
      ),
      S(
        'Apply the chain rule: \\(y\'=-\\sin u\\cdot u\'=-\\sin(x^{3}+1)\\cdot 3x^{2}\\). The minus is from differentiating cos; the factor \\(3x^{2}\\) is from the inside.',
        '\\(y\' = -\\sin(x^{3}+1)\\cdot 3x^{2}\\)'
      ),
      S(
        'Combine coefficients: \\(y\'=-3x^{2}\\sin(x^{3}+1)\\). Keep the argument exactly \\(x^{3}+1\\). Positive \\(3x^{2}\\sin(\\ldots)\\) would mean you dropped the outer minus.',
        '\\(y\' = -3x^{2}\\sin(x^{3}+1)\\)'
      ),
      S(
        'Final answer: \\(-3x^{2}\\sin(x^{3}+1)\\). Reject options with only \\(3x\\) instead of \\(3x^{2}\\), or a plus sign in front of the sine term.',
        '\\(-3x^{2}\\sin(x^{3}+1)\\)'
      ),
    ],
  },

  'y12a-6b-q8d': {
    solution: 'The correct answer is \\(-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\).',
    hint:
      'Chain rule with inner \\(u=x^{-1}\\). Then \\(u\'=-x^{-2}=-\\dfrac{1}{x^{2}}\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\sin\\dfrac{1}{x}\\). Why chain rule? Sine of a reciprocal function. What: \\(y=\\sin u\\) with \\(u=\\dfrac{1}{x}\\), so \\(y\'=\\cos u\\cdot u\'\\). A common slip is treating \\(\\dfrac{1}{x}\\) as if its derivative were \\(\\dfrac{1}{x^{2}}\\) without the minus.',
        '\\(y = \\sin\\dfrac{1}{x}\\)'
      ),
      S(
        'Rewrite the inside as a power if helpful: \\(u=x^{-1}\\). Power rule: \\(u\'=-1\\cdot x^{-2}=-x^{-2}=-\\dfrac{1}{x^{2}}\\). Domain: \\(x\\neq 0\\).',
        '\\(u = x^{-1},\\quad u\' = -\\dfrac{1}{x^{2}}\\)'
      ),
      S(
        'Outer derivative of sin is cos of the same argument: \\(\\cos u=\\cos\\dfrac{1}{x}\\). Multiply: \\(y\'=\\cos\\dfrac{1}{x}\\cdot\\left(-\\dfrac{1}{x^{2}}\\right)\\).',
        '\\(y\' = \\cos\\dfrac{1}{x}\\cdot\\left(-\\dfrac{1}{x^{2}}\\right)\\)'
      ),
      S(
        'Write as a single expression: \\(y\'=-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\). There is only one minus overall. A double minus (plus) would be wrong.',
        '\\(y\' = -\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\)'
      ),
      S(
        'Final answer: \\(-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\). Reject options that use sin instead of cos after differentiating the outer function, or that invert the factor to \\(-x^{2}\\).',
        '\\(-\\dfrac{1}{x^{2}}\\cos\\dfrac{1}{x}\\)'
      ),
    ],
  },

  'y12a-6b-q8e': {
    solution: 'The correct answer is \\(-2\\cos x\\sin x\\).',
    hint:
      'Write \\(\\cos^{2}x=(\\cos x)^{2}\\). Chain rule: \\(2\\cos x\\cdot(-\\sin x)\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\cos^{2}x\\). Why rewrite? The notation \\(\\cos^{2}x\\) means \\((\\cos x)^{2}\\), not \\(\\cos(\\cos x)\\). What: power chain rule on \\(u^{2}\\) with \\(u=\\cos x\\). A common slip is differentiating as if it were \\(\\cos(x^{2})\\).',
        '\\(y = (\\cos x)^{2}\\)'
      ),
      S(
        'Let \\(u=\\cos x\\), so \\(y=u^{2}\\). Power rule: \\(\\dfrac{d}{du}u^{2}=2u\\). Inside: \\(u\'=-\\sin x\\). Therefore \\(y\'=2u\\cdot u\'=2\\cos x\\cdot(-\\sin x)\\).',
        '\\(y\' = 2\\cos x\\cdot(-\\sin x)\\)'
      ),
      S(
        'Simplify the product: \\(y\'=-2\\cos x\\sin x\\). Equivalently \\(-\\sin 2x\\) by the double-angle identity, but the product form matches the options.',
        '\\(y\' = -2\\cos x\\sin x\\)'
      ),
      S(
        'Sign check: near \\(x=0^{+}\\), cos is positive and sin is positive, so the derivative of \\(\\cos^{2}x\\) (which starts at 1 and decreases) should be negative — consistent with \\(-2\\cos x\\sin x\\).',
        '\\(y\' = -2\\cos x\\sin x\\)'
      ),
      S(
        'Final answer: \\(-2\\cos x\\sin x\\). Reject the positive \\(2\\cos x\\sin x\\) (dropped the minus from the cosine derivative) and garbled products like \\(-2\\sin x\\sin x\\).',
        '\\(-2\\cos x\\sin x\\)'
      ),
    ],
  },

  'y12a-6b-q8f': {
    solution: 'The correct answer is \\(3\\sin^{2}x\\cos x\\).',
    hint:
      'Write \\(\\sin^{3}x=(\\sin x)^{3}\\). Then \\(y\'=3(\\sin x)^{2}\\cdot\\cos x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\sin^{3}x\\). Why rewrite? \\(\\sin^{3}x=(\\sin x)^{3}\\) — a power of sine, not sine of a cube. What: chain rule for \\(u^{3}\\) with \\(u=\\sin x\\). A common slip is writing \\(3\\sin x\\cos x\\) (as if the power were 2, or confusing with the double-angle derivative of \\(\\sin^{2}\\)).',
        '\\(y = (\\sin x)^{3}\\)'
      ),
      S(
        'Let \\(u=\\sin x\\), so \\(y=u^{3}\\). Then \\(\\dfrac{d}{du}u^{3}=3u^{2}\\) and \\(u\'=\\cos x\\). Multiply: \\(y\'=3u^{2}\\cdot u\'=3(\\sin x)^{2}\\cos x\\).',
        '\\(y\' = 3(\\sin x)^{2}\\cos x\\)'
      ),
      S(
        'Rewrite with standard squared-trig notation: \\(y\'=3\\sin^{2}x\\cos x\\). The power 2 stays on sin; cos is not squared. Do not write \\(3\\sin x\\cos x\\) or \\(3\\sin^{2}x\\sin x\\).',
        '\\(y\' = 3\\sin^{2}x\\cos x\\)'
      ),
      S(
        'Structure check: power rule contributes the factor 3 and reduces the power from 3 to 2; chain rule multiplies by the derivative of the inside, which is cos. Both pieces are required.',
        '\\(y\' = 3\\sin^{2}x\\cos x\\)'
      ),
      S(
        'Final answer: \\(3\\sin^{2}x\\cos x\\). Reject options missing the square on sin or replacing cos by another sin.',
        '\\(3\\sin^{2}x\\cos x\\)'
      ),
    ],
  },

  'y12a-6b-q8g': {
    solution: 'The correct answer is \\(2\\tan x\\sec^{2}x\\).',
    hint:
      'Write \\(\\tan^{2}x=(\\tan x)^{2}\\). Chain rule: \\(2\\tan x\\cdot\\sec^{2}x\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\tan^{2}x\\). Why rewrite? \\(\\tan^{2}x=(\\tan x)^{2}\\). What: power chain rule with inside tan. A common slip is using \\(\\sec x\\) (not squared) for the derivative of tan, or putting a minus from confusing tan with cot.',
        '\\(y = (\\tan x)^{2}\\)'
      ),
      S(
        'Let \\(u=\\tan x\\), so \\(y=u^{2}\\). Then \\(\\dfrac{d}{du}u^{2}=2u\\) and the standard derivative \\(u\'=\\sec^{2}x\\). Therefore \\(y\'=2u\\cdot u\'=2\\tan x\\cdot\\sec^{2}x\\).',
        '\\(y\' = 2\\tan x\\sec^{2}x\\)'
      ),
      S(
        'No further simplification is required for the options. Equivalent forms like \\(2\\dfrac{\\sin x}{\\cos^{3}x}\\) exist but are not needed here. Keep both factors: the 2 from the power, and \\(\\sec^{2}x\\) from differentiating tan.',
        '\\(y\' = 2\\tan x\\sec^{2}x\\)'
      ),
      S(
        'Sign check: for small positive \\(x\\), tan increases from 0, so \\(\\tan^{2}x\\) increases and the derivative should be positive — matches \\(2\\tan x\\sec^{2}x\\) (all factors positive in the first quadrant).',
        '\\(y\' = 2\\tan x\\sec^{2}x\\)'
      ),
      S(
        'Final answer: \\(2\\tan x\\sec^{2}x\\). Reject \\(-2\\tan x\\sec^{2}x\\) and \\(2\\tan x\\sec x\\) (sec not squared).',
        '\\(2\\tan x\\sec^{2}x\\)'
      ),
    ],
  },

  'y12a-6b-q8h': {
    solution: 'The correct answer is \\(\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\).',
    hint:
      'Chain rule: outer tan, inner \\(\\sqrt{x}\\). \\(\\dfrac{d}{dx}\\sqrt{x}=\\dfrac{1}{2\\sqrt{x}}\\).',
    solutionSteps: [
      S(
        'Given: \\(y=\\tan\\sqrt{x}\\). Why chain rule? Tan of a square-root composite. What: if \\(y=\\tan u\\) then \\(y\'=\\sec^{2}u\\cdot u\'\\). A common slip is forgetting the derivative of \\(\\sqrt{x}\\) or putting a minus on it.',
        '\\(y = \\tan\\sqrt{x}\\)'
      ),
      S(
        'Let \\(u=\\sqrt{x}=x^{1/2}\\). Power rule: \\(u\'=\\dfrac{1}{2}x^{-1/2}=\\dfrac{1}{2\\sqrt{x}}\\). Domain: \\(x>0\\) (and where tan is defined).',
        '\\(u = \\sqrt{x},\\quad u\' = \\dfrac{1}{2\\sqrt{x}}\\)'
      ),
      S(
        'Outer derivative of tan is sec squared of the same argument: \\(\\sec^{2}u=\\sec^{2}\\sqrt{x}\\). Multiply by the inside derivative: \\(y\'=\\sec^{2}\\sqrt{x}\\cdot\\dfrac{1}{2\\sqrt{x}}\\).',
        '\\(y\' = \\sec^{2}\\sqrt{x}\\cdot\\dfrac{1}{2\\sqrt{x}}\\)'
      ),
      S(
        'Write as a single fraction: \\(y\'=\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\). Do not square the entire fraction or put the 2 only under the sec.',
        '\\(y\' = \\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\). Reject a leading minus, an extra \\(+1\\), or \\(\\sec^{4}\\) from confusing the power on sec.',
        '\\(\\dfrac{\\sec^{2}\\sqrt{x}}{2\\sqrt{x}}\\)'
      ),
    ],
  },
};

const IDS = Object.keys(PATCH);

(async () => {
  const seedPath = path.join(__dirname, '../../src/constants/seedYear12aCh6BQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const list = require(seedPath).Y12A_CH6B_QUESTIONS;

  function findInList(id) {
    for (const q of list) {
      if (q.id === id) return q;
      for (const sq of q.subQuestions || []) {
        if (sq.id === id) return sq;
      }
    }
    return null;
  }

  let updated = 0;
  for (const id of IDS) {
    const patch = PATCH[id];
    const q = findInList(id);
    if (!q) {
      console.warn('seed missing', id);
      continue;
    }
    q.solutionSteps = patch.solutionSteps;
    q.solution = patch.solution;
    q.hint = patch.hint;
    q.isNew = true;
    q.origin = 'seed';

    await db.collection('questions').doc(id).set(
      {
        solutionSteps: patch.solutionSteps,
        solution: patch.solution,
        hint: patch.hint,
        isNew: true,
        origin: 'seed',
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    updated++;
    console.log('OK', id, 'steps=', patch.solutionSteps.length);
  }

  writeFileSync(
    seedPath,
    'export const Y12A_CH6B_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6B_QUESTIONS;\n'
  );

  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    {
      version: ver,
      membershipVersion: ver,
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  // sanity: one sample each family
  for (const id of ['y12a-6b-q6a', 'y12a-6b-q7c', 'y12a-6b-q8h']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log('\n' + id + ' step1:', d.solutionSteps[0].explanation.slice(0, 90) + '…');
    console.log('  WO last:', d.solutionSteps[d.solutionSteps.length - 1].workingOut);
  }
  console.log('\nupdated', updated, 'version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
