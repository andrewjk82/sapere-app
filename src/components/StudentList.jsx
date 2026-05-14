import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Plus, MoreVertical, Mail, BookOpen, AlertCircle, CheckCircle, Trophy, RefreshCw } from 'lucide-react';
import { studentService } from '../services/studentService';
import { db } from '../firebase/config';
import { collection, doc, getDoc, getDocs, limit, query, where } from 'firebase/firestore';
import AvatarPickerModal from './AvatarPickerModal';
import StudentProfileModal from './StudentProfileModal';

const StudentList = ({ students, onAddStudent, onRefreshStudents, onSelectStudent }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [activeStudent, setActiveStudent] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileStudent, setProfileStudent] = useState(null);
  const [completionStates, setCompletionStates] = useState({}); // { studentId: 'pending' | 'done' | 'ended' }
  const [reviewPendingStates, setReviewPendingStates] = useState({});

  const todayStr = new Date().toLocaleDateString('en-CA'); // Local YYYY-MM-DD, avoids UTC timezone shift
  const COMPLETION_REFRESH_TTL_MS = 5 * 60 * 1000;

  // Build a stable ID-list from `students` so the effect doesn't re-run every
  // time the parent passes in a new array reference with the same contents.
  const studentSig = useMemo(
    () => (students || []).map(s => `${s.source || ''}|${s.id}`).join(','),
    [students]
  );

  React.useEffect(() => {
    if (!students || students.length === 0) return;
    let cancelled = false;

    // One summary document replaces 2N per-student daily/calc stat reads.
    const fetchCompletions = async () => {
      const summarySnap = await getDoc(doc(db, 'admin_daily_summary', todayStr));
      if (cancelled) return;
      const summary = summarySnap.exists() ? (summarySnap.data().students || {}) : {};
      const next = {};
      students.forEach((student) => {
        const item = summary[student.id];
        if (!item) {
          next[student.id] = 'pending';
          return;
        }
        const calcEnabled = student.calculationEnabled !== false;
        const dailyDone = item.dailyDone === true;
        const calcDone = item.calcDone === true;
        const dailyEnded = item.dailyEnded === true || item.dailyStatus === 'ended';
        const calcEnded = item.calcEnded === true || item.calcStatus === 'ended';
        const allRequiredDone = dailyDone && (!calcEnabled || calcDone);
        const anyEnded = dailyEnded || (calcEnabled && calcEnded);
        next[student.id] = allRequiredDone ? 'done' : (anyEnded ? 'ended' : 'pending');
      });
      setCompletionStates(next);
    };

    // Throttle: this is cheap now (1 read), but still avoid focus bounce churn.
    // (rapid focus/blur shouldn't pile up reads).
    let lastRefreshAt = 0;
    const refresh = () => {
      const now = Date.now();
      if (now - lastRefreshAt < COMPLETION_REFRESH_TTL_MS) return;
      lastRefreshAt = now;
      fetchCompletions();
    };

    const onVisibilityChange = () => {
      if (!document.hidden) refresh();
    };

    refresh(); // initial
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelled = true;
      window.removeEventListener('focus', refresh);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [studentSig, todayStr]);

  React.useEffect(() => {
    if (!students || students.length === 0) return;
    let cancelled = false;

    const fetchPendingReviews = async () => {
      const checks = await Promise.all(students.map(async (student) => {
        try {
          const snap = await getDocs(query(
            collection(db, 'grading_queue'),
            where('userId', '==', student.id),
            where('status', '==', 'pending'),
            limit(1)
          ));
          return [student.id, !snap.empty];
        } catch {
          return [student.id, false];
        }
      }));
      if (!cancelled) setReviewPendingStates(Object.fromEntries(checks));
    };

    fetchPendingReviews();
    return () => {
      cancelled = true;
    };
  }, [studentSig]);

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    try {
      await onRefreshStudents();
    } catch (err) {
      console.error('Refresh failed:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  
  const filteredStudents = students.filter(s => {
    const nameMatch = (s.name || '').toLowerCase().includes(searchTerm.toLowerCase());
    const subjectMatch = (s.subject || '').toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || subjectMatch;
  });

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Students</h2>
        </div>
        <button 
          onClick={handleManualRefresh}
          disabled={isRefreshing}
          className="app-button app-button--primary"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
          {isRefreshing ? 'Syncing...' : 'Sync Students'}
        </button>
      </div>

      <div className="app-page__actions">
        <div className="app-input">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search by name or subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="app-button app-button--secondary">
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <div className="student-list-grid">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student, index) => {
            const isMenuOpen = activeMenuId === student.id;
            // Prioritize dreamImageUrl (photo) > avatarUrl > Dicebear fallback
            const studentImage = student.dreamImageUrl || student.avatarUrl || `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(student.name || student.id)}`;
            
            return (
              <motion.div 
                key={student.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="app-panel student-card"
                style={{ position: 'relative' }}
              >
                <div className="student-card__top">
                  <div className="student-card__main">
                    <div
                      className="student-card__avatar"
                      style={{ 
                        width: '70px', 
                        height: '70px', 
                        borderRadius: '18px', 
                        overflow: 'hidden', 
                        background: '#f8fafc',
                        border: '1px solid rgba(0,0,0,0.05)'
                      }}
                    >
                      <img 
                        src={studentImage} 
                        alt={student.name} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#1e1b4b', margin: 0 }}>{student.name}</h3>
                        <span className={`status-badge status-badge--sm ${
                          student.status === 'Active' ? 'status-badge--active' : 'status-badge--inactive'
                        }`} style={{ fontSize: '0.65rem', padding: '2px 8px' }}>
                          {student.status || 'Active'}
                        </span>
                        {completionStates[student.id] === 'done' && (
                          <div 
                            title="Today's required challenges completed"
                            style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '4px', 
                              background: '#f0fdf4', 
                              color: '#16a34a', 
                              padding: '2px 8px', 
                              borderRadius: '8px', 
                              fontSize: '0.65rem', 
                              fontWeight: 900,
                              border: '1px solid #dcfce7'
                            }}
                          >
                            <CheckCircle size={10} />
                            DONE
                          </div>
                        )}
                        {completionStates[student.id] === 'ended' && (
                          <div 
                            title="Today's challenge was started but ended before completion"
                            style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '4px', 
                              background: '#fff7ed', 
                              color: '#ea580c', 
                              padding: '2px 8px', 
                              borderRadius: '8px', 
                              fontSize: '0.65rem', 
                              fontWeight: 900,
                              border: '1px solid #fed7aa'
                            }}
                          >
                            <AlertCircle size={10} />
                            ENDED
                          </div>
                        )}
                        {completionStates[student.id] !== 'done' && completionStates[student.id] !== 'ended' && reviewPendingStates[student.id] === true && (
                          <div 
                            title="Manual review pending"
                            style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '4px', 
                              background: '#fff1f2', 
                              color: '#f43f5e', 
                              padding: '2px 8px', 
                              borderRadius: '8px', 
                              fontSize: '0.65rem', 
                              fontWeight: 900,
                              border: '1px solid #fecaca'
                            }}
                          >
                            <AlertCircle size={10} />
                            PENDING
                          </div>
                        )}
                      </div>
                      <p className="student-card__meta" style={{ marginBottom: '10px', fontSize: '0.85rem' }}>{student.level} • {student.school || student.subject}</p>
                      
                      <div className="student-card__progress-wrapper" style={{ 
                        background: 'rgba(99, 102, 241, 0.05)', 
                        padding: '6px 12px', 
                        borderRadius: '10px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px',
                        border: '1px solid rgba(99, 102, 241, 0.1)'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b' }}>
                          <Trophy size={14} />
                          <span style={{ fontWeight: 900, color: '#1e1b4b', fontSize: '0.85rem' }}>
                            {student.totalXP ? student.totalXP.toLocaleString() : '0'} XP
                          </span>
                        </div>
                        <div className="student-card__progress-track" style={{ flex: 1, height: '6px', background: 'rgba(0,0,0,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div className="student-card__progress-fill" style={{ 
                            width: `${(student.totalXP || 0) % 1000 / 10}%`, 
                            height: '100%', 
                            background: 'linear-gradient(90deg, #818cf8, #a78bfa)', 
                            borderRadius: '3px' 
                          }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ position: 'relative' }}>
                    <button 
                      className="app-icon-button" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenuId(activeMenuId === student.id ? null : student.id);
                      }}
                      style={{ padding: '8px', borderRadius: '12px' }}
                    >
                      <MoreVertical size={20} />
                    </button>

                    <AnimatePresence>
                      {isMenuOpen && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: -10 }}
                          style={{
                            position: 'absolute', top: '100%', right: 0, width: '140px',
                            background: 'white', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            border: '1px solid #f1f5f9', zIndex: 10, padding: '6px', marginTop: '8px'
                          }}
                        >
                          <button 
                            onClick={() => { onSelectStudent(student.id); setActiveMenuId(null); }}
                            style={{ width: '100%', textAlign: 'left', padding: '10px 14px', background: 'none', border: 'none', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, color: '#334155', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                          >
                            Profile
                          </button>
                          <button 
                            onClick={async () => {
                              if (window.confirm('Delete this student?')) {
                                await studentService.deleteStudentRecord(student);
                              }
                              setActiveMenuId(null);
                            }}
                            style={{ width: '100%', textAlign: 'left', padding: '10px 14px', background: 'none', border: 'none', borderRadius: '10px', fontSize: '0.85rem', fontWeight: 600, color: '#f43f5e', cursor: 'pointer' }}
                          >
                            Delete
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                
              </motion.div>
            );
          })
        ) : (
          <div className="app-empty" style={{ gridColumn: '1 / -1' }}>
            {searchTerm ? "No students match your search." : "No students added yet. Click 'Add Student' to get started."}
          </div>
        )}
      </div>

      <StudentProfileModal 
        open={profileOpen}
        student={profileStudent}
        onClose={() => {
          setProfileOpen(false);
          setProfileStudent(null);
        }}
      />

      <AvatarPickerModal
        open={avatarOpen}
        title={activeStudent ? `${activeStudent.name}'s Persona` : 'Student Persona'}
        subtitle="Choose an avatar for this student"
        initialStyle={activeStudent?.avatarStyle || 'avataaars'}
        initialSeed={activeStudent?.avatarSeed || (activeStudent?.name?.split(' ')?.[0] ?? '')}
        onClose={() => {
          setAvatarOpen(false);
          setActiveStudent(null);
        }}
        onApply={async ({ avatarStyle, avatarSeed, avatarUrl }) => {
          if (!activeStudent?.id) return;
          await studentService.updateStudent(activeStudent.id, {
            avatarStyle,
            avatarSeed,
            avatarUrl,
            updatedAt: new Date().toISOString(),
          });
          setAvatarOpen(false);
          setActiveStudent(null);
        }}
      />
    </div>
  );
};

export default StudentList;
