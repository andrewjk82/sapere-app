import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Bell, Users, Clock, CheckCircle2, GraduationCap, LogOut } from 'lucide-react';
import StatCard from './StatCard';
import StudentRow from './StudentRow';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import AvatarPickerModal from './AvatarPickerModal';

const Dashboard = ({ students, onAddStudent, onSelectStudent }) => {
  const { user, isAdmin, logout } = useAuth();
  const [profile, setProfile] = useState(null);
  const [avatarOpen, setAvatarOpen] = useState(false);

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
                    marginTop: '20px', 
                    padding: '8px 18px', 
                    background: 'rgba(255,255,255,0.15)', 
                    backdropFilter: 'blur(12px)', 
                    borderRadius: '14px', 
                    display: 'inline-block', 
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                  }}>
                    <span style={{ 
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 800, 
                      fontSize: '0.95rem', 
                      color: 'white', 
                      letterSpacing: '0.05em',
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
                    <button className="app-button app-button--secondary">Schedule Lesson</button>
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
    </>
  );
};

export default Dashboard;
