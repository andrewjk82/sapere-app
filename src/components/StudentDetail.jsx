import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, Calendar, BookOpen, 
  MessageSquare, Trophy, 
  Mail, Phone, Check, Clock,
  Edit3, Save, Bell, X
} from 'lucide-react';
import { db } from '../firebase/config';
import { 
  doc, updateDoc, onSnapshot, collection, 
  addDoc, serverTimestamp, deleteDoc
} from 'firebase/firestore';
import { CURRICULUM_DATA } from '../constants/curriculumData';
import './student-detail.css';

const StudentDetail = ({ studentId, onBack }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('schedule');
  const [assignedChapters, setAssignedChapters] = useState([]);
  const [booking, setBooking] = useState(false);
  const [messageOpen, setMessageOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [dailyStats, setDailyStats] = useState([]);

  const [sessionForm, setSessionForm] = useState({
    date: new Date().toISOString().split('T')[0],
    focus: '',
    start: '04:00 pm',
    end: '05:00 pm',
    recurring: false
  });

  const [editForm, setEditForm] = useState({
    name: '', email: '', phone: '', level: '', subject: '',
    school: '', year: '', dreamJob: '', address: '',
    assignedYear: 'Year 11', assignedCourse: 'Advanced'
  });

  const styles = {
    card: { padding: '32px', borderRadius: '32px', background: 'white', border: '1px solid rgba(167, 139, 250, 0.15)', boxShadow: '0 20px 50px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' },
    backBtn: { width: '48px', height: '48px', borderRadius: '16px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white', color: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
    navBtn: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '20px', background: 'white', border: '2px solid rgba(167, 139, 250, 0.1)', borderRadius: '20px', color: '#64748b', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s ease' },
    navBtnActive: { borderColor: '#6366f1', color: '#6366f1', boxShadow: '0 10px 20px rgba(99, 102, 241, 0.1)' },
    visionBoard: { borderRadius: '24px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: '24px', color: 'white', overflow: 'hidden', flex: 1 }
  };

  useEffect(() => {
    if (!studentId) return;
    const unsub = onSnapshot(doc(db, 'users', studentId), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setStudent({ id: snap.id, source: 'users', ...data });
        setAssignedChapters(data.assignedChapters || []);
        setEditForm({
          name: data.name || data.firstName || '',
          email: data.email || '',
          phone: data.phone || '',
          level: data.level || data.year || '',
          subject: data.subject || data.school || '',
          assignedYear: data.assignedYear || data.level || data.year || 'Year 11',
          assignedCourse: data.assignedCourse || 'Advanced'
        });
        setLoading(false);
      } else {
        onSnapshot(doc(db, 'students', studentId), (mSnap) => {
          if (mSnap.exists()) {
            const mData = mSnap.data();
            setStudent({ id: mSnap.id, source: 'manual', ...mData });
            setAssignedChapters(mData.assignedChapters || []);
            setEditForm({
              name: mData.name || '', email: mData.email || '', phone: mData.phone || '',
              level: mData.level || mData.year || '', subject: mData.subject || mData.school || '',
              school: mData.school || '', year: mData.year || mData.level || '',
              dreamJob: mData.dreamJob || '', address: mData.address || '',
              assignedYear: mData.assignedYear || mData.level || mData.year || 'Year 11',
              assignedCourse: mData.assignedCourse || 'Advanced'
            });
          }
          setLoading(false);
        });
      }
    });
    return () => unsub();
  }, [studentId]);

  useEffect(() => {
    if (!studentId || !student?.id) return;
    const col = student.source === 'manual' ? 'students' : 'users';
    return onSnapshot(collection(db, col, studentId, 'daily_stats'), (snap) => {
      const stats = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      stats.sort((a, b) => (b.timestamp?.seconds || 0) - (a.timestamp?.seconds || 0));
      setDailyStats(stats);
    });
  }, [studentId, student?.source, student?.id]);

  const handleUpdateCurriculumSetting = async (f, v) => {
    try {
      const col = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, col, studentId), { [f]: v });
    } catch (e) { console.error(e); }
  };

  const handleToggleChapter = async (chapterId) => {
    const newChapters = assignedChapters.includes(chapterId)
      ? assignedChapters.filter(id => id !== chapterId)
      : [...assignedChapters, chapterId];
    setAssignedChapters(newChapters);
    try {
      const col = student.source === 'manual' ? 'students' : 'users';
      await updateDoc(doc(db, col, studentId), { assignedChapters: newChapters });
    } catch (e) { console.error(e); }
  };

  if (loading) return <div className="app-loading"><div className="app-spinner"></div></div>;
  if (!student) return <div className="app-empty">Student not found.</div>;

  const currentYear = student.assignedYear || student.level || student.year || 'Year 11';
  const currentCourse = student.assignedCourse || 'Advanced';
  let chapters = CURRICULUM_DATA[currentYear] || [];
  if (!Array.isArray(chapters)) chapters = chapters[currentCourse] || [];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'curriculum':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={styles.card} className="profile-card-mobile">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
              <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>ASSIGN CURRICULUM</div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', background: '#f8fafc', padding: '8px 16px', borderRadius: '20px', border: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#64748b' }}>YEAR:</span>
                  <select value={currentYear} onChange={e => handleUpdateCurriculumSetting('assignedYear', e.target.value)} style={{ background: 'transparent', border: 0, fontWeight: 800, color: '#6366f1', cursor: 'pointer', outline: 'none' }}>
                    {Object.keys(CURRICULUM_DATA).map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
              {chapters.map(ch => (
                <div key={ch.id} onClick={() => handleToggleChapter(ch.id)} style={{ padding: '16px 20px', borderRadius: '16px', border: '2px solid', borderColor: assignedChapters.includes(ch.id) ? '#6366f1' : '#f1f5f9', background: assignedChapters.includes(ch.id) ? '#f5f3ff' : 'white', display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer', transition: 'all 0.2s' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '6px', border: '2px solid', borderColor: assignedChapters.includes(ch.id) ? '#6366f1' : '#cbd5e1', background: assignedChapters.includes(ch.id) ? '#6366f1' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    {assignedChapters.includes(ch.id) && <Check size={14} />}
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1a1c2c' }}>{ch.title}</div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 600, color: '#94a3b8' }}>{ch.modules} modules</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'schedule':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={styles.card} className="profile-card-mobile">
            <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '20px', textTransform: 'uppercase' }}>BOOK NEW SESSION</div>
            <div className="form-grid-mobile">
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 700, fontSize: '0.8rem', color: '#64748b' }}>Date</label>
                <div className="app-input" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 16px', borderRadius: '14px', border: '1px solid rgba(167, 139, 250, 0.2)', background: 'white' }}>
                  <Calendar size={18} /><input type="date" value={sessionForm.date} onChange={e => setSessionForm({...sessionForm, date: e.target.value})} style={{ border: 0, padding: '14px 0', width: '100%', outline: 'none' }} />
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'challenge':
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} style={styles.card} className="profile-card-mobile">
            <div className="section-title" style={{ fontSize: '0.75rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.1em', marginBottom: '24px', textTransform: 'uppercase' }}>CHALLENGE HISTORY</div>
            {dailyStats.length === 0 ? (
              <div className="app-empty" style={{ padding: '40px 0' }}>No challenge history yet.</div>
            ) : (
              <div style={{ display: 'grid', gap: '12px' }}>
                {dailyStats.map(stat => (
                  <div key={stat.id} style={{ padding: '20px', borderRadius: '20px', border: '1px solid #f1f5f9', background: '#f8fafc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1', boxShadow: '0 4px 10px rgba(0,0,0,0.03)' }}>
                        <Trophy size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800, color: '#1e1b4b' }}>{stat.id} Challenge</div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b' }}>Score: {stat.score}/{stat.total} • Accuracy: {Math.round((stat.score/stat.total)*100)}%</div>
                      </div>
                    </div>
                    <button 
                      onClick={async () => {
                        if (!window.confirm("Reset challenge?")) return;
                        const col = student.source === 'manual' ? 'students' : 'users';
                        await deleteDoc(doc(db, col, studentId, 'daily_stats', stat.id));
                        alert("Reset complete.");
                      }}
                      style={{ padding: '8px 16px', borderRadius: '10px', background: '#fff1f2', color: '#f43f5e', border: 'none', fontWeight: 700, fontSize: '0.75rem', cursor: 'pointer' }}
                    >
                      Reset
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        );
      default: return null;
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="student-detail-container">
      <div style={styles.card} className="profile-card-mobile">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button style={styles.backBtn} onClick={onBack}><ChevronLeft size={24} /></button>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#1a1c2c', margin: 0 }}>{student.name || student.firstName || 'Student'}</h1>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="app-button app-button--secondary" style={{ borderRadius: '16px' }} onClick={() => setIsEditing(!isEditing)}>
              <Edit3 size={18} /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="nav-tabs-mobile" style={{ display: 'flex', gap: '12px', margin: '24px 0' }}>
        <button onClick={() => setActiveTab('schedule')} className={`tab-btn-mobile`} style={{ ...styles.navBtn, ...(activeTab === 'schedule' ? styles.navBtnActive : {}) }}><Calendar size={18} /> Schedule</button>
        <button onClick={() => setActiveTab('curriculum')} className={`tab-btn-mobile`} style={{ ...styles.navBtn, ...(activeTab === 'curriculum' ? styles.navBtnActive : {}) }}><BookOpen size={18} /> Curriculum</button>
        <button onClick={() => setActiveTab('challenge')} className={`tab-btn-mobile`} style={{ ...styles.navBtn, ...(activeTab === 'challenge' ? styles.navBtnActive : {}) }}><Trophy size={18} /> Challenge</button>
      </div>

      {renderTabContent()}
    </motion.div>
  );
};

export default StudentDetail;
