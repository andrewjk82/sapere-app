import React, { useEffect, useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Plus, Search, Video, FileText, CheckCircle2, Circle, Trash2, X, Save } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, query, where, onSnapshot, doc, updateDoc, deleteDoc, orderBy } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const Schedule = () => {
  const { user, isAdmin } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSession, setSelectedSession] = useState(null);
  const [loading, setLoading] = useState(true);

  // For editing
  const [editData, setEditData] = useState({ notes: '', homework: '', isHomeworkCompleted: false });

  useEffect(() => {
    if (!user?.uid) return;

    let q;
    if (isAdmin) {
      q = query(collection(db, 'sessions'));
    } else {
      q = query(collection(db, 'sessions'), where('studentId', '==', user.uid));
    }

    const unsubscribe = onSnapshot(q, (snap) => {
      const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      // Sort client-side to avoid complex index requirements for now
      const sortedDocs = docs.sort((a, b) => new Date(b.date) - new Date(a.date));
      setSessions(sortedDocs);
      setLoading(false);
    }, (err) => {
      console.error("Firestore error:", err);
      setLoading(false);
    });

    return unsubscribe;
  }, [user?.uid, isAdmin]);

  const filteredSessions = useMemo(() => {
    const q = searchQuery.toLowerCase();
    return sessions.filter(s => 
      s.studentName?.toLowerCase().includes(q) || 
      s.subject?.toLowerCase().includes(q) ||
      s.date?.includes(q)
    );
  }, [sessions, searchQuery]);

  const handleOpenDetails = (session) => {
    setSelectedSession(session);
    setEditData({
      notes: session.notes || '',
      homework: session.homework || '',
      isHomeworkCompleted: session.isHomeworkCompleted || false
    });
  };

  const handleSaveDetails = async () => {
    if (!selectedSession || !isAdmin) return;
    try {
      await updateDoc(doc(db, 'sessions', selectedSession.id), {
        ...editData,
        updatedAt: new Date().toISOString()
      });
      alert("Session details updated!");
      setSelectedSession(null);
    } catch (e) {
      console.error(e);
      alert("Failed to update.");
    }
  };

  const handleDeleteSession = async (id) => {
    if (!isAdmin || !window.confirm("Delete this session?")) return;
    try {
      await deleteDoc(doc(db, 'sessions', id));
      if (selectedSession?.id === id) setSelectedSession(null);
    } catch (e) {
      console.error(e);
    }
  };

  const formatDay = (dateStr) => {
    // Assuming dateStr is DD/MM/YYYY or similar
    return dateStr; 
  };

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Schedule</h2>
          <p>{isAdmin ? "Manage all student sessions and homework." : "View your past and upcoming sessions."}</p>
        </div>
        <div className="app-page__actions">
          <div className="app-input" style={{ minWidth: 260 }}>
            <Search size={18} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by student or subject..."
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="app-grid app-grid--content">
        <section className="app-panel page-card">
          <div className="page-card__header">
            <h3>{isAdmin ? "All Sessions" : "My Sessions"}</h3>
            <span className="page-pill">{filteredSessions.length} total</span>
          </div>

          <div className="page-list">
            {filteredSessions.length === 0 ? (
              <div className="app-empty">No sessions found.</div>
            ) : (
              filteredSessions.map((s) => (
                <div key={s.id} className="page-list__item" onClick={() => handleOpenDetails(s)} style={{ cursor: 'pointer' }}>
                  <div className="page-list__icon">
                    {s.isHomeworkCompleted ? <CheckCircle2 size={20} color="#10b981" /> : <Calendar size={20} />}
                  </div>
                  <div className="page-list__main">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <strong>{s.subject}</strong>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: s.isHomeworkCompleted ? '#10b981' : '#64748b' }}>
                        {s.isHomeworkCompleted ? 'HW DONE' : 'HW PENDING'}
                      </span>
                    </div>
                    <p>{s.studentName} • {s.startTime} - {s.endTime}</p>
                    <div className="page-list__meta">
                      <span className="page-meta">
                        <Calendar size={14} />
                        {s.date}
                      </span>
                      {s.notes && (
                        <span className="page-meta">
                          <FileText size={14} />
                          Has Notes
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        <aside className="app-page">
          {selectedSession ? (
            <section className="app-panel page-card" style={{ position: 'sticky', top: '24px' }}>
              <div className="page-card__header">
                <h3>Session Details</h3>
                <button onClick={() => setSelectedSession(null)} style={{ border: 0, background: 'transparent', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '16px' }}>
                  <div style={{ fontWeight: 800, color: '#6366f1', fontSize: '0.8rem', marginBottom: '4px' }}>STUDENT</div>
                  <div style={{ fontWeight: 700 }}>{selectedSession.studentName}</div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '8px' }}>
                    {selectedSession.date} • {selectedSession.startTime}
                  </div>
                </div>

                <div className="app-form-field">
                  <label style={{ fontWeight: 800, fontSize: '0.75rem', color: '#94a3b8' }}>WHAT WE DID TODAY</label>
                  {isAdmin ? (
                    <textarea 
                      value={editData.notes}
                      onChange={e => setEditData({...editData, notes: e.target.value})}
                      placeholder="Summary of the session..."
                      style={{ width: '100%', minHeight: '100px', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '8px', fontSize: '0.9rem' }}
                    />
                  ) : (
                    <div style={{ padding: '12px', background: '#fff', borderRadius: '12px', border: '1px solid #f1f5f9', marginTop: '8px', fontSize: '0.92rem', whiteSpace: 'pre-wrap' }}>
                      {selectedSession.notes || "No notes provided for this session."}
                    </div>
                  )}
                </div>

                <div className="app-form-field">
                  <label style={{ fontWeight: 800, fontSize: '0.75rem', color: '#94a3b8' }}>HOMEWORK</label>
                  {isAdmin ? (
                    <textarea 
                      value={editData.homework}
                      onChange={e => setEditData({...editData, homework: e.target.value})}
                      placeholder="Assign tasks for next time..."
                      style={{ width: '100%', minHeight: '80px', padding: '12px', borderRadius: '12px', border: '1px solid #e2e8f0', marginTop: '8px', fontSize: '0.9rem' }}
                    />
                  ) : (
                    <div style={{ padding: '12px', background: '#fff', borderRadius: '12px', border: '1px solid #f1f5f9', marginTop: '8px', fontSize: '0.92rem', whiteSpace: 'pre-wrap' }}>
                      {selectedSession.homework || "No homework assigned."}
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: isAdmin ? 'pointer' : 'default' }}>
                    <div 
                      onClick={() => isAdmin && setEditData({...editData, isHomeworkCompleted: !editData.isHomeworkCompleted})}
                      style={{ 
                        width: '24px', height: '24px', borderRadius: '6px', border: '2px solid',
                        borderColor: (isAdmin ? editData.isHomeworkCompleted : selectedSession.isHomeworkCompleted) ? '#10b981' : '#cbd5e1',
                        background: (isAdmin ? editData.isHomeworkCompleted : selectedSession.isHomeworkCompleted) ? '#10b981' : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white'
                      }}
                    >
                      {(isAdmin ? editData.isHomeworkCompleted : selectedSession.isHomeworkCompleted) && <Check size={16} />}
                    </div>
                    <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#1a1c2c' }}>Homework Completed</span>
                  </label>
                </div>

                {isAdmin && (
                  <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                    <button className="app-button app-button--primary" onClick={handleSaveDetails} style={{ flex: 1 }}>
                      <Save size={18} />
                      Save Log
                    </button>
                    <button className="app-button" onClick={() => handleDeleteSession(selectedSession.id)} style={{ background: '#fee2e2', color: '#dc2626' }}>
                      <Trash2 size={18} />
                    </button>
                  </div>
                )}
              </div>
            </section>
          ) : (
            <section className="app-panel page-card">
              <div className="page-card__header">
                <h3>Quick Tip</h3>
              </div>
              <div className="app-empty" style={{ fontSize: '0.85rem', textAlign: 'left' }}>
                <p><strong>{isAdmin ? "Teacher Tip:" : "Student Tip:"}</strong></p>
                <p style={{ marginTop: '8px' }}>
                  {isAdmin 
                    ? "Click on any session to record what you taught today and assign homework. Students will see these updates in real-time."
                    : "Check your sessions to see the lesson summary and your homework. Stay on top of your learning goals!"}
                </p>
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Schedule;
