import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, orderBy, getDocs, doc, updateDoc, deleteDoc, getDoc, limit, setDoc, arrayUnion, increment, runTransaction, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAdminFeed } from '../context/AdminFeedContext';
import { removeQuestionFromIndex } from '../services/questionIndexService';
import { gradeSubmission } from '../services/gradingService';
import { upsertRegisteredUserLeaderboard, upsertManualStudentLeaderboard } from '../services/leaderboardService';
import { AlertCircle, CheckCircle, ExternalLink, X, BookOpen, Trash2, ClipboardCheck, MessageSquare, ArrowRight, User, Calendar, Award, Wrench, Search, Activity } from 'lucide-react';
import QuestionBankModal from './QuestionBankModal';
import AnnotationModal from './AnnotationModal';
import MathView from './MathView';
import InteractiveFractionGrid from './challenge/InteractiveFractionGrid';
import WorkedSolutionSteps from './challenge/WorkedSolutionSteps';
import { parseSolutionSteps } from '../utils/solutionSteps';
import { answersMatch } from '../utils/answerMatching';
import TrafficMonitorPanel from './TrafficMonitorPanel';

// ── Report provenance ────────────────────────────────────────────────────────
// Students file reports from several places. Only some of them correspond to a
// SCORED quiz attempt — for the others "Restore Credit" is meaningless (there
// are no points to give back) and attempting it used to trigger an unbounded
// stat-document scan that could exhaust the Firestore read quota.
//
//   source            where it comes from                 scored attempt?
//   (none) / daily    Daily Challenge quiz report          yes (daily_stats)
//   calc              Calculation sprint quiz report       yes (calc_stats)
//   review            Challenge review-screen report       yes
//   secret_note       Secret Note review request / issue   NO (local notebook)
//   topic_practice    Learning-path topic practice         NO (unscored)
//   exam_prep         Exam prep practice                   NO (unscored)
const NON_CREDITABLE_SOURCES = new Set(['secret_note', 'topic_practice', 'exam_prep']);
const isCreditable = (r) => !NON_CREDITABLE_SOURCES.has(r?.source);

const getReportSource = (r) => {
  switch (r?.source) {
    case 'secret_note':
      return r.message?.startsWith('⚠️')
        ? { label: 'Secret Note · Issue', bg: '#f5f3ff', color: '#6d28d9' }
        : { label: 'Secret Note · Review', bg: '#f5f3ff', color: '#6d28d9' };
    case 'review': return { label: 'Challenge Review', bg: '#eff6ff', color: '#1d4ed8' };
    case 'topic_practice': return { label: 'Topic Practice', bg: '#f0fdf4', color: '#15803d' };
    case 'exam_prep': return { label: 'Exam Prep', bg: '#fff7ed', color: '#c2410c' };
    case 'calc': return { label: 'Daily Calculation', bg: '#fffbeb', color: '#b45309' };
    case 'daily': return { label: 'Daily Challenge', bg: '#eef2ff', color: '#4338ca' };
    default:
      return r?.statCollection === 'calc_stats'
        ? { label: 'Daily Calculation', bg: '#fffbeb', color: '#b45309' }
        : { label: 'Daily Challenge', bg: '#eef2ff', color: '#4338ca' };
  }
};

const SourceBadge = ({ report }) => {
  const meta = getReportSource(report);
  return (
    <span style={{ padding: '2px 10px', background: meta.bg, color: meta.color, borderRadius: '12px', fontWeight: 800, fontSize: '0.75rem' }}>
      {meta.label}
    </span>
  );
};

