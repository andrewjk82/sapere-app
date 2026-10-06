/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { scanTopicProgress } from '../utils/topicProgressScan';
import { createPortal } from 'react-dom';
import { CheckCircle2, Lock, Play, BookMarked, RotateCcw, Trophy, BookOpen, GraduationCap, Network, FileText, ExternalLink, X, PenLine } from 'lucide-react';
import CurriculumGraph3D from './CurriculumGraph3D';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { localCache } from '../services/localCacheService';
import { toThumbnailUrl, getChapterCheatSheets } from '../utils/cheatSheetUtils';
import { toDrivePreviewUrl, toDriveOpenUrl } from '../utils/homework';
import { useWorksheetPdf } from '../utils/useWorksheetPdf';
import CheatSheetLightbox from './CheatSheetLightbox';
import ChapterDetailView from './ChapterDetailView';
import TopicPracticeSession from './TopicPracticeSession';
import PdfViewer from './PdfViewer';
import WorkingOutCanvas from './WorkingOutCanvas';
import { loadCurriculumNote, saveCurriculumNote } from '../utils/curriculumLocalNotes';
import { loadLastStudy, saveLastStudy, shortChapterLabel } from '../utils/lastStudy';
import { requestPersistentStorage } from '../utils/homeworkLocalStore';
import './learning-path.css';

const normalizeCurriculumTopics = (chapters) => (Array.isArray(chapters) ? chapters : []).map((chapter) => {
  if (!Array.isArray(chapter?.topics)) return chapter;
  const topicsByCode = new Map();
  chapter.topics.forEach((topic) => {
    const code = String(topic?.code || '').trim().toUpperCase();
    if (!code) return;
    if (!topicsByCode.has(code)) topicsByCode.set(code, []);
    topicsByCode.get(code).push(topic);
  });
  return {
    ...chapter,
    topics: chapter.topics.filter((topic) => {
      const code = String(topic?.code || '').trim().toUpperCase();
      const duplicates = topicsByCode.get(code) || [];
      const isPlaceholder = String(topic?.title || '').trim().toLowerCase() === 'miscellaneous questions';
      return !(duplicates.length > 1 && isPlaceholder && duplicates.some((other) => (
        other !== topic && String(other?.title || '').trim().toLowerCase() !== 'miscellaneous questions'
      )));
    }),
  };
});

