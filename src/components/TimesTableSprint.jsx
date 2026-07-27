import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../context/ProfileContext';
import SprintStartView from './sprint/SprintStartView';
import SprintQuizView from './sprint/SprintQuizView';
import SprintResultView from './sprint/SprintResultView';
import {
  generateSprintQuestions, subscribeSprintMeta, readCachedSprintMeta,
  fetchMySprintResult, fetchSprintRank, submitSprintRun, markSprintIntroSeen,
} from '../services/timesTableSprintService';
import { getSprintWeekId, getMsUntilWeeklyReset } from '../utils/sprintWeek';
import './sprint/sprint.css';

/**
 * Weekly Times Table Sprint.
 *
 * Step machine mirrors DailyChallenge: start → quiz → result. The tab is
 * locked during a run (setIsLocked) so a student cannot navigate away
 * mid-sprint and leave a half-finished timer behind.
 */
const TimesTableSprint = ({ onBack, setIsLocked, onQuizActiveChange }) => {
  const { user, isAdmin } = useAuth();
  const { profile } = useProfile();
  const uid = user?.uid;

  const weekId = useMemo(() => getSprintWeekId(), []);
  const [step, setStep] = useState('start');
  const [meta, setMeta] = useState(() => readCachedSprintMeta(weekId) || { top5: [] });
  const [myResult, setMyResult] = useState(null);
  const [myRank, setMyRank] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [runOutcome, setRunOutcome] = useState(null);
  const [msUntilReset, setMsUntilReset] = useState(() => getMsUntilWeeklyReset());
  const [saving, setSaving] = useState(false);

  // Latest meta for submitSprintRun's "could this change the top 5?" check,
  // without making the submit callback depend on every leaderboard update.
  const metaRef = useRef(meta);
  useEffect(() => { metaRef.current = meta; }, [meta]);

  // One listener on one small doc: Firestore only bills when the top 5 moves.
  useEffect(() => subscribeSprintMeta(weekId, setMeta), [weekId]);

  // The countdown is pure local arithmetic — no reads to keep it ticking.
  useEffect(() => {
    const id = setInterval(() => setMsUntilReset(getMsUntilWeeklyReset()), 1000);
    return () => clearInterval(id);
  }, []);

  // Own standing: one point read plus one count aggregation, on entry only.
  useEffect(() => {
    if (!uid || isAdmin) return; // the teacher has no row of their own
    let cancelled = false;
    (async () => {
      const result = await fetchMySprintResult(weekId, uid);
      if (cancelled) return;
      setMyResult(result);
      if (result?.bestTimeMs != null) {
        const rank = await fetchSprintRank(weekId, Number(result.bestTimeMs));
        if (!cancelled) setMyRank(rank);
      }
    })();
    return () => { cancelled = true; };
  }, [uid, weekId, isAdmin]);

  useEffect(() => () => setIsLocked?.(false), [setIsLocked]);

  // Clears the dashboard card's "New" badge the first time the page opens —
  // not once a run finishes, since just looking at it counts as "found it".
  useEffect(() => { if (!isAdmin) markSprintIntroSeen(uid); }, [uid, isAdmin]);

  // Hide the floating FlameBuddy coach while a timed run is on screen — same
  // "hidden during active quiz" contract App.jsx already uses for exam mode.
  useEffect(() => {
    onQuizActiveChange?.(step === 'quiz');
    return () => onQuizActiveChange?.(false);
  }, [step, onQuizActiveChange]);

  const handleStart = useCallback(() => {
    setQuestions(generateSprintQuestions(profile?.year));
    setRunOutcome(null);
    setStep('quiz');
    setIsLocked?.(true);
  }, [profile?.year, setIsLocked]);

  const handleFinish = useCallback(async ({ timeMs, wrongCount }) => {
    setIsLocked?.(false);
    setSaving(true);
    const rankBefore = myRank;
    setStep('result');
    // Show the raw time immediately; the rank fills in once the write lands.
    setRunOutcome({ timeMs, wrongCount, bestTimeMs: timeMs, rankBefore, rankAfter: null });

    // The teacher can play, but their time must never enter the students'
    // competition — it would sit at #1 on every student's dashboard.
    if (isAdmin) {
      setRunOutcome({ timeMs, wrongCount, bestTimeMs: timeMs, rankBefore: null, rankAfter: null, practiceOnly: true });
      setSaving(false);
      return;
    }

    try {
      const outcome = await submitSprintRun({
        userId: uid,
        profile,
        timeMs,
        wrongCount,
        weekId,
        currentMeta: metaRef.current,
      });
      if (outcome.meta) setMeta(outcome.meta);

      const rankAfter = await fetchSprintRank(weekId, outcome.bestTimeMs);
      setMyRank(rankAfter);
      setMyResult((prev) => ({
        ...(prev || {}),
        bestTimeMs: outcome.bestTimeMs,
        attemptsCount: outcome.attemptsCount,
      }));
      setRunOutcome({
        timeMs,
        wrongCount,
        improved: outcome.improved,
        bestTimeMs: outcome.bestTimeMs,
        previousBestMs: outcome.previousBestMs,
        rankBefore,
        rankAfter,
      });
    } catch (err) {
      console.warn('[ttsprint] run save failed:', err?.code || err);
      // The student still sees their time; only the ranking is unavailable.
      setRunOutcome({ timeMs, wrongCount, bestTimeMs: timeMs, rankBefore, rankAfter: null, saveFailed: true });
    } finally {
      setSaving(false);
    }
  }, [uid, profile, weekId, myRank, setIsLocked, isAdmin]);

  const top5 = Array.isArray(meta?.top5) ? meta.top5 : [];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="app-page">
      {step !== 'quiz' && (
        <button
          type="button"
          onClick={onBack}
          className="tts-shell"
          style={{
            display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none',
            color: '#64748b', fontWeight: 700, cursor: 'pointer', padding: '0 0 14px', fontFamily: 'inherit',
          }}
        >
          <ArrowLeft size={18} /> Back
        </button>
      )}

      <AnimatePresence mode="wait">
        {step === 'start' && (
          <motion.div
            key="start"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <SprintStartView
              year={profile?.year}
              myBestTimeMs={myResult?.bestTimeMs != null ? Number(myResult.bestTimeMs) : undefined}
              myRank={myRank}
              attemptsCount={myResult?.attemptsCount}
              top5={top5}
              myUserId={uid}
              msUntilReset={msUntilReset}
              practiceOnly={isAdmin}
              onStart={handleStart}
            />
          </motion.div>
        )}

        {step === 'quiz' && (
          <motion.div
            key="quiz"
            className="tts-shell"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            <SprintQuizView questions={questions} onFinish={handleFinish} />
          </motion.div>
        )}

        {step === 'result' && runOutcome && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <SprintResultView
              {...runOutcome}
              top5={top5}
              myUserId={uid}
              onPlayAgain={handleStart}
              onExit={() => setStep('start')}
            />
            {saving && (
              <p className="tts-shell tts-empty" style={{ fontSize: '0.8rem' }}>
                Saving your time…
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TimesTableSprint;
