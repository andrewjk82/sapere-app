#!/usr/bin/env node
/**
 * Final FIN-INTEREST-01 batch — the 5 questions explicitly deferred earlier
 * this session: 4 teacher_review "show that" annuity-recurrence proofs
 * (Josephine's superannuation contribution + retirement phases,
 * bar2020-q17bi/q17biia; Michelle's loan, baulko2020-q16ai/q16aii) plus
 * dane2020-q37 (Ozzie's "halve the fund" MC, own framing per deferral note
 * — options fixed separately in fixDane2020Q37Options.js).
 *
 * The 4 teacher_review questions stay teacher_review (grandfathered content
 * type, unmodified) — only the *pre-step reasoning blueprint* is added, and
 * every pre-step is multiple_choice (select), per the standing project rule.
 * These pre-steps walk the student through recognising the recurrence
 * structure before they write the free-form proof for the teacher to mark.
 *
 * All values verified independently before hardcoding as option text:
 *  - bar2020-q17bi: deposit at START of month n compounds for (300-n+1)
 *    months by month 300; first deposit (month 1) compounds 300 months,
 *    last deposit (month 300) compounds 1 month. GP sum a=450(1.005)^1,
 *    r=1.005, n=300 terms — matches the doc's own solution exactly.
 *  - bar2020-q17biia: A_1 = P(1.005)-2500 (grow then withdraw at END of
 *    month, so first withdrawal is unshifted) — matches doc. A_n's
 *    withdrawal-sum term is a GP with a=2500, r=1.005, n terms — matches
 *    2500*(1.005^n-1)/0.005 = 500000*(1.005^n-1) in the doc's own working.
 *  - baulko2020-q16ai/aii: A_1=450000(1.005)-M, A_2=A_1(1.005)-M (grow then
 *    repay at END of month) — matches doc exactly. General term's
 *    repayment-sum is a GP with a=1 (i.e. M*[1+1.005+...+1.005^{n-1}]),
 *    r=1.005, n terms, sum=(1.005^n-1)/0.005 — matches doc.
 *  - dane2020-q37: A_n=300000 <=> 1.0025^n=1.3 <=> n=ln(1.3)/ln(1.0025)
 *    ≈105.08 => 105 months (verified in fixDane2020Q37Options.js).
 *
 * Usage:
 *   node tools/scripts/addRemainingFinInterestBlueprints.js
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
    id: 'bar2020-q17bi',
    // teacher_review, no options array — guard on type + dnaId only.
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', 'The first \\$450 deposit is made at the START of month 1. By the time $P$ is calculated (end of month 300), how many months has it been compounding for?', 'recognition',
        [{ id: 'a', label: '$299$ months' }, { id: 'b', label: '$300$ months' }, { id: 'c', label: '$301$ months' }],
        'b',
        ['A deposit made at the very start of the timeline earns interest for the whole period.'],
        'The first deposit sits in the account for all $300$ months, so it grows to $450(1.005)^{300}$.'),
      mc('S2', 'The LAST \\$450 deposit is made at the START of month 300. How many months has it been compounding for by month 300?', 'recognition',
        [{ id: 'a', label: '$0$ months' }, { id: 'b', label: '$1$ month' }, { id: 'c', label: '$2$ months' }],
        'b',
        ['It\'s deposited at the start of the final month, then that one month\'s interest is added before $P$ is measured.'],
        'The last deposit only compounds for $1$ month, giving $450(1.005)^1$.'),
      mc('S3', 'The 300 terms $450(1.005)^{300}, 450(1.005)^{299}, \\ldots, 450(1.005)^1$ form a GP. What are its first term $a$ and common ratio $r$?', 'strategy_selection',
        [{ id: 'a', label: '$a = 450 \\times 1.005,\\ r = 1.005$' }, { id: 'b', label: '$a = 450,\\ r = 1.005$' }, { id: 'c', label: '$a = 450 \\times 1.005^{300},\\ r = 1.005^{-1}$' }],
        'a',
        ['Read the terms in the order they\'ll appear in the sum formula — smallest exponent first, i.e. the last deposit\'s term.', 'Every term is $1.005$ times the next smaller-exponent term.'],
        'Taking the smallest term as $a = 450(1.005)^1$ with ratio $r=1.005$ and $n=300$ terms matches the given sum $P = 450 \\times \\frac{1.005(1.005^{300}-1)}{0.005}$ — now write the full proof.'),
    ],
  },
  {
    id: 'bar2020-q17biia',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', 'Each month in retirement: the balance grows by $0.5\\%$ interest, THEN \\$2500 is withdrawn at the end of the month. Which expression is $A_1$ in terms of $P$?', 'execution',
        [{ id: 'a', label: '$P(1.005) - 2500$' }, { id: 'b', label: '$(P - 2500)(1.005)$' }, { id: 'c', label: '$P(1.005) + 2500$' }],
        'b',
        ['Interest is applied to the FULL balance first — the withdrawal happens at the end of the month, after growth.'],
        '$A_1 = P(1.005) - 2500$ — growth first, then subtract the withdrawal (option (b) wrongly applies interest AFTER subtracting).'),
      mc('S2', 'Continuing the same rule, $A_2 = A_1(1.005) - 2500$. Expanding this out in terms of $P$, what do you get?', 'strategy_selection',
        [{ id: 'a', label: '$P(1.005)^2 - 2500(1.005 + 1)$' }, { id: 'b', label: '$P(1.005)^2 - 2 \\times 2500$' }, { id: 'c', label: '$P(1.005)^2 - 2500(1.005)^2$' }],
        'a',
        ['Substitute $A_1 = P(1.005) - 2500$ into $A_2 = A_1(1.005) - 2500$ and expand — don\'t forget the first withdrawal also earns a month of interest before $A_2$.'],
        '$A_2 = [P(1.005)-2500](1.005) - 2500 = P(1.005)^2 - 2500(1.005) - 2500 = P(1.005)^2 - 2500(1.005+1)$ — the withdrawals form their own growing GP, not a flat multiple.'),
      mc('S3', 'The withdrawal terms $2500(1.005^{n-1} + \\cdots + 1.005 + 1)$ form a GP with $a=1$, $r=1.005$, $n$ terms. Its sum $\\dfrac{1.005^n-1}{0.005}$, multiplied by $2500$, simplifies to which constant times $(1.005^n - 1)$?', 'verification',
        [{ id: 'a', label: '$500\\,000 \\times (1.005^n - 1)$' }, { id: 'b', label: '$5\\,000 \\times (1.005^n - 1)$' }, { id: 'c', label: '$2500 \\times (1.005^n - 1)$' }],
        'a',
        ['$2500 \\div 0.005 = ?$'],
        '$2500 / 0.005 = 500\\,000$, so the withdrawal sum is $500\\,000(1.005^n-1)$. Substituting into $A_n = P(1.005)^n - 500\\,000(1.005^n-1)$ and regrouping gives $A_n = (P-500\\,000)(1.005)^n + 500\\,000$ — now write the full proof.'),
    ],
  },
  {
    id: 'baulko2020-q16ai',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', 'Each month: the balance grows by $0.5\\%$ interest, THEN the repayment $M$ is subtracted at the end of the month. Which expression is $A_1$?', 'execution',
        [{ id: 'a', label: '$450\\,000(1.005) - M$' }, { id: 'b', label: '$(450\\,000 - M)(1.005)$' }, { id: 'c', label: '$450\\,000(1.005) + M$' }],
        'a',
        ['Interest applies to the full starting balance first; the repayment is subtracted afterwards.'],
        '$A_1 = 450\\,000(1.005) - M$ — growth first, then subtract the repayment.'),
      mc('S2', 'Applying the same rule to $A_1$, i.e. $A_2 = A_1(1.005) - M$, which expanded expression matches?', 'strategy_selection',
        [{ id: 'a', label: '$450\\,000(1.005)^2 - M(1.005) - M$' }, { id: 'b', label: '$450\\,000(1.005)^2 - 2M$' }, { id: 'c', label: '$450\\,000(1.005)^2 - M(1.005)^2 - M$' }],
        'a',
        ['Substitute $A_1 = 450\\,000(1.005) - M$ into $A_2 = A_1(1.005) - M$ and expand fully.'],
        '$A_2 = [450\\,000(1.005)-M](1.005) - M = 450\\,000(1.005)^2 - M(1.005) - M$ — the first repayment also earns a month of interest before $A_2$, but not two full months.'),
    ],
  },
  {
    id: 'baulko2020-q16aii',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', 'Continuing the pattern, the repayment terms $M[(1.005)^{n-1} + \\cdots + 1.005 + 1]$ form a GP with $a=1$, $r=1.005$, $n$ terms. What does this GP sum to?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{(1.005)^n - 1}{0.005}$' }, { id: 'b', label: '$\\dfrac{(1.005)^n - 1}{1.005}$' }, { id: 'c', label: '$n \\times 1.005$' }],
        'a',
        ['GP sum formula: $\\dfrac{a(r^n-1)}{r-1}$ with $a=1$, $r=1.005$.', '$r - 1 = 1.005 - 1 = 0.005$'],
        'With $a=1$, $r=1.005$: sum $= \\dfrac{1.005^n-1}{1.005-1} = \\dfrac{1.005^n-1}{0.005}$.'),
      mc('S2', 'Substituting this GP sum into $A_n = 450\\,000(1.005)^n - M[\\text{sum}]$, which is the correct closed form?', 'verification',
        [{ id: 'a', label: '$A_n = 450\\,000(1.005)^n - M\\dfrac{(1.005)^n-1}{0.005}$' }, { id: 'b', label: '$A_n = 450\\,000(1.005)^n - M\\dfrac{(1.005)^n-1}{1.005}$' }, { id: 'c', label: '$A_n = 450\\,000(1.005)^n + M\\dfrac{(1.005)^n-1}{0.005}$' }],
        'a',
        ['Keep the same denominator you just derived, and the repayments still subtract from the balance.'],
        '$A_n = 450\\,000(1.005)^n - M\\dfrac{(1.005)^n-1}{0.005}$ — now write the full proof, checking $n=1,2$ against your earlier working.'),
    ],
  },
  {
    id: 'dane2020-q37',
    // MC — options fixed by fixDane2020Q37Options.js. Guard on the fix having landed.
    requireOptionAtAnswer: null, // checked dynamically below (must not be the old broken '7/3' text)
    reasoning_blueprint: [
      mc('S1', 'The fund "halves" from its starting \\$600,000. What value should $A_n$ equal to find that point?', 'recognition',
        [{ id: 'a', label: '$A_n = 300\\,000$' }, { id: 'b', label: '$A_n = 0$' }, { id: 'c', label: '$A_n = 600\\,000$' }],
        'a',
        ['Half of \\$600,000 is the target balance, not zero.'],
        'Halved means $A_n = 300\\,000$ — this is what you substitute into the given formula for $A_n$.'),
      mc('S2', 'Substituting $A_n = 300\\,000$ and letting $x = 1.0025^n$, the equation $600\\,000x - 1\\,600\\,000(x-1) = 300\\,000$ simplifies to which value of $x$?', 'execution',
        [{ id: 'a', label: '$x = 1.3$' }, { id: 'b', label: '$x = 0.3$' }, { id: 'c', label: '$x = 1.625$' }],
        'a',
        ['$4000/0.0025 = 1\\,600\\,000$ — that\'s where the $1\\,600\\,000$ comes from.', '$600\\,000x - 1\\,600\\,000x + 1\\,600\\,000 = 300\\,000 \\Rightarrow -1\\,000\\,000x = -1\\,300\\,000$'],
        '$-1\\,000\\,000x = 300\\,000 - 1\\,600\\,000 = -1\\,300\\,000 \\Rightarrow x = 1.3$, i.e. $1.0025^n = 1.3$.'),
      mc('S3', 'Solving $1.0025^n = 1.3$ using logarithms, $n = \\dfrac{\\ln(1.3)}{\\ln(1.0025)} \\approx 105.08$. To the nearest whole month, what is $n$?', 'execution',
        [{ id: 'a', label: '$n \\approx 105$ months' }, { id: 'b', label: '$n \\approx 104$ months' }, { id: 'c', label: '$n \\approx 106$ months' }],
        'a',
        ['Round $105.08$ to the nearest whole number.'],
        '$105.08$ rounds to $105$ months — select this from the options next.'),
    ],
  },
];

async function main() {
  const touchedChapters = new Set();
  for (const { id, reasoning_blueprint, requireType } of QUESTIONS) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} — origin:'teacher'.`); continue; }
    if (requireType && data.type !== requireType) {
      console.warn(`SKIP ${id} — type is '${data.type}', expected '${requireType}'. Not touching unverified content.`);
      continue;
    }
    if (id === 'dane2020-q37') {
      const opts = data.options || [];
      if (opts.some((o) => o.text?.includes('\\dfrac{7}{3}') || o.text?.includes('x + 2'))) {
        console.warn(`SKIP ${id} — broken generic distractors still present. Run fixDane2020Q37Options.js first.`);
        continue;
      }
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
