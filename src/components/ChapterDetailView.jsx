import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, CheckCircle2, Lock, Play, BookOpen,
  Circle, BookMarked, RotateCcw, GraduationCap
} from 'lucide-react';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';
import { hasLesson, getLesson } from '../lessons/registry';
import LessonPlayer from './lessons/LessonPlayer';

// SVG ring progress indicator for per-topic completion
const ProgressRing = ({ pct, accent, size = 40 }) => {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (pct / 100) * circ;
  const isComplete = pct >= 100;
  return (
    <svg width={size} height={size} style={{ flexShrink: 0, transform: 'rotate(-90deg)' }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e2e8f0" strokeWidth={4} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={isComplete ? '#10b981' : accent}
        strokeWidth={4}
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 0.5s ease' }}
      />
      <text
        x={size / 2} y={size / 2}
        textAnchor="middle" dominantBaseline="central"
        style={{ transform: 'rotate(90deg)', transformOrigin: `${size / 2}px ${size / 2}px`, fill: isComplete ? '#10b981' : accent, fontSize: pct === 0 ? '9px' : '8px', fontWeight: 900, fontFamily: 'inherit' }}
      >
        {pct === 0 ? '—' : `${pct}%`}
      </text>
    </svg>
  );
};

const XP_PER_TOPIC = 15;

const getTopicState = (topicId, topicProgress, teacherCompleted, teacherAssigned) => {
  const entry = topicProgress?.[topicId];
  const prog = entry?.progress || 0;
  const done = teacherCompleted?.includes(topicId) || prog >= 100;
  const assigned = teacherAssigned?.includes(topicId);
  if (done) return 'done';
  if (assigned || prog > 0) return 'current';
  return 'unlocked';
};

const STATE = {
  done:     { label: 'Complete',    accent: '#10b981', soft: '#ecfdf5', border: '#a7f3d0', Icon: CheckCircle2 },
  current:  { label: 'In progress', accent: '#7c3aed', soft: '#f5f3ff', border: '#ddd6fe', Icon: BookMarked },
  unlocked: { label: 'Not started', accent: '#94a3b8', soft: '#f8fafc', border: '#e2e8f0', Icon: Circle },
};

// Scan localStorage for all topic metas under a chapter — no dependency on chapter.topics
const loadChapterProgress = (uid, chapterId) => {
  const prefix = `sapere:tp:${uid}:${chapterId}:`;
  const prog = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(prefix) && key.endsWith(':meta')) {
        const topicId = key.slice(prefix.length, -5);
        const meta = JSON.parse(localStorage.getItem(key));
        if (meta && topicId) prog[topicId] = meta;
      }
    }
  } catch { /* ignore */ }
  return prog;
};
// Reset all topic progress for a chapter
const clearChapterProgress = (uid, chapterId) => {
  const prefix = `sapere:tp:${uid}:${chapterId}:`;
  try {
    const toRemove = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith(prefix)) toRemove.push(key);
    }
    toRemove.forEach(k => localStorage.removeItem(k));
  } catch { /* ignore */ }
};

