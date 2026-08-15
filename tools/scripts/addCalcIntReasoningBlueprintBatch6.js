#!/usr/bin/env node
/**
 * CALC-INT-01 batch 6 (2026-08-15, same day) — 8 more questions,
 * finally including cra2023-q29c (deferred from batch 5 pending a full
 * independent re-derivation, now done — see below).
 *
 * Also found while scanning variants (documented, not fixed here):
 * baulko2020-q11cv has an odd bug distinct from the usual duplicate-
 * value pattern — 3 of its 4 options each state a DIFFERENT fraction
 * but all claim "=234" regardless (e.g. "1/8(5^4-1)=234" is false, since
 * 1/8×624=78≠234) — internally self-contradictory equations, not a
 * duplicate-value issue. baulko2020-q11eiiv still has the classic
 * "9/5"/"8/4"/"7/3" garbage-fraction template. Neither touched here.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - cra2023-q29c: 2cosx=cotx => cosx(2sinx-1)=0, giving intersections
 *    at x=π/6, π/2, 5π/6 in (0,π) (cotx has asymptotes at x=0 and x=π,
 *    so the FINITE bounded region is between the outer two of these
 *    three intersections, via π/2). Using ∫2cosx dx=2sinx,
 *    ∫cotx dx=ln|sinx|: the two halves [π/6,π/2] and [π/2,5π/6] each
 *    evaluate to (1-ln2) (verified numerically), total 2(1-ln2)=2-ln4.
 *    Matches doc.
 *  - asc2020-q25v: area between y=3/x, y=1, x=9. Intersection 3/x=1
 *    => x=3. ∫₃⁹(3/x-1)dx=[3lnx-x]₃⁹=(3ln9-9)-(3ln3-3)=3ln3-6 (using
 *    ln9=2ln3). Matches.
 *  - asc2020-q29v: area between cosx and sinx on [0,π/2], crossover at
 *    π/4. Verified via direct integration (two halves, each giving
 *    √2-1): total 2√2-2. Matches.
 *  - bar2020-q11biiv: "given" d/dx[xe^{2x}]=e^{2x}(2x+1)=e^{2x}(1+2x).
 *    2+4x=2(1+2x), so ∫e^{2x}(2+4x)dx=2[xe^{2x}]. Evaluated 0→1:
 *    2(e²-0)=2e². Matches.
 *  - bar2020-q12bv: ∫x/(x²+5)dx=(1/2)ln(x²+5)+C (numerator is half the
 *    denominator's derivative, same technique as bar2020-q12b). Matches.
 *  - bar2020-q12cv: ∫₀^π sin(x/2)dx=[-2cos(x/2)]₀^π=-2cos(π/2)+2cos0
 *    =0+2=2. Matches.
 *  - girr2020-mc7s: ∫cot²x dx=∫(csc²x-1)dx=-cotx-x+C (using
 *    csc²x=cot²x+1). Matches.
 *  - girr2020-mc23s: f'(x)=6x+1, f(x)=3x²+x+C. At (1,5): 3+1+C=5
 *    => C=1. f(x)=3x²+x+1. Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcIntReasoningBlueprintBatch6.js
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
    id: 'cra2023-q29c',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', 'Setting $2\\cos x=\\cot x$ and rearranging to $\\cos x(2\\sin x-1)=0$, the curves intersect at $x=\\dfrac{\\pi}{6}$, $\\dfrac{\\pi}{2}$, and $\\dfrac{5\\pi}{6}$ in $(0,\\pi)$. Since $\\cot x$ has asymptotes at $x=0$ and $x=\\pi$, which pair of intersections bounds the one FINITE enclosed region?', 'recognition',
        [{ id: 'a', label: '$\\dfrac{\\pi}{6}$ to $\\dfrac{5\\pi}{6}$ (via $\\dfrac{\\pi}{2}$)' }, { id: 'b', label: '$0$ to $\\dfrac{\\pi}{6}$' }, { id: 'c', label: '$\\dfrac{5\\pi}{6}$ to $\\pi$' }],
        'a',
        ['The regions near $x=0$ and $x=\\pi$ stretch out to the asymptotes of $\\cot x$ — infinite area, not "enclosed". Only the middle stretch between the outer two intersection points is a closed loop.'],
        'The bounded region runs from $\\dfrac{\\pi}{6}$ to $\\dfrac{5\\pi}{6}$, split into two halves by the middle intersection at $\\dfrac{\\pi}{2}$.'),
      mc('S2', 'Using $\\int2\\cos x\\,dx=2\\sin x$ and $\\int\\cot x\\,dx=\\ln|\\sin x|$, each half ($\\left[\\tfrac{\\pi}{6},\\tfrac{\\pi}{2}\\right]$ and $\\left[\\tfrac{\\pi}{2},\\tfrac{5\\pi}{6}\\right]$) evaluates to $(1-\\ln2)$. What is the total bounded area?', 'execution',
        [{ id: 'a', label: '$2(1-\\ln2)=2-2\\ln2=2-\\ln4$' }, { id: 'b', label: '$1-\\ln2$' }, { id: 'c', label: '$2-\\ln2$' }],
        'a',
        ['Both symmetric halves contribute the same amount — add them together, and $2\\ln2=\\ln(2^2)=\\ln4$.'],
        '$2-\\ln4$ square units — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q25v',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'The region is bounded by $y=\\dfrac3x$, $y=1$, and $x=9$. Where does $y=1$ intersect $y=\\dfrac3x$ (the left boundary)?', 'strategy_selection',
        [{ id: 'a', label: '$x=3$' }, { id: 'b', label: '$x=9$' }, { id: 'c', label: '$x=1$' }],
        'a',
        ['Set $\\dfrac3x=1$ and solve for $x$.'],
        '$\\dfrac3x=1\\Rightarrow x=3$ — the area runs from $x=3$ to $x=9$.'),
      mc('S2', 'The area is $\\displaystyle\\int_3^9\\left(\\dfrac3x-1\\right)dx=\\left[3\\ln x-x\\right]_3^9=(3\\ln9-9)-(3\\ln3-3)$. Using $\\ln9=2\\ln3$, what is the exact value?', 'execution',
        [{ id: 'a', label: '$3\\ln3-6$' }, { id: 'b', label: '$3\\ln3+6$' }, { id: 'c', label: '$6\\ln3-6$' }],
        'a',
        ['$3\\ln9=3(2\\ln3)=6\\ln3$, so $(6\\ln3-9)-(3\\ln3-3)=6\\ln3-3\\ln3-9+3=3\\ln3-6$.'],
        '$3\\ln3-6$ — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q29v',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'On $[0,\\pi/2]$, $y=\\cos x$ and $y=\\sin x$ cross once, where $\\tan x=1$. Where is this?', 'strategy_selection',
        [{ id: 'a', label: '$x=\\dfrac{\\pi}{4}$' }, { id: 'b', label: '$x=\\dfrac{\\pi}{3}$' }, { id: 'c', label: '$x=\\dfrac{\\pi}{6}$' }],
        'a',
        ['$\\tan x=1$ at the standard angle where sine and cosine are equal.'],
        '$x=\\dfrac{\\pi}{4}$ — the area splits into two pieces here (before this, $\\cos x$ is on top; after, $\\sin x$ is).'),
      mc('S2', 'Each half — $\\int_0^{\\pi/4}(\\cos x-\\sin x)\\,dx$ and $\\int_{\\pi/4}^{\\pi/2}(\\sin x-\\cos x)\\,dx$ — evaluates to $(\\sqrt2-1)$. What is the total enclosed area?', 'execution',
        [{ id: 'a', label: '$2\\sqrt2-2$' }, { id: 'b', label: '$\\sqrt2-1$' }, { id: 'c', label: '$2-2\\sqrt2$' }],
        'a',
        ['Add the two equal halves together: $(\\sqrt2-1)+(\\sqrt2-1)=2\\sqrt2-2$.'],
        '$2\\sqrt2-2$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q11biiv',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'You\'re given $\\dfrac{d}{dx}[xe^{2x}]=e^{2x}(2x+1)$. Rewriting the integrand $2+4x$ as a multiple of $(1+2x)$, what do you get?', 'strategy_selection',
        [{ id: 'a', label: '$2(1+2x)$' }, { id: 'b', label: '$4(1+2x)$' }, { id: 'c', label: '$2+2(1+2x)$' }],
        'a',
        ['$2+4x=2(1+2x)$ — factor out the $2$.'],
        '$2+4x=2(1+2x)$, so $\\int e^{2x}(2+4x)\\,dx=2\\int e^{2x}(1+2x)\\,dx=2\\left[xe^{2x}\\right]$ (reusing the given derivative directly).'),
      mc('S2', 'Evaluating $2\\left[xe^{2x}\\right]_0^1=2(1\\cdot e^2-0)$, what is the result?', 'execution',
        [{ id: 'a', label: '$2e^2$' }, { id: 'b', label: '$e^2$' }, { id: 'c', label: '$4e^2$' }],
        'a',
        ['$2\\times e^2=2e^2$ — don\'t drop the leading factor of $2$.'],
        '$2e^2$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q12bv',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'The denominator $x^2+5$ has derivative $2x$. The numerator is $x$ — what correction factor turns $x$ into exactly $2x$?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac12$' }, { id: 'b', label: '$2$' }, { id: 'c', label: 'No correction needed' }],
        'a',
        ['$2x\\times\\dfrac12=x$.'],
        'A correction factor of $\\dfrac12$ is needed.'),
      mc('S2', 'Applying $\\int\\dfrac{f\'(x)}{f(x)}\\,dx=\\ln|f(x)|$ with the $\\dfrac12$ correction, what is $\\int\\dfrac{x}{x^2+5}\\,dx$?', 'execution',
        [{ id: 'a', label: '$\\dfrac12\\ln(x^2+5)+C$' }, { id: 'b', label: '$\\ln(x^2+5)+C$' }, { id: 'c', label: '$2\\ln(x^2+5)+C$' }],
        'a',
        ['Don\'t drop the $\\dfrac12$.'],
        '$\\dfrac12\\ln(x^2+5)+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q12cv',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'Using $\\int\\sin(ax)\\,dx=-\\dfrac1a\\cos(ax)+C$ with $a=\\dfrac12$, what is the general antiderivative of $\\sin\\dfrac{x}{2}$?', 'strategy_selection',
        [{ id: 'a', label: '$-2\\cos\\dfrac{x}{2}+C$' }, { id: 'b', label: '$-\\dfrac12\\cos\\dfrac{x}{2}+C$' }, { id: 'c', label: '$2\\cos\\dfrac{x}{2}+C$' }],
        'a',
        ['The correction factor is $\\dfrac1a=\\dfrac{1}{1/2}=2$.'],
        '$-2\\cos\\dfrac{x}{2}+C$.'),
      mc('S2', 'Evaluating $\\left[-2\\cos\\dfrac{x}{2}\\right]_0^{\\pi}=-2\\cos\\dfrac{\\pi}{2}+2\\cos0$, what is the result?', 'execution',
        [{ id: 'a', label: '$0+2=2$' }, { id: 'b', label: '$-2+2=0$' }, { id: 'c', label: '$0-2=-2$' }],
        'a',
        ['$\\cos\\dfrac{\\pi}{2}=0$, so the first term vanishes; $\\cos0=1$, so the second term is $2$.'],
        '$0+2=2$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc7s',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$\\cot^2 x$ has no direct antiderivative rule. Using $\\csc^2x=\\cot^2x+1$, what does $\\cot^2x$ equal?', 'strategy_selection',
        [{ id: 'a', label: '$\\csc^2x-1$' }, { id: 'b', label: '$\\csc^2x+1$' }, { id: 'c', label: '$1-\\csc^2x$' }],
        'a',
        ['Rearranging the Pythagorean identity $\\csc^2x=\\cot^2x+1$ gives $\\cot^2x=\\csc^2x-1$.'],
        '$\\cot^2x=\\csc^2x-1$ — now both terms have a known antiderivative.'),
      mc('S2', 'Integrating $\\csc^2x-1$ (using $\\int\\csc^2x\\,dx=-\\cot x$), what do you get?', 'execution',
        [{ id: 'a', label: '$-\\cot x-x+C$' }, { id: 'b', label: '$-\\cot x+x+C$' }, { id: 'c', label: '$\\cot x-x+C$' }],
        'a',
        ['$\\int\\csc^2x\\,dx=-\\cot x$ (note the negative sign — this is different from $\\int\\sec^2x\\,dx=+\\tan x$).'],
        '$-\\cot x-x+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc23s',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Integrating $f\'(x)=6x+1$ (power rule), what is the general antiderivative?', 'execution',
        [{ id: 'a', label: '$f(x)=3x^2+x+C$' }, { id: 'b', label: '$f(x)=6x^2+x+C$' }, { id: 'c', label: '$f(x)=3x^2+C$' }],
        'a',
        ['$\\int6x\\,dx=3x^2$, $\\int1\\,dx=x$.'],
        '$f(x)=3x^2+x+C$.'),
      mc('S2', 'Substituting the point $(1,5)$ into $f(x)=3x^2+x+C$ and solving, what is $C$?', 'execution',
        [{ id: 'a', label: '$C=1$' }, { id: 'b', label: '$C=-1$' }, { id: 'c', label: '$C=5$' }],
        'a',
        ['$5=3(1)+1+C=4+C$ — solve for $C$.'],
        '$5=4+C \\Rightarrow C=1$, giving $f(x)=3x^2+x+1$ — select this from the options next.'),
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
