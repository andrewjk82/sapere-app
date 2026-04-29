import React, { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Search, Users, Clock, CheckCircle2, GraduationCap, X, Calendar } from 'lucide-react';
import StatCard from './StatCard';
import StudentRow from './StudentRow';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { doc, onSnapshot, setDoc, collection, addDoc, query } from 'firebase/firestore';
import AvatarPickerModal from './AvatarPickerModal';

const Dashboard = ({ students, onAddStudent, onSelectStudent, setActiveTab }) => {
  const { user, isAdmin } = useAuth();
  const [profile, setProfile] = useState(null);
  const [avatarOpen, setAvatarOpen] = useState(false);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newSession, setNewSession] = useState({
    studentId: '',
    studentName: '',
    subject: '',
    date: new Date().toISOString().split('T')[0],
    startTime: '10:00 AM',
    endTime: '11:30 AM',
    notes: '',
    homework: ''
  });

  useEffect(() => {
    if (!user?.uid) return undefined;
    const ref = doc(db, 'users', user.uid);
    return onSnapshot(ref, (snap) => {
      setProfile(snap.exists() ? snap.data() : null);
    });
  }, [user?.uid]);

  const userName = profile?.firstName || user?.displayName?.split(' ')[0] || user?.email?.split('@')[0] || 'Andrew';

  useEffect(() => {
    if (!user?.uid || !profile || isAdmin) return;

    const currentYear = new Date().getFullYear();
    const lastPromoted = profile.lastPromotedYear;

    // First time setup: if lastPromotedYear doesn't exist, set it to current year
    if (!lastPromoted) {
      setDoc(doc(db, 'users', user.uid), { lastPromotedYear: currentYear }, { merge: true });
      return;
    }

    // If a new calendar year has started
    if (currentYear > lastPromoted) {
      const yearStr = profile.year;
      if (yearStr) {
        const match = yearStr.match(/\d+/);
        if (match) {
          const num = parseInt(match[0], 10);
          const nextYear = yearStr.replace(match[0], (num + 1).toString());
          
          setDoc(doc(db, 'users', user.uid), { 
            year: nextYear, 
            lastPromotedYear: currentYear,
            updatedAt: new Date().toISOString() 
          }, { merge: true });
          
          console.log(`Auto-promoted ${userName} from ${yearStr} to ${nextYear}`);
        }
      }
    }
  }, [user?.uid, profile, isAdmin, userName]);

  const fallbackUrl = useMemo(() => {
    if (user?.photoURL) return user.photoURL;
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.email || 'sapere')}`;
  }, [user?.photoURL, user?.email]);

  const avatarUrl = profile?.avatarUrl || (profile?.avatarStyle && profile?.avatarSeed
    ? `https://api.dicebear.com/7.x/${profile.avatarStyle}/svg?seed=${encodeURIComponent(profile.avatarSeed)}`
    : fallbackUrl);

  // Calculate dynamic stats
  const totalStudents = students.length;
  const activeStudents = students.filter(s => s.status === 'Active').length;
  const totalLessons = students.reduce((acc, s) => acc + (s.lessons || 0), 0);

  const displayStats = [
    { label: "Total Students", value: totalStudents.toString(), icon: "Users" },
    { label: "Active Students", value: activeStudents.toString(), icon: "GraduationCap" },
    { label: "Total Lessons", value: totalLessons.toString(), icon: "CheckCircle2" },
    { label: "Hours Tutored", value: `${Math.round(totalLessons * 1.5)}h`, icon: "Clock" },
  ];

  const handleCreateSession = async (e) => {
    e.preventDefault();
    if (!newSession.studentId || !newSession.subject) return;
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'sessions'), {
        ...newSession,
        isHomeworkCompleted: false,
        createdAt: new Date().toISOString()
      });
      setShowScheduleModal(false);
      setNewSession({ studentId: '', studentName: '', subject: '', date: new Date().toISOString().split('T')[0], startTime: '10:00 AM', endTime: '11:30 AM', notes: '', homework: '' });
    } catch (err) {
      console.error('Error creating session:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="app-page"
      >
        {!isAdmin && (
          <div className="vision-card-wrapper" style={{ marginBottom: '24px' }}>
            <div className="app-panel vision-card" style={{ 
              backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${profile?.dreamImageUrl || 'https://images.unsplash.com/photo-1516534775068-ba3e84529519?auto=format&fit=crop&q=80&w=1200'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '460px',
              borderRadius: '36px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '48px',
              color: 'white',
              overflow: 'hidden',
              boxShadow: '0 30px 70px rgba(0,0,0,0.25)',
              border: 'none'
            }}>
              <div className="vision-card__content" style={{ zIndex: 1 }}>
                <p style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '1.1rem', 
                  fontWeight: 700, 
                  opacity: 1, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.15em', 
                  marginBottom: '8px', 
                  color: 'white',
                  textShadow: '0 2px 10px rgba(0,0,0,0.4)' 
                }}>
                  {getGreeting()}
                </p>
                <h1 style={{ 
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '3.2rem', 
                  fontWeight: 900, 
                  margin: 0, 
                  lineHeight: 1.0, 
                  color: '#1a1c2c',
                  letterSpacing: '-0.03em',
                  textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff, 0 4px 20px rgba(0,0,0,0.2)' 
                }}>
                  {userName}
                </h1>
                {profile?.dreamJob && (
                  <div style={{ 
                    marginTop: '16px', 
                    padding: '6px 14px', 
                    background: 'rgba(255,255,255,0.15)', 
                    backdropFilter: 'blur(12px)', 
                    borderRadius: '12px', 
                    display: 'inline-block', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}>
                    <span style={{ 
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 800, 
                      fontSize: '0.82rem', 
                      color: 'white', 
                      letterSpacing: '0.08em',
                      textShadow: '0 1px 3px rgba(0,0,0,0.3)' 
                    }}>
                      FUTURE {profile.dreamJob.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="app-input" style={{ marginTop: '24px', maxWidth: '100%' }}>
              <Search size={18} />
              <input type="text" placeholder="Search my courses, students, and more..." style={{ padding: '16px 0' }} />
            </div>
          </div>
        )}

        {isAdmin && (
          <div className="app-grid app-grid--stats">
            {displayStats.map((stat, index) => (
              <StatCard key={index} {...stat} iconName={stat.icon} />
            ))}
          </div>
        )}

        <div className="app-grid app-grid--content">
          {isAdmin ? (
            <>
              <div className="app-panel dashboard-card">
                <div className="dashboard-card__header">
                  <h3>Recent Students</h3>
                  <button>View all</button>
                </div>
                <div className="activity-list">
                  {students.length > 0 ? (
                    students.slice(0, 5).map(student => (
                      <StudentRow 
                        key={student.id} 
                        {...student} 
                        onClick={() => onSelectStudent(student.id)} 
                      />
                    ))
                  ) : (
                    <div className="app-empty">
                      No students added yet.
                    </div>
                  )}
                </div>
              </div>

              <div className="app-page-column">
                <div className="app-panel dashboard-card">
                  <div className="dashboard-card__header">
                    <h3>Quick Actions</h3>
                  </div>
                  <div className="app-action-buttons" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button 
                      onClick={onAddStudent}
                      className="app-button app-button--primary"
                    >
                      <Plus size={20} />
                      Add New Student
                    </button>
                    <button className="app-button app-button--secondary" onClick={() => setShowScheduleModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
                      <Calendar size={18} /> Schedule Lesson
                    </button>
                    <button className="app-button app-button--secondary">Record Progress</button>
                  </div>
                </div>

                <div className="app-panel dashboard-card">
                  <div className="dashboard-card__header">
                    <h3>Recent Activity</h3>
                  </div>
                  <div className="activity-list">
                    {students.slice(0, 3).map(s => (
                      <div key={s.id} className="activity-item">
                        <strong>New student: {s.name}</strong>
                        <p>{s.level} • {s.subject}</p>
                      </div>
                    ))}
                    {students.length === 0 && <div className="app-empty">No recent activity.</div>}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="app-panel dashboard-card" style={{ gridColumn: 'span 2' }}>
              <div className="dashboard-card__header">
                <h3>My Learning Status</h3>
              </div>
              <div className="app-empty">
                Your personalized learning dashboard is being prepared. Stay tuned!
              </div>
            </div>
          )}
        </div>
      </motion.div>

      <AvatarPickerModal
        open={avatarOpen}
        title="My Persona"
        subtitle="Choose your face"
        initialStyle={profile?.avatarStyle || 'avataaars'}
        initialSeed={profile?.avatarSeed || (user?.email?.split('@')[0] ?? '')}
        onClose={() => setAvatarOpen(false)}
        onApply={async ({ avatarStyle, avatarSeed, avatarUrl: nextUrl }) => {
          if (!user?.uid) return;
          await setDoc(
            doc(db, 'users', user.uid),
            { avatarStyle, avatarSeed, avatarUrl: nextUrl, updatedAt: new Date().toISOString() },
            { merge: true },
          );
          setAvatarOpen(false);
        }}
      />

      {/* ── Schedule Lesson Modal ── */}
      <AnimatePresence>
        {showScheduleModal && (
          <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowScheduleModal(false)}
              style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(15,23,42,0.55)', backdropFilter: 'blur(4px)' }}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ position: 'relative', width: '100%', maxWidth: '460px', backgroundColor: '#fff', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,0.18)' }}
            >
              {/* Modal header */}
              <div style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', padding: '28px 32px', color: '#fff' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900 }}>Schedule Lesson</h3>
                    <p style={{ margin: 0, opacity: 0.85, fontSize: '0.9rem', fontWeight: 600 }}>Create a new session for a student</p>
                  </div>
                  <button onClick={() => setShowScheduleModal(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: '34px', height: '34px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}>
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Modal body */}
              <form onSubmit={handleCreateSession} style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>

                {/* Student selector */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Student</label>
                  <select
                    required
                    value={newSession.studentId}
                    onChange={e => {
                      const selected = students.find(s => s.id === e.target.value);
                      setNewSession({ ...newSession, studentId: e.target.value, studentName: selected?.name || '' });
                    }}
                    style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box', appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="">Select a student...</option>
                    {students.map(s => (
                      <option key={s.id} value={s.id}>{s.name} — {s.subject || ''} ({s.level || ''})</option>
                    ))}
                  </select>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Subject</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Mathematics"
                    value={newSession.subject}
                    onChange={e => setNewSession({ ...newSession, subject: e.target.value })}
                    style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Date */}
                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Date</label>
                  <input
                    required
                    type="date"
                    value={newSession.date}
                    onChange={e => setNewSession({ ...newSession, date: e.target.value })}
                    style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Start / End time */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Start Time</label>
                    <input
                      required
                      type="text"
                      placeholder="10:00 AM"
                      value={newSession.startTime}
                      onChange={e => setNewSession({ ...newSession, startTime: e.target.value })}
                      style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>End Time</label>
                    <input
                      required
                      type="text"
                      placeholder="11:30 AM"
                      value={newSession.endTime}
                      onChange={e => setNewSession({ ...newSession, endTime: e.target.value })}
                      style={{ width: '100%', backgroundColor: '#f8fafc', border: '2px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', fontSize: '0.95rem', color: '#334155', fontWeight: 600, outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ width: '100%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', color: '#fff', padding: '16px', borderRadius: '14px', border: 'none', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', marginTop: '4px', boxShadow: '0 4px 12px rgba(99,102,241,0.3)', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? 'Saving...' : 'Create Session'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Dashboard;
