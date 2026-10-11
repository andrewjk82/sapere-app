// Maps a teacher's homework-mark key (topic|exercise|label) to an imported
// textbook question. This module is deliberately pure so both the static-content
// publisher and the redo UI can use the same conservative matching rules.

const compact = (value) => String(value || '').trim().toLowerCase().replace(/\s+/g, '');

const questionLabel = (value) => compact(value)
  .replace(/^0+(\d)/, '$1')
  .replace(/[()]/g, '');

export const normaliseHomeworkReference = ({ topicId, section, label } = {}) => ({
  topicId: compact(topicId),
  exercise: compact(section),
  question: questionLabel(label),
});

export const homeworkReferenceKey = (reference) => {
  const { topicId, exercise, question } = normaliseHomeworkReference(reference);
  return topicId && exercise && question ? `${topicId}|${exercise}|${question}` : '';
};

export const resolveHomeworkQuestion = (reference, index = {}) => {
  const key = homeworkReferenceKey(reference);
  if (!key) return { status: 'missing' };
  const matches = Array.isArray(index?.[key]) ? index[key] : [];
  if (matches.length === 0) return { status: 'missing' };
  if (matches.length !== 1) return { status: 'ambiguous' };
  const match = matches[0];
  if (!match?.questionId || !match?.topicId) return { status: 'missing' };
  return { status: 'matched', questionId: match.questionId, topicId: match.topicId };
};
