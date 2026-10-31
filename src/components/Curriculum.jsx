import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, CheckCircle2, ChevronRight, 
  Layers, GraduationCap, Star, Clock, 
  Search, BookText, Award, Lock, Plus, Edit2, Trash2, Save, X,
  Target, TrendingUp, Sparkles
} from 'lucide-react';
import { auth, db } from '../firebase/config';
import { doc, collection, updateDoc, setDoc, deleteDoc, getDocs, getDoc, serverTimestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { withTimeout } from '../utils/withTimeout';
import { useProfile } from '../context/ProfileContext';
import { useToast } from '../context/ToastContext';
import { hasLesson, getLesson } from '../lessons/registry';
import LessonPlayer from './lessons/LessonPlayer';
import { CURRICULUM_DATA, trackLabel } from '../constants/curriculumData';
import QuestionBankModal from './QuestionBankModal';
import PendingReviewPanel from './PendingReviewPanel';
import QuestionBankPage from './QuestionBankPage';
import LearningPath from './LearningPath';
import HscJourney from './HscJourney';
import BookAnswersModal from './curriculum/BookAnswersModal';
import HscTypePractice from './hsc/HscTypePractice';
import { getContentCounts, adminPendingQuestions } from '../services/contentLoader';

import {
  fetchHscResultsIncremental,
  loadCachedHscResults,
} from '../services/hscResultsService';
import { localCache } from '../services/localCacheService';
import { toThumbnailUrl, getChapterCheatSheets } from '../utils/cheatSheetUtils';
import { toDrivePreviewUrl } from '../utils/homework';
import CheatSheetLightbox from './CheatSheetLightbox';
import './curriculum.css';
import './hsc-chart.css';

const YEARS = [...Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`), 'Past Paper', 'Scholarship'];
const PAST_PAPER_COURSES = ['Standard', 'Advanced', 'Extension 1', 'Extension 2'];
// Bump the cache key suffix to invalidate every client's stored counts once.
const QUESTION_COUNT_CACHE_KEY = 'sapere:question-counts:v7';
const CURRICULUM_CACHE_KEY = 'curriculum-records:v1';

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

const Curriculum = ({ initialSearchId = null, onInitialSearchConsumed } = {}) => {
  const { user, isAdmin } = useAuth();
  const { showToast } = useToast();
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
  const [cheatSheetPreview, setCheatSheetPreview] = useState(null); // { url, title } | null
  const [editingSubtopicIndex, setEditingSubtopicIndex] = useState(-1);
  const [subtopicForm, setSubtopicForm] = useState({ code: '', title: '', page: '' });
  const [editingCheatSheetIndex, setEditingCheatSheetIndex] = useState(-1);
  const [cheatSheetForm, setCheatSheetForm] = useState({ label: '', url: '' });

  const closeEditingChapterModal = () => {
    setEditingChapter(null);
    setEditingSubtopicIndex(-1);
    setSubtopicForm({ code: '', title: '', page: '' });
  };
  // Chapter card click navigates to a topics list page (not a modal); choosing
  // a topic opens the student-style question bank page for that topic.
  const [selectedChapterForQuestions, setSelectedChapterForQuestions] = useState(null);
  const [viewedIds, setViewedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('sapere_viewed_questions');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [newUnreadQuestions, setNewUnreadQuestions] = useState([]);

  const reloadViewedIds = () => {
    try {
      const saved = localStorage.getItem('sapere_viewed_questions');
      setViewedIds(saved ? JSON.parse(saved) : []);
    } catch (e) {
      // ignore
    }
  };

  const [selectedTopicForBank, setSelectedTopicForBank] = useState(null);
  // Global question-ID search (any question, any chapter) — set on Enter in
  // the header search box. A synthetic 'search:' chapter id tells
  // QuestionBankPage to run one bounded documentId() prefix-range query
  // instead of reading a chapter's question_index, so this never scans the
  // full questions collection no matter how many chapters exist.
  const [selectedGlobalSearch, setSelectedGlobalSearch] = useState(initialSearchId);
  useEffect(() => { if (initialSearchId) onInitialSearchConsumed?.(); }, [initialSearchId, onInitialSearchConsumed]);
  const [previewLesson, setPreviewLesson] = useState(null);
  const [bookAnswersTopic, setBookAnswersTopic] = useState(null); // topic whose textbook answers are open
  const [questionCounts, setQuestionCounts] = useState({});

  // ── [TRAFFIC FIX] isNew badge: read ONE sync_meta doc (not 627 question docs) ──
  // sync_meta/newQuestions stores { ids: [...] } — maintained by update scripts.
  useEffect(() => {
    const fetchNewQuestions = async () => {
      try {
        const snap = await getDoc(doc(db, 'sync_meta', 'newQuestions'));
        if (!snap.exists()) { setNewUnreadQuestions([]); return; }
        const ids = snap.data()?.ids || [];
        // ids is the minimal list — store as lightweight objects for badge counts
        setNewUnreadQuestions(ids.map(id => ({ id })));
      } catch (err) {
        console.error('Failed to fetch new questions for notifications:', err);
      }
    };
    fetchNewQuestions();
  }, []);

  const [showAdminTools, setShowAdminTools] = useState(false);
  const [adminActiveTab, setAdminActiveTab] = useState('pending_review');
  const [searchOpen, setSearchOpen] = useState(false);
  const [hscRecords, setHscRecords] = useState([]);
  const [hscModalOpen, setHscModalOpen] = useState(false);

  // Pending-review badge count for the admin tab button. Refetches whenever
  // the tab is opened so approvals/rejections made in PendingReviewPanel are
  // reflected without needing a page reload.
  const [pendingReviewCount, setPendingReviewCount] = useState(0);
  useEffect(() => {
    if (!isAdmin || !showAdminTools) return undefined;
    let cancelled = false;
    (async () => {
      try {
        const count = (await adminPendingQuestions()).length;
        if (!cancelled) setPendingReviewCount(count);
      } catch (e) {
        if (!cancelled) setPendingReviewCount(0);
      }
    })();
    return () => { cancelled = true; };
  }, [isAdmin, showAdminTools, adminActiveTab]);

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
        // No answer from Firestore within 8 s → stop waiting (the finally below ends the loading state).
        const metaSnap = await withTimeout(getDoc(doc(db, 'sync_meta', 'curriculum')));
        const remoteVersion = Number(metaSnap.data()?.version || metaSnap.data()?.updatedAt?.toMillis?.() || 0);
        if (cached?.records && cached?.version === remoteVersion && remoteVersion > 0) return;
        const snap = await withTimeout(getDocs(collection(db, 'curriculum')), 15000);
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
    // Keep fields this form doesn't edit (homeworkPdfUrl is edited inline on each row, `group`, …).
    const preserved = editingSubtopicIndex >= 0 ? (currentTopics[editingSubtopicIndex] || {}) : {};
    const newSubtopic = {
      ...preserved,
      id: subtopicForm.id || `${editingChapter.chapter.id}-${subtopicForm.code.toLowerCase()}`,
      code: subtopicForm.code,
      title: subtopicForm.title,
      page: subtopicForm.page ? parseInt(subtopicForm.page) : '',
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

  const handleAddOrUpdateCheatSheet = (e) => {
    e.preventDefault();
    if (!cheatSheetForm.url) {
      showToast("Please enter an image URL.", "warning");
      return;
    }

    const currentSheets = getChapterCheatSheets(editingChapter.chapter);
    const newSheet = {
      id: cheatSheetForm.id || `${editingChapter.chapter.id || 'chapter'}-cs-${Date.now()}`,
      label: cheatSheetForm.label || 'Cheat Sheet',
      url: cheatSheetForm.url
    };

    const nextSheets = [...currentSheets];
    if (editingCheatSheetIndex >= 0) {
      nextSheets[editingCheatSheetIndex] = newSheet;
    } else {
      nextSheets.push(newSheet);
    }

    setEditingChapter({
      ...editingChapter,
      // Drop the legacy single-URL field once the array takes over, so we
      // don't end up with both shapes saved side by side.
      chapter: { ...editingChapter.chapter, cheatSheets: nextSheets, cheatSheetUrl: undefined }
    });

    setCheatSheetForm({ label: '', url: '' });
    setEditingCheatSheetIndex(-1);
  };

  const handleEditCheatSheetClick = (index, sheet) => {
    setEditingCheatSheetIndex(index);
    setCheatSheetForm({ id: sheet.id, label: sheet.label || '', url: sheet.url });
  };

  const handleDeleteCheatSheet = (index) => {
    const nextSheets = [...getChapterCheatSheets(editingChapter.chapter)];
    nextSheets.splice(index, 1);
    setEditingChapter({
      ...editingChapter,
      chapter: { ...editingChapter.chapter, cheatSheets: nextSheets, cheatSheetUrl: undefined }
    });

    if (editingCheatSheetIndex === index) {
      setCheatSheetForm({ label: '', url: '' });
      setEditingCheatSheetIndex(-1);
    } else if (editingCheatSheetIndex > index) {
      setEditingCheatSheetIndex(editingCheatSheetIndex - 1);
    }
  };

  const handleSubtopicPdfChange = (index, value) => {
    const currentTopics = [...(editingChapter.chapter.topics || [])];
    currentTopics[index] = { ...currentTopics[index], homeworkPdfUrl: value };
    setEditingChapter({ ...editingChapter, chapter: { ...editingChapter.chapter, topics: currentTopics } });
  };

  const handleSaveChapter = async (e) => {
    e.preventDefault();
    let chapterData = { ...editingChapter.chapter };

    // UX FIX: If user typed in the "Add Subtopic" form but forgot to click [+], 
    // we automatically append it to the topics array before saving!
    if (subtopicForm.code && subtopicForm.title) {
      const currentTopics = [...(chapterData.topics || [])];
      // Keep fields this form doesn't edit (homeworkPdfUrl is edited inline on each row, `group`, …).
      const preserved = editingSubtopicIndex >= 0 ? (currentTopics[editingSubtopicIndex] || {}) : {};
      const newSubtopic = {
        ...preserved,
        id: subtopicForm.id || `${chapterData.id || ''}-${subtopicForm.code.toLowerCase()}`,
        code: subtopicForm.code,
        title: subtopicForm.title,
        page: subtopicForm.page ? parseInt(subtopicForm.page) : '',
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

    // Homework PDFs are typed raw on each row: store the Drive /preview form,
    // and drop the key when blank (Firestore rejects undefined values).
    if (Array.isArray(chapterData.topics)) {
      chapterData.topics = chapterData.topics.map((t) => {
        const { homeworkPdfUrl: raw, ...rest } = t || {};
        const pdf = toDrivePreviewUrl(raw);
        return pdf ? { ...rest, homeworkPdfUrl: pdf } : rest;
      });
    }

    // Same UX fix for a cheat sheet typed but not [+]'d.
    if (cheatSheetForm.url) {
      const currentSheets = getChapterCheatSheets(chapterData);
      const newSheet = {
        id: cheatSheetForm.id || `${chapterData.id || 'chapter'}-cs-${Date.now()}`,
        label: cheatSheetForm.label || 'Cheat Sheet',
        url: cheatSheetForm.url
      };
      const nextSheets = [...currentSheets];
      if (editingCheatSheetIndex >= 0) {
        nextSheets[editingCheatSheetIndex] = newSheet;
      } else {
        nextSheets.push(newSheet);
      }
      chapterData.cheatSheets = nextSheets;
      delete chapterData.cheatSheetUrl; // Firestore setDoc rejects `undefined` field values
      setCheatSheetForm({ label: '', url: '' });
      setEditingCheatSheetIndex(-1);
    } else if (chapterData.cheatSheets || chapterData.cheatSheetUrl !== undefined) {
      // Normalize the legacy field away even when nothing pending was typed.
      chapterData.cheatSheets = getChapterCheatSheets(chapterData);
      delete chapterData.cheatSheetUrl;
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
  }, [displayData, isAdmin]);

  const countTopicIds = useMemo(() => {
    const ids = new Set();
    // Always fetch topic-level counts so chapter cards can sum them as a
    // fallback when questions were stored with wrong chapterId (e.g. topicId
    // used as chapterId in older seeding scripts).
    displayData.forEach(ch => {
      (ch.topics || []).forEach(t => { if (t.id) ids.add(t.id); });
    });
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
  }, [displayData, isAdmin]);

  useEffect(() => {
    if (countChapterIds.length === 0) return undefined;
    let cancelled = false;
    const cached = loadCachedQuestionCounts();
    setQuestionCounts((prev) => ({ ...cached.counts, ...prev }));

    // The published manifest carries every (chapter, topic) count — 1 cached GET.
    const fetchVisibleCounts = async () => {
      try {
        const counts = await getContentCounts();
        if (cancelled) return;
        const merged = { ...cached.counts };
        countChapterIds.forEach((id) => { merged[id] = counts.chapters[id] ?? 0; });
        countTopicIds.forEach((id) => { merged[id] = counts.topics[id] ?? 0; });
        setQuestionCounts(merged);
        saveCachedQuestionCounts(merged, counts.version);
      } catch (err) {
        console.error("Error fetching question counts:", err);
      }
    };

    fetchVisibleCounts();
    return () => {
      cancelled = true;
    };
  }, [isAdmin, countChapterIds, countTopicIds]);

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

  // Global question-ID search: synthetic 'search:' chapter, no topic.
  // QuestionBankPage runs a single bounded documentId() prefix-range query
  // for this — every question whose id starts with the typed string, from
  // any chapter/topic — instead of a full collection scan.
  if (selectedGlobalSearch) {
    return (
      <QuestionBankPage
        chapter={{ id: `search:${selectedGlobalSearch}`, title: `Search: "${selectedGlobalSearch}"`, searchPrefix: selectedGlobalSearch }}
        topic={null}
        onBack={() => setSelectedGlobalSearch(null)}
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
            onClick={() => { setSelectedChapterForQuestions(null); reloadViewedIds(); }}
            style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 14px', borderRadius: '12px', border: '1px solid #e2e8f0', background: '#fff', color: '#475569', fontWeight: 700, cursor: 'pointer' }}
          >
            ← Back to chapters
          </button>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>{ch.year || ''}</div>
            <h2 style={{ margin: 0, fontSize: '1.7rem', fontWeight: 900, color: '#1e1b4b' }}>{ch.title}</h2>
            <p style={{ margin: '4px 0 0', color: '#64748b', fontWeight: 600 }}>{topics.length} {topics.length === 1 ? 'topic' : 'topics'}</p>
          </div>
          {bookAnswersTopic && (
            <BookAnswersModal topic={bookAnswersTopic} onClose={() => setBookAnswersTopic(null)} />
          )}
          {previewLesson && (
            <LessonPlayer lesson={previewLesson} onClose={() => setPreviewLesson(null)} />
          )}
          {topics.length === 0 ? (
            <div style={{ padding: '40px', background: '#fff', borderRadius: '20px', border: '1px dashed #cbd5e1', textAlign: 'center', color: '#94a3b8', fontWeight: 700 }}>
              No topics in this chapter. Use the chapter editor to add some.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
              {topics.map((t, idx) => {
                const hasUnreadInTopic = newUnreadQuestions.some(q => q.topicId === t.id && !viewedIds.includes(q.id));
                return (
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
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#6366f1', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t.code || `Topic ${idx + 1}`}</span>
                          {hasUnreadInTopic && (
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} title="New questions inside" />
                          )}
                        </div>
                        <ChevronRight size={18} color="#94a3b8" />
                      </div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1e1b4b', lineHeight: 1.3 }}>{t.title}</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setBookAnswersTopic(t)}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '9px', border: 'none', borderTop: '1px solid #e0f2fe', background: '#f0f9ff', cursor: 'pointer', fontSize: '0.75rem', fontWeight: 800, color: '#0369a1', letterSpacing: '0.02em', width: '100%' }}
                    >
                      <BookOpen size={14} />
                      Book answers
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
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="app-page">
      {/* Student HSC view owns its own title (tab-aware). Admin keeps "Curriculum". */}
      {isAdmin && (
        <div className="app-page__header">
          <div className="app-page__title">
            <h2>Curriculum</h2>
          </div>
        </div>
      )}
      {!isAdmin ? (
        // Every student gets the tab shell (Curriculum | Learning path). HSC-activated
        // students additionally get the Past papers tab and land on it by default.
        // Title switches with the active tab inside HscJourney.
        <HscJourney
          hscRecords={hscRecords}
          profile={profile}
          curriculumSlot={<LearningPath profile={profile} />}
          onPracticeByType={() => setShowPracticeByType(true)}
          showPapers={profile?.showHscGraph === true}
        />
      ) : (
        <>
          {/* ── Sticky top bar ── */}
          <div className="curriculum-topbar">
            <div className="curriculum-topbar__inner">
              {/* Row 1 — Title + actions */}
              <div className="curriculum-header">
                <div className="curriculum-header__title">
                  <h1>{trackLabel(selectedYear)}</h1>
                  {courses && selectedCourse && <span className="curriculum-course-badge">{selectedCourse}</span>}
                  {/* Total question count from the content manifest (chapter count, or its topics' sum) */}
                  {(() => {
                    const total = displayData.reduce((sum, ch) => {
                      const topicSum = (ch.topics || []).reduce((s, t) => s + (questionCounts[t.id] || 0), 0);
                      const cnt = Math.max(questionCounts[ch.id] || 0, topicSum);
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
                        placeholder="Search chapters, or press Enter for a question ID..."
                        value={searchQuery}
                        autoFocus
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key !== 'Enter') return;
                          const trimmed = searchQuery.trim();
                          if (!trimmed) return;
                          setSelectedGlobalSearch(trimmed);
                          setSearchQuery('');
                          setSearchOpen(false);
                        }}
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
                // badge: Math.max(chapterCount, topicSum).
                // This keeps the year tab in sync with the displayed total.
                const countByYear = YEARS.reduce((acc, year) => {
                  let fallbackData = CURRICULUM_DATA[year] || [];
                  if (!Array.isArray(fallbackData)) {
                    // multi-course year — flatten all courses
                    fallbackData = Object.values(fallbackData).flat();
                  }
                  const total = fallbackData.reduce((sum, ch) => {
                    const topicSum = (ch.topics || []).reduce((s, t) => s + (questionCounts[t.id] || 0), 0);
                    const cnt = Math.max(questionCounts[ch.id] || 0, topicSum);
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
                          {trackLabel(year)}
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
                      className={`admin-tab-btn ${adminActiveTab === 'pending_review' ? 'active' : ''}`}
                      onClick={() => setAdminActiveTab('pending_review')}
                    >
                      Pending Review{pendingReviewCount > 0 ? ` (${pendingReviewCount})` : ''}
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
                  {adminActiveTab === 'pending_review' && <PendingReviewPanel />}

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
                const hasUnreadInChapter = newUnreadQuestions.some(q => q.chapterId === chapter.id && !viewedIds.includes(q.id));
                return (
                  <div key={chapter.id} className="chapter-card" onClick={() => setSelectedChapterForQuestions({ ...chapter, year: selectedYear, course: selectedCourse, courses: courses })}>
                    <div className="chapter-card__head">
                      <div className="chapter-card__icon" style={{ position: 'relative' }}>
                        <BookText size={18} />
                        {hasUnreadInChapter && (
                          <span
                            style={{
                              position: 'absolute',
                              top: '-3px',
                              right: '-3px',
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: '#ef4444',
                              border: '1.5px solid #fff'
                            }}
                            title="New questions inside"
                          />
                        )}
                      </div>
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
                          const topicSum = (chapter.topics || []).reduce((s, t) => s + (questionCounts[t.id] || 0), 0);
                          const cnt = Math.max(questionCounts[chapter.id] || 0, topicSum);
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

                    {getChapterCheatSheets(chapter).length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '2px' }}>
                        {getChapterCheatSheets(chapter).map((sheet, i) => (
                          <div
                            key={sheet.id || i}
                            onClick={(e) => { e.stopPropagation(); setCheatSheetPreview({ url: sheet.url, title: sheet.label || chapter.title, index: i, sheets: getChapterCheatSheets(chapter).map((x) => ({ url: x.url, title: x.label || chapter.title })) }); }}
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
                              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextSibling.style.display = 'inline-flex'; }}
                            />
                            <Sparkles size={12} color="#b45309" style={{ display: 'none' }} />
                            <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#92400e', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {sheet.label || 'Cheat Sheet'}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
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
        {cheatSheetPreview && (
          <CheatSheetLightbox preview={cheatSheetPreview} onClose={() => setCheatSheetPreview(null)} />
        )}

        {editingChapter && (
          <div className="app-modal" style={{ zIndex: 1000 }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={closeEditingChapterModal} className="app-modal__backdrop" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              className="app-panel app-modal__card"
              style={{ maxWidth: '580px', width: '92%', maxHeight: '90vh', padding: 0, overflow: 'hidden', borderRadius: '28px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ flexShrink: 0, background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', padding: '28px 28px 24px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.75, marginBottom: '4px' }}>Chapter Editor</div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>{editingChapter.mode === 'add' ? 'New Chapter' : 'Edit Chapter'}</h3>
                </div>
                <button type="button" onClick={closeEditingChapterModal} style={{ background: 'rgba(255,255,255,0.18)', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                  <X size={18} />
                </button>
              </div>
              <form onSubmit={handleSaveChapter} style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px', overflowY: 'auto' }}>
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

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '18px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>
                    Cheat Sheets ({getChapterCheatSheets(editingChapter.chapter).length})
                  </label>
                  <p style={{ margin: '0 0 12px', fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>Each one shows as a small thumbnail card on the chapter tile — click opens it full-screen for students. Add as many as you like.</p>

                  {getChapterCheatSheets(editingChapter.chapter).length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto', marginBottom: '14px', paddingRight: '4px' }}>
                      {getChapterCheatSheets(editingChapter.chapter).map((sheet, index) => (
                        <div key={sheet.id || index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', overflow: 'hidden' }}>
                            <img src={toThumbnailUrl(sheet.url, 40)} alt="" loading="lazy" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0, background: '#e2e8f0' }} onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }} />
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#334155', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                              {sheet.label || 'Cheat Sheet'}
                            </span>
                          </div>
                          <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
                            <button type="button" onClick={() => handleEditCheatSheetClick(index, sheet)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '4px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                              <Edit2 size={13} />
                            </button>
                            <button type="button" onClick={() => handleDeleteCheatSheet(index)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '4px', borderRadius: '4px', display: 'flex', alignItems: 'center' }}>
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ padding: '14px', background: '#f8fafc', borderRadius: '12px', border: '1px dashed #cbd5e1', textAlign: 'center', color: '#94a3b8', fontSize: '0.85rem', marginBottom: '14px' }}>
                      No cheat sheets added yet.
                    </div>
                  )}

                  <div style={{ background: '#f1f5f9', padding: '12px', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {editingCheatSheetIndex >= 0 ? 'Edit Cheat Sheet' : 'Add Cheat Sheet'}
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                      <input
                        placeholder="Label (optional)"
                        value={cheatSheetForm.label}
                        onChange={e => setCheatSheetForm({ ...cheatSheetForm, label: e.target.value })}
                        style={{ width: '130px', padding: '8px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '0.85rem', fontWeight: 600, color: '#334155' }}
                      />
                      <input
                        placeholder="Image URL"
                        value={cheatSheetForm.url}
                        onChange={e => setCheatSheetForm({ ...cheatSheetForm, url: e.target.value })}
                        style={{ flex: 1, padding: '8px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', background: '#fff', fontSize: '0.85rem', fontWeight: 500, color: '#334155' }}
                      />
                      <button
                        type="button"
                        onClick={handleAddOrUpdateCheatSheet}
                        style={{
                          padding: '8px 12px',
                          background: editingCheatSheetIndex >= 0 ? '#10b981' : '#6366f1',
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
                        {editingCheatSheetIndex >= 0 ? 'Save' : <Plus size={14} />}
                      </button>
                      {editingCheatSheetIndex >= 0 && (
                        <button
                          type="button"
                          onClick={() => { setEditingCheatSheetIndex(-1); setCheatSheetForm({ label: '', url: '' }); }}
                          style={{ padding: '8px 10px', background: '#cbd5e1', color: '#475569', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 700, fontSize: '0.8rem' }}
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '18px', marginTop: '4px' }}>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
                    Subtopics ({editingChapter.chapter.topics?.length || 0})
                  </label>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', margin: '-6px 0 10px' }}>
                    Homework PDF: paste a Google Drive link under each subtopic, shared as “Anyone with the link”.
                  </div>
                  
                  {/* Scrollable Subtopics List */}
                  {(editingChapter.chapter.topics && editingChapter.chapter.topics.length > 0) ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '360px', overflowY: 'auto', marginBottom: '14px', paddingRight: '4px' }}>
                      {editingChapter.chapter.topics.map((sub, index) => (
                        <div key={index} style={{ padding: '10px 14px', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                            {sub.homeworkPdfUrl && <span style={{ marginLeft: 6, fontSize: '0.65rem', fontWeight: 800, color: '#7c3aed' }}>PDF</span>}
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
                        <input
                          placeholder="Homework PDF — Google Drive link (optional)"
                          value={sub.homeworkPdfUrl || ''}
                          onChange={e => handleSubtopicPdfChange(index, e.target.value)}
                          style={{ marginTop: '8px', width: '100%', padding: '6px 10px', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#fff', fontSize: '0.78rem', color: '#334155' }}
                        />
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
