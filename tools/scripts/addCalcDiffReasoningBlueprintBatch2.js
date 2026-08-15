#!/usr/bin/env node
/**
 * CALC-DIFF-01 batch 2 (2026-08-15, same day as the pilot) — 8 more
 * questions, chosen from the DNA's remaining pool while explicitly
 * SKIPPING several found broken during selection (see the two follow-up
 * audit tasks spawned this session: "12/(x+2)"-style garbage distractors
 * on car2020-q34/cra2023-q31/etc. already fixed inline; a mangled-LHS
 * "1/dx ="/"dx/dy =" template bug (~44 occurrences) and the older
 * "opposite of this statement is true" filler (71 occurrences) both
 * flagged for separate dedicated audit passes rather than fixed here).
 * Also skipped bar2020-q11bi (its own distractor "e^{3x}+3xe^{3x}" is
 * algebraically IDENTICAL to the marked-correct "e^{3x}(3x+1)", just
 * unfactored — an ambiguous-grading bug, not built on top of until fixed)
 * and girr2020-mc20 (question's own phrasing, "coefficient of the leading
 * term", is ambiguous about which algebraic form counts as "leading" —
 * not clean enough to scaffold confidently).
 *
 * All correct answers/values independently re-verified before authoring:
 *  - abb2020-q11ei: dy/dx=x³+2x-7 => d²y/dx²=3x²+2. Matches doc.
 *  - abb2020-q13bi: y=ln(3x²+1), y'=6x/(3x²+1) (chain rule). Matches doc.
 *  - abb2020-q13bii: y=sinx/x², y'=(xcosx-2sinx)/x³ (quotient rule,
 *    divide top+bottom by x). Matches doc.
 *  - bar2020-q11aa: (3x+4)^5, y'=15(3x+4)^4 (chain rule). Matches doc.
 *  - bar2020-q11ab: tanx/x, y'=(x sec²x - tanx)/x² (quotient rule).
 *    Matches doc.
 *  - girr2020-mc9: y=e^{√x}, y'=e^{√x}/(2√x) (chain rule, d/dx√x=1/(2√x)).
 *    Matches doc.
 *  - girr2020-mc16: y=e^{cos2x}, y'=-2sin(2x)e^{cos2x} (chain rule,
 *    d/dx[cos2x]=-2sin2x). Matches doc.
 *  - girr2020-mc26a: y=xe^{3x}, y'=e^{3x}(1+3x) (product rule). Matches
 *    doc; unlike bar2020-q11bi, no equivalent-option ambiguity here.
 *
 * Usage:
 *   node tools/scripts/addCalcDiffReasoningBlueprintBatch2.js
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
    id: 'abb2020-q11ei',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Given $\\dfrac{dy}{dx} = x^3+2x-7$, what do you need to do to find $\\dfrac{d^2y}{dx^2}$?', 'strategy_selection',
        [{ id: 'a', label: 'Differentiate $\\dfrac{dy}{dx}$ again' }, { id: 'b', label: 'Integrate $\\dfrac{dy}{dx}$' }, { id: 'c', label: 'Substitute $x=0$ into $\\dfrac{dy}{dx}$' }],
        'a',
        ['The second derivative is the derivative OF the first derivative.'],
        'The second derivative is found by differentiating $\\dfrac{dy}{dx}$ a second time.'),
      mc('S2', 'Differentiating $x^3+2x-7$ term by term, what is $\\dfrac{d^2y}{dx^2}$?', 'execution',
        [{ id: 'a', label: '$3x^2+2$' }, { id: 'b', label: '$3x^2+2x$' }, { id: 'c', label: '$x^3+2x-7$' }],
        'a',
        ['Each term uses the power rule; the derivative of the constant $-7$ is $0$.'],
        '$\\dfrac{d}{dx}[x^3]=3x^2$, $\\dfrac{d}{dx}[2x]=2$, $\\dfrac{d}{dx}[-7]=0$, giving $3x^2+2$.'),
    ],
  },
  {
    id: 'abb2020-q13bi',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', '$y=\\ln(3x^2+1)$ is $\\ln(u)$ with $u=3x^2+1$. The chain rule gives $\\dfrac{1}{u}\\times u\'$. What is $u\'$?', 'strategy_selection',
        [{ id: 'a', label: '$6x$' }, { id: 'b', label: '$3x$' }, { id: 'c', label: '$6x^2$' }],
        'a',
        ['$\\dfrac{d}{dx}[3x^2+1] = 6x$ — the power rule on $3x^2$, and $0$ for the constant $1$.'],
        '$u\' = 6x$.'),
      mc('S2', 'Substituting into $\\dfrac{1}{u}\\times u\' = \\dfrac{1}{3x^2+1}\\times 6x$, what is $\\dfrac{dy}{dx}$?', 'execution',
        [{ id: 'a', label: '$\\dfrac{6x}{3x^2+1}$' }, { id: 'b', label: '$\\dfrac{6x^2}{3x^2+1}$' }, { id: 'c', label: '$\\dfrac{1}{3x^2+1}$' }],
        'a',
        ['Don\'t drop the $u\'=6x$ factor by only keeping $\\dfrac{1}{u}$.'],
        '$\\dfrac{6x}{3x^2+1}$ — select this from the options next.'),
    ],
  },
  {
    id: 'abb2020-q13bii',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', '$y=\\dfrac{\\sin x}{x^2}$ is a quotient with $u=\\sin x$ ($u\'=\\cos x$), $v=x^2$ ($v\'=2x$). Which is the correct quotient-rule setup (before simplifying)?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{x^2\\cos x - \\sin x \\cdot 2x}{(x^2)^2}$' }, { id: 'b', label: '$\\dfrac{x^2\\cos x + \\sin x \\cdot 2x}{(x^2)^2}$' }, { id: 'c', label: '$\\dfrac{2x\\sin x - x^2\\cos x}{(x^2)^2}$' }],
        'a',
        ['Quotient rule is $\\dfrac{u\'v-uv\'}{v^2}$, and it subtracts, not adds.'],
        '$\\dfrac{u\'v-uv\'}{v^2} = \\dfrac{x^2\\cos x - 2x\\sin x}{x^4}$.'),
      mc('S2', 'Every term in $\\dfrac{x^2\\cos x - 2x\\sin x}{x^4}$ has a common factor of $x$ with the denominator. Cancelling one factor of $x$ throughout, what do you get?', 'verification',
        [{ id: 'a', label: '$\\dfrac{x\\cos x - 2\\sin x}{x^3}$' }, { id: 'b', label: '$\\dfrac{x\\cos x + 2\\sin x}{x^3}$' }, { id: 'c', label: '$\\dfrac{\\cos x}{x^2}$' }],
        'a',
        ['Divide every term in the numerator AND the denominator by $x$ — don\'t just cancel from one term.'],
        '$\\dfrac{x^2\\cos x - 2x\\sin x}{x^4} = \\dfrac{x\\cos x - 2\\sin x}{x^3}$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q11aa',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$(3x+4)^5$ is an outer power-of-5 wrapped around inner $g(x)=3x+4$. What is $g\'(x)$?', 'strategy_selection',
        [{ id: 'a', label: '$3$' }, { id: 'b', label: '$4$' }, { id: 'c', label: '$5$' }],
        'a',
        ['$\\dfrac{d}{dx}[3x+4] = 3$ — the derivative of the constant $4$ is $0$.'],
        '$g\'(x) = 3$.'),
      mc('S2', 'Applying the chain rule, $\\dfrac{d}{dx}\\left[(3x+4)^5\\right] = 5(3x+4)^4 \\times g\'(x)$. Substituting $g\'(x)=3$, what is the derivative?', 'execution',
        [{ id: 'a', label: '$15(3x+4)^4$' }, { id: 'b', label: '$5(3x+4)^4$' }, { id: 'c', label: '$15(3x+4)^5$' }],
        'a',
        ['$5 \\times 3 = 15$ — don\'t forget to multiply by the inner derivative, and don\'t change the power on $(3x+4)$.'],
        '$5(3x+4)^4 \\times 3 = 15(3x+4)^4$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q11ab',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$\\dfrac{\\tan x}{x}$ is a quotient with $u=\\tan x$, $v=x$. What is $u\'$?', 'strategy_selection',
        [{ id: 'a', label: '$\\sec^2 x$' }, { id: 'b', label: '$\\sec x \\tan x$' }, { id: 'c', label: '$\\dfrac{1}{\\cos x}$' }],
        'a',
        ['$\\dfrac{d}{dx}[\\tan x] = \\sec^2 x$ — a standard derivative to know directly.'],
        '$u\' = \\sec^2 x$.'),
      mc('S2', 'Applying $\\dfrac{u\'v-uv\'}{v^2}$ with $u\'=\\sec^2 x$, $v=x$, $u=\\tan x$, $v\'=1$, what is $\\dfrac{dy}{dx}$?', 'execution',
        [{ id: 'a', label: '$\\dfrac{x\\sec^2 x - \\tan x}{x^2}$' }, { id: 'b', label: '$\\dfrac{x\\sec^2 x + \\tan x}{x^2}$' }, { id: 'c', label: '$\\dfrac{\\tan x - x\\sec^2 x}{x^2}$' }],
        'a',
        ['Keep the order ($u\'v$ first) and the subtraction sign from the quotient rule.'],
        '$\\dfrac{x\\sec^2 x - \\tan x}{x^2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc9',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$y=e^{\\sqrt{x}}$ is $e^u$ with $u=\\sqrt{x}$. What is $u\'$?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{1}{2\\sqrt{x}}$' }, { id: 'b', label: '$\\dfrac{1}{\\sqrt{x}}$' }, { id: 'c', label: '$2\\sqrt{x}$' }],
        'a',
        ['$\\sqrt{x}=x^{1/2}$, so by the power rule $\\dfrac{d}{dx}\\left[x^{1/2}\\right] = \\tfrac12 x^{-1/2} = \\dfrac{1}{2\\sqrt{x}}$.'],
        '$u\' = \\dfrac{1}{2\\sqrt{x}}$.'),
      mc('S2', 'Applying the chain rule $\\dfrac{d}{dx}[e^u] = e^u \\times u\'$, what is $\\dfrac{dy}{dx}$?', 'execution',
        [{ id: 'a', label: '$e^{\\sqrt{x}}$' }, { id: 'b', label: '$\\dfrac{e^{\\sqrt{x}}}{x}$' }, { id: 'c', label: '$\\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}$' }],
        'c',
        ['Don\'t drop the inner-derivative factor $u\'=\\dfrac{1}{2\\sqrt{x}}$ — $e^u$ alone is only correct when $u\'=1$.'],
        '$e^{\\sqrt{x}} \\times \\dfrac{1}{2\\sqrt{x}} = \\dfrac{e^{\\sqrt{x}}}{2\\sqrt{x}}$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc16',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$y=e^{\\cos 2x}$ is $e^u$ with $u=\\cos 2x$. What is $u\'$?', 'strategy_selection',
        [{ id: 'a', label: '$-2\\sin 2x$' }, { id: 'b', label: '$2\\sin 2x$' }, { id: 'c', label: '$-\\sin 2x$' }],
        'a',
        ['$\\dfrac{d}{dx}[\\cos 2x] = -\\sin 2x \\times 2 = -2\\sin 2x$ — chain rule again, inside the chain rule.'],
        '$u\' = -2\\sin 2x$ (don\'t forget both the negative sign from differentiating $\\cos$ AND the inner factor of $2$).'),
      mc('S2', 'Applying $\\dfrac{d}{dx}[e^u] = e^u \\times u\'$ with $u\'=-2\\sin 2x$, what is $\\dfrac{dy}{dx}$?', 'execution',
        [{ id: 'a', label: '$-2\\sin(2x)e^{\\cos 2x}$' }, { id: 'b', label: '$2\\sin(2x)e^{\\cos 2x}$' }, { id: 'c', label: '$e^{\\cos 2x}$' }],
        'a',
        ['Keep the negative sign from $u\'$ — dropping it is the most common mistake here.'],
        '$e^{\\cos 2x} \\times (-2\\sin 2x) = -2\\sin(2x)e^{\\cos 2x}$ — select this from the options next.'),
    ],
  },
  {
    id: 'girr2020-mc26a',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$y=xe^{3x}$ is a product of $u=x$ ($u\'=1$) and $v=e^{3x}$ ($v\'=3e^{3x}$, chain rule). Applying $u\'v+uv\'$, which expression matches (before factorising)?', 'strategy_selection',
        [{ id: 'a', label: '$e^{3x} + 3xe^{3x}$' }, { id: 'b', label: '$e^{3x} - 3xe^{3x}$' }, { id: 'c', label: '$xe^{3x} + 3e^{3x}$' }],
        'a',
        ['$u\'v = 1 \\times e^{3x} = e^{3x}$, and $uv\' = x \\times 3e^{3x} = 3xe^{3x}$ — added together, not subtracted.'],
        '$e^{3x} + 3xe^{3x}$ — both terms share a common factor of $e^{3x}$.'),
      mc('S2', 'Factoring out the common $e^{3x}$ from $e^{3x} + 3xe^{3x}$, which matches?', 'verification',
        [{ id: 'a', label: '$e^{3x}(1+3x)$' }, { id: 'b', label: '$3e^{3x}$' }, { id: 'c', label: '$e^{3x}$' }],
        'a',
        ['$e^{3x} + 3xe^{3x} = e^{3x}(1) + e^{3x}(3x) = e^{3x}(1+3x)$.'],
        '$e^{3x}(1+3x)$ — select this from the options next.'),
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
