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
import QuestionBankModal from './QuestionBankModal';
import LearningPath from './LearningPath';
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

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  return (
    <div className="curriculum-page">
      {!isAdmin ? (
        <LearningPath profile={profile} />
      ) : (
        <>
<<<<<<< HEAD
          {/* ── Sticky top bar ── */}
          <div className="curriculum-topbar">
            <div className="curriculum-topbar__inner">
              {/* Row 1 — Title + actions */}
              <div className="curriculum-header">
                <div className="curriculum-header__title">
                  <h1>{selectedYear}</h1>
                  {selectedCourse && <span className="curriculum-course-badge">{selectedCourse}</span>}
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
                </div>
              </div>

              {/* Row 2 — Year tabs */}
              <div className="curriculum-year-tabs">
=======
          <div className="app-page__header" style={{ marginBottom: '32px' }}>
            <div className="app-page__title">
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#1e1b4b', margin: '0 0 8px 0' }}>Curriculum Management</h2>
              <p style={{ color: '#64748b', fontSize: '1.1rem', fontWeight: 500, margin: 0 }}>Organize courses, chapters, and topics across all year levels.</p>
            </div>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <div className="curriculum-mobile-header" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0f172a', margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                {selectedYear} 
                {selectedCourse && <span style={{ fontSize: '0.9rem', padding: '4px 12px', background: '#e0e7ff', color: '#4338ca', borderRadius: '16px', fontWeight: 800 }}>{selectedCourse}</span>}
              </h3>
            </div>

            {/* Admin Tools Panel */}
            <div style={{ background: 'rgba(248, 250, 252, 0.8)', backdropFilter: 'blur(12px)', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '16px', display: 'flex', gap: '12px', overflowX: 'auto', alignItems: 'center' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', paddingRight: '12px', borderRight: '1px solid #e2e8f0', whiteSpace: 'nowrap' }}>
                Admin Tools
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                  {!(questionCounts['y11a-1'] || questionCounts['y11-1']) && (
                    <button onClick={handleSeedAlgebraQuestions} disabled={isMigrating} style={{ padding: '8px 16px', borderRadius: '12px', background: '#fffbeb', color: '#b45309', border: '1px solid #fde68a', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                      {isMigrating ? 'Updating...' : '⚠️ Seed Ch1 Algebra'}
                    </button>
                  )}
                  {!(questionCounts['y11a-2'] || questionCounts['y11-2']) && (
                    <button onClick={handleSeedSurdsQuestions} disabled={isMigrating} style={{ padding: '8px 16px', borderRadius: '12px', background: '#f5f3ff', color: '#6d28d9', border: '1px solid #ddd6fe', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                      {isMigrating ? 'Updating...' : '⚠️ Seed Ch2 Surds'}
                    </button>
                  )}
                  {!(questionCounts['y11a-3'] || questionCounts['y11-3']) && (
                    <button onClick={handleSeedCh3Questions} disabled={isMigrating} style={{ padding: '8px 16px', borderRadius: '12px', background: '#ecfdf5', color: '#047857', border: '1px solid #a7f3d0', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                      {isMigrating ? 'Updating...' : '⚠️ Seed Ch3 Trig'}
                    </button>
                  )}
                  {!questionCounts['y10-1'] && (
                    <button onClick={handleSeedY10Ch1Questions} disabled={isMigrating} style={{ padding: '8px 16px', borderRadius: '12px', background: '#fff1f2', color: '#be123c', border: '1px solid #fecdd3', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                      {isMigrating ? 'Updating...' : '⚠️ Seed Y10 Ch1'}
                    </button>
                  )}
                  {(questionCounts['y10-3'] || 0) < 169 && (
                    <button onClick={handleSyncY10Ch3} disabled={isMigrating} style={{ padding: '8px 16px', borderRadius: '12px', background: '#f0fdf4', color: '#15803d', border: '1px solid #bbf7d0', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                      {isMigrating ? 'Syncing...' : `🔄 Sync Y10 Ch3 (${questionCounts['y10-3'] || 0}/169)`}
                    </button>
                  )}
                  <button onClick={handleSyncY10Ch3} disabled={isMigrating} style={{ padding: '8px 16px', borderRadius: '12px', background: '#f0fdf4', color: '#15803d', border: '1.5px solid #16a34a', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                    {isMigrating ? 'Syncing...' : `🔄 Sync Y10 Ch3`}
                  </button>
                  <button onClick={handleSyncY10Ch4} disabled={isMigrating} style={{ padding: '8px 16px', borderRadius: '12px', background: '#fef2f2', color: '#b91c1c', border: '1.5px solid #dc2626', fontWeight: 800, fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                    {isMigrating ? 'Syncing...' : `🔄 Sync Y10 Ch4`}
                  </button>
                  <button onClick={handleSeedCurveQuestion} disabled={isMigrating} style={{ padding: '8px 16px', borderRadius: '12px', background: '#ecfdf5', color: '#047857', border: '1px solid #6ee7b7', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                    {isMigrating ? 'Adding...' : '⚠️ Add Curve Q'}
                  </button>
                  {((['Year 11', 'Year 12'].includes(selectedYear) && CURRICULUM_DATA[selectedYear]?.[selectedCourse]) || Array.isArray(CURRICULUM_DATA[selectedYear])) && (
                    <button onClick={handleSyncSelectedYear} className="app-button" style={{ padding: '8px 16px', borderRadius: '12px', background: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all 0.2s' }}>
                      Sync {selectedYear} {['Year 11', 'Year 12'].includes(selectedYear) ? selectedCourse : ''}
                    </button>
                  )}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ position: 'relative', width: window.innerWidth < 768 ? '100%' : '320px' }}>
              <div style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8', pointerEvents: 'none' }}>
                <Search size={20} />
              </div>
              <input 
                type="text" 
                placeholder="Search topics or chapters..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ 
                  width: '100%', 
                  padding: '16px 16px 16px 48px', 
                  borderRadius: '20px', 
                  border: '1px solid #e2e8f0', 
                  background: 'white', 
                  fontSize: '0.95rem', 
                  fontWeight: 600, 
                  color: '#1e293b',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.2)'}
                onBlur={(e) => e.target.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.02)'}
              />
            </div>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setEditingChapter({ mode: 'add', chapter: { title: '', modules: 10 } })}
              style={{ 
                background: 'linear-gradient(135deg, #6366f1, #4f46e5)', 
                color: 'white', 
                border: 'none', 
                padding: '16px 24px', 
                borderRadius: '20px', 
                fontWeight: 800, 
                fontSize: '0.95rem', 
                cursor: 'pointer', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                boxShadow: '0 10px 20px -5px rgba(99, 102, 241, 0.4)'
              }}
            >
              <Plus size={20} /> Add Chapter
            </motion.button>
          </div>

          <div className="curriculum-main-grid">
            {/* Left Sidebar: Year Selection (ONLY FOR ADMIN) */}
            <div className="app-panel curriculum-sidebar" style={{ padding: '16px', borderRadius: '24px' }}>
              <div className="year-select-title" style={{ padding: '8px 16px', fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '12px' }}>SELECT YEAR LEVEL</div>
              <div className="year-select-list">
>>>>>>> d23dddf (Update: Refined UI and stabilized grading pipeline logic)
                {YEARS.map(year => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
<<<<<<< HEAD
                      if (year === 'Year 11' || year === 'Year 12') setSelectedCourse('Standard');
=======
                      if (year === 'Year 11' || year === 'Year 12') {
                        setSelectedCourse('Standard');
                      }
                    }}
                    className={`year-btn-mobile ${selectedYear === year ? 'active' : ''}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 20px',
                      borderRadius: '16px',
                      border: 'none',
                      background: selectedYear === year ? 'linear-gradient(135deg, #6366f1, #4f46e5)' : 'transparent',
                      color: selectedYear === year ? 'white' : '#64748b',
                      fontWeight: 800,
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: selectedYear === year ? '0 10px 15px -3px rgba(99, 102, 241, 0.3)' : 'none',
                      whiteSpace: 'nowrap'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedYear !== year) {
                        e.currentTarget.style.background = '#f1f5f9';
                        e.currentTarget.style.color = '#334155';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedYear !== year) {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#64748b';
                      }
>>>>>>> d23dddf (Update: Refined UI and stabilized grading pipeline logic)
                    }}
                    className={`curriculum-year-tab${selectedYear === year ? ' curriculum-year-tab--active' : ''}`}
                  >
<<<<<<< HEAD
                    {year}
=======
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <GraduationCap size={16} />
                      {year}
                    </div>
                    {selectedYear === year && <ChevronRight size={16} className="desktop-only" />}
>>>>>>> d23dddf (Update: Refined UI and stabilized grading pipeline logic)
                  </button>
                ))}
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* ── Main content ── */}
          <div className="curriculum-content">
            {/* Course sub-tabs (Year 11/12) */}
            {courses && (
              <div className="curriculum-course-tabs">
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
                {((['Year 11', 'Year 12'].includes(selectedYear) && CURRICULUM_DATA[selectedYear]?.[selectedCourse]) || Array.isArray(CURRICULUM_DATA[selectedYear])) && (
                  <button onClick={handleSyncSelectedYear} className="curriculum-admin-btn" style={{ background: '#e0f2fe', color: '#0369a1', borderColor: '#bae6fd' }}>
                    Sync {selectedYear} {['Year 11', 'Year 12'].includes(selectedYear) ? selectedCourse : ''}
                  </button>
=======
            {/* Main Content Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Sub-tabs for Year 11 & 12 */}
              {courses && (
                <div className="course-tabs-scroll" style={{ marginBottom: '16px' }}>
                  <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '8px', borderRadius: '24px', width: 'fit-content' }}>
                    {courses.map(course => (
                      <button
                        key={course}
                        onClick={() => setSelectedCourse(course)}
                        style={{
                          padding: '12px 24px',
                          borderRadius: '18px',
                          border: 'none',
                          background: selectedCourse === course ? 'white' : 'transparent',
                          color: selectedCourse === course ? '#4338ca' : '#64748b',
                          fontWeight: 800,
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          boxShadow: selectedCourse === course ? '0 4px 15px rgba(0,0,0,0.05)' : 'none',
                          transition: 'all 0.3s ease',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chapters Grid */}
              {/* Chapters Grid */}
              <div className="chapters-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
                gap: '24px',
                overflowY: window.innerWidth < 1024 ? 'visible' : 'auto',
                paddingBottom: '100px'
              }}>
                {displayData.length > 0 ? displayData.map((chapter, idx) => {
                  const completed = chapter.completed || 0;
                  const p = chapter.modules > 0 ? Math.round((completed / chapter.modules) * 100) : 0;
                  const gradients = [
                    'linear-gradient(135deg, #eff6ff, #dbeafe)',
                    'linear-gradient(135deg, #f5f3ff, #ede9fe)',
                    'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                    'linear-gradient(135deg, #fff7ed, #ffedd5)'
                  ];
                  const iconColors = ['#3b82f6', '#8b5cf6', '#22c55e', '#f97316'];
                  const themeIdx = idx % 4;
                  
                  return (
                      <motion.div 
                        key={chapter.id} 
                        onClick={() => setSelectedChapterForQuestions(chapter)}
                        whileHover={{ y: -6, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)' }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ 
                          padding: '28px', 
                          borderRadius: '28px', 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: '24px',
                          background: '#ffffff',
                          border: '1px solid #e2e8f0',
                          cursor: 'pointer',
                          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.02)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                      {/* Decorative top accent */}
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: gradients[themeIdx] }} />

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ width: '52px', height: '52px', background: gradients[themeIdx], borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: iconColors[themeIdx], boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                          <BookText size={24} />
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <motion.button whileHover={{ scale: 1.1 }} onClick={(e) => { e.stopPropagation(); setEditingChapter({ mode: 'edit', chapter }); }} style={{ border: 'none', background: '#f8fafc', padding: '10px', borderRadius: '12px', color: '#64748b', cursor: 'pointer' }}><Edit2 size={16} /></motion.button>
                          <motion.button whileHover={{ scale: 1.1 }} onClick={(e) => { e.stopPropagation(); handleDeleteChapter(chapter.id); }} style={{ border: 'none', background: '#fff1f2', padding: '10px', borderRadius: '12px', color: '#f43f5e', cursor: 'pointer' }}><Trash2 size={16} /></motion.button>
                        </div>
                      </div>

                      <div>
                        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>{chapter.title}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.8rem', padding: '4px 10px', background: '#f1f5f9', color: '#475569', borderRadius: '8px', fontWeight: 700 }}>
                            {chapter.topics?.length ? `${chapter.topics.length} Subtopics` : 'Core Unit'}
                          </span>
                          {questionCounts[chapter.id] !== undefined && (
                            <span style={{ fontSize: '0.8rem', padding: '4px 10px', background: '#e0e7ff', color: '#4338ca', borderRadius: '8px', fontWeight: 700 }}>
                              {questionCounts[chapter.id]} Qs
                            </span>
                          )}
                        </div>
                      </div>

                      <div style={{ marginTop: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 800, color: '#64748b', marginBottom: '10px', letterSpacing: '0.05em' }}>
                          <span>MODULE PROGRESS</span>
                          <span style={{ color: iconColors[themeIdx] }}>{p}%</span>
                        </div>
                        <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <motion.div initial={{ width: 0 }} animate={{ width: `${p}%` }} transition={{ duration: 0.8, ease: "easeOut" }} style={{ height: '100%', background: iconColors[themeIdx], borderRadius: '4px' }} />
                        </div>
                      </div>
                    </motion.div>
                )}) : (
                  <div style={{ textAlign: 'center', padding: '60px', background: 'white', borderRadius: '24px', border: '2px dashed #e2e8f0', color: '#94a3b8', gridColumn: '1 / -1' }}>
                    <BookOpen size={48} style={{ opacity: 0.2, margin: '0 auto 16px' }} />
                    <h3 style={{ margin: 0, fontWeight: 800, color: '#64748b' }}>No chapters found</h3>
                    <p style={{ margin: '8px 0 0', fontWeight: 500 }}>Try adjusting your search or add a new chapter.</p>
                  </div>
>>>>>>> d23dddf (Update: Refined UI and stabilized grading pipeline logic)
                )}
              </div>
            )}

            {/* Chapter cards */}
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
