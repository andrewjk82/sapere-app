import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Square, Plus, X, Minimize2 } from 'lucide-react';
import { normalizeSubjectLabel } from '../../utils/subjectLabels';
import StudyingNowStrip from './StudyingNowStrip';
import { nowMs } from '../../utils/timeUtils';
import { SUBJECT_COLOR_PALETTE, DEFAULT_SUBJECT_COLOR } from '../../utils/subjectColors';
import AddSubjectModal from './AddSubjectModal';
import StudySessionScreen from './StudySessionScreen';
import { emptyItems, loadNotesDraft, saveNotesDraft, clearNotesDraft, saveSessionNotes } from '../../services/studyNotesService';
import { useStudyTimer, useStudyTimerClock, formatElapsed } from '../../context/studyTimerStore';

const RESUME_CAP_SEC = 3 * 60 * 60; // a notes draft older than this is never carried into a new session

const todayStr = () => new Date().toLocaleDateString('en-CA');

const RING_SIZE = 220;
const RING_STROKE = 14;
const RING_R = (RING_SIZE - RING_STROKE) / 2;
const RING_C = 2 * Math.PI * RING_R;

/**
 * Per-subject stopwatch page view. The session itself (clock, Firestore flushes, auto-pause, cross-device
 * check, presence) is app-wide in context/StudyTimerContext.jsx, so it keeps running while the student
 * does homework or curriculum work (shown there by StudyTimerPill). This component owns only the page UI:
 * the ring, subject chips, and the plan → focus clock → review checklist screens.
 */