const LearningPath = ({ profile }) => {
  const { user } = useAuth();
  const [activeSubject, setActiveSubject] = useState('Maths');
  const [curriculum, setCurriculum] = useState([]);
  const [progress, setProgress] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedChapter, setSelectedChapter] = useState(null); // { chapter, state }
  const [selectedTopic, setSelectedTopic] = useState(null);    // { topic, chapter }
  const [showGraph3D, setShowGraph3D] = useState(false);
  // Where the student last studied (this browser only) — drives the "Continue studying" button.
  const [lastStudy, setLastStudy] = useState(null);
  const pendingResumeRef = useRef(null); // { chapterId } waiting for its track's chapters to load
  const [cheatSheetPreview, setCheatSheetPreview] = useState(null); // { url, title } | null
  const [pdfPreview, setPdfPreview] = useState(null); // { raw, url, openUrl, title } | null — topic worksheet
  const curriculumNoteKey = pdfPreview?.noteKey;
  const curriculumCanvasRef = useRef(null);
  const curriculumNoteLoadedRef = useRef(false);
  const curriculumNoteTimerRef = useRef(0);
  const [isTablet, setIsTablet] = useState(() => (
    typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth <= 1600
      && (navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches)
  ));
  const [curriculumNoteReady, setCurriculumNoteReady] = useState(false);

  const worksheet = useWorksheetPdf(pdfPreview?.raw || '');

  useEffect(() => {
    const updateTablet = () => setIsTablet(
      window.innerWidth >= 768 && window.innerWidth <= 1600
      && (navigator.maxTouchPoints > 0 || window.matchMedia('(pointer: coarse)').matches),
    );
    window.addEventListener('resize', updateTablet);
    return () => window.removeEventListener('resize', updateTablet);
  }, []);

  useEffect(() => {
    if (!curriculumNoteKey || !isTablet) return undefined;
    let cancelled = false;
    curriculumNoteLoadedRef.current = false;
    setCurriculumNoteReady(false);
    requestPersistentStorage();
    loadCurriculumNote(curriculumNoteKey).then((data) => {
      if (cancelled) return;
      if (data) curriculumCanvasRef.current?.loadPagesData(data);
      else curriculumCanvasRef.current?.clear();
      curriculumNoteLoadedRef.current = true;
      setCurriculumNoteReady(true);
    });
    return () => {
      cancelled = true;
      window.clearTimeout(curriculumNoteTimerRef.current);
    };
  }, [curriculumNoteKey, isTablet]);

  const saveCurriculumNoteNow = useCallback(() => {
    window.clearTimeout(curriculumNoteTimerRef.current);
    if (!curriculumNoteLoadedRef.current || !curriculumNoteKey) return Promise.resolve(false);
    const data = curriculumCanvasRef.current?.getPagesData();
    return data ? saveCurriculumNote(curriculumNoteKey, data) : Promise.resolve(false);
  }, [curriculumNoteKey]);

  const handleCurriculumInkChange = useCallback(() => {
    if (!curriculumNoteLoadedRef.current || !curriculumNoteKey) return;
    window.clearTimeout(curriculumNoteTimerRef.current);
    const key = curriculumNoteKey;
    curriculumNoteTimerRef.current = window.setTimeout(() => {
      const data = curriculumCanvasRef.current?.getPagesData();
      if (data) saveCurriculumNote(key, data);
    }, 800);
  }, [curriculumNoteKey]);


  const normalizeYearLabel = (value) => {
    const n = parseInt(String(value || '').replace(/\D/g, ''), 10);
    if (Number.isFinite(n) && n > 0) return `Year ${n}`;
    return String(value || '').trim();
  };
  const rawYears = Array.isArray(profile?.assignedYear) ? profile.assignedYear : [profile?.assignedYear || 'Year 3'];
  const years = rawYears.map(normalizeYearLabel).filter(Boolean);
  const courses = Array.isArray(profile?.assignedCourse) ? profile.assignedCourse : [profile?.assignedCourse || 'Advanced'];
  const assignedChapterIds = Array.isArray(profile?.assignedChapters) ? profile.assignedChapters : [];

  // A student can be assigned several years (e.g. Year 7 + Year 11 + Year 12)
  // and several courses. Each (year, course) pair that has curriculum is a
  // "track" the student can switch between. Year 7-10 curriculum is a flat
  // chapter array (one track per year); Year 11/12 is keyed by course, and a
  // course only exists under some years (Extension 2 is Year-12-only).
  // Previously the page silently picked ONE year and had only course tabs, so
  // any other assigned year was unreachable (2026-09-29: Year 7 added to a
  // Year 11/12 student never appeared).
  const tracks = useMemo(() => {
    const yearNum = (y) => parseInt(String(y).replace(/\D/g, ''), 10) || 0;
    const all = [];
    [...new Set(years)].sort((a, b) => yearNum(a) - yearNum(b)).forEach((y) => {
      const data = CURRICULUM_DATA[y];
      if (data && !Array.isArray(data)) {
        courses.filter((c) => data[c]).forEach((c) => all.push({ key: `${y}|${c}`, year: y, course: c, chapters: data[c] }));
      } else {
        all.push({ key: y, year: y, course: null, chapters: Array.isArray(data) ? data : [] });
      }
    });
    // Once the teacher has assigned chapters, a track with none of them would
    // render entirely locked (e.g. a stale plain "9" left in assignedYear next
    // to "Year 10" — 2026-09-28 thiery incident) — hide it.
    const withAssigned = all.filter((t) => t.chapters.some((c) => assignedChapterIds.includes(c.id)));
    const visible = assignedChapterIds.length && withAssigned.length ? withAssigned : all;
    if (visible.length === 0) return [{ key: years[0] || 'Year 3', year: years[0] || 'Year 3', course: null, chapters: [] }];
    return visible;
  }, [profile?.assignedYear, profile?.assignedCourse, profile?.assignedChapters]); // eslint-disable-line react-hooks/exhaustive-deps

  const [selectedTrackKey, setSelectedTrackKey] = useState(null);
  // Tabs are shown in year order, but the initial tab follows the teacher's
  // assignedYear order (the student's main year is usually listed first).
  const defaultTrack = years.map((y) => tracks.find((t) => t.year === y)).find(Boolean) || tracks[0];
  const activeTrack = tracks.find((t) => t.key === selectedTrackKey) || defaultTrack;
  const year = activeTrack.year;
  const activeCourse = activeTrack.course || courses[0] || 'Advanced';
  const course = activeCourse;
  const sameYearTracks = tracks.every((t) => t.year === tracks[0].year);
  const trackLabel = (t) => (t.course ? (sameYearTracks ? t.course : `${t.year} · ${t.course}`) : t.year);

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
    const docId = isSenior ? `${year.replace(' ', '_')}_${activeCourse}` : year.replace(' ', '_');

    let cancelled = false;
    const cacheKey = `curriculum-doc:v1:${docId}`;
    const cached = localCache.get(cacheKey);
    if (Array.isArray(cached?.chapters) && cached.chapters.length > 0) {
      setCurriculum(normalizeCurriculumTopics(cached.chapters));
      setLoading(false);
    }

    const resolveFallbackCurriculum = () => {
      let data = CURRICULUM_DATA[year] || CURRICULUM_DATA[normalizeYearLabel(year)] || [];
      if (!Array.isArray(data)) data = data[course] || Object.values(data)[0] || [];
      return normalizeCurriculumTopics(data);
    };

    const loadCurriculum = async () => {
      try {
        const metaSnap = await getDoc(doc(db, 'sync_meta', 'curriculum'));
        const remoteVersion = Number(metaSnap.data()?.version || metaSnap.data()?.updatedAt?.toMillis?.() || 0);
        if (cached?.chapters?.length > 0 && cached?.version === remoteVersion && remoteVersion > 0) {
          // Curriculum unchanged. Question content freshness is no longer
          // eagerly checked here — each chapter/topic now self-validates
          // against its own question_index entry the moment it's opened
          // (chapterQuestionsCache), so there's nothing to pre-invalidate.
          return;
        }
        const snap = await getDoc(doc(db, 'curriculum', docId));
        if (cancelled) return;
        if (snap.exists() && snap.data().chapters?.length > 0) {
          const chapters = normalizeCurriculumTopics(snap.data().chapters);
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
  }, [year, activeSubject, activeCourse]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Load per-topic progress from localStorage (no Firestore read) ───────
  const scanProgress = scanTopicProgress;

  useEffect(() => {
    if (!user?.uid) return;
    setProgress(scanProgress(user.uid));
    const onUpdate = () => setProgress(scanProgress(user.uid));
    window.addEventListener('sapere:progress-updated', onUpdate);
    return () => window.removeEventListener('sapere:progress-updated', onUpdate);
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

  // ── Derive each chapter's state and lesson count ──────────────────────
  const nodes = useMemo(() => {
    const teacherAssigned = profile?.assignedChapters || [];
    const teacherCompleted = profile?.completedChapters || [];
    const noAssignments = teacherAssigned.length === 0 && teacherCompleted.length === 0;

    return curriculum.map((chapter, idx) => {
      const topicMap = progress[chapter.id] || {};
      const topics = Array.isArray(chapter.topics) ? chapter.topics : [];
      const lessons = topics.length || chapter.modules || 12;

      const isTeacherCompleted = teacherCompleted.includes(chapter.id);
      const isTeacherAssigned = teacherAssigned.includes(chapter.id);

      // Mastered when teacher marked complete OR every topic is at 100%
      const allTopicsDone = topics.length > 0 && topics.every((t) => (topicMap[t.id] || 0) === 100);
      const isDone = isTeacherCompleted || allTopicsDone;

      // Overall chapter progress = average of topic progresses
      const topicPcts = topics.map((t) => topicMap[t.id] || 0);
      const pct = isTeacherCompleted ? 100 : topics.length > 0
        ? Math.round(topicPcts.reduce((s, p) => s + p, 0) / topics.length)
        : 0;

      const isCurrent = !isDone && (isTeacherAssigned || (noAssignments && idx === 0));
      const isNext = !isDone && !isCurrent && (isTeacherAssigned || (noAssignments && idx < 3));

      return {
        ...chapter, idx, lessons, pct,
        state: isDone ? 'done' : isCurrent ? 'current' : isNext ? 'next' : 'locked',
      };
    });
  }, [curriculum, progress, profile?.assignedChapters, profile?.completedChapters]);

  const overview = useMemo(() => {
    const total = nodes.length || 1;
    const doneCount = nodes.filter((n) => n.state === 'done').length;
    const totalLessons = nodes.reduce((s, n) => s + n.lessons, 0);
    const started = nodes.filter((n) => n.pct > 0);
    const mastery = started.length
      ? Math.round(started.reduce((s, n) => s + n.pct, 0) / started.length)
      : 0;
    return {
      total, doneCount, totalLessons, mastery,
      termPct: Math.round((doneCount / total) * 100),
    };
  }, [nodes]);

  useEffect(() => { setLastStudy(loadLastStudy(user?.uid)); }, [user?.uid]);

  // Remember the chapter / topic as the student opens them.
  useEffect(() => {
    if (!user?.uid || !selectedChapter) return;
    setLastStudy(saveLastStudy(user.uid, {
      trackKey: activeTrack.key,
      chapterId: selectedChapter.chapter.id,
      chapterTitle: selectedChapter.chapter.title,
    }));
  }, [user?.uid, activeTrack.key, selectedChapter]);

  useEffect(() => {
    if (!user?.uid || !selectedTopic) return;
    setLastStudy(saveLastStudy(user.uid, {
      trackKey: activeTrack.key,
      chapterId: selectedTopic.chapter.id,
      chapterTitle: selectedTopic.chapter.title,
      topicId: selectedTopic.topic.id,
      topicCode: selectedTopic.topic.code || '',
      topicTitle: selectedTopic.topic.title || '',
    }));
  }, [user?.uid, activeTrack.key, selectedTopic]);

  // Open the remembered chapter once its chapters are on screen (a track switch loads them first).
  const tryResume = useCallback(() => {
    const pending = pendingResumeRef.current;
    if (!pending || loading) return;
    const node = nodes.find((n) => n.id === pending.chapterId);
    if (!node) return;
    pendingResumeRef.current = null;
    if (node.state !== 'locked') setSelectedChapter({ chapter: node, state: node.state });
  }, [nodes, loading]);
  useEffect(() => { tryResume(); }, [tryResume]);

  const resumeTarget = lastStudy && tracks.some((t) => t.key === lastStudy.trackKey) ? lastStudy : null;
  const canContinue = Boolean(resumeTarget) && (
    resumeTarget.trackKey !== activeTrack.key
    || nodes.some((n) => n.id === resumeTarget.chapterId && n.state !== 'locked')
  );
  const continueStudying = () => {
    if (!resumeTarget) return;
    const pending = { chapterId: resumeTarget.chapterId };
    pendingResumeRef.current = pending;
    window.setTimeout(() => { if (pendingResumeRef.current === pending) pendingResumeRef.current = null; }, 6000);
    if (resumeTarget.trackKey !== activeTrack.key) {
      setSelectedTrackKey(resumeTarget.trackKey);
      setSelectedChapter(null);
      setSelectedTopic(null);
    } else {
      tryResume();
    }
  };

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
          lastTopicId={lastStudy && lastStudy.chapterId === selectedChapter.chapter.id ? lastStudy.topicId : ''}
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

  // Course accent colours
  const COURSE_ACCENTS = {
    'Advanced':    { active: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', inactive: 'transparent', inactiveColor: '#8b7aa7' },
    'Extension 1': { active: 'linear-gradient(135deg, #0ea5e9, #6366f1)', color: '#fff', inactive: 'transparent', inactiveColor: '#8b7aa7' },
    'Extension 2': { active: 'linear-gradient(135deg, #f59e0b, #ef4444)', color: '#fff', inactive: 'transparent', inactiveColor: '#8b7aa7' },
    'Standard':    { active: 'linear-gradient(135deg, #10b981, #0ea5e9)', color: '#fff', inactive: 'transparent', inactiveColor: '#8b7aa7' },
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto' }}>
      {/* Top-left row: year/course track toggle (multi-year or multi-course students) + subject switch */}
      {(tracks.length > 1 || availableSubjects.length > 1) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
          {tracks.length > 1 && (
            <div style={{ display: 'inline-flex', flexWrap: 'wrap', padding: '4px', borderRadius: '14px', background: 'rgba(99,102,241,0.08)', gap: '4px', border: '1px solid rgba(99,102,241,0.15)' }}>
              {tracks.map((t) => {
                const c = trackLabel(t);
                const isActive = activeTrack.key === t.key;
                const accent = COURSE_ACCENTS[t.course] || COURSE_ACCENTS['Advanced'];
                return (
                  <button
                    key={t.key}
                    onClick={() => { setSelectedTrackKey(t.key); setSelectedChapter(null); setSelectedTopic(null); }}
                    style={{
                      padding: '8px 18px', borderRadius: '10px', border: 'none', cursor: 'pointer',
                      fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.01em',
                      background: isActive ? accent.active : accent.inactive,
                      color: isActive ? accent.color : accent.inactiveColor,
                      boxShadow: isActive ? '0 2px 12px rgba(99,102,241,0.28)' : 'none',
                      transition: 'all 0.18s ease',
                    }}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          )}

          {/* Subject switch — only when the student studies more than one subject */}
          {availableSubjects.length > 1 && (
            <div style={{ display: 'inline-flex', padding: '4px', borderRadius: '12px', background: 'rgba(167,139,250,0.12)', gap: '4px' }}>
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
        </div>
      )}

      {/* Continue studying (remembered on this device) + Knowledge Graph button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '10px' }}>
        {canContinue && (
          <button
            type="button"
            onClick={continueStudying}
            title={`Continue where you left off: ${resumeTarget.chapterTitle}${resumeTarget.topicCode ? ` · ${resumeTarget.topicCode}` : ''}`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px', maxWidth: '100%',
              padding: '8px 16px', borderRadius: '12px', cursor: 'pointer',
              background: '#fff', color: '#5b21b6', border: '1.5px solid #c4b5fd',
              fontSize: '0.82rem', fontWeight: 800,
              boxShadow: '0 2px 10px rgba(124,58,237,0.12)',
            }}
          >
            <Play size={14} fill="#7c3aed" color="#7c3aed" />
            <span>Continue studying</span>
            <span style={{ fontWeight: 700, color: '#8b7aa7', fontSize: '0.74rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {shortChapterLabel(resumeTarget.chapterTitle)}{resumeTarget.topicCode ? ` · ${resumeTarget.topicCode}` : ''}
            </span>
          </button>
        )}
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
          Journey Map
        </button>
      </div>

      {/* 3D Graph overlay — portal to escape Framer Motion stacking context */}
      {showGraph3D && createPortal(
        <CurriculumGraph3D onClose={() => setShowGraph3D(false)} profile={profile} />,
        document.body
      )}

      {/* Overview pills */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', marginBottom: '22px' }}>
        {pill('Term progress', `${overview.termPct}%`, `${overview.doneCount} of ${overview.total} chapters complete`, { lead: true, icon: <GraduationCap size={20} /> })}
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
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.78rem', fontWeight: 700, color: '#94a3b8' }}>
                    <BookOpen size={13} /> {n.lessons} lessons
                  </span>
                  {n.state === 'current' && (
                    <span style={{ marginLeft: 'auto', fontSize: '0.78rem', fontWeight: 900, color: s.accent }}>
                      {n.pct}% complete
                    </span>
                  )}
                </div>

                {/* Per-topic progress chips */}
                {n.state !== 'locked' && Array.isArray(n.topics) && n.topics.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '10px' }}>
                    {n.topics.map((t) => {
                      const pct = (progress[n.id] || {})[t.id] || 0;
                      const done = pct === 100;
                      const started = pct > 0 && pct < 100;
                      const chipColor = done ? '#10b981' : started ? '#f59e0b' : '#e2e8f0';
                      const textColor = done ? '#fff' : started ? '#fff' : '#94a3b8';
                      const pdfUrl = toDrivePreviewUrl(t.homeworkPdfUrl);
                      const chipStyle = {
                        display: 'inline-flex', alignItems: 'center', gap: '3px',
                        padding: '2px 7px', borderRadius: '999px',
                        background: chipColor, color: textColor,
                        fontSize: '0.65rem', fontWeight: 800,
                      };
                      if (pdfUrl) {
                        return (
                          <button
                            key={t.id}
                            type="button"
                            aria-label={`Open worksheet: ${t.code ? `${t.code} · ` : ''}${t.title || ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setPdfPreview({
                                raw: t.homeworkPdfUrl,
                                url: pdfUrl,
                                openUrl: toDriveOpenUrl(t.homeworkPdfUrl),
                                title: `${t.code ? `${t.code} · ` : ''}${t.title || ''}`,
                                noteKey: `${activeTrack.key}:${t.id}:${t.homeworkPdfUrl}`,
                              });
                            }}
                            style={{
                              ...chipStyle,
                              border: '1.5px solid #8b5cf6', cursor: 'pointer',
                              color: done || started ? textColor : '#6d28d9',
                              background: done || started ? chipColor : '#f5f3ff',
                            }}
                          >
                            <FileText size={10} />
                            {t.code || t.id}
                            {pct > 0 && !done && <span style={{ opacity: 0.9 }}>{pct}%</span>}
                          </button>
                        );
                      }
                      return (
                        <span key={t.id} style={chipStyle}>
                          {t.code || t.id}
                          {pct > 0 && !done && <span style={{ opacity: 0.9 }}>{pct}%</span>}
                        </span>
                      );
                    })}
                  </div>
                )}

                {/* Cheat sheet mini-cards */}
                {n.state !== 'locked' && getChapterCheatSheets(n).length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '10px' }}>
                    {getChapterCheatSheets(n).map((sheet, i) => (
                      <div
                        key={sheet.id || i}
                        onClick={(e) => { e.stopPropagation(); setCheatSheetPreview({ url: sheet.url, title: sheet.label || n.title }); }}
                        title={sheet.label ? `Open ${sheet.label}` : 'Open cheat sheet'}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '6px',
                          padding: '4px 10px 4px 4px',
                          background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                          border: '1px solid #fbbf24', borderRadius: '999px',
                          cursor: 'pointer', maxWidth: '100%'
                        }}
                      >
                        <img
                          src={toThumbnailUrl(sheet.url, 40)}
                          alt=""
                          loading="lazy"
                          style={{ width: '22px', height: '22px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0, background: '#fde68a' }}
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#92400e', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {sheet.label || 'Cheat Sheet'}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

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

      <AnimatePresence>
        {cheatSheetPreview && (
          <CheatSheetLightbox preview={cheatSheetPreview} onClose={() => setCheatSheetPreview(null)} />
        )}
      </AnimatePresence>

      {pdfPreview && createPortal(
        <div
          onClick={() => { saveCurriculumNoteNow(); setPdfPreview(null); }}
          style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(15,23,42,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: isTablet ? 'min(1500px, 100%)' : 'min(960px, 100%)', height: isTablet ? '94vh' : 'min(90vh, 1100px)', background: '#fff', borderRadius: 20, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 24px 60px rgba(15,23,42,0.35)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', borderBottom: '1px solid #e2e8f0' }}>
              <FileText size={18} color="#7c3aed" />
              <div style={{ flex: 1, minWidth: 0, fontWeight: 800, color: '#1e1b4b', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{pdfPreview.title || 'Worksheet'}</div>
              <a href={pdfPreview.openUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '0.8rem', fontWeight: 700, color: '#6d28d9', textDecoration: 'none' }}>
                <ExternalLink size={14} /> Open in Google Drive
              </a>
              <button type="button" aria-label="Close" onClick={() => { saveCurriculumNoteNow(); setPdfPreview(null); }} style={{ border: 0, background: 'transparent', cursor: 'pointer', padding: 4, display: 'flex', color: '#64748b' }}>
                <X size={20} />
              </button>
            </div>
            {isTablet ? (
              <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)' }}>
                <div style={{ minWidth: 0, minHeight: 0, overflow: 'hidden', display: 'flex', position: 'relative', borderRight: '1px solid #e2e8f0' }}>
                  <PdfViewer src={worksheet.src} loading={worksheet.loading} fallback={worksheet.fallback} storageKey={worksheet.fileId} style={{ flex: 1, minWidth: 0, minHeight: 0, width: '100%', maxWidth: '100%' }} />
                </div>
                <section aria-label="Personal working notes" style={{ minWidth: 0, minHeight: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', background: '#f8fafc' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', borderBottom: '1px solid #e2e8f0', background: '#fff', flexShrink: 0 }}>
                    <PenLine size={16} color="#7c3aed" />
                    <span style={{ fontWeight: 800, color: '#1e1b4b' }}>My notes</span>
                    <span style={{ marginLeft: 'auto', fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                      {curriculumNoteReady ? 'Saved on this device' : 'Loading notes…'}
                    </span>
                  </div>
                  <div style={{ flex: 1, minHeight: 0, display: 'flex', pointerEvents: curriculumNoteReady ? 'auto' : 'none' }}>
                    <WorkingOutCanvas ref={curriculumCanvasRef} isSubmitted={false} onInkChange={handleCurriculumInkChange} />
                  </div>
                </section>
              </div>
            ) : (
              <PdfViewer src={worksheet.src} loading={worksheet.loading} fallback={worksheet.fallback} storageKey={worksheet.fileId} style={{ flex: 1, minHeight: 0 }} />
            )}
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
};

export default LearningPath;
