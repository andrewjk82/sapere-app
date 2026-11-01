// The worksheet PDFs a student's curriculum has (topics with a Drive link), for picking a lesson's PDF.
// Pure: takes the loaded `curriculum/{Year…}` docs and the student profile.
import { toDrivePreviewUrl } from './homework.js';

// The book a curriculum doc stands for: 'Year 12 Extension 1' (from its year / course, else its doc id).
const bookTitleOf = (d) => [d?.year, d?.course].filter(Boolean).join(' ') || String(d?.id || '').replaceAll('_', ' ') || 'Curriculum';

// → [{ id, label, chapterId, chapterTitle, bookId, bookTitle, order, url, assigned }] — topics the teacher assigned
// (or whose chapter is assigned) first, then the rest, each in curriculum order (`order` keeps that order).
export const listTopicPdfs = (curriculumDocs, profile = {}) => {
  const assignedIds = new Set(Array.isArray(profile?.assignedChapters) ? profile.assignedChapters : []);
  const assigned = [];
  const others = [];
  let order = 0;
  (Array.isArray(curriculumDocs) ? curriculumDocs : []).forEach((d, docIndex) => {
    const bookId = String(d?.id || `book-${docIndex}`);
    const bookTitle = bookTitleOf(d);
    (d?.chapters || []).forEach((chapter) => {
      (chapter?.topics || []).forEach((topic) => {
        if (!topic?.id || !toDrivePreviewUrl(topic.homeworkPdfUrl)) return;
        const isAssigned = assignedIds.has(topic.id) || assignedIds.has(chapter.id);
        const item = {
          id: topic.id,
          label: `${topic.code ? `${topic.code} · ` : ''}${topic.group ? `${topic.group}: ` : ''}${topic.title || topic.id}`,
          chapterId: chapter.id || '',
          chapterTitle: chapter.title || '',
          bookId,
          bookTitle,
          order: order++,
          url: topic.homeworkPdfUrl,
          assigned: isAssigned,
        };
        (isAssigned ? assigned : others).push(item);
      });
    });
  });
  return [...assigned, ...others];
};

// The same topics as books → chapters → topics, each in curriculum order, for a picker that shows the books first.
// → [{ id, title, assigned (count), total, chapters: [{ id, title, assigned, topics }] }]
export const groupTopicPdfsByBook = (topics = []) => {
  const books = new Map();
  [...(Array.isArray(topics) ? topics : [])].sort((a, b) => a.order - b.order).forEach((t) => {
    if (!books.has(t.bookId)) books.set(t.bookId, { id: t.bookId, title: t.bookTitle, assigned: 0, total: 0, chapters: new Map() });
    const book = books.get(t.bookId);
    const chapterKey = t.chapterId || t.chapterTitle;
    if (!book.chapters.has(chapterKey)) book.chapters.set(chapterKey, { id: chapterKey, title: t.chapterTitle, assigned: 0, topics: [] });
    const chapter = book.chapters.get(chapterKey);
    chapter.topics.push(t);
    book.total += 1;
    if (t.assigned) { book.assigned += 1; chapter.assigned += 1; }
  });
  return [...books.values()].map((b) => ({ ...b, chapters: [...b.chapters.values()] }));
};
