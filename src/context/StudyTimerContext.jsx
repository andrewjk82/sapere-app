import { useEffect, useMemo, useRef, useState } from 'react';
import { useAuth } from './AuthContext';
import { useProfile } from './ProfileContext';
import { flushStudySession } from '../services/studyTimeService';
import { getDeviceId, publishSessionTransition, fetchRemoteSessionState } from '../services/studySessionSyncService';
import { publishStudyPresence, clearStudyPresence } from '../services/studyPresenceService';
import { normalizeSubjectLabel } from '../utils/subjectLabels';
import { buildAvatarUrl } from '../utils/avatarUtils';
import { nowMs, splitSecondsIntoHourBuckets } from '../utils/timeUtils';
import { studySubjectsFor } from '../utils/studySubjects';
import { StudyTimerContext, StudyTimerClockContext } from './studyTimerStore';

/**
 * The study-timer session for the whole app. It used to live inside the Study Timer page, so leaving
 * the page (to do homework or curriculum questions) ended the session. Here it survives every tab
 * change; the page (SubjectStopwatch) and the floating pill (StudyTimerPill) are just views of it.
 *
 * Traffic model unchanged (see studyTimeService.js): local-first ticking; Firestore only at flush points
 * (stop, subject switch, 5-minute heartbeat, resuming a session left in a closed tab); pausing is local.
 * Cross-device signal (studySessionSyncService.js): one small write per start/pause/resume/stop, one
 * point-read before Start and when the app returns to the foreground — never a listener.
 *
 * Two contexts: the session (changes on start/pause/stop) and the clock (ticks every second), so the
 * once-a-second tick re-renders only what shows the time.
 */

const HEARTBEAT_MS = 5 * 60 * 1000; // flush a running session every 5 min
const RESUME_CAP_SEC = 3 * 60 * 60; // ignore >3h of "stale" localStorage time (laptop was asleep)
const SESSION_KEY_PREFIX = 'studytimer:session:';

const todayStr = () => new Date().toLocaleDateString('en-CA');

// Keyed by account: signing out or switching accounts remounts a fresh engine.
export const StudyTimerProvider = ({ children }) => {
  const { user } = useAuth();
  const uid = user?.uid || null;
  return <StudyTimerEngine key={uid || 'signed-out'} uid={uid}>{children}</StudyTimerEngine>;
};

