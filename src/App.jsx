import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import StudentDetail from './components/StudentDetail';
import Schedule from './components/Schedule';
import Curriculum from './components/Curriculum';
import Settings from './components/Settings';
import Login from './pages/Login';
import { useAuth } from './context/AuthContext';
import { db } from './firebase/config';
import { collection, onSnapshot, addDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

function App() {
  const { user, loading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: '', subject: '', level: 'Year 7' });
  const [newSession, setNewSession] = useState({
    studentName: '',
    subject: '',
    date: new Date().toISOString().split('T')[0],
    startTime: '10:00 AM',
    endTime: '11:30 AM'
  });

  useEffect(() => {
    if (!user) return;
    const unsubscribe = onSnapshot(collection(db, 'students'), (snapshot) => {
      const studentData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setStudents(studentData);
    });
    return () => unsubscribe();
  }, [user]);

  const handleAddStudent = async () => {
    if (!newStudent.name || !newStudent.subject) return;
    try {
      await addDoc(collection(db, 'students'), {
        ...newStudent,
        status: 'Active',
        lessons: 0,
        progress: 0,
        nextLesson: 'Not scheduled'
      });
      setIsModalOpen(false);
      setNewStudent({ name: '', subject: '', level: 'Year 7' });
    } catch (e) {
      console.error("Error adding student: ", e);
    }
  };

  const handleAddSession = async () => {
    if (!newSession.studentName || !newSession.subject) return;
    try {
      await addDoc(collection(db, 'sessions'), {
        ...newSession,
        studentId: 'all',
        isHomeworkCompleted: false,
        createdAt: new Date().toISOString()
      });
      setIsScheduleModalOpen(false);
    } catch (e) {
      console.error("Error adding session: ", e);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedStudentId(null);
  };

  const renderContent = () => {
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
            onScheduleLesson={() => setIsScheduleModalOpen(true)}
            onSelectStudent={(id) => setSelectedStudentId(id)}
            setActiveTab={handleTabChange}
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
        return <Dashboard students={students} setActiveTab={handleTabChange} />;
    }
  };

  if (authLoading) return <div className="app-loading"><div className="app-spinner"></div></div>;
  if (!user) return <Login />;

  return (
    <div className="app-shell">
      <Sidebar activeTab={activeTab} setActiveTab={handleTabChange} />
      <div className="app-shell__main">
        {renderContent()}
      </div>

      <AnimatePresence>
        {/* Add Student Modal */}
        {isModalOpen && (
          <div className="app-modal">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="app-modal__backdrop" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="app-panel app-modal__card">
              <h3>Add New Student</h3>
              <div className="app-form-grid">
                <div className="app-form-field"><label>Full Name</label><input type="text" value={newStudent.name} onChange={(e) => setNewStudent({...newStudent, name: e.target.value})} placeholder="e.g. John Doe" /></div>
                <div className="app-form-field"><label>Subject</label><input type="text" value={newStudent.subject} onChange={(e) => setNewStudent({...newStudent, subject: e.target.value})} placeholder="e.g. Mathematics" /></div>
                <div className="app-form-field">
                  <label>Level</label>
                  <select value={newStudent.level} onChange={(e) => setNewStudent({...newStudent, level: e.target.value})}>
                    {['Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12'].map(lvl => <option key={lvl} value={lvl}>{lvl}</option>)}
                  </select>
                </div>
                <button className="app-button app-button--primary" onClick={handleAddStudent}>Save Student</button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Schedule Lesson Modal */}
        {isScheduleModalOpen && (
          <div className="app-modal">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsScheduleModalOpen(false)} className="app-modal__backdrop" />
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="app-panel app-modal__card" style={{ maxWidth: '450px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3>Schedule New Lesson</h3>
                <button onClick={() => setIsScheduleModalOpen(false)} style={{ background: 'transparent', border: 0, cursor: 'pointer' }}><X size={20}/></button>
              </div>
              <div className="app-form-grid">
                <div className="app-form-field"><label>Student Name</label><input type="text" value={newSession.studentName} onChange={(e) => setNewSession({...newSession, studentName: e.target.value})} /></div>
                <div className="app-form-field"><label>Subject</label><input type="text" value={newSession.subject} onChange={(e) => setNewSession({...newSession, subject: e.target.value})} /></div>
                <div className="app-form-field"><label>Date</label><input type="date" value={newSession.date} onChange={(e) => setNewSession({...newSession, date: e.target.value})} /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div className="app-form-field"><label>Start Time</label><input type="text" placeholder="10:00 AM" value={newSession.startTime} onChange={(e) => setNewSession({...newSession, startTime: e.target.value})} /></div>
                  <div className="app-form-field"><label>End Time</label><input type="text" placeholder="11:30 AM" value={newSession.endTime} onChange={(e) => setNewSession({...newSession, endTime: e.target.value})} /></div>
                </div>
                <button className="app-button app-button--primary" onClick={handleAddSession}>Create Session</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
