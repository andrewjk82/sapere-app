import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, CheckCircle2, ChevronRight, 
  Layers, GraduationCap, Star, Clock, 
  Search, BookText, Award, Lock, Plus, Edit2, Trash2, Save, X
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
import { importYear11Ch3Questions } from '../scripts/importYear11Ch3';
import { importYear10Ch1Questions } from '../scripts/importYear10Ch1';
import { importYear10Ch3 } from '../scripts/importYear10Ch3';
import { importYear10Ch4 } from '../scripts/importYear10Ch4';
import { importYear9Ch1 } from '../scripts/importYear9Ch1';
import { importYear7Ch1 } from '../scripts/importYear7Ch1';
import { importYear7Ch2 } from '../scripts/importYear7Ch2';
import { importYear11Ch4A } from '../scripts/importYear11Ch4A';
import { importYear8Ch1 } from '../scripts/importYear8Ch1';
import { importYear11AdvCh1 } from '../scripts/importYear11AdvCh1';
import { importYear11AdvCh2 } from '../scripts/importYear11AdvCh2';
import { importYear11AdvCh3 } from '../scripts/importYear11AdvCh3';
import { importYear11AdvCh4 } from '../scripts/importYear11AdvCh4';
import QuestionBankModal from './QuestionBankModal';
import LearningPath from './LearningPath';
import {
  fetchHscResultsIncremental,
  loadCachedHscResults,
} from '../services/hscResultsService';
import { localCache } from '../services/localCacheService';
import './curriculum.css';

