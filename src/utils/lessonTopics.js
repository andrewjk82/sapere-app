// Pure helpers for the lesson "Today covered" picker (Schedule).
// Topic options are flat, in curriculum order:
//   { id, label, chapterId, chapterTitle, code, title, groupKey, groupLabel, groupShort, completed }
// A "group" is one year (Years 1–10) or one year + course (Years 11–12).

const COURSE_SHORT = { Standard: 'Std', Advanced: 'Adv', 'Extension 1': 'Ext 1', 'Extension 2': 'Ext 2' };

export const groupMeta = (year, course = null) => {
  const n = String(year || '').replace(/\D/g, '');
  const yearShort = n ? `Y${n}` : String(year || '');
  if (!course) return { groupKey: String(year), groupLabel: String(year), groupShort: yearShort };
  return {
    groupKey: `${year}|${course}`,
    groupLabel: `${year} · ${course}`,
    groupShort: `${yearShort} ${COURSE_SHORT[course] || course}`,
  };
};

// [{ key, label, short, chapters: [{ id, title, topics: [option] }] }], order kept.
export const groupTopicOptions = (options = []) => {
  const groups = [];
  const byKey = new Map();
  for (const opt of options) {
    const key = opt.groupKey || 'all';
    let group = byKey.get(key);
    if (!group) {
      group = { key, label: opt.groupLabel || '', short: opt.groupShort || '', chapters: [], chapterById: new Map() };
      byKey.set(key, group);
      groups.push(group);
    }
    const chapterId = opt.chapterId || opt.id;
    let chapter = group.chapterById.get(chapterId);
    if (!chapter) {
      chapter = { id: chapterId, title: opt.chapterTitle || '', topics: [] };
      group.chapterById.set(chapterId, chapter);
      group.chapters.push(chapter);
    }
    chapter.topics.push(opt);
  }
  return groups.map((g) => ({ key: g.key, label: g.label, short: g.short, chapters: g.chapters }));
};

// Short chip text: "1A", or "Y7 1A" when the student has several year groups.
export const topicChipLabel = (topic, { withGroup = false } = {}) => {
  const code = topic?.code || topic?.label || topic?.title || topic?.id || '';
  return withGroup && topic?.groupShort ? `${topic.groupShort} ${code}` : code;
};

// Most recent earlier session of the same student that recorded topics.
export const findPreviousCoveredSession = (sessions = [], current = {}) => {
  const studentId = current.studentId || current.groupStudents?.[0]?.studentId;
  if (!studentId) return null;
  const before = current.date || '9999-99-99';
  let best = null;
  for (const s of sessions) {
    if (!s || s.id === current.id) continue;
    const sid = s.studentId || s.groupStudents?.[0]?.studentId;
    if (sid !== studentId || !(s.date < before)) continue;
    if (!Array.isArray(s.learnedTopics) || s.learnedTopics.length === 0) continue;
    if (!best || s.date > best.date) best = s;
  }
  return best;
};

// The option right after the furthest topic covered last time, if it is in
// the same group and not already picked or completed.
export const findNextTopic = (options = [], previousTopics = [], selectedIds = new Set()) => {
  const index = new Map(options.map((o, i) => [o.id, i]));
  let last = -1;
  for (const t of previousTopics) {
    const i = index.get(t?.id);
    if (i !== undefined && i > last) last = i;
  }
  if (last < 0) return null;
  for (let i = last + 1; i < options.length; i++) {
    const o = options[i];
    if (o.groupKey !== options[last].groupKey) return null;
    if (!selectedIds.has(o.id) && !o.completed) return o;
  }
  return null;
};

// The session's `homework` text is still what emails and the weekly report
// show, so it is composed on save: one line per covered topic, then the
// teacher's extra note. Opening a session splits it back apart.
const topicLine = (t) => String(t?.label || t?.title || t?.id || '').trim();

export const splitHomeworkExtra = (homework = '', learnedTopics = []) => {
  const topicLines = new Set(learnedTopics.map(topicLine).filter(Boolean));
  return String(homework || '')
    .split('\n')
    .filter((line) => line.trim() && !topicLines.has(line.trim()))
    .join('\n');
};

export const composeHomework = (learnedTopics = [], extra = '') => {
  const lines = learnedTopics.map(topicLine).filter(Boolean);
  const note = String(extra || '').trim();
  return [...new Set(lines), note].filter(Boolean).join('\n');
};