const ReportsAdmin = ({ initialViewMode = 'reports', setInitialViewMode }) => {
  const [viewMode, setViewMode] = useState(initialViewMode);
  
  useEffect(() => {
    if (initialViewMode) setViewMode(initialViewMode);
  }, [initialViewMode]);

  const handleSetViewMode = (mode) => {
    setViewMode(mode);
    setInitialViewMode?.(mode);
  };
  const [reports, setReports] = useState([]);
  // Pending grading items come from the shared AdminFeedContext listener —
  // opening this screen must not add a second grading_queue subscription.
  const { pendingGrading: gradingQueue } = useAdminFeed();
  const [reportsLoading, setReportsLoading] = useState(true);
  const gradingLoading = false;
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [previewReport, setPreviewReport] = useState(null);
  const [previewQuestion, setPreviewQuestion] = useState(null);
  const [previewAttempt, setPreviewAttempt] = useState(null);
  const [previewAttemptLoading, setPreviewAttemptLoading] = useState(false);
  const [isDeletingAll, setIsDeletingAll] = useState(false);
  const [processingId, setProcessingId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [annotatingItem, setAnnotatingItem] = useState(null); // grading item being marked up
  const [annotationSaving, setAnnotationSaving] = useState(false);
  const [comments, setComments] = useState({}); // { [itemId]: teacher comment text }
  const [aiBusy, setAiBusy] = useState({}); // { [itemId]: true } while re-running AI grading
  const ADMIN_REPORT_LIMIT = 100;

  const formatStudentAnswer = (answer) => {
    if (answer === null || answer === undefined || answer === '') return 'No answer recorded';
    if (typeof answer === 'string' || typeof answer === 'number' || typeof answer === 'boolean') return String(answer);
    if (Array.isArray(answer)) return answer.map(formatStudentAnswer).join(', ');
    if (typeof answer === 'object') {
      return Object.entries(answer)
        .map(([key, value]) => `${key}: ${formatStudentAnswer(value)}`)
        .join('\n');
    }
    return String(answer);
  };

  const getPreviewStudentAnswer = () => {
    if (!previewReport) return null;
    const reportAnswer = previewReport.studentAnswer;
    // A plain object (Firestore map) is a valid sub-answers dict — return it directly.
    // Only skip if the answer was accidentally stringified as "[object Object]" at save time.
    const isValidAnswer = reportAnswer !== undefined && reportAnswer !== null && reportAnswer !== '';
    const isStringifiedObject = typeof reportAnswer === 'string' && reportAnswer === '[object Object]';
    if (isValidAnswer && !isStringifiedObject) {
      return reportAnswer;
    }
    const attemptResult = previewAttempt?.results?.[previewAttempt?.resultIndex];
    if (attemptResult?.selectedAnswer !== undefined) return attemptResult.selectedAnswer;
    if (attemptResult?.answer !== undefined) return attemptResult.answer;
    const detailAnswers = previewAttempt?.detailData?.userAnswers || previewAttempt?.statData?.userAnswers;
    if (Array.isArray(detailAnswers) && previewAttempt?.resultIndex !== undefined) {
      return detailAnswers[previewAttempt.resultIndex];
    }
    // Last resort: return reportAnswer even if it's an object (better than null for sub-questions)
    if (isValidAnswer) return reportAnswer;
    return null;
  };

  // One-shot fetch instead of a permanent onSnapshot subscription.
  // AdminFeedContext already covers live badge counts and new-item toasts.
  // We refresh after every mutating action so the list stays accurate.
  const fetchReports = useCallback(async () => {
    try {
      const qReports = query(collection(db, 'reports'), orderBy('createdAt', 'desc'), limit(ADMIN_REPORT_LIMIT));
      const snapshot = await getDocs(qReports);
      setReports(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch (err) {
      console.error('Reports fetch error:', err);
    } finally {
      setReportsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReports();
  }, [fetchReports]);

  const loading = viewMode === 'traffic' ? false : (viewMode === 'reports' ? reportsLoading : gradingLoading);

  const handleMarkResolved = async (reportId) => {
    try {
      await updateDoc(doc(db, 'reports', reportId), { status: 'resolved' });
      await fetchReports();
    } catch (err) {
      console.error('Error resolving report:', err);
    }
  };

  const handleGoToQuestion = async (report) => {
    const fallbackQuestion = {
      ...(report.questionData || {}),
      id: report.questionId || report.questionData?.id,
    };
    setPreviewReport(report);
    setPreviewQuestion(fallbackQuestion);
    setPreviewAttempt(null);

    const questionId = report.questionId || report.questionData?.id;
    if (!questionId) return;

    try {
      setPreviewAttemptLoading(true);
      findReportAttempt(report)
        .then((attempt) => setPreviewAttempt(attempt))
        .catch((err) => console.warn('Could not fetch reported answer attempt:', err))
        .finally(() => setPreviewAttemptLoading(false));

      const questionSnap = await getDoc(doc(db, 'questions', questionId));
      if (questionSnap.exists()) {
        setPreviewQuestion({ id: questionSnap.id, ...questionSnap.data() });
      }
    } catch (err) {
      console.warn('Could not fetch latest reported question:', err);
    }
  };

  const handleDeletePreviewQuestion = async () => {
    const question = previewQuestion || previewReport?.questionData;
    if (!question?.id) return;
    if (!window.confirm(`Delete "${question.question || question.title || 'this question'}" from the Question Bank? This cannot be undone.`)) return;
    try {
      // Find all open reports linked to this question (match on questionId OR questionData.id)
      const linkedReports = reports.filter(r =>
        r.status !== 'resolved' && (
          (r.questionId && r.questionId === question.id) ||
          (r.questionData?.id && r.questionData.id === question.id)
        )
      );
      // Delete question and restore credit for all linked CREDITABLE reports
      // concurrently (non-creditable sources — Secret Note / practice — are
      // just resolved; they have no scored attempt to restore).
      // Credit restore is best-effort — failures don't block the delete.
      await Promise.all([
        updateDoc(doc(db, 'questions', question.id), { isActive: false }),
        removeQuestionFromIndex(question.chapterId, question.id).catch(() => {}),
        // Add to the Secret-Note blocklist so students' locally-saved copies of
        // this broken question are purged on their next app load.
        setDoc(doc(db, 'system_config', 'secretNoteBlocklist'), {
          ids: arrayUnion(String(question.id)),
          updatedAt: serverTimestamp(),
        }, { merge: true }),
        ...linkedReports.map(r => (isCreditable(r) ? restoreCreditForReport(r) : Promise.reject(new Error('not-creditable'))).catch(() =>
          updateDoc(doc(db, 'reports', r.id), { status: 'resolved', resolvedAt: serverTimestamp() })
        )),
      ]);
      setPreviewReport(null);
      setPreviewQuestion(null);
    } catch (err) {
      console.error(err);
      alert('Failed to delete question.');
    }
  };

  const handleFixPreviewQuestion = () => {
    const question = previewQuestion || previewReport?.questionData;
    if (question?.isManual && question?.id) {
      // If the question only has a solution string (no solutionSteps array),
      // convert it so the editor shows the existing steps instead of "No steps yet".
      const hasSolutionSteps = Array.isArray(question.solutionSteps) && question.solutionSteps.length > 0;
      const enriched = hasSolutionSteps
        ? question
        : { ...question, solutionSteps: parseSolutionSteps(question) };
      setEditingQuestion(enriched);
      setPreviewReport(null);
      setPreviewQuestion(null);
      return;
    }

    alert("This is an AI-generated question and cannot be directly edited in the Question Bank. You may need to review the generator logic.");
  };

  // Probe a single stat document by dateKey. Returns a matched attempt or null.
  const probeStatDoc = async (root, studentId, statCollection, dateKey, questionId, fallbackIndex) => {
    const statRef = doc(db, root, studentId, statCollection, dateKey);
    let statData;
    try {
      const snap = await getDoc(statRef);
      if (!snap.exists()) return null;
      statData = snap.data();
    } catch (err) {
      console.warn(`Could not read ${root}/${statCollection}/${dateKey}:`, err?.message);
      return null;
    }

    const detailRef = doc(db, root, studentId, statCollection, dateKey, 'detail_snapshot', 'main');
    let results = Array.isArray(statData.answerResults) ? statData.answerResults : [];
    let detailData = null;
    try {
      const detailSnap = await getDoc(detailRef);
      if (detailSnap.exists()) {
        detailData = detailSnap.data();
        if (Array.isArray(detailData.answerResults)) results = detailData.answerResults;
      }
    } catch (err) {
      console.warn('Could not read detail snapshot:', err);
    }

    let resultIndex = questionId
      ? results.findIndex(r => String(r?.questionId || '') === String(questionId))
      : -1;
    if (resultIndex === -1 && fallbackIndex != null && results[fallbackIndex] != null) {
      resultIndex = fallbackIndex;
    }
    if (resultIndex === -1) return null;

    return {
      root, statCollection, statId: dateKey,
      statRef, detailRef, statData, detailData, results, resultIndex,
      timestamp: statData.timestamp || statData.completedAt || statData.createdAt || dateKey,
    };
  };

  const findReportAttempt = async (report) => {
    const studentId = report.studentId;
    const questionId = report.questionId || report.questionData?.id;
    const fallbackIndex = report.questionIndex ?? null;
    if (!studentId || (!questionId && fallbackIndex == null)) return null;

    const roots = ['users', 'students'];
    const statCollections = ['daily_stats', 'calc_stats'];

    // ── Fast path: probe the report's date (and ±1 day for timezone edge cases) ──
    const reportDate = report.createdAt?.toDate
      ? report.createdAt.toDate()
      : new Date(report.createdAt || Date.now());
    const candidateDates = [-1, 0, 1].map(offset => {
      const d = new Date(reportDate);
      d.setDate(d.getDate() + offset);
      return d.toLocaleDateString('en-CA');
    });

    for (const dateKey of candidateDates) {
      for (const root of roots) {
        for (const statCollection of statCollections) {
          const attempt = await probeStatDoc(root, studentId, statCollection, dateKey, questionId, fallbackIndex);
          if (attempt) {
            const isUnresolved = attempt.results[attempt.resultIndex]?.correct !== true;
            if (isUnresolved) return attempt;
          }
        }
      }
    }

    // NO scan fallback. Reports created from a scored quiz carry direct stat
    // pointers (statRoot/statCollection/statId) and are resolved without any
    // search; the date probe above (report date ±1 day, fixed 12 reads) covers
    // old pointer-less reports. Anything still unmatched has no locatable
    // attempt — the caller falls back to the "grant credit directly" prompt.
    // (A previous version scanned every stat doc here and could exhaust the
    // Firestore read quota in one click — do not reintroduce it.)
    console.warn('No attempt matched for report (pointers + date probe both missed):', report.id);
    return null;
  };

  // Core credit-restore logic — no UI, returns true on success, false if attempt not found,
  // throws on unexpected errors. Used both by the manual Restore Credit button and auto-restore on delete.
  const restoreCreditForReport = async (report) => {
    if (report.creditRestored) return false;

    // Fast path: report was saved with direct stat pointers (new reports)
    let attempt = null;
    if (report.statRoot && report.statCollection && report.statId) {
      attempt = await probeStatDoc(
        report.statRoot, report.studentId,
        report.statCollection, report.statId,
        report.questionId || report.questionData?.id,
        report.questionIndex ?? null,
      );
    }
    // Fallback: scan (old reports without direct pointers)
    if (!attempt) attempt = await findReportAttempt(report);
    if (!attempt) return false;

    const { root, statCollection, statId, statRef, detailRef, resultIndex } = attempt;
    const userRef = doc(db, root, report.studentId);
    const reportRef = doc(db, 'reports', report.id);
    let leaderboardUpdate = null;

    await runTransaction(db, async (transaction) => {
        const statSnap = await transaction.get(statRef);
        const detailSnap = await transaction.get(detailRef);
        const userSnap = await transaction.get(userRef);
        const reportSnap = await transaction.get(reportRef);

        if (!statSnap.exists()) throw new Error('stat-not-found');
        if (reportSnap.exists() && reportSnap.data()?.creditRestored) throw new Error('already-restored');

        const statData = statSnap.data();
        const detailData = detailSnap.exists() ? detailSnap.data() : null;
        const answerResults = Array.isArray(detailData?.answerResults)
          ? [...detailData.answerResults]
          : [...(statData.answerResults || [])];
        const currentResult = answerResults[resultIndex];

        if (!currentResult) throw new Error('result-not-found');
        if (currentResult.correct === true) throw new Error('answer-already-correct');

        const totalPoints = Math.max(1, Number(currentResult.totalPoints) || 1);
        const earnedPoints = Math.max(0, Number(currentResult.pointsEarned) || 0);
        const pointsToRestore = Math.max(1, totalPoints - earnedPoints);
        const currentScore = Math.max(0, Number(statData.score) || 0);
        const total = Math.max(currentScore + pointsToRestore, Number(statData.total) || totalPoints);
        const newScore = Math.min(total, currentScore + pointsToRestore);
        const actualPointsRestored = newScore - currentScore;

        if (actualPointsRestored <= 0) throw new Error('score-already-full');

        const maxXp = Math.max(0, Number(statData.maxXp) || (statCollection === 'calc_stats' ? 50 : 100));
        const currentXp = Math.max(0, Number(statData.xpEarned) || 0);
        const xpPerPoint = total > 0 ? Math.round(maxXp / total) : 0;
        const xpToRestore = Math.max(0, Math.min(maxXp - currentXp, xpPerPoint * actualPointsRestored));
        const newXpEarned = currentXp + xpToRestore;
        const restoredAt = new Date().toISOString();

        answerResults[resultIndex] = {
          ...currentResult,
          correct: true,
          isPending: false,
          pointsEarned: totalPoints,
          selectedAnswer: currentResult.selectedAnswer || 'Teacher approved',
          creditRestored: true,
          creditRestoredByReportId: report.id,
          creditRestoredAt: restoredAt,
        };

        const statUpdate = {
          score: newScore,
          xpEarned: newXpEarned,
          creditRestored: true,
          lastCreditRestoredAt: restoredAt,
          lastCreditRestoredReportId: report.id,
        };
        if (Array.isArray(statData.answerResults)) {
          statUpdate.answerResults = answerResults;
        }

        transaction.update(statRef, statUpdate);
        if (detailSnap.exists()) {
          transaction.set(detailRef, { answerResults, savedAt: restoredAt }, { merge: true });
        }

        if (userSnap.exists()) {
          const userData = userSnap.data();
          const newTotalXP = (Number(userData.totalXP) || 0) + xpToRestore;
          const updatedUserData = { ...userData, totalXP: newTotalXP };
          transaction.update(userRef, {
            totalXP: newTotalXP,
            points: increment(actualPointsRestored * 10),
            updatedAt: restoredAt,
          });

          const leaderboardId = root === 'students' ? `manual-${report.studentId}` : report.studentId;
          const displayName = updatedUserData.name || updatedUserData.displayName ||
            (updatedUserData.firstName ? `${updatedUserData.firstName} ${updatedUserData.lastName || ''}`.trim() : '') ||
            report.studentName || 'Student';
          const avatarUrl = updatedUserData.avatarUrl || updatedUserData.dreamImageUrl ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(report.studentId)}`;

          transaction.set(doc(db, 'leaderboard', leaderboardId), {
            name: displayName,
            avatarUrl,
            totalXP: newTotalXP,
            role: updatedUserData.role || 'student',
            year: updatedUserData.year || updatedUserData.assignedYear || '',
            source: root === 'students' ? 'manual' : 'registered',
            ...(root === 'students' ? { sourceId: report.studentId } : {}),
            lastUpdated: serverTimestamp(),
          }, { merge: true });
          leaderboardUpdate = { root, studentId: report.studentId, data: updatedUserData };
        }

        transaction.update(reportRef, {
          status: 'resolved',
          creditRestored: true,
          creditRestoredAt: restoredAt,
          restoredPoints: actualPointsRestored,
          restoredXp: xpToRestore,
          matchedStatCollection: statCollection,
          matchedStatId: statId,
        });
    });

    if (leaderboardUpdate) {
      const { root, studentId, data } = leaderboardUpdate;
      if (root === 'students') {
        upsertManualStudentLeaderboard(studentId, data).catch(() => {});
      } else {
        upsertRegisteredUserLeaderboard(studentId, data).catch(() => {});
      }
    }
    return true;
  };

  // Fallback: grant XP/points directly when no completed attempt exists
  // (e.g. student filed the report during quiz and never completed it).
  const grantCreditDirectly = async (report) => {
    const studentId = report.studentId;
    const restoredAt = new Date().toISOString();
    const XP_GRANT = 10;
    const POINTS_GRANT = 10;

    const roots = ['users', 'students'];
    let userRef = null;
    let userSnap = null;

    for (const root of roots) {
      const ref = doc(db, root, studentId);
      const snap = await getDoc(ref);
      if (snap.exists()) { userRef = ref; userSnap = snap; break; }
    }

    if (!userRef || !userSnap) throw new Error('user-not-found');

    await runTransaction(db, async (transaction) => {
      const snap = await transaction.get(userRef);
      if (!snap.exists()) throw new Error('user-not-found');
      const data = snap.data();
      const newXP = (Number(data.totalXP) || 0) + XP_GRANT;
      transaction.update(userRef, {
        totalXP: newXP,
        points: increment(POINTS_GRANT),
        updatedAt: restoredAt,
      });
      const reportRef = doc(db, 'reports', report.id);
      transaction.update(reportRef, {
        status: 'resolved',
        creditRestored: true,
        creditRestoredAt: restoredAt,
        creditRestoredDirectly: true,
        restoredPoints: 1,
        restoredXp: XP_GRANT,
      });
    });
  };

  // Secret Note review approval: there are no points to restore (the note is
  // the student's LOCAL mistake notebook), so approving queues a graduation on
  // the student's user doc — their app removes the note on next load, exactly
  // as if they had mastered it.
  const handleApproveSecretNote = async (report) => {
    if (processingId) return;
    const questionId = report.questionId || report.questionData?.id;
    if (!questionId || !report.studentId) {
      alert('This report is missing the question or student id, so the note cannot be located.');
      return;
    }
    if (!window.confirm('Approve this Secret Note answer? The note will be removed from the student\'s notebook (marked as mastered).')) return;
    try {
      setProcessingId(report.id);
      await updateDoc(doc(db, 'users', report.studentId), {
        secretNoteApprovals: arrayUnion({
          kind: report.noteKind || '',
          questionId: String(questionId),
          approvedAt: new Date().toISOString(),
        }),
      });
      await updateDoc(doc(db, 'reports', report.id), {
        status: 'resolved',
        approved: true,
        approvedAt: serverTimestamp(),
      });
      setPreviewReport(null);
      setPreviewQuestion(null);
    } catch (err) {
      console.error('Error approving secret note review:', err);
      alert(`Failed to approve: ${err.message || err}`);
    } finally {
      setProcessingId(null);
    }
  };

  const handleRestoreCredit = async (report) => {
    if (processingId) return;
    if (!isCreditable(report)) {
      alert(`This report came from ${getReportSource(report).label}, which has no scored quiz attempt — there are no points to restore. Use "Mark Resolved" instead.`);
      return;
    }
    if (report.creditRestored) {
      alert('Credit has already been restored for this report.');
      return;
    }

    const confirmed = window.confirm('Restore the removed score for this reported answer and mark the report resolved?');
    if (!confirmed) return;

    try {
      setProcessingId(report.id);
      const restored = await restoreCreditForReport(report);
      if (!restored) {
        // No completed attempt found (e.g. student reported mid-quiz and abandoned).
        // Offer to grant credit directly instead.
        const directGrant = window.confirm(
          "No completed quiz attempt was found for this question — the student may have reported it before finishing the quiz.\n\nGrant credit directly to the student anyway?"
        );
        if (!directGrant) return;
        await grantCreditDirectly(report);
      }
      setPreviewReport(null);
      setPreviewQuestion(null);
    } catch (err) {
      console.error('Error restoring report credit:', err);
      const code = err?.message || 'unknown';
      const KNOWN = {
        'already-restored': 'Credit was already restored for this report.',
        'answer-already-correct': 'This answer is already marked correct — nothing to restore.',
        'stat-not-found': "The student's challenge record for this question could not be found. It may have been pruned or never saved.",
        'result-not-found': 'This answer could not be located within the matched attempt. The detail snapshot may be missing.',
        'score-already-full': "This attempt's score is already full — there is nothing left to restore.",
        'user-not-found': "The student's account could not be found.",
      };
      alert(KNOWN[code] || `Failed to restore credit (${code}). Please check the matching attempt and try again.`);
    } finally {
      setProcessingId(null);
    }
  };

  const handleDeleteReport = async (reportId) => {
    const confirmed = window.confirm('Delete this report? This cannot be undone.');
    if (!confirmed) return;

    try {
      await deleteDoc(doc(db, 'reports', reportId));
      await fetchReports();
    } catch (err) {
      console.error('Error deleting report:', err);
      alert('Failed to delete report. Please try again.');
    }
  };

  const handleDeleteAllReports = async () => {
    if (reports.length === 0 || isDeletingAll) return;
    const confirmed = window.confirm(`Delete all ${reports.length} report${reports.length === 1 ? '' : 's'}? This cannot be undone.`);
    if (!confirmed) return;

    try {
      setIsDeletingAll(true);
      await Promise.all(reports.map(report => deleteDoc(doc(db, 'reports', report.id))));
      await fetchReports();
    } catch (err) {
      console.error('Error deleting reports:', err);
      alert('Failed to delete reports. Please try again.');
    } finally {
      setIsDeletingAll(false);
    }
  };

  const handleGradeSubmission = async (item, approved) => {
    if (processingId) return;
    try {
      setProcessingId(item.id);
      const typedComment = (comments[item.id] || '').trim();
      const feedback = typedComment || item.aiAssessment?.feedback || null;
      const annotation = item.teacherAnnotation || null;
      await gradeSubmission(item, approved, feedback, annotation);
      setComments(prev => { const next = { ...prev }; delete next[item.id]; return next; });
    } catch (err) {
      console.error('Error grading submission:', err);
      alert(`Failed to update grade: ${err.message || err}`);
    } finally {
      setProcessingId(null);
    }
  };

  // Re-run AI pre-grading for a submission that has no aiAssessment yet (the
  // fire-and-forget call at submit time can fail on a transient Gemini 503).
  // The grading_queue live listener picks up the written aiAssessment on success.
  const handleRunAi = async (item) => {
    if (aiBusy[item.id]) return;
    setAiBusy(prev => ({ ...prev, [item.id]: true }));
    try {
      const res = await fetch('/api/auto-grade', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gradingItemId: item.id }),
      });
      const body = await res.json().catch(() => ({}));
      if (!body.success) {
        alert(`AI grading failed: ${body.error || body.message || res.status}`);
      }
    } catch (err) {
      alert(`AI grading network error: ${err?.message || err}`);
    } finally {
      setAiBusy(prev => { const next = { ...prev }; delete next[item.id]; return next; });
    }
  };

  // ── Teacher annotation ──────────────────────────────────────────────────
  const saveAnnotation = async (mergedDataUrl) => {
    const item = annotatingItem;
    if (!item || !mergedDataUrl) { setAnnotatingItem(null); return; }
    setAnnotationSaving(true);
    try {
      await updateDoc(doc(db, 'grading_queue', item.id), {
        teacherAnnotation: mergedDataUrl,
        annotatedAt: serverTimestamp(),
      });
      setAnnotatingItem(null);
    } catch (err) {
      console.error('[annotation] save failed:', err);
      alert('Could not save annotation: ' + (err?.message || err));
    } finally {
      setAnnotationSaving(false);
    }
  };

  const filterBySearch = (name) => {
    if (!searchQuery.trim()) return true;
    return (name || '').toLowerCase().includes(searchQuery.trim().toLowerCase());
  };

  const renderReportsList = () => {
    const filtered = reports.filter(r => filterBySearch(r.studentName));
    return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '24px', color: '#94a3b8' }}>
          <CheckCircle size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
          <h3 style={{ margin: 0, fontWeight: 700 }}>{searchQuery.trim() ? 'No reports found for that student.' : 'No active reports!'}</h3>
          <p style={{ margin: '8px 0 0' }}>{searchQuery.trim() ? 'Try a different name.' : 'All issues have been resolved.'}</p>
        </div>
      ) : (
        filtered.map(report => (

          <div key={report.id} style={{ background: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', borderLeft: report.status === 'resolved' ? '4px solid #10b981' : '4px solid #ef4444', opacity: report.status === 'resolved' ? 0.6 : 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ margin: '0 0 4px', fontSize: '1.1rem', fontWeight: 800 }}>{report.studentName || 'Student'}</h3>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span>{report.createdAt?.toDate ? report.createdAt.toDate().toLocaleDateString() : 'Just now'}</span>
                  <SourceBadge report={report} />
                  <span style={{ padding: '2px 8px', background: '#f1f5f9', borderRadius: '12px', fontWeight: 600 }}>{report.questionData?.type || 'Multiple Choice'}</span>
                  {(report.questionId || report.questionData?.id) && (
                    <span style={{ padding: '2px 10px', background: '#ede9fe', color: '#6d28d9', borderRadius: '12px', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.78rem' }}>
                      ID: {report.questionId || report.questionData?.id}
                    </span>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => handleGoToQuestion(report)} style={{ padding: '8px 16px', borderRadius: '12px', border: '1px solid #e0e7ff', background: 'white', color: '#6366f1', fontWeight: 700, cursor: 'pointer' }}>Go to Question</button>
                {!report.creditRestored && isCreditable(report) && (
                  <button
                    onClick={() => handleRestoreCredit(report)}
                    disabled={!!processingId}
                    style={{ padding: '8px 16px', borderRadius: '12px', border: '1px solid #fed7aa', background: '#fff7ed', color: '#c2410c', fontWeight: 800, cursor: processingId ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Award size={15} /> {processingId === report.id ? 'Restoring...' : 'Restore Credit'}
                  </button>
                )}
                {report.source === 'secret_note' && report.status !== 'resolved' && !report.message?.startsWith('⚠️') && (
                  <button
                    onClick={() => handleApproveSecretNote(report)}
                    disabled={!!processingId}
                    style={{ padding: '8px 16px', borderRadius: '12px', border: '1px solid #ddd6fe', background: '#f5f3ff', color: '#6d28d9', fontWeight: 800, cursor: processingId ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <CheckCircle size={15} /> {processingId === report.id ? 'Approving...' : 'Approve & Graduate Note'}
                  </button>
                )}
                {report.status !== 'resolved' && (
                  <button onClick={() => handleMarkResolved(report.id)} style={{ padding: '8px 16px', borderRadius: '12px', border: 'none', background: '#10b981', color: 'white', fontWeight: 700, cursor: 'pointer' }}>Mark Resolved</button>
                )}
                <button
                  onClick={() => handleDeleteReport(report.id)}
                  style={{ padding: '8px 16px', borderRadius: '12px', border: '1px solid #fecdd3', background: '#fff1f2', color: '#e11d48', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Trash2 size={15} /> Delete
                </button>
              </div>
            </div>
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', color: '#475569', fontStyle: 'italic', fontSize: '1.05rem' }}>"{report.message}"</div>
            {report.questionData && (
              <div style={{ marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Reported Question</span>
                <div style={{ margin: '8px 0 0' }}>
                  <MathView content={report.questionData.question || report.questionData.text || 'No question text'} graphData={report.questionData.graphData} style={{ fontWeight: 600, color: '#1e293b' }} />
                </div>
                {report.creditRestored && (
                  <div style={{ marginTop: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 10px', borderRadius: '999px', background: '#ecfdf5', color: '#047857', fontSize: '0.75rem', fontWeight: 900 }}>
                    <CheckCircle size={14} /> Credit restored +{report.restoredPoints || 0} point{report.restoredPoints === 1 ? '' : 's'}
                  </div>
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
  };

  const renderGradingQueue = () => {
    const filtered = gradingQueue.filter(item => filterBySearch(item.userName));
    return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '24px', color: '#94a3b8' }}>
          <ClipboardCheck size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
          <h3 style={{ margin: 0, fontWeight: 700 }}>{searchQuery.trim() ? 'No grading items for that student.' : 'Queue Clear!'}</h3>
          <p style={{ margin: '8px 0 0' }}>{searchQuery.trim() ? 'Try a different name.' : 'No pending submissions to review.'}</p>
        </div>
      ) : (
        filtered.map(item => (
          <div key={item.id} style={{ background: 'white', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 12px 24px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontWeight: 800, fontSize: '1.1rem' }}>{item.userName}</h4>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap', marginTop: '2px' }}>
                    <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>{item.year} • {item.chapterTitle}</span>
                    {item.questionId && (
                      <span style={{ padding: '1px 8px', background: '#ede9fe', color: '#6d28d9', borderRadius: '10px', fontWeight: 700, fontFamily: 'monospace', fontSize: '0.72rem' }}>
                        ID: {item.questionId}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 700 }}>
                  <Calendar size={14} />
                  {item.submittedAt?.toDate ? item.submittedAt.toDate().toLocaleString() : 'Just now'}
                </div>
                <span style={{ padding: '4px 10px', background: '#e0e7ff', color: '#6366f1', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginTop: '4px', display: 'inline-block' }}>
                  {item.requiresManualGrading ? 'Manual Grade Required' : item.type}
                </span>
                <span style={{ padding: '4px 10px', background: item.challengeType === 'calc' ? '#fffbeb' : item.challengeType === 'exam_prep' ? '#fff7ed' : '#eef2ff', color: item.challengeType === 'calc' ? '#b45309' : item.challengeType === 'exam_prep' ? '#c2410c' : '#4338ca', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginTop: '4px', marginLeft: '6px', display: 'inline-block' }}>
                  {item.challengeType === 'calc' ? 'Daily Calculation' : item.challengeType === 'exam_prep' ? 'Exam Prep' : 'Daily Challenge'}
                </span>
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Question</span>
                <div style={{ marginTop: '10px', padding: '16px', background: '#f1f5f9', borderRadius: '16px' }}>
                  {(() => {
                    const isSketchQuestion = item.type === 'graph_sketch' || item.type === 'teacher_review' || (item.requiresManualGrading && /(draw|sketch|construct)/i.test(item.questionText || ''));
                    return <MathView content={item.questionText} graphData={isSketchQuestion ? null : item.graphData} style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e1b4b' }} />;
                  })()}
                  {item.questionImage && (
                    <img src={item.questionImage} alt="Question diagram" style={{ width: '100%', maxHeight: '220px', objectFit: 'contain', marginTop: '12px', borderRadius: '10px', background: '#fff' }} />
                  )}
                  {Array.isArray(item.options) && item.options.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '14px' }}>
                      {item.options.map((opt, i) => {
                        const text = typeof opt === 'string' ? opt : (opt?.text || String(opt));
                        const isCorrect = String(item.correctAnswer) === String(i) || String(item.correctAnswer) === String(text);
                        return (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '100px', background: isCorrect ? '#f0fdf4' : '#fff', boxShadow: isCorrect ? '0 0 0 2px #10b981' : '0 0 0 1px #e2e8f0' }}>
                            <div style={{ width: '28px', height: '28px', borderRadius: '50%', flexShrink: 0, background: isCorrect ? '#10b981' : '#f1f5f9', color: isCorrect ? '#fff' : '#64748b', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.85rem' }}>
                              {String.fromCharCode(65 + i)}
                            </div>
                            <MathView content={text} style={{ fontWeight: 600, color: '#1e1b4b', flex: 1 }} />
                            {isCorrect && <CheckCircle size={16} style={{ color: '#10b981', flexShrink: 0 }} />}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Student Answer</span>
                  <div style={{ marginTop: '10px', minHeight: '150px', background: '#fff', border: '2.5px solid #6366f1', borderRadius: '20px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    {(() => {
                      // Filter empty/corrupt data URLs before deciding which branch to render
                      const validImages = (item.answerImages || []).filter(url => url && url.length > 100);
                      const singleImage = item.answerImage && item.answerImage.length > 100 ? item.answerImage : null;
                      const GRID_BG = { background: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' };

                      const hasImages = validImages.length > 0 || singleImage;

                      if (validImages.length > 0) {
                        return (
                          <>
                            {validImages.map((imgUrl, i) => (
                              <div key={i} style={{ ...GRID_BG, borderBottom: i < validImages.length - 1 ? '1px dashed #cbd5e1' : 'none', padding: '16px' }}>
                                <img src={imgUrl} alt={`Student Drawing Page ${i + 1}`} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', display: 'block' }} />
                              </div>
                            ))}
                            {item.answerText && (
                              <div style={{ padding: '12px 16px', borderTop: '1px dashed #cbd5e1', background: '#f8fafc' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Written Answer</span>
                                <MathView content={item.answerText} style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginTop: '4px' }} />
                              </div>
                            )}
                          </>
                        );
                      }

                      if (singleImage) {
                        return (
                          <>
                            <div style={{ ...GRID_BG, padding: '16px', flex: 1, display: 'flex' }}>
                              <img src={singleImage} alt="Student Drawing" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', display: 'block', margin: 'auto' }} />
                            </div>
                            {item.answerText && (
                              <div style={{ padding: '12px 16px', borderTop: '1px dashed #cbd5e1', background: '#f8fafc' }}>
                                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Written Answer</span>
                                <MathView content={item.answerText} style={{ fontSize: '1rem', fontWeight: 700, color: '#1e293b', marginTop: '4px' }} />
                              </div>
                            )}
                          </>
                        );
                      }

                      if (item.answerText) {
                        return (
                          <div style={{ padding: '20px', textAlign: 'center', margin: 'auto' }}>
                            <MathView content={item.answerText} style={{ fontSize: '1.2rem', fontWeight: 800 }} />
                          </div>
                        );
                      }

                      // No image and no text — student submitted a blank canvas
                      return (
                        <div style={{ padding: '24px', textAlign: 'center', margin: 'auto', color: '#94a3b8' }}>
                          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>✏️</div>
                          <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem' }}>No drawing submitted</p>
                          <p style={{ margin: '4px 0 0', fontSize: '0.8rem' }}>Student submitted a blank canvas.</p>
                        </div>
                      );
                    })()}
                  </div>
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Expected Answer / Solution</span>
                  <div style={{ marginTop: '10px', minHeight: '150px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '20px', padding: '20px' }}>
                    <MathView content={item.correctAnswer || 'N/A'} style={{ fontSize: '1rem', fontWeight: 700, color: '#166534', marginBottom: '12px' }} />
                    {item.solution && (
                      <div style={{ borderTop: '1px solid #bbf7d0', paddingTop: '12px' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#15803d' }}>SOLUTION GUIDE:</span>
                        <MathView content={item.solution} style={{ fontSize: '0.9rem', color: '#166534' }} />
                      </div>
                    )}
                    {(() => {
                      const isSketchQuestion = item.type === 'graph_sketch' || item.type === 'teacher_review' || (item.requiresManualGrading && /(draw|sketch|construct)/i.test(item.questionText || ''));
                      return item.graphData && isSketchQuestion && (
                        <div style={{ marginTop: '12px', borderTop: '1px solid #bbf7d0', paddingTop: '12px' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#15803d', display: 'block', marginBottom: '8px' }}>EXPECTED GRAPH:</span>
                          <MathView content="" graphData={item.graphData} />
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>

              {item.aiAssessment && (
                <div style={{ marginTop: '24px', padding: '20px', borderRadius: '20px', border: `2px solid ${item.aiAssessment.isCorrect ? '#bbf7d0' : '#fecaca'}`, background: item.aiAssessment.isCorrect ? '#f0fdf4' : '#fef2f2' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '1.2rem' }}>{item.aiAssessment.isCorrect ? '✅' : '❌'}</span>
                    <span style={{ fontWeight: 900, fontSize: '0.85rem', color: item.aiAssessment.isCorrect ? '#166534' : '#991b1b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      AI Assessment — {item.aiAssessment.isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                    <span style={{ marginLeft: 'auto', padding: '2px 8px', borderRadius: '100px', background: item.aiAssessment.confidence === 'high' ? '#dcfce7' : item.aiAssessment.confidence === 'low' ? '#fee2e2' : '#fef3c7', color: item.aiAssessment.confidence === 'high' ? '#166534' : item.aiAssessment.confidence === 'low' ? '#991b1b' : '#92400e', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>
                      {item.aiAssessment.confidence} confidence
                    </span>
                  </div>
                  {item.aiAssessment.teacherNote && (
                    <p style={{ margin: '0 0 8px', fontSize: '0.82rem', color: '#475569', lineHeight: 1.5 }}>
                      <span style={{ fontWeight: 900, color: '#64748b' }}>Teacher note: </span>{item.aiAssessment.teacherNote}
                    </p>
                  )}
                  {item.aiAssessment.feedback && (
                    <p style={{ margin: 0, fontSize: '0.85rem', color: item.aiAssessment.isCorrect ? '#166534' : '#7f1d1d', lineHeight: 1.5 }}>
                      <span style={{ fontWeight: 900 }}>Student feedback: </span>{item.aiAssessment.feedback}
                    </p>
                  )}
                </div>
              )}

              {!item.aiAssessment && (
                <div style={{ marginTop: '24px', padding: '16px 20px', borderRadius: '20px', border: '2px dashed #e2e8f0', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                  <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 700 }}>
                    No AI assessment yet {aiBusy[item.id] ? '— grading…' : '(it may have failed at submit time)'}
                  </span>
                  <button
                    onClick={() => handleRunAi(item)}
                    disabled={!!aiBusy[item.id]}
                    style={{ padding: '10px 18px', borderRadius: '12px', border: 'none', background: aiBusy[item.id] ? '#c7d2fe' : 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)', color: '#fff', fontWeight: 800, fontSize: '0.82rem', cursor: aiBusy[item.id] ? 'wait' : 'pointer', whiteSpace: 'nowrap' }}
                  >
                    {aiBusy[item.id] ? 'Running…' : '✨ Run AI grading'}
                  </button>
                </div>
              )}

              {/* Teacher annotation preview */}
              {item.teacherAnnotation && (
                <div style={{ marginTop: '20px', padding: '14px', borderRadius: '16px', background: '#f0f9ff', border: '1px solid #bae6fd' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>✏️ Your Markup</div>
                  <img src={item.teacherAnnotation} alt="Teacher annotation" style={{ width: '100%', borderRadius: '10px', objectFit: 'contain', maxHeight: '300px' }} />
                </div>
              )}

              {/* Teacher comment to the student */}
              <div style={{ marginTop: '20px' }}>
                <label style={{ fontSize: '0.72rem', fontWeight: 900, color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                  💬 Comment to student {item.aiAssessment?.feedback ? '(overrides AI feedback)' : ''}
                </label>
                <textarea
                  value={comments[item.id] ?? ''}
                  onChange={(e) => setComments(prev => ({ ...prev, [item.id]: e.target.value }))}
                  placeholder="Write a message the student will see in their History…"
                  rows={3}
                  style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1.5px solid #e2e8f0', fontSize: '0.9rem', fontWeight: 500, color: '#1e293b', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
                />
              </div>

              <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => setAnnotatingItem(item)}
                  style={{ padding: '14px 20px', borderRadius: '20px', border: '2px solid #e0e7ff', background: '#fff', color: '#6366f1', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  ✏️ {item.teacherAnnotation ? 'Re-mark' : 'Mark Up'}
                </button>
                <button
                  onClick={() => handleGradeSubmission(item, true)}
                  disabled={!!processingId}
                  style={{ flex: 1, padding: '18px', borderRadius: '20px', border: 'none', background: '#10b981', color: 'white', fontWeight: 900, fontSize: '1.05rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', boxShadow: '0 8px 20px rgba(16,185,129,0.2)' }}
                >
                  <CheckCircle size={22} /> {processingId === item.id ? 'Processing...' : 'Approve & Give Points'}
                </button>
                <button
                  onClick={() => handleGradeSubmission(item, false)}
                  disabled={!!processingId}
                  style={{ padding: '0 28px', borderRadius: '20px', border: '2px solid #fee2e2', background: '#fff', color: '#ef4444', fontWeight: 800, fontSize: '1rem', cursor: 'pointer' }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
  };

  return (
    <div className="app-page">
      {annotatingItem && (
        <AnnotationModal
          item={annotatingItem}
          saving={annotationSaving}
          onCancel={() => setAnnotatingItem(null)}
          onSave={saveAnnotation}
        />
      )}
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Reports & Review</h2>
        </div>

        <div style={{ position: 'relative', marginLeft: 'auto' }}>
          <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' }} />
          <input
            type="text"
            placeholder="Search student..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ height: '44px', paddingLeft: '36px', paddingRight: '12px', borderRadius: '14px', border: '1.5px solid #e2e8f0', background: 'white', fontSize: '0.9rem', fontWeight: 600, color: '#1e293b', outline: 'none', width: '180px' }}
          />
        </div>

        <div style={{ display: 'flex', background: '#f1f5f9', padding: '6px', borderRadius: '18px', gap: '4px', marginLeft: '12px' }}>
          <button 
            onClick={() => handleSetViewMode('reports')}
            style={{ padding: '10px 20px', borderRadius: '14px', border: 'none', background: viewMode === 'reports' ? 'white' : 'transparent', color: viewMode === 'reports' ? '#6366f1' : '#64748b', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: viewMode === 'reports' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s' }}
          >
            <MessageSquare size={18} /> Reports 
            {reports.filter(r => r.status !== 'resolved').length > 0 && (
              <span style={{ background: '#ef4444', color: 'white', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '8px', marginLeft: '4px' }}>
                {reports.filter(r => r.status !== 'resolved').length}
              </span>
            )}
          </button>
          <button 
            onClick={() => handleSetViewMode('grading')}
            style={{ padding: '10px 20px', borderRadius: '14px', border: 'none', background: viewMode === 'grading' ? 'white' : 'transparent', color: viewMode === 'grading' ? '#6366f1' : '#64748b', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: viewMode === 'grading' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s' }}
          >
            <ClipboardCheck size={18} /> Grading Queue
            {gradingQueue.length > 0 && (
              <span style={{ background: '#6366f1', color: 'white', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '8px', marginLeft: '4px' }}>
                {gradingQueue.length}
              </span>
            )}
          </button>
          <button 
            onClick={() => handleSetViewMode('traffic')}
            style={{ padding: '10px 20px', borderRadius: '14px', border: 'none', background: viewMode === 'traffic' ? 'white' : 'transparent', color: viewMode === 'traffic' ? '#6366f1' : '#64748b', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: viewMode === 'traffic' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s' }}
          >
            <Activity size={18} /> Traffic Live
          </button>
        </div>

        {viewMode === 'reports' && reports.length > 0 && (
          <button
            onClick={handleDeleteAllReports}
            disabled={isDeletingAll}
            style={{ marginLeft: '16px', height: '44px', padding: '0 16px', borderRadius: '14px', border: '1.5px solid #fecdd3', background: '#fff1f2', color: '#e11d48', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Trash2 size={16} /> Delete All
          </button>
        )}
      </div>

      <div style={{ padding: '0 24px 40px', maxWidth: viewMode === 'traffic' ? '1200px' : '900px', transition: 'max-width 0.3s ease' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <div className="sapere-loader" style={{ margin: '0 auto 20px' }}></div>
            <p style={{ color: '#94a3b8', fontWeight: 700 }}>Loading items...</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {viewMode === 'reports' ? (
              renderReportsList()
            ) : viewMode === 'grading' ? (
              renderGradingQueue()
            ) : (
              <TrafficMonitorPanel />
            )}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {previewReport && (() => {
          const closePreview = () => { setPreviewReport(null); setPreviewQuestion(null); setPreviewAttempt(null); };
          const q = previewQuestion || previewReport.questionData || {};
          const studentAnswer = getPreviewStudentAnswer();
          const options = Array.isArray(q.options) ? q.options : [];
          const hasSubs = Array.isArray(q.subQuestions) && q.subQuestions.length > 0;
          // For sub-questions the student's answer is an object keyed by sq.id || index.
          const subAnswerObj = (studentAnswer && typeof studentAnswer === 'object' && !Array.isArray(studentAnswer))
            ? studentAnswer
            : null;
          return (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'fixed', inset: 0, zIndex: 1200, display: 'flex', flexDirection: 'column', background: '#f8fafc' }}
            >
              {/* Top bar — same style as ChallengeReviewView */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 32px', borderBottom: '1px solid rgba(15,23,42,0.06)', background: '#fff', flexShrink: 0 }}>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#ef4444', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Student Report</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#1e1b4b', marginTop: '2px' }}>
                    {q.chapterTitle || previewReport.questionData?.chapterTitle || 'Question Review'}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <SourceBadge report={previewReport} />
                  {previewReport.creditRestored ? (
                    <span style={{ padding: '8px 16px', borderRadius: '999px', background: '#f0fdf4', color: '#166534', fontSize: '0.78rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle size={15} /> Credit Restored
                    </span>
                  ) : isCreditable(previewReport) && (
                    <button
                      onClick={() => handleRestoreCredit(previewReport)}
                      disabled={!!processingId}
                      style={{ padding: '10px 20px', borderRadius: '14px', border: 'none', background: '#f97316', color: '#fff', fontWeight: 900, fontSize: '0.88rem', cursor: processingId ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 16px rgba(249,115,22,0.3)' }}
                    >
                      <Award size={16} /> {processingId === previewReport.id ? 'Restoring…' : 'Restore Credit'}
                    </button>
                  )}
                  <button
                    onClick={handleFixPreviewQuestion}
                    style={{ padding: '10px 20px', borderRadius: '14px', border: 'none', background: '#6366f1', color: '#fff', fontWeight: 900, fontSize: '0.88rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 16px rgba(99,102,241,0.3)' }}
                  >
                    <Wrench size={16} /> Fix Question
                  </button>
                  <button onClick={closePreview} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(15,23,42,0.06)', background: '#fff', color: '#64748b', cursor: 'pointer', display: 'grid', placeItems: 'center', boxShadow: '0 4px 12px rgba(15,23,42,0.05)' }}>
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Body — matches ChallengeReviewView layout */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '28px 32px', display: 'flex', gap: '28px', alignItems: 'flex-start', maxWidth: '1400px', width: '100%', boxSizing: 'border-box', margin: '0 auto' }}>
                {/* Left column */}
                <div style={{ flex: '0 1 640px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>

                  {/* Student's report message */}
                  <div style={{ padding: '20px 24px', borderRadius: '20px', background: '#fff1f2', border: '1.5px solid #fecaca', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: '#ef4444' }} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                      <AlertCircle size={17} style={{ color: '#ef4444' }} />
                      <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ef4444' }}>Student's Report</span>
                      <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>
                        {previewReport.createdAt?.toDate ? previewReport.createdAt.toDate().toLocaleString() : ''}
                      </span>
                    </div>
                    <p style={{ margin: 0, color: '#7f1d1d', fontWeight: 700, fontSize: '1rem', lineHeight: 1.6 }}>
                      "{previewReport.message || 'No message'}"
                    </p>
                    <div style={{ marginTop: '10px', fontSize: '0.78rem', color: '#94a3b8', fontWeight: 700 }}>
                      — {previewReport.studentName || 'Student'}
                    </div>
                  </div>

                  {/* Question card */}
                  <div style={{ padding: '24px 26px', borderRadius: '24px', background: '#fff', border: '1px solid rgba(15,23,42,0.06)', boxShadow: '0 12px 28px rgba(15,23,42,0.04)' }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>Question</div>
                    <MathView content={q.question || q.text || 'No question text'} graphData={q.graphData} style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e1b4b', lineHeight: 1.55 }} />
                    {q.questionImage && (
                      <img src={q.questionImage} alt="Question" style={{ width: '100%', maxHeight: '260px', objectFit: 'contain', marginTop: '14px', borderRadius: '14px', background: '#f8fafc' }} />
                    )}
                  </div>

                  {/* Student's answer — single-answer questions only.
                      Sub-question answers are shown per-part in the Sub-questions block below. */}
                  {!hasSubs && (
                  <div style={{ padding: '20px 22px', borderRadius: '20px', background: '#eef2ff', border: '1px solid #c7d2fe' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4f46e5' }}>Student's Answer</span>
                    </div>
                    {previewAttemptLoading && !studentAnswer ? (
                      <div style={{ color: '#64748b', fontWeight: 700 }}>Loading…</div>
                    ) : q.type === 'interactive_grid' && Array.isArray(studentAnswer) ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
                        <InteractiveFractionGrid
                          gridConfig={q.gridConfig || { type: 'rect', rows: 2, cols: 2 }}
                          selectedCells={studentAnswer}
                          onChange={() => {}}
                          disabled={true}
                        />
                        <div style={{ fontSize: '0.85rem', color: '#312e81', fontWeight: 700 }}>
                          {studentAnswer.length} panel{studentAnswer.length !== 1 ? 's' : ''} shaded
                        </div>
                      </div>
                    ) : (
                      <MathView content={formatStudentAnswer(studentAnswer) || 'No answer recorded'} style={{ color: '#312e81', fontWeight: 800, fontSize: '1rem', whiteSpace: 'pre-wrap' }} />
                    )}
                  </div>
                  )}

                  {/* Sub-questions — each part with the student's answer, the correct
                      answer, and its own step-by-step worked solution. */}
                  {hasSubs && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {q.subQuestions.map((sq, idx) => {
                        const sAns = subAnswerObj ? subAnswerObj[sq.id ?? idx] : undefined;
                        const hasAns = sAns !== undefined && sAns !== null && sAns !== '';
                        const isCorrect = hasAns && answersMatch(sAns, sq.answer);
                        return (
                          <div key={sq.id ?? idx} style={{ padding: '20px 22px', borderRadius: '20px', background: '#fff', border: '1px solid rgba(15,23,42,0.06)', boxShadow: '0 12px 28px rgba(15,23,42,0.04)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                              <span style={{ width: '26px', height: '26px', borderRadius: '8px', background: '#eef2ff', color: '#4f46e5', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.82rem', flexShrink: 0 }}>
                                {String.fromCharCode(97 + idx)}
                              </span>
                              <MathView content={sq.question || sq.text || ''} graphData={sq.graphData} style={{ fontSize: '0.98rem', fontWeight: 700, color: '#1e1b4b', lineHeight: 1.5 }} />
                            </div>

                            {/* Student's answer for this part */}
                            <div style={{ padding: '12px 14px', borderRadius: '14px', background: '#eef2ff', border: '1px solid #c7d2fe', marginBottom: '8px' }}>
                              <div style={{ fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4f46e5', marginBottom: '4px' }}>Student's Answer</div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                {hasAns && isCorrect && <CheckCircle size={16} style={{ color: '#10b981' }} />}
                                {hasAns && !isCorrect && <X size={16} style={{ color: '#ef4444' }} />}
                                <MathView content={hasAns ? formatStudentAnswer(sAns) : 'No answer recorded'} style={{ color: '#312e81', fontWeight: 800, fontSize: '0.95rem' }} />
                              </div>
                              {hasAns && !isCorrect && (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', color: '#64748b', fontWeight: 700, fontSize: '0.85rem' }}>
                                  Correct: <MathView content={String(sq.answer ?? '')} style={{ color: '#166534', fontWeight: 800 }} />
                                </div>
                              )}
                            </div>

                            {/* Step-by-step solution for this part */}
                            {(sq.solution || (Array.isArray(sq.solutionSteps) && sq.solutionSteps.length > 0)) && (
                              <WorkedSolutionSteps question={sq} graphData={sq.graphData} />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Options */}
                  {options.length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {options.map((opt, i) => {
                        const text = typeof opt === 'string' ? opt : opt.text;
                        const img = opt?.imageUrl || opt?.image || '';
                        const isCorrect = String(q.answer) === String(i) || answersMatch(text, q.answer);
                        const isChosen = String(studentAnswer) === String(text);
                        const isWrong = isChosen && !isCorrect;
                        return (
                          <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: '14px',
                            padding: '14px 18px', borderRadius: '100px',
                            background: isCorrect ? '#f0fdf4' : isWrong ? '#fef2f2' : '#fff',
                            boxShadow: isCorrect ? '0 0 0 2px #10b981' : isWrong ? '0 0 0 2px #ef4444' : '0 0 0 1px #e2e8f0',
                          }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', flexShrink: 0, background: isCorrect ? '#10b981' : isWrong ? '#ef4444' : '#f1f5f9', color: isCorrect || isWrong ? '#fff' : '#64748b', display: 'grid', placeItems: 'center', fontWeight: 900, fontSize: '0.9rem' }}>
                              {String.fromCharCode(65 + i)}
                            </div>
                            {img && <img src={img} alt="" style={{ width: '40px', height: '40px', objectFit: 'contain', borderRadius: '8px' }} />}
                            <MathView content={text || ''} style={{ fontWeight: 700, color: '#1e1b4b', flex: 1 }} />
                            {isCorrect && <CheckCircle size={20} style={{ color: '#10b981', flexShrink: 0 }} />}
                            {isWrong && <X size={20} style={{ color: '#ef4444', flexShrink: 0 }} />}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Working out / sketch image */}
                  {(() => {
                    const pages = Array.isArray(previewReport.workingOutPages) ? previewReport.workingOutPages.filter(Boolean) : [];
                    const single = previewReport.sketchDataUrl || previewReport.workingOut || null;
                    const images = pages.length > 0 ? pages : (single ? [single] : []);
                    if (images.length === 0) return null;
                    return (
                      <div style={{ padding: '18px 22px', borderRadius: '20px', background: '#faf5ff', border: '1.5px solid #e9d5ff' }}>
                        <div style={{ fontSize: '0.68rem', fontWeight: 900, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>
                          Student's Sketch / Working Out{images.length > 1 ? ` (${images.length} pages)` : ''}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          {images.map((src, i) => (
                            <img key={i} src={src} alt={`Student sketch page ${i + 1}`} style={{ width: '100%', maxHeight: '400px', objectFit: 'contain', borderRadius: '12px', background: '#fff', border: '1px solid #e2e8f0' }} />
                          ))}
                        </div>
                      </div>
                    );
                  })()}

                  {/* Hint */}
                  {q.hint && (
                    <div style={{ padding: '18px 22px', borderRadius: '20px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: '#b45309' }}>
                        <BookOpen size={16} />
                        <span style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Hint</span>
                      </div>
                      <MathView content={q.hint} style={{ color: '#78350f', fontWeight: 600, fontSize: '0.95rem' }} />
                    </div>
                  )}

                  {/* Solution — step-by-step when the question has solutionSteps,
                      otherwise a single block. Same renderer the students see. */}
                  {!hasSubs && (q.solution || (Array.isArray(q.solutionSteps) && q.solutionSteps.length > 0)) && (
                    <WorkedSolutionSteps question={q} graphData={q.graphData} />
                  )}
                </div>

                {/* Right column — teacher notes / metadata */}
                <div style={{ flex: '1 1 320px', minWidth: '260px', display: 'flex', flexDirection: 'column', gap: '16px', position: 'sticky', top: '0' }}>
                  <div style={{ padding: '22px', borderRadius: '22px', background: '#fff', border: '1px solid rgba(15,23,42,0.06)', boxShadow: '0 12px 28px rgba(15,23,42,0.04)' }}>
                    <div style={{ fontSize: '0.68rem', fontWeight: 900, color: '#94a3b8', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>Report Details</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>Student</span>
                        <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#1e1b4b' }}>{previewReport.studentName || '—'}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>Source</span>
                        <span style={{ fontSize: '0.78rem', fontWeight: 800, padding: '3px 10px', borderRadius: '999px', background: previewReport.source === 'review' ? '#faf5ff' : '#f0f9ff', color: previewReport.source === 'review' ? '#7c3aed' : '#0369a1' }}>
                          {previewReport.source === 'review' ? 'Post-quiz review' : 'During quiz'}
                        </span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>Status</span>
                        <span style={{ fontSize: '0.78rem', fontWeight: 800, padding: '3px 10px', borderRadius: '999px', background: previewReport.status === 'resolved' ? '#f0fdf4' : '#fff1f2', color: previewReport.status === 'resolved' ? '#166534' : '#b91c1c' }}>
                          {previewReport.status === 'resolved' ? 'Resolved' : 'Open'}
                        </span>
                      </div>
                      {previewReport.creditRestored && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>Credit</span>
                          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#166534' }}>+{previewReport.restoredPoints || 0} pts restored</span>
                        </div>
                      )}
                      <div style={{ height: '1px', background: '#f1f5f9' }} />
                      <div>
                        <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>Chapter</span>
                        <p style={{ margin: '4px 0 0', fontSize: '0.88rem', fontWeight: 700, color: '#1e1b4b' }}>{q.chapterTitle || '—'}</p>
                      </div>
                      {q.topicTitle && (
                        <div>
                          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b' }}>Topic</span>
                          <p style={{ margin: '4px 0 0', fontSize: '0.85rem', fontWeight: 700, color: '#1e1b4b' }}>{q.topicCode ? `${q.topicCode} · ` : ''}{q.topicTitle}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Teacher actions */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {!previewReport.creditRestored && isCreditable(previewReport) && (
                      <button
                        onClick={() => handleRestoreCredit(previewReport)}
                        disabled={!!processingId}
                        style={{ width: '100%', padding: '16px', borderRadius: '18px', border: 'none', background: 'linear-gradient(135deg, #fb923c, #f97316)', color: '#fff', fontWeight: 900, fontSize: '0.95rem', cursor: processingId ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 20px rgba(249,115,22,0.28)' }}
                      >
                        <Award size={18} /> {processingId === previewReport.id ? 'Restoring…' : 'Restore Credit'}
                      </button>
                    )}
                    {previewReport.source === 'secret_note' && previewReport.status !== 'resolved' && !previewReport.message?.startsWith('⚠️') && (
                      <button
                        onClick={() => handleApproveSecretNote(previewReport)}
                        disabled={!!processingId}
                        style={{ width: '100%', padding: '16px', borderRadius: '18px', border: 'none', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', color: '#fff', fontWeight: 900, fontSize: '0.95rem', cursor: processingId ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 20px rgba(124,58,237,0.28)' }}
                      >
                        <CheckCircle size={18} /> {processingId === previewReport.id ? 'Approving…' : 'Approve & Graduate Note'}
                      </button>
                    )}
                    <button
                      onClick={handleFixPreviewQuestion}
                      style={{ width: '100%', padding: '16px', borderRadius: '18px', border: 'none', background: 'linear-gradient(135deg, #818cf8, #6366f1)', color: '#fff', fontWeight: 900, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 8px 20px rgba(99,102,241,0.28)' }}
                    >
                      <Wrench size={18} /> Fix Question
                    </button>
                    {q.isManual && q.id && (
                      <button
                        onClick={handleDeletePreviewQuestion}
                        style={{ width: '100%', padding: '14px', borderRadius: '18px', border: '1.5px solid #fecaca', background: '#fff1f2', color: '#b91c1c', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                      >
                        <Trash2 size={17} /> Delete Question
                      </button>
                    )}
                    {previewReport.status !== 'resolved' && (
                      <button
                        onClick={() => { handleMarkResolved(previewReport.id); closePreview(); }}
                        style={{ width: '100%', padding: '14px', borderRadius: '18px', border: '1.5px solid #bbf7d0', background: '#f0fdf4', color: '#166534', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                      >
                        <CheckCircle size={17} /> Mark Resolved
                      </button>
                    )}
                    <button
                      onClick={() => { handleDeleteReport(previewReport.id); closePreview(); }}
                      style={{ width: '100%', padding: '14px', borderRadius: '18px', border: '1.5px solid #fecdd3', background: '#fff1f2', color: '#e11d48', fontWeight: 800, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                    >
                      <Trash2 size={17} /> Delete Report
                    </button>
                    <button onClick={closePreview} style={{ width: '100%', padding: '14px', borderRadius: '18px', border: '1px solid #e2e8f0', background: '#fff', color: '#64748b', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer' }}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {editingQuestion && (
        <QuestionBankModal 
          chapter={{ id: editingQuestion.chapterId, title: editingQuestion.chapterTitle || 'Editing Question' }} 
          onClose={() => setEditingQuestion(null)}
          directEditQuestion={editingQuestion}
        />
      )}
    </div>
  );
};

export default ReportsAdmin;
