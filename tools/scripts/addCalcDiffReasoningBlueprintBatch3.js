#!/usr/bin/env node
/**
 * CALC-DIFF-01 batch 3 (2026-08-15, same day) — 8 more questions. While
 * scoping this batch, found 3 dnaId misclassifications (fixed separately
 * in fixCalcDiffDnaMisclassification.js): bar2020-q12a and dane2020-mc10
 * are pure integration questions (→ CALC-INT-01), fortst2020-q8 tests
 * forming a normal-line equation (→ CALC-TAN-01) — none of the 3 are
 * built on here. Also skipped bbhs2020-18a (option (a) states the exact
 * same correct result as the marked-correct option (d), just with a
 * stray leading "-" and \frac vs \dfrac — an equivalent-option ambiguity
 * like bar2020-q11bi, not fixed here) and cths2020-mc5 (identical
 * question to abb2020-mc6, already covered in the pilot — skipped for
 * skill-coverage diversity, not because it's broken).
 *
 * All correct answers/values independently re-verified before authoring:
 *  - car2020-q25: y=x sin2x, y'=2x cos2x + sin2x (product rule). Matches.
 *  - car2020-q27: y=e^x/(x+1), y'=xe^x/(x+1)^2 (quotient rule,
 *    [e^x(x+1)-e^x]/(x+1)^2 = xe^x/(x+1)^2). Matches.
 *  - baulko2020-q11ai: y=(4x-5)(4x+5)=16x^2-25, y'=32x. Matches.
 *  - baulko2020-q11aii: y=sin^2 x, y'=2sinx cosx=sin2x. Matches.
 *  - bbhs2020-14a: y=tan^3(x/4), y'=3tan^2(x/4)sec^2(x/4)(1/4) =
 *    (3/4)sec^2(x/4)tan^2(x/4). Matches.
 *  - cths2020-q14: d/dx[x^3 tan2x] = 3x^2 tan2x + x^3*2sec^2 2x =
 *    x^2(3tan2x+2x sec^2 2x). Matches.
 *  - fortst2020-q2b: tanx cosx = sinx (identity simplification first),
 *    d/dx[sinx] = cosx. Matches.
 *  - fortst2020-q2c: log_4(x^2+3) = ln(x^2+3)/ln4 = ln(x^2+3)/(2ln2),
 *    derivative = 2x/((x^2+3)*2ln2) = x/((x^2+3)ln2). Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcDiffReasoningBlueprintBatch3.js
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
    id: 'car2020-q25',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$y=x\\sin 2x$ is a product with $u=x$ ($u\'=1$) and $v=\\sin 2x$ ($v\'=2\\cos 2x$, chain rule). Applying $u\'v+uv\'$, which expression matches?', 'strategy_selection',
        [{ id: 'a', label: '$\\sin 2x + 2x\\cos 2x$' }, { id: 'b', label: '$\\sin 2x - 2x\\cos 2x$' }, { id: 'c', label: '$x\\sin 2x + \\cos 2x$' }],
        'a',
        ['$u\'v = 1 \\times \\sin 2x = \\sin 2x$, and $uv\' = x \\times 2\\cos 2x = 2x\\cos 2x$ — added, not subtracted.'],
        '$\\sin 2x + 2x\\cos 2x$ — written in the usual order, $2x\\cos 2x + \\sin 2x$.'),
      mc('S2', 'Double-check: does the $v\'$ term need the chain-rule factor of $2$ from differentiating $\\sin 2x$?', 'verification',
        [{ id: 'a', label: 'Yes — $\\dfrac{d}{dx}[\\sin 2x] = 2\\cos 2x$, the inner derivative of $2x$ is $2$' }, { id: 'b', label: 'No — $\\dfrac{d}{dx}[\\sin 2x] = \\cos 2x$, same as $\\sin x \\to \\cos x$' }],
        'a',
        ['$\\sin(2x)$ has an inner function $2x$ — always check for a chain-rule factor whenever the angle isn\'t just plain $x$.'],
        'Yes — dropping the factor of $2$ (giving $x\\cos 2x + \\sin 2x$) is the most common mistake on this question.'),
    ],
  },
  {
    id: 'car2020-q27',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$y=\\dfrac{e^x}{x+1}$ is a quotient with $u=e^x$, $v=x+1$. Applying $\\dfrac{u\'v-uv\'}{v^2}$, which expression matches (before simplifying)?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{e^x(x+1) - e^x}{(x+1)^2}$' }, { id: 'b', label: '$\\dfrac{e^x(x+1) + e^x}{(x+1)^2}$' }, { id: 'c', label: '$\\dfrac{e^x(x+1) - e^x}{x+1}$' }],
        'a',
        ['$u\'=e^x$ (same as $u$), $v=x+1$, $v\'=1$, so $uv\' = e^x \\times 1 = e^x$ — subtracted, and the denominator is squared.'],
        '$\\dfrac{e^x(x+1)-e^x}{(x+1)^2}$.'),
      mc('S2', 'Expanding the numerator $e^x(x+1)-e^x = xe^x+e^x-e^x$, what does it simplify to?', 'execution',
        [{ id: 'a', label: '$xe^x$' }, { id: 'b', label: '$xe^x + 2e^x$' }, { id: 'c', label: '$e^x$' }],
        'a',
        ['The two $e^x$ terms (one from expanding, one being subtracted) cancel completely.'],
        '$xe^x+e^x-e^x = xe^x$, giving $\\dfrac{xe^x}{(x+1)^2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q11ai',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Before differentiating $y=(4x-5)(4x+5)$, what does expanding it give?', 'strategy_selection',
        [{ id: 'a', label: '$16x^2 - 25$' }, { id: 'b', label: '$16x^2 + 25$' }, { id: 'c', label: '$16x^2 - 40x - 25$' }],
        'a',
        ['$(4x-5)(4x+5)$ is a difference-of-squares pattern: $(a-b)(a+b)=a^2-b^2$ with $a=4x$, $b=5$.'],
        '$(4x)^2 - (5)^2 = 16x^2-25$ — expanding first turns this into a one-line power-rule differentiation instead of a product rule.'),
      mc('S2', 'Differentiating $y=16x^2-25$, what is $\\dfrac{dy}{dx}$?', 'execution',
        [{ id: 'a', label: '$32x$' }, { id: 'b', label: '$16x$' }, { id: 'c', label: '$32x - 25$' }],
        'a',
        ['Power rule on $16x^2$: bring down the $2$, giving $32x$. The constant $-25$ differentiates to $0$.'],
        '$32x$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q11aii',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$y=\\sin^2 x$ is $(\\sin x)^2$, a composition. Using the chain rule with $u=\\sin x$ ($u\'=\\cos x$), $y=u^2$, what is $\\dfrac{dy}{dx}$ before simplifying?', 'strategy_selection',
        [{ id: 'a', label: '$2\\sin x \\cos x$' }, { id: 'b', label: '$2\\sin x$' }, { id: 'c', label: '$\\cos^2 x$' }],
        'a',
        ['$\\dfrac{d}{dx}[u^2] = 2u \\times u\'$, with $u=\\sin x$ and $u\'=\\cos x$.'],
        '$2u \\times u\' = 2\\sin x \\cos x$.'),
      mc('S2', 'Using the double-angle identity $2\\sin x\\cos x = \\sin 2x$, what does $2\\sin x\\cos x$ simplify to?', 'verification',
        [{ id: 'a', label: '$\\sin 2x$' }, { id: 'b', label: '$\\cos 2x$' }, { id: 'c', label: '$2\\sin 2x$' }],
        'a',
        ['This is exactly the double-angle formula $\\sin 2x = 2\\sin x \\cos x$, read right to left.'],
        '$2\\sin x\\cos x = \\sin 2x$ — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-14a',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$y=\\tan^3\\left(\\dfrac{x}{4}\\right)$ is $u^3$ with $u=\\tan\\left(\\dfrac{x}{4}\\right)$. Using $\\dfrac{d}{dx}[u^3]=3u^2 u\'$, and $u\'=\\dfrac14\\sec^2\\left(\\dfrac{x}{4}\\right)$ (chain rule on the $x/4$ inside), what is $\\dfrac{dy}{dx}$ before simplifying?', 'strategy_selection',
        [{ id: 'a', label: '$3\\tan^2\\left(\\dfrac{x}{4}\\right) \\times \\dfrac14\\sec^2\\left(\\dfrac{x}{4}\\right)$' }, { id: 'b', label: '$3\\tan^2\\left(\\dfrac{x}{4}\\right) \\times \\sec^2\\left(\\dfrac{x}{4}\\right)$' }, { id: 'c', label: '$\\tan^2\\left(\\dfrac{x}{4}\\right) \\times \\dfrac14\\sec^2\\left(\\dfrac{x}{4}\\right)$' }],
        'a',
        ['Don\'t drop the $3$ from $3u^2$, and don\'t drop the $\\frac14$ from differentiating the inner $x/4$ — both factors are needed.'],
        '$3\\tan^2\\left(\\dfrac{x}{4}\\right) \\times \\dfrac14\\sec^2\\left(\\dfrac{x}{4}\\right)$.'),
      mc('S2', 'Multiplying the constants $3 \\times \\dfrac14$, what is the simplified coefficient?', 'execution',
        [{ id: 'a', label: '$\\dfrac34$' }, { id: 'b', label: '$3$' }, { id: 'c', label: '$\\dfrac13$' }],
        'a',
        ['$3 \\times \\dfrac14 = \\dfrac34$.'],
        '$\\dfrac34\\sec^2\\left(\\dfrac{x}{4}\\right)\\tan^2\\left(\\dfrac{x}{4}\\right)$ — select this from the options next.'),
    ],
  },
  {
    id: 'cths2020-q14',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', '$x^3\\tan 2x$ is a product with $u=x^3$ ($u\'=3x^2$) and $v=\\tan 2x$ ($v\'=2\\sec^2 2x$, chain rule). Applying $u\'v+uv\'$, which expression matches (before factorising)?', 'strategy_selection',
        [{ id: 'a', label: '$3x^2\\tan 2x + 2x^3\\sec^2 2x$' }, { id: 'b', label: '$3x^2\\tan 2x - 2x^3\\sec^2 2x$' }, { id: 'c', label: '$3x^2\\sec^2 2x + 2x^3\\tan 2x$' }],
        'a',
        ['$u\'v = 3x^2\\tan 2x$ and $uv\' = x^3 \\times 2\\sec^2 2x = 2x^3\\sec^2 2x$ — added, and keep $\\tan$/$\\sec^2$ each attached to the right term.'],
        '$3x^2\\tan 2x + 2x^3\\sec^2 2x$.'),
      mc('S2', 'Factoring out the common $x^2$, which matches?', 'verification',
        [{ id: 'a', label: '$x^2(3\\tan 2x + 2x\\sec^2 2x)$' }, { id: 'b', label: '$x^2(3\\tan 2x + 2\\sec^2 2x)$' }, { id: 'c', label: '$x(3\\tan 2x + 2x\\sec^2 2x)$' }],
        'a',
        ['$3x^2\\tan 2x = x^2(3\\tan 2x)$ and $2x^3\\sec^2 2x = x^2(2x\\sec^2 2x)$ — keep the leftover $x$ inside the second term.'],
        '$x^2(3\\tan 2x + 2x\\sec^2 2x)$ — select this from the options next.'),
    ],
  },
  {
    id: 'fortst2020-q2b',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Before differentiating $\\tan x\\cos x$, simplify it using $\\tan x = \\dfrac{\\sin x}{\\cos x}$. What does $\\tan x \\cos x$ simplify to?', 'strategy_selection',
        [{ id: 'a', label: '$\\sin x$' }, { id: 'b', label: '$\\cos x$' }, { id: 'c', label: '$1$' }],
        'a',
        ['$\\dfrac{\\sin x}{\\cos x} \\times \\cos x$ — the $\\cos x$ factors cancel.'],
        '$\\tan x\\cos x = \\dfrac{\\sin x}{\\cos x}\\times\\cos x = \\sin x$ — simplify BEFORE differentiating, it turns a product-rule question into a one-line derivative.'),
      mc('S2', 'Differentiating $y=\\sin x$, what is $\\dfrac{dy}{dx}$?', 'execution',
        [{ id: 'a', label: '$\\cos x$' }, { id: 'b', label: '$-\\cos x$' }, { id: 'c', label: '$\\sin x$' }],
        'a',
        ['A standard derivative to know directly: $\\dfrac{d}{dx}[\\sin x] = \\cos x$.'],
        '$\\cos x$ — select this from the options next.'),
    ],
  },
  {
    id: 'fortst2020-q2c',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$\\log_4(x^2+3)$ uses a base of $4$, not $e$. Rewriting with the change-of-base rule $\\log_4 u = \\dfrac{\\ln u}{\\ln 4}$, and using $\\ln 4 = 2\\ln 2$, what does $\\log_4(x^2+3)$ equal?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{\\ln(x^2+3)}{2\\ln 2}$' }, { id: 'b', label: '$\\dfrac{\\ln(x^2+3)}{\\ln 4}$ only (don\'t rewrite $\\ln 4$)' }, { id: 'c', label: '$2\\ln 2 \\times \\ln(x^2+3)$' }],
        'a',
        ['$4=2^2$, so $\\ln 4 = \\ln(2^2) = 2\\ln 2$ — rewriting this way makes the final answer match the given option format.'],
        '$\\log_4(x^2+3) = \\dfrac{\\ln(x^2+3)}{2\\ln 2}$.'),
      mc('S2', 'Differentiating $\\dfrac{\\ln(x^2+3)}{2\\ln 2}$ (a constant $\\dfrac{1}{2\\ln 2}$ times $\\ln(x^2+3)$, chain rule inner derivative $2x$), what is $\\dfrac{dy}{dx}$?', 'execution',
        [{ id: 'a', label: '$\\dfrac{x}{(\\ln 2)(x^2+3)}$' }, { id: 'b', label: '$\\dfrac{2x}{(\\ln 2)(x^2+3)}$' }, { id: 'c', label: '$\\dfrac{x}{(2\\ln 2)(x^2+3)}$' }],
        'a',
        ['$\\dfrac{1}{2\\ln 2} \\times \\dfrac{2x}{x^2+3}$ — the $2$s cancel, leaving just $\\ln 2$ in the denominator.'],
        '$\\dfrac{1}{2\\ln 2}\\times\\dfrac{2x}{x^2+3} = \\dfrac{x}{(\\ln 2)(x^2+3)}$ — select this from the options next.'),
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
