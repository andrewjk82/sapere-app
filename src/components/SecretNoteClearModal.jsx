import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  dismissSecretNoteClearCelebration,
  peekSecretNoteClearCelebration,
} from '../services/secretNoteBonusService';
import './SecretNoteClearModal.css';

/**
 * Ghibli-inspired celebration card when a student earned the midnight
 * Secret-Note-clear bonus. Celebration payload is localStorage only.
 * `forcePayload` — teacher design preview (React state, no race with events).
 */
export default function SecretNoteClearModal({
  uid,
  firstName = '',
  forcePayload = null,
  onForceDismiss = null,
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

  const copy = useMemo(() => buildCopy(payload, firstName), [payload, firstName]);

  const close = () => {
    if (forcePayload) {
      onForceDismiss?.();
    }
    dismissSecretNoteClearCelebration(uid);
    setPayload(null);
  };

  return (
    <AnimatePresence>
      {payload && Number(payload.xp) > 0 && (
        <motion.div
          className="snc-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="snc-title"
        >
          <motion.div
            className="snc-modal__backdrop"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="snc-modal__card"
            initial={{ opacity: 0, y: 36, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            {/* Soft floating orbs — watercolor sky feel */}
            <div className="snc-modal__orb snc-modal__orb--a" aria-hidden />
            <div className="snc-modal__orb snc-modal__orb--b" aria-hidden />
            <div className="snc-modal__orb snc-modal__orb--c" aria-hidden />

            <div className="snc-modal__clouds" aria-hidden>
              <span className="snc-cloud snc-cloud--1" />
              <span className="snc-cloud snc-cloud--2" />
              <span className="snc-cloud snc-cloud--3" />
            </div>

            <div className="snc-modal__body">
              {/* Flame avatar — talks with bounce + speech bubble */}
              <div className="snc-modal__stage">
                <motion.div
                  className="snc-flame"
                  animate={{
                    y: [0, -8, 0, -5, 0],
                    rotate: [0, -3, 2, -2, 0],
                    scale: [1, 1.04, 1, 1.03, 1],
                  }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <svg className="snc-flame__svg" viewBox="0 0 80 100" aria-hidden>
                    <defs>
                      <linearGradient id="sncOuter" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="55%" stopColor="#fb923c" />
                        <stop offset="100%" stopColor="#fde68a" />
                      </linearGradient>
                      <linearGradient id="sncInner" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#fef3c7" />
                        <stop offset="100%" stopColor="#fffbeb" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M40 8 C52 28 68 36 68 56 C68 74 56 90 40 94 C24 90 12 74 12 56 C12 36 28 28 40 8 Z"
                      fill="url(#sncOuter)"
                    />
                    <path
                      d="M40 38 C46 48 52 52 52 62 C52 72 46 80 40 82 C34 80 28 72 28 62 C28 52 34 48 40 38 Z"
                      fill="url(#sncInner)"
                      opacity="0.95"
                    />
                    {/* soft cocoa eyes */}
                    <circle cx="32" cy="58" r="3.2" fill="#4a2a10" />
                    <circle cx="48" cy="58" r="3.2" fill="#4a2a10" />
                    <circle cx="31" cy="57" r="1.1" fill="#fff8e8" />
                    <circle cx="47" cy="57" r="1.1" fill="#fff8e8" />
                    {/* smile */}
                    <path d="M34 68 Q40 73 46 68" fill="none" stroke="#4a2a10" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
                  </svg>
                  <div className="snc-flame__glow" />
                </motion.div>

                <motion.div
                  className="snc-speech"
                  initial={{ opacity: 0, scale: 0.8, x: -8 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.25, type: 'spring', stiffness: 260, damping: 18 }}
                >
                  <div className="snc-speech__eyebrow">{copy.eyebrow}</div>
                  <h2 id="snc-title" className="snc-speech__title">{copy.title}</h2>
                  <p className="snc-speech__msg">{copy.msg}</p>
                  <p className="snc-speech__sub">{copy.sub}</p>
                </motion.div>
              </div>

              <motion.div
                className="snc-xp"
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 320, damping: 14 }}
              >
                <span className="snc-xp__plus">+</span>
                <span className="snc-xp__num">{payload.xp}</span>
                <span className="snc-xp__label">XP</span>
              </motion.div>

              <motion.button
                type="button"
                className="snc-modal__cta"
                onClick={close}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
              >
                Thanks, Flame! ✨
              </motion.button>
            </div>

            <div className="snc-modal__grass" aria-hidden />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function buildCopy(payload, firstName) {
  const n = (firstName || '').trim();
  const hey = n ? `Hey ${n}` : 'Hey';
  const xp = Number(payload?.xp) || 10;
  const dailyOnly = payload?.dailyOnly;
  const both = payload?.claimDaily && payload?.claimCalc;

  if (dailyOnly || (!payload?.claimCalc && payload?.claimDaily)) {
    return {
      eyebrow: 'Midnight check-in',
      title: 'You cleared the board!',
      msg: `${hey}! Too good — keep going just like this.`,
      sub: `Zero Secret Notes left at last night’s check. I’m tossing you +${xp} XP. Sparkle mode: on.`,
    };
  }
  if (both) {
    return {
      eyebrow: 'Midnight check-in',
      title: 'Both notebooks sparkling!',
      msg: `${hey}! Daily and Calculation Secret Notes — empty. Chef’s kiss.`,
      sub: `That’s +${xp} XP for the clean sweep. Stay this sharp tomorrow too!`,
    };
  }
  if (payload?.claimCalc) {
    return {
      eyebrow: 'Midnight check-in',
      title: 'Calculation notebook clear!',
      msg: `${hey}! No calc mistakes hanging around. Love that.`,
      sub: `+${xp} XP for the empty calc Secret Note. Keep the streak kind and clean.`,
    };
  }
  return {
    eyebrow: 'Midnight check-in',
    title: 'Daily notebook clear!',
    msg: `${hey}! Not a single Secret Note left. That’s the good habit.`,
    sub: `+${xp} XP for keeping it empty through the night. Proud of you!`,
  };
}
