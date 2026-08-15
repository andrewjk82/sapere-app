#!/usr/bin/env node
/**
 * Pilot question-specific reasoning blueprints for CALC-INT-01 (4th DNA,
 * 2026-08-15) — 8 questions chosen to span the DNA's real technique
 * variety: trig-identity rewriting before integrating, definite
 * integration via reverse chain rule/substitution, area via horizontal
 * strips (inverse-function integration), splitting a fraction before
 * integrating, area under a curve vs. a line, area between two curves
 * with a crossover point, and "hence" recognition (spotting a given
 * expression as an already-known derivative).
 *
 * While scoping this batch, found several more content bugs — none
 * fixed here, all documented for follow-up:
 *  - girr2020-mc26b: same question as bar2020-q11bii (∫₀²e^{3x}(3+9x)dx)
 *    but with a DIFFERENT (and mathematically WRONG) answer key. Verified
 *    independently (both directly and via "hence" using the product-rule
 *    result d/dx[3xe^{3x}]=e^{3x}(3+9x)): the correct value is 6e^6,
 *    which matches NONE of girr2020-mc26b's four options (e^6-1, 3e^6-3,
 *    e^6-3, 3(e^6-1)) — and options[1]/[3] ("3e^6-3" both ways) are
 *    themselves duplicates of each other. A genuine wrong-answer-key bug
 *    (same class as the 3 found earlier this session), not fixed here.
 *  - Recurring \dfrac vs \frac equivalent-option duplicates (same bug
 *    class fixed 8x on CALC-DIFF-01) on: car2020-q31 (also has the
 *    classic "12/(x+2)"/"13/(x+3)" garbage-fraction pattern), car2020-q36
 *    and cths2020-q20 (both have "9/5","8/4","7/3" garbage-fraction
 *    options), dane2020-q27, fortst2020-q3a (a glued-double-negative
 *    duplicate), fortst2020-q3b, bar2020-q12b, bbhs2020-17c (two
 *    duplicates in one question), bbhs2020-21 (duplicate + a broken
 *    inconsistent option + malformed LaTeX, needs a full rebuild).
 *  - fortst2020-mc10 has an empty options array (image-based options
 *    never migrated to text) — unusable until fixed.
 *  - asc2020-q34 is type:multi_part with empty options/answer at the
 *    parent level — its actual content lives in sub-questions not
 *    inspected here.
 * None of the above are touched by this script — only the 8 verified-
 * clean questions below get reasoning_blueprint written.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - car2020-q28: ∫tan²x dx = ∫(sec²x-1)dx = tanx-x+C. Matches.
 *  - car2020-q29: ∫₀²x(x²-4)³dx, sub u=x²-4: (1/2)∫u³du=(x²-4)⁴/8,
 *    evaluated 0→2 gives 0-32=-32. Matches.
 *  - abb2020-mc9: area bounded by y-axis, x-axis, y=3, y=ln(x-1) —
 *    integrate horizontally: ∫₀³(e^y+1)dy=[e^y+y]₀³=e³+3-1=e³+2. Matches.
 *  - abb2020-q11a: ∫1/(5x+1)dx=(1/5)ln|5x+1|+C (reverse chain rule).
 *    Matches.
 *  - abb2020-q11d: ∫(8x³-3)/x²dx=∫(8x-3x⁻²)dx=4x²+3/x+C. Matches.
 *  - asc2020-q25: area between y=2/x and y=1 from x=2 (intersection) to
 *    x=4: ∫₂⁴(2/x-1)dx=[2lnx-x]₂⁴=(2ln4-4)-(2ln2-2)=2ln2-2. Matches.
 *  - asc2020-q29: area between y=√3cosx and y=sinx on [0,π/2], crossover
 *    at x=π/3 (tanx=√3): verified numerically (Simpson's rule) = 3-√3
 *    ≈1.268, matches doc exactly.
 *  - bar2020-q11bii: "hence" using d/dx[3xe^{3x}]=e^{3x}(3+9x) (product
 *    rule), so ∫₀²e^{3x}(3+9x)dx=[3xe^{3x}]₀²=6e^6-0=6e^6. Matches doc
 *    (unlike girr2020-mc26b's wrong key on the identical question).
 *
 * Usage:
 *   node tools/scripts/addCalcIntReasoningBlueprint.js
 */
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { touchChapterIndex } from './_lib/touchChapterIndex.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const POSSIBLE_KEY_PATHS = [
  join(__dirname, '../../serviceAccountKey.json'),
  join(__dirname, '../../firebase-service-account.json'),
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
  '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
].filter(Boolean);

