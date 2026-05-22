import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Check, Flag, ChevronLeft, ChevronRight, Clock, 
  Trophy, Lightbulb, AlertTriangle, TrendingUp, Target,
  CheckCircle2, XCircle
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { db } from '../firebase/config';
import { 
  doc, getDoc, setDoc, collection, getDocs, 
  query, where, addDoc, serverTimestamp, onSnapshot, runTransaction,
  orderBy, limit
} from 'firebase/firestore';
import { generateQuestion, getQuestionTargets } from '../services/questionGenerator';
import { generateCalculationSet } from '../services/calculationGenerator';
import { localCache } from '../services/localCacheService';
import { generateLearningRecommendations } from '../utils/analyticsUtils';
import MathView, { toDisplayText } from './MathView';
import {
  fetchOrCreateDailyAssignment,
  prepareNextDailyAssignment,
  markDailyAssignmentCompleted,
  markDailyAssignmentStarted,
  getAssignedChapters,
  getDailyAssignmentCacheKey,
} from '../services/dailyAssignmentService';

// Sub-components
import ChallengeStartView from './challenge/ChallengeStartView';
import ChallengeQuizView from './challenge/ChallengeQuizView';
import ChallengeResultView from './challenge/ChallengeResultView';
import ChallengeReviewView from './challenge/ChallengeReviewView';
import SecretNoteView from './challenge/SecretNoteView';

// Secret Notebook (local-only mistake review)
import { addMistakes, canGrade, getSyncSnapshot, getNoteCount, getDueCount } from '../utils/secretNote';

// Utilities
import {
  CHALLENGE_YEAR,
  CHALLENGE_BLUEPRINT,
  CHALLENGE_CHAPTER_ID,
  CALC_ENGINE_VERSION,
  MAX_HISTORY_PER_TYPE,
  getChallengeBootCacheKey,
  getChallengeBootMetaId,
  getManualQuestionCacheKey,
  applyChallengeStatus,
  getChallengeStatusState,
  writeChallengeStatusMeta,
  getTodayChallengeStatus,
  mergeChallengeBootCache,
  pickWeightedDifficulty,
  summarizeResults,
  summarizeByKey,
  adjustDifficultyMix,
  notifyTeacherChallengeCompleted,
  updateAdminDailySummary,
  pruneOldChallengeStats,
  createSessionSeed,
  correctQuestionAnswer,
  getEarnedXp,
  getChallengeMaxXp,
  getWorkingOutPages,
  normalizeMix,
  formatHistoryDate,
  getOptions,
  getOptionText,
  getOptionImage,
} from '../utils/challengeUtils';

const KEYBOARD_ACTIVITY_GRACE_MS = 8000;
const VIEWPORT_ACTIVITY_GRACE_MS = 4000;

const isEditableElement = (target) =>
  Boolean(target?.closest?.('input, textarea, select, [contenteditable="true"]')) ||
  ['INPUT', 'TEXTAREA', 'SELECT'].includes(target?.tagName);

