// One-off: re-encode inline base64 avatar images (data:image/*) to <=128px JPEG so profile/leaderboard
// reads stop shipping ~37KB per doc. Dry-run by default; --apply writes (after saving a backup of the touched fields).
//   node tools/scripts/shrinkAvatars.mjs [--apply]
// Walks only small, known collections (users, leaderboard, study_time_totals, study_time_leaderboard).
import admin from 'firebase-admin';
import sharp from 'sharp';
import { readFileSync, writeFileSync } from 'fs';

const KEY = process.env.GOOGLE_APPLICATION_CREDENTIALS || '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-dffb22a1c2.json';
admin.initializeApp({ credential: admin.credential.cert(JSON.parse(readFileSync(KEY, 'utf8'))) });
const db = admin.firestore();
const APPLY = process.argv.includes('--apply');
const MAX_PX = 128, MAX_CHARS = 12000, MIN_CHARS = 12000;

const shrink = async (dataUrl) => {
  const buf = Buffer.from(dataUrl.slice(dataUrl.indexOf(',') + 1), 'base64');
  for (let max = MAX_PX, i = 0; i < 3; i += 1, max = Math.round(max * 0.8)) {
    for (let q = 75; q >= 35; q -= 10) {
      const out = await sharp(buf).rotate().resize(max, max, { fit: 'inside', withoutEnlargement: true })
        .flatten({ background: '#fff' }).jpeg({ quality: q }).toBuffer();
      const url = `data:image/jpeg;base64,${out.toString('base64')}`;
      if (url.length <= MAX_CHARS) return url;
    }
  }
  return null;
};

// returns [{path, value}] for every big data-URL string inside obj (maps/arrays walked)
const findImages = (v, path = []) => {
  if (typeof v === 'string') return v.startsWith('data:image/') && v.length > MIN_CHARS ? [{ path, value: v }] : [];
  if (Array.isArray(v)) return v.flatMap((x, i) => findImages(x, [...path, i]));
  if (v && typeof v === 'object' && !(v instanceof admin.firestore.Timestamp)) return Object.entries(v).flatMap(([k, x]) => findImages(x, [...path, k]));
  return [];
};
const setPath = (obj, path, value) => { const o = structuredClone(obj); let c = o; path.slice(0, -1).forEach((k) => { c = c[k]; }); c[path.at(-1)] = value; return o; };

const backup = [];
let before = 0, after = 0, docsTouched = 0, skipped = 0;
for (const col of ['users', 'leaderboard', 'study_time_totals', 'study_time_leaderboard']) {
  const snap = await db.collection(col).get();
  for (const d of snap.docs) {
    const imgs = findImages(d.data());
    if (!imgs.length) continue;
    const updates = {};
    for (const { path, value } of imgs) {
      const small = await shrink(value);
      if (!small) { skipped += 1; console.log('SKIP (cannot fit)', col, d.id, path.join('.')); continue; }
      before += value.length; after += small.length;
      backup.push({ col, id: d.id, path, value });
      // Firestore update with a dotted path works for map keys; array elements need whole top-level field rewritten
      const top = path[0];
      const full = setPath(d.data(), path, small);
      updates[top] = full[top];
    }
    docsTouched += 1;
    console.log(`${col}/${d.id}: ${imgs.map((i) => `${i.path.join('.')} ${(i.value.length / 1000).toFixed(1)}K`).join(', ')}`);
    if (APPLY && Object.keys(updates).length) await d.ref.update(updates);
  }
}
console.log(`\n${APPLY ? 'APPLIED' : 'DRY-RUN'}: ${docsTouched} docs, ${(before / 1000).toFixed(0)}K -> ${(after / 1000).toFixed(0)}K chars, skipped ${skipped}`);
if (APPLY) { const f = `/tmp/avatar-backup-${Date.now()}.json`; writeFileSync(f, JSON.stringify(backup)); console.log('backup', f); }
