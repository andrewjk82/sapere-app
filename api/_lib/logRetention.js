// Deletes log-type docs older than their retention window. The app only ever reads the
// newest few of each (traffic monitor: 50, notifications: 10 per student, system_logs: the
// last run / last 6 h, notification queue: today's doc, daily assignments: today's,
// yesterday's and next_prep), so anything older is dead weight. Results live in daily_stats.
// Each call deletes at most `limit` docs per collection (`limit` per student for
// notifications) so the hourly cron stays fast; leftovers go on the next run.

export const RETENTION_DAYS = {
  traffic_logs: 30,
  system_logs: 30,
  notification_queue_6pm: 30,
  notifications: 90,
  daily_assignments: 14,
};

const DAY_MS = 24 * 60 * 60 * 1000;

export const cutoffDate = (now, days) => new Date(now.getTime() - days * DAY_MS);
// notification_queue_6pm and daily_assignments doc ids are YYYY-MM-DD dates; comparing ids is
// enough ('next_prep' sorts after every date, so it is never matched).
export const cutoffDateId = (now, days) => cutoffDate(now, days).toISOString().slice(0, 10);

const deleteDocs = async (db, docs) => {
  for (let i = 0; i < docs.length; i += 500) {
    const batch = db.batch();
    docs.slice(i, i + 500).forEach((d) => batch.delete(d.ref));
    await batch.commit();
  }
  return docs.length;
};

export async function purgeOldLogs(db, FieldPath, { now = new Date(), limit = 500 } = {}) {
  const deleted = {};

  for (const name of ['traffic_logs', 'system_logs']) {
    const snap = await db.collection(name)
      .where('timestamp', '<', cutoffDate(now, RETENTION_DAYS[name]))
      .limit(limit)
      .get();
    deleted[name] = await deleteDocs(db, snap.docs);
  }

  const queueSnap = await db.collection('notification_queue_6pm')
    .where(FieldPath.documentId(), '<', cutoffDateId(now, RETENTION_DAYS.notification_queue_6pm))
    .limit(limit)
    .get();
  deleted.notification_queue_6pm = await deleteDocs(db, queueSnap.docs);

  // Per student (single-field index on each subcollection; a collection-group range
  // query would need an index exemption).
  deleted.notifications = 0;
  deleted.daily_assignments = 0;
  const notifCutoff = cutoffDate(now, RETENTION_DAYS.notifications);
  const assignmentCutoff = cutoffDateId(now, RETENTION_DAYS.daily_assignments);
  for (const userRef of await db.collection('users').listDocuments()) {
    const snap = await userRef.collection('notifications')
      .where('timestamp', '<', notifCutoff)
      .limit(limit)
      .get();
    deleted.notifications += await deleteDocs(db, snap.docs);
    const assignments = await userRef.collection('daily_assignments')
      .where(FieldPath.documentId(), '<', assignmentCutoff)
      .limit(limit)
      .get();
    deleted.daily_assignments += await deleteDocs(db, assignments.docs);
  }

  return deleted;
}
