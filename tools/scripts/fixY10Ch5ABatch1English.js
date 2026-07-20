/**
 * Fix: the y10-5a batch-1 conversion wrote solutionSteps.explanation in
 * Korean by mistake. Student-facing text must be English (project standard).
 * Re-writes only the `explanation` strings, keeping workingOut (LaTeX,
 * language-neutral) and everything else unchanged.
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const englishExplanations = {
  'y10-5a-q1a': [
    'This equation is already factorised into two factors, y and (y + 4). By the null factor law, if a product of two factors equals zero, at least one of the factors must be zero.',
    'Set the first factor equal to zero and solve.',
    'Set the second factor equal to zero and solve for y.',
    'Combine both solutions — together they are the complete solution set, representing the two points where the parabola crosses the y-axis (horizontal axis).',
  ],
  'y10-5a-q1b': [
    'This is already factorised into two factors, m and (m - 5). By the null factor law, at least one factor must equal zero.',
    'Set the first factor equal to zero.',
    'Set the second factor equal to zero and solve.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q1c': [
    'This is already factorised into two factors, 2p and (p + 6). The constant coefficient 2 can never be zero, so apply the null factor law to the remaining two factors.',
    'Set the first factor, p, equal to zero.',
    'Set the second factor equal to zero and solve for p.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q1d': [
    'This is already factorised into two factors, (y - 2) and (y + 7). By the null factor law, at least one factor must equal zero.',
    'Set the first factor equal to zero and solve — watch the sign carefully.',
    'Set the second factor equal to zero and solve.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q1e': [
    'This is already factorised into two factors, (k + 5) and (k + 8). Apply the null factor law.',
    'Set the first factor equal to zero and solve.',
    'Set the second factor equal to zero and solve.',
    'Combine both solutions into the final answer — note both are negative.',
  ],
  'y10-5a-q1f': [
    'This is already factorised into two factors, (n - 8) and (n - 3). Apply the null factor law.',
    'Set the first factor equal to zero and solve.',
    'Set the second factor equal to zero and solve.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q1g': [
    'This is already factorised into two factors, 3m and (2m + 5). The coefficient 3 can never be zero, so apply the null factor law to m and (2m + 5).',
    'Set the first factor, m, equal to zero.',
    'Set the second factor equal to zero and solve for m — remember to divide both sides by 2.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q1h': [
    'This is already factorised into two factors, (5y + 2) and (2y - 3). Apply the null factor law.',
    'Set the first factor equal to zero and solve for y.',
    'Set the second factor equal to zero and solve for y.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q1i': [
    'This is already factorised into two factors, (3x + 5) and (x + 2). Apply the null factor law.',
    'Set the first factor equal to zero and solve for x.',
    'Set the second factor equal to zero and solve for x.',
    'Combine both solutions into the final answer — note both are negative.',
  ],
  'y10-5a-q1j': [
    'This is already factorised into two factors, (3k - 4) and (2k + 5). Apply the null factor law.',
    'Set the first factor equal to zero and solve for k.',
    'Set the second factor equal to zero and solve for k.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q1k': [
    'This is already factorised into three factors, 4, (3y - 2), and (y + 5). The constant 4 can never be zero, so apply the null factor law to the remaining two factors.',
    'Set the first factor equal to zero and solve for y.',
    'Set the second factor equal to zero and solve for y.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q1l': [
    'This is already factorised into three factors, 5, (-2m + 3), and (-2m + 5). The constant 5 can never be zero, so apply the null factor law to the remaining two factors.',
    'Set the first factor equal to zero and solve for m — take care with the sign when dividing by a negative coefficient.',
    'Set the second factor equal to zero and solve for m.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q2a': [
    'This expression is not yet factorised. Factor out the common factor y from the left-hand side.',
    'Factor out y.',
    'By the null factor law, set each factor equal to zero and solve.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q2b': [
    'This expression is not yet factorised. Factor out the common factor m from the left-hand side.',
    'Factor out m.',
    'By the null factor law, set each factor equal to zero and solve.',
    'Combine both solutions into the final answer.',
  ],
  'y10-5a-q2c': [
    'This expression is not yet factorised. Factor out the common factor k from the left-hand side.',
    'Factor out k.',
    'By the null factor law, set each factor equal to zero and solve.',
    'Combine both solutions into the final answer.',
  ],
};

async function main() {
  let ok = 0;
  const log = [];
  for (const [id, explanations] of Object.entries(englishExplanations)) {
    const ref = db.doc(`questions/${id}`);
    const snap = await ref.get();
    const data = snap.data();
    const oldSteps = data.solutionSteps;
    const newSteps = oldSteps.map((step, i) => ({ ...step, explanation: explanations[i] }));
    await ref.update({ solutionSteps: newSteps });
    log.push({ id, changedFields: { solutionSteps: { old: oldSteps, new: newSteps } } });
    ok++;
  }
  writeFileSync('/Users/andrewkim/Desktop/sapere1/tools/audit-state/fix-y10-5-english-log.json', JSON.stringify(log, null, 2));
  console.log('Fixed', ok, 'docs to English explanations.');
  process.exit(0);
}

main().catch((e) => { console.error('FATAL', e); process.exit(1); });
