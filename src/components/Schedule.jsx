import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Clock, CheckCircle2, ChevronLeft, ChevronRight, X, Save, Trash2 } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, query, where, onSnapshot, doc, updateDoc, deleteDoc, addDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const Schedule = () => {
  const { user, isAdmin } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [students, setAllStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSession, setSelectedSession] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showAddModal, setShowAddModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [editData, setEditData] = useState({
    notes: '',
    homework: '',
    isHomeworkCompleted: false
  });

  const [newSession, setNewSession] = useState({
    studentName: '',
    subject: '',
    date: new Date().toISOString().split('T')[0],
    startTime: '10:00 AM',
    endTime: '11:30 AM',
    notes: '',
    homework: ''
  });

  // Fetch all students for the dropdown (admin only)
  useEffect(() => {
    if (!user?.uid || !isAdmin) return;
    const q = query(collection(db, 'students'));
    const unsubscribe = onSnapshot(q, (snap) => {
      setAllStudents(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
    return unsubscribe;
  }, [user?.uid, isAdmin]);

  // Fetch sessions
  useEffect(() => {
    if (!user?.uid) return;
    const q = isAdmin
      ? query(collection(db, 'sessions'))
      : query(collection(db, 'sessions'), where('studentId', '==', user.uid));

    const unsubscribe = onSnapshot(q, (snap) => {
      setSessions(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    }, (err) => {
      console.error('Schedule fetch error:', err);
      setLoading(false);
    });

    return unsubscribe;
  }, [user?.uid, isAdmin]);

  // Calculate the 7 days of the current week (Mon–Sun)
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

  const handleSaveEdit = async () => {
    if (!isAdmin || !selectedSession) return;
    try {
      await updateDoc(doc(db, 'sessions', selectedSession.id), {
        ...editData,
        updatedAt: new Date().toISOString()
      });
      setSelectedSession(null);
    } catch (e) {
      alert('Failed to save.');
    }
  };

  const handleCreateSession = async (e) => {
    e.preventDefault();
    if (!isAdmin) return;
    setIsSubmitting(true);
    try {
      const student = students.find(s => s.name === newSession.studentName);
      await addDoc(collection(db, 'sessions'), {
        ...newSession,
        studentId: student ? student.id : 'unknown',
        isHomeworkCompleted: false,
        createdAt: new Date().toISOString()
      });
      setShowAddModal(false);
      setNewSession({
        studentName: '',
        subject: '',
        date: new Date().toISOString().split('T')[0],
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        notes: '',
        homework: ''
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── Styles ──────────────────────────────────────────────────────────────────
  const s = {
    root: { height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', padding: '28px 32px', backgroundColor: '#f8fafc', boxSizing: 'border-box', gap: '20px' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexShrink: 0 },
    title: { fontSize: '2rem', fontWeight: 900, color: '#0f172a', fontFamily: 'Poppins, sans-serif', margin: 0 },
    subtitle: { color: '#64748b', fontWeight: 500, margin: '4px 0 0 0', fontSize: '0.9rem' },
    navGroup: { display: 'flex', alignItems: 'center', gap: '12px' },
    navBox: { display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '4px', borderRadius: '12px', border: '1px solid #e2e8f0' },
    navBtn: { background: 'transparent', border: 'none', padding: '8px', cursor: 'pointer', borderRadius: '8px', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center' },
    todayBtn: { background: 'transparent', border: 'none', padding: '6px 14px', cursor: 'pointer', fontWeight: 700, color: '#334155', fontSize: '0.85rem' },
    addBtn: { display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#6366f1', color: '#fff', padding: '10px 20px', borderRadius: '12px', border: 'none', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(99,102,241,0.3)' },
    grid: { flex: 1, backgroundColor: '#fff', borderRadius: '24px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' },
    daysRow: { display: 'grid', gridTemplateColumns: '72px repeat(7, 1fr)', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', flexShrink: 0 },
    dayCell: (isToday) => ({ padding: '14px 0', textAlign: 'center', borderRight: '1px solid #e2e8f0', backgroundColor: isToday ? '#eef2ff' : 'transparent' }),
    dayLabel: { display: 'block', fontSize: '10px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '6px' },
    dayNum: (isToday) => ({ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', borderRadius: '10px', fontSize: '1.05rem', fontWeight: 900, backgroundColor: isToday ? '#6366f1' : 'transparent', color: isToday ? '#fff' : '#334155', boxShadow: isToday ? '0 4px 10px rgba(99,102,241,0.35)' : 'none' }),
    scrollArea: { flex: 1, overflowY: 'auto', position: 'relative' },
    timeGrid: { display: 'grid', gridTemplateColumns: '72px repeat(7, 1fr)', position: 'relative' },
    hourLabel: { height: '72px', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: '10px', paddingTop: '8px' },
    hourText: { fontSize: '10px', fontWeight: 700, color: '#94a3b8' },
    gridLines: { position: 'absolute', left: '72px', right: 0, top: 0, pointerEvents: 'none', zIndex: 1 },
    dayCol: (isLast) => ({ position: 'relative', borderRight: isLast ? 'none' : '1px solid #f1f5f9' }),
  };

  if (loading) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
      <div className="app-spinner" />
    </div>
  );

  const SLOT_H = 72;
  const now = new Date();

  return (
    <div style={s.root}>
      {/* ── Header ── */}
      <div style={s.header}>
        <div>
          <h1 style={s.title}>Weekly Schedule</h1>
          <p style={s.subtitle}>{currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
        </div>
        <div style={s.navGroup}>
          <div style={s.navBox}>
            <button style={s.navBtn} onClick={() => { const d = new Date(currentDate); d.setDate(d.getDate() - 7); setCurrentDate(d); }}>
              <ChevronLeft size={18} />
            </button>
            <button style={s.todayBtn} onClick={() => setCurrentDate(new Date())}>Today</button>
            <button style={s.navBtn} onClick={() => { const d = new Date(currentDate); d.setDate(d.getDate() + 7); setCurrentDate(d); }}>
              <ChevronRight size={18} />
            </button>
          </div>
          {isAdmin && (
            <button style={s.addBtn} onClick={() => setShowAddModal(true)}>
              <Plus size={18} /> Add Lesson
            </button>
          )}
        </div>
      </div>

      {/* ── Calendar Grid ── */}
      <div style={s.grid}>
        {/* Days header */}
        <div style={s.daysRow}>
          <div style={{ borderRight: '1px solid #e2e8f0' }} />
          {weekDays.map((day, i) => {
            const isToday = day.toDateString() === now.toDateString();
            return (
              <div key={i} style={s.dayCell(isToday)}>
                <span style={s.dayLabel}>{day.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                <span style={s.dayNum(isToday)}>{day.getDate()}</span>
              </div>
            );
          })}
        </div>

        {/* Scrollable time grid */}
        <div style={s.scrollArea}>
          <div style={{ ...s.timeGrid, minHeight: `${timeSlots.length * SLOT_H}px` }}>
            {/* Hour labels column */}
            <div style={{ backgroundColor: '#f8fafc', borderRight: '1px solid #e2e8f0' }}>
              {timeSlots.map(h => (
                <div key={h} style={s.hourLabel}>
                  <span style={s.hourText}>{h === 12 ? '12 PM' : h > 12 ? `${h - 12} PM` : `${h} AM`}</span>
                </div>
              ))}
            </div>

            {/* Horizontal grid lines + current-time indicator (overlay) */}
            <div style={s.gridLines}>
              {timeSlots.map(h => (
                <div key={h} style={{ height: `${SLOT_H}px`, borderBottom: '1px solid rgba(226,232,240,0.7)' }} />
              ))}
              {weekDays.some(d => d.toDateString() === now.toDateString()) && (
                <div style={{ position: 'absolute', left: 0, right: 0, top: `${(now.getHours() + now.getMinutes() / 60 - 8) * SLOT_H}px`, display: 'flex', alignItems: 'center', zIndex: 10 }}>
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
                <div key={di} style={{ ...s.dayCol(di === 6), height: `${timeSlots.length * SLOT_H}px` }}>
                  {daySessions.map(session => {
                    const start = parseTime(session.startTime);
                    const end = parseTime(session.endTime);
                    const top = (start - 8) * SLOT_H;
                    const height = Math.max((end - start) * SLOT_H - 6, 30);
                    return (
                      <div
                        key={session.id}
                        onClick={() => { setSelectedSession(session); setEditData({ notes: session.notes || '', homework: session.homework || '', isHomeworkCompleted: session.isHomeworkCompleted || false }); }}
                        style={{ position: 'absolute', top: `${top + 3}px`, height: `${height}px`, left: '4px', right: '4px', backgroundColor: '#eef2ff', borderLeft: '4px solid #6366f1', borderRadius: '8px', padding: '8px 10px', cursor: 'pointer', zIndex: 5, overflow: 'hidden', boxSizing: 'border-box', boxShadow: '0 2px 6px rgba(99,102,241,0.12)', transition: 'transform 0.15s, box-shadow 0.15s' }}
                        onMouseOver={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 16px rgba(99,102,241,0.2)'; }}
                        onMouseOut={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(99,102,241,0.12)'; }}
                      >
                        <div style={{ fontSize: '10px', fontWeight: 900, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{session.subject}</div>
                        <div style={{ fontSize: '12px', fontWeight: 800, color: '#1e1b4b', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{session.studentName}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '4px', fontSize: '10px', fontWeight: 600, color: '#6366f1' }}>
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

      {/* ── Modals ── */}
      <AnimatePresence>
        {/* Detail Modal */}
        {selectedSession && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedSession(null)} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)' }} />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} style={{ position: 'relative', width: '100%', maxWidth: '480px', backgroundColor: '#fff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}>
              <div style={{ backgroundColor: '#6366f1', padding: '28px 32px', color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <h2 style={{ margin: '0 0 6px 0', fontSize: '1.5rem', fontWeight: 900 }}>{selectedSession.studentName}</h2>
                    <p style={{ margin: 0, opacity: 0.85, fontWeight: 600 }}>{selectedSession.subject} · {selectedSession.date}</p>
                  </div>
                  <button onClick={() => setSelectedSession(null)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}><X size={18} /></button>
                </div>
              </div>
              <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {['notes', 'homework'].map(field => (
                  <div key={field}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>{field === 'notes' ? 'Lesson Notes' : 'Homework'}</label>
                    {isAdmin
                      ? <textarea rows={3} value={editData[field]} onChange={e => setEditData({ ...editData, [field]: e.target.value })} style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px', fontSize: '0.9rem', color: '#334155', fontWeight: 500, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                      : <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px', fontSize: '0.9rem', color: '#475569' }}>{selectedSession[field] || (field === 'notes' ? 'No notes provided.' : 'No homework assigned.')}</div>
                    }
                  </div>
                ))}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', backgroundColor: '#f8fafc', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckCircle2 size={22} style={{ color: editData.isHomeworkCompleted ? '#10b981' : '#cbd5e1' }} />
                    <span style={{ fontWeight: 700, color: '#334155' }}>Homework Completed</span>
                  </div>
                  {isAdmin && <button onClick={() => setEditData({ ...editData, isHomeworkCompleted: !editData.isHomeworkCompleted })} style={{ padding: '5px 12px', borderRadius: '8px', fontSize: '10px', fontWeight: 800, border: 'none', cursor: 'pointer', backgroundColor: editData.isHomeworkCompleted ? '#d1fae5' : '#e2e8f0', color: editData.isHomeworkCompleted ? '#059669' : '#64748b' }}>{editData.isHomeworkCompleted ? 'DONE' : 'MARK DONE'}</button>}
                </div>
                {isAdmin && (
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={handleSaveEdit} style={{ flex: 1, backgroundColor: '#6366f1', color: '#fff', padding: '14px', borderRadius: '14px', border: 'none', fontWeight: 800, fontSize: '0.95rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}><Save size={18} />Save</button>
                    <button onClick={async () => { if (window.confirm('Delete this session?')) { await deleteDoc(doc(db, 'sessions', selectedSession.id)); setSelectedSession(null); } }} style={{ padding: '14px 18px', backgroundColor: '#fff1f2', color: '#f43f5e', borderRadius: '14px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Trash2 size={18} /></button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}

        {/* Add Lesson Modal */}
        {showAddModal && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowAddModal(false)} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(4px)' }} />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} style={{ position: 'relative', width: '100%', maxWidth: '440px', backgroundColor: '#fff', borderRadius: '28px', padding: '32px', boxSizing: 'border-box', boxShadow: '0 25px 50px rgba(0,0,0,0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, color: '#1e293b' }}>Add New Lesson</h3>
                <button onClick={() => setShowAddModal(false)} style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex' }}><X size={22} /></button>
              </div>
              <form onSubmit={handleCreateSession} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { label: 'Student', field: 'studentName', type: 'select' },
                  { label: 'Subject', field: 'subject', type: 'text' },
                  { label: 'Date', field: 'date', type: 'date' },
                  { label: 'Start Time', field: 'startTime', type: 'text', placeholder: '10:00 AM' },
                  { label: 'End Time', field: 'endTime', type: 'text', placeholder: '11:30 AM' },
                ].map(({ label, field, type, placeholder }) => (
                  <div key={field}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>{label}</label>
                    {type === 'select'
                      ? <select required value={newSession[field]} onChange={e => setNewSession({ ...newSession, [field]: e.target.value })} style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px', fontSize: '0.9rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}>
                          <option value="">Select Student</option>
                          {students.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                        </select>
                      : <input required type={type} placeholder={placeholder} value={newSession[field]} onChange={e => setNewSession({ ...newSession, [field]: e.target.value })} style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px', fontSize: '0.9rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }} />
                    }
                  </div>
                ))}
                <button disabled={isSubmitting} style={{ width: '100%', backgroundColor: '#6366f1', color: '#fff', padding: '16px', borderRadius: '14px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', marginTop: '8px', boxShadow: '0 4px 12px rgba(99,102,241,0.25)' }}>
                  {isSubmitting ? 'Saving...' : 'Schedule Lesson'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Schedule;