const DailyChallenge = ({ onBack, setIsLocked }) => {
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();
  const [step, setStep] = useState('start');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [todayCompleted, setTodayCompleted] = useState(false);
  const [abandonedToday, setAbandonedToday] = useState(false);
  const [calcCompletedToday, setCalcCompletedToday] = useState(false);
  const [calcAbandonedToday, setCalcAbandonedToday] = useState(false);
  const [isFinishing, setIsFinishing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [todayStatusReady, setTodayStatusReady] = useState(false);
  const [history, setHistory] = useState([]);
  const [studentProfile, setStudentProfile] = useState(null);
  const [dailyStats, setDailyStats] = useState([]);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [viewMode, setViewMode] = useState('challenge');
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerResults, setAnswerResults] = useState([]);
  const [chapterProgress, setChapterProgress] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [workingOutByIdx, setWorkingOutByIdx] = useState({}); // questionIdx -> { workingOut, workingOutPages }
  const [isReporting, setIsReporting] = useState(false);
  const [reportedQuestion, setReportedQuestion] = useState(null);
  const [reportMessage, setReportMessage] = useState('');
  const [subAnswers, setSubAnswers] = useState({});
  const [questionComments, setQuestionComments] = useState([]); // per-question student comments for teacher
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [workingOutPreview, setWorkingOutPreview] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [autoTransitionTimer, setAutoTransitionTimer] = useState(null);
  const canvasRef = useRef(null);
  const [isSubmittingCanvas, setIsSubmittingCanvas] = useState(false);
  const quizStartTimeRef = useRef(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(null);
  const [analyticsRecs, setAnalyticsRecs] = useState(null);
  const [countdown, setCountdown] = useState(0);
  // 'correct' | 'wrong' | 'pending' | null — brief pastel flash on the quiz
  // view right after grading. Cleared when the next question starts.
  const [flash, setFlash] = useState(null);
  const [challengeType, setChallengeType] = useState('daily');
  const [secretNoteKind, setSecretNoteKind] = useState(null);
  const [warnings, setWarnings] = useState(0);
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [calcSessionMeta, setCalcSessionMeta] = useState(null);
  const [questionStartTime, setQuestionStartTime] = useState(null);
  // historyLoaded tracks whether we've ever fetched history — used to
  // preload data right after quiz ends so Review list is ready immediately.
  const [historyLoaded, setHistoryLoaded] = useState(false);
  const answerInputRef = useRef(null);
  const sessionReviewCountRef = useRef(0);
  const sessionReportCountRef = useRef(0);
  // Always-current ref so the anti-cheat effect doesn't capture a stale finishQuiz closure.
  const finishQuizRef = useRef(null);
  const keyboardActivityAtRef = useRef(0);
  const viewportActivityAtRef = useRef(0);

  const markKeyboardActivity = useCallback(() => {
    keyboardActivityAtRef.current = Date.now();
  }, []);

  const markViewportKeyboardActivity = useCallback(() => {
    viewportActivityAtRef.current = Date.now();
  }, []);

  const hasRecentKeyboardActivity = useCallback(() => {
    const now = Date.now();
    return (
      isEditableElement(document.activeElement) ||
      now - keyboardActivityAtRef.current < KEYBOARD_ACTIVITY_GRACE_MS ||
      now - viewportActivityAtRef.current < VIEWPORT_ACTIVITY_GRACE_MS
    );
  }, []);

  const resetSessionAttentionCounts = () => {
    sessionReviewCountRef.current = 0;
    sessionReportCountRef.current = 0;
  };

  const markSessionReviewRequested = () => {
    sessionReviewCountRef.current += 1;
  };

  const markSessionReportSubmitted = () => {
    sessionReportCountRef.current += 1;
  };

  // window.innerWidth is read on every render intentionally — no React dep exists for resize.
  // Memoizing these with [] would freeze them at mount time, which is worse.
  const viewportWidth = window.innerWidth;
  const isMobile = viewportWidth < 768;
  const isTabletCanvasLayout = viewportWidth >= 768 && viewportWidth < 1100;

  const currentQuestion = useMemo(() => questions[currentIdx] || null, [questions, currentIdx]);

  const assignedYears = useMemo(
    () => Array.isArray(studentProfile?.assignedYear)
      ? studentProfile.assignedYear
      : [studentProfile?.assignedYear || studentProfile?.year || CHALLENGE_YEAR],
    [studentProfile?.assignedYear, studentProfile?.year]
  );
  const assignedYear = assignedYears[0];

  const isGraphSketchQuestion = currentQuestion?.type === 'graph_sketch' || currentQuestion?.requiresManualGrading === true;
  // The working-out sketch board now shows for ALL year levels:
  //  - graph_sketch questions always (even on mobile) so the image can be graded
  //  - Basic Calculation challenges always (even on mobile) so students can work out
  //  - every other question on non-mobile devices (split-screen layout)
  const showSplitScreen = Boolean(currentQuestion) && (
    isGraphSketchQuestion ||
    challengeType === 'calc' ||
    !isMobile
  );
  const showSideCanvas = showSplitScreen && !isTabletCanvasLayout && !isMobile;

  const getQuestionCount = (type) => type === 'calc' ? (studentProfile?.calcQuestionCount || 10) : (studentProfile?.dailyQuestionCount || 10);
  const TOTAL_QUESTIONS = questions.length || getQuestionCount(challengeType);

  // Memoize: each sub-question is worth 1 point; regular questions are worth 1 point
  const totalPossibleScore = useMemo(() => {
    const sum = questions.reduce((acc, q) => {
      const subCount = Array.isArray(q?.subQuestions) ? q.subQuestions.length : 0;
      return acc + (subCount > 0 ? subCount : 1);
    }, 0);
    return sum || TOTAL_QUESTIONS;
  }, [questions, TOTAL_QUESTIONS]);

  const hasCalculationTest = studentProfile?.calculationEnabled !== false;



  // Anti-Cheat: Detect Focus Loss
  useEffect(() => {
    if (step !== 'quiz') return;

    const handleFocusLost = () => {
      if (hasRecentKeyboardActivity()) return;
      setWarnings(w => w + 1);
      showToast("Please do not leave the challenge window! Switching tabs or apps is not allowed during the challenge.", 'warning');
    };

    const handleVisibilityChange = () => {
      if (document.hidden) handleFocusLost();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleFocusLost);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleFocusLost);
    };
  }, [step, hasRecentKeyboardActivity, showToast]);

  useEffect(() => {
    if (step !== 'quiz') return undefined;

    const onInputActivity = (e) => {
      if (isEditableElement(e.target)) markKeyboardActivity();
    };
    const onViewportResize = () => {
      if (hasRecentKeyboardActivity()) markViewportKeyboardActivity();
    };

    document.addEventListener('focusin', onInputActivity);
    document.addEventListener('focusout', onInputActivity);
    document.addEventListener('input', onInputActivity);
    window.visualViewport?.addEventListener('resize', onViewportResize);

    return () => {
      document.removeEventListener('focusin', onInputActivity);
      document.removeEventListener('focusout', onInputActivity);
      document.removeEventListener('input', onInputActivity);
      window.visualViewport?.removeEventListener('resize', onViewportResize);
    };
  }, [step, markKeyboardActivity, markViewportKeyboardActivity, hasRecentKeyboardActivity]);

  const learningInsights = useMemo(() => {
    if (dailyStats.length === 0) return [];

    const topicMistakes = {};
    const topicTotals = {};
    const topicLabels = {};

    dailyStats.forEach(stat => {
      // Prefer topicStats (always present in the main doc) over answerResults
      // which may only exist in the detail_snapshot subcollection for older records.
      if (stat.topicStats && Object.keys(stat.topicStats).length > 0) {
        Object.entries(stat.topicStats).forEach(([topicKey, data]) => {
          if (!topicKey || topicKey === 'undefined') return;
          topicLabels[topicKey] = data.label || topicKey.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          topicTotals[topicKey] = (topicTotals[topicKey] || 0) + (data.total || 0);
          topicMistakes[topicKey] = (topicMistakes[topicKey] || 0) + ((data.total || 0) - (data.correct || 0));
        });
      } else {
        // Fallback: use slim answerResults saved on the stat doc (new records only)
        const results = stat.answerResults || [];
        results.forEach((result, idx) => {
          const question = stat.questions?.[idx] || {};
          const topicKey = result.topicId || question.topicId || result.type || question.type || 'general';
          const topicLabel = result.topicTitle || question.topicTitle || topicKey.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          topicLabels[topicKey] = result.topicCode ? `${result.topicCode} ${topicLabel}` : topicLabel;
          topicTotals[topicKey] = (topicTotals[topicKey] || 0) + 1;
          if (!result.correct) topicMistakes[topicKey] = (topicMistakes[topicKey] || 0) + 1;
        });
      }
    });

    const insights = Object.keys(topicTotals)
      .filter(topic => topicTotals[topic] > 0)
      .map(topic => ({
        type: topicLabels[topic] || topic,
        errorRate: (topicMistakes[topic] || 0) / topicTotals[topic] * 100,
      }))
      .filter(insight => insight.errorRate > 30) // Only show if error rate > 30%
      .sort((a, b) => b.errorRate - a.errorRate)
      .slice(0, 3); // Top 3 problem areas

    return insights;
  }, [dailyStats]);



  // Local-only status boot. Challenge buttons must not spend Firestore reads
  // just to decide whether today's attempts are available.
  useEffect(() => {
    if (!user?.uid) return;
    let cancelled = false;
    const today = new Date().toLocaleDateString('en-CA');
    const cacheKey = getChallengeBootCacheKey(user.uid);
    const cached = localCache.get(cacheKey);
    const localBoot = cached?.date === today
      ? cached
      : {
          date: today,
          todayCompleted: false,
          abandonedToday: false,
          calcCompletedToday: false,
          calcAbandonedToday: false,
          dailyStatus: 'open',
          calcStatus: 'open',
          studentProfile: cached?.studentProfile || {},
          chapterProgress: cached?.chapterProgress ?? null,
        };

    setTodayCompleted(Boolean(localBoot.todayCompleted));
    setAbandonedToday(Boolean(localBoot.abandonedToday));
    setCalcCompletedToday(Boolean(localBoot.calcCompletedToday));
    setCalcAbandonedToday(Boolean(localBoot.calcAbandonedToday));
    setTodayStatusReady(true);
    if (localBoot.studentProfile) setStudentProfile(localBoot.studentProfile);
    if (localBoot.chapterProgress !== undefined) setChapterProgress(localBoot.chapterProgress);
    localCache.set(cacheKey, { ...localBoot, savedAt: Date.now() });

    const fetchData = async () => {
      try {
        const nextBoot = {
          ...localBoot,
          studentProfile: localBoot.studentProfile || {},
          chapterProgress: localBoot.chapterProgress ?? null,
        };
        let shouldFetchProfile = !localBoot.studentProfile || Object.keys(localBoot.studentProfile).length === 0;

        if (shouldFetchProfile) {
          const profileSnap = await getDoc(doc(db, 'users', user.uid));
          if (cancelled) return;
          nextBoot.studentProfile = profileSnap.exists() ? profileSnap.data() : {};
        }

        setStudentProfile(nextBoot.studentProfile);

        const assignedYears = Array.isArray(nextBoot.studentProfile.assignedYear)
          ? nextBoot.studentProfile.assignedYear
          : [nextBoot.studentProfile.assignedYear || nextBoot.studentProfile.year || CHALLENGE_YEAR];
        const assignedYear = assignedYears[0];
        try {
          const shouldFetchProgress = localBoot.chapterProgress === undefined;
          if (shouldFetchProgress) {
            const progressSnap = await getDoc(doc(db, 'users', user.uid, 'chapterProgress', `${String(assignedYear).replace(' ', '_')}_daily`));
            if (cancelled) return;
            nextBoot.chapterProgress = progressSnap.exists() ? progressSnap.data() : null;
          }
          setChapterProgress(nextBoot.chapterProgress);
          // Merge only profile/progress into the CURRENT cache so that any
          // reset status already applied by the onSnapshot listener is preserved.
          const latestCache = localCache.get(cacheKey) || {};
          localCache.set(cacheKey, { ...latestCache, studentProfile: nextBoot.studentProfile, chapterProgress: nextBoot.chapterProgress, savedAt: Date.now() });
        } catch (e) {
          console.warn('progress meta fetch failed (non-fatal):', e?.code || e);
          const latestCache = localCache.get(cacheKey) || {};
          localCache.set(cacheKey, { ...latestCache, studentProfile: nextBoot.studentProfile, chapterProgress: nextBoot.chapterProgress, savedAt: Date.now() });
        }
      } catch (err) {
        console.error("Error fetching challenge data:", err);
      }
    };
    fetchData();
    return () => {
      cancelled = true;
    };
  }, [user?.uid]);

  // Re-fetch the student profile from Firestore and refresh local caches.
  // Called only when a curriculum change is detected (teacher updated it, or
  // a test just finished) — NOT on every app load — to keep Firestore reads low.
  const refreshStudentProfile = useCallback(async (newProfileVersion) => {
    if (!user?.uid) return;
    try {
      const profileSnap = await getDoc(doc(db, 'users', user.uid));
      if (!profileSnap.exists()) return;
      const freshProfile = profileSnap.data();
      setStudentProfile(freshProfile);
      // Update boot cache with the fresh profile + applied profileVersion.
      const bootKey = getChallengeBootCacheKey(user.uid);
      const bootCache = localCache.get(bootKey) || {};
      localCache.set(bootKey, {
        ...bootCache,
        studentProfile: freshProfile,
        profileVersion: newProfileVersion || bootCache.profileVersion || Date.now(),
        savedAt: Date.now(),
      });
      // Invalidate today's cached daily assignment so it regenerates with the
      // new curriculum (the stored doc is also re-checked via curriculumSignature).
      const today = new Date().toLocaleDateString('en-CA');
      localCache.remove(getDailyAssignmentCacheKey(user.uid, today));
      return freshProfile;
    } catch (e) {
      console.warn('refreshStudentProfile failed (non-fatal):', e?.code || e);
      return null;
    }
  }, [user?.uid]);

  useEffect(() => {
    if (!user?.uid) return undefined;
    const cacheKey = `sapere-cache:${getChallengeBootCacheKey(user.uid)}`;
    const applyCachedStatus = () => {
      const today = new Date().toLocaleDateString('en-CA');
      const cached = localCache.get(getChallengeBootCacheKey(user.uid));
      if (cached?.date !== today) return;
      setTodayCompleted(Boolean(cached.todayCompleted));
      setAbandonedToday(Boolean(cached.abandonedToday));
      setCalcCompletedToday(Boolean(cached.calcCompletedToday));
      setCalcAbandonedToday(Boolean(cached.calcAbandonedToday));
    };

    // ── Realtime Boot Record (sync_meta) Listener ──
    // Ensures teacher-initiated resets are reflected immediately on the student's phone.
    const today = new Date().toLocaleDateString('en-CA');
    const bootDocId = getChallengeBootMetaId(user.uid, today);
    const unsubBoot = onSnapshot(doc(db, 'sync_meta', bootDocId), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        const currentCache = localCache.get(getChallengeBootCacheKey(user.uid)) || {};

        // ── Teacher-initiated curriculum update detection ──
        // The teacher app bumps `profileVersion` in sync_meta whenever it
        // changes a student's curriculum. When we see a newer value than the
        // one we last applied, re-fetch the profile (one read) instead of
        // re-fetching on every app load.
        const serverProfileVersion = Number(data.profileVersion || 0);
        if (serverProfileVersion > 0 && serverProfileVersion > Number(currentCache.profileVersion || 0)) {
          refreshStudentProfile(serverProfileVersion);
        }

        // If the server says 'open' but we have 'abandoned'/'completed' locally, update it.
        const serverDaily = data.status?.daily || 'open';
        const serverCalc = data.status?.calc || 'open';
        
        // Robust YYYY-MM-DD check to avoid cross-day sync issues if device time is slightly off
        const currentTodayStr = new Date().toLocaleDateString('en-CA');
        if (today !== currentTodayStr) {
           console.log('[sync_meta] Date changed, skipping stale sync.');
           return;
        }

        // Use per-type reset timestamps so resetting one type doesn't accidentally unlock the other
        const serverDailyResetTime = data.dailyResetAt ? new Date(data.dailyResetAt).getTime() : (data.resetAt ? new Date(data.resetAt).getTime() : 0);
        const serverCalcResetTime = data.calcResetAt ? new Date(data.calcResetAt).getTime() : (data.resetAt ? new Date(data.resetAt).getTime() : 0);
        // Compare against the last reset timestamp we already applied (not savedAt, which is
        // updated on every app load and would be newer than the teacher's reset if the student
        // opened the app after the reset, causing the reset to be silently ignored).
        const cachedDailyResetAt = currentCache.dailyResetAt || 0;
        const cachedCalcResetAt = currentCache.calcResetAt || 0;
        const hasNewerDailyReset = serverDailyResetTime > cachedDailyResetAt;
        const hasNewerCalcReset = serverCalcResetTime > cachedCalcResetAt;
        // The teacher reset writes in two steps: setDoc (adds resetAt timestamp) then updateDoc
        // (sets status.calc = 'open'). The first snapshot caches the timestamp so the second
        // snapshot sees serverCalcResetTime === cachedCalcResetAt → hasNewerCalcReset = false,
        // which would incorrectly keep the local 'abandoned' status. We treat a matching non-zero
        // reset timestamp as "this reset was acknowledged — trust the server's current status."
        const dailyResetAlreadyApplied = serverDailyResetTime > 0 && serverDailyResetTime === cachedDailyResetAt;
        const calcResetAlreadyApplied = serverCalcResetTime > 0 && serverCalcResetTime === cachedCalcResetAt;

        const finalDailyStatus = (serverDaily === 'open' && (currentCache.dailyStatus === 'completed' || currentCache.dailyStatus === 'abandoned') && !hasNewerDailyReset && !dailyResetAlreadyApplied)
          ? (currentCache.dailyStatus || 'open')
          : serverDaily;

        const finalCalcStatus = (serverCalc === 'open' && (currentCache.calcStatus === 'completed' || currentCache.calcStatus === 'abandoned') && !hasNewerCalcReset && !calcResetAlreadyApplied)
          ? (currentCache.calcStatus || 'open')
          : serverCalc;

        const patch = {
          date: today,
          dailyStatus: finalDailyStatus,
          calcStatus: finalCalcStatus,
          todayCompleted: finalDailyStatus === 'completed',
          abandonedToday: finalDailyStatus === 'abandoned',
          calcCompletedToday: finalCalcStatus === 'completed',
          calcAbandonedToday: finalCalcStatus === 'abandoned',
          dailyResetAt: hasNewerDailyReset ? serverDailyResetTime : cachedDailyResetAt,
          calcResetAt: hasNewerCalcReset ? serverCalcResetTime : cachedCalcResetAt,
          savedAt: currentCache.savedAt || 0,
        };

        // Only update if something actually changed to avoid infinite flush cycles
        if (JSON.stringify(patch) !== JSON.stringify(currentCache)) {
           localCache.set(getChallengeBootCacheKey(user.uid), patch);
           applyCachedStatus();
        }
      }
    }, (err) => {
      console.warn('[DailyChallenge] Boot listener failed:', err);
    });

    const handleStorage = (event) => {
      if (!event || event.key === cacheKey) applyCachedStatus();
    };
    window.addEventListener('storage', handleStorage);
    window.addEventListener('sapere-challenge-reset-applied', handleStorage);
    return () => {
      unsubBoot();
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('sapere-challenge-reset-applied', handleStorage);
    };
  }, [user?.uid, refreshStudentProfile]);

  // ── Challenge history loader ──
  // One-shot getDocs (NOT a realtime listener) — past challenge records change
  // rarely, so a live subscription would bill reads continuously for nothing.
  // Fetched when entering the start/history screens and after finishQuiz.
  // Teacher-initiated resets still arrive in realtime via the sync_meta
  // listener above — that path is untouched.
  const fetchHistory = useCallback(async ({ deriveStatus = true } = {}) => {
    if (!user?.uid) return;
    const today = new Date().toLocaleDateString('en-CA');
    try {
      const [dailySnap, calcSnap] = await Promise.all([
        getDocs(query(
          collection(db, 'users', user.uid, 'daily_stats'),
          orderBy('timestamp', 'desc'),
          limit(MAX_HISTORY_PER_TYPE),
        )),
        getDocs(query(
          collection(db, 'users', user.uid, 'calc_stats'),
          orderBy('timestamp', 'desc'),
          limit(MAX_HISTORY_PER_TYPE),
        )),
      ]);
      const dailyData = dailySnap.docs.map(d => ({ id: d.id, statCollection: 'daily_stats', ...d.data() }));
      const calcData = calcSnap.docs.map(d => ({ id: d.id, statCollection: 'calc_stats', ...d.data() }));
      const merged = [...dailyData, ...calcData]
        .sort((a, b) => new Date(b.timestamp || 0) - new Date(a.timestamp || 0))
        .slice(0, 30);
      setHistory(merged);
      // dailyStats (used by learning-insights) reuses the same fetch
      setDailyStats(dailyData);
      setHistoryLoaded(true);

      // Reconcile today's completion state from the fetched records.
      // Skipped right after finishQuiz (deriveStatus:false) — finishQuiz has
      // already set the correct local state.
      if (deriveStatus) {
        const todayDaily = dailyData.find(item => item.id === today);
        const todayCalc = calcData.find(item => item.id === today);
        const cachedBoot = localCache.get(getChallengeBootCacheKey(user.uid));
        const dailyWasReset = cachedBoot?.date === today && cachedBoot.dailyStatus === 'open';
        const calcWasReset = cachedBoot?.date === today && cachedBoot.calcStatus === 'open';

        if (dailyWasReset && !todayDaily) {
          setTodayCompleted(false);
          setAbandonedToday(false);
        } else if (todayDaily) {
          const completed = Boolean(todayDaily.completed);
          setTodayCompleted(completed);
          setAbandonedToday(!completed);
        } else if (cachedBoot?.date === today && cachedBoot.todayCompleted === false && cachedBoot.abandonedToday === false) {
          setTodayCompleted(false);
          setAbandonedToday(false);
        }

        if (calcWasReset && !todayCalc) {
          setCalcCompletedToday(false);
          setCalcAbandonedToday(false);
        } else if (todayCalc) {
          const completed = Boolean(todayCalc.completed);
          setCalcCompletedToday(completed);
          setCalcAbandonedToday(!completed);
        } else if (cachedBoot?.date === today && cachedBoot.calcCompletedToday === false && cachedBoot.calcAbandonedToday === false) {
          setCalcCompletedToday(false);
          setCalcAbandonedToday(false);
        }
        if (!dailyWasReset && !calcWasReset && (todayDaily || todayCalc)) {
          const statusPatch = {
            date: today,
            ...(todayDaily ? {
              dailyStatus: todayDaily.completed ? 'completed' : 'abandoned',
              todayCompleted: Boolean(todayDaily.completed),
              abandonedToday: !todayDaily.completed,
            } : {}),
            ...(todayCalc ? {
              calcStatus: todayCalc.completed ? 'completed' : 'abandoned',
              calcCompletedToday: Boolean(todayCalc.completed),
              calcAbandonedToday: !todayCalc.completed,
            } : {}),
          };
          mergeChallengeBootCache(user.uid, statusPatch);
        }
      }
    } catch (err) {
      console.warn('history fetch failed (non-fatal):', err?.code || err);
    }
  }, [user?.uid]);

  // Load history when entering the start or history screens. Past records
  // change rarely; finishQuiz triggers its own refresh after writing.
  useEffect(() => {
    if (!user?.uid) return;
    if (viewMode === 'history' || step === 'start') {
      fetchHistory({ deriveStatus: step !== 'result' });
    }
  }, [user?.uid, viewMode, step, fetchHistory]);

  // ── Lazy-load detailed snapshots for lightweight calculation records ──
  // The calc parent doc keeps only summary fields; questions, selected answers
  // and per-question result metadata are fetched only when the detail modal opens.
  useEffect(() => {
    if (!selectedChallenge || !user?.uid) return;
    if (!selectedChallenge.hasDetailSnapshot || selectedChallenge.detailSnapshotLoaded) return;
    if (Array.isArray(selectedChallenge.questions) && selectedChallenge.questions.length > 0) return;

    const dateId = selectedChallenge.id || (selectedChallenge.timestamp && new Date(selectedChallenge.timestamp).toLocaleDateString('en-CA'));
    if (!dateId) return;
    const statColName = selectedChallenge.statCollection
      || (selectedChallenge.challengeType === 'calc' ? 'calc_stats' : 'daily_stats');

    let cancelled = false;
    (async () => {
      // Always resolve the loading state so the modal never spins forever
      // when the detail snapshot is missing or the read fails.
      const markLoaded = () => setSelectedChallenge(prev =>
        prev && prev.id === selectedChallenge.id ? { ...prev, detailSnapshotLoaded: true } : prev);
      try {
        const snapshotRef = doc(db, 'users', user.uid, statColName, dateId, 'detail_snapshot', 'main');
        const snap = await getDoc(snapshotRef);
        if (cancelled) return;
        if (!snap.exists()) {
          markLoaded();
          return;
        }
        const data = snap.data();
        setSelectedChallenge(prev => {
          if (!prev || prev.id !== selectedChallenge.id) return prev;
          return {
            ...prev,
            questions: data.questions || [],
            userAnswers: data.userAnswers || [],
            answerResults: data.answerResults || [],
            detailSnapshotLoaded: true,
            detailSnapshotSavedAt: data.savedAt || null,
          };
        });
      } catch (e) {
        console.warn('detail snapshot fetch failed (non-fatal):', e?.code || e);
        if (!cancelled) markLoaded();
      }
    })();

    return () => { cancelled = true; };
  }, [selectedChallenge, user?.uid]);

  // ── Lazy-load working-out images for the open detail view ──
  // Heavy base64 canvas exports live in a sibling subcollection
  // (users/{uid}/{stat_collection}/{date}/working_out/{idx}) so the parent
  // record can stay under Firestore's 1 MB limit. We fetch them on-demand
  // when the user opens a challenge for review.
  useEffect(() => {
    setWorkingOutByIdx({});
    if (!selectedChallenge || !user?.uid) return;
    const results = Array.isArray(selectedChallenge.answerResults) ? selectedChallenge.answerResults : [];
    const indicesNeedingFetch = results
      .map((r, idx) => ({ r, idx }))
      .filter(({ r }) => r && r.hasWorkingOut && !r.workingOut && !(Array.isArray(r.workingOutPages) && r.workingOutPages.length > 0));
    if (!indicesNeedingFetch.length) return;

    const dateId = selectedChallenge.id || (selectedChallenge.timestamp && new Date(selectedChallenge.timestamp).toLocaleDateString('en-CA'));
    if (!dateId) return;
    const statColName = selectedChallenge.statCollection
      || (selectedChallenge.challengeType === 'calc' ? 'calc_stats' : 'daily_stats');

    let cancelled = false;
    (async () => {
      const { getDoc: gd, doc: docFn } = await import('firebase/firestore');
      await Promise.allSettled(
        indicesNeedingFetch.map(async ({ idx }) => {
          try {
            const snap = await gd(docFn(db, 'users', user.uid, statColName, dateId, 'working_out', String(idx)));
            if (!cancelled && snap.exists()) {
              const data = snap.data();
              setWorkingOutByIdx(prev => ({
                ...prev,
                [idx]: { workingOut: data.workingOut || null, workingOutPages: data.workingOutPages || [] },
              }));
            }
          } catch (e) {
            console.warn(`working_out[${idx}] fetch failed (non-fatal):`, e?.code || e);
          }
        })
      );
    })();
    return () => { cancelled = true; };
  }, [selectedChallenge, user?.uid]);

  const startCalculationQuiz = async () => {
    const today = new Date().toLocaleDateString('en-CA');
    if (calcCompletedToday || calcAbandonedToday) {
      showToast("Today's Basic Calculation has already been used. Please try again tomorrow.", 'info');
      return;
    }

    setChallengeType('calc');
    const qCount = getQuestionCount('calc');
    const assignedYears = Array.isArray(studentProfile?.assignedYear) ? studentProfile.assignedYear : [studentProfile?.assignedYear || studentProfile?.year || CHALLENGE_YEAR];
    const assignedYear = assignedYears[0];
    const assignedChapters = Array.isArray(studentProfile?.assignedChapters) ? studentProfile.assignedChapters : [];
    const calcTopics = assignedChapters.filter(id => id.startsWith('calc-'));
    
    const timeLimit = studentProfile?.calcTimeLimit || 30;
    const combinedQs = generateCalculationSet(calcTopics, qCount, assignedYear, timeLimit);
    const sessionMeta = {
      engineVersion: CALC_ENGINE_VERSION,
      generationMode: 'local-random',
      seed: createSessionSeed(),
      startedAt: new Date().toISOString(),
    };
    
    const sessionId = today;
    setCurrentSessionId(sessionId);
    setCalcSessionMeta(sessionMeta);
    resetSessionAttentionCounts();

    setQuestions(combinedQs);
    setUserAnswers(new Array(qCount).fill(null));
    setAnswerResults(new Array(qCount).fill(null));
    setCurrentIdx(0);
    setScore(0);

    // --- Firebase Lock (Method 2) ---
    // We write the 0-point record BEFORE starting.
    if (user?.uid) {
      setLoading(true);
      try {
        const now = new Date();
        const startRecord = {
          completed: false,
          abandoned: true,
          score: 0,
          total: qCount,
          challengeType: 'calc',
          timestamp: now.toISOString(),
          date: today,
          dateLabel: now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
          questionCount: qCount,
          engineVersion: sessionMeta.engineVersion,
          generationMode: sessionMeta.generationMode,
          seed: sessionMeta.seed,
        };
        await setDoc(doc(db, 'users', user.uid, 'calc_stats', today), startRecord, { merge: true });
        await writeChallengeStatusMeta(user.uid, today, 'calc', 'abandoned');
        await updateAdminDailySummary({
          userId: user.uid,
          date: today,
          challengeType: 'calc',
          score: 0,
          total: qCount,
          studentProfile,
          user,
        }).catch(e => console.warn('Admin summary pre-write failed:', e));
      } catch (err) {
        console.error("Start-up Firebase lock failed:", err);
        showToast("Connection failed. Please check your internet and try again.", 'error');
        setLoading(false);
        return;
      }
    }

    quizStartTimeRef.current = Date.now();
    setElapsedSeconds(null);
    setStep('quiz');
    setupQuestion(combinedQs[0]);
    if (setIsLocked) setIsLocked(true);
    setLoading(false);
    setCalcAbandonedToday(true);
    mergeChallengeBootCache(user?.uid, {
      date: today,
      calcStatus: 'abandoned',
      calcCompletedToday: false,
      calcAbandonedToday: true,
      savedAt: Date.now()
    });
  };

  const startDailyQuiz = async () => {
    try {
      setChallengeType('daily');
      const qCount = getQuestionCount('daily');
      setLoading(true);
      const today = new Date().toLocaleDateString('en-CA');
      const assignment = await fetchOrCreateDailyAssignment({
        uid: user?.uid,
        studentProfile: {
          ...(studentProfile || {}),
          difficultyMix: chapterProgress?.difficultyMix,
        },
        dateKey: today,
        questionCount: qCount,
      });
      const combinedQs = (assignment.questions || []).map(correctQuestionAnswer);
      if (combinedQs.length === 0) {
        throw new Error('No daily assignment questions were generated.');
      }
      resetSessionAttentionCounts();

      setQuestions(combinedQs);
      setUserAnswers(new Array(combinedQs.length).fill(null));
      setAnswerResults(new Array(combinedQs.length).fill(null));
      setCurrentIdx(0);
      setScore(0);

      // --- Firebase Lock (Method 2) ---
      if (user?.uid) {
        const now = new Date();
        const startRecord = {
          completed: false,
          abandoned: true,
          score: 0,
          total: combinedQs.length,
          challengeType: 'daily',
          timestamp: now.toISOString(),
          date: today,
          dateLabel: now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
          questionCount: combinedQs.length,
          assignmentVersion: assignment.version || null
        };
        await setDoc(doc(db, 'users', user.uid, 'daily_stats', today), startRecord, { merge: true });
        await writeChallengeStatusMeta(user.uid, today, 'daily', 'abandoned');
        await markDailyAssignmentStarted(user.uid, today).catch(() => {});
        await updateAdminDailySummary({
          userId: user.uid,
          date: today,
          challengeType: 'daily',
          score: 0,
          total: combinedQs.length,
          studentProfile,
          user,
        }).catch(e => console.warn('Admin summary pre-write failed:', e));
      }

      setStep('quiz');
      setupQuestion(combinedQs[0]);
      if (setIsLocked) setIsLocked(true);
      setLoading(false);
      setAbandonedToday(true);
      mergeChallengeBootCache(user?.uid, {
        date: today,
        dailyStatus: 'abandoned',
        todayCompleted: false,
        abandonedToday: true,
        savedAt: Date.now()
      });
    } catch (error) {
      console.error("Critical error in startDailyQuiz:", error);
      const detail = error?.message ? ` (${error.message})` : '';
      showToast(`Failed to start challenge${detail}. Please check your assigned curriculum or try again later.`, 'error');
      setLoading(false);
    }
  };

  const setupQuestion = (q) => {
    setTimeLeft(q.timeLimit || 30);
    setQuestionStartTime(Date.now());
    setSelectedOption(null);
    setSelectedOptionIdx(null);
    setIsCorrect(null);
    setShowHint(false);
    // Clear the canvas for the new question if it exists
    if (canvasRef.current) {
      try { canvasRef.current.clear(); } catch(e) {}
    }

    // Shuffle multiple-choice options.
    // For isManual questions the answer is stored as an option index ("0","1"…).
    // We normalise it to the option text before shuffling so text-matching still works.
    const opts = getOptions(q);
    if (opts.length > 1 && q.type !== 'short_answer' && q.type !== 'graph_sketch' && !q.subQuestions?.length) {
      let normalizedAnswer = q.answer;
      if (q.isManual) {
        const answerIdx = parseInt(String(q.answer), 10);
        if (!isNaN(answerIdx) && opts[answerIdx] !== undefined) {
          normalizedAnswer = getOptionText(opts[answerIdx]);
        }
      }
      // Fisher-Yates shuffle
      const indices = opts.map((_, i) => i);
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      const shuffled = indices.map(i => opts[i]);
      setShuffledOptions(shuffled);
      // Patch the in-memory question so handleAnswer text-matching works correctly
      q._shuffledAnswer = normalizedAnswer;
    } else {
      setShuffledOptions(opts);
    }
  };

  // Timer logic
  useEffect(() => {
    if (step !== 'quiz' || (selectedOption !== null && selectedOptionIdx !== null) || !questionStartTime) return;
    
    const timeLimit = (questions[currentIdx]?.timeLimit || 30) * 1000;
    const endTime = questionStartTime + timeLimit;

    const timer = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, Math.ceil((endTime - now) / 1000));
      
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        handleAnswer(null, null); // Time's up
      }
    }, 100); // Check more frequently for smooth UI
    
    return () => clearInterval(timer);
  }, [step, selectedOption, questionStartTime, currentIdx]);

  // Prevent accidental navigation
  useEffect(() => {
    if ((step === 'quiz' || step === 'feedback') && !isReporting) {
      const handleBeforeUnload = (e) => {
        e.preventDefault();
        e.returnValue = '';
      };
      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }
  }, [step, isReporting]);

  // Strict termination: end quiz only for real app/tab switching.
  // iPadOS can emit blur, pagehide, and visibility events while the math
  // answer keyboard is opening or closing, so keyboard activity is ignored.
  useEffect(() => {
    if (isAdmin || step !== 'quiz') return undefined;

    let terminationTimer = null;
    const clearTerminationTimer = () => {
      if (terminationTimer) {
        window.clearTimeout(terminationTimer);
        terminationTimer = null;
      }
    };

    const handleCheatingAttempt = () => {
      if (hasRecentKeyboardActivity()) return;
      if (document.visibilityState !== 'hidden') {
        clearTerminationTimer();
        return;
      }
      clearTerminationTimer();
      terminationTimer = window.setTimeout(() => {
        if (document.visibilityState !== 'hidden' || hasRecentKeyboardActivity()) return;
        showToast("⚠️ Challenge Terminated: Screen switching or screenshots detected.", 'error', 5000);
        finishQuizRef.current?.(true);
      }, 500);
    };
    document.addEventListener('visibilitychange', handleCheatingAttempt);

    const handleImmediateTermination = () => {
      if (hasRecentKeyboardActivity()) return;
      finishQuizRef.current?.(true);
    };
    window.addEventListener('pagehide', handleImmediateTermination);

    return () => {
      clearTerminationTimer();
      document.removeEventListener('visibilitychange', handleCheatingAttempt);
      window.removeEventListener('pagehide', handleImmediateTermination);
    };
  }, [step, isAdmin, showToast, hasRecentKeyboardActivity]);

  const handleReportSubmit = async () => {
    if (!reportMessage.trim()) return;
    setIsSubmittingReport(true);
    try {
      const currentQ = reportedQuestion || questions[currentIdx];
      const reportedIndex = reportedQuestion
        ? questions.findIndex(q => String(q?.id || '') === String(reportedQuestion?.id || ''))
        : currentIdx;
      const answerIndex = reportedIndex >= 0 ? reportedIndex : currentIdx;
      const studentAnswer = userAnswers[answerIndex] ?? selectedOption ?? '';
      const answerResult = answerResults[answerIndex] || null;
      await addDoc(collection(db, 'reports'), {
        studentId: user.uid,
        studentName: user.displayName || user.email || 'Student',
        questionId: currentQ?.id || '',
        questionIndex: answerIndex,
        studentAnswer,
        answerResult,
        questionData: {
          id: currentQ?.id || '',
          question: currentQ?.question || currentQ?.text || '',
          answer: String(currentQ?.answer ?? ''),
          type: currentQ?.type || '',
          chapterId: currentQ?.chapterId || '',
          chapterTitle: currentQ?.chapterTitle || '',
          topicId: currentQ?.topicId || '',
          topicCode: currentQ?.topicCode || '',
          topicTitle: currentQ?.topicTitle || '',
          isManual: true,
          options: (getOptions(currentQ)).map(opt =>
            typeof opt === 'object' ? { text: String(opt.text || '') } : String(opt ?? '')
          )
        },
        message: reportMessage,
        status: 'open',
        createdAt: serverTimestamp()
      });
      markSessionReportSubmitted();
      setIsReporting(false);
      setReportedQuestion(null);
      setReportMessage('');
      showToast("Report submitted! We will review it.", 'success');
    } catch (error) {
      console.error("Report error:", error);
      showToast("Failed to submit report.", 'error');
    } finally {
      setIsSubmittingReport(false);
    }
  };

  const closeReportModal = () => {
    setIsReporting(false);
    setReportedQuestion(null);
    setReportMessage('');
  };

  const renderReportModal = () => (
    <AnimatePresence>
      {isReporting && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100001, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} 
            onClick={closeReportModal} 
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(8px)' }} 
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} 
            style={{ position: 'relative', width: '100%', maxWidth: '400px', background: 'white', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', padding: '32px' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 800, color: '#1e293b', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Flag size={20} style={{ color: '#ef4444' }} /> Report Issue
              </h3>
              <button onClick={closeReportModal} style={{ border: 'none', background: '#f1f5f9', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}>
                <X size={18} />
              </button>
            </div>
            <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '16px', lineHeight: 1.5 }}>
              Found a mistake? Tell us what's wrong with this question.
            </p>
            <textarea
              value={reportMessage}
              onChange={(e) => setReportMessage(e.target.value)}
              placeholder="e.g., I got the answer right but it flagged it as wrong."
              style={{ width: '100%', height: '120px', padding: '16px', borderRadius: '16px', border: '2px solid #e2e8f0', outline: 'none', resize: 'none', fontSize: '1rem', color: '#1e293b', marginBottom: '24px' }}
            />
            <button 
              onClick={handleReportSubmit}
              disabled={isSubmittingReport || !reportMessage.trim()}
              style={{ width: '100%', padding: '16px', borderRadius: '16px', border: 'none', background: '#ef4444', color: 'white', fontWeight: 800, fontSize: '1.1rem', cursor: isSubmittingReport || !reportMessage.trim() ? 'not-allowed' : 'pointer', opacity: isSubmittingReport || !reportMessage.trim() ? 0.5 : 1 }}
            >
              {isSubmittingReport ? 'Submitting...' : 'Submit Report'}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const robustNormalize = (str) => {
    if (!str) return '';
    let s = String(str)
      .toLowerCase()
      // Unify superscript / power notation so keypad "²" matches stored "^2".
      .replace(/⁰/g, '^0').replace(/¹/g, '^1').replace(/²/g, '^2').replace(/³/g, '^3')
      .replace(/⁴/g, '^4').replace(/⁵/g, '^5').replace(/⁶/g, '^6')
      .replace(/⁷/g, '^7').replace(/⁸/g, '^8').replace(/⁹/g, '^9')
      .replace(/\^\{([^{}]*)\}/g, '^$1')   // ^{2} -> ^2
      // Unify minus-sign variants (unicode minus / en/em dash) with ASCII "-".
      .replace(/[−–—]/g, '-')
      // Drop explicit multiplication signs so "3*a"/"3·a"/"3×a" == "3a".
      .replace(/\\cdot|\\times|×|·|⋅|∙|\*/g, '')
      .replace(/\\left|\\right/g, '')      // Strip LaTeX sizing wrappers
      .replace(/\$/g, '')                 // Strip math delimiters
      .replace(/[{}]/g, '')               // Strip leftover LaTeX braces
      .replace(/\s+/g, '')                // Remove whitespace
      .replace(/[,.;]/g, '')             // Remove punctuation
      .replace(/\\ge|\\geq|≥/g, '>=')     // Normalize >=
      .replace(/\\le|\\leq|≤/g, '<=')     // Normalize <=
      .replace(/([a-z])>([0-9.-]+)(?:or|\|\|)([a-z])=\2/, '$1>=$2') // x>1orx=1 -> x>=1
      .replace(/([a-z])=([0-9.-]+)(?:or|\|\|)([a-z])>\2/, '$1>=$2') // x=1orx>1 -> x>=1
      .trim();

    // Polynomial term reorder: a plain expression like "3a^2-10ab-8b^2" should
    // match the same terms written in any order. Only applied to expressions
    // with no relation (=,<,>) or division so inequalities/fractions are safe.
    if (s && /[a-z]/.test(s) && !/[=<>/]/.test(s) && /[+-]/.test(s.slice(1))) {
      const body = (s[0] === '+' || s[0] === '-') ? s : '+' + s;
      const terms = body.match(/[+-][^+-]+/g);
      if (terms && terms.join('') === body) {
        s = terms.slice().sort().join('').replace(/^\+/, '');
      }
    }
    return s;
  };

  const parseNumericAnswer = (value) => {
    if (value === null || value === undefined) return null;
    const raw = String(value).trim();
    if (!raw) return null;

    const cleaned = raw
      .replace(/[−–—]/g, '-')
      .replace(/\$/g, '')
      .replace(/,/g, '')
      .replace(/\b(aud|usd|nzd|dollars?|cents?)\b/gi, '')
      .trim();

    if (!/^-?\d+(?:\.\d+)?%?$/.test(cleaned)) return null;
    const isPercent = cleaned.endsWith('%');
    const number = Number(cleaned.replace(/%$/, ''));
    return Number.isFinite(number) ? { number, isPercent } : null;
  };

  const answersMatch = (studentAnswer, expectedAnswer) => {
    const studentNumeric = parseNumericAnswer(studentAnswer);
    const expectedNumeric = parseNumericAnswer(expectedAnswer);

    if (studentNumeric && expectedNumeric && studentNumeric.isPercent === expectedNumeric.isPercent) {
      return Math.abs(studentNumeric.number - expectedNumeric.number) < 0.000001;
    }

    return robustNormalize(studentAnswer) === robustNormalize(expectedAnswer);
  };

  const handleAnswer = async (optionText, optIdx = null) => {
    if (step === 'feedback' || isSubmittingCanvas) return;
    
    const currentQ = questions[currentIdx];
    const isShortAnswer = currentQ?.type === 'short_answer';
    const isGraphSketch = currentQ?.type === 'graph_sketch' || currentQ?.requiresManualGrading === true;
    
    let correct = false;
    let canvasDataUrl = null;
    let canvasPageImages = [];

    // Capture canvas for graph_sketch always, or for any question if split screen is active (Senior Students)
    if (canvasRef.current && (isGraphSketch || (showSplitScreen && canvasRef.current?.hasContent?.()))) {
      try {
        canvasPageImages = await canvasRef.current.exportPageImages?.() || [];
        canvasDataUrl = canvasPageImages[0] || await canvasRef.current.exportImage();
      } catch (err) {
        console.error("Failed to export working out image", err);
      }
    }

    if (isGraphSketch) {
      setIsSubmittingCanvas(true);
      // Graph submissions must carry an image for manual review even when ink
      // detection misses a stroke after recent traffic-saving changes.
      if (!canvasDataUrl && canvasRef.current) {
        try {
          canvasPageImages = await canvasRef.current.exportPageImages?.({ force: true }) || [];
          canvasDataUrl = canvasPageImages[0] || await canvasRef.current.exportImage?.({ force: true });
        } catch (err) {
          console.error("Failed to export graph answer image", err);
        }
      }
      correct = false; // Pending review
    } else if (currentQ?.subQuestions?.length > 0) {
      // Handle sub-questions
      const subResults = currentQ.subQuestions.map((sq, idx) => {
        const userAnswer = (optionText && typeof optionText === 'object') ? optionText[sq.id || idx] : '';
        
        let isSqCorrect = false;
        if (sq.type === 'multiple_choice') {
          isSqCorrect = answersMatch(userAnswer, sq.answer);
        } else {
          isSqCorrect = answersMatch(userAnswer, sq.answer);
        }
        return { id: sq.id || idx, correct: isSqCorrect, answer: userAnswer };
      });
      
      correct = subResults.every(r => r.correct);
      const pointsEarned = subResults.filter(r => r.correct).length;
      
      // Store sub-results in result object for history view
      currentQ.lastSubResults = subResults;
      currentQ.pointsEarned = pointsEarned;
      currentQ.totalPoints = currentQ.subQuestions.length;
      
      if (pointsEarned > 0) {
        setScore(prev => prev + pointsEarned);
      }
    } else if (isShortAnswer) {
      correct = answersMatch(optionText, currentQ.answer);
      if (correct) setScore(prev => prev + 1);
    } else if (currentQ?.type === 'interactive_grid') {
      correct = Array.isArray(optionText) && optionText.length === parseInt(currentQ.answer, 10);
      if (correct) setScore(prev => prev + 1);
    } else {
      // Use _shuffledAnswer (text-normalised) if options were shuffled, else original answer.
      const effectiveAnswer = currentQ._shuffledAnswer !== undefined ? currentQ._shuffledAnswer : currentQ.answer;
      // 1. Text match against (possibly normalised) answer
      const isTextMatch = String(optionText) === String(effectiveAnswer);
      // 2. Fallback index match for non-shuffled isManual questions
      const isIndexMatch = currentQ._shuffledAnswer === undefined && optIdx !== null && String(currentQ.answer) === String(optIdx);

      correct = isTextMatch || isIndexMatch;
      if (correct) setScore(prev => prev + 1);
    }

    if (isGraphSketch) {
      try {
        const gradingEntry = {
          userId: user.uid,
          userName: studentProfile?.name || studentProfile?.displayName || user?.displayName || 'Student',
          userEmail: studentProfile?.email || user?.email || '',
          date: new Date().toLocaleDateString('en-CA'), // Explicit local date for stat lookup
          questionId: currentQ?.id || null,
          questionText: currentQ?.question || currentQ?.text || '',
          answerImage: canvasDataUrl || null,
          answerImages: canvasPageImages || [],
          answerText: !canvasDataUrl ? (typeof optionText === 'string' ? optionText : '') : null,
          status: 'pending',
          submittedAt: serverTimestamp(),
          year: currentQ?.year || CHALLENGE_YEAR,
          chapterTitle: currentQ?.chapterTitle || '',
          topicTitle: currentQ?.topicTitle || '',
          challengeType: challengeType,
          totalQuestions: TOTAL_QUESTIONS,
          correctAnswer: currentQ?.answer || '',
          solution: currentQ?.solution || '',
          requiresManualGrading: currentQ?.requiresManualGrading || true,
        };
        await addDoc(collection(db, 'grading_queue'), gradingEntry);
        markSessionReviewRequested();
      } catch (err) {
        console.error("Failed to submit for review", err);
      } finally {
        setIsSubmittingCanvas(false);
      }
    }

    setSelectedOption(optionText);
    setSelectedOptionIdx(optIdx);
    setIsCorrect(correct);
    
    // Scoring is now handled in the logic above based on sub-questions or individual results
    
    setUserAnswers(prev => {
      const newAnswers = [...prev];
      newAnswers[currentIdx] = optionText;
      return newAnswers;
    });

    setAnswerResults(prev => {
      const newResults = [...prev];
      const pEarned = currentQ?.subQuestions?.length > 0 
        ? (currentQ.pointsEarned || 0)
        : (correct ? 1 : 0);
      const tPoints = currentQ?.subQuestions?.length > 0 
        ? (currentQ.subQuestions.length)
        : 1;

      newResults[currentIdx] = {
        questionId: currentQ?.id || null,
        type: currentQ?.type || 'unknown',
        year: currentQ?.year || CHALLENGE_YEAR,
        chapterId: currentQ?.chapterId || CHALLENGE_CHAPTER_ID,
        chapterTitle: currentQ?.chapterTitle || CHALLENGE_BLUEPRINT?.title || 'Number',
        topicId: currentQ?.topicId || '',
        topicCode: currentQ?.topicCode || '',
        topicTitle: currentQ?.topicTitle || '',
        topicGroup: currentQ?.topicGroup || '',
        generatorType: currentQ?.generatorType || currentQ?.type || 'manual',
        difficulty: currentQ?.difficulty || 'manual',
        selectedAnswer: isGraphSketch ? 'Pending Review' : optionText,
        correct,
        pointsEarned: pEarned,
        totalPoints: tPoints,
        isPending: isGraphSketch,
        isManual: Boolean(currentQ?.isManual),
        workingOut: canvasDataUrl, // Store the handwritten work
        workingOutPages: canvasPageImages,
      };
      return newResults;
    });

    setStep('feedback');
    // Brief pastel flash on the quiz view to give an instant emotional cue.
    setFlash(isGraphSketch ? 'pending' : (correct ? 'correct' : 'wrong'));

    // Auto-advance after 3 seconds for ALL outcomes — feedback is intentionally
    // minimal now (just correct/wrong + countdown). The detailed worked
    // solution lives in the post-quiz Review view, not here.
    const COUNTDOWN_SECONDS = 3;
    setCountdown(COUNTDOWN_SECONDS);
    const interval = setInterval(() => {
      setCountdown(prev => Math.max(0, prev - 1));
    }, 1000);
    const timer = setTimeout(() => {
      clearInterval(interval);
      nextQuestion();
    }, COUNTDOWN_SECONDS * 1000);
    setAutoTransitionTimer({ timer, interval });
  };

  // Clear timer when moving to next manually or component unmounts
  useEffect(() => {
    return () => {
      if (autoTransitionTimer) {
        clearTimeout(autoTransitionTimer.timer);
        clearInterval(autoTransitionTimer.interval);
      }
    };
  }, [autoTransitionTimer]);

  const nextQuestion = async () => {
    if (autoTransitionTimer) {
      clearTimeout(autoTransitionTimer.timer);
      clearInterval(autoTransitionTimer.interval);
      setAutoTransitionTimer(null);
    }
    setCountdown(0);
    setFlash(null);
    setSubAnswers({});

    if (currentIdx < TOTAL_QUESTIONS - 1) {
      const nextIdx = currentIdx + 1;
      setCurrentIdx(nextIdx);
      setupQuestion(questions[nextIdx]);
      setStep('quiz');
    } else {
      await finishQuiz();
    }
  };
  const finishQuiz = async (isAbandoned = false) => {
    if (isFinishing) return;
    // Declared outside try so catch block can safely reference it
    const currentAnswerResults = answerResults || [];
    let actualScore = isAbandoned ? 0 : currentAnswerResults.reduce((acc, r) => acc + (r?.pointsEarned || (r?.correct ? 1 : 0)), 0);
    
    try {
      setIsFinishing(true);
      if (isAbandoned) {
        setAnswerResults(['abandoned']);
      }
      // Calculate elapsed time for result screen
      if (quizStartTimeRef.current) {
        setElapsedSeconds(Math.round((Date.now() - quizStartTimeRef.current) / 1000));
      }
      // Compute learning recommendations from all historical stats
      try {
        const analytics = generateLearningRecommendations(dailyStats, []);
        setAnalyticsRecs(analytics.recommendations);
      } catch (e) {
        console.warn('analytics generation failed (non-fatal):', e);
      }
      // Lock briefly so the auto-update effect in App.jsx can't fire a page
      // reload in the narrow window between quiz end and result render.
      // Release after 1 s — the result screen is fully rendered by then and
      // the student should be free to navigate to other tabs.
      if (setIsLocked) setIsLocked(true);
      setStep('result');
      setTimeout(() => { if (setIsLocked) setIsLocked(false); }, 1000);

      if (user?.uid) {
        const now = new Date();
        const today = now.toLocaleDateString('en-CA'); // Reliable YYYY-MM-DD local date
        const ref = challengeType === 'calc'
          ? doc(db, 'users', user.uid, 'calc_stats', today)
          : doc(db, 'users', user.uid, 'daily_stats', today);
        const assignedYears = Array.isArray(studentProfile?.assignedYear) ? studentProfile.assignedYear : [studentProfile?.assignedYear || studentProfile?.year || CHALLENGE_YEAR];
        const assignedYear = assignedYears[0];
        const assignedChapters = challengeType === 'calc'
          ? (Array.isArray(studentProfile?.assignedChapters) ? studentProfile.assignedChapters.filter(id => id.startsWith('calc-')) : [])
          : getAssignedChapters(studentProfile, assignedYear);
        const assignedTopics = Array.isArray(studentProfile?.assignedTopics) ? studentProfile.assignedTopics : [];
        // Pass hasCalculationTest so a daily-only student earns the full 100 XP
        // (50 XP only applies when the student also has the calculation test).
        const maxXp = getChallengeMaxXp(challengeType, hasCalculationTest);
        const xpEarned = getEarnedXp(actualScore, totalPossibleScore, challengeType, hasCalculationTest);
        const resultStats = summarizeResults(currentAnswerResults);
        const topicStats = summarizeByKey(currentAnswerResults, 'topicId', 'topicTitle');
        const chapterStats = summarizeByKey(currentAnswerResults, 'chapterId', 'chapterTitle');
        const nextDifficultyMix = adjustDifficultyMix(chapterProgress?.difficultyMix, resultStats);
        
        // ── Off-load heavy working-out images to a sibling subcollection ──
        // Firestore docs are limited to 1 MB. Base64-encoded canvas images
        // can easily push a multi-question record past that limit and cause
        // "Quota exceeded" / "INVALID_ARGUMENT" save failures. Save each
        // question's images in its own working_out/{idx} doc and keep only
        // a `hasWorkingOut` flag in the main record.
        const statColName = challengeType === 'calc' ? 'calc_stats' : 'daily_stats';
        const workingOutWrites = [];
        const withoutWorkingOutImages = (result) => {
          if (!result || typeof result !== 'object') return result;
          const next = { ...result };
          delete next.workingOut;
          delete next.workingOutPages;
          return next;
        };
        const slimAnswerResults = currentAnswerResults.map((r, idx) => {
          if (!r) return r;
          if (isAbandoned) {
            return withoutWorkingOutImages(r);
          }
          const pages = Array.isArray(r.workingOutPages) ? r.workingOutPages.filter(Boolean) : [];
          const single = r.workingOut || null;
          const hasImages = single || pages.length > 0;
          if (!hasImages) {
            return withoutWorkingOutImages(r);
          }
          const woRef = doc(db, 'users', user.uid, statColName, today, 'working_out', String(idx));
          workingOutWrites.push(
            setDoc(woRef, {
              questionIdx: idx,
              workingOut: single,
              workingOutPages: pages,
              savedAt: now.toISOString(),
            }).catch(e => console.warn(`working_out[${idx}] save failed (non-fatal):`, e?.code || e))
          );
          const rest = withoutWorkingOutImages(r);
          return { ...rest, hasWorkingOut: true };
        });
        // Best-effort — don't block the main save on these
        Promise.allSettled(workingOutWrites);

        // Also strip any embedded base64 image data that might have leaked into
        // questions/options or userAnswers (defence-in-depth — should never
        // happen, but guarantees the main doc stays small).
        const stripDataUrls = (val) => {
          if (typeof val === 'string') {
            return val.startsWith('data:image/') ? '[image]' : val;
          }
          if (Array.isArray(val)) return val.map(stripDataUrls);
          if (val && typeof val === 'object') {
            const out = {};
            for (const k of Object.keys(val)) out[k] = stripDataUrls(val[k]);
            return out;
          }
          return val;
        };
        const slimQuestions = stripDataUrls(questions || []);
        const slimUserAnswers = stripDataUrls(userAnswers || []);
        const hasWorkingOut = slimAnswerResults.some(r => r?.hasWorkingOut);

        // ── Secret Notebook: capture this session's wrong questions locally ──
        // Question data stays in localStorage only; just a compact count/tag
        // summary is piggy-backed onto the user doc write below (no extra write).
        let secretNoteSync = null;
        if (!isAbandoned) {
          try {
            const noteKind = challengeType === 'calc' ? 'calc' : 'daily';
            const wrongQuestions = (questions || []).filter((q, i) => {
              const r = currentAnswerResults[i];
              return r && typeof r === 'object' && r.correct === false;
            });
            const reviewableWrongQuestions = wrongQuestions.filter(canGrade);
            if (reviewableWrongQuestions.length > 0) {
              // Wrong questions are added to the Secret Note silently — the
              // student stays on the result screen and can open it manually.
              addMistakes(noteKind, user.uid, reviewableWrongQuestions);
            }
            secretNoteSync = getSyncSnapshot(user.uid);
          } catch (e) {
            console.warn('secret note capture failed (non-fatal):', e);
          }
        }
        const activeCalcSessionMeta = challengeType === 'calc'
          ? (calcSessionMeta || {
              engineVersion: CALC_ENGINE_VERSION,
              generationMode: 'local-random',
              seed: createSessionSeed(),
            })
          : null;

        // Strip answer results down to only the fields needed for learningInsights
        // (topicId, topicCode, topicTitle, correct) so the main stat doc stays small.
        const insightResults = slimAnswerResults.map(r => r ? {
          correct: r.correct,
          topicId: r.topicId || '',
          topicCode: r.topicCode || '',
          topicTitle: r.topicTitle || '',
          type: r.type || '',
          difficulty: r.difficulty || '',
        } : null).filter(Boolean);

        const baseRecord = {
          completed: !isAbandoned,
          abandoned: isAbandoned,
          id: today,
          score: actualScore,
          total: totalPossibleScore,
          challengeType,
          maxXp,
          xpEarned,
          year: assignedYear,
          chapterId: assignedChapters.length === 1 ? assignedChapters[0] : 'mixed',
          chapterTitle: assignedChapters.length === 1 ? (questions.find(q => q.chapterId === assignedChapters[0])?.chapterTitle || CHALLENGE_BLUEPRINT?.title || 'Number') : 'Mixed assigned topics',
          assignedChapters,
          assignedTopics,
          timestamp: now.toISOString(),
          dateLabel: now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
          topicStats,
          chapterStats,
          difficultyMixBefore: normalizeMix(chapterProgress?.difficultyMix),
          difficultyMixAfter: nextDifficultyMix,
          answerResults: insightResults, // slim results for Performance Insights
        };
        const record = challengeType === 'calc'
          ? {
              ...baseRecord,
              engineVersion: activeCalcSessionMeta.engineVersion,
              generationMode: activeCalcSessionMeta.generationMode,
              seed: activeCalcSessionMeta.seed,
              questionCount: slimQuestions.length,
              resultCount: slimAnswerResults.length,
              hasDetailSnapshot: !isAbandoned,
              detailAvailable: !isAbandoned,
              hasWorkingOut,
            }
          : {
              ...baseRecord,
              questionCount: slimQuestions.length,
              resultCount: slimAnswerResults.length,
              hasDetailSnapshot: !isAbandoned,
              detailAvailable: !isAbandoned,
              hasWorkingOut,
            };
        const detailSnapshot = !isAbandoned
          ? {
              ...(activeCalcSessionMeta ? {
                engineVersion: activeCalcSessionMeta.engineVersion,
                generationMode: activeCalcSessionMeta.generationMode,
                seed: activeCalcSessionMeta.seed,
              } : {}),
              savedAt: now.toISOString(),
              questions: slimQuestions,
              userAnswers: slimUserAnswers,
              answerResults: slimAnswerResults,
              questionComments: questionComments.length > 0 ? questionComments : [],
            }
          : null;

        // Diagnostic: log payload size — Firestore enforces a 1 048 576 byte limit
        try {
          const bytes = new Blob([JSON.stringify(record)]).size;
          console.log(`[finishQuiz] record size: ${(bytes / 1024).toFixed(1)} KB`);
          if (bytes > 900_000) {
            console.warn('[finishQuiz] record approaching 1 MB Firestore limit');
          }
        } catch {}

        if (!isAbandoned) {
          if (challengeType === 'daily') {
            setTodayCompleted(true);
            setAbandonedToday(false);
          } else if (challengeType === 'calc') {
            setCalcCompletedToday(true);
            setCalcAbandonedToday(false);
          }
        }
        // 1. Save the lightweight challenge stat record first. Detail/working-out
        // saves are best-effort so large payloads never turn completion into a
        // false "Session Ended" state.
        await setDoc(ref, record, { merge: true });
        if (detailSnapshot) {
          try {
            await setDoc(doc(db, 'users', user.uid, statColName, today, 'detail_snapshot', 'main'), detailSnapshot, { merge: true });
          } catch (err) {
            console.warn('detail snapshot save failed (non-critical):', err?.code || err);
            setDoc(ref, {
              detailSaveFailed: true,
              detailAvailable: false,
              detailSaveError: err?.code || err?.message || 'unknown',
            }, { merge: true }).catch(() => {});
          }
        }
        updateAdminDailySummary({
          userId: user.uid,
          date: today,
          challengeType,
          score: actualScore,
          total: totalPossibleScore,
          xpEarned,
          studentProfile,
          user,
        }).catch((err) => console.warn('admin daily summary update failed (non-critical):', err?.code || err));

        // 2. Atomic Update for XP and Progress
        try {
          await runTransaction(db, async (transaction) => {
            const userRef = doc(db, 'users', user.uid);
            const progressRef = doc(db, 'users', user.uid, 'chapterProgress', `${String(assignedYear || 'General').replace(' ', '_')}_daily`);

            const userSnap = await transaction.get(userRef);

            // Update chapter progress
            transaction.set(progressRef, {
              year: assignedYear || 'General',
              chapterId: record.chapterId,
              chapterTitle: record.chapterTitle,
              assignedChapters,
              assignedTopics,
              difficultyMix: nextDifficultyMix,
              lastResultStats: resultStats,
              lastTopicStats: topicStats,
              lastChapterStats: chapterStats,
              lastScore: actualScore,
              lastTotal: totalPossibleScore,
              updatedAt: now.toISOString(),
            }, { merge: true });
            transaction.set(doc(db, 'sync_meta', getChallengeBootMetaId(user.uid, today)), {
              version: Date.now(),
              progressVersion: Date.now(),
              updatedAt: serverTimestamp(),
            }, { merge: true });

            // Update overall XP/Points - Use set with merge for maximum robustness
            const userData = userSnap.data() || {};
            const currentXP = Number(userData.totalXP) || 0;
            const currentCount = Number(userData.challengesCompleted) || 0;

            const newXP = currentXP + xpEarned;
            transaction.set(userRef, {
              totalXP: newXP,
              challengesCompleted: currentCount + 1,
              lastActive: now.toISOString(),
              // Secret Notebook summary for the teacher's student profile.
              ...(secretNoteSync || {}),
            }, { merge: true });

            // 3. Update dedicated Leaderboard collection for efficient global reads
            const leaderboardRef = doc(db, 'leaderboard', user.uid);
            const displayName = studentProfile?.name || studentProfile?.displayName ||
                              (studentProfile?.firstName ? `${studentProfile.firstName} ${studentProfile.lastName || ''}`.trim() : '') ||
                              user?.displayName || 'Student';

            const avatarUrl = studentProfile?.dreamImageUrl || studentProfile?.avatarUrl ||
                             (studentProfile?.avatarStyle && studentProfile?.avatarSeed
                               ? `https://api.dicebear.com/7.x/${studentProfile.avatarStyle}/svg?seed=${encodeURIComponent(studentProfile.avatarSeed)}`
                               : `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.email || displayName || 'sapere')}`);

            transaction.set(leaderboardRef, {
              name: displayName,
              avatarUrl: avatarUrl,
              totalXP: newXP,
              lastUpdated: serverTimestamp(),
              role: userData.role || 'student',
              year: assignedYear || ''
            }, { merge: true });
          });
        } catch (err) {
          console.warn('progress/xp sync failed after challenge save (non-critical):', err?.code || err?.message || err);
          setDoc(ref, {
            progressSyncFailed: true,
            progressSyncError: err?.code || err?.message || 'unknown',
          }, { merge: true }).catch(() => {});
        }

        if (!isAbandoned) {
          const displayName = studentProfile?.name || studentProfile?.displayName ||
            (studentProfile?.firstName ? `${studentProfile.firstName} ${studentProfile.lastName || ''}`.trim() : '') ||
            user?.displayName || user?.email || 'Student';
          notifyTeacherChallengeCompleted({
            studentId: user.uid,
            studentName: displayName,
            challengeType,
            score: actualScore,
            total: totalPossibleScore,
            xpEarned,
            completedAt: now.toISOString(),
            reviewCount: sessionReviewCountRef.current,
            reportCount: sessionReportCountRef.current,
          }).catch((err) => {
            console.warn('Teacher completion notification failed (non-critical):', err?.code || err);
          });
        }

        // --- Local State Updates ---
        pruneOldChallengeStats(user.uid, challengeType === 'calc' ? 'calc_stats' : 'daily_stats').catch(() => {});

        setChapterProgress(prev => ({
          ...(prev || {}),
          difficultyMix: nextDifficultyMix,
          lastResultStats: resultStats,
          lastTopicStats: topicStats,
          lastChapterStats: chapterStats,
        }));
        
        // Refresh history from Firestore now that the new record is written
        // (deriveStatus:false — finishQuiz already set the completion state).
        fetchHistory({ deriveStatus: false }).catch(() => {});
        if (challengeType === 'daily') {
          setTodayCompleted(true);
          setAbandonedToday(false);
        } else if (challengeType === 'calc') {
          setCalcCompletedToday(true);
          setCalcAbandonedToday(false);
          setCalcSessionMeta(null);
        }
        const cacheKey = getChallengeBootCacheKey(user.uid);
        const cachedBoot = localCache.get(cacheKey) || {};
        const nextStatus = {
          daily: challengeType === 'daily' ? 'completed' : (cachedBoot.todayCompleted ? 'completed' : cachedBoot.abandonedToday ? 'abandoned' : 'open'),
          calc: challengeType === 'calc' ? 'completed' : (cachedBoot.calcCompletedToday ? 'completed' : cachedBoot.calcAbandonedToday ? 'abandoned' : 'open'),
        };
        const statusFlags = applyChallengeStatus(nextStatus);
        localCache.set(cacheKey, {
          ...cachedBoot,
          ...statusFlags,
          date: today,
          dailyStatus: nextStatus.daily,
          calcStatus: nextStatus.calc,
          studentProfile,
          chapterProgress: {
            ...(chapterProgress || {}),
            difficultyMix: nextDifficultyMix,
            lastResultStats: resultStats,
            lastTopicStats: topicStats,
            lastChapterStats: chapterStats,
          },
          savedAt: Date.now(),
        });
        writeChallengeStatusMeta(user.uid, today, challengeType, isAbandoned ? 'abandoned' : 'completed')
          .catch((err) => console.warn('challenge status meta update failed (non-critical):', err?.code || err));

        if (challengeType === 'daily') {
          if (!isAbandoned) {
            markDailyAssignmentCompleted(user.uid, today)
              .catch((err) => console.warn('daily assignment completion update failed (non-critical):', err?.code || err));
          }
          
          // --- PROACTIVE GENERATION ---
          // Re-fetch the profile once so any teacher curriculum change made
          // during the test is applied, then pre-build the NEXT daily
          // assignment with the latest curriculum (0 latency next attempt).
          refreshStudentProfile()
            .then((freshProfile) => prepareNextDailyAssignment({
              uid: user.uid,
              studentProfile: freshProfile || studentProfile,
              questionCount: getQuestionCount('daily'),
            }))
            .catch((err) => console.warn('Proactive assignment generation failed (non-critical):', err));
        }
      }
    } catch (err) {
      console.error("Error in finishQuiz:", err);
      showToast(`Save Failed: ${err.message || 'Database error'}. Your score was ${actualScore}/${TOTAL_QUESTIONS}`, 'error');
      setStep('result');
    }
  };
  // Keep ref current so the anti-cheat effect always calls the latest finishQuiz.
  useEffect(() => {
    finishQuizRef.current = finishQuiz;
  }, [finishQuiz]);

  const renderDetailModal = () => {
    if (!selectedChallenge) return null;
    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setSelectedChallenge(null)}
          style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(12px)' }}
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          style={{ position: 'relative', width: '100%', maxWidth: '700px', maxHeight: '85vh', backgroundColor: '#fff', borderRadius: '24px', overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ margin: '0 0 4px', fontSize: '1.5rem', fontWeight: 900 }}>Challenge Details</h2>
              <p style={{ margin: 0, color: '#64748b', fontWeight: 600 }}>{formatHistoryDate(selectedChallenge)} • Score: {selectedChallenge.score || 0}/{selectedChallenge.total || 0}</p>
            </div>
            <button onClick={() => setSelectedChallenge(null)} style={{ background: '#f1f5f9', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#64748b' }}>
              <X size={20} />
            </button>
          </div>

          {selectedChallenge.hasDetailSnapshot && !selectedChallenge.detailSnapshotLoaded && !(Array.isArray(selectedChallenge.questions) && selectedChallenge.questions.length > 0) ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#64748b', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
              <div className="app-spinner" style={{ margin: '0 auto 16px' }}></div>
              <p style={{ margin: 0, fontWeight: 800, fontSize: '1.05rem' }}>Loading details...</p>
            </div>
          ) : Array.isArray(selectedChallenge.questions) && selectedChallenge.questions.length > 0 ? (
            (!selectedChallenge.answerResults || selectedChallenge.answerResults.length === 0) ? (
              <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
                <AlertTriangle size={48} style={{ opacity: 0.2, margin: '0 auto 16px', color: '#ef4444' }} />
                <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: '#ef4444' }}>No Data Available</p>
                <p style={{ margin: '8px 0 0', fontSize: '0.9rem' }}>This challenge was abandoned or refreshed before any questions were answered.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {selectedChallenge.questions.map((q, idx) => {
                  const result = selectedChallenge.answerResults?.[idx];
                  const userAnswer = result?.selectedAnswer ?? (selectedChallenge.userAnswers ? selectedChallenge.userAnswers[idx] : null);
                  const qData = q || questions.find(qq => qq.id === result.questionId);
                  if (!qData) return null;

                  const isCorrect = typeof result?.correct === 'boolean'
                    ? result.correct
                    : String(userAnswer) === String(qData.answer);
                  const questionText = toDisplayText(qData?.text || qData?.question, 'Question text unavailable');
                  const lazyWO = workingOutByIdx[idx];
                  const workingOutPages = getWorkingOutPages(lazyWO ? { ...result, ...lazyWO } : result);
                  
                  return (
                    <div key={idx} style={{ padding: '20px', borderRadius: '16px', background: '#f8fafc', border: '1px solid #e2e8f0', position: 'relative' }}>
                      {qData.isManual && (
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setReportedQuestion(qData);
                            setIsReporting(true);
                          }}
                          style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: '#fff', padding: '6px', borderRadius: '8px', cursor: 'pointer', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', fontWeight: 800, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                        >
                          <Flag size={14} /> REPORT
                        </button>
                      )}
                      <div style={{ fontWeight: 800, marginBottom: '16px', color: '#1e293b', fontSize: '1.05rem', lineHeight: 1.5, paddingRight: qData.isManual ? '80px' : '0' }}>
                        {idx + 1}. <MathView content={questionText} graphData={qData.graphData} />
                      </div>

                      {workingOutPages.length > 0 && (
                        <div style={{ marginBottom: '16px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e2e8f0', background: '#fff' }}>
                          <button
                            onClick={() => setWorkingOutPreview({ pages: workingOutPages, page: 0, title: `Question ${idx + 1} Working Out` })}
                            style={{ width: '100%', padding: '8px 12px', background: '#f8fafc', border: 'none', borderBottom: '1px solid #e2e8f0', fontSize: '0.7rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'left', cursor: 'pointer' }}
                          >
                            Working Out {workingOutPages.length > 1 ? `• ${workingOutPages.length} pages` : '• Click to enlarge'}
                          </button>
                          <button
                            onClick={() => setWorkingOutPreview({ pages: workingOutPages, page: 0, title: `Question ${idx + 1} Working Out` })}
                            style={{ width: '100%', border: 'none', padding: 0, background: '#fff', cursor: 'zoom-in' }}
                          >
                            <img src={workingOutPages[0]} alt="Student Working Out" style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', background: '#fff', display: 'block' }} />
                          </button>
                        </div>
                      )}
                      
                      {qData.subQuestions?.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                          {qData.subQuestions.map((sq, sIdx) => {
                            const sUserAnswer = userAnswer && typeof userAnswer === 'object' ? userAnswer[sq.id || sIdx] : '';
                            const sResult = result?.subResults?.[sIdx] || result?.subResults?.[sq.id];
                            const sIsCorrect = typeof sResult?.correct === 'boolean' ? sResult.correct : String(sUserAnswer) === String(sq.answer);

                            return (
                              <div key={sIdx} style={{ padding: '16px', background: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <div style={{ fontWeight: 700, marginBottom: '8px', color: '#334155' }}>
                                  ({String.fromCharCode(97 + sIdx)}) <MathView content={toDisplayText(sq.text || sq.question)} />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: sIsCorrect ? '#10b981' : '#f43f5e', fontWeight: 700, flexWrap: 'wrap' }}>
                                  {sIsCorrect ? <Check size={16} /> : <X size={16} />}
                                  {sUserAnswer !== undefined && sUserAnswer !== null && sUserAnswer !== ''
                                    ? <MathView content={String(sUserAnswer)} />
                                    : <span>(No Answer)</span>}
                                  {!sIsCorrect && (
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b', marginLeft: '8px' }}>
                                      Correct: <MathView content={String(sq.answer ?? '')} />
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: isCorrect ? '#10b981' : '#f43f5e', fontWeight: 700, flexWrap: 'wrap' }}>
                          {isCorrect ? <Check size={20} /> : <X size={20} />}
                          {userAnswer !== undefined && userAnswer !== null && userAnswer !== '' && typeof userAnswer !== 'object'
                            ? <MathView content={String(userAnswer)} />
                            : <span>(No Answer)</span>}
                          {!isCorrect && (
                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#64748b', marginLeft: '12px' }}>
                              Correct: <MathView content={(() => {
                                if (qData._shuffledAnswer !== undefined) return String(qData._shuffledAnswer);
                                if (qData.type === 'multiple_choice' && qData.isManual) {
                                  const opts = getOptions(qData);
                                  const ai = parseInt(qData.answer, 10);
                                  if (!Number.isNaN(ai) && opts[ai] !== undefined) return String(getOptionText(opts[ai]));
                                }
                                return String(qData.answer ?? '');
                              })()} />
                            </span>
                          )}
                        </div>
                      )}
                      
                      {qData.solution && (
                        <div style={{ marginTop: '16px', padding: '16px', borderRadius: '12px', background: '#e0e7ff', color: '#4338ca', fontSize: '0.9rem', fontWeight: 600 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            <Lightbulb size={16} /> <span style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Solution</span>
                          </div>
                          <MathView content={qData.solution} graphData={qData.graphData} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )
          ) : (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
              <Trophy size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
              <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>Detailed history not available.</p>
              <p style={{ margin: '8px 0 0', fontSize: '0.9rem' }}>This challenge was completed before detailed tracking was enabled.</p>
            </div>
          )}
        </motion.div>
      </div>
    );
  };

  const renderHistoryView = () => (
    <>
      <div className="app-page__header" style={{ marginBottom: '24px' }}>
        <div className="app-page__title">
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button onClick={() => setViewMode('challenge')} className="app-icon-button" style={{ background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', cursor: 'pointer' }}>
              <ChevronLeft size={24} />
            </button>
            <h2>Test History</h2>
          </div>
          <p>Review your past challenges and performance</p>
        </div>
      </div>
      
      <div className="challenge-container" style={{ maxWidth: '600px', margin: '0 auto', width: '100%', paddingBottom: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {history.length > 0 ? history.map((item, idx) => (
            <motion.div 
              key={`${item.statCollection || item.challengeType || 'daily'}-${item.id || idx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="app-panel" 
              onClick={() => setSelectedChallenge(item)}
              style={{ padding: '20px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}
            >
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#1e1b4b', marginBottom: '4px' }}>
                  {item.challengeType === 'calc' ? 'Basic Calculation' : 'Daily Practice'} • {formatHistoryDate(item)}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8' }}>
                  {item.total || 0} Questions • {item.total ? Math.round(((item.score || 0)/item.total)*100) : 0}% Accuracy
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: item.score >= Math.ceil((item.total || 0) * 0.8) ? '#10b981' : item.score >= Math.ceil((item.total || 0) * 0.5) ? '#f59e0b' : '#f43f5e' }}>
                  {item.score || 0}/{item.total || 0}
                </div>
                <div style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6366f1' }}>
                  +{item.xpEarned ?? getEarnedXp(item.score || 0, item.total || 0, item.challengeType || 'daily', hasCalculationTest)} XP
                </div>
              </div>
            </motion.div>
          )) : (
            <div className="app-empty" style={{ padding: '60px 0', background: '#f8fafc', borderRadius: '24px' }}>
              <Trophy size={48} style={{ color: '#cbd5e1', margin: '0 auto 16px', opacity: 0.5 }} />
              <p style={{ fontWeight: 600, color: '#94a3b8', margin: 0 }}>No tests completed yet. Start your first challenge!</p>
            </div>
          )}
        </div>
      </div>
    </>
  );

  const renderWorkingOutPreview = () => {
    if (!workingOutPreview) return null;
    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={() => setWorkingOutPreview(null)}
          style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.88)', backdropFilter: 'blur(10px)' }}
        />
        <motion.div
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          style={{ position: 'relative', width: 'min(94vw, 1100px)', height: 'min(88vh, 820px)', background: '#fff', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 30px 80px rgba(0,0,0,0.25)' }}
        >
          <div style={{ padding: '14px 18px', borderBottom: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', background: '#f8fafc' }}>
            <div style={{ fontWeight: 900, color: '#1e293b' }}>
              {workingOutPreview.title} <span style={{ color: '#64748b', fontWeight: 800 }}>• Page {workingOutPreview.page + 1}/{workingOutPreview.pages.length}</span>
            </div>
            <button onClick={() => setWorkingOutPreview(null)} style={{ border: 'none', background: '#e2e8f0', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#475569' }}>
              <X size={20} />
            </button>
          </div>
          <div style={{ flex: 1, minHeight: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f1f5f9', position: 'relative', padding: '16px' }}>
            {workingOutPreview.pages.length > 1 && (
              <button
                onClick={() => setWorkingOutPreview(prev => ({ ...prev, page: Math.max(0, prev.page - 1) }))}
                disabled={workingOutPreview.page === 0}
                style={{ position: 'absolute', left: '16px', zIndex: 2, width: '44px', height: '44px', borderRadius: '50%', border: 'none', background: workingOutPreview.page === 0 ? '#e2e8f0' : '#fff', color: workingOutPreview.page === 0 ? '#94a3b8' : '#4f46e5', boxShadow: '0 10px 24px rgba(15,23,42,0.12)', cursor: workingOutPreview.page === 0 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <ChevronLeft size={24} />
              </button>
            )}
            <img src={workingOutPreview.pages[workingOutPreview.page]} alt="Working out page" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', background: '#fff', borderRadius: '16px', boxShadow: '0 18px 48px rgba(15,23,42,0.14)' }} />
            {workingOutPreview.pages.length > 1 && (
              <button
                onClick={() => setWorkingOutPreview(prev => ({ ...prev, page: Math.min(prev.pages.length - 1, prev.page + 1) }))}
                disabled={workingOutPreview.page === workingOutPreview.pages.length - 1}
                style={{ position: 'absolute', right: '16px', zIndex: 2, width: '44px', height: '44px', borderRadius: '50%', border: 'none', background: workingOutPreview.page === workingOutPreview.pages.length - 1 ? '#e2e8f0' : '#fff', color: workingOutPreview.page === workingOutPreview.pages.length - 1 ? '#94a3b8' : '#4f46e5', boxShadow: '0 10px 24px rgba(15,23,42,0.12)', cursor: workingOutPreview.page === workingOutPreview.pages.length - 1 ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>
        </motion.div>
      </div>
    );
  };

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  return (
    <div className="app-page">
      <AnimatePresence mode="wait">
        {viewMode === 'history' ? (
          <motion.div 
            key="history-view"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {renderHistoryView()}
          </motion.div>
        ) : (
          <motion.div 
            key="challenge-view"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            <AnimatePresence mode="wait">
              {step === 'start' && (
                <ChallengeStartView
                  key="start"
                  studentProfile={studentProfile}
                  todayStatusReady={todayStatusReady}
                  todayCompleted={todayCompleted}
                  abandonedToday={abandonedToday}
                  calcCompletedToday={calcCompletedToday}
                  calcAbandonedToday={calcAbandonedToday}
                  history={history}
                  onStartDailyQuiz={startDailyQuiz}
                  onStartCalculationQuiz={startCalculationQuiz}
                  onViewHistory={() => setViewMode('history')}
                  onBack={onBack}
                  getQuestionCount={getQuestionCount}
                  getChallengeMaxXp={getChallengeMaxXp}
                  hasCalculationTest={hasCalculationTest}
                  learningInsights={learningInsights}
                  analytics={history.length > 0 ? generateLearningRecommendations(
                    history.filter(s => s.statCollection !== 'calc_stats' && s.challengeType !== 'calc'),
                    history.filter(s => s.statCollection === 'calc_stats' || s.challengeType === 'calc')
                  ) : null}
                  recentHistory={history.slice(0, 5)}
                  isMobile={isMobile}
                  secretNote={{
                    daily: { total: getNoteCount('daily', user?.uid), due: getDueCount('daily', user?.uid) },
                    calc: { total: getNoteCount('calc', user?.uid), due: getDueCount('calc', user?.uid) },
                  }}
                  onOpenSecretNote={(k) => { setSecretNoteKind(k); setStep('secretNote'); }}
                />
              )}

              {(step === 'quiz' || step === 'feedback') && (
                <ChallengeQuizView
                  key="quiz"
                  step={step}
                  questions={questions}
                  currentIdx={currentIdx}
                  TOTAL_QUESTIONS={TOTAL_QUESTIONS}
                  timeLeft={timeLeft}
                  countdown={countdown}
                  flash={flash}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  selectedOptionIdx={selectedOptionIdx}
                  isCorrect={isCorrect}
                  subAnswers={subAnswers}
                  setSubAnswers={setSubAnswers}
                  userAnswers={userAnswers}
                  showHint={showHint}
                  setShowHint={setShowHint}
                  setIsReporting={setIsReporting}
                  isSubmittingCanvas={isSubmittingCanvas}
                  isMobile={isMobile}
                  showSplitScreen={showSplitScreen}
                  showSideCanvas={showSideCanvas}
                  isTabletCanvasLayout={isTabletCanvasLayout}
                  handleAnswer={handleAnswer}
                  nextQuestion={nextQuestion}
                  canvasRef={canvasRef}
                  answerInputRef={answerInputRef}
                  shuffledOptions={shuffledOptions}
                  questionComments={questionComments}
                  setQuestionComments={setQuestionComments}
                />
              )}

              {step === 'result' && (
                <ChallengeResultView
                  key="result"
                  questions={questions}
                  userAnswers={userAnswers}
                  answerResults={answerResults}
                  score={score}
                  totalPossibleScore={totalPossibleScore}
                  TOTAL_QUESTIONS={TOTAL_QUESTIONS}
                  challengeType={challengeType}
                  challengeBlueprint={CHALLENGE_BLUEPRINT}
                  hasCalculationTest={hasCalculationTest}
                  elapsedSeconds={elapsedSeconds}
                  userName={studentProfile?.firstName || studentProfile?.displayName?.split(' ')?.[0] || ''}
                  recommendations={analyticsRecs}
                  onReviewAnswers={() => {
                    // Enter the full-screen Review view with the in-memory
                    // quiz data (questions/userAnswers/answerResults are still
                    // in component state right after the result screen).
                    setStep('review');
                  }}
                  onBack={() => {
                    if (setIsLocked) setIsLocked(false);
                    onBack();
                  }}
                />
              )}

              {step === 'review' && (
                <ChallengeReviewView
                  key="review"
                  questions={questions}
                  userAnswers={userAnswers}
                  answerResults={answerResults}
                  questionComments={questionComments}
                  startIdx={0}
                  isMobile={isMobile}
                  isTabletLayout={isTabletCanvasLayout}
                  onClose={() => setStep('result')}
                />
              )}

              {step === 'secretNote' && secretNoteKind && (
                <SecretNoteView
                  key="secretNote"
                  kind={secretNoteKind}
                  uid={user?.uid}
                  user={user}
                  studentName={studentProfile?.firstName || studentProfile?.displayName?.split(' ')?.[0] || user?.displayName?.split(' ')?.[0] || ''}
                  isMobile={isMobile}
                  onClose={() => { setSecretNoteKind(null); setStep('start'); }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedChallenge && Array.isArray(selectedChallenge.questions) && selectedChallenge.questions.length > 0 ? (
          <ChallengeReviewView
            key={`history-review-${selectedChallenge.id}`}
            questions={selectedChallenge.questions}
            userAnswers={selectedChallenge.userAnswers || []}
            answerResults={selectedChallenge.answerResults || []}
            startIdx={0}
            isMobile={isMobile}
            isTabletLayout={isTabletCanvasLayout}
            onClose={() => setSelectedChallenge(null)}
          />
        ) : selectedChallenge ? (
          // Snapshot is still loading — render the previous lightweight modal
          // so the click feedback isn't lost. Once questions stream in the
          // ChallengeReviewView above takes over.
          renderDetailModal()
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {workingOutPreview && renderWorkingOutPreview()}
      </AnimatePresence>
      {renderReportModal()}
    </div>
  );
};

export default DailyChallenge;
