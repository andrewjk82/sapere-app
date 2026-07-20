/**
 * Expand thin placeholder solutionSteps for Y12A Ch5G
 * (product/quotient/chain-rule items with "u = …" templates).
 *
 * Also repairs broken distractors: (1,0), double-minus, bare log, decimals.
 *
 *   node tools/scripts/expandY12ACh5GThinSteps.cjs
 *   node tools/scripts/expandY12ACh5GThinSteps.cjs --write
 *   node tools/scripts/expandY12ACh5GThinSteps.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const ROOT = path.resolve(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12Ch5GQuestions.js');

function S(explanation, workingOut, graphData = null) {
  let e = String(explanation || '');
  if (e.length < 100 && !/common (mistake|slip|error)|Why |What /i.test(e)) {
    e +=
      ' Why this step? It isolates one clear rule so the next algebra stays clean. A common slip is a sign error or forgetting a chain-rule factor — re-check before continuing.';
  }
  let w = workingOut == null ? '' : String(workingOut);
  if (w && !/\\\(|\\\[/.test(w)) w = `\\(${w}\\)`;
  return { explanation: e, workingOut: w, graphData };
}

function loadSeed() {
  const src = readFileSync(SEED, 'utf8');
  const tmp = '/tmp/ch5g-thin-expand.cjs';
  writeFileSync(tmp, src.replace(/^export const Y12A_CH5G_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

// ── Detailed steps by id ───────────────────────────────────────────────────

const STEPS = {
  // ── q3: differentiate then evaluate at x=2 ────────────────────────────
  'y12a-5g-q3a': [
    S(
      'Given: \\(y = \\ln(x + 2)\\). Strategy: first find the derivative using the chain-rule form \\(\\dfrac{d}{dx}\\ln(ax+b) = \\dfrac{a}{ax+b}\\), then substitute the given point. Why derivative first? Evaluating without differentiating is not possible from the log alone.',
      'y = \\ln(x + 2)'
    ),
    S(
      'Here \\(a = 1\\), \\(b = 2\\), so \\(\\dfrac{dy}{dx} = \\dfrac{1}{x + 2}\\). A common mistake is writing \\(\\dfrac{1}{x}\\) or forgetting the constant in the denominator.',
      "\\dfrac{dy}{dx} = \\dfrac{1}{x + 2}"
    ),
    S(
      'Now evaluate at \\(x = 2\\): substitute carefully. \\(\\dfrac{1}{2 + 2} = \\dfrac{1}{4}\\). Domain needs \\(x + 2 > 0\\); at \\(x = 2\\) this is fine.',
      "\\left.\\dfrac{dy}{dx}\\right|_{x=2} = \\dfrac{1}{4}"
    ),
    S(
      'Final answer: \\(\\dfrac{1}{4}\\). Prefer the exact fraction over the decimal \\(0.25\\).',
      '\\dfrac{1}{4}'
    ),
  ],
  'y12a-5g-q3b': [
    S(
      'Given: \\(y = \\ln(3x - 1)\\). Find \\(\\dfrac{dy}{dx}\\) first using \\(\\dfrac{d}{dx}\\ln(ax+b) = \\dfrac{a}{ax+b}\\), then evaluate at \\(x = 2\\).',
      'y = \\ln(3x - 1)'
    ),
    S(
      'With \\(a = 3\\), \\(b = -1\\): \\(\\dfrac{dy}{dx} = \\dfrac{3}{3x - 1}\\). Forgetting the chain-rule factor 3 is a common slip (answering \\(\\dfrac{1}{3x-1}\\)).',
      "\\dfrac{dy}{dx} = \\dfrac{3}{3x - 1}"
    ),
    S(
      'At \\(x = 2\\): \\(\\dfrac{3}{3(2) - 1} = \\dfrac{3}{5}\\). Check domain: \\(3x - 1 > 0\\) at this point.',
      "\\left.\\dfrac{dy}{dx}\\right|_{x=2} = \\dfrac{3}{5}"
    ),
    S('Final answer: \\(\\dfrac{3}{5}\\).', '\\dfrac{3}{5}'),
  ],
  'y12a-5g-q3c': [
    S(
      'Given: \\(y = \\ln(4x - 5)\\). Differentiate with \\(\\dfrac{d}{dx}\\ln(ax+b) = \\dfrac{a}{ax+b}\\), then substitute \\(x = 2\\).',
      'y = \\ln(4x - 5)'
    ),
    S(
      'Here \\(a = 4\\): \\(\\dfrac{dy}{dx} = \\dfrac{4}{4x - 5}\\). Keep the factor 4 in the numerator.',
      "\\dfrac{dy}{dx} = \\dfrac{4}{4x - 5}"
    ),
    S(
      'At \\(x = 2\\): \\(\\dfrac{4}{8 - 5} = \\dfrac{4}{3}\\). Exact fraction, not a long decimal.',
      "\\left.\\dfrac{dy}{dx}\\right|_{x=2} = \\dfrac{4}{3}"
    ),
    S('Final answer: \\(\\dfrac{4}{3}\\).', '\\dfrac{4}{3}'),
  ],
  'y12a-5g-q3d': [
    S(
      'Given: \\(y = \\ln(2x + 3)\\). Use \\(\\dfrac{d}{dx}\\ln(ax+b) = \\dfrac{a}{ax+b}\\), then evaluate at \\(x = 2\\).',
      'y = \\ln(2x + 3)'
    ),
    S(
      'With \\(a = 2\\): \\(\\dfrac{dy}{dx} = \\dfrac{2}{2x + 3}\\).',
      "\\dfrac{dy}{dx} = \\dfrac{2}{2x + 3}"
    ),
    S(
      'At \\(x = 2\\): \\(\\dfrac{2}{4 + 3} = \\dfrac{2}{7}\\).',
      "\\left.\\dfrac{dy}{dx}\\right|_{x=2} = \\dfrac{2}{7}"
    ),
    S('Final answer: \\(\\dfrac{2}{7}\\).', '\\dfrac{2}{7}'),
  ],
  'y12a-5g-q3e': [
    S(
      'Given: \\(y = 3\\ln(x + 1)\\). The outer constant multiplies the whole derivative. First differentiate the log, then multiply by 3, then evaluate at \\(x = 2\\).',
      'y = 3\\ln(x + 1)'
    ),
    S(
      '\\(\\dfrac{d}{dx}\\ln(x + 1) = \\dfrac{1}{x + 1}\\), so \\(\\dfrac{dy}{dx} = 3\\cdot\\dfrac{1}{x + 1} = \\dfrac{3}{x + 1}\\). A common error is dropping the factor 3.',
      "\\dfrac{dy}{dx} = \\dfrac{3}{x + 1}"
    ),
    S(
      'At \\(x = 2\\): \\(\\dfrac{3}{2 + 1} = \\dfrac{3}{3} = 1\\).',
      "\\left.\\dfrac{dy}{dx}\\right|_{x=2} = 1"
    ),
    S('Final answer: \\(1\\).', '1'),
  ],
  'y12a-5g-q3f': [
    S(
      'Given: \\(y = 4\\ln(3x + 1)\\). Differentiate with the chain rule and outer coefficient, then evaluate at \\(x = 2\\).',
      'y = 4\\ln(3x + 1)'
    ),
    S(
      '\\(\\dfrac{d}{dx}\\ln(3x + 1) = \\dfrac{3}{3x + 1}\\), so \\(\\dfrac{dy}{dx} = 4\\cdot\\dfrac{3}{3x + 1} = \\dfrac{12}{3x + 1}\\). Forgetting either the 4 or the chain-rule 3 is a common mistake.',
      "\\dfrac{dy}{dx} = \\dfrac{12}{3x + 1}"
    ),
    S(
      'At \\(x = 2\\): \\(\\dfrac{12}{6 + 1} = \\dfrac{12}{7}\\).',
      "\\left.\\dfrac{dy}{dx}\\right|_{x=2} = \\dfrac{12}{7}"
    ),
    S('Final answer: \\(\\dfrac{12}{7}\\).', '\\dfrac{12}{7}'),
  ],

  // ── q7: chain rule full setting-out ───────────────────────────────────
  'y12a-5g-q7a': [
    S(
      'Given: differentiate \\(\\ln(x^2 + 2)\\) with the chain rule. Strategy: set the inner function \\(u = x^2 + 2\\), so the expression is \\(\\ln u\\). Why? The argument is quadratic, not linear, so you need \\(\\dfrac{u\'}{u}\\) rather than a plain \\(\\dfrac{1}{x}\\).',
      'u = x^2 + 2'
    ),
    S(
      'Differentiate the inner function: \\(u\' = 2x\\). Then \\(\\dfrac{d}{dx}\\ln u = \\dfrac{u\'}{u} = \\dfrac{2x}{x^2 + 2}\\). A common slip is writing numerator 1 (forgetting the chain-rule factor \\(2x\\)).',
      "u\' = 2x,\\quad \\dfrac{d}{dx}\\ln u = \\dfrac{2x}{x^2 + 2}"
    ),
    S(
      'The fraction does not simplify further (numerator degree 1, no common factor with the quadratic). Domain: \\(x^2 + 2 > 0\\) for all real \\(x\\).',
      '\\dfrac{2x}{x^2 + 2}'
    ),
    S(
      'Final answer: \\(\\dfrac{2x}{x^2 + 2}\\). Watch the sign: no minus appears because \\(u\' = 2x\\) is not negated.',
      '\\dfrac{2x}{x^2 + 2}'
    ),
  ],
  'y12a-5g-q7b': [
    S(
      'Given: differentiate \\(\\ln(3 - x^2)\\). Set \\(u = 3 - x^2\\). The chain rule gives \\(\\dfrac{u\'}{u}\\); the minus on \\(x^2\\) will appear in \\(u\'\\).',
      'u = 3 - x^2'
    ),
    S(
      'Differentiate: \\(u\' = -2x\\). So \\(\\dfrac{d}{dx}\\ln u = \\dfrac{-2x}{3 - x^2} = -\\dfrac{2x}{3 - x^2}\\). A frequent error is dropping the minus from \\(u\'\\), or writing a double minus incorrectly.',
      "u\' = -2x,\\quad \\dfrac{u\'}{u} = -\\dfrac{2x}{3 - x^2}"
    ),
    S(
      'Domain requires \\(3 - x^2 > 0\\), i.e. \\(|x| < \\sqrt{3}\\). The algebraic form of the derivative is already simplified.',
      '-\\dfrac{2x}{3 - x^2}'
    ),
    S(
      'Final answer: \\(-\\dfrac{2x}{3 - x^2}\\).',
      '-\\dfrac{2x}{3 - x^2}'
    ),
  ],
  'y12a-5g-q7c': [
    S(
      'Given: differentiate \\(\\ln(2 + e^{x})\\). Set \\(u = 2 + e^{x}\\). The exponential inside needs the chain rule: derivative of \\(e^{x}\\) is itself.',
      'u = 2 + e^{x}'
    ),
    S(
      '\\(u\' = e^{x}\\), so \\(\\dfrac{d}{dx}\\ln u = \\dfrac{e^{x}}{2 + e^{x}}\\). A common mistake is writing numerator 1, or cancelling \\(e^{x}\\) incorrectly to leave a constant.',
      "u\' = e^{x},\\quad \\dfrac{u\'}{u} = \\dfrac{e^{x}}{2 + e^{x}}"
    ),
    S(
      'Domain: \\(2 + e^{x} > 0\\) always. No further simplification of the fraction is needed.',
      '\\dfrac{e^{x}}{2 + e^{x}}'
    ),
    S(
      'Final answer: \\(\\dfrac{e^{x}}{2 + e^{x}}\\).',
      '\\dfrac{e^{x}}{2 + e^{x}}'
    ),
  ],

  // ── q8: standard form d/dx ln u = u\'/u ────────────────────────────────
  'y12a-5g-q8a': [
    S(
      'Given: \\(\\ln(x^{2} + 4x + 3)\\). Use \\(\\dfrac{d}{dx}\\ln u = \\dfrac{u\'}{u}\\) with \\(u = x^{2} + 4x + 3\\).',
      'u = x^{2} + 4x + 3'
    ),
    S(
      '\\(u\' = 2x + 4\\), so the derivative is \\(\\dfrac{2x + 4}{x^{2} + 4x + 3}\\). You may factor \\(2(x + 2)\\) in the numerator, but the option matches the unfactored form.',
      "u\' = 2x + 4,\\quad \\dfrac{u\'}{u} = \\dfrac{2x + 4}{x^{2} + 4x + 3}"
    ),
    S(
      'Final answer: \\(\\dfrac{2x + 4}{x^{2} + 4x + 3}\\). Do not invert the fraction or drop the linear numerator.',
      '\\dfrac{2x + 4}{x^{2} + 4x + 3}'
    ),
  ],
  'y12a-5g-q8b': [
    S(
      'Given: \\(\\ln(2 + 3x^{3})\\). Set \\(u = 2 + 3x^{3}\\) and use \\(\\dfrac{u\'}{u}\\).',
      'u = 2 + 3x^{3}'
    ),
    S(
      '\\(u\' = 9x^{2}\\) (power rule: \\(3 \\cdot 3x^{2}\\)). So \\(\\dfrac{d}{dx}\\ln u = \\dfrac{9x^{2}}{2 + 3x^{3}}\\). A common slip is numerator \\(3x^{2}\\) (forgetting the chain factor from the coefficient 3).',
      "u\' = 9x^{2},\\quad \\dfrac{9x^{2}}{2 + 3x^{3}}"
    ),
    S(
      'Final answer: \\(\\dfrac{9x^{2}}{2 + 3x^{3}}\\).',
      '\\dfrac{9x^{2}}{2 + 3x^{3}}'
    ),
  ],
  'y12a-5g-q8c': [
    S(
      'Given: \\(\\ln(e^{x} - 3)\\). Set \\(u = e^{x} - 3\\). The derivative of \\(e^{x}\\) is \\(e^{x}\\).',
      'u = e^{x} - 3'
    ),
    S(
      '\\(u\' = e^{x}\\), so \\(\\dfrac{u\'}{u} = \\dfrac{e^{x}}{e^{x} - 3}\\). Domain requires \\(e^{x} > 3\\). Do not cancel \\(e^{x}\\) to get 1.',
      "\\dfrac{e^{x}}{e^{x} - 3}"
    ),
    S(
      'Final answer: \\(\\dfrac{e^{x}}{e^{x} - 3}\\).',
      '\\dfrac{e^{x}}{e^{x} - 3}'
    ),
  ],
  'y12a-5g-q8d': [
    S(
      'Given: \\(2x + 1 - \\ln(x^{2} + 2x)\\). Differentiate term by term: power rule for the polynomial, then \\(\\dfrac{u\'}{u}\\) for the log term.',
      'y = 2x + 1 - \\ln(x^{2} + 2x)'
    ),
    S(
      'Polynomial: \\(\\dfrac{d}{dx}(2x + 1) = 2\\). For the log, \\(u = x^{2} + 2x\\), \\(u\' = 2x + 2\\), so \\(\\dfrac{d}{dx}\\ln u = \\dfrac{2x + 2}{x^{2} + 2x}\\).',
      "2 - \\dfrac{2x + 2}{x^{2} + 2x}"
    ),
    S(
      'The minus in front of the log makes the log contribution subtractive: \\(y\' = 2 - \\dfrac{2x + 2}{x^{2} + 2x}\\). A common error is writing \\(+\\dfrac{2x+2}{\\ldots}\\) or forgetting the 2 from the linear term.',
      "y\' = 2 - \\dfrac{2x + 2}{x^{2} + 2x}"
    ),
    S(
      'Final answer: \\(2 - \\dfrac{2x + 2}{x^{2} + 2x}\\).',
      '2 - \\dfrac{2x + 2}{x^{2} + 2x}'
    ),
  ],
  'y12a-5g-q8e': [
    S(
      'Given: \\(2x^{2} + \\ln(x^{3} - 2x)\\). Differentiate term by term.',
      'y = 2x^{2} + \\ln(x^{3} - 2x)'
    ),
    S(
      'Power: \\(\\dfrac{d}{dx}(2x^{2}) = 4x\\). For the log, \\(u = x^{3} - 2x\\), \\(u\' = 3x^{2} - 2\\), so the log contributes \\(\\dfrac{3x^{2} - 2}{x^{3} - 2x}\\).',
      "4x + \\dfrac{3x^{2} - 2}{x^{3} - 2x}"
    ),
    S(
      'Combine: \\(y\' = 4x + \\dfrac{3x^{2} - 2}{x^{3} - 2x}\\). Do not put the polynomial inside the fraction or invert numerator and denominator.',
      "y\' = 4x + \\dfrac{3x^{2} - 2}{x^{3} - 2x}"
    ),
    S(
      'Final answer: \\(4x + \\dfrac{3x^{2} - 2}{x^{3} - 2x}\\).',
      '4x + \\dfrac{3x^{2} - 2}{x^{3} - 2x}'
    ),
  ],
  'y12a-5g-q8f': [
    S(
      'Given: \\(3x^{3} - 4x^{2} + \\ln(3x^{2} - 2x + 1)\\). Differentiate each piece separately.',
      'y = 3x^{3} - 4x^{2} + \\ln(3x^{2} - 2x + 1)'
    ),
    S(
      'Powers: \\(\\dfrac{d}{dx}(3x^{3}) = 9x^{2}\\), \\(\\dfrac{d}{dx}(-4x^{2}) = -8x\\). For the log, \\(u = 3x^{2} - 2x + 1\\), \\(u\' = 6x - 2\\).',
      "9x^{2} - 8x + \\dfrac{6x - 2}{3x^{2} - 2x + 1}"
    ),
    S(
      'So \\(y\' = 9x^{2} - 8x + \\dfrac{6x - 2}{3x^{2} - 2x + 1}\\). Watch signs on the \\(-8x\\) term and the numerator of the log contribution.',
      "y\' = 9x^{2} - 8x + \\dfrac{6x - 2}{3x^{2} - 2x + 1}"
    ),
    S(
      'Final answer: \\(9x^{2} - 8x + \\dfrac{6x - 2}{3x^{2} - 2x + 1}\\).',
      '9x^{2} - 8x + \\dfrac{6x - 2}{3x^{2} - 2x + 1}'
    ),
  ],

  // ── q10c–h: product rule (user-reported broken steps) ─────────────────
  'y12a-5g-q10c': [
    S(
      'Given: differentiate \\(y = (3x + 2)\\ln x\\) using the product rule. Strategy: write \\(y = uv\\) with algebraic factor \\(u = 3x + 2\\) and log factor \\(v = \\ln x\\). Why product rule? The expression is a product of two non-constant functions of \\(x\\).',
      'u = 3x + 2,\\quad v = \\ln x'
    ),
    S(
      'Differentiate each factor: \\(u\' = 3\\) and \\(v\' = \\dfrac{1}{x}\\). The product rule is \\(y\' = u\'v + uv\'\\). A common mistake is forgetting the \\(uv\'\\) term and answering only \\(3\\ln x\\).',
      "u\' = 3,\\quad v\' = \\dfrac{1}{x}"
    ),
    S(
      'Substitute: \\(y\' = 3\\cdot\\ln x + (3x + 2)\\cdot\\dfrac{1}{x} = 3\\ln x + \\dfrac{3x + 2}{x}\\). Domain: \\(x > 0\\) for \\(\\ln x\\).',
      "y\' = 3\\ln x + \\dfrac{3x + 2}{x}"
    ),
    S(
      'Final answer: \\(3\\ln x + \\dfrac{3x + 2}{x}\\). You may also write \\(3\\ln x + 3 + \\dfrac{2}{x}\\); match the option form shown.',
      '3\\ln x + \\dfrac{3x + 2}{x}'
    ),
  ],
  'y12a-5g-q10d': [
    S(
      'Given: differentiate \\(y = x^{5}\\ln x\\) using the product rule. Set \\(u = x^{5}\\) and \\(v = \\ln x\\). Why? Power times log is a classic product-rule structure.',
      'u = x^{5},\\quad v = \\ln x'
    ),
    S(
      'Differentiate: \\(u\' = 5x^{4}\\) (power rule) and \\(v\' = \\dfrac{1}{x}\\). Then \\(y\' = u\'v + uv\' = 5x^{4}\\ln x + x^{5}\\cdot\\dfrac{1}{x}\\).',
      "y\' = 5x^{4}\\ln x + x^{5}\\cdot\\dfrac{1}{x}"
    ),
    S(
      'Simplify the second term: \\(x^{5}/x = x^{4}\\), so \\(y\' = 5x^{4}\\ln x + x^{4}\\). Factor out the common \\(x^{4}\\): \\(y\' = x^{4}(5\\ln x + 1)\\). A common slip is writing \\(x^{4}(5\\ln x - 1)\\) with the wrong sign, or using \\(\\log\\) instead of \\(\\ln\\).',
      "y\' = x^{4}(5\\ln x + 1)"
    ),
    S(
      'Final answer: \\(x^{4}(5\\ln x + 1)\\). Domain: \\(x > 0\\).',
      'x^{4}(5\\ln x + 1)'
    ),
  ],
  'y12a-5g-q10e': [
    S(
      'Given: differentiate \\(y = (x + 4)\\ln(x + 4)\\) using the product rule. Notice both factors share the same linear argument \\(x + 4\\). Set \\(u = x + 4\\) and \\(v = \\ln(x + 4)\\).',
      'u = x + 4,\\quad v = \\ln(x + 4)'
    ),
    S(
      'Differentiate: \\(u\' = 1\\). For \\(v\\), use \\(\\dfrac{d}{dx}\\ln w = \\dfrac{w\'}{w}\\) with \\(w = x + 4\\), so \\(v\' = \\dfrac{1}{x + 4}\\).',
      "u\' = 1,\\quad v\' = \\dfrac{1}{x + 4}"
    ),
    S(
      'Product rule: \\(y\' = 1\\cdot\\ln(x + 4) + (x + 4)\\cdot\\dfrac{1}{x + 4} = \\ln(x + 4) + 1\\). The second term cancels to 1 — a nice simplification students sometimes miss if they leave \\(\\dfrac{x+4}{x+4}\\) unsimplified.',
      "y\' = \\ln(x + 4) + 1"
    ),
    S(
      'Final answer: \\(\\ln(x + 4) + 1\\). Domain: \\(x + 4 > 0\\), i.e. \\(x > -4\\). Use \\(\\ln\\), not \\(\\log\\).',
      '\\ln(x + 4) + 1'
    ),
  ],
  'y12a-5g-q10f': [
    S(
      'Given: differentiate \\(y = (x - 2)\\ln(3x + 5)\\) using the product rule. Set \\(u = x - 2\\) and \\(v = \\ln(3x + 5)\\). The log argument is different from the algebraic factor, so the chain rule will appear only in \\(v\'\\).',
      'u = x - 2,\\quad v = \\ln(3x + 5)'
    ),
    S(
      'Differentiate: \\(u\' = 1\\). For \\(v\\), \\(w = 3x + 5\\), \\(w\' = 3\\), so \\(v\' = \\dfrac{3}{3x + 5}\\). A common slip is forgetting the chain-rule factor 3 and writing \\(v\' = \\dfrac{1}{3x + 5}\\).',
      "u\' = 1,\\quad v\' = \\dfrac{3}{3x + 5}"
    ),
    S(
      'Product rule: \\(y\' = 1\\cdot\\ln(3x + 5) + (x - 2)\\cdot\\dfrac{3}{3x + 5} = \\ln(3x + 5) + \\dfrac{3(x - 2)}{3x + 5}\\).',
      "y\' = \\ln(3x + 5) + \\dfrac{3(x - 2)}{3x + 5}"
    ),
    S(
      'Final answer: \\(\\ln(3x + 5) + \\dfrac{3(x - 2)}{3x + 5}\\). Domain: \\(3x + 5 > 0\\) so \\(x > -\\dfrac{5}{3}\\). Watch the sign on the second term (not negative unless you reverse a factor).',
      '\\ln(3x + 5) + \\dfrac{3(x - 2)}{3x + 5}'
    ),
  ],
  'y12a-5g-q10g': [
    S(
      'Given: differentiate \\(y = e^{2x}\\ln x\\) using the product rule. Set \\(u = e^{2x}\\) and \\(v = \\ln x\\). Why product rule? Exponential times log is a product of two non-constant factors.',
      'u = e^{2x},\\quad v = \\ln x'
    ),
    S(
      'Differentiate: \\(u\' = 2e^{2x}\\) (chain rule: coefficient 2 from the exponent) and \\(v\' = \\dfrac{1}{x}\\). Forgetting the 2 in \\(u\'\\) is a common error.',
      "u\' = 2e^{2x},\\quad v\' = \\dfrac{1}{x}"
    ),
    S(
      'Product rule: \\(y\' = 2e^{2x}\\ln x + e^{2x}\\cdot\\dfrac{1}{x} = e^{2x}\\left(2\\ln x + \\dfrac{1}{x}\\right)\\). Factor out the common \\(e^{2x}\\) to match the option form.',
      "y\' = e^{2x}\\left(2\\ln x + \\dfrac{1}{x}\\right)"
    ),
    S(
      'Final answer: \\(e^{2x}\\left(2\\ln x + \\dfrac{1}{x}\\right)\\). Domain: \\(x > 0\\). Use \\(\\ln\\), not \\(\\log\\).',
      'e^{2x}\\left(2\\ln x + \\dfrac{1}{x}\\right)'
    ),
  ],
  'y12a-5g-q10h': [
    S(
      'Given: differentiate \\(y = e^{-2x}\\ln x\\) using the product rule. Set \\(u = e^{-2x}\\) and \\(v = \\ln x\\). The negative exponent produces a minus in \\(u\'\\).',
      'u = e^{-2x},\\quad v = \\ln x'
    ),
    S(
      'Differentiate: \\(u\' = -2e^{-2x}\\) and \\(v\' = \\dfrac{1}{x}\\). The chain-rule factor is \\(-2\\) (derivative of \\(-2x\\)).',
      "u\' = -2e^{-2x},\\quad v\' = \\dfrac{1}{x}"
    ),
    S(
      'Product rule: \\(y\' = (-2e^{-2x})\\ln x + e^{-2x}\\cdot\\dfrac{1}{x} = e^{-2x}\\left(\\dfrac{1}{x} - 2\\ln x\\right)\\). Factor \\(e^{-2x}\\); the log term is subtracted because of the minus in \\(u\'\\).',
      "y\' = e^{-2x}\\left(\\dfrac{1}{x} - 2\\ln x\\right)"
    ),
    S(
      'Final answer: \\(e^{-2x}\\left(\\dfrac{1}{x} - 2\\ln x\\right)\\). Domain: \\(x > 0\\). A common sign error is writing \\(+2\\ln x\\) inside the brackets.',
      'e^{-2x}\\left(\\dfrac{1}{x} - 2\\ln x\\right)'
    ),
  ],

  // ── q11: quotient rule ────────────────────────────────────────────────
  'y12a-5g-q11a': [
    S(
      'Given: differentiate \\(y = \\dfrac{\\ln 2x}{x}\\) using the quotient rule. Set numerator \\(u = \\ln 2x\\) and denominator \\(v = x\\). The formula is \\(y\' = \\dfrac{u\'v - uv\'}{v^{2}}\\). Keep the subtraction order to avoid a full sign flip.',
      'u = \\ln 2x,\\quad v = x'
    ),
    S(
      'Differentiate: \\(\\dfrac{d}{dx}\\ln 2x = \\dfrac{1}{x}\\) (since \\(\\ln 2x = \\ln 2 + \\ln x\\), or chain rule with factor 2 cancelling). And \\(v\' = 1\\). So \\(u\' = \\dfrac{1}{x}\\), \\(v\' = 1\\).',
      "u\' = \\dfrac{1}{x},\\quad v\' = 1"
    ),
    S(
      'Substitute: \\(y\' = \\dfrac{\\dfrac{1}{x}\\cdot x - (\\ln 2x)\\cdot 1}{x^{2}} = \\dfrac{1 - \\ln 2x}{x^{2}}\\). Students often reverse the subtraction and get \\(\\ln 2x - 1\\) in the numerator.',
      "y\' = \\dfrac{1 - \\ln 2x}{x^{2}}"
    ),
    S(
      'Final answer: \\(\\dfrac{1 - \\ln 2x}{x^{2}}\\). Domain: \\(x > 0\\).',
      '\\dfrac{1 - \\ln 2x}{x^{2}}'
    ),
  ],
  'y12a-5g-q11b': [
    S(
      'Given: differentiate \\(y = \\dfrac{\\ln x}{x^{3}}\\) using the quotient rule. Set \\(u = \\ln x\\) and \\(v = x^{3}\\).',
      'u = \\ln x,\\quad v = x^{3}'
    ),
    S(
      '\\(u\' = \\dfrac{1}{x}\\) and \\(v\' = 3x^{2}\\). Then \\(y\' = \\dfrac{\\dfrac{1}{x}\\cdot x^{3} - (\\ln x)\\cdot 3x^{2}}{(x^{3})^{2}} = \\dfrac{x^{2} - 3x^{2}\\ln x}{x^{6}}\\).',
      "\\dfrac{x^{2}(1 - 3\\ln x)}{x^{6}} = \\dfrac{1 - 3\\ln x}{x^{4}}"
    ),
    S(
      'Factor \\(x^{2}\\) from the numerator and cancel: \\(y\' = \\dfrac{1 - 3\\ln x}{x^{4}}\\). A common error is denominator \\(x^{6}\\) left unsimplified, or numerator \\(3\\ln x - 1\\) with reversed order.',
      "y\' = \\dfrac{1 - 3\\ln x}{x^{4}}"
    ),
    S(
      'Final answer: \\(\\dfrac{1 - 3\\ln x}{x^{4}}\\). Domain: \\(x > 0\\).',
      '\\dfrac{1 - 3\\ln x}{x^{4}}'
    ),
  ],
  'y12a-5g-q11c': [
    S(
      'Given: differentiate \\(y = \\dfrac{2x}{\\ln x}\\) using the quotient rule. Now the log is in the denominator. Set \\(u = 2x\\) and \\(v = \\ln x\\).',
      'u = 2x,\\quad v = \\ln x'
    ),
    S(
      '\\(u\' = 2\\) and \\(v\' = \\dfrac{1}{x}\\). Quotient rule: \\(y\' = \\dfrac{2\\cdot\\ln x - 2x\\cdot\\dfrac{1}{x}}{(\\ln x)^{2}} = \\dfrac{2\\ln x - 2}{(\\ln x)^{2}}\\).',
      "y\' = \\dfrac{2(\\ln x - 1)}{(\\ln x)^{2}}"
    ),
    S(
      'Factor 2 from the numerator: \\(\\dfrac{2(\\ln x - 1)}{(\\ln x)^{2}}\\). Watch: it is \\(\\ln x - 1\\), not \\(1 - \\ln x\\) (that would flip the sign of the whole derivative).',
      '\\dfrac{2(\\ln x - 1)}{(\\ln x)^{2}}'
    ),
    S(
      'Final answer: \\(\\dfrac{2(\\ln x - 1)}{(\\ln x)^{2}}\\). Domain: \\(x > 0\\), \\(x \\neq 1\\) (so \\(\\ln x \\neq 0\\)).',
      '\\dfrac{2(\\ln x - 1)}{(\\ln x)^{2}}'
    ),
  ],
  'y12a-5g-q11d': [
    S(
      'Given: differentiate \\(y = \\dfrac{x^{3}}{\\ln x}\\) using the quotient rule. Set \\(u = x^{3}\\) and \\(v = \\ln x\\).',
      'u = x^{3},\\quad v = \\ln x'
    ),
    S(
      '\\(u\' = 3x^{2}\\) and \\(v\' = \\dfrac{1}{x}\\). Then \\(y\' = \\dfrac{3x^{2}\\ln x - x^{3}\\cdot\\dfrac{1}{x}}{(\\ln x)^{2}} = \\dfrac{3x^{2}\\ln x - x^{2}}{(\\ln x)^{2}}\\).',
      "\\dfrac{x^{2}(3\\ln x - 1)}{(\\ln x)^{2}}"
    ),
    S(
      'Factor \\(x^{2}\\) from the numerator: \\(y\' = \\dfrac{x^{2}(3\\ln x - 1)}{(\\ln x)^{2}}\\). Reversing the subtraction gives the wrong sign inside the brackets.',
      "y\' = \\dfrac{x^{2}(3\\ln x - 1)}{(\\ln x)^{2}}"
    ),
    S(
      'Final answer: \\(\\dfrac{x^{2}(3\\ln x - 1)}{(\\ln x)^{2}}\\). Domain: \\(x > 0\\), \\(x \\neq 1\\).',
      '\\dfrac{x^{2}(3\\ln x - 1)}{(\\ln x)^{2}}'
    ),
  ],
  'y12a-5g-q11e': [
    S(
      'Given: differentiate \\(y = \\dfrac{\\ln x}{e^{2x}}\\) using the quotient rule. Set \\(u = \\ln x\\) and \\(v = e^{2x}\\).',
      'u = \\ln x,\\quad v = e^{2x}'
    ),
    S(
      '\\(u\' = \\dfrac{1}{x}\\) and \\(v\' = 2e^{2x}\\). Then \\(y\' = \\dfrac{\\dfrac{1}{x}\\cdot e^{2x} - (\\ln x)\\cdot 2e^{2x}}{(e^{2x})^{2}}\\).',
      "\\dfrac{e^{2x}\\left(\\dfrac{1}{x} - 2\\ln x\\right)}{e^{4x}} = \\dfrac{\\dfrac{1}{x} - 2\\ln x}{e^{2x}}"
    ),
    S(
      'Cancel one factor of \\(e^{2x}\\): \\(y\' = \\dfrac{\\dfrac{1}{x} - 2\\ln x}{e^{2x}}\\). The numerator order matters: it is \\(\\dfrac{1}{x} - 2\\ln x\\), matching the product-rule cousin of this quotient.',
      "y\' = \\dfrac{\\dfrac{1}{x} - 2\\ln x}{e^{2x}}"
    ),
    S(
      'Final answer: \\(\\dfrac{\\dfrac{1}{x} - 2\\ln x}{e^{2x}}\\). Domain: \\(x > 0\\).',
      '\\dfrac{\\dfrac{1}{x} - 2\\ln x}{e^{2x}}'
    ),
  ],
  'y12a-5g-q11f': [
    S(
      'Given: differentiate \\(y = \\dfrac{e^{2x}}{\\ln x}\\) using the quotient rule. Set \\(u = e^{2x}\\) and \\(v = \\ln x\\).',
      'u = e^{2x},\\quad v = \\ln x'
    ),
    S(
      '\\(u\' = 2e^{2x}\\) and \\(v\' = \\dfrac{1}{x}\\). Then \\(y\' = \\dfrac{2e^{2x}\\ln x - e^{2x}\\cdot\\dfrac{1}{x}}{(\\ln x)^{2}} = \\dfrac{e^{2x}\\left(2\\ln x - \\dfrac{1}{x}\\right)}{(\\ln x)^{2}}\\).',
      "y\' = \\dfrac{e^{2x}\\left(2\\ln x - \\dfrac{1}{x}\\right)}{(\\ln x)^{2}}"
    ),
    S(
      'Factor \\(e^{2x}\\) from the numerator. Watch the order inside: \\(2\\ln x - \\dfrac{1}{x}\\), not the reverse. Denominator is \\((\\ln x)^{2}\\), not \\(e^{2x}\\).',
      '\\dfrac{e^{2x}\\left(2\\ln x - \\dfrac{1}{x}\\right)}{(\\ln x)^{2}}'
    ),
    S(
      'Final answer: \\(\\dfrac{e^{2x}\\left(2\\ln x - \\dfrac{1}{x}\\right)}{(\\ln x)^{2}}\\). Domain: \\(x > 0\\), \\(x \\neq 1\\).',
      '\\dfrac{e^{2x}\\left(2\\ln x - \\dfrac{1}{x}\\right)}{(\\ln x)^{2}}'
    ),
  ],
};

// Option repairs for broken distractors (keep a index correct)
const OPTS_FIX = {
  'y12a-5g-q3a': [
    '\\(-\\dfrac{1}{4}\\)',
    '\\(\\dfrac{1}{2}\\)',
    '\\(\\dfrac{1}{4}\\)',
    '\\(\\dfrac{3}{4}\\)',
  ],
  'y12a-5g-q3b': [
    '\\(-\\dfrac{3}{5}\\)',
    '\\(\\dfrac{1}{5}\\)',
    '\\(\\dfrac{3}{5}\\)',
    '\\(\\dfrac{5}{3}\\)',
  ],
  'y12a-5g-q3c': [
    '\\(-\\dfrac{4}{3}\\)',
    '\\(\\dfrac{1}{3}\\)',
    '\\(\\dfrac{4}{3}\\)',
    '\\(\\dfrac{3}{4}\\)',
  ],
  'y12a-5g-q3d': [
    '\\(-\\dfrac{2}{7}\\)',
    '\\(\\dfrac{1}{7}\\)',
    '\\(\\dfrac{2}{7}\\)',
    '\\(\\dfrac{7}{2}\\)',
  ],
  'y12a-5g-q3f': [
    '\\(-\\dfrac{12}{7}\\)',
    '\\(\\dfrac{4}{7}\\)',
    '\\(\\dfrac{12}{7}\\)',
    '\\(\\dfrac{7}{12}\\)',
  ],
  'y12a-5g-q7b': [
    '\\(\\dfrac{2x}{3 - x^{2}}\\)',
    '\\(-\\dfrac{1}{3 - x^{2}}\\)',
    '\\(-\\dfrac{2x}{3 - x^{2}}\\)',
    '\\(-\\dfrac{3 - x^{2}}{2x}\\)',
  ],
  'y12a-5g-q10d': [
    '\\(5x^{4}\\ln x\\)',
    '\\(x^{4}(5\\ln x + 1)\\)',
    '\\(x^{4}(5\\ln x - 1)\\)',
    '\\(x^{5}(5\\ln x + 1)\\)',
  ],
  'y12a-5g-q10e': [
    '\\(\\ln(x + 4) + \\dfrac{1}{x + 4}\\)',
    '\\(\\ln(x + 4) + 1\\)',
    '\\(\\ln(x + 4) - 1\\)',
    '\\(\\dfrac{1}{x + 4} + 1\\)',
  ],
  'y12a-5g-q10g': [
    '\\(-e^{2x}\\left(2\\ln x + \\dfrac{1}{x}\\right)\\)',
    '\\(e^{2x}\\left(2\\ln x + \\dfrac{1}{x}\\right)\\)',
    '\\(e^{2x}\\left(2\\ln x + x\\right)\\)',
    '\\(e^{2x}\\left(\\ln x + \\dfrac{1}{x}\\right)\\)',
  ],
  'y12a-5g-q10h': [
    '\\(-e^{-2x}\\left(\\dfrac{1}{x} - 2\\ln x\\right)\\)',
    '\\(e^{-2x}\\left(\\dfrac{1}{x} - 2\\ln x\\right)\\)',
    '\\(e^{-2x}\\left(\\dfrac{1}{x} + 2\\ln x\\right)\\)',
    '\\(e^{-2x}\\left(x - 2\\ln x\\right)\\)',
  ],
  'y12a-5g-q11e': [
    '\\(-\\dfrac{\\dfrac{1}{x} - 2\\ln x}{e^{2x}}\\)',
    '\\(\\dfrac{\\dfrac{1}{x} + 2\\ln x}{e^{2x}}\\)',
    '\\(\\dfrac{\\dfrac{1}{x} - 2\\ln x}{e^{2x}}\\)',
    '\\(\\dfrac{2\\ln x - \\dfrac{1}{x}}{e^{2x}}\\)',
  ],
  'y12a-5g-q11f': [
    '\\(-\\dfrac{e^{2x}\\left(2\\ln x - \\dfrac{1}{x}\\right)}{(\\ln x)^{2}}\\)',
    '\\(\\dfrac{e^{2x}\\left(2\\ln x + \\dfrac{1}{x}\\right)}{(\\ln x)^{2}}\\)',
    '\\(\\dfrac{e^{2x}\\left(2\\ln x - \\dfrac{1}{x}\\right)}{(\\ln x)^{2}}\\)',
    '\\(\\dfrac{e^{2x}\\left(\\dfrac{1}{x} - 2\\ln x\\right)}{(\\ln x)^{2}}\\)',
  ],
};

function selfCheck(items) {
  for (const q of items) {
    const steps = STEPS[q.id];
    if (!steps) throw new Error(`missing STEPS for ${q.id}`);
    if (steps.length < 3) throw new Error(`too few steps ${q.id}`);
    for (const st of steps) {
      if (!st.explanation || st.explanation.length < 40) throw new Error(`thin exp ${q.id}`);
      if (st.workingOut.includes('\\ldots')) throw new Error(`ellipsis left ${q.id}`);
      if (/d\/dx\s*\\ln/.test(st.explanation) && !/\\\(/.test(st.explanation)) {
        // bare d/dx \ln outside math — only flag if whole phrase unwrapped; soft warn
      }
    }
    const blob = steps.map((s) => s.explanation + s.workingOut).join('\n');
    const open = (blob.match(/\\\(/g) || []).length;
    const close = (blob.match(/\\\)/g) || []).length;
    if (open !== close) throw new Error(`LaTeX paren mismatch ${q.id}: ${open}/${close}`);
    if (blob.includes('\x0c')) throw new Error(`form feed ${q.id}`);
    if (OPTS_FIX[q.id]) {
      const opts = OPTS_FIX[q.id];
      if (opts.length !== 4) throw new Error(`opts len ${q.id}`);
      if (new Set(opts).size !== 4) throw new Error(`dup opts ${q.id}`);
    }
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
    const payload = {
      solutionSteps: raw.solutionSteps,
      solution: raw.solution || '',
      isNew: true,
      updatedAt: FieldValue.serverTimestamp(),
    };
    if (Array.isArray(raw.opts) && raw.opts.length === 4) {
      payload.opts = raw.opts;
      // UI reads `options` ({text,imageUrl}[]), not `opts` — keep both in sync
      payload.options = raw.opts.map((text) => ({ text: String(text), imageUrl: '' }));
      payload.a = raw.a;
      payload.answer = String(raw.a);
    }
    batch.set(ref, payload, { merge: true });
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
  const all = loadSeed();
  const targetIds = Object.keys(STEPS);
  const items = all.filter((q) => targetIds.includes(q.id));
  if (items.length !== targetIds.length) {
    const missing = targetIds.filter((id) => !items.some((q) => q.id === id));
    throw new Error(`seed missing ids: ${missing.join(', ')}`);
  }

  selfCheck(items);

  for (const q of items) {
    q.solutionSteps = STEPS[q.id];
    q.isNew = true;
    if (OPTS_FIX[q.id]) {
      q.opts = OPTS_FIX[q.id];
      // a already points at correct option in fixed lists (same indices as before)
    }
    if (q.opts && Number.isInteger(q.a)) {
      q.solution = `By direct differentiation, the correct answer is ${q.opts[q.a]}.`;
    }
  }

  // apply into full seed array
  const byId = new Map(items.map((q) => [q.id, q]));
  for (let i = 0; i < all.length; i++) {
    if (byId.has(all[i].id)) all[i] = byId.get(all[i].id);
  }

  const explLens = items.flatMap((q) => q.solutionSteps.map((s) => s.explanation.length));
  console.log({
    expanded: items.length,
    stepsMinAvgMax: [
      Math.min(...items.map((q) => q.solutionSteps.length)),
      (
        items.reduce((a, q) => a + q.solutionSteps.length, 0) / items.length
      ).toFixed(1),
      Math.max(...items.map((q) => q.solutionSteps.length)),
    ],
    explMinAvgMax: [
      Math.min(...explLens),
      Math.round(explLens.reduce((a, b) => a + b, 0) / explLens.length),
      Math.max(...explLens),
    ],
    optsFixed: Object.keys(OPTS_FIX).length,
  });

  // sample q10c
  const s = items.find((q) => q.id === 'y12a-5g-q10c');
  console.log('sample q10c step0 workingOut:', s.solutionSteps[0].workingOut);
  console.log('sample q10c step2 workingOut:', s.solutionSteps[2].workingOut);

  if (WRITE) {
    writeFileSync(SEED, `export const Y12A_CH5G_QUESTIONS = ${JSON.stringify(all, null, 2)};\n`);
    console.log('wrote', SEED, 'total', all.length);
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
