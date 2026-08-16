#!/usr/bin/env node
/**
 * Rewrite the pre-steps for questions/abb2020-mc6 (2026-08-16, user
 * feedback) — the original S1 ("f(x)=3x^4(4-x)^3 needs which combination
 * of rules?") was a generic recognition template reused nearly verbatim
 * across dozens of product+chain questions this session. User feedback:
 * pre-steps must target the SPECIFIC, non-obvious point unique to THIS
 * question's actual numbers, not a repeated generic "which rule?" ask —
 * especially since the DNA-generic warmup pool (CALC-DIFF-01 W7) already
 * covers "recognise when a function needs both product and chain rule"
 * at the generic level, so repeating that here adds nothing new.
 *
 * What's actually distinctive about f(x)=3x^4(4-x)^3:
 *  1. The inner factor is "4-x" (four MINUS x), not the more common
 *     "ax+b" form with a positive leading coefficient — differentiating
 *     it gives -1, a genuine sign trap specific to this question's
 *     numbers (most chain-rule practice questions don't have this).
 *  2. After applying the product rule, the two terms share a common
 *     factor of x^3(4-x)^2 — recognising and correctly factoring it
 *     (4(4-x)-3x = 16-7x, a specific arithmetic simplification tied to
 *     the coefficients 12 and 9 in THIS problem) is the second concrete
 *     hurdle, not a generic "remember to factor" reminder.
 *
 * Re-verified: f'(x)=12x^3(4-x)^3-9x^4(4-x)^2=3x^3(4-x)^2[4(4-x)-3x]
 * =3x^3(4-x)^2(16-7x). Matches the doc's marked-correct answer
 * (unchanged, still index 1).
 *
 * Usage:
 *   node tools/scripts/fixAbb2020Mc6PreSteps.js
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

const QUESTION_ID = 'abb2020-mc6';
const reasoning_blueprint = [
  mc('S1', 'The inner factor here is $4-x$ — FOUR MINUS $x$, not $x-4$. What is $\\dfrac{d}{dx}[4-x]$?', 'execution',
    [{ id: 'a', label: '$-1$' }, { id: 'b', label: '$1$' }, { id: 'c', label: '$4$' }],
    'a',
    ['Differentiate term by term: $\\dfrac{d}{dx}[4]=0$ and $\\dfrac{d}{dx}[-x]=-1$.', 'This is the opposite sign from a more familiar inner expression like $x-4$ — don\'t assume it\'s $+1$.'],
    '$\\dfrac{d}{dx}[4-x]=-1$ — this negative sign is the main trap in this particular question.'),
  mc('S2', 'Using $u=3x^4$ ($u\'=12x^3$) and $v=(4-x)^3$ ($v\'=3(4-x)^2\\times(-1)=-3(4-x)^2$), the product rule gives $12x^3(4-x)^3-9x^4(4-x)^2$. Both terms share a common factor of $x^3(4-x)^2$ — factoring it out, what is left inside the brackets?', 'simplify_and_verify',
    [{ id: 'a', label: '$4(4-x)-3x=16-7x$' }, { id: 'b', label: '$4(4-x)+3x=16-x$' }, { id: 'c', label: '$3(4-x)-4x=12-7x$' }],
    'a',
    ['$12x^3(4-x)^3=x^3(4-x)^2\\times 4(4-x)$, and $9x^4(4-x)^2=x^3(4-x)^2\\times 3x$ — check which coefficient (4 or 3) goes with which term before subtracting.', '$4(4-x)-3x=16-4x-3x=16-7x$.'],
    '$3x^3(4-x)^2(16-7x)$ — select this from the options next.'),
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

  await ref.set({ reasoning_blueprint }, { merge: true });
  console.log(`✓ ${QUESTION_ID} — pre-steps rewritten to target this question's specific traps (sign of 4-x's derivative; the 4(4-x)-3x factoring arithmetic)`);

  const touched = await touchChapterIndex(db, data.chapterId);
  console.log(`${touched ? '✓' : '·'} touched question_index/${data.chapterId}`);
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
