import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Medal, Award, Trophy, Crown } from 'lucide-react';
import { describeMedal } from '../constants/calcMedals';
import { markMedalsSeen } from '../services/calcProgressService';
import { FlameBuddyAvatar } from './FlameBuddy';
import './FlameBuddy.css';
import './SecretNoteClearModal.css';
import './MedalCelebrationModal.css';

const ICONS = { Medal, Award, Trophy, Crown };

const MedalIcon = ({ name, size, color }) => {
  const Cmp = ICONS[name] || Medal;
  return <Cmp size={size} color={color} strokeWidth={2} />;
};

/**
 * Medal claim celebration — same yellow-frame congrats card as Secret Note clear.
 * Claim still flies the medal toward the shelf, then marks medals seen.
 */
export default function MedalCelebrationModal({ uid, medals, onClose, isPreview = false }) {
  const [open, setOpen] = useState(true);
  const [flying, setFlying] = useState(false);
  const described = useMemo(() => (medals || []).map(describeMedal), [medals]);
  const multi = described.length > 1;
  const primary = described[0];
  const flyRef = useRef(null);

  useEffect(() => {
    if (!medals || medals.length === 0) setOpen(false);
  }, [medals]);

  if (!medals || medals.length === 0) return null;

  const handleClaim = () => {
    if (flying) return;
    setFlying(true);
    // Design QA preview must not write / clear real unseen medals.
    if (uid && !isPreview) markMedalsSeen(uid).catch(() => {});
    setTimeout(() => {
      setOpen(false);
      onClose?.();
    }, 1000);
  };

  const copy = multi
    ? {
        title: 'Congratulations',
        msg: `You earned ${described.length} medals — amazing work!`,
        sub: 'Claim them to pin them on your dashboard shelf.',
      }
    : {
        title: 'Congratulations',
        msg: 'You leveled up — well done!',
        sub: primary
          ? `${primary.stageName || primary.label}${primary.subtitle ? ` · ${primary.subtitle}` : ''}`
          : 'A new medal is ready for your shelf.',
      };

  return (
    <AnimatePresence mode="sync">
      {open && (
        <motion.div
          key="mcm-root"
          className="snc-modal"
          style={{ zIndex: 1500 }}
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mcm-title"
        >
          <motion.div
            className="snc-modal__backdrop"
            variants={backdropVariants}
            onClick={flying ? undefined : handleClaim}
          />

          <motion.div
            className="snc-modal__frame"
            variants={frameVariants}
            initial="hidden"
            animate={flying ? 'flyOut' : 'visible'}
            exit="exit"
          >
            <motion.div className="snc-modal__glow" aria-hidden variants={glowVariants} />

            <div className="snc-modal__card">
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

                <motion.h2 id="mcm-title" className="snc-modal__title" variants={itemVariants}>
                  {copy.title}
                </motion.h2>
                <motion.p className="snc-modal__msg" variants={itemVariants}>
                  {copy.msg}
                </motion.p>
                <motion.p className="snc-modal__sub" variants={itemVariants}>
                  {copy.sub}
                </motion.p>

                {/* Hero medal (single) or compact list (multi) */}
                {multi ? (
                  <motion.div className="mcm-medal-list" variants={itemVariants}>
                    {described.map((m, i) => (
                      <div
                        key={`${m.tier}-${m.stepId || m.stageId || i}`}
                        className="mcm-medal-row"
                        style={{ background: m.pillBg, borderColor: m.pillBorder }}
                      >
                        <div
                          className="mcm-medal-row__icon"
                          style={{
                            background: `linear-gradient(135deg, ${m.bgFrom}, ${m.bgTo})`,
                            borderColor: m.border,
                          }}
                        >
                          <MedalIcon name={m.icon} size={20} color={m.color} />
                        </div>
                        <div style={{ minWidth: 0 }}>
                          <div className="mcm-medal-row__title">{m.title}</div>
                          <div className="mcm-medal-row__sub" style={{ color: m.color }}>
                            {m.subtitle}
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : primary ? (
                  <>
                    <motion.div
                      ref={flyRef}
                      className="mcm-medal-badge"
                      variants={badgeVariants}
                      animate={
                        flying
                          ? { x: 220, y: -280, scale: 0.28, rotate: 360, opacity: 0 }
                          : { scale: 1, opacity: 1, x: 0, y: 0, rotate: 0 }
                      }
                      transition={
                        flying
                          ? { duration: 0.95, ease: [0.45, 0, 0.3, 1] }
                          : { type: 'spring', stiffness: 460, damping: 16 }
                      }
                      style={{
                        background: `linear-gradient(145deg, ${primary.bgFrom}, ${primary.bgTo})`,
                      }}
                    >
                      <div
                        className="mcm-medal-badge__icon-ring"
                        style={{
                          borderColor: primary.border,
                          background: `linear-gradient(135deg, ${primary.bgFrom}, ${primary.bgTo})`,
                          boxShadow: `0 8px 20px ${primary.border}55`,
                        }}
                      >
                        <MedalIcon name={primary.icon} size={36} color={primary.color} />
                      </div>
                      <span className="mcm-medal-badge__tier" style={{ color: primary.color }}>
                        {primary.label}
                      </span>
                    </motion.div>

                    <motion.div className="mcm-meta" variants={itemVariants}>
                      <div className="mcm-meta__label">Medal</div>
                      <div className="mcm-meta__value">{primary.title}</div>
                      <div className="mcm-meta__hint">{primary.subtitle}</div>
                    </motion.div>
                  </>
                ) : null}

                <motion.button
                  type="button"
                  className="snc-modal__cta"
                  onClick={handleClaim}
                  disabled={flying}
                  variants={itemVariants}
                  whileHover={flying ? undefined : { scale: 1.04, y: -2 }}
                  whileTap={flying ? undefined : { scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 420, damping: 22 }}
                >
                  {flying ? 'Claiming…' : multi ? 'Claim all' : 'Claim medal'}
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Motion variants (match Secret Note clear modal) ────────────────────── */

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
  flyOut: {
    opacity: 0,
    y: -12,
    scale: 0.94,
    filter: 'blur(3px)',
    transition: { duration: 0.85, ease: [0.4, 0, 0.2, 1] },
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
