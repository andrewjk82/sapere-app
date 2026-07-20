/**
 * Replace placeholder "u=…" substitution steps on Y12A Ch5F q10–q14
 * with full worked solutions.
 *
 *   node tools/scripts/fixY12ACh5FSubstitutionSteps.cjs --write
 *   node tools/scripts/fixY12ACh5FSubstitutionSteps.cjs --write --push
 */
const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

const WRITE = process.argv.includes('--write');
const PUSH = process.argv.includes('--push');
const ROOT = path.resolve(__dirname, '../..');
const SEED = path.join(ROOT, 'src/constants/seedYear12Ch5FQuestions.js');

function S(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}

const STEPS = {
  // ── q10b: 3^{2x} - 12·3^x + 27 = 0 ─────────────────────────────────────
  'y12a-5f-q10b': [
    S(
      'Given: the exponential equation \(3^{2x} - 12 \times 3^{x} + 27 = 0\). Strategy: notice that \(3^{2x} = (3^{x})^{2}\), so a single base-\(3\) exponential appears in every term. Introduce the substitution \(u = 3^{x}\). Why substitute? It turns the equation into an ordinary quadratic that you already know how to solve. A common mistake is writing \(u = 3^{2x}\) instead of \(u = 3^{x}\), which breaks the quadratic structure.',
      '\\(u = 3^{x}\\;\\Rightarrow\\; 3^{2x} = u^{2}\\)'
    ),
    S(
      'Rewrite every term with \(u\). The middle term is already a multiple of \(3^{x} = u\). What equation do you get? The quadratic \(u^{2} - 12u + 27 = 0\). Factor (or use the quadratic formula). Why factor carefully? Sign errors in the constant term produce wrong roots and then wrong \(x\)-values.',
      'u^{2} - 12u + 27 = 0 \\;\\Rightarrow\\; (u-3)(u-9)=0'
    ),
    S(
      'Solve for \(u\): \(u = 3\) or \(u = 9\). Because \(u = 3^{x}\) and \(3^{x} > 0\) for every real \(x\), both roots are valid for the substitution (no negative or zero \(u\) to discard). Convert each root back: \(3^{x} = 3 = 3^{1}\) gives \(x = 1\), and \(3^{x} = 9 = 3^{2}\) gives \(x = 2\). A common slip is stopping after finding \(u\) and never recovering \(x\).',
      '3^{x}=3 \\;\\Rightarrow\\; x=1,\\quad 3^{x}=9 \\;\\Rightarrow\\; x=2'
    ),
    S(
      'Final answer: \(x = 1\) and \(x = 2\). Check by substitution if you wish: at \(x=1\), \(9 - 12\cdot 3 + 27 = 0\); at \(x=2\), \(81 - 12\cdot 9 + 27 = 0\). Both real solutions are listed, matching the correct option.',
      'x = 1,\\; x = 2'
    ),
  ],

  // ── q10ci: 25^x - 30·5^x + 125 = 0 ─────────────────────────────────────
  'y12a-5f-q10ci': [
    S(
      'Given: \(25^{x} - 30 \\times 5^{x} + 125 = 0\). Strategy: rewrite \(25^{x}\) with base \(5\). Since \(25 = 5^{2}\), we have \(25^{x} = (5^{2})^{x} = 5^{2x} = (5^{x})^{2}\). Set \(u = 5^{x}\). Why this substitution? Every term becomes a power of the same quantity \(u\), so the equation becomes a quadratic in \(u\).',
      '25^{x}=(5^{x})^{2},\\quad u=5^{x}'
    ),
    S(
      'Substitute: \(u^{2} - 30u + 125 = 0\). Factor as \((u-5)(u-25)=0\). What are the roots? \(u=5\) and \(u=25\). Both are positive, so both are allowed for \(u=5^{x}\). A common error is treating \(25^{x}\) as \(25u\) instead of \(u^{2}\).',
      'u^{2}-30u+125=0 \\;\\Rightarrow\\; (u-5)(u-25)=0'
    ),
    S(
      'Convert back to \(x\). From \(5^{x}=5=5^{1}\) we get \(x=1\). From \(5^{x}=25=5^{2}\) we get \(x=2\). Why match powers of the same base? Equal bases with exponential functions that are one-to-one give equal exponents.',
      '5^{x}=5 \\;\\Rightarrow\\; x=1,\\quad 5^{x}=25 \\;\\Rightarrow\\; x=2'
    ),
    S(
      'Final answer: \(x=1\) and \(x=2\). Both satisfy the original equation, so list both real solutions.',
      'x = 1,\\; x = 2'
    ),
  ],

  // ── q10cii: 9^x - 12·3^x + 27 = 0 ──────────────────────────────────────
  'y12a-5f-q10cii': [
    S(
      'Given: \(9^{x} - 12 \\times 3^{x} + 27 = 0\). Strategy: write \(9^{x} = (3^{2})^{x} = 3^{2x} = (3^{x})^{2}\) and set \(u = 3^{x}\). This is the same pattern as the previous base-\(3\) quadratic exponential. A common mistake is using \(u=9^{x}\) instead of \(u=3^{x}\).',
      'u=3^{x},\\quad 9^{x}=u^{2}'
    ),
    S(
      'The equation becomes \(u^{2} - 12u + 27 = 0\). Factor: \((u-3)(u-9)=0\), so \(u=3\) or \(u=9\). Both roots are positive and valid for \(u=3^{x}\).',
      '(u-3)(u-9)=0 \\;\\Rightarrow\\; u=3\\text{ or }u=9'
    ),
    S(
      'Back-substitute: \(3^{x}=3\) gives \(x=1\); \(3^{x}=9=3^{2}\) gives \(x=2\). Why discard nothing? Exponential \(3^{x}\) never produces a negative value, and both \(3\) and \(9\) are attainable.',
      'x=1\\text{ or }x=2'
    ),
    S(
      'Final answer: \(x=1\) and \(x=2\). Match the option that lists both solutions.',
      'x = 1,\\; x = 2'
    ),
  ],

  // ── q10civ: 7^{2x} - 6·7^x - 7 = 0 ─────────────────────────────────────
  'y12a-5f-q10civ': [
    S(
      'Given: \(7^{2x} - 6 \\times 7^{x} - 7 = 0\). Strategy: set \(u = 7^{x}\) so that \(7^{2x} = u^{2}\). Why? The equation is quadratic in the single exponential \(7^{x}\). Students sometimes forget the constant \(-7\) when forming the quadratic.',
      'u=7^{x}\\;\\Rightarrow\\; u^{2}-6u-7=0'
    ),
    S(
      'Factor: \(u^{2}-6u-7=(u-7)(u+1)=0\). Roots: \(u=7\) or \(u=-1\). What must you discard? Since \(u=7^{x}>0\) for all real \(x\), reject \(u=-1\). Keeping the negative root is a very common mistake and invents an impossible solution.',
      'u=7\\text{ (keep)},\\quad u=-1\\text{ (discard)}'
    ),
    S(
      'Convert the valid root: \(7^{x}=7=7^{1}\) implies \(x=1\). Why only one \(x\)? Only one admissible \(u\) remains after the domain check on the substitution.',
      '7^{x}=7 \\;\\Rightarrow\\; x=1'
    ),
    S(
      'Final answer: \(x=1\). Check: \(7^{2}-6\\cdot 7-7=49-42-7=0\). The solution set is the single real number \(1\).',
      'x = 1'
    ),
  ],

  // ── q10cv: 2^{5x} = 4^{x+3} ────────────────────────────────────────────
  'y12a-5f-q10cv': [
    S(
      'Given: \(2^{5x} = 4^{x+3}\). Strategy: express both sides with the same base. Since \(4=2^{2}\), rewrite the right-hand side as a pure power of \(2\). Why same base? Then the one-to-one property of exponential functions lets you equate exponents. A common error is writing \(4^{x+3}=4\\cdot 2^{x+3}\) instead of using \(4=2^{2}\).',
      '4^{x+3}=(2^{2})^{x+3}=2^{2x+6}'
    ),
    S(
      'The equation is now \(2^{5x}=2^{2x+6}\). Because the exponential base \(2\) is one-to-one, the exponents are equal: \(5x=2x+6\). What algebraic step next? Collect like terms to solve for \(x\).',
      '5x=2x+6'
    ),
    S(
      'Subtract \(2x\): \(3x=6\), so \(x=2\). Why no second root? This is a linear equation in the exponents, not a quadratic substitution problem — only one solution appears.',
      '3x=6 \\;\\Rightarrow\\; x=2'
    ),
    S(
      'Final answer: \(x=2\). Check: left \(2^{10}=1024\); right \(4^{5}=(2^{2})^{5}=2^{10}=1024\). The unique real solution is \(x=2\).',
      'x = 2'
    ),
  ],

  // ── q10cvi: 4^x - 5·2^{x+1} + 16 = 0 ───────────────────────────────────
  'y12a-5f-q10cvi': [
    S(
      'Given: \(4^{x} - 5 \\times 2^{x+1} + 16 = 0\). Strategy: write everything in base \(2\). Note \(4^{x}=(2^{2})^{x}=2^{2x}=(2^{x})^{2}\) and \(2^{x+1}=2\\cdot 2^{x}\). Set \(u=2^{x}\). Why? The equation becomes a quadratic in \(u\). A common slip is forgetting the factor \(2\) in \(2^{x+1}\) and writing \(-5u\) instead of \(-10u\).',
      'u=2^{x},\\quad 4^{x}=u^{2},\\quad 2^{x+1}=2u'
    ),
    S(
      'Substitute carefully: \(u^{2} - 5(2u) + 16 = 0\), that is \(u^{2} - 10u + 16 = 0\). Factor: \((u-2)(u-8)=0\), so \(u=2\) or \(u=8\). Both are positive, so both are valid for \(u=2^{x}\).',
      'u^{2}-10u+16=0 \\;\\Rightarrow\\; u=2\\text{ or }u=8'
    ),
    S(
      'Back-substitute: \(2^{x}=2\) gives \(x=1\); \(2^{x}=8=2^{3}\) gives \(x=3\). Why list both? Each positive \(u\)-root produces one real \(x\).',
      'x=1\\text{ or }x=3'
    ),
    S(
      'Final answer: \(x=1\) and \(x=3\). Quick check at \(x=1\): \(4-5\\cdot 4+16=4-20+16=0\). At \(x=3\): \(64-5\\cdot 16+16=64-80+16=0\).',
      'x = 1,\\; x = 3'
    ),
  ],

  // ── q11b: e^{2x}+2e^x-8=0 ──────────────────────────────────────────────
  'y12a-5f-q11b': [
    S(
      'Given: \(e^{2x}+2e^{x}-8=0\). Strategy: set \(u=e^{x}\) so \(e^{2x}=u^{2}\). Why this substitution? The left side is a quadratic polynomial in \(e^{x}\). The problem asks for answers as natural logarithms where needed.',
      'u=e^{x}\\;\\Rightarrow\\; u^{2}+2u-8=0'
    ),
    S(
      'Factor: \(u^{2}+2u-8=(u+4)(u-2)=0\). Roots: \(u=2\) or \(u=-4\). Discard \(u=-4\) because \(u=e^{x}>0\) for every real \(x\). Keeping the negative root invents a non-real \(x\) in the real-number setting of this course.',
      'u=2\\text{ (keep)},\\quad u=-4\\text{ (discard)}'
    ),
    S(
      'Solve \(e^{x}=2\). Taking the natural log of both sides (which is defined for positive arguments) gives \(x=\\ln 2\). Why \(\\ln\)? It is the inverse of \(e^{x}\), and the question asks for logarithms base \(e\).',
      'e^{x}=2 \\;\\Rightarrow\\; x=\\ln 2'
    ),
    S(
      'Final answer: \(x=\\ln 2\). There is only one real solution because only one valid \(u\) survived. Numerically \(\\ln 2\\approx 0.693\), but leave the exact log form unless a decimal is requested.',
      'x = \\ln 2'
    ),
  ],

  // ── q11c: e^{4x}-5e^{2x}+4=0 ───────────────────────────────────────────
  'y12a-5f-q11c': [
    S(
      'Given: \(e^{4x}-5e^{2x}+4=0\). Strategy: notice \(e^{4x}=(e^{2x})^{2}\). Set \(u=e^{2x}\) (not \(e^{x}\)). Why \(e^{2x}\)? It is the middle power that appears squared on the leading term, so the quadratic is cleanest in that variable.',
      'u=e^{2x}\\;\\Rightarrow\\; u^{2}-5u+4=0'
    ),
    S(
      'Factor: \((u-1)(u-4)=0\), so \(u=1\) or \(u=4\). Both are positive and valid for \(u=e^{2x}\). A common mistake is setting \(u=e^{x}\) and getting a degree-\(4\) mess that is harder to factor.',
      'u=1\\text{ or }u=4'
    ),
    S(
      'Convert: \(e^{2x}=1\) implies \(2x=\\ln 1=0\), so \(x=0\). Next, \(e^{2x}=4\) implies \(2x=\\ln 4=2\\ln 2\), so \(x=\\ln 2\). Why \(\\ln 4=2\\ln 2\)? Log power law \(\\ln(a^{b})=b\\ln a\).',
      'x=0\\text{ or }x=\\ln 2'
    ),
    S(
      'Final answer: \(x=0\) and \(x=\\ln 2\). Both are real. Check \(x=0\): \(1-5+4=0\). Check \(x=\\ln 2\): \(e^{4\\ln 2}-5e^{2\\ln 2}+4=16-5\\cdot 4+4=0\).',
      'x = 0,\\; x = \\ln 2'
    ),
  ],

  // ── q11d: e^{4x}-9e^{2x}=0 ──────────────────────────────────────────────
  'y12a-5f-q11d': [
    S(
      'Given: \(e^{4x}-9e^{2x}=0\). Strategy: factor out the common exponential \(e^{2x}\) rather than treating it as a full quadratic with a missing constant term. Why factor first? It immediately shows one factor is never zero and reduces work.',
      'e^{2x}(e^{2x}-9)=0'
    ),
    S(
      'Since \(e^{2x}>0\) for all real \(x\), the factor \(e^{2x}=0\) is impossible. Therefore \(e^{2x}-9=0\), so \(e^{2x}=9\). A common error is writing \(e^{2x}=0\) as a solution.',
      'e^{2x}=9'
    ),
    S(
      'Take natural logs: \(2x=\\ln 9=2\\ln 3\), hence \(x=\\ln 3\). Why \(\\ln 9=2\\ln 3\)? Because \(9=3^{2}\) and \(\\ln(3^{2})=2\\ln 3\).',
      '2x=\\ln 9=2\\ln 3 \\;\\Rightarrow\\; x=\\ln 3'
    ),
    S(
      'Final answer: \(x=\\ln 3\). This is the unique real solution. Check: \(e^{4\\ln 3}-9e^{2\\ln 3}=81-9\\cdot 9=0\).',
      'x = \\ln 3'
    ),
  ],

  // ── q12b: (ln x)^2 = 4 ln x ─────────────────────────────────────────────
  'y12a-5f-q12b': [
    S(
      'Given: \((\\ln x)^{2}=4\\ln x\). Strategy: move every term to one side and factor. Set \(u=\\ln x\) so the equation is a simple quadratic in \(u\). Why not divide by \(\\ln x\) immediately? Division would drop the root \(u=0\) (that is \(x=1\)), a classic lost-solution error.',
      'u=\\ln x\\;\\Rightarrow\\; u^{2}=4u'
    ),
    S(
      'Rearrange: \(u^{2}-4u=0\). Factor: \(u(u-4)=0\). Roots: \(u=0\) or \(u=4\). Both are allowed for \(u=\\ln x\) because the range of \(\\ln\) is all real numbers (domain \(x>0\)).',
      'u(u-4)=0 \\;\\Rightarrow\\; u=0\\text{ or }u=4'
    ),
    S(
      'Convert: \(\\ln x=0\) gives \(x=e^{0}=1\). Next, \(\\ln x=4\) gives \(x=e^{4}\). Why both positive? Exponential \(e^{(\\cdot)}\) always produces \(x>0\), so both are in the domain of \(\\ln\).',
      'x=1\\text{ or }x=e^{4}'
    ),
    S(
      'Final answer: \(x=1\) and \(x=e^{4}\). Check: at \(x=1\), \(0=0\). At \(x=e^{4}\), \((4)^{2}=4\\cdot 4\). List both real solutions.',
      'x = 1,\\; x = e^{4}'
    ),
  ],

  // ── q14a: 2^{4x}-5·2^{2x}+4=0 ───────────────────────────────────────────
  'y12a-5f-q14a': [
    S(
      'Given: \(2^{4x}-5\\times 2^{2x}+4=0\). Strategy: observe that \(2^{4x}=(2^{2x})^{2}\). Set \(u=2^{2x}\) (equivalently \(u=(2^{x})^{2}\), but \(u=2^{2x}\) is cleanest). Why substitute? The equation becomes the ordinary quadratic \(u^{2}-5u+4=0\). A common mistake is using \(u=2^{x}\) and getting a quartic.',
      'u=2^{2x}\\;\\Rightarrow\\; u^{2}-5u+4=0'
    ),
    S(
      'Factor: \((u-1)(u-4)=0\), so \(u=1\) or \(u=4\). Both are positive and valid for \(u=2^{2x}\).',
      'u=1\\text{ or }u=4'
    ),
    S(
      'Convert carefully. From \(2^{2x}=1=2^{0}\) we get \(2x=0\), so \(x=0\). From \(2^{2x}=4=2^{2}\) we get \(2x=2\), so \(x=1\). Why equate exponents? Base \(2\) exponential is one-to-one.',
      'x=0\\text{ or }x=1'
    ),
    S(
      'Final answer: \(x=0\) and \(x=1\). Check \(x=0\): \(1-5+4=0\). Check \(x=1\): \(16-5\\cdot 4+4=0\). Both rational solutions are exact — no decimal approximation needed.',
      'x = 0,\\; x = 1'
    ),
  ],

  // ── q14b: 100^x - 11·10^x + 10 = 0  (user screenshot) ─────────────────
  'y12a-5f-q14b': [
    S(
      'Given: the exponential equation \(100^{x}-11\\times 10^{x}+10=0\). Strategy: rewrite \(100^{x}\) with base \(10\). Since \(100=10^{2}\), we have \(100^{x}=(10^{2})^{x}=10^{2x}=(10^{x})^{2}\). Introduce the substitution \(u=10^{x}\). Why this substitution? Every term becomes a power of the same positive quantity \(u\), turning the problem into a quadratic equation you can solve by factoring. A common mistake is setting \(u=100^{x}\) instead of \(u=10^{x}\), which does not produce a simple quadratic.',
      '100^{x}=(10^{x})^{2},\\quad u=10^{x}'
    ),
    S(
      'Substitute into the original equation. The leading term is \(u^{2}\), the middle term is \(11u\), and the constant is \(10\). What equation appears? \(u^{2}-11u+10=0\). Why rearrange to standard form? Factoring and the quadratic formula both require \(au^{2}+bu+c=0\). Factor carefully: look for two numbers that multiply to \(10\) and add to \(-11\).',
      'u^{2}-11u+10=0 \\;\\Rightarrow\\; (u-1)(u-10)=0'
    ),
    S(
      'Solve for \(u\): \(u=1\) or \(u=10\). Because \(u=10^{x}\) and \(10^{x}>0\) for every real \(x\), both roots are valid (there is no negative or zero root to discard). Now convert each \(u\)-value back to \(x\). From \(10^{x}=1=10^{0}\) we obtain \(x=0\). From \(10^{x}=10=10^{1}\) we obtain \(x=1\). Why can we equate the exponents? The exponential function base \(10\) is one-to-one on the reals.',
      '10^{x}=1 \\;\\Rightarrow\\; x=0,\\quad 10^{x}=10 \\;\\Rightarrow\\; x=1'
    ),
    S(
      'Final answer: \(x=0\) and \(x=1\). Both solutions are exact rational numbers, so no three-decimal approximation is required. Quick verification: when \(x=0\), \(1-11+10=0\); when \(x=1\), \(100-11\\times 10+10=100-110+10=0\). List both real solutions so the option matches \(x=0,\\,x=1\).',
      'x = 0,\\; x = 1'
    ),
  ],

  // ── q14c: (1/2)^{2x} - 5·(1/2)^x + 4 = 0 ───────────────────────────────
  'y12a-5f-q14c': [
    S(
      'Given: \(\\left(\\dfrac{1}{2}\\right)^{2x}-5\\times\\left(\\dfrac{1}{2}\\right)^{x}+4=0\). Strategy: set \(u=\\left(\\dfrac{1}{2}\\right)^{x}\). Note that \(\\left(\\dfrac{1}{2}\\right)^{2x}=u^{2}\). Why this substitution? The equation is quadratic in the decaying exponential \(\\left(\\tfrac{1}{2}\\right)^{x}\).',
      'u=\\left(\\dfrac{1}{2}\\right)^{x}\\;\\Rightarrow\\; u^{2}-5u+4=0'
    ),
    S(
      'Factor: \((u-1)(u-4)=0\), so \(u=1\) or \(u=4\). Both roots are positive, so both are possible values of \(\\left(\\tfrac{1}{2}\\right)^{x}\).',
      'u=1\\text{ or }u=4'
    ),
    S(
      'Convert: \(\\left(\\tfrac{1}{2}\\right)^{x}=1=\\left(\\tfrac{1}{2}\\right)^{0}\) gives \(x=0\). Next, \(\\left(\\tfrac{1}{2}\\right)^{x}=4=2^{2}=\\left(\\tfrac{1}{2}\\right)^{-2}\) because \(\\left(\\tfrac{1}{2}\\right)^{-2}=2^{2}=4\). Therefore \(x=-2\). Why \(x=-2\)? Negative exponents invert the base and match the value \(4\).',
      'x=0\\text{ or }x=-2'
    ),
    S(
      'Final answer: \(x=0\) and \(x=-2\). Check \(x=0\): \(1-5+4=0\). Check \(x=-2\): \(4-5\\cdot 4+4=4-20+4=0\). Both real solutions are listed.',
      'x = 0,\\; x = -2'
    ),
  ],
};

