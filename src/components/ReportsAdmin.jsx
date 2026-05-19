import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc, getDoc, getDocs, runTransaction, where, increment, serverTimestamp, limit } from 'firebase/firestore';
import { db } from '../firebase/config';
import { upsertRegisteredUserLeaderboard, upsertManualStudentLeaderboard } from '../services/leaderboardService';
import { AlertCircle, CheckCircle, ExternalLink, X, BookOpen, Trash2, ClipboardCheck, MessageSquare, ArrowRight, User, Calendar, Award, Wrench } from 'lucide-react';
import QuestionBankModal from './QuestionBankModal';
import MathView from './MathView';

const ReportsAdmin = () => {
  const [viewMode, setViewMode] = useState('reports'); // 'reports' | 'grading'
  const [reports, setReports] = useState([]);
  const [gradingQueue, setGradingQueue] = useState([]); // Added missing state
  const [reportsLoading, setReportsLoading] = useState(true);
  const [gradingLoading, setGradingLoading] = useState(true);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [previewReport, setPreviewReport] = useState(null);
  const [previewQuestion, setPreviewQuestion] = useState(null);
  const [previewAttempt, setPreviewAttempt] = useState(null);
  const [previewAttemptLoading, setPreviewAttemptLoading] = useState(false);
  const [isDeletingAll, setIsDeletingAll] = useState(false);
  const [processingId, setProcessingId] = useState(null);
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
    if (reportAnswer !== undefined && reportAnswer !== null && reportAnswer !== '') {
      return reportAnswer;
    }
    const attemptResult = previewAttempt?.results?.[previewAttempt?.resultIndex];
    if (attemptResult?.selectedAnswer !== undefined) return attemptResult.selectedAnswer;
    if (attemptResult?.answer !== undefined) return attemptResult.answer;
    const detailAnswers = previewAttempt?.detailData?.userAnswers || previewAttempt?.statData?.userAnswers;
    if (Array.isArray(detailAnswers) && previewAttempt?.resultIndex !== undefined) {
      return detailAnswers[previewAttempt.resultIndex];
    }
    return null;
  };

  useEffect(() => {
    // Listen for Issue Reports
    const qReports = query(collection(db, 'reports'), orderBy('createdAt', 'desc'), limit(ADMIN_REPORT_LIMIT));
    const unsubReports = onSnapshot(qReports, (snapshot) => {
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setReports(data);
      setReportsLoading(false);
    }, (err) => {
      console.error("Reports subscription error:", err);
      setReportsLoading(false);
    });

    // Listen for Grading Queue
    const qGrading = query(
      collection(db, 'grading_queue'),
      where('status', '==', 'pending'),
      orderBy('submittedAt', 'desc'),
      limit(ADMIN_REPORT_LIMIT)
    );
    const unsubGrading = onSnapshot(qGrading, (snapshot) => {
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setGradingQueue(data);
      setGradingLoading(false);
    }, (err) => {
      console.error("Grading subscription error:", err);
      setGradingLoading(false);
    });

    return () => {
      unsubReports();
      unsubGrading();
    };
  }, []);

  const loading = viewMode === 'reports' ? reportsLoading : gradingLoading;

  const handleMarkResolved = async (reportId) => {
    try {
      await updateDoc(doc(db, 'reports', reportId), {
        status: 'resolved'
      });
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

  const handleFixPreviewQuestion = () => {
    const question = previewQuestion || previewReport?.questionData;
    if (question?.isManual && question?.id) {
      setEditingQuestion(question);
      setPreviewReport(null);
      setPreviewQuestion(null);
      return;
    }

    alert("This is an AI-generated question and cannot be directly edited in the Question Bank. You may need to review the generator logic.");
  };

  const findReportAttempt = async (report) => {
    const studentId = report.studentId;
    const questionId = report.questionId || report.questionData?.id;
    if (!studentId || !questionId) return null;

    const roots = ['users', 'students'];
    const statCollections = ['daily_stats', 'calc_stats'];
    const attempts = [];

    for (const root of roots) {
      for (const statCollection of statCollections) {
        let snap;
        try {
          snap = await getDocs(collection(db, root, studentId, statCollection));
        } catch (err) {
          // e.g. students/{id}/daily_stats has no security rule → permission
          // denied. Registered students keep their data under users/, so skip
          // this root gracefully rather than aborting the whole lookup.
          console.warn(`Skipping ${root}/${statCollection} for report match:`, err?.message);
          continue;
        }
        for (const statDoc of snap.docs) {
          const statData = statDoc.data();
          const statRef = doc(db, root, studentId, statCollection, statDoc.id);
          const detailRef = doc(db, root, studentId, statCollection, statDoc.id, 'detail_snapshot', 'main');
          let detailData = null;
          let results = Array.isArray(statData.answerResults) ? statData.answerResults : [];

          try {
            const detailSnap = await getDoc(detailRef);
            if (detailSnap.exists()) {
              detailData = detailSnap.data();
              if (Array.isArray(detailData.answerResults)) results = detailData.answerResults;
            }
          } catch (err) {
            console.warn('Could not read detail snapshot while locating report attempt:', err);
          }

          const resultIndex = results.findIndex(r => String(r?.questionId || '') === String(questionId));
          if (resultIndex === -1) continue;

          attempts.push({
            root,
            statCollection,
            statId: statDoc.id,
            statRef,
            detailRef,
            statData,
            detailData,
            results,
            resultIndex,
            timestamp: statData.timestamp || statData.completedAt || statData.createdAt || statDoc.id,
          });
        }
      }
    }

    attempts.sort((a, b) => {
      const aTime = a.timestamp?.toDate ? a.timestamp.toDate().getTime() : new Date(a.timestamp).getTime();
      const bTime = b.timestamp?.toDate ? b.timestamp.toDate().getTime() : new Date(b.timestamp).getTime();
      return (Number.isFinite(bTime) ? bTime : 0) - (Number.isFinite(aTime) ? aTime : 0);
    });

    return attempts.find(a => a.results[a.resultIndex]?.correct !== true) || attempts[0] || null;
  };

  const handleRestoreCredit = async (report) => {
    if (processingId) return;
    if (report.creditRestored) {
      alert('Credit has already been restored for this report.');
      return;
    }

    const confirmed = window.confirm('Restore the removed score for this reported answer and mark the report resolved?');
    if (!confirmed) return;

    try {
      setProcessingId(report.id);
      const attempt = await findReportAttempt(report);
      if (!attempt) {
        alert('Could not find the matching completed attempt for this report.');
        return;
      }

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
          const updatedUserData = {
            ...userData,
            totalXP: newTotalXP,
          };
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
      };
      const message = KNOWN[code]
        || `Failed to restore credit (${code}). Please check the matching attempt and try again.`;
      alert(message);
    } finally {
      setProcessingId(null);
    }
  };

  const handleDeleteAllReports = async () => {
    if (reports.length === 0 || isDeletingAll) return;
    const confirmed = window.confirm(`Delete all ${reports.length} report${reports.length === 1 ? '' : 's'}? This cannot be undone.`);
    if (!confirmed) return;

    try {
      setIsDeletingAll(true);
      await Promise.all(reports.map(report => deleteDoc(doc(db, 'reports', report.id))));
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
      
      // 1. Delete the grading queue item immediately
      await deleteDoc(doc(db, 'grading_queue', item.id));

      if (approved) {
        const type = item.challengeType || 'daily';
        const colName = type === 'calc' ? 'calc_stats' : 'daily_stats';
        const userId = item.userId;
        
        // Match statId logic from Dashboard
        let statId = item.date;
        if (!statId && item.submittedAt) {
          const sAt = item.submittedAt;
          const d = (typeof sAt.toDate === 'function') ? sAt.toDate() : new Date(sAt);
          if (!isNaN(d.getTime())) {
            statId = d.toLocaleDateString('en-CA');
          }
        }
        if (!statId) statId = item.id.split('_')[0];
        
        const totalQ = item.totalQuestions || 10;
        const maxXP = type === 'calc' ? 50 : 100;
        const xpPerQuestion = Math.round(maxXP / totalQ);

        // Sync XP and Leaderboard via Transaction for atomicity
        try {
          await runTransaction(db, async (transaction) => {
            let userRef = doc(db, 'users', userId);
            let userSnap = await transaction.get(userRef);
            let source = 'registered';

            if (!userSnap.exists()) {
              userRef = doc(db, 'students', userId);
              userSnap = await transaction.get(userRef);
              source = 'manual';
            }

            if (userSnap.exists()) {
              const userData = userSnap.data();
              const newXP = (Number(userData.totalXP) || 0) + xpPerQuestion;
              
              // Update user doc
              transaction.update(userRef, {
                totalXP: newXP,
                points: increment(10),
                updatedAt: new Date().toISOString()
              });

              // Update leaderboard doc
              const leaderboardId = source === 'manual' ? `manual-${userId}` : userId;
              const leaderboardRef = doc(db, 'leaderboard', leaderboardId);
              
              const displayName = userData.name || userData.displayName || 
                                (userData.firstName ? `${userData.firstName} ${userData.lastName || ''}`.trim() : '') || 'Student';
              
              const avatarUrl = userData.avatarUrl || userData.dreamImageUrl || 
                               `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userId)}`;

              transaction.set(leaderboardRef, {
                name: displayName,
                avatarUrl: avatarUrl,
                totalXP: newXP,
                lastUpdated: serverTimestamp(),
                role: userData.role || 'student',
                year: userData.year || userData.assignedYear || ''
              }, { merge: true });
            }
          });
        } catch (err) {
          console.error("XP/Leaderboard sync failed:", err);
        }

        // Update stats document
        if (statId && userId) {
          const safeStatId = typeof statId === 'string' ? statId.replace(/\//g, '-') : String(statId);
          let statRef = doc(db, 'users', userId, colName, safeStatId);
          try {
            let statSnap = await getDoc(statRef);
            if (!statSnap.exists()) {
              statRef = doc(db, 'students', userId, colName, statId);
              statSnap = await getDoc(statRef);
            }

            if (statSnap.exists()) {
              const statsData = statSnap.data();
              const updatedResults = [...(statsData.answerResults || [])];
              const qIndex = updatedResults.findIndex(r => r.questionId === item.questionId);
              
              if (qIndex !== -1) {
                updatedResults[qIndex].correct = true;
                updatedResults[qIndex].isPending = false;
                updatedResults[qIndex].selectedAnswer = 'Approved';
              }

              await updateDoc(statRef, {
                score: increment(1),
                xpEarned: increment(xpPerQuestion),
                ...(qIndex !== -1 ? { answerResults: updatedResults } : {})
              });
            }
          } catch (err) {
             console.warn("Could not update stat score/results", err);
          }
        }
      }

      // Notify via server if needed (simulated)
      console.log(`Submission ${item.id} ${approved ? 'approved' : 'rejected'}`);

    } catch (err) {
      console.error('Error grading submission:', err);
      alert('Failed to update grade. Please check your connection.');
    } finally {
      setProcessingId(null);
    }
  };

  const renderReportsList = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {reports.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '24px', color: '#94a3b8' }}>
          <CheckCircle size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
          <h3 style={{ margin: 0, fontWeight: 700 }}>No active reports!</h3>
          <p style={{ margin: '8px 0 0' }}>All issues have been resolved.</p>
        </div>
      ) : (
        reports.map(report => (
          <div key={report.id} style={{ background: 'white', borderRadius: '24px', padding: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', position: 'relative', borderLeft: report.status === 'resolved' ? '4px solid #10b981' : '4px solid #ef4444', opacity: report.status === 'resolved' ? 0.6 : 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <h3 style={{ margin: '0 0 4px', fontSize: '1.1rem', fontWeight: 800 }}>{report.studentName || 'Student'}</h3>
                <div style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span>{report.createdAt?.toDate ? report.createdAt.toDate().toLocaleDateString() : 'Just now'}</span>
                  <span style={{ padding: '2px 8px', background: '#f1f5f9', borderRadius: '12px', fontWeight: 600 }}>{report.questionData?.type || 'Multiple Choice'}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => handleGoToQuestion(report)} style={{ padding: '8px 16px', borderRadius: '12px', border: '1px solid #e0e7ff', background: 'white', color: '#6366f1', fontWeight: 700, cursor: 'pointer' }}>Go to Question</button>
                {!report.creditRestored && (
                  <button
                    onClick={() => handleRestoreCredit(report)}
                    disabled={!!processingId}
                    style={{ padding: '8px 16px', borderRadius: '12px', border: '1px solid #fed7aa', background: '#fff7ed', color: '#c2410c', fontWeight: 800, cursor: processingId ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                  >
                    <Award size={15} /> {processingId === report.id ? 'Restoring...' : 'Restore Credit'}
                  </button>
                )}
                {report.status !== 'resolved' && (
                  <button onClick={() => handleMarkResolved(report.id)} style={{ padding: '8px 16px', borderRadius: '12px', border: 'none', background: '#10b981', color: 'white', fontWeight: 700, cursor: 'pointer' }}>Mark Resolved</button>
                )}
              </div>
            </div>
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', color: '#475569', fontStyle: 'italic', fontSize: '1.05rem' }}>"{report.message}"</div>
            {report.questionData && (
              <div style={{ marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Reported Question</span>
                <p style={{ margin: '8px 0 0', fontWeight: 600, color: '#1e293b' }}>
                  {report.questionData.question || report.questionData.text || 'No question text'}
                </p>
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

  const renderGradingQueue = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {gradingQueue.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '24px', color: '#94a3b8' }}>
          <ClipboardCheck size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
          <h3 style={{ margin: 0, fontWeight: 700 }}>Queue Clear!</h3>
          <p style={{ margin: '8px 0 0' }}>No pending submissions to review.</p>
        </div>
      ) : (
        gradingQueue.map(item => (
          <div key={item.id} style={{ background: 'white', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 12px 24px rgba(0,0,0,0.03)', border: '1px solid #e2e8f0' }}>
            <div style={{ padding: '24px', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: '#6366f1', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={20} />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontWeight: 800, fontSize: '1.1rem' }}>{item.userName}</h4>
                  <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>{item.year} • {item.chapterTitle}</span>
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
              </div>
            </div>

            <div style={{ padding: '24px' }}>
              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Question</span>
                <div style={{ marginTop: '10px', padding: '16px', background: '#f1f5f9', borderRadius: '16px' }}>
                  <MathView content={item.questionText} style={{ fontSize: '1.1rem', fontWeight: 700, color: '#1e1b4b' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Student Answer</span>
                  <div style={{ marginTop: '10px', minHeight: '150px', background: '#fff', border: '2.5px solid #6366f1', borderRadius: '20px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                    {item.answerImages && item.answerImages.length > 0 ? (
                      item.answerImages.map((imgUrl, i) => (
                        <div key={i} style={{ borderBottom: i < item.answerImages.length - 1 ? '1px dashed #cbd5e1' : 'none', padding: '16px', background: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                          <img src={imgUrl} alt={`Student Drawing Page ${i+1}`} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', display: 'block' }} />
                        </div>
                      ))
                    ) : item.answerImage ? (
                      <div style={{ padding: '16px', flex: 1, display: 'flex', background: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                        <img src={item.answerImage} alt="Student Drawing" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', display: 'block', margin: 'auto' }} />
                      </div>
                    ) : (
                      <div style={{ padding: '20px', textAlign: 'center', margin: 'auto' }}>
                         <MathView content={item.answerText || 'No text answer'} style={{ fontSize: '1.2rem', fontWeight: 800 }} />
                      </div>
                    )}
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
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
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
                  style={{ padding: '0 32px', borderRadius: '20px', border: '2px solid #fee2e2', background: '#fff', color: '#ef4444', fontWeight: 800, fontSize: '1rem', cursor: 'pointer' }}
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

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Reports & Review</h2>
        </div>
        
        <div style={{ display: 'flex', background: '#f1f5f9', padding: '6px', borderRadius: '18px', gap: '4px', marginLeft: 'auto' }}>
          <button 
            onClick={() => setViewMode('reports')}
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
            onClick={() => setViewMode('grading')}
            style={{ padding: '10px 20px', borderRadius: '14px', border: 'none', background: viewMode === 'grading' ? 'white' : 'transparent', color: viewMode === 'grading' ? '#6366f1' : '#64748b', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: viewMode === 'grading' ? '0 4px 12px rgba(0,0,0,0.05)' : 'none', transition: 'all 0.2s' }}
          >
            <ClipboardCheck size={18} /> Grading Queue
            {gradingQueue.length > 0 && (
              <span style={{ background: '#6366f1', color: 'white', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '8px', marginLeft: '4px' }}>
                {gradingQueue.length}
              </span>
            )}
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

      <div style={{ padding: '0 24px 40px', maxWidth: '900px' }}>
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
            {viewMode === 'reports' ? renderReportsList() : renderGradingQueue()}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {previewReport && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 1200, display: 'grid', placeItems: 'center', padding: '20px' }}
          >
            <div onClick={() => { setPreviewReport(null); setPreviewQuestion(null); setPreviewAttempt(null); }} style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.58)', backdropFilter: 'blur(8px)' }} />
            <motion.div
              initial={{ scale: 0.96, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 10 }}
              style={{ position: 'relative', width: 'min(760px, 100%)', maxHeight: '86vh', overflowY: 'auto', background: '#fff', borderRadius: '28px', padding: '28px', boxShadow: '0 30px 80px rgba(15,23,42,0.32)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '22px' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#6366f1', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Reported Question</div>
                  <h3 style={{ margin: '6px 0 0', fontSize: '1.45rem', color: '#1e1b4b' }}>{previewQuestion?.chapterTitle || previewReport.questionData?.chapterTitle || 'Question Preview'}</h3>
                </div>
                <button onClick={() => { setPreviewReport(null); setPreviewQuestion(null); setPreviewAttempt(null); }} style={{ width: '40px', height: '40px', borderRadius: '14px', border: 'none', background: '#f1f5f9', color: '#64748b', cursor: 'pointer' }}>
                  <X size={18} />
                </button>
              </div>

              <div style={{ display: 'grid', gap: '16px' }}>
                <div style={{ padding: '18px', borderRadius: '18px', background: '#fff1f2', border: '1px solid #ffe4e6' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#e11d48', textTransform: 'uppercase', marginBottom: '8px' }}>Student Report</div>
                  <div style={{ color: '#7f1d1d', fontWeight: 700, lineHeight: 1.5 }}>"{previewReport.message || 'No message'}"</div>
                </div>

                <div style={{ padding: '18px', borderRadius: '18px', background: '#eef2ff', border: '1px solid #c7d2fe' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#4f46e5', textTransform: 'uppercase', marginBottom: '8px' }}>Student Answer</div>
                  {previewAttemptLoading && !getPreviewStudentAnswer() ? (
                    <div style={{ color: '#64748b', fontWeight: 700 }}>Loading submitted answer...</div>
                  ) : (
                    <MathView content={formatStudentAnswer(getPreviewStudentAnswer())} style={{ color: '#312e81', fontWeight: 800, whiteSpace: 'pre-wrap' }} />
                  )}
                </div>

                {previewReport.workingOut && (
                  <div style={{ padding: '18px', borderRadius: '18px', background: '#f5f3ff', border: '1px solid #ddd6fe' }}>
                    <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#7c3aed', textTransform: 'uppercase', marginBottom: '10px' }}>Student's Working Out</div>
                    <img src={previewReport.workingOut} alt="Student working out" style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'contain', display: 'block', borderRadius: '12px', background: '#fff', border: '1px solid #e2e8f0' }} />
                  </div>
                )}

                <div style={{ padding: '22px', borderRadius: '22px', background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', marginBottom: '10px' }}>Question</div>
                  <MathView content={previewQuestion?.question || previewQuestion?.text || 'No question text'} style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1e1b4b' }} />
                  {previewQuestion?.questionImage && (
                    <img src={previewQuestion.questionImage} alt="Question" style={{ width: '100%', maxHeight: '240px', objectFit: 'contain', marginTop: '16px', borderRadius: '16px', background: '#fff' }} />
                  )}
                </div>

                {Array.isArray(previewQuestion?.options) && previewQuestion.options.length > 0 && (
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {previewQuestion.options.map((option, idx) => {
                      const text = typeof option === 'string' ? option : option.text;
                      const isAnswer = String(previewQuestion.answer) === String(idx) || String(previewQuestion.answer) === String(text);
                      return (
                        <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '14px 16px', borderRadius: '16px', background: isAnswer ? '#f0fdf4' : '#fff', border: `1.5px solid ${isAnswer ? '#bbf7d0' : '#e2e8f0'}` }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: isAnswer ? '#10b981' : '#f1f5f9', color: isAnswer ? '#fff' : '#64748b', display: 'grid', placeItems: 'center', fontWeight: 900, flexShrink: 0 }}>{idx + 1}</div>
                          <MathView content={text || ''} style={{ fontWeight: 700, color: '#334155' }} />
                        </div>
                      );
                    })}
                  </div>
                )}

                {(previewQuestion?.hint || previewQuestion?.solution) && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div style={{ padding: '16px', borderRadius: '16px', background: '#fffbeb', border: '1px solid #fef3c7' }}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#d97706', textTransform: 'uppercase', marginBottom: '8px' }}>Hint</div>
                      <MathView content={previewQuestion.hint || 'No hint'} style={{ color: '#92400e', fontWeight: 700 }} />
                    </div>
                    <div style={{ padding: '16px', borderRadius: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                      <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#15803d', textTransform: 'uppercase', marginBottom: '8px' }}>Solution</div>
                      <MathView content={previewQuestion.solution || 'No solution'} style={{ color: '#166534', fontWeight: 700 }} />
                    </div>
                  </div>
                )}
              </div>

              <div style={{ marginTop: '24px', display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button onClick={() => { setPreviewReport(null); setPreviewQuestion(null); setPreviewAttempt(null); }} style={{ padding: '14px 20px', borderRadius: '16px', border: 'none', background: '#f1f5f9', color: '#475569', fontWeight: 800, cursor: 'pointer' }}>Close</button>
                {!previewReport.creditRestored && (
                  <button
                    onClick={() => handleRestoreCredit(previewReport)}
                    disabled={!!processingId}
                    style={{ padding: '14px 22px', borderRadius: '16px', border: 'none', background: '#f97316', color: '#fff', fontWeight: 900, cursor: processingId ? 'wait' : 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                  >
                    <Award size={17} /> {processingId === previewReport.id ? 'Restoring...' : 'Restore Credit'}
                  </button>
                )}
                <button onClick={handleFixPreviewQuestion} style={{ padding: '14px 22px', borderRadius: '16px', border: 'none', background: '#6366f1', color: '#fff', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Wrench size={17} /> Fix
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
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
