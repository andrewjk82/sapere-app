import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  dismissSecretNoteClearCelebration,
  peekSecretNoteClearCelebration,
} from '../services/secretNoteBonusService';
import { FlameBuddyAvatar } from './FlameBuddy';
import './FlameBuddy.css';
import './SecretNoteClearModal.css';

/**
 * Celebration card when midnight Secret-Note-clear bonus awards XP.
 * Design: yellow-border congrats card + real FlameBuddy avatar + XP count-up.
 * Payload is localStorage only (forcePayload for teacher design preview).
 */
export default function SecretNoteClearModal({
  uid,
  firstName = '',
  currentXP = 0,
  forcePayload = null,
  onForceDismiss = null,
  isPreview = false,
}) {
  const [payload, setPayload] = useState(null);

  useEffect(() => {
    if (forcePayload && Number(forcePayload.xp) > 0) {
      setPayload(forcePayload);
      return undefined;
    }
    if (!uid) return undefined;
    setPayload(peekSecretNoteClearCelebration(uid));
    const onEvent = (e) => {
      if (e.detail?.uid && e.detail.uid !== uid) return;
      setPayload(peekSecretNoteClearCelebration(uid));
    };
    window.addEventListener('sapere:sn-clear-celebration', onEvent);
    return () => window.removeEventListener('sapere:sn-clear-celebration', onEvent);
  }, [uid, forcePayload]);

  const bonusXp = Number(payload?.xp) || 0;
  const endXp = Math.max(0, Number(currentXP) || 0);
  // Real award: totalXP already includes bonus. Preview: animate current → +bonus.
  const startXp = isPreview || forcePayload
    ? endXp
    : Math.max(0, endXp - bonusXp);
  const targetXp = isPreview || forcePayload
    ? endXp + bonusXp
    : endXp;

  const copy = useMemo(() => buildCopy(payload, firstName, bonusXp), [payload, firstName, bonusXp]);

  const close = () => {
    if (forcePayload) onForceDismiss?.();
    dismissSecretNoteClearCelebration(uid);
    setPayload(null);
  };

  const open = payload && bonusXp > 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="snc-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="snc-title"
        >
          <motion.div className="snc-modal__backdrop" onClick={close} />

          <motion.div
            className="snc-modal__frame"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          >
            <div className="snc-modal__card">
              {/* Confetti dots */}
              <div className="snc-confetti" aria-hidden>
                {CONFETTI.map((c, i) => (
                  <span
                    key={i}
                    className="snc-confetti__bit"
                    style={{
                      left: c.left,
                      top: c.top,
                      background: c.color,
                      width: c.size,
                      height: c.size,
                      borderRadius: c.round ? '50%' : '2px',
                      transform: `rotate(${c.rot}deg)`,
                      animationDelay: `${c.delay}s`,
                    }}
                  />
                ))}
              </div>

              {/* Real FlameBuddy avatar (cheer mood) */}
              <motion.div
                className="snc-modal__flame-wrap"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* idle = default orange flame (CSS mood fills need main fb- ids) */}
                <FlameBuddyAvatar mood="idle" />
              </motion.div>

              <h2 id="snc-title" className="snc-modal__title">Congratulations</h2>
              <p className="snc-modal__msg">{copy.msg}</p>
              <p className="snc-modal__sub">{copy.sub}</p>

              {/* XP badge instead of medal */}
              <motion.div
                className="snc-modal__xp-badge"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 340, damping: 16 }}
              >
                <span className="snc-modal__xp-plus">+</span>
                <span className="snc-modal__xp-num">{bonusXp}</span>
                <span className="snc-modal__xp-unit">XP</span>
              </motion.div>

              {/* Animated total XP: previous → previous + bonus */}
              <XpCountUp
                key={`${startXp}-${targetXp}-${open}`}
                from={startXp}
                to={targetXp}
                bonus={bonusXp}
              />

              <motion.button
                type="button"
                className="snc-modal__cta"
                onClick={close}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                Continue
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function XpCountUp({ from, to, bonus }) {
  const mv = useMotionValue(from);
  const display = useTransform(mv, (v) => Math.round(v).toLocaleString());
  const [shown, setShown] = useState(String(Math.round(from)));

  useEffect(() => {
    mv.set(from);
    const controls = animate(mv, to, {
      duration: 1.35,
      delay: 0.55,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = display.on('change', (v) => setShown(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [from, to, mv, display]);

  return (
    <div className="snc-modal__total">
      <div className="snc-modal__total-label">Your XP</div>
      <div className="snc-modal__total-row">
        <motion.span
          className="snc-modal__total-num"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ delay: 0.55, duration: 1.35, ease: 'easeOut' }}
        >
          {shown}
        </motion.span>
        <motion.span
          className="snc-modal__total-delta"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          +{bonus}
        </motion.span>
      </div>
    </div>
  );
}

function buildCopy(payload, firstName, bonusXp) {
  const n = (firstName || '').trim();
  const hey = n ? `Hey ${n}` : 'Hey';
  const xp = bonusXp || 10;
  const both = payload?.claimDaily && payload?.claimCalc;

  if (payload?.dailyOnly || (payload?.claimDaily && !payload?.claimCalc)) {
    return {
      msg: `${hey}! You did a great job — keep going just like this.`,
      sub: `Zero Secret Notes left at last night’s check. +${xp} XP for you!`,
    };
  }
  if (both) {
    return {
      msg: `${hey}! Daily and Calculation notebooks are clear. Amazing.`,
      sub: `That’s +${xp} XP for the clean sweep. Stay this sharp!`,
    };
  }
  if (payload?.claimCalc) {
    return {
      msg: `${hey}! Calculation Secret Note is empty. Love that.`,
      sub: `+${xp} XP added. Keep the streak kind and clean.`,
    };
  }
  return {
    msg: `${hey}! You did a great job — keep going just like this.`,
    sub: `No Secret Notes left overnight. +${xp} XP!`,
  };
}

const CONFETTI = [
  { left: '12%', top: '10%', color: '#f472b6', size: 8, round: false, rot: 20, delay: 0 },
  { left: '22%', top: '18%', color: '#60a5fa', size: 6, round: true, rot: 0, delay: 0.2 },
  { left: '78%', top: '12%', color: '#fbbf24', size: 7, round: false, rot: -25, delay: 0.1 },
  { left: '85%', top: '22%', color: '#a78bfa', size: 6, round: true, rot: 0, delay: 0.35 },
  { left: '18%', top: '42%', color: '#34d399', size: 5, round: false, rot: 40, delay: 0.15 },
  { left: '80%', top: '40%', color: '#fb7185', size: 6, round: false, rot: -15, delay: 0.25 },
  { left: '8%', top: '28%', color: '#38bdf8', size: 4, round: true, rot: 0, delay: 0.4 },
  { left: '90%', top: '32%', color: '#facc15', size: 5, round: false, rot: 30, delay: 0.05 },
  { left: '30%', top: '8%', color: '#c084fc', size: 5, round: true, rot: 0, delay: 0.3 },
  { left: '68%', top: '9%', color: '#4ade80', size: 6, round: false, rot: 12, delay: 0.18 },
];
