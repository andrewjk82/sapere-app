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
 * UI only — no Firebase.
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
    <AnimatePresence mode="sync">
      {open && (
        <motion.div
          key="snc-root"
          className="snc-modal"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-labelledby="snc-title"
        >
          <motion.div
            className="snc-modal__backdrop"
            variants={backdropVariants}
            onClick={close}
          />

          <motion.div
            className="snc-modal__frame"
            variants={frameVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Soft glow bloom behind the card */}
            <motion.div
              className="snc-modal__glow"
              aria-hidden
              variants={glowVariants}
            />

            <div className="snc-modal__card">
              {/* Confetti — burst in, then gentle float */}
              <div className="snc-confetti" aria-hidden>
                {CONFETTI.map((c, i) => (
                  <motion.span
                    key={i}
                    className="snc-confetti__bit"
                    style={{
                      left: c.left,
                      top: c.top,
                      background: c.color,
                      width: c.size,
                      height: c.size,
                      borderRadius: c.round ? '50%' : '2px',
                    }}
                    initial={{ opacity: 0, scale: 0, y: 12, rotate: c.rot - 40 }}
                    animate={{
                      opacity: [0, 1, 0.9],
                      scale: [0.4, 1.25, 1],
                      y: [12, -4, 0],
                      rotate: [c.rot - 40, c.rot + 12, c.rot],
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.12 + c.delay * 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                ))}
              </div>

              <motion.div
                className="snc-modal__body"
                variants={staggerParent}
                initial="hidden"
                animate="visible"
              >
                {/* Real FlameBuddy avatar — outer: enter stagger; inner: idle float */}
                <motion.div className="snc-modal__flame-wrap" variants={itemVariants}>
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 0.65,
                    }}
                  >
                    <FlameBuddyAvatar mood="idle" />
                  </motion.div>
                </motion.div>

                <motion.h2
                  id="snc-title"
                  className="snc-modal__title"
                  variants={itemVariants}
                >
                  Congratulations
                </motion.h2>
                <motion.p className="snc-modal__msg" variants={itemVariants}>
                  {copy.msg}
                </motion.p>
                <motion.p className="snc-modal__sub" variants={itemVariants}>
                  {copy.sub}
                </motion.p>

                {/* XP badge */}
                <motion.div
                  className="snc-modal__xp-badge"
                  variants={badgeVariants}
                >
                  <span className="snc-modal__xp-plus">+</span>
                  <span className="snc-modal__xp-num">{bonusXp}</span>
                  <span className="snc-modal__xp-unit">XP</span>
                </motion.div>

                {/* Animated total XP */}
                <motion.div variants={itemVariants}>
                  <XpCountUp
                    key={`${startXp}-${targetXp}-${open}`}
                    from={startXp}
                    to={targetXp}
                    bonus={bonusXp}
                  />
                </motion.div>

                <motion.button
                  type="button"
                  className="snc-modal__cta"
                  onClick={close}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                >
                  Continue
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Motion variants (enter / exit) ─────────────────────────────────────── */

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1], delay: 0.04 },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

// Card pops in with soft overshoot; exits with a gentle shrink + float-up.
const frameVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.86,
    rotate: -1.2,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 380,
      damping: 22,
      mass: 0.85,
      opacity: { duration: 0.22 },
      filter: { duration: 0.28 },
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 0.92,
    rotate: 0.6,
    filter: 'blur(4px)',
    transition: {
      duration: 0.32,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: [0, 0.85, 0.55],
    scale: [0.7, 1.08, 1],
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 },
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.22 },
  },
};

const staggerParent = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 420,
      damping: 26,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.45, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 460,
      damping: 16,
      delay: 0.08,
    },
  },
};

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
          initial={{ opacity: 0, y: 6, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.7, type: 'spring', stiffness: 380, damping: 20 }}
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
  // Partial +5 with calc enabled (not the daily-only full +10 path).
  const onlyDailyHalf = !!payload?.claimDaily && !payload?.claimCalc && !payload?.dailyOnly;
  const onlyCalcHalf = !!payload?.claimCalc && !payload?.claimDaily;

  // Clean sweep — both notebooks clear same night (+10 with calc).
  if (both) {
    return {
      msg: `${hey}! Amazing — Daily and Calculation Secret Notes are both clear.`,
      sub: `That’s a full +${xp} XP clean sweep. You’re on fire — keep it up!`,
    };
  }

  // Daily-only students (no calc feature) — full +10.
  if (payload?.dailyOnly) {
    return {
      msg: `${hey}! You did a great job — keep going just like this.`,
      sub: `Zero Secret Notes left at last night’s check. +${xp} XP for you!`,
    };
  }

  // +5: cleared Daily only → nudge Calculation for the full 10 next time.
  if (onlyDailyHalf) {
    return {
      msg: `${hey}! Congrats — well done clearing your Daily Secret Note.`,
      sub: `That’s +${xp} XP today. Tomorrow finish Calculation Secret Note too and grab the full +10!`,
    };
  }

  // +5: cleared Calc only → nudge Daily for the full 10 next time.
  if (onlyCalcHalf) {
    return {
      msg: `${hey}! Congrats — well done clearing your Calculation Secret Note.`,
      sub: `That’s +${xp} XP today. Tomorrow finish Daily Secret Note too and grab the full +10!`,
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
