#!/usr/bin/env node
/**
 * Revise FIN-GP-01's question-specific pre-steps (2026-08-16, user asked
 * to retrofit the oldest DNA first: "가장 먼저 만든 FIN-GP-01부터") to
 * follow the "target what's unique to THIS question" principle
 * established on abb2020-mc6 (see the sapere-question-dna skill).
 *
 * Of FIN-GP-01's 10 enriched questions, 4 already satisfy the principle
 * as originally written and are left untouched: asc2020-q30-a/c/d and
 * asc2020-q30v all build their steps directly from the problem's own
 * real numbers (1000, 1.05, 100 for the drop-bears; 500, 1.08, 60 for
 * the fish) rather than an abstract recognition template.
 *
 * The 5 questions revised here were the clearer offenders — the annuity
 * questions (Jenna/Toby/Sophia/Marcus/dane2020-q34a) all used a
 * near-identical "identify rate → identify periods → apply factor"
 * 3-step shape, and asc2020-q30-b had 2 redundant steps duplicating
 * asc2020-q30-a's T1/T2 build instead of addressing what part (b) itself
 * asks (the GP-sum closed form). Revised to lean into what's genuinely
 * different about each:
 *   - Jenna (bar2020-q14ai): straight rate/period conversion + apply
 *     (the baseline case).
 *   - Marcus (bar2020-q14aiv): same skill, different numbers, kept lean.
 *   - Sophia (bar2020-q14aiiv): REARRANGE the formula backward
 *     (R=FV/factor) — a genuinely different algebraic move from
 *     Jenna/Marcus's forward FV=R×factor.
 *   - Toby (bar2020-q14aii): same backward-rearrange as Sophia, PLUS a
 *     second stage unique to this question — comparing the result to
 *     Jenna's known $500 contribution.
 *   - dane2020-q34a: shifted the first step from execution ("identify
 *     the rate") to verification ("does the given factor match what
 *     this problem's own numbers require?") for a different reasoning
 *     axis, since the forward FV=R×factor skill itself duplicates
 *     Jenna's.
 *   - asc2020-q30-b: was 4 steps (2 redundant with part (a)'s T1/T2
 *     build); trimmed to 2 steps that actually address the GP-sum
 *     closed-form derivation part (b) asks for (100/(1.05-1)=2000, then
 *     the simplified T_n).
 *
 * Highlighting (the {before,mark,after,color} mechanism from
 * abb2020-mc6) was deliberately NOT used on these — these questions mix
 * literal "$" for CURRENCY ("$500", "$3000") with math notation, and
 * naive string-splitting around a $-delimited fragment risks colliding
 * with MathView's currency-vs-math-delimiter detection. Not worth the
 * risk for this batch; highlighting stays reserved for questions whose
 * math notation is unambiguous.
 *
 * All correct answers/values independently re-verified before authoring
 * (all match the docs' existing marked-correct answers, none of which
 * changed here — only the pre-steps did):
 *   Jenna: 500×6.7169=3358.45. Marcus: 400×4.2782=1711.28.
 *   Sophia: 3000/4.2782≈701.29. Toby: 5000/6.7169≈744.39, −500=244.39.
 *   Dane: 1200×6.3081=7569.72. asc2020-q30-b: 100/0.05=2000.
 *
 * Usage:
 *   node tools/scripts/reviseFinGp01PreSteps.js
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
    id: 'asc2020-q30-b',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', 'The poaching amounts (100 each year) form a GP-style sum with common ratio 1.05. This sum simplifies using the constant $\\dfrac{100}{1.05-1}$. What is $100\\div0.05$?', 'execution',
        [{ id: 'a', label: '$2000$' }, { id: 'b', label: '$1900$' }, { id: 'c', label: '$500$' }],
        'a',
        ['$100\\div0.05$ — dividing by $0.05$ is the same as multiplying by $20$.'],
        '$100\\div0.05=2000$.'),
      mc('S2', 'Using this, $T_n=1000(1.05)^n-2000\\left[(1.05)^n-1\\right]$, which simplifies to $2000-1000(1.05)^n$ (the $1000(1.05)^n$ and $-2000(1.05)^n$ combine to $-1000(1.05)^n$). Which option matches?', 'verification',
        [{ id: 'a', label: '$T_n=2000-1000(1.05)^n$' }, { id: 'b', label: '$T_n=2000+1000(1.05)^n$' }, { id: 'c', label: '$T_n=4000-1000(1.05)^n$' }],
        'a',
        ['$1000(1.05)^n-2000(1.05)^n=-1000(1.05)^n$, leaving $2000-1000(1.05)^n$.'],
        '$T_n=2000-1000(1.05)^n$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q14ai',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'Jenna\'s annuity pays 9% p.a. compounded every SIX MONTHS. What is the interest rate per compounding period?', 'execution',
        [{ id: 'a', label: '$4.5\\%$ (i.e. $9\\%\\div2$)' }, { id: 'b', label: '$0.75\\%$ (i.e. $9\\%\\div12$, treating it like monthly compounding)' }, { id: 'c', label: '$9\\%$ (the annual rate, unconverted)' }],
        'a',
        ['"Compounded every six months" means 2 compounding periods per year — divide the annual rate by 2, not by 12.'],
        '$9\\%\\div2=4.5\\%$ per period.'),
      mc('S2', 'At 2 periods per year, how many six-monthly periods are there in 3 years?', 'execution',
        [{ id: 'a', label: '$6$' }, { id: 'b', label: '$3$ (used the number of years directly)' }, { id: 'c', label: '$1.5$ (divided years by periods-per-year instead of multiplying)' }],
        'a',
        ['$3\\text{ years}\\times2\\text{ periods/year}=6$ periods.'],
        '$6$ periods.'),
      mc('S3', 'Using $FV=R\\times\\text{factor}$ with Jenna\'s $\\$500$ contribution and the given factor $6.7169$ (for $4.5\\%$, $6$ periods), what is the future value?', 'execution',
        [{ id: 'a', label: '$\\$3358.45$' }, { id: 'b', label: '$\\$3357.45$' }, { id: 'c', label: '$\\$3359.45$' }],
        'a',
        ['$500\\times6.7169=3358.45$.'],
        '$\\$3358.45$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q14aiv',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'Marcus\'s annuity also compounds every six months, over 2 years. How many six-monthly periods is that?', 'execution',
        [{ id: 'a', label: '$4$' }, { id: 'b', label: '$2$ (used the number of years directly)' }, { id: 'c', label: '$8$ (multiplied years by 4 instead of by 2)' }],
        'a',
        ['$2\\text{ years}\\times2\\text{ periods/year}=4$ periods.'],
        '$4$ periods — matching the given factor\'s "4 periods".'),
      mc('S2', 'Using $FV=R\\times\\text{factor}$ with Marcus\'s $\\$400$ contribution and the given factor $4.2782$, what is the future value?', 'execution',
        [{ id: 'a', label: '$\\$1711.28$' }, { id: 'b', label: '$\\$1710.28$' }, { id: 'c', label: '$\\$1712.28$' }],
        'a',
        ['$400\\times4.2782=1711.28$.'],
        '$\\$1711.28$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q14aiiv',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'Unlike Jenna and Marcus, Sophia is given a TARGET future value ($\\$3000$), not a contribution amount — so you need to work BACKWARD. Rearranging $FV=R\\times\\text{factor}$ to solve for $R$, what is the correct formula?', 'strategy_selection',
        [{ id: 'a', label: '$R=\\dfrac{FV}{\\text{factor}}$' }, { id: 'b', label: '$R=FV\\times\\text{factor}$' }, { id: 'c', label: '$R=\\dfrac{\\text{factor}}{FV}$' }],
        'a',
        ['Divide both sides of $FV=R\\times\\text{factor}$ by "factor" to isolate $R$.'],
        '$R=\\dfrac{FV}{\\text{factor}}$ — the reverse of Jenna and Marcus\'s calculation.'),
      mc('S2', 'Using $R=\\dfrac{3000}{4.2782}$, what is the required six-monthly contribution?', 'execution',
        [{ id: 'a', label: '$\\$701.29$' }, { id: 'b', label: '$\\$700.29$' }, { id: 'c', label: '$\\$702.29$' }],
        'a',
        ['$3000\\div4.2782\\approx701.29$.'],
        '$\\$701.29$ — select this from the options next.'),
    ],
  },
  {
    id: 'bar2020-q14aii',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'Toby needs a target future value of $\\$5000$, using the SAME factor as Jenna ($6.7169$). Rearranging $FV=R\\times\\text{factor}$ for $R$ (the same backward move Sophia needed), what is Toby\'s required six-monthly contribution?', 'strategy_selection',
        [{ id: 'a', label: '$\\$744.39$ (i.e. $5000\\div6.7169$)' }, { id: 'b', label: '$\\$741.39$' }, { id: 'c', label: '$\\$745.39$' }],
        'a',
        ['$5000\\div6.7169\\approx744.39$.'],
        'Toby needs to contribute $\\$744.39$ every six months.'),
      mc('S2', 'Jenna contributes $\\$500$ every six months. How much MORE than Jenna does Toby need to contribute?', 'execution',
        [{ id: 'a', label: '$\\$744.39-\\$500=\\$244.39$' }, { id: 'b', label: '$\\$744.39+\\$500=\\$1244.39$' }, { id: 'c', label: '$\\$500-\\$744.39$ (negative — doesn\'t match "how much MORE")' }],
        'a',
        ['"How much more" means subtract Jenna\'s amount FROM Toby\'s (the bigger one), not add them.'],
        '$\\$744.39-\\$500=\\$244.39$ — select this from the options next.'),
    ],
  },
  {
    id: 'dane2020-q34a',
    requireAnswer: '2',
    reasoning_blueprint: [
      mc('S1', 'This annuity is 4% p.a. compounded half-yearly, over 3 years — so 2% per period for 6 periods. Does the given factor ($6.3081$, labelled "$n=6$ periods at $2\\%$") actually match this problem\'s own rate and period count?', 'verification',
        [{ id: 'a', label: 'Yes — $4\\%\\div2=2\\%$ per period, and $3\\times2=6$ periods, both match exactly' }, { id: 'b', label: 'No — this problem needs $4\\%$ for $3$ periods instead' }, { id: 'c', label: 'No — this problem needs $1\\%$ for $12$ periods, treating it as monthly' }],
        'a',
        ['Always check that a GIVEN factor\'s rate and period count actually correspond to what the problem\'s own numbers require before using it.'],
        'Yes — $4\\%\\div2=2\\%$ and $3\\text{ years}\\times2=6$ periods, exactly matching the given factor.'),
      mc('S2', 'Using $FV=R\\times\\text{factor}$ with the $\\$1200$ contribution and factor $6.3081$, what is the final amount immediately after the last contribution?', 'execution',
        [{ id: 'a', label: '$\\$7569.72$' }, { id: 'b', label: '$\\$7568.72$' }, { id: 'c', label: '$\\$7570.72$' }],
        'a',
        ['$1200\\times6.3081=7569.72$.'],
        '$\\$7569.72$ — select this from the options next.'),
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
      console.warn(`SKIP ${id} — answer is '${data.answer}', expected '${requireAnswer}'. Content may have changed — aborting this one.`);
      continue;
    }
    // sanity: no duplicate step_ids
    const ids = reasoning_blueprint.map((s) => s.step_id);
    if (new Set(ids).size !== ids.length) {
      console.error(`ABORT ${id} — duplicate step_id in the new blueprint: ${ids.join(',')}`);
      continue;
    }
    await ref.set({ reasoning_blueprint, hasReasoningBlueprint: true }, { merge: true });
    console.log(`✓ ${id} — revised, ${reasoning_blueprint.length} steps`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }
  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
