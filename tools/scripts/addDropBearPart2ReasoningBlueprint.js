#!/usr/bin/env node
/**
 * Reasoning-blueprint follow-up to addDropBearReasoningBlueprint.js — now
 * that fixDropBearBrokenOptions.js has repaired the broken MC options AND
 * the wrong "n=10" answer key on asc2020-q30-c/d/v, these 3 questions can
 * get pre-steps too (Sapere_Question_DNA_v2.0 §3-4).
 *
 * All multiple-choice (select) — standing project rule.
 *
 * asc2020-q30-c: uses the already-derived T_n=2000-1000(1.05)^n from part
 * (b) to find T_5 (Jan 1 2008 is 5 years after 2003). Verified: T_5≈724.
 * asc2020-q30-d: solves 1000(1.05)^n=2000 for the extinction year. Verified
 * n=log(2)/log(1.05)≈14.21, floor->14, 2003+14=2017.
 * asc2020-q30v: mirrors addDropBearReasoningBlueprint.js's T1/T2 recurrence
 * pattern on the fish-population twin problem (explicitly "Adapted from
 * Ascham 2020 Trial Q30" — same structure, different numbers). Verified
 * T1=500*1.08-60=480, T2=480*1.08-60=458.4, matches the question's own
 * given closed form for T2 exactly.
 *
 * Usage:
 *   node tools/scripts/addDropBearPart2ReasoningBlueprint.js
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
    id: 'asc2020-q30-c',
    // requires the marked answer already be the fixed '724' option — guard
    // against building steps in front of an unverified/reverted content fix.
    requireOptionText: 'Approximately \\(724\\) drop-bears',
    reasoning_blueprint: [
      mc('S1', 'How many years after 2003 is January 1, 2008?', 'execution',
        [{ id: 'a', label: '4' }, { id: 'b', label: '5' }, { id: 'c', label: '6' }],
        'b',
        ['Count the whole years between 2003 and 2008.'],
        '2008 is $5$ years after 2003, so $n = 5$.'),
      mc('S2', 'Using $T_n = 2000 - 1000(1.05)^n$ with $n = 5$, find $T_5$.', 'execution',
        [{ id: 'a', label: '$\\approx 1276$' }, { id: 'b', label: '$\\approx 898$' }, { id: 'c', label: '$\\approx 724$' }],
        'c',
        ['Substitute $n=5$ into the formula — don\'t forget the $2000 -$ at the front.', '$T_5 = 2000 - 1000(1.05)^5$'],
        '$T_5 = 2000 - 1000(1.05)^5 \\approx 724$ — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q30-d',
    requireOptionText: 'During \\(2017\\)',
    reasoning_blueprint: [
      mc('S1', 'Setting $T_n = 0$ in $T_n = 2000 - 1000(1.05)^n$, what does $(1.05)^n$ equal?', 'strategy_selection',
        [{ id: 'a', label: '$1$' }, { id: 'b', label: '$0.5$' }, { id: 'c', label: '$2$' }],
        'c',
        ['Rearrange $2000 - 1000(1.05)^n = 0$ to isolate $(1.05)^n$.', '$1000(1.05)^n = 2000$'],
        '$1000(1.05)^n = 2000 \\Rightarrow (1.05)^n = 2$.'),
      mc('S2', 'Solving $(1.05)^n = 2$ gives $n \\approx 14.2$. Which calendar year does extinction fall in?', 'execution',
        [{ id: 'a', label: 'During $2003$' }, { id: 'b', label: 'During $2018$' }, { id: 'c', label: 'During $2017$' }],
        'c',
        ['The population is still just positive at $n=14$ and negative at $n=15$ — extinction happens during that 15th year of operation.', '$2003 + 14 = 2017$'],
        'Extinction falls during the year starting at $n=14$, i.e. $2003 + 14 = 2017$ — select this from the options next.'),
    ],
  },
  {
    id: 'asc2020-q30v',
    requireOptionText: '(b) \\(T_n = 750 - 250(1.08)^n\\) (c) During year \\(n = 14\\) from the start (approximately)',
    reasoning_blueprint: [
      mc('S1', 'Find the fish population after 1 year, $T_1$.', 'execution',
        [{ id: 'a', label: '$440$' }, { id: 'b', label: '$480$' }, { id: 'c', label: '$560$' }],
        'b',
        ['The population grows by 8% first, then 60 are harvested.', '$T_1 = 500 \\times 1.08 - 60$'],
        '$T_1 = 500 \\times 1.08 - 60 = 480$.'),
      mc('S2', 'Using $T_1$, find $T_2$ from the same recurrence: $T_2 = T_1 \\times 1.08 - 60$.', 'execution',
        [{ id: 'a', label: '$462.4$' }, { id: 'b', label: '$500$' }, { id: 'c', label: '$458.4$' }],
        'c',
        ['Apply the same rule to $T_1$ that you applied to $T_0 = 500$ to get $T_1$.', '$T_2 = 480 \\times 1.08 - 60$'],
        '$T_2 = 480 \\times 1.08 - 60 = 458.4$, matching $500(1.08)^2 - 60(1.08+1)$.'),
    ],
  },
];

async function main() {
  const touchedChapters = new Set();
  for (const { id, reasoning_blueprint, requireOptionText } of QUESTIONS) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} — origin:'teacher'.`); continue; }
    const correctOption = data.options?.[Number(data.answer)];
    if (requireOptionText && correctOption?.text !== requireOptionText) {
      console.warn(`SKIP ${id} — correct option text doesn't match the expected fixed content. Not building steps in front of unverified content.`);
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
