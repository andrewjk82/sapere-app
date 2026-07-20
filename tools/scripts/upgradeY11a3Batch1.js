import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { entries } from '/private/tmp/claude-501/-Users-andrewkim-Desktop-sapere1/0a123d83-8bbb-4703-a3ee-ce5ac6332862/scratchpad/batch1-entries.js';

const serviceAccount = JSON.parse(readFileSync('/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const LOG_PATH = '/Users/andrewkim/Desktop/sapere1/tools/audit-state/upgrade-y11a-3-log.json';
const DRY_RUN = process.argv.includes('--dry-run');

function selfCheck(entry) {
  const errs = [];
  const texts = entry.options.map(o => o.text);
  if (texts.length !== 4) errs.push('options length != 4');
  if (new Set(texts).size !== 4) errs.push('duplicate options');
  texts.forEach(t => { if (t.includes('$')) errs.push('$ in option: ' + t); });
  if (!Number.isInteger(entry.answer) || entry.answer < 0 || entry.answer > 3) errs.push('answer index out of range');
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
  let updated = 0;
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
    if (data.chapterId !== 'y11a-3') {
      console.error(`SKIP ${entry.id}: chapterId mismatch (${data.chapterId})`);
      skipped.push({ id: entry.id, reason: 'chapterId mismatch: ' + data.chapterId });
      continue;
    }

    const oldOptions = data.options || [];
    const oldAnswer = data.answer;
    const oldSolutionSteps = data.solutionSteps || null;
    const oldIsNew = Object.prototype.hasOwnProperty.call(data, 'isNew') ? data.isNew : undefined;

    const update = {
      options: entry.options,
      answer: String(entry.answer),
      solution: null,
      solutionSteps: entry.steps,
      isNew: true,
    };

    if (!DRY_RUN) {
      await ref.update(update);
    }

    log.push({
      id: entry.id,
      chapterId: 'y11a-3',
      topicId: entry.topicId,
      changedFields: {
        options: { old: oldOptions, new: entry.options },
        answer: { old: oldAnswer, new: String(entry.answer) },
        solutionSteps: { old: oldSolutionSteps, new: entry.steps },
        isNew: { old: oldIsNew, new: true },
      },
    });
    updated++;
    console.log(`${DRY_RUN ? '[DRY RUN] ' : ''}Updated ${entry.id} (${entry.topicId}) -> answer idx ${entry.answer}`);
  }

  if (!DRY_RUN) {
    writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
  }

  console.log('\n=== Summary ===');
  console.log('Updated:', updated);
  console.log('Skipped:', skipped.length, JSON.stringify(skipped, null, 2));
  console.log(DRY_RUN ? 'DRY RUN - no writes performed, log not saved.' : `Log written to ${LOG_PATH} with ${log.length} total entries.`);
  process.exit(0);
})().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
