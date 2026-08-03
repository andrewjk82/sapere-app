import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { formatSprintTime } from '../utils/sprintWeek';
import './SecretNoteClearModal.css';

/**
 * Congrats card for the weekly Times Table Sprint payout. XP is minted
 * server-side in api/_lib/timesTableSprintSettlement.js — this only
 * announces it. Reuses the SecretNoteClearModal yellow-frame/XP-badge CSS
 * for visual consistency with the app's other celebration cards.
 */
export default function SprintPayoutModal({
  open,
  payload,
  firstName = '',
  currentXP = 0,
  onClose,
  isPreview = false,
}) {
  const xp = Number(payload?.xp) || 0;
  const rank = payload?.rank ?? null;
  const bestTimeMs = payload?.bestTimeMs ?? null;

  const endXp = Math.max(0, Number(currentXP) || 0);
  const startXp = isPreview ? endXp : Math.max(0, endXp - xp);
  const targetXp = isPreview ? endXp + xp : endXp;

  const copy = useMemo(() => buildCopy(rank, firstName, xp), [rank, firstName, xp]);
  const isOpen = open && xp > 0;

  return (
    <AnimatePresence mode="sync">
      {isOpen && (
        <motion.div
          key="ttsp-root"
          className="snc-modal"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-labelledby="ttsp-title"
        >
          <motion.div className="snc-modal__backdrop" variants={backdropVariants} onClick={onClose} />

          <motion.div className="snc-modal__frame" variants={frameVariants} initial="hidden" animate="visible" exit="exit">
            <motion.div className="snc-modal__glow" aria-hidden variants={glowVariants} />

            <div className="snc-modal__card">
              <div className="snc-confetti" aria-hidden>
                {CONFETTI.map((c, i) => (
                  <motion.span
                    key={i}
                    className="snc-confetti__bit"
                    style={{
                      left: c.left, top: c.top, background: c.color, width: c.size, height: c.size,
                      borderRadius: c.round ? '50%' : '2px',
                    }}
                    initial={{ opacity: 0, scale: 0, y: 12, rotate: c.rot - 40 }}
                    animate={{
                      opacity: [0, 1, 0.9], scale: [0.4, 1.25, 1], y: [12, -4, 0],
                      rotate: [c.rot - 40, c.rot + 12, c.rot],
                    }}
                    transition={{ duration: 0.7, delay: 0.12 + c.delay * 0.55, ease: [0.22, 1, 0.36, 1] }}
                  />
                ))}
              </div>

              <motion.div className="snc-modal__body" variants={staggerParent} initial="hidden" animate="visible">
                <motion.div
                  variants={itemVariants}
                  style={{ fontSize: '3.2rem', lineHeight: 1, margin: '4px auto 8px', position: 'relative', zIndex: 1 }}
                >
                  {copy.emoji}
                </motion.div>

                <motion.h2 id="ttsp-title" className="snc-modal__title" variants={itemVariants}>
                  Congratulations
                </motion.h2>
                <motion.p className="snc-modal__msg" variants={itemVariants}>
                  {copy.msg}
                </motion.p>
                <motion.p className="snc-modal__sub" variants={itemVariants}>
                  {bestTimeMs ? `Your best time: ${formatSprintTime(bestTimeMs)}` : copy.sub}
                </motion.p>

                <motion.div className="snc-modal__xp-badge" variants={badgeVariants}>
                  <span className="snc-modal__xp-plus">+</span>
                  <span className="snc-modal__xp-num">{xp}</span>
                  <span className="snc-modal__xp-unit">XP</span>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <XpCountUp key={`${startXp}-${targetXp}-${isOpen}`} from={startXp} to={targetXp} bonus={xp} />
                </motion.div>

                <motion.button
                  type="button"
                  className="snc-modal__cta"
                  onClick={onClose}
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

function buildCopy(rank, firstName, xp) {
  const n = (firstName || '').trim();
  const hey = n ? `Hey ${n}` : 'Hey';

  if (rank === 1) {
    return { emoji: '🥇', msg: `${hey}! You finished 1st in this week's Times Table Sprint!`, sub: `That's +${xp} XP — amazing speed!` };
  }
  if (rank === 2) {
    return { emoji: '🥈', msg: `${hey}! You finished 2nd in this week's Times Table Sprint!`, sub: `+${xp} XP — so close to the top!` };
  }
  if (rank === 3) {
    return { emoji: '🥉', msg: `${hey}! You finished 3rd in this week's Times Table Sprint!`, sub: `+${xp} XP — great run!` };
  }
  return { emoji: '⚡️', msg: `${hey}! Nice work finishing this week's Times Table Sprint!`, sub: `+${xp} XP for taking part.` };
}

function XpCountUp({ from, to, bonus }) {
  const mv = useMotionValue(from);
  const display = useTransform(mv, (v) => Math.round(v).toLocaleString());
  const [shown, setShown] = useState(String(Math.round(from)));

  useEffect(() => {
    mv.set(from);
    const controls = animate(mv, to, { duration: 1.35, delay: 0.55, ease: [0.22, 1, 0.36, 1] });
    const unsub = display.on('change', (v) => setShown(v));
    return () => { controls.stop(); unsub(); };
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

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, transition: { duration: 0.28, ease: [0.4, 0, 1, 1], delay: 0.04 } },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
};

const frameVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.86, rotate: -1.2, filter: 'blur(6px)' },
  visible: {
    opacity: 1, y: 0, scale: 1, rotate: 0, filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 380, damping: 22, mass: 0.85, opacity: { duration: 0.22 }, filter: { duration: 0.28 } },
  },
  exit: { opacity: 0, y: -18, scale: 0.92, rotate: 0.6, filter: 'blur(4px)', transition: { duration: 0.32, ease: [0.4, 0, 0.2, 1] } },
};

const glowVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: [0, 0.85, 0.55], scale: [0.7, 1.08, 1], transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 } },
  exit: { opacity: 0, scale: 0.85, transition: { duration: 0.22 } },
};

const staggerParent = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.14 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 420, damping: 26 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.45, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 460, damping: 16, delay: 0.08 } },
};

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
