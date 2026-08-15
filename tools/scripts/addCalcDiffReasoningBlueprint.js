#!/usr/bin/env node
/**
 * Pilot question-specific reasoning blueprints for CALC-DIFF-01 (3rd DNA,
 * 2026-08-15) — 8 questions chosen to span the DNA's real rule variety:
 * pure polynomial, exponential-base chain rule, product rule, quotient
 * rule, combined product+chain rule, plain chain rule (power-of-function),
 * chain rule on ln, and a simplify-before-differentiating log trick.
 *
 * All correct answers/values independently re-verified before authoring:
 *  - car2020-mc3: f(x)=x³/3-5x²+2x+10, f'(x)=x²-10x+2. Setting f'=-14
 *    gives x²-10x+16=0 => (x-2)(x-8)=0 => x=2,8. Matches doc's answer.
 *  - car2020-mc9: d/dx[3^{4x+5}] = ln3 × 4 × 3^{4x+5} (a^{g(x)} chain rule,
 *    a=3, g'(x)=4). Matches doc.
 *  - car2020-q14a: y=x²eˣ, y'=2xeˣ+x²eˣ = xeˣ(x+2). Matches doc.
 *  - car2020-q14b: f(x)=(eˣ+1)/(2x), f'(x)=[eˣ·2x-(eˣ+1)·2]/(2x)²
 *    = (xeˣ-eˣ-1)/(2x²). Matches doc.
 *  - abb2020-mc6: f(x)=3x⁴(4-x)³, f'(x)=12x³(4-x)³-9x⁴(4-x)²
 *    = 3x³(4-x)²[4(4-x)-3x] = 3x³(4-x)²(16-7x). Matches doc.
 *  - asc2020-q13: (eˣ+x)⁴, derivative = 4(eˣ+x)³(eˣ+1) via chain rule with
 *    inner derivative eˣ+1. Matches doc.
 *  - bar2020-mc1: d/dx[ln(cos x)] = (1/cos x)(-sin x) = -tan x. Matches doc.
 *  - baulko2020-mc2: (4x²-9)/(2x-3) = (2x-3)(2x+3)/(2x-3) = 2x+3 (x≠3/2),
 *    so d/dx[ln(2x+3)] = 2/(2x+3). Matches doc.
 *
 * Usage:
 *   node tools/scripts/addCalcDiffReasoningBlueprint.js
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
    id: 'car2020-mc3',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Differentiate $f(x) = \\dfrac{x^3}{3} - 5x^2 + 2x + 10$.', 'execution',
        [{ id: 'a', label: '$x^2 - 10x + 2$' }, { id: 'b', label: '$3x^2 - 10x + 2$' }, { id: 'c', label: '$x^2 - 10x + 10$' }],
        'a',
        ['$\\frac{d}{dx}\\left[\\frac{x^3}{3}\\right] = x^2$ — the $\\frac13$ and the power-rule $3$ cancel.', 'The derivative of a constant ($+10$) is $0$.'],
        '$f\'(x) = x^2 - 10x + 2$.'),
      mc('S2', 'Setting $f\'(x) = -14$, which equation do you need to solve?', 'strategy_selection',
        [{ id: 'a', label: '$x^2 - 10x + 16 = 0$' }, { id: 'b', label: '$x^2 - 10x - 12 = 0$' }, { id: 'c', label: '$x^2 + 10x + 16 = 0$' }],
        'a',
        ['$x^2 - 10x + 2 = -14 \\Rightarrow x^2 - 10x + 2 + 14 = 0$'],
        '$x^2-10x+2=-14 \\Rightarrow x^2-10x+16=0$, which factorises as $(x-2)(x-8)=0$ — select the resulting $x$-values from the options next.'),
    ],
  },
  {
    id: 'car2020-mc9',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Which rule applies to $a^{g(x)}$, where $a$ is a constant base and $g(x)$ is a function of $x$?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{d}{dx}\\left[a^{g(x)}\\right] = a^{g(x)} \\ln a \\times g\'(x)$ (exponential chain rule)' }, { id: 'b', label: '$\\dfrac{d}{dx}\\left[a^{g(x)}\\right] = g(x) \\cdot a^{g(x)-1}$ (treat it like a power rule)' }, { id: 'c', label: 'Product rule, treating $a$ and $g(x)$ as separate factors' }],
        'a',
        ['A constant raised to a variable power is NOT the power rule — that only works when the variable is the base.', 'Differentiating $a^{g(x)}$ brings down a factor of $\\ln a$, then multiplies by the inner derivative $g\'(x)$.'],
        '$\\dfrac{d}{dx}\\left[a^{g(x)}\\right] = a^{g(x)}\\ln a \\times g\'(x)$ — the exponential chain rule.'),
      mc('S2', 'With $a=3$, $g(x)=4x+5$, so $g\'(x)=4$. Substituting into the rule, what is the derivative?', 'execution',
        [{ id: 'a', label: '$\\ln 3 \\times 4 \\times 3^{4x+5}$' }, { id: 'b', label: '$4 \\times 3^{4x+5}$' }, { id: 'c', label: '$\\ln 3 \\times 3^{4x+5}$' }],
        'a',
        ['Don\'t drop the $\\ln 3$ factor, and don\'t drop the inner-derivative factor of $4$ — both must appear.'],
        '$\\ln 3 \\times 4 \\times 3^{4x+5}$ — both the $\\ln a$ factor and the inner derivative $g\'(x)=4$ are needed.'),
    ],
  },
  {
    id: 'car2020-q14a',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', '$y = x^2 e^x$ is a...', 'recognition',
        [{ id: 'a', label: 'product of two separate functions, $x^2$ and $e^x$' }, { id: 'b', label: 'single composed function (needs the chain rule)' }, { id: 'c', label: 'quotient of $x^2$ over $e^{-x}$' }],
        'a',
        ['$x^2$ and $e^x$ are two genuinely separate pieces multiplied together, not one nested inside the other.'],
        '$x^2$ and $e^x$ are multiplied together as two separate functions — this needs the product rule.'),
      mc('S2', 'With $u=x^2$ ($u\'=2x$) and $v=e^x$ ($v\'=e^x$), applying $u\'v+uv\'$ gives which expression?', 'execution',
        [{ id: 'a', label: '$2xe^x + x^2e^x$' }, { id: 'b', label: '$2xe^x - x^2e^x$' }, { id: 'c', label: '$2x + e^x$' }],
        'a',
        ['Product rule adds the two terms, it doesn\'t subtract — and both original functions must appear in each term.'],
        '$2xe^x + x^2e^x$, which factorises to $xe^x(x+2)$ — select this from the options next.'),
    ],
  },
  {
    id: 'car2020-q14b',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$f(x) = \\dfrac{e^x+1}{2x}$ is a quotient with $u=e^x+1$, $v=2x$. Which is the correct quotient-rule setup (before simplifying)?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{e^x \\cdot 2x - (e^x+1)\\cdot 2}{(2x)^2}$' }, { id: 'b', label: '$\\dfrac{e^x \\cdot 2x + (e^x+1)\\cdot 2}{(2x)^2}$' }, { id: 'c', label: '$\\dfrac{(e^x+1)\\cdot 2 - e^x \\cdot 2x}{(2x)^2}$' }],
        'a',
        ['Quotient rule is $\\dfrac{u\'v-uv\'}{v^2}$ — here $u\'=e^x$, $v=2x$, $u=e^x+1$, $v\'=2$, and it subtracts, not adds.'],
        '$\\dfrac{u\'v-uv\'}{v^2} = \\dfrac{e^x(2x) - (e^x+1)(2)}{(2x)^2}$ — get the order and the subtraction right.'),
      mc('S2', 'Simplifying $\\dfrac{2xe^x - 2(e^x+1)}{4x^2}$, which matches?', 'verification',
        [{ id: 'a', label: '$\\dfrac{xe^x - e^x - 1}{2x^2}$' }, { id: 'b', label: '$\\dfrac{xe^x + e^x + 1}{2x^2}$' }, { id: 'c', label: '$\\dfrac{xe^x - e^x}{2x^2}$' }],
        'a',
        ['Factor $2$ out of the numerator and cancel it with the $4$ in the denominator, keeping the minus signs from expanding $-2(e^x+1)$.'],
        '$\\dfrac{2xe^x-2e^x-2}{4x^2} = \\dfrac{xe^x-e^x-1}{2x^2}$ — select this from the options next.'),
    ],
  },
  {
    id: 'abb2020-mc6',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$f(x) = 3x^4(4-x)^3$ needs which combination of rules?', 'recognition',
        [{ id: 'a', label: 'Product rule (for the two factors) AND chain rule (to differentiate $(4-x)^3$)' }, { id: 'b', label: 'Product rule only' }, { id: 'c', label: 'Chain rule only' }],
        'a',
        ['There are two multiplied factors ($3x^4$ and $(4-x)^3$) — that\'s the product rule. But $(4-x)^3$ is itself a composition needing the chain rule to differentiate.'],
        'Two multiplied factors need the product rule, and $(4-x)^3$ (a power of an inner expression) needs the chain rule inside that.'),
      mc('S2', 'With $u=3x^4$ ($u\'=12x^3$) and $v=(4-x)^3$ ($v\'=-3(4-x)^2$, by the chain rule), applying $u\'v+uv\'$ gives which expression before simplifying?', 'execution',
        [{ id: 'a', label: '$12x^3(4-x)^3 - 9x^4(4-x)^2$' }, { id: 'b', label: '$12x^3(4-x)^3 + 9x^4(4-x)^2$' }, { id: 'c', label: '$12x^3(4-x)^2 - 9x^4(4-x)^3$' }],
        'a',
        ['$v\' = -3(4-x)^2$ is already negative, so $uv\'$ contributes a negative term — don\'t flip it back to a plus.'],
        '$12x^3(4-x)^3 - 9x^4(4-x)^2$, which factorises to $3x^3(4-x)^2[4(4-x)-3x] = 3x^3(4-x)^2(16-7x)$ — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q13',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$(e^x+x)^4$ is an outer power-of-4 wrapped around inner $g(x)=e^x+x$. Which is the chain-rule setup?', 'strategy_selection',
        [{ id: 'a', label: '$4(e^x+x)^3 \\times g\'(x)$' }, { id: 'b', label: '$4(e^x+x)^3$ (no inner derivative needed)' }, { id: 'c', label: '$4(e^x+x)^3 \\times x$' }],
        'a',
        ['A power raised on an inner expression always needs the inner expression\'s own derivative multiplied in — that\'s the whole point of the chain rule.'],
        '$4(e^x+x)^3 \\times g\'(x)$ — you still need to find and substitute $g\'(x)$.'),
      mc('S2', '$g(x)=e^x+x$ has $g\'(x)=e^x+1$. Substituting, what is the full derivative?', 'execution',
        [{ id: 'a', label: '$4(e^x+x)^3(e^x+1)$' }, { id: 'b', label: '$4(e^x+x)^3 e^x$' }, { id: 'c', label: '$4(e^x+x)^3$' }],
        'a',
        ['Don\'t drop the $+1$ from $g\'(x) = e^x+1$ — the derivative of $x$ is $1$, not $0$.'],
        '$4(e^x+x)^3(e^x+1)$ — both terms of $g\'(x)$ must appear.'),
    ],
  },
  {
    id: 'bar2020-mc1',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$\\ln(\\cos x)$ is $\\ln(u)$ with $u=\\cos x$. The chain rule gives $\\dfrac{1}{u} \\times u\'$. What is $u\'$?', 'strategy_selection',
        [{ id: 'a', label: '$-\\sin x$' }, { id: 'b', label: '$\\sin x$' }, { id: 'c', label: '$-\\cos x$' }],
        'a',
        ['$\\dfrac{d}{dx}[\\cos x] = -\\sin x$ — don\'t drop the negative sign.'],
        '$u\' = -\\sin x$.'),
      mc('S2', 'Substituting into $\\dfrac{1}{u} \\times u\' = \\dfrac{1}{\\cos x} \\times (-\\sin x)$, which simplifies to?', 'execution',
        [{ id: 'a', label: '$-\\tan x$' }, { id: 'b', label: '$\\tan x$' }, { id: 'c', label: '$-\\sec x$' }],
        'a',
        ['$\\dfrac{\\sin x}{\\cos x} = \\tan x$ — keep the negative sign from $u\'$.'],
        '$\\dfrac{-\\sin x}{\\cos x} = -\\tan x$ — select this from the options next.'),
    ],
  },
  {
    id: 'baulko2020-mc2',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Before differentiating, $4x^2-9$ factors as $(2x-3)(2x+3)$. What does the whole fraction $\\dfrac{4x^2-9}{2x-3}$ simplify to (for $x \\neq \\frac32$)?', 'strategy_selection',
        [{ id: 'a', label: '$2x+3$' }, { id: 'b', label: '$2x-3$' }, { id: 'c', label: '$4x+3$' }],
        'a',
        ['$\\dfrac{(2x-3)(2x+3)}{2x-3}$ — the $(2x-3)$ factors cancel, leaving the other factor.'],
        '$\\dfrac{4x^2-9}{2x-3} = \\dfrac{(2x-3)(2x+3)}{2x-3} = 2x+3$ — simplify BEFORE differentiating, it\'s much easier than quotient rule on the original fraction.'),
      mc('S2', 'Differentiating $\\log_e(2x+3)$ using the chain rule $\\dfrac{1}{u} \\times u\'$ with $u=2x+3$, $u\'=2$, what do you get?', 'execution',
        [{ id: 'a', label: '$\\dfrac{2}{2x+3}$' }, { id: 'b', label: '$\\dfrac{1}{2x+3}$' }, { id: 'c', label: '$\\dfrac{2}{2x-3}$' }],
        'a',
        ['Don\'t drop the $u\'=2$ factor, and use the simplified denominator $2x+3$, not the original $2x-3$.'],
        '$\\dfrac{1}{2x+3} \\times 2 = \\dfrac{2}{2x+3}$ — select this from the options next.'),
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
