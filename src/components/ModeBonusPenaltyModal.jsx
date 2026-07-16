import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';
import { PenLine, AlertTriangle } from 'lucide-react';
import { clearModeBonusPenaltyNotice } from '../services/modeReviewService';
import { FlameBuddyAvatar } from './FlameBuddy';
import './FlameBuddy.css';
import './ModeBonusPenaltyModal.css';

/**
 * Student-facing modal when a teacher strips Challenge/Extreme mode bonus XP.
 * Shows XP count-down animation + working-out reminder.
 * Notice lives on users/{uid}.modeBonusPenaltyNotice until dismissed.
 */
export default function ModeBonusPenaltyModal({
  uid,
  firstName = '',
  notice = null,
  currentXP = 0,
  onDismissed,
}) {
  // After dismiss, hide until a different notice key appears (or profile clears).
  const [dismissedKey, setDismissedKey] = useState('');
  const noticeKey = notice
    ? `${notice.date || ''}|${notice.createdAt || ''}|${notice.amount || 0}`
    : '';

  const amount = Math.max(0, Number(notice?.amount) || 0);
  const open = Boolean(notice && amount > 0 && noticeKey && noticeKey !== dismissedKey);

  // Prefer notice snapshot of XP after deduct; fall back to live profile.
  const endXp = Number.isFinite(Number(notice?.xpAfter))
    ? Math.max(0, Number(notice.xpAfter))
    : Math.max(0, Number(currentXP) || 0);
  const startXp = Number.isFinite(Number(notice?.xpBefore))
    ? Math.max(0, Number(notice.xpBefore))
    : endXp + amount;

  const copy = useMemo(() => {
    const name = firstName || 'there';
    const mode = notice?.modeLabel || 'Challenge';
    const type = notice?.typeLabel || 'practice';
    const date = notice?.date || '';
    return {
      title: 'Mode bonus removed',
      subtitle: `Hey ${name} — your teacher adjusted your XP`,
      detail: notice?.message
        || 'Your working out was incomplete. From next week, write full working out on every question.',
      meta: [mode, type, date].filter(Boolean).join(' · '),
      amount,
    };
  }, [notice, firstName, amount]);

  const dismiss = async () => {
    if (noticeKey) setDismissedKey(noticeKey);
    try {
      if (uid) await clearModeBonusPenaltyNotice(uid);
    } catch (err) {
      console.warn('[ModeBonusPenalty] clear notice failed:', err?.code || err);
    }
    onDismissed?.();
  };

  return (
    <AnimatePresence mode="sync">
      {open && (
        <motion.div
          key={`mbp-${noticeKey}`}
          className="mbp-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="mbp-title"
        >
          <motion.div
            className="mbp-modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          <motion.div
            className="mbp-modal__frame"
            initial={{ opacity: 0, scale: 0.9, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ type: 'spring', stiffness: 380, damping: 28 }}
          >
            <div className="mbp-modal__card">
              <div className="mbp-modal__avatar" aria-hidden>
                <FlameBuddyAvatar mood="thinking" />
              </div>

              <div className="mbp-badge">
                <AlertTriangle size={14} />
                XP adjustment
              </div>

              <h2 id="mbp-title" className="mbp-title">{copy.title}</h2>
              <p className="mbp-subtitle">{copy.subtitle}</p>

              <XpCountdown key={noticeKey} start={startXp} end={endXp} delta={amount} />

              {copy.meta && <p className="mbp-meta">{copy.meta}</p>}

              <div className="mbp-message">
                <div className="mbp-message__icon">
                  <PenLine size={18} />
                </div>
                <p className="mbp-message__text">
                  {copy.detail.split('\n').map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              {notice?.teacherNote ? (
                <p className="mbp-teacher-note">
                  Teacher note: “{notice.teacherNote}”
                </p>
              ) : null}

              <button type="button" className="mbp-cta" onClick={dismiss}>
                Got it — I&apos;ll write proper working out
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function XpCountdown({ start, end, delta }) {
  const mv = useMotionValue(start);
  const display = useTransform(mv, (v) => Math.round(v).toLocaleString());
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    mv.set(start);
    const controls = animate(mv, end, {
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.45,
      onComplete: () => {
        if (!cancelled) setDone(true);
      },
    });
    const t = setTimeout(() => {
      if (!cancelled) setDone(true);
    }, 1900);
    return () => {
      cancelled = true;
      controls.stop();
      clearTimeout(t);
    };
  }, [start, end, mv]);

  return (
    <div className="mbp-xp">
      <div className="mbp-xp__label">Total XP</div>
      <motion.div
        className="mbp-xp__value"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ delay: 0.4, duration: 1.2 }}
      >
        <motion.span>{display}</motion.span>
      </motion.div>
      <motion.div
        className="mbp-xp__delta"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        −{delta} mode bonus
      </motion.div>
      {done && (
        <motion.div
          className="mbp-xp__done"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Bonus removed
        </motion.div>
      )}
    </div>
  );
}
