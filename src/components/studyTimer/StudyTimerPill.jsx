import { Pause, Play, Timer } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useProfile } from '../../context/ProfileContext';
import { useStudyTimer, useStudyTimerClock, formatElapsed } from '../../context/studyTimerStore';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import { DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';
import { mathsSubjectFor } from '../../utils/studySubjects';

const subjectColor = (profile, subject) => profile?.studySubjectColors?.[subject] || DEFAULT_SUBJECT_COLOR;

/**
 * Floating study-timer pill, on every screen except the Study Timer page while a session is open (above
 * the full-screen homework / curriculum views). Pause / resume only — stopping (with the review
 * checklist) happens on the Study Timer page. It never switches tabs: that would close an open homework.
 */
export const StudyTimerPill = () => {
  const timer = useStudyTimer();
  const elapsed = useStudyTimerClock();
  const { profile } = useProfile();
  if (!timer || timer.phase === 'stopped') return null;
  const running = timer.phase === 'running';
  const color = subjectColor(profile, timer.subject);
  return (
    <div
      role="status"
      aria-label={`Study timer ${normalizeSubjectLabel(timer.subject)} ${formatElapsed(elapsed)}${running ? '' : ', paused'}`}
      title="Stop the timer on the Study Timer page"
      style={{
        position: 'fixed', left: '50%', bottom: 'calc(12px + env(safe-area-inset-bottom, 0px))', transform: 'translateX(-50%)',
        zIndex: 10002, display: 'flex', alignItems: 'center', gap: 8, padding: '5px 5px 5px 12px', borderRadius: 999,
        background: 'rgba(15,23,42,0.86)', color: '#fff', boxShadow: '0 6px 20px rgba(15,23,42,0.28)',
        fontSize: '0.8rem', fontWeight: 800, userSelect: 'none', WebkitUserSelect: 'none',
      }}
    >
      <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: '50%', background: running ? color : '#94a3b8', boxShadow: running ? `0 0 0 3px ${color}55` : 'none' }} />
      <span style={{ maxWidth: 110, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{normalizeSubjectLabel(timer.subject)}</span>
      <span style={{ fontVariantNumeric: 'tabular-nums', minWidth: 42 }}>{running ? formatElapsed(elapsed) : 'Paused'}</span>
      <button
        type="button"
        onClick={running ? timer.pause : timer.resume}
        aria-label={running ? 'Pause study timer' : 'Resume study timer'}
        style={{ width: 30, height: 30, borderRadius: '50%', border: 0, display: 'grid', placeItems: 'center', cursor: 'pointer', background: running ? '#f59e0b' : '#22c55e', color: '#fff' }}
      >
        {running ? <Pause size={14} fill="#fff" /> : <Play size={14} fill="#fff" />}
      </button>
    </div>
  );
};

/**
 * "Start Maths timer" for the homework / curriculum headers: starts the student's maths subject straight
 * away (no plan / focus screen). Hidden while a session is open — the pill shows it then.
 */
export const StudyTimerStartButton = ({ compact = false }) => {
  const timer = useStudyTimer();
  const { isAdmin } = useAuth();
  const { profile } = useProfile();
  if (!timer?.uid || timer.phase !== 'stopped' || isAdmin) return null;
  const subject = mathsSubjectFor(profile, timer.subjects);
  return (
    <button
      type="button"
      onClick={() => timer.start(subject)}
      title={`Start the study timer for ${normalizeSubjectLabel(subject)}`}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5, padding: compact ? '7px 9px' : '7px 12px', borderRadius: 10,
        border: '1px solid #c7d2fe', background: '#eef2ff', color: '#4338ca', fontWeight: 800, fontSize: '0.78rem',
        cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
      }}
    >
      <Timer size={15} /> {compact ? 'Timer' : 'Start Maths timer'}
    </button>
  );
};
