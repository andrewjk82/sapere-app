import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Users, Clock, CheckCircle2, GraduationCap, X, Calendar, Check, Trophy, Star, Bell, BookOpen, ChevronRight, PlayCircle, Target, AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react';
import StatCard from './StatCard';
import StudentRow from './StudentRow';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { db } from '../firebase/config';
import { doc, onSnapshot, setDoc, updateDoc, increment, serverTimestamp, collection, addDoc, query, where, or, orderBy, limit } from 'firebase/firestore';
import AvatarPickerModal from './AvatarPickerModal';
import { TIME_OPTIONS } from '../constants/timeOptions';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { normalizeSubjectLabel } from '../utils/subjectLabels';

const Dashboard = ({ students, onAddStudent, onSelectStudent, setActiveTab, onShowLeaderboard }) => {
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();
  const [profile, setProfile] = useState(null);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [studentSessions, setStudentSessions] = useState([]);
  const [selectedViewSession, setSelectedViewSession] = useState(null);
  const [lastSync, setLastSync] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [dailyStats, setDailyStats] = useState([]);
  const [pendingGrading, setPendingGrading] = useState([]);
  const [selectedGradingItem, setSelectedGradingItem] = useState(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importDone, setImportDone] = useState(false);

  // Fetch student daily stats for insights
  useEffect(() => {
    if (!user?.uid || isAdmin) return;
    const unsub = onSnapshot(collection(db, 'users', user.uid, 'daily_stats'), (snap) => {
      const stats = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setDailyStats(stats);
    });
    return () => unsub();
  }, [user?.uid, isAdmin]);

  const learningInsights = useMemo(() => {
    if (dailyStats.length === 0) return [];
    
    const topicMistakes = {};
    const topicTotals = {};
    
    dailyStats.forEach(stat => {
      if (!stat.questions || !stat.userAnswers) return;
      stat.questions.forEach((q, idx) => {
        const type = q.type ? q.type.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'General';
        topicTotals[type] = (topicTotals[type] || 0) + 1;
        if (q.answer !== stat.userAnswers[idx]) {
          topicMistakes[type] = (topicMistakes[type] || 0) + 1;
        }
      });
    });
    
    const topics = Object.keys(topicTotals).map(type => ({
      type,
      mistakes: topicMistakes[type] || 0,
      total: topicTotals[type],
      errorRate: ((topicMistakes[type] || 0) / topicTotals[type]) * 100
    }));
    
    topics.sort((a, b) => b.errorRate - a.errorRate);
    return topics.filter(t => t.total >= 3 && t.errorRate > 0).slice(0, 3);
  }, [dailyStats]);

  useEffect(() => {
    if (!isAdmin) return;
    const q = query(collection(db, 'grading_queue'), where('status', '==', 'pending'), orderBy('submittedAt', 'desc'), limit(5));
    return onSnapshot(q, (snap) => {
      setPendingGrading(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    });
  }, [isAdmin]);

  // ── Fetch Last Sync Info ──
  useEffect(() => {
    if (!isAdmin) return;
    const q = query(collection(db, 'system_logs'), where('type', '==', 'cron_execution'));
    return onSnapshot(q, (snap) => {
      if (!snap.empty) {
        const sorted = snap.docs
          .map(d => d.data())
          .sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
        setLastSync(sorted[0]);
      }
    });
  }, [isAdmin]);

  const handleManualSync = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch('/api/cron-unified');
      const data = await res.json();
      if (data.success) {
        showToast(`Sync successful! ${data.logs.length} reminders sent.`, 'success');
      } else {
        showToast('Sync failed: ' + data.error, 'error');
      }
    } catch (e) {
      showToast('Sync failed: ' + e.message, 'error');
    } finally {
      setIsSyncing(false);
    }
  };


  // Auto-sync curriculum for admins on mount.
  // Depend on user?.uid (stable) instead of the full user object — the latter
  // is a fresh reference every Firebase token refresh, which would re-fire
  // performAutoSync (extra reads + writes) every ~hour for no reason.
  useEffect(() => {
    if (!isAdmin || !user?.uid) return;
    const runAutoSync = async () => {
      try {
        setIsImporting(true);
        showToast('Checking for curriculum updates...', 'info');
        const { performAutoSync } = await import('../services/AutoSyncService');
        await performAutoSync(showToast);
      } catch (err) {
        console.error('Auto-sync failed:', err);
      } finally {
        setIsImporting(false);
      }
    };
    runAutoSync();
  }, [isAdmin, user?.uid, showToast]);


  // ── Handle Resize ──
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!user?.email || isAdmin) return undefined;
    // Query sessions by student's email OR student's UID for maximum reliability
    const q = query(
      collection(db, 'sessions'),
      or(
        where('studentId', '==', user.uid),
        where('studentEmail', '==', (user.email || '').toLowerCase())
      )
    );
    return onSnapshot(q, (snap) => {
      const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setStudentSessions(docs);
    });
  }, [user?.email, user?.uid, isAdmin]);

  const { nextLesson, lastLesson } = useMemo(() => {
    const now = new Date();
    
    const getTime = (s) => {
      try {
        if (!s.date || !s.startTime) return 0;
        
        // Robust time parsing
        const timeMatch = s.startTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
        if (!timeMatch) return new Date(s.date).getTime();

        let [_, hours, minutes, period] = timeMatch;
        hours = parseInt(hours, 10);
        minutes = parseInt(minutes, 10);
        period = period.toUpperCase();

        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        
        // Create date object in local time
        const [y, m, d] = s.date.split('-').map(Number);
        return new Date(y, m - 1, d, hours, minutes).getTime();
      } catch (e) {
        console.error("getTime error:", e);
        return 0;
      }
    };

    const sorted = [...studentSessions].sort((a, b) => getTime(a) - getTime(b));
    
    const next = sorted.find(s => getTime(s) > now.getTime());
    const past = [...sorted].reverse().find(s => getTime(s) < now.getTime());
    
    return { nextLesson: next, lastLesson: past };
  }, [studentSessions]);
  const [newSession, setNewSession] = useState({
    studentIds: [], // Important for group lessons
    studentName: '',
    subject: '',
    date: new Date().toISOString().split('T')[0],
    startTime: '10:00 AM',
    endTime: '11:30 AM',
    notes: '',
    homework: '',
    recurring: false
  });

  useEffect(() => {
    if (!user?.uid) return undefined;
    const ref = doc(db, 'users', user.uid);
    return onSnapshot(ref, (snap) => {
      setProfile(snap.exists() ? snap.data() : null);
    });
  }, [user?.uid]);

  const userName = profile?.firstName || user?.displayName?.split(' ')[0] || user?.email?.split('@')[0] || 'Andrew';

  useEffect(() => {
    if (!user?.uid || !profile || isAdmin) return;

    const currentYear = new Date().getFullYear();
    const lastPromoted = profile.lastPromotedYear;

    // First time setup: if lastPromotedYear doesn't exist, set it to current year
    if (!lastPromoted) {
      setDoc(doc(db, 'users', user.uid), { lastPromotedYear: currentYear }, { merge: true });
      return;
    }

    // If a new calendar year has started
    if (currentYear > lastPromoted) {
      const yearStr = profile.year;
      if (yearStr) {
        const safeYearStr = String(yearStr);
        const match = safeYearStr.match(/\d+/);
        if (match) {
          const num = parseInt(match[0], 10);
          const nextYear = safeYearStr.replace(match[0], (num + 1).toString());
          
          setDoc(doc(db, 'users', user.uid), { 
            year: nextYear, 
            lastPromotedYear: currentYear,
            updatedAt: new Date().toISOString() 
          }, { merge: true });
          
          console.log(`Auto-promoted ${userName} from ${yearStr} to ${nextYear}`);
        }
      }
    }
  }, [user?.uid, profile, isAdmin, userName]);

  const fallbackUrl = useMemo(() => {
    if (user?.photoURL) return user.photoURL;
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.email || 'sapere')}`;
  }, [user?.photoURL, user?.email]);

  const avatarUrl = profile?.avatarUrl || (profile?.avatarStyle && profile?.avatarSeed
    ? `https://api.dicebear.com/7.x/${profile.avatarStyle}/svg?seed=${encodeURIComponent(profile.avatarSeed)}`
    : fallbackUrl);

  const studentYear = profile?.assignedYear || profile?.year || 'Year 10';
  const studentCourse = profile?.assignedCourse || profile?.course || 'Advanced';

  const activeModules = useMemo(() => {
    let chapters = [];
    if (CURRICULUM_DATA[studentYear]) {
      if (Array.isArray(CURRICULUM_DATA[studentYear])) {
        chapters = CURRICULUM_DATA[studentYear];
      } else if (CURRICULUM_DATA[studentYear][studentCourse]) {
        chapters = CURRICULUM_DATA[studentYear][studentCourse];
      } else {
        chapters = Object.values(CURRICULUM_DATA[studentYear])[0] || [];
      }
    }
    return chapters.slice(0, 3); // Overview top 3
  }, [studentYear, studentCourse]);

  // Calculate dynamic stats
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === 'Active').length;
  const totalLessons = students.reduce((acc, s) => acc + (s.lessons || 0), 0);

  const displayStats = [
    { label: "Total Students", value: totalStudents.toString(), icon: "Users" },
    { label: "Active Students", value: activeStudents.toString(), icon: "GraduationCap" },
    { label: "Total Lessons", value: totalLessons.toString(), icon: "CheckCircle2" },
    { label: "Hours Tutored", value: `${Math.round(totalLessons * 1.5)}h`, icon: "Clock" },
  ];

  const handleCreateSession = async (e) => {
    e.preventDefault();
    if (newSession.studentIds.length === 0 || !newSession.subject) {
      showToast("Please select at least one student and a subject.", 'warning');
      return;
    }
    setIsSubmitting(true);
    try {
      const sessionsToCreate = [];
      const groupId = `series_${Date.now()}`; 
      const sessionSubject = normalizeSubjectLabel(newSession.subject.trim());
      
      const allStudentNames = newSession.studentIds.map(id => {
        const s = students.find(st => st.id === id);
        return s?.name || s?.displayName || `${s?.firstName || ''} ${s?.lastName || ''}`.trim() || 'Student';
      });

      for (const studentId of newSession.studentIds) {
        const selectedStudent = students.find(s => s.id === studentId);
        const studentEmail = (selectedStudent?.email || '').toLowerCase();
        const studentName = selectedStudent?.name || selectedStudent?.displayName || `${selectedStudent?.firstName || ''} ${selectedStudent?.lastName || ''}`.trim() || 'Student';

        const count = newSession.recurring ? 52 : 1;
        const baseDate = new Date(newSession.date + 'T12:00:00'); // noon avoids UTC day shift

        for (let i = 0; i < count; i++) {
          const nextDate = new Date(baseDate);
          nextDate.setDate(baseDate.getDate() + (i * 7));
          const year = nextDate.getFullYear();
          const month = String(nextDate.getMonth() + 1).padStart(2, '0');
          const day   = String(nextDate.getDate()).padStart(2, '0');
          
          sessionsToCreate.push({
            ...newSession,
            subject: sessionSubject,
            studentId,
            studentName,
            studentEmail,
            groupStudentNames: allStudentNames, // Store everyone's name in each doc
            groupId: groupId, 
            date: `${year}-${month}-${day}`,
            isHomeworkCompleted: false,
            reminderSent: false,
            createdAt: new Date().toISOString()
          });
        }
      }

      // Add all to Firestore
      await Promise.all(sessionsToCreate.map(s => {
        const { studentIds, ...rest } = s; // Don't save the array of all IDs to individual docs
        return addDoc(collection(db, 'sessions'), rest);
      }));

      await Promise.all(newSession.studentIds.map(async (studentId) => {
        const selectedStudent = students.find(s => s.id === studentId);
        const firstSession = sessionsToCreate.find(s => s.studentId === studentId);
        if (!selectedStudent || !firstSession) return;

        try {
          await fetch('/api/send-notif', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              studentId,
              email: selectedStudent.email || '',
              subject: 'Your schedule has been updated',
              text: `Your ${firstSession.subject} session has been scheduled for ${firstSession.date} at ${firstSession.startTime}.`
            })
          });
        } catch (err) {
          console.warn('Schedule notification failed:', err);
        }
      }));

      setShowScheduleModal(false);
      setNewSession({ 
        studentIds: [], 
        studentName: '', 
        subject: '', 
        date: new Date().toISOString().split('T')[0], 
        startTime: '10:00 AM',
        endTime: '11:30 AM',
        notes: '',
        homework: '',
        recurring: false 
      });
    } catch (err) {
      console.error('Error creating session:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGrade = async (status) => {
    if (!selectedGradingItem) return;
    try {
      // 1. Update the grading queue item
      await updateDoc(doc(db, 'grading_queue', selectedGradingItem.id), {
        status,
        gradedAt: serverTimestamp(),
        gradedBy: user.uid
      });
      
      const type = selectedGradingItem.challengeType || 'daily';
      const colName = type === 'calc' ? 'calc_stats' : 'daily_stats';
      const userId = selectedGradingItem.userId;
      
      // Improved statId lookup for older records
      let statId = selectedGradingItem.date;
      if (!statId && selectedGradingItem.submittedAt) {
        const sAt = selectedGradingItem.submittedAt;
        const d = (typeof sAt.toDate === 'function') ? sAt.toDate() : new Date(sAt);
        if (!isNaN(d.getTime())) {
          statId = d.toLocaleDateString('en-CA'); // Match local date format used when saving
        }
      }
      if (!statId) statId = selectedGradingItem.id.split('_')[0]; // Final fallback

      if (status === 'correct') {
        // 2. Calculate proportional XP
        const totalQ = selectedGradingItem.totalQuestions || 10;
        const maxXP = type === 'calc' ? 50 : 100;
        const xpPerQuestion = Math.round(maxXP / totalQ);

        // 3. Update overall XP in user doc
        await updateDoc(doc(db, 'users', userId), {
          totalXP: increment(xpPerQuestion),
          updatedAt: new Date().toISOString()
        });

        // 4. Update the actual score in the daily/calc stats record
        if (statId && userId) {
          try {
            const statRef = doc(db, 'users', userId, colName, statId);
            await updateDoc(statRef, {
              score: increment(1)
            });
          } catch (statErr) {
            console.warn("Could not update stat score (might be a manual student or missing doc):", statErr);
            // Fallback for students in 'students' collection if manual
            try {
              const manualStatRef = doc(db, 'students', userId, colName, statId);
              await updateDoc(manualStatRef, {
                score: increment(1)
              });
            } catch (e2) {}
          }
        }

        showToast(`Graded as Correct. Student received ${xpPerQuestion} XP!`, 'success');
      } else {
        showToast(`Graded as Incorrect.`, 'info');
      }
      setSelectedGradingItem(null);
    } catch (err) {
      console.error("Failed to grade item:", err);
      showToast("Failed to update grade", 'error');
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <>
      <style>{`
        @media (max-width: 720px) {
          .no-top-padding-mobile {
            margin-top: -100px !important;
            margin-left: -20px !important;
            margin-right: -20px !important;
            padding-top: 0 !important;
          }
        }
      `}</style>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`app-page ${!isAdmin && isMobile ? 'no-top-padding-mobile' : ''}`}
      >
        {!isAdmin && (
          <div className="student-hero-container" style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', 
            gap: isMobile ? '16px' : '24px', 
            padding: isMobile ? '0 0 16px 0' : '0 0 24px 0',
            alignItems: 'stretch'
          }}>
            {/* Left: Vision Card */}
            <div style={{ gridColumn: isMobile ? 'span 1' : 'span 7' }}>
              <div className="app-panel vision-card" style={{ 
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url('${profile?.dreamImageUrl || 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=1200'}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#1e1b4b', // Dark fallback to match theme
                height: isMobile ? '460px' : '100%',
                minHeight: isMobile ? '460px' : '560px',
                borderRadius: isMobile ? '0 0 32px 32px' : '32px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: isMobile ? '40px 24px' : '40px',
                color: 'white',
                overflow: 'hidden',
                boxShadow: isMobile ? 'none' : '0 20px 50px rgba(0,0,0,0.15)',
                border: 'none',
                width: '100%'
              }}>
                <div className="vision-card__content" style={{ zIndex: 1 }}>
                  <h1 style={{ 
                    fontFamily: "'Poppins', sans-serif", 
                    fontSize: isMobile ? '2.2rem' : '3.5rem', 
                    fontWeight: 900, 
                    margin: 0, 
                    lineHeight: 1.1, 
                    color: '#fff', 
                    letterSpacing: '-0.02em', 
                    textShadow: '0 4px 20px rgba(0,0,0,0.3)' 
                  }}>
                    <span style={{ fontSize: '0.35em', display: 'block', textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.9, marginBottom: '4px', color: 'rgba(255,255,255,0.8)' }}>
                      {getGreeting()},
                    </span>
                    {userName}
                  </h1>
                  {profile?.dreamJob && (
                    <div style={{ marginTop: '16px', padding: '6px 14px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)', borderRadius: '12px', display: 'inline-block', border: '1px solid rgba(255,255,255,0.3)' }}>
                      <span style={{ fontWeight: 800, fontSize: '0.75rem', color: 'white', letterSpacing: '0.08em' }}>FUTURE {profile.dreamJob.toUpperCase()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Status Cards Stack */}
            <div style={{ 
              gridColumn: isMobile ? 'span 1' : 'span 5', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: isMobile ? '16px' : '20px',
              padding: isMobile ? '0 20px' : '0'
            }}>
              {/* XP / Progress Card */}
              <div style={{ 
                flex: 1,
                background: 'linear-gradient(135deg, #1e1b4b, #312e81)', 
                borderRadius: '28px', 
                padding: '12px 24px', 
                color: 'white',
                boxShadow: '0 15px 35px rgba(30,27,75,0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '82px'
                
              }}>
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.1 }}>
                  <Trophy size={100} />
                </div>
                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>Total XP</label>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <h4 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 900, color: 'white' }}>{profile?.totalXP || 0}</h4>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)' }}>Master Level 1</div>
                </div>
              </div>

              {/* Next Lesson Card */}
              <div 
                onClick={() => nextLesson && setSelectedViewSession(nextLesson)}
                style={{ 
                  flex: 1,
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', 
                  borderRadius: '28px', 
                  padding: '12px 24px', 
                  color: 'white',
                  boxShadow: '0 15px 35px rgba(99,102,241,0.25)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: nextLesson ? 'pointer' : 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: '82px'
                }}
              >
                <div style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.12 }}>
                  <Calendar size={120} />
                </div>
                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>Next Lesson</label>
                {nextLesson ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <h4 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, color: 'white' }}>{normalizeSubjectLabel(nextLesson.subject)}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                      <Clock size={16} />
                      {nextLesson.date} @ {nextLesson.startTime}
                    </div>
                  </div>
                ) : (
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>No upcoming lessons.</p>
                )}
              </div>

              {/* Last Lesson Card */}
              <div 
                onClick={() => lastLesson && setSelectedViewSession(lastLesson)}
                style={{ 
                  flex: 1,
                  background: '#ffffff', 
                  borderRadius: '28px', 
                  padding: '12px 24px', 
                  border: '1px solid #f1f5f9',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.04)',
                  position: 'relative',
                  cursor: lastLesson ? 'pointer' : 'default',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  minHeight: '82px'
                }}
              >
                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#94a3b8', marginBottom: '4px' }}>Last Lesson</label>
                {lastLesson ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <h4 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>{normalizeSubjectLabel(lastLesson.subject)}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 700, color: '#64748b' }}>
                      <CheckCircle2 size={16} style={{ color: '#10b981' }} />
                      Completed on {lastLesson.date}
                    </div>
                  </div>
                ) : (
                  <p style={{ margin: 0, fontWeight: 700, color: '#cbd5e1', fontSize: '1.1rem' }}>No past lessons.</p>
                )}
              </div>
            </div>
          </div>
        )}

        {isAdmin && (
          <div className="app-grid app-grid--stats">
            {displayStats.map((stat, index) => (
              <StatCard key={index} {...stat} iconName={stat.icon} />
            ))}
          </div>
        )}

        <div className="app-grid app-grid--content" style={{ padding: isMobile ? '0 20px 40px' : '0' }}>
          {isAdmin ? (
            <>
              <div className="app-panel dashboard-card">
                <div className="dashboard-card__header">
                  <h3>Recent Students</h3>
                  <button onClick={() => setActiveTab('Students')}>View all</button>
                </div>
                <div className="activity-list">
                  {students.length > 0 ? (
                    students.slice(0, 5).map(student => (
                      <StudentRow 
                        key={student.id} 
                        {...student} 
                        onClick={() => onSelectStudent(student.id)} 
                      />
                    ))
                  ) : (
                    <div className="app-empty">
                      No students added yet.
                    </div>
                  )}
                </div>
              </div>
              
              {pendingGrading.length > 0 && (
                <div className="app-panel dashboard-card" style={{ marginTop: '20px', border: '1.5px solid #fcd34d', background: 'linear-gradient(to bottom right, #fffbeb, white)' }}>
                  <div className="dashboard-card__header">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <h3 style={{ margin: 0 }}>📝 Teacher Review Queue</h3>
                      <span style={{ background: '#ef4444', color: 'white', fontSize: '0.7rem', fontWeight: 800, padding: '2px 8px', borderRadius: '10px', animation: 'pulse 2s infinite' }}>
                        {pendingGrading.length} PENDING
                      </span>
                    </div>
                  </div>
                  <div className="activity-list">
                    {pendingGrading.map(item => (
                      <div 
                        key={item.id} 
                        className="activity-item" 
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '12px', borderRadius: '12px', background: 'white', border: '1px solid #fde68a', marginBottom: '8px' }}
                        onClick={() => setSelectedGradingItem(item)}
                      >
                        {/* Thumbnail or text preview */}
                        <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#f1f5f9', overflow: 'hidden', border: '1px solid #e2e8f0', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {item.answerImage 
                            ? <img src={item.answerImage} alt="Sketch" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            : <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#64748b', textAlign: 'center', padding: '2px' }}>{(item.answerText || '—').slice(0, 12)}</span>
                          }
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1e1b4b' }}>{item.userName}</div>
                          <div style={{ fontSize: '0.75rem', color: '#92400e', fontWeight: 600, marginBottom: '4px' }}>
                            {item.chapterTitle || item.topicTitle || 'Open Question'}
                          </div>
                          <div style={{ fontSize: '0.72rem', color: '#64748b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                            {(item.questionText || '').slice(0, 60)}...
                          </div>
                          <span style={{ display: 'inline-block', marginTop: '4px', fontSize: '0.65rem', fontWeight: 800, background: '#fef3c7', color: '#92400e', borderRadius: '100px', padding: '1px 7px', border: '1px solid #fcd34d' }}>
                            {item.answerImage ? '🖊 Drawing' : '📝 Text Answer'}
                          </span>
                        </div>
                        <ChevronRight size={16} color="#94a3b8" style={{ flexShrink: 0, marginTop: '4px' }} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="app-page-column">
                <div className="app-panel dashboard-card">
                  <div className="dashboard-card__header">
                    <h3>Quick Actions</h3>
                  </div>
                  <div className="app-action-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button 
                      onClick={onAddStudent}
                      className="app-button app-button--primary"
                    >
                      <Plus size={20} />
                      Add New Student
                    </button>
                    <button className="app-button app-button--secondary" onClick={() => setShowScheduleModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <Calendar size={18} /> Schedule Lesson
                    </button>
                    <button
                      className="app-button app-button--secondary"
                      onClick={onShowLeaderboard}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
                    >
                      <Trophy size={18} /> Leaderboard
                    </button>
                    <button 
                      className="app-button app-button--secondary" 
                      onClick={handleManualSync}
                      disabled={isSyncing}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}
                    >
                      <Bell size={18} className={isSyncing ? 'animate-spin' : ''} />
                      {isSyncing ? 'Syncing...' : 'Sync Reminders'}
                    </button>
                    {isAdmin && isImporting && (
                      <div style={{ padding: '10px', borderRadius: '12px', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                        <Plus size={16} className="animate-spin" color="#6366f1" />
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6366f1' }}>Syncing curriculum...</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* System Status Card */}
                <div className="app-panel dashboard-card" style={{ marginTop: '20px' }}>
                  <div className="dashboard-card__header">
                    <h3>System Health</h3>
                  </div>
                  <div style={{ padding: '4px 0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Auto-Reminder Service</span>
                      <span style={{ 
                        fontSize: '0.75rem', 
                        padding: '2px 8px', 
                        borderRadius: '10px', 
                        backgroundColor: '#dcfce7', 
                        color: '#15803d', 
                        fontWeight: 700 
                      }}>Active</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Last Automated Run</span>
                      <span style={{ fontSize: '0.85rem', color: '#1e1b4b', fontWeight: 700 }}>
                        {lastSync ? new Date(lastSync.timestamp?.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Never'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="app-panel dashboard-card">
                  <div className="dashboard-card__header">
                    <h3>Recent Activity</h3>
                  </div>
                  <div className="activity-list">
                    {students.slice(0, 3).map(s => {
                      const dName = s.name || s.displayName || (s.firstName ? `${s.firstName} ${s.lastName || ''}`.trim() : 'New Student');
                      return (
                        <div key={s.id} className="activity-item" style={{ cursor: 'pointer' }} onClick={() => onSelectStudent(s.id)}>
                          <strong>{dName}</strong>
                          <p>{s.level || s.year || 'N/A'} • {normalizeSubjectLabel(s.subject || s.school || 'N/A')}</p>
                        </div>
                      );
                    })}
                    {students.length === 0 && <div className="app-empty">No recent activity.</div>}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px', gridColumn: 'span 2' }}>
              {/* Student dashboard content placeholder */}
            </div>
          )}
        </div>
      </motion.div>

      {/* ── Student Session Detail Modal ── */}
      <AnimatePresence>
        {selectedViewSession && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedViewSession(null)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ position: 'relative', width: '100%', maxWidth: '440px', backgroundColor: '#fff', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
            >
              <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', padding: '32px', color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>Lesson Details</span>
                    <h3 style={{ margin: '8px 0 0', fontSize: '1.8rem', fontWeight: 900, color: 'white' }}>{normalizeSubjectLabel(selectedViewSession.subject)}</h3>
                  </div>
                  <button onClick={() => setSelectedViewSession(null)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                    <X size={20} />
                  </button>
                </div>
              </div>
              
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Date</label>
                    <div style={{ fontWeight: 700, color: '#1e1b4b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Calendar size={16} /> {selectedViewSession.date}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Time</label>
                    <div style={{ fontWeight: 700, color: '#1e1b4b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={16} /> {selectedViewSession.startTime}
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Tutor's Notes</label>
                  <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '16px', fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, fontWeight: 500, border: '1px solid #f1f5f9' }}>
                    {selectedViewSession.notes || "No notes provided for this session."}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Homework</label>
                  <div style={{ backgroundColor: '#f0f9ff', padding: '16px', borderRadius: '16px', fontSize: '0.95rem', color: '#0369a1', lineHeight: 1.6, fontWeight: 600, border: '1px solid #e0f2fe' }}>
                    {selectedViewSession.homework || "No homework assigned."}
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedViewSession(null)}
                  style={{ width: '100%', backgroundColor: '#1e1b4b', color: '#fff', padding: '16px', borderRadius: '16px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', marginTop: '8px' }}
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AvatarPickerModal
        open={avatarOpen}
        title="My Persona"
        subtitle="Choose your face"
        initialStyle={profile?.avatarStyle || 'avataaars'}
        initialSeed={profile?.avatarSeed || (user?.email?.split('@')[0] ?? '')}
        onClose={() => setAvatarOpen(false)}
        onApply={async ({ avatarStyle, avatarSeed, avatarUrl: nextUrl }) => {
          if (!user?.uid) return;
          await setDoc(
            doc(db, 'users', user.uid),
            { avatarStyle, avatarSeed, avatarUrl: nextUrl, updatedAt: new Date().toISOString() },
            { merge: true },
          );
          setAvatarOpen(false);
        }}
      />

      {/* ── Schedule Lesson Modal ── */}
      <AnimatePresence>
        {showScheduleModal && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowScheduleModal(false)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ position: 'relative', width: '100%', maxWidth: '460px', backgroundColor: '#fff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.18)' }}
            >
              {/* Modal header */}
              <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', padding: '28px 32px', color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900, color: 'white' }}>Schedule Lesson</h3>
                    <p style={{ margin: 0, opacity: 0.85, fontSize: '0.9rem', fontWeight: 600 }}>Create a new session for a student</p>
                  </div>
                  <button onClick={() => setShowScheduleModal(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal body */}
              <form onSubmit={handleCreateSession} style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Student Multi-selector */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Select Students</label>
                  <div style={{ 
                    maxHeight: '150px', 
                    overflowY: 'auto', 
                    backgroundColor: '#f8fafc', 
                    border: '2px solid #e2e8f0', 
                    borderRadius: '14px',
                    padding: '8px'
                  }}>
                    {students.map(s => {
                      const isSelected = newSession.studentIds.includes(s.id);
                      return (
                        <div 
                          key={s.id} 
                          onClick={() => {
                            const current = [...newSession.studentIds];
                            if (isSelected) {
                              setNewSession({ ...newSession, studentIds: current.filter(id => id !== s.id) });
                            } else {
                              setNewSession({ ...newSession, studentIds: [...current, s.id] });
                            }
                          }}
                          style={{ 
                            padding: '10px 12px', 
                            borderRadius: '10px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '12px', 
                            cursor: 'pointer',
                            backgroundColor: isSelected ? '#eef2ff' : 'transparent',
                            transition: 'all 0.2s'
                          }}
                        >
                          <div style={{ 
                            width: '20px', 
                            height: '20px', 
                            borderRadius: '4px', 
                            border: '2px solid', 
                            borderColor: isSelected ? '#6366f1' : '#cbd5e1', 
                            background: isSelected ? '#6366f1' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white'
                          }}>
                            {isSelected && <Check size={12} />}
                          </div>
                          <div style={{ fontWeight: 700, fontSize: '0.9rem', color: isSelected ? '#6366f1' : '#334155' }}>
                            {s.name} <span style={{ opacity: 0.6, fontSize: '0.75rem', fontWeight: 600 }}>({s.level || s.year || ''})</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Mathematics"
                    value={newSession.subject}
                    onChange={e => setNewSession({ ...newSession, subject: e.target.value })}
                    style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Date */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Date</label>
                  <input
                    required
                    type="date"
                    value={newSession.date}
                    onChange={e => setNewSession({ ...newSession, date: e.target.value })}
                    style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Start / End time */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Start Time</label>
                    <select
                      required
                      value={newSession.startTime}
                      onChange={e => setNewSession({ ...newSession, startTime: e.target.value })}
                      style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box', cursor: 'pointer', appearance: 'none' }}
                    >
                      {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>End Time</label>
                    <select
                      required
                      value={newSession.endTime}
                      onChange={e => setNewSession({ ...newSession, endTime: e.target.value })}
                      style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box', cursor: 'pointer', appearance: 'none' }}
                    >
                      {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                {/* Recurring Checkbox */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '4px' }}>
                  <div 
                    onClick={() => setNewSession({...newSession, recurring: !newSession.recurring})}
                    style={{ 
                      width: '24px', 
                      height: '24px', 
                      borderRadius: '6px', 
                      border: '2px solid', 
                      borderColor: newSession.recurring ? '#6366f1' : '#cbd5e1', 
                      background: newSession.recurring ? '#6366f1' : 'transparent', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      color: 'white', 
                      cursor: 'pointer' 
                    }}
                  >
                    {newSession.recurring && <Check size={14} />}
                  </div>
                  <span style={{ fontWeight: 700, color: '#334155', fontSize: '0.9rem' }}>Recurring Weekly</span>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ width: '100%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', padding: '16px', borderRadius: '14px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', marginTop: '4px', boxShadow: '0 4px 12px rgba(99,102,241,0.3)', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Saving...' : 'Create Session'}
                </button>
              </form>
            </motion.div>
          </div>
        )}

        {selectedGradingItem && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedGradingItem(null)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ position: 'relative', width: '100%', maxWidth: '620px', backgroundColor: '#fff', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.2)', maxHeight: '90vh', overflowY: 'auto' }}
            >
              {/* Header */}
              <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', padding: '24px 32px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.1em' }}>📝 Teacher Review</span>
                  <h3 style={{ margin: '4px 0 2px', color: 'white', fontWeight: 900 }}>{selectedGradingItem.userName}</h3>
                  <span style={{ fontSize: '0.8rem', color: '#c7d2fe' }}>{selectedGradingItem.chapterTitle || selectedGradingItem.topicTitle || 'Open Question'}</span>
                </div>
                <button onClick={() => setSelectedGradingItem(null)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff', flexShrink: 0 }}>
                  <X size={20} />
                </button>
              </div>
              
              <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Question */}
                <div style={{ background: '#f8fafc', padding: '16px 20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>Question</label>
                  <p style={{ margin: 0, fontWeight: 700, color: '#1e1b4b', fontSize: '1rem', lineHeight: 1.6 }}>
                    {selectedGradingItem.questionText}
                  </p>
                </div>

                {/* Student's Answer */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '10px' }}>Student's Answer</label>
                  {selectedGradingItem.answerImage ? (
                    <div style={{ width: '100%', background: '#f1f5f9', borderRadius: '20px', overflow: 'hidden', border: '2px solid #e2e8f0', aspectRatio: '4/3' }}>
                      <img src={selectedGradingItem.answerImage} alt="Student Drawing" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                  ) : (
                    <div style={{ padding: '20px', background: '#fffbeb', borderRadius: '16px', border: '1.5px solid #fcd34d', fontSize: '1rem', fontWeight: 600, color: '#1e1b4b', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                      {selectedGradingItem.answerText || <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>No text answer recorded.</span>}
                    </div>
                  )}
                </div>

                {/* Correct Answer for reference */}
                {selectedGradingItem.correctAnswer && (
                  <div style={{ background: '#f0fdf4', padding: '16px 20px', borderRadius: '16px', border: '1px solid #bbf7d0' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#059669', textTransform: 'uppercase', marginBottom: '6px' }}>✅ Correct Answer (Reference)</label>
                    <p style={{ margin: 0, fontWeight: 700, color: '#065f46', fontSize: '0.9rem', lineHeight: 1.6 }}>{selectedGradingItem.correctAnswer}</p>
                  </div>
                )}

                {/* Solution for reference */}
                {selectedGradingItem.solution && (
                  <div style={{ background: '#f8fafc', padding: '16px 20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>📖 Solution Notes</label>
                    <p style={{ margin: 0, fontWeight: 600, color: '#475569', fontSize: '0.88rem', lineHeight: 1.7 }}>{selectedGradingItem.solution}</p>
                  </div>
                )}

                {/* Grade Buttons */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
                  <button 
                    onClick={() => handleGrade('incorrect')}
                    style={{ padding: '18px', borderRadius: '16px', background: '#fef2f2', border: '2px solid #fee2e2', color: '#ef4444', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '1rem', transition: 'all 0.2s' }}
                  >
                    <X size={20} /> Incorrect
                  </button>
                  <button 
                    onClick={() => handleGrade('correct')}
                    style={{ padding: '18px', borderRadius: '16px', background: '#f0fdf4', border: '2px solid #dcfce7', color: '#10b981', fontWeight: 800, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '1rem', transition: 'all 0.2s' }}
                  >
                    <CheckCircle2 size={20} /> Correct (+{Math.round((selectedGradingItem.challengeType === 'calc' ? 50 : 100) / (selectedGradingItem.totalQuestions || 10))} XP)
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Dashboard;
