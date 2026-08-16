#!/usr/bin/env node
/**
 * Two fixes for the drop-bear question series (asc2020-q30-a/b/c/d),
 * found while revising the last 4 FIN-GP-01 pre-steps (2026-08-16):
 *
 * 1. ORPHANED CONTEXT (a real content bug, not a pre-step style issue):
 *    parts (b), (c), and (d) never state the model's own numbers
 *    (initial population 1000, 5% growth, 100 poached/year, starting
 *    January 1 2003) anywhere in their own question text — a student
 *    opening (c) or (d) in isolation has no way to answer it. Part (a)
 *    technically survives because its target closed-form formula
 *    reveals the numbers implicitly, but even that has no prose framing.
 *    The existing `hint` fields on several of these already assumed
 *    "2003" as the start year, confirming the number was known but
 *    never surfaced in the visible question text (an "orphaned context"
 *    bug per the sapere-question-audit skill's category [E]). Verified
 *    independently: substituting 1000/1.05/100 into the given
 *    recurrence exactly reproduces part (a)'s target formula
 *    (T1=1000(1.05)-100=950, T2=T1(1.05)-100=897.5, matching
 *    1000(1.05)²-100(1.05+1)=897.5). Fixed by prepending the shared
 *    context sentence to all 4 sub-questions (same text already applied
 *    to the seed file, src/constants/seedAscham2020Questions.js).
 *
 * 2. Pre-step revision for the last 4 of FIN-GP-01's 10 questions (user
 *    asked to also revise the ones left untouched in
 *    reviseFinGp01PreSteps.js): asc2020-q30-a/c/d and asc2020-q30v (the
 *    fish variant, whose own text was already self-contained — no
 *    context bug there). Applying the "target this question's own
 *    unique point" principle more deeply than the first pass:
 *      - asc2020-q30-a: shifted from pure numeric T1→T2 computation to
 *        the actual ALGEBRAIC substitution trap — substituting
 *        T1=1000(1.05)-100 into T2=T1×1.05-100 and recognising the
 *        factored form, which is what a "show that" proof actually
 *        needs (not just the numeric answer).
 *      - asc2020-q30-c: now that "January 1, 2003" is visible in the
 *        question, the year-count step is legitimately self-contained.
 *      - asc2020-q30-d: kept the floor-vs-round reasoning for the
 *        extinction year, now tied to the visible "2003" start year.
 *      - asc2020-q30v: expanded from 2 steps (just T1/T2) to 3 —
 *        added the GP-sum constant (60÷0.08=750, mirroring
 *        asc2020-q30-b's 100÷0.05=2000) and the extinction-year
 *        floor logic, since the question's own final MC answer
 *        actually combines BOTH the Tn formula and the extinction year,
 *        which the original 2-step version never touched.
 *
 * All correct answers/values independently re-verified before authoring
 * (unchanged from the docs' existing marked-correct answers):
 *   asc2020-q30-a: T2=897.5 both ways. asc2020-q30-c: T5≈724.
 *   asc2020-q30-d: (1.05)^n=2, n≈14.2, extinct during 2003+14=2017.
 *   asc2020-q30v: 60/0.08=750, Tn=750-250(1.08)^n, (1.08)^n=3,
 *   n≈14.27, extinct during year n=14.
 *
 * Usage:
 *   node tools/scripts/fixAscDropBearContextAndPreSteps.js
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

const CONTEXT = 'A colony of drop-bears has an initial population of \\(1000\\) on January 1, 2003. Each year, the population grows by \\(5\\%\\), then \\(100\\) drop-bears are removed by poaching at the end of the year. Let \\(T_n\\) be the drop-bear population \\(n\\) years after January 1, 2003.\n\n';

const ORIGINAL_TEXT = {
  'asc2020-q30-a': '(a) Show that the drop-bear population remaining after two years is given by: \\(T_2 = 1000 \\times (1.05)^2 - 100 \\times (1.05 + 1)\\).',
  'asc2020-q30-b': '(b) Find an expression for \\(T_n\\), the number of drop-bears remaining after \\(n\\) years.',
  'asc2020-q30-c': '(c) What is the drop-bear population on January 1, 2008?',
  'asc2020-q30-d': '(d) During what calendar year will the drop-bears become extinct if no interventions are put in place?',
};

const mc = (stepId, objective, axis, options, correctId, hints, explanation) => ({
  step_id: stepId, objective, axis, interaction_type: 'select', options,
  expected_response: correctId, hints, explanation,
});

const REVISED_STEPS = {
  'asc2020-q30-a': [
    mc('S1', 'With $T_1=1000(1.05)-100$, substituting this INTO the recurrence $T_2=T_1\\times1.05-100$, what do you get before simplifying?', 'execution',
      [{ id: 'a', label: '$[1000(1.05)-100]\\times1.05-100$' }, { id: 'b', label: '$1000(1.05)\\times1.05-100$' }, { id: 'c', label: '$1000(1.05)-100\\times1.05-100$' }],
      'a',
      ['The whole expression for $T_1$ (not just its first term) needs to be multiplied by $1.05$ before subtracting $100$ again.'],
      '$T_2=[1000(1.05)-100]\\times1.05-100$.'),
    mc('S2', 'Expanding gives $1000(1.05)^2-100(1.05)-100$. Factoring the last two terms together, which matches the target form?', 'verification',
      [{ id: 'a', label: '$1000(1.05)^2-100(1.05+1)$' }, { id: 'b', label: '$1000(1.05)^2-100(1.05-1)$' }, { id: 'c', label: '$1000(1.05)^2-200(1.05)$' }],
      'a',
      ['$-100(1.05)-100 = -100[(1.05)+1]$ — factor out the common $-100$.'],
      '$1000(1.05)^2-100(1.05+1)$ — matches the target exactly.'),
  ],
  'asc2020-q30-c': [
    mc('S1', 'Using the context (start: January 1, 2003), how many years after the start is January 1, 2008?', 'execution',
      [{ id: 'a', label: '$5$' }, { id: 'b', label: '$4$' }, { id: 'c', label: '$6$' }],
      'a',
      ['Count the whole years between 2003 and 2008.'],
      '$2008$ is $5$ years after $2003$.'),
    mc('S2', 'Using $T_n=2000-1000(1.05)^n$ (from part (b)) with $n=5$, find $T_5$.', 'execution',
      [{ id: 'a', label: '$\\approx724$' }, { id: 'b', label: '$\\approx898$' }, { id: 'c', label: '$\\approx1276$' }],
      'a',
      ['$T_5=2000-1000(1.05)^5$.'],
      '$T_5\\approx724$ — select this from the options next.'),
  ],
  'asc2020-q30-d': [
    mc('S1', 'Setting $T_n=0$ in $T_n=2000-1000(1.05)^n$, what does $(1.05)^n$ equal?', 'strategy_selection',
      [{ id: 'a', label: '$2$' }, { id: 'b', label: '$0.5$' }, { id: 'c', label: '$2000$' }],
      'a',
      ['$1000(1.05)^n=2000\\Rightarrow(1.05)^n=2$.'],
      '$(1.05)^n=2$.'),
    mc('S2', 'Solving $(1.05)^n=2$ gives $n\\approx14.2$. Since the population is measured $n$ years after January 1, 2003 and stays positive through $n=14$ (only going negative at $n=15$), during which calendar year does extinction occur?', 'verification',
      [{ id: 'a', label: 'During $2017$ ($2003+14$)' }, { id: 'b', label: 'During $2018$ (rounded $14.2$ up instead of down)' }, { id: 'c', label: 'During $2003$ (didn\'t solve for $n$ at all)' }],
      'a',
      ['A fractional $n$ means extinction happens partway through that year of operation — the population is still positive at the start of year $14$, so extinction falls during that $14$th year, not the $15$th.'],
      '$2003+14=2017$ — select this from the options next.'),
  ],
  'asc2020-q30v': [
    mc('S1', 'With $T_1=500(1.08)-60$, substituting into $T_2=T_1\\times1.08-60$, what do you get before simplifying?', 'execution',
      [{ id: 'a', label: '$[500(1.08)-60]\\times1.08-60$' }, { id: 'b', label: '$500(1.08)\\times1.08-60$' }, { id: 'c', label: '$500(1.08)-60\\times1.08-60$' }],
      'a',
      ['The whole expression for $T_1$ needs to be multiplied by $1.08$ before subtracting $60$ again.'],
      '$T_2=[500(1.08)-60]\\times1.08-60$, matching the given target $500(1.08)^2-60(1.08+1)$.'),
    mc('S2', 'The harvest terms form a GP sum with constant $\\dfrac{60}{1.08-1}$. What is $60\\div0.08$?', 'execution',
      [{ id: 'a', label: '$750$' }, { id: 'b', label: '$700$' }, { id: 'c', label: '$480$' }],
      'a',
      ['$60\\div0.08$ is the same as $60\\times12.5$.'],
      '$60\\div0.08=750$, giving $T_n=500(1.08)^n-750\\left[(1.08)^n-1\\right]=750-250(1.08)^n$.'),
    mc('S3', 'Setting $750-250(1.08)^n=0$ gives $(1.08)^n=3$, so $n\\approx14.27$. Since the population is still positive at $n=14$ (only going negative at $n=15$), during which year does the population fall below zero?', 'verification',
      [{ id: 'a', label: 'During year $n=14$' }, { id: 'b', label: 'During year $n=15$ (rounded up instead of down)' }, { id: 'c', label: 'During year $n=3$ (used $3$ as $n$ directly instead of solving for it)' }],
      'a',
      ['A fractional $n$ means the population is still positive at the START of that year of operation — it falls below zero partway through year $14$, not year $15$.'],
      'During year $n=14$ — select this from the options next.'),
  ],
};

async function main() {
  const touchedChapters = new Set();

  // 1. Prepend context to the question text (Firestore only — seed file
  //    already updated directly in src/constants/seedAscham2020Questions.js).
  for (const [id, originalText] of Object.entries(ORIGINAL_TEXT)) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} — origin:'teacher'.`); continue; }
    const currentText = data.q || data.question;
    if (currentText !== originalText) {
      console.warn(`SKIP ${id} context fix — question text doesn't match the expected pre-fix text (already changed?). Not touching.`);
      continue;
    }
    const field = data.q !== undefined ? 'q' : 'question';
    await ref.set({ [field]: CONTEXT + originalText }, { merge: true });
    console.log(`✓ ${id} — context prepended`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }

  // 2. Revise pre-steps for a/c/d/v (b was already revised in
  //    reviseFinGp01PreSteps.js and doesn't need re-touching).
  for (const [id, reasoning_blueprint] of Object.entries(REVISED_STEPS)) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} pre-steps — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} pre-steps — origin:'teacher'.`); continue; }
    const ids = reasoning_blueprint.map((s) => s.step_id);
    if (new Set(ids).size !== ids.length) {
      console.error(`ABORT ${id} pre-steps — duplicate step_id: ${ids.join(',')}`);
      continue;
    }
    await ref.set({ reasoning_blueprint, hasReasoningBlueprint: true }, { merge: true });
    console.log(`✓ ${id} — pre-steps revised, ${reasoning_blueprint.length} steps`);
    if (data.chapterId) touchedChapters.add(data.chapterId);
  }

  for (const chapterId of touchedChapters) {
    const touched = await touchChapterIndex(db, chapterId);
    console.log(`${touched ? '✓' : '·'} touched question_index/${chapterId}`);
  }
}

main().then(() => process.exit(0)).catch((e) => { console.error(e); process.exit(1); });
