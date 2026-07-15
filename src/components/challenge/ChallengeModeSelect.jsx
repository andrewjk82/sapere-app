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

const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${6 + ((i * 19) % 88)}%`,
  delay: `${(i % 8) * 0.4}s`,
  duration: `${9 + (i % 4)}s`,
  size: 2 + (i % 3),
  opacity: 0.12 + (i % 4) * 0.05,
}));

/** Premium SVG lightning — branched polylines, not straight bars. */
const ElectricFx = ({ active }) => (
  <svg className={`cms-fx-svg cms-fx-svg--electric${active ? ' is-on' : ''}`} viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden>
    <defs>
      <filter id="cms-glow-bolt" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur stdDeviation="1.4" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="cms-bolt-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
        <stop offset="20%" stopColor="#ffffff" stopOpacity="1" />
        <stop offset="55%" stopColor="#fef08a" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <g filter="url(#cms-glow-bolt)" className="cms-bolt-g cms-bolt-g--1" fill="none" stroke="url(#cms-bolt-grad)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="38,8 52,32 44,38 58,62 50,70 64,98" />
      <polyline points="52,32 68,40 62,48" opacity="0.75" strokeWidth="1.1" />
      <polyline points="58,62 72,58 78,72" opacity="0.65" strokeWidth="1" />
    </g>
    <g filter="url(#cms-glow-bolt)" className="cms-bolt-g cms-bolt-g--2" fill="none" stroke="url(#cms-bolt-grad)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="108,4 96,28 112,36 100,54 118,66 106,92 120,112" />
      <polyline points="96,28 84,36 88,48" opacity="0.7" strokeWidth="1.1" />
      <polyline points="118,66 132,60 140,78" opacity="0.6" strokeWidth="1" />
    </g>
    <g filter="url(#cms-glow-bolt)" className="cms-bolt-g cms-bolt-g--3" fill="none" stroke="url(#cms-bolt-grad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="162,12 148,40 160,48 150,72 164,88" />
      <polyline points="160,48 174,52 170,66" opacity="0.7" strokeWidth="1" />
    </g>
    {/* residual corona flash */}
    <ellipse className="cms-bolt-flash" cx="100" cy="55" rx="70" ry="40" fill="rgba(255,255,255,0.12)" />
  </svg>
);

/**
 * Extreme — Voltage / Overdrive.
 * Clean card + red-zone gauge bar + occasional warning blink (no fire soup).
 */
const OverdriveFx = ({ active }) => (
  <div className={`cms-fx-overdrive${active ? ' is-on' : ''}`} aria-hidden>
    <span className="cms-od-scan" />
    <span className="cms-od-warn" />
    <div className="cms-od-gauge">
      <span className="cms-od-gauge-label">Overdrive</span>
      <div className="cms-od-track">
        <span className="cms-od-fill" />
        <span className="cms-od-tick cms-od-tick--1" />
        <span className="cms-od-tick cms-od-tick--2" />
        <span className="cms-od-tick cms-od-tick--3" />
        <span className="cms-od-needle" />
      </div>
    </div>
  </div>
);

/** Normal — restrained luxury: soft specular sweep + ambient dust. */
const NormalFx = ({ active }) => (
  <div className={`cms-fx-normal${active ? ' is-on' : ''}`} aria-hidden>
    <span className="cms-fx-sheen" />
    <span className="cms-fx-glowspot" />
    {Array.from({ length: 6 }, (_, i) => (
      <span key={i} className={`cms-dust cms-dust--${i + 1}`} />
    ))}
  </div>
);

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
                    {/* Premium FX — remounts on pick so strike / ignition re-fires */}
                    <span
                      className="cms-fx"
                      aria-hidden
                      key={isSel ? `${mode.id}-fx-${fxTick}` : `${mode.id}-fx-idle`}
                    >
                      {mode.id === 'normal' && <NormalFx active={isSel} />}
                      {mode.id === 'challenge' && <ElectricFx active={isSel} />}
                      {mode.id === 'extreme' && <OverdriveFx active={isSel} />}
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
