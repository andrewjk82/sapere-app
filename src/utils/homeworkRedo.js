// "Redo wrong questions": which questions the teacher marked wrong or half, and
// how far the student has got with each. All of it is derived from the marks on
// the session and from a local (per-device) record — nothing here reads or writes Firestore.

const natural = (a, b) => String(a).localeCompare(String(b), undefined, { numeric: true });

export const isWrongMark = (mark) => mark === 'x' || mark === 'h';

// Marked-wrong questions in worksheet order: topics as listed on the homework, then section, then number.
// `marks` is the session's homeworkMarks ({ "topicId|section|label": 'c' | 'x' | 'h' }).
export const wrongQuestions = (marks = {}, topics = []) => {
  const topicOrder = new Map(topics.map((topic, index) => [topic.id, index]));
  const list = [];
  for (const [key, mark] of Object.entries(marks || {})) {
    if (!isWrongMark(mark)) continue;
    const [topicId, section, ...rest] = String(key).split('|');
    const label = rest.join('|');
    if (!topicId || !section || !label) continue;
    list.push({ key, topicId, section, label, mark });
  }
  const rank = (topicId) => (topicOrder.has(topicId) ? topicOrder.get(topicId) : topics.length);
  return list.sort((a, b) => rank(a.topicId) - rank(b.topicId)
    || natural(a.topicId, b.topicId) || natural(a.section, b.section) || natural(a.label, b.label));
};

// A pad draft is { pages: [[stroke, ...], ...], ... } (WorkingOutCanvas.getPagesData).
export const draftHasInk = (draft) => Boolean(
  draft && Array.isArray(draft.pages) && draft.pages.some((page) => Array.isArray(page) && page.length > 0),
);

// 'got' / 'again' are the student's own call after looking at the answer; otherwise
// 'writing' once there is ink on the pad, else 'new'.
// `ink` ({ [key]: boolean }) is a cheaper stand-in for the drafts when only the has-ink flag is kept in memory.
export const redoState = (key, { drafts = {}, ink = {}, status = {} } = {}) => {
  if (status[key] === 'got' || status[key] === 'again') return status[key];
  return (ink[key] || draftHasInk(drafts[key])) ? 'writing' : 'new';
};

export const redoSummary = (questions, store = {}) => {
  const counts = { total: questions.length, got: 0, again: 0, writing: 0, new: 0 };
  for (const q of questions) counts[redoState(q.key, store)] += 1;
  return counts;
};

// First part of a topic label: "Y8 1A · Substitution" → "Y8 1A".
export const shortTopicLabel = (topic) => String(topic?.label || topic?.title || topic?.id || '').split(' · ')[0];
