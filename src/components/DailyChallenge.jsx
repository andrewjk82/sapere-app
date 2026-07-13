import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, Flag, ChevronLeft, ChevronRight,
  Trophy, AlertTriangle, Check, Lightbulb, MessageSquare,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { db } from '../firebase/config';
import {
  doc, getDoc, setDoc, deleteDoc, collection, addDoc, getDocs, query, updateDoc, serverTimestamp, runTransaction,
} from 'firebase/firestore';
import { localCache } from '../services/localCacheService';
import { generateCalculationSet } from '../services/calculationGenerator';
import { generateLearningRecommendations } from '../utils/analyticsUtils';
import MathView, { toDisplayText } from './MathView';
import {
  fetchOrCreateDailyAssignment,
  prepareNextDailyAssignment,
  markDailyAssignmentCompleted,
  markDailyAssignmentStarted,
  getAssignedChapters,
} from '../services/dailyAssignmentService';
import { updatePoolAfterQuiz } from '../services/practicePoolService';
import {
  ensureCalcProgress,
  evaluateWeeklyProgress,
  getAutoModeStepIds,
  recordCalcSession,
  aggregateGroupResults,
} from '../services/calcProgressService';
import { notifyTeacherCalcStuck } from '../utils/challengeUtils';

// Sub-components
import ChallengeStartView from './challenge/ChallengeStartView';
import ChallengeQuizView from './challenge/ChallengeQuizView';
import ChallengeResultView from './challenge/ChallengeResultView';
import ChallengeReviewView from './challenge/ChallengeReviewView';
import SecretNoteView from './challenge/SecretNoteView';
import ReportModal from './challenge/ReportModal';

// Custom hooks
import { useKeyboardActivity } from '../hooks/useKeyboardActivity';
import { useAntiCheat } from '../hooks/useAntiCheat';
import { useChallengeStatus } from '../hooks/useChallengeStatus';
import { useChallengeHistory } from '../hooks/useChallengeHistory';

// Secret Notebook (local-only mistake review)
import { addMistakes, canGrade, getSyncSnapshot, getNoteCount, getDueCount } from '../utils/secretNote';

// Answer matching (shared with ExamPrep)
import { answersMatch } from '../utils/answerMatching';

// Utilities
import {
  CHALLENGE_YEAR,
  CHALLENGE_BLUEPRINT,
  CHALLENGE_CHAPTER_ID,
  CALC_ENGINE_VERSION,
  getChallengeBootCacheKey,
  getManualQuestionCacheKey,
  applyChallengeStatus,
  getChallengeStatusState,
  writeChallengeStatusMeta,
  mergeChallengeBootCache,
  summarizeResults,
  summarizeByKey,
  adjustDifficultyMix,
  notifyTeacherChallengeCompleted,
  notifyTeacherPendingReview,
  updateAdminDailySummary,
  createSessionSeed,
  correctQuestionAnswer,
  getEarnedXp,
  getChallengeMaxXp,
  getWorkingOutPages,
  normalizeMix,
  formatHistoryDate,
  getOptions,
  getOptionText,
  getChallengeBootMetaId,
} from '../utils/challengeUtils';

