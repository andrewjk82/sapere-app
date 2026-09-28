// Deletes full-size homework pages whose purgeAfter date has passed.
// purgeAfter is set when the teacher checks a submission and removed here, so
// each submission is matched exactly once. Single-field range query → uses the
// automatic index; no composite index needed.
export async function purgeCheckedHomeworkOriginals(db, FieldValue, { todayStr, limit = 50 }) {
  const snap = await db.collection('homework_submissions')
    .where('purgeAfter', '<=', todayStr)
    .limit(limit)
    .get();

  let purged = 0;
  let pagesDeleted = 0;
  for (const subDoc of snap.docs) {
    const pagesSnap = await subDoc.ref.collection('pages').get();
    const batch = db.batch();
    pagesSnap.docs.forEach((p) => batch.delete(p.ref));
    batch.update(subDoc.ref, {
      originalsDeletedAt: FieldValue.serverTimestamp(),
      purgeAfter: FieldValue.delete(),
    });
    await batch.commit();
    purged += 1;
    pagesDeleted += pagesSnap.size;
  }
  return { purged, pagesDeleted };
}
