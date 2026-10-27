// Deletes log-type docs older than their retention window. The app only ever reads the
// newest few of each (traffic monitor: 50, notifications: 10 per student, system_logs: the
// last run / last 6 h, notification queue: today's doc, daily assignments: today's,
// yesterday's and next_prep, challenge_boot: today's only), so anything older is dead
// weight. Sprint attempts are never read. Results live in daily_stats.
// Each call deletes at most `limit` docs per collection (`limit` per student for
// notifications) so the hourly cron stays fast; leftovers go on the next run.

export const RETENTION_DAYS = {
  traffic_logs: 30,
  system_logs: 30,
  notification_queue_6pm: 30,
  notifications: 90,
  daily_assignments: 14,
  // sync_meta/challenge_boot_<uid>_<date>: one doc per student per day, and only
  // *today's* is ever read (always by exact id). Nothing pruned these, so the
  // oldest on record was 2026-05-19 and the collection had grown to 2,604 of them.
  challenge_boot: 30,
  // timestable_sprint_attempts: append-only; the leaderboard reads the meta doc and
  // settlement reads timestable_sprint_results, so nothing reads attempts at all.
  // Kept for three months in case an XP result is ever disputed.
  timestable_sprint_attempts: 90,
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

  // sync_meta holds the per-day challenge_boot docs alongside permanent markers
  // (students_*, hsc_*, curriculum, questions, newQuestions, ...) that are "old"
  // only because nothing has changed them. Those must survive, so filter the page
  // down to the challenge_boot_ prefix and delete nothing else.
  const bootSnap = await db.collection('sync_meta')
    .where('updatedAt', '<', cutoffDate(now, RETENTION_DAYS.challenge_boot))
    .orderBy('updatedAt')
    .limit(limit)
    .get();
  deleted.challenge_boot = await deleteDocs(
    db,
    bootSnap.docs.filter((d) => d.id.startsWith('challenge_boot_')),
  );

  const attemptSnap = await db.collection('timestable_sprint_attempts')
    .where('createdAt', '<', cutoffDate(now, RETENTION_DAYS.timestable_sprint_attempts))
    .limit(limit)
    .get();
  deleted.timestable_sprint_attempts = await deleteDocs(db, attemptSnap.docs);

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
