import React, { useState, useEffect, useMemo } from 'react';
import { 
  BookOpen, CheckCircle2, ChevronRight, 
  Layers, GraduationCap, Star, Clock, 
  Search, BookText, Award, Lock, Plus, Edit2, Trash2, Save, X,
  Check, Play, ArrowRight, BookMarked
} from 'lucide-react';
import { db } from '../firebase/config';
import { doc, onSnapshot, collection, query, where } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import MathView from './MathView';

const LearningPath = ({ profile }) => {
  const { user } = useAuth();
  const [activeSubject, setActiveSubject] = useState('Maths');
  const [activeChapterId, setActiveChapterId] = useState(null);
  const [curriculum, setCurriculum] = useState([]);
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);

  const year = profile?.assignedYear || 'Year 3';
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
    const course = profile?.assignedCourse || 'Advanced';
    const docId = isSenior 
      ? `${year.replace(' ', '_')}_${course}`
      : year.replace(' ', '_');

    const unsub = onSnapshot(doc(db, 'curriculum', docId), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setCurriculum(data.chapters || []);
      } else {
        setCurriculum([]);
      }
      setLoading(false);
    });
    return unsub;
  }, [year, activeSubject, profile?.assignedCourse]);

  // Fetch Progress
  useEffect(() => {
    if (!user) return;
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
  }, [user]);

  const availableSubjects = useMemo(() => {
    const subjects = [];
    const studentSubject = (profile?.subject || '').toLowerCase();
    
    // Check if Maths is included
    if (studentSubject.includes('math') || studentSubject === '' || !profile?.subject) {
      subjects.push({
        id: 'Maths',
        label: 'Maths',
        progress: 68,
        color: '#6366f1',
        lightColor: '#818cf8',
        shadow: 'rgba(99,102,241,0.12)'
      });
    }
    
    // Check if English is included
    if (studentSubject.includes('english') || studentSubject === '' || !profile?.subject) {
      subjects.push({
        id: 'English',
        label: 'English',
        progress: 52,
        color: '#10b981',
        lightColor: '#10b981',
        shadow: 'rgba(16,185,129,0.1)'
      });
    }
    
    return subjects;
  }, [profile?.subject]);

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

  return (
    <div className="learning-path" style={{ 
      width: '100%',
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: isMobile ? '10px 16px 40px' : '20px 40px' 
    }}>
      {/* Header Area */}
      <div style={{ textAlign: isMobile ? 'left' : 'center', marginBottom: isMobile ? '32px' : '48px' }}>
        <h1 style={{ fontSize: isMobile ? '1.8rem' : '2.4rem', fontWeight: 900, color: '#24163f', margin: 0 }}>My Learning Path</h1>
        <p style={{ margin: '6px 0 0', color: '#6366f1', fontWeight: 700, fontSize: isMobile ? '0.9rem' : '1.1rem' }}>{year} • {term}</p>
      </div>

      {/* Subject Selector Tabs - Filtered by Teacher Assignment */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: availableSubjects.length === 1 ? '1fr' : '1fr 1fr', 
        gap: isMobile ? '12px' : '20px', 
        marginBottom: '32px' 
      }}>
        {availableSubjects.map((subject) => {
          const isActive = activeSubject === subject.id;
          const canSwitch = availableSubjects.length > 1;
          
          return (
            <motion.div 
              key={subject.id}
              whileTap={canSwitch ? { scale: 0.98 } : {}}
              onClick={() => canSwitch && setActiveSubject(subject.id)}
              className="app-panel" 
              style={{ 
                padding: isMobile ? '20px' : '24px', 
                borderRadius: '24px', 
                border: isActive ? `2px solid ${subject.lightColor}` : '1px solid rgba(0,0,0,0.05)',
                background: isActive ? '#fff' : '#f8fafc',
                cursor: canSwitch ? 'pointer' : 'default',
                boxShadow: isActive ? `0 12px 24px ${subject.shadow}` : 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                opacity: !isActive && canSwitch ? 0.7 : 1
              }}
            >
              {isActive && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: subject.lightColor }} />
              )}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: subject.color }} />
                <span style={{ fontSize: isMobile ? '0.7rem' : '0.8rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{subject.label}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <div style={{ fontSize: isMobile ? '1.6rem' : '2rem', fontWeight: 900, color: '#1e1b4b', letterSpacing: '-0.02em' }}>{subject.progress}%</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: subject.color, opacity: 0.8 }}>COMPLETED</div>
              </div>
              <div style={{ height: '5px', background: '#f1f5f9', borderRadius: '3px', overflow: 'hidden', marginTop: '12px' }}>
                <motion.div initial={{ width: 0 }} animate={{ width: `${subject.progress}%` }} style={{ height: '100%', background: subject.color }} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Chapters Container */}
      <div className="app-panel" style={{ padding: isMobile ? '20px' : '32px', borderRadius: '32px', marginBottom: isMobile ? '24px' : '32px' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px' }}>CHAPTERS • {year.toUpperCase()}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {curriculum.map((chapter, idx) => {
            const chapProgress = progress[chapter.id]?.progress || 0;
            const isDone = chapProgress === 100;
            
            // NEW LOGIC: Respect teacher assignments
            const teacherAssigned = profile?.assignedChapters || [];
            const isTeacherAssigned = teacherAssigned.includes(chapter.id);
            
            // A chapter is active if:
            // 1. It's the one currently opened (activeChapterId)
            // 2. OR it's specifically assigned by the teacher
            // 3. OR it's the fallback default (idx === 0 if no assignments exist)
            const isActive = activeChapterId === chapter.id || 
                           (isTeacherAssigned && !isDone) ||
                           (!activeChapterId && teacherAssigned.length === 0 && idx === 0 && !isDone); 
            
            // A chapter is "next" if it's the first non-done, non-active one in the assigned list
            const isNext = !isDone && !isActive && (isTeacherAssigned || (teacherAssigned.length === 0 && idx < 3));
            
            // A chapter is locked only if it's not teacher-assigned AND not within the default starting range
            const isLocked = !isTeacherAssigned && (teacherAssigned.length > 0 || idx > 2);

            return (
              <motion.div 
                key={chapter.id}
                layout
                onClick={() => !isLocked && setActiveChapterId(chapter.id === activeChapterId ? null : chapter.id)}
                className={`chapter-item ${isActive ? 'is-active' : ''}`}
                style={{ 
                  padding: isMobile ? '16px' : '20px', 
                  borderRadius: '24px', 
                  background: isActive ? '#fff' : '#f8fafc',
                  border: isActive ? '2px solid #818cf8' : '1px solid transparent',
                  cursor: isLocked ? 'default' : 'pointer',
                  opacity: isLocked ? 0.6 : 1,
                  transition: 'all 0.2s',
                  boxShadow: isActive ? '0 10px 30px rgba(99,102,241,0.08)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '12px' : '20px' }}>
                  <div style={{ 
                    width: isMobile ? '40px' : '48px', 
                    height: isMobile ? '40px' : '48px', 
                    borderRadius: '14px', 
                    background: isDone ? '#e0e7ff' : '#f1f5f9', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    color: isDone ? '#6366f1' : '#94a3b8',
                    flexShrink: 0
                  }}>
                    {isDone ? <CheckCircle2 size={isMobile ? 20 : 24} /> : <BookMarked size={isMobile ? 20 : 24} />}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '8px' : '12px', marginBottom: '8px' }}>
                      <h3 style={{ margin: 0, fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: 800, color: '#1e1b4b', lineHeight: 1.3 }}>{chapter.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#6366f1' }}>{chapProgress}%</span>
                        <div style={{ 
                          padding: '4px 10px', 
                          borderRadius: '8px', 
                          fontSize: '0.65rem', 
                          fontWeight: 800, 
                          background: isDone ? '#dcfce7' : isActive ? '#e0e7ff' : '#f1f5f9',
                          color: isDone ? '#166534' : isActive ? '#4338ca' : '#64748b',
                          textTransform: 'uppercase'
                        }}>
                          {isDone ? 'Done' : isActive ? 'Active' : isNext ? 'Next' : 'Locked'}
                        </div>
                      </div>
                    </div>
                    <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div initial={{ width: 0 }} animate={{ width: `${chapProgress}%` }} style={{ height: '100%', background: '#818cf8' }} />
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
            className="app-panel" 
            style={{ padding: '32px', borderRadius: '32px', marginBottom: '32px' }}
          >
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '24px' }}>
              {curriculum.find(c => c.id === activeChapterId)?.title.toUpperCase()} • TOPICS IN PROGRESS
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {(curriculum.find(c => c.id === activeChapterId)?.topics || [
                { id: 't1', title: 'Patterns', status: 'done' },
                { id: 't2', title: 'Number sentences', status: 'done' },
                { id: 't3', title: 'Equations', status: 'active' },
                { id: 't4', title: 'Variables', status: 'next' },
                { id: 't5', title: 'Functions', status: 'next' },
              ]).map(topic => (
                <div 
                  key={topic.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    background: topic.status === 'active' ? '#818cf8' : topic.status === 'done' ? '#eef2ff' : '#f8fafc',
                    color: topic.status === 'active' ? 'white' : topic.status === 'done' ? '#6366f1' : '#64748b',
                    border: topic.status === 'next' ? '1px solid #e2e8f0' : 'none',
                    cursor: 'pointer'
                  }}
                >
                  {topic.status === 'done' && <Check size={16} />}
                  {topic.status === 'active' && <ArrowRight size={16} />}
                  {topic.title}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Recent Achievements */}
      <div className="app-panel" style={{ padding: isMobile ? '24px' : '32px', borderRadius: '32px' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px' }}>RECENT ACHIEVEMENTS</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { id: 1, title: 'Number chapter complete!', date: '22 Apr • Maths', icon: <Star size={isMobile ? 20 : 24} />, color: '#fef3c7', iconColor: '#d97706' },
            { id: 2, title: 'Patterns mastered', date: '18 Apr • Maths • Algebra', icon: <Award size={isMobile ? 20 : 24} />, color: '#e0e7ff', iconColor: '#4338ca' },
            { id: 3, title: 'Algebra chapter complete', date: 'Next goal', icon: <Lock size={isMobile ? 20 : 24} />, color: '#f8fafc', iconColor: '#94a3b8', isLocked: true }
          ].map(achievement => (
            <div key={achievement.id} style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '16px' : '20px', opacity: achievement.isLocked ? 0.5 : 1 }}>
              <div style={{ width: isMobile ? '44px' : '56px', height: isMobile ? '44px' : '56px', borderRadius: '50%', background: achievement.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: achievement.iconColor, border: '4px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', flexShrink: 0 }}>
                {achievement.icon}
              </div>
              <div style={{ flex: 1, borderBottom: '1px solid #f1f5f9', paddingBottom: '12px' }}>
                <h4 style={{ margin: 0, fontSize: isMobile ? '0.9rem' : '1rem', fontWeight: 800, color: '#1e1b4b' }}>{achievement.title}</h4>
                <p style={{ margin: '4px 0 0', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
