#!/usr/bin/env node
/**
 * CALC-DIFF-01 batch 8 (2026-08-15, same day) — the last 4 clean,
 * unambiguous, unbuilt questions left in this DNA's pool. Of the 16
 * questions still untouched after batch 7, 12 are skip-worthy for
 * reasons already documented this session: dane2020-q23/q26 (exam
 * duplicates of car2020-q25/q27, skipped for diversity), dane2020-q35 +
 * fortst2020-q10b (still have the "opposite of this statement" garbage,
 * flagged for task_8d66fb97), cths2020-mc5 (duplicate of abb2020-mc6),
 * fortst2020-q2a (duplicate flavor of bbhs2020-14b/cths2020-q23),
 * asc2020-q20 + asc2020-q20v (malformed 4th-option LaTeX, unfixed),
 * girr2020-mc20/mc20s (ambiguous "coefficient of the leading term"
 * phrasing) and girr2020-mc22/mc22s (options don't actually exercise the
 * "first principles" process the stem asks for). None of those 12 are
 * touched here — this batch only uses the 4 that are genuinely clean.
 *
 * baulko2020-q15bii/q15biii build on baulko2020-q15bi (batch 7) — the
 * tangent-line-through-origin setup for y=ln(2x-1).
 *
 * All correct answers/values independently re-verified before authoring:
 *  - baulko2020-q15bii: tangent slope m equals curve's derivative
 *    y'=2/(2x-1) at P. Solving 2x-1=2/m gives x=(2+m)/(2m); substituting
 *    into y=mx gives y=(2+m)/2. Matches doc.
 *  - baulko2020-q15biii: P lies on the curve, so y_P=ln(2x_P-1).
 *    2x_P-1 = (2+m)/m - 1 = 2/m. So (2+m)/2 = ln(2/m), giving
 *    2+m = 2ln(2/m) = ln((2/m)²) = ln(4/m²). Matches doc.
 *  - bar2020-q11abv: sinx/x, y'=(xcosx-sinx)/x² (quotient rule). Matches.
 *  - asc2020-q27: 3^{x²}, y'=2xln3·3^{x²} (exponential chain rule,
 *    a=3, g(x)=x², g'(x)=2x). Matches.
 *
 * Usage:
 *   node tools/scripts/addCalcDiffReasoningBlueprintBatch8.js
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
    id: 'baulko2020-q15bii',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', 'The tangent line has slope $m$. Setting the curve\'s derivative $y\'=\\dfrac{2}{2x-1}$ equal to $m$, what does $2x-1$ equal?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{2}{m}$' }, { id: 'b', label: '$\\dfrac{m}{2}$' }, { id: 'c', label: '$2m$' }],
        'a',
        ['$\\dfrac{2}{2x-1}=m \\Rightarrow 2x-1=\\dfrac{2}{m}$ (cross-multiply and rearrange).'],
        '$2x-1=\\dfrac{2}{m}$.'),
      mc('S2', 'Solving $2x-1=\\dfrac2m$ for $x$ gives $x=\\dfrac{2+m}{2m}$. Substituting into $y=mx$, what is $y$?', 'execution',
        [{ id: 'a', label: '$y=\\dfrac{2+m}{2}$' }, { id: 'b', label: '$y=\\dfrac{2+m}{m}$' }, { id: 'c', label: '$y=2+m$' }],
        'a',
        ['$y=m\\times\\dfrac{2+m}{2m}$ — one factor of $m$ in the numerator cancels with one $m$ in the denominator, leaving a $2$.'],
        '$y=m\\times\\dfrac{2+m}{2m}=\\dfrac{2+m}{2}$ — now write the full proof for $P=\\left(\\dfrac{2+m}{2m},\\dfrac{2+m}{2}\\right)$.'),
    ],
  },
  {
    id: 'baulko2020-q15biii',
    requireType: 'teacher_review',
    reasoning_blueprint: [
      mc('S1', '$P$ lies on the curve $y=\\ln(2x-1)$, so its $y$-coordinate must equal $\\ln(2x_P-1)$. Substituting $x_P=\\dfrac{2+m}{2m}$, what does $2x_P-1$ simplify to?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac2m$' }, { id: 'b', label: '$\\dfrac{2+m}{m}$' }, { id: 'c', label: '$\\dfrac2m - 1$' }],
        'a',
        ['$2x_P = 2\\times\\dfrac{2+m}{2m}=\\dfrac{2+m}{m}$, then subtract $1=\\dfrac{m}{m}$: $\\dfrac{2+m}{m}-\\dfrac{m}{m}=\\dfrac{2}{m}$.'],
        '$2x_P-1=\\dfrac2m$, so $y_P=\\ln\\!\\left(\\dfrac2m\\right)$.'),
      mc('S2', 'Setting $y_P=\\dfrac{2+m}{2}$ equal to $\\ln\\!\\left(\\dfrac2m\\right)$ and multiplying both sides by $2$, using $2\\ln\\!\\left(\\dfrac2m\\right)=\\ln\\!\\left(\\left(\\dfrac2m\\right)^2\\right)$, what do you get?', 'verification',
        [{ id: 'a', label: '$2+m=\\ln\\!\\left(\\dfrac{4}{m^2}\\right)$' }, { id: 'b', label: '$2+m=\\ln\\!\\left(\\dfrac2m\\right)$' }, { id: 'c', label: '$2+m=\\ln\\!\\left(\\dfrac4m\\right)$' }],
        'a',
        ['$\\left(\\dfrac2m\\right)^2=\\dfrac{4}{m^2}$ — square both the numerator and denominator.'],
        '$2+m=\\ln\\!\\left(\\dfrac{4}{m^2}\\right)$ — now write the full proof.'),
    ],
  },
  {
    id: 'bar2020-q11abv',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$\\dfrac{\\sin x}{x}$ is a quotient with $u=\\sin x$ ($u\'=\\cos x$), $v=x$ ($v\'=1$). Applying $\\dfrac{u\'v-uv\'}{v^2}$, which matches?', 'strategy_selection',
        [{ id: 'a', label: '$\\dfrac{x\\cos x - \\sin x}{x^2}$' }, { id: 'b', label: '$\\dfrac{x\\cos x + \\sin x}{x^2}$' }, { id: 'c', label: '$\\dfrac{\\sin x - x\\cos x}{x^2}$' }],
        'a',
        ['$u\'v=x\\cos x$, and $uv\'=\\sin x\\times1=\\sin x$ — subtracted, in that order.'],
        '$\\dfrac{x\\cos x-\\sin x}{x^2}$ — select this from the options next.'),
      mc('S2', 'Double-check: is there anything left to simplify in $\\dfrac{x\\cos x-\\sin x}{x^2}$?', 'verification',
        [{ id: 'a', label: 'No — $x\\cos x$ and $\\sin x$ share no common factor, this is already fully simplified' }, { id: 'b', label: 'Yes — divide top and bottom by $x$' }, { id: 'c', label: 'Yes — factor out $\\cos x$ from both terms' }],
        'a',
        ['Unlike quotient-rule answers where every term shared a factor of $x$ with the denominator, here $\\sin x$ has no $x$ to cancel.'],
        'Correct — $x\\cos x$ and $\\sin x$ don\'t share a common factor with $x^2$, so $\\dfrac{x\\cos x-\\sin x}{x^2}$ is already final.'),
    ],
  },
  {
    id: 'asc2020-q27',
    requireAnswer: '1',
    reasoning_blueprint: [
      mc('S1', '$3^{x^2}$ is $a^{g(x)}$ with $a=3$, $g(x)=x^2$. What is $g\'(x)$?', 'strategy_selection',
        [{ id: 'a', label: '$2x$' }, { id: 'b', label: '$x$' }, { id: 'c', label: '$2$' }],
        'a',
        ['Power rule: $\\dfrac{d}{dx}[x^2]=2x$.'],
        '$g\'(x)=2x$.'),
      mc('S2', 'Applying $\\dfrac{d}{dx}[a^{g(x)}]=a^{g(x)}\\ln a\\times g\'(x)$, what is the derivative?', 'execution',
        [{ id: 'a', label: '$2x\\ln 3\\cdot 3^{x^2}$' }, { id: 'b', label: '$3^{x^2}$' }, { id: 'c', label: '$2x\\log 3\\cdot 3^{x^2}$' }],
        'a',
        ['Use natural log ($\\ln$), not base-10 log — and keep both the $\\ln 3$ and $g\'(x)=2x$ factors.'],
        '$2x\\ln 3\\cdot 3^{x^2}$ — select this from the options next.'),
    ],
  },
];

async function main() {
  const touchedChapters = new Set();
  for (const { id, reasoning_blueprint, requireAnswer, requireType } of QUESTIONS) {
    const ref = db.collection('questions').doc(id);
    const doc = await ref.get();
    if (!doc.exists) { console.warn(`SKIP ${id} — not found.`); continue; }
    const data = doc.data();
    if (data.origin === 'teacher') { console.warn(`SKIP ${id} — origin:'teacher'.`); continue; }
    if (requireAnswer && data.answer !== requireAnswer) {
      console.warn(`SKIP ${id} — answer is '${data.answer}', expected '${requireAnswer}'. Not building steps on top of unverified content.`);
      continue;
    }
    if (requireType && data.type !== requireType) {
      console.warn(`SKIP ${id} — type is '${data.type}', expected '${requireType}'.`);
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
