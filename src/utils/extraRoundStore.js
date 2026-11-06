// Extra rounds wait on this device and go to Firestore together when the student stops (services/extraRoundService).
// Nothing here touches the network. `storage` is injectable for tests.
const pendingKey = (uid) => `sapere:extraRounds:pending:v1:${uid}`;
const runningKey = (uid) => `sapere:extraRounds:running:v1:${uid}`;

// The review document may hold 1 MB. Past this the rounds keep their marks but not their questions.
export const DETAIL_BYTES_LIMIT = 900 * 1024;

const readJson = (storage, key, fallback) => {
  try { return JSON.parse(storage.getItem(key)) ?? fallback; } catch { return fallback; }
};

// Firestore refuses undefined and an array directly inside an array (a fill-in-the-blank answer). No images are kept.
export const cleanForFirestore = (value, insideArray = false) => {
  if (value === undefined) return null;
  if (typeof value === 'string') {
    return value.startsWith('data:image/') && !value.startsWith('data:image/svg+xml') ? '[image]' : value;
  }
  if (Array.isArray(value)) {
    const list = value.map((item) => cleanForFirestore(item, true));
    return insideArray ? { list } : list;
  }
  if (value && typeof value === 'object') {
    const out = {};
    Object.keys(value).forEach((key) => {
      if (value[key] !== undefined) out[key] = cleanForFirestore(value[key]);
    });
    return out;
  }
  return value;
};

// Undoes cleanForFirestore's wrapping, for the review screen.
export const unwrapLists = (value) => {
  if (Array.isArray(value)) return value.map(unwrapLists);
  if (value && typeof value === 'object') {
    if (Array.isArray(value.list) && Object.keys(value).length === 1) return value.list.map(unwrapLists);
    const out = {};
    Object.keys(value).forEach((key) => { out[key] = unwrapLists(value[key]); });
    return out;
  }
  return value;
};

// Re-fetched from the published content when reviewed, so they need not be stored.
const LARGE_QUESTION_FIELDS = ['solutionSteps', 'graphData', 'hint', 'solution', 'subQuestions', 'keyPoints'];
const IMAGE_RESULT_FIELDS = ['workingOut', 'workingOutPages'];
const without = (object, fields) => {
  if (!object || typeof object !== 'object') return object;
  const out = { ...object };
  fields.forEach((field) => { delete out[field]; });
  return out;
};

export const buildRound = ({ date, finishedAt, xp, score, total, questions, userAnswers, answerResults }) => ({
  id: `${finishedAt}`,
  date,
  finishedAt,
  xp,
  score,
  total,
  // What the pool needs, kept apart from the review detail (which can be dropped).
  shown: (questions || []).map((q, i) => ({
    id: q?.id ?? null,
    chapterId: answerResults?.[i]?.chapterId || q?.chapterId || null,
    correct: Boolean(answerResults?.[i]?.correct),
  })).filter((s) => s.id && s.chapterId),
  detail: cleanForFirestore({
    questions: (questions || []).map((q) => without(q, LARGE_QUESTION_FIELDS)),
    userAnswers: userAnswers || [],
    answerResults: (answerResults || []).map((r) => without(r, IMAGE_RESULT_FIELDS)),
  }),
});

export const roundWithoutDetail = (round) => without(round, ['detail']);

export const loadPendingRounds = (uid, storage = globalThis.localStorage) => readJson(storage, pendingKey(uid), []);

// False when the device has no room even for the marks; the caller should send the round straight away.
export const addPendingRound = (uid, round, storage = globalThis.localStorage) => {
  const pending = loadPendingRounds(uid, storage);
  try {
    storage.setItem(pendingKey(uid), JSON.stringify([...pending, round]));
    return true;
  } catch {
    try {
      storage.setItem(pendingKey(uid), JSON.stringify([...pending.map(roundWithoutDetail), roundWithoutDetail(round)]));
      return true;
    } catch {
      return false;
    }
  }
};

// Reads and clears in one step, so two calls can never send the same round twice.
export const takePendingRounds = (uid, storage = globalThis.localStorage) => {
  const pending = loadPendingRounds(uid, storage);
  if (pending.length > 0) {
    try { storage.removeItem(pendingKey(uid)); } catch { return []; }
  }
  return pending;
};

export const restorePendingRounds = (uid, rounds, storage = globalThis.localStorage) => {
  const current = loadPendingRounds(uid, storage);
  try { storage.setItem(pendingKey(uid), JSON.stringify([...rounds, ...current])); } catch { /* nothing more to try */ }
};

export const pendingXp = (uid, storage = globalThis.localStorage) => loadPendingRounds(uid, storage)
  .reduce((sum, round) => sum + (Number(round.xp) || 0), 0);

// Today's totals: the larger of what this device and the profile know, plus the rounds being sent.
export const addRoundsToTotals = (known, date, rounds) => {
  const start = known?.date === date ? known : { rounds: 0, xp: 0, score: 0, total: 0 };
  return rounds.filter((round) => round.date === date).reduce((sum, round) => ({
    date,
    rounds: sum.rounds + 1,
    xp: sum.xp + (Number(round.xp) || 0),
    score: Math.round((sum.score + (Number(round.score) || 0)) * 100) / 100,
    total: sum.total + (Number(round.total) || 0),
  }), { date, rounds: start.rounds, xp: start.xp, score: start.score, total: start.total });
};

export const newestTotals = (a, b, date) => {
  const today = [a, b].filter((t) => t?.date === date);
  return today.sort((x, y) => (y.rounds || 0) - (x.rounds || 0))[0] || null;
};

export const loadRunningTotals = (uid, storage = globalThis.localStorage) => readJson(storage, runningKey(uid), null);
export const saveRunningTotals = (uid, totals, storage = globalThis.localStorage) => {
  try { storage.setItem(runningKey(uid), JSON.stringify(totals)); } catch { /* the profile still has them */ }
};

// Splits rounds into what fits the review document for that date; the rest keep only their marks.
export const fitDetail = (rounds, bytesSoFar = 0, limit = DETAIL_BYTES_LIMIT) => {
  let bytes = bytesSoFar;
  const records = rounds.map((round) => {
    const size = JSON.stringify(round).length;
    if (!round.detail || bytes + size > limit) {
      bytes += JSON.stringify(roundWithoutDetail(round)).length;
      return { ...roundWithoutDetail(round), detailDropped: true };
    }
    bytes += size;
    return round;
  });
  return { records: records.map((record) => without(record, ['shown'])), bytes };
};
