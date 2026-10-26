// One-time backlog cleanup for the log retention the hourly cron now does (api/_lib/logRetention.js).
// Dry run (default) counts what is past retention; --apply deletes it in rounds of 500.
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore, FieldPath } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import { purgeOldLogs, RETENTION_DAYS, cutoffDate, cutoffDateId } from '../../api/_lib/logRetention.js';

const sa = JSON.parse(readFileSync('/Users/andrewkim/Desktop/sapere1/.secrets/sapere-fe23e-firebase-adminsdk-fbsvc-d9dd93623b.json', 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();
const now = new Date();
const count = async (q) => (await q.count().get()).data().count;

const expired = {
  traffic_logs: await count(db.collection('traffic_logs').where('timestamp', '<', cutoffDate(now, RETENTION_DAYS.traffic_logs))),
  system_logs: await count(db.collection('system_logs').where('timestamp', '<', cutoffDate(now, RETENTION_DAYS.system_logs))),
  notification_queue_6pm: await count(db.collection('notification_queue_6pm').where(FieldPath.documentId(), '<', cutoffDateId(now, RETENTION_DAYS.notification_queue_6pm))),
  notifications: 0,
  daily_assignments: 0,
};
for (const u of await db.collection('users').listDocuments()) {
  expired.notifications += await count(u.collection('notifications').where('timestamp', '<', cutoffDate(now, RETENTION_DAYS.notifications)));
  expired.daily_assignments += await count(u.collection('daily_assignments').where(FieldPath.documentId(), '<', cutoffDateId(now, RETENTION_DAYS.daily_assignments)));
}
console.log('past retention:', expired);
if (!process.argv.includes('--apply')) { console.log('DRY RUN — pass --apply to delete'); process.exit(0); }

const total = {};
for (;;) {
  const round = await purgeOldLogs(db, FieldPath, { now });
  for (const [k, v] of Object.entries(round)) total[k] = (total[k] || 0) + v;
  if (Object.values(round).every((v) => v === 0)) break;
}
console.log('deleted:', total);
