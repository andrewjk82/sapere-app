import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, CheckCircle2, ChevronRight, 
  Layers, GraduationCap, Star, Clock, 
  Search, BookText, Award, Lock, Plus, Edit2, Trash2, Save, X
} from 'lucide-react';
import { auth, db } from '../firebase/config';
import { doc, onSnapshot, collection, updateDoc, setDoc, deleteDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { migrateCurriculumToFirestore } from '../constants/migrateCurriculum';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import QuestionBankModal from './QuestionBankModal';
import LearningPath from './LearningPath';

const YEARS = Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`);

const Curriculum = () => {
  const { user, isAdmin } = useAuth();
  const [selectedYear, setSelectedYear] = useState('Year 11');
  const [selectedCourse, setSelectedCourse] = useState('Advanced');
  const [searchQuery, setSearchQuery] = useState('');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [curriculumRecords, setCurriculumRecords] = useState([]);
  const [isMigrating, setIsMigrating] = useState(false);
  const [editingChapter, setEditingChapter] = useState(null); // { mode: 'add'|'edit', chapter: {} }
  const [selectedChapterForQuestions, setSelectedChapterForQuestions] = useState(null);

  // Fetch Curriculum from Firestore
  useEffect(() => {
    const q = collection(db, 'curriculum');
    const unsub = onSnapshot(q, (snap) => {
      setCurriculumRecords(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsub;
  }, []);

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
      alert("Failed to save changes.");
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

  const handleSyncSelectedYear = async () => {
    const isSenior = ['Year 11', 'Year 12'].includes(selectedYear);
    const data = isSenior 
      ? CURRICULUM_DATA[selectedYear]?.[selectedCourse] 
      : CURRICULUM_DATA[selectedYear];
      
    if (!Array.isArray(data)) {
      alert("No built-in curriculum data found for this selection.");
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
        if (data.assignedYear) setSelectedYear(data.assignedYear);
        if (data.assignedCourse) setSelectedCourse(data.assignedCourse);
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
    <div className="app-page curriculum-container">
      {!isAdmin ? (
        <LearningPath profile={profile} />
      ) : (
        <>
          <div className="curriculum-header-mobile">
            <div className="app-page__title">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <h2>Curriculum Management</h2>
                {curriculumRecords.length === 0 && (
                  <button 
                    onClick={async () => {
                      setIsMigrating(true);
                      await migrateCurriculumToFirestore();
                      setIsMigrating(false);
                    }}
                    disabled={isMigrating}
                    className="app-button"
                    style={{ fontSize: '0.7rem', padding: '4px 12px', borderRadius: '8px', background: '#fef3c7', color: '#92400e', border: '1px solid #fde68a' }}
                  >
                    {isMigrating ? 'Migrating...' : '⚠️ Seed Initial Data'}
                  </button>
                )}
                {((['Year 11', 'Year 12'].includes(selectedYear) && CURRICULUM_DATA[selectedYear]?.[selectedCourse]) || Array.isArray(CURRICULUM_DATA[selectedYear])) && (
                  <button
                    onClick={handleSyncSelectedYear}
                    className="app-button"
                    style={{ fontSize: '0.7rem', padding: '4px 12px', borderRadius: '8px', background: '#e0f2fe', color: '#0369a1', border: '1px solid #bae6fd' }}
                  >
                    Sync {selectedYear} {['Year 11', 'Year 12'].includes(selectedYear) ? selectedCourse : ''}
                  </button>
                )}
              </div>
              <p>{selectedYear} Curriculum {selectedCourse ? `(${selectedCourse})` : ''}</p>
            </div>
            <div className="app-page__actions" style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => setEditingChapter({ mode: 'add', chapter: { title: '', modules: 10 } })}
                className="app-button app-button--primary"
                style={{ borderRadius: '14px', whiteSpace: 'nowrap' }}
              >
                <Plus size={18} /> Add Chapter
              </button>
              <div className="app-input" style={{ width: window.innerWidth < 768 ? '100%' : '300px' }}>
                <Search size={18} />
                <input 
                  type="text" 
                  placeholder="Search topics..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="curriculum-main-grid" style={{ display: 'grid', gridTemplateColumns: '260px 1fr', gap: '32px', height: 'calc(100vh - 250px)' }}>
            {/* Left Sidebar: Year Selection (ONLY FOR ADMIN) */}
            <div className="app-panel curriculum-sidebar" style={{ padding: '16px', overflowY: 'auto', borderRadius: '24px' }}>
              <div className="year-select-title" style={{ padding: '8px 16px', fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '12px' }}>SELECT YEAR LEVEL</div>
              <div style={{ display: 'flex', flexDirection: window.innerWidth < 1024 ? 'row' : 'column', gap: '8px' }}>
                {YEARS.map(year => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      if (year === 'Year 11' || year === 'Year 12') {
                        setSelectedCourse('Standard');
                      }
                    }}
                    className="year-btn-mobile"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 16px',
                      borderRadius: '16px',
                      border: 'none',
                      background: selectedYear === year ? '#6366f1' : '#f8fafc',
                      color: selectedYear === year ? 'white' : '#64748b',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      minWidth: window.innerWidth < 1024 ? 'fit-content' : 'auto'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <GraduationCap size={16} />
                      {year}
                    </div>
                    {selectedYear === year && window.innerWidth >= 1024 && <ChevronRight size={16} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content Area */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Sub-tabs for Year 11 & 12 */}
              {courses && (
                <div className="course-tabs-scroll">
                  <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '6px', borderRadius: '18px', width: 'fit-content' }}>
                    {courses.map(course => (
                      <button
                        key={course}
                        onClick={() => setSelectedCourse(course)}
                        style={{
                          padding: '10px 20px',
                          borderRadius: '14px',
                          border: 'none',
                          background: selectedCourse === course ? 'white' : 'transparent',
                          color: selectedCourse === course ? '#6366f1' : '#64748b',
                          fontWeight: 800,
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          boxShadow: selectedCourse === course ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
                          transition: 'all 0.2s',
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
              <div className="chapters-grid" style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '20px',
                overflowY: window.innerWidth < 1024 ? 'visible' : 'auto',
                paddingBottom: '100px'
              }}>
                {displayData.length > 0 ? displayData.map(chapter => {
                  const completed = chapter.completed || 0;
                  const p = chapter.modules > 0 ? Math.round((completed / chapter.modules) * 100) : 0;
                  return (
                      <div 
                        key={chapter.id} 
                        onClick={() => setSelectedChapterForQuestions(chapter)}
                        className="app-panel" 
                        style={{ 
                          padding: '24px', 
                          borderRadius: '24px', 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: '20px',
                          border: '1px solid rgba(0,0,0,0.03)',
                          cursor: 'pointer'
                        }}
                      >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ width: '44px', height: '44px', background: '#f5f3ff', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1' }}>
                          <BookText size={22} />
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <button onClick={(e) => { e.stopPropagation(); setEditingChapter({ mode: 'edit', chapter }); }} style={{ border: 'none', background: '#f8fafc', padding: '8px', borderRadius: '10px', color: '#64748b', cursor: 'pointer' }}><Edit2 size={16} /></button>
                          <button onClick={(e) => { e.stopPropagation(); handleDeleteChapter(chapter.id); }} style={{ border: 'none', background: '#fff1f2', padding: '8px', borderRadius: '10px', color: '#f43f5e', cursor: 'pointer' }}><Trash2 size={16} /></button>
                        </div>
                      </div>

                      <div>
                        <h3 style={{ margin: '0 0 6px 0', fontSize: '1.1rem', fontWeight: 800, color: '#1a1c2c' }}>{chapter.title}</h3>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                          {chapter.topics?.length ? `${chapter.topics.length} subtopics stored` : 'Core curriculum unit'}
                        </p>
                      </div>

                      <div style={{ marginTop: 'auto' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', marginBottom: '8px' }}>
                          <span>PROGRESS</span>
                          <span>{p}%</span>
                        </div>
                        <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                          <motion.div initial={{ width: 0 }} animate={{ width: `${p}%` }} style={{ height: '100%', background: '#6366f1' }} />
                        </div>
                      </div>
                    </div>
                )}) : (
                  <div className="app-empty">No chapters found for this selection.</div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      <AnimatePresence>
        {editingChapter && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setEditingChapter(null)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.4)', backdropFilter: 'blur(8px)' }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ position: 'relative', width: '100%', maxWidth: '440px', backgroundColor: '#fff', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.15)' }}
            >
              <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', padding: '32px', color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.8 }}>Chapter Editor</span>
                    <h3 style={{ margin: '8px 0 0', fontSize: '1.8rem', fontWeight: 900 }}>{editingChapter.mode === 'add' ? 'New Chapter' : 'Edit Chapter'}</h3>
                  </div>
                  <button onClick={() => setEditingChapter(null)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                    <X size={20} />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSaveChapter} style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="app-form-field">
                  <label style={{ fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>Chapter Title</label>
                  <input 
                    required
                    className="app-input"
                    value={editingChapter.chapter.title}
                    onChange={e => setEditingChapter({ ...editingChapter, chapter: { ...editingChapter.chapter, title: e.target.value } })}
                    placeholder="e.g. Calculus: Differentiation"
                    style={{ padding: '14px 16px', borderRadius: '14px', width: '100%', boxSizing: 'border-box' }}
                  />
                </div>
                <div className="app-form-field">
                  <label style={{ fontSize: '11px', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', display: 'block' }}>Number of Modules</label>
                  <input 
                    required
                    type="number"
                    className="app-input"
                    value={editingChapter.chapter.modules}
                    onChange={e => setEditingChapter({ ...editingChapter, chapter: { ...editingChapter.chapter, modules: parseInt(e.target.value) } })}
                    style={{ padding: '14px 16px', borderRadius: '14px', width: '100%', boxSizing: 'border-box' }}
                  />
                </div>
                <button type="submit" className="app-button app-button--primary" style={{ width: '100%', padding: '16px', borderRadius: '16px', fontWeight: 800, fontSize: '1rem', marginTop: '12px' }}>
                  <Save size={18} /> Save Chapter
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedChapterForQuestions && (
          <QuestionBankModal 
            chapter={selectedChapterForQuestions} 
            onClose={() => setSelectedChapterForQuestions(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Curriculum;
