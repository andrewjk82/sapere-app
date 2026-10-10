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

// Part labels under their question number, in the given order: "1a","1b","2" → [{number:'1',labels:['1a','1b']},{number:'2',labels:['2']}].
// Review-block labels keep their chapter ("3.12a" → "3.12").
export const groupPartLabels = (labels = []) => {
  const groups = [];
  const byNumber = new Map();
  for (const label of labels) {
    const number = (String(label).match(/^\d+(?:\.\d+)?/) || [String(label)])[0];
    if (!byNumber.has(number)) { const g = { number, labels: [] }; byNumber.set(number, g); groups.push(g); }
    byNumber.get(number).labels.push(label);
  }
  return groups;
};

// The mark every one of `keys` has, or undefined when they differ or any is unmarked.
export const commonMark = (marks = {}, keys = []) => {
  if (keys.length === 0) return undefined;
  const first = marks[keys[0]];
  return keys.every((k) => marks[k] === first) ? first : undefined;
};

const labelOrder = (a, b) => String(a).localeCompare(String(b), undefined, { numeric: true });

// Marks grouped for display: { [topicId]: [{ section, items: [{ label, mark }] }] }, labels in
// natural order ("2" before "10", "1.2" before "1.10"). Keys are markKey()s; a malformed key is skipped.
export const groupMarksByTopic = (marks = {}) => {
  const byTopic = {};
  for (const [key, mark] of Object.entries(marks || {})) {
    if (mark !== 'c' && mark !== 'x' && mark !== 'h') continue;
    const [topicId, section, ...rest] = String(key).split('|');
    const label = rest.join('|');
    if (!topicId || !section || !label) continue;
    const sections = byTopic[topicId] || (byTopic[topicId] = new Map());
    if (!sections.has(section)) sections.set(section, []);
    sections.get(section).push({ label, mark });
  }
  return Object.fromEntries(Object.entries(byTopic).map(([topicId, sections]) => [
    topicId,
    [...sections].map(([section, items]) => ({ section, items: items.sort((a, b) => labelOrder(a.label, b.label)) })),
  ]));
};

const fmtScore = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

// Push / in-app notification sent to the student when the teacher finishes checking.
export const buildCheckedNotification = ({ topics = [], grade = null } = {}) => {
  const hasScore = grade && grade.total > 0;
  const score = hasScore ? `${fmtScore(grade.score)}/${grade.total}` : '';
  const topicLine = topics.map((t) => t?.label).filter(Boolean).join(', ');
  const comment = String(grade?.comment || '').trim();
  const lines = [
    `Your teacher checked your homework${topicLine ? ` (${topicLine})` : ''}.`,
    score ? `Score: ${score}` : '',
    comment ? `“${comment.length > 140 ? `${comment.slice(0, 137)}…` : comment}”` : '',
  ].filter(Boolean);
  return { subject: score ? `Homework checked: ${score}` : 'Homework checked', text: lines.join('\n'), score };
};
