/**
 * Audit one student's XP after the season reset using POINT-READS only
 * (no full daily_stats / calc_stats collection scans).
 *
 * Usage:
 *   node tools/scripts/auditUserXpSinceReset.js <uid-or-name-fragment> [sinceYYYY-MM-DD]
 *
 * Example:
 *   node tools/scripts/auditUserXpSinceReset.js Wonmin
 *   node tools/scripts/auditUserXpSinceReset.js 1paF63GBe6ZVzMpOl2ZM9fGjGpw2 2026-07-11
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import {
  getUserStatsSinceReset,
  todayYmdLocal,
} from './_lib/safeUserStats.js';

const saPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  || '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const serviceAccount = JSON.parse(readFileSync(saPath, 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const needle = (process.argv[2] || '').trim();
const since = process.argv[3] || process.env.SAPERE_STATS_SINCE || '2026-07-11';
if (!needle) {
  console.error('Usage: node tools/scripts/auditUserXpSinceReset.js <uid-or-name> [sinceYYYY-MM-DD]');
  process.exit(1);
}

const usersSnap = await db.collection('users').get();
const matches = usersSnap.docs.filter((d) => {
  if (d.id === needle) return true;
  const x = d.data() || {};
  const blob = `${x.displayName || ''} ${x.name || ''} ${x.firstName || ''} ${x.email || ''}`.toLowerCase();
  return blob.includes(needle.toLowerCase());
});

if (!matches.length) {
  console.error('No user matched:', needle);
  process.exit(1);
}

for (const doc of matches) {
  if (doc.data().role === 'admin') continue;
  const uid = doc.id;
  const name = doc.data().displayName || doc.data().name || doc.data().firstName || uid;
  const totalXP = Number(doc.data().totalXP) || 0;

  const daily = await getUserStatsSinceReset(db, uid, 'daily_stats', since);
  const calc = await getUserStatsSinceReset(db, uid, 'calc_stats', since);

  let sum = 0;
  console.log(`\n=== ${name} (${uid}) ===`);
  console.log(`totalXP=${totalXP}  window=${since}…${todayYmdLocal()}`);
  console.log('-- daily_stats (point-reads) --');
  for (const r of daily) {
    const xp = Number(r.xpEarned) || 0;
    if (r.completed && !r.abandoned) sum += xp;
    console.log(`  ${r.id}  ${r.score}/${r.total}  xp=${r.xpEarned ?? '—'}  completed=${r.completed}`);
  }
  console.log('-- calc_stats (point-reads) --');
  for (const r of calc) {
    const xp = Number(r.xpEarned) || 0;
    if (r.completed && !r.abandoned) sum += xp;
    console.log(`  ${r.id}  ${r.score}/${r.total}  xp=${r.xpEarned ?? '—'}  completed=${r.completed}`);
  }
  console.log(`challenge XP sum (completed)=${sum}  delta vs totalXP=${totalXP - sum}`);
  console.log(`reads used ≈ ${daily.length + calc.length} point-gets (not full collection)`);
}

process.exit(0);
