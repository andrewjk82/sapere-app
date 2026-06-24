import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, CheckCircle2, ChevronRight, 
  Layers, GraduationCap, Star, Clock, 
  Search, BookText, Award, Lock, Plus, Edit2, Trash2, Save, X,
  Target, TrendingUp
} from 'lucide-react';
import { auth, db } from '../firebase/config';
import { doc, onSnapshot, collection, updateDoc, setDoc, deleteDoc, getDocs, getDoc, query, where, getCountFromServer, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useProfile } from '../context/ProfileContext';
import { useToast } from '../context/ToastContext';
import { hasLesson, getLesson } from '../lessons/registry';
import LessonPlayer from './lessons/LessonPlayer';
import { migrateCurriculumToFirestore } from '../constants/migrateCurriculum';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { ALGEBRA_QUESTIONS_Y11A } from '../constants/seedQuestions.js';
import { SURDS_QUESTIONS_Y11A } from '../constants/seedSurdsQuestions.js';
import { WHOLE_NUMBER_QUESTIONS_Y6 } from '../constants/seedYear6WholeNumberQuestions.js';
import { FRACTION_QUESTIONS_Y6 } from '../constants/seedYear6FractionsQuestions.js';
import { CH5_QUESTIONS_Y11A, Y11_CH5_QUESTIONS } from '../constants/seedYear11Ch5Questions.js';
import { Y9_CH2A_QUESTIONS } from '../constants/seedSurdsQuestions.js';
import { Y9_CH3A_QUESTIONS } from '../constants/seedYear9Ch3Questions.js';
import { Y9_CH4A_QUESTIONS } from '../constants/seedYear9Ch4Questions.js';
import { Y9_CH5A_QUESTIONS } from '../constants/seedYear9Ch5Questions.js';
import { Y9_CH6A_QUESTIONS } from '../constants/seedYear9Ch6Questions.js';
import { Y9_CH7A_QUESTIONS } from '../constants/seedYear9Ch7Questions.js';
import { Y9_CH8A_QUESTIONS } from '../constants/seedYear9Ch8Questions.js';
import QuestionBankModal from './QuestionBankModal';
import QuestionBankPage from './QuestionBankPage';
import LearningPath from './LearningPath';
import HscJourney from './HscJourney';
import HscTypePractice from './hsc/HscTypePractice';
import { seedChapterQuestions } from '../services/chapterSeeder';
import { readAggregatedCounts, writeAggregatedCounts } from '../services/questionCountsService';

// ── Chapter seed registry ──────────────────────────────────────────────────
// Single source of truth for bulk question seeding. To add a new chapter:
// create its seed file, import the array above, and add ONE entry here — a
const getCourseFromEntry = (entry) => {
  if (entry.course) return entry.course;
  const id = (entry.chapterId || '').toLowerCase();
  if (id.startsWith('y11a-') || id.startsWith('y12a-')) return 'Advanced';
  if (id.startsWith('y11e1-') || id.startsWith('y12e1-') || id.includes('ext1') || id.includes('ext_1')) return 'Extension 1';
  if (id.startsWith('y11s-') || id.startsWith('y12s-')) return 'Standard';
  if (id.startsWith('y12e2-') || id.includes('ext2') || id.includes('ext_2')) return 'Extension 2';
  return 'Core';
};

import {
  fetchHscResultsIncremental,
  loadCachedHscResults,
} from '../services/hscResultsService';
import { localCache } from '../services/localCacheService';
import './curriculum.css';
import './hsc-chart.css';


