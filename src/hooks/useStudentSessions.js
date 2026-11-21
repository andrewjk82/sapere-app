import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { localCache } from '../services/localCacheService';
import { retryOnTimeout } from '../utils/withTimeout';

// One student's lessons, for progress. Shared with the Class page's saved copy (same cache key), so opening a
// student there and here costs one read in total, then at most one per hour per device.
const MAX_AGE_MS = 60 * 60 * 1000;
export const studentHistoryCacheKey = (studentId) => `class-history:v1:s:${studentId}`;
const cachedList = (studentId) => {
  const c = studentId ? localCache.get(studentHistoryCacheKey(studentId)) : null;
  return Array.isArray(c?.list) ? c.list : null;
};

export default function useStudentSessions(studentId) {
  const [fetched, setFetched] = useState({ id: '', list: null });
  useEffect(() => {
    if (!studentId) return undefined;
    const c = localCache.get(studentHistoryCacheKey(studentId));
    if (c?.savedAt && Date.now() - c.savedAt < MAX_AGE_MS) return undefined;
    let cancelled = false;
    retryOnTimeout(() => getDocs(query(collection(db, 'sessions'), where('studentId', '==', studentId))), { ms: 10000, tries: 2 })
      .then((snap) => {
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        localCache.set(studentHistoryCacheKey(studentId), { savedAt: Date.now(), list });
        if (!cancelled) setFetched({ id: studentId, list });
      })
      .catch(() => { /* keep the saved copy, if any */ });
    return () => { cancelled = true; };
  }, [studentId]);
  return (fetched.id === studentId && fetched.list) || cachedList(studentId);
}
