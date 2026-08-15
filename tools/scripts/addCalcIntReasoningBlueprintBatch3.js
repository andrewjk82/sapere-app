#!/usr/bin/env node
/**
 * CALC-INT-01 batch 3 (2026-08-15, same day) — 8 clean questions
 * identified during the batch 1/2 scans but not yet built on. Includes
 * a matched pair (car2020-q40, dane2020-q39a) using the same technique
 * — integrating tanh(x) via the substitution u=e^x+e^{-x} — on two
 * different exam variants, one of which (car2020-q40) extends into
 * solving a resulting quadratic for k.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - bar2020-q12c: ∫₀^{π/2}sin(x/2)dx = [-2cos(x/2)]₀^{π/2} =
 *    -2cos(π/4)+2cos0 = -√2+2 = 2-√2. Matches.
 *  - cths2020-q12: ∫_{π/4}^{π/3}cosx dx = sin(π/3)-sin(π/4) =
 *    √3/2-√2/2 = (√3-√2)/2. Matches.
 *  - cra2023-q14b: ln(x²)=2lnx, so ∫₁^e (2lnx)/(2x)dx=∫₁^e (lnx)/x dx =
 *    [(lnx)²/2]₁^e = 1/2-0 = 1/2. Matches.
 *  - girr2020-mc23: f'(x)=4x-5, f(x)=2x²-5x+C. At (2,3):
 *    3=8-10+C=-2+C => C=5. f(x)=2x²-5x+5. Matches.
 *  - bar2020-q12a: ∫3^x dx = 3^x/ln3+C (a^x integration rule). Matches.
 *  - dane2020-mc10: ∫₁²2^{-x}dx = [-2^{-x}/ln2]₁² =
 *    -1/(4ln2)+1/(2ln2) = 1/(4ln2). Matches.
 *  - dane2020-q39a: y=(e^x-e^{-x})/(e^x+e^{-x}), sub u=e^x+e^{-x},
 *    du=(e^x-e^{-x})dx, so ∫y dx=∫du/u=ln u=ln(e^x+e^{-x}). Evaluated
 *    0→k: ln(e^k+e^{-k})-ln2 = ln((e^k+e^{-k})/2). Matches.
 *  - car2020-q40: same technique as dane2020-q39a for part (a). Part (b)
 *    sets the area (=1, implied by the answer form) equal to
 *    ln((e^k+e^{-k})/2), giving e^k+e^{-k}=2e. Letting u=e^k:
 *    u+1/u=2e => u²-2eu+1=0 => u=e±√(e²-1). Since k>0 means u=e^k>1,
 *    take the larger root u=e+√(e²-1), so k=ln(e+√(e²-1)). Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcIntReasoningBlueprintBatch3.js
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
    id: 'bar2020-q12c',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$\\sin\\dfrac{x}{2}$ has an inner linear expression $x/2$. Using $\\int\\sin(ax)\\,dx=-\\dfrac1a\\cos(ax)+C$ with $a=\\dfrac12$, what is the general antiderivative?', 'strategy_selection',
        [{ id: 'a', label: '$-2\\cos\\dfrac{x}{2}+C$' }, { id: 'b', label: '$-\\dfrac12\\cos\\dfrac{x}{2}+C$' }, { id: 'c', label: '$2\\cos\\dfrac{x}{2}+C$' }],
        'a',
        ['The correction factor is $\\dfrac1a$; here $a=\\dfrac12$, so $\\dfrac{1}{1/2}=2$.'],
        '$-2\\cos\\dfrac{x}{2}+C$.'),
      mc('S2', 'Evaluating $\\left[-2\\cos\\dfrac{x}{2}\\right]_0^{\\pi/2}=-2\\cos\\dfrac{\\pi}{4}+2\\cos0$, what is the exact value?', 'execution',
        [{ id: 'a', label: '$2-\\sqrt2$' }, { id: 'b', label: '$\\sqrt2-2$' }, { id: 'c', label: '$2+\\sqrt2$' }],
        'a',
        ['$\\cos\\dfrac{\\pi}{4}=\\dfrac{\\sqrt2}{2}$, so $-2\\times\\dfrac{\\sqrt2}{2}=-\\sqrt2$, and $2\\cos0=2$.'],
        '$-\\sqrt2+2=2-\\sqrt2$ — select this from the options next.'),
    ],
  },
  {
    id: 'cths2020-q12',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Using $\\int\\cos x\\,dx=\\sin x$, what is $\\left[\\sin x\\right]_{\\pi/4}^{\\pi/3}$ before evaluating the trig values?', 'execution',
        [{ id: 'a', label: '$\\sin\\dfrac{\\pi}{3}-\\sin\\dfrac{\\pi}{4}$' }, { id: 'b', label: '$\\sin\\dfrac{\\pi}{4}-\\sin\\dfrac{\\pi}{3}$' }, { id: 'c', label: '$\\cos\\dfrac{\\pi}{3}-\\cos\\dfrac{\\pi}{4}$' }],
        'a',
        ['Definite integral evaluates as (antiderivative at upper limit) $-$ (antiderivative at lower limit) — upper limit is $\\pi/3$.'],
        '$\\sin\\dfrac{\\pi}{3}-\\sin\\dfrac{\\pi}{4}$.'),
      mc('S2', 'Substituting $\\sin\\dfrac{\\pi}{3}=\\dfrac{\\sqrt3}{2}$ and $\\sin\\dfrac{\\pi}{4}=\\dfrac{\\sqrt2}{2}$, what is the exact value?', 'execution',
        [{ id: 'a', label: '$\\dfrac{\\sqrt3-\\sqrt2}{2}$' }, { id: 'b', label: '$\\dfrac{\\sqrt3+\\sqrt2}{2}$' }, { id: 'c', label: '$\\dfrac{\\sqrt2-\\sqrt3}{2}$' }],
        'a',
        ['Both fractions share the denominator $2$ — combine the numerators, keeping the subtraction.'],
        '$\\dfrac{\\sqrt3}{2}-\\dfrac{\\sqrt2}{2}=\\dfrac{\\sqrt3-\\sqrt2}{2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'cra2023-q14b',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Using $\\ln(x^2)=2\\ln x$ (log power rule), what does $\\dfrac{\\ln(x^2)}{2x}$ simplify to?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{\\ln x}{x}$' }, { id: 'b', label: '$\\dfrac{2\\ln x}{x}$' }, { id: 'c', label: '$\\dfrac{\\ln x}{2x^2}$' }],
        'a',
        ['$\\dfrac{2\\ln x}{2x}$ — the $2$s cancel.'],
        '$\\dfrac{\\ln(x^2)}{2x}=\\dfrac{2\\ln x}{2x}=\\dfrac{\\ln x}{x}$ — this is the "hence" step, likely reusing an earlier part\'s derivative of $(\\ln x)^2$.'),
      mc('S2', 'Recognising $\\dfrac{\\ln x}{x}$ as (half of) the derivative of $(\\ln x)^2$, the antiderivative is $\\dfrac{(\\ln x)^2}{2}$. Evaluating $\\left[\\dfrac{(\\ln x)^2}{2}\\right]_1^e$, what do you get?', 'execution',
        [{ id: 'a', label: '$\\dfrac{1}{2}-0=\\dfrac12$' }, { id: 'b', label: '$1-0=1$' }, { id: 'c', label: '$\\dfrac{1}{2}-\\dfrac12=0$' }],
        'a',
        ['At $x=e$: $(\\ln e)^2/2=1^2/2=1/2$. At $x=1$: $(\\ln 1)^2/2=0^2/2=0$.'],
        '$\\dfrac12-0=\\dfrac12$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc23',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Integrating $f\'(x)=4x-5$ (power rule), what is the general antiderivative?', 'execution',
        [{ id: 'a', label: '$f(x)=2x^2-5x+C$' }, { id: 'b', label: '$f(x)=4x^2-5x+C$' }, { id: 'c', label: '$f(x)=2x^2-5+C$' }],
        'a',
        ['$\\int 4x\\,dx=2x^2$, $\\int-5\\,dx=-5x$.'],
        '$f(x)=2x^2-5x+C$.'),
      mc('S2', 'Substituting the point $(2,3)$ into $f(x)=2x^2-5x+C$ and solving, what is $C$?', 'execution',
        [{ id: 'a', label: '$C=5$' }, { id: 'b', label: '$C=1$' }, { id: 'c', label: '$C=-2$' }],
        'a',
        ['$3=2(4)-5(2)+C=8-10+C=-2+C$ — solve for $C$.'],
        '$3=-2+C \\Rightarrow C=5$, giving $f(x)=2x^2-5x+5$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q12a',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$3^x$ needs the exponential integration rule $\\int a^x\\,dx=\\dfrac{a^x}{\\ln a}+C$. What is $\\ln a$ here?', 'strategy_selection',
        [{ id: 'a', label: '$\\ln 3$' }, { id: 'b', label: '$3$' }, { id: 'c', label: '$e$' }],
        'a',
        ['$a=3$ here, so the correction factor in the denominator is $\\ln 3$ (not $\\ln e=1$, which only applies when $a=e$).'],
        '$\\ln a=\\ln 3$.'),
      mc('S2', 'Putting it together, what is $\\int 3^x\\,dx$?', 'execution',
        [{ id: 'a', label: '$\\dfrac{3^x}{\\ln3}+C$' }, { id: 'b', label: '$3^x\\ln3+C$' }, { id: 'c', label: '$\\dfrac{1}{\\ln3}+C$' }],
        'a',
        ['The rule divides by $\\ln a$ (doesn\'t multiply), and $3^x$ must stay in the answer.'],
        '$\\dfrac{3^x}{\\ln3}+C$ — select this from the options next.'),
    ],
  },
  {
    id: 'dane2020-mc10',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', '$2^{-x}$ needs the exponential rule with a negative exponent. Using $\\int a^{-x}\\,dx=-\\dfrac{a^{-x}}{\\ln a}+C$ (chain rule on the $-x$), what is the general antiderivative with $a=2$?', 'strategy_selection',
        [{ id: 'a', label: '$-\\dfrac{2^{-x}}{\\ln2}+C$' }, { id: 'b', label: '$\\dfrac{2^{-x}}{\\ln2}+C$' }, { id: 'c', label: '$-2^{-x}\\ln2+C$' }],
        'a',
        ['The inner derivative of $-x$ is $-1$, which flips the usual $+$ from $\\int a^x\\,dx=a^x/\\ln a$ into a $-$ sign.'],
        '$-\\dfrac{2^{-x}}{\\ln2}+C$.'),
      mc('S2', 'Evaluating $\\left[-\\dfrac{2^{-x}}{\\ln2}\\right]_1^2=-\\dfrac{2^{-2}}{\\ln2}-\\left(-\\dfrac{2^{-1}}{\\ln2}\\right)$, what is the exact value?', 'execution',
        [{ id: 'a', label: '$\\dfrac{1}{4\\ln2}$' }, { id: 'b', label: '$\\dfrac{1}{2\\ln2}$' }, { id: 'c', label: '$-\\dfrac{1}{4\\ln2}$' }],
        'a',
        ['$-\\dfrac{1/4}{\\ln2}+\\dfrac{1/2}{\\ln2}=\\dfrac{-1/4+1/2}{\\ln2}=\\dfrac{1/4}{\\ln2}$.'],
        '$\\dfrac{1}{4\\ln2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'dane2020-q39a',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'For $y=\\dfrac{e^x-e^{-x}}{e^x+e^{-x}}$, the denominator\'s derivative is $e^x-e^{-x}$ — exactly the numerator! Which substitution makes this integrable?', 'strategy_selection',
        [{ id: 'a', label: '$u=e^x+e^{-x}$, so $du=(e^x-e^{-x})\\,dx$' }, { id: 'b', label: '$u=e^x-e^{-x}$, so $du=(e^x+e^{-x})\\,dx$' }, { id: 'c', label: '$u=x$, so $du=dx$' }],
        'a',
        ['When a fraction\'s numerator is exactly the derivative of its denominator, that\'s the signature of an $\\int\\frac{f\'(x)}{f(x)}\\,dx=\\ln|f(x)|$ integral.'],
        '$u=e^x+e^{-x}$, turning $\\int\\dfrac{e^x-e^{-x}}{e^x+e^{-x}}\\,dx$ into $\\int\\dfrac{du}{u}=\\ln|u|=\\ln(e^x+e^{-x})$.'),
      mc('S2', 'Evaluating $\\left[\\ln(e^x+e^{-x})\\right]_0^k=\\ln(e^k+e^{-k})-\\ln(e^0+e^0)$, and using $\\ln A-\\ln B=\\ln(A/B)$, what is the area?', 'execution',
        [{ id: 'a', label: '$\\ln\\!\\left(\\dfrac{e^k+e^{-k}}{2}\\right)$' }, { id: 'b', label: '$\\ln(e^k+e^{-k})-2$' }, { id: 'c', label: '$\\ln\\!\\left(\\dfrac{e^k+e^{-k}}{e^0}\\right)$' }],
        'a',
        ['$e^0+e^0=1+1=2$, so the subtracted term is $\\ln2$, and $\\ln A-\\ln2=\\ln(A/2)$.'],
        'Area $=\\ln\\!\\left(\\dfrac{e^k+e^{-k}}{2}\\right)$ — select this from the options next.'),
    ],
  },
  {
    id: 'car2020-q40',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Part (b) sets the area $\\ln\\!\\left(\\dfrac{e^k+e^{-k}}{2}\\right)$ equal to the given target and lets $u=e^k$. Rearranging $\\dfrac{u+1/u}{2}=e$ (i.e. $u+\\dfrac1u=2e$) into a quadratic in $u$, what do you get?', 'strategy_selection',
        [{ id: 'a', label: '$u^2-2eu+1=0$' }, { id: 'b', label: '$u^2-2eu-1=0$' }, { id: 'c', label: '$u^2+2eu+1=0$' }],
        'a',
        ['Multiply every term of $u+\\dfrac1u=2e$ by $u$: $u^2+1=2eu$, then rearrange to $=0$.'],
        '$u^2-2eu+1=0$.'),
      mc('S2', 'Solving with the quadratic formula gives $u=e\\pm\\sqrt{e^2-1}$. Since $k>0$ means $u=e^k>1$, and $e-\\sqrt{e^2-1}<1$ (the smaller root), which root do you take?', 'verification',
        [{ id: 'a', label: '$u=e+\\sqrt{e^2-1}$ (the larger root, $>1$)' }, { id: 'b', label: '$u=e-\\sqrt{e^2-1}$ (the smaller root)' }, { id: 'c', label: 'Both roots are equally valid' }],
        'a',
        ['$e^k$ for $k>0$ must be bigger than $e^0=1$ — only the larger root satisfies this.'],
        '$u=e+\\sqrt{e^2-1}$, so $k=\\ln\\!\\left(e+\\sqrt{e^2-1}\\right)$ — select this from the options next.'),
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
