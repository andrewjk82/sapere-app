#!/usr/bin/env node
/**
 * Add 2 new highlight-based "concept connection" steps to the front of
 * abb2020-mc6's pre-steps (2026-08-16, user feedback + follow-up idea):
 * before the question-specific trap steps added in
 * fixAbb2020Mc6PreSteps.js, first connect the notation/structure in the
 * QUESTION ITSELF to the general concept it invokes — with the relevant
 * part of the question highlighted so the student can see exactly what
 * piece of text each reasoning step is about.
 *
 * New sequence for abb2020-mc6 ("What is the value of f'(x) if
 * f(x)=3x^4(4-x)^3?"):
 *   S0 — highlights "$f'(x)$" in the question, asks what that notation
 *        means (differentiation literacy).
 *   S1 — highlights "$3x^4(4-x)^3$" (the expression to differentiate),
 *        asks which rule it needs (product rule, since two factors).
 *   S2 — (from fixAbb2020Mc6PreSteps.js) the sign trap on "4-x"'s
 *        derivative.
 *   S3 — (from fixAbb2020Mc6PreSteps.js) the specific factoring
 *        arithmetic.
 *
 * Requires DnaReasoningWarmup.jsx's / QuestionReasoningSteps.jsx's new
 * `step.highlight = {before, mark, after, color}` support — see that
 * component for how it's rendered. before+mark+after must each be a
 * self-contained ($...$-balanced) LaTeX fragment; verified against the
 * doc's raw question text: "What is the value of $f'(x)$ if $f(x) =
 * 3x^4(4-x)^3$?".
 *
 * Usage:
 *   node tools/scripts/addAbb2020Mc6HighlightSteps.js
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

const mc = (stepId, objective, axis, options, correctId, hints, explanation, highlight) => ({
  step_id: stepId, objective, axis, interaction_type: 'select', options,
  expected_response: correctId, hints, explanation,
  ...(highlight ? { highlight } : {}),
});

const QUESTION_ID = 'abb2020-mc6';

const newFrontSteps = [
  mc('S0', 'The question asks for the value of the HIGHLIGHTED notation above. What does $f\'(x)$ mean?', 'recognition',
    [{ id: 'a', label: 'The derivative of $f(x)$ — how fast $f$ is changing' }, { id: 'b', label: 'The value of $f(x)$ at $x=0$' }, { id: 'c', label: 'The inverse function of $f(x)$' }],
    'a',
    ['The prime symbol $\'$ after a function name is the standard notation for "the derivative of".'],
    '$f\'(x)$ means "the derivative of $f(x)$" — that\'s what this whole question is asking you to find.',
    { before: "What is the value of ", mark: "$f'(x)$", after: " if $f(x) = 3x^4(4-x)^3$?" }),
  mc('S1', 'The HIGHLIGHTED expression above is what you need to differentiate. It has two separate factors, $3x^4$ and $(4-x)^3$, multiplied together. Which rule does that structure need?', 'strategy_selection',
    [{ id: 'a', label: 'Product rule (plus chain rule, since $(4-x)^3$ is itself a composition)' }, { id: 'b', label: 'Quotient rule' }, { id: 'c', label: 'Power rule alone, with no product involved' }],
    'a',
    ['Two genuinely separate pieces multiplied together — that\'s the signature of the product rule, $\\frac{d}{dx}[uv]=u\'v+uv\'$.'],
    'Product rule for the two factors, and chain rule inside it to differentiate $(4-x)^3$.',
    { before: "What is the value of $f'(x)$ if $f(x) = $", mark: "$3x^4(4-x)^3$", after: "?" }),
];

async function main() {
  const ref = db.collection('questions').doc(QUESTION_ID);
  const doc = await ref.get();
  if (!doc.exists) { console.error(`${QUESTION_ID} not found — aborting.`); process.exit(1); }
  const data = doc.data();
  if (data.origin === 'teacher') { console.error(`${QUESTION_ID} is origin:'teacher' — refusing to touch.`); process.exit(1); }
  if (data.answer !== '1') {
    console.error(`${QUESTION_ID}: answer is '${data.answer}', expected '1'. Content may have changed — aborting.`);
    process.exit(1);
  }
  const existing = data.reasoning_blueprint || [];
  if (existing.some((s) => s.highlight)) {
    console.error(`${QUESTION_ID}: a highlight step already present — already applied, aborting to avoid duplicating.`);
    process.exit(1);
  }

  // Renumber sequentially after prepending — the existing steps already use
  // 'S1'/'S2', which would otherwise collide with the new steps' ids.
  const reasoning_blueprint = [...newFrontSteps, ...existing].map((s, i) => ({ ...s, step_id: `S${i}` }));

  await ref.set({ reasoning_blueprint }, { merge: true });
  console.log(`✓ ${QUESTION_ID} — 2 highlight-based concept-connection steps prepended (now ${reasoning_blueprint.length} steps total)`);

  const touched = await touchChapterIndex(db, data.chapterId);
  console.log(`${touched ? '✓' : '·'} touched question_index/${data.chapterId}`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
