// Replaces the `labels` of existing answer_keys sections with new ones (e.g. part-level labels
// "1a","1b" instead of "1") WITHOUT touching the images.
// Usage: node tools/answer-keys/update_labels.mjs <labels.json> "<book name>" [--write]
// labels.json: { sectionKey: [label, ...] }. A section is only changed when its question numbers
// are exactly the old labels' numbers (so a mismatch can never silently corrupt marking).
import admin from 'firebase-admin';
import { readFileSync } from 'fs';

const [file, book, flag] = process.argv.slice(2);
if (!file || !book) { console.error('usage: update_labels.mjs <labels.json> "<book>" [--write]'); process.exit(1); }
const sa = JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
admin.initializeApp({ credential: admin.credential.cert(sa) });
const db = admin.firestore();
const fresh = JSON.parse(readFileSync(file, 'utf8'));
const num = (l) => parseInt(String(l), 10);
const base = (labels) => [...new Set(labels.map(num))].sort((a, b) => a - b).join(',');

const refs = await db.collection('answer_keys').listDocuments();
const ids = refs.map((r) => r.id).sort();
let docs = 0, sectionsChanged = 0, skipped = [], unchanged = 0;
for (let i = 0; i < ids.length; i += 10) {
  const snaps = await db.getAll(...ids.slice(i, i + 10).map((id) => db.collection('answer_keys').doc(id)));
  for (const snap of snaps) {
    const d = snap.data();
    if (d.book !== book) continue;
    let changed = false;
    const sections = d.sections.map((s) => {
      const next = fresh[s.key];
      if (!next || !next.length) { skipped.push(`${snap.id}/${s.key}: no new labels`); return s; }
      if (base(next) !== base(s.labels)) { skipped.push(`${snap.id}/${s.key}: numbers differ old=${base(s.labels)} new=${base(next)}`); return s; }
      if (JSON.stringify(next) === JSON.stringify(s.labels)) { unchanged += 1; return s; }
      changed = true; sectionsChanged += 1;
      return { ...s, labels: next };
    });
    if (!changed) continue;
    docs += 1;
    if (flag === '--write') await snap.ref.update({ sections, updatedAt: admin.firestore.FieldValue.serverTimestamp() });
  }
}
console.log(`${flag === '--write' ? 'WROTE' : 'dry run'}: ${docs} docs, ${sectionsChanged} sections changed, ${unchanged} already part-level`);
if (skipped.length) console.log('skipped:\n ' + skipped.join('\n '));
