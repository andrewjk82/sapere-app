import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync, existsSync } from 'fs';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const entries = JSON.parse(readFileSync('/private/tmp/claude-501/-Users-andrewkim-Desktop-sapere1/071bcec7-5574-46c0-9121-1ccfef64a2bc/scratchpad/final-entries.json', 'utf8'));
const LOG_PATH = '/Users/andrewkim/Desktop/sapere1/tools/audit-state/fix-y11a-4-log.json';

const DRY_RUN = process.argv.includes('--dry-run');

function selfCheck(entry) {
  const errs = [];
  if (entry.options.length !== 4) errs.push('options length != 4');
  if (new Set(entry.options).size !== 4) errs.push('duplicate options');
  entry.options.forEach(o => { if (o.includes('$')) errs.push('$ in option: ' + o); });
  if (entry.answer < 0 || entry.answer > 3) errs.push('answer index out of range');
  if (entry.options[entry.answer] === undefined) errs.push('answer does not index an option');
  if (entry.steps.length < 3) errs.push('fewer than 3 solutionSteps');
  entry.steps.forEach(s => {
    if (/[가-힣]/.test(s.explanation)) errs.push('Korean in explanation');
    if (s.explanation.includes('$')) errs.push('$ in explanation');
    if (s.workingOut && s.workingOut.includes('$')) errs.push('$ in workingOut');
  });
  return errs;
}

(async () => {
  const log = existsSync(LOG_PATH) ? JSON.parse(readFileSync(LOG_PATH, 'utf8')) : [];
  let converted = 0;
  const skipped = [];

  for (const entry of entries) {
    const errs = selfCheck(entry);
    if (errs.length) {
      console.error(`SKIP ${entry.id}: self-check failed: ${errs.join('; ')}`);
      skipped.push({ id: entry.id, reason: 'self-check failed: ' + errs.join('; ') });
      continue;
    }

    const ref = db.collection('questions').doc(entry.id);
    const snap = await ref.get();
    if (!snap.exists) {
      console.error(`SKIP ${entry.id}: doc no longer exists`);
      skipped.push({ id: entry.id, reason: 'doc no longer exists' });
      continue;
    }
    const data = snap.data();
    if (data.origin === 'teacher') {
      console.error(`SKIP ${entry.id}: origin is 'teacher' (protected)`);
      skipped.push({ id: entry.id, reason: "origin === 'teacher'" });
      continue;
    }
    if (data.type === 'multiple_choice') {
      console.error(`SKIP ${entry.id}: already multiple_choice (re-check live state)`);
      skipped.push({ id: entry.id, reason: 'already multiple_choice at write time' });
      continue;
    }

    const oldType = data.type;
    const oldOptions = data.options || [];
    const oldAnswer = data.answer;
    const oldSolutionSteps = data.solutionSteps || null;
    const oldIsNew = Object.prototype.hasOwnProperty.call(data, 'isNew') ? data.isNew : undefined;

    const update = {
      type: 'multiple_choice',
      options: entry.options,
      answer: entry.answer,
      solutionSteps: entry.steps,
      isNew: true,
    };

    if (!DRY_RUN) {
      await ref.update(update);
    }

    log.push({
      id: entry.id,
      chapterId: 'y11a-4',
      topicId: entry.topicId === undefined ? (data.topicId ?? null) : entry.topicId,
      changedFields: {
        type: { old: oldType, new: 'multiple_choice' },
        options: { old: oldOptions, new: entry.options },
        answer: { old: oldAnswer, new: entry.answer },
        solutionSteps: { old: oldSolutionSteps, new: entry.steps },
        isNew: { old: oldIsNew, new: true },
      },
    });
    converted++;
    console.log(`${DRY_RUN ? '[DRY RUN] ' : ''}Converted ${entry.id} (${entry.topicId ?? 'no topicId'}) -> answer idx ${entry.answer}`);
  }

  if (!DRY_RUN) {
    writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
  }

  console.log('\n=== Summary ===');
  console.log('Converted:', converted);
  console.log('Skipped:', skipped.length, JSON.stringify(skipped, null, 2));
  console.log(DRY_RUN ? 'DRY RUN - no writes performed, log not saved.' : `Log written to ${LOG_PATH} with ${log.length} total entries.`);
  process.exit(0);
})().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
