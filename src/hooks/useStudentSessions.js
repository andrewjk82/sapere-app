import { useEffect, useState } from 'react';
import { localCache } from '../services/localCacheService';
import { subscribeSessionHistory } from '../services/teacherSessions';

// One student's lessons, live. Shared with the Class page (same listener and same saved copy).
export const studentHistoryCacheKey = (studentId) => `class-history:v1:s:${studentId}`;
const cachedList = (studentId) => {
  const c = studentId ? localCache.get(studentHistoryCacheKey(studentId)) : null;
  return Array.isArray(c?.list) ? c.list : null;
};

export default function useStudentSessions(studentId) {
  const [live, setLive] = useState({ id: '', list: null });
  useEffect(() => {
    if (!studentId) return undefined;
    return subscribeSessionHistory('studentId', studentId, ({ docs, fresh }) => {
      if (fresh) localCache.set(studentHistoryCacheKey(studentId), { savedAt: Date.now(), list: docs });
      setLive({ id: studentId, list: docs });
    });
  }, [studentId]);
  return (live.id === studentId && live.list) || cachedList(studentId);
}
