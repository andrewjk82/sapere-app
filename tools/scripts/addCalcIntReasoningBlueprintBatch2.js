#!/usr/bin/env node
/**
 * CALC-INT-01 batch 2 (2026-08-15, same day) — 8 more questions, chosen
 * after fixing 6 more broken-option questions found while scoping
 * (fixCalcIntBrokenOptionsBatch2.js). Two more questions
 * (baulko2020-mc3, cra2023-mc10) were found suspicious/unverifiable and
 * skipped rather than fixed — see that script's header for details.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - abb2020-q11eiii: dy/dx=x³+2x-7, y=x⁴/4+x²-7x+C. At P(2,4):
 *    4=4+4-14+C => C=10. y=x⁴/4+x²-7x+10. Matches.
 *  - abb2020-q13a: ∫₀^{π/6}sec²2x dx = [(1/2)tan2x]₀^{π/6} =
 *    (1/2)tan(π/3)-0 = (1/2)√3 = √3/2. Matches.
 *  - baulko2020-mc1: ∫tan²x dx = ∫(sec²x-1)dx = tanx-x+C. Matches.
 *  - bbhs2020-17a: ∫(5x+3)¹⁹dx = (5x+3)²⁰/(5×20)+C = (5x+3)²⁰/100+C
 *    (reverse chain rule). Matches.
 *  - bbhs2020-17b: ∫(2x³+1/(3x+1))dx = x⁴/2+(1/3)ln|3x+1|+C. Matches.
 *  - bbhs2020-20: f'(x)=4x³-3, f(x)=x⁴-3x+C. At (-1,2):
 *    2=1+3+C => C=-2. f(x)=x⁴-3x-2. Matches.
 *  - fortst2020-q4: numerator x-1 is half the derivative of the
 *    denominator x²-2x+4 (whose derivative is 2x-2=2(x-1)), so
 *    ∫(x-1)/(x²-2x+4)dx=(1/2)ln|x²-2x+4|. Evaluated 0→1:
 *    (1/2)[ln3-ln4]=(1/2)ln(3/4)=ln(√3/2). Matches.
 *  - fortst2020-q14c: y=4e^{-x} and y=e^x-3 meet exactly at x=ln4 (both
 *    equal 1). Area=∫₀^{ln4}(4e^{-x}-e^x+3)dx=[-4e^{-x}-e^x+3x]₀^{ln4}
 *    = (-1-4+3ln4)-(-5) = 3ln4. Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcIntReasoningBlueprintBatch2.js
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
    id: 'abb2020-q11eiii',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Integrating $\\dfrac{dy}{dx}=x^3+2x-7$ term by term, what is the general antiderivative?', 'execution',
        [{ id: 'a', label: '$y=\\dfrac{x^4}{4}+x^2-7x+C$' }, { id: 'b', label: '$y=\\dfrac{x^4}{4}+2x^2-7x+C$' }, { id: 'c', label: '$y=3x^2+2+C$' }],
        'a',
        ['Power rule on each term: $\\int x^3\\,dx=\\dfrac{x^4}{4}$, $\\int 2x\\,dx=x^2$, $\\int -7\\,dx=-7x$.'],
        '$y=\\dfrac{x^4}{4}+x^2-7x+C$.'),
      mc('S2', 'Substituting the initial condition $P(2,4)$ (i.e. $x=2,y=4$) into $y=\\dfrac{x^4}{4}+x^2-7x+C$ and solving, what is $C$?', 'execution',
        [{ id: 'a', label: '$C=10$' }, { id: 'b', label: '$C=4$' }, { id: 'c', label: '$C=-6$' }],
        'a',
        ['$4=\\dfrac{16}{4}+4-14+C=4+4-14+C=-6+C$ — solve for $C$.'],
        '$4=-6+C \\Rightarrow C=10$, giving $y=\\dfrac{x^4}{4}+x^2-7x+10$ — select this from the options next.'),
    ],
  },
  {
    id: 'abb2020-q13a',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', '$\\sec^2 2x$ has an inner linear expression $2x$. Using $\\int\\sec^2(ax)\\,dx=\\dfrac1a\\tan(ax)+C$ with $a=2$, what is the general antiderivative?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac12\\tan 2x+C$' }, { id: 'b', label: '$2\\tan 2x+C$' }, { id: 'c', label: '$\\tan 2x+C$ (no correction factor)' }],
        'a',
        ['A reverse-chain-rule log/trig integral with a linear inner expression always needs a $\\dfrac1a$ correction factor.'],
        '$\\dfrac12\\tan 2x+C$.'),
      mc('S2', 'Evaluating $\\left[\\dfrac12\\tan 2x\\right]_0^{\\pi/6}=\\dfrac12\\tan\\dfrac{\\pi}{3}-\\dfrac12\\tan 0$, what is the exact value?', 'execution',
        [{ id: 'a', label: '$\\dfrac{\\sqrt3}{2}$' }, { id: 'b', label: '$\\dfrac{\\sqrt3}{4}$' }, { id: 'c', label: '$\\sqrt3$' }],
        'a',
        ['$\\tan\\dfrac{\\pi}{3}=\\sqrt3$, and $\\tan 0=0$, so this is $\\dfrac12\\times\\sqrt3-0$.'],
        '$\\dfrac12\\sqrt3-0=\\dfrac{\\sqrt3}{2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-mc1',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$\\tan^2 x$ has no direct antiderivative rule. Using $\\sec^2 x=\\tan^2 x+1$, what does $\\tan^2 x$ equal?', 'strategy_selection',
        [{ id: 'a', label: '$\\sec^2 x-1$' }, { id: 'b', label: '$\\sec^2 x+1$' }, { id: 'c', label: '$1-\\sec^2 x$' }],
        'a',
        ['Rearranging the Pythagorean identity $\\sec^2 x=\\tan^2 x+1$ gives $\\tan^2 x=\\sec^2 x-1$.'],
        '$\\tan^2 x=\\sec^2 x-1$ — now both terms have a known antiderivative.'),
      mc('S2', 'Integrating $\\sec^2 x-1$ (using $\\int\\sec^2x\\,dx=\\tan x$), what do you get?', 'execution',
        [{ id: 'a', label: '$\\tan x-x+C$' }, { id: 'b', label: '$\\tan x+x+C$' }, { id: 'c', label: '$\\dfrac{\\tan^3x}{3}+C$' }],
        'a',
        ['$\\int\\sec^2x\\,dx=\\tan x$ and $\\int-1\\,dx=-x$.'],
        '$\\tan x-x+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-17a',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$(5x+3)^{19}$ has an inner linear expression $5x+3$. Using the reverse chain rule $\\int(ax+b)^n\\,dx=\\dfrac{(ax+b)^{n+1}}{a(n+1)}+C$ with $a=5$, $n=19$, what is the denominator?', 'strategy_selection',
        [{ id: 'a', label: '$5\\times20=100$' }, { id: 'b', label: '$5\\times19=95$' }, { id: 'c', label: '$20$' }],
        'a',
        ['The denominator is $a\\times(n+1)$ — the coefficient of $x$ times the NEW (increased) power.'],
        '$5\\times20=100$.'),
      mc('S2', 'Putting it together, what is the primitive function?', 'execution',
        [{ id: 'a', label: '$\\dfrac{(5x+3)^{20}}{100}+C$' }, { id: 'b', label: '$\\dfrac{(5x+3)^{19}}{100}+C$' }, { id: 'c', label: '$\\dfrac{(5x+3)^{20}}{100}$ (no $+C$)' }],
        'a',
        ['The power increases by $1$ (to $20$), and don\'t forget the indefinite integral needs $+C$.'],
        '$\\dfrac{(5x+3)^{20}}{100}+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-17b',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Integrating $2x^3$ (power rule), what do you get?', 'execution',
        [{ id: 'a', label: '$\\dfrac{x^4}{2}$' }, { id: 'b', label: '$\\dfrac{x^4}{4}$' }, { id: 'c', label: '$6x^2$' }],
        'a',
        ['$\\int 2x^3\\,dx=2\\times\\dfrac{x^4}{4}=\\dfrac{x^4}{2}$.'],
        '$\\dfrac{x^4}{2}$.'),
      mc('S2', 'Integrating $\\dfrac{1}{3x+1}$ (reverse chain rule, linear inner expression with $a=3$), what do you get?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac13\\ln|3x+1|$' }, { id: 'b', label: '$3\\ln|3x+1|$' }, { id: 'c', label: '$\\ln|3x+1|$ (no correction factor)' }],
        'a',
        ['The correction factor is $\\dfrac1a=\\dfrac13$.'],
        '$\\dfrac13\\ln|3x+1|$, so the full primitive is $\\dfrac{x^4}{2}+\\dfrac13\\ln|3x+1|+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-20',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Integrating $f\'(x)=4x^3-3$ (power rule), what is the general antiderivative?', 'execution',
        [{ id: 'a', label: '$f(x)=x^4-3x+C$' }, { id: 'b', label: '$f(x)=x^4-3x^2+C$' }, { id: 'c', label: '$f(x)=12x^2-3+C$' }],
        'a',
        ['$\\int 4x^3\\,dx=x^4$, $\\int-3\\,dx=-3x$.'],
        '$f(x)=x^4-3x+C$.'),
      mc('S2', 'Substituting the point $(-1,2)$ into $f(x)=x^4-3x+C$ and solving, what is $C$?', 'execution',
        [{ id: 'a', label: '$C=-2$' }, { id: 'b', label: '$C=2$' }, { id: 'c', label: '$C=4$' }],
        'a',
        ['$2=(-1)^4-3(-1)+C=1+3+C=4+C$ — solve for $C$.'],
        '$2=4+C \\Rightarrow C=-2$, giving $f(x)=x^4-3x-2$ — select this from the options next.'),
    ],
  },
  {
    id: 'fortst2020-q4',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'The numerator $x-1$ is related to the derivative of the denominator $x^2-2x+4$, which is $2x-2$. What is that relationship?', 'strategy_selection',
        [{ id: 'a', label: '$x-1$ is exactly HALF of $2x-2$' }, { id: 'b', label: '$x-1$ is exactly DOUBLE $2x-2$' }, { id: 'c', label: 'There\'s no useful relationship' }],
        'a',
        ['$2x-2=2(x-1)$, so $x-1=\\dfrac12(2x-2)$ — this is the signature of an $\\int\\dfrac{f\'(x)}{f(x)}$-style integral (with a correction factor).'],
        '$x-1=\\dfrac12(2x-2)$, so $\\int\\dfrac{x-1}{x^2-2x+4}\\,dx=\\dfrac12\\int\\dfrac{2x-2}{x^2-2x+4}\\,dx=\\dfrac12\\ln|x^2-2x+4|+C$.'),
      mc('S2', 'Evaluating $\\left[\\dfrac12\\ln(x^2-2x+4)\\right]_0^1=\\dfrac12\\ln3-\\dfrac12\\ln4=\\dfrac12\\ln\\dfrac34$, which matches this using log laws ($\\dfrac12\\ln u=\\ln\\sqrt u$)?', 'verification',
        [{ id: 'a', label: '$\\ln\\!\\left(\\dfrac{\\sqrt3}{2}\\right)$' }, { id: 'b', label: '$-\\ln\\!\\left(\\dfrac{\\sqrt3}{2}\\right)$' }, { id: 'c', label: '$\\ln\\!\\left(\\dfrac34\\right)$' }],
        'a',
        ['$\\sqrt{3/4}=\\dfrac{\\sqrt3}{\\sqrt4}=\\dfrac{\\sqrt3}{2}$.'],
        '$\\dfrac12\\ln\\dfrac34=\\ln\\sqrt{3/4}=\\ln\\!\\left(\\dfrac{\\sqrt3}{2}\\right)$ — select this from the options next.'),
    ],
  },
  {
    id: 'fortst2020-q14c',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'The curves $y=4e^{-x}$ and $y=e^x-3$ meet at $x=\\ln4$ (both equal $1$ there). Between $x=0$ and $x=\\ln4$, which curve is on top?', 'recognition',
        [{ id: 'a', label: '$y=4e^{-x}$ is on top (at $x=0$: $4e^{-x}=4$ vs $e^x-3=-2$)' }, { id: 'b', label: '$y=e^x-3$ is on top' }, { id: 'c', label: 'They\'re equal everywhere on this interval' }],
        'a',
        ['Check the values at $x=0$: $4e^0=4$ is much bigger than $e^0-3=-2$.'],
        '$y=4e^{-x}$ is on top for the whole interval, so the area is $\\int_0^{\\ln4}\\left[4e^{-x}-(e^x-3)\\right]dx$.'),
      mc('S2', 'Integrating $4e^{-x}-e^x+3$ gives $\\left[-4e^{-x}-e^x+3x\\right]_0^{\\ln4}$. Evaluating at $x=\\ln4$ (where $e^{\\ln4}=4$, $e^{-\\ln4}=\\tfrac14$) and $x=0$, what is the area?', 'execution',
        [{ id: 'a', label: '$(-1-4+3\\ln4)-(-4-1+0)=3\\ln4$' }, { id: 'b', label: '$(-1-4+3\\ln4)-(-4-1+0)=3\\ln4-5$' }, { id: 'c', label: '$(-1-4+3\\ln4)-0=3\\ln4-5$' }],
        'a',
        ['At $x=0$: $-4(1)-1+0=-5$. At $x=\\ln4$: $-4(\\tfrac14)-4+3\\ln4=-1-4+3\\ln4$. Subtract the lower-limit value from the upper.'],
        '$(-5+3\\ln4)-(-5)=3\\ln4$ — the $-5$ terms cancel, leaving exactly $3\\ln4$ — select this from the options next.'),
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
