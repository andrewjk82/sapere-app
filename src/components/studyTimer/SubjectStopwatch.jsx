import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Square, Plus, X } from 'lucide-react';
import { flushStudySession } from '../../services/studyTimeService';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { buildAvatarUrl } from '../../utils/avatarUtils';
import { nowMs } from '../../utils/timeUtils';
import AddSubjectModal from './AddSubjectModal';

const HEARTBEAT_MS = 5 * 60 * 1000; // flush a running session every 5 min
const RESUME_CAP_SEC = 3 * 60 * 60; // ignore >3h of "stale" localStorage time (laptop was asleep)
const SESSION_KEY_PREFIX = 'studytimer:session:';

const todayStr = () => new Date().toLocaleDateString('en-CA');

const formatElapsed = (totalSec) => {
  const s = Math.max(0, Math.floor(totalSec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const mm = String(m).padStart(2, '0');
  const ss = String(sec).padStart(2, '0');
  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
};

const RING_SIZE = 220;
const RING_STROKE = 14;
const RING_R = (RING_SIZE - RING_STROKE) / 2;
const RING_C = 2 * Math.PI * RING_R;

/**
 * Per-subject stopwatch. Local-first: while running, only a local interval
 * ticks the on-screen display — Firestore is only written at flush points
 * (stop, subject switch, 5-min heartbeat, or resuming a stale session left
 * running in a closed tab), see studyTimeService.js. Pausing is purely
 * local — no write.
 *
 * Timestamps (`Date.now`) are read only inside effects/handlers, never in
 * the render body — `displayElapsedSec` is the one piece of render state,
 * advanced by the ticking effect.
 */
const SubjectStopwatch = ({ uid, profile, subjects, onAddSubject, onRemoveSubject, onFlushed }) => {
  const sessionKey = `${SESSION_KEY_PREFIX}${uid}`;
  const avatarUrl = useMemo(() => buildAvatarUrl(profile, uid), [profile, uid]);
  const subjectOptions = useMemo(
    () => (subjects && subjects.length > 0 ? subjects : ['General Study']),
    [subjects],
  );

  const [subject, setSubject] = useState(subjectOptions[0]);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [hoveredSubject, setHoveredSubject] = useState(null);
  const [phase, setPhase] = useState('stopped'); // 'stopped' | 'running' | 'paused'
  const [displayElapsedSec, setDisplayElapsedSec] = useState(0);

  // The visible clock counts continuously from Start to Stop/subject-switch
  // (surviving pauses and periodic Firestore flushes) — only Stop or a
  // subject change resets it to 0.
  const runningSinceRef = useRef(null); // ms epoch of the current running leg
  const bankedSecRef = useRef(0); // elapsed seconds banked from earlier legs (pause/heartbeat), this subject
  const flushedSecRef = useRef(0); // how much of the total has already reached Firestore
  const metaRef = useRef(null);
  const flushingRef = useRef(false);

  const persistLocal = (nextSubject, nextPhase) => {
    try {
      if (nextPhase === 'stopped') {
        window.localStorage.removeItem(sessionKey);
      } else {
        window.localStorage.setItem(sessionKey, JSON.stringify({
          subject: nextSubject, phase: nextPhase,
          runningSince: runningSinceRef.current, bankedSec: bankedSecRef.current,
        }));
      }
    } catch { /* ignore */ }
  };

  // Total elapsed for the current subject session (continuous display value).
  function currentTotalSec() {
    if (phase !== 'running' || runningSinceRef.current == null) return bankedSecRef.current;
    return bankedSecRef.current + Math.floor((nowMs() - runningSinceRef.current) / 1000);
  }

  // Sends only the not-yet-flushed portion to Firestore. Called from
  // handlers/intervals, never from render.
  async function flushDelta() {
    const total = currentTotalSec();
    const delta = total - flushedSecRef.current;
    if (delta <= 0 || flushingRef.current) return;
    flushingRef.current = true;
    try {
      const { meta } = await flushStudySession({
        uid, dateStr: todayStr(), subject, deltaSec: delta, avatarUrl, currentMeta: metaRef.current,
      });
      metaRef.current = meta;
      flushedSecRef.current = total;
      onFlushed?.();
    } catch (e) {
      console.warn('[studytime] flush failed:', e?.code || e);
    } finally {
      flushingRef.current = false;
    }
  }

  function resetSession() {
    runningSinceRef.current = null;
    bankedSecRef.current = 0;
    flushedSecRef.current = 0;
    setPhase('stopped');
    setDisplayElapsedSec(0);
    persistLocal(subject, 'stopped');
  }

  // Resume a session left running/paused in another tab/reload. Any time
  // that elapsed while it was "running" is capped so a laptop-asleep gap
  // doesn't get credited as hours of study; already-banked time is exact.
  useEffect(() => {
    if (!uid) return;
    try {
      const raw = window.localStorage.getItem(sessionKey);
      window.localStorage.removeItem(sessionKey);
      if (!raw) return;
      const saved = JSON.parse(raw);
      const savedSubject = subjectOptions.includes(saved?.subject) ? saved.subject : subjectOptions[0];
      let staleTotalSec = Math.max(0, Math.floor(saved?.bankedSec) || 0);
      if (saved?.phase === 'running' && saved?.runningSince) {
        staleTotalSec += Math.min(RESUME_CAP_SEC, Math.max(0, Math.floor((nowMs() - saved.runningSince) / 1000)));
      }
      if (staleTotalSec > 0) {
        flushStudySession({
          uid, dateStr: todayStr(), subject: savedSubject, deltaSec: staleTotalSec,
          avatarUrl, currentMeta: metaRef.current,
        }).then(({ meta }) => { metaRef.current = meta; onFlushed?.(); }).catch(() => {});
      }
    } catch { /* ignore */ }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid]);

  // Local display tick — purely visual, never touches Firestore.
  useEffect(() => {
    if (phase !== 'running') return undefined;
    const id = setInterval(() => setDisplayElapsedSec(currentTotalSec()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  // 5-minute heartbeat flush while running, so a crash loses at most 5 min.
  // The visible clock is untouched — only the Firestore-synced portion moves.
  useEffect(() => {
    if (phase !== 'running') return undefined;
    const id = setInterval(() => { flushDelta(); }, HEARTBEAT_MS);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, subject]);

  // Best-effort flush if the tab closes mid-session (not guaranteed to
  // finish — the localStorage resume-on-mount above is the reliable path).
  useEffect(() => {
    const handler = () => { flushDelta(); };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, subject]);

  const handleStart = () => {
    runningSinceRef.current = nowMs();
    setPhase('running');
    persistLocal(subject, 'running');
  };

  const handlePause = () => {
    bankedSecRef.current = currentTotalSec();
    runningSinceRef.current = null;
    setPhase('paused');
    setDisplayElapsedSec(bankedSecRef.current);
    persistLocal(subject, 'paused');
  };

  async function handleStop() {
    await flushDelta();
    resetSession();
  }

  async function handleSubjectChange(next) {
    if (next === subject) return;
    const wasRunning = phase === 'running';
    await flushDelta();
    resetSession();
    setSubject(next);
    if (wasRunning) {
      runningSinceRef.current = nowMs();
      setPhase('running');
      persistLocal(next, 'running');
    }
  }

  async function handlePickSubject(name) {
    await onAddSubject?.(name);
    await handleSubjectChange(name);
  }

  async function handleRemoveSubjectClick(name, e) {
    e.stopPropagation();
    if (subjectOptions.length <= 1) return;
    if (name === subject) {
      const fallback = subjectOptions.find((s) => s !== name) || 'General Study';
      await handleSubjectChange(fallback);
    }
    onRemoveSubject?.(name);
  }

  const ringProgress = (displayElapsedSec % 3600) / 3600; // one full ring per hour, purely decorative
  const dashOffset = RING_C * (1 - ringProgress);
  const isRunning = phase === 'running';

  return (
    <div style={{
      borderRadius: 32, padding: '32px 28px', background: 'linear-gradient(135deg, #1e1b4b, #312e81 55%, #4338ca)',
      color: '#fff', boxShadow: '0 24px 60px rgba(67,56,202,0.28)', position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(255,255,255,0.06)' }} />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {subjectOptions.map((s) => (
          <div
            key={s}
            style={{ position: 'relative' }}
            onMouseEnter={() => setHoveredSubject(s)}
            onMouseLeave={() => setHoveredSubject((cur) => (cur === s ? null : cur))}
          >
            <button
              type="button"
              onClick={() => handleSubjectChange(s)}
              style={{
                padding: '8px 16px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.25)',
                background: s === subject ? '#fff' : 'rgba(255,255,255,0.08)',
                color: s === subject ? '#312e81' : 'rgba(255,255,255,0.85)',
                fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer', transition: 'all .2s',
              }}
            >
              {normalizeSubjectLabel(s)}
            </button>
            {hoveredSubject === s && subjectOptions.length > 1 && (
              <button
                type="button"
                onClick={(e) => handleRemoveSubjectClick(s, e)}
                aria-label={`Remove ${normalizeSubjectLabel(s)}`}
                style={{
                  position: 'absolute', top: -7, right: -7, width: 20, height: 20, borderRadius: '50%',
                  border: '2px solid #312e81', background: '#ef4444', color: '#fff',
                  display: 'grid', placeItems: 'center', cursor: 'pointer', padding: 0,
                }}
              >
                <X size={11} strokeWidth={3} />
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={() => setAddModalOpen(true)}
          aria-label="Add subject"
          style={{
            width: 34, height: 34, borderRadius: '50%', display: 'grid', placeItems: 'center',
            border: '1px dashed rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.06)',
            color: 'rgba(255,255,255,0.85)', cursor: 'pointer',
          }}
        >
          <Plus size={16} />
        </button>
      </div>

      <AddSubjectModal
        open={addModalOpen}
        existingSubjects={subjectOptions}
        onClose={() => setAddModalOpen(false)}
        onPick={handlePickSubject}
      />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ position: 'relative', width: RING_SIZE, height: RING_SIZE }}>
          <svg width={RING_SIZE} height={RING_SIZE} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={RING_SIZE / 2} cy={RING_SIZE / 2} r={RING_R} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth={RING_STROKE} />
            <motion.circle
              cx={RING_SIZE / 2} cy={RING_SIZE / 2} r={RING_R} fill="none" stroke="#a5b4fc" strokeWidth={RING_STROKE}
              strokeLinecap="round" strokeDasharray={RING_C}
              animate={{ strokeDashoffset: dashOffset }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </svg>
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatePresence>
              {isRunning && (
                <motion.div
                  key="pulse"
                  initial={{ scale: 0.9, opacity: 0.5 }}
                  animate={{ scale: [0.9, 1.15, 0.9], opacity: [0.5, 0.15, 0.5] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', width: RING_SIZE - 30, height: RING_SIZE - 30, borderRadius: '50%', background: 'radial-gradient(circle, rgba(165,180,252,0.35), transparent 70%)' }}
                />
              )}
            </AnimatePresence>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.02em', zIndex: 1 }}>
              {formatElapsed(displayElapsedSec)}
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginTop: 4, zIndex: 1 }}>
              {normalizeSubjectLabel(subject)}{phase === 'paused' ? ' · Paused' : ''}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {!isRunning ? (
            <button type="button" onClick={handleStart} style={btnStyle('#22c55e')}>
              <Play size={18} fill="#fff" /> {phase === 'paused' ? 'Resume' : 'Start'}
            </button>
          ) : (
            <button type="button" onClick={handlePause} style={btnStyle('#f59e0b')}>
              <Pause size={18} fill="#fff" /> Pause
            </button>
          )}
          <button
            type="button"
            onClick={handleStop}
            disabled={displayElapsedSec <= 0}
            style={{ ...btnStyle('#ef4444'), opacity: displayElapsedSec <= 0 ? 0.4 : 1 }}
          >
            <Square size={16} fill="#fff" /> Stop
          </button>
        </div>
      </div>
    </div>
  );
};

const btnStyle = (bg) => ({
  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 16,
  border: 'none', background: bg, color: '#fff', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer',
  boxShadow: `0 10px 24px ${bg}55`, transition: 'transform .15s',
});

export default SubjectStopwatch;
