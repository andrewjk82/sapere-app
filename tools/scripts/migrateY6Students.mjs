// One-off: students' assigned / completed Year 6 chapter ids → the new ICE-EM layout (src/utils/y6Renumber.js).
//   node tools/scripts/migrateY6Students.mjs            → dry run
//   node tools/scripts/migrateY6Students.mjs --apply    → writes (JSON backup first). Touches users + students only; never `questions`.
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { migrateStudentIds } from '../../src/utils/y6Renumber.js';

const APPLY = process.argv.includes('--apply');
initializeApp({ credential: cert(JSON.parse(readFileSync(new URL('../../.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', import.meta.url), 'utf8'))) });
const db = getFirestore();
const old = (x) => /^y6-(wn|frac|rqf|rn|ar|mr|gm|2ds|3ds|nsm|data|chan)\b/.test(String(x));
const mentions = (l) => Array.isArray(l) && l.some(old);
const backupDir = `/Users/andrewkim/backups/y6-renumber-${new Date().toISOString().slice(0, 10)}`;
const backups = {};
let touched = 0;
for (const col of ['users', 'students']) {
  for (const d of (await db.collection(col).get()).docs) {
    const data = d.data(); const update = {};
    for (const f of ['assignedChapters', 'completedChapters']) if (mentions(data[f])) update[f] = migrateStudentIds(data[f]);
    for (const f of ['examPrepSelection', 'dailyPracticeConfig']) if (mentions(data[f]?.chapters)) update[f] = { ...data[f], chapters: migrateStudentIds(data[f].chapters) };
    if (data.chapterDates && Object.keys(data.chapterDates).some(old)) {
      const next = {};
      for (const [k, v] of Object.entries(data.chapterDates)) for (const nk of (old(k) ? migrateStudentIds([k]) : [k])) next[nk] ??= v;
      update.chapterDates = next;
    }
    if (!Object.keys(update).length) continue;
    touched += 1;
    backups[`${col}__${d.id}`] = Object.fromEntries(Object.keys(update).map((k) => [k, data[k] ?? null]));
    console.log(`${col}/${d.id} ${data.firstName || data.name || ''}: ${Object.keys(update).join(', ')}`);
    if (APPLY) { mkdirSync(backupDir, { recursive: true }); writeFileSync(`${backupDir}/backup.json`, JSON.stringify(backups, null, 2)); await d.ref.update(update); }
  }
}
console.log(`${touched} record(s) ${APPLY ? 'updated' : 'would be updated'}.${APPLY ? ` backup → ${backupDir}` : ' DRY RUN.'}`);
process.exit(0);
