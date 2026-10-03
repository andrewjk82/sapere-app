// Per-question homework marking against a textbook answer key.
// A mark is 'c' (correct), 'x' (wrong) or 'h' (half); unmarked questions
// (not attempted / not set) don't count toward the total.

export const MARK_CYCLE = [undefined, 'c', 'x', 'h'];

export const nextMark = (mark) => MARK_CYCLE[(MARK_CYCLE.indexOf(mark) + 1) % MARK_CYCLE.length];

// "y10-1f|Review exercise|3" — unique across topics and sections.
export const markKey = (topicId, sectionKey, label) => `${topicId}|${sectionKey}|${label}`;

export const scoreMarks = (marks = {}) => {
  let score = 0;
  let total = 0;
  for (const m of Object.values(marks)) {
    if (m === 'c') { score += 1; total += 1; } else if (m === 'h') { score += 0.5; total += 1; } else if (m === 'x') { total += 1; }
  }
  return { score, total };
};

// Only real marks are stored (compact map for the session doc).
export const compactMarks = (marks = {}) => Object.fromEntries(
  Object.entries(marks).filter(([, m]) => m === 'c' || m === 'x' || m === 'h'),
);