const YEARS = Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`);
const QUESTION_COUNT_CACHE_KEY = 'sapere:question-counts:v3';
const QUESTION_COUNT_CACHE_TTL_MS = 6 * 60 * 60 * 1000;
const CURRICULUM_CACHE_KEY = 'curriculum-records:v1';
const ADMIN_TOOL_COUNT_IDS = [
  'y11a-1', 'y11-1', 'y11a-2', 'y11-2', 'y11a-3', 'y11-3', 'y11a-4', 
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
  const [adminActiveTab, setAdminActiveTab] = useState('y7');
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

  const handleSeedCh3Questions = async () => {
    if (!isAdmin || isMigrating) return;
    setIsMigrating(true);
    try {
      const count = await importYear11Ch3Questions();
      showToast(`Successfully seeded ${count} Year 11 Chapter 3 questions!`, 'success');
    } catch (error) {
      console.error('Error seeding questions:', error);
      showToast('Failed to seed questions.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSeedY10Ch1Questions = async () => {
    if (!isAdmin || isMigrating) return;
    setIsMigrating(true);
    try {
      const count = await importYear10Ch1Questions();
      showToast(`Successfully seeded ${count} Year 10 Chapter 1 questions!`, 'success');
    } catch (error) {
      console.error('Error seeding Year 10 questions:', error);
      showToast('Failed to seed questions.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY10Ch3 = async () => {
    if (!isAdmin || isMigrating) return;
    setIsMigrating(true);
    try {
      const count = await importYear10Ch3();
      if (count > 0) {
        showToast(`✅ Successfully added ${count} new questions to Year 10 Chapter 3!`, 'success');
      } else {
        showToast('Year 10 Chapter 3 is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 10 Ch3:', error);
      showToast('Failed to sync Year 10 Chapter 3.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY10Ch4 = async () => {
    if (!isAdmin || isMigrating) return;
    setIsMigrating(true);
    try {
      const count = await importYear10Ch4();
      if (count > 0) {
        showToast(`✅ Successfully added ${count} new questions to Year 10 Chapter 4!`, 'success');
      } else {
        showToast('Year 10 Chapter 4 is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 10 Ch4:', error);
      showToast('Failed to sync Year 10 Chapter 4.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncYear9Ch1 = async () => {
    if (!isAdmin || isMigrating) return;
    setIsMigrating(true);
    try {
      const count = await importYear9Ch1();
      showToast(`Successfully seeded ${count} Year 9 Chapter 1 questions!`, 'success');
    } catch (error) {
      console.error('Error seeding Year 9 questions:', error);
      showToast('Failed to seed questions.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch1 = async () => {
    if (!isAdmin || isMigrating) return;
    setIsMigrating(true);
    try {
      const count = await importYear7Ch1();
      if (count > 0) {
        showToast(`✅ Successfully added ${count} new questions to Year 7 Chapter 1!`, 'success');
      } else {
        showToast('Year 7 Chapter 1 is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch1:', error);
      showToast('Failed to sync Year 7 Chapter 1.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch2 = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    setIsMigrating(true);
    try {
      const count = await importYear7Ch2(forceReset);
      if (forceReset) {
        showToast(`🗑️ Reset & successfully synced ${count} questions to Year 7 Chapter 2!`, 'success');
      } else if (count > 0) {
        showToast(`✅ Successfully added ${count} new questions to Year 7 Chapter 2!`, 'success');
      } else {
        showToast('Year 7 Chapter 2 is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch2:', error);
      showToast('Failed to sync Year 7 Chapter 2.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY11Ch4A = async () => {
    if (!isAdmin || isMigrating) return;
    setIsMigrating(true);
    try {
      const count = await importYear11Ch4A();
      if (count > 0) {
        showToast(`✅ Successfully added ${count} new questions to Year 11 Chapter 4A!`, 'success');
      } else {
        showToast('Year 11 Chapter 4A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 11 Ch4A:', error);
      showToast('Failed to sync Year 11 Chapter 4A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY8Ch1 = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 8 Chapter 1 questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear8Ch1 } = await import('../scripts/importYear8Ch1');
      const count = await importYear8Ch1(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 8 Chapter 1!`, 'success');
      } else {
        showToast('Year 8 Chapter 1 is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 8 Ch1:', error);
      showToast('Failed to sync Year 8 Chapter 1.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch1B = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 1B questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch1B } = await import('../scripts/importYear7Ch1B');
      const count = await importYear7Ch1B(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 1B!`, 'success');
      } else {
        showToast('Year 7 Chapter 1B is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch1B:', error);
      showToast('Failed to sync Year 7 Chapter 1B.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch2A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 2A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch2A } = await import('../scripts/importYear7Ch2A');
      const count = await importYear7Ch2A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 2A!`, 'success');
      } else {
        showToast('Year 7 Chapter 2A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch2A:', error);
      showToast('Failed to sync Year 7 Chapter 2A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch3 = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 3 questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch3 } = await import('../scripts/importYear7Ch3');
      const count = await importYear7Ch3(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 3!`, 'success');
      } else {
        showToast('Year 7 Chapter 3 is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch3:', error);
      showToast('Failed to sync Year 7 Chapter 3.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch3A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 3A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch3A } = await import('../scripts/importYear7Ch3A');
      const count = await importYear7Ch3A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 3A!`, 'success');
      } else {
        showToast('Year 7 Chapter 3A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch3A:', error);
      showToast('Failed to sync Year 7 Chapter 3A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch4 = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 4 questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch4 } = await import('../scripts/importYear7Ch4');
      const count = await importYear7Ch4(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 4!`, 'success');
      } else {
        showToast('Year 7 Chapter 4 is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch4:', error);
      showToast('Failed to sync Year 7 Chapter 4.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch4A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 4A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch4A } = await import('../scripts/importYear7Ch4A');
      const count = await importYear7Ch4A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 4A!`, 'success');
      } else {
        showToast('Year 7 Chapter 4A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch4A:', error);
      showToast('Failed to sync Year 7 Chapter 4A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch5A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 5A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch5A } = await import('../scripts/importYear7Ch5A');
      const count = await importYear7Ch5A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 5A!`, 'success');
      } else {
        showToast('Year 7 Chapter 5A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch5A:', error);
      showToast('Failed to sync Year 7 Chapter 5A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch6A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 6A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch6A } = await import('../scripts/importYear7Ch6A');
      const count = await importYear7Ch6A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 6A!`, 'success');
      } else {
        showToast('Year 7 Chapter 6A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch6A:', error);
      showToast('Failed to sync Year 7 Chapter 6A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch7A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 7A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch7A } = await import('../scripts/importYear7Ch7A');
      const count = await importYear7Ch7A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 7A!`, 'success');
      } else {
        showToast('Year 7 Chapter 7A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch7A:', error);
      showToast('Failed to sync Year 7 Chapter 7A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch8A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 8A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch8A } = await import('../scripts/importYear7Ch8A');
      const count = await importYear7Ch8A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 8A!`, 'success');
      } else {
        showToast('Year 7 Chapter 8A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch8A:', error);
      showToast('Failed to sync Year 7 Chapter 8A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch10A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 10A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch10A } = await import('../scripts/importYear7Ch10A');
      const count = await importYear7Ch10A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 10A!`, 'success');
      } else {
        showToast('Year 7 Chapter 10A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch10A:', error);
      showToast('Failed to sync Year 7 Chapter 10A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch11A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 11A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch11A } = await import('../scripts/importYear7Ch11A');
      const count = await importYear7Ch11A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 11A!`, 'success');
      } else {
        showToast('Year 7 Chapter 11A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch11A:', error);
      showToast('Failed to sync Year 7 Chapter 11A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch12A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 12A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch12A } = await import('../scripts/importYear7Ch12A');
      const count = await importYear7Ch12A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 12A!`, 'success');
      } else {
        showToast('Year 7 Chapter 12A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch12A:', error);
      showToast('Failed to sync Year 7 Chapter 12A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch13A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 13A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch13A } = await import('../scripts/importYear7Ch13A');
      const count = await importYear7Ch13A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 13A!`, 'success');
      } else {
        showToast('Year 7 Chapter 13A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch13A:', error);
      showToast('Failed to sync Year 7 Chapter 13A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch14A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 14A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch14A } = await import('../scripts/importYear7Ch14A');
      const count = await importYear7Ch14A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 14A!`, 'success');
      } else {
        showToast('Year 7 Chapter 14A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch14A:', error);
      showToast('Failed to sync Year 7 Chapter 14A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch15A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 15A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch15A } = await import('../scripts/importYear7Ch15A');
      const count = await importYear7Ch15A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 15A!`, 'success');
      } else {
        showToast('Year 7 Chapter 15A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch15A:', error);
      showToast('Failed to sync Year 7 Chapter 15A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch16A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 16A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch16A } = await import('../scripts/importYear7Ch16A');
      const count = await importYear7Ch16A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 16A!`, 'success');
      } else {
        showToast('Year 7 Chapter 16A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch16A:', error);
      showToast('Failed to sync Year 7 Chapter 16A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch17A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 17A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch17A } = await import('../scripts/importYear7Ch17A');
      const count = await importYear7Ch17A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 17A!`, 'success');
      } else {
        showToast('Year 7 Chapter 17A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch17A:', error);
      showToast('Failed to sync Year 7 Chapter 17A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch18A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 18A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch18A } = await import('../scripts/importYear7Ch18A');
      const count = await importYear7Ch18A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 18A!`, 'success');
      } else {
        showToast('Year 7 Chapter 18A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch18A:', error);
      showToast('Failed to sync Year 7 Chapter 18A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch19A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 19A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch19A } = await import('../scripts/importYear7Ch19A');
      const count = await importYear7Ch19A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 19A!`, 'success');
      } else {
        showToast('Year 7 Chapter 19A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch19A:', error);
      showToast('Failed to sync Year 7 Chapter 19A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch20A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 20A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch20A } = await import('../scripts/importYear7Ch20A');
      const count = await importYear7Ch20A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 20A!`, 'success');
      } else {
        showToast('Year 7 Chapter 20A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch20A:', error);
      showToast('Failed to sync Year 7 Chapter 20A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY7Ch1A = async (forceReset = false) => {
    if (!isAdmin || isMigrating) return;
    if (forceReset && !window.confirm("This will DELETE all existing Year 7 Chapter 1A questions and re-import them. Continue?")) return;
    
    setIsMigrating(true);
    try {
      const { importYear7Ch1A } = await import('../scripts/importYear7Ch1A');
      const count = await importYear7Ch1A(forceReset);
      if (count > 0) {
        showToast(`✅ Successfully ${forceReset ? 'reset and ' : ''}added ${count} questions to Year 7 Chapter 1A!`, 'success');
      } else {
        showToast('Year 7 Chapter 1A is already up to date.', 'info');
      }
    } catch (error) {
      console.error('Error syncing Year 7 Ch1A:', error);
      showToast('Failed to sync Year 7 Chapter 1A.', 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY11AdvCh1 = async (forceReset = false) => {
    if (!window.confirm(forceReset ? 'This will RESET and sync Year 11 Adv Ch1 questions. Continue?' : 'Sync Year 11 Adv Ch1 questions?')) return;
    setIsMigrating(true);
    try {
      const count = await importYear11AdvCh1(forceReset);
      alert(`Successfully synced ${count} questions for Y11 Adv Ch1!`);
      window.location.reload();
    } catch (err) {
      alert('Failed to sync: ' + err.message);
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY11AdvCh2 = async (forceReset = false) => {
    if (!window.confirm(forceReset ? 'This will RESET and sync Year 11 Adv Ch2 questions. Continue?' : 'Sync Year 11 Adv Ch2 questions?')) return;
    setIsMigrating(true);
    try {
      const count = await importYear11AdvCh2(forceReset);
      alert(`Successfully synced ${count} questions for Y11 Adv Ch2!`);
      window.location.reload();
    } catch (err) {
      alert('Failed to sync: ' + err.message);
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY11AdvCh3 = async (forceReset = false) => {
    if (!window.confirm(forceReset ? 'This will RESET and sync Year 11 Adv Ch3 questions. Continue?' : 'Sync Year 11 Adv Ch3 questions?')) return;
    setIsMigrating(true);
    try {
      const count = await importYear11AdvCh3(forceReset);
      alert(`Successfully synced ${count} questions for Y11 Adv Ch3!`);
      window.location.reload();
    } catch (err) {
      alert('Failed to sync: ' + err.message);
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY11AdvCh4 = async (forceReset = false) => {
    if (!window.confirm(forceReset ? 'This will RESET and sync Year 11 Adv Ch4 questions. Continue?' : 'Sync Year 11 Adv Ch4 questions?')) return;
    setIsMigrating(true);
    try {
      const { importYear11AdvCh4 } = await import('../scripts/importYear11AdvCh4');
      const count = await importYear11AdvCh4(forceReset);
      showToast(`Successfully synced ${count} questions for Y11 Adv Ch4!`, 'success');
      // Optional: window.location.reload(); or better, update counts
    } catch (err) {
      showToast('Failed to sync: ' + err.message, 'error');
    } finally {
      setIsMigrating(false);
    }
  };

  const handleSyncY11AdvCh5 = async (forceReset = false) => {
    if (!window.confirm(forceReset ? 'This will RESET and sync Year 11 Adv Ch5 questions. Continue?' : 'Sync Year 11 Adv Ch5 questions?')) return;
    setIsMigrating(true);
    try {
      const { importYear11AdvCh5 } = await import('../scripts/importYear11AdvCh5');
      const count = await importYear11AdvCh5(forceReset);
      showToast(`Successfully synced ${count} questions for Y11 Adv Ch5!`, 'success');
    } catch (err) {
      showToast('Failed to sync: ' + err.message, 'error');
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
    const minScore = Math.max(0, Math.min(...points.map((p) => p.percentage)) - 8);
    const maxScore = Math.min(100, Math.max(...points.map((p) => p.percentage)) + 8);
    const range = Math.max(1, maxScore - minScore);
    const xFor = (idx) => points.length === 1
      ? width / 2
      : padX + (idx * (width - padX * 2)) / (points.length - 1);
    const yFor = (value) => padY + ((maxScore - value) / range) * (height - padY * 2);
    const path = points.map((point, idx) => `${idx === 0 ? 'M' : 'L'} ${xFor(idx)} ${yFor(point.percentage)}`).join(' ');
    const latest = points[points.length - 1];

    return (
      <>
        <button
          type="button"
          className="student-hsc-summary"
          onClick={() => setHscModalOpen(true)}
          style={{
            width: '100%',
            border: '1px solid rgba(99,102,241,0.14)',
            textAlign: 'left',
            borderRadius: 18,
            padding: '16px 18px',
            marginBottom: 20,
            color: '#1f1b4d',
            background: '#fff',
            boxShadow: '0 12px 32px rgba(31,27,77,0.08)',
            cursor: 'pointer',
          }}
        >
          <div className="student-hsc-summary__grid" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(150px, 0.8fr) minmax(180px, 1.2fr) minmax(120px, auto)',
            gap: 16,
            alignItems: 'center',
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.72rem', fontWeight: 900, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748b' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6366f1', display: 'inline-block' }} />
                HSC Progress
              </div>
              <div style={{ marginTop: 8, fontSize: '1.9rem', fontWeight: 950, lineHeight: 1, color: '#1e1b4b', letterSpacing: '-0.02em' }}>{latest.percentage.toFixed(1)}%</div>
            </div>
            <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', display: 'block' }} role="img" aria-label="HSC score trend">
              <defs>
                <linearGradient id="studentHscLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
              {[0, 1, 2].map((line) => {
                const y = padY + (line * (height - padY * 2)) / 2;
                return <line key={line} x1={padX} x2={width - padX} y1={y} y2={y} stroke="#e2e8f0" strokeWidth="1" />;
              })}
              <path d={path} fill="none" stroke="url(#studentHscLine)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              {points.map((point, idx) => (
                <g key={point.id || `${point.examDate}-${idx}`}>
                  <circle cx={xFor(idx)} cy={yFor(point.percentage)} r="6" fill="#fff" stroke="#6366f1" strokeWidth="3" />
                </g>
              ))}
            </svg>
            <div style={{ textAlign: 'right', fontWeight: 800, color: '#334155', minWidth: 0 }}>
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{latest.paper}</div>
              <div style={{ fontSize: '0.78rem', color: '#94a3b8', marginTop: 2 }}>{latest.examDate}</div>
            </div>
          </div>
        </button>

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
                style={{ position: 'relative', width: 'min(720px, 100%)', maxHeight: '82vh', overflowY: 'auto', background: 'white', borderRadius: 28, padding: 28, boxShadow: '0 30px 80px rgba(15,23,42,0.32)' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, marginBottom: 18 }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 900, color: '#7c3aed', letterSpacing: '0.12em', textTransform: 'uppercase' }}>HSC Papers</div>
                    <h3 style={{ margin: '6px 0 0', color: '#1e1b4b' }}>Exam Record</h3>
                  </div>
                  <button onClick={() => setHscModalOpen(false)} style={{ width: 40, height: 40, borderRadius: 12, border: 'none', background: '#f1f5f9', color: '#64748b', cursor: 'pointer' }}>
                    <X size={18} />
                  </button>
                </div>
                <div style={{ display: 'grid', gap: 10 }}>
                  {[...points].reverse().map((record) => (
                    <div key={record.id} style={{ display: 'grid', gridTemplateColumns: '110px minmax(0,1fr) 90px', gap: 14, alignItems: 'center', padding: 14, borderRadius: 16, background: '#f8fafc', border: '1px solid #eef2ff' }}>
                      <div style={{ fontWeight: 900, color: '#64748b', fontSize: '0.82rem' }}>{record.examDate}</div>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontWeight: 900, color: '#1e1b4b', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{record.paper}</div>
                        {record.notes && <div style={{ marginTop: 4, color: '#64748b', fontSize: '0.78rem' }}>{record.notes}</div>}
                      </div>
                      <div style={{ textAlign: 'right', fontWeight: 950, color: '#4f46e5' }}>
                        {Number(record.score)}/{Number(record.total)}
                        <div style={{ fontSize: '0.72rem', color: '#7c3aed' }}>{record.percentage.toFixed(1)}%</div>
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
        <>
          {renderStudentHscChart()}
          <LearningPath profile={profile} />
        </>
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
                      className={`admin-tab-btn ${adminActiveTab === 'y7' ? 'active' : ''}`}
                      onClick={() => setAdminActiveTab('y7')}
                    >
                      Year 7
                    </button>
                    <button 
                      className={`admin-tab-btn ${adminActiveTab === 'y8_9' ? 'active' : ''}`}
                      onClick={() => setAdminActiveTab('y8_9')}
                    >
                      Year 8 & 9
                    </button>
                    <button 
                      className={`admin-tab-btn ${adminActiveTab === 'y10' ? 'active' : ''}`}
                      onClick={() => setAdminActiveTab('y10')}
                    >
                      Year 10
                    </button>
                    <button 
                      className={`admin-tab-btn ${adminActiveTab === 'y11_12' ? 'active' : ''}`}
                      onClick={() => setAdminActiveTab('y11_12')}
                    >
                      Year 11 & 12
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
                  {adminActiveTab === 'y7' && (
                    <div className="admin-sync-grid">
                      {/* Year 7 Chapter 1 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH1</span>
                          <span className="sync-card-title">Whole Numbers (Entire Ch1)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={handleSyncY7Ch1} disabled={isMigrating} className="sync-btn primary">
                            {isMigrating ? 'Syncing…' : '🔄 Sync'}
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 1A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH1A</span>
                          <span className="sync-card-title">The Number Line (1A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch1A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch1A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 1B */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH1B-L</span>
                          <span className="sync-card-title">Addition to Order of Operations (1B-1L)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch1B(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch1B(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 2 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH2</span>
                          <span className="sync-card-title">Factors, Multiples & Primes (Entire Ch2)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch2(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch2(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 2A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH2A</span>
                          <span className="sync-card-title">Factors and Multiples (2A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch2A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch2A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 3 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH3</span>
                          <span className="sync-card-title">An Introduction to Algebra (Entire Ch3)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch3(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch3(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 3A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH3A</span>
                          <span className="sync-card-title">Using Algebra (3A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch3A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch3A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 4 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH4</span>
                          <span className="sync-card-title">Fractions - Part 1 (Entire Ch4)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch4(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch4(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 4A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH4A</span>
                          <span className="sync-card-title">What is a Fraction? (4A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch4A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch4A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 5A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH5A</span>
                          <span className="sync-card-title">Equations (5A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch5A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch5A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 6A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH6A</span>
                          <span className="sync-card-title">Fractions/Decimals/Percentages (6A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch6A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch6A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 7A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH7A</span>
                          <span className="sync-card-title">Ratios (7A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch7A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch7A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 8A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH8A</span>
                          <span className="sync-card-title">Equations & Inequalities (8A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch8A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch8A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 10A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH10A</span>
                          <span className="sync-card-title">Negative Integers (10A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch10A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch10A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 11A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH11A</span>
                          <span className="sync-card-title">Substitution with Integers (11A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch11A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch11A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 12A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH12A</span>
                          <span className="sync-card-title">Angles in Triangles (12A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch12A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch12A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 13A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH13A</span>
                          <span className="sync-card-title">Neg. Fractions Add/Sub (13A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch13A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch13A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 14A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH14A</span>
                          <span className="sync-card-title">Percentages (14A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch14A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch14A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 15A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH15A</span>
                          <span className="sync-card-title">Equations Intro (15A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch15A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch15A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 16A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH16A</span>
                          <span className="sync-card-title">Probability Intro (16A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch16A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch16A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 17A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH17A</span>
                          <span className="sync-card-title">Translations (17A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch17A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch17A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 18A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH18A</span>
                          <span className="sync-card-title">Reading Tables (18A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch18A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch18A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 19A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH19A</span>
                          <span className="sync-card-title">Numerical Data (19A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch19A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch19A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 7 Chapter 20A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y7">Y7 CH20A</span>
                          <span className="sync-card-title">Polyhedra (20A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY7Ch20A(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY7Ch20A(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {adminActiveTab === 'y8_9' && (
                    <div className="admin-sync-grid">
                      {/* Year 8 Chapter 1 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y8">Y8 CH1</span>
                          <span className="sync-card-title">Integers (Ch1)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY8Ch1(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY8Ch1(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset & Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 9 Chapter 1 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y9">Y9 CH1</span>
                          <span className="sync-card-title">Indices (Ch1)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={handleSyncYear9Ch1} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {adminActiveTab === 'y10' && (
                    <div className="admin-sync-grid">
                      {/* Year 10 Chapter 1 Seed */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y10">Y10 CH1</span>
                          <span className="sync-card-title">Algebra (Seed Data)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!questionCounts['y10-1'] ? (
                            <button onClick={handleSeedY10Ch1Questions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Y10 Ch1
                            </button>
                          ) : (
                            <span className="sync-card-status">Active ({questionCounts['y10-1']} Qs)</span>
                          )}
                        </div>
                      </div>

                      {/* Year 10 Chapter 3 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y10">Y10 CH3</span>
                          <span className="sync-card-title">Financial Maths (Ch3)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={handleSyncY10Ch3} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync {(questionCounts['y10-3'] || 0) < 169 ? ` (${questionCounts['y10-3'] || 0})` : ''}
                          </button>
                        </div>
                      </div>

                      {/* Year 10 Chapter 4 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y10">Y10 CH4</span>
                          <span className="sync-card-title">Geometry (Ch4)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={handleSyncY10Ch4} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

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
                            <span className="sync-card-status">Active</span>
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
                            <span className="sync-card-status">Active</span>
                          )}
                        </div>
                      </div>

                      {/* Year 11 Chapter 3 Trig */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y11">Y11 CH3</span>
                          <span className="sync-card-title">Trigonometry (Seed Ch3)</span>
                        </div>
                        <div className="sync-card-actions">
                          {!(questionCounts['y11a-3'] || questionCounts['y11-3']) ? (
                            <button onClick={handleSeedCh3Questions} disabled={isMigrating} className="sync-btn warning">
                              🌱 Seed Ch3
                            </button>
                          ) : (
                            <span className="sync-card-status">Active</span>
                          )}
                        </div>
                      </div>

                      {/* Year 11 Chapter 4A */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y11">Y11 CH4A</span>
                          <span className="sync-card-title">Functions & Graphs (Ch4A)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={handleSyncY11Ch4A} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 11 Advanced Chapter 1 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y11">Y11 ADV CH1</span>
                          <span className="sync-card-title">Advanced Arithmetic (Ch1)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY11AdvCh1(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                          <button onClick={() => handleSyncY11AdvCh1(true)} disabled={isMigrating} className="sync-btn danger">
                            🗑️ Reset
                          </button>
                        </div>
                      </div>

                      {/* Year 11 Advanced Chapter 2 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y11">Y11 ADV CH2</span>
                          <span className="sync-card-title">Advanced Algebra (Ch2)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY11AdvCh2(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 11 Advanced Chapter 3 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y11">Y11 ADV CH3</span>
                          <span className="sync-card-title">Advanced Functions (Ch3)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY11AdvCh3(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 11 Advanced Chapter 4 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y11">Y11 ADV CH4</span>
                          <span className="sync-card-title">Advanced Trigonometry (Ch4)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY11AdvCh4(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
                        </div>
                      </div>

                      {/* Year 11 Advanced Chapter 5 */}
                      <div className="sync-card">
                        <div className="sync-card-info">
                          <span className="sync-card-badge y11">Y11 ADV CH5</span>
                          <span className="sync-card-title">Advanced Calculus (Ch5)</span>
                        </div>
                        <div className="sync-card-actions">
                          <button onClick={() => handleSyncY11AdvCh5(false)} disabled={isMigrating} className="sync-btn primary">
                            🔄 Sync
                          </button>
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