const StudyTimerEngine = ({ uid, children }) => {
  const { profile } = useProfile();
  const sessionKey = `${SESSION_KEY_PREFIX}${uid}`;
  const subjects = useMemo(() => studySubjectsFor(profile), [profile]);
  const avatarUrl = useMemo(() => buildAvatarUrl(profile, uid), [profile, uid]);

  const [subjectState, setSubjectState] = useState(null);   // null = first subject on the list
  const subject = subjectState && subjects.includes(subjectState) ? subjectState : subjects[0];
  const [phase, setPhaseState] = useState('stopped');       // 'stopped' | 'running' | 'paused'
  const [elapsedSec, setElapsedSec] = useState(0);
  const [lastFlush, setLastFlush] = useState(null);         // { totalSec, subject, dateStr, deltaSec, hourBreakdown }
  const [myTotalSec, setMyTotalSec] = useState(null);

  // Refs are the truth for handlers, intervals and other screens' callbacks (no stale closures).
  const phaseRef = useRef('stopped');
  const subjectRef = useRef(subject);
  useEffect(() => { subjectRef.current = subject; }, [subject]);
  const ctxRef = useRef({ uid, avatarUrl, profile });
  useEffect(() => { ctxRef.current = { uid, avatarUrl, profile }; }, [uid, avatarUrl, profile]);

  // The visible clock counts continuously from Start to Stop/subject-switch (surviving pauses and
  // periodic Firestore flushes) — only Stop or a subject change resets it to 0.
  const runningSinceRef = useRef(null); // ms epoch of the current running leg
  const bankedSecRef = useRef(0);       // elapsed seconds banked from earlier legs (pause/heartbeat), this subject
  const flushedSecRef = useRef(0);      // how much of the total has already reached Firestore
  const metaRef = useRef(null);
  const flushingRef = useRef(false);
  const myTotalSecRef = useRef(null);   // last known all-time total; avoids a re-read on every flush
  const deviceIdRef = useRef(getDeviceId());
  const lastLocalTransitionMsRef = useRef(0); // when THIS device last published a transition

  // The engine's functions, built once: they only touch refs and state setters, so one set serves every
  // render, interval and screen (no stale closures, no ref writes during render).
  const engine = useMemo(() => {
    const setPhase = (next) => { phaseRef.current = next; setPhaseState(next); };
    const setSubject = (next) => { subjectRef.current = next; setSubjectState(next); };

    const currentTotalSec = () => {
      if (phaseRef.current !== 'running' || runningSinceRef.current == null) return bankedSecRef.current;
      return bankedSecRef.current + Math.floor((nowMs() - runningSinceRef.current) / 1000);
    };

    const publishTransition = (nextPhase, nextSubject) => {
      const { uid: id } = ctxRef.current;
      if (!id) return;
      lastLocalTransitionMsRef.current = nowMs();
      publishSessionTransition({ uid: id, phase: nextPhase, subject: nextSubject, deviceId: deviceIdRef.current });
    };

    const persistLocal = (nextSubject, nextPhase) => {
      const { uid: id } = ctxRef.current;
      if (!id) return;
      try {
        const key = `${SESSION_KEY_PREFIX}${id}`;
        if (nextPhase === 'stopped') {
          window.localStorage.removeItem(key);
        } else {
          window.localStorage.setItem(key, JSON.stringify({
            subject: nextSubject, phase: nextPhase,
            runningSince: runningSinceRef.current, bankedSec: bankedSecRef.current,
          }));
        }
      } catch { /* ignore */ }
    };

    const recordFlush = (info) => {
      if (Number.isFinite(info?.totalSec)) setMyTotalSec(info.totalSec);
      setLastFlush(info || null);
    };

    // Sends only the not-yet-flushed portion to Firestore.
    const flushDelta = async () => {
      const { uid: id, avatarUrl: avatar } = ctxRef.current;
      const total = currentTotalSec();
      const delta = total - flushedSecRef.current;
      if (!id || delta <= 0 || flushingRef.current) return;
      flushingRef.current = true;
      // Approximate wall-clock window for this delta — good enough for the "what time of day" ring.
      const end = nowMs();
      const hourBreakdown = splitSecondsIntoHourBuckets(end - delta * 1000, end);
      const dateStr = todayStr();
      const flushSubject = subjectRef.current;
      try {
        const { meta, totalSec } = await flushStudySession({
          uid: id, dateStr, subject: flushSubject, deltaSec: delta, avatarUrl: avatar, hourBreakdown,
          priorTotalSec: myTotalSecRef.current, currentMeta: metaRef.current,
        });
        metaRef.current = meta;
        myTotalSecRef.current = totalSec;
        flushedSecRef.current = total;
        recordFlush({ totalSec, subject: flushSubject, dateStr, deltaSec: delta, hourBreakdown });
      } catch (e) {
        console.warn('[studytime] flush failed:', e?.code || e);
      } finally {
        flushingRef.current = false;
      }
    };

    const resetSession = () => {
      runningSinceRef.current = null;
      bankedSecRef.current = 0;
      flushedSecRef.current = 0;
      setPhase('stopped');
      setElapsedSec(0);
      persistLocal(subjectRef.current, 'stopped');
    };

    // Start (or resume) the clock for `nextSubject`. Warns first when another device is running a session.
    // Returns false when the student cancelled.
    const start = async (nextSubject = subjectRef.current) => {
      const { uid: id } = ctxRef.current;
      if (!id) return false;
      const remote = await fetchRemoteSessionState(id);
      if (remote?.phase === 'running' && remote.deviceId && remote.deviceId !== deviceIdRef.current) {
        const proceed = window.confirm(
          `A "${normalizeSubjectLabel(remote.subject || nextSubject)}" session is running on another device.\n`
          + 'If you start here too, both devices may record the same time. Start anyway?',
        );
        if (!proceed) return false;
      }
      if (nextSubject !== subjectRef.current) {
        if (phaseRef.current !== 'stopped') { await flushDelta(); resetSession(); }
        setSubject(nextSubject);
      }
      runningSinceRef.current = nowMs();
      setPhase('running');
      setElapsedSec(currentTotalSec());
      persistLocal(nextSubject, 'running');
      publishTransition('running', nextSubject);
      return true;
    };

    const resume = () => {
      if (phaseRef.current !== 'paused') return;
      runningSinceRef.current = nowMs();
      setPhase('running');
      setElapsedSec(currentTotalSec());
      persistLocal(subjectRef.current, 'running');
      publishTransition('running', subjectRef.current);
    };

    const pause = () => {
      if (phaseRef.current !== 'running') return;
      bankedSecRef.current = currentTotalSec();
      runningSinceRef.current = null;
      setPhase('paused');
      setElapsedSec(bankedSecRef.current);
      persistLocal(subjectRef.current, 'paused');
      publishTransition('paused', subjectRef.current);
    };

    const stop = async () => {
      await flushDelta();
      resetSession();
      publishTransition('stopped', subjectRef.current);
    };

    const changeSubject = async (next) => {
      if (next === subjectRef.current) return;
      const wasRunning = phaseRef.current === 'running';
      await flushDelta();
      resetSession();
      setSubject(next);
      if (wasRunning) {
        runningSinceRef.current = nowMs();
        setPhase('running');
        persistLocal(next, 'running');
        publishTransition('running', next);
      } else {
        publishTransition('stopped', next);
      }
    };

    return { currentTotalSec, flushDelta, resetSession, recordFlush, start, resume, pause, stop, changeSubject };
  }, []);
  const { currentTotalSec, flushDelta, recordFlush } = engine;

  // Resume a session left running/paused in a closed tab / reload: credit it and start fresh. Any time
  // that elapsed while it was "running" is capped so a laptop-asleep gap doesn't count as hours of study.
  // Waits for the profile so the saved subject is checked against the real subject list.
  const resumedForRef = useRef(null);
  useEffect(() => {
    if (!uid || !profile || resumedForRef.current === uid) return;
    resumedForRef.current = uid;
    try {
      const raw = window.localStorage.getItem(sessionKey);
      window.localStorage.removeItem(sessionKey);
      if (!raw) return;
      const saved = JSON.parse(raw);
      const savedSubject = subjects.includes(saved?.subject) ? saved.subject : subjects[0];
      const bankedPortion = Math.max(0, Math.floor(saved?.bankedSec) || 0);
      let runningPortion = 0;
      const end = nowMs();
      if (saved?.phase === 'running' && saved?.runningSince) {
        runningPortion = Math.min(RESUME_CAP_SEC, Math.max(0, Math.floor((end - saved.runningSince) / 1000)));
      }
      const staleTotalSec = bankedPortion + runningPortion;
      if (staleTotalSec > 0) {
        // Only the still-running portion has a known wall-clock window; the banked part is not attributed.
        const hourBreakdown = runningPortion > 0 ? splitSecondsIntoHourBuckets(end - runningPortion * 1000, end) : null;
        const resumeDateStr = todayStr();
        flushStudySession({
          uid, dateStr: resumeDateStr, subject: savedSubject, deltaSec: staleTotalSec,
          avatarUrl, hourBreakdown, priorTotalSec: myTotalSecRef.current, currentMeta: metaRef.current,
        }).then(({ meta, totalSec }) => {
          metaRef.current = meta;
          myTotalSecRef.current = totalSec;
          recordFlush({ totalSec, subject: savedSubject, dateStr: resumeDateStr, deltaSec: staleTotalSec, hourBreakdown });
        }).catch(() => {});
      }
    } catch { /* ignore */ }
  }, [uid, profile, sessionKey, subjects, avatarUrl, recordFlush]);

  // Local display tick — purely visual, never touches Firestore.
  useEffect(() => {
    if (phase !== 'running') return undefined;
    const id = setInterval(() => setElapsedSec(currentTotalSec()), 1000);
    return () => clearInterval(id);
  }, [phase, currentTotalSec]);

  // 5-minute heartbeat flush while running, so a crash loses at most 5 min.
  useEffect(() => {
    if (phase !== 'running') return undefined;
    const id = setInterval(() => { flushDelta(); }, HEARTBEAT_MS);
    return () => clearInterval(id);
  }, [phase, subject, flushDelta]);

  // Best-effort flush if the tab closes mid-session (the localStorage resume above is the reliable path).
  useEffect(() => {
    const handler = () => { flushDelta(); };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [flushDelta]);

  // Auto-pause when the app goes to the background, so idle time elsewhere never lands as one big credit.
  // Requires a manual Resume. Back in the foreground: one point-read to see whether another device took
  // the session over meanwhile.
  useEffect(() => {
    if (!uid) return undefined;
    const handleVisibility = async () => {
      if (document.hidden) {
        if (phaseRef.current === 'running') engine.pause();
        return;
      }
      if (phaseRef.current !== 'running' && phaseRef.current !== 'paused') return;
      const remote = await fetchRemoteSessionState(uid);
      if (
        remote?.deviceId && remote.deviceId !== deviceIdRef.current
        && Number(remote.clientUpdatedMs) > lastLocalTransitionMsRef.current
      ) {
        await flushDelta();
        engine.resetSession();
        window.alert('Your study session was continued on another device, so it has been ended here.');
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [uid, flushDelta, engine]);

  // "Studying now" presence: one RTDB write per start/pause/resume/stop while a session is open.
  useEffect(() => {
    if (!uid) return;
    if (phase === 'running' || phase === 'paused') {
      const { profile: p, avatarUrl: avatar } = ctxRef.current;
      publishStudyPresence({ uid, profile: p, avatarUrl: avatar, bankedSec: currentTotalSec(), running: phase === 'running' });
    } else {
      clearStudyPresence(uid);
    }
  }, [uid, phase, currentTotalSec]);

  // Keep the screen awake while running (the visibility pause above handles real backgrounding).
  useEffect(() => {
    if (phase !== 'running' || !('wakeLock' in navigator)) return undefined;
    let cancelled = false;
    let lock = null;
    navigator.wakeLock.request('screen').then((l) => {
      if (cancelled) { l.release().catch(() => {}); return; }
      lock = l;
    }).catch(() => {});
    return () => {
      cancelled = true;
      lock?.release?.().catch(() => {});
    };
  }, [phase]);

  const value = useMemo(() => ({
    uid, subjects, subject, phase, lastFlush, myTotalSec, currentTotalSec,
    start: engine.start, resume: engine.resume, pause: engine.pause, stop: engine.stop, changeSubject: engine.changeSubject,
  }), [uid, subjects, subject, phase, lastFlush, myTotalSec, currentTotalSec, engine]);

  return (
    <StudyTimerContext.Provider value={value}>
      <StudyTimerClockContext.Provider value={elapsedSec}>
        {children}
      </StudyTimerClockContext.Provider>
    </StudyTimerContext.Provider>
  );
};
