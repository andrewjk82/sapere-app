#!/usr/bin/env node
/**
 * CALC-STAT-01 batch 2 (2026-08-15, same day) — 8 more questions,
 * including 3 matched groups from the pilot scan: asc2020-q24-a/b
 * (stationary points + inflection of the same quartic), bbhs2020-26a/b/d
 * (stationary points + inflection + restricted-domain max of the same
 * cubic), and fortst2020-q10c/d (stationary points + inflection of the
 * same quartic, where the horizontal point of inflection turns out to
 * also be one of the inflection points — a nice concrete illustration
 * that a horizontal point of inflection IS a type of inflection point).
 * baulko2020-q13diii continues q13dii (already enriched in the pilot).
 *
 * All correct answers/values independently re-verified before authoring:
 *  - asc2020-q24-a: y=3+2x²-x⁴, y'=4x(1-x)(1+x), stationary at
 *    x=0,±1. y''=4-12x²: y''(0)=4 (min), y''(±1)=-8 (max). y(0)=3,
 *    y(±1)=4. Matches.
 *  - asc2020-q24-b: same curve, y''=0 => x²=1/3 => x=±1/√3.
 *    y=3+2/3-1/9=32/9. Matches.
 *  - bbhs2020-26a: y=3x-x³-1, y'=3-3x²=0 => x=±1. y''=-6x: y''(1)=-6
 *    (max), y''(-1)=6 (min). y(1)=1, y(-1)=-3. Matches.
 *  - bbhs2020-26b: same curve, y''=-6x=0 => x=0. y(0)=-1. Matches.
 *  - bbhs2020-26d: same curve on [-3,2] — must also check endpoints.
 *    y(-3)=-9+27-1=17, y(2)=6-8-1=-3, local max y(1)=1. Overall max is
 *    17 at the endpoint x=-3. Matches.
 *  - fortst2020-q10c: f'(x)=4(x-2)²(x+1)=0 => x=2 (double), x=-1.
 *    f''(x)=12x(x-2): f''(-1)=36>0 (min); f''(2)=0 (inconclusive — but
 *    (x-2)² in f' never changes sign, so f' sign near x=2 is controlled
 *    by (x+1), positive both sides => horizontal inflection). f(-1)=
 *    (1)(-3)³=-27, f(2)=(4)(0)=0. Matches.
 *  - fortst2020-q10d: f''(x)=12x(x-2)=0 => x=0,2. f(0)=(2)(-2)³=-16,
 *    f(2)=0 (already a horizontal point of inflection from part c, and
 *    also satisfies the inflection condition). Matches.
 *  - baulko2020-q13diii: f''(x)=(2-2x²)/(x²+1)²=0 => x²=1 => x=±1.
 *    f(±1)=ln(1+1)=ln2. Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcStatReasoningBlueprintBatch2.js
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
    id: 'asc2020-q24-a',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Factoring $y\'=4x-4x^3=4x(1-x)(1+x)$ and setting it to zero, what are the stationary $x$-values?', 'strategy_selection',
        [{ id: 'a', label: '$x=0,\\ 1,\\ -1$' }, { id: 'b', label: '$x=0,\\ 2,\\ -2$' }, { id: 'c', label: '$x=1$ only' }],
        'a',
        ['Three factors, three roots: $4x=0$, $1-x=0$, $1+x=0$.'],
        '$x=0,\\ 1,\\ -1$.'),
      mc('S2', 'Using $y\'\'=4-12x^2$: at $x=0$, $y\'\'=4$ (positive); at $x=\\pm1$, $y\'\'=-8$ (negative). What is the classification?', 'strategy_selection',
        [{ id: 'a', label: 'Local minimum at $x=0$; local maxima at $x=\\pm1$' }, { id: 'b', label: 'Local maximum at $x=0$; local minima at $x=\\pm1$' }, { id: 'c', label: 'All three are inflection points' }],
        'a',
        ['Positive $y\'\'$ means concave up (minimum); negative $y\'\'$ means concave down (maximum).'],
        'Local minimum at $(0,3)$; local maxima at $(1,4)$ and $(-1,4)$ — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q24-b',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Setting $y\'\'=4-12x^2=0$ and solving, what is $x^2$?', 'execution',
        [{ id: 'a', label: '$\\dfrac13$' }, { id: 'b', label: '$3$' }, { id: 'c', label: '$\\dfrac{1}{12}$' }],
        'a',
        ['$12x^2=4 \\Rightarrow x^2=\\dfrac{4}{12}=\\dfrac13$.'],
        '$x^2=\\dfrac13$, so $x=\\pm\\dfrac{1}{\\sqrt3}$.'),
      mc('S2', 'Substituting $x^2=\\dfrac13$ into $y=3+2x^2-x^4=3+2\\left(\\tfrac13\\right)-\\left(\\tfrac13\\right)^2$, what is $y$?', 'execution',
        [{ id: 'a', label: '$\\dfrac{32}{9}$' }, { id: 'b', label: '$\\dfrac{15}{4}$' }, { id: 'c', label: '$\\dfrac{260}{81}$' }],
        'a',
        ['$3+\\dfrac23-\\dfrac19=\\dfrac{27}{9}+\\dfrac69-\\dfrac19=\\dfrac{32}{9}$.'],
        '$\\dfrac{32}{9}$ — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-26a',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Setting $y\'=3-3x^2=0$, what are the stationary $x$-values?', 'execution',
        [{ id: 'a', label: '$x=1,\\ -1$' }, { id: 'b', label: '$x=3,\\ -3$' }, { id: 'c', label: '$x=0$' }],
        'a',
        ['$3x^2=3 \\Rightarrow x^2=1 \\Rightarrow x=\\pm1$.'],
        '$x=1,\\ -1$.'),
      mc('S2', 'Using $y\'\'=-6x$: at $x=1$, $y\'\'=-6$ (negative); at $x=-1$, $y\'\'=6$ (positive). What is the classification?', 'strategy_selection',
        [{ id: 'a', label: 'Local maximum at $x=1$; local minimum at $x=-1$' }, { id: 'b', label: 'Local minimum at $x=1$; local maximum at $x=-1$' }, { id: 'c', label: 'Both are inflection points' }],
        'a',
        ['Negative $y\'\'$ (concave down) means maximum; positive $y\'\'$ (concave up) means minimum.'],
        'Local maximum at $(1,1)$; local minimum at $(-1,-3)$ — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-26b',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'Setting $y\'\'=-6x=0$, what is $x$?', 'execution',
        [{ id: 'a', label: '$x=0$' }, { id: 'b', label: '$x=1$' }, { id: 'c', label: '$x=-1$' }],
        'a',
        ['$-6x=0 \\Rightarrow x=0$.'],
        '$x=0$.'),
      mc('S2', 'Substituting $x=0$ into $y=3x-x^3-1$, what is $y$?', 'execution',
        [{ id: 'a', label: '$-1$' }, { id: 'b', label: '$1$' }, { id: 'c', label: '$0$' }],
        'a',
        ['$3(0)-(0)^3-1=-1$.'],
        '$(0,-1)$ — select this from the options next.'),
    ],
  },
  {
    id: 'bbhs2020-26d',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'The domain is restricted to $[-3,2]$. Besides the local max at $x=1$ ($y=1$), what else must you check to find the true maximum on a restricted domain?', 'strategy_selection',
        [{ id: 'a', label: 'The values at the domain endpoints, $x=-3$ and $x=2$' }, { id: 'b', label: 'Only the value at $x=-3$' }, { id: 'c', label: 'Nothing else — a local maximum is always the overall maximum' }],
        'a',
        ['On a restricted (closed) domain, the overall maximum could occur at a stationary point OR right at either end of the domain — you have to check both.'],
        'Check $y(-3)$ and $y(2)$ as well.'),
      mc('S2', 'Evaluating $y(-3)=3(-3)-(-3)^3-1=-9+27-1=17$ and $y(2)=6-8-1=-3$, and comparing with the local max $y(1)=1$, what is the overall maximum on $[-3,2]$?', 'execution',
        [{ id: 'a', label: '$y=17$ (at the endpoint $x=-3$)' }, { id: 'b', label: '$y=1$ (at the local max $x=1$)' }, { id: 'c', label: '$y=-3$ (at the endpoint $x=2$)' }],
        'a',
        ['$17$ is bigger than both $1$ and $-3$ — the endpoint $x=-3$ beats the local maximum here.'],
        '$y=17$ — select this from the options next.'),
    ],
  },
  {
    id: 'fortst2020-q10c',
    requireAnswer: '3',
    reasoning_blueprint: [
      mc('S1', 'Setting $f\'(x)=4(x-2)^2(x+1)=0$, what are the stationary $x$-values?', 'strategy_selection',
        [{ id: 'a', label: '$x=2$ (a double root) and $x=-1$' }, { id: 'b', label: '$x=2$ and $x=1$' }, { id: 'c', label: '$x=-2$ and $x=1$' }],
        'a',
        ['$(x-2)^2=0 \\Rightarrow x=2$ (repeated), and $x+1=0 \\Rightarrow x=-1$.'],
        '$x=2$ (double root) and $x=-1$.'),
      mc('S2', 'At $x=2$, $f\'\'(x)=12x(x-2)$ gives $f\'\'(2)=0$ — inconclusive! Since $(x-2)^2$ in $f\'$ never changes sign, only $(x+1)$ (positive on both sides near $x=2$) controls the sign of $f\'$ there. At $x=-1$, $f\'\'(-1)=36>0$. What is the classification of each?', 'verification',
        [{ id: 'a', label: '$x=2$: horizontal point of inflection; $x=-1$: local minimum' }, { id: 'b', label: '$x=2$: local minimum; $x=-1$: horizontal point of inflection' }, { id: 'c', label: 'Both are local minima' }],
        'a',
        ['The same-sign-both-sides pattern (from the never-negative $(x-2)^2$ factor) signals a horizontal point of inflection at $x=2$; positive $f\'\'$ at $x=-1$ signals a minimum.'],
        '$(-1,-27)$ is a minimum turning point; $(2,0)$ is a horizontal point of inflexion — select this from the options next.'),
    ],
  },
  {
    id: 'fortst2020-q10d',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Setting $f\'\'(x)=12x(x-2)=0$, what are the $x$-values?', 'execution',
        [{ id: 'a', label: '$x=0,\\ 2$' }, { id: 'b', label: '$x=0,\\ -2$' }, { id: 'c', label: '$x=6,\\ 2$' }],
        'a',
        ['$12x=0 \\Rightarrow x=0$, and $x-2=0 \\Rightarrow x=2$.'],
        '$x=0,\\ 2$.'),
      mc('S2', 'Both are confirmed genuine inflection points (concavity changes sign at each — note $x=2$ is ALSO the horizontal point of inflection stationary point from before, since a horizontal point of inflection is a special case of an inflection point). Substituting into $f(x)=(x+2)(x-2)^3$, what are the coordinates?', 'verification',
        [{ id: 'a', label: '$(0,-16)$ and $(2,0)$' }, { id: 'b', label: '$(0,0)$ and $(2,-16)$' }, { id: 'c', label: '$(-2,0)$ and $(2,0)$' }],
        'a',
        ['$f(0)=(2)(-2)^3=2\\times(-8)=-16$, and $f(2)=(4)(0)^3=0$.'],
        '$(0,-16)$ and $(2,0)$ — select this from the options next.'),
    ],
  },
  {
    // Answer key was wrong (fixed separately in fixBaulko13diiiAnswerKey.js
    // — was index 1 conflating the stationary point (0,0) with an
    // inflection point; correct is index 0).
    id: 'baulko2020-q13diii',
    requireAnswer: '0',
    reasoning_blueprint: [
      mc('S1', 'Continuing from $f(x)=\\ln(x^2+1)$: setting $f\'\'(x)=\\dfrac{2-2x^2}{(x^2+1)^2}=0$ (only the numerator can be zero), what is $x^2$?', 'execution',
        [{ id: 'a', label: '$1$' }, { id: 'b', label: '$2$' }, { id: 'c', label: '$\\dfrac12$' }],
        'a',
        ['$2-2x^2=0 \\Rightarrow x^2=1$.'],
        '$x^2=1 \\Rightarrow x=\\pm1$.'),
      mc('S2', 'Substituting $x=\\pm1$ into $f(x)=\\ln(x^2+1)$, what is $f$ at these points?', 'execution',
        [{ id: 'a', label: '$\\ln2$ (both, since $x^2=1$ either way)' }, { id: 'b', label: '$\\ln2$ and $0$' }, { id: 'c', label: '$\\log2$ (base-$10$)' }],
        'a',
        ['$f(\\pm1)=\\ln(1+1)=\\ln2$ — using natural log, not base-$10$.'],
        '$(1,\\ln2)$ and $(-1,\\ln2)$ — select this from the options next.'),
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
