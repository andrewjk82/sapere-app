import React, { useState, useMemo, useEffect } from 'react';
import { 
  BookOpen, CheckCircle2, ChevronRight, 
  Layers, GraduationCap, Star, Clock, 
  Search, BookText, Award, Lock
} from 'lucide-react';
import { auth, db } from '../firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

const CURRICULUM_DATA = {
  'Year 1': [
    { id: 'y1-1', title: 'Numbers & Place Value', modules: 10, completed: 8 },
    { id: 'y1-2', title: 'Patterns & Algebra', modules: 6, completed: 2 },
    { id: 'y1-3', title: 'Measurement', modules: 8, completed: 0 }
  ],
  'Year 2': [
    { id: 'y2-1', title: 'Addition & Subtraction', modules: 12, completed: 5 },
    { id: 'y2-2', title: 'Shapes & Fractions', modules: 8, completed: 0 }
  ],
  // ... adding placeholders for other years to ensure the structure exists
  'Year 11': {
    'Standard': [
      { id: 'y11s-1', title: 'Algebra: Formulae & Equations', modules: 12, completed: 4 },
      { id: 'y11s-2', title: 'Measurement: Applications', modules: 10, completed: 0 },
      { id: 'y11s-3', title: 'Financial Maths: Interest', modules: 8, completed: 0 }
    ],
    'Advanced': [
      { id: 'y11a-1', title: 'Functions', modules: 15, completed: 5 },
      { id: 'y11a-2', title: 'Trigonometric Functions', modules: 12, completed: 0 },
      { id: 'y11a-3', title: 'Calculus: Introduction', modules: 14, completed: 0 }
    ],
    'Extension 1': [
      { id: 'y11e1-1', title: 'Further Functions', modules: 10, completed: 2 },
      { id: 'y11e1-2', title: 'Trigonometric Identities', modules: 12, completed: 0 },
      { id: 'y11e1-3', title: 'Combinatorics', modules: 8, completed: 0 }
    ]
  },
  'Year 12': {
    'Standard': [
      { id: 'y12s-1', title: 'Financial Maths: Annuities', modules: 10, completed: 3 },
      { id: 'y12s-2', title: 'Statistical Analysis', modules: 12, completed: 0 }
    ],
    'Advanced': [
      { id: 'y12a-1', title: 'Calculus: Differentiation', modules: 14, completed: 6 },
      { id: 'y12a-2', title: 'Integral Calculus', modules: 16, completed: 0 }
    ],
    'Extension 1': [
      { id: 'y12e1-1', title: 'Vectors', modules: 12, completed: 4 },
      { id: 'y12e1-2', title: 'Proof', modules: 10, completed: 0 }
    ],
    'Extension 2': [
      { id: 'y12e2-1', title: 'Complex Numbers', modules: 15, completed: 5 },
      { id: 'y12e2-2', title: 'Nature of Proof', modules: 12, completed: 0 },
      { id: 'y12e2-3', title: 'Integration Techniques', modules: 18, completed: 0 }
    ]
  }
};

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
    
    // Admins don't need profile restriction
    if (isAdmin) {
      setLoading(false);
      return;
    }

    const unsub = onSnapshot(doc(db, 'users', user.uid), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setProfile(data);
        // Only set if tutor has assigned it
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
    
    if (!searchQuery) return data;
    return data.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [selectedYear, selectedCourse, searchQuery, courses]);

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;

  return (
    <div className="app-page">
      <div className="app-page__header">
        <div className="app-page__title">
          <h2>{isAdmin ? 'Curriculum Management' : 'My Learning Path'}</h2>
          <p>
            {isAdmin 
              ? 'Comprehensive curriculum structure from Foundation to HSC Extension 2.' 
              : `Your personalized curriculum for ${selectedYear}${courses ? ` (${selectedCourse})` : ''}.`}
          </p>
        </div>
        <div className="app-input" style={{ minWidth: 300 }}>
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search topics..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isAdmin ? '260px 1fr' : '1fr', gap: '32px', height: 'calc(100vh - 200px)' }}>
        {/* Left Sidebar: Year Selection (ONLY FOR ADMIN) */}
        {isAdmin && (
          <div className="app-panel" style={{ padding: '16px', overflowY: 'auto', borderRadius: '24px' }}>
            <div style={{ padding: '8px 16px', fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '12px' }}>SELECT YEAR LEVEL</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {YEARS.map(year => (
                <button
                  key={year}
                  onClick={() => {
                    setSelectedYear(year);
                    if (year === 'Year 11' || year === 'Year 12') {
                      setSelectedCourse('Standard');
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 16px',
                    borderRadius: '16px',
                    border: 'none',
                    background: selectedYear === year ? '#f5f3ff' : 'transparent',
                    color: selectedYear === year ? '#6366f1' : '#64748b',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <GraduationCap size={18} style={{ opacity: selectedYear === year ? 1 : 0.5 }} />
                    {year}
                  </div>
                  {selectedYear === year && <ChevronRight size={16} />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Sub-tabs for Year 11 & 12 (ADMIN can choose, STUDENT is fixed if assigned) */}
          {courses && (
            <div style={{ display: 'flex', gap: '12px', background: '#f1f5f9', padding: '6px', borderRadius: '18px', width: 'fit-content' }}>
              {courses.map(course => {
                // If student, disable other courses if one is assigned
                const isDisabled = !isAdmin && profile?.assignedCourse && profile.assignedCourse !== course;
                if (isDisabled) return null; // Students only see their own course tab

                return (
                  <button
                    key={course}
                    onClick={() => isAdmin && setSelectedCourse(course)}
                    style={{
                      padding: '10px 24px',
                      borderRadius: '14px',
                      border: 'none',
                      background: selectedCourse === course ? 'white' : 'transparent',
                      color: selectedCourse === course ? '#6366f1' : '#64748b',
                      fontWeight: 800,
                      fontSize: '0.85rem',
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
          )}

          {/* Chapters Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
            gap: '24px',
            overflowY: 'auto',
            paddingBottom: '40px'
          }}>
            {displayData.length > 0 ? displayData.map(chapter => {
              const p = Math.round((chapter.completed / chapter.modules) * 100);
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
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ width: '48px', height: '48px', background: '#f5f3ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1' }}>
                      <BookText size={24} />
                    </div>
                    <div style={{ background: p === 100 ? '#ecfdf5' : '#f8fafc', color: p === 100 ? '#10b981' : '#64748b', padding: '6px 12px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: 800 }}>
                      {p === 100 ? 'COMPLETED' : `${chapter.modules} MODULES`}
                    </div>
                  </div>

                  <div>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '1.15rem', fontWeight: 800, color: '#1a1c2c' }}>{chapter.title}</h3>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>Core subject curriculum unit</p>
                  </div>

                  <div style={{ marginTop: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', marginBottom: '8px', textTransform: 'uppercase' }}>
                      <span>Progress</span>
                      <span style={{ color: '#6366f1' }}>{p}%</span>
                    </div>
                    <div style={{ height: '8px', background: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${p}%`, height: '100%', background: 'linear-gradient(90deg, #6366f1, #a78bfa)', borderRadius: '4px' }}></div>
                    </div>
                  </div>
                </div>
              );
            }) : (
              <div style={{ gridColumn: '1 / -1', padding: '100px 0', textAlign: 'center' }}>
                <div style={{ color: '#cbd5e1', marginBottom: '16px' }}>
                  <Search size={48} style={{ opacity: 0.5 }} />
                </div>
                <h3 style={{ color: '#64748b', fontWeight: 800 }}>No curriculum assigned yet</h3>
                <p style={{ color: '#94a3b8', fontWeight: 600 }}>Your tutor will update your learning path soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
