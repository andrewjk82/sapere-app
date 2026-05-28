/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useMemo } from 'react';
import { CheckCircle2, Lock, Play, BookMarked, RotateCcw, Zap, Trophy, BookOpen, GraduationCap, Network } from 'lucide-react';
import CurriculumGraph3D from './CurriculumGraph3D';
import { db } from '../firebase/config';
import { doc, getDoc, onSnapshot, collection, query, where, setDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { localCache } from '../services/localCacheService';
import ChapterDetailView from './ChapterDetailView';
import TopicPracticeSession from './TopicPracticeSession';
import './learning-path.css';

// Per-chapter XP is derived from its lesson count so the numbers are stable
// and proportional even though XP is not tracked per chapter in the database.
const XP_PER_LESSON = 12;

const LearningPath = ({ profile }) => {
  const { user } = useAuth();
  const [activeSubject, setActiveSubject] = useState('Maths');
  const [curriculum, setCurriculum] = useState([]);
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedChapter, setSelectedChapter] = useState(null); // { chapter, state }
  const [selectedTopic, setSelectedTopic] = useState(null);    // { topic, chapter }
  const [showGraph3D, setShowGraph3D] = useState(false);

  const normalizeYearLabel = (value) => {
    const n = parseInt(String(value || '').replace(/\D/g, ''), 10);
    if (Number.isFinite(n) && n > 0) return `Year ${n}`;
    return String(value || '').trim();
  };
  const rawYears = Array.isArray(profile?.assignedYear) ? profile.assignedYear : [profile?.assignedYear || 'Year 3'];
  const years = rawYears.map(normalizeYearLabel).filter(Boolean);
  const year = years[0] || 'Year 3';
  const courses = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse : [profile?.assignedCourse || 'Advanced'];
  const course = courses[0];

  // ── Fetch curriculum ──────────────────────────────────────────────────
  useEffect(() => {
    if (activeSubject === 'English') {
      setCurriculum([
        { id: 'eng-1', title: 'Reading Comprehension', modules: 10, topics: [] },
        { id: 'eng-2', title: 'Grammar & Punctuation', modules: 8, topics: [] },
        { id: 'eng-3', title: 'Writing: Creative', modules: 6, topics: [] },
      ]);
      setLoading(false);
      return;
    }

    const isSenior = ['Year 11', 'Year 12'].includes(year);
    const docId = isSenior ? `${year.replace(' ', '_')}_${course}` : year.replace(' ', '_');

    let cancelled = false;
    const cacheKey = `curriculum-doc:v1:${docId}`;
    const cached = localCache.get(cacheKey);
    if (Array.isArray(cached?.chapters) && cached.chapters.length > 0) {
      setCurriculum(cached.chapters);
      setLoading(false);
    }

    const resolveFallbackCurriculum = () => {
      let data = CURRICULUM_DATA[year] || CURRICULUM_DATA[normalizeYearLabel(year)] || [];
      if (!Array.isArray(data)) data = data[course] || Object.values(data)[0] || [];
      return Array.isArray(data) ? data : [];
    };

    const loadCurriculum = async () => {
      try {
        const metaSnap = await getDoc(doc(db, 'sync_meta', 'curriculum'));
        const remoteVersion = Number(metaSnap.data()?.version || metaSnap.data()?.updatedAt?.toMillis?.() || 0);
        if (cached?.chapters?.length > 0 && cached?.version === remoteVersion && remoteVersion > 0) return;
        const snap = await getDoc(doc(db, 'curriculum', docId));
        if (cancelled) return;
        if (snap.exists() && snap.data().chapters?.length > 0) {
          const chapters = snap.data().chapters;
          const version = remoteVersion || Date.now();
          if (!remoteVersion) {
            setDoc(doc(db, 'sync_meta', 'curriculum'), { version, updatedAt: serverTimestamp() }, { merge: true }).catch(() => {});
          }
          setCurriculum(chapters);
          localCache.set(cacheKey, { version, savedAt: Date.now(), chapters });
        } else {
          setCurriculum(resolveFallbackCurriculum());
        }
      } catch (e) {
        console.warn('LearningPath curriculum load failed, using fallback:', e?.code || e);
        if (!cancelled) setCurriculum(resolveFallbackCurriculum());
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    loadCurriculum();
    return () => { cancelled = true; };
  }, [year, activeSubject, profile?.assignedCourse]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Fetch per-chapter progress ────────────────────────────────────────
  useEffect(() => {
    if (!user?.uid) return undefined;
    const q = query(collection(db, 'chapterProgress'), where('userId', '==', user.uid));
    const unsub = onSnapshot(q, (snap) => {
      const prog = {};
      snap.docs.forEach((d) => { const data = d.data(); prog[data.chapterId] = data; });
      setProgress(prog);
    });
    return unsub;
  }, [user?.uid]);

  const availableSubjects = useMemo(() => {
    const studentSubject = (profile?.subject || '').toLowerCase();
    const subjects = [];
    if (studentSubject.includes('math') || !profile?.subject) subjects.push('Maths');
    if (studentSubject.includes('english') || !profile?.subject) subjects.push('English');
    return subjects.length ? subjects : ['Maths'];
  }, [profile?.subject]);

  useEffect(() => {
    if (!availableSubjects.includes(activeSubject)) setActiveSubject(availableSubjects[0]);
  }, [availableSubjects, activeSubject]);

  // ── Derive each chapter's state, XP and lesson count ──────────────────
  const nodes = useMemo(() => {
    const teacherAssigned = profile?.assignedChapters || [];
    const teacherCompleted = profile?.completedChapters || [];
    return curriculum.map((chapter, idx) => {
      const chapProgress = progress[chapter.id]?.progress || 0;
      const isTeacherCompleted = teacherCompleted.includes(chapter.id);
      const isTeacherAssigned = teacherAssigned.includes(chapter.id);
      const noAssignments = teacherAssigned.length === 0 && teacherCompleted.length === 0;

      const isDone = isTeacherCompleted || chapProgress === 100;
      const isCurrent = !isDone && ((isTeacherAssigned) || (noAssignments && idx === 0));
      const isNext = !isDone && !isCurrent && (isTeacherAssigned || (noAssignments && idx < 3));
      const isLocked = !isDone && !isCurrent && !isNext;

      const lessons = (Array.isArray(chapter.topics) && chapter.topics.length) || chapter.modules || 12;
      const xpTotal = Math.round((lessons * XP_PER_LESSON) / 10) * 10;
      const pct = isTeacherCompleted ? 100 : chapProgress;
      const xpEarned = Math.round((pct / 100) * xpTotal);

      return {
        ...chapter, idx, lessons, xpTotal, xpEarned, pct,
        state: isDone ? 'done' : isCurrent ? 'current' : isNext ? 'next' : 'locked',
      };
    });
  }, [curriculum, progress, profile?.assignedChapters, profile?.completedChapters]);

  const overview = useMemo(() => {
    const total = nodes.length || 1;
    const doneCount = nodes.filter((n) => n.state === 'done').length;
    const xpAvailable = nodes.reduce((s, n) => s + n.xpTotal, 0);
    const xpEarned = nodes.reduce((s, n) => s + n.xpEarned, 0);
    const totalLessons = nodes.reduce((s, n) => s + n.lessons, 0);
    const started = nodes.filter((n) => n.pct > 0);
    const mastery = started.length
      ? Math.round(started.reduce((s, n) => s + n.pct, 0) / started.length)
      : 0;
    return {
      total, doneCount, xpAvailable, xpEarned, totalLessons, mastery,
      termPct: Math.round((doneCount / total) * 100),
    };
  }, [nodes]);

  if (loading) return <div className="app-loading"><div className="app-spinner" /></div>;

  // Show topic practice session
  if (selectedTopic) {
    return (
      <AnimatePresence mode="wait">
        <TopicPracticeSession
          key={selectedTopic.topic.id}
          topic={selectedTopic.topic}
          chapter={selectedTopic.chapter}
          profile={profile}
          onBack={() => setSelectedTopic(null)}
        />
      </AnimatePresence>
    );
  }

  // Show chapter detail view
  if (selectedChapter) {
    return (
      <AnimatePresence mode="wait">
        <ChapterDetailView
          key={selectedChapter.chapter.id}
          chapter={selectedChapter.chapter}
          chapterState={selectedChapter.state}
          profile={profile}
          onBack={() => setSelectedChapter(null)}
          onStartTopic={(topic, chapter) => {
            setSelectedTopic({ topic, chapter });
          }}
        />
      </AnimatePresence>
    );
  }

  const STATE = {
    done:    { label: 'Mastered',    accent: '#10b981', soft: '#ecfdf5', border: '#a7f3d0', cta: 'Review',   Icon: CheckCircle2, CtaIcon: RotateCcw },
    current: { label: 'In progress', accent: '#7c3aed', soft: '#f5f3ff', border: '#ddd6fe', cta: 'Continue', Icon: BookMarked,   CtaIcon: Play },
    next:    { label: 'Up next',     accent: '#0ea5e9', soft: '#f0f9ff', border: '#bae6fd', cta: 'Start',    Icon: BookOpen,     CtaIcon: Play },
    locked:  { label: 'Locked',      accent: '#94a3b8', soft: '#f8fafc', border: '#e2e8f0', cta: 'Locked',   Icon: Lock,         CtaIcon: Lock },
  };

  // ── Overview pill ──────────────────────────────────────────────────────
  const pill = (label, value, sub, { lead = false, icon = null } = {}) => (
    <div style={{
      padding: '18px 20px', borderRadius: '20px', position: 'relative', overflow: 'hidden', minWidth: 0,
      background: lead ? 'linear-gradient(135deg, #1e1b4b, #312e81)' : 'rgba(255,255,255,0.9)',
      border: lead ? 'none' : '1px solid rgba(167,139,250,0.18)',
      boxShadow: lead ? '0 18px 40px rgba(30,27,75,0.25)' : '0 8px 24px rgba(91,33,182,0.05)',
    }}>
      {icon && <div style={{ position: 'absolute', right: '16px', top: '14px', color: lead ? 'rgba(245,208,254,0.55)' : 'rgba(139,92,246,0.32)' }}>{icon}</div>}
      <div style={{ fontSize: '0.64rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: lead ? 'rgba(255,255,255,0.7)' : '#8b7aa7' }}>{label}</div>
      <div style={{ fontFamily: '"Outfit", sans-serif', fontSize: '2rem', fontWeight: 800, lineHeight: 1.05, marginTop: '4px', color: lead ? '#fff' : '#1e1b4b' }}>{value}</div>
      <div style={{ fontSize: '0.8rem', fontWeight: 700, marginTop: '6px', color: lead ? 'rgba(255,255,255,0.8)' : '#6d6a85' }}>{sub}</div>
    </div>
  );

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Subject switch — only when the student studies more than one subject */}
      {availableSubjects.length > 1 && (
        <div style={{ display: 'inline-flex', padding: '4px', borderRadius: '12px', background: 'rgba(167,139,250,0.12)', gap: '4px', marginBottom: '16px' }}>
          {availableSubjects.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSubject(s)}
              style={{
                padding: '7px 14px', borderRadius: '9px', border: 'none', cursor: 'pointer',
                fontSize: '0.8rem', fontWeight: 800,
                background: activeSubject === s ? '#fff' : 'transparent',
                color: activeSubject === s ? '#1e1b4b' : '#8b7aa7',
              }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Knowledge Graph button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
        <button
          onClick={() => setShowGraph3D(true)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '7px',
            padding: '8px 16px', borderRadius: '12px', border: 'none', cursor: 'pointer',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#fff', fontSize: '0.82rem', fontWeight: 700,
            boxShadow: '0 2px 12px rgba(99,102,241,0.35)',
          }}
        >
          <Network size={15} />
          Knowledge Graph
        </button>
      </div>

      {/* 3D Graph overlay */}
      {showGraph3D && <CurriculumGraph3D onClose={() => setShowGraph3D(false)} profile={profile} />}

      {/* Overview pills */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '22px' }}>
        {pill('Term progress', `${overview.termPct}%`, `${overview.doneCount} of ${overview.total} chapters complete`, { lead: true, icon: <GraduationCap size={20} /> })}
        {pill('XP earned', overview.xpEarned.toLocaleString(), `of ${overview.xpAvailable.toLocaleString()} available`, { icon: <Zap size={18} /> })}
        {pill('Lessons', overview.totalLessons, `across ${overview.total} chapters`, { icon: <BookOpen size={18} /> })}
        {pill('Mastery score', `${overview.mastery}%`, overview.mastery >= 80 ? 'excellent consistency' : 'keep building it up', { icon: <Trophy size={18} /> })}
      </div>

      {/* Vertical path */}
      <div style={{ position: 'relative', paddingLeft: '34px' }}>
        {/* The spine */}
        <div style={{ position: 'absolute', left: '13px', top: '12px', bottom: '12px', width: '3px', borderRadius: '999px', background: 'linear-gradient(180deg, #ddd6fe, #f1f5f9)' }} />

        {nodes.map((n) => {
          const s = STATE[n.state];
          const num = String(n.idx + 1).padStart(2, '0');
          return (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: n.idx * 0.04 }}
              style={{ position: 'relative', marginBottom: '14px' }}
            >
              {/* Node dot */}
              <div style={{
                position: 'absolute', left: '-34px', top: '20px',
                width: '28px', height: '28px', borderRadius: '50%',
                background: n.state === 'locked' ? '#f1f5f9' : s.accent,
                border: '3px solid #fff', boxShadow: `0 0 0 2px ${s.border}`,
                display: 'grid', placeItems: 'center', color: n.state === 'locked' ? '#94a3b8' : '#fff',
              }}>
                <s.Icon size={14} strokeWidth={2.6} />
              </div>

              {/* Chapter card */}
              <div style={{
                padding: '16px 18px', borderRadius: '18px',
                background: n.state === 'locked' ? '#fbfbfd' : '#fff',
                border: `1px solid ${s.border}`,
                boxShadow: n.state === 'current' ? '0 14px 32px rgba(124,58,237,0.12)' : '0 6px 18px rgba(15,23,42,0.04)',
                opacity: n.state === 'locked' ? 0.72 : 1,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontFamily: '"Outfit", sans-serif', fontSize: '0.78rem', fontWeight: 900, color: '#cbd5e1' }}>{num}</span>
                      <span style={{
                        fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase',
                        padding: '3px 8px', borderRadius: '999px', background: s.soft, color: s.accent,
                      }}>{s.label}</span>
                    </div>
                    <h3 style={{ fontFamily: '"Outfit", sans-serif', fontSize: '1.05rem', fontWeight: 800, color: '#1e1b4b', margin: '7px 0 0' }}>
                      {n.title}
                    </h3>
                  </div>
                  <button
                    disabled={n.state === 'locked'}
                    onClick={() => n.state !== 'locked' && setSelectedChapter({ chapter: n, state: n.state })}
                    style={{
                      flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '9px 14px', borderRadius: '12px', border: 'none',
                      fontSize: '0.8rem', fontWeight: 800,
                      cursor: n.state === 'locked' ? 'not-allowed' : 'pointer',
                      background: n.state === 'locked' ? '#f1f5f9' : s.accent,
                      color: n.state === 'locked' ? '#94a3b8' : '#fff',
                    }}
                  >
                    <s.CtaIcon size={14} /> {s.cta}
                  </button>
                </div>

                {/* Meta row */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '12px', flexWrap: 'wrap' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', fontWeight: 800, color: '#64748b' }}>
                    <Zap size={13} style={{ color: '#f59e0b' }} />
                    {n.xpEarned} / {n.xpTotal} XP
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8' }}>
                    <BookOpen size={13} /> {n.lessons} lessons
                  </span>
                  {n.state === 'current' && (
                    <span style={{ marginLeft: 'auto', fontSize: '0.78rem', fontWeight: 900, color: s.accent }}>
                      {n.pct}% complete
                    </span>
                  )}
                </div>

                {/* Progress bar for the in-progress chapter */}
                {n.state === 'current' && (
                  <div style={{ height: '6px', borderRadius: '999px', background: '#eef2ff', marginTop: '10px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${n.pct}%` }}
                      style={{ height: '100%', borderRadius: '999px', background: 'linear-gradient(90deg, #a78bfa, #7c3aed)' }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default LearningPath;