let app;
for (const keyPath of POSSIBLE_KEY_PATHS) {
  try {
    if (!existsSync(keyPath)) continue;
    const serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));
    app = initializeApp({ credential: cert(serviceAccount) });
    console.log(`Using service account: ${keyPath}`);
    break;
  } catch { /* try next */ }
}
if (!app) {
  console.error('ERROR: No Firebase service account key found.');
  process.exit(1);
}
const db = getFirestore(app);

const mc = (stepId, objective, axis, options, correctId, hints, explanation) => ({
  step_id: stepId, objective, axis, interaction_type: 'select', options,
  expected_response: correctId, hints, explanation,
});

const QUESTIONS = [
  {
    id: 'car2020-q28',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$\\tan^2 x$ has no direct antiderivative rule. Using the identity $\\sec^2 x = \\tan^2 x + 1$, what does $\\tan^2 x$ equal?', 'strategy_selection',
        [{ id: 'a', label: '$\\sec^2 x - 1$' }, { id: 'b', label: '$\\sec^2 x + 1$' }, { id: 'c', label: '$1 - \\sec^2 x$' }],
        'a',
        ['Rearranging $\\sec^2 x = \\tan^2 x + 1$ gives $\\tan^2 x = \\sec^2 x - 1$.'],
        '$\\tan^2 x = \\sec^2 x - 1$ — now every term has a known antiderivative.'),
      mc('S2', 'Integrating $\\sec^2 x - 1$ term by term (using $\\int \\sec^2 x\\,dx = \\tan x$), what do you get?', 'execution',
        [{ id: 'a', label: '$\\tan x - x + C$' }, { id: 'b', label: '$\\tan x + x + C$' }, { id: 'c', label: '$\\tan x - x$ (no $+C$)' }],
        'a',
        ['$\\int \\sec^2 x\\,dx = \\tan x$, and $\\int -1\\,dx = -x$ — and it\'s an indefinite integral, so it needs $+C$.'],
        '$\\tan x - x + C$ — select this from the options next.'),
    ],
  },
  {
    id: 'car2020-q29',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$x(x^2-4)^3$ has an inner expression $x^2-4$ whose derivative $2x$ appears (up to a constant) as the outer factor $x$. Which substitution makes this integrable?', 'strategy_selection',
        [{ id: 'a', label: '$u = x^2-4$, so $du = 2x\\,dx$' }, { id: 'b', label: '$u = x^3$, so $du=3x^2dx$' }, { id: 'c', label: '$u = x$, so $du=dx$' }],
        'a',
        ['The factor $x$ outside is exactly (up to a constant multiple) the derivative of $x^2-4$ — that\'s the signature of a substitution/reverse-chain-rule integral.'],
        '$u=x^2-4$, $du=2x\\,dx \\Rightarrow x\\,dx=\\tfrac12 du$, turning the integral into $\\tfrac12\\int u^3\\,du$.'),
      mc('S2', 'Integrating $\\tfrac12\\int u^3\\,du=\\dfrac{u^4}{8}=\\dfrac{(x^2-4)^4}{8}$, and evaluating from $x=0$ to $x=2$ (note $x=2$ makes $x^2-4=0$), what is the definite integral?', 'execution',
        [{ id: 'a', label: '$0 - \\dfrac{(-4)^4}{8} = -32$' }, { id: 'b', label: '$\\dfrac{(-4)^4}{8} - 0 = 32$' }, { id: 'c', label: '$0 - \\dfrac{4^4}{8} = -32$ (same value, different reasoning)' }],
        'a',
        ['At $x=2$: $(2^2-4)^4/8=0^4/8=0$. At $x=0$: $(0^2-4)^4/8=(-4)^4/8=256/8=32$. The definite integral is (upper) $-$ (lower) $=0-32$.'],
        '$0 - 32 = -32$ — select this from the options next.'),
    ],
  },
  {
    id: 'abb2020-mc9',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'The region is bounded by the $y$-axis, $x$-axis, the line $y=3$, and the curve $y=\\ln(x-1)$. Since the curve is easiest to describe as "$x$ in terms of $y$", how should you set up the area?', 'strategy_selection',
        [{ id: 'a', label: 'Integrate horizontally: rewrite as $x=e^y+1$ and find $\\displaystyle\\int_0^3 x\\,dy$' }, { id: 'b', label: 'Integrate vertically as usual: $\\displaystyle\\int_a^b \\ln(x-1)\\,dx$ directly' }, { id: 'c', label: 'The area can\'t be found without a diagram' }],
        'a',
        ['$y=\\ln(x-1) \\Rightarrow x=e^y+1$ — rewriting $x$ as a function of $y$ lets you integrate with respect to $y$ (horizontal strips), which matches boundaries that are horizontal/vertical LINES ($y$-axis, $y=3$).'],
        'Rewrite the curve as $x=e^y+1$ and integrate with respect to $y$ from $y=0$ to $y=3$.'),
      mc('S2', 'Evaluating $\\displaystyle\\int_0^3 (e^y+1)\\,dy = \\left[e^y+y\\right]_0^3$, what is the result?', 'execution',
        [{ id: 'a', label: '$(e^3+3)-(1+0)=e^3+2$' }, { id: 'b', label: '$(e^3+3)-0=e^3+3$' }, { id: 'c', label: '$e^3-1$' }],
        'a',
        ['At $y=0$: $e^0+0=1$. Don\'t forget to subtract this lower-limit value.'],
        '$(e^3+3)-(e^0+0)=e^3+3-1=e^3+2$ — select this from the options next.'),
    ],
  },
  {
    id: 'abb2020-q11a',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', '$\\dfrac{1}{5x+1}$ has an inner linear expression $5x+1$. Which rule applies?', 'strategy_selection',
        [{ id: 'a', label: 'Reverse chain rule: $\\int\\dfrac{1}{ax+b}\\,dx=\\dfrac1a\\ln|ax+b|+C$' }, { id: 'b', label: 'Plain log rule: $\\int\\dfrac1x\\,dx=\\ln|x|+C$, ignoring the $5x+1$' }, { id: 'c', label: 'Power rule on the denominator' }],
        'a',
        ['A log-form integral with a linear inner expression always needs a $\\frac1a$ correction factor, where $a$ is the coefficient of $x$.'],
        '$\\int\\dfrac{1}{ax+b}\\,dx=\\dfrac1a\\ln|ax+b|+C$ — here $a=5$.'),
      mc('S2', 'Substituting $a=5$, what is the primitive?', 'execution',
        [{ id: 'a', label: '$\\dfrac15\\ln|5x+1|+C$' }, { id: 'b', label: '$5\\ln|5x+1|+C$' }, { id: 'c', label: '$\\ln|5x+1|+C$ (no correction factor)' }],
        'a',
        ['The correction factor is $\\dfrac1a$, i.e. $\\dfrac15$ — not $a$ itself, and not omitted entirely.'],
        '$\\dfrac15\\ln|5x+1|+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'abb2020-q11d',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Before integrating, split $\\dfrac{8x^3-3}{x^2}$ into two separate fractions. What do you get?', 'strategy_selection',
        [{ id: 'a', label: '$8x - \\dfrac{3}{x^2}$' }, { id: 'b', label: '$8x^3 - \\dfrac{3}{x^2}$ (no simplification)' }, { id: 'c', label: '$8x + \\dfrac{3}{x^2}$' }],
        'a',
        ['$\\dfrac{8x^3}{x^2}=8x^{3-2}=8x$, and $\\dfrac{-3}{x^2}$ keeps its negative sign — split term by term before integrating.'],
        '$\\dfrac{8x^3-3}{x^2}=8x-\\dfrac{3}{x^2}=8x-3x^{-2}$ — much easier to integrate term by term than the original fraction.'),
      mc('S2', 'Integrating $8x-3x^{-2}$ term by term (power rule on each), what do you get?', 'execution',
        [{ id: 'a', label: '$4x^2+\\dfrac3x+C$' }, { id: 'b', label: '$4x^2-\\dfrac3x+C$' }, { id: 'c', label: '$4x^2+3\\ln|x|+C$' }],
        'a',
        ['$\\int -3x^{-2}\\,dx = -3\\times\\dfrac{x^{-1}}{-1}=3x^{-1}=\\dfrac3x$ — two negative signs (the $-3$ and the $-1$ power-rule denominator) cancel to a $+$.'],
        '$4x^2+\\dfrac3x+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q25',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'The region is bounded above by $y=1$, on the right by $x=4$, and below by $y=\\dfrac2x$. Where does $y=1$ intersect $y=\\dfrac2x$ (the left boundary of the region)?', 'strategy_selection',
        [{ id: 'a', label: '$x=2$' }, { id: 'b', label: '$x=4$' }, { id: 'c', label: '$x=1$' }],
        'a',
        ['Set $\\dfrac2x=1$ and solve for $x$.'],
        '$\\dfrac2x=1 \\Rightarrow x=2$ — the area runs from $x=2$ to $x=4$.'),
      mc('S2', 'The area is $\\displaystyle\\int_2^4\\left(1-\\dfrac2x\\right)(-1)\\,dx$, i.e. $\\displaystyle\\int_2^4\\left(\\dfrac2x-1\\right)dx=\\left[2\\ln x-x\\right]_2^4$. Evaluating, what do you get?', 'execution',
        [{ id: 'a', label: '$(2\\ln4-4)-(2\\ln2-2)=2\\ln2-2$' }, { id: 'b', label: '$(2\\ln4-4)-(2\\ln2-2)=2\\ln2+2$' }, { id: 'c', label: '$(2\\ln4-4)+(2\\ln2-2)$' }],
        'a',
        ['$\\ln4=2\\ln2$, so $2\\ln4=4\\ln2$. Then $4\\ln2-4-2\\ln2+2=2\\ln2-2$.'],
        '$2\\ln2-2$ — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q29',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'On $[0,\\pi/2]$, the curves $y=\\sqrt3\\cos x$ and $y=\\sin x$ cross once. Setting $\\sqrt3\\cos x=\\sin x$, i.e. $\\tan x=\\sqrt3$, where do they cross?', 'strategy_selection',
        [{ id: 'a', label: '$x=\\dfrac{\\pi}{3}$' }, { id: 'b', label: '$x=\\dfrac{\\pi}{4}$' }, { id: 'c', label: '$x=\\dfrac{\\pi}{6}$' }],
        'a',
        ['$\\tan x=\\sqrt3$ at the standard angle where the ratio of sine to cosine is $\\sqrt3$.'],
        '$\\tan x=\\sqrt3 \\Rightarrow x=\\dfrac{\\pi}{3}$ — the area splits into two pieces at this crossover point.'),
      mc('S2', 'Before $x=\\pi/3$, which curve is on top; after $x=\\pi/3$, which is on top?', 'recognition',
        [{ id: 'a', label: '$\\sqrt3\\cos x$ is on top before $\\pi/3$; $\\sin x$ is on top after' }, { id: 'b', label: '$\\sin x$ is on top the whole way' }, { id: 'c', label: '$\\sqrt3\\cos x$ is on top the whole way' }],
        'a',
        ['At $x=0$: $\\sqrt3\\cos0=\\sqrt3>0=\\sin0$. At $x=\\pi/2$: $\\sin(\\pi/2)=1>\\sqrt3\\cos(\\pi/2)=0$ — the top curve switches at the crossover.'],
        'You need TWO separate integrals: $\\int_0^{\\pi/3}(\\sqrt3\\cos x-\\sin x)\\,dx + \\int_{\\pi/3}^{\\pi/2}(\\sin x-\\sqrt3\\cos x)\\,dx$, which together evaluate to $3-\\sqrt3$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q11bii',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'The earlier part of this question showed $\\dfrac{d}{dx}\\left[3xe^{3x}\\right]=e^{3x}(3+9x)$ (product rule). "Hence" find $\\displaystyle\\int_0^2 e^{3x}(3+9x)\\,dx$ — what does this tell you the antiderivative already is?', 'recognition',
        [{ id: 'a', label: '$3xe^{3x}$ — since it\'s the exact derivative shown, the antiderivative is already known, no new integration needed' }, { id: 'b', label: 'You still need to integrate $e^{3x}(3+9x)$ from scratch, ignoring the earlier part' }, { id: 'c', label: 'The antiderivative is $e^{3x}$ alone' }],
        'a',
        ['"Hence" is a strong signal: reuse the earlier result directly instead of re-deriving the integral by a different method.'],
        'Since $\\dfrac{d}{dx}[3xe^{3x}]=e^{3x}(3+9x)$, the antiderivative of $e^{3x}(3+9x)$ is exactly $3xe^{3x}$.'),
      mc('S2', 'Evaluating $\\left[3xe^{3x}\\right]_0^2$, what is the definite integral?', 'execution',
        [{ id: 'a', label: '$6e^6 - 0 = 6e^6$' }, { id: 'b', label: '$3e^6 - 0 = 3e^6$' }, { id: 'c', label: '$6e^6 - 3e^0 = 6e^6-3$' }],
        'a',
        ['At $x=2$: $3(2)e^{3(2)}=6e^6$. At $x=0$: $3(0)e^0=0$.'],
        '$6e^6-0=6e^6$ — select this from the options next.'),
    ],
  },
];

async function main() {
  const touchedChapters = new Set();
  for (const { id, reasoning_blueprint, requireAnswer } of QUESTIONS) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} — origin:'teacher'.`); continue; }
    if (requireAnswer && data.answer !== requireAnswer) {
      console.warn(`SKIP ${id} — answer is '${data.answer}', expected '${requireAnswer}'. Not building steps on top of unverified content.`);
      continue;
    }
    await ref.set({ reasoning_blueprint }, { merge: true });
    console.log(`✓ ${id} — ${reasoning_blueprint.length} reasoning pre-steps`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
