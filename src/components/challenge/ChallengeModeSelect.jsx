import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Clock, Zap, ArrowRight, Swords } from 'lucide-react';
import { FlameBuddyAvatar } from '../FlameBuddy';
import '../FlameBuddy.css';
import { CHALLENGE_MODE_LIST, getChallengeMode } from '../../constants/challengeModes';
import './ChallengeModeSelect.css';

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

  useEffect(() => {
    if (!open) return undefined;
    setSelected('normal');
    setHovered(null);
    const onKey = (e) => {
      if (e.key === 'Escape') onCancel?.();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
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
                    className={`cms-card${isSel ? ' is-selected' : ''}`}
                    style={{
                      '--cms-grad': mode.gradient,
                      '--cms-glow': mode.glow,
                    }}
                    onClick={() => setSelected(mode.id)}
                    onMouseEnter={() => setHovered(mode.id)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(mode.id)}
                    onBlur={() => setHovered(null)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, type: 'spring', stiffness: 280, damping: 22 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSel && (
                      <span className="cms-card-check" aria-hidden>
                        <Zap size={14} fill="currentColor" />
                      </span>
                    )}
                    <span className="cms-card-emoji" aria-hidden>{mode.emoji}</span>
                    <span className="cms-card-label">{mode.label}</span>
                    <span className="cms-card-tag">{mode.tagline}</span>
                    <div className="cms-card-stats">
                      <span className="cms-stat">
                        <Clock size={13} />
                        {timePct === 0 ? 'Full time' : `−${timePct}% time`}
                      </span>
                      <span className="cms-stat">
                        <Zap size={13} />
                        {mode.bonusXp > 0 ? `+${mode.bonusXp} bonus XP` : 'No bonus XP'}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="cms-foot">
              <p className="cms-hint">
                Bonus XP is added when you complete the session (not if you abandon).
                Timers shrink on every question.
              </p>
              <div className="cms-actions">
                <button type="button" className="cms-btn cms-btn--ghost" onClick={onCancel}>
                  Cancel
                </button>
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
