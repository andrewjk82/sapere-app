import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, deleteDoc, getDoc, runTransaction, where } from 'firebase/firestore';
import { db } from '../firebase/config';
import { AlertCircle, CheckCircle, ExternalLink, X, BookOpen, Trash2, ClipboardCheck, MessageSquare, ArrowRight, User, Calendar, Award } from 'lucide-react';
import QuestionBankModal from './QuestionBankModal';
import MathView from './MathView';

const ReportsAdmin = () => {
  const [viewMode, setViewMode] = useState('reports'); // 'reports' | 'grading'
  const [reports, setReports] = useState([]);
  const [gradingQueue, setGradingQueue] = useState([]); // Added missing state
  const [reportsLoading, setReportsLoading] = useState(true);
  const [gradingLoading, setGradingLoading] = useState(true);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [isDeletingAll, setIsDeletingAll] = useState(false);
  const [processingId, setProcessingId] = useState(null);

  useEffect(() => {
    // Listen for Issue Reports
    const qReports = query(collection(db, 'reports'), orderBy('createdAt', 'desc'));
    const unsubReports = onSnapshot(qReports, (snapshot) => {
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setReports(data);
      setReportsLoading(false);
    }, (err) => {
      console.error("Reports subscription error:", err);
      setReportsLoading(false);
    });

    // Listen for Grading Queue
    const qGrading = query(collection(db, 'grading_queue'), where('status', '==', 'pending'));
    const unsubGrading = onSnapshot(qGrading, (snapshot) => {
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      const sorted = data.sort((a, b) => (b.submittedAt?.toMillis?.() || 0) - (a.submittedAt?.toMillis?.() || 0));
      setGradingQueue(sorted);
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

  const handleGoToQuestion = (report) => {
    if (report.questionData?.isManual) {
      setEditingQuestion(report.questionData);
    } else {
      alert("This is an AI-generated question and cannot be directly edited in the Question Bank. You may need to review the generator logic.");
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
      
      await runTransaction(db, async (transaction) => {
        // 1. Update grading queue status
        const queueRef = doc(db, 'grading_queue', item.id);
        transaction.update(queueRef, { 
          status: approved ? 'approved' : 'rejected',
          gradedAt: new Date(),
          scoreAwarded: approved ? 1 : 0
        });

        if (approved) {
          // 2. Update Student's Profile (Total Points/XP)
          const userRef = doc(db, 'users', item.userId);
          const userSnap = await transaction.get(userRef);
          if (userSnap.exists()) {
            const userData = userSnap.data();
            transaction.update(userRef, {
              points: (userData.points || 0) + 10, // Award 10 points for a manual pass
              totalXp: (userData.totalXp || 0) + 50 // Award 50 XP
            });
          }

          // 3. Update the specific Challenge record if possible
          // Challenges are stored by date in daily_stats/calc_stats
          if (item.submittedAt) {
            let date;
            try {
              date = item.submittedAt.toDate ? item.submittedAt.toDate().toISOString().split('T')[0] : 
                     (item.submittedAt instanceof Date ? item.submittedAt.toISOString().split('T')[0] : 
                     new Date().toISOString().split('T')[0]);
            } catch (e) {
              date = new Date().toISOString().split('T')[0];
            }
            
            const statsRef = item.challengeType === 'calc'
              ? doc(db, 'users', item.userId, 'calc_stats', date)
              : doc(db, 'users', item.userId, 'daily_stats', date);
            
            const statsSnap = await transaction.get(statsRef);
            if (statsSnap.exists()) {
              const statsData = statsSnap.data();
              const updatedResults = [...(statsData.answerResults || [])];
              
              // Find the question in results to mark as correct
              const qIndex = updatedResults.findIndex(r => r.questionId === item.questionId);
              if (qIndex !== -1) {
                updatedResults[qIndex].correct = true;
                updatedResults[qIndex].isPending = false;
                updatedResults[qIndex].selectedAnswer = 'Approved';
                
                transaction.update(statsRef, {
                  score: (statsData.score || 0) + 1,
                  xpEarned: (statsData.xpEarned || 0) + 50,
                  answerResults: updatedResults
                });
              }
            }
          }
        }
      });

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
                {report.status !== 'resolved' && (
                  <button onClick={() => handleMarkResolved(report.id)} style={{ padding: '8px 16px', borderRadius: '12px', border: 'none', background: '#10b981', color: 'white', fontWeight: 700, cursor: 'pointer' }}>Mark Resolved</button>
                )}
              </div>
            </div>
            <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', color: '#475569', fontStyle: 'italic', fontSize: '1.05rem' }}>"{report.message}"</div>
            {report.questionData && (
              <div style={{ marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Reported Question</span>
                <p style={{ margin: '8px 0 0', fontWeight: 600, color: '#1e293b' }}>{report.questionData.question}</p>
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
                  <div style={{ marginTop: '10px', minHeight: '150px', background: '#fff', border: '2.5px solid #6366f1', borderRadius: '20px', overflow: 'hidden', position: 'relative' }}>
                    {item.answerImage ? (
                      <img src={item.answerImage} alt="Student Drawing" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                      <div style={{ padding: '20px', textAlign: 'center' }}>
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
          <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#1e1b4b' }}>Reports & Review</h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', fontWeight: 500 }}>Manage student issues and manual grading tasks.</p>
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
