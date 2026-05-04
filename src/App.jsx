import React, { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { useAuth } from './context/AuthContext';
import { useToast } from './context/ToastContext';
import { studentService } from './services/studentService';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import Schedule from './components/Schedule';
import Curriculum from './components/Curriculum';
import DailyChallenge from './components/DailyChallenge';
import Settings from './components/Settings';
import StudentDetail from './components/StudentDetail';
import ReportsAdmin from './components/ReportsAdmin';
import Library from './components/Library';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthLayout from './pages/AuthLayout';
import LeaderboardModal from './components/LeaderboardModal';
import { AlertCircle, ArrowRight, LogOut, Bell, Settings as SettingsIcon, ChevronLeft, ChevronRight, Trophy, Plus } from 'lucide-react';
import { db, requestNotificationPermission } from './firebase/config';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { CURRENT_APP_VERSION } from './constants/appVersion';
import './components/app-shell.css';
import './components/mobile-capsule.css';

function App() {
  const { user, isAdmin, logout } = useAuth();
  const { showToast } = useToast();
  const [newVersionAvailable, setNewVersionAvailable] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  
  // Real-time Version Check
  useEffect(() => {
    const versionRef = doc(db, 'system_config', 'app');
    return onSnapshot(versionRef, (snap) => {
      if (snap.exists()) {
        const cloudVersion = snap.data().version;
        // Temporarily disable strict version checking to prevent infinite update loops
        // if (cloudVersion && cloudVersion !== CURRENT_APP_VERSION) {
        //   setNewVersionAvailable(true);
        // }
      }
    });
  }, []);

  const handleUpdateApp = () => {
    // Robustly clear Service Worker cache and force fetch new version
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
          registration.unregister();
        }
      }).then(() => {
        // Append timestamp to break any remaining browser cache
        window.location.href = window.location.pathname + '?v=' + new Date().getTime();
      });
    } else {
      window.location.href = window.location.pathname + '?v=' + new Date().getTime();
    }
  };
  
  // Request notification permission on login
  useEffect(() => {
    if (user?.uid) {
      requestNotificationPermission(user.uid);
    }
  }, [user?.uid]);
  const hasPendingSignup = Boolean(sessionStorage.getItem('pendingSignupStep'));
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [isCapsuleExpanded, setIsCapsuleExpanded] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  
  // Scroll tracking for mobile capsule
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setIsVisible(false);
      // Auto-close open menus when scrolling away
      setIsCapsuleExpanded(false);
      setShowNotifs(false);
    } else {
      setIsVisible(true);
    }
  });

  // Only show mobile capsule on screens ≤1024px
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    subject: '',
    level: 'Year 10'
  });

  const [profile, setProfile] = useState(null);
  const [profileLoaded, setProfileLoaded] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showNotifs, setShowNotifs] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  // Real listener for notifications
  useEffect(() => {
    if (!user?.uid) return;
    const setupListener = async () => {
      const { collection, query, orderBy, limit } = await import('firebase/firestore');
      const q = query(
        collection(db, 'users', user.uid, 'notifications'),
        orderBy('timestamp', 'desc'),
        limit(10)
      );
      return onSnapshot(q, (snap) => {
        setNotifications(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      });
    };
    
    let unsubscribe;
    setupListener().then(unsub => { unsubscribe = unsub; });
    return () => unsubscribe && unsubscribe();
  }, [user?.uid]);

  const handleMarkAsRead = async () => {
    if (!user?.uid || unreadCount === 0) return;
    const { doc, writeBatch } = await import('firebase/firestore');
    const batch = writeBatch(db);
    notifications.filter(n => !n.read).forEach(n => {
      batch.update(doc(db, 'users', user.uid, 'notifications', n.id), { read: true });
    });
    await batch.commit();
  };

  useEffect(() => {
    if (!user?.uid) return undefined;
    const ref = doc(db, 'users', user.uid);
    return onSnapshot(ref, (snap) => {
      setProfile(snap.exists() ? snap.data() : null);
      setProfileLoaded(true);
    });
  }, [user?.uid]);

  const fallbackUrl = useMemo(() => {
    if (user?.photoURL) return user.photoURL;
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(user?.email || 'sapere')}`;
  }, [user?.photoURL, user?.email]);

  const avatarUrl = profile?.avatarUrl || (profile?.avatarStyle && profile?.avatarSeed
    ? `https://api.dicebear.com/7.x/${profile.avatarStyle}/svg?seed=${encodeURIComponent(profile.avatarSeed)}`
    : fallbackUrl);

  useEffect(() => {
    if (user) {
      setLoading(true);
      setLoadError('');
      const unsubscribe = studentService.subscribeToStudents(
        user.uid,
        (data) => {
          setStudents(data);
          setLoadError('');
          setLoading(false);
        },
        (err) => {
          setStudents([]);
          setLoading(false);
          setLoadError(
            'We couldn’t load your students. This usually means Firestore is disabled or your Firestore security rules are blocking reads.',
          );
          console.error(err);
        },
        isAdmin
      );
      return () => unsubscribe();
    }
  }, [user, isAdmin]);

  const handleAddStudent = async () => {
    if (!newStudent.name || !newStudent.subject || !newStudent.email) {
      showToast("Please fill in all fields including the student's email.", 'warning');
      return;
    }
    
    try {
      await studentService.addStudent(user.uid, newStudent);
      setNewStudent({ name: '', email: '', subject: '', level: 'Year 10' });
      setIsModalOpen(false);
    } catch (error) {
      showToast("Error adding student. Make sure Firestore is enabled.", 'error');
    }
  };

  if (!user) {
    return (
      <AnimatePresence mode="wait">
        {authMode === 'login' ? (
          <Login key="login" onToggleMode={() => setAuthMode('signup')} />
        ) : (
          <Signup key="signup" onToggleMode={() => setAuthMode('login')} />
        )}
      </AnimatePresence>
    );
  }

  if (hasPendingSignup || (profileLoaded && !profile && !isAdmin)) {
    return <Signup key="signup-pending" onToggleMode={() => setAuthMode('login')} />;
  }

  const isPasswordProvider = user?.providerData?.some((p) => p?.providerId === 'password');

  // Only block for email verification if the profile is ALREADY complete (not during signup)
  const isProfileComplete = profile && (profile.role === 'parent' || (profile.role === 'student' && profile.firstName));
  if (!user.emailVerified && isPasswordProvider && isProfileComplete) {
    return (
      <AuthLayout
        eyebrow="One last step"
        title="Verify your email"
        description={`We've sent a verification email to ${user.email}. Please confirm it to access the platform.`}
        sideLabel="Secure onboarding"
        sideTitle="A polished start for every family."
        sideDescription="Your account stays protected while keeping the setup flow calm, clean, and aligned with the Sapere look."
        sideStats={[
          { value: 'Secure', label: 'email confirmation' },
          { value: '1 min', label: 'to complete setup' },
        ]}
        sidePoints={[
          'Check your inbox and spam folder for the verification email',
          'Return after confirming to unlock the full platform',
          'Use the same email address you signed up with',
        ]}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="auth-verify-card"
        >
          <div className="auth-verify-card__icon">
            <AlertCircle size={30} />
          </div>
          <div className="auth-verify-card__copy">
            <h2>Email sent successfully</h2>
            <p>
              Verify <strong>{user.email}</strong> to continue into your account.
            </p>
          </div>
          <button onClick={logout} className="auth-submit">
            Sign out and try again
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </AuthLayout>
    );
  }

  const renderContent = () => {
    if (loading) {
      return (
        <div className="app-loading">
          <div className="app-spinner"></div>
        </div>
      );
    }

    if (loadError) {
      return (
        <div className="app-page">
          <div className="app-page__header">
            <div className="app-page__title">
              <h2>Something needs attention</h2>
              <p>{loadError}</p>
            </div>
          </div>
          <div className="app-panel page-card">
            <div className="app-empty">
              If you just enabled Firestore or updated rules, refresh the page.
            </div>
            <div style={{ marginTop: 12, display: 'grid', gap: 12 }}>
              <button className="app-button app-button--primary" onClick={() => window.location.reload()}>
                Refresh
              </button>
              <button className="app-button app-button--secondary" onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      );
    }

    if (selectedStudentId) {
      return (
        <StudentDetail 
          studentId={selectedStudentId} 
          onBack={() => setSelectedStudentId(null)} 
        />
      );
    }

    switch (activeTab) {
      case 'Dashboard':
        return (
          <Dashboard 
            students={students} 
            onAddStudent={() => setIsModalOpen(true)} 
            onSelectStudent={(id) => setSelectedStudentId(id)}
          />
        );
      case 'Students':
        return (
          <StudentList 
            students={students} 
            onAddStudent={() => setIsModalOpen(true)} 
            onSelectStudent={(id) => setSelectedStudentId(id)}
          />
        );
      case 'Schedule':
        return <Schedule />;
      case 'Challenge':
        return <DailyChallenge onBack={() => setActiveTab('Dashboard')} setIsLocked={setIsLocked} />;
      case 'Curriculum':
        return <Curriculum />;
      case 'Library':
        return <Library />;
      case 'Reports':
        return <ReportsAdmin />;
      case 'Settings':
        return <Settings />;
      default:
        return (
          <div className="app-placeholder">
            {activeTab} section is under development.
          </div>
        );
    }
  };

  const handleTabChange = (tab) => {
    if (isLocked) {
      showToast("Please finish your current challenge before switching tabs.", 'warning');
      return;
    }
    setActiveTab(tab);
    setSelectedStudentId(null);
  };

  return (
    <div className="app-shell">
      {!isMobileView && <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} isLocked={isLocked} />}
      <div className="app-shell__main">
        {renderContent()}
      </div>

      {/* ── Version Update Banner ── */}
      <AnimatePresence>
        {newVersionAvailable && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            style={{
              position: 'fixed',
              top: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 9999,
              backgroundColor: '#1e1b4b',
              color: '#fff',
              padding: '8px 24px',
              borderRadius: '100px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 0 0 100vw rgba(0,0,0,0.4), 0 20px 40px rgba(0,0,0,0.3)',
              border: '2px solid #6366f1',
              backdropFilter: 'blur(20px)',
              width: 'max-content',
              maxWidth: '90vw',
              animation: 'pulse 2s infinite'
            }}
          >
            <div style={{ width: '12px', height: '12px', backgroundColor: '#6366f1', borderRadius: '50%', boxShadow: '0 0 15px #6366f1' }} />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '1rem', fontWeight: 900, whiteSpace: 'nowrap' }}>Update Required</span>
              <span style={{ fontSize: '0.7rem', opacity: 0.8 }}>New features are ready for you.</span>
            </div>
            <button 
              onClick={handleUpdateApp}
              style={{
                backgroundColor: '#fff',
                color: '#6366f1',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '50px',
                fontSize: '0.9rem',
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              Update Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <div className="app-modal">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="app-modal__backdrop"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="app-panel app-modal__card"
            >
              <h3>Add New Student</h3>
              <div className="app-form-grid">
                <div className="app-form-field">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                    placeholder="e.g. John Doe" 
                  />
                </div>
                <div className="app-form-field">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                    placeholder="student@example.com" 
                  />
                </div>
                <div className="app-form-field">
                  <label>Subject</label>
                  <input 
                    type="text" 
                    value={newStudent.subject}
                    onChange={(e) => setNewStudent({...newStudent, subject: e.target.value})}
                    placeholder="e.g. Mathematics" 
                  />
                </div>
                <div className="app-form-field">
                  <label>Level</label>
                  <select 
                    value={newStudent.level}
                    onChange={(e) => setNewStudent({...newStudent, level: e.target.value})}
                  >
                    <option value="Year 7">Year 7</option>
                    <option value="Year 8">Year 8</option>
                    <option value="Year 9">Year 9</option>
                    <option value="Year 10">Year 10</option>
                    <option value="Year 11">Year 11</option>
                    <option value="Year 12">Year 12</option>
                  </select>
                </div>
                <button 
                  className="app-button app-button--primary"
                  onClick={handleAddStudent}
                >
                  Save Student
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <LeaderboardModal 
        open={showLeaderboard} 
        onClose={() => setShowLeaderboard(false)} 
        currentUserId={user?.uid} 
      />

      {isMobileView && createPortal(
        <>
          <motion.div 
            className="mobile-user-capsule"
            initial={{ y: 0, opacity: 1 }}
            animate={{ 
              y: (isVisible && !isLocked) ? 0 : -100,
              opacity: (isVisible && !isLocked) ? 1 : 0,
              width: isCapsuleExpanded ? 'auto' : '52px'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ 
              display: 'flex', 
              overflow: 'hidden',
              whiteSpace: 'nowrap'
            }}
          >
            <div 
              className="mobile-user-capsule__avatar" 
              onClick={() => {
                const nextState = !isCapsuleExpanded;
                setIsCapsuleExpanded(nextState);
                if (!nextState) setShowNotifs(false);
              }}
              style={{ cursor: 'pointer', flexShrink: 0 }}
            >
              <img src={avatarUrl} alt="Avatar" />
            </div>

            <AnimatePresence>
              {isCapsuleExpanded && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                  <div className="mobile-user-capsule__divider" />

                  <button 
                    className="mobile-user-capsule__notif" 
                    onClick={() => {
                      setShowLeaderboard(true);
                      setIsCapsuleExpanded(false);
                    }}
                  >
                    <Trophy size={20} />
                  </button>

                  <div className="mobile-user-capsule__divider" />

                  <button 
                    className="mobile-user-capsule__notif" 
                    onClick={() => {
                      if (isLocked) {
                        showToast("Please finish your current challenge before switching tabs.", 'warning');
                        return;
                      }
                      setActiveTab('Settings');
                      setIsCapsuleExpanded(false);
                    }}
                    style={{ opacity: isLocked ? 0.5 : 1, cursor: isLocked ? 'not-allowed' : 'pointer' }}
                  >
                    <SettingsIcon size={20} />
                  </button>
                  
                  <div className="mobile-user-capsule__divider" />
                  
                  <button 
                    className="mobile-user-capsule__notif" 
                    onClick={() => {
                      setShowNotifs(!showNotifs);
                      if (!showNotifs) handleMarkAsRead();
                    }}
                  >
                    <Bell size={20} />
                    {unreadCount > 0 && <div className="mobile-user-capsule__badge" />}
                  </button>

                  <div className="mobile-user-capsule__divider" />
                  
                  <button 
                    onClick={() => {
                      if (isLocked) {
                        showToast("Please finish your current challenge before logging out.", 'warning');
                        return;
                      }
                      logout();
                    }} 
                    className="mobile-user-capsule__logout"
                    style={{ opacity: isLocked ? 0.5 : 1, cursor: isLocked ? 'not-allowed' : 'pointer' }}
                  >
                    <LogOut size={20} />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="mobile-user-capsule__version"
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: (isVisible && !isLocked) ? 0 : -100,
              opacity: (isVisible && !isLocked) ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            v{CURRENT_APP_VERSION}
          </motion.div>

          <AnimatePresence>
            {showNotifs && (
              <>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowNotifs(false)}
                  style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 2147483645, // Just below the dropdown
                    background: 'transparent' // Invisible but clickable
                  }}
                />
                <motion.div 
                  className="notif-dropdown"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                >
                  <div className="notif-header">Notifications Center</div>
                  <div className="notif-list">
                    {notifications.length === 0 ? (
                      <div className="notif-empty">No messages yet</div>
                    ) : (
                      notifications.map(n => (
                        <div key={n.id} className={`notif-item ${!n.read ? 'notif-item--unread' : ''}`}>
                          <div className="notif-item__title">{n.title}</div>
                          <div className="notif-item__body">{n.body}</div>
                          <div className="notif-item__time">
                            {n.timestamp?.toDate ? n.timestamp.toDate().toLocaleString() : 'Just now'}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>,
        document.body
      )}
    </div>
  );
}

export default App;
