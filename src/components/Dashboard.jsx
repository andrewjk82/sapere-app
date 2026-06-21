import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Users, Clock, CheckCircle2, GraduationCap, X, Calendar, Check, Trophy, Star, Bell, BookOpen, ChevronRight, PlayCircle, Target, AlertTriangle, TrendingUp, ArrowRight } from 'lucide-react';
import StatCard from './StatCard';
import StudentRow from './StudentRow';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { useAdminFeed } from '../context/AdminFeedContext';
import { useProfile } from '../context/ProfileContext';
import { db } from '../firebase/config';
import { doc, onSnapshot, setDoc, updateDoc, deleteDoc, getDoc, getDocs, increment, serverTimestamp, collection, addDoc, query, where, or, orderBy, limit } from 'firebase/firestore';
import { gradeSubmission } from '../services/gradingService';
import { localCache } from '../services/localCacheService';

import AvatarPickerModal from './AvatarPickerModal';
import AnnotationModal from './AnnotationModal';
import AdminDashboard from './AdminDashboard';
import ScheduleLessonModal from './ScheduleLessonModal';
import { TIME_OPTIONS } from '../constants/timeOptions';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { normalizeSubjectLabel } from '../utils/subjectLabels';
import { getDueCount } from '../utils/secretNote';
import { seedLeaderboardFromExistingData } from '../services/leaderboardService';
import JourneyMapSnapshot from './JourneyMapSnapshot';
import { DailyNudgeCards } from './DailyNudgeCard';
import MedalShelf from './MedalShelf';

// 카드에 마우스를 올리면 살짝 떠오르는 hover 효과 (Journey Map 카드와 동일한 느낌).
const liftHover = {
  onMouseEnter: (e) => { e.currentTarget.style.transform = 'translateY(-3px)'; },
  onMouseLeave: (e) => { e.currentTarget.style.transform = ''; },
};

