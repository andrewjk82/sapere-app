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
import { useToast } from '../context/ToastContext';
import { migrateCurriculumToFirestore } from '../constants/migrateCurriculum';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import { ALGEBRA_QUESTIONS_Y11A } from '../constants/seedQuestions.js';
import { SURDS_QUESTIONS_Y11A } from '../constants/seedSurdsQuestions.js';
import { WHOLE_NUMBER_QUESTIONS_Y6 } from '../constants/seedYear6WholeNumberQuestions.js';
import { FRACTION_QUESTIONS_Y6 } from '../constants/seedYear6FractionsQuestions.js';
import { CH5_QUESTIONS_Y11A } from '../constants/seedYear11Ch5Questions.js';
import { Y9_CH2A_QUESTIONS } from '../constants/seedSurdsQuestions.js';
import { Y9_CH3A_QUESTIONS } from '../constants/seedYear9Ch3Questions.js';
import { Y9_CH4A_QUESTIONS } from '../constants/seedYear9Ch4Questions.js';
import { Y9_CH5A_QUESTIONS } from '../constants/seedYear9Ch5Questions.js';
import QuestionBankModal from './QuestionBankModal';
import LearningPath from './LearningPath';
import HscJourney from './HscJourney';
import {
  fetchHscResultsIncremental,
  loadCachedHscResults,
} from '../services/hscResultsService';
import { localCache } from '../services/localCacheService';
import './curriculum.css';
import './hsc-chart.css';