const SubjectStopwatch = ({ uid, subjectColors = {}, onSetSubjectColor, onAddSubject, onRemoveSubject, onNotesSaved }) => {
  const timer = useStudyTimer();
  const displayElapsedSec = useStudyTimerClock();
  const { subject, phase, subjects: subjectOptions } = timer;
  const colorFor = (s) => subjectColors[s] || DEFAULT_SUBJECT_COLOR;

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [hoveredSubject, setHoveredSubject] = useState(null);
  const [colorPickerFor, setColorPickerFor] = useState(null);
  const [focusMode, setFocusMode] = useState(false);
  const [sessionStage, setSessionStage] = useState('plan'); // 'plan' | 'focus' (black clock) | 'review'
  const [notesItems, setNotesItems] = useState(() => emptyItems());
  const [finishing, setFinishing] = useState(false);

  // In-progress checklist lives in localStorage only (survives reloads);
  // Firestore gets one write at Finish — see studyNotesService.js.
  const updateNotes = (next) => {
    setNotesItems(next);
    saveNotesDraft(uid, { subject, items: next, savedAt: nowMs() });
  };

  // The draft only exists to survive a reload mid-session. A finished session
  // always clears it; a stale one (older than the resume cap, or another
  // subject) is never carried into a new session.
  const restorableDraft = (draft, forSubject) => (
    draft?.subject === forSubject
    && Array.isArray(draft.items) && draft.items.length
    && Number(draft.savedAt) > nowMs() - RESUME_CAP_SEC * 1000
      ? draft.items : null
  );

  const handleStart = async () => {
    const wasStopped = phase === 'stopped';
    if (!(await timer.start(subject))) return;
    if (wasStopped) {
      const draft = loadNotesDraft(uid);
      setNotesItems(restorableDraft(draft, subject) || emptyItems());
    }
    setSessionStage('plan');
    setFocusMode(true);
  };

  // Stop never ends the session directly — it first opens the checklist in
  // review mode so the student ticks off what they finished.
  const handleRequestEnd = () => {
    if (!focusMode) {
      const draft = loadNotesDraft(uid);
      setNotesItems(restorableDraft(draft, subject) || emptyItems());
      setFocusMode(true);
    }
    setSessionStage('review');
  };

  async function handleFinishSession() {
    if (finishing) return;
    setFinishing(true);
    const durationSec = timer.currentTotalSec();
    const itemsToSave = notesItems;
    const sessionSubject = subject;
    try {
      await timer.stop();
      const id = await saveSessionNotes({ uid, subject: sessionSubject, items: itemsToSave, durationSec, dateStr: todayStr() });
      if (id) onNotesSaved?.(sessionSubject);
    } catch (e) {
      console.warn('[studytime] notes save failed:', e?.code || e);
      window.alert(`Could not save your notes (${e?.code || 'error'}). Please try again later.`);
    } finally {
      clearNotesDraft(uid); // session is over either way — next one starts blank
      setFinishing(false);
      setFocusMode(false);
      setSessionStage('plan');
      setNotesItems(emptyItems());
    }
  }

  const handlePause = () => timer.pause();
  const handleResumeInSession = () => timer.resume();
  const handleSubjectChange = (next) => timer.changeSubject(next);

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
  const activeColor = colorFor(subject);

  return (
    <>
    <div style={{
      borderRadius: 32, padding: '32px 28px', background: '#fff',
      border: '1px solid #eceaf6', boxShadow: '0 12px 30px rgba(99,102,241,0.08)', position: 'relative', overflow: 'visible',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ position: 'relative', width: RING_SIZE, height: RING_SIZE }}>
          <svg width={RING_SIZE} height={RING_SIZE} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={RING_SIZE / 2} cy={RING_SIZE / 2} r={RING_R} fill="none" stroke={`${activeColor}1f`} strokeWidth={RING_STROKE} />
            <motion.circle
              cx={RING_SIZE / 2} cy={RING_SIZE / 2} r={RING_R} fill="none" stroke={activeColor} strokeWidth={RING_STROKE}
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
                  style={{ position: 'absolute', width: RING_SIZE - 30, height: RING_SIZE - 30, borderRadius: '50%', background: `radial-gradient(circle, ${activeColor}45, transparent 70%)` }}
                />
              )}
            </AnimatePresence>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.02em', zIndex: 1, color: activeColor }}>
              {formatElapsed(displayElapsedSec)}
            </span>
            <span style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: activeColor, marginTop: 4, zIndex: 1 }}>
              {normalizeSubjectLabel(subject)}{phase === 'paused' ? ' · Paused' : ''}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          {!isRunning ? (
            <button type="button" onClick={handleStart} disabled={timer.starting} style={{ ...btnStyle('#22c55e'), opacity: timer.starting ? 0.7 : 1, cursor: timer.starting ? 'wait' : 'pointer' }}>
              <Play size={18} fill="#fff" /> {timer.starting ? 'Starting…' : phase === 'paused' ? 'Resume' : 'Start'}
            </button>
          ) : (
            <button type="button" onClick={handlePause} style={btnStyle('#f59e0b')}>
              <Pause size={18} fill="#fff" /> Pause
            </button>
          )}
          <button
            type="button"
            onClick={handleRequestEnd}
            disabled={displayElapsedSec <= 0}
            style={{ ...btnStyle('#ef4444'), opacity: displayElapsedSec <= 0 ? 0.4 : 1 }}
          >
            <Square size={16} fill="#fff" /> Stop
          </button>
        </div>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 12 }}>
      {subjectOptions.map((s) => {
        const c = colorFor(s);
        const selected = s === subject;
        return (
          <div
            key={s}
            style={{ position: 'relative', height: '100%' }}
            onMouseEnter={() => setHoveredSubject(s)}
            onMouseLeave={() => setHoveredSubject((cur) => (cur === s ? null : cur))}
          >
            <button
              type="button"
              onClick={() => handleSubjectChange(s)}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px 20px', borderRadius: 20,
                border: selected ? `1px solid ${c}` : `1px solid ${c}33`,
                background: selected ? c : `${c}1a`,
                color: selected ? '#fff' : c,
                fontWeight: 800, fontSize: '0.85rem', cursor: 'pointer', transition: 'all .2s',
                boxShadow: selected ? `0 10px 24px ${c}40` : `0 6px 16px ${c}14`,
                width: '100%', height: '100%', boxSizing: 'border-box',
              }}
            >
              {normalizeSubjectLabel(s)}
            </button>

            {hoveredSubject === s && (
              <span
                role="button"
                tabIndex={0}
                aria-label={`Change color for ${normalizeSubjectLabel(s)}`}
                onClick={(e) => { e.stopPropagation(); setColorPickerFor((cur) => (cur === s ? null : s)); }}
                style={{
                  position: 'absolute', top: -7, left: -7, width: 20, height: 20, borderRadius: '50%',
                  border: '2px solid #fff', background: c, color: '#fff',
                  display: 'grid', placeItems: 'center', cursor: 'pointer', padding: 0,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                }}
              />
            )}

            {hoveredSubject === s && subjectOptions.length > 1 && (
              <button
                type="button"
                onClick={(e) => handleRemoveSubjectClick(s, e)}
                aria-label={`Remove ${normalizeSubjectLabel(s)}`}
                style={{
                  position: 'absolute', top: -7, right: -7, width: 20, height: 20, borderRadius: '50%',
                  border: '2px solid #fff', background: '#ef4444', color: '#fff',
                  display: 'grid', placeItems: 'center', cursor: 'pointer', padding: 0,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                }}
              >
                <X size={11} strokeWidth={3} />
              </button>
            )}

            <AnimatePresence>
              {colorPickerFor === s && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    position: 'absolute', top: 'calc(100% + 8px)', left: 0, zIndex: 20,
                    background: '#fff', borderRadius: 16, padding: 10, boxShadow: '0 16px 40px rgba(30,27,75,0.25)',
                    border: '1px solid #eceaf6', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 6,
                  }}
                >
                  {SUBJECT_COLOR_PALETTE.map((paletteColor) => (
                    <button
                      key={paletteColor}
                      type="button"
                      onClick={(e) => { e.stopPropagation(); onSetSubjectColor?.(s, paletteColor); setColorPickerFor(null); }}
                      aria-label={`Set color ${paletteColor}`}
                      style={{
                        width: 22, height: 22, borderRadius: '50%', background: paletteColor, cursor: 'pointer',
                        border: paletteColor === c ? '2px solid #1e1b4b' : '2px solid transparent', padding: 0,
                      }}
                    />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      <button
        type="button"
        onClick={() => setAddModalOpen(true)}
        aria-label="Add subject"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 60, padding: '14px 20px',
          borderRadius: 20, border: '1px dashed #cbd5e1', background: '#f8fafc',
          color: '#64748b', cursor: 'pointer',
        }}
      >
        <Plus size={18} />
      </button>
    </div>

    <AddSubjectModal
      open={addModalOpen}
      existingSubjects={subjectOptions}
      onClose={() => setAddModalOpen(false)}
      onPick={handlePickSubject}
    />

    <AnimatePresence>
      {focusMode && sessionStage === 'focus' && (
        <motion.div
          key="focus-clock"
          role="button"
          tabIndex={0}
          aria-label="Tap to end study session"
          onClick={handleRequestEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position: 'fixed', inset: 0, zIndex: 1000, background: '#000',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', userSelect: 'none',
          }}
        >
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(3rem, 14vw, 7rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
            {formatElapsed(displayElapsedSec)}
          </span>
          <span style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: activeColor, marginTop: 12 }}>
            {normalizeSubjectLabel(subject)}{phase === 'paused' ? ' · Paused' : ''}
          </span>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.35)', marginTop: 28 }}>
            Tap anywhere to end session
          </span>
          {/* Keep the clock running and go back to the app (homework, curriculum…); the pill shows the time. */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setFocusMode(false); setSessionStage('plan'); }}
            style={{ marginTop: 18, display: 'inline-flex', alignItems: 'center', gap: 6, padding: '9px 16px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 800, fontSize: '0.78rem', cursor: 'pointer' }}
          >
            <Minimize2 size={14} /> Keep timing &amp; use the app
          </button>
          <StudyingNowStrip uid={uid} />
        </motion.div>
      )}
      {focusMode && sessionStage !== 'focus' && (
        <StudySessionScreen
          key="session-notes"
          subject={subject}
          color={activeColor}
          elapsedLabel={formatElapsed(displayElapsedSec)}
          phase={phase}
          stage={sessionStage}
          items={notesItems}
          onItemsChange={updateNotes}
          onPause={handlePause}
          onResume={handleResumeInSession}
          onRequestEnd={handleRequestEnd}
          onBackToStudy={() => setSessionStage('focus')}
          onSave={() => setSessionStage('focus')}
          onFinish={handleFinishSession}
          finishing={finishing}
        />
      )}
    </AnimatePresence>
    </>
  );
};

const btnStyle = (bg) => ({
  display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 22px', borderRadius: 16,
  border: 'none', background: bg, color: '#fff', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer',
  boxShadow: `0 10px 24px ${bg}55`, transition: 'transform .15s',
});

export default SubjectStopwatch;
