import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, CheckCircle2, ChevronRight, 
  Layers, GraduationCap, Star, Clock, 
  Search, BookText, Award, Lock
} from 'lucide-react';
import { auth, db } from '../firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import './curriculum.css';

const YEARS = Array.from({ length: 12 }, (_, i) => `Year ${i + 1}`);

const Curriculum = () => {
  const { user, isAdmin } = useAuth();
  const [selectedYear, setSelectedYear] = useState('Year 11');
  const [selectedCourse, setSelectedCourse] = useState('Advanced');
  const [searchQuery, setSearchQuery] = useState('');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    
    if (isAdmin) {
      setLoading(false);
      return;
    }

    const unsub = onSnapshot(doc(db, 'users', user.uid), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setProfile(data);
        if (data.assignedYear) setSelectedYear(data.assignedYear);
        if (data.assignedCourse) setSelectedCourse(data.assignedCourse);
      }
      setLoading(false);
    });
    return unsub;
  }, [user, isAdmin]);

  const courses = useMemo(() => {
    if (selectedYear === 'Year 11') return ['Standard', 'Advanced', 'Extension 1'];
    if (selectedYear === 'Year 12') return ['Standard', 'Advanced', 'Extension 1', 'Extension 2'];
    return null;
  }, [selectedYear]);

  const displayData = useMemo(() => {
    let data = CURRICULUM_DATA[selectedYear] || [];
    if (courses) {
      data = data[selectedCourse] || [];
    }
    
    if (!isAdmin && profile?.assignedChapters) {
      data = data.filter(chapter => profile.assignedChapters.includes(chapter.id));
    }
    
    if (!searchQuery) return data;
    return data.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedYear, selectedCourse, searchQuery, courses, isAdmin, profile]);

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  return (
    <div className="app-page curriculum-container">
      <div className="curriculum-header-mobile">
        <div className="app-page__title">
          <h2>{isAdmin ? 'Curriculum Management' : 'My Learning Path'}</h2>
          <p style={{ maxWidth: '600px' }}>
            {isAdmin 
              ? 'Comprehensive curriculum structure from Foundation to HSC Extension 2.' 
              : `Your personalized curriculum for ${selectedYear}${courses ? ` (${selectedCourse})` : ''}.`}
          </p>
        </div>
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

      <div className="curriculum-main-grid" style={{ display: 'grid', gridTemplateColumns: isAdmin ? '260px 1fr' : '1fr', gap: '32px', height: isAdmin ? 'calc(100vh - 250px)' : 'auto' }}>
        {/* Left Sidebar: Year Selection (ONLY FOR ADMIN) */}
        {isAdmin && (
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
        )}

        {/* Main Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Sub-tabs for Year 11 & 12 */}
          {courses && (
            <div className="course-tabs-scroll">
              <div style={{ display: 'flex', gap: '8px', background: '#f1f5f9', padding: '6px', borderRadius: '18px', width: 'fit-content' }}>
                {courses.map(course => {
                  const isDisabled = !isAdmin && profile?.assignedCourse && profile.assignedCourse !== course;
                  if (isDisabled) return null;

                  return (
                    <button
                      key={course}
                      onClick={() => isAdmin && setSelectedCourse(course)}
                      style={{
                        padding: '10px 20px',
                        borderRadius: '14px',
                        border: 'none',
                        background: selectedCourse === course ? 'white' : 'transparent',
                        color: selectedCourse === course ? '#6366f1' : '#64748b',
                        fontWeight: 800,
                        fontSize: '0.8rem',
                        cursor: isAdmin ? 'pointer' : 'default',
                        boxShadow: selectedCourse === course ? '0 4px 12px rgba(0,0,0,0.05)' : 'none',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      {!isAdmin && <Lock size={14} />}
                      {course}
                    </button>
                  );
                })}
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
                    <div style={{ background: p === 100 ? '#ecfdf5' : '#f8fafc', color: p === 100 ? '#10b981' : '#64748b', padding: '6px 12px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: 800 }}>
                      {p === 100 ? 'COMPLETED' : `${chapter.modules} MODULES`}
                    </div>
                  </div>

                  <div>
                    <h3 style={{ margin: '0 0 6px 0', fontSize: '1.1rem', fontWeight: 800, color: '#1a1c2c' }}>{chapter.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>Core curriculum unit</p>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontWeight: 800, color: '#94a3b8', marginBottom: '8px' }}>
                      <span>PROGRESS</span>
                      <span style={{ color: '#6366f1' }}>{p}%</span>
                    </div>
                    <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${p}%`, height: '100%', background: 'linear-gradient(90deg, #6366f1, #a78bfa)' }}></div>
                    </div>
                  </div>
                </div>
              );
            }) : (
              <div style={{ gridColumn: '1 / -1', padding: '80px 0', textAlign: 'center' }}>
                <Search size={40} style={{ color: '#cbd5e1', marginBottom: '16px' }} />
                <h3 style={{ color: '#64748b', fontWeight: 800 }}>No curriculum found</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
