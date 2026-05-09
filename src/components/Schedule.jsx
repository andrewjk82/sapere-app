import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle2, Trash2, X, Save, Check, List } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, query, where, onSnapshot, doc, updateDoc, deleteDoc, or } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { motion, AnimatePresence } from 'framer-motion';
import { normalizeSubjectLabel } from '../utils/subjectLabels';

const TIME_OPTIONS = [
  '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
  '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'
];

const SESSION_ACCENTS = ['#4f46e5', '#0891b2', '#16a34a', '#db2777', '#ea580c', '#7c3aed'];

const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getSessionAccent = (session) => {
  const key = `${session.subject || ''}${session.studentName || ''}`;
  const sum = key.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
  return SESSION_ACCENTS[sum % SESSION_ACCENTS.length];
};

const buildSessionUpdatePayload = (editData) => ({
  date: editData.date || '',
  startTime: editData.startTime || '',
  endTime: editData.endTime || '',
  notes: editData.notes || '',
  homework: editData.homework || '',
  isHomeworkCompleted: Boolean(editData.isHomeworkCompleted),
  reminderSent: false,
  updatedAt: new Date().toISOString()
});

const Schedule = () => {
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [editData, setEditData] = useState({ 
    notes: '', 
    homework: '', 
    isHomeworkCompleted: false,
    startTime: '',
    endTime: '',
    date: ''
  });
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

    let unsub1 = () => {};
    let unsub2 = () => {};

    if (isAdmin) {
      const q = query(collection(db, 'sessions'));
      unsub1 = onSnapshot(q, (snap) => {
        const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setSessions(docs.sort((a, b) => {
          const dateA = a.date || '';
          const dateB = b.date || '';
          if (dateA !== dateB) return dateA.localeCompare(dateB);
          return parseTime(a.startTime) - parseTime(b.startTime);
        }));
        setLoading(false);
      }, (err) => {
        console.error('Firestore error:', err);
        setLoading(false);
      });
    } else {
      // Split into two listeners to avoid 'or' query issues and potential indexing problems
      const qId = query(collection(db, 'sessions'), where('studentId', '==', user.uid));
      const qEmail = query(collection(db, 'sessions'), where('studentEmail', '==', (user.email || '').toLowerCase()));

      let resultsId = [];
      let resultsEmail = [];

      const mergeResults = () => {
        const mergedMap = new Map();
        [...resultsId, ...resultsEmail].forEach(doc => mergedMap.set(doc.id, doc));
        const merged = Array.from(mergedMap.values());
        setSessions(merged.sort((a, b) => {
          const dateA = a.date || '';
          const dateB = b.date || '';
          if (dateA !== dateB) return dateA.localeCompare(dateB);
          return parseTime(a.startTime) - parseTime(b.startTime);
        }));
        setLoading(false);
      };

      unsub1 = onSnapshot(qId, (snap) => {
        resultsId = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        mergeResults();
      }, (err) => {
        console.error('Firestore ID query error:', err);
        mergeResults();
      });

      unsub2 = onSnapshot(qEmail, (snap) => {
        resultsEmail = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        mergeResults();
      }, (err) => {
        console.error('Firestore Email query error:', err);
        mergeResults();
      });
    }

    return () => {
      unsub1();
      unsub2();
    };
  }, [user?.uid, user?.email, isAdmin]);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const handleOpenDetails = (session) => {
    setSelectedSession(session);
    setEditData({
      notes: session.notes || '',
      homework: session.homework || '',
      isHomeworkCompleted: session.isHomeworkCompleted || false,
      startTime: session.startTime || '10:00 AM',
      endTime: session.endTime || '11:30 AM',
      date: session.date || ''
    });
  };

  const [deleteChoiceOpen, setDeleteChoiceOpen] = useState(null);
  const [saveChoiceOpen, setSaveChoiceOpen] = useState(null);
  const [showAllAgenda, setShowAllAgenda] = useState(false);

  // ── Save/Update session ──────────────────────────────────────────────────
  const handleSaveDetails = async (choice = 'single') => {
    if (!selectedSession || !isAdmin) return;
    try {
      const updatePayload = buildSessionUpdatePayload(editData);

      if (choice === 'single') {
        await updateDoc(doc(db, 'sessions', selectedSession.id), updatePayload);
      } else if (choice === 'series' && selectedSession.groupId) {
        const q = query(collection(db, 'sessions'), where('groupId', '==', selectedSession.groupId));
        
        const { getDocs, writeBatch } = await import('firebase/firestore');
        const snap = await getDocs(q);
        const futureDocs = snap.docs.filter(d => (d.data().date || '') >= selectedSession.date);

        const batch = writeBatch(db);
        futureDocs.forEach(d => {
          batch.update(d.ref, {
            startTime: updatePayload.startTime,
            endTime: updatePayload.endTime,
            notes: updatePayload.notes,
            homework: updatePayload.homework,
            isHomeworkCompleted: updatePayload.isHomeworkCompleted,
            reminderSent: false,
            updatedAt: updatePayload.updatedAt
          });
        });
        await batch.commit();
      }

      await fetch('/api/send-notif', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId: selectedSession.studentId,
          email: selectedSession.studentEmail || selectedSession.email || '',
          subject: 'Your schedule has been updated',
          text: `Your ${selectedSession.subject || 'lesson'} session has been updated to ${updatePayload.date} at ${updatePayload.startTime}.`
        })
      }).catch((err) => console.warn('Schedule update notification failed:', err));
      
      setSaveChoiceOpen(null);
      setSelectedSession(null);
      showToast('Changes saved successfully!', 'success');
    } catch (e) {
      console.error('Failed to update session:', e);
      showToast('Failed to update.', 'error');
    }
  };

  // ── Delete session ─────────────────────────────────────────────────────────
  const handleDeleteSession = async (session, choice) => {
    if (!isAdmin) return;
    
    // Add safety check for single deletion
    if (choice === 'single' && !window.confirm('Are you sure you want to delete this session?')) {
      return;
    }
    
    try {
      if (choice === 'single') {
        await deleteDoc(doc(db, 'sessions', session.id));
      } else if (choice === 'series' && session.groupId) {
        const q = query(collection(db, 'sessions'), where('groupId', '==', session.groupId));
        const { getDocs, writeBatch } = await import('firebase/firestore');
        const snap = await getDocs(q);
        const futureDocs = snap.docs.filter(d => (d.data().date || '') >= session.date);

        const batch = writeBatch(db);
        futureDocs.forEach(d => batch.delete(d.ref));
        await batch.commit();
      }
      
      setDeleteChoiceOpen(null);
      setSelectedSession(null);
      showToast('Session deleted.', 'success');
    } catch (e) {
      console.error(e);
      showToast('Delete failed.', 'error');
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

  const timeSlots = Array.from({ length: 17 }, (_, i) => i + 8); // 8 AM – 12 AM
  const SLOT_H = 70;

  const parseTime = useCallback((t) => {
    if (!t) return 0;
    const parts = String(t).toLowerCase().trim().split(/\s+/);
    if (parts.length === 0) return 0;
    
    let timeStr = parts[0];
    let period = parts[1];
    
    // Handle cases like "10:00AM" where there's no space
    if (!period) {
      if (timeStr.endsWith('am')) {
        period = 'am';
        timeStr = timeStr.replace('am', '');
      } else if (timeStr.endsWith('pm')) {
        period = 'pm';
        timeStr = timeStr.replace('pm', '');
      }
    }
    
    const [hStr, mStr] = timeStr.split(':');
    let h = parseInt(hStr, 10);
    const m = parseInt(mStr || '0', 10);
    
    if (isNaN(h)) return 0;
    
    if (period === 'pm' && h !== 12) h += 12;
    if (period === 'am' && h === 12) h = 0;
    return h + m / 60;
  }, []);

  const nowStr = formatDateKey(new Date());
  const upcomingSessions = useMemo(() => {
    return sessions
      .filter(s => s.date >= nowStr)
      .sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return parseTime(a.startTime) - parseTime(b.startTime);
      });
  }, [sessions, nowStr, parseTime]);

  const selectedWeekSessions = useMemo(() => {
    const weekKeys = new Set(weekDays.map(formatDateKey));
    return sessions
      .filter(s => weekKeys.has(s.date))
      .sort((a, b) => {
        if (a.date !== b.date) return a.date.localeCompare(b.date);
        return parseTime(a.startTime) - parseTime(b.startTime);
      });
  }, [sessions, weekDays, parseTime]);

  const todaySessions = useMemo(() => {
    return sessions
      .filter(s => s.date === nowStr)
      .sort((a, b) => parseTime(a.startTime) - parseTime(b.startTime));
  }, [sessions, nowStr, parseTime]);

  const weekRangeLabel = useMemo(() => {
    const first = weekDays[0];
    const last = weekDays[6];
    const sameMonth = first.getMonth() === last.getMonth();
    const firstLabel = first.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    const lastLabel = last.toLocaleDateString('en-US', { month: sameMonth ? undefined : 'short', day: 'numeric' });
    return `${firstLabel} - ${lastLabel}`;
  }, [weekDays]);

  const nextSession = upcomingSessions[0];

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  // ── Mobile Agenda List View ──
  const renderListView = () => {
    const displayedSessions = showAllAgenda ? upcomingSessions : upcomingSessions.slice(0, 5);

    return (
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '18px', overflowY: 'auto', paddingBottom: '40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <p style={{ margin: '0 0 4px', fontSize: '0.75rem', color: '#64748b', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Agenda</p>
          <h3 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 900, color: '#0f172a' }}>Upcoming Classes</h3>
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#4f46e5', fontWeight: 800, background: '#eef2ff', padding: '8px 10px', borderRadius: '12px' }}>
          <List size={14} /> {upcomingSessions.length}
        </span>
      </div>
      
      {upcomingSessions.length === 0 ? (
        <div style={{ padding: '44px 20px', textAlign: 'center', backgroundColor: '#fff', borderRadius: '18px', border: '1px solid #e2e8f0' }}>
          <Calendar size={40} style={{ color: '#cbd5e1', marginBottom: '12px' }} />
          <p style={{ margin: 0, color: '#64748b', fontWeight: 600 }}>No upcoming classes found.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {displayedSessions.map((session, idx) => {
            const isFirstOfDate = idx === 0 || displayedSessions[idx-1].date !== session.date;
            const accent = getSessionAccent(session);
            return (
              <React.Fragment key={session.id}>
                {isFirstOfDate && (
                  <div style={{ fontSize: '0.74rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: idx === 0 ? 0 : '12px' }}>
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
                    borderRadius: '18px', 
                    padding: '18px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    boxShadow: '0 12px 28px rgba(15,23,42,0.06)',
                    border: '1px solid #e2e8f0',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: `${accent}16`, color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>
                      {session.studentName?.charAt(0) || 'S'}
                    </div>
                    <div>
                      <div style={{ fontSize: '1.02rem', fontWeight: 900, color: '#0f172a' }}>
                        {Array.isArray(session.groupStudentNames) ? session.groupStudentNames.join(', ') : session.studentName}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 700 }}>{normalizeSubjectLabel(session.subject)}</div>
                    </div>
                  </div>
                  <div style={{ 
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    padding: '8px 10px', 
                    borderRadius: '12px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '6px',
                    color: '#334155',
                    fontSize: '0.82rem',
                    fontWeight: 800,
                    whiteSpace: 'nowrap'
                  }}>
                    <Clock size={16} />
                    {session.startTime}
                  </div>
                </motion.div>
              </React.Fragment>
            );
          })}

          {!showAllAgenda && upcomingSessions.length > 5 && (
            <button 
              onClick={() => setShowAllAgenda(true)}
              style={{ 
                width: '100%', 
                padding: '16px', 
                backgroundColor: '#f1f5f9', 
                border: 'none', 
                borderRadius: '16px', 
                color: '#6366f1', 
                fontWeight: 800, 
                fontSize: '0.9rem', 
                cursor: 'pointer',
                marginTop: '12px'
              }}
            >
              Show {upcomingSessions.length - 5} More Classes
            </button>
          )}
        </div>
      )}
    </div>
    );
  };

  // ── Desktop Calendar Grid View ──
  const renderCalendarView = () => (
    <div style={{ 
      flex: 1, 
      backgroundColor: '#fff', 
      borderRadius: '18px', 
      border: '1px solid #e2e8f0', 
      display: 'flex', 
      flexDirection: 'column', 
      overflow: 'hidden', 
      boxShadow: '0 18px 45px rgba(15,23,42,0.08)' 
    }}>
      {/* Days header row */}
      <div style={{ display: 'grid', gridTemplateColumns: '76px repeat(7, 1fr)', borderBottom: '1px solid #e2e8f0', backgroundColor: '#f8fafc', flexShrink: 0 }}>
        <div style={{ borderRight: '1px solid #e2e8f0' }} />
        {weekDays.map((day, i) => {
          const isToday = day.toDateString() === new Date().toDateString();
          const dateStr = formatDateKey(day);
          const dayCount = sessions.filter(s => s.date === dateStr).length;
          return (
            <div key={i} style={{ padding: '14px 8px', textAlign: 'center', borderRight: i < 6 ? '1px solid #e2e8f0' : 'none', backgroundColor: isToday ? '#eef2ff' : 'transparent' }}>
              <span style={{ display: 'block', fontSize: '10px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                {day.toLocaleDateString('en-US', { weekday: 'short' })}
              </span>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '34px', height: '34px', borderRadius: '12px',
                  fontSize: '1rem', fontWeight: 900,
                  backgroundColor: isToday ? '#4f46e5' : '#fff',
                  color: isToday ? '#fff' : '#334155',
                  border: isToday ? 'none' : '1px solid #e2e8f0',
                  boxShadow: isToday ? '0 8px 18px rgba(79,70,229,0.3)' : 'none'
                }}>
                  {day.getDate()}
                </span>
                {dayCount > 0 && (
                  <span style={{ minWidth: '22px', height: '22px', borderRadius: '999px', background: '#e0f2fe', color: '#0369a1', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 900 }}>
                    {dayCount}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Scrollable time grid */}
      <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '76px repeat(7, 1fr)', position: 'relative' }}>
          {/* Hour labels */}
          <div style={{ backgroundColor: '#fbfdff', borderRight: '1px solid #e2e8f0' }}>
            {timeSlots.map(h => (
              <div key={h} style={{ height: `${SLOT_H}px`, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end', paddingRight: '14px', paddingTop: '10px' }}>
                <span style={{ fontSize: '10px', fontWeight: 800, color: '#94a3b8' }}>
                  {h === 12 ? '12 PM' : h === 24 ? '12 AM' : h > 12 ? `${h - 12} PM` : `${h} AM`}
                </span>
              </div>
            ))}
          </div>

          {/* Grid background lines */}
          <div style={{ position: 'absolute', left: '76px', right: 0, top: 0, pointerEvents: 'none', zIndex: 1 }}>
            {timeSlots.map(h => (
              <div key={h} style={{ height: `${SLOT_H}px`, borderBottom: '1px solid rgba(226,232,240,0.6)' }} />
            ))}
          </div>

          {/* Day columns */}
          {weekDays.map((day, di) => {
            const dateStr = formatDateKey(day);
            const daySessions = sessions.filter(s => s.date === dateStr);
            return (
              <div key={di} style={{ position: 'relative', height: `${timeSlots.length * SLOT_H}px`, borderRight: di < 6 ? '1px solid rgba(241,245,249,0.9)' : 'none', background: di % 2 === 0 ? '#fff' : '#fcfdff' }}>
                {(() => {
                  // Group sessions by startTime, endTime, and subject to handle group classes
                  const groups = daySessions.reduce((acc, s) => {
                    const key = `${s.startTime}-${s.endTime}-${s.subject}`;
                    if (!acc[key]) acc[key] = [];
                    acc[key].push(s);
                    return acc;
                  }, {});

                  return Object.values(groups).map(group => {
                    const session = group[0];
                    const isGroup = group.length > 1;
                    const studentNames = group.map(s => s.studentName).join('\n');
                    
                    const start = parseTime(session.startTime);
                    const end = parseTime(session.endTime);
                    const top = (start - 8) * SLOT_H;
                    const height = Math.max((end - start) * SLOT_H - 4, 30);
                    const accent = getSessionAccent(session);

                    return (
                      <div
                        key={session.id}
                        onClick={() => handleOpenDetails(isGroup ? { ...session, isGroupedClass: true, groupStudents: group } : session)}
                        style={{
                          position: 'absolute', top: `${top + 2}px`, height: `${height}px`,
                          left: '6px', right: '6px',
                          backgroundColor: `${accent}14`, borderLeft: `4px solid ${accent}`,
                          borderRadius: '10px', padding: '8px 9px',
                          cursor: 'pointer', zIndex: 5, overflow: 'hidden',
                          boxShadow: '0 10px 22px rgba(15,23,42,0.08)',
                          transition: 'transform 0.2s',
                          display: 'flex',
                          flexDirection: 'column'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      >
                        <div style={{ fontSize: '10px', fontWeight: 900, color: accent, textTransform: 'uppercase', marginBottom: '3px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {normalizeSubjectLabel(session.subject)} {isGroup && `(${group.length})`}
                        </div>
                        <div style={{ fontSize: '11px', fontWeight: 800, color: '#0f172a', lineHeight: '1.2' }}>
                          {group.map((s, i) => (
                            <div key={i} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                              {s.studentName}
                            </div>
                          ))}
                        </div>
                        <div style={{ fontSize: '9px', color: '#475569', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 800 }}>
                          <Clock size={10} />{session.startTime}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="app-page" style={{ height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column' }}>

      {/* ── Header ── */}
      <div className="app-page__header" style={{ marginBottom: '24px' }}>
        <div className="app-page__title">
          <p style={{ margin: '0 0 6px', fontSize: '0.75rem', color: '#64748b', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {weekRangeLabel}
          </p>
          <h2>Schedule</h2>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
          {!isMobile && (
            <>
              <div style={{ minWidth: '132px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '16px', boxShadow: '0 12px 30px rgba(15,23,42,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0891b2', marginBottom: '8px' }}>
                  <List size={17} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>This Week</span>
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a' }}>{selectedWeekSessions.length}</div>
              </div>
              <div style={{ minWidth: '132px', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '16px', boxShadow: '0 12px 30px rgba(15,23,42,0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#16a34a', marginBottom: '8px' }}>
                  <CheckCircle2 size={17} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Today</span>
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a' }}>{todaySessions.length}</div>
              </div>
            </>
          )}
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', padding: '8px', borderRadius: '18px', border: '1px solid #e2e8f0', boxShadow: '0 12px 30px rgba(15,23,42,0.05)', height: isMobile ? '48px' : 'auto' }}>
            <button
              onClick={() => { const d = new Date(currentDate); d.setDate(d.getDate() - (isMobile ? 1 : 7)); setCurrentDate(d); }}
              style={{ background: '#f8fafc', border: 'none', padding: '8px', cursor: 'pointer', borderRadius: '12px', color: '#475569', display: 'flex', alignItems: 'center' }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentDate(new Date())}
              style={{ background: 'transparent', border: 'none', padding: '0 14px', cursor: 'pointer', fontWeight: 900, color: '#334155', fontSize: '0.9rem' }}
            >
              Today
            </button>
            <button
              onClick={() => { const d = new Date(currentDate); d.setDate(d.getDate() + (isMobile ? 1 : 7)); setCurrentDate(d); }}
              style={{ background: '#f8fafc', border: 'none', padding: '8px', cursor: 'pointer', borderRadius: '12px', color: '#475569', display: 'flex', alignItems: 'center' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* ── View Switcher ── */}
      {isMobile ? renderListView() : renderCalendarView()}

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
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900 }}>
                      {selectedSession.isGroupedClass 
                        ? 'Group Class' 
                        : (selectedSession.groupStudentNames ? selectedSession.studentName : selectedSession.studentName)}
                    </h3>
                    <p style={{ margin: 0, opacity: 0.85, fontWeight: 600 }}>{normalizeSubjectLabel(selectedSession.subject)} · {selectedSession.date}</p>
                    
                    {(selectedSession.isGroupedClass || selectedSession.groupStudentNames) && (
                      <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>Students ({selectedSession.isGroupedClass ? selectedSession.groupStudents.length : selectedSession.groupStudentNames.length})</span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                          {(selectedSession.isGroupedClass ? selectedSession.groupStudents : []).map((s, i) => (
                            <span 
                              key={i} 
                              style={{ 
                                position: 'relative',
                                padding: '8px 14px', 
                                paddingRight: isAdmin ? '32px' : '14px',
                                background: 'rgba(255,255,255,0.15)', 
                                border: '1px solid rgba(255,255,255,0.25)',
                                borderRadius: '12px', 
                                fontSize: '0.9rem', 
                                fontWeight: 800,
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center'
                              }}
                            >
                              {s.studentName}
                              {isAdmin && (
                                <button
                                  onClick={async (e) => {
                                    e.stopPropagation();
                                    if (window.confirm(`Remove ${s.studentName} from this group?`)) {
                                      try {
                                        // 1. Delete this student's specific session document
                                        await deleteDoc(doc(db, 'sessions', s.id));
                                        
                                        // 2. Update the remaining students' groupStudentNames list
                                        const remainingDocs = selectedSession.groupStudents.filter(doc => doc.id !== s.id);
                                        const remainingNames = remainingDocs.map(rd => rd.studentName);
                                        
                                        const { writeBatch } = await import('firebase/firestore');
                                        const batch = writeBatch(db);
                                        remainingDocs.forEach(rd => {
                                          batch.update(doc(db, 'sessions', rd.id), {
                                            groupStudentNames: remainingNames
                                          });
                                        });
                                        await batch.commit();
                                        
                                        showToast(`${s.studentName} removed from group.`, 'success');
                                        setSelectedSession(null); // Close modal to refresh view
                                      } catch (err) {
                                        console.error(err);
                                        showToast('Failed to remove student.', 'error');
                                      }
                                    }
                                  }}
                                  style={{
                                    position: 'absolute',
                                    right: '8px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'rgba(0,0,0,0.2)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '18px',
                                    height: '18px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#fff',
                                    padding: 0
                                  }}
                                >
                                  <X size={12} strokeWidth={3} />
                                </button>
                              )}
                            </span>
                          ))}
                          
                          {/* Fallback for legacy data without groupStudents array */}
                          {!selectedSession.isGroupedClass && selectedSession.groupStudentNames && selectedSession.groupStudentNames.map((name, i) => (
                            <span key={i} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 700 }}>{name}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <button onClick={() => setSelectedSession(null)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', marginLeft: '16px' }}>
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Date</label>
                    <input 
                      type="date" 
                      value={editData.date} 
                      disabled={!isAdmin}
                      onChange={e => setEditData({ ...editData, date: e.target.value })}
                      style={{ width: '100%', backgroundColor: isAdmin ? '#fff' : '#f8fafc', border: '2px solid #f1f5f9', borderRadius: '16px', padding: '16px', fontSize: '1rem', color: '#1e1b4b', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Start Time</label>
                      <select 
                        disabled={!isAdmin}
                        value={editData.startTime} 
                        onChange={e => setEditData({ ...editData, startTime: e.target.value })}
                        style={{ width: '100%', backgroundColor: isAdmin ? '#fff' : '#f8fafc', border: '2px solid #f1f5f9', borderRadius: '16px', padding: '16px', fontSize: '1rem', color: '#1e1b4b', outline: 'none', boxSizing: 'border-box', cursor: isAdmin ? 'pointer' : 'default' }}
                      >
                        {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>End Time</label>
                      <select 
                        disabled={!isAdmin}
                        value={editData.endTime} 
                        onChange={e => setEditData({ ...editData, endTime: e.target.value })}
                        style={{ width: '100%', backgroundColor: isAdmin ? '#fff' : '#f8fafc', border: '2px solid #f1f5f9', borderRadius: '16px', padding: '16px', fontSize: '1rem', color: '#1e1b4b', outline: 'none', boxSizing: 'border-box', cursor: isAdmin ? 'pointer' : 'default' }}
                      >
                        {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Notes</label>
                  {isAdmin
                    ? <textarea rows={3} value={editData.notes} onChange={e => setEditData({ ...editData, notes: e.target.value })} style={{ width: '100%', border: '2px solid #f1f5f9', borderRadius: '16px', padding: '16px', fontSize: '1rem', color: '#1e1b4b', outline: 'none', resize: 'none', boxSizing: 'border-box' }} />
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
                    <button 
                      onClick={() => selectedSession.groupId ? setSaveChoiceOpen(selectedSession) : handleSaveDetails('single')} 
                      style={{ flex: 1, backgroundColor: '#6366f1', color: '#fff', padding: '18px', borderRadius: '18px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                    >
                      <Save size={20} /> Save Changes
                    </button>
                    <button onClick={() => selectedSession.groupId ? setDeleteChoiceOpen(selectedSession) : handleDeleteSession(selectedSession, 'single')} style={{ padding: '18px', backgroundColor: '#fff1f2', color: '#f43f5e', borderRadius: '18px', border: 'none', cursor: 'pointer' }}>
                      <Trash2 size={20} />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Save Confirmation Modal ── */}
      <AnimatePresence>
        {saveChoiceOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSaveChoiceOpen(null)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '400px', 
                backgroundColor: '#fff', 
                borderRadius: '32px', 
                padding: '32px', 
                textAlign: 'center',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
              }}
            >
              <div style={{ width: '64px', height: '64px', backgroundColor: '#eef2ff', color: '#6366f1', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Save size={32} />
              </div>
              <h3 style={{ margin: '0 0 12px', fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>Update recurring lesson?</h3>
              <p style={{ margin: '0 0 28px', color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5, fontWeight: 500 }}>
                This is a recurring session. Would you like to update only this instance or the entire future series?
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button 
                  onClick={() => handleSaveDetails('single')}
                  style={{ width: '100%', backgroundColor: '#f1f5f9', color: '#334155', padding: '16px', borderRadius: '16px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer' }}
                >
                  Only this session
                </button>
                <button 
                  onClick={() => handleSaveDetails('series')}
                  style={{ width: '100%', backgroundColor: '#6366f1', color: '#fff', padding: '16px', borderRadius: '16px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer' }}
                >
                  This and all future sessions
                </button>
                <button 
                  onClick={() => setSaveChoiceOpen(null)}
                  style={{ width: '100%', backgroundColor: 'transparent', color: '#94a3b8', padding: '12px', borderRadius: '16px', border: 'none', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', marginTop: '4px' }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Delete Confirmation Modal ── */}
      <AnimatePresence>
        {deleteChoiceOpen && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setDeleteChoiceOpen(null)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              style={{ 
                position: 'relative', 
                width: '100%', 
                maxWidth: '400px', 
                backgroundColor: '#fff', 
                borderRadius: '32px', 
                padding: '32px', 
                textAlign: 'center',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
              }}
            >
              <div style={{ width: '64px', height: '64px', backgroundColor: '#fff1f2', color: '#f43f5e', borderRadius: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <Trash2 size={32} />
              </div>
              <h3 style={{ margin: '0 0 12px', fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>Delete recurring lesson?</h3>
              <p style={{ margin: '0 0 28px', color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5, fontWeight: 500 }}>
                This is a recurring session. Would you like to delete only this instance or the entire series?
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button 
                  onClick={() => handleDeleteSession(deleteChoiceOpen, 'single')}
                  style={{ width: '100%', backgroundColor: '#f1f5f9', color: '#334155', padding: '16px', borderRadius: '16px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer' }}
                >
                  Only this session
                </button>
                <button 
                  onClick={() => handleDeleteSession(deleteChoiceOpen, 'series')}
                  style={{ width: '100%', backgroundColor: '#fff1f2', color: '#f43f5e', padding: '16px', borderRadius: '16px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer' }}
                >
                  This and all future sessions
                </button>
                <button 
                  onClick={() => setDeleteChoiceOpen(null)}
                  style={{ width: '100%', backgroundColor: 'transparent', color: '#94a3b8', padding: '12px', borderRadius: '16px', border: 'none', fontWeight: 700, fontSize: '0.9rem', cursor: 'pointer', marginTop: '4px' }}
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Schedule;
