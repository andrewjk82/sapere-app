#!/usr/bin/env node
/** Backup of the small content-metadata collections (raw, Timestamps→ISO). ~3k reads. */
import admin from 'firebase-admin'; import fs from 'node:fs'; import path from 'node:path';
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(fs.readFileSync('.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'))) });
const db = admin.firestore();
const toPlain = (v) => v instanceof admin.firestore.Timestamp ? v.toDate().toISOString() : Array.isArray(v) ? v.map(toPlain) : (v && typeof v === 'object' && v.constructor === Object) ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, toPlain(x)])) : v;
const OUT = 'content/_export/raw-meta'; fs.mkdirSync(OUT, { recursive: true });
let reads = 0;
for (const c of ['question_index', 'question_topic_index', 'question_type_index', 'sync_meta', 'curriculum']) {
  const snap = await db.collection(c).get(); reads += snap.size;
  fs.writeFileSync(path.join(OUT, `${c}.json`), JSON.stringify(snap.docs.map((d) => ({ id: d.id, ...toPlain(d.data()) })), null, 1));
  console.log(c.padEnd(22), snap.size);
}
console.log('reads', reads); process.exit(0);
