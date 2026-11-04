// Hands several groups of Firestore writes to the SDK in one synchronous pass.
//
// With persistentLocalCache a batch is stored on the device the moment commit() is called and is sent whenever a
// connection exists, even after the app is closed and reopened. `await commit()`, however, only resolves once the
// server has answered, so code that awaits one write before starting the next loses every later write if the student
// closes the app during a stalled connection (2026-11-04: Jerome's daily_stats landed 72 minutes late and the teacher
// summary, XP and assignment status were never written at all).
//
// Each group is its own batch: atomic within the group, and a group that fails (or throws while being built, e.g. an
// `undefined` field) does not take the others with it. Returns one commit promise per group, in order. The caller
// decides what a failure means; nothing here waits for the server.
export const queueWriteGroups = (createBatch, groups) => groups.map((writes) => {
  try {
    const batch = createBatch();
    writes.forEach((write) => write(batch));
    return batch.commit();
  } catch (err) {
    return Promise.reject(err);
  }
});
