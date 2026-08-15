#!/usr/bin/env node
/**
 * Push question-specific reasoning_blueprint onto 2 of the 5 FIN-GP-01
 * "drop-bear population" multi-part questions (Sapere_Question_DNA_v2.0
 * §3-4 — see src/components/hsc/QuestionReasoningSteps.jsx).
 *
 * Only asc2020-q30-a and asc2020-q30-b get a blueprint here. The other 3
 * (asc2020-q30-c, asc2020-q30-d, asc2020-q30v) are deliberately SKIPPED —
 * their multiple-choice options are broken (generic mismatched distractors
 * like "The opposite of this statement is true." / "This only holds for
 * positive values of x." on numeric/date questions, unrelated to the actual
 * question). Adding reasoning pre-steps in front of a broken final answer
 * would be pointless — that's a content-quality issue for
 * sapere-question-audit, not something this script papers over.
 *
 * "A population of drop-bears starts at 1000 and grows by 5% per year, but
 * 100 are removed (poached) at the end of each year." (Ascham 2020 Trial,
 * origin:'seed', not 'teacher' — safe to touch.)
 *   (a) Show that T_2 = 1000×(1.05)^2 - 100×(1.05+1)  [teacher_review]
 *   (b) Find an expression for T_n                     [multiple_choice]
 *
 * Usage:
 *   node tools/scripts/addDropBearReasoningBlueprint.js
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

// Both a and b share the same first two steps (find T1, then T2 via the
// recurrence) — 30-a's real answer is the algebraic "show that" (free-text,
// teacher-graded); 30-b's real answer is the closed-form MC. Repeating the
// recurrence build for both is deliberate: 30-b is a separate question a
// student may meet on its own, without having just done 30-a.
const recurrenceSteps = [
  {
    step_id: 'S1', objective: 'Find the drop-bear population after 1 year, $T_1$.',
    axis: 'execution', interaction_type: 'complete', compute: 'growth_minus', params: { a: 1000, r: 1.05, c: 100 }, tolerance: 0.5,
    hints: ['The population grows by 5% first, then 100 are removed.', '$T_1 = 1000 \\times 1.05 - 100$'],
    explanation: '$T_1 = 1000 \\times 1.05 - 100 = 950$.',
  },
  {
    step_id: 'S2', objective: 'Using $T_1$, find $T_2$ from the same recurrence: $T_2 = T_1 \\times 1.05 - 100$.',
    axis: 'execution', interaction_type: 'complete', compute: 'growth_minus', params: { a: 950, r: 1.05, c: 100 }, tolerance: 0.5,
    hints: ['Apply the same rule to $T_1$ that you applied to $T_0 = 1000$ to get $T_1$.', '$T_2 = 950 \\times 1.05 - 100$'],
    explanation: '$T_2 = 950 \\times 1.05 - 100 = 897.5$, matching $1000(1.05)^2 - 100(1.05+1)$.',
  },
];

const QUESTIONS = [
  { id: 'asc2020-q30-a', reasoning_blueprint: recurrenceSteps },
  {
    id: 'asc2020-q30-b',
    reasoning_blueprint: [
      ...recurrenceSteps,
      {
        step_id: 'S3', objective: 'What growth factor is applied to the population each year (before poaching)?',
        axis: 'recognition', interaction_type: 'complete', expected_response: '1.05', tolerance: 0.01,
        hints: ['The population grows by 5% per year.', '$1 + 5\\% = 1.05$'],
        explanation: 'The growth factor is $1.05$ — a $5\\%$ increase each year.',
      },
      {
        step_id: 'S4', objective: 'How many drop-bears are removed by poaching at the end of each year?',
        axis: 'recognition', interaction_type: 'complete', expected_response: '100', tolerance: 0,
        hints: ['This is stated directly in the question.'],
        explanation: '100 drop-bears are poached at the end of every year — now select the closed-form expression for $T_n$ next.',
      },
    ],
  },
];

async function main() {
  const touchedChapters = new Set();
  for (const { id, reasoning_blueprint } of QUESTIONS) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} — origin:'teacher'.`); continue; }
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
