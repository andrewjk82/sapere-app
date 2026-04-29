import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle2, Trash2, X, Save, Check, List } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, query, where, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';

const Schedule = () => {
  const { user, isAdmin } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [editData, setEditData] = useState({ notes: '', homework: '', isHomeworkCompleted: false });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ── Handle Resize ──────────────────────────────────────────────────────────
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ── Fetch sessions from Firestore ──────────────────────────────────────────
  useEffect(() => {
    if (!user?.uid) return;
    const q = isAdmin
      ? query(collection(db, 'sessions'))
      : query(collection(db, 'sessions'), where('studentId', '==', user.uid));

    const unsubscribe = onSnapshot(q, (snap) => {
      const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setSessions(docs.sort((a, b) => new Date(a.date) - new Date(b.date)));
      setLoading(false);
    }, (err) => {
      console.error('Firestore error:', err);
      setLoading(false);
    });

    return unsubscribe;
  }, [user?.uid, isAdmin]);

  // ── Helpers ────────────────────────────────────────────────────────────────
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
      setSelectedSession(null);
    } catch (e) {
      console.error(e);
      alert('Failed to update.');
    }
  };

  const handleDeleteSession = async (id) => {
    if (!isAdmin || !window.confirm('Delete this session?')) return;
    try {
      await deleteDoc(doc(db, 'sessions', id));
      if (selectedSession?.id === id) setSelectedSession(null);
    } catch (e) {
      console.error(e);
    }
  };

  const weekDays = useMemo(() => {
    const d = new Date(currentDate);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.setDate(diff));
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(monday);
      date.setDate(monday.getDate() + i);
      return date;
    });
  }, [currentDate]);

  const timeSlots = Array.from({ length: 14 }, (_, i) => i + 8); // 8 AM – 9 PM
  const SLOT_H = 70;

  const parseTime = useCallback((t) => {
    if (!t) return 0;
    const parts = t.toLowerCase().split(' ');
    const period = parts[1];
    const [hStr, mStr] = parts[0].split(':');
    let h = parseInt(hStr, 10);
    const m = parseInt(mStr || '0', 10);
    if (period === 'pm' && h !== 12) h += 12;
    if (period === 'am' && h === 12) h = 0;
    return h + m / 60;
  }, []);

  const nowStr = new Date().toISOString().split('T')[0];
  const upcomingSessions = useMemo(() => {
    return sessions
      .filter(s => s.date >= nowStr)
      .sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return parseTime(a.startTime) - parseTime(b.startTime);
      });
  }, [sessions, nowStr, parseTime]);

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  // ── Mobile Agenda List View ──
  const ListView = () => (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto', paddingBottom: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>Upcoming Classes</h3>
        <span style={{ fontSize: '0.85rem', color: '#6366f1', fontWeight: 700 }}>View Full Agenda</span>
      </div>
      
      {upcomingSessions.length === 0 ? (
        <div style={{ padding: '40px 20px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
          <Calendar size={40} style={{ color: '#cbd5e1', marginBottom: '12px' }} />
          <p style={{ margin: 0, color: '#64748b', fontWeight: 600 }}>No upcoming classes found.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {upcomingSessions.map((session, idx) => {
            const isFirstOfDate = idx === 0 || upcomingSessions[idx-1].date !== session.date;
            return (
              <React.Fragment key={session.id}>
                {isFirstOfDate && (
                  <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: idx === 0 ? 0 : '12px' }}>
                    {new Date(session.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleOpenDetails(session)}
                  style={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '24px', 
                    padding: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                    border: '1px solid #f1f5f9',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '4px', height: '36px', backgroundColor: '#e0e7ff', borderRadius: '2px' }} />
                    <div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#1e1b4b' }}>{session.studentName}</div>
                      <div style={{ fontSize: '0.9rem', color: '#94a3b8', fontWeight: 600 }}>{session.subject}</div>
                    </div>
                  </div>
                  <div style={{ 
                    backgroundColor: '#f8fafc', 
                    padding: '8px 16px', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px',
                    color: '#64748b',
                    fontSize: '0.9rem',
                    fontWeight: 700
                  }}>
                    <Clock size={16} />
                    {session.startTime} - {session.endTime}
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );

  // ── Desktop Calendar Grid View ──
  const CalendarView = () => (
    <div style={{ 
      flex: 1, 
      backgroundColor: '#fff', 
      borderRadius: '24px', 
      border: '1px solid #e2e8f0', 
      display: 'flex', 
      flexDirection: 'column', 
      overflow: 'hidden', 
      boxShadow: '0 4px 20px rgba(0,0,0,0.03)' 
    }}>
      {/* Days header row */}
      <div style={{ display: 'grid', gridTemplateColumns: '72px repeat(7, 1fr)', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', flexShrink: 0 }}>
        <div style={{ borderRight: '1px solid #e2e8f0' }} />
        {weekDays.map((day, i) => {
          const isToday = day.toDateString() === new Date().toDateString();
          return (
            <div key={i} style={{ padding: '12px 0', textAlign: 'center', borderRight: i < 6 ? '1px solid #e2e8f0' : 'none', backgroundColor: isToday ? '#eef2ff' : 'transparent' }}>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                {day.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: '32px', height: '32px', borderRadius: '10px',
                fontSize: '1rem', fontWeight: 900,
                backgroundColor: isToday ? '#6366f1' : 'transparent',
                color: isToday ? '#fff' : '#334155',
                boxShadow: isToday ? '0 4px 12px rgba(99,102,241,0.3)' : 'none'
              }}>
                {day.getDate()}
              </span>
            </div>
          );
        })}
      </div>

      {/* Scrollable time grid */}
      <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '72px repeat(7, 1fr)', position: 'relative' }}>
          {/* Hour labels */}
          <div style={{ backgroundColor: '#f8fafc', borderRight: '1px solid #e2e8f0' }}>
            {timeSlots.map(h => (
              <div key={h} style={{ height: `${SLOT_H}px`, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: '12px', paddingTop: '10px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8' }}>
                  {h === 12 ? '12 PM' : h > 12 ? `${h - 12} PM` : `${h} AM`}
                </span>
              </div>
            ))}
          </div>

          {/* Grid background lines */}
          <div style={{ position: 'absolute', left: '72px', right: 0, top: 0, pointerEvents: 'none', zIndex: 1 }}>
            {timeSlots.map(h => (
              <div key={h} style={{ height: `${SLOT_H}px`, borderBottom: '1px solid rgba(226,232,240,0.6)' }} />
            ))}
          </div>

          {/* Day columns */}
          {weekDays.map((day, di) => {
            const dateStr = day.toISOString().split('T')[0];
            const daySessions = sessions.filter(s => s.date === dateStr);
            return (
              <div key={di} style={{ position: 'relative', height: `${timeSlots.length * SLOT_H}px`, borderRight: di < 6 ? '1px solid rgba(241,245,249,0.8)' : 'none' }}>
                {daySessions.map(session => {
                  const start = parseTime(session.startTime);
                  const end = parseTime(session.endTime);
                  const top = (start - 8) * SLOT_H;
                  const height = Math.max((end - start) * SLOT_H - 4, 30);
                  return (
                    <div
                      key={session.id}
                      onClick={() => handleOpenDetails(session)}
                      style={{
                        position: 'absolute', top: `${top + 2}px`, height: `${height}px`,
                        left: '4px', right: '4px',
                        backgroundColor: '#eef2ff', borderLeft: '4px solid #6366f1',
                        borderRadius: '8px', padding: '6px 8px',
                        cursor: 'pointer', zIndex: 5, overflow: 'hidden',
                        boxShadow: '0 4px 10px rgba(99,102,241,0.1)',
                        transition: 'transform 0.2s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <div style={{ fontSize: '10px', fontWeight: 900, color: '#4f46e5', textTransform: 'uppercase', marginBottom: '2px' }}>{session.subject}</div>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: '#1e1b4b' }}>{session.studentName}</div>
                      <div style={{ fontSize: '9px', color: '#6366f1', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={10} />{session.startTime}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ 
      height: 'calc(100vh - 80px)', 
      display: 'flex', 
      flexDirection: 'column', 
      padding: isMobile ? '24px 20px' : '28px 32px', 
      backgroundColor: '#f8fafc', 
      boxSizing: 'border-box', 
      gap: '20px' 
    }}>

      {/* ── Header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 900, color: '#0f172a' }}>
            Schedule
          </h2>
          {!isMobile && <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.95rem' }}>{isAdmin ? 'Keep track of all your upcoming tutoring sessions.' : 'Manage your learning journey.'}</p>}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '6px', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
            <button
              onClick={() => { const d = new Date(currentDate); d.setDate(d.getDate() - (isMobile ? 1 : 7)); setCurrentDate(d); }}
              style={{ background: 'transparent', border: 'none', padding: '6px', cursor: 'pointer', borderRadius: '10px', color: '#64748b' }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              style={{ background: 'transparent', border: 'none', padding: '0 12px', cursor: 'pointer', fontWeight: 800, color: '#334155', fontSize: '0.9rem' }}
            >
              Today
            </button>
            <button
              onClick={() => { const d = new Date(currentDate); d.setDate(d.getDate() + (isMobile ? 1 : 7)); setCurrentDate(d); }}
              style={{ background: 'transparent', border: 'none', padding: '6px', cursor: 'pointer', borderRadius: '10px', color: '#64748b' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* ── View Switcher ── */}
      {isMobile ? <ListView /> : <CalendarView />}

      {/* ── Session Detail Modal ── */}
      <AnimatePresence>
        {selectedSession && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedSession(null)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '480px', 
                backgroundColor: '#fff', 
                borderRadius: '32px', 
                overflow: 'hidden', 
                boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
            >
              <div style={{ backgroundColor: '#6366f1', padding: '32px', color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900 }}>{selectedSession.studentName}</h3>
                    <p style={{ margin: 0, opacity: 0.85, fontWeight: 600 }}>{selectedSession.subject} · {selectedSession.date}</p>
                  </div>
                  <button onClick={() => setSelectedSession(null)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Notes</label>
                  {isAdmin
                    ? <textarea rows={4} value={editData.notes} onChange={e => setEditData({ ...editData, notes: e.target.value })} style={{ width: '100%', border: '2px solid #f1f5f9', borderRadius: '16px', padding: '16px', fontSize: '1rem', color: '#1e1b4b', outline: 'none', resize: 'none', boxSizing: 'border-box' }} />
                    : <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '16px', color: '#1e1b4b', fontSize: '1rem' }}>{selectedSession.notes || 'No notes for this session.'}</div>
                  }
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Homework</label>
                  {isAdmin
                    ? <textarea rows={2} value={editData.homework} onChange={e => setEditData({ ...editData, homework: e.target.value })} style={{ width: '100%', border: '2px solid #f1f5f9', borderRadius: '16px', padding: '16px', fontSize: '1rem', color: '#1e1b4b', outline: 'none', resize: 'none', boxSizing: 'border-box' }} />
                    : <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '16px', color: '#1e1b4b', fontSize: '1rem' }}>{selectedSession.homework || 'No homework assigned.'}</div>
                  }
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#f8fafc', borderRadius: '16px' }}>
                  <div
                    onClick={() => isAdmin && setEditData({ ...editData, isHomeworkCompleted: !editData.isHomeworkCompleted })}
                    style={{ width: '28px', height: '28px', borderRadius: '8px', border: '2px solid', borderColor: (isAdmin ? editData.isHomeworkCompleted : selectedSession.isHomeworkCompleted) ? '#10b981' : '#cbd5e1', background: (isAdmin ? editData.isHomeworkCompleted : selectedSession.isHomeworkCompleted) ? '#10b981' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: isAdmin ? 'pointer' : 'default' }}
                  >
                    {(isAdmin ? editData.isHomeworkCompleted : selectedSession.isHomeworkCompleted) && <Check size={16} />}
                  </div>
                  <span style={{ fontWeight: 800, color: '#1e1b4b' }}>Homework Completed</span>
                </div>

                {isAdmin && (
                  <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                    <button onClick={handleSaveDetails} style={{ flex: 1, backgroundColor: '#6366f1', color: '#fff', padding: '18px', borderRadius: '18px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <Save size={20} /> Save Changes
                    </button>
                    <button onClick={() => handleDeleteSession(selectedSession.id)} style={{ padding: '18px', backgroundColor: '#fff1f2', color: '#f43f5e', borderRadius: '18px', border: 'none', cursor: 'pointer' }}>
                      <Trash2 size={20} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Schedule;
