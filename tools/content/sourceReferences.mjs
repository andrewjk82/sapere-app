import { homeworkReferenceKey } from '../../src/utils/homeworkQuestionLink.js';

const sourceReference = (question, topicId) => {
  const source = question?.meta?.source;
  if (!source?.bookId || !source?.chapter || !source?.exercise || !source?.question) return null;
  const key = homeworkReferenceKey({ topicId, section: source.exercise, label: source.question });
  return key ? { key, questionId: question.id, topicId } : null;
};

export const buildSourceReferenceIndex = (questions, topicId) => {
  const index = {};
  const visit = (question) => {
    if (!question || question.inactive) return;
    const ref = sourceReference(question, topicId);
    if (ref) (index[ref.key] ||= []).push({ questionId: ref.questionId, topicId: ref.topicId });
    for (const part of question.parts || []) visit(part);
  };
  for (const question of questions || []) visit(question);
  for (const refs of Object.values(index)) refs.sort((a, b) => a.questionId.localeCompare(b.questionId));
  return index;
};

export const mergeSourceReferenceIndex = (target, questions, topicId) => {
  const next = buildSourceReferenceIndex(questions, topicId);
  for (const [key, refs] of Object.entries(next)) (target[key] ||= []).push(...refs);
};
