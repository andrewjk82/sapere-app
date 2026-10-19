// The worksheet PDFs a student's curriculum has (topics with a Drive link), for picking a lesson's PDF.
// Pure: takes the loaded `curriculum/{Year…}` docs and the student profile.
import { toDrivePreviewUrl } from './homework.js';

// → [{ id, label, chapterTitle, url, assigned }] — topics the teacher assigned (or whose chapter is assigned) first,
// then the rest, each in curriculum order.
export const listTopicPdfs = (curriculumDocs, profile = {}) => {
  const assignedIds = new Set(Array.isArray(profile?.assignedChapters) ? profile.assignedChapters : []);
  const assigned = [];
  const others = [];
  (Array.isArray(curriculumDocs) ? curriculumDocs : []).forEach((d) => {
    (d?.chapters || []).forEach((chapter) => {
      (chapter?.topics || []).forEach((topic) => {
        if (!topic?.id || !toDrivePreviewUrl(topic.homeworkPdfUrl)) return;
        const isAssigned = assignedIds.has(topic.id) || assignedIds.has(chapter.id);
        const item = {
          id: topic.id,
          label: `${topic.code ? `${topic.code} · ` : ''}${topic.group ? `${topic.group}: ` : ''}${topic.title || topic.id}`,
          chapterTitle: chapter.title || '',
          url: topic.homeworkPdfUrl,
          assigned: isAssigned,
        };
        (isAssigned ? assigned : others).push(item);
      });
    });
  });
  return [...assigned, ...others];
};
