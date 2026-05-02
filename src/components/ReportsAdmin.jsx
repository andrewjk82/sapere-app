import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { AlertCircle, CheckCircle, ExternalLink, X, BookOpen } from 'lucide-react';
import QuestionBankModal from './QuestionBankModal';

const ReportsAdmin = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingQuestion, setEditingQuestion] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'reports'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
      setReports(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

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

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2 style={{ fontSize: '2rem', fontWeight: 900 }}>Student Reported Issues</h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Review and fix errors reported by students during their challenges.</p>
        </div>
      </div>

      <div style={{ padding: '20px', maxWidth: '800px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>Loading reports...</div>
        ) : reports.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '24px', color: '#94a3b8' }}>
            <CheckCircle size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
            <h3 style={{ margin: 0, fontWeight: 700 }}>No active reports!</h3>
            <p style={{ margin: '8px 0 0' }}>All issues have been resolved.</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {reports.map(report => (
              <div 
                key={report.id} 
                style={{ 
                  background: 'white', 
                  borderRadius: '24px', 
                  padding: '24px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                  position: 'relative',
                  borderLeft: report.status === 'resolved' ? '4px solid #10b981' : '4px solid #ef4444',
                  opacity: report.status === 'resolved' ? 0.6 : 1
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px', fontSize: '1.1rem', fontWeight: 800 }}>{report.studentName || 'Student'}</h3>
                    <div style={{ fontSize: '0.85rem', color: '#94a3b8', display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <span>{report.createdAt?.toDate ? report.createdAt.toDate().toLocaleDateString() : 'Just now'}</span>
                      <span style={{ padding: '2px 8px', background: '#f1f5f9', borderRadius: '12px', fontWeight: 600 }}>
                        {report.questionData?.type || 'Multiple Choice'}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button 
                      onClick={() => handleGoToQuestion(report)}
                      style={{ 
                        padding: '8px 16px', 
                        borderRadius: '12px', 
                        border: '1px solid #e0e7ff', 
                        background: 'white', 
                        color: '#6366f1', 
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      Go to Question
                    </button>
                    {report.status !== 'resolved' && (
                      <button 
                        onClick={() => handleMarkResolved(report.id)}
                        style={{ 
                          padding: '8px 16px', 
                          borderRadius: '12px', 
                          border: 'none', 
                          background: '#10b981', 
                          color: 'white', 
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        Mark Resolved
                      </button>
                    )}
                  </div>
                </div>

                <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', color: '#475569', fontStyle: 'italic', fontSize: '1.05rem' }}>
                  "{report.message}"
                </div>
                
                {report.questionData && (
                  <div style={{ marginTop: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '16px' }}>
                    <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>Reported Question</span>
                    <p style={{ margin: '8px 0 0', fontWeight: 600, color: '#1e293b' }}>{report.questionData.question}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
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
