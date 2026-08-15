#!/usr/bin/env node
/**
 * CALC-DIFF-01 batch 6 (2026-08-15, same day) — 8 more questions,
 * including 4 that only became buildable this batch because their
 * equivalent-option-ambiguity bugs were just fixed
 * (fixEquivalentOptionAmbiguity.js): bar2020-q11bi, bbhs2020-18a,
 * girr2020-mc16s, cths2020-q25.
 *
 * ANOTHER instance of the same bug class was found and fixed inline while
 * verifying asc2020-q13v before use: options[1] "5(e^{2x}+3)^4·2e^{2x}"
 * was algebraically IDENTICAL to the marked-correct options[2]
 * "10e^{2x}(e^{2x}+3)^4" (just unsimplified) — fixed with a real
 * distractor (forgot the factor of 2 in the chain-rule inner derivative).
 * That's now 6 known instances of this bug class this session.
 *
 * Also fixed a 12th dnaId misclassification while scoping this batch:
 * abb2020-q11eiv asks for a NORMAL line equation (CALC-TAN-01's skill,
 * same pattern as fortst2020-q8), not plain differentiation — see
 * fixAbb11eivDnaMisclassification.js. Not built on here.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - bar2020-q11bi: y=xe^{3x}, y'=e^{3x}(3x+1) (product rule). Matches.
 *  - bbhs2020-18a: d/dx[e^{2x}cosx]=2e^{2x}cosx-e^{2x}sinx=e^{2x}(2cosx-
 *    sinx) (product rule). Matches.
 *  - girr2020-mc16s: y=e^{-2x}sinx, y'=e^{-2x}(-2sinx+cosx) (product
 *    rule). Matches.
 *  - cths2020-q25: d/dx[ln((3+x)/(3-x))]=6/(9-x²) (log-quotient split),
 *    hence ∫1/(9-x²)dx=(1/6)ln|(3+x)/(3-x)|+C. Matches.
 *  - bar2020-mc1v: d/dx[ln(sinx)]=cosx/sinx=cotx (chain rule). Matches.
 *  - asc2020-q13v: (e^{2x}+3)^5, y'=5(e^{2x}+3)^4·2e^{2x}=
 *    10e^{2x}(e^{2x}+3)^4 (chain rule). Matches.
 *  - baulko2020-q11aiv: y=(3x-2)(3x+2)=9x²-4, y'=18x (expand then power
 *    rule). Matches.
 *  - bar2020-q11aav: (5x-2)^4, y'=20(5x-2)^3 (chain rule). Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcDiffReasoningBlueprintBatch6.js
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
    id: 'bar2020-q11bi',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$y=xe^{3x}$ is a product with $u=x$ ($u\'=1$) and $v=e^{3x}$ ($v\'=3e^{3x}$, chain rule). Applying $u\'v+uv\'$, which matches (before factorising)?', 'strategy_selection',
        [{ id: 'a', label: '$e^{3x} + 3xe^{3x}$' }, { id: 'b', label: '$e^{3x}(x+1)$' }, { id: 'c', label: '$e^{3x} - 3xe^{3x}$' }],
        'a',
        ['$u\'v=1\\times e^{3x}=e^{3x}$, and $uv\'=x\\times3e^{3x}=3xe^{3x}$ — added, not subtracted, and keep the factor of $3$ from the chain rule.'],
        '$e^{3x}+3xe^{3x}$, which factorises to $e^{3x}(1+3x)=e^{3x}(3x+1)$.'),
      mc('S2', 'Factoring out the common $e^{3x}$ from $e^{3x}+3xe^{3x}$, which matches?', 'verification',
        [{ id: 'a', label: '$e^{3x}(3x+1)$' }, { id: 'b', label: '$e^{3x}(x+1)$' }, { id: 'c', label: '$3e^{3x}(x+1)$' }],
        'a',
        ['$e^{3x}=e^{3x}(1)$ and $3xe^{3x}=e^{3x}(3x)$ — don\'t drop the coefficient $3$ on the $x$ term.'],
        '$e^{3x}(1+3x)=e^{3x}(3x+1)$ — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-18a',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', '$e^{2x}\\cos x$ is a product with $u=e^{2x}$ ($u\'=2e^{2x}$, chain rule) and $v=\\cos x$ ($v\'=-\\sin x$). Applying $u\'v+uv\'$, which matches?', 'strategy_selection',
        [{ id: 'a', label: '$2e^{2x}\\cos x - e^{2x}\\sin x$' }, { id: 'b', label: '$2e^{2x}\\cos x + e^{2x}\\sin x$' }, { id: 'c', label: '$e^{2x}\\cos x - e^{2x}\\sin x$' }],
        'a',
        ['$u\'v=2e^{2x}\\cos x$, and $uv\'=e^{2x}\\times(-\\sin x)=-e^{2x}\\sin x$ — added, and don\'t drop the factor $2$ on the first term.'],
        '$2e^{2x}\\cos x - e^{2x}\\sin x$.'),
      mc('S2', 'Factoring out the common $e^{2x}$, which matches?', 'verification',
        [{ id: 'a', label: '$e^{2x}(2\\cos x - \\sin x)$' }, { id: 'b', label: '$e^{2x}(2\\cos x + \\sin x)$' }, { id: 'c', label: '$e^{2x}(\\cos x - \\sin x)$' }],
        'a',
        ['$2e^{2x}\\cos x=e^{2x}(2\\cos x)$ and $e^{2x}\\sin x=e^{2x}(\\sin x)$ — keep the coefficient $2$ only on the $\\cos x$ term.'],
        '$e^{2x}(2\\cos x-\\sin x)$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc16s',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$y=e^{-2x}\\sin x$ is a product with $u=e^{-2x}$ ($u\'=-2e^{-2x}$, chain rule) and $v=\\sin x$ ($v\'=\\cos x$). Applying $u\'v+uv\'$, which matches?', 'strategy_selection',
        [{ id: 'a', label: '$-2e^{-2x}\\sin x + e^{-2x}\\cos x$' }, { id: 'b', label: '$-2e^{-2x}\\sin x - e^{-2x}\\cos x$' }, { id: 'c', label: '$-e^{-2x}\\sin x + e^{-2x}\\cos x$' }],
        'a',
        ['$u\'v=-2e^{-2x}\\sin x$, and $uv\'=e^{-2x}\\times\\cos x=e^{-2x}\\cos x$ — added, and don\'t drop the factor $2$ from $u\'$.'],
        '$-2e^{-2x}\\sin x + e^{-2x}\\cos x$.'),
      mc('S2', 'Factoring out the common $e^{-2x}$, which matches?', 'verification',
        [{ id: 'a', label: '$e^{-2x}(-2\\sin x + \\cos x)$' }, { id: 'b', label: '$e^{-2x}(\\cos x - \\sin x)$' }, { id: 'c', label: '$e^{-2x}(2\\sin x + \\cos x)$' }],
        'a',
        ['Keep the coefficient $2$ only on the $\\sin x$ term, and keep its negative sign.'],
        '$e^{-2x}(-2\\sin x+\\cos x)$ — select this from the options next.'),
    ],
  },
  {
    id: 'cths2020-q25',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Before differentiating, split $\\ln\\!\\left(\\dfrac{3+x}{3-x}\\right)$ using $\\ln\\!\\left(\\dfrac{a}{b}\\right)=\\ln a - \\ln b$. What do you get?', 'strategy_selection',
        [{ id: 'a', label: '$\\ln(3+x) - \\ln(3-x)$' }, { id: 'b', label: '$\\ln(3+x) + \\ln(3-x)$' }, { id: 'c', label: '$\\dfrac{\\ln(3+x)}{\\ln(3-x)}$' }],
        'a',
        ['The log-quotient rule turns division inside the log into subtraction of two logs.'],
        '$\\ln(3+x) - \\ln(3-x)$.'),
      mc('S2', 'Differentiating term by term: $\\dfrac{d}{dx}[\\ln(3+x)]=\\dfrac{1}{3+x}$, and $\\dfrac{d}{dx}[-\\ln(3-x)]=?$ (chain rule on the inner $3-x$, whose derivative is $-1$)', 'execution',
        [{ id: 'a', label: '$\\dfrac{1}{3-x}$' }, { id: 'b', label: '$-\\dfrac{1}{3-x}$' }, { id: 'c', label: '$\\dfrac{-1}{3+x}$' }],
        'a',
        ['$-\\dfrac{1}{3-x}\\times(-1)=+\\dfrac{1}{3-x}$ — the two negatives cancel.'],
        '$\\dfrac{1}{3-x}$ — so the total is $\\dfrac{1}{3+x}+\\dfrac{1}{3-x}=\\dfrac{6}{9-x^2}$, and "hence" reversing this gives part (b)\'s integral.'),
    ],
  },
  {
    id: 'bar2020-mc1v',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$\\ln(\\sin x)$ is $\\ln(u)$ with $u=\\sin x$. The chain rule gives $\\dfrac{1}{u}\\times u\'$. What is $u\'$?', 'strategy_selection',
        [{ id: 'a', label: '$\\cos x$' }, { id: 'b', label: '$-\\cos x$' }, { id: 'c', label: '$-\\sin x$' }],
        'a',
        ['$\\dfrac{d}{dx}[\\sin x]=\\cos x$ — a standard derivative.'],
        '$u\'=\\cos x$.'),
      mc('S2', 'Substituting into $\\dfrac{1}{u}\\times u\'=\\dfrac{1}{\\sin x}\\times\\cos x$, which simplifies to?', 'execution',
        [{ id: 'a', label: '$\\cot x$' }, { id: 'b', label: '$\\tan x$' }, { id: 'c', label: '$-\\cot x$' }],
        'a',
        ['$\\dfrac{\\cos x}{\\sin x}=\\cot x$.'],
        '$\\dfrac{\\cos x}{\\sin x}=\\cot x$ — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q13v',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$(e^{2x}+3)^5$ is an outer power-of-5 wrapped around inner $g(x)=e^{2x}+3$. What is $g\'(x)$?', 'strategy_selection',
        [{ id: 'a', label: '$2e^{2x}$' }, { id: 'b', label: '$e^{2x}$' }, { id: 'c', label: '$5e^{2x}$' }],
        'a',
        ['$\\dfrac{d}{dx}[e^{2x}]=2e^{2x}$ (chain rule); the derivative of the constant $3$ is $0$.'],
        '$g\'(x)=2e^{2x}$.'),
      mc('S2', 'Applying the chain rule $5(e^{2x}+3)^4\\times g\'(x)$ and simplifying $5\\times2=10$, what is the fully simplified derivative?', 'execution',
        [{ id: 'a', label: '$10e^{2x}(e^{2x}+3)^4$' }, { id: 'b', label: '$5e^{2x}(e^{2x}+3)^4$' }, { id: 'c', label: '$5(e^{2x}+3)^4$' }],
        'a',
        ['Don\'t drop either factor — the $5$ from the outer power AND the $2$ from the inner derivative both need to be there, multiplied together.'],
        '$5(e^{2x}+3)^4\\times2e^{2x}=10e^{2x}(e^{2x}+3)^4$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q11aiv',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Before differentiating $y=(3x-2)(3x+2)$, what does expanding it give?', 'strategy_selection',
        [{ id: 'a', label: '$9x^2-4$' }, { id: 'b', label: '$9x^2+4$' }, { id: 'c', label: '$9x^2-6x-4$' }],
        'a',
        ['This is a difference-of-squares pattern: $(a-b)(a+b)=a^2-b^2$ with $a=3x$, $b=2$.'],
        '$(3x)^2-(2)^2=9x^2-4$ — expanding first turns this into a one-line power-rule differentiation.'),
      mc('S2', 'Differentiating $y=9x^2-4$, what is $\\dfrac{dy}{dx}$?', 'execution',
        [{ id: 'a', label: '$18x$' }, { id: 'b', label: '$9x$' }, { id: 'c', label: '$18x-4$' }],
        'a',
        ['Power rule on $9x^2$: bring down the $2$, giving $18x$. The constant $-4$ differentiates to $0$.'],
        '$18x$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q11aav',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$(5x-2)^4$ is an outer power-of-4 wrapped around inner $g(x)=5x-2$. What is $g\'(x)$?', 'strategy_selection',
        [{ id: 'a', label: '$5$' }, { id: 'b', label: '$4$' }, { id: 'c', label: '$-2$' }],
        'a',
        ['$\\dfrac{d}{dx}[5x-2]=5$ — the derivative of the constant $-2$ is $0$.'],
        '$g\'(x)=5$.'),
      mc('S2', 'Applying the chain rule $4(5x-2)^3\\times g\'(x)$, substituting $g\'(x)=5$, what is the derivative?', 'execution',
        [{ id: 'a', label: '$20(5x-2)^3$' }, { id: 'b', label: '$4(5x-2)^3$' }, { id: 'c', label: '$20(5x-2)^4$' }],
        'a',
        ['$4\\times5=20$ — multiply by the inner derivative, don\'t change the power on $(5x-2)$.'],
        '$4(5x-2)^3\\times5=20(5x-2)^3$ — select this from the options next.'),
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
