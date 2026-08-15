#!/usr/bin/env node
/**
 * CALC-INT-01 batch 4 (2026-08-15, same day) — 8 more questions, all
 * already verified while fixing their broken options in
 * fixCalcIntBrokenOptionsBatch1.js (see that file's header for the
 * independent re-derivation of each correct value). This batch just
 * builds reasoning pre-steps on top of content already confirmed clean.
 *
 * Values (re-stated here for reference, already verified previously):
 *  - car2020-q31: 2cos(4πt/25)+1=0 => cos(4πt/25)=-1/2, first positive
 *    solution at 4πt/25=2π/3 => t=25/6h=4h10m.
 *  - car2020-q36: (a) d/dx[x ln x]=1+ln x (product rule). (b) hence
 *    ∫ln x dx=x ln x - x + C, [x ln x - x]₁²=(2ln2-2)-(0-1)=2ln2-1.
 *  - bar2020-q12b: ∫x/(x²+3)dx=(1/2)ln(x²+3)+C (numerator is half the
 *    denominator's derivative).
 *  - cths2020-q20: same curve/point as abb2020-q11eiii
 *    (y=x⁴/4+x²-7x+10). Gradient at P(2,4): 8+4-7=5, normal gradient
 *    -1/5, line x+5y-22=0.
 *  - dane2020-q27: ∫cos4x-sinx dx=(1/4)sin4x+cosx+C.
 *  - fortst2020-q3a: ∫sin(x/3)dx=-3cos(x/3)+C.
 *  - fortst2020-q3b: ∫x⁴(x⁵-2)³dx=(1/20)(x⁵-2)⁴+C (reverse chain rule,
 *    a=5,n=3, denominator 5×4=20).
 *  - bbhs2020-17c: ∫(sin10x-2e^{-5x})dx=-(1/10)cos10x+(2/5)e^{-5x}+C.
 *
 * Usage:
 *   node tools/scripts/addCalcIntReasoningBlueprintBatch4.js
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
    id: 'car2020-q31',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Setting $h=0$ in $h=2\\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right)+1$ and rearranging, what equation results?', 'strategy_selection',
        [{ id: 'a', label: '$\\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right)=-\\dfrac12$' }, { id: 'b', label: '$\\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right)=\\dfrac12$' }, { id: 'c', label: '$\\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right)=-1$' }],
        'a',
        ['$2\\cos(\\ldots)+1=0 \\Rightarrow \\cos(\\ldots)=-\\dfrac12$.'],
        '$\\cos\\!\\left(\\dfrac{4\\pi}{25}t\\right)=-\\dfrac12$.'),
      mc('S2', 'The smallest positive angle where cosine equals $-\\dfrac12$ is $\\dfrac{2\\pi}{3}$. Solving $\\dfrac{4\\pi}{25}t=\\dfrac{2\\pi}{3}$ for $t$ (in hours), then converting to hours:minutes, what do you get?', 'execution',
        [{ id: 'a', label: '$t=\\dfrac{25}{6}$h $=4$h$10$m' }, { id: 'b', label: '$t=\\dfrac{25}{3}$h $=8$h$20$m' }, { id: 'c', label: '$t=\\dfrac{25}{12}$h $=2$h$5$m' }],
        'a',
        ['$t=\\dfrac{2\\pi}{3}\\times\\dfrac{25}{4\\pi}=\\dfrac{25}{6}$ hours $\\approx4.1\\overline{6}$ hours $=4$h$10$m.'],
        '$4\\!:\\!10$ am — select this from the options next.'),
    ],
  },
  {
    id: 'car2020-q36',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', 'Part (a): differentiating $x\\log_e x$ via the product rule ($u=x$, $v=\\ln x$), what is $\\dfrac{d}{dx}[x\\ln x]$?', 'strategy_selection',
        [{ id: 'a', label: '$1+\\ln x$' }, { id: 'b', label: '$\\ln x$' }, { id: 'c', label: '$\\dfrac{x}{\\ln x}$' }],
        'a',
        ['$u\'v+uv\'=1\\times\\ln x+x\\times\\dfrac1x=\\ln x+1$.'],
        '$1+\\ln x$.'),
      mc('S2', '"Hence", rearranging $\\dfrac{d}{dx}[x\\ln x]=1+\\ln x$ gives $\\int\\ln x\\,dx=x\\ln x-x+C$. Evaluating $\\left[x\\ln x-x\\right]_1^2=(2\\ln2-2)-(1\\cdot\\ln1-1)$, what is the exact value?', 'execution',
        [{ id: 'a', label: '$2\\ln2-1$' }, { id: 'b', label: '$2\\ln2$' }, { id: 'c', label: '$2\\ln2-2$' }],
        'a',
        ['$\\ln1=0$, so the lower-limit value is $0-1=-1$. $(2\\ln2-2)-(-1)=2\\ln2-2+1=2\\ln2-1$ — don\'t forget to subtract this negative lower-limit value.'],
        '$2\\ln2-1$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q12b',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'The denominator $x^2+3$ has derivative $2x$. The numerator is $x$ — what correction factor turns $x$ into exactly $2x$?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac12$ (i.e. $x=\\dfrac12(2x)$)' }, { id: 'b', label: '$2$' }, { id: 'c', label: 'No correction needed' }],
        'a',
        ['$2x\\times\\dfrac12=x$ — the numerator is exactly half the denominator\'s derivative.'],
        'A correction factor of $\\dfrac12$ is needed.'),
      mc('S2', 'Applying $\\int\\dfrac{f\'(x)}{f(x)}\\,dx=\\ln|f(x)|$ with the $\\dfrac12$ correction, what is $\\int\\dfrac{x}{x^2+3}\\,dx$?', 'execution',
        [{ id: 'a', label: '$\\dfrac12\\ln(x^2+3)+C$' }, { id: 'b', label: '$\\ln(x^2+3)+C$' }, { id: 'c', label: '$2\\ln(x^2+3)+C$' }],
        'a',
        ['Don\'t drop the $\\dfrac12$ correction factor.'],
        '$\\dfrac12\\ln(x^2+3)+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'cths2020-q20',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', 'Part (a) gives $y=\\dfrac{x^4}{4}+x^2-7x+10$ (integration + initial condition at $P(2,4)$, same technique used elsewhere). For part (b), find the gradient of the TANGENT at $P$ by substituting $x=2$ into $\\dfrac{dy}{dx}=x^3+2x-7$.', 'execution',
        [{ id: 'a', label: '$5$' }, { id: 'b', label: '$3$' }, { id: 'c', label: '$11$' }],
        'a',
        ['$2^3+2(2)-7=8+4-7=5$.'],
        'Tangent gradient $=5$.'),
      mc('S2', 'The normal gradient is $-\\dfrac15$ (negative reciprocal). Using point-gradient form $y-4=-\\dfrac15(x-2)$ and rearranging to general form $ax+by+c=0$, what do you get?', 'execution',
        [{ id: 'a', label: '$x+5y-22=0$' }, { id: 'b', label: '$x-5y+18=0$' }, { id: 'c', label: '$5x-y-6=0$' }],
        'a',
        ['Multiply both sides by $5$: $5y-20=-(x-2)=-x+2$, then collect everything to one side.'],
        '$5y-20=-x+2 \\Rightarrow x+5y-22=0$ — select this from the options next.'),
    ],
  },
  {
    id: 'dane2020-q27',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Integrating $\\cos4x$ (reverse chain rule, inner derivative $4$), what do you get?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac14\\sin4x$' }, { id: 'b', label: '$4\\sin4x$' }, { id: 'c', label: '$\\sin4x$' }],
        'a',
        ['The correction factor is $\\dfrac1a$ where $a=4$.'],
        '$\\dfrac14\\sin4x$.'),
      mc('S2', 'Integrating $-\\sin x$ gives $+\\cos x$. Combining both terms, what is the full primitive?', 'execution',
        [{ id: 'a', label: '$\\dfrac14\\sin4x+\\cos x+C$' }, { id: 'b', label: '$\\dfrac14\\sin4x-\\cos x+C$' }, { id: 'c', label: '$4\\sin4x+\\cos x+C$' }],
        'a',
        ['$\\int-\\sin x\\,dx=+\\cos x$ — two negatives (the $-\\sin x$ and the $-\\cos x$ from $\\int\\sin x\\,dx=-\\cos x$) cancel.'],
        '$\\dfrac14\\sin4x+\\cos x+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'fortst2020-q3a',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Using $\\int\\sin(ax)\\,dx=-\\dfrac1a\\cos(ax)+C$ with $a=\\dfrac13$, what is $\\dfrac1a$?', 'strategy_selection',
        [{ id: 'a', label: '$3$' }, { id: 'b', label: '$\\dfrac13$' }, { id: 'c', label: '$-3$' }],
        'a',
        ['$\\dfrac{1}{1/3}=3$.'],
        '$\\dfrac1a=3$.'),
      mc('S2', 'Putting it together, what is the primitive?', 'execution',
        [{ id: 'a', label: '$-3\\cos\\!\\left(\\dfrac{x}{3}\\right)+C$' }, { id: 'b', label: '$3\\cos\\!\\left(\\dfrac{x}{3}\\right)+C$' }, { id: 'c', label: '$-\\dfrac13\\cos\\!\\left(\\dfrac{x}{3}\\right)+C$' }],
        'a',
        ['Don\'t drop the negative sign from the $\\sin \\to \\cos$ rule, and use $\\dfrac1a=3$, not $a=\\dfrac13$ itself.'],
        '$-3\\cos\\!\\left(\\dfrac{x}{3}\\right)+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'fortst2020-q3b',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$x^4$ is (up to a constant) the derivative of the inner expression $x^5-2$ (whose derivative is $5x^4$). What substitution applies?', 'strategy_selection',
        [{ id: 'a', label: '$u=x^5-2$, so $du=5x^4\\,dx$' }, { id: 'b', label: '$u=x^4$, so $du=4x^3\\,dx$' }, { id: 'c', label: '$u=x$, so $du=dx$' }],
        'a',
        ['The factor $x^4$ outside is exactly (up to the constant $5$) the derivative of $x^5-2$ — the signature of a reverse-chain-rule integral.'],
        '$u=x^5-2$, $du=5x^4\\,dx$.'),
      mc('S2', 'Using the reverse chain rule with $a=5$, $n=3$, the denominator is $a\\times(n+1)$. What is $5\\times4$?', 'execution',
        [{ id: 'a', label: '$20$' }, { id: 'b', label: '$15$' }, { id: 'c', label: '$12$' }],
        'a',
        ['$n+1=3+1=4$ (the power increases by $1$), then multiply by $a=5$.'],
        '$5\\times4=20$, giving $\\dfrac{(x^5-2)^4}{20}+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-17c',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Integrating $\\sin10x$ (reverse chain rule, $a=10$), what do you get?', 'strategy_selection',
        [{ id: 'a', label: '$-\\dfrac{1}{10}\\cos10x$' }, { id: 'b', label: '$\\dfrac{1}{10}\\cos10x$' }, { id: 'c', label: '$-10\\cos10x$' }],
        'a',
        ['$\\int\\sin(ax)\\,dx=-\\dfrac1a\\cos(ax)+C$, with $a=10$.'],
        '$-\\dfrac{1}{10}\\cos10x$.'),
      mc('S2', 'Integrating $-2e^{-5x}$ (reverse chain rule, inner derivative $-5$), what do you get?', 'execution',
        [{ id: 'a', label: '$\\dfrac{2}{5}e^{-5x}$' }, { id: 'b', label: '$-\\dfrac{2}{5}e^{-5x}$' }, { id: 'c', label: '$2e^{-5x}$' }],
        'a',
        ['$\\int-2e^{-5x}\\,dx=-2\\times\\left(-\\dfrac15\\right)e^{-5x}=\\dfrac25 e^{-5x}$ — two negatives cancel.'],
        '$\\dfrac25 e^{-5x}=\\dfrac{2}{5e^{5x}}$, so the full primitive is $-\\dfrac{1}{10}\\cos10x+\\dfrac{2}{5e^{5x}}+C$ — select this from the options next.'),
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
