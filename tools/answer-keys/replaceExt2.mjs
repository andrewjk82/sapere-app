// Replace the Extension 2 answer keys (answer_keys/y12e2-*) with the ones cut from the 2026 textbook.
//   node tools/answer-keys/replaceExt2.mjs <dir with mapping.json>            → dry run
//   node tools/answer-keys/replaceExt2.mjs <dir with mapping.json> --apply    → backs up, deletes stale keys, uploads the new ones
// New topic ids reuse old ones with different meanings (old 4D = Partial Fractions, new 4D = Vector circles), so the old keys
// of every Extension 2 topic are replaced as a set: the ones the new book has are overwritten, the rest are deleted.
// Reads only the candidate ids (point reads) — never a collection scan.
import admin from 'firebase-admin';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, isAbsolute } from 'path';
import { OLD_TO_NEW_TOPIC } from '../../src/utils/ext2Renumber.js';

const [dir, ...flags] = process.argv.slice(2);
const APPLY = flags.includes('--apply');
if (!dir) { console.error('usage: replaceExt2.mjs <dir> [--apply]'); process.exit(1); }
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'))) });
const db = admin.firestore();
const mapping = JSON.parse(readFileSync(join(dir, 'mapping.json'), 'utf8'));
const toDataUrl = (p) => `data:image/webp;base64,${readFileSync(isAbsolute(p) ? p : join(dir, p)).toString('base64')}`;

const oldIds = ['1A','1B','1C','1D','1E','1F','2A', ...Object.keys(OLD_TO_NEW_TOPIC).map((id) => id.replace('y12e2-', ''))].map((c) => `y12e2-${c}`);
const candidates = [...new Set([...oldIds, ...Object.keys(mapping)])];
const snaps = await db.getAll(...candidates.map((id) => db.collection('answer_keys').doc(id)));
const existing = snaps.filter((s) => s.exists);
const stale = existing.filter((s) => !mapping[s.id]).map((s) => s.id);
console.log(`existing Extension 2 answer keys: ${existing.length} → ${existing.map((s) => s.id).join(' ')}`);
console.log(`to overwrite with the new book: ${Object.keys(mapping).length} topics`);
console.log(`to delete (not in the new book): ${stale.join(' ') || 'none'}`);
if (!APPLY) { console.log('DRY RUN — nothing written. Re-run with --apply.'); process.exit(0); }

const backupDir = `/Users/andrewkim/backups/ext2-answer-keys-${new Date().toISOString().slice(0, 10)}`;
mkdirSync(backupDir, { recursive: true });
writeFileSync(join(backupDir, 'answer_keys.json'), JSON.stringify(Object.fromEntries(existing.map((s) => [s.id, s.data()]))));
console.log('backup →', backupDir);
for (const id of stale) await db.collection('answer_keys').doc(id).delete();
const ids = Object.keys(mapping);
for (let i = 0; i < ids.length; i += 10) {
  const batch = db.batch();
  for (const topicId of ids.slice(i, i + 10)) {
    batch.set(db.collection('answer_keys').doc(topicId), {
      topicId, book: 'CambridgeMATHS NSW Stage 6 Mathematics Extension 2 Year 12 (2026)',
      sections: mapping[topicId].map((s) => ({ key: s.key, title: s.title, labels: s.labels, images: s.images.map(toDataUrl) })),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  }
  await batch.commit();
  console.log(`written ${Math.min(i + 10, ids.length)}/${ids.length}`);
}
process.exit(0);
