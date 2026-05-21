import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, CheckCircle2, Layers, Star, BookText, 
  Award, Lock, Check, Play, BookMarked
} from 'lucide-react';
import { db } from '../firebase/config';
import { doc, getDoc, onSnapshot, collection, query, where, setDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { localCache } from '../services/localCacheService';
import './learning-path.css';

const LearningPath = ({ profile }) => {
  const { user } = useAuth();
  const [activeSubject, setActiveSubject] = useState('Maths');
  const [activeChapterId, setActiveChapterId] = useState(null);
  const [curriculum, setCurriculum] = useState([]);
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);

  const normalizeYearLabel = (value) => {
    const n = parseInt(String(value || '').replace(/\D/g, ''), 10);
    if (Number.isFinite(n) && n > 0) return `Year ${n}`;
    return String(value || '').trim();
  };
  const rawYears = Array.isArray(profile?.assignedYear) ? profile.assignedYear : [profile?.assignedYear || 'Year 3'];
  const years = rawYears.map(normalizeYearLabel).filter(Boolean);
  const year = years[0] || 'Year 3';
  const term = "Term 2, 2026"; // Mocking as per design

  // Fetch Curriculum
  useEffect(() => {
    if (activeSubject === 'English') {
      setCurriculum([
        { id: 'eng-1', title: 'Reading Comprehension', modules: 10, topics: [{ id: 'et1', title: 'Inference', status: 'active' }, { id: 'et2', title: 'Context clues', status: 'next' }] },
        { id: 'eng-2', title: 'Grammar & Punctuation', modules: 8, topics: [{ id: 'et3', title: 'Pronouns', status: 'done' }, { id: 'et4', title: 'Adverbs', status: 'next' }] },
        { id: 'eng-3', title: 'Writing: Creative', modules: 6, topics: [] },
      ]);
      setLoading(false);
      return;
    }

    const isSenior = ['Year 11', 'Year 12'].includes(year);
    const courses = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse : [profile?.assignedCourse || 'Advanced'];
    const course = courses[0];
    const docId = isSenior 
      ? `${year.replace(' ', '_')}_${course}`
      : year.replace(' ', '_');

    let cancelled = false;
    const cacheKey = `curriculum-doc:v1:${docId}`;
    const cached = localCache.get(cacheKey);
    if (Array.isArray(cached?.chapters) && cached.chapters.length > 0) {
      setCurriculum(cached.chapters);
      setLoading(false);
    }

    // Robust fallback to the bundled curriculum so chapters always render
    // even if the Firestore curriculum doc is missing or empty.
    const resolveFallbackCurriculum = () => {
      let data = CURRICULUM_DATA[year] || CURRICULUM_DATA[normalizeYearLabel(year)] || [];
      if (!Array.isArray(data)) {
        data = data[course] || Object.values(data)[0] || [];
      }
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
            setDoc(doc(db, 'sync_meta', 'curriculum'), {
              version,
              updatedAt: serverTimestamp(),
            }, { merge: true }).catch(() => {});
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
    return () => {
      cancelled = true;
    };
  }, [year, activeSubject, profile?.assignedCourse]);

  // Fetch Progress
  useEffect(() => {
    if (!user?.uid) return;
    const q = query(collection(db, 'chapterProgress'), where('userId', '==', user.uid));
    const unsub = onSnapshot(q, (snap) => {
      const prog = {};
      snap.docs.forEach(d => {
        const data = d.data();
        prog[data.chapterId] = data;
      });
      setProgress(prog);
    });
    return unsub;
  }, [user?.uid]);

  const availableSubjects = useMemo(() => {
    const subjects = [];
    const studentSubject = (profile?.subject || '').toLowerCase();
    
    // Check if Maths is included
    if (studentSubject.includes('math') || studentSubject === '' || !profile?.subject) {
      // Calculate dynamic progress for Maths
      const teacherCompleted = profile?.completedChapters || [];
      const totalChapters = curriculum.length || 1;
      const completedInCurriculum = teacherCompleted.filter(id => 
        curriculum.some(ch => ch.id === id)
      ).length;
      const dynamicProgress = Math.min(Math.round((completedInCurriculum / totalChapters) * 100), 100);

      subjects.push({
        id: 'Maths',
        label: 'Maths',
        progress: dynamicProgress,
        color: '#6366f1',
        lightColor: '#818cf8',
        shadow: 'rgba(99,102,241,0.12)',
        icon: <BookOpen size={20} className="subject-icon" style={{ color: '#6366f1' }} />
      });
    }
    
    // Check if English is included
    if (studentSubject.includes('english') || studentSubject === '' || !profile?.subject) {
      subjects.push({
        id: 'English',
        label: 'English',
        progress: 0,
        color: '#10b981',
        lightColor: '#10b981',
        shadow: 'rgba(16,185,129,0.1)',
        icon: <BookText size={20} className="subject-icon" style={{ color: '#10b981' }} />
      });
    }
    
    return subjects;
  }, [profile?.subject, profile?.completedChapters, curriculum]);

  // Ensure activeSubject is valid for the current student
  useEffect(() => {
    if (availableSubjects.length > 0) {
      const isValid = availableSubjects.find(s => s.id === activeSubject);
      if (!isValid) {
        setActiveSubject(availableSubjects[0].id);
      }
    }
  }, [availableSubjects, activeSubject]);

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  const isMobile = window.innerWidth < 768;

  // Circular progress calculations
  const circleRadius = 26;
  const circleCircumference = 2 * Math.PI * circleRadius; // ~163.36

  return (
    <div className="learning-path-wrapper">
      {/* Premium Header Banner */}
      <div className="learning-path-header-banner">
        <h1 className="learning-path-header-title">My Learning Path</h1>
        <div className="learning-path-header-subtitle">
          {year} • {term}
        </div>
      </div>

      {/* Subject Selector Tabs */}
      <div className="subject-grid">
        {availableSubjects.map((subject) => {
          const isActive = activeSubject === subject.id;
          const canSwitch = availableSubjects.length > 1;
          const strokeDashoffset = circleCircumference - (subject.progress / 100) * circleCircumference;
          
          return (
            <motion.div 
              key={subject.id}
              whileTap={canSwitch ? { scale: 0.98 } : {}}
              onClick={() => canSwitch && setActiveSubject(subject.id)}
              className={`subject-tab-card ${isActive ? 'is-active' : ''} ${subject.id === 'Maths' ? 'subject-maths' : 'subject-english'}`}
              style={{ cursor: canSwitch ? 'pointer' : 'default' }}
            >
              <div className="subject-tab-info">
                <div className="subject-tab-badge">
                  <span className="subject-tab-badge-dot" style={{ backgroundColor: subject.color }} />
                  {subject.label}
                </div>
                <div className="subject-tab-title-row">
                  <span className="subject-tab-pct">{subject.progress}%</span>
                  <span className="subject-tab-lbl" style={{ color: subject.color }}>COMPLETED</span>
                </div>
              </div>
              
              {/* Circular SVG Progress Ring */}
              <div className="subject-tab-progress-circle">
                <svg width="72" height="72" viewBox="0 0 72 72">
                  <circle className="circular-bg" cx="36" cy="36" r={circleRadius} />
                  <circle 
                    className="circular-indicator" 
                    cx="36" 
                    cy="36" 
                    r={circleRadius} 
                    stroke={subject.color}
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={strokeDashoffset}
                  />
                </svg>
                <div className="subject-tab-icon-center">
                  {subject.icon}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Chapters Container */}
      <div className="app-panel learning-path-panel">
        <div className="learning-path-panel-title">
          <Layers size={15} style={{ color: 'var(--lp-primary)' }} />
          CHAPTERS • {year.toUpperCase()}
        </div>
        
        <div className="learning-timeline-container">
          {curriculum.map((chapter, idx) => {
            const chapProgress = progress[chapter.id]?.progress || 0;
            
            // Respect teacher assignments
            const teacherAssigned = profile?.assignedChapters || [];
            const teacherCompleted = profile?.completedChapters || [];
            
            const isTeacherCompleted = teacherCompleted.includes(chapter.id);
            const isTeacherAssigned = teacherAssigned.includes(chapter.id);
            
            // A chapter is "Done" if the teacher marked it so OR it's 100% complete
            const isDone = isTeacherCompleted || chapProgress === 100;
            
            // A chapter is active if:
            // 1. It's the one currently opened (activeChapterId)
            // 2. OR it's specifically assigned by the teacher
            // 3. OR it's the fallback default (idx === 0 if no assignments exist)
            const isActive = activeChapterId === chapter.id || 
                           (isTeacherAssigned && !isDone) ||
                           (!activeChapterId && teacherAssigned.length === 0 && teacherCompleted.length === 0 && idx === 0 && !isDone); 
            
            // A chapter is "next" if it's assigned by the teacher but not active/done
            const isNext = !isDone && !isActive && (isTeacherAssigned || (teacherAssigned.length === 0 && teacherCompleted.length === 0 && idx < 3));
            
            // A chapter is locked only if it's not teacher-assigned/completed AND not within the default starting range
            const isLocked = !isTeacherAssigned && !isTeacherCompleted && (teacherAssigned.length > 0 || teacherCompleted.length > 0 || idx > 2);

            const chapterNumberText = activeSubject === 'English'
              ? `Chapter ${idx + 1}`
              : (year === 'Basic Calculation' ? `Stage ${idx + 1}` : `Chapter ${idx + 1}`);

            // Build classes for styling states
            const statusClass = isDone ? 'is-done' : isActive ? 'is-active' : isNext ? 'is-next' : 'is-locked';

            return (
              <motion.div 
                key={chapter.id}
                layout
                onClick={() => !isLocked && setActiveChapterId(chapter.id === activeChapterId ? null : chapter.id)}
                className={`timeline-chapter-item ${statusClass}`}
              >
                {/* Timeline Axis Bullet */}
                <div className="timeline-chapter-bullet" />
                
                {/* Curriculum Chapter Card */}
                <div className={`chapter-card-premium ${isActive ? 'is-active' : ''} ${isLocked ? 'is-locked' : ''}`}>
                  <div className="chapter-card-layout">
                    {/* Chapter Icon */}
                    <div className="chapter-card-icon-box">
                      {isDone ? (
                        <CheckCircle2 size={24} />
                      ) : isLocked ? (
                        <Lock size={22} />
                      ) : (
                        <BookMarked size={24} />
                      )}
                    </div>
                    
                    {/* Content Section */}
                    <div className="chapter-card-main">
                      <div className="chapter-card-title-row">
                        <div>
                          {chapterNumberText && (
                            <span className="chapter-card-chapter-num">
                              {chapterNumberText}
                            </span>
                          )}
                          <h3 className="chapter-card-title">{chapter.title}</h3>
                        </div>
                        <div className="chapter-card-meta-badge-row">
                          <span className="chapter-card-pct-label">{isTeacherCompleted ? 100 : chapProgress}%</span>
                          <div className={`chapter-card-status-badge status-${isDone ? 'done' : isActive ? 'active' : isNext ? 'next' : 'locked'}`}>
                            {isDone ? 'Done' : isActive ? 'Active' : isNext ? 'Next' : 'Locked'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Chapter Progress Bar */}
                      <div className="chapter-card-progress-track">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${isTeacherCompleted ? 100 : chapProgress}%` }} 
                          className="chapter-card-progress-fill" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Drill-down Topics Area */}
      <AnimatePresence>
        {activeChapterId && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="topics-drilldown-panel"
          >
            <div className="topics-drilldown-title">
              <BookOpen size={14} style={{ color: 'var(--lp-primary)', verticalAlign: 'middle', marginRight: '6px' }} />
              {curriculum.find(c => c.id === activeChapterId)?.title.toUpperCase()} • TOPICS
            </div>
            <div className="topics-chips-grid">
              {(curriculum.find(c => c.id === activeChapterId)?.topics || [
                { id: 't1', title: 'Patterns', status: 'done' },
                { id: 't2', title: 'Number sentences', status: 'done' },
                { id: 't3', title: 'Equations', status: 'active' },
                { id: 't4', title: 'Variables', status: 'next' },
                { id: 't5', title: 'Functions', status: 'next' },
              ]).map(topic => {
                const topicClass = topic.status === 'active' ? 'is-active' : topic.status === 'done' ? 'is-done' : 'is-next';
                return (
                  <div 
                    key={topic.id}
                    className={`topic-interactive-chip ${topicClass}`}
                  >
                    {topic.status === 'done' && <Check size={16} style={{ marginRight: 4 }} />}
                    {topic.status === 'active' && <Play size={14} style={{ marginRight: 6, fill: '#fff' }} />}
                    {topic.title}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recent Achievements */}
      <div className="achievements-panel">
        <div className="achievements-title">
          <Award size={16} style={{ color: 'var(--lp-primary)', verticalAlign: 'middle', marginRight: '6px' }} />
          RECENT ACHIEVEMENTS
        </div>
        <div className="achievements-list-grid">
          {[
            { id: 1, title: 'Number chapter complete!', date: '22 Apr • Maths', icon: <Star size={22} style={{ fill: '#d97706' }} />, color: '#fef3c7', iconColor: '#d97706' },
            { id: 2, title: 'Patterns mastered', date: '18 Apr • Maths • Algebra', icon: <Award size={22} style={{ fill: '#4338ca' }} />, color: '#e0e7ff', iconColor: '#4338ca' },
            { id: 3, title: 'Algebra chapter complete', date: 'Next goal', icon: <Lock size={22} />, color: '#f1f5f9', iconColor: '#94a3b8', isLocked: true }
          ].map(achievement => (
            <div 
              key={achievement.id} 
              className={`achievement-card-premium ${achievement.isLocked ? 'is-locked' : ''}`}
            >
              <div 
                className="achievement-badge-container" 
                style={{ backgroundColor: achievement.color, color: achievement.iconColor }}
              >
                {achievement.icon}
              </div>
              <div className="achievement-card-info">
                <h4 className="achievement-card-title">{achievement.title}</h4>
                <p className="achievement-card-date">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
