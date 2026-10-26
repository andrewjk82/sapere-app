// Review screens store a snapshot of each question at the time it was answered, then
// overlay the bank's current wording/solution so a fixed solution reaches old attempts.
// Only fields the live copy actually has are overlaid — a missing field never blanks the snapshot.

export const REVIEW_LIVE_FIELDS = ['solution', 'solutionSteps', 'hint', 'question', 'answer', 'subQuestions', 'graphData'];

// Ids worth looking up (generated questions have no bank copy).
export const liveLookupIds = (questions) => [...new Set(
  (questions || []).map((q) => q?.id).filter((id) => id && !String(id).startsWith('gen-')).map(String),
)];

const optionText = (o) => (typeof o === 'string' ? o : o?.text ?? JSON.stringify(o));
const sameOptions = (a, b) => Array.isArray(a) && Array.isArray(b) && a.length === b.length
  && a.every((o, i) => optionText(o) === optionText(b[i]));

// An MC answer is an index into the options, so it is only taken from the live copy when
// the snapshot's options are the live options (or the snapshot has none).
const answerMatches = (q, live, fields) => fields.includes('options')
  || !Array.isArray(q.options) || q.options.length === 0 || sameOptions(q.options, live.options);

export const applyLiveContent = (questions, liveDocs, fields = REVIEW_LIVE_FIELDS) => {
  const byId = new Map((liveDocs || []).map((d) => [String(d.id), d]));
  return (questions || []).map((q) => {
    const live = q?.id ? byId.get(String(q.id)) : null;
    if (!live) return q;
    const out = { ...q };
    for (const field of fields) {
      if (live[field] === undefined) continue;
      if (field === 'answer' && !answerMatches(q, live, fields)) continue;
      out[field] = live[field];
    }
    return out;
  });
};
