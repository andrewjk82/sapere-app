import { migrateMovedTopicProgress } from './topicMoves';

/**
 * Per-topic progress from localStorage (no Firestore read).
 * Returns { chapterId: { topicId: progress% } } by scanning stored metas.
 * Key format: sapere:tp:{uid}:{chapterId}:{topicId}:meta
 * chapterId can contain ':' (e.g. "exam:FortSt2020") but topicId never does,
 * so we split on the LAST ':' to separate chapterId from topicId.
 */
export const scanTopicProgress = (uid) => {
  migrateMovedTopicProgress(uid);
  const prefix = `sapere:tp:${uid}:`;
  const p = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key?.startsWith(prefix) || !key.endsWith(':meta')) continue;
      const inner = key.slice(prefix.length, -5); // "{chapterId}:{topicId}"
      const sep = inner.lastIndexOf(':');
      if (sep === -1) continue;
      const chapterId = inner.slice(0, sep);
      const topicId = inner.slice(sep + 1);
      const meta = JSON.parse(localStorage.getItem(key));
      if (!p[chapterId]) p[chapterId] = {};
      p[chapterId][topicId] = meta?.progress || 0;
    }
  } catch { /* ignore */ }
  return p;
};