function loadSeed() {
  const src = readFileSync(SEED, 'utf8');
  const tmp = '/tmp/ch5f-fix-steps.cjs';
  writeFileSync(tmp, src.replace(/^export const Y12A_CH5F_QUESTIONS = /, 'module.exports = '));
  delete require.cache[require.resolve(tmp)];
  return require(tmp);
}

function main() {
  const qs = loadSeed();
  let n = 0;
  for (const q of qs) {
    if (!STEPS[q.id]) continue;
    q.solutionSteps = STEPS[q.id];
    q.isNew = true;
    // keep solution one-liner in sync
    if (q.opts && Number.isInteger(q.a)) {
      q.solution = `The solutions are ${q.opts[q.a]}.`;
    }
    n++;
    // light self-check
    for (const st of q.solutionSteps) {
      if ((st.explanation || '').length < 120) throw new Error(`thin ${q.id}`);
      if (!st.workingOut || /\\ldots|\.\.\./.test(st.workingOut)) throw new Error(`placeholder WO ${q.id}`);
    }
  }
  console.log('fixed', n, 'questions');
  if (!WRITE) {
    console.log('dry-run (pass --write)');
    // show sample
    const s = qs.find((q) => q.id === 'y12a-5f-q14b');
    s.solutionSteps.forEach((st, i) => {
      console.log(`\nS${i + 1}:`, st.explanation.slice(0, 180) + '...');
      console.log('  WO:', st.workingOut);
    });
    return;
  }
  writeFileSync(SEED, `export const Y12A_CH5F_QUESTIONS = ${JSON.stringify(qs, null, 2)};\n`);
  console.log('wrote', SEED);
}

async function push() {
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
  const qs = loadSeed();
  let batch = db.batch();
  let n = 0;
  let ok = 0;
  for (const id of Object.keys(STEPS)) {
    const q = qs.find((x) => x.id === id);
    if (!q) continue;
    const ref = db.collection('questions').doc(id);
    const snap = await ref.get();
    if (snap.exists && snap.data()?.origin === 'teacher') continue;
    batch.set(
      ref,
      {
        solutionSteps: q.solutionSteps,
        solution: q.solution || '',
        isNew: true,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    n++;
    ok++;
    if (n >= 200) {
      await batch.commit();
      batch = db.batch();
      n = 0;
    }
  }
  if (n) await batch.commit();
  const ver = Date.now();
  await db.collection('sync_meta').doc('questions').set(
    { version: ver, membershipVersion: ver, updatedAt: FieldValue.serverTimestamp() },
    { merge: true }
  );
  console.log('pushed', ok, 'ver', ver);
  console.log('NEXT: node tools/scripts/rebuildQuestionIndexes.js y12a-5');
}

Promise.resolve()
  .then(() => {
    main();
    if (PUSH) {
      if (!WRITE) throw new Error('need --write with --push');
      // reload after write
      return push();
    }
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