const YEARS = [...Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`), 'Past Paper'];
const PAST_PAPER_COURSES = ['Standard', 'Advanced', 'Extension 1', 'Extension 2'];
// Bump the cache key suffix to invalidate every client's stored counts once.
// Pre-existing caches were written before the seeder & delete paths bumped
// sync_meta, so chapter cards could show pre-seed numbers indefinitely even
// after thousands of questions were added. Forcing one re-fetch resyncs all
// existing installs.
const QUESTION_COUNT_CACHE_KEY = 'sapere:question-counts:v7';
const QUESTION_COUNT_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const CURRICULUM_CACHE_KEY = 'curriculum-records:v1';
const ADMIN_TOOL_COUNT_IDS = [
  'y6-wn',
  'y11a-1', 'y11-1', 'y11a-2', 'y11-2', 'y11a-3', 'y11-3', 'y11a-4', 'y11a-5', 'y11a-6', 
  'y10-1', 'y10-3', 'y10-4', 
  'y9-1', 
  'y8-1', 
  'y7-1', 'y7-2', 'y7-3', 'y7-4', 'y7-5', 'y7-5a', 'y7-6', 'y7-6a', 'y7-7', 'y7-7a', 'y7-8', 'y7-8a', 'y7-10a', 'y7-11a', 'y7-12a', 'y7-13a', 'y7-14a', 'y7-15a', 'y7-16a', 'y7-17a', 'y7-18a', 'y7-19a', 'y7-20a'
];

const loadCachedQuestionCounts = () => {
  try {
    if (typeof window === 'undefined') return { counts: {}, savedAt: 0, version: 0 };
    const parsed = JSON.parse(window.localStorage.getItem(QUESTION_COUNT_CACHE_KEY) || '{}');
    if (parsed && typeof parsed === 'object' && parsed.counts) return parsed;
    return { counts: parsed || {}, savedAt: 0, version: 0 };
  } catch {
    return { counts: {}, savedAt: 0, version: 0 };
  }
};

const saveCachedQuestionCounts = (counts, version = 0) => {
  try {
    window.localStorage.setItem(QUESTION_COUNT_CACHE_KEY, JSON.stringify({ counts, savedAt: Date.now(), version }));
  } catch {
    // Cache only; ignore private-mode/quota failures.
  }
};

const Curriculum = () => {
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();
  // Heavy admin-only seed data + registry are code-split into curriculumSeeds.js
  // and loaded ONLY for admins, so the student Curriculum chunk stays small.
  const [seedRegistry, setSeedRegistry] = useState([]);
  useEffect(() => {
    if (!isAdmin) return undefined;
    let cancelled = false;
    import('../constants/curriculumSeeds')
      .then((mod) => { if (!cancelled) setSeedRegistry(mod.CHAPTER_SEED_REGISTRY || []); })
      .catch((e) => console.warn('Seed registry load failed:', e));
    return () => { cancelled = true; };
  }, [isAdmin]);
  const [selectedYear, setSelectedYear] = useState('Year 11');
  const [selectedCourse, setSelectedCourse] = useState('Advanced');
  const [searchQuery, setSearchQuery] = useState('');
  // Profile comes from the single shared ProfileContext listener — no second
  // onSnapshot on the same users/{uid} doc (was billed an extra time).
  const { profile } = useProfile();
  const [loading, setLoading] = useState(true);
  const [curriculumRecords, setCurriculumRecords] = useState([]);
  const [isMigrating, setIsMigrating] = useState(false);
  const [editingChapter, setEditingChapter] = useState(null); // { mode: 'add'|'edit', chapter: {} }
  const [editingSubtopicIndex, setEditingSubtopicIndex] = useState(-1);
  const [subtopicForm, setSubtopicForm] = useState({ code: '', title: '', page: '' });

  const closeEditingChapterModal = () => {
    setEditingChapter(null);
    setEditingSubtopicIndex(-1);
    setSubtopicForm({ code: '', title: '', page: '' });
  };
  // Chapter card click navigates to a topics list page (not a modal); choosing
  // a topic opens the student-style question bank page for that topic.
  const [selectedChapterForQuestions, setSelectedChapterForQuestions] = useState(null);
  const [selectedTopicForBank, setSelectedTopicForBank] = useState(null);
  const [previewLesson, setPreviewLesson] = useState(null);
  const [questionCounts, setQuestionCounts] = useState({});
  // Live "questions changed" signal. Any add/delete path bumps
  // sync_meta/questions.version; this realtime listener mirrors that version so
  // the count-fetch effect re-runs automatically — counts update without a
  // page refresh whenever a question is added or removed anywhere.
  const [questionsSyncVersion, setQuestionsSyncVersion] = useState(0);
  const [showAdminTools, setShowAdminTools] = useState(false);
  const [adminActiveTab, setAdminActiveTab] = useState('y11_12');
  const [expandedSeedYears, setExpandedSeedYears] = useState({});
  const [selectedSeedCourse, setSelectedSeedCourse] = useState({ 'Year 11': 'Advanced', 'Year 12': 'Advanced' });
  const [seedSubTab, setSeedSubTab] = useState('chapters');
  const [seedSearch, setSeedSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [hscRecords, setHscRecords] = useState([]);
  const [hscModalOpen, setHscModalOpen] = useState(false);

  // Past Paper question types (loaded once when Past Paper tab is selected)
  const [questionTypes, setQuestionTypes] = useState([]);
  const [questionTypesLoading, setQuestionTypesLoading] = useState(false);
  // For Past Paper type → questions drill-down
  const [selectedPastPaperType, setSelectedPastPaperType] = useState(null);
  // Student: show Practice by Type page (via HSC journey button)
  const [showPracticeByType, setShowPracticeByType] = useState(false);

  // Fetch Curriculum from Firestore
  useEffect(() => {
    if (!isAdmin) {
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    let cancelled = false;
    const cached = localCache.get(CURRICULUM_CACHE_KEY);
    if (Array.isArray(cached?.records)) {
      setCurriculumRecords(cached.records);
      setLoading(false);
    }

    const fetchCurriculumIfChanged = async () => {
      try {
        const metaSnap = await getDoc(doc(db, 'sync_meta', 'curriculum'));
        const remoteVersion = Number(metaSnap.data()?.version || metaSnap.data()?.updatedAt?.toMillis?.() || 0);
        if (cached?.records && cached?.version === remoteVersion && remoteVersion > 0) return;
        const snap = await getDocs(collection(db, 'curriculum'));
        if (cancelled) return;
        const records = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        const version = remoteVersion || Date.now();
        if (!remoteVersion) {
          setDoc(doc(db, 'sync_meta', 'curriculum'), {
            version,
            updatedAt: serverTimestamp(),
          }, { merge: true }).catch(() => {});
        }
        setCurriculumRecords(records);
        localCache.set(CURRICULUM_CACHE_KEY, {
          version,
          savedAt: Date.now(),
          records,
        });
      } catch (err) {
        console.error("Firestore error in Curriculum:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchCurriculumIfChanged();
    return () => {
      cancelled = true;
    };
  }, [isAdmin]);

  const handleUpdateChapters = async (newChapters) => {
    const docId = courses 
      ? `${selectedYear.replace(' ', '_')}_${selectedCourse}`
      : selectedYear.replace(' ', '_');
    
    const docRef = doc(db, 'curriculum', docId);
    try {
      await setDoc(docRef, {
        year: selectedYear,
        course: selectedCourse || null,
        chapters: newChapters,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      await setDoc(doc(db, 'sync_meta', 'curriculum'), {
        version: Date.now(),
        updatedAt: serverTimestamp(),
      }, { merge: true });
      localCache.remove(CURRICULUM_CACHE_KEY);
      
      // Update local state directly to reflect changes in UI immediately
      setCurriculumRecords(prev => {
        const index = prev.findIndex(r => r.id === docId);
        if (index >= 0) {
          const updated = [...prev];
          updated[index] = { ...updated[index], chapters: newChapters, updatedAt: new Date().toISOString() };
          return updated;
        } else {
          return [...prev, { id: docId, year: selectedYear, course: selectedCourse || null, chapters: newChapters, updatedAt: new Date().toISOString() }];
        }
      });
    } catch (err) {
      console.error("Error updating curriculum:", err);
      showToast("Failed to save changes.", 'error');
    }
  };

  const handleDeleteChapter = async (chapterId) => {
    if (!window.confirm("Are you sure you want to delete this chapter?")) return;
    const base = currentRecord?.chapters ? [...currentRecord.chapters] : [...displayData];
    const newChapters = base.filter(c => c.id !== chapterId);
    await handleUpdateChapters(newChapters);
  };

  const handleAddOrUpdateSubtopic = (e) => {
    e.preventDefault();
    if (!subtopicForm.code || !subtopicForm.title) {
      showToast("Please enter both Code and Title.", "warning");
      return;
    }

    const currentTopics = [...(editingChapter.chapter.topics || [])];
    const newSubtopic = {
      id: subtopicForm.id || `${editingChapter.chapter.id}-${subtopicForm.code.toLowerCase()}`,
      code: subtopicForm.code,
      title: subtopicForm.title,
      page: subtopicForm.page ? parseInt(subtopicForm.page) : ''
    };

    if (editingSubtopicIndex >= 0) {
      currentTopics[editingSubtopicIndex] = newSubtopic;
    } else {
      currentTopics.push(newSubtopic);
    }

    setEditingChapter({
      ...editingChapter,
      chapter: {
        ...editingChapter.chapter,
        topics: currentTopics
      }
    });

    setSubtopicForm({ code: '', title: '', page: '' });
    setEditingSubtopicIndex(-1);
  };

  const handleEditSubtopicClick = (index, subtopic) => {
    setEditingSubtopicIndex(index);
    setSubtopicForm({
      id: subtopic.id,
      code: subtopic.code,
      title: subtopic.title,
      page: subtopic.page || ''
    });
  };

  const handleDeleteSubtopic = (index) => {
    const currentTopics = [...(editingChapter.chapter.topics || [])];
    currentTopics.splice(index, 1);
    setEditingChapter({
      ...editingChapter,
      chapter: {
        ...editingChapter.chapter,
        topics: currentTopics
      }
    });
    
    if (editingSubtopicIndex === index) {
      setSubtopicForm({ code: '', title: '', page: '' });
      setEditingSubtopicIndex(-1);
    } else if (editingSubtopicIndex > index) {
      setEditingSubtopicIndex(editingSubtopicIndex - 1);
    }
  };

  const handleSaveChapter = async (e) => {
    e.preventDefault();
    let chapterData = { ...editingChapter.chapter };

    // UX FIX: If user typed in the "Add Subtopic" form but forgot to click [+], 
    // we automatically append it to the topics array before saving!
    if (subtopicForm.code && subtopicForm.title) {
      const currentTopics = [...(chapterData.topics || [])];
      const newSubtopic = {
        id: subtopicForm.id || `${chapterData.id || ''}-${subtopicForm.code.toLowerCase()}`,
        code: subtopicForm.code,
        title: subtopicForm.title,
        page: subtopicForm.page ? parseInt(subtopicForm.page) : ''
      };
      if (editingSubtopicIndex >= 0) {
        currentTopics[editingSubtopicIndex] = newSubtopic;
      } else {
        currentTopics.push(newSubtopic);
      }
      chapterData.topics = currentTopics;
      setSubtopicForm({ code: '', title: '', page: '' });
      setEditingSubtopicIndex(-1);
    }

    // Use currentRecord if it exists; otherwise fall back to displayData so
    // CURRICULUM_DATA chapters are preserved when no Firestore record exists yet.
    let newChapters = currentRecord?.chapters
      ? [...currentRecord.chapters]
      : [...displayData];

    if (editingChapter.mode === 'add') {
      if (!chapterData.title?.trim()) {
        showToast("Please enter a chapter title.", "warning");
        return;
      }
      const newId = `${selectedYear.toLowerCase().replace(' ', '')}-${Date.now()}`;
      newChapters.push({ ...chapterData, id: newId });
    } else {
      const idx = newChapters.findIndex(c => c.id === chapterData.id);
      if (idx >= 0) {
        newChapters[idx] = chapterData;
      } else {
        newChapters.push(chapterData); // fallback: chapter wasn't in list yet
      }
    }

    await handleUpdateChapters(newChapters);
    closeEditingChapterModal();
  };

  const handleSeedAlgebraQuestions = async () => {
    if (!window.confirm("This will ADD missing seed questions for Chapter 1 (1A - 1F) without deleting existing ones. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp, setDoc } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      // 1. Fetch existing question IDs from Firestore — we will SKIP any seed question
      //    whose computed ID already exists, so manual edits are never overwritten.
      const q = query(collRef, where('chapterId', '==', 'y11a-1'));
      const snap = await getDocs(q);
      const existingIds = new Set(snap.docs.map(d => d.id));

      // 2. Load the seed questions from constants dynamically
      const { Y11_CH1A_QUESTIONS } = await import('../constants/seedYear11Ch1AQuestions.js');
      const { Y11_CH1B_QUESTIONS } = await import('../constants/seedYear11Ch1BQuestions.js');
      const { Y11_CH1C_QUESTIONS } = await import('../constants/seedYear11Ch1CQuestions.js');
      const { Y11_CH1D_QUESTIONS } = await import('../constants/seedYear11Ch1DQuestions.js');
      const { Y11_CH1E_QUESTIONS } = await import('../constants/seedYear11Ch1EQuestions.js');
      const { Y11_CH1F_QUESTIONS } = await import('../constants/seedYear11Ch1FQuestions.js');

      const MANUAL_GRADE_KEYWORDS = /(draw|sketch|construct|show that|prove|justify|explain why)/i;
      const mapSeedQuestion = (raw, chapter) => {
        const isMC = raw.type === 'multiple_choice';
        const questionText = raw.q || raw.question || '';
        const isOpenReview = (raw.requiresManualGrading === true)
          || (raw.type === 'teacher_review' && MANUAL_GRADE_KEYWORDS.test(questionText));

        let options = [];
        let answer = raw.a ?? raw.answer ?? raw.solution ?? '';

        if (isMC) {
          const rawOpts = raw.opts || raw.options || [];
          const correct = raw.a ?? raw.answer ?? raw.solution;
          
          let correctText = '';
          const isIndex = /^[0-9]$/.test(String(correct).trim());
          if (isIndex && rawOpts[parseInt(correct)]) {
            const opt = rawOpts[parseInt(correct)];
            correctText = typeof opt === 'object' && opt !== null ? opt.text : opt;
          } else {
            correctText = String(correct);
          }

          const shuffled = [...rawOpts].sort(() => Math.random() - 0.5);
          const correctIndex = shuffled.findIndex((opt) => {
            const text = typeof opt === 'object' && opt !== null ? opt.text : opt;
            const clean = (s) => String(s).replace(/\\\(|\\\)/g, '').trim();
            return clean(text) === clean(correctText);
          });
          options = shuffled.map((opt) => (
            typeof opt === 'object' && opt !== null
              ? { text: String(opt.text || ''), imageUrl: opt.imageUrl || '' }
              : { text: String(opt), imageUrl: '' }
          ));
          answer = String(correctIndex >= 0 ? correctIndex : 0);
        }

        const resolvedTopicId = raw.topicId || chapter.topicId;
        const resolvedTopicCode = raw.c || raw.topicCode || chapter.topicCode || '';
        const resolvedTopicTitle = raw.t || raw.topicTitle || chapter.topicTitle || '';
        const resolvedChapterId = raw.chapterId || chapter.chapterId;

        const mappedSubQuestions = Array.isArray(raw.subQuestions)
          ? raw.subQuestions.map((sq) => {
              const isSqMC = sq.type === 'multiple_choice';
              let sqOptions = [];
              let sqAnswer = sq.a ?? sq.answer ?? sq.solution ?? '';

              if (isSqMC) {
                const rawOpts = sq.opts || sq.options || [];
                const correct = sq.a ?? sq.answer ?? sq.solution;

                let correctText = '';
                const isIndex = /^[0-9]$/.test(String(correct).trim());
                if (isIndex && rawOpts[parseInt(correct)]) {
                  const opt = rawOpts[parseInt(correct)];
                  correctText = typeof opt === 'object' && opt !== null ? opt.text : opt;
                } else {
                  correctText = String(correct);
                }

                const shuffled = [...rawOpts].sort(() => Math.random() - 0.5);
                const correctIndex = shuffled.findIndex((opt) => {
                  const text = typeof opt === 'object' && opt !== null ? opt.text : opt;
                  const clean = (s) => String(s).replace(/\\\(|\\\)/g, '').trim();
                  return clean(text) === clean(correctText);
                });
                sqOptions = shuffled.map((opt) => (
                  typeof opt === 'object' && opt !== null
                    ? { text: String(opt.text || ''), imageUrl: opt.imageUrl || '' }
                    : { text: String(opt), imageUrl: '' }
                ));
                sqAnswer = String(correctIndex >= 0 ? correctIndex : 0);
              }

              return {
                id: sq.id,
                type: sq.type || 'short_answer',
                question: sq.question || sq.q || '',
                options: sqOptions,
                answer: sqAnswer,
                solutionSteps: Array.isArray(sq.solutionSteps) ? sq.solutionSteps : [],
                graphData: sq.graphData || null,
              };
            })
          : [];

        return {
          chapterId: resolvedChapterId,
          chapterTitle: chapter.chapterTitle,
          topicId: resolvedTopicId,
          topicCode: resolvedTopicCode,
          topicTitle: resolvedTopicTitle,
          year: chapter.year,
          isManual: true,
          title: `${questionText.replace(/\$/g, '').slice(0, 30)}...`,
          question: questionText,
          difficulty: raw.difficulty || 'medium',
          timeLimit: raw.timeLimit || 120,
          type: isMC ? 'multiple_choice' : (raw.type || 'short_answer'),
          requiresManualGrading: isOpenReview,
          options,
          answer,
          hint: raw.h || raw.hint || '',
          solution: raw.s || raw.solution || raw.a || '',
          solutionSteps: Array.isArray(raw.solutionSteps) ? raw.solutionSteps : [],
          questionImage: raw.questionImage || raw.imageUrl || '',
          subQuestions: mappedSubQuestions,
          blanks: Array.isArray(raw.blanks) ? raw.blanks : [],
          graphData: raw.graphData || null,
          examPaper: raw.examPaper || chapter.examPaper || '',
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        };
      };

      const finalQuestions = [];
      Y11_CH1A_QUESTIONS.forEach(q => finalQuestions.push({ ...q, createdAt: serverTimestamp(), updatedAt: serverTimestamp() }));
      
      const ch1bInfo = { chapterId: 'y11a-1', chapterTitle: 'Chapter 1: Algebra review', topicId: 'y11a-1B', topicCode: '1B', topicTitle: 'Factoring', year: 'Year 11' };
      Y11_CH1B_QUESTIONS.forEach(q => finalQuestions.push(mapSeedQuestion(q, ch1bInfo)));

      const ch1cInfo = { chapterId: 'y11a-1', chapterTitle: 'Chapter 1: Algebra review', topicId: 'y11a-1c', topicCode: '1C', topicTitle: 'Algebraic fractions', year: 'Year 11' };
      Y11_CH1C_QUESTIONS.forEach(q => finalQuestions.push(mapSeedQuestion(q, ch1cInfo)));

      const ch1dInfo = { chapterId: 'y11a-1', chapterTitle: 'Chapter 1: Algebra review', topicId: 'y11a-1D', topicCode: '1D', topicTitle: 'Solving quadratic equations', year: 'Year 11' };
      Y11_CH1D_QUESTIONS.forEach(q => finalQuestions.push(mapSeedQuestion(q, ch1dInfo)));

      const ch1eInfo = { chapterId: 'y11a-1', chapterTitle: 'Chapter 1: Algebra review', topicId: 'y11a-1E', topicCode: '1E', topicTitle: 'Solving simultaneous equations', year: 'Year 11' };
      Y11_CH1E_QUESTIONS.forEach(q => finalQuestions.push(mapSeedQuestion(q, ch1eInfo)));

      const ch1fInfo = { chapterId: 'y11a-1', chapterTitle: 'Chapter 1: Algebra review', topicId: 'y11a-1F', topicCode: '1F', topicTitle: 'Revision', year: 'Year 11' };
      Y11_CH1F_QUESTIONS.forEach(q => finalQuestions.push(mapSeedQuestion(q, ch1fInfo)));

      // Helper to compute MD5 hash locally using Web Crypto API or simple function
      // Since MD5 import in browser can be heavy, let's compute MD5 with a lightweight local JS function
      const getMD5 = (str) => {
        let k = [], i = 0;
        for (; i < 64; ) k[i] = Math.sin(++i) * 4294967296 | 0;
        let md5cycle = function(x, k) {
          let a = x[0], b = x[1], c = x[2], d = x[3];
          a = ff(a, b, c, d, k[0], 7, -680876936); d = ff(d, a, b, c, k[1], 12, -389564586); c = ff(c, d, a, b, k[2], 17,  606105819); b = ff(b, c, d, a, k[3], 22, -1044525330);
          a = ff(a, b, c, d, k[4], 7, -176418897); d = ff(d, a, b, c, k[5], 12, 1200080426); c = ff(c, d, a, b, k[6], 17, -1473231341); b = ff(b, c, d, a, k[7], 22, -45705983);
          a = ff(a, b, c, d, k[8], 7, 1770035416); d = ff(d, a, b, c, k[9], 12, -1958414417); c = ff(c, d, a, b, k[10], 17, -42063); b = ff(b, c, d, a, k[11], 22, -1990404162);
          a = ff(a, b, c, d, k[12], 7, 1804603682); d = ff(d, a, b, c, k[13], 12, -40341101); c = ff(c, d, a, b, k[14], 17, -1502002290); b = ff(b, c, d, a, k[15], 22, 1236535329);
          a = gg(a, b, c, d, k[1], 5, -165796510); d = gg(d, a, b, c, k[6], 9, -1069501632); c = gg(c, d, a, b, k[11], 14,  643717713); b = gg(b, c, d, a, k[0], 20, -373897302);
          a = gg(a, b, c, d, k[5], 5, -701558691); d = gg(d, a, b, c, k[10], 9, 38016083); c = gg(c, d, a, b, k[15], 14, -660478335); b = gg(b, c, d, a, k[4], 20, -405537848);
          a = gg(a, b, c, d, k[9], 5, 568446438); d = gg(d, a, b, c, k[14], 9, -1019803690); c = gg(c, d, a, b, k[3], 14, -187363961); b = gg(b, c, d, a, k[8], 20, 1163531501);
          a = gg(a, b, c, d, k[13], 5, -1444681467); d = gg(d, a, b, c, k[2], 9, -51403784); c = gg(c, d, a, b, k[7], 14, 1735328473); b = gg(b, c, d, a, k[12], 20, -1926607734);
          a = hh(a, b, c, d, k[5], 4, -378558); d = hh(d, a, b, c, k[8], 11, -2022574463); c = hh(c, d, a, b, k[11], 16, 1839030562); b = hh(b, c, d, a, k[14], 23, -35309556);
          a = hh(a, b, c, d, k[1], 4, -1530992060); d = hh(d, a, b, c, k[4], 11, 1272893353); c = hh(c, d, a, b, k[7], 16, -155497632); b = hh(b, c, d, a, k[10], 23, -1094730640);
          a = hh(a, b, c, d, k[13], 4,  681279174); d = hh(d, a, b, c, k[0], 11, -358537222); c = hh(c, d, a, b, k[3], 16, -722521979); b = hh(b, c, d, a, k[6], 23, 76029189);
          a = hh(a, b, c, d, k[9], 4, -640364487); d = hh(d, a, b, c, k[12], 11, -421815835); c = hh(c, d, a, b, k[15], 16, 530742520); b = hh(b, c, d, a, k[2], 23, -995338651);
          a = ii(a, b, c, d, k[0], 6, -198630844); d = ii(d, a, b, c, k[7], 10, 1126891415); c = ii(c, d, a, b, k[14], 15, -1416354905); b = ii(b, c, d, a, k[5], 21, -57434055);
          a = ii(a, b, c, d, k[12], 6, 1700485571); d = ii(d, a, b, c, k[3], 10, -1894986606); c = ii(c, d, a, b, k[10], 15, -1051523); b = ii(b, c, d, a, k[1], 21, -2054922799);
          a = ii(a, b, c, d, k[8], 6, 1873313359); d = ii(d, a, b, c, k[15], 10, -30611744); c = ii(c, d, a, b, k[6], 15, -1560198380); b = ii(b, c, d, a, k[13], 21, 1309151649);
          a = ii(a, b, c, d, k[4], 6, -145523070); d = ii(d, a, b, c, k[11], 10, -1120210379); c = ii(c, d, a, b, k[2], 15, 718787259); b = ii(b, c, d, a, k[9], 21, -343485551);
          x[0] = a + x[0] | 0; x[1] = b + x[1] | 0; x[2] = c + x[2] | 0; x[3] = d + x[3] | 0;
        };
        let cmn = (q, a, b, x, s, t) => (a + q + x + t | 0),
            ff = (a, b, c, d, x, s, t) => (cmn((b & c) | (~b & d), a, b, x, s, t) << s | cmn((b & c) | (~b & d), a, b, x, s, t) >>> (32 - s)) + b | 0,
            gg = (a, b, c, d, x, s, t) => (cmn((b & d) | (c & ~d), a, b, x, s, t) << s | cmn((b & d) | (c & ~d), a, b, x, s, t) >>> (32 - s)) + b | 0,
            hh = (a, b, c, d, x, s, t) => (cmn(b ^ c ^ d, a, b, x, s, t) << s | cmn(b ^ c ^ d, a, b, x, s, t) >>> (32 - s)) + b | 0,
            ii = (a, b, c, d, x, s, t) => (cmn(c ^ (b | ~d), a, b, x, s, t) << s | cmn(c ^ (b | ~d), a, b, x, s, t) >>> (32 - s)) + b | 0;
        let md5 = (s) => {
          let txt = '';
          let n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i = 64, words = [];
          for (; i < n - 63; i += 64) md5cycle(state, words);
          let tail = s.substring(i);
          let tailWords = [];
          for (let j = 0; j < 64; j++) {
            tailWords[j >> 2] |= (tail.charCodeAt(j) || 0) << ((j & 3) << 3);
          }
          tailWords[14] = n * 8;
          md5cycle(state, tailWords);
          return state.map(x => ('00000000' + (x >>> 0).toString(16)).slice(-8).match(/../g).reverse().join('')).join('');
        };
        return md5(str);
      };

      const counts = { 'y11a-1': 0 };
      const indexIdsByChapter = {};
      let skipped = 0;

      // Batch Write questions — only add questions not already in Firestore
      const chunkSize = 400;
      for (let i = 0; i < finalQuestions.length; i += chunkSize) {
        const chunk = finalQuestions.slice(i, i + chunkSize);
        const addBatch = writeBatch(db);
        let batchHasOps = false;
        chunk.forEach(qData => {
          // Use explicit seed ID if present, otherwise derive from question text hash
          const hashId = qData.id || getMD5(qData.question);

          // Skip if this question already exists in Firestore
          if (existingIds.has(hashId)) {
            skipped++;
            return;
          }

          counts['y11a-1']++;
          if (qData.topicId) {
            counts[qData.topicId] = (counts[qData.topicId] || 0) + 1;
          }
          const { id: _id, ...qDataWithoutId } = qData;
          const docRef = doc(collRef, hashId);
          addBatch.set(docRef, qDataWithoutId, { merge: true });
          batchHasOps = true;

          const chapterId = qData.chapterId || 'y11a-1';
          if (!indexIdsByChapter[chapterId]) indexIdsByChapter[chapterId] = [];
          indexIdsByChapter[chapterId].push(hashId);
        });
        if (batchHasOps) await addBatch.commit();
      }
      console.log(`Seed import: ${counts['y11a-1']} added, ${skipped} already existed (skipped).`);

      // 3. Update sync_meta and question_index docs in Firestore (zero-read writes)
      const seedVersion = Date.now();
      await setDoc(doc(db, 'sync_meta', 'question_counts'), {
        counts,
        version: seedVersion,
        updatedAt: serverTimestamp()
      }, { merge: true });

      await setDoc(doc(db, 'sync_meta', 'questions'), {
        version: seedVersion,
        updatedAt: serverTimestamp()
      }, { merge: true });

      // Update question_index docs
      for (const [chapterId, ids] of Object.entries(indexIdsByChapter)) {
        await setDoc(doc(db, 'question_index', chapterId), {
          ids,
          count: ids.length,
          updatedAt: serverTimestamp()
        });
      }

      // Update question_index/_meta builtVersion
      await setDoc(doc(db, 'question_index', '_meta'), {
        builtVersion: seedVersion,
        updatedAt: serverTimestamp()
      }, { merge: true });

      // Update local cache counts
      const cached = loadCachedQuestionCounts();
      cached.counts = { ...cached.counts, ...counts };
      saveCachedQuestionCounts(cached.counts, seedVersion);
      setQuestionCounts(prev => ({ ...prev, ...counts }));

      showToast(`Seed complete: ${counts['y11a-1']} new questions added, ${skipped} already existed (kept as-is).`, 'success');
    } catch (err) {
      console.error(err);
      showToast("Failed to seed questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedSurdsQuestions = async () => {
    if (!window.confirm("This will replace all existing questions for Chapter 2 (Surds) with the latest randomized questions. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');
      
      // 1. Clear existing for chapter y11a-2
      const q = query(collRef, where('chapterId', '==', 'y11a-2'));
      const snap = await getDocs(q);
      const batch = writeBatch(db);
      snap.docs.forEach(d => batch.delete(d.ref));
      await batch.commit();

      // 2. Add new surds questions
      const addBatch = writeBatch(db);
      
      SURDS_QUESTIONS_Y11A.forEach(qData => {
        const docRef = doc(collRef);
        const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
        const correctIndex = shuffledOpts.indexOf(qData.a);

        addBatch.set(docRef, {
          chapterId: 'y11a-2',
          chapterTitle: 'Chapter 2: Surds and indices',
          topicId: 'y11a-2' + qData.c.slice(-1),
          topicCode: qData.c,
          topicTitle: qData.t,
          isManual: true,
          title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q,
          difficulty: 'medium',
          timeLimit: 120,
          type: 'multiple_choice',
          options: shuffledOpts.map(o => ({ text: o, imageUrl: "" })),
          answer: correctIndex.toString(),
          hint: qData.h,
          solution: qData.s,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      });
      await addBatch.commit();
      // Bump sync_meta + question_index/_meta so ensureQuestionIndexFresh sees no mismatch
      try {
        const { setDoc: sd, doc: d2, serverTimestamp: st2 } = await import('firebase/firestore');
        const v2 = Date.now();
        await Promise.all([
          sd(d2(db, 'sync_meta', 'questions'), { version: v2, updatedAt: st2() }, { merge: true }),
          sd(d2(db, 'question_index', '_meta'), { builtVersion: v2, updatedAt: st2() }, { merge: true }),
        ]);
      } catch (e) { console.warn('sync_meta bump failed:', e); }
      try {
        const { getCountFromServer: gcfs, query: q2, collection: col2, where: w2 } = await import('firebase/firestore');
        const snap2 = await gcfs(q2(col2(db, 'questions'), w2('chapterId', '==', 'y11a-2')));
        const count = snap2.data().count || 0;
        const cached = loadCachedQuestionCounts();
        cached.counts['y11a-2'] = count;
        saveCachedQuestionCounts(cached.counts, Date.now());
        setQuestionCounts(prev => ({ ...prev, 'y11a-2': count }));
      } catch (e) { console.warn('Post-seed count fetch failed:', e); }

      showToast(`Successfully updated ${SURDS_QUESTIONS_Y11A.length} Surds questions!`, 'success');
    } catch (err) {
      console.error(err);
      showToast("Failed to update Surds questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedWholeNumbersQuestions = async () => {
    if (!window.confirm("This will replace all existing questions for Year 6 Whole Numbers with the latest 60 questions, and ensure the curriculum chapter is present. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, getDoc, setDoc, serverTimestamp } = await import('firebase/firestore');
      
      // 1. Ensure the curriculum chapter exists in curriculum/Year_6
      const curDocRef = doc(db, 'curriculum', 'Year_6');
      const curSnap = await getDoc(curDocRef);
      let chapters = [];
      if (curSnap.exists()) {
        chapters = curSnap.data().chapters || [];
      }
      
      // Check if y6-wn is in chapters, and prepend/replace it
      const y6Data = CURRICULUM_DATA['Year 6'] || [];
      const wnChapter = y6Data.find(c => c.id === 'y6-wn');
      if (wnChapter) {
        chapters = [wnChapter, ...chapters.filter(c => c.id !== 'y6-wn')];
      }

      await setDoc(curDocRef, {
        year: 'Year 6',
        course: null,
        chapters,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      
      const metaRef = doc(db, 'sync_meta', 'curriculum');
      await setDoc(metaRef, { 
        version: Date.now(),
        lastUpdated: serverTimestamp() 
      }, { merge: true });

      // Clear local cache for curriculum
      localCache.remove(CURRICULUM_CACHE_KEY);

      // Update local state directly so it re-renders immediately
      setCurriculumRecords(prev => {
        const index = prev.findIndex(r => r.id === 'Year_6');
        if (index >= 0) {
          const updated = [...prev];
          updated[index] = { ...updated[index], chapters, updatedAt: new Date().toISOString() };
          return updated;
        } else {
          return [...prev, { id: 'Year_6', year: 'Year 6', course: null, chapters, updatedAt: new Date().toISOString() }];
        }
      });

      const collRef = collection(db, 'questions');
      const addBatch = writeBatch(db);
      
      WHOLE_NUMBER_QUESTIONS_Y6.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = "";
        
        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: "" }));
          answerField = correctIndex.toString();
        } else {
          optionsField = [];
          answerField = qData.a;
        }

        addBatch.set(docRef, {
          chapterId: 'y6-wn',
          chapterTitle: 'Chapter 1: Whole Numbers',
          topicId: 'y6-wn-' + qData.c.slice(-1),
          topicCode: qData.c,
          topicTitle: qData.t,
          isManual: true,
          title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q,
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type,
          options: optionsField,
          answer: answerField,
          hint: qData.h || "",
          solution: qData.s || "",
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      
      await addBatch.commit();
      showToast(`Successfully updated ${WHOLE_NUMBER_QUESTIONS_Y6.length} Whole Number questions and synced curriculum!`, 'success');
      
      // Update cache locally
      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y6-wn'] = WHOLE_NUMBER_QUESTIONS_Y6.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts(cached.counts);
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Whole Number questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedFractionsQuestions = async () => {
    if (!window.confirm("This will replace all existing questions for Year 6 Fractions with the latest questions, and ensure the curriculum chapter is present. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, getDoc, setDoc, serverTimestamp } = await import('firebase/firestore');
      
      // 1. Ensure the curriculum chapter exists in curriculum/Year_6
      const curDocRef = doc(db, 'curriculum', 'Year_6');
      const curSnap = await getDoc(curDocRef);
      let chapters = [];
      if (curSnap.exists()) {
        chapters = curSnap.data().chapters || [];
      }
      
      // Check if y6-frac is in chapters, and prepend/replace it
      const y6Data = CURRICULUM_DATA['Year 6'] || [];
      const fracChapter = y6Data.find(c => c.id === 'y6-frac');
      if (fracChapter) {
        chapters = [fracChapter, ...chapters.filter(c => c.id !== 'y6-frac')];
      }

      await setDoc(curDocRef, {
        id: 'Year_6',
        year: 'Year 6',
        course: null,
        chapters,
        updatedAt: new Date().toISOString()
      }, { merge: true });
      
      const metaRef = doc(db, 'sync_meta', 'curriculum');
      await setDoc(metaRef, { 
        version: Date.now(),
        lastUpdated: serverTimestamp() 
      }, { merge: true });

      // Clear local cache for curriculum
      localCache.remove(CURRICULUM_CACHE_KEY);

      // Update local state directly so it re-renders immediately
      setCurriculumRecords(prev => {
        const index = prev.findIndex(r => r.id === 'Year_6');
        if (index >= 0) {
          const updated = [...prev];
          updated[index] = { ...updated[index], chapters, updatedAt: new Date().toISOString() };
          return updated;
        } else {
          return [...prev, { id: 'Year_6', year: 'Year 6', course: null, chapters, updatedAt: new Date().toISOString() }];
        }
      });

      const collRef = collection(db, 'questions');
      const addBatch = writeBatch(db);
      
      FRACTION_QUESTIONS_Y6.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = "";
        
        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: "" }));
          answerField = correctIndex.toString();
        } else {
          optionsField = [];
          answerField = qData.a;
        }

        addBatch.set(docRef, {
          chapterId: 'y6-frac',
          chapterTitle: 'Chapter 2: Fractions',
          topicId: 'y6-frac-' + qData.c.slice(-1),
          topicCode: qData.c,
          topicTitle: qData.t,
          isManual: true,
          title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q,
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type,
          options: optionsField,
          answer: answerField,
          hint: qData.h || "",
          solution: qData.s || "",
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      
      await addBatch.commit();
      showToast(`Successfully updated ${FRACTION_QUESTIONS_Y6.length} Fraction questions and synced curriculum!`, 'success');
      
      // Update cache locally
      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y6-frac'] = FRACTION_QUESTIONS_Y6.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts(cached.counts);
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Fraction questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY11Ch5Questions = async () => {
    if (!window.confirm("This will replace all existing questions for Year 11 Advanced Chapter 5 with the latest questions. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp, setDoc, getCountFromServer } = await import('firebase/firestore');

      const collRef = collection(db, 'questions');
      const addBatch = writeBatch(db);

      CH5_QUESTIONS_Y11A.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = "";
        
        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: "" }));
          answerField = correctIndex.toString();
        } else {
          optionsField = [];
          answerField = qData.a;
        }

        addBatch.set(docRef, {
          chapterId: 'y11a-5',
          chapterTitle: 'Chapter 5: Transformations and symmetry',
          topicId: 'y11a-5' + qData.c.slice(-1),
          topicCode: qData.c,
          topicTitle: qData.t,
          isManual: true,
          title: qData.q.replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q,
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type,
          options: optionsField,
          answer: answerField,
          hint: qData.h || "",
          solution: qData.s || "",
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      
      await addBatch.commit();

      // Bump sync_meta + question_index/_meta so ensureQuestionIndexFresh sees no mismatch
      try {
        const v2 = Date.now();
        await Promise.all([
          setDoc(doc(db, 'sync_meta', 'questions'), { version: v2, updatedAt: serverTimestamp() }, { merge: true }),
          setDoc(doc(db, 'question_index', '_meta'), { builtVersion: v2, updatedAt: serverTimestamp() }, { merge: true }),
        ]);
      } catch (e) { console.warn('sync_meta bump failed:', e); }
      try {
        const chapSnap = await getCountFromServer(query(collection(db, 'questions'), where('chapterId', '==', 'y11a-5')));
        const count = chapSnap.data().count || 0;
        if (typeof window !== 'undefined') {
          const cached = loadCachedQuestionCounts();
          cached.counts['y11a-5'] = count;
          saveCachedQuestionCounts(cached.counts, Date.now());
          setQuestionCounts(prev => ({ ...prev, 'y11a-5': count }));
        }
      } catch (e) {
        // fallback to seed length
        const cached = loadCachedQuestionCounts();
        cached.counts['y11a-5'] = CH5_QUESTIONS_Y11A.length;
        saveCachedQuestionCounts(cached.counts, Date.now());
        setQuestionCounts(prev => ({ ...prev, 'y11a-5': CH5_QUESTIONS_Y11A.length }));
      }

      showToast(`Successfully updated ${CH5_QUESTIONS_Y11A.length} Ch5 questions!`, 'success');
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Ch5 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch2Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 2A (Pythagoras' theorem) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      // Clear existing y9-2 questions
      const q = query(collRef, where('chapterId', '==', 'y9-2'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      // Add new questions
      const addBatch = writeBatch(db);
      Y9_CH2A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-2',
          chapterTitle: "Chapter 2: Pythagoras' theorem and surds",
          topicId: 'y9-2a',
          topicCode: '2A',
          topicTitle: qData.t || "Review of Pythagoras' theorem and applications",
          isManual: true,
          title: (qData.q || '').replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type || 'short_answer',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || '',
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH2A_QUESTIONS.length} Year 9 Ch2A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-2'] = (cached.counts['y9-2'] || 0) + Y9_CH2A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch2 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  // Generic chapter seeder — used by every CHAPTER_SEED_REGISTRY entry, so a
  // new chapter never needs its own copy-pasted handler again.
  const handleSeedChapter = async (entry) => {
    if (!window.confirm(`Seed ${entry.seed.length} questions for ${entry.label}? Existing questions for this topic will be replaced.`)) return;
    setIsMigrating(true);
    try {
      await seedChapterQuestions(entry);
      // The seeder is a non-destructive upsert (set merge:true), so the
      // chapter's *total* count is seed.length + any pre-existing questions.
      // Fetch the live counts from the server.
      let liveChapterCount = entry.seed.length;
      let liveTopicCount = entry.seed.length;
      try {
        const chapSnap = await getCountFromServer(
          query(collection(db, 'questions'), where('chapterId', '==', entry.chapterId))
        );
        liveChapterCount = chapSnap.data().count || 0;

        const topicSnap = await getCountFromServer(
          query(collection(db, 'questions'), where('topicId', '==', entry.topicId))
        );
        liveTopicCount = topicSnap.data().count || 0;
      } catch (e) {
        console.warn('Post-seed count fetch failed; falling back to seed length:', e);
      }
      showToast(`Seeded ${entry.label}. Topic now has ${liveTopicCount} questions.`, 'success');
      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts[entry.chapterId] = liveChapterCount;
        cached.counts[entry.topicId] = liveTopicCount;
        saveCachedQuestionCounts(cached.counts, Date.now());
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast(`Failed to seed ${entry.label}.`, 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch3Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 3A (Percentages) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      // Clear existing y9-3a questions (only topic 3A to avoid wiping other Ch3 topics if any exist)
      const q = query(collRef, where('topicId', '==', 'y9-3a'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      // Add new questions
      const addBatch = writeBatch(db);
      Y9_CH3A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-3',
          chapterTitle: "Chapter 3: Consumer arithmetic",
          topicId: 'y9-3a',
          topicCode: '3A',
          topicTitle: qData.t || "Review of percentages",
          isManual: true,
          title: (qData.q || '').replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type || 'short_answer',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || '',
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH3A_QUESTIONS.length} Year 9 Ch3A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-3'] = (cached.counts['y9-3'] || 0) + Y9_CH3A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch3 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch4Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 4A (Factorisation) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      const q = query(collRef, where('topicId', '==', 'y9-4a'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      const addBatch = writeBatch(db);
      Y9_CH4A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-4',
          chapterTitle: "Chapter 4: Factorisation",
          topicId: 'y9-4a',
          topicCode: '4A',
          topicTitle: qData.t || "Factorisation using common factors",
          isManual: true,
          title: (qData.q || '').replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type || 'short_answer',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || '',
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH4A_QUESTIONS.length} Year 9 Ch4A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-4'] = (cached.counts['y9-4'] || 0) + Y9_CH4A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch4 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch5Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 5A (Expressions) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      const q = query(collRef, where('topicId', '==', 'y9-5a'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      const addBatch = writeBatch(db);
      Y9_CH5A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-5',
          chapterTitle: "Chapter 5: Equations",
          topicId: 'y9-5a',
          topicCode: '5A',
          topicTitle: qData.t || "Expressions",
          isManual: true,
          title: (qData.q || '').replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q || '',
          difficulty: qData.difficulty || 'easy',
          timeLimit: 120,
          type: qData.type || 'multiple_choice',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || '',
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH5A_QUESTIONS.length} Year 9 Ch5A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-5'] = (cached.counts['y9-5'] || 0) + Y9_CH5A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch5 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch6Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 6A (Substitution) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      const q = query(collRef, where('topicId', '==', 'y9-6a'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      const addBatch = writeBatch(db);
      Y9_CH6A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-6',
          chapterTitle: "Chapter 6: Formulas",
          topicId: 'y9-6a',
          topicCode: '6A',
          topicTitle: qData.t || "Substitution into formulas",
          isManual: true,
          title: (qData.q || '').replace(/\$/g, '').slice(0, 30) + '...',
          question: qData.q || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type || 'short_answer',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || '',
          solutionSteps: qData.solutionSteps || [],
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH6A_QUESTIONS.length} Year 9 Ch6A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-6'] = (cached.counts['y9-6'] || 0) + Y9_CH6A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch6 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch7Questions = async () => {
    if (!window.confirm("This will seed all Year 9 Chapter 7A (Review of angles) questions. Existing questions for this topic will be replaced. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      const q = query(collRef, where('topicId', '==', 'y9-7a'));
      const snap = await getDocs(q);
      const clearBatch = writeBatch(db);
      snap.docs.forEach(d => clearBatch.delete(d.ref));
      await clearBatch.commit();

      const addBatch = writeBatch(db);
      Y9_CH7A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        const isMC = qData.type === 'multiple_choice';
        let optionsField = [];
        let answerField = qData.a || qData.solution || '';

        if (isMC) {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a || qData.solution);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-7',
          chapterTitle: "Chapter 7: Congruence and special quadrilaterals",
          topicId: 'y9-7a',
          topicCode: '7A',
          topicTitle: qData.t || "Review of angles",
          isManual: true,
          title: ((qData.q || qData.question || '').replace(/\$/g, '').slice(0, 30)) + '...',
          question: qData.q || qData.question || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          // "teacher_review" seed questions are open "give reasons" prompts —
          // store them as short-answer + manual grading so the challenge
          // renders a text input (not empty multiple-choice options).
          type: isMC ? 'multiple_choice' : 'short_answer',
          requiresManualGrading: !isMC,
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || qData.solution || qData.a || '',
          solutionSteps: qData.solutionSteps || [],
          graphData: qData.graphData || null,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully seeded ${Y9_CH7A_QUESTIONS.length} Year 9 Ch7A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-7'] = (cached.counts['y9-7'] || 0) + Y9_CH7A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch7 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY9Ch8Questions = async () => {
    if (!window.confirm("This will append Year 9 Chapter 8A (Index Laws) questions to your database without deleting existing questions. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');

      const addBatch = writeBatch(db);
      Y9_CH8A_QUESTIONS.forEach(qData => {
        const docRef = qData.id ? doc(collRef, qData.id) : doc(collRef);
        let optionsField = [];
        let answerField = qData.a || qData.solution || '';

        if (qData.type === 'multiple_choice') {
          const shuffledOpts = [...(qData.opts || [])].sort(() => Math.random() - 0.5);
          const correctIndex = shuffledOpts.indexOf(qData.a || qData.solution);
          optionsField = shuffledOpts.map(o => ({ text: o, imageUrl: '' }));
          answerField = correctIndex.toString();
        }

        addBatch.set(docRef, {
          chapterId: 'y9-8',
          chapterTitle: "Chapter 8: Index Laws",
          topicId: 'y9-8a',
          topicCode: '8A',
          topicTitle: qData.t || "Index Laws",
          isManual: true,
          title: ((qData.q || qData.question || '').replace(/\$/g, '').slice(0, 30)) + '...',
          question: qData.q || qData.question || '',
          difficulty: qData.difficulty || 'medium',
          timeLimit: 120,
          type: qData.type || 'teacher_review',
          options: optionsField,
          answer: answerField,
          hint: qData.h || '',
          solution: qData.s || qData.solution || qData.a || '',
          solutionSteps: qData.solutionSteps || [],
          graphData: qData.graphData || null,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        }, { merge: true });
      });
      await addBatch.commit();
      showToast(`Successfully appended ${Y9_CH8A_QUESTIONS.length} Year 9 Ch8A questions!`, 'success');

      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y9-8'] = (cached.counts['y9-8'] || 0) + Y9_CH8A_QUESTIONS.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts({ ...cached.counts });
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to seed Year 9 Ch8 questions.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };


  const handleSeedCurveQuestion = async () => {
    if (!window.confirm("Add the Year 11 Advanced curve properties question?")) return;
    setIsMigrating(true);
    try {
      const { collection, addDoc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');
      
      await addDoc(collRef, {
        chapterId: 'y11a-9',
        chapterTitle: 'Chapter 9: Differentiation',
        topicId: 'y11a-9A',
        topicCode: '9A',
        topicTitle: 'Tangents and the derivative',
        isManual: true,
        title: "Consider a curve with the following properties...",
        question: "Consider a curve with the following properties:\n\n$$ g(x) \\text{ is odd.} $$\n$$ g(5) = 0 \\text{ and } g'(2) = 0. $$\n$$ g'(x) > 0 \\text{ for } x > 2. $$\n\nWhich of the following could be the graph of $$ y = g(x) $$?",
        difficulty: 'hard',
        timeLimit: 120,
        type: 'multiple_choice',
        options: [
          { text: "A", imageUrl: "/images/questions/q_curve_A.png" },
          { text: "B", imageUrl: "/images/questions/q_curve_B.png" },
          { text: "C", imageUrl: "/images/questions/q_curve_C.png" },
          { text: "D", imageUrl: "/images/questions/q_curve_D.png" }
        ],
        answer: "2",
        hint: "An odd function is symmetric about the origin. Check the slope (gradient) after x=2.",
        solution: "1. **g(x) is odd**: The graph must have rotational symmetry of 180° about the origin. Graph B and D are even, so they are eliminated.\n2. **g(5) = 0**: The curve passes through the x-axis at x = 5.\n3. **g'(2) = 0**: The curve has a stationary point at x = 2.\n4. **g'(x) > 0 for x > 2**: The curve must be increasing for x > 2. In Graph A, after x=2, the curve goes downwards ($$ g'(x) < 0 $$). In Graph C, after x=2, the curve goes upwards ($$ g'(x) > 0 $$).\n\nTherefore, Graph C is correct.",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      showToast("Successfully added curve question!", 'success');
    } catch (err) {
      console.error(err);
      showToast("Failed to add question.", 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncSelectedYear = async () => {
    const isSenior = ['Year 11', 'Year 12'].includes(selectedYear);
    const data = isSenior 
      ? CURRICULUM_DATA[selectedYear]?.[selectedCourse] 
      : CURRICULUM_DATA[selectedYear];
      
    if (!Array.isArray(data)) {
      showToast("No built-in curriculum data found for this selection.", 'info');
      return;
    }
    
    const courseName = isSenior ? ` (${selectedCourse})` : '';
    if (!window.confirm(`Replace ${selectedYear}${courseName} curriculum with the built-in version?`)) return;
    
    await handleUpdateChapters(data);
  };

  const handleUpdateHscProfile = async (fields) => {
    if (!user?.uid) return;
    // ProfileContext's listener reflects the change; no optimistic local set.
    await updateDoc(doc(db, 'users', user.uid), fields);
  };

  // Sync the year/course selectors from the shared profile (students only) —
  // replaces a duplicate users/{uid} onSnapshot that used to live here.
  useEffect(() => {
    if (!profile || isAdmin) return;
    if (profile.assignedYear) {
      setSelectedYear(Array.isArray(profile.assignedYear) ? profile.assignedYear[0] : profile.assignedYear);
    }
    if (profile.assignedCourse) {
      setSelectedCourse(Array.isArray(profile.assignedCourse) ? profile.assignedCourse[0] : profile.assignedCourse);
    }
  }, [profile, isAdmin]);

  useEffect(() => {
    if (!user?.uid || isAdmin || profile?.showHscGraph !== true) {
      setHscRecords([]);
      return undefined;
    }
    const cached = loadCachedHscResults('users', user.uid);
    if (cached.records.length > 0) setHscRecords(cached.records);
    let cancelled = false;
    fetchHscResultsIncremental('users', user.uid)
      .then(({ records }) => {
        if (!cancelled) setHscRecords(records);
      })
      .catch((err) => {
        console.error('HSC records fetch error:', err);
        if (!cancelled && cached.records.length === 0) setHscRecords([]);
      });
    return () => {
      cancelled = true;
    };
  }, [user?.uid, isAdmin, profile?.showHscGraph]);

  useEffect(() => {
    if (selectedYear !== 'Past Paper' || questionTypes.length > 0) return;
    let cancelled = false;
    setQuestionTypesLoading(true);
    getDocs(collection(db, 'question_types')).then(snap => {
      if (cancelled) return;
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        .sort((a, b) => (a.label || '').localeCompare(b.label || ''));
      setQuestionTypes(list);
      setQuestionTypesLoading(false);
    }).catch(() => { if (!cancelled) setQuestionTypesLoading(false); });
    return () => { cancelled = true; };
  }, [selectedYear, questionTypes.length]);

  const courses = useMemo(() => {
    if (selectedYear === 'Year 11') return ['Standard', 'Advanced', 'Extension 1'];
    if (selectedYear === 'Year 12') return ['Standard', 'Advanced', 'Extension 1', 'Extension 2'];
    if (selectedYear === 'Past Paper') return PAST_PAPER_COURSES;
    return null;
  }, [selectedYear]);

  const currentRecord = useMemo(() => {
    const docId = courses 
      ? `${selectedYear.replace(' ', '_')}_${selectedCourse}`
      : selectedYear.replace(' ', '_');
    return curriculumRecords.find(r => r.id === docId);
  }, [curriculumRecords, selectedYear, selectedCourse, courses]);

  const displayData = useMemo(() => {
    let data = currentRecord?.chapters || [];
    if (data.length === 0) {
      let fallbackData = CURRICULUM_DATA[selectedYear] || [];
      if (!Array.isArray(fallbackData)) fallbackData = fallbackData[selectedCourse] || [];
      data = fallbackData;
    }
    
    if (!isAdmin && profile?.assignedChapters) {
      data = data.filter(chapter => profile.assignedChapters.includes(chapter.id));
    }
    
    if (!searchQuery) return data;
    return data.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [currentRecord, searchQuery, isAdmin, profile]);

  const countChapterIds = useMemo(() => {
    const ids = new Set(displayData.map((chapter) => chapter.id).filter(Boolean));
    if (isAdmin && showAdminTools) ADMIN_TOOL_COUNT_IDS.forEach((id) => ids.add(id));
    // Admins want accurate year-tab AND chapter totals across EVERY year, not
    // just the selected one. The year tabs sum questionCounts for all years, so
    // counts must be fetched for all curriculum chapters — otherwise a
    // non-selected year shows a stale/seed-only number that appears "frozen".
    if (isAdmin) {
      Object.values(CURRICULUM_DATA).forEach((yearData) => {
        const chapters = Array.isArray(yearData) ? yearData : Object.values(yearData).flat();
        chapters.forEach((ch) => { if (ch.id) ids.add(ch.id); });
      });
    }
    return [...ids];
  }, [displayData, isAdmin, showAdminTools]);

  // Seed 파일에 있는 문제 수를 chapterId별로 합산 — Firestore 쿼리 불필요
  const seedCountByChapter = useMemo(() => {
    const map = {};
    seedRegistry.forEach(({ chapterId, seed }) => {
      if (chapterId && Array.isArray(seed)) {
        map[chapterId] = (map[chapterId] || 0) + seed.length;
      }
    });
    // Custom-handler chapters not in the registry — add their seed lengths so
    // the chapter card fallback shows a count before Firestore data loads.
    map['y11a-1'] = (map['y11a-1'] || 0) + ALGEBRA_QUESTIONS_Y11A.length;
    map['y11a-2'] = (map['y11a-2'] || 0) + SURDS_QUESTIONS_Y11A.length;
    map['y11a-5'] = (map['y11a-5'] || 0) + CH5_QUESTIONS_Y11A.length;
    map['y6-wn'] = (map['y6-wn'] || 0) + WHOLE_NUMBER_QUESTIONS_Y6.length;
    return map;
  }, [seedRegistry]);

  // Seed 문제를 문제별 topicId 기준으로 집계 — 시험지 seed(chapterId 'exam:…')의
  // 문제들은 각자 다른 토픽(y12a-4A 등)에 속하므로, 챕터 카드가 Firestore 쿼리
  // 실패(쿼터 소진) 시에도 토픽 합산으로 정확한 개수를 보여줄 수 있게 한다.
  const seedCountByTopic = useMemo(() => {
    const map = {};
    seedRegistry.forEach(({ seed }) => {
      if (!Array.isArray(seed)) return;
      seed.forEach((q) => {
        if (q && q.topicId) map[q.topicId] = (map[q.topicId] || 0) + 1;
      });
    });
    return map;
  }, [seedRegistry]);


  const countTopicIds = useMemo(() => {
    const ids = new Set();
    // Always fetch topic-level counts so chapter cards can sum them as a
    // fallback when questions were stored with wrong chapterId (e.g. topicId
    // used as chapterId in older seeding scripts).
    displayData.forEach(ch => {
      (ch.topics || []).forEach(t => { if (t.id) ids.add(t.id); });
    });
    // Admin seed-card topics (registry)
    if (isAdmin && showAdminTools) {
      seedRegistry.forEach(e => { if (e.topicId) ids.add(e.topicId); });
    }
    // All-year topic counts for admins — feeds the max() fallback for chapters
    // whose questions were stored under topicId instead of chapterId, so every
    // year/chapter total is accurate, not just the selected year's.
    if (isAdmin) {
      Object.values(CURRICULUM_DATA).forEach((yearData) => {
        const chapters = Array.isArray(yearData) ? yearData : Object.values(yearData).flat();
        chapters.forEach((ch) => (ch.topics || []).forEach((t) => { if (t.id) ids.add(t.id); }));
      });
    }
    return [...ids];
  }, [displayData, isAdmin, showAdminTools, seedRegistry]);

  useEffect(() => {
    if (countChapterIds.length === 0) return undefined;
    let cancelled = false;
    const cached = loadCachedQuestionCounts();
    setQuestionCounts((prev) => ({ ...cached.counts, ...prev }));

    const fetchVisibleCounts = async () => {
      try {
        const metaSnap = await getDoc(doc(db, 'sync_meta', 'questions'));
        const remoteVersion = Number(metaSnap.data()?.version || metaSnap.data()?.updatedAt?.toMillis?.() || 0);
        const hasFreshCounts = Date.now() - Number(cached.savedAt || 0) < QUESTION_COUNT_CACHE_TTL_MS
          && (!remoteVersion || Number(cached.version || 0) === remoteVersion)
          && countChapterIds.every((chapterId) => cached.counts[chapterId] !== undefined)
          && countTopicIds.every((topicId) => cached.counts[topicId] !== undefined);
        if (hasFreshCounts && !isMigrating) return;

        // ── Aggregate doc first: ONE read replaces ~1,600 count queries. ──
        // Write paths (question bank CRUD, seeder) keep sync_meta/
        // question_counts in step with sync_meta/questions.version, so when
        // the versions match we can trust it outright.
        const agg = await readAggregatedCounts();
        if (agg && (!remoteVersion || agg.version >= remoteVersion) && !isMigrating) {
          if (cancelled) return;
          const merged = { ...cached.counts, ...agg.counts };
          // Default any undefined visible chapter/topic count to 0 so that they are "defined"
          // in the cache, preventing permanent cache invalidation and infinite fetch storms.
          countChapterIds.forEach((id) => {
            if (merged[id] === undefined) merged[id] = 0;
          });
          countTopicIds.forEach((id) => {
            if (merged[id] === undefined) merged[id] = 0;
          });
          setQuestionCounts(merged);
          saveCachedQuestionCounts(merged, remoteVersion || agg.version);
          return;
        }

        const nextCounts = {};
        // Fallback (aggregate doc missing/stale — e.g. a legacy import tool
        // bumped sync_meta only): rebuild every count once with bounded
        // concurrency, then WRITE the result back to the aggregate doc so
        // every other admin session reads 1 doc instead of repeating this.
        const runBatched = async (ids, field, batchSize = 40) => {
          for (let i = 0; i < ids.length; i += batchSize) {
            if (cancelled) return;
            const slice = ids.slice(i, i + batchSize);
            await Promise.all(slice.map(async (id) => {
              try {
                const snap = await getCountFromServer(
                  query(collection(db, 'questions'), where(field, '==', id))
                );
                nextCounts[id] = snap.data().count || 0;
              } catch (e) {
                // Leave undefined → cached/seed value remains the fallback.
              }
            }));
            if (!cancelled) setQuestionCounts((prev) => ({ ...prev, ...nextCounts }));
          }
        };
        await runBatched(countChapterIds, 'chapterId');
        await runBatched(countTopicIds, 'topicId');
        if (cancelled) return;
        const merged = { ...cached.counts, ...nextCounts };
        // Default any undefined visible chapter/topic count to 0 to prevent cache invalidation.
        countChapterIds.forEach((id) => {
          if (merged[id] === undefined) merged[id] = 0;
        });
        countTopicIds.forEach((id) => {
          if (merged[id] === undefined) merged[id] = 0;
        });
        setQuestionCounts(merged);
        saveCachedQuestionCounts(merged, remoteVersion);
        writeAggregatedCounts({ ...(agg?.counts || {}), ...nextCounts }, remoteVersion)
          .catch((err) => console.warn('question_counts write-back failed (non-fatal):', err?.code || err));
      } catch (err) {
        console.error("Error fetching question counts:", err);
      }
    };

    fetchVisibleCounts();
    return () => {
      cancelled = true;
    };
  }, [isAdmin, countChapterIds, countTopicIds, isMigrating, questionsSyncVersion]);

  // Realtime "questions changed" subscription. Every question add/delete path
  // bumps sync_meta/questions.version; mirroring it into state re-triggers the
  // count-fetch effect above, so counts refresh live (no page reload needed)
  // whenever a question is added or removed — from this page, the question bank
  // modal, the seeder, or any other client.
  useEffect(() => {
    const ref = doc(db, 'sync_meta', 'questions');
    const unsub = onSnapshot(
      ref,
      (snap) => {
        const v = Number(snap.data()?.version || snap.data()?.updatedAt?.toMillis?.() || 0);
        setQuestionsSyncVersion((prev) => (v && v !== prev ? v : prev));
      },
      () => { /* permission/offline — fall back to mount-time fetch + TTL */ }
    );
    return () => unsub();
  }, []);

  // Admin utility: verify the aggregate counts doc against live Firestore
  // counts for the selected year only (~150 aggregation reads, on demand).
  // Reports mismatches and writes the corrected values back.
  const handleAssignAllChaptersToAllStudents = async () => {
    if (!window.confirm('This will set all chapters to Active for every student. Continue?')) return;
    setIsMigrating(true);
    try {
      const { getDocs, writeBatch, doc: fsDoc, collection: fsCol, getDoc: fsGetDoc } = await import('firebase/firestore');

      // 1. 모든 curriculum 챕터 ID를 year+course별로 수집
      const currSnap = await getDocs(fsCol(db, 'curriculum'));
      const chaptersByDoc = {};
      currSnap.docs.forEach(d => {
        const chapters = (d.data().chapters || []).map(ch => ch.id).filter(Boolean);
        chaptersByDoc[d.id] = chapters;
      });

      // 2. 모든 학생 (students + users) 가져오기
      const [manualSnap, usersSnap] = await Promise.all([
        getDocs(fsCol(db, 'students')),
        getDocs(fsCol(db, 'users')),
      ]);

      const toUpdate = [];
      manualSnap.docs.forEach(d => toUpdate.push({ col: 'students', id: d.id, data: d.data() }));
      usersSnap.docs.forEach(d => {
        const data = d.data();
        if (data.email !== 'andrewjk82@gmail.com' && data.role !== 'admin') {
          toUpdate.push({ col: 'users', id: d.id, data });
        }
      });

      // 3. 각 학생의 year+course에 맞는 챕터 ID를 결합
      const CHUNK = 400;
      let updated = 0;
      for (let i = 0; i < toUpdate.length; i += CHUNK) {
        const batch = writeBatch(db);
        toUpdate.slice(i, i + CHUNK).forEach(({ col, id, data }) => {
          const years = Array.isArray(data.assignedYear) ? data.assignedYear : [data.assignedYear || 'Year 11'];
          const courses = Array.isArray(data.assignedCourse) ? data.assignedCourse : [data.assignedCourse || 'Advanced'];
          const allIds = new Set();
          years.forEach(year => {
            const isSenior = ['Year 11', 'Year 12'].includes(year);
            if (isSenior) {
              courses.forEach(course => {
                const docId = `${year.replace(' ', '_')}_${course}`;
                (chaptersByDoc[docId] || []).forEach(cid => allIds.add(cid));
              });
            } else {
              const docId = year.replace(' ', '_');
              (chaptersByDoc[docId] || []).forEach(cid => allIds.add(cid));
            }
          });
          if (allIds.size > 0) {
            batch.update(fsDoc(db, col, id), { assignedChapters: [...allIds] });
            updated++;
          }
        });
        await batch.commit();
      }

      showToast(`Done: ${updated} students updated with all chapters set to Active.`, 'success');
    } catch (err) {
      console.error(err);
      showToast('Error: ' + err.message, 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleVerifyCounts = async () => {
    const chapterIds = displayData.map((ch) => ch.id).filter(Boolean);
    const topicIds = displayData.flatMap((ch) => (ch.topics || []).map((t) => t.id)).filter(Boolean);
    const totalIds = chapterIds.length + topicIds.length;
    if (totalIds === 0) return;
    if (!window.confirm(`Verify ${totalIds} counts for ${selectedYear} against live Firestore? (~${totalIds} reads)`)) return;
    setIsMigrating(true);
    try {
      const agg = await readAggregatedCounts();
      const live = {};
      const runLive = async (ids, field) => {
        for (let i = 0; i < ids.length; i += 40) {
          await Promise.all(ids.slice(i, i + 40).map(async (id) => {
            try {
              const snap = await getCountFromServer(query(collection(db, 'questions'), where(field, '==', id)));
              live[id] = snap.data().count || 0;
            } catch { /* skip — reported as unverified */ }
          }));
        }
      };
      await runLive(chapterIds, 'chapterId');
      await runLive(topicIds, 'topicId');

      const mismatches = Object.entries(live)
        .filter(([id, n]) => (Number(agg?.counts?.[id]) || 0) !== n)
        .map(([id, n]) => ({ id, aggregate: Number(agg?.counts?.[id]) || 0, live: n }));

      if (mismatches.length === 0) {
        showToast(`✅ ${selectedYear}: all ${Object.keys(live).length} counts match the aggregate doc.`, 'success');
      } else {
        console.table(mismatches);
        // Self-heal: merge the live values into the aggregate doc (keep its
        // version so we don't invalidate other clients' caches).
        await writeAggregatedCounts({ ...(agg?.counts || {}), ...live }, agg?.version || Date.now());
        setQuestionCounts((prev) => ({ ...prev, ...live }));
        showToast(`⚠️ ${mismatches.length} mismatched counts found and corrected (see console for details).`, 'info');
      }
    } catch (err) {
      console.error('count verification failed:', err);
      showToast(`Count verification failed: ${err.code || err.message}`, 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const calculateHscBand = (pct) => {
    if (pct >= 90) return { label: 'Band 6', className: 'band-6', color: '#f59e0b' };
    if (pct >= 80) return { label: 'Band 5', className: 'band-5', color: '#6366f1' };
    if (pct >= 70) return { label: 'Band 4', className: 'band-4', color: '#0ea5e9' };
    return { label: 'Band 3 & below', className: 'band-low', color: '#94a3b8' };
  };

  const renderStudentHscChart = () => {
    if (profile?.showHscGraph !== true) return null;
    const points = [...hscRecords]
      .filter((record) => record.examDate && Number(record.total) > 0)
      .sort((a, b) => String(a.examDate).localeCompare(String(b.examDate)))
      .map((record) => ({
        ...record,
        percentage: Number(record.percentage ?? ((Number(record.score) / Number(record.total)) * 100)),
      }));
    if (points.length === 0) return null;

    const width = 520;
    const height = 96;
    const padX = 16;
    const padY = 16;
    const minScore = Math.max(0, Math.min(75, ...points.map((p) => p.percentage)) - 5);
    const maxScore = Math.min(100, Math.max(95, ...points.map((p) => p.percentage)) + 5);
    const range = Math.max(1, maxScore - minScore);
    const xFor = (idx) => points.length === 1
      ? width / 2
      : padX + (idx * (width - padX * 2)) / (points.length - 1);
    const yFor = (value) => padY + ((maxScore - value) / range) * (height - padY * 2);
    const path = points.map((point, idx) => `${idx === 0 ? 'M' : 'L'} ${xFor(idx)} ${yFor(point.percentage)}`).join(' ');
    const areaPath = points.length <= 1 ? '' : `${path} L ${xFor(points.length - 1)} ${height} L ${xFor(0)} ${height} Z`;
    const latest = points[points.length - 1];

    const avg = points.reduce((acc, p) => acc + p.percentage, 0) / points.length;
    const trend = latest.percentage - avg;
    const isUp = trend >= 0;

    const pct = latest.percentage;
    let milestoneProgress = 0;
    let milestoneText = '';

    if (pct >= 90) {
      milestoneText = 'Mastery Achieved';
      milestoneProgress = 100;
    } else if (pct >= 80) {
      const distanceToNext = 90 - pct;
      milestoneProgress = (pct - 80) * 10;
      milestoneText = `${distanceToNext.toFixed(1)}% to Band 6`;
    } else if (pct >= 70) {
      const distanceToNext = 80 - pct;
      milestoneProgress = (pct - 70) * 10;
      milestoneText = `${distanceToNext.toFixed(1)}% to Band 5`;
    } else {
      const distanceToNext = 70 - pct;
      milestoneProgress = Math.max(0, Math.min(100, ((pct - 50) / 20) * 100));
      milestoneText = `${distanceToNext.toFixed(1)}% to Band 4`;
    }

    return (
      <>
        <div
          className="hsc-dashboard-card"
          onClick={() => setHscModalOpen(true)}
        >
          <div className="hsc-dashboard-card__grid">
            <div className="hsc-dashboard-card__left">
              <div className="hsc-label-container">
                <span className="hsc-pulse-dot" />
                HSC Progress
              </div>
              <div className="hsc-score-row">
                <div className="hsc-big-score">{latest.percentage.toFixed(1)}%</div>
                <div className={`hsc-trend-badge ${isUp ? 'up' : 'down'}`}>
                  {isUp ? <TrendingUp size={12} /> : <TrendingUp size={12} style={{ transform: 'rotate(180deg)' }} />}
                  {isUp ? '+' : ''}{trend.toFixed(1)}%
                </div>
              </div>
              <div className={`hsc-band-badge ${calculateHscBand(latest.percentage).className}`}>
                {calculateHscBand(latest.percentage).label}
              </div>
            </div>

            <div className="hsc-dashboard-card__chart-container" style={{ minWidth: 0 }}>
              <svg viewBox={`0 0 ${width} ${height}`} className="hsc-dashboard-card__chart" role="img" aria-label="HSC score trend">
                <defs>
                  <linearGradient id="studentHscLine" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="1" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="studentHscArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.01" />
                  </linearGradient>
                </defs>

                <line
                  x1={padX}
                  x2={width - padX}
                  y1={yFor(90)}
                  y2={yFor(90)}
                  className="hsc-chart-bandline band-6-threshold"
                />
                <text
                  x={padX}
                  y={yFor(90) - 4}
                  className="hsc-chart-threshold-text b6"
                >
                  Band 6 (90%)
                </text>

                <line
                  x1={padX}
                  x2={width - padX}
                  y1={yFor(80)}
                  y2={yFor(80)}
                  className="hsc-chart-bandline band-5-threshold"
                />
                <text
                  x={padX}
                  y={yFor(80) - 4}
                  className="hsc-chart-threshold-text b5"
                >
                  Band 5 (80%)
                </text>

                {areaPath && <path d={areaPath} fill="url(#studentHscArea)" />}
                <path d={path} fill="none" stroke="url(#studentHscLine)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="hsc-sparkline-path" />

                {points.map((point, idx) => {
                  const isLatest = idx === points.length - 1;
                  return (
                    <g key={point.id || `${point.examDate}-${idx}`} className="hsc-node-group">
                      <circle
                        cx={xFor(idx)}
                        cy={yFor(point.percentage)}
                        r="4"
                        fill="#ffffff"
                        stroke="#6366f1"
                        strokeWidth="2.5"
                        className="hsc-node-outer"
                      />
                      {isLatest && (
                        <circle
                          cx={xFor(idx)}
                          cy={yFor(point.percentage)}
                          r="9"
                          fill="none"
                          stroke="#6366f1"
                          strokeWidth="1.5"
                          className="hsc-pulse-ring-node"
                        />
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="hsc-dashboard-card__right">
              <div className="hsc-milestone-header">
                <span className="hsc-milestone-title">Milestone Tracker</span>
                <span className="hsc-milestone-value">{milestoneText}</span>
              </div>
              <div className="hsc-progress-track">
                <div className="hsc-progress-fill" style={{ width: `${milestoneProgress}%` }} />
              </div>
              <div className="hsc-card-action-link">
                View detailed history <ChevronRight size={14} />
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {hscModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'grid', placeItems: 'center', padding: 20 }}
            >
              <div onClick={() => setHscModalOpen(false)} style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.52)', backdropFilter: 'blur(8px)' }} />
              <motion.div
                initial={{ scale: 0.96, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 12 }}
                style={{
                  position: 'relative',
                  width: 'min(720px, 100%)',
                  maxHeight: '82vh',
                  overflowY: 'auto',
                  background: 'rgba(255, 255, 255, 0.92)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(167, 139, 250, 0.18)',
                  borderRadius: 28,
                  padding: 28,
                  boxShadow: '0 30px 80px rgba(15,23,42,0.22)'
                }}
              >
                <div className="hsc-modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#7c3aed', letterSpacing: '0.12em', textTransform: 'uppercase' }}>HSC Papers</div>
                    <h3 style={{ margin: '6px 0 0', color: '#1e1b4b' }}>Exam Records</h3>
                  </div>
                  <button onClick={() => setHscModalOpen(false)} style={{ width: 40, height: 40, borderRadius: 12, border: 'none', background: '#f1f5f9', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <X size={18} />
                  </button>
                </div>

                <div className="hsc-modal-summary-grid">
                  <div className="hsc-modal-summary-widget">
                    <div className="hsc-modal-summary-lbl">Current Band</div>
                    <div className="hsc-modal-summary-val" style={{ color: calculateHscBand(latest.percentage).color }}>
                      {calculateHscBand(latest.percentage).label}
                    </div>
                  </div>
                  <div className="hsc-modal-summary-widget">
                    <div className="hsc-modal-summary-lbl">Overall Average</div>
                    <div className="hsc-modal-summary-val">{avg.toFixed(1)}%</div>
                  </div>
                  <div className="hsc-modal-summary-widget">
                    <div className="hsc-modal-summary-lbl">Exams Taken</div>
                    <div className="hsc-modal-summary-val">{points.length}</div>
                  </div>
                </div>

                <div style={{ display: 'grid', gap: 14 }}>
                  {[...points].reverse().map((record) => (
                    <div key={record.id} className="hsc-paper-row-card">
                      <div className="hsc-row-gauge">
                        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%' }}>
                          <defs>
                            <linearGradient id={`gaugeGrad-${record.id}`} x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" stopColor="#6366f1" />
                              <stop offset="100%" stopColor="#10b981" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#f1f5f9"
                            strokeWidth="3"
                          />
                          <path
                            strokeDasharray={`${record.percentage.toFixed(0)}, 100`}
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={`url(#gaugeGrad-${record.id})`}
                            strokeWidth="3.2"
                            strokeLinecap="round"
                          />
                        </svg>
                        <span className="hsc-row-gauge-pct">{record.percentage.toFixed(0)}%</span>
                      </div>

                      <div className="hsc-paper-main">
                        <div className="hsc-paper-date">{record.examDate}</div>
                        <h4 className="hsc-paper-title">{record.paper}</h4>
                        {record.notes && (
                          <div className="hsc-paper-comment-bubble">
                            {record.notes}
                          </div>
                        )}
                      </div>

                      <div className="hsc-paper-score-col">
                        <div className="hsc-paper-score-num">{Number(record.score)}</div>
                        <div className="hsc-paper-score-tot">/ {Number(record.total)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  // Early-return navigation: chapter card → topics page → bank page.
  // These replace the old QuestionBankModal overlay so the user gets a real
  // page transition instead of a modal stack.
  if (selectedTopicForBank) {
    return (
      <QuestionBankPage
        chapter={selectedTopicForBank.chapter}
        topic={selectedTopicForBank.topic}
        onBack={() => setSelectedTopicForBank(null)}
      />
    );
  }

  // Student-facing Practice by Type full page (triggered from HSC journey button)
  if (showPracticeByType) {
    return (
      <div className="app-page" style={{ padding: 'clamp(16px, 3vw, 28px) clamp(12px, 3vw, 28px) 80px' }}>
        <button
          onClick={() => setShowPracticeByType(false)}
          style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', color: '#7c3aed', fontWeight: 800, fontSize: '0.88rem', marginBottom: '20px', padding: 0 }}
        >
          ← Back to Journey
        </button>
        <HscTypePractice profile={profile} />
      </div>
    );
  }

  // Past Paper type drill-down: uses a synthetic chapter so QuestionBankPage
  // can query question_type_index and filter by typeSlug.
  if (selectedPastPaperType) {
    return (
      <QuestionBankPage
        chapter={{ id: `type:${selectedPastPaperType.slug}`, title: selectedPastPaperType.label, typeSlug: selectedPastPaperType.slug }}
        topic={null}
        onBack={() => setSelectedPastPaperType(null)}
      />
    );
  }
  if (selectedChapterForQuestions) {
    const ch = selectedChapterForQuestions;
    const topics = ch.topics || [];
    return (
      <div className="app-page" style={{ padding: '24px 20px 80px', background: '#f8fafc', minHeight: '100vh' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button
            onClick={() => setSelectedChapterForQuestions(null)}
            style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#475569', fontWeight: 700, cursor: 'pointer' }}
          >
            ← Back to chapters
          </button>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>{ch.year || ''}</div>
            <h2 style={{ margin: 0, fontSize: '1.7rem', fontWeight: 900, color: '#1e1b4b' }}>{ch.title}</h2>
            <p style={{ margin: '4px 0 0', color: '#64748b', fontWeight: 600 }}>{topics.length} {topics.length === 1 ? 'topic' : 'topics'}</p>
          </div>
          {previewLesson && (
            <LessonPlayer lesson={previewLesson} onClose={() => setPreviewLesson(null)} />
          )}
          {topics.length === 0 ? (
            <div style={{ padding: '40px', background: '#fff', borderRadius: '20px', border: '1px dashed #cbd5e1', textAlign: 'center', color: '#94a3b8', fontWeight: 700 }}>
              No topics in this chapter. Use the chapter editor to add some.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
              {topics.map((t, idx) => (
                <div
                  key={t.id || idx}
                  style={{ borderRadius: '20px', border: '1px solid #e2e8f0', background: '#fff', display: 'flex', flexDirection: 'column', gap: '0', boxShadow: '0 4px 14px rgba(0,0,0,0.03)', overflow: 'hidden' }}
                >
                  <button
                    onClick={() => setSelectedTopicForBank({ chapter: ch, topic: t })}
                    style={{ textAlign: 'left', padding: '20px 22px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '8px', transition: 'background 0.15s', width: '100%' }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#f8f7ff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.code || `Topic ${idx + 1}`}</span>
                      <ChevronRight size={18} color="#94a3b8" />
                    </div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1e1b4b', lineHeight: 1.3 }}>{t.title}</div>
                  </button>
                  {hasLesson(t.id) && (
                    <button
                      onClick={() => setPreviewLesson(getLesson(t.id))}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '9px', borderTop: '1px solid #f1f0fe', background: '#faf8ff', border: 'none', borderTop: '1px solid #ede9fe', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 800, color: '#7c3aed', letterSpacing: '0.02em', transition: 'background 0.15s', width: '100%' }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#f5f3ff'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#faf8ff'; }}
                    >
                      <GraduationCap size={14} />
                      Preview Lesson
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>Curriculum</h2>
        </div>
      </div>

      {!isAdmin ? (
        profile?.showHscGraph === true ? (
          // HSC-activated students see the past-paper journey by default,
          // with an in-view toggle back to the regular curriculum roadmap.
          <HscJourney
            hscRecords={hscRecords}
            profile={profile}
            curriculumSlot={<LearningPath profile={profile} />}
            onPracticeByType={() => setShowPracticeByType(true)}
          />
        ) : (
          <LearningPath profile={profile} />
        )
      ) : (
        <>
          {/* ── Sticky top bar ── */}
          <div className="curriculum-topbar">
            <div className="curriculum-topbar__inner">
              {/* Row 1 — Title + actions */}
              <div className="curriculum-header">
                <div className="curriculum-header__title">
                  <h1>{selectedYear}</h1>
                  {courses && selectedCourse && <span className="curriculum-course-badge">{selectedCourse}</span>}
                  {/* Total question count: prefer seed count; fall back to Firestore count for chapters with no seed entry */}
                  {(() => {
                    const total = displayData.reduce((sum, ch) => {
                      const topicSum = (ch.topics || []).reduce((s, t) => s + Math.max(questionCounts[t.id] || 0, seedCountByTopic[t.id] || 0), 0);
                      const cnt = Math.max(seedCountByChapter[ch.id] || 0, questionCounts[ch.id] || 0, topicSum);
                      return sum + cnt;
                    }, 0);
                    if (total === 0) return null;
                    return (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '4px 10px', borderRadius: '999px', background: '#ede9fe', color: '#5b21b6', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.02em' }}>
                        {total.toLocaleString()} questions
                      </span>
                    );
                  })()}
                </div>
                <div className="curriculum-header__actions">
                  <div className={`curriculum-search${searchOpen || searchQuery ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      onClick={() => setSearchOpen(o => !o)}
                      style={{ border: 'none', background: 'transparent', padding: 0, display: 'flex', cursor: 'pointer' }}
                    >
                      <Search size={16} />
                    </button>
                    {(searchOpen || searchQuery) && (
                      <input
                        type="text"
                        placeholder="Search chapters..."
                        value={searchQuery}
                        autoFocus
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onBlur={() => !searchQuery && setSearchOpen(false)}
                      />
                    )}
                  </div>
                  {isAdmin && (
                    <>
                      <button
                        onClick={() => setShowAdminTools(v => !v)}
                        className="curriculum-icon-btn"
                        title="Admin tools"
                        style={{ background: showAdminTools ? 'rgba(99, 102, 241, 0.18)' : undefined }}
                      >
                        <Layers size={17} />
                      </button>
                      <button
                        onClick={() => setEditingChapter({ mode: 'add', chapter: { title: '', modules: 10 } })}
                        className="curriculum-icon-btn curriculum-icon-btn--primary"
                        title="Add chapter"
                      >
                        <Plus size={17} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Row 2 — Year tabs */}
              {(() => {
                // Compute total questions per year using the same logic as the top
                // badge: Math.max(seedCount, firestoreChapterCount, topicSum).
                // This keeps the year tab in sync with the displayed total.
                const countByYear = YEARS.reduce((acc, year) => {
                  let fallbackData = CURRICULUM_DATA[year] || [];
                  if (!Array.isArray(fallbackData)) {
                    // multi-course year — flatten all courses
                    fallbackData = Object.values(fallbackData).flat();
                  }
                  const total = fallbackData.reduce((sum, ch) => {
                    const topicSum = (ch.topics || []).reduce((s, t) => s + Math.max(questionCounts[t.id] || 0, seedCountByTopic[t.id] || 0), 0);
                    const cnt = Math.max(seedCountByChapter[ch.id] || 0, questionCounts[ch.id] || 0, topicSum);
                    return sum + cnt;
                  }, 0);
                  acc[year] = total;
                  return acc;
                }, {});
                return (
                  <div className="curriculum-year-tabs">
                    {YEARS.map(year => {
                      const count = countByYear[year] || 0;
                      return (
                        <button
                          key={year}
                          onClick={() => {
                            setSelectedYear(year);
                            if (year === 'Year 11' || year === 'Year 12' || year === 'Past Paper') setSelectedCourse('Advanced');
                          }}
                          className={`curriculum-year-tab${selectedYear === year ? ' curriculum-year-tab--active' : ''}`}
                        >
                          {year}
                          {isAdmin && count > 0 && (
                            <span style={{ display: 'block', fontSize: '0.62rem', fontWeight: 700, opacity: 0.7, lineHeight: 1, marginTop: '2px' }}>
                              {count.toLocaleString()} Qs
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                );
              })()}

              {/* Row 3 — Course tabs (Year 11/12 only) */}
              {courses && (
                <div className="curriculum-course-tabs" style={{ marginBottom: '12px' }}>
                  {courses.map(course => (
                    <button
                      key={course}
                      onClick={() => setSelectedCourse(course)}
                      className={`curriculum-course-tab${selectedCourse === course ? ' curriculum-course-tab--active' : ''}`}
                    >
                      {course}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Main content ── */}
          <div className="curriculum-content">
            {/* Admin tools — collapsed by default */}
            {/* Admin tools — collapsed by default */}
            {showAdminTools && (
              <div className="curriculum-admin-panel">
                <div className="admin-panel-header">
                  <div className="admin-panel-title">🛠️ Curriculum Sync Dashboard</div>
                  <div className="admin-tabs">
                    <button
                      className={`admin-tab-btn ${adminActiveTab === 'y11_12' ? 'active' : ''}`}
                      onClick={() => setAdminActiveTab('y11_12')}
                    >
                      Questions Seeding
                    </button>
                    <button 
                      className={`admin-tab-btn ${adminActiveTab === 'utils' ? 'active' : ''}`}
                      onClick={() => setAdminActiveTab('utils')}
                    >
                      Utilities
                    </button>
                  </div>
                </div>

                <div className="admin-panel-body">
                  {adminActiveTab === 'y11_12' && (() => {
                    // Helper to render a single seed card
                    const SeedCard = ({ badge, badgeStyle, title, countKey, onSeed, extraCount }) => {
                      const count = extraCount !== undefined
                        ? extraCount
                        : (questionCounts[countKey] || 0);
                      return (
                        <div className="sync-card" style={{ opacity: count ? 0.45 : 1 }}>
                          <div className="sync-card-info">
                            <span className="sync-card-badge" style={badgeStyle}>{badge}</span>
                            <span className="sync-card-title">{title}</span>
                          </div>
                          <div className="sync-card-actions">
                            {count
                              ? <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981' }}>✓ Done</span>
                              : <button onClick={onSeed} disabled={isMigrating} className="sync-btn warning">🌱 Seed</button>
                            }
                          </div>
                        </div>
                      );
                    };

                    // Split registry into chapters vs past papers
                    const chapterRegistry = seedRegistry.filter(e => !e.chapterId.startsWith('exam:'));
                    const pastPaperRegistry = seedRegistry.filter(e => e.chapterId.startsWith('exam:'));

                    // Group chapters by year
                    const byYear = chapterRegistry.reduce((acc, entry) => {
                      const y = entry.year || 'Other';
                      if (!acc[y]) acc[y] = [];
                      acc[y].push(entry);
                      return acc;
                    }, {});

                    const yearOrder = ['Year 12', 'Year 11', 'Year 10', 'Year 9', 'Year 8', 'Year 7', 'Year 6', 'Other'];
                    const yearColors = {
                      'Year 12': { bg: '#8b5cf6', label: '#fff' },
                      'Year 11': { bg: '#6366f1', label: '#fff' },
                      'Year 10': { bg: '#06b6d4', label: '#fff' },
                      'Year 9':  { bg: '#10b981', label: '#fff' },
                      'Year 8':  { bg: '#3b82f6', label: '#fff' },
                      'Year 7':  { bg: '#ec4899', label: '#fff' },
                      'Year 6':  { bg: '#f59e0b', label: '#fff' },
                      'Other':   { bg: '#94a3b8', label: '#fff' },
                    };

                    // Manual cards keyed by year
                    const manualByYear = {
                      'Year 11': {
                        'Advanced': [
                          <SeedCard key="y11-1" badge="Y11 CH1" badgeStyle={{ background: '#6366f1', color: '#fff' }} title="Algebra (Ch1)" countKey={null} extraCount={(questionCounts['y11a-1'] || 0) + (questionCounts['y11-1'] || 0)} onSeed={handleSeedAlgebraQuestions} />,
                          <SeedCard key="y11-5" badge="Y11 CH5" badgeStyle={{ background: '#6366f1', color: '#fff' }} title="Transformations (Ch5)" countKey="y11a-5" onSeed={handleSeedY11Ch5Questions} />,
                        ],
                        'Standard': [],
                        'Extension 1': []
                      },
                      'Year 9': [
                        <SeedCard key="y9-2" badge="Y9 CH2" badgeStyle={{ background: '#10b981', color: '#fff' }} title="Pythagoras (Ch2)" countKey="y9-2" onSeed={handleSeedY9Ch2Questions} />,
                      ],
                      'Year 6': [
                        <SeedCard key="y6-wn" badge="Y6 WN" badgeStyle={{ background: '#f59e0b', color: '#fff' }} title="Whole Numbers" countKey="y6-wn" onSeed={handleSeedWholeNumbersQuestions} />,
                        <SeedCard key="y6-frac" badge="Y6 Frac" badgeStyle={{ background: '#f59e0b', color: '#fff' }} title="Fractions" countKey="y6-frac" onSeed={handleSeedFractionsQuestions} />,
                      ],
                    };

                    const toggleYear = (year) =>
                      setExpandedSeedYears((prev) => ({ ...prev, [year]: !prev[year] }));

                    const renderTopicCard = (entry, year) => {
                      const count = questionCounts[entry.topicId];
                      return (
                        <div className="sync-card" key={`${entry.chapterId}-${entry.topicId}`} style={{ opacity: count ? 0.45 : 1 }}>
                          <div className="sync-card-info">
                            <span className="sync-card-badge" style={{ background: yearColors[year]?.bg, color: yearColors[year]?.label }}>
                              {entry.topicCode || entry.chapterId}
                            </span>
                            <span className="sync-card-title">{entry.label || entry.topicTitle}</span>
                          </div>
                          <div className="sync-card-actions">
                            {count && <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', marginRight: '8px' }}>✓ Done</span>}
                            <button onClick={() => handleSeedChapter(entry)} disabled={isMigrating} className="sync-btn warning">🌱 Seed</button>
                          </div>
                        </div>
                      );
                    };

                    return (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {/* Sub-tabs */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid #e2e8f0', paddingBottom: '10px' }}>
                          {[{ id: 'chapters', label: '📚 Chapter Questions' }, { id: 'past_papers', label: '📝 Past Papers' }].map(({ id, label }) => (
                            <button
                              key={id}
                              onClick={() => { setSeedSubTab(id); setSeedSearch(''); }}
                              style={{
                                padding: '6px 16px', borderRadius: '999px', border: 'none', cursor: 'pointer',
                                fontSize: '0.78rem', fontWeight: 700,
                                background: seedSubTab === id ? '#8b5cf6' : '#f1f5f9',
                                color: seedSubTab === id ? '#fff' : '#64748b',
                              }}
                            >
                              {label}
                            </button>
                          ))}
                          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '4px 12px' }}>
                            <Search size={13} style={{ color: '#a78bfa', flexShrink: 0 }} />
                            <input
                              type="text"
                              placeholder={seedSubTab === 'past_papers' ? 'Search papers…' : 'Search chapters…'}
                              value={seedSearch}
                              onChange={e => setSeedSearch(e.target.value)}
                              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.78rem', color: '#1e1b4b', width: '140px' }}
                            />
                            {seedSearch && (
                              <button onClick={() => setSeedSearch('')} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: '#94a3b8' }}>
                                <X size={12} />
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Chapter Questions — Year → Chapter tabs → Topic seeds */}
                        {seedSubTab === 'chapters' && yearOrder.map((year) => {
                          const sq = seedSearch.toLowerCase();
                          let yearEntries = byYear[year] || [];
                          let manualCards = manualByYear[year] || [];
                          if (sq) {
                            yearEntries = yearEntries.filter(e =>
                              e.chapterTitle?.toLowerCase().includes(sq) ||
                              e.topicTitle?.toLowerCase().includes(sq) ||
                              e.topicCode?.toLowerCase().includes(sq) ||
                              e.label?.toLowerCase().includes(sq)
                            );
                            if (Array.isArray(manualCards)) {
                              manualCards = manualCards.filter(e =>
                                e.label?.toLowerCase().includes(sq) ||
                                e.chapterTitle?.toLowerCase().includes(sq)
                              );
                            } else {
                              const filteredObj = {};
                              Object.keys(manualCards).forEach(courseKey => {
                                filteredObj[courseKey] = manualCards[courseKey].filter(e =>
                                  e.label?.toLowerCase().includes(sq) ||
                                  e.chapterTitle?.toLowerCase().includes(sq)
                                );
                              });
                              manualCards = filteredObj;
                            }
                          }

                          const totalManualCount = Array.isArray(manualCards)
                            ? manualCards.length
                            : Object.values(manualCards).reduce((sum, arr) => sum + (arr?.length || 0), 0);
                          const totalSets = yearEntries.length + totalManualCount;
                          const doneCount = yearEntries.filter(e => questionCounts[e.topicId]).length;
                          const isOpen = sq ? true : (expandedSeedYears[year] ?? false);

                          if (yearEntries.length === 0 && totalManualCount === 0) return null;

                          const selectedCourse = selectedSeedCourse[year] || 'Advanced';
                          const selectedChapterKey = `sel-${year}`;

                          const isSenior = ['Year 11', 'Year 12'].includes(year);
                          const filteredYearEntries = isSenior
                            ? yearEntries.filter(e => getCourseFromEntry(e) === selectedCourse)
                            : yearEntries;

                          const filteredManualCards = isSenior
                            ? (Array.isArray(manualCards) ? (selectedCourse === 'Advanced' ? manualCards : []) : (manualCards[selectedCourse] || []))
                            : manualCards;

                          const chapterMap = filteredYearEntries.reduce((acc, entry) => {
                            if (!acc[entry.chapterId]) acc[entry.chapterId] = { title: entry.chapterTitle, entries: [] };
                            acc[entry.chapterId].entries.push(entry);
                            return acc;
                          }, {});
                          const chapterIds = Object.keys(chapterMap);

                          let selectedChapterId = expandedSeedYears[selectedChapterKey];
                          if (!selectedChapterId || !chapterIds.includes(selectedChapterId)) {
                            selectedChapterId = chapterIds[0];
                          }

                          return (
                            <div key={year} style={{ border: '1px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden' }}>
                              {/* Year header */}
                              <button
                                onClick={() => toggleYear(year)}
                                style={{
                                  width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                                  padding: '14px 18px', background: isOpen ? '#faf5ff' : '#fff',
                                  border: 'none', cursor: 'pointer', textAlign: 'left',
                                  borderBottom: isOpen ? '1px solid #e2e8f0' : 'none',
                                }}
                              >
                                <span style={{ background: yearColors[year]?.bg, color: '#fff', fontWeight: 900, fontSize: '0.75rem', padding: '4px 12px', borderRadius: '999px', flexShrink: 0 }}>{year}</span>
                                <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#475569' }}>{totalSets} sets</span>
                                <span style={{ marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 700, color: doneCount > 0 ? '#10b981' : '#94a3b8' }}>
                                  {doneCount > 0 ? `${doneCount} seeded` : 'not seeded'}
                                </span>
                                <span style={{ fontSize: '0.85rem', color: '#94a3b8', flexShrink: 0 }}>{isOpen ? '▲' : '▼'}</span>
                              </button>

                              {isOpen && (
                                <div style={{ padding: '12px 16px 16px' }}>
                                  {/* Course Tabs inside Year 11 / Year 12 */}
                                  {isSenior && (
                                    <div style={{ display: 'flex', gap: '6px', marginBottom: '14px', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px' }}>
                                      {(year === 'Year 11' ? ['Standard', 'Advanced', 'Extension 1'] : ['Standard', 'Advanced', 'Extension 1', 'Extension 2']).map(c => {
                                        const isCourseSelected = selectedCourse === c;
                                        const courseEntries = (byYear[year] || []).filter(e => getCourseFromEntry(e) === c);
                                        const courseSeededCount = courseEntries.filter(e => questionCounts[e.topicId]).length;

                                        return (
                                          <button
                                            key={c}
                                            type="button"
                                            onClick={() => {
                                              setSelectedSeedCourse(prev => ({ ...prev, [year]: c }));
                                              const newCourseEntries = (byYear[year] || []).filter(e => getCourseFromEntry(e) === c);
                                              const firstCid = newCourseEntries[0]?.chapterId || '';
                                              setExpandedSeedYears(prev => ({ ...prev, [selectedChapterKey]: firstCid }));
                                            }}
                                            style={{
                                              padding: '5px 12px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                                              fontSize: '0.74rem', fontWeight: 800,
                                              background: isCourseSelected ? yearColors[year]?.bg : '#f1f5f9',
                                              color: isCourseSelected ? '#fff' : '#64748b',
                                              display: 'flex', alignItems: 'center', gap: '5px',
                                              transition: 'all 0.15s'
                                            }}
                                          >
                                            {c}
                                            {courseSeededCount > 0 && (
                                              <span style={{ fontSize: '0.62rem', background: isCourseSelected ? 'rgba(255,255,255,0.25)' : '#e2e8f0', color: isCourseSelected ? '#fff' : '#475569', padding: '1px 5px', borderRadius: '999px' }}>
                                                {courseSeededCount}
                                              </span>
                                            )}
                                          </button>
                                        );
                                      })}
                                    </div>
                                  )}

                                  {/* Manual cards (no chapter grouping) */}
                                  {filteredManualCards.length > 0 && (
                                    <div className="admin-sync-grid" style={{ marginBottom: chapterIds.length > 0 ? '12px' : 0 }}>
                                      {filteredManualCards}
                                    </div>
                                  )}

                                  {/* Chapter pill tabs */}
                                  {chapterIds.length > 0 ? (
                                    <>
                                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '12px' }}>
                                        {chapterIds.map(cid => {
                                          const chEntries = chapterMap[cid].entries;
                                          const chDone = chEntries.filter(e => questionCounts[e.topicId]).length;
                                          const isSelected = selectedChapterId === cid;
                                          const shortLabel = chapterMap[cid].title.match(/Chapter\s+(\S+)/i)?.[1]
                                            ? `Ch${chapterMap[cid].title.match(/Chapter\s+(\S+)/i)[1]}`
                                            : cid;
                                          return (
                                            <button
                                              key={cid}
                                              onClick={() => setExpandedSeedYears(prev => ({ ...prev, [selectedChapterKey]: cid }))}
                                              style={{
                                                padding: '5px 14px', borderRadius: '999px', border: 'none', cursor: 'pointer',
                                                fontSize: '0.74rem', fontWeight: 700,
                                                background: isSelected ? yearColors[year]?.bg : '#f1f5f9',
                                                color: isSelected ? '#fff' : '#475569',
                                                position: 'relative',
                                              }}
                                            >
                                              {shortLabel}
                                              {chDone > 0 && (
                                                <span style={{
                                                  position: 'absolute', top: '-4px', right: '-4px',
                                                  background: '#10b981', color: '#fff',
                                                  fontSize: '0.6rem', fontWeight: 900,
                                                  borderRadius: '999px', padding: '1px 4px', lineHeight: 1.4,
                                                }}>✓</span>
                                              )}
                                            </button>
                                          );
                                        })}
                                      </div>

                                      {/* Selected chapter title */}
                                      {selectedChapterId && chapterMap[selectedChapterId] && (
                                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', marginBottom: '10px', paddingLeft: '2px' }}>
                                          {chapterMap[selectedChapterId].title}
                                        </div>
                                      )}

                                      {/* Topic seed cards for selected chapter */}
                                      <div className="admin-sync-grid">
                                        {(chapterMap[selectedChapterId]?.entries || []).map(entry => renderTopicCard(entry, year))}
                                      </div>
                                    </>
                                  ) : (
                                    isSenior && (
                                      <div style={{ textAlign: 'center', padding: '24px', color: '#94a3b8', fontSize: '0.8rem', fontWeight: 600 }}>
                                        No seed templates registered for Year 11 {selectedCourse} chapters yet.
                                      </div>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          );
                        })}

                        {/* Past Papers */}
                        {seedSubTab === 'past_papers' && (() => {
                          // Group past papers by year (with optional search filter)
                          const sq = seedSearch.toLowerCase();
                          const filteredRegistry = sq
                            ? pastPaperRegistry.filter(e =>
                                e.chapterTitle?.toLowerCase().includes(sq) ||
                                e.label?.toLowerCase().includes(sq) ||
                                e.chapterId?.toLowerCase().includes(sq)
                              )
                            : pastPaperRegistry;

                          const ppByYear = filteredRegistry.reduce((acc, entry) => {
                            const y = entry.year || 'Other';
                            if (!acc[y]) acc[y] = [];
                            acc[y].push(entry);
                            return acc;
                          }, {});

                          const ppYears = yearOrder.filter(y => ppByYear[y]);
                          if (ppYears.length === 0) {
                            return <div style={{ color: '#94a3b8', fontSize: '0.85rem', padding: '24px', textAlign: 'center' }}>{sq ? `No results for "${seedSearch}"` : 'No past papers added yet.'}</div>;
                          }

                          return ppYears.map((year) => {
                            const entries = ppByYear[year];
                            const doneCount = entries.filter(e => questionCounts[e.topicId]).length;
                            const isOpen = sq ? true : (expandedSeedYears[`pp-${year}`] ?? false);

                            return (
                              <div key={`pp-${year}`} style={{ border: '1px solid #e2e8f0', borderRadius: '14px', overflow: 'hidden' }}>
                                <button
                                  onClick={() => setExpandedSeedYears(prev => ({ ...prev, [`pp-${year}`]: !prev[`pp-${year}`] }))}
                                  style={{
                                    width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                                    padding: '14px 18px', background: isOpen ? '#fdf4ff' : '#fff',
                                    border: 'none', cursor: 'pointer', textAlign: 'left',
                                    borderBottom: isOpen ? '1px solid #e2e8f0' : 'none',
                                  }}
                                >
                                  <span style={{ background: yearColors[year]?.bg || '#94a3b8', color: '#fff', fontWeight: 900, fontSize: '0.75rem', padding: '4px 12px', borderRadius: '999px', flexShrink: 0 }}>{year}</span>
                                  <span style={{ fontWeight: 700, fontSize: '0.82rem', color: '#475569' }}>{entries.length} papers</span>
                                  <span style={{ marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 700, color: doneCount > 0 ? '#10b981' : '#94a3b8' }}>
                                    {doneCount > 0 ? `${doneCount} seeded` : 'not seeded'}
                                  </span>
                                  <span style={{ fontSize: '0.85rem', color: '#94a3b8', flexShrink: 0 }}>{isOpen ? '▲' : '▼'}</span>
                                </button>
                                {isOpen && (
                                  <div className="admin-sync-grid" style={{ padding: '16px' }}>
                                    {entries.map(entry => {
                                      const count = questionCounts[entry.topicId];
                                      return (
                                        <div className="sync-card" key={entry.chapterId} style={{ opacity: count ? 0.45 : 1 }}>
                                          <div className="sync-card-info">
                                            <span className="sync-card-badge" style={{ background: '#8b5cf6', color: '#fff' }}>
                                              {entry.badgeLabel || 'EXAM'}
                                            </span>
                                            <span className="sync-card-title">{entry.chapterTitle}</span>
                                          </div>
                                          <div className="sync-card-actions">
                                            {count
                                              ? <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981' }}>✓ Done</span>
                                              : <button onClick={() => handleSeedChapter(entry)} disabled={isMigrating} className="sync-btn warning">🌱 Seed</button>
                                            }
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                              </div>
                            );
                          });
                        })()}
                      </div>
                    );
                  })()}

                  {adminActiveTab === 'utils' && (
                    <div className="admin-sync-grid">
                      {/* Assign all chapters to all students */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge generic">BULK</span>
                          <span className="sync-card-title">Set all chapters Active for all students</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={handleAssignAllChaptersToAllStudents} disabled={isMigrating} className="sync-btn warning">
                            ✅ 전체 Active
                          </button>
                        </div>
                      </div>

                      {/* Add Curve Q */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge generic">UTILS</span>
                          <span className="sync-card-title">Add Curve Fitting Questions</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={handleSeedCurveQuestion} disabled={isMigrating} className="sync-btn success">
                            ➕ Add Curve Q
                          </button>
                        </div>
                      </div>

                      {/* Verify aggregate question counts vs live Firestore */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge generic">UTILS</span>
                          <span className="sync-card-title">Verify question counts ({selectedYear})</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={handleVerifyCounts} disabled={isMigrating} className="sync-btn primary-grad">
                            ✔️ Verify Counts
                          </button>
                        </div>
                      </div>

                      {/* Sync Selected Year */}
                      {((['Year 11', 'Year 12'].includes(selectedYear) && CURRICULUM_DATA[selectedYear]?.[selectedCourse]) || Array.isArray(CURRICULUM_DATA[selectedYear])) && (
                        <div className="sync-card">
                          <div className="sync-card-info">
                            <span className="sync-card-badge generic">YEAR SYNC</span>
                            <span className="sync-card-title">Sync entire {selectedYear} ({['Year 11', 'Year 12'].includes(selectedYear) ? selectedCourse : 'Core'})</span>
                          </div>
                          <div className="sync-card-actions">
                            <button onClick={handleSyncSelectedYear} className="sync-btn primary-grad">
                              🔄 Sync {selectedYear}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ── Past Paper question types grid ── */}
            {selectedYear === 'Past Paper' && (() => {
              const levelMap = {
                'Standard': 'Standard',
                'Advanced': 'Advanced',
                'Extension 1': 'Extension 1',
                'Extension 2': 'Extension 2',
              };
              const filtered = questionTypes.filter(t => {
                const lvl = t.examLevel || '';
                if (selectedCourse === 'Standard') return lvl === 'Standard' || lvl === 'Both';
                if (selectedCourse === 'Advanced') return lvl === 'Advanced' || lvl === 'Both';
                if (selectedCourse === 'Extension 1') return lvl === 'Extension 1';
                if (selectedCourse === 'Extension 2') return lvl === 'Extension 2';
                return true;
              });
              if (questionTypesLoading) {
                return (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px', marginTop: '8px' }}>
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} style={{ height: '110px', borderRadius: '16px', background: '#f1f5f9', animation: 'pulse 1.5s infinite' }} />
                    ))}
                  </div>
                );
              }
              if (filtered.length === 0) {
                return (
                  <div style={{ padding: '48px', textAlign: 'center', color: '#94a3b8', fontWeight: 700 }}>
                    No question types found for {selectedCourse}. Run "Import Question Types" from the Admin dashboard first.
                  </div>
                );
              }
              return (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '16px', marginTop: '8px' }}>
                  {filtered.map(type => (
                    <motion.div
                      key={type.slug}
                      whileHover={{ y: -3, boxShadow: '0 12px 28px rgba(124,58,237,0.12)' }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedPastPaperType(type)}
                      style={{
                        background: '#fff',
                        border: '1.5px solid #e2e8f0',
                        borderRadius: '16px',
                        padding: '18px 20px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px' }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 900, fontSize: '0.95rem', color: '#1e1b4b', lineHeight: 1.3, marginBottom: '4px' }}>
                            {type.label}
                          </div>
                          <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.4, fontWeight: 600 }}>
                            {type.description}
                          </div>
                        </div>
                        <span style={{ background: '#f5f3ff', color: '#7c3aed', fontWeight: 800, fontSize: '0.7rem', padding: '3px 10px', borderRadius: '8px', flexShrink: 0 }}>
                          {type.count || 0} Q
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', background: '#f8fafc', padding: '3px 8px', borderRadius: '6px' }}>
                          {type.examLevel || 'Both'}
                        </span>
                        <span style={{ marginLeft: 'auto', fontSize: '0.72rem', fontWeight: 700, color: '#7c3aed' }}>
                          Edit questions →
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              );
            })()}

            <div className="chapters-grid" style={{ display: selectedYear === 'Past Paper' ? 'none' : undefined }}>
              {displayData.length > 0 ? displayData.map((chapter, chapterIndex) => {
                const p = chapter.modules > 0 ? Math.round(((chapter.completed || 0) / chapter.modules) * 100) : 0;
                return (
                  <div key={chapter.id} className="chapter-card" onClick={() => setSelectedChapterForQuestions({ ...chapter, year: selectedYear, course: selectedCourse, courses: courses })}>
                    <div className="chapter-card__head">
                      <div className="chapter-card__icon"><BookText size={18} /></div>
                      <div className="chapter-card__edits">
                        <button className="chapter-card__edit-btn" onClick={(e) => { e.stopPropagation(); setEditingChapter({ mode: 'edit', chapter }); }}><Edit2 size={13} /></button>
                        <button className="chapter-card__edit-btn chapter-card__delete-btn" onClick={(e) => { e.stopPropagation(); handleDeleteChapter(chapter.id); }}><Trash2 size={13} /></button>
                      </div>
                    </div>

                    <div>
                      <p className="chapter-card__number-badge">Chapter {chapterIndex + 1}</p>
                      <h3 className="chapter-card__title">{chapter.title}</h3>
                      <p className="chapter-card__meta">
                        {chapter.topics?.length ? `${chapter.topics.length} topics` : 'Core unit'}
                        {isAdmin && (() => {
                          const topicSum = (chapter.topics || []).reduce((s, t) => s + Math.max(questionCounts[t.id] || 0, seedCountByTopic[t.id] || 0), 0);
                          const cnt = Math.max(seedCountByChapter[chapter.id] || 0, questionCounts[chapter.id] || 0, topicSum);
                          return cnt > 0 ? (
                            <span className="chapter-card__meta-pill"> · {cnt} questions</span>
                          ) : null;
                        })()}
                      </p>
                    </div>

                    <div className="chapter-card__progress-row">
                      <div className="chapter-card__progress-label">
                        <span>Progress</span><span>{p}%</span>
                      </div>
                      <div className="chapter-card__progress-bar">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${p}%` }} className="chapter-card__progress-fill" />
                      </div>
                    </div>
                  </div>
                );
              }) : (
                <div className="curriculum-empty">No chapters found for this selection.</div>
              )}
            </div>
          </div>
        </>
      )}

      <AnimatePresence>
        {editingChapter && (
          <div className="app-modal" style={{ zIndex: 1000 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeEditingChapterModal} className="app-modal__backdrop" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              className="app-panel app-modal__card"
              style={{ maxWidth: '580px', width: '92%', padding: 0, overflow: 'hidden', borderRadius: '28px' }}
            >
              <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', padding: '28px 28px 24px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.75, marginBottom: '4px' }}>Chapter Editor</div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>{editingChapter.mode === 'add' ? 'New Chapter' : 'Edit Chapter'}</h3>
                </div>
                <button type="button" onClick={closeEditingChapterModal} style={{ background: 'rgba(255,255,255,0.18)', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                  <X size={18} />
                </button>
              </div>
              <form onSubmit={handleSaveChapter} style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Chapter Title</label>
                    <input required className="app-input" value={editingChapter.chapter.title} onChange={e => setEditingChapter({ ...editingChapter, chapter: { ...editingChapter.chapter, title: e.target.value } })} placeholder="e.g. Calculus: Differentiation" style={{ padding: '13px 16px', borderRadius: '13px', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Number of Modules</label>
                    <input required type="number" className="app-input" value={editingChapter.chapter.modules} onChange={e => setEditingChapter({ ...editingChapter, chapter: { ...editingChapter.chapter, modules: parseInt(e.target.value) } })} style={{ padding: '13px 16px', borderRadius: '13px', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '18px', marginTop: '4px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                    Subtopics ({editingChapter.chapter.topics?.length || 0})
                  </label>
                  
                  {/* Scrollable Subtopics List */}
                  {(editingChapter.chapter.topics && editingChapter.chapter.topics.length > 0) ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto', marginBottom: '14px', paddingRight: '4px' }}>
                      {editingChapter.chapter.topics.map((sub, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
                            <span style={{ background: '#e0e7ff', color: '#4f46e5', fontWeight: 800, fontSize: '0.75rem', padding: '2px 8px', borderRadius: '6px' }}>
                              {sub.code}
                            </span>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {sub.title}
                            </span>
                            {sub.page && (
                              <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 }}>
                                (p. {sub.page})
                              </span>
                            )}
                          </div>
                          <div style={{ display: 'flex', gap: '4px' }}>
                            <button type="button" onClick={() => handleEditSubtopicClick(index, sub)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                              <Edit2 size={13} />
                            </button>
                            <button type="button" onClick={() => handleDeleteSubtopic(index)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ padding: '14px', background: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1', textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '14px' }}>
                      No subtopics added yet.
                    </div>
                  )}

                  {/* Inline Add/Edit Subtopic Form */}
                  <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {editingSubtopicIndex >= 0 ? 'Edit Subtopic' : 'Add New Subtopic'}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <input 
                        placeholder="Code" 
                        value={subtopicForm.code} 
                        onChange={e => setSubtopicForm({ ...subtopicForm, code: e.target.value })} 
                        style={{ width: '65px', padding: '8px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '0.85rem', fontWeight: 700, color: '#334155' }} 
                      />
                      <input 
                        placeholder="Subtopic Title" 
                        value={subtopicForm.title} 
                        onChange={e => setSubtopicForm({ ...subtopicForm, title: e.target.value })} 
                        style={{ flex: 1, padding: '8px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '0.85rem', fontWeight: 500, color: '#334155' }} 
                      />
                      <input 
                        type="number" 
                        placeholder="Page" 
                        value={subtopicForm.page} 
                        onChange={e => setSubtopicForm({ ...subtopicForm, page: e.target.value })} 
                        style={{ width: '55px', padding: '8px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '0.85rem', fontWeight: 500, color: '#334155' }} 
                      />
                      <button 
                        type="button" 
                        onClick={handleAddOrUpdateSubtopic} 
                        style={{ 
                          padding: '8px 12px', 
                          background: editingSubtopicIndex >= 0 ? '#10b981' : '#6366f1', 
                          color: '#fff', 
                          border: 'none', 
                          borderRadius: '8px', 
                          cursor: 'pointer', 
                          fontWeight: 700, 
                          fontSize: '0.8rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        {editingSubtopicIndex >= 0 ? 'Save' : <Plus size={14} />}
                      </button>
                      {editingSubtopicIndex >= 0 && (
                        <button 
                          type="button" 
                          onClick={() => { setEditingSubtopicIndex(-1); setSubtopicForm({ code: '', title: '', page: '' }); }} 
                          style={{ padding: '8px 10px', background: '#cbd5e1', color: '#475569', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.8rem' }}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <button type="submit" className="app-button app-button--primary" style={{ width: '100%', padding: '14px', borderRadius: '14px', fontWeight: 800, fontSize: '0.95rem', marginTop: '4px' }}>
                  <Save size={16} /> Save Chapter
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Chapter-card click no longer opens a modal here — it triggers the
          early-return at the top of this component which renders the topics
          page, then the student-style QuestionBankPage on topic select. */}
    </div>
  );
};

export default Curriculum;
