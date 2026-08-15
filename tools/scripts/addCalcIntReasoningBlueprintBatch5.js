#!/usr/bin/env node
/**
 * CALC-INT-01 batch 5 (2026-08-15, same day) — 7 more questions, all
 * from the "already fixed, not yet blueprinted" list left over from
 * fixCalcIntBrokenOptionsBatch2.js / fixGirrMc26bAnswerKey.js.
 * cra2023-q29c (area between y=2cosx and y=cotx) is deliberately
 * deferred — its options were already fixed (garbage-fraction removed),
 * but the full area computation itself (intersection point, and cotx's
 * asymptote at x=0 affecting the bounded region) wasn't independently
 * re-derived with confidence in the time available, and per this
 * session's standing "verify before enrich" practice a pre-step
 * shouldn't be authored on a technique not fully re-checked. Left for a
 * future batch.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - baulko2020-q11c: ∫₁⁴5(9x-4)⁴dx = [(9x-4)⁵/9]₁⁴. At x=4: 9(4)-4=32,
 *    32⁵/9. At x=1: 9(1)-4=5, 5⁵/9. Result (32⁵-5⁵)/9. Matches.
 *  - baulko2020-q11eii: ∫tanx·sec²x dx, u=secx (since secx·tanx is
 *    d/dx[secx]), so ∫u du=u²/2=(1/2)sec²x+C. Matches.
 *  - baulko2020-q14aii: (1+tanx)²=1+2tanx+tan²x=1+2tanx+(sec²x-1)
 *    =sec²x+2tanx (using tan²x=sec²x-1). Antiderivative
 *    tanx-2ln|cosx|. At π/4: 1-2ln(√2/2)=1+ln2. At -π/4 (cos is even):
 *    -1+ln2. Area=(1+ln2)-(-1+ln2)=2. Matches.
 *  - bbhs2020-21: already verified in fixCalcIntBrokenOptionsBatch1.js
 *    (9^{3/2}=27, 1^{3/2}=1, [27/6-1/6]=26/6=13/3).
 *  - cra2023-q15: F(x)=∫tan²xdx=tanx-x+C (tan²x=sec²x-1). F(π/3)=0
 *    (given x-intercept): tan(π/3)-π/3+C=0 => √3-π/3+C=0 =>
 *    C=π/3-√3. F(x)=tanx-x+π/3-√3. Matches.
 *  - cra2023-q16b: sin(θ-π/2)=-cosθ, so y=-sin(x/2-π/2)=cos(x/2), which
 *    is ≥0 on [-π,π] (since x/2∈[-π/2,π/2]). Area=∫_{-π}^π cos(x/2)dx
 *    =[2sin(x/2)]_{-π}^π=2(1)-2(-1)=4. Matches.
 *  - girr2020-mc26b (fixed answer key in fixGirrMc26bAnswerKey.js):
 *    hint gives 3+9x=3(1+3x), and part (a) gives
 *    d/dx[xe^{3x}]=e^{3x}(1+3x), so ∫e^{3x}(3+9x)dx=3[xe^{3x}]₀²
 *    =3(2e^6-0)=6e^6. Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcIntReasoningBlueprintBatch5.js
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
    id: 'baulko2020-q11c',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'The antiderivative of $5(9x-4)^4$ is $5\\times\\dfrac{(9x-4)^5}{9\\times5}$ (reverse chain rule, $a=9$, $n=4$). What does this simplify to (the $5$s cancel)?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{(9x-4)^5}{9}$' }, { id: 'b', label: '$\\dfrac{(9x-4)^5}{45}$' }, { id: 'c', label: '$5\\times\\dfrac{(9x-4)^5}{9}$' }],
        'a',
        ['The outer coefficient $5$ and the new power $n+1=5$ (from $a\\times(n+1)=9\\times5=45$) share a common factor of $5$ with the numerator\'s $5$ — they cancel.'],
        '$\\dfrac{(9x-4)^5}{9}$.'),
      mc('S2', 'Evaluating $\\left[\\dfrac{(9x-4)^5}{9}\\right]_1^4$ (note $9(4)-4=32$, $9(1)-4=5$), what is the result?', 'execution',
        [{ id: 'a', label: '$\\dfrac{32^5-5^5}{9}$' }, { id: 'b', label: '$\\dfrac{5^5-32^5}{9}$' }, { id: 'c', label: '$\\dfrac{32^5-5^5}{45}$' }],
        'a',
        ['Upper limit ($x=4$) value minus lower limit ($x=1$) value, keeping the denominator $9$ from step 1.'],
        '$\\dfrac{32^5-5^5}{9}$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q11eii',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$\\tan x\\sec^2 x$ can be rewritten as $\\sec x\\times(\\sec x\\tan x)$ — and $\\sec x\\tan x$ is exactly $\\dfrac{d}{dx}[\\sec x]$. Using $\\int u\\,u\'\\,dx=\\dfrac{u^2}{2}$ with $u=\\sec x$, what is the antiderivative?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac12\\sec^2x+C$' }, { id: 'b', label: '$\\sec^2x+C$' }, { id: 'c', label: '$\\dfrac12\\sec x+C$' }],
        'a',
        ['Don\'t drop the $\\dfrac12$ from $\\dfrac{u^2}{2}$, and remember $u=\\sec x$ means $u^2=\\sec^2x$ (not $\\sec x$ alone).'],
        '$\\dfrac12\\sec^2x+C$.'),
      mc('S2', 'Double-check by differentiating: $\\dfrac{d}{dx}\\left[\\dfrac12\\sec^2x\\right]=\\sec x\\times\\sec x\\tan x=\\sec^2x\\tan x$. Does this match the original integrand $\\tan x\\sec^2x$?', 'verification',
        [{ id: 'a', label: 'Yes — $\\sec^2x\\tan x$ and $\\tan x\\sec^2x$ are the same expression, just reordered' }, { id: 'b', label: 'No — there\'s a missing factor of $2$' }, { id: 'c', label: 'No — the powers don\'t match' }],
        'a',
        ['Multiplication order doesn\'t change the value — $\\sec^2x\\tan x=\\tan x\\sec^2x$.'],
        'Yes — the answer checks out. $\\dfrac12\\sec^2x+C$ is correct.'),
    ],
  },
  {
    id: 'baulko2020-q14aii',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Expanding $(1+\\tan x)^2=1+2\\tan x+\\tan^2x$ and using the identity $\\tan^2x=\\sec^2x-1$, what does the integrand simplify to?', 'strategy_selection',
        [{ id: 'a', label: '$\\sec^2x+2\\tan x$' }, { id: 'b', label: '$\\sec^2x+2\\tan x-1$' }, { id: 'c', label: '$\\sec^2x-2\\tan x$' }],
        'a',
        ['$1+2\\tan x+(\\sec^2x-1)$ — the $+1$ and $-1$ cancel exactly.'],
        '$1+2\\tan x+\\sec^2x-1=\\sec^2x+2\\tan x$.'),
      mc('S2', 'The antiderivative is $\\tan x-2\\ln|\\cos x|$. Since $\\cos x$ is the same at $x=\\pm\\pi/4$, evaluating gives $(1+\\ln2)$ at $\\pi/4$ and $(-1+\\ln2)$ at $-\\pi/4$. What is the area (the difference)?', 'execution',
        [{ id: 'a', label: '$2$ square units' }, { id: 'b', label: '$2\\ln2$ square units' }, { id: 'c', label: '$0$ square units' }],
        'a',
        ['$(1+\\ln2)-(-1+\\ln2)$ — the $\\ln2$ terms cancel, leaving $1-(-1)=2$.'],
        '$2$ square units — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-21',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$\\sqrt{4x+1}=(4x+1)^{1/2}$ needs the reverse chain rule. Using $\\int(ax+b)^n\\,dx=\\dfrac{(ax+b)^{n+1}}{a(n+1)}+C$ with $a=4$, $n=\\dfrac12$, what is the denominator $a(n+1)$?', 'strategy_selection',
        [{ id: 'a', label: '$4\\times\\dfrac32=6$' }, { id: 'b', label: '$4\\times\\dfrac12=2$' }, { id: 'c', label: '$\\dfrac32$ (forgot the factor of $4$)' }],
        'a',
        ['$n+1=\\dfrac12+1=\\dfrac32$, then multiply by $a=4$.'],
        '$4\\times\\dfrac32=6$, giving $\\dfrac{(4x+1)^{3/2}}{6}$.'),
      mc('S2', 'Evaluating $\\left[\\dfrac{(4x+1)^{3/2}}{6}\\right]_0^2$ (note $4(2)+1=9$, $9^{3/2}=27$; $4(0)+1=1$, $1^{3/2}=1$), what is the result?', 'execution',
        [{ id: 'a', label: '$\\dfrac{27}{6}-\\dfrac16=\\dfrac{26}{6}=\\dfrac{13}{3}$' }, { id: 'b', label: '$\\dfrac96-\\dfrac16=\\dfrac86=\\dfrac43$' }, { id: 'c', label: '$\\dfrac16-\\dfrac{27}{6}=-\\dfrac{13}{3}$' }],
        'a',
        ['$9^{3/2}=(\\sqrt9)^3=3^3=27$ — don\'t forget to raise to the power $3/2$, not just use $9$ itself.'],
        '$\\dfrac{27}{6}-\\dfrac16=\\dfrac{26}{6}=\\dfrac{13}{3}$ — matches the target value, proof complete.'),
    ],
  },
  {
    id: 'cra2023-q15',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'The primitive function is $F(x)=\\tan x-x+C$ (using $\\tan^2x=\\sec^2x-1$). Setting $F\\!\\left(\\dfrac{\\pi}{3}\\right)=0$ (the given $x$-intercept), what equation results?', 'strategy_selection',
        [{ id: 'a', label: '$\\tan\\dfrac{\\pi}{3}-\\dfrac{\\pi}{3}+C=0$' }, { id: 'b', label: '$\\tan\\dfrac{\\pi}{3}+\\dfrac{\\pi}{3}+C=0$' }, { id: 'c', label: '$\\tan\\dfrac{\\pi}{3}-\\dfrac{\\pi}{3}-C=0$' }],
        'a',
        ['Substitute $x=\\dfrac{\\pi}{3}$ directly into $F(x)=\\tan x-x+C$ and set the whole thing to $0$.'],
        '$\\tan\\dfrac{\\pi}{3}-\\dfrac{\\pi}{3}+C=0$.'),
      mc('S2', 'Substituting $\\tan\\dfrac{\\pi}{3}=\\sqrt3$ and solving $\\sqrt3-\\dfrac{\\pi}{3}+C=0$ for $C$, what is $C$?', 'execution',
        [{ id: 'a', label: '$C=\\dfrac{\\pi}{3}-\\sqrt3$' }, { id: 'b', label: '$C=\\sqrt3-\\dfrac{\\pi}{3}$' }, { id: 'c', label: '$C=\\dfrac{\\pi}{3}+\\sqrt3$' }],
        'a',
        ['Rearranging $\\sqrt3-\\dfrac{\\pi}{3}+C=0$ isolates $C$ as the negative of everything else.'],
        '$C=\\dfrac{\\pi}{3}-\\sqrt3$, giving $F(x)=\\tan x-x+\\dfrac{\\pi}{3}-\\sqrt3$ — select this from the options next.'),
    ],
  },
  {
    id: 'cra2023-q16b',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Using the identity $\\sin\\!\\left(\\theta-\\dfrac{\\pi}{2}\\right)=-\\cos\\theta$, simplify $y=-\\sin\\!\\left(\\dfrac{x}{2}-\\dfrac{\\pi}{2}\\right)$.', 'strategy_selection',
        [{ id: 'a', label: '$y=\\cos\\dfrac{x}{2}$' }, { id: 'b', label: '$y=-\\cos\\dfrac{x}{2}$' }, { id: 'c', label: '$y=\\sin\\dfrac{x}{2}$' }],
        'a',
        ['$\\sin\\!\\left(\\frac{x}{2}-\\frac{\\pi}{2}\\right)=-\\cos\\dfrac{x}{2}$, so $y=-\\left(-\\cos\\dfrac{x}{2}\\right)=\\cos\\dfrac{x}{2}$.'],
        '$y=\\cos\\dfrac{x}{2}$ — a much simpler function to integrate directly.'),
      mc('S2', 'Since $\\cos\\dfrac{x}{2}\\geq0$ throughout $[-\\pi,\\pi]$ (as $x/2\\in[-\\pi/2,\\pi/2]$), integrating directly: $\\int_{-\\pi}^{\\pi}\\cos\\dfrac{x}{2}\\,dx=\\left[2\\sin\\dfrac{x}{2}\\right]_{-\\pi}^{\\pi}$. Evaluating ($\\sin\\frac{\\pi}{2}=1$, $\\sin(-\\frac{\\pi}{2})=-1$), what is the area?', 'execution',
        [{ id: 'a', label: '$2(1)-2(-1)=4$' }, { id: 'b', label: '$2(1)-2(1)=0$' }, { id: 'c', label: '$1-(-1)=2$' }],
        'a',
        ['Don\'t forget the factor of $2$ from the reverse chain rule, and $\\sin$ is odd so $\\sin(-\\pi/2)=-\\sin(\\pi/2)=-1$.'],
        '$2-(-2)=4$ square units — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc26b',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'The hint rewrites $3+9x=3(1+3x)$, and part (a) established $\\dfrac{d}{dx}[xe^{3x}]=e^{3x}(1+3x)$. "Hence", what is $\\int_0^2 e^{3x}(3+9x)\\,dx$ equal to (before evaluating limits)?', 'recognition',
        [{ id: 'a', label: '$3\\times\\left[xe^{3x}\\right]_0^2$' }, { id: 'b', label: '$\\left[xe^{3x}\\right]_0^2$ (forgot the factor of $3$)' }, { id: 'c', label: '$3\\times\\left[x^2e^{3x}\\right]_0^2$' }],
        'a',
        ['Since $3+9x=3(1+3x)$, the integral is $3$ times $\\int e^{3x}(1+3x)\\,dx$, whose antiderivative is exactly $xe^{3x}$ (from part (a)) — no new integration needed.'],
        '$3\\times\\left[xe^{3x}\\right]_0^2$.'),
      mc('S2', 'Evaluating $3\\times\\left[xe^{3x}\\right]_0^2=3(2e^6-0)$, what is the result?', 'execution',
        [{ id: 'a', label: '$6e^6$' }, { id: 'b', label: '$2e^6$' }, { id: 'c', label: '$3e^6$' }],
        'a',
        ['$3\\times2e^6=6e^6$ — don\'t drop either the leading $3$ or the $x=2$ substitution.'],
        '$6e^6$ — select this from the options next.'),
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