const DailyChallenge = ({ onBack, setIsLocked, onOpenFeedback }) => {
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();

  // ── Quiz flow state ──
  const [step, setStep_] = useState('start');
  const setStep = (s) => { stepRef.current = s; setStep_(s); };
  const [currentIdx, setCurrentIdx] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerResults, setAnswerResults] = useState([]);
  const [subAnswers, setSubAnswers] = useState({});
  const [questionComments, setQuestionComments] = useState([]);
  const [showHint, setShowHint] = useState(false);
  const [autoTransitionTimer, setAutoTransitionTimer] = useState(null);
  // 'correct' | 'wrong' | 'pending' | null — brief pastel flash right after grading
  const [flash, setFlash] = useState(null);
  const [countdown, setCountdown] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(null);

  // ── Quiz session metadata ──
  const [challengeType, setChallengeType] = useState('daily');
  const [currentSessionId, setCurrentSessionId] = useState(null);
  const [calcSessionMeta, setCalcSessionMeta] = useState(null);
  const [isFinishing, setIsFinishing] = useState(false);
  const isFinishingRef = useRef(false);
  const [loading, setLoading] = useState(false);

  // ── Post-quiz state ──
  const [elapsedSeconds, setElapsedSeconds] = useState(null);
  const [analyticsRecs, setAnalyticsRecs] = useState(null);

  // ── UI state ──
  const [viewMode, setViewMode] = useState('challenge');
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [workingOutByIdx, setWorkingOutByIdx] = useState({});
  const [workingOutPreview, setWorkingOutPreview] = useState(null);
  const [warnings, setWarnings] = useState(0);
  const [secretNoteKind, setSecretNoteKind] = useState(null);

  // ── Report modal state ──
  const [isReporting, setIsReporting] = useState(false);
  const [reportedQuestion, setReportedQuestion] = useState(null);
  // ref에도 저장 — submit 시 렌더링 타이밍과 무관하게 항상 정확한 문제를 참조
  const reportedQuestionRef = useRef(null);
  const [reportMessage, setReportMessage] = useState('');
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);
  const [isSubmittingCanvas, setIsSubmittingCanvas] = useState(false);

  // ── Refs ──
  const canvasRef = useRef(null);
  const answerInputRef = useRef(null);
  const quizStartTimeRef = useRef(null);
  // Always-current ref so useAntiCheat never captures a stale finishQuiz closure
  const finishQuizRef = useRef(null);
  const handleAnswerRef = useRef(null);
  const stepRef = useRef('idle'); // mirrors `step` so timer interval can read it without stale closure
  const sessionReviewCountRef = useRef(0);
  const sessionReportCountRef = useRef(0);
  // Auto-mode calc progress snapshot for the active session (so finishQuiz can
  // aggregate per-group results without an extra Firestore read).
  const calcAutoProgressRef = useRef(null);

  // ── Custom hooks ──
  const { markKeyboardActivity, markViewportKeyboardActivity, hasRecentKeyboardActivity } = useKeyboardActivity();

  const {
    todayCompleted, setTodayCompleted,
    abandonedToday, setAbandonedToday,
    calcCompletedToday, setCalcCompletedToday,
    calcAbandonedToday, setCalcAbandonedToday,
    todayStatusReady,
    studentProfile, setStudentProfile,
    chapterProgress, setChapterProgress,
    refreshStudentProfile,
  } = useChallengeStatus(user?.uid);

  const {
    history, dailyStats, fetchHistory,
  } = useChallengeHistory(user?.uid, {
    setTodayCompleted, setAbandonedToday, setCalcCompletedToday, setCalcAbandonedToday,
  });

  useAntiCheat({
    step,
    isAdmin,
    isReporting,
    showToast,
    hasRecentKeyboardActivity,
    markKeyboardActivity,
    markViewportKeyboardActivity,
    onFocusLost: () => setWarnings(w => w + 1),
    finishQuizRef,
  });

  // ── Quiz draft persistence — timer keeps running even when window is closed ──
  const draftKey = user?.uid ? `quiz_draft_${user.uid}` : null;
  const today = new Date().toLocaleDateString('en-CA');

  // Save draft on every meaningful state change while quiz is running.
  // We record savedAt so on return we can compute elapsed time precisely.
  useEffect(() => {
    if (step !== 'quiz' || !draftKey || questions.length === 0) return;
    const draft = {
      date: today,
      challengeType,
      currentSessionId,
      calcSessionMeta,
      questions,
      currentIdx,
      score,
      userAnswers,
      answerResults,
      shuffledOptions,
      subAnswers,
      timeLeft,
      savedAt: Date.now(),
    };
    try { localStorage.setItem(draftKey, JSON.stringify(draft)); } catch {}
  }, [step, currentIdx, score, userAnswers, answerResults, shuffledOptions, subAnswers, timeLeft]);

  // Clear draft when quiz finishes (normally or abandoned).
  const clearDraft = () => { if (draftKey) try { localStorage.removeItem(draftKey); } catch {} };

  // On mount: check for an in-progress draft from today.
  // Fast-forward the timer: each question that would have timed out while the
  // window was closed is marked as wrong (0 points). If ALL questions expired,
  // auto-submit the quiz right away. Otherwise resume at the right question
  // with the correct remaining time.
  const [restoredDraft, setRestoredDraft] = useState(null);
  useEffect(() => {
    if (!draftKey) return;
    try {
      const raw = localStorage.getItem(draftKey);
      if (!raw) return;
      const draft = JSON.parse(raw);
      if (draft.date !== today) { localStorage.removeItem(draftKey); return; }

      // How many seconds elapsed since the window was closed?
      let elapsed = Math.max(0, (Date.now() - (draft.savedAt || Date.now())) / 1000);

      // Fast-forward: burn through questions whose time has expired.
      let idx = draft.currentIdx;
      let qTimeLeft = draft.timeLeft || 0;
      const ua = [...(draft.userAnswers || [])];
      const ar = [...(draft.answerResults || [])];

      while (elapsed > 0 && idx < draft.questions.length) {
        if (elapsed >= qTimeLeft) {
          // This question timed out while away — mark wrong if not yet answered.
          if (ua[idx] === null || ua[idx] === undefined) {
            ua[idx] = '__timeout__';
            ar[idx] = { correct: false, pointsEarned: 0, timedOut: true };
          }
          elapsed -= qTimeLeft;
          idx++;
          // Next question gets its full time limit.
          qTimeLeft = draft.questions[idx]?.timeLimit || 30;
        } else {
          qTimeLeft -= elapsed;
          elapsed = 0;
        }
      }

      const allExpired = idx >= draft.questions.length;
      setRestoredDraft({ ...draft, currentIdx: idx, userAnswers: ua, answerResults: ar, timeLeft: Math.floor(qTimeLeft), allExpired });
    } catch {}
  }, [draftKey]);

  // ── Convenience helpers ──
  const resetSessionAttentionCounts = () => {
    sessionReviewCountRef.current = 0;
    sessionReportCountRef.current = 0;
  };
  const markSessionReviewRequested  = () => { sessionReviewCountRef.current += 1; };
  const markSessionReportSubmitted  = () => { sessionReportCountRef.current += 1; };

  // window.innerWidth is read on every render — no React dep exists for resize.
  // Memoizing with [] would freeze at mount time.
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

  const isGraphSketchQuestion = currentQuestion?.type === 'graph_sketch' || currentQuestion?.type === 'teacher_review' || currentQuestion?.requiresManualGrading === true;
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

  const FEEDBACK_SEEN_KEY = 'sapere:feedback:seenAt';
  const newFeedbackCount = useMemo(() => {
    try {
      const seenAt = localStorage.getItem(FEEDBACK_SEEN_KEY);
      const seenDate = seenAt ? new Date(seenAt) : null;
      let count = 0;
      for (const stat of history) {
        for (const r of stat.answerResults || []) {
          if (!r?.teacherFeedback) continue;
          if (!seenDate || (r.gradedAt && new Date(r.gradedAt) > seenDate)) count++;
        }
      }
      return count;
    } catch { return 0; }
  }, [history]);

  const handleViewFeedback = () => {
    try { localStorage.setItem(FEEDBACK_SEEN_KEY, new Date().toISOString()); } catch { /* */ }
    // Clear the dashboard "new comments" badge once the student opens feedback.
    if (user?.uid) updateDoc(doc(db, 'users', user.uid), { unreadFeedbackCount: 0 }).catch(() => {});
    setViewMode('history');
  };

  // Question-based correct count for display (a multi-part question counts as
  // correct only when every part is right). Keeps the headline/denominator in
  // terms of assigned questions while XP stays point-based.
  const resultQuestionsCorrect = useMemo(() => (answerResults || []).filter((r) => {
    if (!r || typeof r !== 'object') return false;
    if (r.totalPoints) return Number(r.pointsEarned || 0) >= Number(r.totalPoints);
    return !!r.correct || Number(r.pointsEarned || 0) >= 1;
  }).length, [answerResults]);

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



  // ── Load history when entering start/history screens ──
  // finishQuiz triggers its own refresh after writing.
  useEffect(() => {
    if (!user?.uid) return;
    if (viewMode === 'history' || step === 'start') {
      fetchHistory({ deriveStatus: step !== 'result' });
    }
  }, [user?.uid, viewMode, step, fetchHistory]);

  // Flame coach CTA on the result screen → open Review for missed questions.
  useEffect(() => {
    if (!user?.uid) return undefined;
    const onOpenReview = (e) => {
      if (e.detail?.uid && e.detail.uid !== user.uid) return;
      if (step !== 'result') return;
      setStep('review');
    };
    window.addEventListener('sapere:flame-open-review', onOpenReview);
    return () => window.removeEventListener('sapere:flame-open-review', onOpenReview);
  }, [user?.uid, step]);

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
        
        const liveQuestions = await Promise.all(
          (data.questions || []).map(async (q) => {
            if (!q.id || q.id.startsWith("gen-")) return q;
            try {
              const qSnap = await getDoc(doc(db, "questions", q.id));
              if (qSnap.exists()) {
                const liveData = qSnap.data();
                return {
                  ...q,
                  solution: liveData.solution,
                  solutionSteps: liveData.solutionSteps,
                  hint: liveData.hint,
                  graphData: liveData.graphData,
                  subQuestions: liveData.subQuestions,
                };
              }
            } catch (err) {
              console.warn("Failed to fetch live question:", q.id, err);
            }
            return q;
          })
        );

        setSelectedChallenge(prev => {
          if (!prev || prev.id !== selectedChallenge.id) return prev;
          return {
            ...prev,
            questions: liveQuestions,
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

  // ── Listen for forced resets (from teacher) ──
  useEffect(() => {
    const handleReset = () => {
      // Clear local storage draft immediately so it doesn't get restored
      clearDraft();
      
      // Abort active quiz/review and return to start
      setStep('start');
      setCurrentIdx(0);
      setUserAnswers([]);
      setAnswerResults([]);
      setSubAnswers({});
      setIsFinishing(false);
      setElapsedSeconds(null);
      setSelectedChallenge(null);
      showToast('Challenge was reset by your teacher. Starting over...', 'info');
    };
    window.addEventListener('sapere-challenge-reset-applied', handleReset);
    return () => window.removeEventListener('sapere-challenge-reset-applied', handleReset);
  }, [draftKey]);

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
      await Promise.allSettled(
        indicesNeedingFetch.map(async ({ idx }) => {
          try {
            const snap = await getDoc(doc(db, 'users', user.uid, statColName, dateId, 'working_out', String(idx)));
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

  // ── Shared quiz initialisation ──
  // Both calc and daily write an "abandoned" start record to Firestore before
  // any questions are shown — this is the crash-safety lock. On a normal
  // completion, finishQuiz overwrites it with completed:true.
  const initQuizState = (combinedQs) => {
    setQuestions(combinedQs);
    setUserAnswers(new Array(combinedQs.length).fill(null));
    setAnswerResults(new Array(combinedQs.length).fill(null));
    setCurrentIdx(0);
    setScore(0);
    resetSessionAttentionCounts();
  };

  const beginQuiz = (combinedQs) => {
    quizStartTimeRef.current = Date.now();
    setElapsedSeconds(null);
    setStep('quiz');
    setupQuestion(combinedQs[0]);
    if (setIsLocked) setIsLocked(true);
    setLoading(false);
  };

  const startCalculationQuiz = async () => {
    const today = new Date().toLocaleDateString('en-CA');
    if (calcCompletedToday || calcAbandonedToday) {
      showToast("Today's Daily Calculation has already been used. Please try again tomorrow.", 'info');
      return;
    }

    setChallengeType('calc');
    const qCount = getQuestionCount('calc');

    // Resolve which calc topics to draw from.
    // Auto Mode: each group's current step (auto-adjusted weekly).
    // Manual Mode: the teacher's hand-picked assignedChapters (legacy behaviour).
    let calcTopics;
    calcAutoProgressRef.current = null;
    if (studentProfile?.calcAutoMode === true && user?.uid) {
      try {
        let progress = await ensureCalcProgress(user.uid);
        // On Mondays, evaluate last week and adjust steps before generating.
        const evalResult = await evaluateWeeklyProgress(user.uid, (alert) =>
          notifyTeacherCalcStuck({
            studentId: user.uid,
            studentName: studentProfile?.name || studentProfile?.firstName || 'A student',
            ...alert,
          }), progress);
        progress = evalResult.data || progress;
        calcAutoProgressRef.current = progress;
        calcTopics = getAutoModeStepIds(progress);
      } catch (e) {
        console.warn('Auto mode resolution failed, falling back to manual topics:', e);
        calcTopics = null;
      }
    }
    if (!calcTopics || calcTopics.length === 0) {
      calcTopics = (Array.isArray(studentProfile?.assignedChapters) ? studentProfile.assignedChapters : [])
        .filter(id => id.startsWith('calc-') || id.startsWith('clock-'));
    }
    const combinedQs = generateCalculationSet(calcTopics, qCount, assignedYear, studentProfile?.calcTimeLimit || 30);

    const sessionMeta = {
      engineVersion: CALC_ENGINE_VERSION,
      generationMode: 'local-random',
      seed: createSessionSeed(),
      startedAt: new Date().toISOString(),
    };
    setCurrentSessionId(today);
    setCalcSessionMeta(sessionMeta);
    initQuizState(combinedQs);
    // Lock immediately so auto-update can't reload the page during Firebase writes.
    if (setIsLocked) setIsLocked(true);

    // Enter the quiz immediately. The crash-safety lock writes below run in the
    // background (fire-and-forget) — awaiting them risked an infinite spinner,
    // since Firestore setDoc only resolves on backend ack and never rejects when
    // the connection is stalled (offline / quota).
    beginQuiz(combinedQs);
    setCalcAbandonedToday(true);
    mergeChallengeBootCache(user?.uid, { date: today, calcStatus: 'abandoned', calcCompletedToday: false, calcAbandonedToday: true, savedAt: Date.now() });

    // Firebase start-record (crash-safety lock) — non-blocking
    if (user?.uid) {
      const now = new Date();
      setDoc(doc(db, 'users', user.uid, 'calc_stats', today), {
        completed: false, abandoned: true, score: 0, total: qCount,
        challengeType: 'calc',
        timestamp: now.toISOString(), date: today,
        dateLabel: now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
        questionCount: qCount,
        engineVersion: sessionMeta.engineVersion,
        generationMode: sessionMeta.generationMode,
        seed: sessionMeta.seed,
      }, { merge: true }).catch(e => console.warn('Calc start-lock write failed (non-fatal):', e?.code || e));
      writeChallengeStatusMeta(user.uid, today, 'calc', 'abandoned')
        .catch(e => console.warn('Calc status-meta write failed (non-fatal):', e?.code || e));
      updateAdminDailySummary({ userId: user.uid, date: today, challengeType: 'calc', score: 0, total: qCount, studentProfile, user })
        .catch(e => console.warn('Admin summary pre-write failed:', e));
    }
  };

  const startDailyQuiz = async () => {
    try {
      setChallengeType('daily');
      const qCount = getQuestionCount('daily');
      setLoading(true);
      const today = new Date().toLocaleDateString('en-CA');

      // Timeout guard: a Firestore write inside fetchOrCreateDailyAssignment
      // (new-assignment create / prep stamp) only resolves on backend ack, so a
      // stalled connection could hang here forever. Surface an error instead.
      const assignment = await Promise.race([
        fetchOrCreateDailyAssignment({
          uid: user?.uid,
          studentProfile: { ...(studentProfile || {}), difficultyMix: chapterProgress?.difficultyMix },
          dateKey: today,
          questionCount: qCount,
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Assignment load timed out')), 12000)),
      ]);
      const combinedQs = (assignment.questions || []).map(correctQuestionAnswer);
      if (combinedQs.length === 0) throw new Error('No daily assignment questions were generated.');

      initQuizState(combinedQs);
      // Lock immediately so auto-update can't reload the page during Firebase writes.
      if (setIsLocked) setIsLocked(true);

      // Enter the quiz immediately. The crash-safety lock writes below run in the
      // background (fire-and-forget). Awaiting them risked an infinite spinner:
      // Firestore setDoc promises only resolve on backend acknowledgement, so an
      // offline/quota-stalled connection leaves the write pending forever — never
      // rejecting, so the catch never fires and `loading` never clears.
      beginQuiz(combinedQs);
      setAbandonedToday(true);
      mergeChallengeBootCache(user?.uid, { date: today, dailyStatus: 'abandoned', todayCompleted: false, abandonedToday: true, savedAt: Date.now() });

      // Firebase start-record (crash-safety lock) — non-blocking
      if (user?.uid) {
        const now = new Date();
        setDoc(doc(db, 'users', user.uid, 'daily_stats', today), {
          completed: false, abandoned: true, score: 0, total: combinedQs.length,
          challengeType: 'daily',
          timestamp: now.toISOString(), date: today,
          dateLabel: now.toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short' }),
          questionCount: combinedQs.length,
          assignmentVersion: assignment.version || null,
        }, { merge: true }).catch(e => console.warn('Daily start-lock write failed (non-fatal):', e?.code || e));
        writeChallengeStatusMeta(user.uid, today, 'daily', 'abandoned')
          .catch(e => console.warn('Daily status-meta write failed (non-fatal):', e?.code || e));
        markDailyAssignmentStarted(user.uid, today).catch(() => {});
        updateAdminDailySummary({ userId: user.uid, date: today, challengeType: 'daily', score: 0, total: combinedQs.length, studentProfile, user })
          .catch(e => console.warn('Admin summary pre-write failed:', e));
      }
    } catch (error) {
      console.error('Critical error in startDailyQuiz:', error);
      showToast(`Failed to start challenge${error?.message ? ` (${error.message})` : ''}. Please check your assigned curriculum or try again later.`, 'error');
      if (setIsLocked) setIsLocked(false);
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
  // Keep a ref so the timer can read the latest answered state without
  // re-creating the interval on every keystroke (selectedOption changes each
  // time the user types, but the timer only needs the final snapshot).
  const selectedOptionRef = useRef(selectedOption);
  const selectedOptionIdxRef = useRef(selectedOptionIdx);
  useEffect(() => { selectedOptionRef.current = selectedOption; }, [selectedOption]);
  useEffect(() => { selectedOptionIdxRef.current = selectedOptionIdx; }, [selectedOptionIdx]);

  useEffect(() => {
    if (step !== 'quiz' || !questionStartTime) return;

    const timeLimit = (questions[currentIdx]?.timeLimit || 30) * 1000;
    const endTime = questionStartTime + timeLimit;

    const timer = setInterval(() => {
      // Skip if already in feedback/result (question answered or timer already fired)
      if (stepRef.current !== 'quiz') { clearInterval(timer); return; }
      // Skip if MC already answered (both text + idx set)
      if (selectedOptionRef.current !== null && selectedOptionIdxRef.current !== null) { clearInterval(timer); return; }
      const now = Date.now();
      const remaining = Math.max(0, Math.ceil((endTime - now) / 1000));

      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(timer);
        if (stepRef.current === 'quiz') {
          // Pass whatever the student has typed so far — avoids "No answer recorded"
          // when the timer runs out while a student is mid-entry.
          const typed = selectedOptionRef.current ?? answerInputRef.current?.value ?? null;
          handleAnswerRef.current?.(typed, null);
        }
      }
    }, 100); // Check more frequently for smooth UI

    return () => clearInterval(timer);
  }, [step, questionStartTime, currentIdx]);

  // Anti-cheat (focus-loss warnings, beforeunload, termination) is handled by useAntiCheat hook above.

  const handleReportSubmit = async () => {
    if (!reportMessage.trim()) return;
    setIsSubmittingReport(true);
    try {
      // ref를 우선 사용 — state보다 안정적으로 클릭 시점의 문제를 가리킴
      const currentQ = reportedQuestionRef.current || reportedQuestion || questions[currentIdx];
      const reportedIndex = reportedQuestion
        ? questions.findIndex(q => String(q?.id || '') === String(reportedQuestion?.id || ''))
        : currentIdx;
      const answerIndex = reportedIndex >= 0 ? reportedIndex : currentIdx;
      const answerResult = answerResults[answerIndex] || null;

      // History-mode report carries pre-saved answer + sketch from the ref;
      // quiz-mode falls back to live state + canvas capture.
      const hasPreSaved = currentQ?._studentAnswer !== undefined || currentQ?._sketchDataUrl !== undefined;
      const studentAnswer = hasPreSaved
        ? (currentQ._studentAnswer ?? '')
        : (userAnswers[answerIndex] ?? selectedOption ?? '');

      let sketchDataUrl = currentQ?._sketchDataUrl || null;
      if (!hasPreSaved) {
        // Capture canvas sketch at the moment of report (quiz mode only)
        try { sketchDataUrl = await canvasRef.current?.exportImage?.({ force: false }) || null; } catch { /* ignore */ }
      }

      await addDoc(collection(db, 'reports'), {
        studentId: user.uid,
        studentName: user.displayName || user.email || 'Student',
        questionId: currentQ?.id || '',
        questionIndex: answerIndex,
        studentAnswer,
        answerResult,
        sketchDataUrl,
        hasSketch: Boolean(sketchDataUrl),
        source: challengeType === 'calc' ? 'calc' : 'daily',
        // Direct pointers so Restore Credit never needs to scan all stat docs
        statRoot: 'users',
        statCollection: challengeType === 'calc' ? 'calc_stats' : 'daily_stats',
        statId: today,
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
      reportedQuestionRef.current = null;
      setReportMessage('');
      showToast("Report submitted! We will review it.", 'success');
    } catch (error) {
      console.error("Report error:", error);
      showToast("Failed to submit report.", 'error');
    } finally {
      setIsSubmittingReport(false);
    }
  };

  const closeReportModal = useCallback(() => {
    setIsReporting(false);
    setReportedQuestion(null);
    setReportMessage('');
  }, []);

  const handleAnswer = async (optionText, optIdx = null) => {
    if (step === 'feedback' || isSubmittingCanvas) return;
    
    const currentQ = questions[currentIdx];
    const isShortAnswer = currentQ?.type === 'short_answer';
    const isGraphSketch = currentQ?.type === 'graph_sketch' || currentQ?.type === 'teacher_review' || currentQ?.requiresManualGrading === true;
    
    let correct = false;
    let canvasDataUrl = null;
    let canvasPageImages = [];

    // Helper: canvas export with a 4-second timeout so a hanging canvas never freezes the quiz
    const canvasExportWithTimeout = (fn, ms = 4000) =>
      Promise.race([fn(), new Promise((_, rej) => setTimeout(() => rej(new Error('canvas export timeout')), ms))]);

    // Capture canvas for graph_sketch always, or for any question if split screen is active (Senior Students)
    if (canvasRef.current && (isGraphSketch || (showSplitScreen && canvasRef.current?.hasContent?.()))) {
      try {
        canvasPageImages = await canvasExportWithTimeout(() => Promise.resolve(canvasRef.current.exportPageImages?.() || []));
        canvasDataUrl = canvasPageImages[0] || await canvasExportWithTimeout(() => Promise.resolve(canvasRef.current.exportImage()));
      } catch (err) {
        console.error("Failed to export working out image", err);
      }
    }

    if (isGraphSketch) {
      setIsSubmittingCanvas(true);
      // force: true 재시도 — hasContent()가 true인 경우에만.
      // hasContent가 false인데 force=true 하면 배경선만 있는 빈 흰 캔버스가
      // 저장되어 선생님이 빈 화면을 보게 됨.
      const hasInk = canvasRef.current?.hasContent?.() ?? false;
      if (!canvasDataUrl && canvasRef.current && hasInk) {
        try {
          canvasPageImages = await canvasExportWithTimeout(() => Promise.resolve(canvasRef.current.exportPageImages?.({ force: true }) || []));
          canvasDataUrl = canvasPageImages[0] || await canvasExportWithTimeout(() => Promise.resolve(canvasRef.current.exportImage?.({ force: true })));
        } catch (err) {
          console.error("Failed to export graph answer image", err);
        }
      }
      correct = false; // Pending review
    } else if (currentQ?.subQuestions?.length > 0) {
      // Handle sub-questions
      const subResults = currentQ.subQuestions.map((sq, idx) => {
        const userAnswer = (optionText && typeof optionText === 'object') ? optionText[sq.id || idx] : '';
        return { id: sq.id || idx, correct: answersMatch(userAnswer, sq.answer), answer: userAnswer };
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
    } else if (currentQ?.type === 'fill_blank') {
      // Per-blank grading: every blank must match its expected answer.
      // `optionText` arrives as an array of user-entered strings.
      const blanks = Array.isArray(currentQ.blanks) ? currentQ.blanks : [];
      const userArr = Array.isArray(optionText) ? optionText : [];
      const perBlank = blanks.map((b, i) => answersMatch(userArr[i] || '', b.answer || ''));
      correct = blanks.length > 0 && perBlank.every(Boolean);
      currentQ.lastBlankResults = perBlank;
      currentQ.pointsEarned = perBlank.filter(Boolean).length;
      currentQ.totalPoints = blanks.length;
      if (correct) setScore(prev => prev + 1);
    } else if (currentQ?.type === 'interactive_grid') {
      correct = Array.isArray(optionText) && optionText.length === parseInt(currentQ.answer, 10);
      if (correct) setScore(prev => prev + 1);
    } else {
      // Use _shuffledAnswer (text-normalised) if options were shuffled, else original answer.
      const effectiveAnswer = currentQ._shuffledAnswer !== undefined ? currentQ._shuffledAnswer : currentQ.answer;
      // 1. Text match against (possibly normalised) answer
      const isTextMatch = answersMatch(optionText, effectiveAnswer);
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
          questionImage: currentQ?.questionImage || null,
          questionType: currentQ?.type || 'short_answer',
          options: Array.isArray(currentQ?.options) ? currentQ.options.map(opt =>
            typeof opt === 'string' ? opt : (opt?.text || String(opt))
          ) : [],
          graphData: currentQ?.graphData || null,
          answerImage: canvasDataUrl || null,
          // Filter out empty/falsy pages so the grading view doesn't render blank image slots
          answerImages: (canvasPageImages || []).filter(url => url && url.length > 100),
          // Always save typed text — shown alongside or instead of the drawing
          answerText: typeof optionText === 'string' && optionText.trim() ? optionText.trim() : null,
          hasDrawing: Boolean(canvasDataUrl),
          status: 'pending',
          submittedAt: serverTimestamp(),
          year: currentQ?.year || CHALLENGE_YEAR,
          chapterTitle: currentQ?.chapterTitle || '',
          topicTitle: currentQ?.topicTitle || '',
          challengeType: challengeType,
          totalQuestions: TOTAL_QUESTIONS,
          correctAnswer: currentQ?.answer || '',
          solution: currentQ?.solution || '',
          // Persist multi-part prompts so the grading queue can show each
          // sub-question + its answer/solution without an extra live fetch.
          subQuestions: Array.isArray(currentQ?.subQuestions)
            ? currentQ.subQuestions.map((sq, i) => ({
                id: sq.id ?? i,
                question: sq.question || sq.text || '',
                answer: sq.answer ?? '',
                solution: sq.solution || '',
                solutionSteps: Array.isArray(sq.solutionSteps) ? sq.solutionSteps : null,
                graphData: sq.graphData || null,
              }))
            : [],
          requiresManualGrading: currentQ?.requiresManualGrading || true,
        };
        const gradingDocRef = await addDoc(collection(db, 'grading_queue'), gradingEntry);
        // Skip AI grading when the student submitted nothing (no drawing and no
        // typed answer) — there is nothing for Gemini to assess, and an empty
        // submission would only waste an API call. The teacher still sees the
        // blank submission in the queue and can grade it manually.
        const hasSubmittedContent = gradingEntry.hasDrawing
          || (gradingEntry.answerImages && gradingEntry.answerImages.length > 0)
          || Boolean(gradingEntry.answerText);
        if (hasSubmittedContent) {
          // Fire-and-forget: ask Gemini to pre-grade so the teacher sees an AI assessment
          fetch('/api/auto-grade', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ gradingItemId: gradingDocRef.id }),
          }).then(async (r) => {
            const body = await r.json().catch(() => ({}));
            if (!body.success) console.warn('[auto-grade] failed:', body.message || body.error || r.status);
            else console.log('[auto-grade] ok:', gradingDocRef.id);
          }).catch((err) => console.warn('[auto-grade] network error:', err?.message));
        } else {
          console.log('[auto-grade] skipped — empty submission:', gradingDocRef.id);
        }
        markSessionReviewRequested();
        notifyTeacherPendingReview({
          studentId: user.uid,
          studentName: gradingEntry.userName,
          studentEmail: gradingEntry.userEmail,
          questionText: gradingEntry.questionText,
          challengeType: gradingEntry.challengeType,
          topicTitle: gradingEntry.topicTitle,
          chapterTitle: gradingEntry.chapterTitle,
        }).catch(() => {});
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

      // Sketch board was on screen for this answer — used by FlameBuddy to nag
      // when the student only picks options and never writes working out.
      const sketchAvailable = Boolean(showSplitScreen && canvasRef.current);
      const hadWorkingOut = sketchAvailable
        ? Boolean(canvasDataUrl || canvasPageImages?.length || canvasRef.current?.hasContent?.())
        : null;

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
        sketchAvailable,
        hadWorkingOut,
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
    if (isFinishingRef.current) return;
    isFinishingRef.current = true;
    clearDraft();
    // Declared outside try so catch block can safely reference it
    const currentAnswerResults = answerResults || [];
    // Point-based score (each sub-question part = 1 point) — used ONLY for XP.
    let actualScore = isAbandoned ? 0 : currentAnswerResults.reduce((acc, r) => acc + (r?.pointsEarned || (r?.correct ? 1 : 0)), 0);
    // Question-based score — what we SAVE/DISPLAY so the denominator matches the
    // number of assigned questions (e.g. 15), not the expanded sub-question
    // point total (e.g. 21). A multi-part question counts as fully correct only
    // when every part is right.
    const isQuestionFullyCorrect = (r) => {
      if (!r || typeof r !== 'object') return false;
      if (r.totalPoints) return Number(r.pointsEarned || 0) >= Number(r.totalPoints);
      return !!r.correct || Number(r.pointsEarned || 0) >= 1;
    };
    const questionsCorrect = isAbandoned ? 0 : currentAnswerResults.filter(isQuestionFullyCorrect).length;
    const displayTotal = TOTAL_QUESTIONS;

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
          ? (Array.isArray(studentProfile?.assignedChapters) ? studentProfile.assignedChapters.filter(id => id.startsWith('calc-') || id.startsWith('clock-')) : [])
          : getAssignedChapters(studentProfile, assignedYear);
        const assignedTopics = Array.isArray(studentProfile?.assignedTopics) ? studentProfile.assignedTopics : [];
        // Pass hasCalculationTest so a daily-only student earns the full 100 XP
        // (50 XP only applies when the student also has the calculation test).
        const maxXp = getChallengeMaxXp(challengeType, hasCalculationTest);
        const xpEarned = getEarnedXp(actualScore, totalPossibleScore, challengeType, hasCalculationTest);
        const resultStats = summarizeResults(currentAnswerResults);
        const topicStats = summarizeByKey(currentAnswerResults, 'topicId', 'topicTitle', 'topicCode');
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
        // happen, but guarantees the main doc stays small). Also drops
        // `undefined` values — Firestore rejects them with "invalid-argument"
        // and real curriculum questions (unlike locally-generated calc
        // questions) carry many optional fields that are frequently undefined.
        const stripDataUrls = (val) => {
          if (val === undefined) return null;
          if (typeof val === 'string') {
            return val.startsWith('data:image/') && !val.startsWith('data:image/svg+xml') ? '[image]' : val;
          }
          if (Array.isArray(val)) return val.map(stripDataUrls);
          if (val && typeof val === 'object') {
            const out = {};
            for (const k of Object.keys(val)) {
              const cleaned = stripDataUrls(val[k]);
              if (cleaned !== null || val[k] !== undefined) out[k] = cleaned;
            }
            return out;
          }
          return val;
        };
        // Strip large fields that are re-fetched live from the questions collection
        // (solutionSteps, graphData, etc.) so the detail_snapshot stays well under
        // Firestore's 1 MB document limit. ChallengeDetailModal re-fetches them.
        const LARGE_QUESTION_FIELDS = ['solutionSteps', 'graphData', 'hint', 'solution', 'subQuestions'];
        const stripLargeFields = (q) => {
          if (!q || typeof q !== 'object') return q;
          const out = { ...q };
          for (const f of LARGE_QUESTION_FIELDS) delete out[f];
          return out;
        };
        const slimQuestions = stripDataUrls((questions || []).map(stripLargeFields));
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
          // Saved score is question-based so it matches the assigned question
          // count. Point-based marks are kept separately for reference.
          score: questionsCorrect,
          total: displayTotal,
          pointsScore: actualScore,
          pointsTotal: totalPossibleScore,
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
              answerResults: stripDataUrls(slimAnswerResults),
              questionComments: stripDataUrls(questionComments.length > 0 ? questionComments : []),
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
        // New stat → Dashboard week bar chart + insights are stale; drop caches
        // so the next Dashboard visit (or live listener) re-reads immediately.
        try {
          localCache.remove(`dashboard-insights-${user.uid}`);
          localCache.remove(`dashboard-week-practice-v1-${user.uid}`);
          localCache.remove(`flame-buddy-tasks-${user.uid}`);
          localCache.remove(`flame-buddy-perf-v1-${user.uid}`);
          if (typeof window !== 'undefined') {
            if (challengeType === 'daily') {
              window.dispatchEvent(new CustomEvent('sapere:daily-practice-completed', {
                detail: {
                  uid: user.uid,
                  date: today,
                  score: questionsCorrect,
                  total: displayTotal,
                  completed: !isAbandoned,
                  challengeType: 'daily',
                },
              }));
            }
            // Flame coach: score mantra + "review your misses" on the result screen.
            // Also pass sketch usage so Flame can gently (then snitch-ily) nag
            // when the student only picks answers and never writes working out.
            if (!isAbandoned && displayTotal > 0) {
              const sketchQs = currentAnswerResults.filter((r) => r && r.sketchAvailable === true);
              const emptyWorkingOutCount = sketchQs.filter((r) => r.hadWorkingOut === false).length;
              const withWorkingOutCount = sketchQs.filter((r) => r.hadWorkingOut === true).length;
              window.dispatchEvent(new CustomEvent('sapere:challenge-result', {
                detail: {
                  uid: user.uid,
                  date: today,
                  score: questionsCorrect,
                  total: displayTotal,
                  wrong: Math.max(0, displayTotal - questionsCorrect),
                  completed: true,
                  challengeType,
                  sketchQuestionCount: sketchQs.length,
                  emptyWorkingOutCount,
                  withWorkingOutCount,
                },
              }));
            }
          }
        } catch (_) { /* non-fatal */ }
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
          score: questionsCorrect,
          total: displayTotal,
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
            score: questionsCorrect,
            total: displayTotal,
            xpEarned,
            completedAt: now.toISOString(),
            reviewCount: sessionReviewCountRef.current,
            reportCount: sessionReportCountRef.current,
          }).catch((err) => {
            console.warn('Teacher completion notification failed (non-critical):', err?.code || err);
          });
        }

        // --- Local State Updates ---

        // Update practice pool: mark shown questions as done, accumulate accuracy.
        if (challengeType === 'daily' && !isAbandoned) {
          const poolResults = currentAnswerResults
            .map((r, i) => ({
              id: questions[i]?.id,
              chapterId: r?.chapterId || questions[i]?.chapterId,
              correct: Boolean(r?.correct),
            }))
            .filter((r) => r.id && r.chapterId);
          updatePoolAfterQuiz(user.uid, poolResults).catch(() => {});
        }

        // Auto Mode: record per-group results so the weekly evaluation can
        // level each row up/down independently.
        if (challengeType === 'calc' && !isAbandoned && calcAutoProgressRef.current) {
          const groupResults = aggregateGroupResults(calcAutoProgressRef.current, currentAnswerResults);
          if (groupResults.length > 0) recordCalcSession(user.uid, groupResults).catch(() => {});
        }

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
  // Keep refs current so effects never capture stale closures.
  useEffect(() => {
    finishQuizRef.current = finishQuiz;
  }, [finishQuiz]);
  useEffect(() => {
    handleAnswerRef.current = handleAnswer;
  }, [handleAnswer]);

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
                            const savedSketch = (lazyWO ? { ...result, ...lazyWO } : result)?.workingOut
                              || (lazyWO ? { ...result, ...lazyWO } : result)?.answerImage
                              || null;
                            setReportedQuestion(qData);
                            reportedQuestionRef.current = {
                              ...qData,
                              _studentAnswer: userAnswer,
                              _sketchDataUrl: savedSketch,
                            };
                            setIsReporting(true);
                          }}
                          style={{ position: 'absolute', top: '16px', right: '16px', border: 'none', background: '#fff', padding: '6px', borderRadius: '8px', cursor: 'pointer', color: '#ef4444', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', fontWeight: 800, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}
                        >
                          <Flag size={14} /> REPORT
                        </button>
                      )}
                      {qData.source && (
                        <div style={{ marginBottom: '8px' }}>
                          <span style={{ fontSize: '0.62rem', fontWeight: 900, background: '#fef3c7', color: '#92400e', padding: '3px 9px', borderRadius: '7px', letterSpacing: '0.04em' }}>
                            📄 {qData.source}
                          </span>
                        </div>
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
                                  ({String.fromCharCode(97 + sIdx)}) <MathView content={toDisplayText(sq.text || sq.question)} graphData={sq.graphData} />
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
                      
                      {result?.teacherFeedback && (
                        <div style={{ marginTop: '16px', padding: '16px', borderRadius: '12px', background: result?.correct ? '#f0fdf4' : '#fef2f2', border: `1px solid ${result?.correct ? '#bbf7d0' : '#fecaca'}` }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            <MessageSquare size={14} style={{ color: result?.correct ? '#166534' : '#991b1b' }} />
                            <span style={{ fontSize: '0.75rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: result?.correct ? '#166534' : '#991b1b', flex: 1 }}>Teacher Feedback</span>
                          </div>
                          <p style={{ margin: 0, fontSize: '0.92rem', color: result?.correct ? '#166534' : '#7f1d1d', lineHeight: 1.6 }}>{result.teacherFeedback}</p>
                          {result.teacherAnnotation && (
                            <img src={result.teacherAnnotation} alt="Teacher markup" style={{ marginTop: '12px', width: '100%', borderRadius: '10px', objectFit: 'contain', border: '1px solid #e2e8f0' }} />
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
                  {item.challengeType === 'calc' ? 'Daily Calculation' : 'Daily Practice'} • {formatHistoryDate(item)}
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
              {step === 'start' && restoredDraft && (() => {
                // Auto-resume: restore state and jump straight back into quiz.
                // This runs once after mount when a draft is found.
                const d = restoredDraft;
                if (d.allExpired) {
                  // All questions timed out — auto-submit as abandoned/zero.
                  clearDraft();
                  setRestoredDraft(null);
                  // Kick off finishQuiz after state settles via a tiny timeout.
                  setChallengeType(d.challengeType);
                  setCurrentSessionId(d.currentSessionId);
                  setCalcSessionMeta(d.calcSessionMeta);
                  setQuestions(d.questions);
                  setUserAnswers(d.userAnswers);
                  setAnswerResults(d.answerResults);
                  setScore(d.score);
                  setTimeout(() => {
                    finishQuizRef.current?.(true); // isAbandoned=true
                  }, 100);
                } else {
                  // Resume mid-quiz at the fast-forwarded question + time.
                  setChallengeType(d.challengeType);
                  setCurrentSessionId(d.currentSessionId);
                  setCalcSessionMeta(d.calcSessionMeta);
                  setQuestions(d.questions);
                  setCurrentIdx(d.currentIdx);
                  setScore(d.score);
                  setUserAnswers(d.userAnswers);
                  setAnswerResults(d.answerResults);
                  setShuffledOptions(d.shuffledOptions || []);
                  setSubAnswers(d.subAnswers || {});
                  setTimeLeft(d.timeLeft);
                  quizStartTimeRef.current = Date.now();
                  setStep('quiz');
                  if (setIsLocked) setIsLocked(true);
                  setRestoredDraft(null);
                }
                return null;
              })()}
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
                  onViewHistory={handleViewFeedback}
                  newFeedbackCount={Number(studentProfile?.unreadFeedbackCount) || 0}
                  onViewFeedback={onOpenFeedback}
                  onOpenFeedback={onOpenFeedback}
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
                  score={resultQuestionsCorrect}
                  totalPossibleScore={TOTAL_QUESTIONS}
                  xpEarnedOverride={getEarnedXp(score, totalPossibleScore, challengeType, hasCalculationTest)}
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
                  statColName={challengeType === 'calc' ? 'calc_stats' : 'daily_stats'}
                  sessionId={currentSessionId}
                />
              )}

              {step === 'secretNote' && secretNoteKind && (
                <SecretNoteView
                  key="secretNote"
                  kind={secretNoteKind}
                  uid={user?.uid}
                  user={user}
                  studentProfile={studentProfile}
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
      <ReportModal
        isOpen={isReporting}
        onClose={closeReportModal}
        reportMessage={reportMessage}
        onChange={(e) => setReportMessage(e.target.value)}
        onSubmit={handleReportSubmit}
        isSubmitting={isSubmittingReport}
      />
    </div>
  );
};

export default DailyChallenge;
