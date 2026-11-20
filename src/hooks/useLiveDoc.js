import { useEffect, useState } from 'react';
import { doc, onSnapshot, getDocFromServer } from 'firebase/firestore';
import { db } from '../firebase/config';

const PROBE_TIMEOUT_MS = 8000;

/**
 * Live view of ONE Firestore document, for "has something changed?" signals (admin_daily_summary/{day},
 * sync_meta/...). Costs one read per change while the app is on screen, nothing while it is hidden.
 *
 * Why the server probe: on an iPad home-screen app iOS drops the connection in the background, and on resume
 * the SDK keeps serving its on-device copy for seconds to minutes before it reconnects — old data that looks
 * current. getDocFromServer on resume opens the connection right away; if it fails, status becomes 'offline'
 * so the screen can say so instead of silently showing stale numbers.
 *
 * status: 'loading' | 'live' (server-confirmed) | 'cached' (on-device copy, not yet confirmed) | 'offline'
 */
export default function useLiveDoc(segments, { enabled = true } = {}) {
  const path = (segments || []).join('/');
  const [state, setState] = useState({ data: undefined, status: 'loading', path });

  useEffect(() => {
    if (!enabled || !path) return undefined;
    const ref = doc(db, path);
    let cancelled = false;
    let unsub = () => {};
    let probeSeq = 0;

    const attach = () => {
      unsub();
      unsub = onSnapshot(ref, { includeMetadataChanges: true }, (snap) => {
        if (cancelled) return;
        setState((prev) => ({
          path,
          data: snap.exists() ? snap.data() : null,
          // A cache-only snapshot never downgrades a failed probe to 'cached'.
          status: snap.metadata.fromCache ? (prev.status === 'offline' ? 'offline' : 'cached') : 'live',
        }));
      }, () => { if (!cancelled) setState((prev) => ({ ...prev, path, status: 'offline' })); });

      const seq = ++probeSeq;
      Promise.race([
        getDocFromServer(ref),
        new Promise((_, rej) => setTimeout(() => rej(new Error('probe-timeout')), PROBE_TIMEOUT_MS)),
      ]).then((snap) => {
        if (cancelled || seq !== probeSeq) return;
        setState({ path, data: snap.exists() ? snap.data() : null, status: 'live' });
      }).catch(() => {
        if (cancelled || seq !== probeSeq) return;
        setState((prev) => (prev.status === 'live' ? prev : { ...prev, path, status: 'offline' }));
      });
    };

    const detach = () => { unsub(); unsub = () => {}; probeSeq += 1; };
    const onVis = () => { if (document.visibilityState === 'hidden') detach(); else attach(); };
    const onOnline = () => { if (document.visibilityState !== 'hidden') attach(); };

    if (document.visibilityState !== 'hidden') attach();
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('online', onOnline);
    return () => {
      cancelled = true;
      detach();
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('online', onOnline);
    };
  }, [path, enabled]);

  // A path change shows 'loading' until the new document answers.
  return state.path === path ? state : { data: undefined, status: 'loading', path };
}
