/**
 * Year 11 Adv 5F follow-ups (Firestore-only, already applied once):
 * 1) Convert remaining short_answer on topicId y11a-5F (exam papers) → MCQ/multipart
 * 2) Fix Domain/Range options with bare "infty" (cra2023-mc5, cra2023s-mc5)
 *
 *   node tools/scripts/fixY11A5FExamAndDomainOpts.js
 */
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';

const sa = JSON.parse(
  readFileSync(
    process.env.GOOGLE_APPLICATION_CREDENTIALS ||
      '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json',
    'utf8'
  )
);
if (!getApps().length) initializeApp({ credential: cert(sa) });
const db = getFirestore();

function place(correct, distractors, aIdx) {
  const opts = [...distractors];
  opts.splice(aIdx, 0, correct);
  if (opts.length !== 4 || opts[aIdx] !== correct || new Set(opts).size !== 4) {
    throw new Error(`place fail a=${aIdx} ${JSON.stringify(opts)}`);
  }
  return opts;
}
function step(explanation, workingOut) {
  return { explanation, workingOut, graphData: null };
}
function mcPatch({ a, question, correct, distractors, solutionSteps, difficulty = 'medium' }) {
  const opts = place(correct, distractors, a);
  return {
    type: 'multiple_choice',
    difficulty,
    question,
    options: opts.map((text) => ({ text, imageUrl: '' })),
    answer: String(a),
    solutionSteps,
    requiresManualGrading: false,
    isNew: true,
    updatedAt: FieldValue.serverTimestamp(),
  };
}

const DOMAIN_RANGE_FIXES = {
  'cra2023-mc5': {
    options: [
      'Domain: \\([-1, 1]\\), Range: \\((-\\infty, \\infty)\\)',
      'Domain: \\((0, \\infty)\\), Range: \\((-\\infty, 0) \\cup (0, \\infty)\\)',
      'Domain: \\([0, \\infty)\\), Range: \\((0, \\infty)\\)',
      'Domain: \\((1, \\infty)\\), Range: \\((0, \\infty)\\)',
    ],
    answer: '3',
  },
  'cra2023s-mc5': {
    options: [
      'Domain: \\([-2, 2]\\), Range: \\((-\\infty, \\infty)\\)',
      'Domain: \\((0, \\infty)\\), Range: \\((-\\infty, 0) \\cup (0, \\infty)\\)',
      'Domain: \\([0, \\infty)\\), Range: \\((0, \\infty)\\)',
      'Domain: \\((2, \\infty)\\), Range: \\((0, \\infty)\\)',
    ],
    answer: '3',
  },
};

async function main() {
  const batch = db.batch();
  for (const [id, fix] of Object.entries(DOMAIN_RANGE_FIXES)) {
    batch.set(
      db.collection('questions').doc(id),
      {
        options: fix.options.map((text) => ({ text, imageUrl: '' })),
        answer: fix.answer,
        isNew: true,
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
    console.log('domain/range fixed', id);
  }

  // Re-apply screenshot exam item if still short_answer
  const asc = await db.collection('questions').doc('asc2020-q19').get();
  if (asc.exists && asc.data().type === 'short_answer') {
    batch.set(
      db.collection('questions').doc('asc2020-q19'),
      mcPatch({
        a: 1,
        difficulty: 'easy',
        question:
          'Consider the functions \\(f(x)\\) and \\(g(x)\\) whose graphs are displayed below.\n\n\\(f(x)\\) is a U-shaped parabola with vertex near \\((1, 0)\\) and the point \\((-1, 3)\\) visible. \\(g(x)\\) is a straight line with positive gradient passing through the origin.\n\nFind the value of \\(g(f(-2))\\).',
        correct: '\\(3\\)',
        distractors: ['\\(0\\)', '\\(1\\)', '\\(-2\\)'],
        solutionSteps: [
          step('Read f(-2) from the graph of f (approximately 3).', '\\(f(-2) \\approx 3\\)'),
          step('Read g(3) from the graph of g (approximately 3).', '\\(g(3) \\approx 3\\)'),
          step('Therefore g(f(-2)) = 3.', '\\(g(f(-2)) = 3\\)'),
        ],
      }),
      { merge: true }
    );
    console.log('asc2020-q19 converted to MCQ');
  } else {
    console.log('asc2020-q19 already', asc.exists ? asc.data().type : 'missing');
  }

  await batch.commit();
  console.log('Done. Firestore merge complete.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
