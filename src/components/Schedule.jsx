import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle2, Trash2, X, Save, Check } from 'lucide-react';
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

  // ── Open session detail ────────────────────────────────────────────────────
  const handleOpenDetails = (session) => {
    setSelectedSession(session);
    setEditData({
      notes: session.notes || '',
      homework: session.homework || '',
      isHomeworkCompleted: session.isHomeworkCompleted || false
    });
  };

  // ── Save session edits ─────────────────────────────────────────────────────
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

  // ── Delete session ─────────────────────────────────────────────────────────
  const handleDeleteSession = async (id) => {
    if (!isAdmin || !window.confirm('Delete this session?')) return;
    try {
      await deleteDoc(doc(db, 'sessions', id));
      if (selectedSession?.id === id) setSelectedSession(null);
    } catch (e) {
      console.error(e);
    }
  };

  // ── Calendar helpers ───────────────────────────────────────────────────────
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

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  const now = new Date();

  return (
    <div style={{ height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', padding: '28px 32px', backgroundColor: '#f8fafc', boxSizing: 'border-box', gap: '20px' }}>

      {/* ── Header ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 900, color: '#0f172a', fontFamily: 'Poppins, sans-serif' }}>
            Schedule
          </h2>
          <p style={{ margin: '4px 0 0', color: '#64748b', fontSize: '0.9rem' }}>
            {isAdmin ? 'Manage all student sessions.' : 'View your sessions.'}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '4px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <button
              onClick={() => { const d = new Date(currentDate); d.setDate(d.getDate() - 7); setCurrentDate(d); }}
              style={{ background: 'transparent', border: 'none', padding: '8px', cursor: 'pointer', borderRadius: '8px', color: '#64748b', display: 'flex', alignItems: 'center' }}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              style={{ background: 'transparent', border: 'none', padding: '6px 14px', cursor: 'pointer', fontWeight: 700, color: '#334155', fontSize: '0.85rem' }}
            >
              Today
            </button>
            <button
              onClick={() => { const d = new Date(currentDate); d.setDate(d.getDate() + 7); setCurrentDate(d); }}
              style={{ background: 'transparent', border: 'none', padding: '8px', cursor: 'pointer', borderRadius: '8px', color: '#64748b', display: 'flex', alignItems: 'center' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
          <span style={{ fontWeight: 700, color: '#334155', fontSize: '0.95rem' }}>
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
        </div>
      </div>

      {/* ── Calendar Grid ── */}
      <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>

        {/* Days header row */}
        <div style={{ display: 'grid', gridTemplateColumns: '72px repeat(7, 1fr)', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', flexShrink: 0 }}>
          <div style={{ borderRight: '1px solid #e2e8f0' }} />
          {weekDays.map((day, i) => {
            const isToday = day.toDateString() === now.toDateString();
            return (
              <div
                key={i}
                style={{ padding: '14px 0', textAlign: 'center', borderRight: i < 6 ? '1px solid #e2e8f0' : 'none', backgroundColor: isToday ? '#eef2ff' : 'transparent' }}
              >
                <span style={{ display: 'block', fontSize: '10px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '6px' }}>
                  {day.toLocaleDateString('en-US', { weekday: 'short' })}
                </span>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '34px', height: '34px', borderRadius: '10px',
                  fontSize: '1.05rem', fontWeight: 900,
                  backgroundColor: isToday ? '#6366f1' : 'transparent',
                  color: isToday ? '#fff' : '#334155',
                  boxShadow: isToday ? '0 4px 10px rgba(99,102,241,0.35)' : 'none'
                }}>
                  {day.getDate()}
                </span>
              </div>
            );
          })}
        </div>

        {/* Scrollable time grid */}
        <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '72px repeat(7, 1fr)', position: 'relative', minHeight: `${timeSlots.length * SLOT_H}px` }}>

            {/* Hour labels column */}
            <div style={{ backgroundColor: '#f8fafc', borderRight: '1px solid #e2e8f0' }}>
              {timeSlots.map(h => (
                <div key={h} style={{ height: `${SLOT_H}px`, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: '10px', paddingTop: '8px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8' }}>
                    {h === 12 ? '12 PM' : h > 12 ? `${h - 12} PM` : `${h} AM`}
                  </span>
                </div>
              ))}
            </div>

            {/* Horizontal grid lines + current time indicator */}
            <div style={{ position: 'absolute', left: '72px', right: 0, top: 0, pointerEvents: 'none', zIndex: 1 }}>
              {timeSlots.map(h => (
                <div key={h} style={{ height: `${SLOT_H}px`, borderBottom: '1px solid rgba(226,232,240,0.7)' }} />
              ))}
              {weekDays.some(d => d.toDateString() === now.toDateString()) && (
                <div style={{
                  position: 'absolute', left: 0, right: 0,
                  top: `${(now.getHours() + now.getMinutes() / 60 - 8) * SLOT_H}px`,
                  display: 'flex', alignItems: 'center', zIndex: 10
                }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444', marginLeft: '-5px', boxShadow: '0 0 0 3px rgba(239,68,68,0.2)' }} />
                  <div style={{ flex: 1, borderTop: '2px solid rgba(239,68,68,0.4)' }} />
                </div>
              )}
            </div>

            {/* Day columns with session cards */}
            {weekDays.map((day, di) => {
              const dateStr = day.toISOString().split('T')[0];
              const daySessions = sessions.filter(s => s.date === dateStr);
              return (
                <div
                  key={di}
                  style={{ position: 'relative', height: `${timeSlots.length * SLOT_H}px`, borderRight: di < 6 ? '1px solid rgba(241,245,249,0.8)' : 'none' }}
                >
                  {daySessions.map(session => {
                    const start = parseTime(session.startTime);
                    const end = parseTime(session.endTime);
                    const top = (start - 8) * SLOT_H;
                    const height = Math.max((end - start) * SLOT_H - 6, 28);
                    return (
                      <div
                        key={session.id}
                        onClick={() => handleOpenDetails(session)}
                        style={{
                          position: 'absolute', top: `${top + 3}px`, height: `${height}px`,
                          left: '3px', right: '3px',
                          backgroundColor: '#eef2ff', borderLeft: '4px solid #6366f1',
                          borderRadius: '8px', padding: '6px 8px',
                          cursor: 'pointer', zIndex: 5, overflow: 'hidden',
                          boxSizing: 'border-box',
                          boxShadow: '0 2px 6px rgba(99,102,241,0.12)',
                          transition: 'transform 0.15s, box-shadow 0.15s'
                        }}
                        onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(99,102,241,0.2)'; }}
                        onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(99,102,241,0.12)'; }}
                      >
                        <div style={{ fontSize: '10px', fontWeight: 900, color: '#4f46e5', textTransform: 'uppercase' }}>{session.subject}</div>
                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#1e1b4b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{session.studentName}</div>
                        <div style={{ fontSize: '10px', color: '#6366f1', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '2px' }}>
                          <Clock size={9} />{session.startTime}
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
              style={{ position: 'relative', width: '100%', maxWidth: '480px', backgroundColor: '#fff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}
            >
              {/* Modal header */}
              <div style={{ backgroundColor: '#6366f1', padding: '28px 32px', color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900 }}>{selectedSession.studentName}</h3>
                    <p style={{ margin: 0, opacity: 0.85, fontWeight: 600 }}>{selectedSession.subject} · {selectedSession.date}</p>
                  </div>
                  <button onClick={() => setSelectedSession(null)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal body */}
              <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>WHAT WE DID TODAY</label>
                  {isAdmin
                    ? <textarea rows={3} value={editData.notes} onChange={e => setEditData({ ...editData, notes: e.target.value })} placeholder="Summary of the session..." style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px', fontSize: '0.9rem', color: '#334155', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                    : <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px', fontSize: '0.9rem', color: '#475569' }}>{selectedSession.notes || 'No notes provided.'}</div>
                  }
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>HOMEWORK</label>
                  {isAdmin
                    ? <textarea rows={2} value={editData.homework} onChange={e => setEditData({ ...editData, homework: e.target.value })} placeholder="Assign tasks for next time..." style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px', fontSize: '0.9rem', color: '#334155', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                    : <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px', fontSize: '0.9rem', color: '#475569' }}>{selectedSession.homework || 'No homework assigned.'}</div>
                  }
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 18px', backgroundColor: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <div
                    onClick={() => isAdmin && setEditData({ ...editData, isHomeworkCompleted: !editData.isHomeworkCompleted })}
                    style={{ width: '24px', height: '24px', borderRadius: '6px', border: '2px solid', borderColor: (isAdmin ? editData.isHomeworkCompleted : selectedSession.isHomeworkCompleted) ? '#10b981' : '#cbd5e1', background: (isAdmin ? editData.isHomeworkCompleted : selectedSession.isHomeworkCompleted) ? '#10b981' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: isAdmin ? 'pointer' : 'default', flexShrink: 0 }}
                  >
                    {(isAdmin ? editData.isHomeworkCompleted : selectedSession.isHomeworkCompleted) && <Check size={14} />}
                  </div>
                  <span style={{ fontWeight: 700, color: '#334155' }}>Homework Completed</span>
                </div>

                {isAdmin && (
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={handleSaveDetails} style={{ flex: 1, backgroundColor: '#6366f1', color: '#fff', padding: '14px', borderRadius: '14px', border: 'none', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <Save size={18} /> Save
                    </button>
                    <button onClick={() => handleDeleteSession(selectedSession.id)} style={{ padding: '14px 18px', backgroundColor: '#fff1f2', color: '#f43f5e', borderRadius: '14px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Trash2 size={18} />
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
