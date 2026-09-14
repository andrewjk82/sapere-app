#!/usr/bin/env node
/**
 * P0 — Firestore `questions` → content/_export/raw/<chapterId>.json
 *
 * Read model (NO collection scan of `questions`):
 *   1. question_index/*            (~300 small docs)  → the membership definition
 *   2. db.getAll(question refs)    (chunks of 500)    → exactly the ids the index names
 *
 * Output is the RAW Firestore document (Timestamps → ISO strings), untouched.
 * Schema normalisation is P1 and runs offline from these files.
 *
 * Usage: node tools/content/export.mjs [--dry]   (--dry: read index only, print cost)
 */
import admin from 'firebase-admin';
import fs from 'node:fs';
import path from 'node:path';

const SA = '.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const OUT = 'content/_export';
const DRY = process.argv.includes('--dry');

admin.initializeApp({ credential: admin.credential.cert(JSON.parse(fs.readFileSync(SA, 'utf8'))) });
const db = admin.firestore();

const toPlain = (v) => {
  if (v instanceof admin.firestore.Timestamp) return v.toDate().toISOString();
  if (Array.isArray(v)) return v.map(toPlain);
  if (v && typeof v === 'object' && v.constructor === Object) {
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, toPlain(x)]));
  }
  return v;
};

const t0 = Date.now();
let reads = 0;

// 1. membership
const idxSnap = await db.collection('question_index').get();
reads += idxSnap.size;
const chapters = [];
for (const d of idxSnap.docs) {
  if (d.id === '_meta') continue;
  const ids = (d.data().ids || []).map(String);
  chapters.push({ chapterId: d.id, ids, updatedAt: toPlain(d.data().updatedAt) });
}
const allIds = [...new Set(chapters.flatMap((c) => c.ids))];
console.log(`index docs: ${idxSnap.size}  chapters: ${chapters.length}  unique question ids: ${allIds.length}`);
console.log(`planned reads: ${idxSnap.size} + ${allIds.length} = ${idxSnap.size + allIds.length}`);
if (DRY) process.exit(0);

// 2. fetch by id
const docs = new Map();
const missing = [];
for (let i = 0; i < allIds.length; i += 500) {
  const chunk = allIds.slice(i, i + 500);
  const snaps = await db.getAll(...chunk.map((id) => db.doc(`questions/${id}`)));
  reads += snaps.length;
  for (const s of snaps) {
    if (s.exists) docs.set(s.id, { id: s.id, ...toPlain(s.data()) });
    else missing.push(s.id);
  }
  process.stdout.write(`\r  fetched ${Math.min(i + 500, allIds.length)}/${allIds.length}`);
}
console.log();

// 3. write per chapter
fs.mkdirSync(path.join(OUT, 'raw'), { recursive: true });
const summary = { exportedAt: new Date().toISOString(), reads, chapters: {}, missingFromFirestore: missing };
for (const c of chapters) {
  const rows = c.ids.map((id) => docs.get(id)).filter(Boolean);
  const inactive = rows.filter((q) => q.isActive === false).length;
  const byOrigin = {};
  rows.forEach((q) => { const o = q.origin || '(none)'; byOrigin[o] = (byOrigin[o] || 0) + 1; });
  summary.chapters[c.chapterId] = { indexed: c.ids.length, exported: rows.length, inactive, byOrigin, indexUpdatedAt: c.updatedAt };
  fs.writeFileSync(path.join(OUT, 'raw', `${c.chapterId.replace(/[^a-z0-9:_-]/gi, '_')}.json`), JSON.stringify(rows, null, 1));
}
fs.writeFileSync(path.join(OUT, 'export-summary.json'), JSON.stringify(summary, null, 2));

const totals = Object.values(summary.chapters).reduce((a, c) => ({ indexed: a.indexed + c.indexed, exported: a.exported + c.exported, inactive: a.inactive + c.inactive }), { indexed: 0, exported: 0, inactive: 0 });
console.log(`done in ${((Date.now() - t0) / 1000).toFixed(1)}s  reads=${reads}`);
console.log(`indexed=${totals.indexed} exported=${totals.exported} inactive=${totals.inactive} missing(orphan ids)=${missing.length}`);
process.exit(0);
