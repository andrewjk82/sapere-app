#!/usr/bin/env node
/**
 * Pilot question-specific reasoning blueprints for CALC-STAT-01 (5th
 * DNA, 2026-08-15) — 8 questions chosen to span the DNA's real variety:
 * concavity from the sign of f'', classifying a stationary point via
 * the second derivative test, points of inflection (one directly reuses
 * abb2020-q15ai's y''=4e^{-x²}(x²-1/2) from the already-enriched
 * CALC-DIFF-01 work), the f''=0-inconclusive case needing a sign-of-f'
 * test (twice, with two different factoring shapes — a plain double
 * root and a squared-factor-times-linear-factor), a simple double-root
 * stationary point, a discriminant-based "always increasing" condition,
 * and an Intermediate Value Theorem root-existence argument (a
 * different flavor entirely from stationary-point classification).
 *
 * Several graph-image-based questions (baulko2020-mc4, bbhs2020-mc8,
 * cths2020-mc10, dane2020-mc6, fortst2020-mc7) were deliberately
 * skipped — can't verify their correct answer without seeing the
 * embedded SVG/diagram rendered.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - abb2020-mc3: f(x)=2x³+x², f'=6x²+2x, f''=12x+2. Concave down
 *    (f''<0) when x<-1/6. Matches.
 *  - abb2020-q12aii: h(x)=(x-2)(x²+1)=x³-2x²+x-2, h'=3x²-4x+1=
 *    (3x-1)(x-1), stationary at x=1/3,1. h''=6x-4: at x=1/3, h''=-2
 *    (max); at x=1, h''=2 (min). h(1/3)=-50/27, h(1)=-2. Matches.
 *  - abb2020-q15aii: y=e^{-x²}, y''=4e^{-x²}(x²-1/2) (already verified
 *    in this session's CALC-DIFF-01 work on abb2020-q15ai). y''=0 =>
 *    x²=1/2 => x=±1/√2, y=e^{-1/2}. Matches.
 *  - bar2020-q15ai: f(x)=3x⁴-8x³+6, f'=12x³-24x²=12x²(x-2), stationary
 *    at x=0 (double),2. f''=36x²-48x, f''(0)=0 (inconclusive!) —
 *    testing f'=12x²(x-2) near x=0: x² keeps sign positive both sides,
 *    (x-2) is negative both sides near 0, so f' stays negative on both
 *    sides => horizontal inflection at x=0. f''(2)=48>0 => min at x=2.
 *    f(0)=6, f(2)=-10. Matches.
 *  - baulko2020-q13dii: f(x)=ln(x²+1), f'=2x/(x²+1)=0 at x=0.
 *    f''=(2-2x²)/(x²+1)², f''(0)=2>0 => minimum. f(0)=0. Matches.
 *  - girr2020-mc14a: f(x)=x³-3x²+3x, f'=3x²-6x+3=3(x-1)², stationary
 *    (double root) at x=1. Matches.
 *  - girr2020-mc31: f(x)=x³-3x²+kx+5, f'=3x²-6x+k. Increasing
 *    everywhere needs f'≥0 always, i.e. discriminant 36-12k≤0 => k≥3.
 *    Matches.
 *  - cra2023-q27b: f(x)=3x(1-x/4)³+1. f(5)=15(-1/4)³+1=-15/64+1=49/64
 *    (positive). f(6)=18(-1/2)³+1=-18/8+1=-5/4 (negative). Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcStatReasoningBlueprint.js
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
    id: 'abb2020-mc3',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', '$f(x)=2x^3+x^2$ has $f\'(x)=6x^2+2x$. What is $f\'\'(x)$?', 'execution',
        [{ id: 'a', label: '$12x+2$' }, { id: 'b', label: '$12x$' }, { id: 'c', label: '$6x+2$' }],
        'a',
        ['Differentiate $f\'(x)=6x^2+2x$ term by term.'],
        '$f\'\'(x)=12x+2$.'),
      mc('S2', 'A curve is concave down where $f\'\'(x)<0$. Solving $12x+2<0$ for $x$, what do you get?', 'execution',
        [{ id: 'a', label: '$x<-\\dfrac16$' }, { id: 'b', label: '$x>-\\dfrac16$' }, { id: 'c', label: '$x<-\\dfrac{1}{12}$' }],
        'a',
        ['$12x<-2 \\Rightarrow x<-\\dfrac{2}{12}=-\\dfrac16$.'],
        '$x<-\\dfrac16$ — select this from the options next.'),
    ],
  },
  {
    id: 'abb2020-q12aii',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Expanding $h(x)=(x-2)(x^2+1)=x^3-2x^2+x-2$ and differentiating gives $h\'(x)=3x^2-4x+1=(3x-1)(x-1)$. What are the stationary $x$-values?', 'execution',
        [{ id: 'a', label: '$x=\\dfrac13$ and $x=1$' }, { id: 'b', label: '$x=3$ and $x=1$' }, { id: 'c', label: '$x=-\\dfrac13$ and $x=-1$' }],
        'a',
        ['Setting each factor of $(3x-1)(x-1)=0$: $3x-1=0 \\Rightarrow x=\\tfrac13$, and $x-1=0 \\Rightarrow x=1$.'],
        '$x=\\dfrac13$ and $x=1$.'),
      mc('S2', 'Using $h\'\'(x)=6x-4$: at $x=\\tfrac13$, $h\'\'=-2$ (negative); at $x=1$, $h\'\'=2$ (positive). What is the classification of each?', 'strategy_selection',
        [{ id: 'a', label: 'Local max at $x=\\tfrac13$ (concave down); local min at $x=1$ (concave up)' }, { id: 'b', label: 'Local min at $x=\\tfrac13$; local max at $x=1$' }, { id: 'c', label: 'Both are horizontal points of inflection' }],
        'a',
        ['Negative $f\'\'$ means concave down (a maximum); positive $f\'\'$ means concave up (a minimum).'],
        'Local max at $\\left(\\tfrac13,-\\tfrac{50}{27}\\right)$, local min at $(1,-2)$ — select this from the options next.'),
    ],
  },
  {
    id: 'abb2020-q15aii',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Points of inflection occur where $y\'\'=0$. Using $y\'\'=4e^{-x^2}\\left(x^2-\\tfrac12\\right)$ (since $e^{-x^2}$ is never zero), what equation do you actually need to solve?', 'strategy_selection',
        [{ id: 'a', label: '$x^2-\\dfrac12=0$' }, { id: 'b', label: '$x^2+\\dfrac12=0$' }, { id: 'c', label: '$4e^{-x^2}=0$' }],
        'a',
        ['Since $e^{-x^2}>0$ always, the only way the product can be zero is if the other factor is zero.'],
        '$x^2-\\dfrac12=0$.'),
      mc('S2', 'Solving $x^2=\\dfrac12$ gives $x=\\pm\\dfrac{1}{\\sqrt2}$. Substituting back into $y=e^{-x^2}$, what is $y$ at these points?', 'execution',
        [{ id: 'a', label: '$e^{-1/2}$' }, { id: 'b', label: '$e^{1/2}$' }, { id: 'c', label: '$e^{-1/4}$' }],
        'a',
        ['At these points, $x^2=\\dfrac12$, so $y=e^{-x^2}=e^{-1/2}$.'],
        '$e^{-1/2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q15ai',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Factoring $f\'(x)=12x^3-24x^2=12x^2(x-2)$ and setting it to zero, what are the stationary $x$-values?', 'strategy_selection',
        [{ id: 'a', label: '$x=0$ (a double root) and $x=2$' }, { id: 'b', label: '$x=0$ and $x=12$' }, { id: 'c', label: '$x=2$ only' }],
        'a',
        ['$12x^2=0$ gives $x=0$ (repeated, since it\'s squared), and $x-2=0$ gives $x=2$.'],
        '$x=0$ (double root) and $x=2$.'),
      mc('S2', 'At $x=0$, $f\'\'(x)=36x^2-48x$ gives $f\'\'(0)=0$ — the second derivative test is INCONCLUSIVE. Testing the sign of $f\'(x)=12x^2(x-2)$ just before and after $x=0$ (note $x^2\\geq0$ always, so only the sign of $(x-2)$ matters, which is negative on both sides near $0$), what does this tell you?', 'verification',
        [{ id: 'a', label: 'Horizontal point of inflection (the sign of $f\'$ is the SAME on both sides)' }, { id: 'b', label: 'Local minimum (the sign of $f\'$ changes from $-$ to $+$)' }, { id: 'c', label: 'Local maximum (the sign of $f\'$ changes from $+$ to $-$)' }],
        'a',
        ['When $f\'\'=0$, fall back to a sign diagram of $f\'$ — a squared factor like $x^2$ never changes sign, so the overall sign of $f\'$ near $x=0$ is controlled entirely by $(x-2)$, which stays negative on both sides.'],
        'Horizontal point of inflection at $(0,6)$; local minimum at $(2,-10)$ (where $f\'\'(2)=48>0$) — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q13dii',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Setting $f\'(x)=\\dfrac{2x}{x^2+1}=0$ (the denominator is never zero, so only the numerator matters), what is the stationary $x$-value?', 'execution',
        [{ id: 'a', label: '$x=0$' }, { id: 'b', label: '$x=1$' }, { id: 'c', label: '$x=-1$' }],
        'a',
        ['A fraction is zero exactly when its numerator is zero (and the denominator isn\'t).'],
        '$2x=0 \\Rightarrow x=0$.'),
      mc('S2', 'Using $f\'\'(x)=\\dfrac{2-2x^2}{(x^2+1)^2}$, evaluate $f\'\'(0)$. What is the classification of the stationary point?', 'strategy_selection',
        [{ id: 'a', label: 'Local minimum (since $f\'\'(0)=2>0$)' }, { id: 'b', label: 'Local maximum (since $f\'\'(0)<0$)' }, { id: 'c', label: 'Horizontal point of inflection (since $f\'\'(0)=0$)' }],
        'a',
        ['$f\'\'(0)=\\dfrac{2-0}{1}=2$, which is positive.'],
        'Local minimum at $(0,0)$ (positive $f\'\'$ means concave up) — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc14a',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Factoring $f\'(x)=3x^2-6x+3=3(x^2-2x+1)$, what is the fully factored form?', 'strategy_selection',
        [{ id: 'a', label: '$3(x-1)^2$' }, { id: 'b', label: '$3(x+1)^2$' }, { id: 'c', label: '$3(x-1)(x+1)$' }],
        'a',
        ['$x^2-2x+1$ is a perfect square: $(x-1)^2$.'],
        '$3(x-1)^2$.'),
      mc('S2', 'Setting $3(x-1)^2=0$, what is the stationary $x$-value?', 'execution',
        [{ id: 'a', label: '$x=1$' }, { id: 'b', label: '$x=0$' }, { id: 'c', label: '$x=3$' }],
        'a',
        ['$(x-1)^2=0 \\Rightarrow x-1=0 \\Rightarrow x=1$.'],
        '$x=1$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc31',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', 'For $f(x)=x^3-3x^2+kx+5$ to be increasing for all real $x$, $f\'(x)=3x^2-6x+k$ must be $\\geq0$ everywhere. Since this is an upward parabola (in $x$), what condition on its discriminant ensures it never dips below zero?', 'strategy_selection',
        [{ id: 'a', label: 'Discriminant $\\leq0$' }, { id: 'b', label: 'Discriminant $\\geq0$' }, { id: 'c', label: 'Discriminant $=0$ only' }],
        'a',
        ['An upward parabola stays $\\geq0$ everywhere exactly when it has at most one real root — that\'s discriminant $\\leq0$.'],
        'Discriminant $\\leq0$.'),
      mc('S2', 'The discriminant of $3x^2-6x+k$ is $(-6)^2-4(3)(k)=36-12k$. Solving $36-12k\\leq0$ for $k$, what do you get?', 'execution',
        [{ id: 'a', label: '$k\\geq3$' }, { id: 'b', label: '$k\\leq3$' }, { id: 'c', label: '$k\\geq12$' }],
        'a',
        ['$36\\leq12k \\Rightarrow 3\\leq k$, i.e. $k\\geq3$.'],
        '$k\\geq3$ — select this from the options next.'),
    ],
  },
  {
    id: 'cra2023-q27b',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', 'Evaluating $f(5)=3(5)\\left(1-\\tfrac54\\right)^3+1$ and $f(6)=3(6)\\left(1-\\tfrac64\\right)^3+1$, what are their signs?', 'execution',
        [{ id: 'a', label: '$f(5)=\\dfrac{49}{64}>0$ and $f(6)=-\\dfrac54<0$' }, { id: 'b', label: '$f(5)<0$ and $f(6)>0$' }, { id: 'c', label: 'Both are positive' }],
        'a',
        ['$\\left(1-\\tfrac54\\right)^3=\\left(-\\tfrac14\\right)^3=-\\tfrac{1}{64}$, so $f(5)=15\\times\\left(-\\tfrac{1}{64}\\right)+1=\\tfrac{49}{64}$. $\\left(1-\\tfrac64\\right)^3=\\left(-\\tfrac12\\right)^3=-\\tfrac18$, so $f(6)=18\\times\\left(-\\tfrac18\\right)+1=-\\tfrac54$.'],
        '$f(5)=\\dfrac{49}{64}>0$ and $f(6)=-\\dfrac54<0$.'),
      mc('S2', 'Since $f$ is a continuous function and its sign changes between $x=5$ and $x=6$, which principle guarantees the graph must cross the $x$-axis somewhere in that interval?', 'strategy_selection',
        [{ id: 'a', label: 'A continuous function that changes sign must pass through zero somewhere in between (Intermediate Value Theorem)' }, { id: 'b', label: 'The derivative must be zero somewhere in the interval' }, { id: 'c', label: 'Nothing can be concluded without more information' }],
        'a',
        ['You can\'t jump from positive to negative without crossing zero if the function has no breaks (jumps or asymptotes) — that\'s the core idea behind this "sign change" argument.'],
        'Since $f$ is continuous and changes from positive to negative between $x=5$ and $x=6$, it must cross the $x$-axis at least once in that interval — select this from the options next.'),
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
