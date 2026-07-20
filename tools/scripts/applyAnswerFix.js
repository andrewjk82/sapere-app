/**
 * applyAnswerFix.js
 * ─────────────────────────────────────────────────────────────────────────
 * Generic, self-verifying answer-index fix applier for the answer_mismatch
 * bucket found by structuralAuditAllQuestions.js. Takes a JSON file of
 * { id, newAnswer } entries (newAnswer is the index as a string, matching
 * the existing `answer` field convention), and for each:
 *   1. Reads the current doc from Firestore.
 *   2. Refuses to touch origin:'teacher' docs.
 *   3. Sets `answer` = newAnswer.
 *   4. Re-validates with the same KaTeX-backed validateSeedQuestion used by
 *      `npm run validate-seeds` — only writes if the answer_mismatch error
 *      is actually gone afterward (self-verifying, same discipline as
 *      fixCurrencyDollarEscapeBug.js).
 *
 * Usage: node tools/scripts/applyAnswerFix.js <fixListPath> [--dry-run]
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync } from 'fs';
import katex from 'katex';
import { validateSeedQuestion } from '../../src/utils/latexValidate.js';

const DRY_RUN = process.argv.includes('--dry-run');
const fixListPath = process.argv[2];
if (!fixListPath || fixListPath.startsWith('--')) {
  console.error('Usage: node tools/scripts/applyAnswerFix.js <fixListPath> [--dry-run]');
  process.exit(1);
}

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();
const renderToString = (tex, opts) => katex.renderToString(tex, opts);

const fixList = JSON.parse(readFileSync(fixListPath, 'utf8'));

async function main() {
  let fixedCount = 0, skippedTeacher = 0, stillMismatched = 0, notFound = 0;
  const log = [];

  for (const { id, newAnswer } of fixList) {
    const ref = db.doc(`questions/${id}`);
    const snap = await ref.get();
    if (!snap.exists) { notFound++; continue; }
    const data = snap.data();

    if (data.origin === 'teacher') { skippedTeacher++; continue; }

    const updated = { ...data, answer: String(newAnswer) };
    const errs = validateSeedQuestion(updated, renderToString);
    const stillHasMismatch = errs.some(e => /Answer index mismatch/.test(e.error));

    if (stillHasMismatch) {
      stillMismatched++;
      log.push({ id, newAnswer, NOTE: 'still mismatched after fix — skipped', errs });
      continue;
    }

    fixedCount++;
    log.push({ id, oldAnswer: data.answer, newAnswer });
    if (!DRY_RUN) {
      await ref.update({ answer: String(newAnswer) });
    }
  }

  console.log(`\nTotal in list: ${fixList.length}`);
  console.log(`Fixed${DRY_RUN ? ' (would fix)' : ''}: ${fixedCount}`);
  console.log(`Still mismatched (skipped): ${stillMismatched}`);
  console.log(`Skipped (origin=teacher): ${skippedTeacher}`);
  console.log(`Not found: ${notFound}`);

  const outPath = fixListPath.replace(/\.json$/, '-log.json');
  writeFileSync(outPath, JSON.stringify(log, null, 2));
  console.log(`Log: ${outPath}`);
  process.exit(0);
}

main().catch((err) => { console.error('FATAL:', err); process.exit(1); });
