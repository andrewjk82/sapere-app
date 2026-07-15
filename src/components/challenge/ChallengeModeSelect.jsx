import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Clock, Zap, ArrowRight, Swords, Shield, Flame } from 'lucide-react';
import { FlameBuddyAvatar } from '../FlameBuddy';
import '../FlameBuddy.css';
import { CHALLENGE_MODE_LIST, getChallengeMode, formatModeBonusLabel } from '../../constants/challengeModes';
import './ChallengeModeSelect.css';

const ModeIcon = ({ name, size = 28 }) => {
  if (name === 'zap') return <Zap size={size} strokeWidth={2.6} />;
  if (name === 'flame') return <Flame size={size} strokeWidth={2.6} />;
  return <Shield size={size} strokeWidth={2.6} />;
};

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${4 + ((i * 17) % 92)}%`,
  delay: `${(i % 9) * 0.35}s`,
  duration: `${7 + (i % 5)}s`,
  size: 3 + (i % 4),
  opacity: 0.2 + (i % 5) * 0.08,
}));

/**
 * Game-style lobby: pick Normal / Challenge / Extreme before Daily or Calc.
 * FlameBuddy coaches the selection; confirm starts the quiz.
 */
export default function ChallengeModeSelect({
  open,
  challengeType = 'daily',
  onConfirm,
  onCancel,
}) {
  const [selected, setSelected] = useState('normal');
  const [hovered, setHovered] = useState(null);
  // Bumps on each pick so select FX (sparks / fire) can re-fire.
  const [fxTick, setFxTick] = useState(0);

  useEffect(() => {
    if (!open) return undefined;
    setSelected('normal');
    setHovered(null);
    setFxTick(0);
    // Hide the floating corner FlameBuddy while this modal owns the coach UI.
    try {
      window.dispatchEvent(new CustomEvent('sapere:ui-overlay', {
        detail: { id: 'challenge-mode-select', open: true },
      }));
    } catch { /* ignore */ }
    const onKey = (e) => {
      if (e.key === 'Escape') onCancel?.();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      try {
        window.dispatchEvent(new CustomEvent('sapere:ui-overlay', {
          detail: { id: 'challenge-mode-select', open: false },
        }));
      } catch { /* ignore */ }
    };
  }, [open, onCancel]);

  const activeId = hovered || selected;
  const activeMode = getChallengeMode(activeId);
  const sessionLabel = challengeType === 'calc' ? 'Daily Calculation' : 'Daily Practice';

  const speech = useMemo(() => {
    if (!hovered && selected === 'normal') {
      return `Pick your difficulty for ${sessionLabel}. Tap a mode — I'll explain the trade-off. Then hit Let's go!`;
    }
    return activeMode.speech;
  }, [hovered, selected, activeMode, sessionLabel]);

  const mood = activeId === 'extreme' ? 'urgent' : activeId === 'challenge' ? 'thinking' : 'cheer';

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="cms-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cms-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
        >
          <div className="cms-particles" aria-hidden>
            {PARTICLES.map((p) => (
              <span
                key={p.id}
                className="cms-particle"
                style={{
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                  opacity: p.opacity,
                }}
              />
            ))}
          </div>

          <motion.div
            className="cms-panel"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          >
            <button type="button" className="cms-close" onClick={onCancel} aria-label="Close">
              <X size={18} />
            </button>

            <div className="cms-head">
              <div className="cms-kicker">
                <Swords size={14} /> Mode select
              </div>
              <h2 id="cms-title" className="cms-title">
                Choose your difficulty
              </h2>
              <p className="cms-sub">
                {sessionLabel} · faster clocks mean bonus XP if you finish
              </p>
            </div>

            <div className="cms-coach">
              <div className="cms-coach-avatar">
                <FlameBuddyAvatar mood={mood} />
              </div>
              <div className="cms-coach-bubble" key={activeId + (hovered || '')}>
                <span className="cms-coach-name">Flame Buddy</span>
                <motion.span
                  key={speech}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: 'block' }}
                >
                  {speech}
                </motion.span>
              </div>
            </div>

            <div className="cms-grid" role="listbox" aria-label="Difficulty modes">
              {CHALLENGE_MODE_LIST.map((mode, i) => {
                const isSel = selected === mode.id;
                const timePct = Math.round((1 - mode.timeScale) * 100);
                return (
                  <motion.button
                    key={mode.id}
                    type="button"
                    role="option"
                    aria-selected={isSel}
                    className={[
                      'cms-card',
                      `cms-card--${mode.id}`,
                      isSel ? 'is-selected' : '',
                    ].filter(Boolean).join(' ')}
                    style={{
                      '--cms-grad': mode.gradient,
                      '--cms-glow': mode.glow,
                    }}
                    onClick={() => {
                      setSelected(mode.id);
                      setFxTick((n) => n + 1);
                    }}
                    onMouseEnter={() => setHovered(mode.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(mode.id)}
                    onBlur={() => setHovered(null)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, type: 'spring', stiffness: 280, damping: 22 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* Mode-specific FX layer (re-mounts on each pick via key) */}
                    <span
                      className="cms-fx"
                      aria-hidden
                      key={isSel ? `${mode.id}-fx-${fxTick}` : `${mode.id}-fx-idle`}
                    >
                      {mode.id === 'normal' && (
                        <>
                          <span className="cms-fx-shimmer" />
                          <span className="cms-fx-ring" />
                        </>
                      )}
                      {mode.id === 'challenge' && (
                        <>
                          <span className="cms-fx-bolt cms-fx-bolt--a" />
                          <span className="cms-fx-bolt cms-fx-bolt--b" />
                          <span className="cms-fx-bolt cms-fx-bolt--c" />
                          <span className="cms-fx-spark cms-fx-spark--1" />
                          <span className="cms-fx-spark cms-fx-spark--2" />
                          <span className="cms-fx-spark cms-fx-spark--3" />
                          <span className="cms-fx-spark cms-fx-spark--4" />
                          <span className="cms-fx-scan" />
                        </>
                      )}
                      {mode.id === 'extreme' && (
                        <>
                          <span className="cms-fx-heat" />
                          <span className="cms-fx-flame cms-fx-flame--1" />
                          <span className="cms-fx-flame cms-fx-flame--2" />
                          <span className="cms-fx-flame cms-fx-flame--3" />
                          <span className="cms-fx-flame cms-fx-flame--4" />
                          <span className="cms-fx-ember cms-fx-ember--1" />
                          <span className="cms-fx-ember cms-fx-ember--2" />
                          <span className="cms-fx-ember cms-fx-ember--3" />
                          <span className="cms-fx-ember cms-fx-ember--4" />
                          <span className="cms-fx-ember cms-fx-ember--5" />
                        </>
                      )}
                    </span>

                    {isSel && (
                      <span className="cms-card-check" aria-hidden>
                        <Zap size={14} fill="currentColor" />
                      </span>
                    )}
                    <span className="cms-card-title">
                      <span className="cms-card-icon" aria-hidden>
                        <ModeIcon name={mode.icon} size={26} />
                      </span>
                      <span className="cms-card-label">{mode.label}</span>
                    </span>
                    <div className="cms-card-stats">
                      <span className="cms-stat">
                        <Clock size={13} />
                        {timePct === 0 ? 'Full time' : `−${timePct}% time`}
                      </span>
                      <span className="cms-stat">
                        <Zap size={13} />
                        {formatModeBonusLabel(mode.id)}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="cms-foot">
              <div className="cms-actions">
                <button
                  type="button"
                  className="cms-btn cms-btn--go"
                  onClick={() => onConfirm?.(selected)}
                >
                  Let&apos;s go
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
