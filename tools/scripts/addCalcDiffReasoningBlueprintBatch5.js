#!/usr/bin/env node
/**
 * CALC-DIFF-01 batch 5 (2026-08-15, same day) — 8 more questions, 4 from
 * the "similar questions" companion set (cths2020s-*, girr2020-*s), which
 * turn out to be genuinely distinct questions (own numbers), not exam
 * duplicates, so they're fair game for their own blueprints.
 *
 * IMPORTANT FINDING while scoping this batch: the exact same
 * equivalent-option-ambiguity bug already flagged on bar2020-q11bi and
 * bbhs2020-18a (two MC options that are textually different but
 * algebraically/rendered identical) shows up AGAIN on:
 *   - girr2020-mc16s: options (b) "e^{-2x}(\cos x - 2\sin x)" and (c)
 *     "e^{-2x}(-2\sin x + \cos x)" are the same expression, terms
 *     reordered. Marked answer is (c). SKIPPED, not built on.
 *   - cths2020s-q25 AND (more concerning) the already-enriched
 *     cths2020-q25 from batch 4: options use \dfrac{1}{6} vs \frac{1}{6}
 *     (or \dfrac{1}{10} vs \frac{1}{10} for the s-variant) — different
 *     LaTeX macro, IDENTICAL rendered value — on two of the four options.
 *     cths2020-q25's reasoning blueprint (already live) only scaffolds
 *     part (a)'s derivative, which is unaffected and still correct: this
 *     note is about the FINAL multiple-choice answer for that question,
 *     a pre-existing bug not introduced by the reasoning-blueprint work.
 *     Not fixed here — same bug class as the other two, flagged for
 *     whichever audit pass covers equivalent-option ambiguity.
 *   cths2020s-q25 itself is skipped from this batch entirely (don't want
 *   to build on top of a question whose own graded answer is ambiguous).
 *
 * All correct answers/values independently re-verified before authoring:
 *  - abb2020-q11eii (teacher_review, "hence" from abb2020-q11ei's
 *    d²y/dx²=3x²+2): 3x²≥0 for all real x, so d²y/dx²=3x²+2≥2.
 *  - abb2020-q15ai (teacher_review): y=e^{-x²}, y'=-2xe^{-x²}. y''=
 *    d/dx[-2xe^{-x²}] (product rule, u=-2x,u'=-2,v=e^{-x²},v'=-2xe^{-x²})
 *    = -2e^{-x²}+4x²e^{-x²} = e^{-x²}(4x²-2) = 4e^{-x²}(x²-1/2). Matches.
 *  - bar2020-q16ai (teacher_review): N=Ae^{-kt}, dN/dt=-kAe^{-kt}=-kN.
 *  - baulko2020-q11ei (teacher_review): sec²x=(cosx)^{-2},
 *    d/dx[(cosx)^{-2}]=-2(cosx)^{-3}(-sinx)=2sinx/cos³x=2tanx sec²x.
 *  - cths2020s-mc5: f=4x³(3-x)², f'=12x²(3-x)²-8x³(3-x)=4x²(3-x)(9-5x).
 *    Matches.
 *  - girr2020-mc9s: y=e^{sinx}, y'=cosx·e^{sinx}. Matches.
 *  - girr2020-mc26as: y=x²e^{2x}, y'=2xe^{2x}+2x²e^{2x}=e^{2x}(2x+2x²).
 *    Matches.
 *  - cths2020s-q14: d/dx[x²tan3x]=2xtan3x+3x²sec²3x=x(2tan3x+3xsec²3x).
 *    Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcDiffReasoningBlueprintBatch5.js
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
    id: 'abb2020-q11eii',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', 'You already found $\\dfrac{d^2y}{dx^2}=3x^2+2$. To show it\'s always $\\geq 2$, what do you know about $3x^2$ for every real $x$?', 'recognition',
        [{ id: 'a', label: '$3x^2 \\geq 0$ for all real $x$' }, { id: 'b', label: '$3x^2 \\leq 0$ for all real $x$' }, { id: 'c', label: '$3x^2$ is always strictly positive (never $0$)' }],
        'a',
        ['A square is never negative — but it CAN equal $0$ (at $x=0$), so "always positive" is too strong.'],
        '$3x^2 \\geq 0$ for all real $x$ (equal to $0$ only at $x=0$).'),
      mc('S2', 'If $3x^2 \\geq 0$, what is the smallest possible value of $3x^2+2$?', 'verification',
        [{ id: 'a', label: '$2$ (when $x=0$)' }, { id: 'b', label: '$0$' }, { id: 'c', label: 'There is no smallest value' }],
        'a',
        ['Adding $2$ to something that\'s at least $0$ gives something that\'s at least $2$.'],
        'The minimum of $3x^2+2$ is $2$, reached at $x=0$ — so $\\dfrac{d^2y}{dx^2}\\geq2$ for all $x$. Now write the full proof.'),
    ],
  },
  {
    id: 'abb2020-q15ai',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', 'You\'re given $y\'=-2xe^{-x^2}$. To find $y\'\'$, this is a PRODUCT with $u=-2x$ ($u\'=-2$) and $v=e^{-x^2}$. What is $v\'$ (chain rule)?', 'strategy_selection',
        [{ id: 'a', label: '$-2xe^{-x^2}$' }, { id: 'b', label: '$e^{-x^2}$' }, { id: 'c', label: '$-x^2e^{-x^2}$' }],
        'a',
        ['$e^{-x^2}$ is $e^u$ with $u=-x^2$, $u\'=-2x$ — don\'t drop this inner-derivative factor.'],
        '$v\' = -2xe^{-x^2}$ (the same chain rule used to find $y\'$ in the first place).'),
      mc('S2', 'Applying $u\'v+uv\' = -2e^{-x^2} + (-2x)(-2xe^{-x^2})$, which simplifies to $e^{-x^2}(4x^2-2)$. Factoring out $4$, what matches the form $4e^{-x^2}(x^2-c)$?', 'verification',
        [{ id: 'a', label: '$c = \\dfrac12$' }, { id: 'b', label: '$c = -\\dfrac12$' }, { id: 'c', label: '$c = 2$' }],
        'a',
        ['$4x^2-2 = 4\\left(x^2-\\dfrac12\\right)$ — divide both terms by $4$.'],
        '$e^{-x^2}(4x^2-2) = 4e^{-x^2}\\left(x^2-\\dfrac12\\right)$ — now write the full proof.'),
    ],
  },
  {
    id: 'bar2020-q16ai',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', 'Differentiating $N=Ae^{-kt}$ with respect to $t$ (chain rule, inner derivative of $-kt$ is $-k$), what is $\\dfrac{dN}{dt}$?', 'execution',
        [{ id: 'a', label: '$-kAe^{-kt}$' }, { id: 'b', label: '$kAe^{-kt}$' }, { id: 'c', label: '$Ae^{-kt}$' }],
        'a',
        ['$A$ is a constant multiplier; only the $e^{-kt}$ part changes, bringing down a factor of $-k$.'],
        '$\\dfrac{dN}{dt} = -kAe^{-kt}$.'),
      mc('S2', 'Since $N=Ae^{-kt}$, how can $-kAe^{-kt}$ be rewritten using $N$?', 'verification',
        [{ id: 'a', label: '$-kN$' }, { id: 'b', label: '$kN$' }, { id: 'c', label: '$-\\dfrac{N}{k}$' }],
        'a',
        ['$Ae^{-kt}$ is exactly $N$ — substitute it directly.'],
        '$-kAe^{-kt} = -k(Ae^{-kt}) = -kN$, matching the given equation exactly — now write the full proof.'),
    ],
  },
  {
    id: 'baulko2020-q11ei',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', 'Writing $\\sec^2 x$ as $(\\cos x)^{-2}$, which rule applies to differentiate it?', 'strategy_selection',
        [{ id: 'a', label: 'Chain rule, with outer power $-2$ and inner function $\\cos x$' }, { id: 'b', label: 'Product rule' }, { id: 'c', label: 'Quotient rule' }],
        'a',
        ['$(\\cos x)^{-2}$ is one function ($\\cos x$) raised to a power — that\'s a composition, needing the chain rule.'],
        'It\'s $u^{-2}$ with $u=\\cos x$ — chain rule.'),
      mc('S2', 'Applying $\\dfrac{d}{dx}[(\\cos x)^{-2}] = -2(\\cos x)^{-3}\\times(-\\sin x)$, then rewriting using $\\dfrac{\\sin x}{\\cos x}=\\tan x$ and $\\dfrac{1}{\\cos^2 x}=\\sec^2 x$, what does it simplify to?', 'verification',
        [{ id: 'a', label: '$2\\tan x\\sec^2 x$' }, { id: 'b', label: '$-2\\tan x\\sec^2 x$' }, { id: 'c', label: '$2\\tan x$' }],
        'a',
        ['The two negative signs (from the $-2$ power rule and from $\\dfrac{d}{dx}[\\cos x]=-\\sin x$) cancel to give a positive result.'],
        '$-2(\\cos x)^{-3}(-\\sin x) = \\dfrac{2\\sin x}{\\cos^3 x} = 2\\cdot\\dfrac{\\sin x}{\\cos x}\\cdot\\dfrac{1}{\\cos^2 x} = 2\\tan x\\sec^2 x$ — now write the full proof.'),
    ],
  },
  {
    id: 'cths2020s-mc5',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', '$f(x)=4x^3(3-x)^2$ needs which combination of rules?', 'recognition',
        [{ id: 'a', label: 'Product rule (for the two factors) AND chain rule (to differentiate $(3-x)^2$)' }, { id: 'b', label: 'Product rule only' }, { id: 'c', label: 'Chain rule only' }],
        'a',
        ['Two multiplied factors need the product rule; $(3-x)^2$ (a power of an inner expression) needs the chain rule inside that.'],
        'Product rule for the two factors, chain rule for $(3-x)^2$.'),
      mc('S2', 'With $u=4x^3$ ($u\'=12x^2$) and $v=(3-x)^2$ ($v\'=-2(3-x)$, chain rule), applying $u\'v+uv\'$ gives which expression before simplifying?', 'execution',
        [{ id: 'a', label: '$12x^2(3-x)^2 - 8x^3(3-x)$' }, { id: 'b', label: '$12x^2(3-x)^2 + 8x^3(3-x)$' }, { id: 'c', label: '$12x^2(3-x) - 8x^3(3-x)^2$' }],
        'a',
        ['$v\'=-2(3-x)$ is already negative, so $uv\'$ contributes a negative term.'],
        '$12x^2(3-x)^2 - 8x^3(3-x)$, which factorises to $4x^2(3-x)[3(3-x)-2x] = 4x^2(3-x)(9-5x)$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc9s',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', '$y=e^{\\sin x}$ is $e^u$ with $u=\\sin x$. What is $u\'$?', 'strategy_selection',
        [{ id: 'a', label: '$\\cos x$' }, { id: 'b', label: '$-\\cos x$' }, { id: 'c', label: '$\\sin x$' }],
        'a',
        ['A standard derivative: $\\dfrac{d}{dx}[\\sin x] = \\cos x$.'],
        '$u\' = \\cos x$.'),
      mc('S2', 'Applying $\\dfrac{d}{dx}[e^u] = e^u \\times u\'$, what is $\\dfrac{dy}{dx}$?', 'execution',
        [{ id: 'a', label: '$\\cos x \\cdot e^{\\sin x}$' }, { id: 'b', label: '$\\sin x \\cdot e^{\\sin x}$' }, { id: 'c', label: '$e^{\\sin x}$' }],
        'a',
        ['Don\'t drop the inner-derivative factor $u\'=\\cos x$.'],
        '$\\cos x \\cdot e^{\\sin x}$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc26as',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$y=x^2e^{2x}$ is a product with $u=x^2$ ($u\'=2x$) and $v=e^{2x}$ ($v\'=2e^{2x}$, chain rule). Applying $u\'v+uv\'$, which matches before factorising?', 'strategy_selection',
        [{ id: 'a', label: '$2xe^{2x} + 2x^2e^{2x}$' }, { id: 'b', label: '$2xe^{2x} - 2x^2e^{2x}$' }, { id: 'c', label: '$2xe^{2x} + x^2e^{2x}$' }],
        'a',
        ['$u\'v=2xe^{2x}$ and $uv\'=x^2\\times2e^{2x}=2x^2e^{2x}$ — added, and don\'t drop the $2$ from $v\'$.'],
        '$2xe^{2x} + 2x^2e^{2x}$.'),
      mc('S2', 'Factoring out the common $e^{2x}$, which matches?', 'verification',
        [{ id: 'a', label: '$e^{2x}(2x+2x^2)$' }, { id: 'b', label: '$e^{2x}(2x+x^2)$' }, { id: 'c', label: '$e^{2x}(x+x^2)$' }],
        'a',
        ['$2xe^{2x}=e^{2x}(2x)$ and $2x^2e^{2x}=e^{2x}(2x^2)$ — keep both coefficients.'],
        '$e^{2x}(2x+2x^2)$ — select this from the options next.'),
    ],
  },
  {
    id: 'cths2020s-q14',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', '$x^2\\tan 3x$ is a product with $u=x^2$ ($u\'=2x$) and $v=\\tan 3x$ ($v\'=3\\sec^2 3x$, chain rule). Applying $u\'v+uv\'$, which matches before factorising?', 'strategy_selection',
        [{ id: 'a', label: '$2x\\tan 3x + 3x^2\\sec^2 3x$' }, { id: 'b', label: '$2x\\tan 3x - 3x^2\\sec^2 3x$' }, { id: 'c', label: '$2x\\sec^2 3x + 3x^2\\tan 3x$' }],
        'a',
        ['$u\'v=2x\\tan3x$ and $uv\'=x^2\\times3\\sec^23x=3x^2\\sec^23x$ — added, keep $\\tan$/$\\sec^2$ each attached to the right term.'],
        '$2x\\tan 3x + 3x^2\\sec^2 3x$.'),
      mc('S2', 'Factoring out the common $x$, which matches?', 'verification',
        [{ id: 'a', label: '$x(2\\tan 3x + 3x\\sec^2 3x)$' }, { id: 'b', label: '$x(2\\tan 3x + 3\\sec^2 3x)$' }, { id: 'c', label: '$x^2(2\\tan 3x + 3x\\sec^2 3x)$' }],
        'a',
        ['$2x\\tan3x=x(2\\tan3x)$ and $3x^2\\sec^23x=x(3x\\sec^23x)$ — keep the leftover $x$ inside the second term.'],
        '$x(2\\tan 3x + 3x\\sec^2 3x)$ — select this from the options next.'),
    ],
  },
];

async function main() {
  const touchedChapters = new Set();
  for (const { id, reasoning_blueprint, requireAnswer, requireType } of QUESTIONS) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} — origin:'teacher'.`); continue; }
    if (requireAnswer && data.answer !== requireAnswer) {
      console.warn(`SKIP ${id} — answer is '${data.answer}', expected '${requireAnswer}'. Not building steps on top of unverified content.`);
      continue;
    }
    if (requireType && data.type !== requireType) {
      console.warn(`SKIP ${id} — type is '${data.type}', expected '${requireType}'.`);
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