const YEARS = Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`);
const QUESTION_COUNT_CACHE_KEY = 'sapere:question-counts:v3';
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
  const [selectedYear, setSelectedYear] = useState('Year 11');
  const [selectedCourse, setSelectedCourse] = useState('Advanced');
  const [searchQuery, setSearchQuery] = useState('');
  const [profile, setProfile] = useState(null);
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
  const [selectedChapterForQuestions, setSelectedChapterForQuestions] = useState(null);
  const [questionCounts, setQuestionCounts] = useState({});
  const [showAdminTools, setShowAdminTools] = useState(false);
  const [adminActiveTab, setAdminActiveTab] = useState('y11_12');
  const [searchOpen, setSearchOpen] = useState(false);
  const [hscRecords, setHscRecords] = useState([]);
  const [hscModalOpen, setHscModalOpen] = useState(false);

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
    const newChapters = (currentRecord?.chapters || []).filter(c => c.id !== chapterId);
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
    const chapterData = editingChapter.chapter;
    let newChapters = [...(currentRecord?.chapters || [])];

    if (editingChapter.mode === 'add') {
      const newId = `${selectedYear.toLowerCase().replace(' ', '')}-${Date.now()}`;
      newChapters.push({ ...chapterData, id: newId });
    } else {
      newChapters = newChapters.map(c => c.id === chapterData.id ? chapterData : c);
    }

    await handleUpdateChapters(newChapters);
    closeEditingChapterModal();
  };

  const handleSeedAlgebraQuestions = async () => {
    if (!window.confirm("This will replace all existing questions for Chapter 1 with the latest 74 questions. Continue?")) return;
    setIsMigrating(true);
    try {
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      const collRef = collection(db, 'questions');
      
      // 1. Clear existing
      const q = query(collRef, where('chapterId', '==', 'y11a-1'));
      const snap = await getDocs(q);
      const batch = writeBatch(db);
      snap.docs.forEach(d => batch.delete(d.ref));
      await batch.commit();

      // 2. Add new
      const addBatch = writeBatch(db);
      
      ALGEBRA_QUESTIONS_Y11A.forEach(qData => {
        const docRef = doc(collRef);
        const shuffledOpts = [...qData.opts].sort(() => Math.random() - 0.5);
        const correctIndex = shuffledOpts.indexOf(qData.a);

        addBatch.set(docRef, {
          chapterId: 'y11a-1',
          chapterTitle: 'Chapter 1: Algebra review',
          topicId: 'y11a-1' + qData.c.slice(-1),
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
      showToast("Successfully updated 74 Algebra questions!", 'success');
    } catch (err) {
      console.error(err);
      showToast("Failed to update questions.", 'error');
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
      const { collection, query, where, getDocs, writeBatch, doc, serverTimestamp } = await import('firebase/firestore');
      
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
      showToast(`Successfully updated ${CH5_QUESTIONS_Y11A.length} Ch5 questions!`, 'success');
      
      if (typeof window !== 'undefined') {
        const cached = loadCachedQuestionCounts();
        cached.counts['y11a-5'] = CH5_QUESTIONS_Y11A.length;
        saveCachedQuestionCounts(cached.counts, cached.version);
        setQuestionCounts(cached.counts);
      }
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

  useEffect(() => {
    if (!user || isAdmin) return;
    const unsub = onSnapshot(doc(db, 'users', user.uid), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setProfile(data);
        if (data.assignedYear) {
          const y = Array.isArray(data.assignedYear) ? data.assignedYear[0] : data.assignedYear;
          setSelectedYear(y);
        }
        if (data.assignedCourse) {
          const c = Array.isArray(data.assignedCourse) ? data.assignedCourse[0] : data.assignedCourse;
          setSelectedCourse(c);
        }
      }
    });
    return unsub;
  }, [user, isAdmin]);

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

  const courses = useMemo(() => {
    if (selectedYear === 'Year 11') return ['Standard', 'Advanced', 'Extension 1'];
    if (selectedYear === 'Year 12') return ['Standard', 'Advanced', 'Extension 1', 'Extension 2'];
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
    return [...ids];
  }, [displayData, isAdmin, showAdminTools]);

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
          && countChapterIds.every((chapterId) => cached.counts[chapterId] !== undefined);
        if (hasFreshCounts && !isMigrating) return;

        const nextCounts = {};
        await Promise.all(countChapterIds.map(async (chapterId) => {
          const countQuery = query(collection(db, 'questions'), where('chapterId', '==', chapterId));
          const snap = await getCountFromServer(countQuery);
          nextCounts[chapterId] = snap.data().count || 0;
        }));
        if (cancelled) return;
        const merged = { ...cached.counts, ...nextCounts };
        setQuestionCounts(merged);
        saveCachedQuestionCounts(merged, remoteVersion);
      } catch (err) {
        console.error("Error fetching question counts:", err);
      }
    };

    fetchVisibleCounts();
    return () => {
      cancelled = true;
    };
  }, [isAdmin, countChapterIds, isMigrating]);

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
              <div className="curriculum-year-tabs">
                {YEARS.map(year => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      if (year === 'Year 11' || year === 'Year 12') setSelectedCourse('Standard');
                    }}
                    className={`curriculum-year-tab${selectedYear === year ? ' curriculum-year-tab--active' : ''}`}
                  >
                    {year}
                  </button>
                ))}
              </div>

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
                  {adminActiveTab === 'y11_12' && (
                    <div className="admin-sync-grid">
                      {/* Year 11 Chapter 1 Algebra */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y11">Y11 CH1</span>
                          <span className="sync-card-title">Algebra (Seed Ch1)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!(questionCounts['y11a-1'] || questionCounts['y11-1']) ? (
                            <button onClick={handleSeedAlgebraQuestions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Ch1
                            </button>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="sync-card-status">Active ({(questionCounts['y11a-1'] || 0) + (questionCounts['y11-1'] || 0)} Qs)</span>
                              <button onClick={handleSeedAlgebraQuestions} disabled={isMigrating} className="sync-btn warning" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
                                Re-seed
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Year 11 Chapter 2 Surds */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y11">Y11 CH2</span>
                          <span className="sync-card-title">Surds & Indices (Seed Ch2)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!(questionCounts['y11a-2'] || questionCounts['y11-2']) ? (
                            <button onClick={handleSeedSurdsQuestions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Ch2
                            </button>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="sync-card-status">Active ({(questionCounts['y11a-2'] || 0) + (questionCounts['y11-2'] || 0)} Qs)</span>
                              <button onClick={handleSeedSurdsQuestions} disabled={isMigrating} className="sync-btn warning" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
                                Re-seed
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Year 6 Whole Numbers */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y6">Y6 WN</span>
                          <span className="sync-card-title">Whole Numbers (Seed Y6)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!questionCounts['y6-wn'] ? (
                            <button onClick={handleSeedWholeNumbersQuestions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Y6 WN
                            </button>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="sync-card-status">Active ({questionCounts['y6-wn']} Qs)</span>
                              <button onClick={handleSeedWholeNumbersQuestions} disabled={isMigrating} className="sync-btn warning" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
                                Re-seed
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Year 6 Fractions */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y6">Y6 Frac</span>
                          <span className="sync-card-title">Fractions (Seed Y6)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!questionCounts['y6-frac'] ? (
                            <button onClick={handleSeedFractionsQuestions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Y6 Frac
                            </button>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="sync-card-status">Active ({questionCounts['y6-frac']} Qs)</span>
                              <button onClick={handleSeedFractionsQuestions} disabled={isMigrating} className="sync-btn warning" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
                                Re-seed
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Year 11 Ch5 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y11">Y11 Ch5</span>
                          <span className="sync-card-title">Transformations (Seed Y11A)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!questionCounts['y11a-5'] ? (
                            <button onClick={handleSeedY11Ch5Questions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Y11 Ch5
                            </button>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="sync-card-status">Active ({questionCounts['y11a-5']} Qs)</span>
                              <button onClick={handleSeedY11Ch5Questions} disabled={isMigrating} className="sync-btn warning" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
                                Re-seed
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Year 9 Ch2 Pythagoras */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y9" style={{ background: '#10b981', color: '#fff' }}>Y9 CH2</span>
                          <span className="sync-card-title">Pythagoras (Seed Y9 Ch2)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!questionCounts['y9-2'] ? (
                            <button onClick={handleSeedY9Ch2Questions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Y9 Ch2
                            </button>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="sync-card-status">Active ({questionCounts['y9-2']} Qs)</span>
                              <button onClick={handleSeedY9Ch2Questions} disabled={isMigrating} className="sync-btn warning" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
                                Re-seed
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Year 9 Ch3 Percentages */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y9" style={{ background: '#3b82f6', color: '#fff' }}>Y9 CH3</span>
                          <span className="sync-card-title">Consumer Arith (Seed Y9 Ch3)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!questionCounts['y9-3'] ? (
                            <button onClick={handleSeedY9Ch3Questions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Y9 Ch3
                            </button>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="sync-card-status">Active ({questionCounts['y9-3']} Qs)</span>
                              <button onClick={handleSeedY9Ch3Questions} disabled={isMigrating} className="sync-btn warning" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
                                Re-seed
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Year 9 Ch4 Factorisation */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y9" style={{ background: '#ec4899', color: '#fff' }}>Y9 CH4</span>
                          <span className="sync-card-title">Factorisation (Seed Y9 Ch4)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!questionCounts['y9-4'] ? (
                            <button onClick={handleSeedY9Ch4Questions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Y9 Ch4
                            </button>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="sync-card-status">Active ({questionCounts['y9-4']} Qs)</span>
                              <button onClick={handleSeedY9Ch4Questions} disabled={isMigrating} className="sync-btn warning" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
                                Re-seed
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Year 9 Ch5 Expressions */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y9" style={{ background: '#f59e0b', color: '#fff' }}>Y9 CH5</span>
                          <span className="sync-card-title">Expressions (Seed Y9 Ch5)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!questionCounts['y9-5'] ? (
                            <button onClick={handleSeedY9Ch5Questions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Y9 Ch5
                            </button>
                          ) : (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span className="sync-card-status">Active ({questionCounts['y9-5']} Qs)</span>
                              <button onClick={handleSeedY9Ch5Questions} disabled={isMigrating} className="sync-btn warning" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>
                                Re-seed
                              </button>
                            </div>
                          )}
                        </div>
                      </div>

                    </div>
                  )}

                  {adminActiveTab === 'utils' && (
                    <div className="admin-sync-grid">
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

            <div className="chapters-grid">
              {displayData.length > 0 ? displayData.map((chapter, chapterIndex) => {
                const p = chapter.modules > 0 ? Math.round(((chapter.completed || 0) / chapter.modules) * 100) : 0;
                return (
                  <div key={chapter.id} className="chapter-card" onClick={() => setSelectedChapterForQuestions(chapter)}>
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
                        {questionCounts[chapter.id] > 0 && (
                          <span className="chapter-card__meta-pill"> · {questionCounts[chapter.id]} questions</span>
                        )}
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

      <AnimatePresence>
        {selectedChapterForQuestions && (
          <QuestionBankModal chapter={selectedChapterForQuestions} onClose={() => setSelectedChapterForQuestions(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Curriculum;
