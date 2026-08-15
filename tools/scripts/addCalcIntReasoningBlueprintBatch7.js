#!/usr/bin/env node
/**
 * CALC-INT-01 batch 7 (2026-08-15, same day) — 8 more questions. Two
 * were fixed first (fixCthsS20AndAsc34vOptions.js): cths2020s-q20 had
 * a 6th wrong answer key found this session (part (a)'s constant was
 * stated as +4, independently re-derived as -2 — part (b)'s normal line
 * didn't depend on C and was already correct), and asc2020-q34v had the
 * classic garbage-fraction distractor template.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - baulko2020-mc3v: ∫x/(x²+3)dx=(1/2)ln(x²+3)+C (same technique as
 *    bar2020-q12b/bv, different exam). Matches.
 *  - baulko2020-q16ciiiiv: given ∫₀¹xe^{kx}dx=(e^k-1)/k²-1/k, at k=1:
 *    (e-1)/1-1/1=e-2. Matches.
 *  - cths2020s-q12: ∫_{π/6}^{π/4}cosx dx=sin(π/4)-sin(π/6)=√2/2-1/2
 *    =(√2-1)/2. Matches.
 *  - girr2020-mc26bs: 2+4x=2(1+2x), same technique as bar2020-q11biiv
 *    (given d/dx[xe^{2x}]=e^{2x}(2x+1)), ∫₀¹e^{2x}(2+4x)dx=2[xe^{2x}]₀¹
 *    =2(e²-0)=2e². Matches.
 *  - baulko2020-q14aiiv: ∫₀^{π/4}sec²x dx=[tanx]₀^{π/4}=tan(π/4)-tan0
 *    =1-0=1. Matches.
 *  - asc2020-q34v: dV/dt=0.5cos(πt/20). (a) Zero at πt/20=π/2 => t=10.
 *    (b) V(t)=(10/π)sin(πt/20)+C, V(0)=0 gives C=0. Matches.
 *  - cths2020s-q20 (fixed answer key): y=x³/3+2x²-5x+C, at Q(3,10):
 *    9+18-15+C=10 => C=-2. Gradient at x=3: 9+12-5=16, normal
 *    -1/16, line x+16y-163=0. Matches.
 *  - bar2020-q12av: ∫5^x dx=5^x/ln5+C (exponential integration rule).
 *    Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcIntReasoningBlueprintBatch7.js
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
    id: 'baulko2020-mc3v',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'The denominator $x^2+3$ has derivative $2x$. The numerator is $x$ — what correction factor turns $x$ into exactly $2x$?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac12$' }, { id: 'b', label: '$2$' }, { id: 'c', label: 'No correction needed' }],
        'a',
        ['$2x\\times\\dfrac12=x$.'],
        'A correction factor of $\\dfrac12$ is needed.'),
      mc('S2', 'Applying $\\int\\dfrac{f\'(x)}{f(x)}\\,dx=\\ln|f(x)|$ with the $\\dfrac12$ correction, what is the primitive of $\\dfrac{x}{x^2+3}$?', 'execution',
        [{ id: 'a', label: '$\\dfrac12\\ln(x^2+3)+C$' }, { id: 'b', label: '$\\ln(x^2+3)+C$' }, { id: 'c', label: '$\\dfrac{1}{x^2+3}+C$' }],
        'a',
        ['Don\'t drop the $\\dfrac12$ correction factor, and this is a log-form integral, not a power-rule one.'],
        '$\\dfrac12\\ln(x^2+3)+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q16ciiiiv',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Substituting $k=1$ into $\\dfrac{e^k-1}{k^2}-\\dfrac1k$, what does the first term $\\dfrac{e^k-1}{k^2}$ become?', 'execution',
        [{ id: 'a', label: '$e-1$' }, { id: 'b', label: '$\\dfrac{e-1}{2}$' }, { id: 'c', label: '$e$' }],
        'a',
        ['With $k=1$: $k^2=1$, so $\\dfrac{e^1-1}{1^2}=e-1$.'],
        '$\\dfrac{e-1}{1}=e-1$.'),
      mc('S2', 'The second term $\\dfrac1k$ becomes $\\dfrac11=1$. Combining $(e-1)-1$, what is the exact value?', 'execution',
        [{ id: 'a', label: '$e-2$' }, { id: 'b', label: '$e-1$' }, { id: 'c', label: '$e$' }],
        'a',
        ['$(e-1)-1=e-2$ — don\'t forget to subtract this second term.'],
        '$e-2$ — select this from the options next.'),
    ],
  },
  {
    id: 'cths2020s-q12',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Using $\\int\\cos x\\,dx=\\sin x$, what is $\\left[\\sin x\\right]_{\\pi/6}^{\\pi/4}$ before evaluating the trig values?', 'execution',
        [{ id: 'a', label: '$\\sin\\dfrac{\\pi}{4}-\\sin\\dfrac{\\pi}{6}$' }, { id: 'b', label: '$\\sin\\dfrac{\\pi}{6}-\\sin\\dfrac{\\pi}{4}$' }, { id: 'c', label: '$\\cos\\dfrac{\\pi}{4}-\\cos\\dfrac{\\pi}{6}$' }],
        'a',
        ['Upper limit ($\\pi/4$) minus lower limit ($\\pi/6$).'],
        '$\\sin\\dfrac{\\pi}{4}-\\sin\\dfrac{\\pi}{6}$.'),
      mc('S2', 'Substituting $\\sin\\dfrac{\\pi}{4}=\\dfrac{\\sqrt2}{2}$ and $\\sin\\dfrac{\\pi}{6}=\\dfrac12$, what is the exact value?', 'execution',
        [{ id: 'a', label: '$\\dfrac{\\sqrt2-1}{2}$' }, { id: 'b', label: '$\\dfrac{\\sqrt2+1}{2}$' }, { id: 'c', label: '$\\dfrac{1-\\sqrt2}{2}$' }],
        'a',
        ['Both share denominator $2$: $\\dfrac{\\sqrt2}{2}-\\dfrac12=\\dfrac{\\sqrt2-1}{2}$.'],
        '$\\dfrac{\\sqrt2-1}{2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc26bs',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'You\'re told (implicitly, via an earlier part) that $\\dfrac{d}{dx}[xe^{2x}]=e^{2x}(2x+1)$. Rewriting $2+4x$ as a multiple of $(1+2x)$, what do you get?', 'strategy_selection',
        [{ id: 'a', label: '$2(1+2x)$' }, { id: 'b', label: '$4(1+2x)$' }, { id: 'c', label: '$2+2(1+2x)$' }],
        'a',
        ['$2+4x=2(1+2x)$.'],
        '$\\int e^{2x}(2+4x)\\,dx=2\\int e^{2x}(1+2x)\\,dx=2\\left[xe^{2x}\\right]$.'),
      mc('S2', 'Evaluating $2\\left[xe^{2x}\\right]_0^1=2(1\\cdot e^2-0)$, what is the result?', 'execution',
        [{ id: 'a', label: '$2e^2$' }, { id: 'b', label: '$e^2$' }, { id: 'c', label: '$4e^2$' }],
        'a',
        ['$2\\times e^2=2e^2$.'],
        '$2e^2$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-q14aiiv',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'Using $\\int\\sec^2x\\,dx=\\tan x$, what is the general antiderivative of $\\sec^2x$?', 'execution',
        [{ id: 'a', label: '$\\tan x+C$' }, { id: 'b', label: '$\\sec x\\tan x+C$' }, { id: 'c', label: '$\\sec^2x\\tan x+C$' }],
        'a',
        ['This is a standard derivative to know directly.'],
        '$\\tan x+C$.'),
      mc('S2', 'Evaluating $\\left[\\tan x\\right]_0^{\\pi/4}=\\tan\\dfrac{\\pi}{4}-\\tan0$, what is the exact value?', 'execution',
        [{ id: 'a', label: '$1$' }, { id: 'b', label: '$0$' }, { id: 'c', label: '$\\sqrt2$' }],
        'a',
        ['$\\tan\\dfrac{\\pi}{4}=1$, and $\\tan0=0$.'],
        '$1-0=1$ — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q34v',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', 'Part (a): setting $\\dfrac{dV}{dt}=0.5\\cos\\dfrac{\\pi t}{20}=0$ and solving for the first positive $t$, what equation for the angle results?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{\\pi t}{20}=\\dfrac{\\pi}{2}$' }, { id: 'b', label: '$\\dfrac{\\pi t}{20}=\\pi$' }, { id: 'c', label: '$\\dfrac{\\pi t}{20}=0$' }],
        'a',
        ['Cosine is first zero at angle $\\dfrac{\\pi}{2}$ (not $0$, which is where it starts).'],
        '$\\dfrac{\\pi t}{20}=\\dfrac{\\pi}{2} \\Rightarrow t=10$ minutes.'),
      mc('S2', 'Part (b): integrating $\\dfrac{dV}{dt}=0.5\\cos\\dfrac{\\pi t}{20}$ (reverse chain rule, $a=\\pi/20$) and applying $V(0)=0$ (tank empty at $t=0$), what is $V(t)$?', 'execution',
        [{ id: 'a', label: '$V=\\dfrac{10}{\\pi}\\sin\\dfrac{\\pi t}{20}$' }, { id: 'b', label: '$V=\\dfrac{10}{\\pi}\\cos\\dfrac{\\pi t}{20}$' }, { id: 'c', label: '$V=10\\sin\\dfrac{\\pi t}{20}$' }],
        'a',
        ['$\\int\\cos(at)\\,dt=\\dfrac1a\\sin(at)$, with $\\dfrac{1}{\\pi/20}=\\dfrac{20}{\\pi}$, then multiplied by the $0.5$ coefficient gives $\\dfrac{10}{\\pi}$ — and $V(0)=0$ makes the constant of integration $0$.'],
        '$V(t)=\\dfrac{10}{\\pi}\\sin\\dfrac{\\pi t}{20}$ — select this from the options next.'),
    ],
  },
  {
    id: 'cths2020s-q20',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', 'Integrating $\\dfrac{dy}{dx}=x^2+4x-5$ and substituting the point $Q(3,10)$ to solve for $C$, what is the value of $C$?', 'execution',
        [{ id: 'a', label: '$C=-2$' }, { id: 'b', label: '$C=4$' }, { id: 'c', label: '$C=10$' }],
        'a',
        ['$y=\\dfrac{x^3}{3}+2x^2-5x+C$. At $x=3$: $9+18-15+C=12+C$. Setting $=10$: $C=-2$.'],
        '$y=\\dfrac{x^3}{3}+2x^2-5x-2$.'),
      mc('S2', 'For part (b): the tangent gradient at $Q$ is $3^2+4(3)-5=16$, so the normal gradient is $-\\dfrac{1}{16}$. Using point-gradient form and rearranging to general form, what is the equation of the normal?', 'execution',
        [{ id: 'a', label: '$x+16y-163=0$' }, { id: 'b', label: '$x-16y+157=0$' }, { id: 'c', label: '$16x-y-38=0$' }],
        'a',
        ['$y-10=-\\dfrac{1}{16}(x-3) \\Rightarrow 16y-160=-(x-3)=-x+3 \\Rightarrow x+16y-163=0$.'],
        '$x+16y-163=0$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q12av',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$5^x$ needs the exponential integration rule $\\int a^x\\,dx=\\dfrac{a^x}{\\ln a}+C$. What is $\\ln a$ here?', 'strategy_selection',
        [{ id: 'a', label: '$\\ln5$' }, { id: 'b', label: '$5$' }, { id: 'c', label: '$e$' }],
        'a',
        ['$a=5$ here — the correction factor is $\\ln5$, not $\\ln e=1$ (which only applies when $a=e$).'],
        '$\\ln a=\\ln5$.'),
      mc('S2', 'Putting it together, what is $\\int5^x\\,dx$?', 'execution',
        [{ id: 'a', label: '$\\dfrac{5^x}{\\ln5}+C$' }, { id: 'b', label: '$5^x\\ln5+C$' }, { id: 'c', label: '$\\dfrac{1}{\\ln5}+C$' }],
        'a',
        ['The rule divides by $\\ln a$ (doesn\'t multiply), and $5^x$ must stay in the answer.'],
        '$\\dfrac{5^x}{\\ln5}+C$ — select this from the options next.'),
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
