// "Continue studying": the chapter / topic a student opened last, kept only in this
// browser (localStorage, one small record per student). Nothing here touches Firestore.

const keyOf = (uid) => `sapere:lastStudy:v1:${uid}`;

const str = (v) => (typeof v === 'string' ? v : '');

const clean = (raw) => {
  if (!raw || typeof raw !== 'object') return null;
  const record = {
    trackKey: str(raw.trackKey),
    chapterId: str(raw.chapterId),
    chapterTitle: str(raw.chapterTitle),
    topicId: str(raw.topicId),
    topicCode: str(raw.topicCode),
    topicTitle: str(raw.topicTitle),
    at: Number.isFinite(raw.at) ? raw.at : 0,
  };
  return record.trackKey && record.chapterId ? record : null;
};

export const loadLastStudy = (uid, storage = globalThis.localStorage) => {
  if (!uid) return null;
  try {
    return clean(JSON.parse(storage.getItem(keyOf(uid))));
  } catch {
    return null;
  }
};

// Merge a new visit into the stored record. Opening a different chapter forgets the old
// chapter's topic (a topic only means something inside its own chapter).
export const mergeLastStudy = (previous, visit, now = Date.now()) => {
  const base = clean(previous);
  const sameChapter = base && base.chapterId === visit.chapterId && base.trackKey === visit.trackKey;
  return clean({
    trackKey: visit.trackKey,
    chapterId: visit.chapterId,
    chapterTitle: visit.chapterTitle || (sameChapter ? base.chapterTitle : ''),
    topicId: visit.topicId ?? (sameChapter ? base.topicId : ''),
    topicCode: visit.topicId ? visit.topicCode : (visit.topicId === undefined && sameChapter ? base.topicCode : ''),
    topicTitle: visit.topicId ? visit.topicTitle : (visit.topicId === undefined && sameChapter ? base.topicTitle : ''),
    at: now,
  });
};

export const saveLastStudy = (uid, visit, storage = globalThis.localStorage, now = Date.now()) => {
  if (!uid || !visit?.trackKey || !visit?.chapterId) return null;
  const next = mergeLastStudy(loadLastStudy(uid, storage), visit, now);
  try {
    if (next) storage.setItem(keyOf(uid), JSON.stringify(next));
  } catch { /* private mode / quota: simply not remembered */ }
  return next;
};

// "Chapter 5: Quadratic equations" → "Chapter 5" for a small button caption.
export const shortChapterLabel = (title) => {
  const text = String(title || '').trim();
  const head = text.split(':')[0].trim();
  if (head.length <= 24) return head;
  const cut = head.slice(0, 24);
  const atWord = cut.lastIndexOf(' ') > 12 ? cut.slice(0, cut.lastIndexOf(' ')) : cut;
  return `${atWord.replace(/[\s,;:–-]+$/, '')}…`;
};
