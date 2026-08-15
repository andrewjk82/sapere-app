#!/usr/bin/env node
/**
 * CALC-DIFF-01 batch 4 (2026-08-15, same day) — 8 more questions. Found 4
 * more dnaId misclassifications while scoping this batch (fixed
 * separately in fixCalcDiffDnaMisclassificationBatch2.js): abb2020-q14a
 * and bbhs2020-mc9 are pure complement-rule probability questions with
 * zero calculus content (→ PROB-COMP-01); fortst2020-q19b is an
 * optimisation problem, not plain differentiation (→ CALC-OPT-01);
 * cra2023-q18c is a rates-of-change application (→ CALC-MOTION-01).
 * None of the 4 are built on here.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - car2020-q34: y=tan²x. y'=2tanx sec²x=2tanx(1+tan²x). y''=2sec²x+
 *    6tan²x sec²x=(1+tan²x)(2+6tan²x)=(1+y)(2+6y)=6y²+8y+2 => a=6,b=8.
 *    Matches doc.
 *  - asc2020-q14: f(x)=x/lnx, f'(x)=0 => lnx=1 => x=e. Matches doc.
 *  - bbhs2020-14b: y=(e^{3x}-5)/(x+1), y'=(3xe^{3x}+2e^{3x}+5)/(x+1)²
 *    (quotient rule). Matches doc.
 *  - cths2020-q23: y=e^{3x}/(x+1), y'=e^{3x}(3x+2)/(x+1)² (quotient
 *    rule). Matches doc.
 *  - cths2020-q25: d/dx[ln((3+x)/(3-x))] = 1/(3+x)+1/(3-x) = 6/(9-x²)
 *    (log-quotient split, both derivatives add since d/dx[-ln(3-x)] =
 *    +1/(3-x)). Hence ∫1/(9-x²)dx = (1/6)ln|(3+x)/(3-x)|+C. Matches doc.
 *  - cra2023-q14a: y=(lnx)², y'=2lnx/x (chain rule on u², u=lnx,
 *    u'=1/x). Matches doc.
 *  - cra2023-q31: H'(t)=2f(g(t))f'(g(t))g'(t)=2×5×2×4=80 W/s (chain
 *    rule composition). Matches doc.
 *  - baulko2020-q16cii (teacher_review): f(x)=x²e^{kx}, f'(x)=2xe^{kx}+
 *    kx²e^{kx}=xe^{kx}(2+kx)=xe^{kx}(kx+2) (product rule). Matches doc;
 *    kept teacher_review final type (grandfathered), only added MC
 *    pre-steps, same pattern as the FIN-INTEREST-01 proof questions.
 *
 * Usage:
 *   node tools/scripts/addCalcDiffReasoningBlueprintBatch4.js
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
    id: 'car2020-q34',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'To express $\\dfrac{d^2y}{dx^2}$ purely in terms of $y=\\tan^2 x$, which trig identity do you substitute with?', 'strategy_selection',
        [{ id: 'a', label: '$\\sec^2 x = 1+\\tan^2 x = 1+y$' }, { id: 'b', label: '$\\sec^2 x = \\tan^2 x - 1 = y - 1$' }, { id: 'c', label: '$\\sec^2 x = 1 - \\tan^2 x = 1 - y$' }],
        'a',
        ['The Pythagorean identity is $\\sec^2 x - \\tan^2 x = 1$, rearranged to $\\sec^2 x = 1+\\tan^2 x$.'],
        '$\\sec^2 x = 1+\\tan^2 x = 1+y$ — this lets every $\\sec^2 x$ that appears while differentiating be rewritten purely in $y$.'),
      mc('S2', 'Working through $y\'=2\\tan x\\sec^2 x$ and differentiating again, substituting the identity throughout gives $\\dfrac{d^2y}{dx^2} = 6y^2+8y+2$. Comparing to $ay^2+by+2$, what are $a$ and $b$?', 'verification',
        [{ id: 'a', label: '$a=6,\\ b=8$' }, { id: 'b', label: '$a=8,\\ b=6$' }, { id: 'c', label: '$a=6,\\ b=2$' }],
        'a',
        ['Match each term directly: the $y^2$ coefficient is $a$, the $y$ coefficient is $b$.'],
        '$6y^2+8y+2$ matches $ay^2+by+2$ with $a=6$, $b=8$ — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q14',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$f(x)=\\dfrac{x}{\\ln x}$ is a quotient with $u=x$ ($u\'=1$), $v=\\ln x$ ($v\'=\\dfrac1x$). Applying $\\dfrac{u\'v-uv\'}{v^2}$, which expression matches?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{\\ln x - 1}{(\\ln x)^2}$' }, { id: 'b', label: '$\\dfrac{\\ln x + 1}{(\\ln x)^2}$' }, { id: 'c', label: '$\\dfrac{1 - \\ln x}{(\\ln x)^2}$' }],
        'a',
        ['$u\'v = 1 \\times \\ln x = \\ln x$, and $uv\' = x \\times \\dfrac1x = 1$ — subtracted, giving $\\ln x - 1$ on top.'],
        '$f\'(x) = \\dfrac{\\ln x - 1}{(\\ln x)^2}$.'),
      mc('S2', 'Setting $f\'(x)=0$ means the numerator $\\ln x - 1 = 0$ (the denominator can\'t be zero here). Solving $\\ln x = 1$, what is $x$?', 'execution',
        [{ id: 'a', label: '$x = e$' }, { id: 'b', label: '$x = 1$' }, { id: 'c', label: '$x = \\dfrac{1}{e}$' }],
        'a',
        ['$\\ln x = 1$ means "the power you raise $e$ to, to get $x$, is $1$" — so $x = e^1$.'],
        '$\\ln x = 1 \\Rightarrow x = e$ — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-14b',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$y=\\dfrac{e^{3x}-5}{x+1}$ is a quotient with $u=e^{3x}-5$ ($u\'=3e^{3x}$), $v=x+1$ ($v\'=1$). Applying $\\dfrac{u\'v-uv\'}{v^2}$, which expression matches (before simplifying)?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{3e^{3x}(x+1) - (e^{3x}-5)}{(x+1)^2}$' }, { id: 'b', label: '$\\dfrac{3e^{3x}(x+1) + (e^{3x}-5)}{(x+1)^2}$' }, { id: 'c', label: '$\\dfrac{(e^{3x}-5)(x+1) - 3e^{3x}}{(x+1)^2}$' }],
        'a',
        ['Keep $u\'v$ first, then subtract $uv\'$ — and $u=e^{3x}-5$ keeps its $-5$ throughout.'],
        '$\\dfrac{3e^{3x}(x+1)-(e^{3x}-5)}{(x+1)^2}$.'),
      mc('S2', 'Expanding the numerator $3e^{3x}(x+1)-(e^{3x}-5) = 3xe^{3x}+3e^{3x}-e^{3x}+5$, what does it simplify to?', 'execution',
        [{ id: 'a', label: '$3xe^{3x}+2e^{3x}+5$' }, { id: 'b', label: '$3xe^{3x}+4e^{3x}+5$' }, { id: 'c', label: '$3xe^{3x}+2e^{3x}-5$' }],
        'a',
        ['$3e^{3x}-e^{3x}=2e^{3x}$, and the $-(-5)=+5$ stays positive.'],
        '$3xe^{3x}+2e^{3x}+5$, giving $\\dfrac{3xe^{3x}+2e^{3x}+5}{(x+1)^2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'cths2020-q23',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$y=\\dfrac{e^{3x}}{x+1}$ is a quotient with $u=e^{3x}$ ($u\'=3e^{3x}$), $v=x+1$ ($v\'=1$). Applying $\\dfrac{u\'v-uv\'}{v^2}$, which expression matches (before simplifying)?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{3e^{3x}(x+1) - e^{3x}}{(x+1)^2}$' }, { id: 'b', label: '$\\dfrac{3e^{3x}(x+1) + e^{3x}}{(x+1)^2}$' }, { id: 'c', label: '$\\dfrac{e^{3x}(x+1) - 3e^{3x}}{(x+1)^2}$' }],
        'a',
        ['$u\'v=3e^{3x}(x+1)$, and $uv\'=e^{3x}\\times1=e^{3x}$ — subtracted.'],
        '$\\dfrac{3e^{3x}(x+1)-e^{3x}}{(x+1)^2}$.'),
      mc('S2', 'Expanding the numerator $3e^{3x}(x+1)-e^{3x} = 3xe^{3x}+3e^{3x}-e^{3x}$, and factoring out $e^{3x}$, what does it simplify to?', 'verification',
        [{ id: 'a', label: '$e^{3x}(3x+2)$' }, { id: 'b', label: '$e^{3x}(3x+3)$' }, { id: 'c', label: '$e^{3x}(3x+1)$' }],
        'a',
        ['$3e^{3x}-e^{3x}=2e^{3x}$, so the numerator is $3xe^{3x}+2e^{3x}=e^{3x}(3x+2)$.'],
        '$e^{3x}(3x+2)$, giving $\\dfrac{e^{3x}(3x+2)}{(x+1)^2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'cths2020-q25',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Before differentiating, split $\\ln\\!\\left(\\dfrac{3+x}{3-x}\\right)$ using $\\ln\\!\\left(\\dfrac{a}{b}\\right)=\\ln a - \\ln b$. What do you get?', 'strategy_selection',
        [{ id: 'a', label: '$\\ln(3+x) - \\ln(3-x)$' }, { id: 'b', label: '$\\ln(3+x) + \\ln(3-x)$' }, { id: 'c', label: '$\\dfrac{\\ln(3+x)}{\\ln(3-x)}$' }],
        'a',
        ['The log-quotient rule turns division inside the log into subtraction of two logs — much easier to differentiate term by term.'],
        '$\\ln(3+x) - \\ln(3-x)$.'),
      mc('S2', 'Differentiating term by term: $\\dfrac{d}{dx}[\\ln(3+x)] = \\dfrac{1}{3+x}$, and $\\dfrac{d}{dx}[-\\ln(3-x)] = ?$ (careful — chain rule on the inner $3-x$, whose derivative is $-1$)', 'execution',
        [{ id: 'a', label: '$\\dfrac{1}{3-x}$' }, { id: 'b', label: '$-\\dfrac{1}{3-x}$' }, { id: 'c', label: '$\\dfrac{-1}{3+x}$' }],
        'a',
        ['$\\dfrac{d}{dx}[-\\ln(3-x)] = -\\dfrac{1}{3-x}\\times(-1) = +\\dfrac{1}{3-x}$ — the two negatives (from the leading $-$ and the chain-rule $-1$) cancel.'],
        '$\\dfrac{1}{3-x}$ — so the total derivative is $\\dfrac{1}{3+x}+\\dfrac{1}{3-x} = \\dfrac{6}{9-x^2}$, and "hence" reversing this gives the integral in part (b).'),
    ],
  },
  {
    id: 'cra2023-q14a',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$y=(\\ln x)^2$ is $u^2$ with $u=\\ln x$ ($u\'=\\dfrac1x$). Using $\\dfrac{d}{dx}[u^2]=2u\\,u\'$, what is $\\dfrac{dy}{dx}$ before simplifying?', 'strategy_selection',
        [{ id: 'a', label: '$2\\ln x \\times \\dfrac{1}{x}$' }, { id: 'b', label: '$2\\ln x$' }, { id: 'c', label: '$\\dfrac{2}{x}$' }],
        'a',
        ['Don\'t drop the inner derivative $u\'=\\dfrac1x$ — $2u$ alone is only correct when $u\'=1$.'],
        '$2\\ln x \\times \\dfrac1x$.'),
      mc('S2', 'Simplifying $2\\ln x \\times \\dfrac1x$, what is $\\dfrac{dy}{dx}$?', 'execution',
        [{ id: 'a', label: '$\\dfrac{2\\ln x}{x}$' }, { id: 'b', label: '$\\dfrac{\\ln x}{2x}$' }, { id: 'c', label: '$\\dfrac{2}{x\\ln x}$' }],
        'a',
        ['$2\\ln x$ stays in the numerator, divided by $x$.'],
        '$\\dfrac{2\\ln x}{x}$ — select this from the options next.'),
    ],
  },
  {
    id: 'cra2023-q31',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', '$H(t)=(f(g(t)))^2$ needs the chain rule TWICE — once for the outer square, once for $f(g(t))$ itself. Using $H\'(t)=2f(g(t))\\times\\dfrac{d}{dt}[f(g(t))]$ and $\\dfrac{d}{dt}f(g(t))=f\'(g(t))g\'(t)$, which is the full setup?', 'strategy_selection',
        [{ id: 'a', label: '$H\'(t) = 2f(g(t)) \\times f\'(g(t)) \\times g\'(t)$' }, { id: 'b', label: '$H\'(t) = 2f(g(t)) \\times f\'(g(t))$' }, { id: 'c', label: '$H\'(t) = 2f\'(g(t)) \\times g\'(t)$' }],
        'a',
        ['Every factor from both chain-rule applications must appear — dropping $g\'(t)$ or the leading $f(g(t))$ misses a required factor.'],
        '$H\'(t) = 2f(g(t))\\times f\'(g(t))\\times g\'(t)$.'),
      mc('S2', 'At $t=1$: $g(1)=3$ (given the power output is 3 watts), so $f(g(1))=f(3)=5$ and $f\'(g(1))=f\'(3)=2$; also $g\'(1)=4$ (power increasing at 4 W/s). Substituting all four values, what is $H\'(1)$?', 'execution',
        [{ id: 'a', label: '$2\\times5\\times2\\times4 = 80$' }, { id: 'b', label: '$5\\times2\\times4 = 40$' }, { id: 'c', label: '$2\\times5\\times4 = 40$' }],
        'a',
        ['All four factors ($2$, $f(3)=5$, $f\'(3)=2$, $g\'(1)=4$) must be multiplied together — dropping any one halves the result.'],
        '$2\\times5\\times2\\times4 = 80$ watts per second — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q16cii',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', '$f(x)=x^2e^{kx}$ is a product with $u=x^2$ ($u\'=2x$) and $v=e^{kx}$ ($v\'=ke^{kx}$, chain rule). Applying $u\'v+uv\'$, which expression matches (before factorising)?', 'strategy_selection',
        [{ id: 'a', label: '$2xe^{kx} + kx^2e^{kx}$' }, { id: 'b', label: '$2xe^{kx} - kx^2e^{kx}$' }, { id: 'c', label: '$2x^2e^{kx} + kxe^{kx}$' }],
        'a',
        ['$u\'v=2xe^{kx}$ and $uv\'=x^2\\times ke^{kx}=kx^2e^{kx}$ — added, and keep the powers of $x$ attached to the right term.'],
        '$2xe^{kx} + kx^2e^{kx}$.'),
      mc('S2', 'Factoring out the common $xe^{kx}$, which matches?', 'verification',
        [{ id: 'a', label: '$xe^{kx}(2+kx)$' }, { id: 'b', label: '$xe^{kx}(2+k)$' }, { id: 'c', label: '$x^2e^{kx}(2+k)$' }],
        'a',
        ['$2xe^{kx} = xe^{kx}(2)$ and $kx^2e^{kx} = xe^{kx}(kx)$ — keep the leftover $x$ inside the second term.'],
        '$xe^{kx}(2+kx) = xe^{kx}(kx+2)$ — now write the full proof.'),
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
