#!/usr/bin/env node
/**
 * Reasoning-blueprint pre-steps for 6 of the FIN-INTEREST-01 "loan
 * repayment" and "annuity depletion" questions (Sapere_Question_DNA_v2.0
 * §3-4) — the shapes that addFinInterestReasoningBlueprint.js deliberately
 * skipped as "different reasoning shape". All quality-checked first (every
 * numeric answer independently re-derived via node -e before writing):
 *
 * - baulko2020-q16aiii, baulko2020-q16aiiiv: loan repayment M, standard
 *   annuity-payment formula. Verified 2899.36 and 2149.29 exactly.
 * - bbhs2020-19a, bbhs2020-19b: PVA-factor questions — 19a multiplies
 *   (payment -> present value), 19b divides (present value -> payment).
 *   Deliberately paired to contrast with the FIN-INTEREST-01 DNA warmup's
 *   "PV means divide" rule (dnaTaxonomy.js W3), which is about a single
 *   compounding lump sum, NOT a PVA-table annuity factor — a real,
 *   worth-teaching distinction, not a contradiction. Verified 46573.50 and
 *   3005.49 exactly.
 * - bar2020-q17biib, bar2020-q17biibv: solve for n (isolate the
 *   exponential term, then log). Verified n≈197.63->197 and n≈190.92->190
 *   (the second one AFTER fixBarRetireeAnswerKey.js corrected a wrong
 *   answer key found while re-deriving it here — see that script).
 *
 * NOT included: bar2020-q17bi/biia, baulko2020-q16ai/aii (teacher_review
 * "show that" recurrence proofs — a still-different shape, deferred), and
 * dane2020-q37 (Ozzie halve-the-fund) — deferred, needs its own careful
 * "halve" framing rather than reusing this script's pattern verbatim.
 *
 * Usage:
 *   node tools/scripts/addLoanAnnuityReasoningBlueprint.js
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
    // $450,000 loan, 0.5%/month, 300 months. Verified M=2899.36.
    id: 'baulko2020-q16aiii',
    reasoning_blueprint: [
      mc('S1', 'Rearranging $A_n = P(1+r)^n - M\\dfrac{(1+r)^n-1}{r} = 0$ to isolate $M$, which formula do you get?', 'strategy_selection',
        [{ id: 'a', label: '$M = P(1+r)^n \\times r$' }, { id: 'b', label: '$M = \\dfrac{P \\cdot r (1+r)^n}{(1+r)^n - 1}$' }, { id: 'c', label: '$M = P \\div (1+r)^n$' }],
        'b',
        ['Move the $M$ term to the other side and divide.', 'The standard loan-repayment formula is $M = \\dfrac{P r (1+r)^n}{(1+r)^n-1}$.'],
        '$M = \\dfrac{P r (1+r)^n}{(1+r)^n-1}$ is the standard annuity/loan repayment formula.'),
      mc('S2', 'Using $P=450{,}000$, $r=0.005$, $n=300$, what is $M$?', 'execution',
        [{ id: 'a', label: '\\$2,899.36' }, { id: 'b', label: '\\$4,899.46' }, { id: 'c', label: '\\$2,250.00' }],
        'a',
        ['Substitute the values directly into the formula from the previous step.'],
        '$M \\approx \\$2{,}899.36$ per month — select this from the options next.'),
    ],
  },
  {
    // $300,000 loan, 0.5%/month, 240 months. Verified M=2149.29.
    id: 'baulko2020-q16aiiiv',
    reasoning_blueprint: [
      mc('S1', 'Rearranging $A_n = P(1+r)^n - M\\dfrac{(1+r)^n-1}{r} = 0$ to isolate $M$, which formula do you get?', 'strategy_selection',
        [{ id: 'a', label: '$M = \\dfrac{P \\cdot r (1+r)^n}{(1+r)^n - 1}$' }, { id: 'b', label: '$M = P(1+r)^n \\times r$' }, { id: 'c', label: '$M = P \\div (1+r)^n$' }],
        'a',
        ['Move the $M$ term to the other side and divide.', 'The standard loan-repayment formula is $M = \\dfrac{P r (1+r)^n}{(1+r)^n-1}$.'],
        '$M = \\dfrac{P r (1+r)^n}{(1+r)^n-1}$ is the standard annuity/loan repayment formula.'),
      mc('S2', 'Using $P=300{,}000$, $r=0.005$, $n=240$, what is $M$?', 'execution',
        [{ id: 'a', label: '\\$4,149.49' }, { id: 'b', label: '\\$1,500.00' }, { id: 'c', label: '\\$2,149.29' }],
        'c',
        ['Substitute the values directly into the formula from the previous step.'],
        '$M \\approx \\$2{,}149.29$ per month — select this from the options next.'),
    ],
  },
  {
    // Jesse: $7500/yr, 8yr, PVA factor(N=8,r=6%)=6.2098. Verified PV=46573.50.
    id: 'bbhs2020-19a',
    reasoning_blueprint: [
      mc('S1', 'This question gives a PVA (present-value-of-annuity) table factor. How do you use it?', 'recognition',
        [{ id: 'a', label: 'Divide the payment by the factor' }, { id: 'b', label: 'Multiply the payment by the factor' }, { id: 'c', label: 'Add the factor to the payment' }],
        'b',
        ['A PVA-table factor is already the sum of all the individual discount factors — it\'s used directly.', 'This is different from a single compound-interest factor, which you divide into a future value to get a present value.'],
        'A PVA factor is pre-computed to be multiplied directly by the regular payment: $PV = \\text{Payment} \\times \\text{PVA factor}$.'),
      mc('S2', 'Using the PVA factor $6.2098$, what is the present value of Jesse\'s annuity?', 'execution',
        [{ id: 'a', label: '-\\$46,573.50' }, { id: 'b', label: '\\$46,573.50' }, { id: 'c', label: '\\$46,574.50' }],
        'b',
        ['Multiply the regular payment by the given PVA factor.', '$7500 \\times 6.2098$'],
        '$7500 \\times 6.2098 = \\$46{,}573.50$ — select this from the options next.'),
    ],
  },
  {
    // Shaon: $12,000 loan, 5yr, PVA factor(N=5,r=8%)=3.9927. Verified M=3005.49.
    id: 'bbhs2020-19b',
    reasoning_blueprint: [
      mc('S1', 'Given $PVA = M \\times \\text{factor}$, and you know the loan amount but need the repayment $M$, what do you do?', 'strategy_selection',
        [{ id: 'a', label: 'Multiply the loan amount by the factor' }, { id: 'b', label: 'Divide the loan amount by the factor' }, { id: 'c', label: 'Add the factor to the loan amount' }],
        'b',
        ['You have the total (present value) and the factor — you need the payment, which is the missing multiplier.', 'Rearrange $PVA = M \\times \\text{factor}$ to $M = PVA \\div \\text{factor}$.'],
        '$M = PVA \\div \\text{factor}$ — the reverse of the PVA calculation.'),
      mc('S2', 'Using the PVA factor $3.9927$, what is Shaon\'s yearly repayment?', 'execution',
        [{ id: 'a', label: '-\\$3,005.49' }, { id: 'b', label: '\\$3,004.49' }, { id: 'c', label: '\\$3,005.49' }],
        'c',
        ['Divide the loan amount by the given PVA factor.', '$12000 \\div 3.9927$'],
        '$12000 \\div 3.9927 \\approx \\$3{,}005.49$ — select this from the options next.'),
    ],
  },
  {
    // Josephine's retirement: An=(P-500000)(1.005)^n+500000, P=313406.52. Verified n≈197.63->197.
    id: 'bar2020-q17biib',
    reasoning_blueprint: [
      mc('S1', 'Setting $A_n = 0$ and rearranging, what does $(1.005)^n$ equal?', 'strategy_selection',
        [{ id: 'a', label: '$\\approx 0.37$' }, { id: 'b', label: '$\\approx 1.34$' }, { id: 'c', label: '$\\approx 2.68$' }],
        'c',
        ['Substitute $P=313{,}406.52$ and isolate $(1.005)^n$ on one side.', '$(P-500000)(1.005)^n = -500000 \\Rightarrow (1.005)^n = \\dfrac{500000}{500000-P}$'],
        '$(1.005)^n = \\dfrac{500000}{500000-313406.52} \\approx 2.68$.'),
      mc('S2', 'Solving $(1.005)^n \\approx 2.68$ using logarithms, what is $n$ (to the nearest whole month)?', 'execution',
        [{ id: 'a', label: '$99$' }, { id: 'b', label: '$198$' }, { id: 'c', label: '$197$' }],
        'c',
        ['Take $\\log$ of both sides and divide.', '$n = \\dfrac{\\log(2.68)}{\\log(1.005)}$'],
        '$n \\approx 197.6$, so $197$ complete months — select this from the options next.'),
    ],
  },
  {
    // Retiree $200,000, 0.4%/mo, $1500/mo withdrawal. Verified n≈190.92->190
    // (after fixBarRetireeAnswerKey.js corrected the wrong '169' answer key).
    id: 'bar2020-q17biibv',
    requireOptionAtAnswer: '\\(190 months\\)', // guard: only proceed if the answer-key fix already landed
    reasoning_blueprint: [
      mc('S1', 'Setting $A_n = 0$ and rearranging, what does $(1.004)^n$ equal?', 'strategy_selection',
        [{ id: 'a', label: '$\\approx 0.47$' }, { id: 'b', label: '$\\approx 1.07$' }, { id: 'c', label: '$\\approx 2.14$' }],
        'c',
        ['Substitute the values and isolate $(1.004)^n$ on one side.', '$(1.004)^n = \\dfrac{375000}{175000}$'],
        '$(1.004)^n = \\dfrac{375000}{175000} \\approx 2.14$.'),
      mc('S2', 'Solving $(1.004)^n \\approx 2.14$ using logarithms, how many complete months does the account last?', 'execution',
        [{ id: 'a', label: '$169$' }, { id: 'b', label: '$191$' }, { id: 'c', label: '$190$' }],
        'c',
        ['Take $\\log$ of both sides and divide.', '$n = \\dfrac{\\log(2.14)}{\\log(1.004)} \\approx 190.9$'],
        '$n \\approx 190.9$, so $190$ complete months — select this from the options next.'),
    ],
  },
];

async function main() {
  const touchedChapters = new Set();
  for (const { id, reasoning_blueprint, requireOptionAtAnswer } of QUESTIONS) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} — origin:'teacher'.`); continue; }
    if (requireOptionAtAnswer && data.options?.[Number(data.answer)]?.text !== requireOptionAtAnswer) {
      console.warn(`SKIP ${id} — the correct option doesn't match the expected fixed content yet.`);
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
