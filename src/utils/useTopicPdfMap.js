import { useCallback, useMemo, useState, useEffect } from 'react';
import { loadTopicPdfMap } from '../services/homeworkService';

// topic id → worksheet link for a homework screen, with a status so the screen can tell "still loading" and
// "could not load" apart from "this topic has no worksheet". `retry` loads it again.
export const useTopicPdfMap = (profile, topicIds) => {
  const idsKey = (topicIds || []).filter(Boolean).join('|');
  const [attempt, setAttempt] = useState(0);
  // A fresh object per request: the result belongs to the current request only when it carries the same one.
  const request = useMemo(() => ({ profile, idsKey, attempt }), [profile, idsKey, attempt]);
  const [result, setResult] = useState({ request: null, map: {}, error: null });

  useEffect(() => {
    let cancelled = false;
    loadTopicPdfMap(request.profile, request.idsKey ? request.idsKey.split('|') : []).then(
      (map) => { if (!cancelled) setResult({ request, map, error: null }); },
      (error) => { if (!cancelled) setResult((prev) => ({ request, map: prev.map, error })); },
    );
    return () => { cancelled = true; };
  }, [request]);

  const retry = useCallback(() => setAttempt((n) => n + 1), []);
  const status = result.request !== request ? 'loading' : result.error ? 'error' : 'ready';
  return { map: result.map, status, error: result.error, retry };
};
