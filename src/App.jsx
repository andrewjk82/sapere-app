import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from './context/AuthContext';
import { studentService } from './services/studentService';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import Schedule from './components/Schedule';
import Curriculum from './components/Curriculum';
import Settings from './components/Settings';
import StudentDetail from './components/StudentDetail';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthLayout from './pages/AuthLayout';
import { AlertCircle, ArrowRight } from 'lucide-react';
import './components/app-shell.css';

function App() {
  const { user, isAdmin, logout } = useAuth();
  const hasPendingSignup = Boolean(sessionStorage.getItem('pendingSignupStep'));
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  
  // New Student Form State
  const [newStudent, setNewStudent] = useState({
    name: '',
    email: '',
    subject: '',
    level: 'Year 10'
  });

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
      alert("Please fill in all fields including the student's email.");
      return;
    }
    
    try {
      await studentService.addStudent(user.uid, newStudent);
      setNewStudent({ name: '', email: '', subject: '', level: 'Year 10' });
      setIsModalOpen(false);
    } catch (error) {
      alert("Error adding student. Make sure Firestore is enabled.");
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

  if (hasPendingSignup) {
    return <Signup key="signup-pending" onToggleMode={() => setAuthMode('login')} />;
  }

  const isPasswordProvider = user?.providerData?.some((p) => p?.providerId === 'password');

  if (!user.emailVerified && isPasswordProvider) {
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
      case 'Curriculum':
        return <Curriculum />;
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
    setActiveTab(tab);
    setSelectedStudentId(null);
  };

  return (
    <div className="app-shell">
      <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
      <div className="app-shell__main">
        {renderContent()}
      </div>

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
    </div>
  );
}

export default App;
