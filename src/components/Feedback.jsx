import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, query, orderBy, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { MessageSquare, ArrowLeft } from 'lucide-react';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

/**
 * Student-facing Feedback page: shows every teacher comment as a card.
 * Source: users/{uid}/saved_feedback (written by gradingService when a teacher
 * sends a comment). Opening this page clears the dashboard "unread" badge.
 */
const Feedback = ({ setActiveTab }) => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    if (!user?.uid) return;
    setLoading(true);
    try {
      const snap = await getDocs(query(
        collection(db, 'users', user.uid, 'saved_feedback'),
        orderBy('savedAt', 'desc'),
      ));
      setNotes(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    } catch { /* non-fatal */ }
    finally { setLoading(false); }
  }, [user?.uid]);

  useEffect(() => { load(); }, [load]);

  // Clear the unread badge once the student opens the page.
  useEffect(() => {
    if (!user?.uid) return;
    updateDoc(doc(db, 'users', user.uid), { unreadFeedbackCount: 0 }).catch(() => {});
  }, [user?.uid]);

  const handleDelete = async (id) => {
    if (!user?.uid) return;
    try {
      await deleteDoc(doc(db, 'users', user.uid, 'saved_feedback', id));
      setNotes(prev => prev.filter(n => n.id !== id));
      showToast('Feedback removed.', 'success');
    } catch (err) { showToast('Could not delete: ' + (err?.message || err), 'error'); }
  };

  const formatDate = (note) => {
    const raw = note.savedAt?.toDate ? note.savedAt.toDate() : (note.gradedAt ? new Date(note.gradedAt) : null);
    if (!raw || isNaN(raw.getTime())) return '';
    return raw.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
  };

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {setActiveTab && (
            <button onClick={() => setActiveTab('Dashboard')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', display: 'flex', alignItems: 'center' }}>
              <ArrowLeft size={22} />
            </button>
          )}
          <h2>Teacher Feedback</h2>
        </div>
        <p>Comments your teacher sent on your work</p>
      </div>

      <div style={{ maxWidth: '640px', margin: '0 auto', width: '100%', paddingBottom: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8' }}>
            <div className="app-spinner" style={{ margin: '0 auto 12px' }} />
            <p style={{ margin: 0, fontWeight: 700 }}>Loading...</p>
          </div>
        ) : notes.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8', background: '#f8fafc', borderRadius: '16px', border: '2px dashed #e2e8f0' }}>
            <MessageSquare size={40} style={{ opacity: 0.2, margin: '0 auto 12px', display: 'block' }} />
            <p style={{ margin: 0, fontWeight: 700 }}>No feedback yet</p>
            <p style={{ margin: '6px 0 0', fontSize: '0.85rem' }}>When your teacher comments on your work, it will appear here.</p>
          </div>
        ) : notes.map(note => (
          <div key={note.id} style={{ padding: '18px', borderRadius: '16px', background: note.correct ? '#f0fdf4' : '#fef2f2', border: `1px solid ${note.correct ? '#bbf7d0' : '#fecaca'}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', color: note.correct ? '#166534' : '#991b1b', flex: 1 }}>
                {note.correct ? '✅ Correct' : '❌ Incorrect'}
                {note.chapterTitle ? ` · ${note.chapterTitle}` : note.topicTitle ? ` · ${note.topicTitle}` : ''}
                {formatDate(note) ? ` · ${formatDate(note)}` : ''}
              </span>
              <button onClick={() => handleDelete(note.id)} style={{ padding: '4px 10px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#fff', color: '#64748b', fontWeight: 800, fontSize: '0.7rem', cursor: 'pointer' }}>Delete</button>
            </div>
            {note.questionText && (
              <p style={{ margin: '0 0 8px', fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, fontWeight: 600 }}>
                <span style={{ fontWeight: 800, color: '#94a3b8' }}>Q: </span>{note.questionText}
              </p>
            )}
            {note.teacherFeedback ? (
              <p style={{ margin: 0, fontSize: '0.92rem', color: note.correct ? '#166534' : '#7f1d1d', lineHeight: 1.6 }}>{note.teacherFeedback}</p>
            ) : (
              <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, fontStyle: 'italic' }}>
                {note.correct ? 'Your teacher marked this correct.' : 'Your teacher marked this incorrect.'}
              </p>
            )}
            {note.teacherAnnotation && (
              <img src={note.teacherAnnotation} alt="Teacher markup" style={{ marginTop: '12px', width: '100%', borderRadius: '10px', objectFit: 'contain', border: '1px solid #e2e8f0' }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
