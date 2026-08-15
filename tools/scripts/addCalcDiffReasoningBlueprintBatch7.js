#!/usr/bin/env node
/**
 * CALC-DIFF-01 batch 7 (2026-08-15, same day) — 8 more questions. Found
 * 2 more equivalent-option-ambiguity bugs (7th/8th this session) and 2
 * more dnaId misclassifications (13th/14th) while scoping this batch —
 * all fixed separately in fixCalcDiffBatch7PreFixes.js before use here.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - asc2020-q14v: g(x)=x²lnx, g'(x)=2xlnx+x=x(2lnx+1)=0 (x>0)
 *    => lnx=-1/2 => x=e^{-1/2}=1/√e. Matches.
 *  - bar2020-q11biv: y=xe^{2x}, y'=e^{2x}(2x+1) (product rule). Matches.
 *  - baulko2020-mc2v: (9x²-4)/(3x-2) = (3x-2)(3x+2)/(3x-2) = 3x+2 (simplify
 *    first), d/dx[ln(3x+2)]=3/(3x+2). Matches.
 *  - baulko2020-q11aiiv: y=cos²x, y'=2cosx(-sinx)=-2sinxcosx=-sin2x
 *    (chain rule + double-angle). Matches.
 *  - cths2020s-q23: y=e^{2x}/(x+3), y'=e^{2x}(2x+5)/(x+3)² (quotient
 *    rule: [2e^{2x}(x+3)-e^{2x}]/(x+3)² = e^{2x}(2x+6-1)/(x+3)² =
 *    e^{2x}(2x+5)/(x+3)²). Matches.
 *  - baulko2020-q16bii (teacher_review, builds on q16bi's
 *    A=sinθ(1+cosθ)): A'=cosθ(1+cosθ)-sin²θ=cosθ+cos²θ-sin²θ=cosθ+cos2θ
 *    (product rule + double-angle). Setting A'=0 gives cosθ=1/2,
 *    θ=π/3=60°, equilateral triangle. Matches.
 *  - asc2020-q27v: d/dx[5^{3x}]=5^{3x}ln5×3=3ln5·5^{3x} (exponential
 *    chain rule). Matches.
 *  - baulko2020-q15bi: y=ln(2x-1) has domain x>1/2, vertical asymptote
 *    x=1/2 (since 2x-1>0), passes through (1,0) (ln(1)=0). Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcDiffReasoningBlueprintBatch7.js
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
    id: 'asc2020-q14v',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$g(x)=x^2\\ln x$ is a product with $u=x^2$ ($u\'=2x$) and $v=\\ln x$ ($v\'=\\dfrac1x$). Applying $u\'v+uv\'$, which matches?', 'strategy_selection',
        [{ id: 'a', label: '$2x\\ln x + x$' }, { id: 'b', label: '$2x\\ln x - x$' }, { id: 'c', label: '$2\\ln x + x$' }],
        'a',
        ['$u\'v=2x\\ln x$, and $uv\'=x^2\\times\\dfrac1x=x$ — added, and simplify $x^2/x$ to $x$.'],
        '$g\'(x)=2x\\ln x+x=x(2\\ln x+1)$.'),
      mc('S2', 'Setting $g\'(x)=0$ (and $x>0$, so $x\\neq0$), you need $2\\ln x+1=0$, giving $\\ln x=-\\dfrac12$. Solving for $x$, what is it?', 'execution',
        [{ id: 'a', label: '$x=e^{-1/2}=\\dfrac{1}{\\sqrt{e}}$' }, { id: 'b', label: '$x=e^{-1}=\\dfrac1e$' }, { id: 'c', label: '$x=\\sqrt{e}$' }],
        'a',
        ['$\\ln x=-\\dfrac12$ means $x=e^{-1/2}$, and $e^{-1/2}=\\dfrac{1}{e^{1/2}}=\\dfrac{1}{\\sqrt{e}}$.'],
        '$x=\\dfrac{1}{\\sqrt{e}}$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q11biv',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$y=xe^{2x}$ is a product with $u=x$ ($u\'=1$) and $v=e^{2x}$ ($v\'=2e^{2x}$, chain rule). Applying $u\'v+uv\'$, which matches before factorising?', 'strategy_selection',
        [{ id: 'a', label: '$e^{2x} + 2xe^{2x}$' }, { id: 'b', label: '$e^{2x} - 2xe^{2x}$' }, { id: 'c', label: '$2e^{2x} + xe^{2x}$' }],
        'a',
        ['$u\'v=1\\times e^{2x}=e^{2x}$, and $uv\'=x\\times2e^{2x}=2xe^{2x}$ — added.'],
        '$e^{2x}+2xe^{2x}$.'),
      mc('S2', 'Factoring out the common $e^{2x}$, which matches?', 'verification',
        [{ id: 'a', label: '$e^{2x}(2x+1)$' }, { id: 'b', label: '$e^{2x}(x+1)$' }, { id: 'c', label: '$2e^{2x}(x+1)$' }],
        'a',
        ['$e^{2x}=e^{2x}(1)$ and $2xe^{2x}=e^{2x}(2x)$ — keep the coefficient $2$ on the $x$ term.'],
        '$e^{2x}(1+2x)=e^{2x}(2x+1)$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-mc2v',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Before differentiating, $9x^2-4$ factors as $(3x-2)(3x+2)$. What does the whole fraction $\\dfrac{9x^2-4}{3x-2}$ simplify to (for $x\\neq\\frac23$)?', 'strategy_selection',
        [{ id: 'a', label: '$3x+2$' }, { id: 'b', label: '$3x-2$' }, { id: 'c', label: '$9x+2$' }],
        'a',
        ['$\\dfrac{(3x-2)(3x+2)}{3x-2}$ — the $(3x-2)$ factors cancel.'],
        '$\\dfrac{9x^2-4}{3x-2} = \\dfrac{(3x-2)(3x+2)}{3x-2} = 3x+2$ — simplify BEFORE differentiating.'),
      mc('S2', 'Differentiating $\\log_e(3x+2)$ using the chain rule $\\dfrac{1}{u}\\times u\'$ with $u=3x+2$, $u\'=3$, what do you get?', 'execution',
        [{ id: 'a', label: '$\\dfrac{3}{3x+2}$' }, { id: 'b', label: '$\\dfrac{1}{3x+2}$' }, { id: 'c', label: '$\\dfrac{3}{3x-2}$' }],
        'a',
        ['Don\'t drop the $u\'=3$ factor, and use the simplified denominator $3x+2$, not the original $3x-2$.'],
        '$\\dfrac{3}{3x+2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q11aiiv',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$y=\\cos^2 x$ is $u^2$ with $u=\\cos x$ ($u\'=-\\sin x$). Using $\\dfrac{d}{dx}[u^2]=2u\\,u\'$, what is $\\dfrac{dy}{dx}$ before simplifying?', 'strategy_selection',
        [{ id: 'a', label: '$2\\cos x(-\\sin x)$' }, { id: 'b', label: '$2\\cos x$' }, { id: 'c', label: '$-\\sin x\\cos x$' }],
        'a',
        ['$\\dfrac{d}{dx}[u^2]=2u\\times u\'$, with $u=\\cos x$ and $u\'=-\\sin x$ — don\'t drop either factor.'],
        '$2\\cos x\\times(-\\sin x) = -2\\sin x\\cos x$.'),
      mc('S2', 'Using the double-angle identity $2\\sin x\\cos x=\\sin 2x$, what does $-2\\sin x\\cos x$ simplify to?', 'verification',
        [{ id: 'a', label: '$-\\sin 2x$' }, { id: 'b', label: '$\\sin 2x$' }, { id: 'c', label: '$-\\sin x$' }],
        'a',
        ['$2\\sin x\\cos x=\\sin 2x$, so the negative sign carries through unchanged.'],
        '$-2\\sin x\\cos x = -\\sin 2x$ — select this from the options next.'),
    ],
  },
  {
    id: 'cths2020s-q23',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$y=\\dfrac{e^{2x}}{x+3}$ is a quotient with $u=e^{2x}$ ($u\'=2e^{2x}$), $v=x+3$ ($v\'=1$). Applying $\\dfrac{u\'v-uv\'}{v^2}$, which matches (before simplifying)?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{2e^{2x}(x+3) - e^{2x}}{(x+3)^2}$' }, { id: 'b', label: '$\\dfrac{2e^{2x}(x+3) + e^{2x}}{(x+3)^2}$' }, { id: 'c', label: '$\\dfrac{e^{2x}(x+3) - 2e^{2x}}{(x+3)^2}$' }],
        'a',
        ['$u\'v=2e^{2x}(x+3)$, and $uv\'=e^{2x}\\times1=e^{2x}$ — subtracted.'],
        '$\\dfrac{2e^{2x}(x+3)-e^{2x}}{(x+3)^2}$.'),
      mc('S2', 'Expanding the numerator $2e^{2x}(x+3)-e^{2x}=2xe^{2x}+6e^{2x}-e^{2x}$, and factoring out $e^{2x}$, what does it simplify to?', 'verification',
        [{ id: 'a', label: '$e^{2x}(2x+5)$' }, { id: 'b', label: '$e^{2x}(2x+6)$' }, { id: 'c', label: '$e^{2x}(2x+7)$' }],
        'a',
        ['$6e^{2x}-e^{2x}=5e^{2x}$, so the numerator is $2xe^{2x}+5e^{2x}=e^{2x}(2x+5)$.'],
        '$e^{2x}(2x+5)$, giving $\\dfrac{e^{2x}(2x+5)}{(x+3)^2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q16bii',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', 'From part (i), $A=\\sin\\theta(1+\\cos\\theta)$ is a product with $u=\\sin\\theta$ ($u\'=\\cos\\theta$) and $v=1+\\cos\\theta$ ($v\'=-\\sin\\theta$). Applying $u\'v+uv\'$, which matches?', 'strategy_selection',
        [{ id: 'a', label: '$\\cos\\theta(1+\\cos\\theta) - \\sin^2\\theta$' }, { id: 'b', label: '$\\cos\\theta(1+\\cos\\theta) + \\sin^2\\theta$' }, { id: 'c', label: '$\\sin\\theta(1+\\cos\\theta) - \\cos^2\\theta$' }],
        'a',
        ['$u\'v=\\cos\\theta(1+\\cos\\theta)$, and $uv\'=\\sin\\theta\\times(-\\sin\\theta)=-\\sin^2\\theta$ — added, giving a subtraction.'],
        '$A\'=\\cos\\theta(1+\\cos\\theta)-\\sin^2\\theta$.'),
      mc('S2', 'Expanding and using $\\sin^2\\theta=1-\\cos^2\\theta$, $A\'=\\cos\\theta+\\cos^2\\theta-(1-\\cos^2\\theta)=\\cos\\theta+2\\cos^2\\theta-1$. Setting $A\'=0$ and factoring $2\\cos^2\\theta+\\cos\\theta-1=(2\\cos\\theta-1)(\\cos\\theta+1)$, which factor gives a valid triangle (where $0<\\theta<\\pi$, so $\\cos\\theta\\neq-1$)?', 'execution',
        [{ id: 'a', label: '$2\\cos\\theta-1=0 \\Rightarrow \\cos\\theta=\\dfrac12 \\Rightarrow \\theta=\\dfrac{\\pi}{3}$' }, { id: 'b', label: '$\\cos\\theta+1=0 \\Rightarrow \\theta=\\pi$ (degenerate triangle)' }, { id: 'c', label: 'Both factors give valid triangles' }],
        'a',
        ['$\\theta=\\pi$ would collapse the triangle (zero area) — only the other factor gives a genuine maximum.'],
        '$\\theta=\\dfrac{\\pi}{3}=60°$. Since $\\angle BAC=\\theta=60°$ and the triangle is isosceles ($AB=AC$), all three angles are $60°$ — equilateral. Now write the full proof.'),
    ],
  },
  {
    id: 'asc2020-q27v',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$5^{3x}$ is $a^{g(x)}$ with $a=5$, $g(x)=3x$. What is $g\'(x)$?', 'strategy_selection',
        [{ id: 'a', label: '$3$' }, { id: 'b', label: '$5$' }, { id: 'c', label: '$3x$' }],
        'a',
        ['$\\dfrac{d}{dx}[3x]=3$.'],
        '$g\'(x)=3$.'),
      mc('S2', 'Applying $\\dfrac{d}{dx}[a^{g(x)}]=a^{g(x)}\\ln a\\times g\'(x)$, what is the derivative?', 'execution',
        [{ id: 'a', label: '$3\\ln 5\\cdot 5^{3x}$' }, { id: 'b', label: '$5^{3x}$' }, { id: 'c', label: '$3\\log 5\\cdot 5^{3x}$' }],
        'a',
        ['Use natural log ($\\ln$), not base-10 log — and don\'t drop either the $\\ln 5$ or the $g\'(x)=3$ factor.'],
        '$3\\ln 5\\cdot5^{3x}$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q15bi',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$y=\\ln(2x-1)$ requires $2x-1>0$. What is the domain and vertical asymptote?', 'recognition',
        [{ id: 'a', label: 'Domain $x>\\dfrac12$, vertical asymptote $x=\\dfrac12$' }, { id: 'b', label: 'Domain $x>0$, vertical asymptote $x=0$' }, { id: 'c', label: 'Domain is all real $x$, no asymptote' }],
        'a',
        ['$2x-1>0 \\Rightarrow x>\\dfrac12$ — a log is only defined where its argument is positive, and undefined (asymptotic) where the argument hits $0$.'],
        '$2x-1>0 \\Rightarrow x>\\dfrac12$, with a vertical asymptote at $x=\\dfrac12$ (where $2x-1=0$).'),
      mc('S2', 'Where does the curve cross the $x$-axis (i.e. $y=0$)? Solve $\\ln(2x-1)=0$.', 'execution',
        [{ id: 'a', label: '$2x-1=1 \\Rightarrow x=1$, so it passes through $(1,0)$' }, { id: 'b', label: '$2x-1=0 \\Rightarrow x=\\dfrac12$, so it passes through $\\left(\\dfrac12,0\\right)$' }, { id: 'c', label: 'It never crosses the $x$-axis' }],
        'a',
        ['$\\ln(u)=0$ means $u=1$ (since $e^0=1$), not $u=0$.'],
        '$\\ln(2x-1)=0 \\Rightarrow 2x-1=1 \\Rightarrow x=1$ — the curve passes through $(1,0)$, which is to the right of the asymptote at $x=\\frac12$, matching the option that also places the tangent point $P$ there.'),
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
