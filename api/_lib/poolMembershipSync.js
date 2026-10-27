// Keeps students' practice pools in step with the git question bank.
//
// A practice pool (users/{uid}/practice_pool/main) is only reconciled with the bank when
// sync_meta/questions.membershipVersion changes. Content now lives in git, so nothing bumps that
// counter on an edit. This runs from the cron: the published all-ids.<hash>.json file lists every
// active question with its chapter/topic and is content-hashed, so its filename changes exactly
// when a question is added, removed, deactivated or moved. When it differs from the one recorded
// on sync_meta/questions, bump membershipVersion (and record the new file).
//
// Off-peak only: a bump makes each student's next session rewrite their pool doc, which has caused
// "Assignment load timed out" storms at the after-school peak. The window is checked by the caller.

const SITE = 'https://sapere-app.vercel.app';
const META = ['sync_meta', 'questions'];

export const isOffPeak = (sydneyHour) => sydneyHour >= 22 || sydneyHour < 6;

const fetchMembershipFile = async (fetchImpl) => {
  const res = await fetchImpl(`${SITE}/content/manifest.json`, { signal: AbortSignal.timeout(8000) });
  if (!res.ok) throw new Error(`manifest HTTP ${res.status}`);
  const file = (await res.json())?.allIds;
  if (typeof file !== 'string' || !/^all-ids\.[0-9a-f]+\.json$/.test(file)) throw new Error('manifest has no allIds file');
  return file;
};

/** @returns {Promise<{action: 'unchanged'|'bumped'|'skipped', file?: string, reason?: string}>} */
export const syncPoolMembership = async (db, { fetchImpl = fetch, now = Date.now } = {}) => {
  let file;
  try { file = await fetchMembershipFile(fetchImpl); }
  catch (err) { return { action: 'skipped', reason: String(err?.message || err) }; }   // retried next run

  const ref = db.collection(META[0]).doc(META[1]);
  const snap = await ref.get();
  const data = snap.exists ? snap.data() : {};
  if (data.contentMembershipFile === file) return { action: 'unchanged', file };

  await ref.set({ membershipVersion: now(), contentMembershipFile: file }, { merge: true });
  return { action: 'bumped', file, previous: data.contentMembershipFile || null };
};
