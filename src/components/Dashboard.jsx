import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Bell, Users, Clock, CheckCircle2, GraduationCap, LogOut } from 'lucide-react';
import StatCard from './StatCard';
import StudentRow from './StudentRow';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import AvatarPickerModal from './AvatarPickerModal';

const Dashboard = ({ students, onAddStudent }) => {
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
    <div className="app-page">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="app-page__header"
      >
        <div className="app-page__greeting-container" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div className="app-avatar clickable-avatar" onClick={() => setAvatarOpen(true)} role="button" tabIndex={0} style={{ width: '54px', height: '54px' }}>
            <img src={avatarUrl} alt="Profile" />
          </div>
          <div className="app-page__title">
            <h2>{getGreeting()}, {userName}</h2>
            {isAdmin ? (
              <p>You have {totalStudents} students registered and ready for review.</p>
            ) : (
              <p>Ready to continue your learning journey today?</p>
            )}
          </div>
        </div>

        <div className="app-page__actions">
          <div className="app-page__actions-row" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
            <button className="app-icon-button" onClick={logout} title="Sign Out">
              <LogOut size={20} />
            </button>
          </div>
          <div className="app-input">
            <Search size={18} />
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </motion.header>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="app-page"
      >
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
                      <StudentRow key={student.id} {...student} />
                    ))
                  ) : (
                    <div className="app-empty">
                      No students added yet.
                    </div>
                  )}
                </div>
              </div>

              <div className="app-page">
                <div className="app-panel dashboard-card">
                  <div className="dashboard-card__header">
                    <h3>Quick Actions</h3>
                  </div>
                  <div className="app-page">
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
    </div>


  );
};

export default Dashboard;
