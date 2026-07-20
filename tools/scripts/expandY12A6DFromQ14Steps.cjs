/**
 * Expand detailed solutionSteps for 6D from q14a_i through q18c.
 *
 *   node tools/scripts/expandY12A6DFromQ14Steps.cjs
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
  // ── Q14 powers ─────────────────────────────────────────────────────
  'y12a-6d-q14a_i': {
    solution: 'The correct answer is \\(5\\sin^{4}x\\cos x\\).',
    hint: 'Write \\(\\sin^{5}x=(\\sin x)^{5}\\) and use the chain rule.',
    solutionSteps: [
      S(
        'Given: differentiate \\(y = \\sin^{5}x\\). Why rewrite? The notation \\(\\sin^{5}x\\) means \\((\\sin x)^{5}\\), a power of sine — not sine of a fifth power. What we use is the power chain rule: if \\(y = u^{n}\\) then \\(y\' = n u^{n-1} u\'\\).',
        '\\(y = (\\sin x)^{5}\\)'
      ),
      S(
        'Set the inside carefully: let \\(u = \\sin x\\), so \\(y = u^{5}\\). Then \\(\\dfrac{d}{du}u^{5} = 5u^{4}\\) and \\(u\' = \\cos x\\).',
        '\\(u = \\sin x,\\quad u\' = \\cos x\\)'
      ),
      S(
        'Multiply: \\(y\' = 5u^{4}\\cdot u\' = 5(\\sin x)^{4}\\cos x = 5\\sin^{4}x\\cos x\\). Why keep the cos? Dropping the chain factor is the classic error and would give the distractor \\(5\\sin^{4}x\\).',
        '\\(y\' = 5\\sin^{4}x\\cos x\\)'
      ),
      S(
        'Structure check: the power drops from 5 to 4 on sin, the coefficient is 5, and cos comes from differentiating the inside. This is not \\(5\\cos^{5}x\\) or \\(5\\sin^{5}x\\).',
        '\\(5\\sin^{4}x\\cos x\\)'
      ),
      S(
        'Final answer: \\(5\\sin^{4}x\\cos x\\).',
        '\\(5\\sin^{4}x\\cos x\\)'
      ),
    ],
  },

  'y12a-6d-q14a_ii': {
    solution: 'The correct answer is \\(\\dfrac{1}{5}\\sin^{5}x + C\\).',
    hint: 'Use part (i): the integrand is one-fifth of the derivative of \\(\\sin^{5}x\\).',
    solutionSteps: [
      S(
        'From part (i): \\(\\dfrac{d}{dx}(\\sin^{5}x) = 5\\sin^{4}x\\cos x\\). The integral asked is \\(\\int\\sin^{4}x\\cos x\\,dx\\). Why “hence”? Compare the integrand with that derivative.',
        '\\(\\dfrac{d}{dx}(\\sin^{5}x) = 5\\sin^{4}x\\cos x\\)'
      ),
      S(
        'Divide both sides by 5: \\(\\sin^{4}x\\cos x = \\dfrac{1}{5}\\dfrac{d}{dx}(\\sin^{5}x)\\). What this means: the integrand is exactly one-fifth of the derivative of \\(\\sin^{5}x\\).',
        '\\(\\sin^{4}x\\cos x = \\dfrac{1}{5}\\dfrac{d}{dx}(\\sin^{5}x)\\)'
      ),
      S(
        'Integrate both sides: \\(\\int\\sin^{4}x\\cos x\\,dx = \\dfrac{1}{5}\\sin^{5}x + C\\). Alternatively, substitute \\(u = \\sin x\\), \\(du = \\cos x\\,dx\\), giving \\(\\int u^{4}\\,du = \\dfrac{1}{5}u^{5} + C\\) — same result.',
        '\\(\\dfrac{1}{5}\\sin^{5}x + C\\)'
      ),
      S(
        'Check by differentiating: \\(\\dfrac{d}{dx}\\left(\\dfrac{1}{5}\\sin^{5}x\\right) = \\dfrac{1}{5}\\cdot 5\\sin^{4}x\\cos x = \\sin^{4}x\\cos x\\). A common slip writes \\(\\sin^{5}x + C\\) (forgets the \\(\\dfrac{1}{5}\\)) or uses cos in the answer.',
        '\\(\\dfrac{d}{dx}\\left(\\dfrac{1}{5}\\sin^{5}x\\right) = \\sin^{4}x\\cos x\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{1}{5}\\sin^{5}x + C\\).',
        '\\(\\dfrac{1}{5}\\sin^{5}x + C\\)'
      ),
    ],
  },

  'y12a-6d-q14b_i': {
    solution: 'The correct answer is \\(3\\tan^{2}x\\sec^{2}x\\).',
    hint: 'Write \\(\\tan^{3}x=(\\tan x)^{3}\\); derivative of tan is \\(\\sec^{2}x\\).',
    solutionSteps: [
      S(
        'Given: differentiate \\(y = \\tan^{3}x = (\\tan x)^{3}\\). Why the power chain rule? Tan is raised to a power, so differentiate the outer power and multiply by the derivative of tan.',
        '\\(y = (\\tan x)^{3}\\)'
      ),
      S(
        'Let \\(u = \\tan x\\), so \\(y = u^{3}\\). Then \\(\\dfrac{d}{du}u^{3} = 3u^{2}\\) and the standard derivative \\(u\' = \\sec^{2}x\\).',
        '\\(u = \\tan x,\\quad u\' = \\sec^{2}x\\)'
      ),
      S(
        'Multiply: \\(y\' = 3u^{2}\\cdot u\' = 3\\tan^{2}x\\cdot\\sec^{2}x = 3\\tan^{2}x\\sec^{2}x\\). Why sec squared? Differentiating tan without squaring sec is a common slip (that would give \\(3\\tan^{2}x\\sec x\\)).',
        '\\(y\' = 3\\tan^{2}x\\sec^{2}x\\)'
      ),
      S(
        'Structure: factor 3, power of tan drops from 3 to 2, and \\(\\sec^{2}x\\) is required. Not \\(3\\tan^{2}x\\) alone, and not \\(3\\tan x\\sec^{2}x\\).',
        '\\(3\\tan^{2}x\\sec^{2}x\\)'
      ),
      S(
        'Final answer: \\(3\\tan^{2}x\\sec^{2}x\\).',
        '\\(3\\tan^{2}x\\sec^{2}x\\)'
      ),
    ],
  },

  'y12a-6d-q14b_ii': {
    solution: 'The correct answer is \\(\\dfrac{1}{3}\\tan^{3}x + C\\).',
    hint: 'Part (i) shows the integrand is one-third of the derivative of \\(\\tan^{3}x\\).',
    solutionSteps: [
      S(
        'From part (i): \\(\\dfrac{d}{dx}(\\tan^{3}x) = 3\\tan^{2}x\\sec^{2}x\\). The integral is \\(\\int\\tan^{2}x\\sec^{2}x\\,dx\\). Compare coefficients: the derivative has an extra factor of 3.',
        '\\(\\dfrac{d}{dx}(\\tan^{3}x) = 3\\tan^{2}x\\sec^{2}x\\)'
      ),
      S(
        'Divide both sides by 3: \\(\\tan^{2}x\\sec^{2}x = \\dfrac{1}{3}\\dfrac{d}{dx}(\\tan^{3}x)\\). What this means: the integrand is one-third the derivative of \\(\\tan^{3}x\\).',
        '\\(\\tan^{2}x\\sec^{2}x = \\dfrac{1}{3}\\dfrac{d}{dx}(\\tan^{3}x)\\)'
      ),
      S(
        'Integrate: \\(\\int\\tan^{2}x\\sec^{2}x\\,dx = \\dfrac{1}{3}\\tan^{3}x + C\\). Substitution check: let \\(u = \\tan x\\), then \\(du = \\sec^{2}x\\,dx\\), so \\(\\int u^{2}\\,du = \\dfrac{1}{3}u^{3} + C\\) — same answer.',
        '\\(\\dfrac{1}{3}\\tan^{3}x + C\\)'
      ),
      S(
        'Differentiate to verify: \\(\\dfrac{d}{dx}\\left(\\dfrac{1}{3}\\tan^{3}x\\right) = \\dfrac{1}{3}\\cdot 3\\tan^{2}x\\sec^{2}x = \\tan^{2}x\\sec^{2}x\\). A common slip writes \\(\\tan^{3}x + C\\) or confuses with \\(\\sec^{3}x\\).',
        '\\(\\dfrac{d}{dx}\\left(\\dfrac{1}{3}\\tan^{3}x\\right) = \\tan^{2}x\\sec^{2}x\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{1}{3}\\tan^{3}x + C\\).',
        '\\(\\dfrac{1}{3}\\tan^{3}x + C\\)'
      ),
    ],
  },

  // ── Q15 exponential ────────────────────────────────────────────────
  'y12a-6d-q15a_i': {
    solution: 'The correct answer is \\(e^{\\sin x}\\cos x\\).',
    hint: 'Chain rule: derivative of \\(e^{u}\\) is \\(e^{u}\\cdot u\'\\).',
    solutionSteps: [
      S(
        'Given: differentiate \\(y = e^{\\sin x}\\). Why chain rule? The exponential is of a non-linear function of \\(x\\). What: if \\(y = e^{u}\\) then \\(y\' = e^{u}\\cdot u\'\\).',
        '\\(y = e^{\\sin x}\\)'
      ),
      S(
        'Let \\(u = \\sin x\\). Then \\(u\' = \\cos x\\), and the exponential factor stays \\(e^{u} = e^{\\sin x}\\).',
        '\\(u = \\sin x,\\quad u\' = \\cos x\\)'
      ),
      S(
        'Multiply: \\(y\' = e^{\\sin x}\\cdot\\cos x = e^{\\sin x}\\cos x\\). Why not multiply by sin? The inside derivative of sin is cos, not sin. A common slip writes \\(e^{\\sin x}\\sin x\\) or forgets the chain factor entirely and writes only \\(e^{\\sin x}\\).',
        '\\(y\' = e^{\\sin x}\\cos x\\)'
      ),
      S(
        'Sign note: there is no automatic minus (that would appear for \\(e^{\\cos x}\\) or for differentiating cos). The form is positive cos times the exponential.',
        '\\(e^{\\sin x}\\cos x\\)'
      ),
      S(
        'Final answer: \\(e^{\\sin x}\\cos x\\).',
        '\\(e^{\\sin x}\\cos x\\)'
      ),
    ],
  },

  'y12a-6d-q15a_ii': {
    solution: 'The correct answer is \\(e - 1\\).',
    hint: 'The integrand is the derivative of \\(e^{\\sin x}\\) from part (i).',
    solutionSteps: [
      S(
        'From part (i): \\(\\dfrac{d}{dx}\\bigl(e^{\\sin x}\\bigr) = e^{\\sin x}\\cos x\\). The definite integral is \\(\\displaystyle\\int_{0}^{\\pi/2} \\cos x\\, e^{\\sin x}\\,dx\\). Why “hence”? The integrand is exactly that derivative.',
        '\\(\\dfrac{d}{dx}(e^{\\sin x}) = e^{\\sin x}\\cos x\\)'
      ),
      S(
        'By the fundamental theorem, the antiderivative is \\(e^{\\sin x}\\). No extra constant factor is needed because the match with part (i) is exact.',
        '\\(F(x) = e^{\\sin x}\\)'
      ),
      S(
        'Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) - F(0) = e^{\\sin(\\pi/2)} - e^{\\sin 0} = e^{1} - e^{0} = e - 1\\).',
        '\\(e - 1\\)'
      ),
      S(
        'A common slip writes \\(e\\) only (forgets to subtract the lower limit \\(e^{0} = 1\\)), or adds \\(+C\\) to a definite integral, or confuses \\(\\sin\\dfrac{\\pi}{2}\\) with 0.',
        '\\(e^{1} - e^{0} = e - 1\\)'
      ),
      S(
        'Final answer: \\(e - 1\\).',
        '\\(e - 1\\)'
      ),
    ],
  },

  'y12a-6d-q15b_i': {
    solution: 'The correct answer is \\(e^{\\tan x}\\sec^{2}x\\).',
    hint: 'Chain rule with inside tan; derivative of tan is \\(\\sec^{2}x\\).',
    solutionSteps: [
      S(
        'Given: differentiate \\(y = e^{\\tan x}\\). Chain rule: \\(y\' = e^{u}\\cdot u\'\\) with \\(u = \\tan x\\).',
        '\\(y = e^{\\tan x}\\)'
      ),
      S(
        'Inside: \\(u\' = \\sec^{2}x\\) (standard derivative of tan). Outer exponential stays \\(e^{\\tan x}\\).',
        '\\(u = \\tan x,\\quad u\' = \\sec^{2}x\\)'
      ),
      S(
        'Multiply: \\(y\' = e^{\\tan x}\\cdot\\sec^{2}x = e^{\\tan x}\\sec^{2}x\\). Why sec squared? Using only \\(\\sec x\\) is a frequent distractor. Also reject replacing tan by sin in the exponential.',
        '\\(y\' = e^{\\tan x}\\sec^{2}x\\)'
      ),
      S(
        'Structure check: exponential of tan, times sec squared — both pieces required.',
        '\\(e^{\\tan x}\\sec^{2}x\\)'
      ),
      S(
        'Final answer: \\(e^{\\tan x}\\sec^{2}x\\).',
        '\\(e^{\\tan x}\\sec^{2}x\\)'
      ),
    ],
  },

  'y12a-6d-q15b_ii': {
    solution: 'The correct answer is \\(e - 1\\).',
    hint: 'The integrand matches the derivative of \\(e^{\\tan x}\\) from part (i).',
    solutionSteps: [
      S(
        'From part (i): \\(\\dfrac{d}{dx}\\bigl(e^{\\tan x}\\bigr) = e^{\\tan x}\\sec^{2}x\\). The integral is \\(\\displaystyle\\int_{0}^{\\pi/4} \\sec^{2}x\\, e^{\\tan x}\\,dx\\) — exact match.',
        '\\(\\dfrac{d}{dx}(e^{\\tan x}) = e^{\\tan x}\\sec^{2}x\\)'
      ),
      S(
        'Antiderivative: \\(F(x) = e^{\\tan x}\\).',
        '\\(F(x) = e^{\\tan x}\\)'
      ),
      S(
        'Evaluate: \\(F\\!\\left(\\dfrac{\\pi}{4}\\right) - F(0) = e^{\\tan(\\pi/4)} - e^{\\tan 0} = e^{1} - e^{0} = e - 1\\). Why \\(\\pi/4\\)? Because \\(\\tan\\dfrac{\\pi}{4} = 1\\), so the upper value is exactly \\(e\\).',
        '\\(e - 1\\)'
      ),
      S(
        'A common slip uses \\(\\tan\\dfrac{\\pi}{4} = \\dfrac{\\pi}{4}\\) or forgets the lower limit \\(e^{0} = 1\\).',
        '\\(e^{1} - 1 = e - 1\\)'
      ),
      S(
        'Final answer: \\(e - 1\\).',
        '\\(e - 1\\)'
      ),
    ],
  },

  // ── Q16 given antiderivatives ──────────────────────────────────────
  'y12a-6d-q16a': {
    solution: 'The correct answer is \\(1\\).',
    hint: 'Use the given antiderivative and evaluate \\(F(\\pi/2) - F(0)\\).',
    solutionSteps: [
      S(
        'Given that \\(\\dfrac{d}{dx}(\\sin x - x\\cos x) = x\\sin x\\). What this means: an antiderivative of the integrand \\(x\\sin x\\) is \\(F(x) = \\sin x - x\\cos x\\). Why trust it? You may verify by product rule if required: derivative of \\(-x\\cos x\\) plus cos recovers \\(x\\sin x\\).',
        '\\(F(x) = \\sin x - x\\cos x\\)'
      ),
      S(
        'By the fundamental theorem: \\(\\displaystyle\\int_{0}^{\\pi/2} x\\sin x\\,dx = F\\!\\left(\\dfrac{\\pi}{2}\\right) - F(0)\\).',
        '\\(F\\!\\left(\\dfrac{\\pi}{2}\\right) - F(0)\\)'
      ),
      S(
        'At the upper limit: \\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = \\sin\\dfrac{\\pi}{2} - \\dfrac{\\pi}{2}\\cos\\dfrac{\\pi}{2} = 1 - \\dfrac{\\pi}{2}\\cdot 0 = 1\\).',
        '\\(F\\!\\left(\\dfrac{\\pi}{2}\\right) = 1\\)'
      ),
      S(
        'At the lower limit: \\(F(0) = \\sin 0 - 0\\cdot\\cos 0 = 0\\). Difference: \\(1 - 0 = 1\\). A common slip forgets the \\(-x\\cos x\\) term at 0 (still 0) or incorrectly uses \\(\\cos\\dfrac{\\pi}{2} = 1\\).',
        '\\(1 - 0 = 1\\)'
      ),
      S(
        'Final answer: \\(1\\).',
        '\\(1\\)'
      ),
    ],
  },

  'y12a-6d-q16b': {
    solution: 'The correct answer is \\(\\dfrac{5}{24}\\).',
    hint: 'Evaluate the given antiderivative at \\(\\pi/3\\) and at 0; subtract carefully.',
    solutionSteps: [
      S(
        'Given that \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{1}{3}\\cos^{3}x - \\cos x\\right) = \\sin^{3}x\\). So an antiderivative is \\(F(x) = \\dfrac{1}{3}\\cos^{3}x - \\cos x\\).',
        '\\(F(x) = \\dfrac{1}{3}\\cos^{3}x - \\cos x\\)'
      ),
      S(
        'We need \\(F\\!\\left(\\dfrac{\\pi}{3}\\right) - F(0)\\). First the upper value: \\(\\cos\\dfrac{\\pi}{3} = \\dfrac{1}{2}\\), so \\(\\cos^{3}\\dfrac{\\pi}{3} = \\dfrac{1}{8}\\). Thus \\(F\\!\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{3}\\cdot\\dfrac{1}{8} - \\dfrac{1}{2} = \\dfrac{1}{24} - \\dfrac{1}{2}\\).',
        '\\(F\\!\\left(\\dfrac{\\pi}{3}\\right) = \\dfrac{1}{24} - \\dfrac{1}{2}\\)'
      ),
      S(
        'Lower value: \\(\\cos 0 = 1\\), so \\(F(0) = \\dfrac{1}{3}\\cdot 1 - 1 = \\dfrac{1}{3} - 1 = -\\dfrac{2}{3}\\).',
        '\\(F(0) = -\\dfrac{2}{3}\\)'
      ),
      S(
        'Difference with a common denominator 24: \\(\\dfrac{1}{24} - \\dfrac{1}{2} - \\left(-\\dfrac{2}{3}\\right) = \\dfrac{1}{24} - \\dfrac{12}{24} + \\dfrac{16}{24} = \\dfrac{1 - 12 + 16}{24} = \\dfrac{5}{24}\\).',
        '\\(\\dfrac{5}{24}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{5}{24}\\). A common slip drops the double minus when subtracting \\(F(0)\\), or uses \\(\\cos\\dfrac{\\pi}{3} = \\dfrac{\\sqrt{3}}{2}\\).',
        '\\(\\dfrac{5}{24}\\)'
      ),
    ],
  },

  // ── Q17 ────────────────────────────────────────────────────────────
  'y12a-6d-q17a': {
    solution: 'The correct answer is \\(\\dfrac{\\pi}{8} - \\dfrac{1}{4}\\).',
    hint: 'Evaluate the given antiderivative at \\(\\pi/4\\) and at 0.',
    solutionSteps: [
      S(
        'Given that \\(\\dfrac{d}{dx}\\!\\left(\\dfrac{1}{2}x\\sin 2x + \\dfrac{1}{4}\\cos 2x\\right) = x\\cos 2x\\). So \\(F(x) = \\dfrac{1}{2}x\\sin 2x + \\dfrac{1}{4}\\cos 2x\\) is an antiderivative of the integrand.',
        '\\(F(x) = \\dfrac{1}{2}x\\sin 2x + \\dfrac{1}{4}\\cos 2x\\)'
      ),
      S(
        'Upper limit \\(x = \\dfrac{\\pi}{4}\\): \\(\\sin 2\\cdot\\dfrac{\\pi}{4} = \\sin\\dfrac{\\pi}{2} = 1\\) and \\(\\cos\\dfrac{\\pi}{2} = 0\\). So \\(F\\!\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{1}{2}\\cdot\\dfrac{\\pi}{4}\\cdot 1 + \\dfrac{1}{4}\\cdot 0 = \\dfrac{\\pi}{8}\\).',
        '\\(F\\!\\left(\\dfrac{\\pi}{4}\\right) = \\dfrac{\\pi}{8}\\)'
      ),
      S(
        'Lower limit \\(x = 0\\): \\(\\sin 0 = 0\\) and \\(\\cos 0 = 1\\). So \\(F(0) = 0 + \\dfrac{1}{4}\\cdot 1 = \\dfrac{1}{4}\\).',
        '\\(F(0) = \\dfrac{1}{4}\\)'
      ),
      S(
        'Difference: \\(F\\!\\left(\\dfrac{\\pi}{4}\\right) - F(0) = \\dfrac{\\pi}{8} - \\dfrac{1}{4}\\). A common slip adds instead of subtracts, or uses \\(\\sin\\dfrac{\\pi}{4}\\) instead of \\(\\sin\\dfrac{\\pi}{2}\\).',
        '\\(\\dfrac{\\pi}{8} - \\dfrac{1}{4}\\)'
      ),
      S(
        'Final answer: \\(\\dfrac{\\pi}{8} - \\dfrac{1}{4}\\).',
        '\\(\\dfrac{\\pi}{8} - \\dfrac{1}{4}\\)'
      ),
    ],
  },

  // ── Q18 existence ──────────────────────────────────────────────────
  'y12a-6d-q18a': {
    solution:
      'The integral does not exist: \\(\\sec^{2}x\\) has a vertical asymptote at \\(x = \\dfrac{\\pi}{2}\\) in the interval.',
    hint: 'Check continuity of the integrand on the whole closed interval.',
    solutionSteps: [
      S(
        'The formal antiderivative of \\(\\sec^{2}x\\) is \\(\\tan x\\). Why is that not enough? The fundamental theorem requires the integrand to be continuous on the closed interval of integration (or at least improperly integrable).',
        '\\(\\int\\sec^{2}x\\,dx = \\tan x + C\\)'
      ),
      S(
        'On \\([0,\\pi]\\), look for discontinuities: \\(\\sec x = \\dfrac{1}{\\cos x}\\) blows up where \\(\\cos x = 0\\). In this interval, \\(\\cos\\dfrac{\\pi}{2} = 0\\), so \\(\\sec^{2}x\\) has a vertical asymptote at \\(x = \\dfrac{\\pi}{2}\\).',
        '\\(x = \\dfrac{\\pi}{2}\\ \\text{singularity}\\)'
      ),
      S(
        'Because the singularity lies strictly inside \\([0,\\pi]\\), the ordinary definite integral \\(\\int_{0}^{\\pi}\\sec^{2}x\\,dx\\) does not exist.',
        '\\text{does not exist as a proper definite integral}'
      ),
      S(
        'A common trap is to write \\(\\tan\\pi - \\tan 0 = 0 - 0 = 0\\). This is invalid: the FTC does not apply across an asymptote, even if the formal endpoint values of the antiderivative look fine.',
        '\\(\\tan\\pi - \\tan 0\\ \\text{is not valid here}\\)'
      ),
      S(
        'Final answer: does not exist — vertical asymptote of \\(\\sec^{2}x\\) at \\(x = \\dfrac{\\pi}{2}\\).',
        '\\(\\text{does not exist}\\)'
      ),
    ],
  },

  'y12a-6d-q18b': {
    solution:
      'The integral does not exist: \\(\\tan x\\) is discontinuous at \\(x = \\dfrac{\\pi}{2}\\) in the interval.',
    hint: 'Tan has a vertical asymptote where cos is zero.',
    solutionSteps: [
      S(
        'Consider \\(\\int_{0}^{\\pi}\\tan x\\,dx\\). A formal antiderivative is \\(-\\ln|\\cos x|\\) (or \\(\\ln|\\sec x|\\)). Again, first check continuity of the integrand.',
        '\\(\\tan x = \\dfrac{\\sin x}{\\cos x}\\)'
      ),
      S(
        'On \\([0,\\pi]\\), \\(\\tan x\\) is discontinuous at \\(x = \\dfrac{\\pi}{2}\\) (vertical asymptote where \\(\\cos x = 0\\)). The integrand is not continuous on the whole interval.',
        '\\(x = \\dfrac{\\pi}{2}\\ \\text{singularity}\\)'
      ),
      S(
        'Therefore the ordinary definite integral does not exist. (Improper “principal value” tricks are not required for this question.)',
        '\\(\\text{does not exist}\\)'
      ),
      S(
        'A common slip claims the integral is 0 because tan is “odd about \\(\\pi/2\\)” without justifying improper convergence — that is not accepted as existence of the standard definite integral here.',
        '\\(\\text{not continuous on }[0,\\pi]\\)'
      ),
      S(
        'Final answer: does not exist — discontinuity of \\(\\tan x\\) at \\(x = \\dfrac{\\pi}{2}\\).',
        '\\(\\text{does not exist}\\)'
      ),
    ],
  },

  'y12a-6d-q18c': {
    solution:
      'The integral does not exist: \\(\\cot x\\) is discontinuous at \\(x = 0\\) in the interval.',
    hint: 'Cot has a vertical asymptote where sin is zero.',
    solutionSteps: [
      S(
        'Consider \\(\\displaystyle\\int_{-\\pi/2}^{\\pi/2}\\cot x\\,dx\\). Formally, \\(\\int\\cot x\\,dx = \\ln|\\sin x| + C\\). First check continuity on the interval.',
        '\\(\\cot x = \\dfrac{\\cos x}{\\sin x}\\)'
      ),
      S(
        'Cotangent has a vertical asymptote at \\(x = 0\\) (where \\(\\sin x = 0\\)), and 0 lies strictly inside \\(\\left[-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right]\\). So the integrand is not continuous on the whole interval.',
        '\\(x = 0\\ \\text{singularity}\\)'
      ),
      S(
        'Although cot is an odd function, an odd singularity in the middle does not automatically make the improper integral exist in the ordinary sense required here. The definite integral is not defined as a standard Riemann integral on this interval.',
        '\\(\\text{not continuous on the interval}\\)'
      ),
      S(
        'Additionally, cot is undefined at the endpoints \\(x = \\pm\\dfrac{\\pi}{2}\\) (where cos is zero). That reinforces that the closed-interval setup is invalid.',
        '\\(\\text{undefined at }\\pm\\pi/2\\ \\text{as well}\\)'
      ),
      S(
        'Final answer: does not exist — discontinuity of \\(\\cot x\\) at \\(x = 0\\) (inside the interval).',
        '\\(\\text{does not exist}\\)'
      ),
    ],
  },
};

(async () => {
  const seedPath = path.resolve('src/constants/seedYear12aCh6DQuestions.js');
  delete require.cache[require.resolve(seedPath)];
  const list = require(seedPath).Y12A_CH6D_QUESTIONS || require(seedPath).default;

  let n = 0;
  for (const [id, patch] of Object.entries(PATCH)) {
    const q = list.find((x) => x.id === id);
    if (!q) {
      console.warn('missing seed', id);
      continue;
    }
    Object.assign(q, {
      solutionSteps: patch.solutionSteps,
      solution: patch.solution,
      hint: patch.hint,
      isNew: true,
      origin: 'seed',
    });
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
    n++;
    console.log('OK', id, 'steps=', patch.solutionSteps.length);
  }

  writeFileSync(
    seedPath,
    'export const Y12A_CH6D_QUESTIONS = ' +
      JSON.stringify(list, null, 2) +
      ';\n\nexport default Y12A_CH6D_QUESTIONS;\n'
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

  for (const id of ['y12a-6d-q14a_ii', 'y12a-6d-q15a_ii', 'y12a-6d-q16b', 'y12a-6d-q18a']) {
    const d = (await db.collection('questions').doc(id).get()).data();
    console.log('\n' + id);
    d.solutionSteps.forEach((s, i) =>
      console.log(' ', i + 1, s.explanation.slice(0, 90) + '…')
    );
  }
  console.log('\nupdated', n, 'version', ver);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
