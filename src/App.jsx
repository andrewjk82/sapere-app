import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from './context/AuthContext';
import { studentService } from './services/studentService';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { LogOut, ShieldCheck, AlertCircle } from 'lucide-react';

function App() {
  const { user, isAdmin, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // New Student Form State
  const [newStudent, setNewStudent] = useState({
    name: '',
    subject: '',
    level: 'Year 10'
  });

  useEffect(() => {
    if (user) {
      setLoading(true);
      const unsubscribe = studentService.subscribeToStudents(user.uid, (data) => {
        setStudents(data);
        setLoading(false);
      });
      return () => unsubscribe();
    }
  }, [user]);

  const handleAddStudent = async () => {
    if (!newStudent.name || !newStudent.subject) return;
    
    try {
      await studentService.addStudent(user.uid, newStudent);
      setNewStudent({ name: '', subject: '', level: 'Year 10' });
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

  if (!user.emailVerified && user.providerData[0].providerId === 'password') {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-bg-deep">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card p-8 w-full max-w-md border-amber-500/20 text-center"
        >
          <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="text-amber-500" size={32} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Verify Your Email</h2>
          <p className="text-text-secondary mb-8">
            We've sent a verification email to <strong>{user.email}</strong>. 
            Please verify your email to access the platform.
          </p>
          <button onClick={logout} className="btn-secondary w-full">Sign Out & Try Again</button>
        </motion.div>
      </div>
    );
  }

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex-grow flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      );
    }

    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard students={students} onAddStudent={() => setIsModalOpen(true)} />;
      case 'Students':
        return <StudentList students={students} onAddStudent={() => setIsModalOpen(true)} />;
      default:
        return (
          <div className="flex-grow p-8 flex items-center justify-center text-text-secondary">
            {activeTab} section is under development.
          </div>
        );
    }
  };

  return (
    <div className="flex min-h-screen bg-bg-deep selection:bg-accent/30 text-text-primary">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-grow flex flex-col h-screen overflow-hidden">
        {renderContent()}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-bg-deep/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass-card p-8 w-full max-w-md border-accent/20"
            >
              <h3 className="text-2xl font-bold mb-6 font-heading">Add New Student</h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-xs text-text-secondary uppercase font-bold mb-1 block">Full Name</label>
                  <input 
                    type="text" 
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                    className="w-full bg-glass border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-accent text-text-primary transition-colors" 
                    placeholder="e.g. John Doe" 
                  />
                </div>
                <div>
                  <label className="text-xs text-text-secondary uppercase font-bold mb-1 block">Subject</label>
                  <input 
                    type="text" 
                    value={newStudent.subject}
                    onChange={(e) => setNewStudent({...newStudent, subject: e.target.value})}
                    className="w-full bg-glass border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-accent text-text-primary transition-colors" 
                    placeholder="e.g. Mathematics" 
                  />
                </div>
                <div>
                  <label className="text-xs text-text-secondary uppercase font-bold mb-1 block">Level</label>
                  <select 
                    value={newStudent.level}
                    onChange={(e) => setNewStudent({...newStudent, level: e.target.value})}
                    className="w-full bg-glass border border-glass-border rounded-xl py-3 px-4 focus:outline-none focus:border-accent text-text-primary transition-colors appearance-none cursor-pointer"
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
                  className="btn-primary w-full justify-center mt-4"
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
