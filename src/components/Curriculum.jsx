import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, CheckCircle2, ChevronRight, 
  Layers, GraduationCap, Star, Clock, 
  Search, BookText, Award, Lock, Plus, Edit2, Trash2, Save, X
} from 'lucide-react';
import { auth, db } from '../firebase/config';
import { doc, onSnapshot, collection, updateDoc, setDoc, deleteDoc, getDocs, query, where } from 'firebase/firestore';
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
import QuestionBankModal from './QuestionBankModal';
import LearningPath from './LearningPath';
import {
  fetchHscResultsIncremental,
  loadCachedHscResults,
} from '../services/hscResultsService';
import './curriculum.css';

const YEARS = Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`);

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
  const [selectedChapterForQuestions, setSelectedChapterForQuestions] = useState(null);
  const [questionCounts, setQuestionCounts] = useState({});
  const [showAdminTools, setShowAdminTools] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hscRecords, setHscRecords] = useState([]);
  const [hscModalOpen, setHscModalOpen] = useState(false);

  // Fetch all question counts for visible chapters
  useEffect(() => {
    if (!isAdmin) return;

    const fetchCounts = async () => {
      try {
        const q = collection(db, 'questions');
        const snap = await getDocs(q);
        const counts = {};
        snap.docs.forEach(doc => {
          const cid = doc.data().chapterId;
          if (cid) counts[cid] = (counts[cid] || 0) + 1;
        });
        setQuestionCounts(counts);
      } catch (err) {
        console.error("Error fetching question counts:", err);
      }
    };
    fetchCounts();
  }, [isAdmin, curriculumRecords, isMigrating]);

  // Fetch Curriculum from Firestore
  useEffect(() => {
    if (!isAdmin) {
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    const q = collection(db, 'curriculum');
    const unsub = onSnapshot(q, (snap) => {
      setCurriculumRecords(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    }, (err) => {
      console.error("Firestore error in Curriculum:", err);
      setLoading(false);
    });
    return unsub;
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
    setEditingChapter(null);
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

  const handleSyncY7Ch2 = async () => {
    if (!isAdmin || isMigrating) return;
    setIsMigrating(true);
    try {
      const count = await importYear7Ch2();
      if (count > 0) {
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

    const width = 760;
    const height = 230;
    const padX = 42;
    const padY = 34;
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
          onClick={() => setHscModalOpen(true)}
          style={{
            width: '100%',
            border: 'none',
            textAlign: 'left',
            borderRadius: 28,
            padding: 24,
            marginBottom: 24,
            color: 'white',
            background: 'linear-gradient(135deg, #312e81, #4f46e5 54%, #7c3aed)',
            boxShadow: '0 24px 60px rgba(79,70,229,0.2)',
            cursor: 'pointer',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.74 }}>HSC Progress</div>
              <div style={{ marginTop: 8, fontSize: '2rem', fontWeight: 950, lineHeight: 1 }}>{latest.percentage.toFixed(1)}%</div>
            </div>
            <div style={{ textAlign: 'right', fontWeight: 800, opacity: 0.9 }}>
              <div>{latest.paper}</div>
              <div style={{ fontSize: '0.8rem', opacity: 0.72 }}>{latest.examDate}</div>
            </div>
          </div>
          <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', display: 'block', marginTop: 10 }} role="img" aria-label="HSC score trend">
            <defs>
              <linearGradient id="studentHscLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fef3c7" />
                <stop offset="55%" stopColor="#f9a8d4" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
            </defs>
            {[0, 1, 2].map((line) => {
              const y = padY + (line * (height - padY * 2)) / 2;
              return <line key={line} x1={padX} x2={width - padX} y1={y} y2={y} stroke="rgba(255,255,255,0.16)" strokeWidth="1" />;
            })}
            <path d={path} fill="none" stroke="url(#studentHscLine)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            {points.map((point, idx) => (
              <g key={point.id || `${point.examDate}-${idx}`}>
                <circle cx={xFor(idx)} cy={yFor(point.percentage)} r="7" fill="#fff" />
                <circle cx={xFor(idx)} cy={yFor(point.percentage)} r="3.5" fill="#7c3aed" />
              </g>
            ))}
          </svg>
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
            {showAdminTools && (
              <div className="curriculum-admin-tools">
                {!(questionCounts['y11a-1'] || questionCounts['y11-1']) && (
                  <button onClick={handleSeedAlgebraQuestions} disabled={isMigrating} className="curriculum-admin-btn" style={{ background: '#fef3c7', color: '#92400e', borderColor: '#fde68a' }}>
                    {isMigrating ? 'Updating…' : '⚠ Seed Ch1 Algebra'}
                  </button>
                )}
                {!(questionCounts['y11a-2'] || questionCounts['y11-2']) && (
                  <button onClick={handleSeedSurdsQuestions} disabled={isMigrating} className="curriculum-admin-btn" style={{ background: '#f5f3ff', color: '#6366f1', borderColor: '#ddd6fe' }}>
                    {isMigrating ? 'Updating…' : '⚠ Seed Ch2 Surds'}
                  </button>
                )}
                {!(questionCounts['y11a-3'] || questionCounts['y11-3']) && (
                  <button onClick={handleSeedCh3Questions} disabled={isMigrating} className="curriculum-admin-btn" style={{ background: '#ecfdf5', color: '#059669', borderColor: '#d1fae5' }}>
                    {isMigrating ? 'Updating…' : '⚠ Seed Ch3 Trig'}
                  </button>
                )}
                {!questionCounts['y10-1'] && (
                  <button onClick={handleSeedY10Ch1Questions} disabled={isMigrating} className="curriculum-admin-btn" style={{ background: '#fff1f2', color: '#e11d48', borderColor: '#ffe4e6' }}>
                    {isMigrating ? 'Updating…' : '⚠ Seed Y10 Ch1'}
                  </button>
                )}
                <button onClick={handleSyncY10Ch3} disabled={isMigrating} className="curriculum-admin-btn" style={{ background: '#f0fdf4', color: '#16a34a', borderColor: '#bbf7d0' }}>
                  {isMigrating ? 'Syncing…' : `🔄 Sync Y10 Ch3${(questionCounts['y10-3'] || 0) < 169 ? ` (${questionCounts['y10-3'] || 0}/169)` : ''}`}
                </button>
                <button onClick={handleSyncY10Ch4} disabled={isMigrating} className="curriculum-admin-btn" style={{ background: '#fef2f2', color: '#dc2626', borderColor: '#fecaca' }}>
                  {isMigrating ? 'Syncing…' : '🔄 Sync Y10 Ch4'}
                </button>
                <button onClick={handleSeedCurveQuestion} disabled={isMigrating} className="curriculum-admin-btn" style={{ background: '#ecfdf5', color: '#059669', borderColor: '#a7f3d0' }}>
                  {isMigrating ? 'Adding…' : '⚠ Add Curve Q'}
                </button>
                <button onClick={handleSyncYear9Ch1} disabled={isMigrating} className="curriculum-admin-btn" style={{ background: '#fef9c3', color: '#854d0e', borderColor: '#fde68a' }}>
                  {isMigrating ? 'Syncing…' : '🔄 Sync Y9 Ch1'}
                </button>
                <button onClick={handleSyncY7Ch1} disabled={isMigrating} className="curriculum-admin-btn" style={{ background: '#e0f2fe', color: '#0369a1', borderColor: '#bae6fd' }}>
                  {isMigrating ? 'Syncing…' : '🔄 Sync Y7 Ch1'}
                </button>
                <button onClick={handleSyncY7Ch2} disabled={isMigrating} className="curriculum-admin-btn" style={{ background: '#f5f3ff', color: '#6366f1', borderColor: '#ddd6fe' }}>
                  {isMigrating ? 'Syncing…' : '🔄 Sync Y7 Ch2'}
                </button>
                {((['Year 11', 'Year 12'].includes(selectedYear) && CURRICULUM_DATA[selectedYear]?.[selectedCourse]) || Array.isArray(CURRICULUM_DATA[selectedYear])) && (
                  <button onClick={handleSyncSelectedYear} className="curriculum-admin-btn" style={{ background: '#e0f2fe', color: '#0369a1', borderColor: '#bae6fd' }}>
                    Sync {selectedYear} {['Year 11', 'Year 12'].includes(selectedYear) ? selectedCourse : ''}
                  </button>
                )}
              </div>
            )}

            <div className="chapters-grid">
              {displayData.length > 0 ? displayData.map(chapter => {
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
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setEditingChapter(null)} className="app-modal__backdrop" />
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              className="app-panel app-modal__card"
              style={{ maxWidth: '420px', width: '92%', padding: 0, overflow: 'hidden', borderRadius: '28px' }}
            >
              <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', padding: '28px 28px 24px', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.75, marginBottom: '4px' }}>Chapter Editor</div>
                  <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 900 }}>{editingChapter.mode === 'add' ? 'New Chapter' : 'Edit Chapter'}</h3>
                </div>
                <button onClick={() => setEditingChapter(null)} style={{ background: 'rgba(255,255,255,0.18)', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                  <X size={18} />
                </button>
              </div>
              <form onSubmit={handleSaveChapter} style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Chapter Title</label>
                  <input required className="app-input" value={editingChapter.chapter.title} onChange={e => setEditingChapter({ ...editingChapter, chapter: { ...editingChapter.chapter, title: e.target.value } })} placeholder="e.g. Calculus: Differentiation" style={{ padding: '13px 16px', borderRadius: '13px', width: '100%', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Number of Modules</label>
                  <input required type="number" className="app-input" value={editingChapter.chapter.modules} onChange={e => setEditingChapter({ ...editingChapter, chapter: { ...editingChapter.chapter, modules: parseInt(e.target.value) } })} style={{ padding: '13px 16px', borderRadius: '13px', width: '100%', boxSizing: 'border-box' }} />
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