const Dashboard = ({ students, onAddStudent, onRefreshStudents, onSelectStudent, setActiveTab, onShowLeaderboard, onOpenJourneyMap }) => {
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();
  const { profile } = useProfile();
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [studentSessions, setStudentSessions] = useState([]);
  const [sessionsLoading, setSessionsLoading] = useState(true);
  const [selectedViewSession, setSelectedViewSession] = useState(null);
  const [lastSync, setLastSync] = useState(null);
  const [isSyncing, setIsSyncing] = useState(false);
  const [dailyStats, setDailyStats] = useState([]);
  const { pendingGrading: feedPendingGrading } = useAdminFeed();
  const pendingGrading = useMemo(() => feedPendingGrading.slice(0, 5), [feedPendingGrading]);
  const [selectedGradingItem, setSelectedGradingItem] = useState(null);
  const [gradeComment, setGradeComment] = useState('');
  const [annotatingItem, setAnnotatingItem] = useState(null);
  const [isImporting, setIsImporting] = useState(false);
  const [importDone, setImportDone] = useState(false);
  const [isSeedingLeaderboard, setIsSeedingLeaderboard] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  // Today's challenge completion — drives the "do your daily!" nudge cards.
  const [todayTasks, setTodayTasks] = useState(null); // { dailyDone, calcDone }

  // ── Today's daily/calc completion (direct doc reads — no scans) ──
  useEffect(() => {
    if (!user?.uid || isAdmin) return undefined;
    const today = new Date().toLocaleDateString('en-CA');
    const cacheKey = `daily-nudge-${user.uid}`;
    const calcEnabled = profile?.calculationEnabled !== false;
    const cached = localCache.get(cacheKey);
    // "Done" never un-happens within a day, so a fully-done cache skips the reads.
    if (cached?.date === today && cached.dailyDone && (cached.calcDone || !calcEnabled)) {
      setTodayTasks({ dailyDone: true, calcDone: true });
      return undefined;
    }
    let cancelled = false;
    (async () => {
      try {
        const [dailySnap, calcSnap] = await Promise.all([
          getDoc(doc(db, 'users', user.uid, 'daily_stats', today)),
          calcEnabled ? getDoc(doc(db, 'users', user.uid, 'calc_stats', today)) : Promise.resolve(null),
        ]);
        if (cancelled) return;
        const dailyDone = dailySnap.exists() && dailySnap.data().completed === true;
        const calcDone = !calcEnabled || (calcSnap?.exists() && calcSnap.data().completed === true);
        setTodayTasks({ dailyDone, calcDone });
        localCache.set(cacheKey, { date: today, dailyDone, calcDone });
      } catch (e) {
        console.warn('daily nudge status fetch failed:', e?.code || e);
      }
    })();
    return () => { cancelled = true; };
  }, [user?.uid, isAdmin, profile?.calculationEnabled]);

  // Fetch student daily stats for insights. Stat docs are heavy (full question
  // arrays) and insights only change when a new challenge is submitted, so
  // read once per day per device (date-keyed cache) instead of subscribing.
  useEffect(() => {
    if (!user?.uid || isAdmin) return undefined;
    const today = new Date().toLocaleDateString('en-CA');
    const cacheKey = `dashboard-insights-${user.uid}`;
    const cached = localCache.get(cacheKey);
    if (cached?.date === today && Array.isArray(cached.stats)) {
      setDailyStats(cached.stats);
      return undefined;
    }
    let cancelled = false;
    const statsQuery = query(
      collection(db, 'users', user.uid, 'daily_stats'),
      orderBy('timestamp', 'desc'),
      limit(7)
    );
    getDocs(statsQuery).then((snap) => {
      if (cancelled) return;
      // Keep only the fields learningInsights reads — full stat docs carry
      // question arrays/sketches too large for the localStorage cache.
      const stats = snap.docs.map((d) => {
        const data = d.data();
        return {
          id: d.id,
          userAnswers: data.userAnswers,
          questions: Array.isArray(data.questions)
            ? data.questions.map((q) => ({ type: q?.type, answer: q?.answer }))
            : data.questions,
        };
      });
      setDailyStats(stats);
      localCache.set(cacheKey, { date: today, stats });
    }).catch((err) => console.warn('insights stats fetch failed:', err?.code || err));
    return () => { cancelled = true; };
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

  // ── Fetch Last Sync Info ──
  useEffect(() => {
    if (!isAdmin) return;
    const q = query(
      collection(db, 'system_logs'),
      where('type', '==', 'cron_execution'),
      orderBy('timestamp', 'desc'),
      limit(1)
    );
    return onSnapshot(q, (snap) => {
      if (!snap.empty) {
        setLastSync(snap.docs[0].data());
      }
    });
  }, [isAdmin]);

  const handleManualSync = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch('/api/cron-unified?force=true');
      const data = await res.json();
      if (data.success) {
        showToast(`Sync successful! ${data.logs.filter(l => l.includes('sent')).length} reminders sent.`, 'success');
      } else {
        showToast('Sync failed: ' + data.error, 'error');
      }
    } catch (e) {
      showToast('Sync failed: ' + e.message, 'error');
    } finally {
      setIsSyncing(false);
    }
  };

  const handleManualRefresh = async () => {
    setIsRefreshing(true);
    try {
      await onRefreshStudents();
      showToast('Student list updated!', 'success');
    } catch (err) {
      showToast('Failed to refresh students.', 'error');
    } finally {
      setIsRefreshing(false);
    }
  };

  // ── Handle Resize ──
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!user?.uid || isAdmin) return undefined;
    const qId = query(collection(db, 'sessions'), where('studentId', '==', user.uid));
    const unsubId = onSnapshot(qId, (snap) => {
      const docs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setStudentSessions(docs);
      setSessionsLoading(false);
    }, (error) => {
      console.warn("Dashboard session fetch error:", error.message);
      setSessionsLoading(false);
    });
    return () => unsubId();
  }, [user?.uid, isAdmin]);

  const { nextLesson, lastLesson } = useMemo(() => {
    const now = new Date();
    const getTime = (s) => {
      try {
        if (!s.date || !s.startTime) return 0;
        const timeMatch = s.startTime.match(/(\d+):(\d+)\s*(AM|PM)/i);
        if (!timeMatch) return new Date(s.date).getTime();
        let [_, hours, minutes, period] = timeMatch;
        hours = parseInt(hours, 10);
        minutes = parseInt(minutes, 10);
        period = period.toUpperCase();
        if (period === 'PM' && hours !== 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        const [y, m, d] = s.date.split('-').map(Number);
        return new Date(y, m - 1, d, hours, minutes).getTime();
      } catch (e) { return 0; }
    };
    const sorted = [...studentSessions].sort((a, b) => getTime(a) - getTime(b));
    const next = sorted.find(s => getTime(s) > now.getTime());
    const past = [...sorted].reverse().find(s => getTime(s) < now.getTime());
    return { nextLesson: next, lastLesson: past };
  }, [studentSessions]);

  // profile comes from the shared ProfileContext — no per-component listener.

  // firstName may hold a full name ("Anna de Xavier") — greet with the given name only
  const userName = profile?.firstName?.trim().split(/\s+/)[0] || user?.displayName?.split(' ')[0] || user?.email?.split('@')[0] || 'Andrew';

  const handleGrade = async (status) => {
    if (!selectedGradingItem) return;
    try {
      const approved = status === 'correct';
      const feedback = gradeComment.trim() || selectedGradingItem.aiAssessment?.feedback || null;
      const annotation = selectedGradingItem.teacherAnnotation || null;
      const { xpAwarded } = await gradeSubmission(selectedGradingItem, approved, feedback, annotation);
      if (approved) {
        showToast(`Graded as Correct. Student received ${xpAwarded} XP!`, 'success');
      } else {
        showToast('Graded as Incorrect.', 'info');
      }
      setSelectedGradingItem(null);
      setGradeComment('');
      setAnnotatingItem(null);
    } catch (err) {
      console.error('Error grading submission:', err);
      showToast(`Failed to update grade: ${err.message || 'connection error'}`, 'error');
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
          <div className="student-hero-container" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(12, 1fr)', gap: isMobile ? '16px' : '24px', padding: isMobile ? '0 0 16px 0' : '0 0 24px 0', alignItems: 'stretch' }}>
            <div style={{ gridColumn: isMobile ? 'span 1' : 'span 7' }}>
              <div className="app-panel vision-card" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url('${profile?.dreamImageUrl || 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format\u0026fit=crop\u0026q=80\u0026w=1200'}')`, backgroundSize: 'cover', backgroundPosition: 'center', height: isMobile ? '460px' : '100%', minHeight: isMobile ? '460px' : '560px', borderRadius: isMobile ? '0 0 32px 32px' : '32px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: isMobile ? '40px 24px' : '40px', color: 'white', overflow: 'hidden', boxShadow: isMobile ? 'none' : '0 20px 50px rgba(0,0,0,0.15)', border: 'none', width: '100%' }}>
                <div className="vision-card__content" style={{ zIndex: 1 }}>
                  <h1 style={{ fontFamily: "'Poppins', sans-serif", fontSize: isMobile ? '2.2rem' : '3.5rem', fontWeight: 900, margin: 0, lineHeight: 1.1, color: '#fff', letterSpacing: '-0.02em', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                    <span style={{ fontSize: '0.35em', display: 'block', textTransform: 'uppercase', letterSpacing: '0.25em', opacity: 0.9, marginBottom: '4px', color: 'rgba(255,255,255,0.8)' }}>{getGreeting()},</span>
                    {userName}
                  </h1>
                </div>
              </div>
            </div>
            <div style={{ gridColumn: isMobile ? 'span 1' : 'span 5', display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '20px', padding: 0 }}>
              {/* Daily challenge nudge — sits between the greeting and the
                  Journey Map. Calm pastel-green before 5 PM, escalating toward
                  urgent red on the mascot as midnight nears. Finished tasks
                  drop out; both done → nothing renders. */}
              {todayTasks && (
                <DailyNudgeCards
                  tasks={[
                    { id: 'challenge', label: 'Daily Practice', kind: 'practice', done: todayTasks.dailyDone },
                    ...(profile?.calculationEnabled !== false
                      ? [{ id: 'sprint', label: 'Daily Calculation', kind: 'sprint', done: todayTasks.calcDone }]
                      : []),
                  ]}
                  onOpen={() => setActiveTab('Challenge')}
                  style={{ gridTemplateColumns: '1fr', gap: isMobile ? '16px' : '20px' }}
                />
              )}
              {/* Journey Map snapshot */}
              <JourneyMapSnapshot
                profile={profile}
                onClick={onOpenJourneyMap}
              />
              {/* Daily Calculation 메달 진열장 (Auto Mode) */}
              {profile?.calcAutoMode === true && <MedalShelf uid={user?.uid} />}
              <div {...liftHover} style={{ flex: 1, background: 'linear-gradient(135deg, #1e1b4b, #312e81)', borderRadius: '28px', padding: '12px 24px', color: 'white', boxShadow: '0 15px 35px rgba(30,27,75,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden', minHeight: '82px', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.1 }}><Trophy size={100} /></div>
                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>Total XP</label>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <h4 style={{ margin: 0, fontSize: '1.8rem', fontWeight: 900, color: 'white' }}>{profile?.totalXP || 0}</h4>
                </div>
              </div>
              <div data-press {...liftHover} onClick={() => nextLesson && setSelectedViewSession(nextLesson)} style={{ flex: 1, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '28px', padding: '12px 24px', color: 'white', boxShadow: '0 15px 35px rgba(99,102,241,0.25)', position: 'relative', overflow: 'hidden', cursor: nextLesson ? 'pointer' : 'default', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '82px', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                <div style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.12 }}><Calendar size={120} /></div>
                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)', marginBottom: '4px' }}>Next Lesson</label>
                {nextLesson ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <h4 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, color: 'white' }}>{normalizeSubjectLabel(nextLesson.subject)}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}><Clock size={16} />{nextLesson.date} @ {nextLesson.startTime}</div>
                  </div>
                ) : <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem' }}>No upcoming lessons.</p>}
              </div>
              <div data-press {...liftHover} onClick={() => lastLesson && setSelectedViewSession(lastLesson)} style={{ flex: 1, background: 'white', borderRadius: '28px', padding: '12px 24px', boxShadow: '0 15px 35px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9', position: 'relative', overflow: 'hidden', cursor: lastLesson ? 'pointer' : 'default', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '82px', transition: 'transform 0.2s, box-shadow 0.2s' }}>
                <div style={{ position: 'absolute', top: '-15px', right: '-15px', opacity: 0.06, color: '#6366f1' }}><CheckCircle2 size={120} /></div>
                <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#94a3b8', marginBottom: '4px' }}>Previous Lesson</label>
                {lastLesson ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <h4 style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, color: '#1e1b4b' }}>{normalizeSubjectLabel(lastLesson.subject)}</h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: '#64748b' }}><CheckCircle2 size={16} style={{ color: '#10b981' }} />Completed {lastLesson.date}</div>
                  </div>
                ) : <p style={{ margin: 0, fontWeight: 700, fontSize: '1.1rem', color: '#cbd5e1' }}>No past lessons.</p>}
              </div>
            </div>
          </div>
        )}

        {!isAdmin && profile?.examPrepEnabled === true && (() => {
          // D-Day is only useful for students whose teacher has enabled Exam
          // Prep AND has set at least one term exam date — otherwise hide.
          const assignedCourses = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse : [profile?.assignedCourse || 'Advanced'];
          const isExtension = assignedCourses.some(c => c === 'Extension 1' || c === 'Extension 2');
          const examEntries = [1, 2, 3, 4].flatMap(t => {
            const entries = [{ term: t, label: `Term ${t}`, date: profile?.[`term${t}ExamDate`] }];
            if (isExtension) entries.push({ term: t, label: `Ext1 Term ${t}`, date: profile?.[`ext1term${t}ExamDate`] });
            return entries;
          });
          const nextExam = examEntries
            .filter(t => t.date)
            .map(t => ({ ...t, dday: Math.ceil((new Date(t.date) - new Date(new Date().toDateString())) / 86400000) }))
            .filter(t => t.dday >= 0)
            .sort((a, b) => a.dday - b.dday)[0];

          if (!nextExam) return null;

          const urgent = nextExam.dday <= 7;
          return (
            <button
              type="button"
              onClick={() => setActiveTab('ExamPrep')}
              style={{
                display: 'flex', alignItems: 'center', gap: '16px', width: '100%',
                margin: isMobile ? '0 0 16px' : '0 0 24px',
                maxWidth: '100%',
                padding: '20px 24px', borderRadius: '28px',
                background: urgent ? 'linear-gradient(135deg, #f59e0b, #ef4444)' : 'linear-gradient(135deg, #6366f1, #4f46e5)',
                color: '#fff', border: 'none', cursor: 'pointer', textAlign: 'left',
                boxShadow: urgent ? '0 15px 35px rgba(239,68,68,0.25)' : '0 15px 35px rgba(99,102,241,0.25)',
                position: 'relative', overflow: 'hidden',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseDown={(e) => { e.currentTarget.style.transform = 'scale(0.99)'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
                {urgent ? '🔥' : '📅'}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)', marginBottom: '3px' }}>
                  {nextExam.label} Exam · Tap to practise
                </div>
                <div style={{ fontSize: '0.97rem', fontWeight: 700, color: '#fff' }}>
                  {nextExam.dday === 0 ? 'Exam is today! Good luck! 🎉' : `${nextExam.dday} day${nextExam.dday > 1 ? 's' : ''} to go — keep it up!`}
                </div>
              </div>
              <div style={{ textAlign: 'center', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#fff', lineHeight: 1 }}>
                  {nextExam.dday === 0 ? 'D-Day' : `D-${nextExam.dday}`}
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(255,255,255,0.18)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                  <ArrowRight size={16} />
                </div>
              </div>
            </button>
          );
        })()}

        {!isAdmin && (() => {
          const dueTotal = getDueCount('daily', user?.uid) + getDueCount('calc', user?.uid);
          if (dueTotal === 0) return null;
          return (
            <button type="button" onClick={() => setActiveTab('Challenge')} style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', margin: isMobile ? '0 0 16px' : '0 0 24px', maxWidth: '100%', padding: '20px 24px', borderRadius: '28px', cursor: 'pointer', textAlign: 'left', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', border: 'none', color: '#fff', boxShadow: '0 15px 35px rgba(99,102,241,0.25)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
              <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center', fontSize: '1.4rem', flexShrink: 0 }}>🧠</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '3px' }}>Secret Note Review</div>
                <div style={{ fontSize: '0.97rem', fontWeight: 700, lineHeight: 1.4, color: '#fff' }}>
                  <strong style={{ fontWeight: 900 }}>{dueTotal} question{dueTotal > 1 ? 's' : ''}</strong> {dueTotal > 1 ? 'are' : 'is'} due for review today.
                </div>
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <ArrowRight size={18} />
              </div>
            </button>
          );
        })()}

        {!isAdmin && Number(profile?.unreadFeedbackCount) > 0 && (
          <button type="button" onClick={() => setActiveTab('Feedback')} style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', margin: isMobile ? '0 0 16px' : '0 0 24px', maxWidth: '100%', padding: '20px 24px', borderRadius: '28px', cursor: 'pointer', textAlign: 'left', background: 'linear-gradient(135deg, #0ea5e9, #6366f1)', border: 'none', color: '#fff', boxShadow: '0 15px 35px rgba(14,165,233,0.25)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center', fontSize: '1.4rem', flexShrink: 0 }}>💬</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '0.68rem', fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '3px' }}>Teacher Feedback</div>
              <div style={{ fontSize: '0.97rem', fontWeight: 700, lineHeight: 1.4, color: '#fff' }}>
                You have <strong style={{ fontWeight: 900 }}>{Number(profile.unreadFeedbackCount)} new comment{Number(profile.unreadFeedbackCount) > 1 ? 's' : ''}</strong> from your teacher.
              </div>
            </div>
            <div style={{ width: '36px', height: '36px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
              <ArrowRight size={18} />
            </div>
          </button>
        )}

        {isAdmin && (
          <AdminDashboard
            students={students}
            pendingGrading={pendingGrading}
            lastSync={lastSync}
            isSyncing={isSyncing}
            userName={userName}
            onSelectStudent={onSelectStudent}
            onOpenGradingItem={(item) => setSelectedGradingItem(item)}
            onReviewAll={() => setActiveTab('Reports')}
            onSendReminders={handleManualSync}
            setActiveTab={setActiveTab}
          />
        )}
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedViewSession && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedViewSession(null)} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(8px)' }} />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} style={{ position: 'relative', width: '100%', maxWidth: '440px', backgroundColor: '#fff', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}>
              <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', padding: '32px', color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div><h3 style={{ margin: '8px 0 0', fontSize: '1.8rem', fontWeight: 900, color: 'white' }}>{normalizeSubjectLabel(selectedViewSession.subject)}</h3></div>
                  <button onClick={() => setSelectedViewSession(null)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}><X size={20} /></button>
                </div>
              </div>
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <div style={{ flex: 1 }}><label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>Date</label><div style={{ fontWeight: 700, color: '#1e1b4b', display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} />{selectedViewSession.date}</div></div>
                  <div style={{ flex: 1 }}><label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', marginBottom: '6px' }}>Time</label><div style={{ fontWeight: 700, color: '#1e1b4b', display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} />{selectedViewSession.startTime}</div></div>
                </div>
                {Array.isArray(selectedViewSession.learnedTopics) && selectedViewSession.learnedTopics.length > 0 && (
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Topics Covered</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {selectedViewSession.learnedTopics.map((t, i) => {
                        const text = typeof t === 'string' ? t : (t.label || t.title || t.topicTitle || '');
                        if (!text) return null;
                        return (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#f0fdf4', border: '1px solid #dcfce7', borderRadius: '12px', padding: '10px 14px' }}>
                            <CheckCircle2 size={18} style={{ color: '#16a34a', flexShrink: 0 }} />
                            <span style={{ fontWeight: 700, color: '#1e1b4b', fontSize: '0.92rem', lineHeight: 1.4 }}>{text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Lesson Notes</label>
                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '16px', fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, fontWeight: 500, border: '1px solid #f1f5f9' }}>
                    {selectedViewSession.notes || 'No notes provided for this session.'}
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Homework</label>
                  <div style={{ background: '#f0f9ff', padding: '16px', borderRadius: '16px', fontSize: '0.95rem', color: '#0369a1', lineHeight: 1.6, fontWeight: 600, border: '1px solid #e0f2fe' }}>
                    {selectedViewSession.homework || 'No homework assigned.'}
                  </div>
                </div>
                <button onClick={() => setSelectedViewSession(null)} style={{ width: '100%', backgroundColor: '#1e1b4b', color: '#fff', padding: '16px', borderRadius: '16px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', marginTop: '8px' }}>Close Details</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Grading Modal */}
      <AnimatePresence>
        {selectedGradingItem && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => { setSelectedGradingItem(null); setGradeComment(""); }} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.6)', backdropFilter: 'blur(8px)' }} />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} style={{ position: 'relative', width: '100%', maxWidth: '620px', backgroundColor: '#fff', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.2)', maxHeight: '90vh', overflowY: 'auto' }}>
              <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', padding: '24px 32px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div><h3 style={{ margin: '4px 0 2px', color: 'white', fontWeight: 900 }}>{selectedGradingItem.userName}</h3></div>
                <button onClick={() => { setSelectedGradingItem(null); setGradeComment(""); }} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}><X size={20} /></button>
              </div>
              <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ background: '#f8fafc', padding: '16px 20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}><p style={{ margin: 0, fontWeight: 700, color: '#1e1b4b' }}>{selectedGradingItem.questionText}</p></div>

                {/* Student's submitted answer */}
                {(() => {
                  const imgs = (selectedGradingItem.answerImages || []).filter(u => u && u.length > 100);
                  const single = selectedGradingItem.answerImage && selectedGradingItem.answerImage.length > 100 ? [selectedGradingItem.answerImage] : [];
                  const allImgs = imgs.length ? imgs : single;
                  const text = selectedGradingItem.answerText;
                  if (!allImgs.length && !text) return (
                    <div style={{ padding: '12px 16px', borderRadius: '14px', background: '#fff7ed', border: '1px solid #fed7aa', color: '#c2410c', fontSize: '0.85rem', fontWeight: 700 }}>No answer submitted (blank).</div>
                  );
                  return (
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 900, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Student's Answer</div>
                      {text && <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#eef2ff', color: '#1e1b4b', fontWeight: 700, marginBottom: allImgs.length ? '10px' : 0 }}>{text}</div>}
                      {allImgs.map((src, i) => (
                        <img key={i} src={src} alt={`Answer ${i + 1}`} style={{ width: '100%', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '8px', objectFit: 'contain', maxHeight: '360px' }} />
                      ))}
                    </div>
                  );
                })()}

                {selectedGradingItem.correctAnswer && (
                  <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#15803d' }}>EXPECTED: </span>
                    <span style={{ color: '#166534', fontWeight: 700 }}>{selectedGradingItem.correctAnswer}</span>
                  </div>
                )}

                <div>
                  <label style={{ fontSize: '0.72rem', fontWeight: 900, color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>💬 Comment to student</label>
                  <textarea
                    value={gradeComment}
                    onChange={(e) => setGradeComment(e.target.value)}
                    placeholder="Write a message the student will see in their Feedback page…"
                    rows={3}
                    style={{ width: '100%', padding: '12px 14px', borderRadius: '14px', border: '1.5px solid #e2e8f0', fontSize: '0.9rem', fontWeight: 500, color: '#1e293b', outline: 'none', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box' }}
                  />
                </div>
                {selectedGradingItem.teacherAnnotation && (
                  <div style={{ padding: '12px', borderRadius: '14px', background: '#f0f9ff', border: '1px solid #bae6fd' }}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 900, color: '#0369a1', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>✏️ Your Markup</div>
                    <img src={selectedGradingItem.teacherAnnotation} alt="Markup" style={{ width: '100%', borderRadius: '10px', objectFit: 'contain', maxHeight: '300px' }} />
                  </div>
                )}
                <button onClick={() => setAnnotatingItem(selectedGradingItem)} style={{ padding: '14px', borderRadius: '14px', background: '#fff', border: '2px solid #e0e7ff', color: '#6366f1', fontWeight: 800, cursor: 'pointer' }}>
                  ✏️ {selectedGradingItem.teacherAnnotation ? 'Re-mark' : 'Mark Up'}
                </button>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <button onClick={() => handleGrade('incorrect')} style={{ padding: '18px', borderRadius: '16px', background: '#fef2f2', border: '2px solid #fee2e2', color: '#ef4444', fontWeight: 800 }}>Incorrect</button>
                  <button onClick={() => handleGrade('correct')} style={{ padding: '18px', borderRadius: '16px', background: '#f0fdf4', border: '2px solid #dcfce7', color: '#10b981', fontWeight: 800 }}>Correct</button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {annotatingItem && (
        <AnnotationModal
          item={annotatingItem}
          onCancel={() => setAnnotatingItem(null)}
          onSave={(dataUrl) => {
            setSelectedGradingItem(prev => prev ? { ...prev, teacherAnnotation: dataUrl } : prev);
            setAnnotatingItem(null);
          }}
        />
      )}

      <AvatarPickerModal open={avatarOpen} onClose={() => setAvatarOpen(false)} onApply={async ({ avatarStyle, avatarSeed, avatarUrl: nextUrl }) => {
        if (!user?.uid) return;
        await setDoc(doc(db, 'users', user.uid), { avatarStyle, avatarSeed, avatarUrl: nextUrl, updatedAt: new Date().toISOString() }, { merge: true });
        // Sync avatar to leaderboard so the race view updates immediately
        setDoc(doc(db, 'leaderboard', user.uid), { avatarUrl: nextUrl }, { merge: true })
          .catch(e => console.warn('leaderboard avatar sync failed:', e?.code || e));
        setAvatarOpen(false);
      }} />

      {showScheduleModal && <ScheduleLessonModal isOpen={showScheduleModal} onClose={() => setShowScheduleModal(false)} students={students} />}
    </>
  );
};

export default Dashboard;
