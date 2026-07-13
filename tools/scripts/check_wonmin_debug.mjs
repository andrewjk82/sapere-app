/**
 * Point-read Wonmin's recent daily_stats (no full collection scan).
 * Usage: node tools/scripts/check_wonmin_debug.mjs
 */
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { getUserStatsSinceReset, todayYmdLocal } from './_lib/safeUserStats.js';

const saPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
  || '/Users/andrewkim/Downloads/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json';
const serviceAccount = JSON.parse(readFileSync(saPath, 'utf8'));
initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

const usersSnap = await db.collection('users').get();
const wonmin = usersSnap.docs.find((d) => {
  const x = d.data() || {};
  const blob = `${x.displayName || ''} ${x.name || ''} ${x.firstName || ''}`.toLowerCase();
  return blob.includes('wonmin') || blob.includes('womin');
});

if (!wonmin) {
  console.log('❌ Wonmin not found in users');
  process.exit(1);
}

console.log('✅ Found in users:', wonmin.id, wonmin.data().displayName || wonmin.data().name);
const since = process.env.SAPERE_STATS_SINCE || '2026-07-11';
const rows = await getUserStatsSinceReset(db, wonmin.id, 'daily_stats', since);
if (!rows.length) {
  console.log(`  No daily_stats docs in ${since}…${todayYmdLocal()} (point-reads only)`);
} else {
  rows.forEach((data) => {
    console.log(`  📅 ${data.id} | score: ${data.score} | total: ${data.total} | completed: ${data.completed} | xp: ${data.xpEarned}`);
  });
}
process.exit(0);
