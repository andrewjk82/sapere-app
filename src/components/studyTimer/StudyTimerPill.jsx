import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronDown, Check, GripVertical, Pause, Play, Timer } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import { useStudyTimer, useStudyTimerClock, formatElapsed } from '../../context/studyTimerStore';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';
import { mathsSubjectFor } from '../../utils/studySubjects';
import { DEFAULT_PILL_POS, clampPillPos, loadPillPos, savePillPos } from '../../utils/timerPillPos';

const subjectColor = (profile, subject) => profile?.studySubjectColors?.[subject] || DEFAULT_SUBJECT_COLOR;
const MARGIN = 8;

/**
 * Floating study-timer pill, on every screen except the Study Timer page while a session is open (above
 * the full-screen homework / curriculum views). Pause / resume and subject switching live here; stopping
 * (with the review checklist) happens on the Study Timer page. It never switches tabs: that would close an
 * open homework.
 *
 * Drag it anywhere by its grip or body; it starts top-centre and the spot is remembered on this device.
 */
export const StudyTimerPill = () => {
  const timer = useStudyTimer();
  const elapsed = useStudyTimerClock();
  const { profile } = useProfile();
  const uid = timer?.uid;

  const [pos, setPos] = useState(() => loadPillPos(uid));       // { fx, fy } fractions of the viewport
  const [viewport, setViewport] = useState(() => ({ w: window.innerWidth, h: window.innerHeight }));
  const [size, setSize] = useState({ w: 220, h: 42 });
  const [menuOpen, setMenuOpen] = useState(false);
  const rootRef = useRef(null);
  const dragRef = useRef(null);       // { id, dx, dy, moved }

  useEffect(() => {
    const onResize = () => setViewport({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const visible = Boolean(timer) && timer.phase !== 'stopped';
  useEffect(() => {
    const el = rootRef.current;
    if (!visible || !el) return undefined;
    const measure = () => setSize((prev) => (prev.w === el.offsetWidth && prev.h === el.offsetHeight ? prev : { w: el.offsetWidth, h: el.offsetHeight }));
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [visible]);

  // Close the subject list when tapping anywhere else.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onDown = (e) => { if (!rootRef.current?.contains(e.target)) setMenuOpen(false); };
    document.addEventListener('pointerdown', onDown, true);
    return () => document.removeEventListener('pointerdown', onDown, true);
  }, [menuOpen]);

  const px = clampPillPos(pos, viewport, size, MARGIN);

  const onPointerDown = (e) => {
    if (e.target.closest('button, [role="menu"]')) return;      // buttons stay buttons
    dragRef.current = { id: e.pointerId, dx: e.clientX - px.left, dy: e.clientY - px.top, moved: false };
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch { /* ignore */ }
  };
  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d || d.id !== e.pointerId) return;
    d.moved = true;
    const left = e.clientX - d.dx;
    const top = e.clientY - d.dy;
    d.last = { fx: (left + size.w / 2) / viewport.w, fy: top / viewport.h };
    setPos(d.last);
  };
  const onPointerUp = (e) => {
    const d = dragRef.current;
    if (!d || d.id !== e.pointerId) return;
    dragRef.current = null;
    if (d.moved && d.last) {
      // Store where it actually ended up (kept on screen), not the raw finger position.
      const end = clampPillPos(d.last, viewport, size, MARGIN);
      const next = { fx: (end.left + size.w / 2) / viewport.w, fy: end.top / viewport.h };
      setPos(next);
      savePillPos(uid, next);
      setMenuOpen(false);
    }
  };

  const resetPosition = useCallback(() => {
    setPos(DEFAULT_PILL_POS);
    savePillPos(uid, null);
    setMenuOpen(false);
  }, [uid]);

  if (!visible) return null;
  const running = timer.phase === 'running';
  const color = subjectColor(profile, timer.subject);
  const menuAbove = px.top + size.h / 2 > viewport.h / 2;

  const pick = async (subject) => {
    setMenuOpen(false);
    if (subject === timer.subject) return;
    const wasPaused = timer.phase === 'paused';
    await timer.changeSubject(subject);
    // A paused session ends when its subject changes (its time is saved); carry on with the new subject.
    if (wasPaused) await timer.start(subject, { origin: timer.origin });
  };

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label={`Study timer ${normalizeSubjectLabel(timer.subject)} ${formatElapsed(elapsed)}${running ? '' : ', paused'}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        position: 'fixed', left: px.left, top: px.top, zIndex: 10002, touchAction: 'none', cursor: 'grab',
        display: 'flex', alignItems: 'center', gap: 6, padding: '5px 5px 5px 6px', borderRadius: 999,
        background: 'rgba(15,23,42,0.88)', color: '#fff', boxShadow: '0 6px 20px rgba(15,23,42,0.28)',
        fontSize: '0.8rem', fontWeight: 800, userSelect: 'none', WebkitUserSelect: 'none',
      }}
    >
      <GripVertical size={14} aria-hidden="true" style={{ color: '#94a3b8', flexShrink: 0 }} />
      <button
        type="button"
        onClick={() => setMenuOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-label="Change subject"
        title="Change subject"
        style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 6px', border: 0, borderRadius: 999, background: 'transparent', color: '#fff', font: 'inherit', cursor: 'pointer' }}
      >
        <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: '50%', background: running ? color : '#94a3b8', boxShadow: running ? `0 0 0 3px ${color}55` : 'none', flexShrink: 0 }} />
        <span style={{ maxWidth: 110, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{normalizeSubjectLabel(timer.subject)}</span>
        <ChevronDown size={13} aria-hidden="true" />
      </button>
      <span style={{ fontVariantNumeric: 'tabular-nums', minWidth: 42 }}>{running ? formatElapsed(elapsed) : 'Paused'}</span>
      <button
        type="button"
        onClick={running ? timer.pause : timer.resume}
        aria-label={running ? 'Pause study timer' : 'Resume study timer'}
        style={{ width: 30, height: 30, borderRadius: '50%', border: 0, display: 'grid', placeItems: 'center', cursor: 'pointer', background: running ? '#f59e0b' : '#22c55e', color: '#fff', flexShrink: 0 }}
      >
        {running ? <Pause size={14} fill="#fff" /> : <Play size={14} fill="#fff" />}
      </button>

      {menuOpen && (
        <div
          role="menu"
          aria-label="Choose a subject"
          style={{
            position: 'absolute', left: 0, ...(menuAbove ? { bottom: 'calc(100% + 8px)' } : { top: 'calc(100% + 8px)' }),
            minWidth: 190, maxWidth: 'min(280px, 80vw)', maxHeight: '50vh', overflowY: 'auto', padding: 6, borderRadius: 14,
            background: '#fff', color: '#1e1b4b', boxShadow: '0 12px 32px rgba(15,23,42,0.3)', border: '1px solid #e2e8f0', cursor: 'default',
          }}
        >
          <div style={{ padding: '4px 8px 6px', fontSize: '0.68rem', fontWeight: 700, color: '#64748b', lineHeight: 1.35 }}>
            Switching saves your time so far, then starts a new clock for the subject you pick.
          </div>
          {timer.subjects.map((s) => (
            <button
              key={s}
              type="button"
              role="menuitemradio"
              aria-checked={s === timer.subject}
              onClick={() => pick(s)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px', border: 0, borderRadius: 10, background: s === timer.subject ? '#eef2ff' : 'transparent', color: '#1e1b4b', font: 'inherit', fontSize: '0.82rem', fontWeight: 800, textAlign: 'left', cursor: 'pointer' }}
            >
              <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: '50%', background: subjectColor(profile, s), flexShrink: 0 }} />
              <span style={{ flex: 1, minWidth: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{normalizeSubjectLabel(s)}</span>
              {s === timer.subject && <Check size={15} aria-hidden="true" />}
            </button>
          ))}
          <button
            type="button"
            role="menuitem"
            onClick={resetPosition}
            style={{ width: '100%', marginTop: 4, padding: '8px 10px', border: 0, borderTop: '1px solid #e2e8f0', borderRadius: 0, background: 'transparent', color: '#64748b', font: 'inherit', fontSize: '0.74rem', fontWeight: 800, textAlign: 'left', cursor: 'pointer' }}
          >
            Move timer back to the top
          </button>
        </div>
      )}
    </div>
  );
};

/**
 * "Start Maths timer" for the homework / curriculum headers: starts the student's maths subject straight
 * away (no plan / focus screen); the subject can be changed on the timer afterwards. Hidden while a
 * session is open — the pill shows it then.
 *
 * The timer started here belongs to the screen the button sits on: when that screen closes (homework
 * closed, worksheet closed, another tab opened) the timer stops and the time so far is saved. A timer
 * started on the Study Planner is not touched.
 */
export const StudyTimerStartButton = ({ compact = false }) => {
  const timer = useStudyTimer();
  const { isAdmin } = useAuth();
  const { profile } = useProfile();
  const timerRef = useRef(timer);
  useEffect(() => { timerRef.current = timer; });
  useEffect(() => () => {
    const t = timerRef.current;
    if (t && t.origin === 'screen' && t.phase !== 'stopped') t.stop();
  }, []);
  if (!timer?.uid || timer.phase !== 'stopped' || isAdmin) return null;
  const subject = mathsSubjectFor(profile, timer.subjects);
  return (
    <button
      type="button"
      onClick={() => timer.start(subject, { origin: 'screen' })}
      disabled={timer.starting}
      title={`Start the study timer for ${normalizeSubjectLabel(subject)}. It stops when you leave this screen.`}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5, padding: compact ? '7px 9px' : '7px 12px', borderRadius: 10,
        border: '1px solid #c7d2fe', background: '#eef2ff', color: '#4338ca', fontWeight: 800, fontSize: '0.78rem',
        cursor: timer.starting ? 'wait' : 'pointer', opacity: timer.starting ? 0.7 : 1, whiteSpace: 'nowrap', flexShrink: 0,
      }}
    >
      <Timer size={15} /> {timer.starting ? 'Starting…' : compact ? 'Timer' : 'Start Maths timer'}
    </button>
  );
};