const ChapterDetailView = ({ chapter, chapterState, profile, onBack, onStartTopic }) => {
  const { user } = useAuth();
  // topicProgress: { [topicId]: { progress, masteredCount, totalQuestions } }
  const [topicProgress, setTopicProgress] = useState({});
  const [previewLesson, setPreviewLesson] = useState(null);
  const [resetting, setResetting] = useState(false);

  useEffect(() => {
    if (!user?.uid) return;
    const refresh = () => setTopicProgress(loadChapterProgress(user.uid, chapter.id));
    refresh();
    window.addEventListener('sapere:progress-updated', refresh);
    return () => window.removeEventListener('sapere:progress-updated', refresh);
  }, [user?.uid, chapter.id]);

  const handleResetChapter = () => {
    if (!user?.uid || resetting) return;
    setResetting(true);
    clearChapterProgress(user.uid, chapter.id);
    setTopicProgress({});
    setResetting(false);
  };

  const topics = useMemo(() => {
    return (chapter.topics || []).map((topic, idx) => {
      const state = getTopicState(
        topic.id,
        topicProgress,
        profile?.completedChapters,
        profile?.assignedTopics
      );
      const entry = topicProgress?.[topic.id];
      const pct = entry?.progress || (state === 'done' ? 100 : 0);
      const masteredCount = entry?.masteredCount || 0;
      const totalCount = entry?.totalQuestions || 0;
      const xpEarned = Math.round((pct / 100) * XP_PER_TOPIC);
      return { ...topic, idx, state, pct, masteredCount, totalCount, xpEarned };
    });
  }, [chapter.topics, topicProgress, profile]);

  const totalTopics = topics.length;
  const doneCount = topics.filter(t => t.state === 'done').length;
  const inProgressCount = topics.filter(t => t.state === 'current').length;
  const overallPct = totalTopics ? Math.round((doneCount / totalTopics) * 100) : 0;

  const chapterAccent = chapterState === 'done' ? '#10b981' : chapterState === 'current' ? '#7c3aed' : '#0ea5e9';
  const chapterSoft = chapterState === 'done' ? '#ecfdf5' : chapterState === 'current' ? '#f5f3ff' : '#f0f9ff';

  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 32 }}
      transition={{ type: 'spring', damping: 26, stiffness: 280 }}
      style={{ maxWidth: '760px', margin: '0 auto' }}
    >
      {/* Back button */}
      <button
        onClick={onBack}
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          padding: '8px 14px', borderRadius: '12px', border: 'none',
          background: 'rgba(167,139,250,0.1)', color: '#7c3aed',
          fontSize: '0.82rem', fontWeight: 800, cursor: 'pointer',
          marginBottom: '20px',
        }}
      >
        <ArrowLeft size={15} /> Back to path
      </button>

      {/* Chapter header */}
      <div style={{
        padding: '24px', borderRadius: '22px', marginBottom: '24px',
        background: `linear-gradient(135deg, ${chapterAccent}15, ${chapterAccent}08)`,
        border: `1px solid ${chapterAccent}30`,
        boxShadow: `0 12px 32px ${chapterAccent}12`,
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', color: chapterAccent, marginBottom: '6px' }}>
              {chapterState === 'done' ? 'Mastered' : chapterState === 'current' ? 'In progress' : 'Up next'}
            </div>
            <h2 style={{ fontFamily: '"Outfit", sans-serif', fontSize: 'clamp(1.2rem, 3.5vw, 1.6rem)', fontWeight: 900, color: '#1e1b4b', margin: '0 0 12px' }}>
              {chapter.title}
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', fontWeight: 800, color: '#64748b' }}>
                <BookOpen size={14} /> {totalTopics} topics
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', fontWeight: 800, color: '#64748b' }}>
                <CheckCircle2 size={14} style={{ color: '#10b981' }} /> {doneCount} complete
              </span>
              {inProgressCount > 0 && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.82rem', fontWeight: 800, color: '#7c3aed' }}>
                  <BookMarked size={14} /> {inProgressCount} in progress
                </span>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px', flexShrink: 0 }}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: 900, color: chapterAccent, lineHeight: 1, fontFamily: '"Outfit", sans-serif' }}>
                {overallPct}%
              </div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', marginTop: '2px' }}>complete</div>
            </div>
            <button
              onClick={handleResetChapter}
              disabled={resetting || overallPct === 0}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '6px 12px', borderRadius: '10px',
                border: `1.5px solid ${chapterAccent}40`,
                background: 'rgba(255,255,255,0.7)',
                color: overallPct === 0 ? '#cbd5e1' : chapterAccent,
                fontSize: '0.72rem', fontWeight: 800,
                cursor: overallPct === 0 ? 'default' : 'pointer',
                opacity: overallPct === 0 ? 0.5 : 1,
              }}
            >
              <RotateCcw size={12} />
              {resetting ? 'Resetting…' : 'Reset chapter'}
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ height: '7px', borderRadius: '999px', background: 'rgba(0,0,0,0.06)', marginTop: '16px', overflow: 'hidden' }}>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallPct}%` }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ height: '100%', borderRadius: '999px', background: chapterAccent }}
          />
        </div>
      </div>

      {/* Topic list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {topics.map((topic, i) => {
          const s = STATE[topic.state];
          return (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                padding: '16px 18px', borderRadius: '16px',
                background: '#fff',
                border: `1px solid ${s.border}`,
                boxShadow: topic.state === 'current'
                  ? `0 8px 24px ${s.accent}14`
                  : '0 2px 8px rgba(15,23,42,0.04)',
              }}
            >
              {/* Progress ring */}
              <ProgressRing pct={topic.pct} accent={s.accent} size={44} />

              {/* Topic info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                  <span style={{
                    fontSize: '0.62rem', fontWeight: 900, letterSpacing: '0.06em', textTransform: 'uppercase',
                    padding: '2px 7px', borderRadius: '6px', background: s.soft, color: s.accent,
                  }}>
                    {topic.code}
                  </span>
                  <span style={{
                    fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase',
                    color: s.accent, opacity: 0.7,
                  }}>
                    {s.label}
                  </span>
                </div>
                <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#1e1b4b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {topic.title}
                </div>

                {/* Mastery count + mini bar */}
                {topic.pct > 0 && (
                  <div style={{ marginTop: '6px' }}>
                    {topic.totalCount > 0 && (
                      <div style={{ fontSize: '0.65rem', fontWeight: 700, color: '#94a3b8', marginBottom: '3px' }}>
                        {topic.masteredCount}/{topic.totalCount} mastered
                      </div>
                    )}
                    <div style={{ height: '4px', borderRadius: '999px', background: '#eef2ff', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${topic.pct}%` }}
                        style={{ height: '100%', borderRadius: '999px', background: topic.pct >= 100 ? '#10b981' : s.accent }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                {hasLesson(topic.id) && (
                  <button
                    onClick={() => setPreviewLesson(getLesson(topic.id))}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '5px',
                      padding: '7px 13px', borderRadius: '999px', border: '1.5px solid #ddd6fe',
                      background: '#fff', color: '#7c3aed',
                      fontSize: '0.75rem', fontWeight: 800,
                      cursor: 'pointer', letterSpacing: '0.01em',
                    }}
                  >
                    <GraduationCap size={13} />
                    Lesson
                  </button>
                )}
                <button
                  onClick={() => onStartTopic?.(topic, chapter)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '5px',
                    padding: '7px 13px', borderRadius: '999px', border: 'none',
                    background: 'linear-gradient(135deg,#a78bfa,#7c3aed)',
                    color: '#fff', fontSize: '0.75rem', fontWeight: 800,
                    cursor: 'pointer', letterSpacing: '0.01em',
                    boxShadow: '0 2px 8px rgba(124,58,237,0.25)',
                  }}
                >
                  <Play size={12} fill="#fff" />
                  Practice
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Empty state */}
      {topics.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8' }}>
          <BookOpen size={40} style={{ margin: '0 auto 12px', display: 'block', opacity: 0.4 }} />
          <p style={{ fontWeight: 700, margin: 0 }}>No topics available yet</p>
        </div>
      )}

      {/* Lesson preview overlay */}
      {previewLesson && (
        <LessonPlayer lesson={previewLesson} onClose={() => setPreviewLesson(null)} />
      )}
    </motion.div>
  );
};

export default ChapterDetailView;
